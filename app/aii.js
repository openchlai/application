te["aiirv"] = { s:["x","%0"] };
te["aiiv"] = { s:["c x","%0"] };
te["aiik"] = { s:["c x b","%0"] };
te["aiitag"] = { s:["c x bd cw gb mr mb","%0"] };

te["aii_usub"] = { usub:
[
"aii_transcript,aii_message,aii_message,aii_message,aii_message",
"r_",
"%0",
"post_call_transcription,post_call_translation,post_call_classification,post_call_summary"
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

	{ div:["tt"], s:["x y b","QA Opening"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","opening","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","opening","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Listening"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","listening","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","listening","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Proactiveness"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","proactiveness","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","proactiveness","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Resolution"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","resolution","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","resolution","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Hold"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","hold","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","hold","score"] }, 
		{ div:["e"] } 
	]},

	{ s:["x y b","QA Closing"] },
	{ div:[""], c:
	[ 
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","closing","submetric"] },
		{ div:["c"], uo:["noop","",       	"aiirv","aii","result","results","qa_scores","closing","score"] }, 
		{ div:["e"] } 
	]},

	{ div:["tt"], c:[ { uo:["aiik","Translation","aiiv","aii","result","results","translation"] }, { div:["e"]} ] },
    
    // ADDED Feedback form at end of Final view
    { feedback_form:[] }
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

    // ADDED Feedback form to insights view
    { feedback_form:[] }
]};

te["aii_classification_final"] = { c:
[
	{ s:["x y b","Classification"] },
 	{ div:[""], c:[ { uo:["aiik","Main Category","aiiv","aii","result","classification","main_category"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","Sub Category","aiiv","aii","result","classification","sub_category"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Intervention","aiiv","aii","result","classification","intervention"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","Priority","aiiv","aii","result","classification","priority"] }, { div:["e"] } ] },
]};

te["aii_entities"] = { c:
[
	{ div:[""], c:[ { uo:["aiik","Organisations","aiiv","aii","payload","insights","entities_detail","organizations"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Persons","aiiv","aii","payload","insights","entities_detail","persons"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Locations","aiiv","aii","payload","insights","entities_detail","locations"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Dates","aiiv","aii","payload","insights","entities_detail","key_dates"] }, { div:["e"]} ] },
]};

te["aii_summary"] = { c:
[
	{ div:[""], c:[ { uo:["noop","","aiiv","aii","payload","summary"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Risk Level","aiiv","aii","payload","insights","risk_assessment","risk_level"] }, { div:["e"]} ] },
    { div:[""], c:[ { uo:["aiik","Risk Indicators","aiiv","aii","payload","insights","risk_assessment","risk_indicators_found"] }, { div:["e"]} ] },

	{ aii_entities:[] },
    
    // ADDED Feedback form to Summary view
    { feedback_form:[] }
]};

te["aii_classification"] = { c:
[
 	{ div:[""], c:[ { uo:["aiik","Main Category","aiiv","aii","payload","classification","main_category"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","Sub Category","aiiv","aii","payload","classification","sub_category"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["aiik","Intervention","aiiv","aii","payload","classification","intervention"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["aiik","Priority","aiiv","aii","payload","classification","priority"] }, { div:["e"] } ] },
]};

te["aii_translation"] = { div:[""], c:[ { uo:["noop","","aiiv","aii","payload","translation"] }, { div:["e"]} ] };

te["aii_transcript"] = { c:[
	{ div:[""], c:[ { uo:["noop","","aiiv","aii","payload","transcript"] }, { div:["e"]} ] },

	{ feedback_form:[] }
]};

te["aii_message"] = { div:[""], c:[ { uo:["noop","","aiiv","aii","message"] }, { div:["e"]} ] };

te["aii_usub"] = { usub:
[
"aii_transcript,aii_translation,aii_classification,aii_summary,aii_message,aii_message",
"r_",
"%0",
"post_call_transcription,post_call_translation,post_call_classification,post_call_summary,post_call"
]};  

te["aii"] = { c:
[
	{ div:["cr"], c:[ { uo:["noop","","aiiv","aii","notification_type"] }, { div:["e"]} ] },
	{ div:[], uo:["noop","","aii_usub","aii","notification_type"] }
]};

te["case_insights_txt"] = { s:["gy x y",null] }; 

te["case_insights"] = { umime:["case_insights_txt",":v:messages:src_msg", ":v:messages:src_mime", ":v:messages:src"] };

function uo_ (el, u, i, o)
{
	var n=1;
	i++;
	for (i; i<u.length; i++)
	{
		if (!o) return;

		if (o[u[i]] === undefined || o[u[i]] === null) { console.error ("[uo] missing "+u[i]+" ("+i+")"); return; }
		o = o[u[i]];
		if (Array.isArray(o))
		{
			console.log ("[uo] isarray "+ u[i]+ " "+ o.length);
			for (var j=0; j<o.length; j++)
			{
				uo_(el,u,i,o[j]);
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

	var s = ""+o;
	if (s.length > 0)
	{
		nd (el, te[u[0]], [], [u[1]], [0]);
		nd (el, te[u[2]], [], [s], [0]);
	}
}

function uo (el, u, a, r, m)
{
	var o = ra[u[3]];
	uo_(el,u,3,o);
}
