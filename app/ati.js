var chan_t = {};

var ATI_COUNT = 0;

var ATI = 
{
	"CHAN_TS":1,
	"CHAN_UNIQUEID":2,
	"CHAN_CHAN":3,
	"CHAN_CALLERID_NUM":4,
	"CHAN_CALLERID_NAME":5,
	"CHAN_CONTEXT":6,	
	"CHAN_EXTEN":7,
	"CHAN_ACTION_ID":8,

	"CHAN_STATE_ORIG":9,	
	"CHAN_STATE_DOWN":10, 
	"CHAN_STATE_DIAL":11, 	
	"CHAN_STATE_RING":12,	
	"CHAN_STATE_UP":13,
	"CHAN_STATE_QUEUE":14, 	
	"CHAN_STATE_CONNECT":15, 	
	"CHAN_STATE_HANGUP":16,
	"CHAN_STATE_MUTE":17,
	"CHAN_STATE_HOLD":18,
	"CHAN_HOLD_TIME":19,
		 	
	"CHAN_BRIDGE_ID":20,
	"CHAN_BRIDGE_COUNT":21,
	"CHAN_UNREAD":22,
	"CHAN_HANGUP":23,

	"CHAN_UID_2":24,
	"CHAN_CID_2":25,

	"CHAN_SRC":26,
	"CHAN_MSG":27,
	"CHAN_BREAK_REASON":28,
	"CHAN_VECTOR":29,

	"CHAN_STATUS_":31,
	"CHAN_STATUS_TXT_":32,
	"CHAN_STATUS_TS_":33,
	"CHAN_STATUS_TS_TXT_":34
};

re["atis"] = {};

te["ati_session"] = { p:["","%2"], c: 
[
	{ input:["g","","sbr","%2","radio"] },
	{ li:["sbr xx y bt s","va"], ev:["_ati_popup"], c: 
	[ 
		{ div:[], c: 
		[
			{ s:["c t03 micon","chat"] },
			{ s:["c l07 t03","::case_src:26:1"] },  	// src
			{ s:["d t03",""] },		// status-ts-txt
			{ arg:["ts","",""] },		// status-ts
			{ div:["e"] }
		]},			
		{ div:["l03"], c:
		[
			{ s:["c l15 t03","%25"] },		// src_address
			//{ s:["c x y w21 h01_",""] },					// last msg
			{ div:["d "], s:["x07 y02 bd16 gr cw s","0"] },	// unread count
			{ div:["e"] }
		]},
		{ p:["g"], uaudio:["/helpline/images/new_msg.ogg","",""] },
		{ p:["","o"], c:
		[ 
			{ arg:["","src","%26"] }, 
			{ arg:["","src_uid","%2"] }, 
			{ arg:["","src_uid2","%24"] },
			{ arg:["","src_callid","%20"] },
			{ arg:["","src_address","%25"] }, 
			{ arg:["","src_usr","%4"] }, 
			{ arg:["","src_vector","%29"] },  
			{ arg:["","src_ts","%1"] }
		]} 
	]}
]};

te["ati_ended"] = { s:["t cd tc","Chat Closed"] };

te["ati_toolbar"] = { c:
[
	{ div:["w21 ma t03 mtn1"], s:["w21 t20 abs",""], c:
	[
		{ div:["c w10 ba_b bdl"], c:
		[
			{ input:["g","","ati_vw_id_t","0","radio"] },
			{ ac:["ao tab","","_ati_tab","y cb tc s","Contact History"] }
		]},
		{ div:["c w10 bt_b bb_b br_b bdr"], c:
		[
			{ input:["g","","ati_vw_id_t","2","radio","1"] },
			{ ac:["ao tab","","_ati_tab","y cb tc s","Chat"] }
		]},
		{ div:["e"] }
	]},

	{ div:[], c:
	[
		{ div:["d w08 t01"], s:["abs w08 bd8 t20 b10 gw zzzzz",""], c:
		[
			{ input:["g","","sbl","0","radio"] },
			{ ac:["ay t01 r15 w03 ma","","_activity_close","cb bd y01",""], c:
			[
				{ s:["tc h b","&Cross;"] },
				// { s:["d x y s","Close"] },
				{ div:["e"] }
			]}
		]},

		{ div:["d w10 t01 mr6"], s:["abs w10 t20 gw zzzz",""], c:
		[
			{ div:["","ve"], c:
			[
				{ ac:["ay btn w09 t","","_ati_end","bd8 cb",""], c: 
				[
					{ s:["c x t cb s","End Chat"] },
					{ s:["c w03 h cb tc micon","last_page"] },
					{ div:["e"] }
				]}
			]}
		]}, 

		{ div:["d w06 t01"], s:["abs w06 h03 gw t15 zzzz",""] },
		{ div:["d w06 t01"], s:["abs w06 h03 gw t15 zzzz",""] },
		{ div:["d w06 t01"], s:["abs w06 h03 gw t15 zzzz",""] },

		{ div:["e"] }
	]}
]};

te["ati_available"] = { div:[], s:["xx y cd","Text Queues On"] };

// ---------------------------------------------------------------------

