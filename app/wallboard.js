// -------------------------------------------------------------------

te["dash_agent_name"] = { s:["",":v:users:usn"] };

te["dash_agent"] = { p:["bb_ bl_ br_",":v:users:exten"], c:
[ 
	{ div:["abs w35_"] }, // ami chan
	{ arg:["","",":v:users:usn"] },
	{ input:["g","optc","chvw0","%2","radio",""] }, 
	{ li:["x y02 cd"], c:			
	[
		{ div:["c w12"], c:[ { s:["c x y",":v:users:exten"] }, { s:["c x y",":v:users:usn"] } ] },
		{ s:["c x y g",""] },
		{ s:["c x y g",""] },	// vector
		{ s:["c x y",""] },		// cid2
		{ s:["d x y",""] },		// status-duration
		{ arg:["ts","",":v:users:last_break_ts"] }, 		// status-ts
		{ s:["d x y s",":v:users:last_break"] }, 		// status-text
		{ div:["e"] }
	]},
	{ div:[] }
]};

te["dash_agent_count"] = { s:["d y","%2"] };

// ----------------------------------------------------------------

rk["dash_inbound_metrics"] = ["in_calls","in_uniq","in_attempts","in_sla","in_avg_wait","in_avg_talk","in_avg_hold","in_occupied","in_available","disposition"];
re["dash_inbound_metrics"] = re["metrics"] ;
te["wall_inbound_args"] = { arg:["","vector","1"] };

te["dash_rpt_distf_r"] = { div:[], c:
[
        { input:["g","","distf","%0","radio","%9"] },
        { li:["opta x y tr cb","","%1"], ev:["_rpt_opt"] }
]};

te["dash_rpt_metric_r"] = { div:["c r15"], c:
[
        { input:["g","","rpt","%0","radio","%9"] },
        { li:["optt x03 y tc cd s"], ev:["_rpt_opt"], c:
        [
                { s:["c","%2"] },
                { s:["c l","%3"] },
                { div:["e"] }
        ]}
]};

te["dash_rpt_stats_r"] = { div:["c r15"], c:
[
        { input:["g","","rpt","stats","radio","1"] },
        { li:["optt x03 y tc cd s"], ev:["_rpt_opt"], c:
        [
                { s:["c","Stats"] },
                { s:["c l",""] },
                { div:["e"] }
        ]}
]};

te["dash_rpt_type_r"] = { div:[], c:
[
        { input:["g","","type","%0","radio","%9"] },
        { ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
        [
                { div:["c w02 t"], s:["opt",""] },
                { s:["c w10 y ","%1"] },
                { div:["e"] }
        ]}
]};

te["wall_rpt_vw"] = { c:
[
	{ pivot:[] },
	{ div:[], usummary:[] },
//	{ ufn:["wall_stats_ufn"] }
]};

te["wall_rpt"] = {  c:
[
       
        { form:["","vrpt"], c:
	[
		{ s:["g x15 y h3",null] },
		{ arg:["","type",null] }, 
		{ arg:["","stacked",null] },
		{ arg:["","xaxis",null] },
		{ arg:["","yaxis",null] },
		//{ arg:["","metrics",null] },
		{ input:["g","","rpt",null,"checkbox","1"] },
		{ u:[null] }
	]},
	{ div:["",null], urpt:[] } 
	
	
]};

te["wall_args_inbound"] = { c:[ { arg:["","vector","1"] } ] };

te["wall_calls"] = { div:[""], c: // 
[
	
	{ div:[""], c:
        [
//          { p:["","wall_rpt_call"], wall_rpt:["Today's Call Traffic","bar","stacked","hangup_status_txt","h","call_count","wall_args_inbound","wall_rpt_vw-calls"] },
        ]},

	{ div:[""] }, // case stats here
	
	{ div:[""], s:["tt w80_",""], c:
	[
		{ div:["x y"], c:
		[
			{ div:["y07 h3 "], c:
			[
				{ s:["c x y","Counsellors Online"] },
				// { u:["dash_agent_count","users_ctx"] },
				// { s:["d x y","of"] },
				{ s:["d x y","0"] },
				{ div:["e"] }
			]},
			{ div:["x y02 b cd bb_"], c:
			[
				{ s:["c w03 x y","Ext."] },
				{ s:["c w11 x y","Name"] },
				{ s:["c w12 x y","Caller"] },
				{ s:["c w08 x y tr","Answered"] },
				{ s:["c w08 x y tr","Missed"] },
				{ s:["c w08 x y tr","Talk Time"] },
				{ s:["d w08 x y tr","Duration"] },
				{ s:["d w10 x y tr","Queue Status"] },
				{ div:["e"] }
			]},
			{ p:["","vagents"], c: // 
			[
				//{ s:["x y s gww" ,"No Agents Available"] },
				// { u:["dash_agent","users","","users"] }
			]},
		]},
		
		{ div:["x t15"], c:
		[
			{ div:["y07 h3 "], c:
			[
				{ s:["c x y","Calls in Queue"] },
				{ s:["d x y","0"] },
				{ div:["e"] }
			]},
			{ p:["mb","vqueued"] },
			{ div:["g y03"], c:
			[
				{ s:["c x y03 s","Queue Max Wait Time"] },
				{ s:["d x y03 s",":k:stats:in_max_wait:h"] },
				{ div:["e"] }
			]},
			{ div:["y02 b g"], c: // 
			[
				{ s:["c x y03 b  ","Inbound Calls"] },
				{ s:["d xx y03","0"] },
				{ div:["e"] }
			]},
			{ p:["mb","vinbound"] },
	
			{ div:["y02 s b g"], c:
			[
				{ s:["c x y03","Active Outbound Calls"] },
				{ s:["d x y03","0"] },
				{ div:["e"] }
			]},
			{ p:["mb g","voutbound"] }, // outbound	
		]},

		{ div:["x y cd g"], c:
		[
			{ s:["c x y","Queue Avg Wait Time"] },
			{ s:["d x y",":k:stats:in_avg_wait:h"] },
			{ div:["e"]}			
		]}
	]},
]},
	

te["wallboard"] = { c:
[
	{ div:[], c:
	[ 
		{ input:["g","","tabv","0","radio","1"] }, 
		{ p:["tabv gw x20 y ","vt"], wall_calls:[] } 
	]},
	{ div:[], c:
	[ 
		{ input:["g","","tabv","1","radio"] }, 
		{ p:["tabv gw","vt"] } 
	] }, // wall my profile
]};

te["wallonly"] = { c:
[
        { div:["","vftab"], wallboard:[] },

        { div:["g"], c:
        [
                { arg:["user_cid","","---"] },
                { iframe:["","",VA_AMI_HOST] },
               // { iframe:["","",VA_ATI_HOST] },
        ]},
]};

