//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:"Icyapa cyerekana ko inzira giteyeho mu ntangiriro idakomeza kigaragazwa n'ikirango (ikimenyetso) cy'amabara akurikira:",
		answer: 2,
		options:
		[  
		"umukara n'umutuku ",
		"umukara n'umweru",
        "umweru n'umutuku ",
		"Ntagisubizo cy'ukuri kirimo"
		
		]
	
	},
	{
		
		numb: 2,
		question:"Buri modoka yagenewe gutwara abantu, ariko umubare wabo ntarengwa ukaba munsi ya 6 umuyobozi abariwemo igomba kugira imikandara yo kurinda ibyago igenewe aba bakurikira:",
		answer: 3,
		options:
		[
		
		"umuyobozi ",
		"umugenzi wicaye ku ntebe y'imbere",
        "ishobora no kugira imikandara kuzindi ntebe z'inyuma",
		"ibisubizo byose ni ukuri"
		
		
		]
		
	},
	{
		
		numb: 3,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture29.jpg'height=250/></br>",
		answer:2,
		options:
		[
		"Ahegereye umuhanda unyerera.",
		"Imbere ipine ryapfumutse. ",
        "Ahegereye icyago kidasobanuye ukundi.",
		"Imbere hari hatangirwa serivisi. "
		
		]
		
	},
	{
		
		numb: 4,
		question:" Usibye ibinyabiziga by'ingabo z'Igihugu, Ikinyabiziga kigendeshwa na moteri kiriho ibyuma ntamenwa cyangwa ikindi cyose gituma gikoreshwa mu gutera cyangwa mu kwitabara ntigishobora kugenda mu nzira nyabagendwa kidafite uruhushya rwihariye. Urwo ruhushya rutangwa naba bakurikira:",
		answer:1,
		options:
	[
" police y'igihugu",
" minisitiri ushinzwe gutwara abantu n'ibintu",
 " minisitiri w'ingabo",
" ikigo cy'igihugu gishinzwe imisoro n'amahoro."
		

	]
		
	},
	{
		
		numb: 5,
		question:"Iyo umukumbi ugizwe n'amatungo maremare arenze ane cyangwa amatungo magufi arenze atandatu mu nzira nyabagendwa iyo hatakibona neza kuburyo umuyobozi abona muri m 200 ugomba kugaragazwa kuburyo bukurikira:",
		answer:3,
		options:
		[
		"itara ry'urumuri rwera cyangwa rusa n'icunga rihishije imbere y'umukumbi",
		" itara ry'urumuri rutukura cyangwaumuhondo ritwawe inyuma y'umukumbi",
        " A na B ni ibisubizo by'ukuri",
	    "Ntagisubizo cy'ukuri kirimo"
		
		]
		
	},

	{
		
		numb: 6,
		question:"Ibinyabiziga biherekeranyije mu butumwa ntibishobora gutonda uburebure burenga umurongo wa m 500. Iyi bibaye bityo ibinyabiziga biherekeranye mu butumwa bishobora kugabanwamo amatsinda atonze umurongo atarengeje m 50 z'uburebure kdi hagati yayo hakaba byibura m 50 ariko ibyo ntibikurikizwa kubinyabiziga bikurikira:",
		answer:1,
		options:[
		" ibinyabiziga bya police biherekeranyije ",
		" ibinyabiziga by'abasirikare biherekeranyije mu nsisiro ",
        "A na B ni ibisubizo by'ukuri",
		"Ntagisubizo cy'ukuri kirimo" 
		]
	},{
		
		numb: 7,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture30.jpg'height=250/></br>",
		answer:2,
		options:[
		"Imbere hari umuyobozi w'amatungo.  ",
		"Imbere hari inzira ya gari ya moshi.",
        "Ahegereye amasangano y'inziranyabagendwa n'inzira ya gari ya moshi hatabambiye ",
		"Inkomane ibambiye."
		
		
		]
	},{
		
		numb: 8,
		question:" Iyo ikinyabiziga gikururwa n'inyamaswa nacyo gikuruye ikindi uburebure bw'ibikururwa bukaba burenga m 18 hatabariwemo icyo kinyabiziga cya mbere kiziritseho hagomba ibi bikurikira:",
		answer: 0,
		options:[
		" umuherekeza w'ikinyabiziga cya kabiri",
		"abaherekeza babiri",
        "A na B ni ibisubizo by'ukuri",
		"Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 9,
		question:"Ibinyabiziga bikurikira ntibitegetswe kugira ibimenyetso bibyerekana iyo byambukiranya umuhanda cyangwa bigenda ku ruhande rwawo:",
		answer: 3,
		options:[
		"ibinyabiziga bigendwamo n'abana",
		"  ibinyabiziga bigendwamo n'abamugaye ",
         " A na B ni ibisubizo by'ukuri ",
		 " nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 10,
		question:" Icyapa cy'inyongera kigaragaza ikibanza cy'ingando cyangwa cy'abantu benshi bagendera ku nyamaswa kirangwa n'amabara akurikira:",
		answer: 0,
		options:[
		
		"ubururu, umweru n'umukara ",
		" umukara umweru n'umuhondo",
         "icyatsi kibisi, umuhondo n'ikirango cy'umukara",
		"nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 11,
		question:"Muri iri sangano ry'umuhanda hari icyapa gisobanura guhagarara n'umurongo wera urombereje munzira .Niyihe mpamvu hari iki cyapa cyo guhagarara hano?<br><img src='image/Capture31.jpg'height=250/></br>",
		answer: 0,
		options:[
		"Biragoye kubona neza mu muhanda munini ",
		"Umuvuduko mu muhanda munini wavanyweho",
         "Ni mwisangano ry'umuhanda rikoreshwa cyane",
		 " Hari imirongo iburira ibyago bitunguranye"
		
		
		]
	},{
		
		numb: 12,
		question:"Icyapa cyerekana ahantu amategeko y'Umuhanda urombeje w'ibice byinshi atangirira gukurikizwa, kirangwa n'ibirango (ibimenyetso) by'amabara akurikira:",
		answer: 3,
		options:[
		"umweru n'umukara",
		"umweru n'umutuku",
        "umweru n'umuhondo",
		"nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 13,
		question:"Igihe ikorwa ry'imirimo ribangamiye cyane cyangwa buke uburyo bwo kugenda mu nzira nyabagendwa, ahakorerwa imirimo hagaragazwa ku buryo bukurikira:",
		answer:  3,
		options:[
		"  icyapa cyera cya mpande enye, zingana zifite uruhande rwa metero 0.30",
		"uruzitiro ruri ku mpera y'iburyo",
        "A Na B Ni Ibisubizo By'ukuri ",
		 "nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 14,
		question:"Iyo mu muhanda, imirimo yihariye ubugari butuma abayobozi bagomba kuva mu mwanya wabo usanzwe kugirango bakomeze urugendo, ahategetswe kunyurwa hagaragazwa n'ikimenyetso gishyirwa aho imirimo irangirira mu ruhande rugenderwamo. Icyo kimenyetso kirangwa n'amabara akurikira:",
		answer: 0,
		options:[
		"ubuso bw'ubururu ikirango cy'umweru  ",
		"umuzenguruko w'umutuku, ubuso umweru n'ikirango cy'umukara ",
        "umuzenguruko w'umutuku, ubuso mu ibara ryera, ikirango mu ibara ry'umutuku n'umukara",
		 " nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 15,
		question:"Umuyobozi w'ikinyabizaga cy'ikoreye ibintu bishobora gufata inkongi, n'ikihe cyapa cyerekana ko ibyo atwaye biturika by'afata inkongi ?<br><img src='image/Capture32.jpg'height=250/></br>",
		answer: 1,
		options:[
		"a",
		"b",
        "c",
		 "d"
		
		]
	},{
		
		numb: 16,
		question:"Ni iki gikenewe muri ibi bikurikira kugirango ubashe gutwara imodoka mu muhanda biteganywa nitegeko ",
		answer: 3,
		options:[
		"Uruhushya rwa burundu rwo gutwara ibinyabiziga rugifite agaciro",
		"Ubwishingizi bw'ikinyabizaga bugifite agaciro",
        "Icyemezo cy'iyandikwa ry'ikinyabiziga",
		" Ibisubizo byose nibyo"
		
		]
	},{
		
		numb: 17,
		question:"Uhuye n'ingorane utwaye ikinyabiziga , mu muhanda ufite ibyerekezo bibiri, ufite ikimenyetso kiburira cya mpandeshatu . wagishyira mu ntera ingana iki uvuye aho ikinyabiziga cyahagaze<br><img src='image/Capture33.jpg'height=250/></br>",
		answer:  1,
		options:[
		"Metero 5 ",
		" Metero 25",
        " Metero 45 ",
		 "Metero 100"
		]
	},{
		
		numb: 18,
		question:"Umuyobozi usunika ipikipiki agomba gufatwa nka:<br><img src='image/Capture34.jpg'height=250/></br>",
		answer:  0,
		options:[
			
		"  Umunyamaguru  ",
		"Umuyobozi w'ikinyabiziga ",
        "Umugenzi",
		 "A na b ni ibisubizo by'ukuri "
		
		]
	},{
		
		numb: 19,
		question:"Icyapa gikoze mw'ishusho ya mpandeshatu kimenyesha:<br><img src='image/Capture35.jpg'height=250/></br>",
		answer: 0,
		options:[
			
		 "ibyago ",
		"ibibujijwe ",
        "ibitegetswe ",
		 "Nta gisubizo cy'ukuri kirimo "
		]
	},{
		
		numb: 20,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture36.jpg'height=250/></br>",
		answer: 0,
		options:[
		"uburenganzira bwo gutambuka mbere",
		"uburenganzira bwo gutambuka mbere mu yandi masangano y'umuhanda akwegereye ",	
		"ibyago imbere mu masangano y'umuhanda ukwegereye",
		"a na b ni ibisubizo by'ukuri",
		
		]
	},
];