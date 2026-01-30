
te["call_session"] = { /*p:["","sipid(0,10)"],*/ c: 
[ 
	{ input:["g","","sbr","%0","radio"] }, // sipid js full
	{ li:["sbr xx y bt s","va"], ev:["_call_popup"], c:  
	[ 
		{ div:[], c: 
		[
			{ s:["c y micon","phone"] },
			{ s:["c l07 y",":v:activities:src_vector::vector:4"] }, 	// type
			{ s:["d x y","0:00"] },
			{ arg:["ts","",":v:activities:src_status"] }, 			// status-ts
			{ div:["e"] }
		]},	
		{ div:["l03"], c:
		[
			{ s:["c l15",":v:activities:src_address"] },
			{ s:["c x n g",":v:activities:src_vector::vector:5"] },
			{ s:["d x cr","..."] }, 								// status
			{ div:["e"] }
		]},
		{ p:["g"], uaudio:[null,"",""] },
		{ p:["","o"] } // this channel args from ami
	]} 
]};

// ------------------------------------------------------------------------

var CALLS = {};

var CALL_COUNT = 0;

var VOICEAPPS_UA =
{
	UA : null,
	REG : null,
	attemptingReconnection : false,
	uao : 
	{
		userAgentString: "VoiceApps UA (SIP.js)",
		displayName: null,
		uri: null,
		authorizationUsername: null, 
		authorizationPassword: '23kdefrtgos09812100',
		delegate: { onInvite: null },
	    	transportOptions: 
		{
			server : "wss://"+VA_SIP_HOST+"/ws/",
			//traceSip: true,
			//log: { level:"log" },
		},
		//log: { level:"log" },
	}
}

VOICEAPPS_UA.DetectDevices = function ()
{
    	if (!navigator.mediaDevices) { console.log ("phone.js: navigator.mediaDevices Failed!");  return; }
    	navigator.mediaDevices.enumerateDevices().then ( function (dev) 
    	{
        	// deviceInfos will not have a populated lable unless to accept the permission
        	// during getUserMedia. This normally happens at startup/setup
        	// so from then on these devices will be with lables.
        	for (var i = 0; i<dev.length; i++) 
		{
			console.log ("phone.js: DEVICES Type: "+dev[i].kind+" "+JSON.stringify (dev[i]))
        	}
    	}).catch(function (e)
    	{
        	console.error("phone.js: Error enumerating devices", e);
    	});
}

VOICEAPPS_UA.connect = function (exten)
{
	VOICEAPPS_UA.uao.cid_num = exten; 
	VOICEAPPS_UA.uao.cid_name = exten; 
	VOICEAPPS_UA.uao.displayName = exten; 
	VOICEAPPS_UA.uao.uri =  SIP.UserAgent.makeURI ("sip:"+VA_SIP_USER_PREFIX+exten+"@"+VA_SIP_HOST);
	VOICEAPPS_UA.uao.authorizationUsername = VA_SIP_USER_PREFIX+exten;
	VOICEAPPS_UA.uao.authorizationPassword = VA_SIP_PASS_PREFIX+exten;
	if (VA_SIP_PASS_PREFIX=="23kdefrtgos09812100") VOICEAPPS_UA.uao.authorizationPassword = "23kdefrtgos09812100";
	VOICEAPPS_UA.uao.delegate.onConnect = VOICEAPPS_UA.on_connect;
	VOICEAPPS_UA.uao.delegate.onDisconnect = VOICEAPPS_UA.on_disconnect;
	VOICEAPPS_UA.uao.delegate.onInvite = VOICEAPPS_UA.on_invite;
	VOICEAPPS_UA.uao.delegate.onMessage = VOICEAPPS_UA.on_msg;
	VOICEAPPS_UA.uao.delegate.onNotify = VOICEAPPS_UA.on_notify;
	VOICEAPPS_UA.UA = new SIP.UserAgent (VOICEAPPS_UA.uao);  // UserAgent
	VOICEAPPS_UA.REG = new SIP.Registerer (VOICEAPPS_UA.UA, {});
	VOICEAPPS_UA.UA.start()
	.catch((error) =>
	{
		console.log ("phone.js: [UA start failed] "+error);
	 	VOICEAPPS_UA.re_connect (["xx y gp cr","Cannot connect to server. Check if server is online."])
        });
}

VOICEAPPS_UA.disconnect = function ()
{
	if (VOICEAPPS_UA.REG) VOICEAPPS_UA.REG.unregister();
}

