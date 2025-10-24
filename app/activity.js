var ACT_COUNT = 0;

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
	{ div:[] }, // message reload ctx
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

te["activity_reporter_ufn"] = { ufn:["activity_reporter_ufn"] };

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

// -------------------------------------------------------------------------------------------------

te["activity_contact_disposition_btn"] = { div:["c"], c:
[
	{ ac:["ab x t","activity_disposition-contacts^disposition-@","_vp","x y03 cr",""], c:
	[
		{ s:["","# Disposition"] },
		{ div:["e"], arg:["",".id","%0"] }
	]},
	{ div:["g"], arg:["","","activity_disposition_r_dsp_new-dispositions-vf-vdisp-!"] }
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
				{ ac:["abs w03 ab","activity_contact_none-r_","_rm","w02 x y03 tc h2 cb","&Cross;"] }
			]},
			{ div:["e"] }
		]},
		{ div:[], c:
		[
			{ ac:["au t","activity_contact_vw_id-contacts-@","_vp","cr",""], c:
			[
				{ s:["x y h3",":v:contacts:fullname"] },
				{ div:["e"], arg:["",".id","%0"] }
			]},
			{ div:[] }
		]},
		{ div:["x t03 s"], c:
		[
			{ uval:["",":v:contacts:age_group"] },
			{ uval:["",":v:contacts:sex"] },
			{ div:["e"] }
		]},
		{ div:["x y03 s"], c:
		[
			{ uval:["",":v:contacts:location"] },
			{ span:["x i co","",":v:contacts:landmark"] },
			{ div:["e"] }
		]},
	]},
	{ div:["b05"], c:
	[
		{ u:[null] },
		{ ac:["d ab r05",null,"_activity_postj","xx y tr gr cw bd16",null] },
		{ p:["e","nb"] }
	]}
]};

te["activity_contact"] = { div:["ba_b bd gw","va"], c: 
[ 
	{ ufn:["activity_contact_uuid_ufn"] },
	{ div:["","ve"], c:
	[
		{ activity_contact_:["","activity_contact_disposition_btn","case_new-reporters^uuid-vw","New Case"] },
		{ p:["","o"], arg:["","case_id","-1"] }
	]} 
]};

te["activity_contact_none"] = { c:
[
	{ ufn:["activity_contact_uuid_ufn"] },
	{ div:["bd gws_"], c:
	[
		{ div:["x y h07"], c:
		[
			{ s:["c x y cd","Select Reporter"] },
			{ div:["e"] }
		]},
		{ div:["y"], c:
		[
			{ div:["c"], c:
			[
				{ ac:["ax x y02","activity_disposition-contacts^disposition-@","_vp","x y03 bd cr",""], c:
				[
					{ s:["","# Disposition"] },
					{ div:["e"], arg:["",".id","-1"] }
				]},
				{ div:["g"], arg:["","","activity_disposition_r_dsp_new-dispositions-vf-vdisp-!"] }
			]},
			{ div:["d"], c:
			[
				{ ac:["ax x y02","case_contact_new-r_-^","_vp","x y03 bd cr",""], c:
				[
					{ s:["","+ New Reporter"] },
					{ div:["e"], c:[ { arg:["","",""], ufn:["activity_src_address_ufn"] } ] }
				]},
				{ div:["g"], arg:["","","activity_contact_r_new-dispositions-vf-vcontactnew-!"] } 
			]},
			{ div:["e"] }
		]}
	]}
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

te["activity_contact_r_"] = { div:["","va"], c:
[
	{ input:["g","",".id",":v:dispositions:reporter_contact_id","radio",null] },
	{ div:[null,"activity_contact-contacts-contacts-contact"], ev:["_u"], c:
	[
		{ p:["","nb"] }, 
		{ li:["x t02  oh cb r bd"], c:
		[
			{ div:["c l w01_ t08"], s:["opt",""] },
			{ div:["c w35"], contact_vw_rv:[":v:dispositions:reporter_fullname", ":v:dispositions:reporter_age_group", ":v:dispositions:reporter_sex", "d x t cd s",":v:dispositions:created_on:d:dmyhnr", ":v:dispositions:reporter_location",":v:dispositions:reporter_landmark"] },
			{ div:["e"] } // , arg:["",".id",":v:dispositions:reporter_conntact_id"] }
		]} 
	]}
]};

te["activity_contact_r_new"] = { div:[], c:
[
	{ activity_contact_r_:["1","r bd gh mb"] },
	{ div:["","nxfn"], arg:["","","activity_contact-contacts_disposition-contacts-contact"] } // cascading uvpfn
]},

te["activity_contact_r"] = { div:[], activity_contact_r_:["","r bd gws_ mb"] };

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
	{ p:["","contact"], u:["activity_contact_none","activity_"] },
	{ div:[], c:
	[
		{ div:["tt"], c:
		[
			{ s:["c xx y cd","Matching Reporters"] },
			{ div:["e"] }
		]},
		{ div:["","vt"], c: // 
		[
			{ u:["activity_contact_ls","dispositions_ctx"] }
		]}
	]},
]};

