Search.setIndex({envversion:46,filenames:["bigquery-client","bigquery-dataset","bigquery-job","bigquery-table","bigquery-usage","datastore-batches","datastore-client","datastore-entities","datastore-keys","datastore-queries","datastore-transactions","gcloud-api","gcloud-auth","index","pubsub-client","pubsub-subscription","pubsub-topic","pubsub-usage","storage-acl","storage-blobs","storage-buckets","storage-client"],objects:{"gcloud.bigquery":{client:[0,0,0,"-"],connection:[0,0,0,"-"],dataset:[1,0,0,"-"],job:[2,0,0,"-"],table:[3,0,0,"-"]},"gcloud.bigquery.client":{Client:[0,3,1,""]},"gcloud.bigquery.client.Client":{copy_table:[0,2,1,""],dataset:[0,2,1,""],extract_table_to_storage:[0,2,1,""],list_datasets:[0,2,1,""],load_table_from_storage:[0,2,1,""],run_query:[0,2,1,""]},"gcloud.bigquery.connection":{Connection:[0,3,1,""],SCOPE:[0,6,1,""]},"gcloud.bigquery.connection.Connection":{API_BASE_URL:[0,1,1,""],API_URL_TEMPLATE:[0,1,1,""],API_VERSION:[0,1,1,""]},"gcloud.bigquery.dataset":{AccessGrant:[1,3,1,""],Dataset:[1,3,1,""]},"gcloud.bigquery.dataset.Dataset":{"delete":[1,2,1,""],access_grants:[1,1,1,""],create:[1,2,1,""],created:[1,1,1,""],dataset_id:[1,1,1,""],default_table_expiration_ms:[1,1,1,""],description:[1,1,1,""],etag:[1,1,1,""],exists:[1,2,1,""],friendly_name:[1,1,1,""],from_api_repr:[1,7,1,""],list_tables:[1,2,1,""],location:[1,1,1,""],modified:[1,1,1,""],patch:[1,2,1,""],path:[1,1,1,""],project:[1,1,1,""],reload:[1,2,1,""],self_link:[1,1,1,""],table:[1,2,1,""],update:[1,2,1,""]},"gcloud.bigquery.job":{Compression:[2,3,1,""],CopyJob:[2,3,1,""],CreateDisposition:[2,3,1,""],DestinationFormat:[2,3,1,""],Encoding:[2,3,1,""],ExtractTableToStorageJob:[2,3,1,""],LoadTableFromStorageJob:[2,3,1,""],QueryPriority:[2,3,1,""],RunQueryJob:[2,3,1,""],SourceFormat:[2,3,1,""],WriteDisposition:[2,3,1,""]},"gcloud.bigquery.job.Compression":{ALLOWED:[2,1,1,""],GZIP:[2,1,1,""],NONE:[2,1,1,""]},"gcloud.bigquery.job.CopyJob":{create_disposition:[2,1,1,""],write_disposition:[2,1,1,""]},"gcloud.bigquery.job.CreateDisposition":{ALLOWED:[2,1,1,""],CREATE_IF_NEEDED:[2,1,1,""],CREATE_NEVER:[2,1,1,""]},"gcloud.bigquery.job.DestinationFormat":{ALLOWED:[2,1,1,""],AVRO:[2,1,1,""],CSV:[2,1,1,""],NEWLINE_DELIMITED_JSON:[2,1,1,""]},"gcloud.bigquery.job.Encoding":{ALLOWED:[2,1,1,""],ISO_8559_1:[2,1,1,""],UTF_8:[2,1,1,""]},"gcloud.bigquery.job.ExtractTableToStorageJob":{compression:[2,1,1,""],destination_format:[2,1,1,""],field_delimiter:[2,1,1,""],print_header:[2,1,1,""]},"gcloud.bigquery.job.LoadTableFromStorageJob":{allow_jagged_rows:[2,1,1,""],allow_quoted_newlines:[2,1,1,""],create_disposition:[2,1,1,""],encoding:[2,1,1,""],field_delimiter:[2,1,1,""],ignore_unknown_values:[2,1,1,""],input_file_bytes:[2,1,1,""],input_files:[2,1,1,""],max_bad_records:[2,1,1,""],output_bytes:[2,1,1,""],output_rows:[2,1,1,""],quote_character:[2,1,1,""],schema:[2,1,1,""],skip_leading_rows:[2,1,1,""],source_format:[2,1,1,""],write_disposition:[2,1,1,""]},"gcloud.bigquery.job.QueryPriority":{ALLOWED:[2,1,1,""],BATCH:[2,1,1,""],INTERACTIVE:[2,1,1,""]},"gcloud.bigquery.job.RunQueryJob":{allow_large_results:[2,1,1,""],create_disposition:[2,1,1,""],default_dataset:[2,1,1,""],destination_table:[2,1,1,""],flatten_results:[2,1,1,""],priority:[2,1,1,""],use_query_cache:[2,1,1,""],write_disposition:[2,1,1,""]},"gcloud.bigquery.job.SourceFormat":{ALLOWED:[2,1,1,""],CSV:[2,1,1,""],DATASTORE_BACKUP:[2,1,1,""],NEWLINE_DELIMITED_JSON:[2,1,1,""]},"gcloud.bigquery.job.WriteDisposition":{ALLOWED:[2,1,1,""],WRITE_APPEND:[2,1,1,""],WRITE_EMPTY:[2,1,1,""],WRITE_TRUNCATE:[2,1,1,""]},"gcloud.bigquery.table":{SchemaField:[3,3,1,""],Table:[3,3,1,""]},"gcloud.bigquery.table.Table":{"delete":[3,2,1,""],create:[3,2,1,""],created:[3,1,1,""],dataset_name:[3,1,1,""],description:[3,1,1,""],etag:[3,1,1,""],exists:[3,2,1,""],expires:[3,1,1,""],fetch_data:[3,2,1,""],friendly_name:[3,1,1,""],from_api_repr:[3,7,1,""],insert_data:[3,2,1,""],location:[3,1,1,""],modified:[3,1,1,""],num_bytes:[3,1,1,""],num_rows:[3,1,1,""],patch:[3,2,1,""],path:[3,1,1,""],project:[3,1,1,""],reload:[3,2,1,""],schema:[3,1,1,""],self_link:[3,1,1,""],table_id:[3,1,1,""],table_type:[3,1,1,""],update:[3,2,1,""],view_query:[3,1,1,""]},"gcloud.client":{Client:[11,3,1,""],JSONClient:[11,3,1,""]},"gcloud.client.Client":{from_service_account_json:[11,7,1,""],from_service_account_p12:[11,7,1,""]},"gcloud.connection":{API_BASE_URL:[11,6,1,""],Connection:[11,3,1,""],JSONConnection:[11,3,1,""]},"gcloud.connection.Connection":{USER_AGENT:[11,1,1,""],credentials:[11,1,1,""],from_environment:[11,7,1,""],from_service_account_json:[11,7,1,""],from_service_account_p12:[11,7,1,""],http:[11,1,1,""]},"gcloud.connection.JSONConnection":{API_BASE_URL:[11,1,1,""],API_URL_TEMPLATE:[11,1,1,""],API_VERSION:[11,1,1,""],api_request:[11,2,1,""],build_api_url:[11,7,1,""]},"gcloud.credentials":{generate_signed_url:[11,5,1,""],get_credentials:[11,5,1,""],get_for_service_account_json:[11,5,1,""],get_for_service_account_p12:[11,5,1,""]},"gcloud.datastore":{batch:[5,0,0,"-"],client:[6,0,0,"-"],connection:[6,0,0,"-"],entity:[7,0,0,"-"],key:[8,0,0,"-"],query:[9,0,0,"-"],transaction:[10,0,0,"-"]},"gcloud.datastore.batch":{Batch:[5,3,1,""]},"gcloud.datastore.batch.Batch":{"delete":[5,2,1,""],add_auto_id_entity:[5,2,1,""],begin:[5,2,1,""],commit:[5,2,1,""],connection:[5,1,1,""],current:[5,2,1,""],dataset_id:[5,1,1,""],mutation:[5,1,1,""],namespace:[5,1,1,""],put:[5,2,1,""],rollback:[5,2,1,""]},"gcloud.datastore.client":{Client:[6,3,1,""]},"gcloud.datastore.client.Client":{"delete":[6,2,1,""],allocate_ids:[6,2,1,""],batch:[6,2,1,""],current_batch:[6,1,1,""],current_transaction:[6,1,1,""],delete_multi:[6,2,1,""],get:[6,2,1,""],get_multi:[6,2,1,""],key:[6,2,1,""],put:[6,2,1,""],put_multi:[6,2,1,""],query:[6,2,1,""],transaction:[6,2,1,""]},"gcloud.datastore.connection":{Connection:[6,3,1,""],SCOPE:[6,6,1,""]},"gcloud.datastore.connection.Connection":{API_URL_TEMPLATE:[6,1,1,""],API_VERSION:[6,1,1,""],allocate_ids:[6,2,1,""],begin_transaction:[6,2,1,""],build_api_url:[6,2,1,""],commit:[6,2,1,""],lookup:[6,2,1,""],rollback:[6,2,1,""],run_query:[6,2,1,""]},"gcloud.datastore.entity":{Entity:[7,3,1,""]},"gcloud.datastore.entity.Entity":{exclude_from_indexes:[7,1,1,""],kind:[7,1,1,""]},"gcloud.datastore.key":{Key:[8,3,1,""]},"gcloud.datastore.key.Key":{completed_key:[8,2,1,""],dataset_id:[8,1,1,""],flat_path:[8,1,1,""],id:[8,1,1,""],id_or_name:[8,1,1,""],is_partial:[8,1,1,""],kind:[8,1,1,""],name:[8,1,1,""],namespace:[8,1,1,""],parent:[8,1,1,""],path:[8,1,1,""],to_protobuf:[8,2,1,""]},"gcloud.datastore.query":{Iterator:[9,3,1,""],Query:[9,3,1,""]},"gcloud.datastore.query.Iterator":{next_page:[9,2,1,""]},"gcloud.datastore.query.Query":{OPERATORS:[9,1,1,""],add_filter:[9,2,1,""],ancestor:[9,1,1,""],dataset_id:[9,1,1,""],fetch:[9,2,1,""],filters:[9,1,1,""],group_by:[9,1,1,""],keys_only:[9,2,1,""],kind:[9,1,1,""],namespace:[9,1,1,""],order:[9,1,1,""],projection:[9,1,1,""]},"gcloud.datastore.transaction":{Transaction:[10,3,1,""]},"gcloud.datastore.transaction.Transaction":{begin:[10,2,1,""],commit:[10,2,1,""],current:[10,2,1,""],id:[10,1,1,""],rollback:[10,2,1,""]},"gcloud.exceptions":{BadRequest:[11,4,1,""],ClientError:[11,4,1,""],Conflict:[11,4,1,""],Forbidden:[11,4,1,""],GCloudError:[11,4,1,""],InternalServerError:[11,4,1,""],LengthRequired:[11,4,1,""],MethodNotAllowed:[11,4,1,""],MovedPermanently:[11,4,1,""],NotFound:[11,4,1,""],NotImplemented:[11,4,1,""],NotModified:[11,4,1,""],PreconditionFailed:[11,4,1,""],Redirection:[11,4,1,""],RequestRangeNotSatisfiable:[11,4,1,""],ResumeIncomplete:[11,4,1,""],ServerError:[11,4,1,""],ServiceUnavailable:[11,4,1,""],TemporaryRedirect:[11,4,1,""],TooManyRequests:[11,4,1,""],Unauthorized:[11,4,1,""],eklass:[11,1,1,""],make_exception:[11,5,1,""]},"gcloud.exceptions.BadRequest":{code:[11,1,1,""]},"gcloud.exceptions.Conflict":{code:[11,1,1,""]},"gcloud.exceptions.Forbidden":{code:[11,1,1,""]},"gcloud.exceptions.GCloudError":{code:[11,1,1,""],errors:[11,1,1,""]},"gcloud.exceptions.InternalServerError":{code:[11,1,1,""]},"gcloud.exceptions.LengthRequired":{code:[11,1,1,""]},"gcloud.exceptions.MethodNotAllowed":{code:[11,1,1,""]},"gcloud.exceptions.MovedPermanently":{code:[11,1,1,""]},"gcloud.exceptions.NotFound":{code:[11,1,1,""]},"gcloud.exceptions.NotImplemented":{code:[11,1,1,""]},"gcloud.exceptions.NotModified":{code:[11,1,1,""]},"gcloud.exceptions.PreconditionFailed":{code:[11,1,1,""]},"gcloud.exceptions.RequestRangeNotSatisfiable":{code:[11,1,1,""]},"gcloud.exceptions.ResumeIncomplete":{code:[11,1,1,""]},"gcloud.exceptions.ServiceUnavailable":{code:[11,1,1,""]},"gcloud.exceptions.TemporaryRedirect":{code:[11,1,1,""]},"gcloud.exceptions.TooManyRequests":{code:[11,1,1,""]},"gcloud.exceptions.Unauthorized":{code:[11,1,1,""]},"gcloud.pubsub":{client:[14,0,0,"-"],connection:[14,0,0,"-"],subscription:[15,0,0,"-"],topic:[16,0,0,"-"]},"gcloud.pubsub.client":{Client:[14,3,1,""]},"gcloud.pubsub.client.Client":{list_subscriptions:[14,2,1,""],list_topics:[14,2,1,""],topic:[14,2,1,""]},"gcloud.pubsub.connection":{Connection:[14,3,1,""],SCOPE:[14,6,1,""]},"gcloud.pubsub.connection.Connection":{API_BASE_URL:[14,1,1,""],API_URL_TEMPLATE:[14,1,1,""],API_VERSION:[14,1,1,""]},"gcloud.pubsub.subscription":{Subscription:[15,3,1,""]},"gcloud.pubsub.subscription.Subscription":{"delete":[15,2,1,""],acknowledge:[15,2,1,""],create:[15,2,1,""],exists:[15,2,1,""],from_api_repr:[15,7,1,""],modify_ack_deadline:[15,2,1,""],modify_push_configuration:[15,2,1,""],path:[15,1,1,""],pull:[15,2,1,""],reload:[15,2,1,""]},"gcloud.pubsub.topic":{Batch:[16,3,1,""],Topic:[16,3,1,""]},"gcloud.pubsub.topic.Batch":{commit:[16,2,1,""],publish:[16,2,1,""]},"gcloud.pubsub.topic.Topic":{"delete":[16,2,1,""],batch:[16,2,1,""],create:[16,2,1,""],exists:[16,2,1,""],from_api_repr:[16,7,1,""],full_name:[16,1,1,""],path:[16,1,1,""],project:[16,1,1,""],publish:[16,2,1,""],subscription:[16,2,1,""]},"gcloud.storage":{acl:[18,0,0,"-"],blob:[19,0,0,"-"],bucket:[20,0,0,"-"],client:[21,0,0,"-"],connection:[21,0,0,"-"]},"gcloud.storage.acl":{ACL:[18,3,1,""],BucketACL:[18,3,1,""],DefaultObjectACL:[18,3,1,""],ObjectACL:[18,3,1,""]},"gcloud.storage.acl.ACL":{add_entity:[18,2,1,""],all:[18,2,1,""],all_authenticated:[18,2,1,""],clear:[18,2,1,""],client:[18,1,1,""],domain:[18,2,1,""],entity:[18,2,1,""],entity_from_dict:[18,2,1,""],get_entities:[18,2,1,""],get_entity:[18,2,1,""],group:[18,2,1,""],has_entity:[18,2,1,""],loaded:[18,1,1,""],reload:[18,2,1,""],reload_path:[18,1,1,""],reset:[18,2,1,""],save:[18,2,1,""],save_path:[18,1,1,""],user:[18,2,1,""]},"gcloud.storage.acl.BucketACL":{client:[18,1,1,""],reload_path:[18,1,1,""],save_path:[18,1,1,""]},"gcloud.storage.acl.ObjectACL":{client:[18,1,1,""],reload_path:[18,1,1,""],save_path:[18,1,1,""]},"gcloud.storage.blob":{Blob:[19,3,1,""]},"gcloud.storage.blob.Blob":{"delete":[19,2,1,""],acl:[19,1,1,""],cache_control:[19,1,1,""],chunk_size:[19,1,1,""],client:[19,1,1,""],component_count:[19,1,1,""],content_disposition:[19,1,1,""],content_encoding:[19,1,1,""],content_language:[19,1,1,""],content_type:[19,1,1,""],crc32c:[19,1,1,""],download_as_string:[19,2,1,""],download_to_file:[19,2,1,""],download_to_filename:[19,2,1,""],etag:[19,1,1,""],exists:[19,2,1,""],generate_signed_url:[19,2,1,""],generation:[19,1,1,""],id:[19,1,1,""],make_public:[19,2,1,""],md5_hash:[19,1,1,""],media_link:[19,1,1,""],metadata:[19,1,1,""],metageneration:[19,1,1,""],owner:[19,1,1,""],path:[19,1,1,""],path_helper:[19,8,1,""],public_url:[19,1,1,""],self_link:[19,1,1,""],size:[19,1,1,""],storage_class:[19,1,1,""],time_deleted:[19,1,1,""],updated:[19,1,1,""],upload_from_file:[19,2,1,""],upload_from_filename:[19,2,1,""],upload_from_string:[19,2,1,""]},"gcloud.storage.bucket":{Bucket:[20,3,1,""]},"gcloud.storage.bucket.Bucket":{"delete":[20,2,1,""],acl:[20,1,1,""],blob:[20,2,1,""],client:[20,1,1,""],configure_website:[20,2,1,""],copy_blob:[20,2,1,""],cors:[20,1,1,""],create:[20,2,1,""],default_object_acl:[20,1,1,""],delete_blob:[20,2,1,""],delete_blobs:[20,2,1,""],disable_logging:[20,2,1,""],disable_website:[20,2,1,""],enable_logging:[20,2,1,""],etag:[20,1,1,""],exists:[20,2,1,""],get_blob:[20,2,1,""],get_logging:[20,2,1,""],id:[20,1,1,""],lifecycle_rules:[20,1,1,""],list_blobs:[20,2,1,""],location:[20,1,1,""],make_public:[20,2,1,""],metageneration:[20,1,1,""],owner:[20,1,1,""],path:[20,1,1,""],path_helper:[20,8,1,""],project_number:[20,1,1,""],rename_blob:[20,2,1,""],self_link:[20,1,1,""],storage_class:[20,1,1,""],time_created:[20,1,1,""],versioning_enabled:[20,1,1,""]},"gcloud.storage.client":{Client:[21,3,1,""]},"gcloud.storage.client.Client":{batch:[21,2,1,""],bucket:[21,2,1,""],connection:[21,1,1,""],create_bucket:[21,2,1,""],current_batch:[21,1,1,""],get_bucket:[21,2,1,""],list_buckets:[21,2,1,""],lookup_bucket:[21,2,1,""]},"gcloud.storage.connection":{Connection:[21,3,1,""],SCOPE:[21,6,1,""]},"gcloud.storage.connection.Connection":{API_BASE_URL:[21,1,1,""],API_URL_TEMPLATE:[21,1,1,""],API_VERSION:[21,1,1,""]},gcloud:{client:[11,0,0,"-"],connection:[11,0,0,"-"],credentials:[11,0,0,"-"],exceptions:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","class","Python class"],"4":["py","exception","Python exception"],"5":["py","function","Python function"],"6":["py","data","Python data"],"7":["py","classmethod","Python class method"],"8":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:class","4":"py:exception","5":"py:function","6":"py:data","7":"py:classmethod","8":"py:staticmethod"},terms:{"09df":4,"3xx":11,"4ae0":4,"4xx":11,"5xx":11,"__exit__":17,"__init__":11,"__key__":9,"_aclent":18,"_basejob":2,"_blobiter":20,"_connection_class":11,"_datastore_v1_pb2":[5,6,8],"_enumproperti":2,"_helper":[19,20],"_propertymixin":[19,20],"_serviceaccountcredenti":11,"_target_object":11,"abstract":[5,9,10,11,18],"boolean":[0,3,6,8,9,11,14,15,16,18,19,20],"byte":[2,3,5,7,9,16,19],"case":[5,7,19],"catch":21,"class":[0,1,2,3,5,6,7,8,9,10,11,14,15,16,18,19,20,21],"default":[0,1,3,4,5,6,9,10,11,12,14,17,18,19,20,21],"enum":2,"final":[8,12],"float":[3,9],"function":[11,19],"import":[4,5,6,9,10,12,13,17,18,20],"int":[0,1,4,11,14,15,16,19],"long":[11,19,20],"new":[0,1,4,8,11,15,17,18,20,21],"public":[19,20],"return":[0,1,2,3,5,6,7,8,9,10,11,14,15,16,18,19,20,21],"short":18,"static":[19,20],"true":[0,4,6,8,11,15,16,17,18,19,20],"try":[10,11,13,19,20,21],"while":[4,11],abel:4,abil:5,abl:[11,13,18,19],about:[11,19,20],absenc:19,accept:[8,11],access:[1,4,11,18,19,20],access_gr:1,accessgr:1,accesslog:20,accident:20,account:[11,12,18,19],ack:[15,17],ack_deadlin:[15,16,17],ack_id:[15,17],acknowledg:[15,16,17],across:4,act:[0,7,11,14,21],action:4,activ:[6,21],actual:[7,18],adamson:4,add:[5,11,16,18,20],add_auto_id_ent:5,add_ent:18,add_filt:[6,9],addit:[11,12],address:18,advanc:[6,11],after:[4,7,17,18],again:7,against:[4,9,11],age_count:4,agent:11,agre:16,akin:7,alia:11,all:[4,7,8,12,17,18,19,20,21],all_authent:18,alloc:6,allocate_id:6,allocateid:6,allow:[2,4,7,11,13,19],allow_jagged_row:2,allow_large_result:2,allow_quoted_newlin:2,allowjaggedrow:2,allowlargeresult:2,allowquotednewlin:2,allus:18,along:6,alread:5,alreadi:[5,10,18,20,21],also:[5,10,11,18,20],altern:[4,18],amount:19,ancestor:9,ani:[5,6,7,11,18,19],anoth:[0,1,4,14,17],anyth:[18,20],api:[0,1,2,3],api_access_endpoint:11,api_bas:6,api_base_url:[0,6,11,14,21],api_request:11,api_url_templ:[0,6,11,14,21],api_vers:[0,6,11,14,21],app:[11,12,18],appar:20,appassertioncredenti:11,append:4,appendix:19,appengin:11,appli:[4,6,9],applic:[4,12,15,16,17,18,19],approv:20,apt:13,arbitrari:19,arg:11,argument:[6,8,11,12],around:[11,19],assembl:11,assert:10,assign:[5,7,9,10,16,20],associ:[0,1,8,11,14,19,21],assum:[3,11],asynchron:2,attach:11,attempt:[4,20],attr1:17,attr2:17,attr:16,attribut:[3,6,11,16,17,20],auth:[0,6,11,12,14,21],authent:[0,4,6,11],authorized_us:11,automat:[5,7,10],avail:[10,15,19,20,21],avro:2,back:[0,1,3,4,5,6,7,10,11,14,15,16,17,18,19,20,21],backend:[6,7,20],background:4,bad:11,badrequest:11,base:[0,1,2,3,5,6,7,8,9,10],base_url:6,basi:18,basic:[6,8,11],batch:[2,3],bcp47:19,bearer:11,becaus:10,been:[5,8,9,19],befor:19,beforehand:13,begin:[4,5,6,9,10,19,21],begin_transact:6,begintransact:6,begintransactionrespons:6,begun:10,behalf:[0,11,14,21],behavior:11,belong:[6,15,18,19,21],between:6,beverli:4,beyond:3,bill:4,birth_dat:4,blank:18,blob:[2,11,13,18],blob_nam:[19,20],blob_valu:[5,7],block:[5,10,15,17],bodi:11,both:[4,6,17],bound:[0,1,3,4,6,11,14,16,18,19,20,21],bowman:4,breviti:18,bucket:[4,11,13,18,19],bucket_nam:[4,18,20,21],bucket_path:19,bucketacl:18,build:[0,5,6,10,11,14,18,21],build_api_url:[6,11],built:[5,7],builtin:7,bulk:[5,10],bundl:[0,11,14,21],cach:19,cache_control:19,call:[0,1,3,4,5,6,10,11,14,15,16,20,21],callabl:20,callback:20,caller:11,can:[0,1,3,4,5,7,10,11,12,13,14,16,17,18,19,21],cannot:[4,11],capabl:[6,11],certain:19,chain:18,chang:[4,7,9,18],check:[4,11,12,17,18,21],checksum:19,child:8,chunk:[19,20],chunk_siz:[19,20],classmethod:[1,3,4,11,15,16],clear:18,client_email:11,client_id:11,client_secret:11,clienterror:11,clientsecret:11,clone:13,close:[4,11],cloud:[0,1,2,3,4,5,6,7,9,11,12],cloudstorag:[0,2],code:[5,10,11],collect:[4,5,16],column:3,com:[0,1,2,3,4,5,6,11,13,14,15,16,17,18,19,20,21],come:6,command:11,commit:[5,6,10,16],compat:18,complet:[4,5,6,10,11],completed_kei:8,compon:[11,19],component_count:19,compos:19,compress:2,comput:[11,12,18,19],concept:[5,19,20],concret:11,configur:[0,1,2],configure_websit:20,conflict:[11,20,21],connection_typ:11,consist:[6,8],consol:[4,6,11],constant:11,construct:[0,1,3,6,11,14,15,16,18],constructor:[4,11,14,20,21],consum:[0,6,14,21],contain:[1,3,4,6,11,18,20],content:[11,13,19],content_disposit:19,content_encod:19,content_languag:19,content_md5:11,content_typ:[11,19],contentlanguag:20,context:[5,6,10,16,17],control:[4,9,18,19],conveni:[6,9],convert:[7,17],copi:[0,2,3],copy_blob:20,copy_t:0,copy_to:4,copyjob:[0,2],cor:20,correct:11,correspond:[3,5,8,11,18,19],costli:20,could:[7,20],count:[2,3,4,19],cousin:11,cowardli:20,crc32c:19,creat:[0,1,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21],create_bucket:21,create_disposit:2,create_if_need:2,create_nev:2,createdisposit:2,creation:[1,3],cred:4,credenti:[0,1,2,4,6],crypto:13,csv:[2,4],current:[0,1,3,5,6,7,8,9,10,11,14,15,16,18,19,20,21],current_batch:[6,21],current_d:4,current_transact:6,cursor:[3,6,9],custom:11,data:[0,2,3],databas:[7,13],dataset:0,dataset_id:[1,5,6,8,9],dataset_nam:[3,4],datast:[1,3],datastor:5,datastore_backup:2,datastore_batch_oper:5,datastore_pb:6,datastoreservic:6,date:3,datediff:4,datetim:[1,3,4,9,11,19,20],deadlin:[15,16,17],deal:6,decod:7,default_dataset:2,default_object_acl:20,default_table_expiration_m:[1,4],defaultobjectacl:[18,20],defer:[6,11],defin:[0,1,2,3,6,11,14,15,16,19,21],delet:[1,3,4,5,6,7,10,15,16,17,19,20],delete_blob:[19,20],delete_multi:6,delimit:20,delimt:20,deliveri:20,demand:[19,20],depend:19,deriv:[1,3,10],descend:9,describ:[2,3,4,11,20],descript:[1,3,4],destin:[0,2,4],destination_bucket:20,destination_format:[2,4],destination_t:[2,4],destination_uri:[0,2],destinationformat:2,destinationt:2,detail:[11,19,20],detect:11,determin:[4,17,19,20],dev:13,develop:[4,11,12,20],devstorag:21,dict:[1,3,7,8,11,15,16,18,19,20],dictionari:[7,8,11,18,20],differ:11,directli:[4,6,11,12,17],directori:20,disabl:20,disable_log:20,disable_websit:20,discoveri:11,disposit:19,distinct:6,do_some_work:[5,10],do_someth:4,doc:[0,1,2,3,5,11,19,20],document:[11,19],doe:[5,6,8,16,20,21],doesn:[18,20],doesnt:[20,21],domain:[4,18,20],don:[5,9,10,19],done:[4,5,11,18],download:[11,12,19],download_as_str:19,download_to_fil:19,download_to_filenam:19,duplic:[3,7,20],dur:5,durabl:[19,20],durable_reduced_avail:[19,20],dure:[5,17],e3344fba:4,each:[4,7,9,11,16,18,20,21],easiest:12,effect:[10,19,20],either:[4,8,10,11,18,19],eklass:11,element:[8,10],els:[10,17,19,20],elsewher:[11,12],email:6,empti:[6,11,20],emul:[16,20],enabl:20,enable_log:20,encod:[2,7,19],end:[3,4,7,9,15,16,17],end_cursor:9,endpoint:[11,15,17],engin:[11,12,19],ensur:3,enter:10,entir:7,entiti:[1,4,5,6],entity1:[5,10],entity2:[5,10],entity_dict:18,entity_from_dict:18,entity_id:1,entity_typ:[1,4,18],entitykind:[7,8],entri:[5,18],environ:[0,4,6,11,12,14,17,21],equal:6,equival:9,error:[3,5,10,11],error_info:11,etag:[1,3,19,20],etc:[11,18],even:[8,15,18],eventu:6,everi:[5,12],everyth:13,exampl:[4,5,9,10,11,12,17,18,20,21],except:[5,10],exclude_from_index:7,execut:[0,4,5,9,10],exist:[1,3,4,5,6,7,8,10,15,16,17,18,19,20,21],exit:[5,10],expect:[4,11],expect_json:11,expir:[1,3,4,11,19],explicit:[4,11,12],explicitli:[5,10,11],export_to_storag:4,express:9,extra:[7,8,11],extract:[0,2,4],extract_table_to_storag:0,extracttabletostoragejob:[0,2],extrem:20,factori:[1,3,4,6,11,12,15,16,18,20,21],fail:11,fall:[0,1,3,6,11,14,15,16,18,19,20,21],fals:[0,4,6,14,15,16,18,19,20],familiar:12,far:5,favor:6,fddee34b3840:4,fetch:[3,6,9,17],fetch_data:3,fetch_pag:6,few:11,field:[2,3,4,7,9,18,20,21],field_delimit:2,field_typ:3,fielddelimit:2,file:[0,2,4,11,13,19,20],file_obj:[4,19],filenam:[19,20],filesystem:19,fill:6,filter:[9,20,21],find:20,fine:9,first:[0,1,4,11,14,17,20,21],firstnam:4,flag:[11,18],flat_path:8,flatten_result:2,flattenresult:2,floor:4,follow:[5,10,11,12,18,19],foo:8,forbidden:11,forc:20,form:9,format:11,found:[11,20,21],friendly_nam:[1,3,4],from:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],from_api_repr:[1,3,15,16],from_environ:11,from_service_account_json:[4,11,12,17],from_service_account_p12:[4,11,12,17],fstat:19,full:[8,18,20,21],full_control:21,full_nam:[4,16],fulli:[13,16],further:3,futur:20,gae:4,gce:[4,11,19],gcloud:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],gcloud_project:[4,17],gclouderror:11,gener:[4,6,10,11,19],generate_signed_url:[11,19],get:[1,3,4,6,7,9,11],get_blob:20,get_bucket:[13,18,20,21],get_connect:11,get_credenti:11,get_ent:18,get_for_service_account_json:11,get_for_service_account_p12:11,get_log:20,get_multi:6,getter:[5,8,10,11,18,19],git:13,github:[11,13,19],give:[11,19],given:[1,3,6,9,11,14,15,16,19,20],goe:4,googl:[0,1,2,3,4,5,6,11,12,13,14,15,16,18,19,20,21],google_application_credenti:[4,11,12,17],googleapi:[0,6,11,14,21],googlecloudplatform:[11,13,19],googlecredenti:11,grant:[1,4,18],grant_:18,grant_own:18,grant_read:18,grant_writ:18,granular:18,group:[5,9,18],group_bi:9,groupbyemail:1,guess:19,guess_typ:19,gzip:2,handl:[11,19],happen:[17,18],has_ent:18,hash:[11,19],have:[4,6,8,10,11,12,13,15,18,19],header:[4,11,19],here:4,hidden:0,hierarchi:20,hold:[1,2,4,9,15,16,17,20],hood:[6,11,18],hook:17,host:[1,3,20],howev:[5,6,7,10,11],html:[11,19,20],http:[0,1,2,3,5,6,11,14,15,16,17,19,20,21],httplib2:[0,6,11,14,21],id_or_nam:8,ident:[3,18],identifi:[3,8,18],ietf:[19,20],ignor:3,ignore_unknown_valu:[2,3],ignoreunknownvalu:2,immut:8,implement:[6,11,20,21],implicit:[9,11],implicitli:[4,8,11,17],includ:[0,4,9,20,21],include_al:0,incompat:6,incomplet:[3,11],incomplete_kei:6,increas:18,index:[3,7,20],indic:[0,1,6,8,11,14],individu:[1,3,20],infer:[0,4,6,11,12,14,21],info:[19,20],inform:11,infrastructur:13,inherit:4,initi:[10,11],input_fil:2,input_file_byt:2,insert:[1,3],insert_auto_id:[5,10],insert_data:3,insertal:3,insid:[5,10,20],instal:13,instanc:[0,1,3,4,5,7,8,11,15],instanti:[20,21],instead:11,instruct:12,integ:[1,2,3,4,6,8,9,19,20,21],intend:11,interact:[0,2,5,8,9,10,11,12,14,18,19,20,21],intern:[6,11],internalservererror:11,invalid:[1,3,9],invok:6,is_parti:[8,10],isn:[20,21],iso:2,iso_8559_1:2,isol:[6,10],issu:[11,19],item:[20,21],iter:[9,18,19,20,21],itself:5,jame:9,job:0,job_complet:4,job_id:4,jrandom:4,json:[0,4,11,12,14,19,21],json_api:[11,19,20],json_credentials_path:11,jsonclient:[0,11,14,21],jsonconnect:[0,11,14,21],just:[6,7,12,19,20,21],keep:5,kei:[3,5,6,7],key3:5,key_pb:6,keyfil:12,keys_onli:9,keyword:[6,8,11],kind:[6,7,8,9],know:[7,12],known:[11,18],kwarg:[6,8,11],lambda:20,languag:[19,20,21],larg:20,last:[1,3,8],last_nam:4,later:[11,17],latest:11,left:18,length:[8,11],lengthrequir:11,level:[4,6,9,11],librari:[4,11,12,13],libssl:13,lifecycl:[19,20],lifecycle_rul:20,like:[7,11,12,18,19,20],limit:[9,14,17],line:11,link:[19,20],list:[0,1,2,3,4,5,6,8,9,11,14,15,17,18,20,21],list_blob:20,list_bucket:21,list_dataset:[0,4],list_subscript:[14,17],list_tabl:[1,4],list_top:[14,17],live:6,load:[0,2,4],load_from_fil:4,load_from_storag:4,load_table_from_storag:0,loadtablefromstoragejob:[0,2],local:[3,4,12,15,19,20],locat:[1,3,4,20],log:[19,20],logbucket:20,login:12,logobjectprefix:20,longer:4,look:6,lookup:[6,18],lookup_bucket:21,low:9,made:4,mai:[3,8,11],mail:[11,18],main:20,main_page_suffix:20,make:[0,5,6,9,11,14,18,19,20,21],make_except:11,make_publ:[19,20],manag:[4,5,10,13,16],mani:11,manipul:18,manual:10,map:[3,4,5,6,9,11,15,19,20],marker:[0,1,14,20,21],match:[5,6,9,21],max_bad_record:2,max_messag:[15,17],max_result:[0,1,3,4,20,21],maxbadrecord:2,maximum:[0,1,3,14,15,20,21],md5:[11,19],md5_hash:19,mean:[7,10,11,20],media:19,media_link:19,messag:[11,15,16],message_id1:17,message_id2:17,message_id:17,message_payload:17,metadata:[4,18,19],metagener:[19,20],meth:[4,16],method:[3,5,6,10,11,18,19,20],methodnotallow:11,might:7,millisecond:1,mime:11,mimetyp:19,miss:6,mode:[3,4],modif:[1,3],modifi:[1,3,11],modify_ack_deadlin:15,modify_push_configur:[15,17],modifypushconfig:15,more:[0,1,3,4,6,9,14,15,20],more_result:[6,9],move:11,movedperman:11,multipl:[5,6,19,20],must:[4,6,11,15,16,17,19,20,21],mutabl:[7,18],mutat:[5,6,10],mutation_pb:6,mutationresult:6,mutuat:[5,10],mykind:6,name:[0,1,2,3,4,6,7,8,9,11,13,14,15,16,17,19,20,21],namespac:[5,6,8,9],nearlin:[19,20],necessari:10,need:[0,5,11,14,20,21],neither:11,never:19,new_nam:20,newli:[15,20,21],newline_delimited_json:2,next:[0,1,3,14,20,21],next_pag:9,next_page_token:[4,17],nextpagetoken:[20,21],noacl:[20,21],non:[6,11,13,17,18],none:[0,1,2,3,4,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21],nonetyp:[0,1,2,3,6,8,11,14,15,16,18,19,20,21],nor:11,not_found_pag:20,note:[17,18],notfound:[11,19,20,21],notimpl:11,notmodifi:11,nullabl:[3,4],num_byt:3,num_id:6,num_retri:19,num_row:3,number:[0,1,3,6,9,14,15,17,19,20,21],oauth2:[0,6,11,14,19,21],oauth2client:[0,6,11,12,14,19,21],oauth2credenti:[0,6,11,14,19,21],object:[0,1,3,4,5,6,7,8,9,11,12,14,15,16,17,18],object_name_glob:4,object_prefix:20,objectacl:18,obtain:6,occur:3,octet:19,odd:8,offici:7,offset:9,old:20,on_error:20,onc:[5,10,20],one_day_m:4,onli:[3,6,7,8,9,11,17,19,20],opaqu:[0,1,3,14,20,21],open:[4,19],openssl:13,operatiuon:5,option:[0,3,6,7,9,11,14,18,19,20,21],order:[5,9,11,12,18,20],org:[11,18,19,20],other:[2,7,11,18],otherwis:20,our:[5,6,19,20],output_byt:2,output_row:2,over:[5,6,9,11],overrid:4,overridden:5,overwrit:19,own:[0,6,11,14,18,20,21],owner:[1,4,18,19,20],p12:[4,11,12],packag:[11,12,13],page:[0,1,9,14,20,21],page_s:14,page_token:[0,1,3,14,20,21],pair:[16,18],param:6,paramet:[0,1,2,3,5,6,7,8,9,10,11,14,15,16,18,19,20,21],parent:[7,8,18],parent_kei:8,pars:[1,3,11,15,16,19,20],part:[5,9],partial:[5,6,7,8,20,21],particular:[0,6,11,14,18,21],particularli:19,pass:[0,1,3,4,6,8,9,11,12,14,15,16,18,19,20,21],patch:[1,3,4,18],path:[0,1,3,4,8,11,12,14,15,16,18,19,20,21],path_arg:[6,8],path_help:[19,20],payload:16,peform:4,pend:17,per:[3,18,19,20],period:[4,19],perman:[9,11],permiss:[4,18],persist:7,person:[4,9,13],person_ag:4,person_ages_copi:4,pick:4,piec:11,pip:13,pkcs12:[11,12],plain:19,plan:11,platform:[0,11,14],plu:[0,1,14],point:[3,11,12],pointer:[7,11],polici:[4,19,20],poll:4,popul:21,posit:11,possibl:[3,7,19],post:[3,11,16],preced:11,precompil:13,precondit:11,preconditionfail:11,prefix:[4,20,21],prepend:9,prevent:20,primit:11,print:[18,20,21],print_head:[2,4],printhead:2,prioriti:2,privat:11,private_kei:11,private_key_id:11,private_key_path:11,probabl:20,problem:3,product:11,project:[0,1,2,3],project_id:4,project_numb:20,propag:[19,20],proper:11,properti:[1,2,3,4,5,6,7,9,12,19,20,21],property_nam:9,protect:11,protobuf:[5,6,8,9],protocol:11,provid:[4,5,6,10,11],proxi:6,pseudo:2,public_url:19,publicli:19,publish:[15,16],pubsub:[0,4,11,14,15,16,17],pull:[15,16],push:[15,16,17],push_endpoint:[15,16,17],put:[1,3,5,6,7,10,13,15,16],put_multi:[6,7,10],pycrypto:13,pyopenssl:13,python2:[5,7],python3:[5,7],python:[7,11,13,19],qualifi:16,queri:[0,2,3],query_async:4,query_param:11,query_pb:6,queryprior:2,quot:2,quote_charact:2,rais:[1,3,5,6,8,9,10,11,16,19,20,21],rang:11,rather:[11,19,21],read:[6,18,19],read_onli:21,read_writ:21,reader:[1,4],readi:11,realli:20,reason:[11,12],receiv:[15,16,17],recommend:[11,12],record:3,recurs:20,recv:17,redirect:11,reduc:[19,20],refer:[0,1,2,3,10,11,14,15,16,18],referenc:11,refresh:[1,3,4,11],refresh_token:11,refus:20,regular:7,rel:[19,20],relat:[7,11,13,18,20],reli:7,reload:[1,3,4,15,18],reload_path:18,remain:[8,11],rememb:5,remov:[3,5,18],renam:20,rename_blob:20,repeat:3,replac:[4,5],repositori:13,repres:[1,3,4,5,6,7,8,9,10,11,18,20],represent:[1,3,8,15,16],request:[0,1,3,4,5,6,9,11,14,15,16,17,18,19,20,21],requestrangenotsatisfi:11,requir:[0,1,2,3,4,6,7,8,9,11,14,16,19,20,21],reset:18,resourc:[1,3,11,15,16,19],respons:[11,20,21],rest:[0,1,3,14,15,16,21],restrict:9,result:[0,3,4,6,9,14,21],resum:11,resumeincomplet:11,retri:19,retriev:[0,1,6,7,11,14,15,19,20],retry_count:4,return_immedi:[15,17],revok:18,revoke_:18,revoke_own:18,revoke_read:18,revoke_writ:18,rewind:19,rfc2616:[11,19,20],rfc3339:[19,20],rfc4960:19,rfc6266:19,rfc7231:19,rfc7234:19,rfc:16,role:[1,4,18,19,20],roll:[5,10],rollback:[5,6,10],root:6,row:[2,3,4,7],row_data:3,row_id:3,rpc:6,rule:[18,20],run:[0,4,5,6,12],run_queri:[0,6],runqueri:6,runqueryjob:[0,2],runtim:20,sai:20,salli:9,same:[5,8,10,18,20],satisfi:11,save:[2,5,6,7,10,16,18],save_path:18,schema:[1,2,3,4],schemafield:[1,2,3,4],schemaless:13,scope:[0,6,11,14,21],sdk:12,sec10:11,second:[11,15,16,17],secret:11,section:[19,20],see:[0,1,2,3,5,11,14,15,16,19,20],seek:[11,19],select:4,selector:[20,21],self:[19,20],self_link:[1,3,19,20],send:[5,6,11,16,17,18],sent:5,separ:20,sequenc:[0,2,7,9,15,20],serializ:6,serv:9,server:[1,2,3,4,5,6,11,16],servererror:11,servic:[4,7,11,12,17,19],service_account:11,serviceunavail:11,set:[0,1,2,3,4,5,6,7,8,9,10,11,14,15,16,17,19,20,21],setup:13,sever:4,shortcut:20,should:[6,11,12,19,20],shouldn:[6,11],side:10,sign:[11,18,19],signedjwtassertioncredenti:11,simpl:11,simpli:[11,20,21],singl:[3,5,6,7,9,11,16,17],size:[3,19,20],skip:3,skip_invalid_row:3,skip_leading_row:[2,4],skipleadingrow:2,skipped_result:6,sleep:4,slow:20,snapshot:6,snippet:[5,10],some:11,someexcept:10,somehow:20,someth:20,sorri:21,sort:9,sourc:[0,1,2,3,5,6,7,8,9,10,11,13,14,15,16,18,19,20,21],source_format:[2,4],source_t:4,source_uri:[0,2],sourceformat:2,special:18,specialgroup:1,specif:[4,11,12,18,19,20],specifi:[9,20,21],specifyingloc:20,sql:[0,2,3],stack:[6,10,21],standard:[11,19,20],start:4,start_cursor:9,state:[4,5,9],statement:[5,10],statu:[11,20],step:7,still:18,stop:6,storag:[0,2,4,11],storage_class:[19,20],store:[1,3,5,7,9,11,13,15,16,18,19,20],str:[0,1,5,7,9,14,16],stream:19,string:[0,1,2,3,4,6,7,8,9,10,11,14,15,16,18,19,20,21],string_valu:5,strong:6,stuff:20,subclass:[7,11],subfield:3,submit:[4,20],subscrib:16,subscript:14,subscription_nam:17,subsequ:15,sudo:13,superflu:11,suppli:9,support:11,suppress:20,sure:5,sync:15,tabl:[0,1,2],table_id:3,table_nam:4,table_typ:3,tabledata:3,take:[4,7,9,20],talk:11,target:16,techniqu:20,templat:[0,6,11,14,21],temporari:11,temporarili:20,temporaryredirect:11,test:[1,3,11,13,15,16],text:[5,7,11,19],text_valu:7,than:[4,11,19,20,21],thei:[4,11],them:[5,17],therefor:4,thi:[0,1,3,4,5,6,7,9,10,11,13,14,17,18,19,20,21],thin:6,thing:[9,10],those:[5,10,16,19],through:9,time:[1,3,4,10,11,19],time_cr:20,time_delet:19,timedelta:[11,19],timeout:4,timeout_m:4,timestamp:[3,16,19,20],timestamp_messag:[14,16],titl:[1,3],to_protobuf:[6,8],togeth:18,token:[0,1,3,11,14,20,21],too:11,tool:[11,19,20],toomanyrequest:11,top:[4,6,21],topic:[14,15],topic_nam:[14,17],topmost:[5,10],total:3,total_row:3,track:5,transact:[5,6],transaction_id:6,transat:6,transport:11,tripl:6,troubl:13,truncat:4,tupl:[0,1,3,6,7,8,9,11,14,15,18],two:[3,5,10],txt:[11,13,20],type:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,18,19,20,21],typeerror:11,typic:[6,11,20],tzinfo:4,ubuntu:13,unauthor:11,unavail:11,under:[6,11,18],underli:19,understand:[6,11],unicod:[5,7],uniqu:[3,18,19],unless:[8,11,12],unmarshal:6,until:[1,2,3,4,10,11,15,19],updat:[1,3,4,5,11,15,19],upload:19,upload_from_fil:19,upload_from_filenam:19,upload_from_str:[13,19],upon:[5,10],upsert:10,uri:[0,2,11,19,20],url:[0,1,3,6,11,14,15,16,19,20,21],use_json:11,use_query_cach:2,usequerycach:2,user:[1,3,11,18,19],user_ag:11,userbyemail:1,userinfo:6,usual:6,utc:4,utf:[2,7,19],utf_8:2,uuid:4,v1beta2:[6,14,15,16],val:6,valid:[19,20],valu:[0,1,3,4,5,6,7,9,11,14,16,18,19,21],value1:17,value2:17,valueerror:[1,3,5,6,8,9,10,11,16,19,20],variabl:[4,11,12,17],verb:[11,19],veri:20,version:[0,6,11,14,19,20,21],versioning_en:20,via:[0,1,3,4,6,12,14,15,16,17,19,21],view:3,view_queri:3,wai:12,want:[5,10,13,19,20],websit:20,well:[10,11,20],when:[0,4,5,6,7,10,11,12,14,18,19,20,21],whenev:[19,20],where:[3,6,9,14],whether:[18,19,20],which:[0,1,2,3,4,5,6,7,9,11,14,15,16,18,19,20,21],whole:20,whose:[3,7,8,21],within:[3,4,10,19],without:[5,7,10,11,17],won:[10,11,18,19],work:[5,12,20],would:[7,11,21],wouldn:6,wrapper:[6,11,19],writabl:4,write:[18,19],write_append:2,write_disposit:[2,4],write_empti:2,write_trunc:2,writeabl:4,writedisposit:2,writer:[1,4],written:2,www:[0,6,11,14,20,21],xact:10,you:[5,6,7,10,11,12,13,18,19,20,21],your:[4,6,11,12,13,17,20],zip:4},titles:["BigQuery Client","Datasets","Jobs","Tables","Using the API","Batches","Datastore Client","Entities","Keys","Queries","Transactions","Shared Core Modules","Authentication","Getting started","Pub/Sub Client","Subscriptions","Topics","Using the API","ACL","Blobs / Objects","Buckets","Storage Client"],titleterms:{"export":4,acl:[4,18],api:[4,17],async:4,asynchron:4,authent:12,author:[4,17],base:11,batch:5,bigqueri:0,blob:19,bucket:20,client:[0,6,11,12,14,21],cloud:13,configur:[4,17],connect:[0,6,11,14,21],copi:4,core:11,credenti:[11,12],data:4,dataset:[1,4],datastor:[6,13],discoveri:12,entiti:7,except:11,explicitli:12,from:17,get:13,helper:11,insert:4,job:[2,4],kei:8,load:12,manag:17,messag:17,modul:11,object:19,oper:4,overview:12,preced:12,project:[4,17],provid:12,pub:14,publish:17,pull:17,queri:[4,9],share:11,start:13,storag:[13,21],sub:14,subscript:[15,17],synchron:4,tabl:[3,4],topic:[16,17],transact:10}})