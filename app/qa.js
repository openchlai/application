rk["qa_metrics"] = ["qa_count","qa_percent"];
re["qa_metrics"] = 
{
"qa_count":	["qa_count",	"Count","0","qa_rpt_count","qa_rpt-qas-@:1:0:0"],
"qa_percent":	["qa_percent",	"Percent","1","qa_rpt_percent","qa_rpt-qas-@:1:1:1"],

}; 

re["qa_k"] = 
{
	"chan_vector":["chan_vector","Direction"],
	"chan_user_name":["chan_user_name","Extension"],
	
	/*
	"cat_0":["cat_0","Main Category"],
	"cat_1":["cat_1","SubCategory 1"],
	"cat_2":["cat_2","SubCategory 2"],
	"cat_3":["cat_3","SubCategory 3"],
        "cat_4":["cat_3","SubCategory 4"],
        "gbv_related":["gbv_related","GBV Related"],
	"src":["src","Case Source"],
	"priority":["priority","Priority"],
	"status":["status","Status"],
	"created_by":["created_by","Created By"],
	"escalated_to":["escalated_to","Escalated To"],
	"escalated_by":["escalated_by","Escalated By"],
	"assessment":["assessment","Case Assessment"],
	"justice":["justice","Status in Justice System"],
*/

	"dispositions^disposition":["dispositions^disposition","Disposition"],
	"dispositions^reporter_age_group":["dispositions^reporter_age_group","Reporter Age Group"],
	"dispositions^reporter_sex":["dispositions^reporter_sex","Reporter Sex"],
	"dispositions^reporter_national_id_type":["dispositions^reporter_national_id_type","Reporter ID Type"],
	"dispositions^reporter_nationality":["dispositions^reporter_nationality","Reporter Nationality"],
	"dispositions^reporter_lang":["dispositions^reporter_lang","Reporter Language"],
	"dispositions^reporter_tribe":["dispositions^reporter_tribe","Reporter Tribe"],
	"dispositions^reporter_location_0":["dispositions^reporter_location_0","Reporter Region"], 
	"dispositions^reporter_location_1":["dispositions^reporter_location_1","Reporter District"],
	"dispositions^reporter_location_2":["dispositions^reporter_location_2","Reporter County"],
	"dispositions^reporter_location_3":["dispositions^reporter_location_3","Reporter Sub County"],
	"dispositions^reporter_location_4":["dispositions^reporter_location_4","Reporter Parish"],
	"dispositions^reporter_location_5":["dispositions^reporter_location_5","Reporter Village"],
	"dispositions^reporter_location_6":["dispositions^reporter_location_6","Reporter Constituency"],
};

rk["qa_reporters_k"] = [
"dispositions^reporter_age_group", 		"dispositions^reporter_sex", 
"dispositions^reporter_national_id_type", 	"dispositions^reporter_nationality", 
"dispositions^reporter_lang", 			"dispositions^reporter_tribe", 
"dispositions^reporter_location_0", 		"dispositions^reporter_location_1", 
"dispositions^reporter_location_2", 		"dispositions^reporter_location_3", 
"dispositions^reporter_location_4", 		"dispositions^reporter_location_5",
"dispositions^reporter_location_6"];
re["qa_reporters_k"] = re["qa_k"];

rk["qa_cases_k"] = []; //[ "cat_0", "cat_1", "cat_2", "cat_3", "cat_4", "gbv_related", "src", "priority", "status", "created_by", "escalated_to", "escalated_by", "assessment", "justice"];
re["qa_cases_k"] = re["qa_k"];

rk["qa_calls_k"] = []; //[ "cat_0", "cat_1", "cat_2", "cat_3", "cat_4", "gbv_related", "src", "priority", "status", "created_by", "escalated_to", "escalated_by", "assessment", "justice"];
re["qa_calls_k"] = re["qa_k"];

rk["qa_qas_k"] = ["chan_user_name"];
re["qa_qas_k"] = re["qa_k"];

// ---

te["qa_rpt_metric_tab"] = { div:["c x","%4"], c:
[
	{ arg:["","","0"] },
	{ input:["g","","qa_metric","%2","radio","%9"] },
	{ li:["opth x y tc cb","%3","%1"], ev:["_tab"] }
]};

te["qa_k_tag"] = { "rpt_axis_tag":["::qa_k:0:1","xaxis"] };

te["qa_k_r"] = { "rpt_axis_r":["xaxis","qa_k_tag","::qa_k:0:1"] };

te["qa_rpt_ymenu"] = { c:
[
	{ div:["xx t bb_","vb"], c:
	[
		{ div:["c x"], c:[ { input:["g","","qa_rpt_vw_t","0","radio","1"] }, { ac:["ay tabu","","_tab","xx y cb","QA"] } ] },
		{ div:["c x"], c:[ { input:["g","","qa_rpt_vw_t","1","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Call"] } ] },
		{ div:["c x"], c:[ { input:["g","","qa_rpt_vw_t","2","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Case"] } ] },
		{ div:["e"] }
	]},
	{ div:["xx yy"], c:
	[
		{ div:[], c:[ { input:["g","","qa_rpt_vw_tv","0","radio","1"] }, { div:["tabv"], uchk:["qa_k_r",null,"qa_qas_k"] } ] },
		{ div:[], c:[ { input:["g","","qa_rpt_vw_tv","1","radio"] }, { div:["tabv"], uchk:["qa_k_r",null,"qa_calls_k"] } ] },
		{ div:[], c:[ { input:["g","","qa_rpt_vw_tv","2","radio"] }, { div:["tabv"], uchk:["qa_k_r",null,"qa_cases_k"] } ] },
		//{ div:[], c:[ { input:["g","","qa_rpt_vw_tv","3","radio"] }, { div:["tabv"], uchk:["qa_k_r",null,"qa_clients_k"] } ] },
		//{ div:[], c:[ { input:["g","","qa_rpt_vw_tv","3","radio"] }, { div:["tabv"], uchk:["qa_k_r",null,"qa_perps_k"] } ] },
		//{ div:[], c:[ { input:["g","","qa_rpt_vw_tv","4","radio"] }, { div:["tabv"], uchk:["qa_k_r",null,"qa_services_k"] } ] },
		//{ div:[], c:[ { input:["g","","qa_rpt_vw_tv","5","radio"] }, { div:["tabv"], uchk:["qa_k_r",null,"qa_referals_k"] } ] }
	]}
]};