te["activity_contacts_none"] = { div:["xx","contacts"], c:
[
	{ p:["","contact"], u:["activity_contact_none","activity_"] },
	{ div:[], c:
	[
		{ div:["tt","vt"], c:
		[
			{ p:["","vcontactnew"] }
		]}
	]}
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
	{ s:["c micon cd","navigate_next"] },
	{ s:["c l  b",CASE_ID_PREFIX] },
	{ s:["c x b",":v:dispositions:case_id"] },
	{ s:["c micon cd","navigate_next"] },
	{ div:["c x "], uval:["",":v:dispositions:case_category"] },
	// { s:["c x20 t cd",":v:dispositions:case_priority::case_priority:2"] },
	// { s:["c t cd",":v:dispositions:case_status::case_status:1"] },
	// { div:["e"] }
]};

te["activity_disposition_r_fullname"] = { div:["c l r10"], s:["x y03 gws_ bd8 mtn3",":v:dispositions:reporter_fullname"] };

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
		{ div:["y02"], c:
		[
			{ div:["c x "], uval:["",":v:dispositions:disposition"] },	
			{ u:[":v:dispositions:case_id:u:::0:noop:activity_disposition_rv_case"] },
			{ u:[":v:dispositions:reporter_contact_id:u:::0:noop:activity_disposition_r_fullname"] },
			{ div:["c cd "], c:
			[
				{ uval:["",":v:dispositions:reporter_sex"] },
				{ uval:["",":v:dispositions:reporter_age_group"] },
			]},	
			{ div:["e"], arg:["","case_id",":v:dispositions:case_id"] }	
		]}
	]},
	{ p:["","nb"] } // nb
]};