function _ati_end ()
{
	var p = __(this,"vb").lastChild;
	var o = {"close":"close", "src_msg":"*closed*"};
	argv (p, o);
	url (this.parentNode, "ati_end", "messages", "", null, 2, o, "POST");
}

function _ati_tab ()
{
	var coll = __(this,"vb").parentNode.lastChild.childNodes;
	//if (this.previousSibling.value==2)
	//{
	//	var i_ = 0;
	//	for (var i=0; i<2; i++) if (coll[i].firstChild.checked==true) { i_=i; break; }
	//	this.parentNode.nextSibling.firstChild.value = i_; 
	//}
	this.previousSibling.checked = true;
	coll[this.previousSibling.value].firstChild.checked = true;
}

function ati_agtk_vw (ch, p)
{
	var p = _(p, "msgs")
	if (!p || !p.previousSibling) return; 
	url (p.previousSibling, "activity_messages", "messages", ("?src="+ch[CHAN_EXTEN]+"&src_callid="+ch[CHAN_BRIDGE_ID]+"&_c=30"));
}

function ati_agtk (el,ch,pv)
{
	var coll = el.childNodes[1].childNodes
	var unnotified = 1; // (ch[CHAN_UNREAD]*1) - (coll[0].childNodes[4].innerHTML*1)
	coll[0].childNodes[2].innerHTML = ch[ATI.CHAN_CID_2];
	var el_ = coll[0].childNodes[3];
	el_.innerHTML = ch[ATI.CHAN_STATUS_TXT_];
	el_.className = "d x y02 gr cw bd mt";
	el_ = coll[1].childNodes[1];
	el_.id = "ts";
	el_.value = ch[ATI.CHAN_STATUS_TS_];
	el_.previousSibling.innerHTML = ch[ATI.CHAN_STATUS_TS_TXT_];
	// coll[0].childNodes[4].innerHTML = ch[CHAN_UNREAD];	// todo: msg count
	// coll[0].childNodes[4].style.display = (ch[CHAN_UNREAD]*1)>0?"block":"none";

	if (!pv) return;									// happens when loading main - sidepanel loads before vw
	var f = pv.childNodes.length;
	var a = {};
	if (pv.firstChild && pv.firstChild.lastChild) 			// vw is occupied
	{
		argv (pv.firstChild.lastChild, a)
	}

	// if (f>0 && no form && no popup and wrapup ended)		// todo: auto-close 

	if (f==0 && !chan_t[ch[2]].vw && !chan_t[ch[2]].src_end_ts) // auto-popup 
	{
		if (ch[ATI.CHAN_UID_2].length<1) return; 		// wait for src_uid2 -> activity args are not updated in realtime 
		chan_t[ch[2]].vw = Date.now();
		var pcoll = document.getElementById ("vv").childNodes
		pcoll[3].childNodes[1].firstChild.checked = true;
		pcoll[6].childNodes[1].firstChild.checked = true;	
		el.firstChild.checked = true;	
		pv.previousSibling.checked = true;
		url (pv, "activity_vw_id_call", "activities", coll[2].firstChild.value);
		return;
	}

	if (f>0 && a.src && a.src_uid && a.src==ch[ATI.CHAN_SRC] && a.src_callid==ch[ATI.CHAN_BRIDGE_ID]) // update vw
	{
		// todo: update args if same session but diff agtk
		if (unnotified>0) ati_agtk_vw (ch, pv.childNodes[1].childNodes[2].childNodes[1])
	}
}

function atis_pop (ts)
{
	var pu = document.getElementById ("vt_activity");
	var pv = document.getElementById ("vv").childNodes[6].childNodes[1].childNodes[1].childNodes[1].childNodes[1]; 
	var k = Object.keys (chan_t);
	for (var i=0; i<k.length; i++)  			// remove closed, hangup channels
	{
		var id = k[i];
		if (chan_t[id].ts==ts) continue;
		console.log  ("[ati] pop "+id+" "+chan_t[id].ts+","+ts+" | "+chan_t[id].el)
		let el = _(pu,id)
		let o = chan_t[id];
		let ch = [];
		ch[ATI.CHAN_UNIQUEID] = id;
		ch[ATI.CHAN_CID_2] = o["src_address"];
		ch[ATI.CHAN_STATE_HANGUP] = ts;
		chan_status ("ati_agtk", ch);
		o["src_status"] 		= o["status"]+"-"+o["src_vector"]+"-"; // orig
		o["src_status_ts"] 		= ""+o["status_ts"];
		o["src_status_duration"]	= ""+((ts*1)-(o["src_status_ts"]*1));
		o["src_end_ts"] 		= ""+ts;
		o["src_duration"] 		= ""+((ts*1)-(o["src_ts"]*1));
		o["action"] 			= "complete";
		if (el) ati_agtk (el, ch, pv);
		url (pu, "activity_new", "activities", "", null, 0, o, "POST");
		delete chan_t[id];
	}
}

