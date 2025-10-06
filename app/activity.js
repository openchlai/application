var ACT_COUNT = 0;

te["dash_case_priority_vw_r"] = { div:["w50 gws mb1 h03"], c: // 
[
	{ s:["abs w50",""], c:
	[
		{ div:[null] },
		{ div:[null] },
		{ div:[null] },
		{ div:["e"] }
	]},
	{ div:["abs w55 t08 cw"], c:
	[
		{ s:["c xx w48 cw",null] },
		{ s:["d xx cb",""] },
		{ div:["e"] }
	]}
]};

te["dash_case_priority_vw"] = { c:
[
	//{ div:["xx g"], c:
	//[
	//	{ div:["c w17 cd"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 gg",""] },
	//		{ s:["c x","Closed Cases"] },
	//		{ div:["e"] }
	//	]},
	//	{ div:["c w16 cd mr"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 go",""] },
	//		{ s:["c x","Ongoing Cases"] },
	//		{ div:["e"] }
	//	]},
	//	{ div:["c w16 cd mr"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 gbl",""] },
	//		{ s:["c x","Escalated Cases"] },
	//		{ div:["e"] }
	//	]},
	//				
	//	{ div:["e"] }
	//]},
	
	{ div:[] }, 
				
	{ div:["x"], c:  // 
	[
		{ dash_case_priority_vw_r:["c h02 y gg bb3_y","c h02 y gg bb3_p","c h02 y gg bb3_r","Closed Cases"] },
		{ dash_case_priority_vw_r:["c h02 y go bb3_y","c h02 y go bb3_p","c h02 y go bb3_r","Ongoing Cases"] },
		{ dash_case_priority_vw_r:["c h02 y gbl bb3_y","c h02 y gbl bb3_p","c h02 y gbl bb3_r","Escalated Cases"] },
	]},
				
	{ div:["x y"], c: 
	[
		{ ac:["c w11 ao mr1","","","xx y cb bd gws bb3_y",""], c:[ { s:["y tc n","Low Priority"] }, { s:["y b tc h","0"] }] },
		{ ac:["c w12 ao mr1","","","xx y cb bd gws bb3_p",""], c:[ { s:["y tc n","Medium Priority"] }, { s:["y b tc h","0"] }] },
		{ ac:["c w12 ao mr1","","","xx y cb bd gws bb3_r",""], c:[ { s:["y tc n","High Priority"] }, { s:["y b tc h","0"] }] },				
		{ ac:["c w12 ao","","","xx yy gb cw bd ",""], c:[ { s:["tc h3","Total"] }, { s:["y b tc h","0"] }] },
		{ div:["e"]}
	]}
]};		

te["dash_case_priority"] = { c:
[
	{ pivot:[] },
	{ dash_case_priority_vw:[] },
	{ ufn:["case_prio_chart"] }
]};

te["dash_rpt_line"] = { c:
[
	{ pivot:[] }, 
	{ div:["w55"], s:["",""], c:[ { canvas:["","","",""], uchart:[] } ] },
	{ div:["w55 yy"], s:["",""], utable:[] },
	{ div:["e"] }
]};

te["dash_rpt_pie"] = { c:
[
	{ pivot:[] }, 
	{ div:["c w22"], s:["",""], c:[ { canvas:["","","",""], uchart:[] } ] },
	{ div:["d ll"], s:["",""], utable:[] },
	{ div:["e"] }
]};

te["dash_rpt"] = { c: // dash_rpt:["Case Categories","bar","stacked","case_category_root_id","-","count","0","dash_rpt_pie-cases"]
[ 
	{ form:["yy","vrpt"], c:
	[
		{ s:["x15 y h3",null] },
		{ arg:["","type",null] }, 
		{ arg:["","stacked",null] },
		{ arg:["","xaxis",null] },
		{ arg:["","yaxis",null] },
		//{ arg:["","metrics",null] },
		{ input:["g","","rpt",null,"checkbox","1"] },
		{ arg:["","sortrpt","1"] }
	]},
	{ div:["xx yy",null], urpt:[] } 
]};

te["dash_src_r"] = { div:[], c:
[
	{ input:["g","","dash_src","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x y gw cb bd ",""], c:
	[
		{ s:["x y tc","%1"] },
		{ div:["x y w03 ma"], s:["%2",""], c:[ { img:["","","%3","30"] } ] },
		{ s:["x y b tc h3 h02","%4"] }
	]}
]};

te["dash_gbv_r"] = { div:[], c:
[
	{ input:["g","","dash_gbv","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x15 y cb","%1"] }
]};

te["dash_period_r"] = { div:[], c:
[
	{ input:["g","","dash_period","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x15 y cb","%1"] }
]};

te["dash_view"] = { c:
[
	{ div:["c wp50 gw"], s:["",""], c:
	[
		{ div:["xx h50","vc"], dash_rpt:["Case Categories","bar","stacked","cat_0","-","case_count","dash_rpt_pie-cases"] },	
		{ div:["xx h50","vc"], dash_rpt:["Case per Location","bar","stacked","reporter_location_0","-","case_count","dash_rpt_pie-cases"] },
	]},
	{ div:["c wp50 gw"], s:["ml",""], c:
	[
		{ div:["xx h50","vc"], dash_rpt:["Daily Cases","line","","src","dt","case_count","dash_rpt_line-cases"] },		
		{ div:["xx h50","vc"], dash_rpt:["Case Status","bar","stacked","final_status,priority","-","case_count","dash_case_priority-cases"] },			
	]},
	{ div:["e"] }	
]}

te["dash"] = { c:
[
	{ div:["","vb"], c:
	[
		{ div:["ma w19 t01"], c:
		[
			{ input:["g","","sbl_","1","radio","1"] },
			{ input:["g","","sbr_","1","radio"] },
			{ ac:["abs ao mt17 w15 sh__ bd gg","","_activity_vw_id","xx bd gg cw",""], c:
			[
				{ s:["c y","Walk In"] }, // todo : change to new activity to allow outboud calls and messages  new activiy| walkin_ico|call_ico|msg_ico
				{ s:["d t03 h2 micon","directions_walk"] },  // center activity action btns here
				{ div:["e"], c:[ { arg:["",".id","-1"] }, { arg:["","src","walkin"] }, { arg:["","src_address",""] } ] }
			]},
		]},
		{ div:["xx tt b20  mtn1	"], c:
		[
			{ s:["c xx y15 h3_ b","OpenCHS"] },
			{ div:["e"] }
		]},
	]},
	{ div:["abs w12 h100 x15","vdf"], c: // filter params
	[
		{ div:[" "], c:
		[
			{ div:["ay","va"], ac:["","","_dd","x  cb ba bd",""], c:
			[
				{ s:["c l y","::dash_period:0:1"] },
				{ div:["d w02 t04"], c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] },
				{ s:["x b05 cd s",":d:dmy:3: "] }
			]},
			{ div:["dd w13 y ba bd gw","vdd"], c:
			[
				{ div:["c w13"], c:
				[
					{ uchk:["dash_period_r","%0","dash_period"] }
				]},
				{ div:["e"] }
			]},
		]},
		
		{ div:[" yy"], c:
		[
			{ div:["ay","va"], ac:["","","_dd","x bd cb bd ba",""], c:
			[
				{ s:["c l y","::dash_gbv:1:1"] },
				{ div:["d w02 t04"], c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]},
			{ div:["dd w13 y ba bd gw","vdd"], c:
			[
				{ uchk:["dash_gbv_r","%1","dash_gbv"] }
			]},
		]},							 

		{ uchk:["dash_src_r","%2","dash_src"] },
		
		{ arg:["","created_on","%3"] },
		{ arg:["","gbv_related","%4"] },
		{ arg:["","src","%5"] }
		
	]},
	{ div:["ml15 gw"], dash_view:[] }
]};