VOICEAPPS_UA.re_connect = function (nbr, t=1)
{
	var p = document.getElementById ("phone_status"); // show error
	p.innerHTML = "";
	nd (p, te["nb"], [], nbr, [0])

	if (t!=1) return;

	// Reconnection attempt already in progress
	if (VOICEAPPS_UA.attemptingReconnection) { return; }
    
	// We're attempting a reconnection
	VOICEAPPS_UA.attemptingReconnection = true;
	setTimeout(() => 
	{  
		VOICEAPPS_UA.re_connect (["xx y gp cr","Retrying ..."])
      
		VOICEAPPS_UA.UA.reconnect().then(() => 
		{
			console.log ("phone.js: [UA.reconnect successful] "+VOICEAPPS_UA.uao.displayName);
			// Reconnect attempt succeeded
			VOICEAPPS_UA.attemptingReconnection = false;
			VOICEAPPS_UA.re_connect (["xx y",("Extension "+VOICEAPPS_UA.uao.displayName)], 0)
           	})
           	.catch ((error) => 
		{
			console.log ("phone.js: [UA.reconnect failed] "+error);
			// Reconnect attempt failed
			VOICEAPPS_UA.attemptingReconnection = false;
			VOICEAPPS_UA.re_connect (["xx y gp cr","Reconnect Failed. Retrying in 3sec"])
           	});
	}, 3000);

}

VOICEAPPS_UA.on_connect = function ()
{
	console.log ("phone.js: [send registeration] "+ JSON.stringify (VOICEAPPS_UA.uao));
	VOICEAPPS_UA.REG.register()
	.then (() =>
	{
		VOICEAPPS_UA.re_connect (["xx y cd ",("Extension "+VOICEAPPS_UA.uao.displayName)], 0);
	})
	.catch ((error) => 
	{
		console.log ("phone.js: [Registration Failed] "+error)
	 	VOICEAPPS_UA.re_connect (["xx y gp cr",e], 0)
		return;
	})
}

VOICEAPPS_UA.on_disconnect = function (e)
{
	console.log ("phone.js: [disconnected] "+JSON.stringify (e))
	VOICEAPPS_UA.REG.unregister()
	.catch((error) =>
	{
              console.log ("phone.js: [Unregister Error] "+error);
        });

	// Only attempt to reconnect if network/server dropped the connection (if there is an error)
	//if (e) 
	{
	    	 VOICEAPPS_UA.re_connect (["xx y gp cr","Disconnected"])
  	}
}

VOICEAPPS_UA.vs_cleanup = function () 
{
	var k = Object.keys (CALLS);
	for (var i=0; i<k.length; i++)
	{
		if (CALLS[k[i]].hangup_ts>0) delete CALLS[k[i]];
	}
	CALL_COUNT = Object.keys (CALLS).length;
}

VOICEAPPS_UA.endcall = function (session, leg) 
{
	switch (session.state) 
	{
	case SIP.SessionState.Initial:
	case SIP.SessionState.Establishing:
		if (leg==1) //session instanceOf SIP.Inviter) 
		{
			session.cancel(); // outgoing session
		} else {
			session.reject();  // incoming session
		}
		break;

    	case SIP.SessionState.Established:
		session.bye();
		break;

	case SIP.SessionState.Terminating:
	case SIP.SessionState.Terminated:
      		break;
   	} 
}

VOICEAPPS_UA.btnholdstate = function (vs, hold) 
{
	var pvw = document.getElementById ("vv").childNodes[6].childNodes[0].childNodes[1]; 	
	var el_ = _(pvw.firstChild, "chanholdstate", "input");
	if (el_) el_.checked = vs.ishold;
}

VOICEAPPS_UA.sethold = function (vs, hold) 
{
	const sessionDescriptionHandlerOptions = vs.session.sessionDescriptionHandlerOptionsReInvite;
	sessionDescriptionHandlerOptions.hold = hold;
	vs.session.sessionDescriptionHandlerOptionsReInvite = sessionDescriptionHandlerOptions;
	// Send re-INVITE
	return vs.session.invite (vs.options).then (() => 
	{
		var pc = vs.session.sessionDescriptionHandler.peerConnection;
		pc.getSenders().forEach ((stream) => 
		{
			stream.track.enabled = !hold;
			console.log ("phone.js: Sender Track Status:"+hold+","+stream.track.enabled)
		});
		vs.ishold = hold;
		vs.ishold_ts = Date.now ()/1000;
		VOICEAPPS_UA.btnholdstate (vs)
		// call_popup_hold_state (vs.el, hold); // update hold state in toolbar
		// call_popup_upd (vs.el.childNodes[1].lastChild.firstChild); 
	})
	.catch((error) => 
	{
		console.error ("phone.js: hold errror: "+error);
	});
}

