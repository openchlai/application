
te["aiiv"] = { s:["c x","%0"] };

te["aiik"] = { s:["c x b","%0"] },

te["aiitag"] = { s:["c x bd cw gb mr mb","%0"] };

te["aii_usub"] = { usub:
[
"aii_transcript,aii_translation,aii_classification,aii_entity_extraction",
"r_",
"%0",
"transcript_segment,translation_update,classification_update,entity_update"
]};

te["aii_entity_extraction"] = { c:
[
	{ div:[""], c:[ { uo:["Organisations","aiik","aiiv","aii","entities","ORG"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["Products","aiik","aiiv","aii","entities","PRODUCT"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["Dates","aiik","aiiv","aii","entities","DATE"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["Persons","aiik","aiiv","aii","entities","PERSON"] }, { div:["e"]} ] },
]};

te["aii_classification"] = { c:
[
 	{ div:[""], c:[ { uo:["Main Category","aiik","aiiv","aii","classification","main_category"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["Sub Category","aiik","aiiv","aii","classification","sub_category"] }, { div:["e"]} ] },
	{ div:[""], c:[ { uo:["Intervention","aiik","aiiv","aii","classification","intervention"] }, { div:["e"]} ] },
 	{ div:[""], c:[ { uo:["Priority","aiik","aiiv","aii","classification","priority"] }, { div:["e"] } ] },
]};

te["aii_translation"] = { div:[""], c:[ { uo:["translation","aiik","aiiv","aii","window_translation"] }, { div:["e"]} ] },

te["aii_transcript"] = { div:[""], c:[ { uo:["transcript","aiik","aiiv","aii","segment","transcript"] }, { div:["e"]} ] },

te["aii"] = { c:
[
     //{ div:["cr"], c:[ { uo:["","noop","aiiv","aii","error"] }, { div:["e"]} ] },
	//{ div:["cr"], c:[ { uo:["","noop","aiiv","aii","details","error_message"] }, { div:["e"]} ] },
	{ div:["cr"], c:[ { uo:["","noop","aiiv","aii","update_type"] }, { div:["e"]} ] },
	{ uo:["","noop","aii_usub","aii","update_type"] }
]};

te["case_insights_txt"] = { s:["gy x y",null] }; // mime not application/json

te["case_insights"] = { umime:["case_insights_txt",":v:messages:src_msg", ":v:messages:src_mime", ":v:messages:src"] }

function uo (el, u, a, r, m)
{
	var o = ra[u[3]];
	for (var i=4; i<u.length; i++)
	{
		if (!o) return;
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
			nd (el, te[u[2]], [], [(""+o[i])], [0]);
		}
		return;
	}
	nd (el, te[u[1]], [], [u[0]], [0]);
	nd (el, te[u[2]], [], [(""+o)], [0]);
}