te["qa_rpt_options"] = {  c:
[
	
	{ input:["g","","type","bar","radio","1"] },
	{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y ","Bar Chart"] },
		{ div:["e"] }			
	]},
	{ input:["g","","type","line","radio"] },
	{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y ","Line Chart"] },
		{ div:["e"] }			
	]},

	{ input:["g","","stacked","stacked","checkbox","1"] },
	{ ac:["r ay","","_rpt_chk","xx y02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["chk",""] },
		{ s:["c x y ","Stacked"] },
		{ div:["e"] }			
	]},

	{ input:["g","","sortrpt","1","checkbox"] },
	{ ac:["r ay","","_rpt_chk","xx y02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["chk",""] },
		{ s:["c x y ","Sort by Total"] },
		{ div:["e"] }			
	]},
]};

te["qa_rpt_"] = { c:
[
	{ form:["tt","vrpt"], c:
	[
		{ div:["c"], c:
		[
			{ div:["ay","va"], ac:["","","_dd","x y04 cb",""], c:
			[
				{ s:["c x b h3",null] },
				//{ div:["c"], s:["h02 w02 awb",""] },
				{ div:["e"] }
			]},
			{ div:["dd w20 y ba gw sh","vdd"], ev:["_undd"], c:
			[
				// metrics
			]}	
		]},
		{ div:["d"], c:
		[
			{ div:["ay l20","va"], ac:["","","_dd","x y04 h02 cb ba",""], c:
			[
				{ s:["c x","Options"] },
				{ s:["c x t02 micon","more_vert"] },
				{ div:["e"] }
			]},
			{ div:["dd w18 mln7 mt y ba gw sh","vdd"], ev:["_undd"], qa_rpt_options:[] }
		]},
		{ div:["d"], s:["",""], c:
		[
			{ div:["d"], c: // xaxis
			[
				{ div:["ba","va"], s:["",""], c:
				[	
					{ div:["d w03"], ac:["ay","","_dd","x y04",""],  c:[ { div:["h02 w02 awb"] } ] },
					{ div:["e"] }
				]},
				{ div:["dd y mln47 w50 gw ba mt1","vdd_rpt"], ev:["_undd"], c:[ { qa_rpt_ymenu:[null,null,null] } ] }
			]},
			{ div:["d"], uchk:["qa_k_tag",null] },
			{ s:["d l20 r05 y07 cd","Y Axis:"] },
			{ div:[] },
		]},
		{ div:["d"], s:["",""], c:
		[
			{ uchk:["rpt_dist_r",null,"dist"]}, // xaxis (distribution options)
			{ s:["d l20 r05 y07 cd","X Axis:"] },
			{ div:["e"] },
		]},
		{ div:["e"], c:
		[ 
			{ arg:["","metrics",null] },
			{ input:["g","","rpt",null,"checkbox","1"] },
		]}
	]},
	{ div:["","qa_rpt_vw-qas"], urpt:[] } 
]};

te["qa_rpt"] 			= { qa_rpt_:["::qa_metrics:4:1","%2","%2","%3","%4","%7"] };  
// te["qa_rpt_percent"] 	= { qa_rpt_:["Percent", "src","src","src", "src", "-", "qa_percent","qa_percent"] };
te["qa_rpt_count"] 		= { qa_rpt_:["Count", "chan_user_name","chan_user_name","chan_user_name", "chan_user_name", "-", "qa_count","qa_count"] };