VOICEAPPS_UA.on_msg = function (e)
{
	console.log ("phone.js: MSG: "+JSON.stringify (e))
}

VOICEAPPS_UA.on_notify = function (e)
{
	console.log ("phone.js: NOTIFY: "+JSON.stringify (e))
}

VOICEAPPS_UA.on_invite = function (session) 
{
	VOICEAPPS_UA.vs_cleanup ();
	var dn = session.remoteIdentity.displayName;	
	var vs = new VOICEAPPS_SESSION (dn=="Autodial"?1:2);
	vs.session = session;
	vs.handleSessionState ();
	CALLS[vs.ssid.substr (0,20)] = vs ;
	
	console.log ("phone.js: INVITE received "+ dn+" | "+vs.ssid) // JSON.stringify (session.remoteIdentity)+"|"+
		
	if (dn=="Autodial" || dn=="AgentLogin" || dn=="Supervisor")
	{
		session.accept ();
	}
}

VOICEAPPS_UA.dial = function (dial_str)
{
    	VOICEAPPS_UA.vs_cleanup ();
	// TODO: check state of UA

	var target = SIP.UserAgent.makeURI (("sip:"+dial_str+"@"+VA_SIP_HOST));   
	if (!target) 
	{
		console.error ("phone.js: dial failed: makeURI failed.");
		return;
    	}
			
	var vs = new VOICEAPPS_SESSION (1);
	vs.session = new SIP.Inviter (this.UA, target, { sessionDescriptionHandlerOptions: { constraints: { audio: true, video: false } } } );
    	vs.handleSessionState ();

	console.log ("phone.js: dial  | "+ vs.ssid); // INVITE sent
    	    	
	CALLS[vs.ssid.substr (0,20)] = vs;
	vs.session.invite().then (function () 
	{
		console.log ("phone.js: INVITE sent | "+vs.ssid); // INVITE sent
	})["catch"](function (error) 
	{
		console.error ("phone.js: INVITE send failed "+error+" | "+vs.ssid);
		// INVITE did not send
	});
}

// ------------------------------------------------------------------------

function VOICEAPPS_SESSION (_leg)
{
	this.session = null;
	this.leg = _leg;
	this.remoteStream = null;
	this.mediaElement = null;
	this.el = null;
	this.ssid = null;
	this.ishold = false;
	this.ishold_ts = 0;
	this.hangup_ts = 0;

	const options = {
            requestDelegate: {
                onAccept: () => {
			console.log ("phone.js: Hold accepted");
                   // this.held = hold;
                   // this.enableReceiverTracks(!this.held);
                   // this.enableSenderTracks(!this.held && !this.muted);
                   // if (this.delegate && this.delegate.onCallHold) {
                   //     this.delegate.onCallHold(this.held);
                   // }
                },
                onReject: () => {
			console.log ("phone.js: Hold rejected");
                   // this.logger.warn(`[${this.id}] re-invite request was rejected`);
                   // this.enableReceiverTracks(!this.held);
                   // this.enableSenderTracks(!this.held && !this.muted);
                   // if (this.delegate && this.delegate.onCallHold) {
                   //     this.delegate.onCallHold(this.held);
                   // }
                }
            }
        };

	this.handleSessionState = function () 
	{
		var cur_state = 0;	
		this.ssid = this.session.id;

		var k = re["activities_k"]
		var r = re["r_"][0].slice(0);
		r[0] = this.ssid;
		r[k["src_address"][0]] = this.session.remoteIdentity.uri.user;
		r[k["src_usr"][0]] = VOICEAPPS_UA.uao.cid_num;
		r[k["src_vector"][0]] = this.leg;
		r[k["src_ts"][0]] = ""+((Date.now ()/1000)-ra_ts);
		r[k["src_callid"][0]] = this.ssid.substr (0,20);
		if (this.session.remoteIdentity.displayName) r[k["src_address"][0]] = this.session.remoteIdentity.displayName;

		var p = document.getElementById ("call_sessions");
		var el_ = document.createElement ("P"); 
		el_.id = this.ssid.substr (0,20);
		p.insertBefore (el_, p.firstChild);
		var el = nd (el_, te["call_session"], [(this.leg==1?"/helpline/images/dialtone.wav":"/helpline/images/earlymedia.mp3")], r, [1]);
		el = el.parentNode.parentNode;
		this.el = el;
		var coll = el.childNodes[1].childNodes;

		this.mediaElement = coll[2].firstChild;
		this.mediaElement.volume = 0.3;
		this.mediaElement.play ();
		this.mediaElement.loop = true;

		var me = this;

		this.session.delegate = { onCallHold: function (h) { console.log ("phone.js: [OnCallHold] "); } };

		this.session.stateChange.addListener (function (new_state)
		{
			console.log ("phone.js: state:"+new_state+" | "+me.ssid);

			// todo: update vw bts state here not in ami

			var state = cur_state;

			switch (new_state) 
			{
			case SIP.SessionState.Initial:
				state = 1;
				break;
	
			case SIP.SessionState.Establishing:
				state = 2;
				break;
	
			case SIP.SessionState.Established:
				state = 3;
				me.mediaElement.volume = 1;
				var remoteStream = new MediaStream ();
				me.session.sessionDescriptionHandler.peerConnection.getReceivers().forEach (function (receiver) 
				{
					if (receiver.track) 
					{
						// console.log (" + add track "+remoteStream + " " + mediaElement)
						remoteStream.addTrack (receiver.track);
	        			}
				});
				me.mediaElement.loop = false;
				me.mediaElement.srcObject = remoteStream;
				me.mediaElement.play ();
				break;
	
			case SIP.SessionState.Terminating:
				state = 4;
	
			case SIP.SessionState.Terminated:
				state = 5;
				me.mediaElement.srcObject = null;
				me.mediaElement.pause();
				p.removeChild (el);
				el=null;
				break;
	
			default:
				break;
			}

			if (cur_state != state) // update ts
			{
				coll[0].childNodes[2].innerHTML = "0:00";
				coll[0].childNodes[3].value = ""+(Date.now ()/1000)-ra_ts;
			}

			if (state<3) // update ring tone
			{
				me.mediaElement.src = "/helpline/images/earlymedia.mp3";
				me.mediaElement.play ();
				me.mediaElement.loop = true;
			}

			cur_state = state;
		});
	}
}

