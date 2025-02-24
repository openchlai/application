argv

url

_post() { args ( js) }

_vpf

_vp

_vw
	
_tab

_nav 

_u


$contacts_api = array // todo: primary_contact_foreign_key (when someone calls with different number)
(
        array ("categories","","duf","id","age_group_id",NULL, "id:age_group_id", "fullname:age_group"),
        array ("categories","","duf","id","sex_id",NULL, "id:sex_id", "fullname:sex"),
        array ("categories","","duf","id","lang_id",NULL, "id:lang_id", "fullname:lang"),
        array ("categories","","duf","id","nationality_id",NULL, "id:nationality_id", "fullname:nationality"),
        array ("categories","","duf","id","national_id_type_id",NULL, "id:national_id_type_id", "fullname:national_id_type"),
        array ("categories","","duf","id","tribe_id",NULL, "id:tribe_id", "fullname:tribe"),
        array ("categories","","duf","id","location_id",NULL, "id:location_id", "fullname:location","fullname_id:location_fullname_id"),
        array ("contacts","","lvl","location_fullname_id","7","^",":", "location_","id_",""), // split loc levels
        array ("contacts","",""), // create | update contact
        array ("contacts","contacts","agg4",  "id","contact_id",NULL,  "id","contact_id"),
);

$contacts_dup_api = array
(
        array ("contacts","","dup","id","contact_id",NULL,
"id","fullname", "fname", "lname",
"phone", "phone2", "email", "national_id",
"age", "dob",
"age_group_id", "age_group",
"sex_id", "sex",
"national_id_type_id", "national_id_type",
"nationality_id", "nationality",
"is_refugee",
"tribe_id", "tribe",
"lang_id", "lang",
"location_id", "location",
"location_id_0", "location_id_1", "location_id_2", "location_id_3", "location_id_4", "location_id_5", "location_id_6",
"location_0", "location_1", "location_2", "location_3", "location_4", "location_5", "location_6",
"landmark")
);

$reporters_api = array // update reporter
(
        array ("reporters","","aub"),
        array ("contacts","","include"),
        array ("contacts","_dup","include"),
        array ("reporters","",""),
        array ("reporters","_dup","include"),
        array ("case_activities","","params", "activity_ref","reporter_id", "detail","contact_fullname"),
        array ("case_activities","","include")
);

$dispositions_api = array
(
        array ("categories","","dup","id","disposition_id",NULL, "id:disposition_id", "name:disposition"),
        //array ("categories","","dup","id","age_group_id",NULL, "id:reporter_age_group_id", "fullname:reporter_age_group"),
        array ("categories","","dup","id","sex_id",NULL, "id:reporter_sex_id", "fullname:reporter_sex"),
        array ("categories","","dup","id","location_id",NULL, "id:reporter_location_id", "fullname:reporter_location","fullname_id:reporter_location_fullname_id"),
        array ("dispositions","","lvl","reporter_location_fullname_id","7","^",":", "reporter_location_","id_",""), // split loc levels                array ("contacts","_dup2","include"),
        array ("dispositions","","dup", "src","src", "src_uid","src_uid", "reporter_contact_id","reporter_contact_id", "case_id"," 0",NULL,"id"), // get disposition_id (if exists)
        array ("dispositions","_include","include"),
)

$dispositions_include_api = array
(
        array ("dispositions","","params",              "src_uid2","::src_uid2: nill:src_uid2", "src_uid_","src_uid", "src_uid2_","src_uid2", "is_active"," 1"),
        array ("dispositions","",""),
        array ("dispositions","dispositions","agg1",    "src","src","src_uid","src_uid", "case_id"," 0", NULL, "src","src","src_uid","src_uid", "case_id",":>: 0"), // unlink non-case (if with-case exists)
        array ("activities","dispositions","agg4",      "src","src", "src_uid","src_uid", NULL, "src","src","src_uid_","src_uid"),      // update activity (if exists)
        array ("calls","dispositions","agg4",           "uniqueid","src_uid2",  NULL, "src"," call","src_uid2_","src_uid2"),            // update call (if exists)
        array ("pmessages","dispositions","agg4",       "src","src", "src_callid","src_callid",  NULL, "src","src", "src_callid","src_callid"), // update call (if exists)
);

$contacts_disposition_api = array // attach disposition to contact create/edit
(
        array ("contacts","","include"),
        array ("dispositions","","include"),
        array ("contacts","","params", "contact_disposition_id","contact_id"),
);
