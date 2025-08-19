
te["aiiv"] = { s:["c x","%0"] };

te["aiik"] = { s:["c x b","%0"] },

te["aiitag"] = { s:["c x bd cw gb mr mb","%0"] };

te["aii_usub"] = { usub:
[
"aii_transcript,aii_translation,aii_classification,aii_entity_extraction,aii_message,aii_message,aii_message,aii_message,aii_message,aii_message,aii_message,aii_message,aii_message,aii_message,aii_message,aii_classification_final,aii_insights_final,aii_final",
"r_",
"%0",
"transcript_segment,translation_update,classification_update,entity_update,post_call_processing_started,post_call_translation,post_call_translation_complete,post_call_classification,post_call_ner_analysis,post_call_ner_complete,post_call_qa_analysis,post_call_qa_complete,post_call_summary,post_call_summary_complete,post_call_insights,post_call_classification_complete,post_call_insights_complete,post_call_processing_complete"
]};

te["aii_final"] = { c:
[
	{ div:[""], c:[ { uo:["aiik","Case Summary",		"aiiv","aii","result","results","summary"] }, { div:["e"]} ] },

	{ div:[""], c:[ { uo:["aiik","Persons",			"aiiv","aii","result","results","entities","PERSON"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Organizations",	"aiiv","aii","result","results","entities","ORG"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","GPE",			"aiiv","aii","result","results","entities","GPE"] }, { div:["e"] } ] },
 	{ div:[""], c:[ { uo:["aiik","NORP",			"aiiv","aii","result","results","entities","NORP"] }, { div:["e"] } ] },

	{ div:[""], c:[ { uo:["aiik","Main Category", 	"aiiv","aii","result","results","classification","main_category"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Sub Category",    	"aiiv","aii","result","results","classification","sub_category"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Interventions",	"aiiv","aii","result","results","classification","intervention"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Priority",       	"aiiv","aii","result","results","classification","priority"] }, { div:["e"]} ] },

	{ s:["x y b","QA Opening"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","opening","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","opening","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Listening"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","listening","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","listening","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Proactiveness"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","proactiveness","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","proactiveness","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Resolution"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","resolution","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","resolution","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Hold"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","hold","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","hold","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Closing"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","closing","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiiv","aii","result","results","qa_scores","closing","score"] }, 
		{ div:["e"] } 
	]},

	{ div:[""], c:[ { uo:["aiik","Translation","aiiv","aii","result","results","translation"] }, { div:["e"]} ] },

]};

te["aii_insights_final"] = { c:
[
 	{ div:[""], c:[ { uo:["aiik","Case Summary","aiiv","aii","result","insights","case_summary"] }, { div:["e"]} ] },

	{ div:[""], c:[ { uo:["aiik","Persons","aiiv","aii","result","insights","named_entities","persons","text"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Organizations","aiiv","aii","result","insights","named_entities","organizations","text"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","Locations","aiiv","aii","result","insights","named_entities","locations","text"] }, { div:["e"] } ] },
 	{ div:[""], c:[ { uo:["aiik","Dates","aiiv","aii","result","insights","named_entities","dates","text"] }, { div:["e"] } ] },
 	{ div:[""], c:[ { uo:["aiik","Contact Information","aiiv","aii","result","insights","named_entities","contact_information","text"] }, { div:["e"] } ] },

	{ div:[""], c:[ { uo:["aiik","Category","aiiv","aii","result","insights","classification","category"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Interventions Needed","aiiv","aii","result","insights","classification","interventions_needed"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Priority","aiiv","aii","result","insights","classification","priority_level"] }, { div:["e"]} ] },

	{ div:[""], c:[ { uo:["aiik","Long Term Safety Planning","aiiv","aii","result","insights","case_management","safety_planning","immediate_actions"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Short Term Safety Planning","aiiv","aii","result","insights","case_management","safety_planning","long_term_measures"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Short Term Psychological Support","aiiv","aii","result","insights","case_management","psychosocial_support","short_term"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Long Term Psychological Support","aiiv","aii","result","insights","case_management","psychosocial_support","long_term"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Applicable Laws","aiiv","aii","result","insights","case_management","legal_protocols","applicable_laws"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Required Documents","aiiv","aii","result","insights","case_management","legal_protocols","required_documents"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Authorities","aiiv","aii","result","insights","case_management","legal_protocols","authorities_to_contact"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Immediate needs","aiiv","aii","result","insights","case_management","medical_protocols","immediate_needs"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Followup Care","aiiv","aii","result","insights","case_management","medical_protocols","follow_up_care"] }, { div:["e"]} ] },

	{ div:[""], c:[ { uo:["aiik","Red Flags","aiiv","aii","result","insights","risk_assessment","red_flags"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Potential Barriers","aiiv","aii","result","insights","risk_assessment","potential_barriers"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Protective Factors","aiiv","aii","result","insights","risk_assessment","protective_factors"] }, { div:["e"]} ] },

	{ div:[""], c:[ { uo:["aiik","Cultural Considerations","aiiv","aii","result","insights","cultural_considerations"] }, { div:["e"]} ] },

]};

te["aii_classification_final"] = { c:
[
	{ s:["x y b","Classification"] },
 	{ div:[""], c:[ { uo:["aiik","Main Category","aiiv","aii","result","classification","main_category"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","Sub Category","aiiv","aii","result","classification","sub_category"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Intervention","aiiv","aii","result","classification","intervention"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","Priority","aiiv","aii","result","classification","priority"] }, { div:["e"] } ] },
]};

te["aii_entity_extraction"] = { c:
[
	{ s:["x y b","Entities"] },
	{ div:[""], c:[ { uo:["aiik","Organisations","aiiv","aii","entities","ORG"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Products","aiiv","aii","entities","PRODUCT"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Dates","aiiv","aii","entities","DATE"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Persons","aiiv","aii","entities","PERSON"] }, { div:["e"]} ] },
]};

te["aii_classification"] = { c:
[
	{ s:["x y b","Classification"] },
 	{ div:[""], c:[ { uo:["aiik","Main Category","aiiv","aii","classification","main_category"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","Sub Category","aiiv","aii","classification","sub_category"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Intervention","aiiv","aii","classification","intervention"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","Priority","aiiv","aii","classification","priority"] }, { div:["e"] } ] },
]};

te["aii_translation"] = { div:[""], c:[ { uo:["noop","translation","aiiv","aii","window_translation"] }, { div:["e"]} ] },

te["aii_transcript"] = { div:[""], c:[ { uo:["noop","transcript","aiiv","aii","segment","transcript"] }, { div:["e"]} ] },

te["aii_message"] = { div:[""], c:[ { uo:["noop","","aiiv","aii","message"] }, { div:["e"]} ] },

te["aii"] = { c:
[
	{ div:["cr"], c:[ { uo:["noop","","aiiv","aii","update_type"] }, { div:["e"]} ] },
	{ div:[], uo:["noop","","aii_usub","aii","update_type"] }
]};

te["case_insights_txt"] = { s:["gy x y",null] }; // mime not application/json

te["case_insights"] = { umime:["case_insights_txt",":v:messages:src_msg", ":v:messages:src_mime", ":v:messages:src"] }

function uo_ (el, u, i, o)
{
	var n=1;
	i++;
	for (i; i<u.length; i++)
	{
		if (!o) return;
		if (!o[u[i]]) { console.error ("[uo] missing "+u[i]+" ("+i+")"); return; }
		o = o[u[i]];
		if (Array.isArray(o))
		{
			console.log ("[uo] isarray "+ u[i]+ " "+ o.length)
			for (var j=0; j<o.length; j++)
			{
				uo_(el,u,i,o[j])
			}
			return;
		}
	}
	if (Array.isArray(o)) 
	{
		n = o.length;
		if (n>0) nd (el, te[u[0]], [], [u[1]], [0]);
		for (var j=0; j<n; j++) nd (el, te[u[2]], [], [(""+o[j])], [0]);
		return;
	}
	if (o.length>0)
	{
		nd (el, te[u[0]], [], [u[1]], [0]);
		nd (el, te[u[2]], [], [(""+o)], [0]);
	}
}

function uo (el, u, a, r, m)
{
	var o = ra[u[3]];
	uo_(el,u,3,o);
}