te["activity_disposition_r_case_"] = { div:["l20","va"], c:
[
     { input:["g","","advwt","%0","radio"] },
	{ li:[null,"activity_disposition_vw-cases"], ev:["_activity_disposition_r"], activity_disposition_r_:[""] },
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

te["activity_disposition_list"] = { list:["activity_disposition_title", "activity_disposition_nb", "", "activity_disposition_k", "activity_disposition_r", "dispositions", ":u::4:0:noop:activity_disposition_footer"] };

te["activity_list"] = { c:
[
	{ div:["d w40 r15 t01"], s:["abs w40 b20",""], u:[":u::4:0:activity_contacts_none:activity_list_contacts"] },
     { div:["mh30 mr43","vt"], u:["activity_disposition_list","dispositions_ctx"] },
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
    { arg:["","src_ts",":v:activities:src_ts"] },
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

te["activity_vw_id_tabs_chat"] = 		{ activity_vw_id_tabs_:["","activity_vw_id_tabs_0","","vfvw","1"] };

te["activity_vw_id_tabs_walkin"] = 	{ activity_vw_id_tabs_:["1","activity_vw_id_tabs_0_walkin","","vfvw",""] };

te["activity_vw_id_tabs_case"] = 		{ activity_vw_id_tabs_:["","noop","1","vf",""] };

te["activity_vw_id_"] = { c: 
[
	{ div:["","vb"], c:
	[
		{ u:[null] }, 			// channel menu
		{ div:[], c:[ { p:["g","o"], c:
		[
			{ activity_vw_id_args:[] }, 
			{ arg:["","activity_id",":v:activities:id"] },
			{ arg:["","contact_uuid_id","-1"] },
			{ arg:["","activity_ca_id",":v:activities:ca_id"] },
		]} ]}
	]},
	{ form:[], u:[null] } 		// tabs
]};

te["activity_vw_id"] = { activity_vw_id_:["activity_vw_id_toolbar","activity_vw_id_tabs"] }; 

te["activity_vw_id_case"] = { activity_vw_id_:["activity_vw_id_toolbar","activity_vw_id_tabs_case"] }; 

te["activity_vw_id_notif"] = { activity_vw_id_:["notification_toolbar","activity_vw_id_tabs_case"] }; 

te["activity_vw_id_chat"] = { activity_vw_id_:["ati_toolbar","activity_vw_id_tabs_chat"] }; 

te["activity_vw_id_call"] = { activity_vw_id_:["call_toolbar","activity_vw_id_tabs"] }; 

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
	{ li:["sbr cb x15 y03 bt_ s",""], ev:["_activity_vw_id"], c: 
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
		{ div:["g"], c:[ { arg:["",".id","%0"] }, { activity_vw_id_args:[] } ] }
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

te["notification_toolbar"] = { div:[], c:
[
	{ div:["d w05 t01"], s:["abs w05 bd8 y15 gw zzzzz",""], c:
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
	{ ufn:["activity_notifs_ufn","%4"] }
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
	]}
]};

te["notification_lst_r_vw"] = { div:["h05 bb_"], c:
[
	{ input:["g","","sbr","%0","radio","1"] },
	{ li:["sbr cb xx bb_ ",""], ev:["_activity_vw_id"], c:
	[
		{ notification_lst_r_:[] },
		{ div:["g"], c:[ { arg:["",".id","%0"] }, { activity_vw_id_args:[] } ] }
	]},
	{ ufn:["activity_notify_ufn"] }
]};

te["notification_lst_r"] = { div:["","ve"], c:
[
	{ div:["btn h05 bb_"], c:
	[
		{ input:["g","","sbr","%0","radio"] },
		{ li:["sbr cb xx ","activity_notify-activities^notify"], ev:["_postj"], notification_lst_r_:[] },
		{ p:["","o"], arg:["",".id","%0"] }
	]},
	{ s:["savl xx y h04 bb_","..."] } // place holder for on click
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

function activity_messages_height (el, u, a, r, m)
{
	el.style.height = window.innerHeight-210;
	var h = el.scrollHeight;
	// console.log (" [scroll height ] "+h);
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
	//for (var i=0; i<n; i++)	// update read status
	//{
	//	var r = rr[i];
	//	//console.log (" ---> "+r[0]+","+el.firstChild.value + "|"+i+" of "+n)
	//	if (!el) break;
	//	if ((r[0]*1) > (el.firstChild.value*1)) continue;
	//	if ((r[0]*1) == (el.firstChild.value*1)) 
	//	{
	//		_(el,"tm","input").parentNode.firstChild.firstChild.innerHTML = r[15];
	//		el = el.previousSibling
	//	}
	//}
	activity_messages_height (p, u, a, r, m);
}

function activity_message_sended (el, u, a, r, m)
{
	var p = __(el,"ve");
	var k = ra["messages_k"]
	var el = nd (el, te["activity_messages_txt"], [], [], [0]);
	el.focus (); // console.error (el.tagName)
	url (p.parentNode.childNodes[1], "activity_messages", "messages", ("?src="+r[k["src"][0]]+"&src_callid="+r[k["src_callid"][0]]+"&"));
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
		jso (p_.firstChild.lastChild, o);   	// channel session details
		jso (p,o); 						// ve details
		url (p, "activity_message_send", "messages", "", null, 2, o, "POST");
		return false;
	}
}

// -------------------------------------------------------------

function activity_case_ufn (el, u, a, r, m)
{
	var kk = ra["dispositions_k"];
	el__ = __(el,"vfvw")
	el_ = __(el,"vf")
	el_.innerHTML = "";
	nd (el_, te["case_vw_id"], [], ra["cases"][0], [0]);
	if (r[kk["src"][0]]=="escalation" || r[kk["src"][0]]=="update")  return;
	el_ = el__;
	var p = null;
	var coll = el_.parentNode.parentNode.firstChild.childNodes
	coll[0].checked = true; // switch tab
	console.log ("--->"+el_.previousSibling.name)
	// return;
	if (el_.previousSibling.name=="case_vw_vt")
	{
		var a={};
		var b={};
		argv(coll[1].lastChild.firstChild.childNodes[1] .childNodes[2].childNodes[1], a, "name", null, b)
		if (b.casevwr && b.casevwr.length>0)
		{
			p = b.casevwr[0].parentNode;
			p.innerHTML = ""
			nd (p, te["case_r_r"], [], ra["cases"][0], [0])
		}
		 return;
	}
	el_ = document.createElementNS ("http://www.w3.org/1999/xhtml", "div");
	nd (el_, te["activity_disposition_r_case_new"], [], r, [0]);
	p = _(coll[1],"vdisp"); // disposition container
	p.insertBefore (el_, p.firstChild);
}

function activity_contact_uuid_ufn (el, u, a, r, m)
{
	var o = { contact_uuid_id:null };
	argv (__(el,"vfvwm").firstChild.lastChild, o);						// src
	o.contact_uuid_id_.value = r[0];
}

function activity_src_address_ufn (el, u, a, r, m)
{
	var o = {};
	argv (__(el,"vfvwm").firstChild.lastChild, o);						// src
	// console.error (o.src+","+o.src_address+"|"+el.tagName)
	el.id = "contacts-"+re["contacts_k"][re["case_src"][o.src][11]][0]
	el.value = o.src_address
}

function activity_notify_ufn (el, u, a, r, m)
{
	var coll = document.getElementById ("vv").childNodes[6].childNodes[0].childNodes;
	var coll_ = coll[1].childNodes[1].childNodes;
	coll[0].checked = true
	coll_[0].checked = true;
	coll_[1].innerHTML = "";
	nd (coll_[1], te["activity_vw_id_case"], [], r, [0]);	
	ACT_COUNT--
	notifs()
}

function activity_notifs_ufn (el, u, a, r, m)
{
	ACT_COUNT = 1*u[1]
	notifs();
}

// ---

function _activity_close ()
{
	var coll = document.getElementById ("vv").childNodes;
	var a = {}
	argv (coll[3], a)
	coll[6].childNodes[a.sbl].firstChild.checked = true;
	coll[2].lastChild.firstChild.checked = true;
	__(this,"vfvwm").innerHTML = ""
}

function _activity_postj ()
{
	var u = this.id.split ("-");
	var p = __(this,"ve"); 
	var o = {};
	var ld = 2
	jso (__(elvpf?elvpf:(elvp?elvp:p),"vfvwm").firstChild.lastChild, o);		// src
	jso (p, o); 													// form
	if (u.length>2 && u[2]=="vp")
	{
		p = document.getElementById ("vp");
		elvp = this.nextSibling
		vp (p)
		p.innerHTML = "<div id='ve'></div>"
		p = p.firstChild
		ld = 0
	}
	if (u.length>2 && u[2]=="vw")
	{
		p = __(this,"vf").parentNode.nextSibling.childNodes[1]
		p.previousSibling.checked = true
		ld = 0
	}
	url (p, u[0], u[1], o[".id"], null, ld, o, "POST");
}

function _activity_disposition_r ()
{
	var u = this.id.split ("-");
	var o = {};
	this.previousSibling.checked = true;
	jso (__(this,"vfvwm").firstChild.lastChild, o);		// src
	argv (this, o);
	if (o.contact_uuid_id && o.contact_uuid_id>0)
	{
		var coll = __(this,"vf").parentNode.nextSibling.childNodes;
		coll[0].checked = true
		coll[1].innerHTML = ""
		url (coll[1], "case_vw_id", u[1], o.case_id); 
		return
	}
	var p = document.getElementById ("vp");
	elvp = this.nextSibling;
	vp (p)
	url (p, u[0], u[1], o.case_id); 					// todo: load audit trail instead of case
}

function _activity_vw_id (ev) 
{
	ra = {};
	for (var k_ in re) ra[k_]=re[k_];

	var a = {};
	argv (this, a); 
	if (a.src_uid==undefined) // simulate chani 
	{ 
		var user_cid = document.getElementById ("user_cid").value;
		a.src_ts = Date.now()/1000;
		a.src_uid = a.src+"-"+user_cid+"-"+Date.now ();
		if (a.src_uid2==undefined) a.src_uid2 = a.src_uid+"-1";
		if (a.src_callid==undefined) a.src_callid = a.src_uid2;
		a.src_address =  ""; 
		a.src_usr = user_cid
		a.src_vector = 2;
	}
	if (re["case_src"][a.src][11]=="phone") a.src_address = _phone_fmt (a.src_address);

	this.previousSibling.checked = true; // hilite call-notif
	var coll = document.getElementById ("vv").childNodes[6].childNodes[0].childNodes;
	if (this.id.length>0) coll = __(this,"vftab").parentNode.nextSibling.childNodes;

	coll[0].parentNode.parentNode.previousSibling.checked = true;
	coll[0].checked = true;

	if ((a[".id"]*1) < 1 && a.src=="walkin")  
	{
		var k = re["activities_k"];
		var r_ = re["r_"][0].slice(0);
		r_[k["src"][0]] = a.src;
		r_[k["src_ts"][0]] = a.src_ts;
		r_[k["src_uid"][0]] = a.src_uid;
		r_[k["src_callid"][0]] = a.src_callid;
		r_[k["src_address"][0]] = a.src_address;
		r_[k["src_usr"][0]] = a.src_usr;
		r_[k["src_vector"][0]] = a.src_vector;
		r_[k["src_uid2"][0]] = a.src_uid2;
		
		ra["dispositions_ctx"] = [["0","10","0","0","0","",""]];
		coll[1].innerHTML = "";
		nd (coll[1], te["activity_vw_id_"], ["activity_vw_id_tabs_walkin","activity_vw_id_toolbar"], r_, [2]);	
		return;
	}

	var s = a[".id"];
	if ((a[".id"]*1) < 1) 
	{
		s +="?src=" + a.src + "&src_uid=" + a.src_uid + "&src_uid2=" + a.src_uid2 + "&src_vector="+a.src_vector+"&src_callid="+a.src_callid;
		s += "&src_usr="+a.src_usr;
		if (a.src_address && a.src_address.length>0) s += "&src_address="+a.src_address;
		if (a.case_id && a.case_id.length>0) s += "&case_id="+a.case_id;
	}
	url (coll[1], ("activity_vw_id"+re["case_src"][a.src][10]), "activities", s);
	boo (ev)
}
