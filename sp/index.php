<?php

//print_r($_SERVER);die();

$sitepad['db_name'] = 'danizatours_sp64';
$sitepad['db_user'] = 'danizatours_sp64';
$sitepad['db_pass'] = 'y])]x7.p1egS!uS5';
$sitepad['db_host'] = 'localhost';
$sitepad['db_table_prefix'] = 'spx6_';
$sitepad['charset'] = 'utf8mb4';
$sitepad['collate'] = 'utf8mb4_unicode_ci';
$sitepad['serving_url'] = 'danizatours.co.ug/sp';// URL without protocol but with directory as well
$sitepad['url'] = 'https://danizatours.co.ug/sp';
$sitepad['relativeurl'] = '/sp';
$sitepad['.sitepad'] = '/home/danizatours';
$sitepad['sitepad_plugin_path'] = '/var/softaculous/sitepad';
$sitepad['editor_path'] = '/var/softaculous/sitepad/editor';
$sitepad['path'] = dirname(__FILE__);
$sitepad['AUTH_KEY'] = 'a8yv6k9qadawjed2eathcjau1bbknzjnwghjvtmljl7bx5myqmf46rrzvlfo0ldc';
$sitepad['SECURE_AUTH_KEY'] = 'jrjzl701eq7hs6abnnqlqdanfzew7selqyzktkbmmvzxjes4puojmekchizrxpnl';
$sitepad['LOGGED_IN_KEY'] = 'or7enu3ykqvkdqlj46xeg0p4m3hpytrjv9qjn1w41i7szdzyotz6dbr1tdwb04al';
$sitepad['NONCE_KEY'] = '9imzxqra0kxbiet4ha8skzr5bgixmqerbvtcdgg1jzfzpxxoyofsejlncxeiocqd';
$sitepad['AUTH_SALT'] = 'lrvletygmaidszdinzwtp2h4lsygctraf5m0encik4evtmvgqanaxjicifaojkcs';
$sitepad['SECURE_AUTH_SALT'] = 'hzspf7j3yeehnxpl53jpz0hpjcsahdn28of3ct90eqlyks9lpxrexzus8x1fz3mt';
$sitepad['LOGGED_IN_SALT'] = '9ooenz8sru241pos4ocor9cawxwgurwlgcop0zlcw1dj020p7dmwatz2h1smd95b';
$sitepad['NONCE_SALT'] = 'qsk6jbcfrpddrfsyrbkm6zajhh7kngpiluzolpqnnji38kbzzjbntkr725foas3u';

if(!include_once($sitepad['editor_path'].'/site-inc/bootstrap.php')){
	die('Could not include the bootstrap.php. One of the reasons could be open_basedir restriction !');
}

