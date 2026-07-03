// "lets think of this as a brainstorming pharse - no bad ideas. Keep spit balling!"
// "maybe the solution is ai. (how can AI be the solution?) Thats the first question we will ask Ai"
// 

var UU = 
{
"login":{ 200:[["loadphone","ss"],["main","ss","vv"]], 401:[["login","user_","vv"]], 412:[["nb","errors","v","nb"]] },
"logout":{ 401:[["unloadphone","user_"],["login","user_","vv"]] },
"change_passwd":{ 202:[["change_passwd_vw","user_","vp"]], 412:[["nb","errors","v","nb"]] },
"reset_passwd":{ 202:[["nb","auth_nb","v","nb"]], 412:[["nb","errors","v","nb"]] },
"activate_passwd":{ 202:[["activate_passwd_vw","user_","ve"]], 412:[["nb","errors","v","nb"]] },

"dash":{ 200:[["dash_main","dash"]] },
"dash_rpt_pie":{ 200:[["dash_rpt_pie","cases_rpt"]] },
"dash_rpt_line":{ 200:[["dash_rpt_line","cases_rpt"]] },
"dash_case_priority":{ 200:[["dash_case_priority","cases_rpt"]] },
"dash_calls_rpt_vw":{ 200:[["dash_calls_rpt_vw","calls_rpt"]] },
"dash_agent_name":{ 200:[["dash_agent_name","users"]] },

"today":{ 200:[["today","user_"]] },

"chan_agent_cid_name":{ 200:[["chan_agent_cid_name","users"]] },
"chan_add_ld":{ "203":[["chan_add_ld","action"]] },
"call_add_ld":{ "203":[["call_add_ld","action"]], 412:[["nb","errors","v","nb"]] },

"sup":{ "203":[["noop","action"]] },

"ati_end":{ "201":[["ati_ended","messages"]] }, // ati_ended

"vfile_vw_r":{ 404:[["vfile_not_found","errors"]] },

"category_ed":{ 200:[["category_ed","categories"]], 202:[["category_vw_id","subcategories","vp"]], 412:[["nb","errors","v","nb"]] },
"category_new":{ 201:[["category_r","subcategories","va"]], 412:[["nb","errors","v","nb"]] },
"category_vw_id":{ 200:[["category_vw_id","categories"]] },
"category_lc":{ 200:[["category_lc","subcategories_ctx"]] },
"category_lsh":{ 200:[["category_lsh","subcategories_ctx"]] },
"category_lsh_node":{ 200:[["category_lsh_node","categories"]] },
"category_lsh_main":{ 200:[["category_lsh_main","categories"]] },
"category_ls":{ 200:[["category_ls","subcategories_ctx"]] },
"category_rr":{ 200:[["category_rr","subcategories_ctx"]] },
"category_list":{ 200:[["category_list","subcategories_ctx"]] },
"category_main":{ 200:[["category_main","subcategories_ctx"]] },
"categories":{ 200:[["categories","subcategories_ctx"]] },
"subcategory_list":{ 200:[["subcategory_list","subcategories_ctx"]] },
"case_lc_main":{ 200:[["case_lc_main","subcategories_ctx"]] },
"case_location_lc_main":{ 200:[["case_location_lc_main","subcategories_ctx"]] },
"case_category_lc_main":{ 200:[["case_category_lc_main","subcategories_ctx"]] },


"user_ed":{ 202:[["uvpfn","users","vp"]], 412:[["nb","errors","v","nb"]], 200:[["user_ed","users"]] },
"user_new":{ 201:[["uvpfn","users","vp"]], 412:[["nb","errors","v","nb"]] },
"user_vw_id":{ 200:[["user_vw_id","users"]] },
"user_la":{ 200:[["user_la","users_ctx"]] },
"user_lc":{ 200:[["user_lc","users_ctx"]] },
"user_lc_main":{ 200:[["user_lc_main","users_ctx"]] },
"user_ls":{ 200:[["user_ls","users_ctx"]] },
"user_list":{ 200:[["user_list","users_ctx"]] },
"user_main":{ 200:[["user_main","users_ctx"]] },
"users":{ 200:[["users","users_ctx"]] },

"contact_ed":{ 200:[["contact_ed","contacts"]], 202:[["contact_vw_id","contacts","vp"]], 412:[["nb","errors","v","nb"]] },
"contact_new":{ 201:[["contact_vw_id","contacts","vp"]], 412:[["nb","errors","v","nb"]] },
"contact_vw_id":{ 200:[["contact_vw_id","contacts"]] },
"contact_lc":{ 200:[["contact_lc","contacts_ctx"]] },
"contact_ls":{ 200:[["contact_ls","contacts_ctx"]] },
"contact_list":{ 200:[["contact_list","contacts_ctx"]] },
"contacts":{ 200:[["contacts","contacts_ctx"]] },

"call_rpt_vw":{ 200:[["rpt_vw","calls_rpt"]] },
"call_case":{ 200:[["call_case","cases_ctx"]] },
"call_vp":{ 200:[["call_vp","calls"]] },
"call_activity_aub":{ 200:[["call_activity_aubs","case_activities"]] },
"call_activity_perp":{ 200:[["call_activity_perp_vw","perpetrators"]] },
"call_activity_client":{ 200:[["call_activity_client_vw","clients"]] },
"call_activity_reporter":{ 200:[["call_activity_reporters","reporters_ctx"]] },
"call_activity_case":{ 200:[["call_activity_case_vw","cases"]] },
"call_vw_id":{ 200:[["call_vw_id","calls_vw"]] },
"call_lst":{ 200:[["call_lst","calls_ctx"]] },
"call_list":{ 200:[["call_list","calls_ctx"]] },
"call_main":{ 200:[["call_main","calls_ctx"]] },
"calls":{ 200:[["calls","calls_ctx"]], 201:[["calls","calls_ctx"]] },

"pmessage_rpt_vw":{ 200:[["rpt_vw","pmessages_rpt"]] },
"pmessage_vw_id":{ 200:[["pmessage_vw_id","pmessages"]] },
"pmessage_list":{ 200:[["pmessage_list","pmessages_ctx"]] },
"pmessage_main":{ 200:[["pmessage_main","pmessages_ctx"]] },
"pmessages":{ 200:[["pmessages","pmessages_ctx"]] },
 
"activity_message_send":{ 201:[["activity_message_sended","messages","","sended"]] },
"activity_messages":{ 200:[["activity_messages_ufn","messages_ctx"]] },
"activity_messages_main":{ 200:[["activity_messages","activities"]] },

"activity_contact_ed":{  202:[["activity_contact_updated","contacts_disposition"]], 412:[["nb","errors","v","nb"]] , 200:[["case_contact_ed","contacts"]], },
"activity_contact_new":{ 201:[["uvpfn","dispositions","vp"]], 412:[["nb","errors","v","nb"]] },
"activity_contact_vw_id":{ 200:[["case_contact_vw_id","contacts"]] },
"activity_contact_ls":{ 200:[["activity_contact_ls","dispositions_ctx"]] },
"activity_contact_main":{ 200:[["activity_contacts","dispositions_ctx"]] },
"activity_contact":{ 200:[["activity_contact","contacts"]] }, // ,"contacts","contact"
"activity_contacts":{ 200:[["activity_contacts","dispositions_ctx"]] },

"activity_disposition_unk":{ 201:[["uvpfn","dispositions_unk","vp"]], 412:[["nb","errors","v","nb"]] },
"activity_disposition":{ 200:[["activity_disposition","contacts_disposition"]], 201:[["uvpfn","dispositions","vp"]], 412:[["nb","errors","v","nb"]] },
"activity_disposition_vw":{ 200:[["activity_disposition_vw","cases"]] },
"activity_disposition_list":{ 200:[["activity_disposition_list","dispositions_ctx"]] },
"activity_new": 		{ 201:[["notif_count","activities_notify_ctx"], ["activity_lst_ufn","activities_notify_ctx","","ld"]], 200:[["notif_count","activities_notify_ctx"]] },
"activity_upd": 		{ 202:[["notif_count","activities_notify_ctx"], ["activity_lst_ufn","activities_notify_ctx","","ld"], ["activity_vw_id_ufn","activities","","ld"]] },
"activity_list":		{ 200:[["activity_list","dispositions_ctx"]] },
"activity_main":		{ 200:[["activity_main","dispositions_ctx"]] },
"activity_vw_id_walkin":	{ 200:[["activity_vw_id_walkin","activities"]] },
"activity_vw_id_notif":	{ 200:[["activity_vw_id_notif","activities"]] },
"activity_vw_id_case":	{ 200:[["activity_vw_id_case","activities"]] },
"activity_vw_id_msg":	{ 200:[["activity_vw_id_msg","activities"]] },
"activity_vw_id_chat":	{ 200:[["activity_vw_id_chat","activities"]] },
"activity_vw_id_call":	{ 200:[["activity_vw_id_call","activities"]] },
"activity_vw_id":		{ 200:[["activity_vw_id","activities"]] },
"activity_lst":		{ 200:[["activity_lst","activities_ctx"]] },

"reporter_uuid_is_client":{ 202:[["case_form_reporter_uuid_r","reporters_isclient","va"]],  412:[["nb","errors","v","nb"]] },
"reporter_is_client":{ 202:[["case_form_reporter_r","reporters_isclient","va"]],  412:[["nb","errors","v","nb"]] },
"reporter_ed":{ 200:[["case_reporter_ed","reporters","vp"]], 202:[["uvpfn","reporters","vp"]], 412:[["nb","errors","v","nb"]] },
"reporter_vw_id":{ 200:[["case_reporter_vw_id","reporters"]] },

"client_del":{ 202:[["case_client_del","clients_del","va"]], 412:[["nb","errors","v","nb"]] },
"client_ed":{ 202:[["uvpfn","clients","vp"]], 200:[["case_client_ed","clients","vp"]], 412:[["nb","errors","v","nb"]] },
"client_new":{ 201:[["uvpfn","clients","vp"]],  202:[["uvpfn","clients","vp"]], 412:[["nb","errors","v","nb"]] },
"client_vw_id":{ 200:[["case_client_vw_id","clients"]] },

"perpetrator_del":{ 202:[["case_perpetrator_del","perpetrators_del","va"]], 412:[["nb","errors","v","nb"]] },
"perpetrator_ed":{ 202:[["uvpfn","perpetrators","vp"]], 200:[["case_perpetrator_ed","perpetrators","vp"]], 412:[["nb","errors","v","nb"]] },
"perpetrator_new":{ 201:[["uvpfn","perpetrators","vp"]], 412:[["nb","errors","v","nb"]] },
"perpetrator_vw_id":{ 200:[["case_perpetrator_vw_id","perpetrators"]] },

"case_attachment_del":{ 202:[["case_attachment_del","attachments_del","va"]], 412:[["nb","errors","","nb"]] },
"case_attachment":{ 201:[["case_attachment_","attachments"]] },
"case_attachment_new":{ 201:[["ufn_attach","files","","nb"]], 412:[["nb","errors","","nb"]], 413:[["nb413","r_","","nb"]] },

"client_referal_del":{ 202:[["case_notif_del","client_referals"]], 412:[["nb","errors","v","nb"]] },
"referal_del":{ 202:[["case_notif_del","referals"]], 412:[["nb","errors","v","nb"]] },
"service_del":{ 202:[["case_notif_del","services"]], 412:[["nb","errors","v","nb"]] },

"case_passport_num":{ 200:[["case_passport_num","r_","","national_reg_search"]], 201:[["case_passport_num","r_","","national_reg_search"]], 202:[["case_passport_num","r_","","national_reg_search"]] },
"case_insights" : { 200:[["case_insights","messages"]] },
"case_rpt_vw":{ 200:[["rpt_vw","cases_rpt"]] },
"case_update":{ 201:[["case_update","cases"]], 202:[["uvpfn","dispositions","vp"]], 412:[["nb","errors","v","nb"]] },
"case_form":  { 201:[["activity_case_ufn","dispositions"]], 202:[["activity_case_ufn","dispositions"]], 412:[["nb","errors","v","nb"]] },
"case_ed":    { 201:[["case_ed","cases","vf"]], 412:[["nb","errors"]] },
"case_new":   { 201:[["case_new","cases"]], 412:[["nb","errors"]] },
"case_vw_contact_uuid":{ 200:[["case_vw_contact_uuid","contacts"]] },
"case_vw_id":{ 200:[["case_vw_id","cases"]] },
"case_vw":{ 200:[["case_vw","cases"]] },
"case_list":{ 200:[["case_list","cases_ctx"]] },
"case_main":{ 200:[["case_main","cases_ctx"]] },
"cases":{ 200:[["cases","cases_ctx"]] },

"case_history_vw_id":{ 200:[["case_history_vw_id","case_activities"]] },
"case_history":{ 200:[["case_history","case_activities_ctx"]] },

"qa_rpt_vw": 	{ 200:[["rpt_vw","qas_rpt"]] },
"qa_form":   	{ 201:[/*["call_r","call"],*/["qa_vw_r","qas"]], 412:[["nb","errors","","nb"]] },
"qa_vw_id":  	{ 200:[["qa_vw_id","calls_vw"]] },
"qa_list":   	{ 200:[["qa_list","qas_ctx"]] },
"qa_main":   	{ 200:[["qa_main","qas_ctx"]] },
"qas":		{ 200:[["qas","qas_ctx"]], 201:[["qas","qas_ctx"]] },
};

