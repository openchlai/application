
te["aiiv"] = { s:["c x","%0"] };

te["aiitag"] = { s:["c x bd cw gb mr mb","%0"] };

te["aiik"] = { s:["c x b","%0"] },

te["aii"] = { c:
[
        { div:["cr"], c:[ { uo:["","noop","aiiv","aii","error"] }, { div:["e"]} ] },
	{ div:["cr"], c:[ { uo:["","noop","aiiv","aii","details","error_message"] }, { div:["e"]} ] },

	{ div:["cr"], c:[ { uo:["","noop","aiiv","aii","step"] }, { div:["e"]} ] },

	{ div:[""], c:[ { uo:["Case Summary","aiik","aiiv","aii","data","insights","case_summary"] }, { div:["e"]} ] },

	{ div:[""], c:[ { ou:["Persons","aiik","aiiv","aii","data","insights","named_entities","persons"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Organisations","aiiv","named_entities","organizations"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Locations","aiiv","named_entities","locations"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Dates","aiiv","named_entities","dates"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Contact Information","aiiv","named_entities","contact_information"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Category","aiitag","classification","category"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Interventions","aiiv","classification","interventions_needed"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Priority","aiiv","classification","priority_level"] },  { div:["e"]} ] },
	 
	{ div:[""], c:[ { ou:["Safety Immediate Actions","aiiv","case_management","safety_planning","immediate_actions"] },  { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Safety Long Term Measures","aiiv","case_management","safety_planning","long_term_measures"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Psychosocial Support Short Term Measures","aiiv","case_management","psychosocial_support","short_term"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Psychosocial Support Long Term Measures","aiiv","case_management","psychosocial_support","long_term"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Applicable Laws","aiiv","case_management","legal_protocols","applicable_laws"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Required Documents","aiiv","case_management","legal_protocols","required_documents"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Authorities To Contact","aiiv","case_management","legal_protocols","authorities_to_contact"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Immediate Medical Needs","aiiv","case_management","medical_protocols","immediate_needs"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Followup Medical Care","aiiv","case_management","medical_protocols","follow_up_care"] }, { div:["e"]} ] },
	
        { div:[""], c:[ { ou:["Red Flags","aiiv","risk_assessment","red_flags"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Potential Barriers","aiiv","risk_assessment","potential_barriers"] }, { div:["e"]} ] },
	{ div:[""], c:[ { ou:["Protective Factors","aiiv","risk_assessment","protective_factors"] }, { div:["e"]} ] },

        { div:[""], c:[ { ou:["Cultural Considerations","aiiv","cultural_considerations"] }, { div:["e"]} ] },

]};

te["case_insights_txt"] = { s:["gy x y",null] }; // mime not application/json

te["case_insights"] = { umime:["case_insights_txt",":v:messages:src_msg", ":v:messages:src_mime", ":v:messages:src"] }

function uo (el, u, a, r, m)
{
	var o = ra[u[3]];
	for (var i=4; i<u.length; i++)
	{
		if (!o[u[i]]) return; 
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

