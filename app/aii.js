
te["aiiv"] = { s:["c x","%0"] };

te["aiitag"] = { s:["c x bd cw gb mr mb","%0"] };

te["aiir1"] = { div:["t"], c:
[
        { s:["c x b",null] },
        { uo:[null,"aii",null] },
        { div:["e"] }
]},

te["aiir2"] = { div:["t"], c:
[
	{ s:["c x b",null] },
	{ uo:[null,"aii",null,null] },
	{ div:["e"] }
]},

te["aiir3"] = { div:["t"], c:
[
        { s:["c x b",null] },
        { uo:[null,"aii",null,null,null] },
        { div:["e"] }
]},

te["aii"] = { c:
[
        { s:["x y b","Case Summary"] },
        { s:["x ",":k:aii:case_summary"] },

	 { aiir2:["Persons","aiiv","named_entities","persons"] },
	 { aiir2:["Organisations","aiiv","named_entities","organizations"] },
	 { aiir2:["Locations","aiiv","named_entities","locations"] },
	 { aiir2:["Dates","aiiv","named_entities","dates"] },
	 { aiir2:["Contact Information","aiiv","named_entities","contact_information"] },
	 { aiir2:["Category","aiitag","classification","category"] },
	 { aiir2:["Interventions","aiiv","classification","interventions_needed"] },
	 { aiir2:["Priority","aiiv","classification","priority_level"] },
	 
	 { aiir3:["Safety Immediate Actions","aiiv","case_management","safety_planning","immediate_actions"] },
	 { aiir3:["Safety Long Term Measures","aiiv","case_management","safety_planning","long_term_measures"] },
	 { aiir3:["Psychosocial Support Short Term Measures","aiiv","case_management","psychosocial_support","short_term"] },
	 { aiir3:["Psychosocial Support Long Term Measures","aiiv","case_management","psychosocial_support","long_term"] },
	 { aiir3:["Applicable Laws","aiiv","case_management","legal_protocols","applicable_laws"] },
	 { aiir3:["Required Documents","aiiv","case_management","legal_protocols","required_documents"] },
	 { aiir3:["Authorities To Contact","aiiv","case_management","legal_protocols","authorities_to_contact"] },
	 { aiir3:["Immediate Medical Needs","aiiv","case_management","medical_protocols","immediate_needs"] },
	 { aiir3:["Followup Medical Care","aiiv","case_management","medical_protocols","follow_up_care"] },
	
         { aiir2:["Red Flags","aiiv","risk_assessment","red_flags"] },
	 { aiir2:["Potential Barriers","aiiv","risk_assessment","potential_barriers"] },
	{ aiir2:["Protective Factors","aiiv","risk_assessment","protective_factors"] },

         { aiir1:["Cultural Considerations","aiiv","cultural_considerations"] },

]};

te["case_insights_msg"] = { s:["x y",null] }; // umime

function uo (el, u, a, r, m)
{
	var o = ra[u[1]];
	for (var i=2; i<u.length; i++)
	{
		if (!o[u[i]]) return; 
		o = o[u[i]];
	}
	for (var i=0; i<o.length; i++)
	{
		// console.log (o[i]);
		nd (el, te[u[0]], [], [o[i]], [0]);
	}

}

