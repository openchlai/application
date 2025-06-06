
te["aiiv"] = { s:["c x","%0"] };

te["aiitag"] = { s:["c x bd cw gb mr mb","%0"] };

te["aiik"] = { s:["c x b","%0"] },

te["aii"] = { c:
[
        { div:["cr"], c:[ { uo:["","noop","aiiv","aii","error"] }, { div:["e"]} ] },
	{ div:["cr"], c:[ { uo:["","noop","aiiv","aii","details","error_message"] }, { div:["e"]} ] },

	{ div:["u"], c:[ { uo:["","noop","aiiv","aii","step"] }, { div:["e"]} ] },

	{ div:[""], c:[ { uo:["Case Summary","aiik","aiiv","aii","data","insights","case_summary"] }, { div:["e"]} ] },

	{ div:[""], c:[ { ou:["Persons","aiik","aiik","aiiv","aii","data","insights","named_entities","persons"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Organisations","aiik","aiiv","aii","data","insights","named_entities","organizations"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Locations","aiik","aiiv","aii","data","insights","named_entities","locations"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Dates","aiik","aiiv","aii","data","insights","named_entities","dates"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Contact Information","aiik","aiiv","aii","data","insights","named_entities","contact_information"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Category","aiik","aiitag","aii","data","insights","classification","category"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Interventions","aiik","aiiv","aii","data","insights","classification","interventions_needed"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Priority","aiik","aiiv","aii","data","insights","classification","priority_level"] },  { div:["e"]} ] },
	 
	{ div:[""], c:[ { ou:["Safety Immediate Actions","aiik","aiiv","aii","data","insights","case_management","safety_planning","immediate_actions"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Safety Long Term Measures","aiik","aiiv","aii","data","insights","case_management","safety_planning","long_term_measures"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Psychosocial Support Short Term Measures","aiik","aiiv","aii","data","insights","case_management","psychosocial_support","short_term"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Psychosocial Support Long Term Measures","aiik","aiiv","aii","data","insights","case_management","psychosocial_support","long_term"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Applicable Laws","aiik","aiiv","aii","data","insights","case_management","legal_protocols","applicable_laws"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Required Documents","aiik","aiiv","aii","data","insights","case_management","legal_protocols","required_documents"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Authorities To Contact","aiik","aiiv","aii","data","insights","case_management","legal_protocols","authorities_to_contact"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Immediate Medical Needs","aiik","aiiv","aii","data","insights","case_management","medical_protocols","immediate_needs"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Followup Medical Care","aiik","aiiv","aii","data","insights","case_management","medical_protocols","follow_up_care"] }, { div:["e"]} ] },
	
        { div:[""], c:[ { ou:["Red Flags","aiik","aiiv","aii","data","insights","risk_assessment","red_flags"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Potential Barriers","aiik","aiiv","aii","data","insights","risk_assessment","potential_barriers"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Protective Factors","aiik","aiiv","aii","data","insights","risk_assessment","protective_factors"] }, { div:["e"]} ] },

        { div:[""], c:[ { ou:["Cultural Considerations","aiik","aiiv","aii","data","insights","cultural_considerations"] }, { div:["e"]} ] },


	{ div:[""], c:[ { uo:["transcript","aiik","aiiv","aii","data","transcript"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["translation","aiik","aiiv","aii","data","translated_transcript"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["entities","aiik","aiiv","aii","data","summary_entities"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["category","aiik","aiiv","aii","data","summary_classification","category"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["confidence score","aiik","aiiv","aii","data","summary_classification","confidence"] }, { div:["e"]} ] },
]};

te["case_insights_txt"] = { s:["gy x y",null] }; // mime not application/json

te["case_insights"] = { umime:["case_insights_txt",":v:messages:src_msg", ":v:messages:src_mime", ":v:messages:src"] }

function uo (el, u, a, r, m)
{
	var o = ra[u[3]];
	for (var i=4; i<u.length; i++)
	{
		if (!o[u[i]]) { console.error ("[uo] missing "+u[i]+" ("+i+")"); return; }
		o = o[u[i]];
	}
	if (Array.isArray(o))
	{
		if (o.length<1) return
		nd (el, te[u[1]], [], [u[0]], [0]);
		for (var i=0; i<o.length; i++)
		{
			// console.log (o[i]);
			nd (el, te[u[2]], [], [o[i]], [0]);
		}
		return;
	}
	nd (el, te[u[1]], [], [u[0]], [0]);
	nd (el, te[u[2]], [], [o], [0]);
}