re["peers"] = {};
re["channels"] = {};
re["categories_age_group"] = [];
re["callfile_"] = [["","","","","","","","","","", "","","","","","","","","","", "/helpline/api/calls/","?file=wav"]];
re["vfile_"] = [["","","","","","","","","","", "","","","","","","","","","", "/helpline/api/vfiles/","?file=wav"]];
re["qa_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["activity_"] = [["-1","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["task_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["call_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["category_"] = [["","","","","","","","","","","","","","","","","","",""]];
re["workinghour_"] = [["","","","","","","","28800","61200","","","","","","","","",""]];
re["campaign_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["shift_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["voicefile_"] = [["","","","","","","","","","","","","","","","","","","","",""]];
re["voicemap_"] = [["","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["voiceprompt_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["user_"] = [["","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["chan_"] = [["","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","" ]];
re["reporter_"] = [["","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","0",  "","","","",""]];
re["r_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
"","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["ctx_"] = [["0","0","0","0","0","0","0"]]; 

re["auth"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["contacts_k"] = {};
re["categories_k"] = {};
re["activities_k"] = {};
re["actions_k"] = {};
re["cases_k"] = {};
re["reporters_k"] = {};
re["clients_k"] = {};
re["perpetrators_k"] = {};
re["messages_k"] = {};
re["qas_k"] = {};
re["dispositions_k"] = {};
re["calls_k"] = {};
re["case_activities_k"] = {};

rk["dist"] = ["-","h","dt","wk","mn","yr"];
re["dist"] = 
{
"":["","None"],
"-":["-","Pie Chart"],
"h":["h","Hourly"],
"dt":["dt","Day"],
"wk":["wk","Week"],
"mn":["mn","Month"],
"yr":["yr","Year"],
};
rk["dash_call_dist"] = ["hour","-"];
re["dash_call_dist"] = re["dist"];

rk["sla"] = ["120+","120","100","80","60","40","20","0"]; 
re["sla"] = 
{
"120+":["120+","140+",""],
"120":["120","120-139",""],
"100":["100","100-119",""],
"80":["80","80-99",""],
"60":["60","60-79",""],
"40":["40","40-59",""],
"20":["20","20-39",""],
"0":["0","0-19",""],
};

rk["sla_wait"] = ["120+","120","100","80","60","40","20","0"]; 
re["sla_wait"] = re["sla"];

rk["hangup_reason"] = ["phone","usr","ivr","net"];
re["hangup_reason"] = 
{
"":["","",""],
"phone":["phone","Customer"],
"usr":["usr","Extension"],
"ivr":["ivr","IVR"],
"net":["net","Network"],
};

rk["hangup_status"] = ["answered","abandoned","dump","missed","ivr","noanswer","busy","networkerror","voicemail","xfer_consult","xfer_noanswer","xfer_offline","xfer_ok",""];
re["hangup_status"] = 
{
"":["","","","",""],
"answered":["answered","Answered","Answered","x y03 gg cw","","#4eb151"],
"abandoned":["abandoned","Abandoned","Abandoned","x y03 go cw","","#ffa500"],
"dump":["dump","AgentDump","Dump","x y03 gr cw","","#B22222"],
"ivr":["ivr","IVR","","g","","#1E90FF"],
"missed":["missed","Missed","Missed","x y03 go cw","","#DC143C"],
"no-answer":["no-answer","Flash","No Answer","x y03 go cw","","#FFA07A"],
"noanswer":["no-answer","Flash","No Answer","x y03 go cw","","#FFA07A"],
"busy":["busy","Busy","Busy","x y03 go cw","","#FF6347"],
"networkerror":["network-error","Network Error","Network Error","x y03 gwd cb","","#FF00FF"],
"voicemail":["voicemail","Voicemail","Voicemail","x y03 gr cw","","#90EE90"], 
"xfer_consult":["xfer_consult","Consult","Consult","x y03 gg cw","","#20B2AA"],
"xfer_noanswer":["xfer_noanswer","Transfer No Answer","Transfer No Answer","x y03 go cw","","#20B2AA"],
"xfer_offline":["xfer_offline","Transfer Unavailable","Transfer Unavailable","x y03 go cw","","#20B2AA"],
"xfer_ok":["xfer_ok","Transferred","Transfer Successful","x y03 gg cw","","#20B2AA"],
"SCHED":["SCHED","Sched","Scheduled","x y03 gg cw","","#20B2AA"],
"Reattempt":["Reattempt","Reattempt","Reattempt","x y03 gg cw","","#20B2AA"],
};

rk["vector"] = ["1","2"];
re["vector"] =
{
"":["","","","","","","","","","","","","","","","","","","","",""],
"0":["0","","","","","","","","","","","","","","","","","","","","","","","",""],
"1":["1","Inbound","&#8702","From",  "Outbound","&#8701","to", "g","Outbound Call",,"c w50","c xx y08 bd8 go cw","y s cd", "c x","g"],
"2":["2","Outbound","&#8701","To",  "Inbound","&#8702","from", "","Inbound Call",,"d w50 x20","d xx y08 bd8 gg cw","y s cd tr","d x",""],
};         

rk["user_role"] = ["1","2","3","4","5","6","99"];
re["user_role"] = 
{
"":["","","","",""],
"0":["","","","",""],
"1":["1","Counsellor","counsellor","2",""],
"2":["2","Supervisor","supervisor","3","1"],
"3":["3","Case Manager","casemanager","4",""],
"4":["4","Case Worker","caseworker","0",""],
"5":["5","Partner","partner","0",""],
"6":["6","Media Account","media","2",""],
"99":["99","Administator","admin","99","1"],
};

re["onbreak"] = 
{
"":["","Offline"],
"coffee":["coffee","Coffee Break"],
"lunch":["lunch","Lunch Break"],
"FX":["FX","On Break"],
};

rk["case_refered_to"] = ["0","1","2"];
re["case_refered_to"] = 
{
"":["","","",""],
"0":["0","None","",""],
"1":["1","Department","",""],
"2":["2","Person","",""],
};

rk["case_priority"] = ["1","2","3","0"];
re["case_priority"] =
{
"":["","Blank","","","","#ffffff"],
"0":["0","None","","","","#ffffff"],
"1":["1","Low","Low Priority","","","#4eb151"],
"2":["2","Medium","Medium Priority","","","#ffa500"],
"3":["3","High","High Priority","","","#ff0000"],
};

rk["case_status"] = ["1","2","3","4","0"];
re["case_status"] =
{
"":["","Blank","","","","#ffffff"],
"0":["0","None","","","","#ffffff"],
"1":["1","Ongoing","Ongoing","","","#ffa500"],
"2":["2","Closed","Closed","","","#4eb151"],
"3":["3","Escalated","Escalated to","","","#ff0000"],
"4":["4","Non Intervention","Non Intervention"]
};

rk["case_priority_form"] = ["1","2","3"];
re["case_priority_form"] = re["case_priority"];

rk["case_status_form"] = ["1","2"];
re["case_status_form"] = re["case_status"];


rk["case_src"] = ["walkin","call","sms","email","chat","whatsApp","whatsup","FACEBOOK","TWITTER","WENI","safepal","ai","aii"];
re["case_src"] = 
{                               
"":		["","(blank)","",			"","", "#ff0000","edit","",		"","",	"", "","","",],
"all":	["all","Total","",          	"","", "#000000","cases","",		"","",	"", "","",""],
"social":	["social","Social Media","", 	"","", "#000000","share","",		"","",	"", "","",""],

"edit":	["edit","Edit","",			"","", "#000000","edit","",		"","",	"_case", 	"created_by", "created_by", ""],
"walkin":	["walkin","Walkin","",		"","", "#f0c39bff","directions_walk","", "","", "_walkin", 	"phone", "reporter_phone", ""],

"call":	["call","Call","",			"","", "#fa8a09ff","call","",	"","",	"_call", 	"phone", "reporter_phone", ""],
"sms":	["sms","SMS","",			"","", "#000000","sms","",		"","",	"_chat", 	"phone", "reporter_phone", ""],
"email":	["email","Email","",		"","", "#000000","chat","",		"","",	"_chat", 	"email", "reporter_email", ""],
"chat":	["chat","Chat","",			"","", "#17b8ddff","chat","",	"","",	"_chat", 	"phone", "reporter_phone", "safepal"],
"whatsApp":["whatsApp","WHATSAPP","",	"","", "#41ac0fff","chat","",	"","",	"_chat", 	"phone", "reporter_phone", ""],
"whatsup":["whatsup","Whatsup","",		"","", "#41ac0fff","chat","",	"","",	"_chat", 	"phone", "reporter_phone", ""],
"facebook":["facebook","Facebook","",	"","", "#000000","chat","",		"","",	"_chat", 	"email", "reporter_email", ""],
"FACEBOOK":["FACEBOOK","FACEBOOK","",	"","", "#000000","chat","",		"","",	"_chat", 	"email", "reporter_email", ""], 
"twitter":["twitter","Twitter","",		"","", "#000000","chat","",		"","",	"_chat", 	"email", "reporter_email", ""],
"TWITTER":["TWITTER","TWITTER","",		"","", "#000000","chat","",		"","",	"_chat", 	"email", "reporter_email", ""], 

"escalation":["escalation","Escalation","escalated by",  "","", "#880000","warning","","","",	"_notif", "phone", "reporter_phone", ""],
"update":	["update","Update","updated by",  		"","", "#008800","asterisk","","","",	"_notif", "phone", "reporter_phone", ""],
"ai":	["ai","AI","",  				"","", "#000000","","",		"","",	"_chat", "usn", "usn", ""],
"aii":	["aii","AI","",  				"","", "#000000","","",		"","",	"_chat", "usn", "usn", ""],

"WENI":	["WENI","Chatbot","",		"","", "#dcc00aff","chat","",	"","",	"_chat", "email", "reporter_email", ""], 
"safepal":["safepal","SafePal","",		"","", "#c8eb04ff","chat","",	"","",	"_casee", "phone", "reporter_phone", "safepal"],
"webform":["webform","Webform","",		"","", "#5b07ebff","chat","",	"","",	"_case", 	"phone", "reporter_phone", ""],
"ceemis":	["ceemis","CEEMIS","",		"","", "#0da2d4ff","chat","",	"","",	"_case", 	"phone","reporter_phone", ""],
};


rk["dash_src"] = ["all","call","sms","social","email","walkin"];
re["dash_src"] = 
{
"all":["all","Total","go", "/helpline/images/case.png", ":k:case_source:total:1"],
"call":["call","Calls","", "/helpline/images/bxs-phone-call.png", ":k:case_source:call:1"],
"sms":["sms","SMS","", "/helpline/images/sms.png", ":k:case_source:sms:1"],
"social":["social","Social Media", "", "/helpline/images/chat.png", ":k:case_source:socialmedia:1"],
"email":["email","Email", "", "/helpline/images/envelope-fill.png", ":k:case_source:email:1"],
"walkin":["walkin","Walkin", "gg", "/helpline/images/walkin.png", ":k:case_source:walkin:1"],
};

re["activity_status"] = 
{
"0-1-":["","Network Error"],
"1-1-":["","Busy"],
"2-1-":["","No Answer"],
"3-1-":["","Answered"],
"4-1-":["","Answered"],
"5-1-":["","Answered"],
"6-1-":["","Answered"],
"7-1-":["","Answered"],
"8-1-":["","Answered"],

"0-2-":["","Error"],
"1-2-":["","Busy"],
"2-2-":["","Missed"],
"3-2-":["","Answered"],
"4-2-":["","Answered"],
"5-2-":["","Answered"],
"6-2-":["","Answered"],
"7-2-":["","Answered"],
"8-2-":["","Answered"],

"0-2-0":["","Error"],
"1-2-0":["","Busy"],
"2-2-0":["","Missed"],
"3-2-0":["","Answered"],
"4-2-0":["","Answered"],
"5-2-0":["","Answered"],
"6-2-0":["","Answered"],
"7-2-0":["","Answered"],
"8-2-0":["","Answered"],

"0-2-1":["","Error"],
"1-2-1":["","Busy"],
"2-2-1":["","Missed"],
"3-2-1":["","Answered"],
"4-2-1":["","Answered"],
"5-2-1":["","Answered"],
"6-2-1":["","Answered"],
"7-2-1":["","Answered"],
"8-2-1":["","Answered"],

"0-2-2":["","Unread"], // notification
"1-2-2":["",""],

// todo: read/unread/reassigned

};

re["activity_action"] =
{
	"notify":["notify","Notify","Unread","x y02 gr cw bd"],
	"complete":["complete","Complete","","g"],
};

rk["qa_done"] = ["-1","0","1"];
re["qa_done"] = 
{
"":["",""],
"-1":["-1","N/A"],
"0":["0","No"],
"1":["1","Yes"],
};

rk["dash_period"] = ["today","this_week","this_month","last_3_month","last_6_month","last_9_month","this_year","all"];
re["dash_period"] =
{
"today":["today","Today"],
"this_week":["this_week","This Week"],
"this_month":["this_month","This Month"],
"last_3_month":["last_3_month","Last 3 Months"],
"last_6_month":["last_6_month","Last 6 Months"],
"last_9_month":["last_9_month","Last 9 Months"],
"this_year":["this_year","This Year"],
"all":["all","All"],
};

rk["dash_gbv"] = ["both","vac","gbv"];
re["dash_gbv"] = 
{
"both":["both","Both VAC & GBV"],
"vac":["vac","VAC Only"],
"gbv":["gbv","GBV Only"]
};

re["case_activity"] = // 
{
"1":["1","Case Created"],
"2":["2","Case Update"],
"3":["3","Case Edit"],
"4":["4","Case Change Type"],
"6":["6","Client Added"],
"7":["7","Perpetrator Added"],
"8":["8","Attachment Added"],
"9":["9","Reporter Updated"],
"10":["10","Client Updated"],
"11":["11","Perpetrator Updated"],
"12":["12","Attachment Updated"],
"13":["13","Client Deleted"],
"14":["14","Perpetrator Deleted"],
"15":["15","Attachment Deleted"]	
};


re["reporter_is_client"] = 
{
"":["","No","Is Not","","","",""],
"0":["0","No","Is Not","","","",""],
"1":["1","Yes","Is","xx y gwd bd8","Is Client","Reporter","1"],
};


re["metrics"] = 
{
"case_count":["case_count", "Case Count","Case Count","",			"cases","","case_count", 		"","",,"", "0","","",""], 
"call_count":["call_count", "Call Count","Call Count","",			"calls","","call_count", 		"","",,"", "0","","",""], 
"pmessage_count":["pmessage_count", "Message Session Count","Message Session Count","",	 "pmessages","","pmessages_count", 	"","",,"", "0","","",""], 
"qa_count":["qa_count", "QA Count","QA Count","",			"qas","","qa_count", 		"","",,"", "0","","",""], 
};

re["loclev"] = 
{
"":["","",""],
"0":["0","",""],
"1":["1","Region",""],
"2":["2","District",""],
"3":["3","County",""],
"4":["4","SubCounty",""],
"5":["5","Parish",""],
"6":["6","Village",""],
"7":["7","Constitunecy",""],
};

// -------------------------------------------------------------------

te["unloadphone"] = { ufn:["unloadphone"] };

te["loadphone"] = { ufn:["loadphone"] };

// -------------------------------------------------------------------

te["vfile_not_found"] = { s:["xx y gp cr bd8","Recording Not Found"] };

te["vp_apply_"] = { div:["xx t b15"], c: // 
[
	{ div:["d l15"], c:[ { ac:["ao btn w06",null,null,"x y04 w05 gb bd8 cw tc","Apply"] }, { s:["x y04 w05 gb bd8 cw tc b savl","..."] } ] },
	{ div:["d","va"], ac:["ay",null,null,"x y03 w05 ba bd8 tc cd","Cancel"] },
	{ div:["e"] }
]};

te["vp_apply"] = { vp_apply_:[null,"_uvpf","","_uvp"] };

te["vp_sav_"] = { c:
[
	{ div:["d l15"], c:
	[ 
		{ ac:["ao btn",null,null,"w10 y gb bd8 cw tc",null] }, 
		{ s:["y b savl",null] } 
	]},
	{ div:["d","va"], ac:["ay",null,null,"w09 y04 bd8 ba tc cd",""], c:
	[ 
		{ s:["",null] },
		{ p:["g","o"], arg:["",".id",null] } 
	]},
	{ div:["e"] }
]};

te["vp_sav"] = { vp_sav_:[null,null,null,null,null,null,null,"%0"] };

// -----------------------------------------------------------------

te["tabi"] = { div:[null], c: 	
[
	{ input:["g","",null,null,"radio",null] },
	{ li:["y ba cb tc tabi",null], ev:[null], c:
	[
		{ s:["",null] },
		{ arg:["",".id","%0"] }
	]},
]};

te["tab"] = { c:
[
	{ arg:["","",""] }, // ts
	{ input:["g","",null,null,"radio",null] },
	{ li:[null,null], ev:["_tab"], c:
	[
		//{ div:["c"], c:[ { img:["","",null,"20"] } ] },
		{ s:[null,null] },
		{ div:["e"] } // , arg:["_c","","30"] }
	]},
]};

// --------------------------------------------------------------------

te["activate_passwd_vw"] = { div:["x15"], c:
[
	{ div:["y"], c:
	[
		{ s:["c xx yy b cg","Password Changed Successful"] },
		{ div:["e"] }
	]},
	{ div:[" xx t b20"], c:
	[
		{ a:["xx y08 gb cw tc bd h3","","Proceed to Login","/./"] },
	]}
]};

te["activateAccount"] = { div:["y30"], c:
[
	{ div:["w50 ma b10"], c:
		[
			{ s:["c xx b y n",APP_NAME] },
			{ s:["c xx b y n bl2_b","Set New Password"] },
			{ div:["e"] }
		]},
		
	{ div:["w50 ma  gw_"], c:
	[
		{ div:["x15 tt"], c:
		[
			{ s:["c xx y12 n b","Set a new Password for your Account"] },
			// { ac:["d","","_uvp","xx y08 h cb","&Cross;"] },
			{ div:["e"] }
		]},

		{ div:["","ve"], c:
		[
			{ div:["x25"], c:[ { p:["c w40","nb"], u:["nb","users_nb"] }, { div:["e"] } ] },
			{ p:["x25","o"], c:
			[
				{ div:["t15"], c:
				[
					{ s:["c w15 y","New Password"] }, { passwd:["d w25 gw_ ba","w25 x y","","pass1",""] }, { div:["e"] }
				]},
				{ div:["t15"], c:
				[
					{ s:["c w15 y","Confirm Password"] }, { passwd:["d w25 gw_ ba","w25 x y","","pass2",""] }, { div:["e"] }
				]},
				{ arg:["","otp","%5"] }
			]},
			{ div:["x25 t30 b20"], vp_sav:["activate_passwd-changeAuthOTP","_postj","Change","Changing...","myprofile-user_","_nnvp","Cancel"] }
		]}
	]}
]};

// --------------------------------------------------------------------

te["change_passwd_vw"] = { div:["w45 ma bd sh__ gw_","vddvw"], ev:["_undd"], c:
[
	{ div:["xx y"], c:
	[
		{ s:["c xx yy b cg","Password Changed Successful"] },
		{ ac:["d w03 ay y","","_uvp","x y tc h2 cb bd","&Cross;"] },
		{ div:["e"] }
	]},
]};

te["change_passwd"] = { div:["w50 ma bd sh__ gw_"], c:
[
	{ div:["x15 tt"], c:
	[
		{ s:["c xx y12 n b","Change Password"] },
		{ ac:["d","","_uvp","xx y08 h cb","&Cross;"] },
		{ div:["e"] }
	]},

	{ div:["","ve"], c:
	[
		{ div:["x25"], c:[ { p:["c w40","nb"], u:["nb","users_nb"] }, { div:["e"] } ] },
		{ p:["x25","o"], c:
		[
			{ div:["t15"], c:
			[ 
				{ s:["c w15 y","Current Password"] }, { passwd:["d w25 gw_ ba","w25 x y","","pass0",""] }, { div:["e"] } 
			]},
			{ div:["t15"], c:
			[
				{ s:["c w15 y","New Password"] }, { passwd:["d w25 gw_ ba","w25 x y","","pass1",""] }, { div:["e"] }
			]},
			{ div:["t15"], c:
			[
				{ s:["c w15 y","Confirm Password"] }, { passwd:["d w25 gw_ ba","w25 x y","","pass2",""] }, { div:["e"] }
			]},
		]},
		{ div:["x25 t30 b20"], vp_sav:["change_passwd-changeAuth","_postj","Change Password","Changing...","myprofile-user_","_vp","Cancel"] }
	]}
]};

te["myprofile"] = { div:["w70 ma bd sh__ gw","vddvw"], ev:["_undd"], c:
[

	{ div:["x15 y15"], c:
	[
		{ s:["x yy b cb h2","My Profile"] },
		{ ac:["","change_passwd-user_","_vp","x y",""], c:
		[
			{ s:["","Change Password"] },
			{ div:[] }
		]},
	]},
	{ div:["x15 yy"], c:
	[
		{ div:["c xx yy w40 gw mb mr10 g"], c:
		[
			{ s:["x yy","Active Campaigns"] },
		]},
		{ div:["c xx yy w40 gw mb mr10"], c:
		[
			{ s:["x y","Availability"] },
			{ s:["x y","Answered Calls"] },
			{ s:["x y","Missed Calls"] },
			{ s:["x y","Average Talk Time"] },
			{ s:["x y","Max Talk Time"] },
			{ s:["x y","Average Hold Time"] },
			{ s:["x y","Max Hold Time"] },
			{ s:["x y","Total Break Time Today"] },
			{ s:["x y","Average "] },
		]},
		{ div:["e"] }
	]},
	{ div:["x15 yy g"], c:
	[
		{ s:["x yy c b","Availability History"] }

	]}
	

]};

// --------------------------------------------------------------------	

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
	{ ac:["mt20 opti_","","_dash","x y gw cb bd ",""], c:
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

te["dash_main"] = { c:
[
	{ div:["","vb"], c:
	[
		{ div:["ma w19_ t01"], c:
		[
			{ div:["c w13_ t01 "], s:["abs mt17 w13_",""], c:
			[
				{ input:["g","","sbr","1","radio"] },
				{ ac:["ao btn","walkin","_activity_vw_id","xx sh__ bd gg cw h03",""], c:
				[
					{ s:["c y","Walk In"] },
					{ s:["d t03 h2 micon","directions_walk"] },
					{ div:["e"], c:[ { arg:["","src","walkin"] }, { arg:["","src_address",""] } ] }
				]}
			]},
			{ div:["c w03_ t01 l"], s:["abs mt17 w03_",""], c:
			[
				{ input:["g","","sbr","1","radio"] },
				{ ac:["ao  sh__ bd gg","activity_new-r_","_vp","bd gg cw h03",""], c:
				[
					{ s:["t h2 tc","&plus;"] },
					{ div:["e"] }
				]}
			]},
			{ div:["e"] }
		]},
		{ div:["xx tt b20  mtn1	"], c:
		[
			{ a:["c xx y15 h3_ b cb","",APP_NAME,"."] },
			{ div:["e"] }
		]},
	]},
	{ div:["abs w12 h100 x15","vdf"], c: // filter params
	[
		{ div:[], c:
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

		{ uchk:["dash_src_r","%2","dash_src"] },
		
		{ arg:["","created_on","%3"] },
		{ arg:["","gbv_related","%4"] },
		{ arg:["","src","%5"] }
		
	]},
	{ div:["ml15 gw"], dash_view:[] }
]};

te["dash"] = { c:
[
	{ div:[], c:
	[	
		{ input:["g","","case_vw_vt","0","radio","1"] }, 		// list
		{ p:["tabv gw ","vftab"], dash_main:[] } 
	]},
	{ div:[], c:
	[	
		{ input:["g","","case_vw_vt","1","radio"] }, 		// _vw_id | _ed
		{ p:["tabv gw","vfvwm"] }
	]}
]};

// --------------------------------------------------------------------	

te["sbl"] = { div:[null], c: //
[
	{ input:["g","","sbl",null,"radio",null] },
	{ ac:["sbl ao",null,"_tab","yy cw",""], c: // todo: on hover show name
	[
		{ s:["micon l20 h2_ b tc",null] },
		{ s:[" tc s",null] },
		{ u:[null] }
	]},
]};

te["sbl_cat"] = { arg:["",".id","0"] };

te["sbl_case"] = { arg:["","_title","all_cases"] };

te["user_cid"] = { arg:["user_cid","","%7"] }; 

te["user_usn"] = { div:[], c:[ { s:["xx y cd  tr","%5"] }, { div:["e"] } ] }; 

te["user_menu"] = { c:
[
	{ div:[""], u:["user_usn","auth"] },

	{ p:["tr","phone_status"], s:["xx y cd","Checking Phone Status ..."] },

	{ p:["x07","agent_status"], agent_status:["aoffline","","","","x cd","Connecting ...","gd bd h01 w01"] },	

	{ p:["tr","ati_status"] },
				
	{ p:["tr","aa_status"], ev:["boo"], c:[ { aa_status:["aa_none","","z"] } ] },
								
	{ p:["","joinq_status"] },
				
	{ div:["","va"], ac:["ao","myprofile-r_","_vp","xx y cb bd tr","My Profile"] },
						
	{ div:["","va"], ac:["ao","logout-","_u","xx y cb bd tr","Logout"], c:[ { arg:["","logout","1"] } ] },
]};
		
te["notif_count"] = { c:
[
	{ div:[":u::4:0:g:"], s:["ml2 x07 y02 h01_ tc gr cw bd16 s","%4"] },
	{ p:["","ld"] } // context for subsequent lds
]},

te["main"] = { c: 
[
	{ form:[], c:
	[
		{ div:["d g w04_ r25 t01"], s:["abs w04_ t20 zzz",""], c:  // nb: onvw overlap with X
		[
			{ div:["","va"], ac:["","","_dd"," bd cb",""], c:
			[
				{ p:["abs l t g","agent_status_notif"], s:["ml2 x y bd8",""] },
				{ s:["w04 y micon h2_ tc","account_circle"] },								
				{ div:["e"], u:["user_cid","auth"] }
			]},
			{ div:["g w20 mln15 mt zzz gw ba sh__ bd","vdd"], s:["xx yy",""], c:
			[	
				
			]},	

		]},
		
		{ div:["d w04_ t01 r25"], s:["abs w04_ t20 zzz",""], c:
		[
			{ input:["g","","rtab","1","radio"] },
			{ ac:["ay tab","","_mtabr","bd32 cb",""], c:
			[
				{ s:["w04 y micon h tc","account_circle"] }			
			]},
		]},

		{ div:["d w04_ t01 r20 "], s:["abs w04_ t20 zzz",""], c:
		[
			{ input:["g","","rtab","0","radio"] },
			{ ac:["ay tab","","_mtabr","bd32 cb",""], c:
			[
				{ p:["abs","notif_count"], c:[ { div:["","ve"], u:["notif_count","activities_notify_ctx"] } ] },
				{ s:["w04 y micon h tc","notifications"] }				
			]},
		]},

		{ div:["e"] },

		{ div:["g jkkj"], c:[ { input:["g","","rtab","0","radio"] } ] }
	]},
	
	{ div:[] },		// network error - incomplete request

	{ div:["g r05"], ev:["boo"], c: 
	[
		{ div:["d w30_ mr1"], s:["abs zzzzz mt80 sh__ w30_ bd8 gw ",""], c:
		[
			{ div:[], c:
			[
				{ input:["g","","ntabv","0","radio"] },
				{ div:["tabv","vt_activity"], u:["activity_lst","activities_ctx"] }
			]},
			{ div:[], c:
			[
				{ input:["g","","ntabv","2","radio","1"] },
				{ div:["tabv xx yy","vt_usn"], user_menu:[] }
               ]},
			{ div:[], c:
			[
				{ input:["g","","ntabv","2","radio"] },
				{ div:["g","call_sessions"] }
			]},
			{ div:[], c:
			[
				{ input:["g","","ntabv","2","radio"] },
				{ div:["g","call_aii_panel"] }
			]}
		]},
		{ div:["e"], c:[ { input:["g","","sbr","","radio"] } ] } 
	]},
	
	{ div:["w06 h105 gb abs mtn1","vb"], c: 
	[
		{ div:["gb mtn1"], c:[ { a:["h06","","","/helpline/"], c:[ { img:["","",APP_LOGO, "60"] } ] } ] },
	
		{ sbl:["","1","1","","speed","Dash","noop"] }, // todo: rename to activities
		
		{ sbl:["","2","","cases-cases","cases","Cases","sbl_case"] },
		
		{ sbl:["counsellor_","3","","calls-calls","call","Calls","noop"] },
		{ sbl:["supervisor_","3","","calls-calls","call","Calls","noop"] },
		{ sbl:["admin_","3","","calls-calls","call","Calls","noop"] },

		{ sbl:["counsellor_","4","","pmessages-pmessages","chat_bubble_outline","Other Channels","noop"] },
		{ sbl:["supervisor_","4","","pmessages-pmessages","chat_bubble_outline","Other Channels","noop"] },
		{ sbl:["admin_","4","","pmessages-pmessages","chat_bubble_outline","Other Channels","noop"] },
          { sbl:["media_","4","","pmessages-pmessages","chat_bubble_outline","Other Channels","noop"] },
				
		{ sbl:["supervisor_","5","","qas-qas","sentiment_satisfied","QA","noop"] },
		{ sbl:["admin_","5","","qas-qas","sentiment_satisfied","QA","noop"] },
		
		{ sbl:["admin_","6","","categories-categories","account_tree","Categories","sbl_cat"] },

		{ sbl:["admin_","7","","users-users","manage_accounts","Users","noop"] },
		
		{ sbl:["counsellor_","9","","","dashboard","Wallboard","noop"] },
		{ sbl:["supervisor_","9","","","dashboard","Wallboard","noop"] },
		{ sbl:["admin_","9","","","dashboard","Wallboard","noop"] },

		// { sbl:["admin_","9","","contacts-contacts","import_contacts","Contacts","noop"] },
	]},
	
	{ p:["abs zzzzzzz y op_ga g","vp"], ev:["_uvpd"] }, // popup window	
	
	{ p:["abs zzzzz y op_ga g","vip"], ev:["_uvpd"] }, // incoming call popup	

	{ div:["ml6"], c:
	[
		{ div:[], c:[ { input:["g","","mtv","0","radio"] }, 	{ form:["tabv","vfvwm"] } ] }, // ?
		{ div:[], c:[ { input:["g","","mtv","1","radio","1"] },{ form:["tabv","vftab"], u:["dash","dash"] } ] }, // dash aka realtime-activities
		{ div:[], c:[ { input:["g","","mtv","2","radio"] }, 	{ form:["tabv","vftab"] } ] }, // cases
		{ div:[], c:[ { input:["g","","mtv","3","radio"] }, 	{ form:["tabv","vftab"] } ] }, // calls
		{ div:[], c:[ { input:["g","","mtv","4","radio"] }, 	{ form:["tabv","vftab"] } ] }, // text (non-call) channels
		{ div:[], c:[ { input:["g","","mtv","5","radio"] }, 	{ form:["tabv","vftab"] } ] }, // qa
		{ div:[], c:[ { input:["g","","mtv","6","radio"] }, 	{ form:["tabv","vftab"] } ] }, // categories
		{ div:[], c:[ { input:["g","","mtv","7","radio"] }, 	{ form:["tabv","vftab"] } ] }, // users
		{ div:[], c:[ { input:["g","","mtv","8","radio"] }, 	{ form:["tabv","vftab"] } ] }, // contacts
		{ div:[], c:[ { input:["g","","mtv","9","radio"] }, 	{ form:["tabv","vfvwm"], wallboard:[] } ] }, // wallboard
		{ div:["g"], c:
		[
			{ iframe:["","",VA_AMI_HOST] },
//			{ iframe:["","",VA_ATI_HOST] },
		]},
	]}
]};

te["login"] = { div:["gw "], c:
[
	{ div:["logimnbg"], s:["ma w100",""], c: 
	[
		{ div:["c t20"], c:
		[
			{ s:["x t20 b hhh","Hello,"] },
			{ s:["x b y hhh","Welcome back!"] }
		]},
		
		{ div:["d w32 mb12"], c:[ { div:["","ve"], c:
		[ 
		
			{ div:["ma w26 y40"], c:
			[ 
				
				//{ div:["c w13 t15"], c:[ { img:["","",APP_LOGO, "100"] } ] },
				{ div:["e"] }
			]}, 
					
			{ p:["w26 x30 y30 gb bd cw","o"], c:
			[
				{ div:[""], c:
				[
					{ s:["hhh b cw","Log in"] }, 
					{ div:["e"] }
				]},
				{ div:["y"], c:
				[
					{ p:["","nb"], u:["nb","auth_nb"] },
					{ div:["e"] }
				]},
				{ div:["t"], c:
				[
					{ div:[], s:["x y02 cw","Username"] },
					{ div:["w26 gw bd"], c:[ { input:["w26 xx yy","","user","","text","","Enter Username"] } ] },
					//{ div:["e"] }
				]},
				{ div:["t15"], c:
				[
					{ div:[], s:["x y02 cw","Password"] },
					{ div:["w26 gw bd"], c:[ { input:["w26 xx yy","","pass","","password","","Enter Password"] } ] },
					//{ div:["e"] }
				]},
				{ div:["t"], c:
				[
					{ div:["c"], s:["x y02 cw","Remember me"] },
					{ div:["d"], s:["x y02 cw","Forgot Password"] },
					{ div:["e"] }
				]},
				{ div:["t40"], c:
				[
					{ div:[], ac:["ag btn","login-","_postj","xx yy go cb bd b h3 tc","Login","0"] },
					{ div:["e"] },
					]}
			]} 
		]} ]}
	]},
	// { div:["y h50"]}
]};

// -------------------------------------------------------

function unloadphone (el, u, a, r, m)
{
	VOICEAPPS_UA.disconnect ();
}

function loadphone (el, u, a, r, m)
{
	var v = re["user_role"][ra["auth"][0][6]];
	if (v) document.getElementById ("vv").className = v[2];
	console.log ("loadphone: "+ra["auth"][0][7]+" | "+JSON.stringify (v));
	VOICEAPPS_UA.DetectDevices ();
	VOICEAPPS_UA.connect (ra["auth"][0][7]);
}

function ami_wait (el, u, a, r, m)
{

}

function _phone_fmt (s)
{
	var a = 0;
	var n = s.length;
	for (var i=0; i<n; i++) 
	{
		var ch = s.substr (i,1);
		if (ch=="+" || ch=="0" || ch==" ") { a++; continue; }
		break;
	}
	if (n-a==9) return COUNTRY_CODE+s.substr (a,(n-a));
	return s.substr (a,(n-a));
}

function case_prio_chart (el, u, a, r, m)
{
	var status = {"":0, "0":0, "1":1, "2":0, "3":2 }
	var prio = {"":0, "0":0, "1":0, "2":1, "3":2 };
	var rr = ra["cases_pivot"];
	var j = null;
	var k = null;
	var m = 0;
	var rr_ = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	for (var i=0; i<rr.length; i++)
	{
		j = status[rr[i][0]];
		k = prio[rr[i][1]];
		// console.log ("[prio] ("+rr[i][0]+","+rr[i][1]+") ("+j+","+k+")")
		if (j==undefined) continue;
		if (k==undefined) continue;
		//console.log ("PRIO] "+j+","+k+" |"+ rr[i][0][0]+","+rr[i][1][0]);
		rr_[j][k] += 1*rr[i][2][0];
		rr_[3][k] += 1*rr[i][2][0];
	}
		
	for (var i=0; i<4; i++) rr_[i][3]=rr_[i][0]+rr_[i][1]+rr_[i][2];  // calc total
		
	for (var i=0; i<4; i++) el.childNodes[2].childNodes[i].firstChild.childNodes[1].innerHTML = rr_[3][i]; 
	
	console.log ("[PRIO] "+JSON.stringify (rr_)+" | "+m);
	
	for (var i=0; i<3; i++) 
	{
		el.childNodes[1].childNodes[i].childNodes[1].childNodes[1].innerHTML = rr_[i][3];
		var coll = el.childNodes[1].childNodes[i].firstChild.childNodes;
		for (j=0; j<3; j++) if (rr_[i][j]>0) 
		{
			var w = ((rr_[i][j]/rr_[3][3])*500)-1
			coll[j].style.width = w
			// console.log ("prio ("+i+","+j+") "+rr_[i][j]+" | "+w)
		}
	}
}

function _dash ()
{
	this.previousSibling.checked = true;
	var p = __(this,"vdf");
	var a = {args:"?", ".id":""};
	argv (p, a);
	url (p.parentNode, "dash", "dash", a.args);
}

function _mtabr (ev)
{
	var coll = document.getElementById ("vv").childNodes;
	var coll_ = coll[2].firstChild.firstChild.childNodes; 
	var f = this.previousSibling.checked;
	if (f==true)
	{
		this.previousSibling.checked = false;
		coll[2].style.display = "none";
		// coll[6].style.marginRight = "";	
		// coll[6].className = "ml6";
		return
	}
	this.previousSibling.checked = true;
	coll_[this.previousSibling.value].firstChild.checked=true;
	coll[2].style.display = "block";
	// coll[6].style.marginRight = "327px";
	// coll[6].className = "mmr";

	var p_ = __(coll[2],"vdd");
	var i=0;
	for (i=0; i<dda.length; i++) if (dda[i][0]==p_) break;
	dda[i] = [p_,coll[2]];
	boo(ev)
}

function rxmsg (ev)
{
        if (document.getElementById ("user_cid")==null) return;

       //  console.debug (ev.data)
        
        var o = JSON.parse (ev.data);

        if (o.ra_ts)
        {
                ra_ts = o.ra_ts;
                return;
        }

        if (o.ati)
        {
               ldati (o.ati)
               return;
        }

        if (o.peers)
        {
                re["peers"] = o.peers;
        }

        if (o.channels)
        {
                ldami (o.channels, o.c);
        }
}

window.addEventListener("message", rxmsg, false);

window.onresize = function ()
{
	// show_notifications (1);
}

window.onload = function ()
{
	ra_ts = 0; // (Date.now()/1000)-ra_ts; 

	Chart.defaults.global.responsive = false;
	Chart.defaults.global.maintainAspectRatio = false;
	Chart.defaults.global.elements.line.tension = 1;
	// Chart.defaults.global.elements.line.stepped = true;
	// Chart.defaults.global.elements.line.backgroundColor = "rgba(255,255,255,0)";
	Chart.defaults.global.elements.line.borderWidth = 0;
	Chart.defaults.global.elements.point.radius = 3;
	//Chart.defaults.global.elements.point.borderColor = "rgba(255,0,0,1)";
	Chart.defaults.global.elements.point.hitRadius = 10;
	// Chart.defaults.global.animation.duration = 0;

	var c;
	for (var n =0; n < 256; n++)
	{
        	c = n;
        	for (var k =0; k < 8; k++)
        	{
        	    c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
        	}
        	CRC_TABLE[n] = c;
        }
        
	var p = document.getElementById ("vv"); 
	
	url (p, "login","","");
}

