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
	{ div:["w21 ma t01 mtn1"], s:["w21 t15 abs",""], c:
	[
		{ div:["c w10 ba_b bdl"], c:
		[
			{ input:["g","","case_vw_id_t","2","radio","1"] },
			{ ac:["ao tab","","_tab","y cb tc s","Chat"] }
			// todo: unread counter
		]},
		{ div:["c w10 bt_b bb_b br_b bdr"], c:
		[
			{ input:["g","","case_vw_id_t","0","radio"] },
			{ ac:["ao tab","","_tab","y cb tc s","Contact History"] }
		]},
		{ div:["e"] }
	]},

	{ div:[], c:
	[
		{ div:["d w05 t01"], s:["abs w05 bd8 t15 b05 gw zzzz",""], c:
		[
			{ input:["g","","sbl","0","radio"] },
			{ ac:["ay r15 t01","","_activity_close","cb bd",""], c:
			[
				{ s:["tc h b","&Cross;"] },
				// { s:["d x y s","Close"] },
				{ div:["e"] }
			]}
		]},

		{ div:["d w12 t01"], s:["abs w12 t17 b05 gw zzzz",""], c:
		[
			{ div:["","ve"], c:
			[
				{ ac:["d ay r20 btn","","_ati_end","w03 h cb tc micon","last_page"] },
				{ s:["d x t cb s","End Chat"] },
				{ div:["e"] }
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

function ati_popup_unread (pv, ch)
{
	var a_ = {};
	argv (pv.firstChild.lastChild, a_)
	console.log ("[ati] ati_popup_unread "+ch[20]+","+a_.src_callid+"|"+pv.lastChild.lastChild)
	if (ch[20]!=a_.src_callid) return; // not is same session
	if (pv.lastChild.lastChild && pv.lastChild.lastChild.childNodes.length>1)
	{
		var p = _(pv.lastChild.lastChild.childNodes[1], "msgs")
		if (!p || !p.previousSibling) return; 
		url (p.previousSibling, "activity_messages", "messages", ("?src="+ch[7]+"&src_callid="+ch[20]+"&_c=30"));
	}
}

function ati_popup (el, f=0)
{
	var coll = document.getElementById ("vv").childNodes[6].childNodes[0].childNodes[1].childNodes[1].childNodes; 
	var a = {};
	argv (el, a);
	if (re["case_src"][a.src][11]=="phone") a.src_address = _phone_fmt (a.src_address);
	
	if (f==0 && coll[1].childNodes.length>0 && coll[1].firstChild.childNodes.length>0) // vw is occupied
	{
		var a_ = {};
		argv (coll[1].firstChild.lastChild, a_)
		console.log ("[ati] activity_vw_id_args "+a.src_callid+","+a_.src_callid)
		if (a.src_callid==a_.src_callid) // is same session -- update src args only and select new ati_session
		{
			var p_ = coll[1].firstChild.lastChild;
			var r_ = re["r_"][0].slice(0);
			r_[k["src"][0]] = a.src;
			r_[k["src_ts"][0]] = a.src_ts;
			r_[k["src_uid"][0]] = a.src_uid;
			r_[k["src_callid"][0]] = a.src_callid;
			r_[k["src_address"][0]] = a.src_address;
			r_[k["src_usr"][0]] = a.src_usr;
			r_[k["src_vector"][0]] = a.src_vector;
			r_[k["src_uid2"][0]] = a.src_uid2;
			p_.firstChild.innerHTML = "";
			nd (p_.firstChild, te["activity_vw_id_args"], [], r_, [0]);
			el.firstChild.checked = true; 					// hilite call-notif			
		}
		return
	}
	
	if (f==0 && (a.src=="escalation" || a.src=="update")) return; 	// dont auto-bobup coz notif will clear on activity fetch

	el.firstChild.checked = true; 							// hilite call-notif			
	coll[0].parentNode.parentNode.previousSibling.checked = true;
	coll[0].checked = true;
	var s = "-1?src="+a.src + "&src_uid="+a.src_uid + "&src_callid="+a.src_callid + "&src_address="+a.src_address + "&src_vector="+a.src_vector;
	url (coll[1], "activity_vw_id_chat", "activities", s);
}

function _ati_popup ()
{
	ati_popup (this.parentNode.parentNode, 1)
}

function ati_status (ch)  // down, dial(earliest unread ts), ring(latest unread ts), up(last assigned), que (latest assigned), connect
{
	var st = 10;
	for (var i=10; i<19; i++) 
	{
		if (ch[i].length<1) continue; 
		st = i;
		if (i==ATI.CHAN_STATE_HANGUP) break; // chan hangup
	}
	return st;
}

function atis_pop (ts)
{
	var k = Object.keys (chan_t);
	for (var i=0; i<k.length; i++)  // remove closed, hangup channels
	{
		var id = k[i];
		if (chan_t[id].ts==ts) continue;
		console.log  ("[ati] pop "+id+" "+chan_t[id].ts+","+ts+" | "+chan_t[id].el)
		if (chan_t[id].el && chan_t[id].el.parentNode) 
		{
			var pe = chan_t[id].el.parentNode;
			var el = chan_t[id].el;
			pe.removeChild (chan_t[id].el); 
		}
		delete chan_t[id];
	}
}

function atis (o,k,ts)
{
	var coll = document.getElementById ("vv").childNodes;
	var pv = coll[6].childNodes[0].childNodes[1].childNodes[1].childNodes[1]; 
	var pu = document.getElementById ("call_sessions");
	var user_cid = document.getElementById ("user_cid").value;
	var c = [0,0,0,0,0,0,0];
	var unread_tot = 0;
	var ch_agent = null;

	for (var i=k.length-1; i>-1; i--)
	{
		var ch = o[k[i]];
		
		if (ch[ATI.CHAN_STATE_HANGUP].length>0) continue; // skip hangup'ed channels
		
		if (ch[0].length>0) 		 // agent session chan
		{
			c[0]++; 
			if (user_cid.length>0 && user_cid==ch[0]) ch_agent = ch;
			//chani ("chan_agent", pa, ch, ts); 
			continue;
		}

		if (ch[ATI.CHAN_CONTEXT]=="agtk" && ch[ATI.CHAN_CALLERID_NUM]==user_cid)
		{
			// console.log ("[ati] "+ch[3])
			var el = _(pu, ch[2]); // find matching activity
			var el_ = el;	
			if (el==null)
			{
				el = nd (pu, te["ati_session"], [], ch, [0]);
				el = __(el,"va").parentNode;
				chan_t[ch[2]] = { "el":el, "ts":ts };
				console.log ("[ati] new "+ch[2]+","+ch[4]+","+ch[6]+" | "+el) 
				ati_popup (el);
			}
			chan_t[ch[2]].ts=ts;
			var st = ati_status (ch);
			var coll = el.childNodes[1].childNodes;
			var unnotified = (ch[22]*1) - (coll[1].childNodes[1].firstChild.innerHTML*1) //
			unread_tot += (ch[22]*1)
			console.log ("[ati] status="+st+" unread="+ch[22] +" unnotified="+unnotified+"|"+el_)
			coll[0].childNodes[2].innerHTML = hmst (ch[st], ["","","hms","","","",""]);;
			coll[0].childNodes[3].value = ch[st];
			// coll[1].childNodes[0].innerHTML = ch[27]; //src_msg
			coll[1].childNodes[1].firstChild.innerHTML = ch[22];
			coll[1].childNodes[1].style.display = (ch[22]*1)>0?"block":"none";
			if (unnotified!=0 || el_==null) 
			{
				coll[2].firstChild.play ();
				if (pv.firstChild && pv.firstChild.lastChild) ati_popup_unread (pv,ch);	
			}
		}

		if (ch[ATI.CHAN_SRC]=="aii" && ch[ATI.CHAN_CONTEXT]=="trunk")
		{
			if (pv.firstChild && pv.firstChild.id == ch[ATI.CHAN_BRIDGE_ID])
			{
				var p_ = pv.lastChild.lastChild.childNodes[1].firstChild; 			// reload chats
				url (p_, "activity_messages", "messages", ("?src_callid="+ch[ATI.CHAN_BRIDGE_ID]+"&_c=30"));

				var coll_ = coll[2].firstChild.firstChild.firstChild.childNodes; 	// reload aii sidebar
				// todo: highlight icon
				coll[2].style.display = "block";
				coll[6].className = "mmr";
				coll_[2].firstChild.checked=true;
				coll_[2].childNodes[1].innerHTML = "...";
				url (coll_[2].childNodes[1], "case_insights","messages",  ("?src_callid="+ch[ATI.CHAN_BRIDGE_ID]+"&_c=1&sort=id")); // pick latest

				// todo: read to remove notification
			}
		}
	}

	var p_ = document.getElementById ("ati_status");
	var id_ = "noop";
	var r_ = [];
	if (ch_agent!=null) { id_ = "ati_available"; r_=ch_agent; }
	p_.innerHTML = "";
	nd (p_, te[id_], [], r_, [0]);
	ATI_COUNT = unread_tot;
	notifs ();
}

function ldati (o)
{
        var ts = (Date.now ()/1000);
        var k = Object.keys (o);
        re["atis"] = o;
        atis (o, k, ts);        
        atis_pop (ts);
}