te["qa_rpt_main"] = { c:
[
	{ div:[], c:[ { input:["g","","qa_rptv","0","radio","1"] }, { p:["tabv","vt"], qa_rpt_count:[] } ]},
	{ div:[], c:[ { input:["g","","qa_rptv","0","radio"] }, { p:["tabv oh","vt"] } ] },
	{ div:[], c:[ { input:["g","","qa_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
	{ div:[], c:[ { input:["g","","qa_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
	{ div:[], c:[ { input:["g","","qa_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
	{ div:[], c:[ { input:["g","","qa_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
	{ div:[], c:[ { input:["g","","qa_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
	{ div:[], c:[ { input:["g","","qa_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
]};

// -----------------------------

te["qa_score_yes_no"] = { p:["y","o"], c:[ { li:[], c:
[
	{ s:["c y w02",null] },
	{ s:["c y w27",null] }, 
	{ div:["e"] },

	{ input:["g","score",null,"0","radio"] },
	{ ac:["d ba mln1 opti","","_qa_opt","xx y cb ","No"] }, 
		
	{ input:["g","score",null,"1","radio"] },
	{ ac:["d ba mln1 opti","","_qa_opt","xx y cb ","Partialy"] }, 
		
	{ input:["g","score",null,"2","radio"] },
	{ ac:["d ba mln1 opti","","_qa_opt","xx y cb ","Yes"] }, 
			
	{ div:["e"] },
]} ]};

te["qa_ed_comment"] = { p:["","o"], c:
[
	{ s:["c y w02",null] },
	{ s:["c y n",null] },
	{ div:["e"] },
	{ ta:["ba","w35 h10 x y","",null,""] }
]};

te["qa_ed_section_title"] = { s:["t15 b10 b cb n",null] };

te["qa_tabc"] = { div:[null], c: 	// 
[
	{ input:["g","",null,null,"radio",null] },
	{ li:["cb gws_ tabi_",null], ev:[null], c:
	[
		{ div:["xx t h04"], c:
		[
			{ s:["d n",null] },
			{ s:["c w07",null] },
			{ div:["e"] }
		]},
		{ div:["y"], c:
		[
			{ s:["d x",null] },
			{ s:["d h",null] },
			{ div:["e"] }
		]}
	]},
]};

te["qa_tabi"] = { div:[null], c: 	// 
[
	{ input:["g","",null,null,"radio",null] },
	{ li:[null,null], ev:[null], c:
	[
		{ s:["c w15 x y ",null] },
		{ s:["d r05 y","%"] },
		{ s:["d w06 l y tr",null] },
		{ s:["d w04 x y tr",null]},
		{ div:["e"] }
	]}
]};

te["qa_nav"] = { div:["x yy"], c:
[
	{ ac:["c w08","prev","_qa_nav","x y04 gws_ bd_ cb n tc",""], c:[ { s:["","Previous"] }, { arg:["","",null] } ] },
	{ ac:["d w08","","_qa_nav","x y04 gws_ bd_ cb n tc",""], c:[ { s:["","Next"] }, { arg:["","",null] } ] },
	{ div:["e"] }
]};
		
te["qa_ed_r"] = { c: // 
[	
	{ div:["r05","vb"], c:
	[
		{ qa_tabi:["", "qaed","0","1", "cb tabi_ gws_","","_tab", "Opening / Greeting","0","0"] },
		{ qa_tabi:["", "qaed","1","", "cb tabi_ gws_","","_tab", "Listening","0","0"] },
		{ qa_tabi:["", "qaed","2","", "cb tabi_ gws_","","_tab", "Pro-activeness","0","0"] },
		{ qa_tabi:["", "qaed","3","", "cb tabi_ gws_","","_tab", "Resolution / Counselling","0","0"] },
		{ qa_tabi:["", "qaed","4","", "cb tabi_ gws_","","_tab", "Hold Procedures","0","0"] },
		{ qa_tabi:["", "qaed","5","", "cb tabi_ gws_","","_tab", "Closing","0","0"] },
		{ div:["n b"], c: 
		[
			{ input:["g","","qaed","6","radio"] },
			{ li:["cb tabi_ gws_",""], ev:["_tab"], c:
			[
				{ s:["c x y","Total Score"] },
				{ s:["d r05 y","%"] },
				{ s:["d w06 l y tr","0"] },
				{ s:["d w04 x y tr","0"]},
				{ div:["e"] }
			]}
		]}
	]},
	
	{ div:["gp"], c:[ { p:["c","nb"] }, { div:["e"] } ] },
	
	{ div:["b40"], c:
	[
		{ div:[], c:
		[
			{ input:["g","","qtv","0","radio","1"] },
			{ div:["tabv"], c:
			[
				{ div:[], c:
				[
					{ qa_ed_section_title:["Opening Call Greeting"] },
					{ qa_score_yes_no:["1.","Use of call opening phrase",  "opening_phrase","opening_phrase","opening_phrase"]  }, 
					{ qa_ed_comment:["2.","Section Comments","opening_phrase_comments"] },
				]},
				//{ div:["x yy"], c:
				//[
				//	{ ac:["d w08","","_qa_nav","x y gws_ bd_ cb n tc",""], c:[ { s:["","Next"] }, { arg:["","","1"] } ] },
				//	{ div:["e"] }
				//]}
			]},
		]},
	
		{ div:[], c:
		[
			{ input:["g","","qtv","1","radio"] },
			{ div:["tabv"], c:
			[
				{ div:[], c:
				[
					{ qa_ed_section_title:["Listening Skills"] },
					{ qa_score_yes_no:["1.","Caller was not interrupted during the conversation", "non_interrupting","non_interrupting","non_interrupting"]  }, 
					{ qa_score_yes_no:["2.","Empathizes with the caller on the issues raised",   "empathy","empathy","empathy"]  }, 
					{ qa_score_yes_no:["3.","Rephrases or paraphrases the issues / query back to caller.",   "paraphrasing","paraphrasing","paraphrasing"]  },
					{ qa_score_yes_no:["4.","Uses 'please' and 'thank you' when requesting and receiving information.",   "courteous", "courteous","courteous"]  },
					{ qa_score_yes_no:["5.","Does not hesitate or sound unsure when providing feedback.",   "nonhesitant", "nonhesitant","nonhesitant"]  },
					{ qa_ed_comment:["6.","Section Comments","listening_comments"] },
				]},
				//{ qa_nav:["0","2"] }
			]}
		]},
		
		{ div:[], c:
		[
			{ input:["g","","qtv","2","radio"] },
			{ div:["tabv"], c:
			[
				{ div:[], c:
				[
					{ qa_ed_section_title:["Pro-activeness"] },
					{ qa_score_yes_no:["1.","Willingness to solve additional issues not proposed by the client.", "extra_mile_willingness","extra_mile_willingness","extra_mile_willingness"]  }, 
					{ qa_score_yes_no:["2.","Confirmation of client's satisfaction with action points given",   "confirms_client_satisfaction","confirms_client_satisfaction","confirms_client_satisfaction"]  }, 
					{ qa_score_yes_no:["3.","Follows up on case updates.",   "follows_up_on_case_updates","follows_up_on_case_updates","follows_up_on_case_updates"]  },
					{ qa_ed_comment:["4.","Section Comments","pro_active_comments"] },
				]},
				//{ qa_nav:["1","3"] }
			]}
		]},
		
		{ div:[], c:
		[
			{ input:["g","","qtv","3","radio"] },
			{ div:["tabv"], c:
			[
				{ div:[], c:
				[
					{ qa_ed_section_title:["Resolution / Counselling provided"] },
					{ qa_score_yes_no:["1.","Gives accurate and precise information to the caller.", "accuracy","accuracy","accuracy"]  }, 
					{ qa_score_yes_no:["2.","Correct use of language. Wordings, phrases, greetings etc.",   "grammar","grammar","grammar"]  }, 
					{ qa_score_yes_no:["3.","If not sure of the information, did the counsellor consult.",   "consults","consults","consults"]  },
					{ qa_score_yes_no:["4.","Follows accurate steps while addressing the client's problem.",   "procedure_adherance", "procedure_adherance","procedure_adherance"]  },
					{ qa_score_yes_no:["5.","Explains in detail to the caller the process of doing the problem solving.",   "educative", "educative","educative"]  },
					{ qa_ed_comment:["6","Section Comments","resolution_comments"] },
				]},
				//{ qa_nav:["2","4"] }
			]}
		]},
		
		{ div:[], c:
		[
			{ input:["g","","qtv","4","radio"] },
			{ div:["tabv"], c:
			[
				{ div:[], c:
				[
					{ qa_ed_section_title:["Hold procedures"] },
					{ qa_score_yes_no:["1.","Provides an explanation/instructions to the caller before placing on hold/transfer and obtains consent", "notifies_hold","notifies_hold","notifies_hold"]  }, 
					{ qa_score_yes_no:["2.","Revisits caller, providing status and offering. Always thanks the caller for holding.",   "updates_hold","updates_hold","updates_hold"]  }, 
					{ qa_ed_comment:["3.","Section Comments","hold_comments"] },
				]},
				//{ qa_nav:["3","5"] }
			]}
		]},
		
		{ div:[], c:
		[
			{ input:["g","","qtv","5","radio"] },
			{ div:["tabv"], c:
			[
				{ div:[], c:
				[
					{ qa_ed_section_title:["Closing the Call"] },
					{ qa_score_yes_no:["1.","Demonstrates appreciation and thanks caller for calling", "call_closing_coutesy","call_closing_coutesy","call_closing_coutesy"]  }, 
					{ qa_ed_comment:["2.","Section Comments","call_closing_comments"] },
				]},
				//{ qa_nav:["4","6"] }
			]}
		]},
		
		{ div:[], c:
		[
			{ input:["g","","qtv","6","radio"] },
			{ div:["tabv"], c:
			[
				{ div:[], c:
				[
					{ qa_ed_section_title:["Feedback"] },
					{ qa_ed_comment:["","","feedback"] },
				]},
				{ div:["y20"], c:
				[
					//{ ac:["c w08","","_qa_nav","x y gws bd_ cb n tc",""], c:[ { s:["","Previous"] }, { arg:["","","5"] } ] },
					// { ac:["d w08 ag","","_postj","x y gb bd_ cw n tc","Finish"] },
					{ div:[], c:
					[
						{ ac:["btn ag","qa_form-qas","_postj","x y gb bd_ cw n tc","Save"] }, 
						{ div:["savl"], s:["x y go bd_ cw n tc","Saving..."] }
					]},
					{ p:["e","o"], arg:["","chan_uniqueid","%0"] }
				]}
			]}
		]}
	]}
]};

te["qa_form_vp"] = { div:["w100 ma bd sh__ gw_"], ev:["_undd"], c:
[
	{ div:["x15 tt"], c:
	[
		{ s:["c xx y12 n b","QA Form"] },
		{ ac:["d","","_uvp","xx y08 h cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ div:["","va"], c:
	[
		{ div:["x25 x15 tt n"], c:
		[
			{ s:["c y b",":v:qas:chan_vector::vector:1"] }, 
			{ s:["c x y b","Call"] },
			{ s:["c y b",":v:qas:chan_vector::vector:3"] },
			{ s:["c x y b",":v:qas:chan_phone"] },
			{ s:["c y b",":v:qas:chan_vector::vector:6"] },
			{ s:["c x y b",":v:qas:chan_usr"] },		
			{ s:["c xx y cd",":d:dmyhn:6: "] },
			{ div:["d"], ac:["ao ","vfile_vw_r-calls-va-play","_u","y03 gws cb",""], c:
			[ 
				{ s:["c x h3_ micon","play_arrow"] },
				{ s:["c y02","Talk Time"] },
				{ s:["c xx y02",":h:ms:11:"] },	
				{ div:["e"], c:[ { arg:["",".id",":v:qas:chan_uniqueid"] }, { arg:["","file","wav"] } ] },
			]},
			{ div:["e"]}
		]},
		{ div:["x25"], c:
		[
			{ p:["d t02","play"] },
			{ div:["e"] }
		]},
	]},
	{ div:["x20 tt","ve"], qa_ed_r:[] },
]};

// ------------------------------------------------------------------------

rk["qa_yes_no"] = ["0","1","2"];
re["qa_yes_no"] = 
{
"0":["0","No"],
"1":["1","Partialy"],
"2":["2","Yes"],
};

te["qa_vw_yes_no_r"] = { div:["d"], c:
[
	{ input:["g","score","v","1","radio","%9"] },
	{ li:["d ba_w mln1 optg xx y cb ","","%1"] }
]};

te["qa_vw_yes_no"] =  { form:[], c:[ { li:[], c:
[
	{ s:["c y w02",null] },
	{ s:["c y w27",null] }, 
	{ div:["e"] }, 
	{ uchk:["qa_vw_yes_no_r",null,"qa_yes_no"] },
	{ div:["e"] }
]} ]};

te["qa_vw_comment"] = { div:["x y","o"], c:
[
	{ s:["c y w02",null] },
	{ s:["c y",null] },
	{ div:["e"] },
	{ s:["h10 x y",null] }
]};

te["qa_vw_r"] = { c:
[
	{ div:["","vb"], c:
	[
		{ qa_tabi:["", "qaed","0","1", "cb tabg_ ","","_tab", "Opening / Greeting",":v:qas:greeting_score",":v:qas:greeting_score_p"] },
		{ qa_tabi:["", "qaed","1","", "cb tabg_ ","","_tab", "Listening",":v:qas:listening_score",":v:qas:listening_score_p"] },
		{ qa_tabi:["", "qaed","2","", "cb tabg_ ","","_tab", "Pro-activeness",":v:qas:proactive_score",":v:qas:proactive_score_p"] },
		{ qa_tabi:["", "qaed","3","", "cb tabg_ ","","_tab", "Resolution / Counselling",":v:qas:resolution_score",":v:qas:resolution_score_p"] },
		{ qa_tabi:["", "qaed","4","", "cb tabg_ ","","_tab", "Hold Procedures",":v:qas:holding_score",":v:qas:holding_score_p"] },
		{ qa_tabi:["", "qaed","5","", "cb tabg_ ","","_tab", "Closing",":v:qas:closing_score",":v:qas:closing_score_p"] },
		{ div:["n b"], c: 
		[
			{ input:["g","","qaed","6","radio"] },
			{ li:["cb tabg_",""], ev:["_tab"], c:
			[
				{ s:["c x y","Total Score"] },
				{ s:["d r05 y","%"] },
				{ s:["d w06 l y tr",":v:qas:total_score_p"] },
				{ s:["d w04 x y tr",":v:qas:total_score"]},
				{ div:["e"] }
			]}
		]},	
		{ div:["e"] }
	]},

	{ div:[], c:
	[	
			{ div:[], c:
			[
				{ input:["g","","qtv","0","radio","1"] },
				{ div:["tabv"], c:
				[
					{ div:["h40"], c:
					[
						{ qa_ed_section_title:["Opening Call Greeting"] },
						{ qa_vw_yes_no:["1.","Use of call opening phrase",  ":v:qas:opening_phrase"]  }, 
						{ qa_vw_comment:["2.","Section Comments",":v:qas:opening_phrase_comments"] },
					]},
					
				]},
			]},
	
			{ div:[], c:
			[
				{ input:["g","","qtv","1","radio"] },
				{ div:["tabv"], c:
				[
					{ div:["h40"], c:
					[
						{ qa_ed_section_title:["Listening Skills"] },
						{ qa_vw_yes_no:["1.","Caller was not interrupted during the conversation", ":v:qas:non_interrupting"]  }, 
						{ qa_vw_yes_no:["2.","Empathizes with the caller on the issues raised",   ":v:qas:empathy"]  }, 
						{ qa_vw_yes_no:["3.","Rephrases or paraphrases the issues / query back to caller.",   ":v:qas:paraphrasing"]  },
						{ qa_vw_yes_no:["4.","Uses 'please' and 'thank you' when requesting and receiving information.",   ":v:qas:courteous"]  },
						{ qa_vw_yes_no:["5.","Does not hesitate or sound unsure when providing feedback.",   ":v:qas:nonhesitant"]  },
						{ qa_vw_comment:["6.","Section Comments",":v:qas:listening_comments"] },
					]},
				]}
			]},
			
			{ div:[], c:
			[
				{ input:["g","","qtv","2","radio"] },
				{ div:["tabv"], c:
				[
					{ div:["h40"], c:
					[
						{ qa_ed_section_title:["Pro-activeness"] },
						{ qa_vw_yes_no:["1.","Willingness to solve additional issues not proposed by the client.", ":v:qas:extra_mile_willingness"]  }, 
						{ qa_vw_yes_no:["2.","Confirmation of client's satisfaction with action points given",   ":v:qas:confirms_client_satisfaction"]  }, 
						{ qa_vw_yes_no:["3.","Follows up on case updates.",   ":v:qas:follows_up_on_case_updates"]  },
						{ qa_vw_comment:["4.","Section Comments",":v:qas:pro_active_comments"] },
					]},

				]}
			]},
		
			{ div:[], c:
			[
				{ input:["g","","qtv","3","radio"] },
				{ div:["tabv"], c:
				[
					{ div:["h40"], c:
					[
						{ qa_ed_section_title:["Resolution / Counselling provided"] },
						{ qa_vw_yes_no:["1.","Gives accurate and precise information to the caller.", ":v:qas:accuracy"]  }, 
						{ qa_vw_yes_no:["2.","Correct use of language. Wordings, phrases, greetings etc.",   ":v:qas:grammar"]  }, 
						{ qa_vw_yes_no:["3.","If not sure of the information, did the counsellor consult.",   ":v:qas:consults"]  },
						{ qa_vw_yes_no:["4.","Follows accurate steps while addressing the client's problem.",   ":v:qas:procedure_adherance"]  },
						{ qa_vw_yes_no:["5.","Explains in detail to the caller the process of doing the problem solving.",   ":v:qas:educative"]  },
						{ qa_vw_comment:["6","Section Comments",":v:qas:resolution_comments"] },
					]},

				]}
			]},
		
			{ div:[], c:
			[
				{ input:["g","","qtv","4","radio"] },
				{ div:["tabv"], c:
				[
					{ div:["h40"], c:
					[
						{ qa_ed_section_title:["Hold procedures"] },
						{ qa_vw_yes_no:["1.","Provides an explanation/instructions to the caller before placing on hold/transfer and obtains consent", ":v:qas:notifies_hold"]  }, 
						{ qa_vw_yes_no:["2.","Revisits caller, providing status and offering. Always thanks the caller for holding.",   ":v:qas:updates_hold"]  }, 
						{ qa_vw_comment:["3.","Section Comments",":v:qas:hold_comments"] },
					]},

				]}
			]},
		
			{ div:[], c:
			[
				{ input:["g","","qtv","5","radio"] },
				{ div:["tabv"], c:
				[
					{ div:["h40"], c:
					[
						{ qa_ed_section_title:["Closing the Call"] },
						{ qa_vw_yes_no:["1.","Demonstrates appreciation and thanks caller for calling", ":v:qas:call_closing_coutesy"]  }, 
						{ qa_vw_comment:["2.","Section Comments",":v:qas:call_closing_comments"] },
					]},

				]}
			]},
		
			{ div:[], c:
			[
				{ input:["g","","qtv","6","radio"] },
				{ div:["tabv"], c:
				[
					{ div:["h40"], c:
					[
						{ qa_ed_section_title:["Feedback"] },
						{ qa_vw_comment:["","",":v:qas:feedback"] },
					]},
					
				]}
			]}
		]}
]};


te["qa_vw_id"] = { c:
[
	{ div:["xx y15 h03","vb"], c:
	[
		{ div:["c ll "], ac:["ay","","_uvw","h2 x y bd16 gb cw micon","arrow_back"] },	
		{ s:["c xx y h2 b","QA Details"] },
		{ div:["d t01 w04 ll r05"], s:["w04 gw abs zzzz",""], c:
		[
			{ ac:["ay","","_uvw","cb bd y01",""], c:
			[
				{ s:["tc h b","&Cross;"] },
				// { s:["d x y s","Close"] },
				{ div:["e"] }
			]}
		]},
		{ div:["d w30 t01 casevwmenu"], s:["abs zzzz w30 h04 gw",""], c:
		[
			{ div:["e"] }
		]},
		{ div:["e"] }
	]},
	{ div:["x25","vb"], c:
	[
		{ div:["c w20"], s:["abs w20 gw",""], c:[ { call_vw_r:[] } ] },
		{ div:["d w35"], s:["abs w35 gw",""], c:[ { div:["","ve"], u:[":u::30:0:qa_ed_r:call_vw_id_qa_vw_r"] } ] }, //qa_ed_r:[] } ] },
		{ div:["e"] }
	]},
	{ div:["ml23 mr38 x40 mh90"], c:
	[
		{ s:["x y b","Reporter"] },
		{ div:[], c:
		[
			{ arg:["","src","call"] },
			{ arg:["","src_uid2","%0"] },
			{ arg:["","group","contact_id"] },
			{ uv:["call_activity_reporter","reporters"] }
		]},
		{ u:["call_activity_r","case_activities"] }
	]}
]};
// ------------------------------------------------------------------------

te["qa_f_tags"] = { c: 
[
	{ f:["CallDate",":k:qas_f:chan_chan_ts",			" :d:dmy:0: "," chan_chan_ts"] },

	{ f:["Talk Time (in seconds)",":k:qas_f:chan_talk_time",			" %0"," chan_talk_time"] },
	{ f:["Opening Score",":k:qas_f:greeting_score_p",		" %0"," greeting_score_p"] },
	{ f:["Listening Score",":k:qas_f:listening_score_p",		" %0"," listening_score_p"] },
	{ f:["Proactive Score",":k:qas_f:proactive_score_p",		" %0"," proactive_score_p"] },
	{ f:["Resolution Score",":k:qas_f:resolution_score_p",		" %0"," resolution_score_p"] },
	{ f:["Holding Score",":k:qas_f:holding_score_p",		" %0"," holding_score_p"] },
	{ f:["Closing Score",":k:qas_f:closing_score_p",		" %0"," closing_score_p"] },
	{ f:["Total Score",":k:qas_f:total_score_p",			" %0"," total_score_p"] },
	
	{ f:["Created On",":k:qas_f:created_on",			" :d:dmy:0: "," created_on"] },
	
	{ div:["e"] }
]};

te["qa_f"] = { div:["w55 ma sh__ y gw_","vddvf"], ev:["_undd"], c:
[
	{ s:["x20 tt b","Search"] },
	{ div:["x15 tt b20"], c:
	[
		{ div:["xx yy"], kf_d:["Call Date"," :d:dmy:0: ","chan_chan_ts",":k:qas_f:chan_chan_ts","chan_chan_ts",":k:qas_f:chan_chan_ts"] },
		// todo: counselor list
		
		{ div:["xx yy"], kf_s:["Talk Time (in seconds)","chan_talk_time",":k:qas_f:chan_talk_time"] },
		{ div:["xx yy"], kf_s:["Opening Score","greeting_score_p",":k:qas_f:greeting_score_p"] },
		{ div:["xx yy"], kf_s:["Listening Score","listening_score_p",":k:qas_f:listening_score_p"] },
		{ div:["xx yy"], kf_s:["Proactive Score","proactive_score_p",":k:qas_f:proactive_score_p"] },
		{ div:["xx yy"], kf_s:["Resolution Score","resolution_score_p",":k:qas_f:resolution_score_p"] },
		{ div:["xx yy"], kf_s:["Holding Score","holding_score_p",":k:qas_f:holding_score_p"] },
		{ div:["xx yy"], kf_s:["Closing Score","closing_score_p",":k:qas_f:closing_score_p"] },
		{ div:["xx yy"], kf_s:["Total Score","total_score_p",":k:qas_f:total_score_p"] },
				
		// todo: supervisor list
		{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:qas_f:created_on","created_on",":k:qas_f:created_on"] },
	]},
	{ vp_apply:["qa_f_tags-qas_f"] }
]};

// ------------------------------------------------------------------------

te["qa_footer"] = { div:["x ba"], c:
[
	{ div:["d y07"], pg:["pgto","qa_list-qas"," dh","da dl","qa_list-qas"," dh","da dr"] },
	{ div:["e"] }
]};

te["qa_r"] ={ div:[], c:
[
	{ input:["g","","qavwr","1","radio"] },
	{ ac:["ay w200 tabh","qa_vw_id-calls^vw","_vw","cb gw",""], c:
	[
		{ div:["c w14"], s:["tt b05 h01_  xx",":d:dmyhn:6: "] },
		{ div:["c w14"], s:["tt b05 h01_  xx",":v:qas:chan_user_name"] },		
		{ div:["c w10"], s:["tt b05 h01_  xx",":h:ms:11: "] },
		
		{ div:["c w10"], s:["tt b05 h01_  xx",""], c:[ { span:["","",":v:qas:greeting_score_p"] }, { span:["",""," %"]} ] },		
		{ div:["c w10"], s:["tt b05 h01_  xx",""], c:[ { span:["","",":v:qas:listening_score_p"] }, { span:["",""," %"]} ] },	
		{ div:["c w10"], s:["tt b05 h01_  xx",""], c:[ { span:["","",":v:qas:proactive_score_p"] }, { span:["",""," %"]} ] },	
		{ div:["c w10"], s:["tt b05 h01_  xx",""], c:[ { span:["","",":v:qas:resolution_score_p"] }, { span:["",""," %"]} ] },	
		{ div:["c w10"], s:["tt b05 h01_  xx",""], c:[ { span:["","",":v:qas:holding_score_p"] }, { span:["",""," %"]} ] },	
		{ div:["c w10"], s:["tt b05 h01_  xx",""], c:[ { span:["","",":v:qas:closing_score_p"] }, { span:["",""," %"]} ] },	
		{ div:["c w10"], s:["tt b05 h01_  xx",""], c:[ { span:["","",":v:qas:total_score_p"] }, { span:["",""," %"]} ] },	
	
		{ div:["c w14"], s:["tt b05 h01_  xx",":v:qas:created_by"] },	
		{ div:["c w14"], s:["tt b05 h01_  xx",":d:dmyhn:1: "] },
		{ div:["e"], arg:["",".id",":v:qas:chan_uniqueid"] }
	]},
	{ div:[] }
]};

te["qa_k"] = { div:["w200 bt bb"], s:["",""], c: 
[
	{ k_a:["c w14","qa_rr-qas","cd","Call Date","da db","chan_chan_ts",":k:qas_k:chan_chan_ts:2"] },
	{ k_a:["c w14","qa_rr-qas","cd","User","da db","chan_user_name",":k:qas_k:chan_user_name:2"] },
	{ k_a:["c w10","qa_rr-qas","cd","Talk Time","da db","chan_talk_time",":k:qas_k:chan_talk_time:2"] },
	
	{ k_a:["c w10","qa_rr-qas","cd st","Opening","da db","greeting_score_p",":k:qas_k:greeting_score_p:2"] },
	{ k_a:["c w10","qa_rr-qas","cd","Listening","da db","listening_score_p",":k:qas_k:listening_score_p:2"] },
	{ k_a:["c w10","qa_rr-qas","cd","Proactive","da db","proactive_score_p",":k:qas_k:proactive_score_p:2"] },
	{ k_a:["c w10","qa_rr-qas","cd","Resolution","da db","resolution_score_p",":k:qas_k:resolution_score_p:2"] },
	{ k_a:["c w10","qa_rr-qas","cd","Holding","da db","holding_score_p",":k:qas_k:holding_score_p:2"] },
	{ k_a:["c w10","qa_rr-qas","cd","Closing","da db","closing_score_p",":k:qas_k:closing_score_p:2"] },
	{ k_a:["c w10","qa_rr-qas","cd","Total Score","da db","total_score_p",":k:qas_k:total_score_p:2"] },
	
	{ k_a:["c w14","qa_rr-qas","cd","Supervisor","da db","created_by",":k:qas_k:created_by:2"] },
	{ k_a:["c w14","qa_rr-qas","cd st","Created On","da db","created_on",":k:qas_k:created_on:2"] },

	{ div:["e"] }
]};

te["qa_nb"] = { div:[], c:[ { u:["nb","qas_nb"] }, { div:["e"] } ] };

te["qa_title"] = { div:[] }; 

te["qa_list"] = { list:["qa_title","qa_nb","bl br ox","qa_k","qa_r","qas","qa_footer"] };

te["qa_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c t03"], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ input:["g","","qa_t_","0","radio","1"] },
				{ ac:["c","qa_main-qas-vftab","_u","x y cb b h2","QA Results"] }, 
				//{ ac:["c t02 x ay","","_dd","h02 w02 gws_ awb",""] },
				{ div:["e"] } //, arg:["","_title","%5"] }
			]},
			{ div:["dd x y gw ba sh nd w14","vdd"], c:
			[
			
			]}
		]},

		{ div:["c l40"], ac:["ay","qa_f-qas_f","_vpf","x t01 bd_ cb s",""], c:
		[ 
			{ s:["c t04 h3_ micon","search"] },
			{ div:["c x y","","Search"] }, 
			{ div:["e"] }
		]},

		{ div:["c l40"], ac:["ay","qas","_download","x t01 bd_ cb s",""], c:
		[ 
			{ s:["c t04 h3_ micon","download"] },
			{ div:["c x y","","Download"] }, 
			{ div:["e"] }
		]},

		{ div:["c l40"], c: 
		[
			{ arg:["qa_list-qas","","0"] },
			{ input:["g","","qas_t_","0","radio","1"] },
			{ li:["opto x gw s cb","qa_list-qas"], ev:["_tab"], c:
			[
				{ s:["c l t h3_ micon","list"] },
				{ div:["c xx y","","List"] }, 
				{ div:["e"] }
			]}
		]},

		{ div:["c l40"], c: 
		[
			{ arg:["qa_rpt_vw-qas-@","","1,0"] },
			{ input:["g","","qas_t_","1","radio"] },
			{ li:["opto x gw s cb","qa_rpt_main-r_"], ev:["_tab"], c:[ { div:[], c:
			[
				{ s:["c l t h3_ micon","bar_chart"] },
				{ s:["c xx y","Reports"] }, 
				{ div:["e"] }
			]} ]}
		]},
		
		{ div:["e"], c:[ { arg:["","","qa_list-qas"] }, { arg:["","","0"] }, { arg:["","","-1"] }, { arg:["","",""] } ] }
	]},

	{ div:["yy","vf"], c:[ { div:["","qa_f-qas_f"], c: // ev:["_n_vpf"], c:
	[
		{ qa_f_tags_k:[] }
	]} ]},

	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","qas_v","0","radio","1"] }, { p:["tabv yy","vt"], qa_list:[] } ] },
		{ div:[], c:[ { input:["g","","qas_v","1","radio"] }, { p:["tabv","vt"] } ] },				
	]}
]};
		
te["qas"] = { c:
[
	{ div:[], c:
	[	
		{ input:["g","","qa_vw_vt","0","radio","1"] }, 		// list
		{ p:["tabv x20 yy gw","vftab"], qa_main:[] } 
	]},
	{ div:[], c:
	[	
		{ input:["g","","qa_vw_vt","1","radio"] }, 		// _vw_id | _ed
		{ p:["tabv gw","vfvw"] }
	]}
]};

// ---------------------------------------------------------------------------------------

function _qa_nav ()
{
	var p = __(this,"ve");
	var i = this.firstChild.childNodes[1].value;
	p.firstChild.childNodes[i].firstChild.checked=true;
	p.lastChild.childNodes[i].firstChild.checked=true;
}

function _qa_opt ()
{
	var g = [["opening_phrase"],
["non_interrupting","empathy","paraphrasing","courteous","nonhesitant"],
["extra_mile_willingness","confirms_client_satisfaction","follows_up_on_case_updates"],
["accuracy","grammar","consults","procedure_adherance","educative"],
["notifies_hold","updates_hold"],
["call_closing_coutesy"]];
	var gv = [2,10,6,10,4,2];
	var el = this.previousSibling;
	el.checked = true;
	var gtot = 0;
	var  p = __(this,"ve");
	var coll = p.firstChild.childNodes;
	var a = {}
	argv (p, a);
	// console.log (JSON.stringify (a))
	for (var i=0; i<6; i++)
	{
		var tot = 0;
		for (var j=0; j<g[i].length; j++)
		{
			// console.log (g[i][j]+" = "+ a[g[i][j]])
			if (a[g[i][j]]) tot+= (a[g[i][j]]*1)
		}
		gtot += tot;
		// console.log ("qa group: "+i+"="+tot+"  | "+gtot)
		coll[i].childNodes[1].childNodes[3].innerHTML = ""+tot;
		coll[i].childNodes[1].childNodes[2].innerHTML = ""+(Math.round (((tot/gv[i])*100),0));
	}
	
	coll[6].childNodes[1].childNodes[3].innerHTML = ""+gtot;
	coll[6].childNodes[1].childNodes[2].innerHTML = ""+(Math.round (((gtot/34)*100),0));
}