// ---------------------------------------------------------------------

te["activity_message_sended"] = { ufn:["activity_message_sended"] };

te["activity_messages_ufn"] = { ufn:["activity_messages_ufn"] };

te["activity_messages_txt"] = { div:["ba_b"], c:
[
	{ div:[], c:
	[
		{ div:["d w13 g"], ac:["abs w12 x y ","","","xx y cd tr","Preset Replies"] },
		{ div:["e"] }
	]},
	{ div:[""], c:[ { textarea:["wp100 h09 ll r130 yy","","src_msg","","Reply ..."], ev:["","","_msg"] } ] }
]}

te["activity_message_r_v_o"] = { div:["ba"], c:
[ 
	{ s:["c x y b w15",null] },
	{ s:["c x y bl",null] }, 
	{ div:["e"] } 
]},

te["activity_message_r_v"] = { c:[ { pre:[":v:messages:src_vector::vector:11","",null] }, { div:["e"] } ] },

te["activity_message_r_"] = { c: 
[
	{ arg:["","","%0"] },
	{ div:[":v:messages:src_vector::vector:10"], c:
	[
		{ div:[], umime:["activity_message_r_v", ":v:messages:src_msg", ":v:messages:src_mime", ":v:messages:src"] },
		{ div:[":v:messages:src_vector::vector:12"], c:
		[
			{ div:[":v:messages:src_vector::vector:13"], s:["x bd gr cw m",":v:messages:src_status"] },
			{ s:[":v:messages:src_vector::vector:13", ":r::1:: : ago:: : ago:"] },
 			{ arg:["tm","","%1"] },
			{ div:[":v:messages:src_vector::vector:13"], s:[":v:messages:src_vector::vector:14",":v:messages:created_by"] },
			//{ arg:["tm","","%1"] },
			{ div:["e"] }
		]},
	]},
	{ div:["e"] }
]};

te["activity_message_r"] = { div:["y"], activity_message_r_:[] };

te["activity_messages_title"] = { c:
[
	{ s:["c ll y h3_ b",":v:activities:src::case_src:1"] },
	{ s:["c x y h3_","/"] },
	{ s:["c y h3_ b",":v:activities:src_address"] },
	{ div:["e"] }
]};

te["activity_messages"] = { c:
[
	{ div:["x20 y15"], u:["activity_messages_title","activities"] },
	{ p:["x25","msgs"], c:
	[
		{ div:["xx yy oy scroller"], c:
		[
			{ u:["activity_message_r","messages","","","desc"] },
			{ ufn:["activity_messages_height"] },
		]},
		{ div:[] }
	]},
	{ div:["","ve"], c:
	[
		{ p:["x30 y20","o"], c:
		[
			 { div:[], c:
			 [
 				{ div:["d w08"], c:
 				[
 					{ ac:["abs btn ao t","","_activity_message_send"," t30 tc ba_b bd w08 h05 cb","Send"] },
 					{ div:["abs"], s:["w08 h05 t30 tc h05 go b savl","..."] } 
 				]},
 				{ div:["e"] }
			 ]},
			 { p:["mr10","sended"], activity_messages_txt:[] }
		]}
	]}
]};

// ------------------------------------------------------------------------------------------------

te["activity_case_ufn"] = { ufn:["activity_case_ufn"] };

te["activity_disposition_ufn"] = { ufn:["activity_disposition_ufn"] };

te["activity_reporter_ufn"] = { ufn:["activity_reporter_ufn"] };

te["activity_contact_ufn"] = { ufn:["activity_contact_ufn"] };

// ------------------------------------------------------------------------------------------------

te["activity_contact_disposition_btn"] = { div:[], c:
[
	{ ac:["c ab x t","activity_disposition-contacts^disposition-@","_vp","x y03 cr",""], c:
	[
		{ s:["","# Disposition"] },
		{ div:["e"], arg:["",".id","%0"] }
	]},
	{ div:[] }
]};

te["activity_contact_"] = { c:
[
	{ div:["h08 oh ll"], c:
	[
		{ div:[null], c:
		[
			{ div:["d w03"], c:
			[
				{ input:["g","",".id","-1","radio"] },
				{ ac:["abs w03 ab","","_activity_contact_del","w02 x y03 tc h2 cb","&Cross;"] }
			]},
			{ div:["e"] }
		]},
		{ ac:["au t","activity_contact_vw_id-contacts-@","_vp","cr",""], c:
		[
			{ s:["x y h3",":v:contacts:fullname"] },
			{ div:["e"], arg:["",".id","%0"] }
		]},
		{ div:[""], c:
		[
			{ s:["c x t",":v:contacts:age_group"] },
			{ div:["c t",":v:contacts:sex"] },
			{ div:["e"] }
		]},
		{ div:["y03 s l"], c:
		[
			{ uval:["",":v:contacts:location"] },
			{ span:["xx i co m","",":v:contacts:landmark"] },
			{ div:["e"] }
		]},
		// contact_vw_rv:["b h3",":v:contacts:fullname", ":v:contacts:age_group", ":v:contacts:sex", "d x t cd s",":v:contacts:created_on:d:dmyhnr", ":v:contacts:location",":v:contacts:landmark"] },
	]},
	{ div:["h04 oh"], c:
	[
		{ u:[null] },
		{ ac:["d ab r05",null,"_activity_postj","xx y tr gr cw bd16",null] },
		{ p:["e","nb"] }
	]},
	{ p:["","o"], arg:["","contact_id","%0"] }
]};

te["activity_contact"] = { div:["ba_b bd"], c:
[ 
	{ div:["","ve"], c:
	[
		{ activity_contact_:["","activity_contact_disposition_btn","activity_reporter-reporters^uuid","New Case"] },
		{ p:["","o"], arg:["","case_id","-1"] }
	]} 
]};

te["activity_contact_followup"] = { div:["gp mb tt r10 mt bd8"], activity_contact_:["g","noop","activity_reporter-reporters^uuid","Follow Up"] };

te["activity_contact_new"] = { div:["gp mb tt r10 mt bd8"], activity_contact_:["g","noop","activity_reporter-reporters^uuid","New Case"] };

te["activity_contact_none"] = { c:
[
	{ div:["h12 bd gws_"], c:
	[
		{ div:["x y h07 tr cb"], c:
		[
			{ s:["c x y cd","Select Reporter"] },
			{ div:["e"] }
		]},
		{ div:["tt"], c:
		[
			{ div:[], c:
			[
				{ ac:["ax c x y02","activity_disposition-contacts^disposition-@","_vp","x y03 bd cr",""], c:
				[
					{ s:["","# Disposition"] },
					{ div:["e"], arg:["",".id","-1"] }
				]},
				{ div:[] }
			]},
			{ ac:["ax d x y02","case_contact_new-r_-^","_activity_contact_new","x y03 bd cr",""], c:
			[
				{ s:["","+ New Reporter"] },
				{ div:["e"] }
			]},
			{ div:["e"] }
		]}
	]}
]};

// ---

te["activity_contact_f"] = { div:["","ve"], c:
[
        { div:[], activity_f_:["y b","Search"] },
        { vp_apply_:["activity_contact_main-dispositions_f","_activity_uvpf","","_uvw"] }
]};

// ---