// ------------------------------------------------------------------------

function ami_action (el, o, action)
{
	var u = el.id.split ("-")
	o.action = action;
	url (__(el), u[0], u[1], "", null, 2, o, "POST");
}

function _kickout (ev)
{
	var o = {};
	ami_action (this, o, "6");	
	// boo (ev)
}

function _add_action (ev)
{
	var u = this.id.split ("-");
	var p = __(this,"ve")
	var el = _(document.getElementById ("call_sessions"), __(p,"vddvw").childNodes[1].id);
	var o = {}
	jso (p, o);
	argv (el, o);	
	ami_action (this, o, u[2]);	
	boo (ev);
}

function _add_dial (ev) 
{
	var u = this.id.split ("-"); // todo: inv
	var p = __(this,"ve")
	var el = _(document.getElementById ("call_sessions"), p.parentNode.id);
	var o = {}
	if (el==null) 
	{
		this.parentNode.nextSibling.innerHTML = "<div class='x y'><div class='x08 y gp cr'>Call has already ended</div></div>";
		return;
	}
	jso (p, o);  
	argv (el, o);
	// if (o.cbid.length>0) o.chan2=""; // unset chan2 to remove it from unnecesary redirect
	ami_action (this, o, "2");	
}

function _add_dial_form ()
{
	var p = document.getElementById ("vp");
	var u = this.id.split ("-");
	var o = {};
	var r_ = ra[u[1]][0].slice (0)
	var el = null;
	argv (__(this,"vfvw").firstChild.lastChild, o)	
	el = _(document.getElementById ("call_sessions"), o.src_uid);
	argv (__(el,"va"), o);
	console.log ("phone.js: [_add_dial_form] "+JSON.stringify (o))
	r_[AMI.CHAN_UNIQUEID] = o.src_uid;
	vp (p);
	nd (p, te[u[0]], [], r_, [0]);
	ldami (re["channels"]);
}

function _hangup (ev)
{
	var o = {};
	argv (__(this,"vf").firstChild.lastChild, o);
	var vs = CALLS[o["src_callid"].substr(0,20)]
	VOICEAPPS_UA.endcall (vs.session, vs.leg);
	boo (ev);
}

function _hold (ev)
{
	var o = {};
	argv (__(this,"vf").firstChild.lastChild, o)
	var vs = CALLS[o["src_callid"].substr(0,20)]
	VOICEAPPS_UA.sethold (vs, !vs.ishold);
	boo (ev);
}

function _answer (ev)
{
	var o = {};
	argv (__(this,"vf").firstChild.lastChild, o)
	var vs = CALLS[o["src_callid"].substr(0,20)]
	vs.session.accept ({ sessionDescriptionHandlerOptions: { constraints: { audio: true, video: false } } });
	boo (ev);
}

function _dial (ev)
{
	VOICEAPPS_UA.dial (this.previousSibling.firstChild.value);
	boo (ev);
}