function atis (o,k,ts)
{
	var user_cid = document.getElementById ("user_cid").value;
	var pcoll = document.getElementById ("vv").childNodes;
	var pu = document.getElementById ("vt_activity");
	var pv = pcoll[6].childNodes[1].childNodes[1].childNodes[1].childNodes[1]; 
	var c = [0,0,0,0,0,0,0];
	var unread_tot = 0;
	var ch_agent = null;

	for (var i=k.length-1; i>-1; i--)
	{
		var ch = o[k[i]];
		
		if (ch[ATI.CHAN_STATE_HANGUP].length>0) continue; 			// skip hangup'ed channels
		
		if (ch[0].length>0) 		 							// agent session chan
		{
			c[0]++; 
			if (user_cid.length>0 && user_cid==ch[0]) ch_agent = ch;
			//chani ("chan_agent", pa, ch, ts); 
			continue;
		}

		if (ch[ATI.CHAN_CONTEXT]=="agtk" && ch[ATI.CHAN_CALLERID_NUM]==user_cid)
		{
			chan_status ("ati_agtk",ch);
			if (re["case_src"][ch[ATI.CHAN_SRC]][11]=="phone") ch[ATI.CHAN_CID_2] = _phone_fmt (ch[ATI.CHAN_CID_2]);
			if (chan_t[ch[2]]===undefined) 
			{
				chan_t[ch[2]] = 
				{
					"src":ch[ATI.CHAN_SRC], 
					"src_uid":ch[ATI.CHAN_UNIQUEID], 
					"src_callid":ch[ATI.CHAN_SIPCALLID], 
					"src_usr":ch[ATI.CHAN_CALLERID_NUM], 
					"src_address":ch[ATI.CHAN_CID_2], 
					"src_ts":ch[ATI.CHAN_TS], 
					"src_vector": (ch[ATI.CHAN_EXTEN]=="s" ? "2" : "1"),   // NB orig also has exten=s
					"action":"notify"
				}
				url (pu, "activity_new", "activities", "", null, 0, chan_t[ch[2]], "POST");
			}
			chan_t[ch[2]]["ts"] 		= ts;
			chan_t[ch[2]]["status"] 		= ch[ATI.CHAN_STATUS_];
			chan_t[ch[2]]["status_txt"] 	= ch[ATI.CHAN_STATUS_TXT_];
			chan_t[ch[2]]["status_ts"] 	= ch[ATI.CHAN_STATUS_TS_];
			var el = _(pu, ch[2]); 									// find matching notification
			if (el) ati_agtk (el, ch, pv); 
		}

		if (ch[ATI.CHAN_SRC]=="notify" && ch[ATI.CHAN_CONTEXT]=="trunk" && ch[ATI.CHAN_EXTEN]==user_cid)
		{
			var coll = pcoll[2].firstChild.firstChild.childNodes[0].childNodes; 		// reload notifications
			var a = {};
			argv (coll[1].childNodes[2].childNodes[1], a);						// retrieve clicked/loaded record
			re["activities_chk"] = { "src_uid": {} };
			if (a.sbr) re["activities_chk"]["src_uid"][a.sbr] = 1;
			a = {args:"?"}
			argv (coll[1].childNodes[2].firstChild, a);
			console.error (a);
			url (coll[1], "activity_lst", "activities^notify", a.args);
			continue;
		}

		if (ch[ATI.CHAN_SRC]=="aii" && ch[ATI.CHAN_CONTEXT]=="trunk")// && pv.firstChild && pv.firstChild.id == ch[ATI.CHAN_BRIDGE_ID])
		{
			var coll = pcoll[2].firstChild.firstChild.childNodes[3].childNodes; 	// reload aii sidebar
			var a_ = {};
			if (pv.firstChild) argv(pv.firstChild, a_);
			if (a_.src_uid2 && a_.src_uid2==ch[ATI.CHAN_BRIDGE_ID])
			{
				console.log ("AI PANEL MATCHED - Displaying on agent side")
				// todo: highlight icon
				pcoll[2].style.display = "block";
				pcoll[6].className = "mmr";
				coll[0].checked=true;
				coll[1].innerHTML = "...";
				// Use case_insights_aii template which properly renders AI content with sorting and feedback forms
				url (coll[1], "case_insights_aii","messages",  ("?src_callid="+ch[ATI.CHAN_BRIDGE_ID]+"&_c=30&sort=id")); // pick latest
			}
			else
			{
				console.log ("AI PANEL NOT MATCHED - bridge_id("+ch[ATI.CHAN_BRIDGE_ID]+") does not match src_uid2("+a_.src_uid2+")");
			}
		}
	}

	// ?.firstChild.play (); // if increase in tot unread -> play sound
	var p_ = document.getElementById ("ati_status");
	var id_ = "noop";
	var r_ = [];
	if (ch_agent!=null) { id_ = "ati_available"; r_=ch_agent; }
	p_.innerHTML = "";
	nd (p_, te[id_], [], r_, [0]);
}

function ldati (o)
{
        var ts = (Date.now ()/1000);
        var k = Object.keys (o);
	  // console.log ("atis-------------------------"+JSON.stringify(o))
        re["atis"] = o;
        atis (o, k, ts);        
        atis_pop (ts);
}