te["activity_contact_footer"] = { div:["b05"], c:
[
	{ div:["d t"], c:[ { ac:["nav","activity_contact_ls-dispositions","_nav","dh bd",""], c:[ { div:["da_w dr bd"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t"], c:[ { aci:["nav","activity_contact_ls-dispositions","_nav","dh bd","prev",""], c:[ { div:["da_w dl bd"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ s:["d x y cd s","%4"] },
	{ s:["d y cd s","of"] }, 
	{ s:["d x y cd s","%3"] },
	{ s:["d x y cd s","-"] },
	{ s:["d x y cd s","%2"] },
	{ div:["e"] }
]};
	
te["activity_contact_no_data"] = { c:
[
	{ s:["xx yy gy","No matching contacts found."] }
]};

te["activity_contact_r_"] = { div:["","ve"], c:
[
	{ input:["g","",".id",":v:dispositions:reporter_contact_id","radio",null] },
	{ div:["r bd gws_ mb","activity_contact-contacts-contacts-contact"], ev:["_u"], c:
	[
		{ p:["","nb"] }, 
		{ li:["x t02  oh cb rg bd"], c:
		[
			{ div:["c l w01_ t08"], s:["opt",""] },
			{ div:["c w35"], contact_vw_rv:[":v:dispositions:reporter_fullname", ":v:dispositions:reporter_age_group", ":v:dispositions:reporter_sex", "d x t cd s",":v:dispositions:created_on:d:dmyhnr", ":v:dispositions:reporter_location",":v:dispositions:reporter_landmark"] },
			{ div:["e"] } // , arg:["",".id",":v:dispositions:reporter_conntact_id"] }
		]} 
	]},
]};

te["activity_contact_r_new"] = { div:["gh"], activity_contact_r_:["1"] };

te["activity_contact_r"] = { div:[], activity_contact_r_:[""] };

te["activity_contact_k"] = { div:["g"], c:
[
	{ activity_disposition_k_:[] },
	{ arg:["","_c","%1"] },
	{ arg:["","sort","id"] },
	{ arg:["","group","reporter_contact_id"] },
	{ div:["e"] } 
]};
	 
te["activity_contact_nb"] = { div:[], c:
[
	{ u:["activity_contact_no_data","dispositions_no_data"] },
	{ p:["","vcontactnew"] }
]};

te["activity_contact_ls"] = { listo:["end", "activity_contact_nb", "", "activity_contact_k", "activity_contact_r", "dispositions", "activity_contact_footer"] };

te["activity_contacts"] = { div:["xx","contacts"], c:
[
	{ p:["","contact"], activity_contact_none:[] },
	{ div:[], c:
	[
		{ div:["tt"], c:
		[
			{ s:["c xx y cd","Matching Reporters"] },
			{ div:["e"] }
		]},
		{ div:["","vt"], c:
		[
			{ u:["activity_contact_ls","dispositions_ctx"] }
		]}
	]},
]};

te["activity_contacts_none"] = { div:["xx","contacts"], c:
[
	{ p:["","contact"], activity_contact_none:[] },
]};

te["activity_list_contacts"] = { c:
[
	{ activity_f_tags_k:[] },
     { arg:["","_c","5"] },
	{ arg:["","sort","id"] },
	{ arg:["","group","reporter_contact_id"] },
	{ uv:["activity_contacts","dispositions",":k:activities_k:id:2"] }
]};

// ------------------------------------------------------------------------------------------------

te["activity_disposition_category_r"] = { div:["",""], c:
[
	{ input:["g","","disposition_id","%0","radio"] },
	{ div:["r ay bd_"], ev:["_opt"], c:[ { li:["xx t02 cb"], c:
	[
		{ div:["c w01_ t07"], s:["opt",""] },
		{ div:["c x y w40"], uval:["",":v:categories:fullname"] },
		{ div:["e"] }			
	]} ]}
]};

te["activity_disposition_contact_known"] = { c:
[
        // { s:["x tt b","Reporter"] },

        { div:["b20"], c:
        [
                { contact_vw_rv:[":v:contacts:fullname", ":v:contacts:age_group", ":v:contacts:sex", "","", ":v:contacts:location",":v:contacts:landmark"] },
                { p:["","o"], arg:["","contact_id","%0"] }
        ]},
]};

te["activity_disposition_contact_unknown"] = { c:
[
	{ s:["x yy b","Reporter not selected. (Enter Gender and Age Estimate.)"] },

	{ div:["gp"], c:[ { p:["","nb"] }, { div:["e"] } ] },

	{ div:["t"], c:
	[
		{ div:["c w20"], case_sex_enum:["Sex","","",""] },
		{ div:["c w21 ll"], case_contact_ed_age:["","","","","",""] },
		{ div:["e"] }
	]},

	{ div:["tt b30"], c:
	[
		{ div:["c w42"], case_loc_enum:["Location","","",""] },
		{ div:["e"] }
	]},
]};

te["activity_disposition_contact"] = { u:[":u::0:0:activity_disposition_contact_unknown:activity_disposition_contact_known"] };

te["activity_disposition_contact_btn"] = { ac:["ao btn",":u::0:0:activity_disposition_unk-dispositions^unk:activity_disposition-dispositions","_activity_postj","y07 gb bd cw b n tc","Disposition"] };

te["activity_disposition"] = { div:["w50 x y ma sh__ gw_ bd8"], ev:["_undd"], c:
[
	{ div:[], c:
	[
		{ s:["c x15 y15 b h3","Disposition"] },
		{ ac:["d","","_uvp","xx y08 h cb","&Cross;"] },
		{ div:["e"] }
	]},

	{ div:["","ve"], s:["x15",""], c:
	[
		{ div:["gp"], c:[ { p:["","nb"] }, { div:["e"] } ] },

		{ u:["activity_disposition_contact","contacts_disposition"] },	

		{ p:["h20 oy ba_ bd","o"], u:["activity_disposition_category_r","subcategories"] },

		{ div:["t25 b05"], c:
		[
			{ u:["activity_disposition_contact_btn","contacts_disposition"] },	
			{ s:["y07 bd b tc gws_ bd savl","..."] }
		]}
	]}
]};

// ---

te["activity_disposition_vw_case"] = { c:
[
	{ div:["tt"], c:
	[
		{ s:["c x y b",CASE_ID_PREFIX] },
		{ s:["c y b",":v:cases:id"] },
		{ p:["e","o"], arg:["","case_id","%0"] }
	]},
	{ div:["tt"], c:
	[
		{ s:["x t cd","Case Category"] },
		{ div:["x t"], uval:["",":v:cases:case_category"] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ s:["x t cd","Case Narrative"] },
		{ div:["x t"], s:["",":v:cases:narrative"] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ s:["x t cd","Case Plan"] },
		{ div:["x t"], s:["",":v:cases:plan"] },
		{ div:["e"] }
	]},
	{ div:["yy r20"], c:
	[
		{ div:["c"], c:[ { s:["x t cd","Priority"] }, { s:["x t",":v:cases:priority::case_priority:2"] } ] },
		{ div:["d"], c:[ { s:["x t cd tr","Status"] }, { s:["x t tr",":v:cases:status::case_status:1"] } ] },
		{ div:["e"] }
	]},
	
	// { div:[], usub:["case_vw_refered_to_none,case_vw_refered_to_dept_sub,case_vw_refered_to_sub","cases",":v:cases:is_refered_to","0,1,2"] },

	// { div:[], usub:["case_vw_escalated_to_sub","cases",":v:cases:is_escalated_to","1"] } 
]};

te["activity_disposition_vw"] = { div:["w60 x15 yy ma sh__ gw_ bd8","vddvw"], ev:["_undd"], c:
[
	{ div:["","ve"], c:
	[
		{ u:["activity_contact_followup","contacts"] }, // selected contact
		{ u:["activity_disposition_vw_case","cases"] } 
	]}
]};

// ---

te["activity_disposition_footer"] = { div:["x25 y20"], s:["l01",""], c:
[
	{ pg:["pgto","activity_disposition_list-dispositions"," dh","da dl","activity_disposition_list-dispositions"," dh","da dr"] },
	{ div:["e"] }
]};

te["activity_disposition_rv_case"] = { c:
[
	{ s:["c micon t03 cd","navigate_next"] },
	{ s:["c l t03 b",CASE_ID_PREFIX] },
	{ s:["c x t03 b",":v:dispositions:case_id"] },
	{ s:["c micon t03 cd","navigate_next"] },
	{ div:["c x t01"], uval:["",":v:dispositions:case_category"] },
	// { s:["c x20 t cd",":v:dispositions:case_priority::case_priority:2"] },
	// { s:["c t cd",":v:dispositions:case_status::case_status:1"] },
	// { div:["e"] }
]};

te["activity_disposition_r_reporter"] = { c:
[
	{ div:["c l"], s:["x y03 gws_ bd8",":v:dispositions:reporter_fullname"] },
	{ div:["c l t03 cd "], uval:["",":v:dispositions:reporter_sex"] },
	{ div:["c x t03 cd "], uval:["",":v:dispositions:reporter_age_group"] },	
	// { s:["d x t cd s","|"] },
]};

te["activity_disposition_r_"] = { c:
[
	{ div:["abs l03 t"], s:["x y micon h3 ba gws_ bd16",":v:dispositions:src::case_src:6"] },
	{ div:["ml1_ mh05 l20 r10 t08 bl r"], c:
	[
		{ div:[], c:
		[
			{ s:["c l cd s",":v:dispositions:created_by"] },
			{ s:["c l cd s",":r::1:: : ago:: : ago:"] },
			{ arg:["tm","","%1"] },
			{ div:["e"] }
		]},
		{ div:[], c:
		[
			{ div:["c x t03 "], uval:["",":v:dispositions:disposition"] },	
			{ u:[":v:dispositions:case_id:u:::0:noop:activity_disposition_rv_case"] },
			{ u:[":v:dispositions:reporter_contact_id:u:::0:noop:activity_disposition_r_reporter"] },
			{ div:["e"], arg:["","case_id",":v:dispositions:case_id"] }	
		]}
	]},
	{ p:["","nb"] } // nb
]};

te["activity_disposition_r_case_"] = { div:["l20","va"], c:
[
     { input:["g","","advwt","%0","radio"] },
	{ li:[null,"activity_disposition_vw-reporters^uuid"], ev:["_activity_disposition_r"], activity_disposition_r_:[""] },
     { div:["g"], arg:["","","activity_disposition_r-dispositions-va--@"] }, // vp return anchor
]};

te["activity_disposition_r_dsp_"] = { div:["l20","va"], c:
[
        // { input:["g","","advwt","%0","radio"] },
        { div:[null], activity_disposition_r_:[""] }
]};

te["activity_disposition_r_case_new"] = { activity_disposition_r_case_:["lr gh bd"] };

te["activity_disposition_r_case"] = { activity_disposition_r_case_:["lr bd"] };

te["activity_disposition_r_dsp_new"] = { activity_disposition_r_dsp_:["lr gy"] };

te["activity_disposition_r_dsp"] = { activity_disposition_r_dsp_:["lr"] };

te["activity_disposition_r"] = { u:[":u::57:0:activity_disposition_r_dsp:activity_disposition_r_case"] };

te["activity_disposition_k_"] = { c:
[
	{ arg:["","reporter_fullname",	":k:dispositions_k:reporter_fullname:2"] },
	{ arg:["","reporter_age_group_id",	":k:dispositions_k:reporter_age_group_id:2"] },
	{ arg:["","reporter_sex_id",		":k:dispositions_k:reporter_sex_id:2"] },
	{ arg:["","reporter_phone",		":k:dispositions_k:reporter_phone:2"] },
	{ arg:["","reporter_email",		":k:dispositions_k:reporter_email:2"] },
	{ arg:["","reporter_location_id",	":k:dispositions_k:reporter_location_id:2"] },
	{ arg:["","disposition_id",       	":k:dispositions_k:disposition_id:2"] },

	{ arg:["","case_id",			":k:dispositions_k:case_id:2"] },
	{ arg:["","cases^created_on",		":k:dispositions_k:cases^created_on:2"] },
	{ arg:["","cases^created_by_id",	":k:dispositions_k:cases^created_by_id:2"] },
	{ arg:["","src",			":k:dispositions_k:src:2"] },
	{ arg:["","cases^case_category_id",":k:dispositions_k:cases^case_category_id:2"] },
	{ arg:["","cases^gbv_related",	":k:dispositions_k:cases^gbv_related:2"] },
	{ arg:["","cases^priority",		":k:dispositions_k:cases^priority:2"] },
	{ arg:["","cases^status",		":k:dispositions_k:cases^status:2"] },
	{ arg:["","cases^escalated_to_id",	":k:dispositions_k:cases^escalated_to_id:2"] },
	{ arg:["","cases^assessment_id",	":k:dispositions_k:cases^assessment_id:2"] },
	{ arg:["","cases^justice_id",		":k:dispositions_k:cases^justice_id:2"] },
]};

te["activity_disposition_k"] = { div:["g"], c:
[
	{ activity_disposition_k_:[] },
	{ arg:["","sort","id"] },
	{ arg:["","_c","%1"] }, 
	{ div:["e"] }
]};

te["activity_disposition_no_data"] = { div:[""], s:["x25 yy","No records found"] };

te["activity_disposition_nb"] = { div:[""], u:["activity_disposition_no_data","dispositions_no_data"] };

te["activity_disposition_title"] = { div:[], c:[ { p:["","vdisp"] } ] };

te["activity_disposition_list"] = { list:["activity_disposition_title", "activity_disposition_nb", "", "activity_disposition_k", "activity_disposition_r", "dispositions", "activity_disposition_footer"] };

// ------------------------------------------------------------------------------------------------

te["activity_f_tags_"] = { c: 
[
	{ f:["Reporter Name",null,	" %0","reporter_fullname",""] },
	{ f:["Reporter Age",null,	" %1","reporter_age_group_id"," %1"] },
	{ f:["Reporter Sex",null,	" %1","reporter_sex_id"," %1"] },
	{ f:["Reporter Phone",null,	" %0","reporter_phone",""] },
	{ f:["Reporter Email",null,	" %0","reporter_email",""] },
	{ f:["Reporter Location",null,	" %1","reporter_location_id"," %1"] },

	{ f:["Case ID",null,		" %0","case_id",""] },
	{ f:["Created On",null,		" :d:dmy:0: ","cases^created_on",""] },
	{ f:["Created By",null,		" %1","cases^created_by_id"," %1"] },
	{ f:["Source",null,		" ::case_src:0:1","src",""] },
	{ f:["Category",null,		" %1","cases^case_category_id"," %1"] },
	{ f:["GBV Related",null,        " ::yesno:0:2","cases^gbv_related",""] },
	{ f:["Priority",null,		" ::case_priority:0:1","cases^priority",""] },
	{ f:["Status",null,		" ::case_status:0:1","cases^status",""] },
	{ f:["Escalated To",null,	" %1","cases^escalated_to_id"," %1"] },
	{ f:["Case Assessment",null,	" %1","cases^assessment_id"," %1"] },
	{ f:["Status in Justice System",null," %1","cases^justice_id"," %1"] },
	
	{ p:["g","o"], c:
	[
		{ arg:["","disposition_id",null] },
		{ arg:["","sort","id"] },
		{ arg:["","group",null] },
		{ arg:["","_c","10"] }
	]},
	{ div:["e"] }
]};
	
te["activity_f_tags_k"] = { activity_f_tags_:
[
":k:dispositions_k:reporter_fullname:2",":k:dispositions_k:reporter_age_group_id:2", 	":k:dispositions_k:reporter_sex_id:2", 
":k:dispositions_k:reporter_phone:2", 	":k:dispositions_k:reporter_email:2", 		":k:dispositions_k:reporter_location_id:2",
":k:dispositions_k:case_id:2", 		":k:dispositions_k:cases^created_on:2", 	":k:dispositions_k:cases^created_by_id:2", 
":k:dispositions_k:src:2", 		":k:dispositions_k:cases^case_category_id:2", 	":k:dispositions_k:cases^gbv_related:2",
":k:dispositions_k:cases^priority:2", 	":k:dispositions_k:cases^status:2", 		":k:dispositions_k:cases^escalated_to_id:2", 
":k:dispositions_k:cases^assessment_id:2",":k:dispositions_k:cases^justice_id:2",   
":k:dispositions_k:disposition_id:2",
""
]};
	
te["activity_f_tags"] = { activity_f_tags_:
[
":k:dispositions_f:reporter_fullname", 	":k:dispositions_f:reporter_age_group_id", 	":k:dispositions_f:reporter_sex_id",
":k:dispositions_f:reporter_phone", 	":k:dispositions_f:reporter_email", 		":k:dispositions_f:reporter_location_id",
":k:dispositions_f:case_id", 		":k:dispositions_f:cases^created_on", 		":k:dispositions_f:cases^created_by_id", 
":k:dispositions_f:src", 		":k:dispositions_f:cases^case_category_id", 	":k:dispositions_f:cases^gbv_related", 
":k:dispositions_f:cases^priority", 	":k:dispositions_f:cases^status", 		":k:dispositions_f:cases^escalated_to_id",  
":k:dispositions_f:cases^assessment_id",":k:dispositions_f:cases^justice_id",  
":k:dispositions_f:disposition_id",
":k:dispositions_f:group"
]};
	
te["activity_cases_f"] = { c:
[
	{ div:["l r10 tt"], kf_s:["Case ID","case_id",":k:dispositions_f:case_id"] },			
			
	{ div:["l r10 tt"], kf_d:["Created On"," :d:dmy:0: ","cases^created_on",":k:dispositions_f:cases^created_on","cases^created_on",":k:dispositions_f:cases^created_on"] },
			
	{ div:["l r10 tt"], kf_l:["Created By","tag_-r_--o--%5-user_id-cases^created_by_id-%0-%5",   "user_lc_main-users",":k:dispositions_f:cases^created_by_id", 
""," %1","user_id","cases^created_by_id"," %0"," %1",  "noop"] },

	{ div:["l r10 tt"], kf_c:["Source","tag_-r_--o--::case_src:0:1--src-%0-",  	":k:dispositions_f:src",
""," %0","","src"," %0","", 				":k:dispositions_f:src","case_src", "src"," %0",""] },
		
	{ div:["l r10 tt"], kf_l:["Category","tag_-r_--o--%1-category_id-cases^case_category_id-%0-%1",   "case_category_lc_main-subcategories",  ":k:dispositions_f:cases^case_category_id",  
""," %1","category_id","cases^case_category_id"," %0"," %1", "case_category_root_id"] },
	
	{ div:["l r10 tt"], kf_c:["GBV Related", "tag_-r_--o--::yesno:0:2--cases^gbv_related-%0-",  ":k:dispositions_f:cases^gbv_related",
""," ::yesno:0:2","","cases^gbv_related"," %0","",       ":k:dispositions_f:cases^gbv_related","yesno",  "cases^gbv_related"," ::yesno:0:2",""] },

	{ div:["l r10 tt"], kf_c:["Priority", "tag_-r_--o--::case_priority:0:1--cases^priority-%0-",  ":k:dispositions_f:cases^priority", 
""," ::case_priority:0:1","","cases^priority"," %0","", 	":k:dispositions_f:cases^priority","case_priority",  "cases^priority"," ::case_priority:0:1",""] },
				
	{ div:["l r10 tt"], kf_c:["Status", "tag_-r_--o--::case_status:0:1--cases^status-%0-",  	":k:dispositions_f:cases^status",
""," ::case_status:0:1","","cases^status"," %0","", 	":k:dispositions_f:cases^status","case_status",  "cases^status"," ::case_status:0:1",""] },
		
	{ div:["l r10 tt"], kf_l:["Escalated To","tag_-r_--o--%5-user_id-cases^escalated_to_id-%0-%5",   "user_lc_main-users", ":k:dispositions_f:cases^escalated_to_id", 
""," %1","user_id","cases^escalated_to_id"," %0"," %1", "noop"] },

	{ div:["l r10 tt"], kf_l:["Case Assessment","tag_-r_--o--%1-category_id-cases^assessment_id-%0-%1",   "case_lc_main-subcategories", ":k:dispositions_f:cases^assessment_id", 
"", " %1", "category_id", "cases^assessment_id"," %0"," %1", "case_assessment_root_id"] },	

	{ div:["l r10 yy"], kf_l:["Status in Justice System","tag_-r_--o--%1-category_id-cases^justice_id-%0-%1",   "case_lc_main-subcategories", ":k:dispositions_f:cases^justice_id", 
""," %1","category_id","cases^justice_id"," %0"," %1", "case_justice_root_id"] },		
					
]};
	
te["activity_contacts_f"] = { c:
[
	{ div:["l r10 tt"], kf_s:["Reporter Name","reporter_fullname",":k:dispositions_f:reporter_fullname"] },
	
	{ div:["l r10 tt"], kf_l:["Reporter Age","tag_-r_--o--%1-category_id-reporter_age_group_id-%0-%1", "case_lc_main-subcategories", 
":k:dispositions_f:reporter_age_group_id", ""," %1","category_id","reporter_age_group_id"," %0"," %1", "case_age_group_root_id"] },

	{ div:["l r10 tt"], kf_l:["Reporter Sex","tag_-r_--o--%1-category_id-reporter_sex_id-%0-%1", "case_lc_main-subcategories",  
":k:dispositions_f:reporter_sex_id", ""," %1","category_id","reporter_sex_id"," %0"," %1", "case_sex_root_id"] },

	{ div:["l r10 tt"], kf_s:["Reporter Phone","reporter_phone",":k:dispositions_f:reporter_phone"] },
	
	{ div:["l r10 tt"], kf_s:["Reporter Email","reporter_email",":k:dispositions_f:reporter_email"] },
	
	{ div:["l r10 tt"], kf_l:["Reporter Location","tag_-r_--o--%1-category_id-reporter_location_id-%0-%1", "case_location_lc_main-subcategories",  ":k:dispositions_f:reporter_location_id", ""," %1","category_id","reporter_location_id"," %0"," %1", "case_location_root_id"] },

	{ div:["l r10 yy"], kf_s:["Passport/ID Number","reporter_national_id",":k:dispositions_f:reporter_national_id"] },

]};
	
te["activity_f"] = { div:["w50 x15 tt b05 ma sh__ gw_ bd8","vddvf"], ev:["_undd"], c: 
[
	{ div:[], c:
	[
		{ div:["t","vb"], c:
		[
			{ div:["c"], s:["x y b h3","Search"] },
			{ div:["d xx"], c:[ { input:["g","","case_f_vw_t","2","radio"] }, { ac:["ay tabu","","_tab","x03 y cb s","Activities"] } ] },
			{ div:["d xx"], c:[ { input:["g","","case_f_vw_t","1","radio"] }, { ac:["ay tabu","","_tab","x03 y cb s","Cases"] } ] },
			{ div:["d xx"], c:[ { input:["g","","case_f_vw_t","0","radio","1"] }, { ac:["ay tabu","","_tab","x03 y cb s","Contacts"] } ] },
			{ div:["e"] }
		]},
		{ div:["tt"], c:
		[
			{ div:[], c:[ { input:["g","","case_f_vw_tv","0","radio","1"] }, { div:["tabv"], activity_contacts_f:[] } ] },
			{ div:[], c:[ { input:["g","","case_f_vw_tv","1","radio"] }, { div:["tabv"], activity_cases_f:[] } ] },		
			{ div:[], c:[ { input:["g","","case_f_vw_tv","1","radio"] }, { div:["tabv"] } ] },	
		]}
	]},
	{ p:["","o"], arg:["","disposition_id",":k:dispositions_f:disposition_id"] },
	{ vp_apply:["activity_f_tags-dispositions_f"] }
]};

te["activity_list"] = { c:
[
	{ div:["d w40 b20 r20"], u:[":u::4:0:activity_contacts_none:activity_list_contacts"] },
     { div:["c wp65 mh30","vt"], u:["activity_disposition_list","dispositions_ctx"] },
	{ div:["e"] }
]};

te["activity_main"] = { c: 
[
	{ div:["ll r30 yy","vb"], c:
	[
		{ div:["c"], c:
		[
			{ div:["tt","va"], s:["",""], c:
			[
				{ input:["g","","cases_t_","0","radio","1"] },
				{ ac:["c x","activity_match-activities-vftab","___u","xx y b h3 cb","Contact History"] }, 	
				{ div:["e"] }
			]}
		]},

		{ div:["c t12"], c:
		[
			{ input:["g","","activity_vw_id_t_","0","radio"] },
			{ ac:["ay tabb ll","activity_f-dispositions_f","_vpf","x y02 bd8 cb",""], c: // contextual search: dispositions | messages
			[
				{ s:["c h2 b micon","search"] },
				{ div:["c x t01 s","","Search"] }, 
				{ div:["e"] }
			]}
		]},
		
		{ div:["e"], c:[ { arg:["","","activity_list-dispositions"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},

	{ div:["x20 t" ,"vf"], c:[ { div:["","activity_disposition_f-dispositions_f"], ev:["l__vpf"], c:
	[
		{ activity_f_tags_k:[] }
	]} ]},
	
	{ div:["t15"], c: 
	[
		{ div:[], c:
		[ 
			{ input:["g","","cghgmtv","0","radio","1"] }, 
			{ p:["tabv","vt"], u:["activity_list","dispositions_ctx"] } 
		]},
		{ div:[], c:
		[	
			{ input:["g","","cghgmtv","0","radio"] }, 	// activity history rpt
			{ p:["tabv","vt"] } 
		]}
	]}
]};

// -----------------------------------------------------------------------------------------

te["activity_vw_id_toolbar"] = { div:[], c:
[
	{ div:["d w05 t01"], s:["abs w05 bd8 y15 gw zzzz",""], c:
	[
		{ input:["g","","sbl","0","radio"] },
		{ ac:["ay t01 r15","","_activity_close","cb bd y01",""], c:
		[
			{ s:["tc h b","&Cross;"] },
			// { s:["d x y s","Close"] },
			{ div:["e"] }
		]}
	]},

	{ div:["d w06 t01"], s:["abs w06 h03 gw t15 zzzz",""] },
	{ div:["d w06 t01"], s:["abs w06 h03 gw t15 zzzz",""] },
	{ div:["d w06 t01"], s:["abs w06 h03 gw t15 zzzz",""] },

	{ div:["e"] }
]};

te["activity_vw_id_args"] = { c:
[
    { arg:["","src",":v:activities:src"] },
    { arg:["","src_uid",":v:activities:src_uid"] },
    { arg:["","src_address",":v:activities:src_address"] },
    { arg:["","src_uid2",":v:activities:src_uid2"] },
    { arg:["","src_usr",":v:activities:src_usr"] },
    { arg:["","src_vector",":v:activities:src_vector"] },
    { arg:["","src_callid",":v:activities:src_callid"] },
    { arg:["","src_ts",":v:activities:src_ts"] }
]};

te["activity_vw_id_tabs_0_walkin"] = { u:["activity_main","dispositions_ctx"] };

te["activity_vw_id_tabs_0"] = { c:
[
	{ arg:["",":v:activities:src::case_src:12",":v:activities:src_address"] },
	{ arg:["","_c","10"] },
	{ uv:["activity_main","dispositions"] }
]};

te["activity_vw_id_tabs_"] = { c: // 
[
	{ div:[], c:
	[	
		{ input:["g","","activity_vw_vt","0","radio",null] }, 		// activity history list
		{ p:["tabv","vftab"], u:[null] } 
	]},
	{ div:[], c:
	[	
		{ input:["g","","activity_vw_vt","0","radio",null] }, 		// case_form | case_vw_id
		{ p:["tabv",null], u:["case_vw_id","cases"] } 
	]},
	{ div:[], c:
	[	
		{ input:["g","","activity_vw_vt","0","radio",null] }, 		// chat
		{ p:["tabv","vf"], activity_messages:[] } 
	]}	
]};

te["activity_vw_id_tabs"] = 			{ activity_vw_id_tabs_:["1","activity_vw_id_tabs_0","","vfvw",""] };

te["activity_vw_id_tabs_message"] = 	{ activity_vw_id_tabs_:["","activity_vw_id_tabs_0","","vfvw","1"] };

te["activity_vw_id_tabs_case"] = 		{ activity_vw_id_tabs_:["","noop","1","vf",""] };

te["activity_vw_id_tabs_walkin"] = 	{ activity_vw_id_tabs_:["1","activity_vw_id_tabs_0_walkin","","vfvw",""] };

te["activity_vw_id"] = { c: 
[
	{ div:["","vb"], c:
	[
		{ u:[null] }, 			// channel menu
		{ div:[], c:[ { p:["g","o"], activity_vw_id_args:[] } ] }
	]},
	{ form:[], u:[null] } 		// tabs
]};

// -----------------------------------------------------------------------------------------

te["activity_lst_footer"] = { div:["x y bt_"], c:
[
	{ div:["d t03 r05"], c:[ { ac:["nav","activity_lst-activities","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","activity_lst-activities","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ s:["d l r15 y cd s","%4"] },
	{ s:["d  y cd s","of"] }, 
	{ s:["d x y cd s","%3"] },
	{ s:["d x y cd s","-"] },
	{ s:["d x y cd s","%2"] },
	{ div:["e"] }
]};

te["activity_lst_disposition_r"] = { div:["d ll t02 s cr"], uval:["","%0"] };

te["activity_lst_r"] = { div:[], c:
[
	{ input:["g","","sbr","1","radio"] },
	{ li:["sbr cb xx bt_",""], ev:["_activity_vw_id"], s:["x y03 s",""], c: 
	[
		{ div:[], c:
		[  
			{ s:["c t",":v:activities:src::case_src:1"] },
			{ s:["c t x",":v:activities:src_address"] },
			// { s:["c t",":v:activities:src_vector::vector:4"] }, // nb status implies vector (except for answered)
			{ s:["d t",":h:ms:24:0:"] },
			{ div:["e"] }
		]},
		{ div:["h02_ "], c:
		[	
			{ s:["c t02",":v:activities:src_ts:r:::: : ago:: : ago:"] },
			{ arg:["tm","",":v:activities:src_ts"] },
			{ uchk:["activity_lst_disposition_r",":v:activities:dispositions"] },
			{ s:["d t02",":v:activities:src_status::activity_status:1"] }, 
			{ div:["e"] }
		]},
		{ div:["g"], c:
		[ 
			{ arg:["",".id","%0"] }, { arg:["","src",":v:activities:src"] },
			{ arg:["","src_uid",":v:activities:src_uid"] }, { arg:["","src_uid2",":v:activities:src_uid2"] }, 
			{ arg:["","src_address",":v:activities:src_address"] }, { arg:["","src_usr",":v:activities:src_usr"] }, 
			{ arg:["","src_vector",":v:activities:src_vector"] },  { arg:["","src_ts",":v:activities:src_ts"] }, 
			{ arg:["","src_callid",":v:activities:src_callid"] } 
		]}
	]}
]};

te["activity_lst_k"] = { div:["g"], c:
[
	{ p:["","e"], c:[ { arg:["","_c","%1"] } ] }
]};

te["activity_lst_title"] = { div:["g x y bb_"], c:
[
	{ div:["e"] }
]};

te["activity_lst"] = { list:["activity_lst_title","end","","activity_lst_k","activity_lst_r","activities","activity_lst_footer"] }; // sbr panel

// -------------------------------------------------------------

te["notification_lst_footer"] = { div:["x y mt"], c:
[
	{ div:["d t03 r05"], c:[ { ac:["nav","activity_lst-activities","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","activity_lst-activities","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ s:["d l r15 y cd s","%4"] },
	{ s:["d  y cd s","of"] }, 
	{ s:["d x y cd s","%3"] },
	{ s:["d x y cd s","-"] },
	{ s:["d x y cd s","%2"] },
	{ div:["e"] },
	{ ufn:["notifs_ufn","%4"] }
]};

te["notification_lst_r_unread_tag"] = { s:["x07 y02 bd16 gr cw","unread"] };

te["notification_lst_r_"] = { div:["x y s",""], c:
[
	{ div:[], c:
	[  
		{ s:["c t02",":v:activities:src::case_src::1"] },
		{ s:["c x t02 cd","from"] },
		{ s:["c t02 cd",":v:activities:src_address"] },
		{ s:["d t02",":v:activities:src_ts:r::18:: : ago:: : ago:"] },
		{ arg:["tm","",":v:activities:src_ts"] },
		{ div:["e"] }
	]},
	{ div:["h02 oh"], c:
	[	
		{ div:["d w05 t01 mtn1"], s:["abs",""], usub:["notification_lst_r_unread_tag","r_",":v:activities:action","notify"] }, 
		{ uval:["",":v:activities:action_detail"] },
		{ div:["e"] }
	]},
	// { div:[], arg:["",".id","%0"] }
]};

te["notification_lst_r_vw"] = { c:
[
	{ notification_lst_r_:[] },
	{ ufn:["activity_notify_ufn"] }
]};

te["notification_lst_r"] = { div:["","ve"], c:
[
	{ input:["g","","sbr","%0","radio"] },
	{ li:["sbr cb xx bb_ ","activity_notify-activities^notify"], ev:["_activity_notify"], notification_lst_r_:[] }
	// todo: place holder for on click
]};

te["notification_lst_k"] = { div:["bb_"], c:
[
	{ p:["","e"], c:
	[ 
		{ arg:["","action","notify"] },
		{ arg:["","_c","%1"] } 
	]}
]};

te["notification_lst_title"] = { div:["g x y bb_"], c:
[
	{ div:["e"] }
]};

te["notification_lst"] = { list:["notification_lst_title","end","","notification_lst_k","notification_lst_r","activities_notify","notification_lst_footer"] };

// -------------------------------------------------------------

te["activities"] = { c:
[
	{ div:[], c:
	[	
		{ input:["g","","activities_vw","0","radio","1"] }, 		// dash
		{ div:["tabv bd8 gw","vftab"], u:["dash","dash"] } 
	]},
	{ div:[], c:
	[	
		{ input:["g","","activities_vw","1","radio"] }, 			// _new | _vw | ed
		{ div:["tabv bd8 gw mm","vfvwm"] }
	]}
]};

function activity_messages_height (el, u, a, r, m)
{
	el.style.height = window.innerHeight-210;
	var h = el.scrollHeight;
	console.log (" [scroll height ] "+h);
	el.scroll ({ top: h, left: 0, behavior: 'smooth' }); 
}

function activity_messages_ufn (el, u, a, r, m)
{
	var p = el.nextSibling.firstChild; 
	var el = p.lastChild;
	var id = 0;
	if (p.lastChild && p.lastChild.firstChild) id = p.lastChild.firstChild.value*1;
	var rr = ra["messages"];
	var n = rr.length;
	for (var i=n-1; i>-1; i--)
	{
		var r = rr[i];
		if ((r[0]*1)<=id) continue;
		nd (p, te["activity_message_r"], [], r, [0]); // append new messages 
	}
	//console.log (" ---> "+el);
	for (var i=0; i<n; i++)	// update read status
	{
		var r = rr[i];
		//console.log (" ---> "+r[0]+","+el.firstChild.value + "|"+i+" of "+n)
		if (!el) break;
		if ((r[0]*1) > (el.firstChild.value*1)) continue;
		if ((r[0]*1) == (el.firstChild.value*1)) 
		{
			_(el,"tm","input").parentNode.firstChild.firstChild.innerHTML = r[15];
			el = el.previousSibling
		}
	}
	activity_messages_height (p, u, a, r, m);
}

function activity_message_sended (el, u, a, r, m)
{
	var p = __(el,"ve");
	var k = ra["messages_k"]
	var el = nd (el, te["activity_messages_txt"], [], [], [0]);
	el.focus (); // console.error (el.tagName)
	url (p.parentNode.firstChild, "activity_messages", "messages", ("?src="+r[k["src"][0]]+"&src_callid="+r[k["src_callid"][0]]+"&"));
}

function _activity_message_send (ev)
{
	var p = __(this,"ve");
	var p_ = __(this,"vfvwm");
	var o = {};
	jso (p_.firstChild, o);   	// channel session details
	jso (p,o); 			// ve details
	url (p, "activity_message_send", "messages", "", null, 2, o, "POST");
	boo (ev)
}

function _msg (ev) // TODO: send read request -while typing - to keep chat from timimg out
{
	// console.error (ev.shiftKey+", "+ev.keyCode)
	if (ev.shiftKey==false && ev.keyCode==13)
	{
		this.disabled = true;
		var p = __(this,"ve");
		var p_ = __(this,"vfvwm");
		var o = {};
		jso (p_.firstChild, o);   	// channel session details
		jso (p,o); 			// ve details
		url (p, "activity_message_send", "messages", "", null, 2, o, "POST");
		return false;
	}
}

// -------------------------------------------------------------

function notifs_ufn (el, u, a, r, m)
{
	ACT_COUNT = 1*u[1]
	notifs();
}

function activity_case_ufn (el, u, a, r, m)
{
	var kk = ra["dispositions_k"];
	el__ = __(el,"vfvw")
	el_ = __(el,"vf")
	el_.innerHTML = "";
	nd (el_, te["case_vw_id"], [], ra["cases"][0], [0]);
	if (r[kk["src"][0]]=="escalation" || r[kk["src"][0]]=="update")  return;
	el_ = el__;
	console.log ("--->"+el_.previousSibling.name)
	if (el_.previousSibling.name=="case_vw_vt")
	{
		var a={};
		var b={};
		var coll = el_.parentNode.parentNode.firstChild.childNodes
		coll[0].checked = true; // switch tab
		argv(coll[1].lastChild.firstChild.childNodes[1] .childNodes[2].childNodes[1], a, "name", null, b)
		if (b.casevwr && b.casevwr.length>0)
		{
			p = b.casevwr[0].parentNode;
			p.innerHTML = ""
			nd (p, te["case_r_r"], [], ra["cases"][0], [0])
		}
		 return;
	}
	var coll = el_.parentNode.parentNode.firstChild.childNodes
	var p = _(coll[1],"vdisp"); // load disposition
	coll[0].checked = true;
	el_ = document.createElementNS ("http://www.w3.org/1999/xhtml", "div");
	nd (el_, te["activity_disposition_r_case_new"], [], r, [0]);
	p.insertBefore (el_, p.firstChild);
	
}

function activity_disposition_ufn (el, u, a, r, m)
{
	var el_ = document.createElementNS ("http://www.w3.org/1999/xhtml", "div");
	var p = document.getElementById ("vp");
	p.style.display = "none";
	p.innerHTML = "";
	p = _(__(elvp,"vf"),"vdisp")
	elvp = null;
	nd (el_, te["activity_disposition_r_dsp_new"], [], r, [0]);
	p.insertBefore (el_, p.firstChild);
}

function activity_reporter_ufn (el, u, a, r, m)
{
	var r = ra["cases"][0]; 
	var t = r[0]>0 ? "case_vw_id" : "case_new";
	var coll = __(el,"vf").parentNode.nextSibling.childNodes
	coll[0].checked = true; // switch tab
	coll[1].innerHTML = "";
	nd (coll[1], te[t], [], r, [0]);
}

function activity_contact_ufn (el, u, a, r, m)
{
	var el_ = document.createElementNS ("http://www.w3.org/1999/xhtml", "div");
	var p = document.getElementById ("vp");
	p.style.display = "none";
	p.innerHTML = "";
	p = _(__(elvp,"vf"),"contact")
	p.innerHTML = "";
	elvp = null;
	nd (p, te["activity_contact"], [], r, [0]);
	if (!p.nextSibling) return
	p = _(p.nextSibling,"vcontactnew")
	if (!p) return
	nd (el_, te["activity_contact_r_new"], [], ra["dispositions"][0], [0]); /// ??
	p.insertBefore (el_, p.firstChild);
}

function activity_notify_ufn (el, u, a, r, m)
{
	var coll = document.getElementById ("vv").childNodes[6].childNodes[0].childNodes;
	var coll_ = coll[1].childNodes[1].childNodes;
	coll[0].checked = true
	coll_[0].checked = true;
	coll_[1].innerHTML = "";
	nd (coll_[1], te["activity_vw_id"], ["activity_vw_id_tabs_case","activity_vw_id_toolbar"], r, [2]);	
	ACT_COUNT--
	notifs()
}

// ---

function activity_close (vw) 
{
	document.getElementById ("activity_close").checked = true;;
	vw.parentNode.parentNode.firstChild.firstChild.checked = true;
	vw.innerHTML = "";
}

function _activity_close ()
{
	var vw = document.getElementById ("vv").childNodes[6].childNodes[0].childNodes[1].childNodes[1].childNodes[1]; 
	activity_close (vw)
}

function _activity_contact_del ()
{
	var p = __(this,"contact")
	this.previousSibling.checked = true;
	p.innerHTML = ""
	nd (p, te["activity_contact_none"], [], [], [0])
}

function _activity_postj ()
{
	var u = this.id.split ("-");
	var p = __(this,"ve"); 
	var o = {};
	jso (__(elvpf?elvpf:(elvp?elvp:p),"vfvwm").firstChild.lastChild, o);		// src
	jso (p, o); 													// form
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
}

function _activity_contact_new ()
{
	var u = this.id.split ("-");
	var p = document.getElementById ("vp");
	var r_ = ra[u[1]][0].slice (0)
	var kk = ra["contacts_k"]
	var o = {};
	ra = {};
	for (var k_ in re) ra[k_]=re[k_];
	jso (__(this,"vfvwm").firstChild.lastChild, o);						// src
	r_[kk[re["case_src"][o.src][11]][0]] = o.src_address;
	elvp = this.nextSibling
	vp (p);
	nd (p, te[u[0]], [], r_, [0])
}

function _activity_disposition_r ()
{
	var u = this.id.split ("-");
	var a = {};
	this.previousSibling.checked = true;
	argv (_(__(this,"vt").previousSibling,"contact"), a);
	argv (this, a);
	// console.log (a)
	if (a.contact_id && a.contact_id>0)
	{
		var o = {};
		jso (__(this,"vfvwm").firstChild.lastChild, o);		// src
		o.case_id = a.case_id;
		o.contact_id = a.contact_id
		url (this, "activity_reporter", u[1], "", null, 2, o, "POST");
		return
	}
	var p = document.getElementById ("vp");
	elvp = this.nextSibling;
	vp (p)
	url (p, u[0], u[1], ("-1"+"?contact_id=-1&case_id="+a.case_id)); // todo: load audit trail instead of case
}

function _activity_vw_id (ev) 
{
	var coll = document.getElementById ("vv").childNodes[6].childNodes[0].childNodes[1].childNodes[1].childNodes; 
	var u = ["activity_vw_id_tabs","activities"];
	var k = re["activities_k"];
	var r_ = re["r_"][0].slice(0);
	var a = {};

	argv (this, a);

	if (a.src_uid==undefined) // simulate chani 
	{ 
		var user_cid = document.getElementById ("user_cid").value;
		a.src_ts = Date.now()/1000;
		a.src_uid = a.src+"-"+user_cid+"-"+Date.now ();
		if (a.src_uid2==undefined) a.src_uid2 = a.src_uid+"-1";
		if (a.src_callid==undefined) a.src_callid = a.src_uid2;
		// a.src_address =  "0700112233"; // debug
		a.src_usr = user_cid
		a.src_vector = 2;
	}

	r_[k["src"][0]] = a.src;
	r_[k["src_ts"][0]] = a.src_ts;
	r_[k["src_uid"][0]] = a.src_uid;
	r_[k["src_callid"][0]] = a.src_callid;
	r_[k["src_address"][0]] = a.src_address;
	r_[k["src_usr"][0]] = a.src_usr;
	r_[k["src_vector"][0]] = a.src_vector;
	r_[k["src_uid2"][0]] = a.src_uid2;
	if (re["case_src"][a.src][11]=="phone") r_[k["src_address"][0]] = _phone_fmt (a.src_address);

	ra = {};
	for (var k_ in re) ra[k_]=re[k_];

	this.previousSibling.checked = true; // hilite call-notif
	coll[0].parentNode.parentNode.previousSibling.checked = true;
	coll[0].checked = true;
	coll[1].innerHTML = "";

	var s = a[".id"];
	if ((a[".id"]*1) < 1) 
	{
		// todo: load blank walkin form  instead of querying db
		s+="?src=" + a.src + "&src_uid=" + a.src_uid + "&src_uid2=" + a.src_uid2 + "&src_vector="+a.src_vector+"&src_callid="+a.src_callid;
		if (r_[k["src_address"][0]].length<1)  
		{
			ra["dispositions_ctx"] = [["0","10","0","0","0","",""]]
			nd (coll[1], te["activity_vw_id"], ["activity_vw_id_tabs_walkin","activity_vw_id_toolbar"], r_, [2]);	
			return;
		}
		s += "&src_address="+r_[k["src_address"][0]];
	}
	nd (coll[1], te["activity_vw_id"], ["noop","activity_vw_id_toolbar"], r_, [2]);	
	url (coll[1].lastChild, u[0], u[1], s);

	boo (ev)
}

function _activity_notify ()
{
	var u = this.id.split ("-");
	if (this.previousSibling.checked == true) return; // dont double click
	this.previousSibling.checked = true;
	url (__(this,"ve"), u[0], u[1], this.previousSibling.value, null, 2, {"":""}, "POST");
}