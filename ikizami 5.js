//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:"Iki cyapa gisobanura iki?<br><img src='image/capture15.jpg' weight:50%/></br>",
		answer: 3,
		options:
		[
		"Inzira y'abanyeshuri",
	    "Abanyamaguru ntibemerewe ",
        "Agace k'abanyamaguru nta kinyabiziga",
        "Hegereye aho abanyamaguru bambukira "
		]
	
	},
	{
		
		numb: 2,
		question:"Amatara maremare y'ibara ryera cyangwa ry'umuhondo agomba, nijoro igihe ijuru rikeye,kumurika mu muhanda mu ntera ya m 100 nibura imbere y'ikinyabiziga, ariko ku binyabiziga bifite moteri itarengeje za sentimetero kibe 125 iyo ntera igira ibipimo bikurikira: ",
		answer: 3,
		options:
		[
		
		"m200",
        "m100" ,
		" m85 ",
       "Ntagisubizo cy'ukuri kirimo"
		]
		
	},
	{
		
		numb: 3,
		question:"Iyo banyuze iruhande rw'inkomyi abanyamaguru bagomba gukikira banyuze mu muhanda, abayobozi bagomba gusiga umwanya ufite ubugari bwa m 1 nibura hagati yabo nayo. Iyo ibyo bidashobora kubahirizwa kandi umunyamaguru akaba anyura hafi yiyo nkomyi, umuyobozi agomba kuyikikira afite umuvuduko utarengeje ibipimo bikurikira: ",
		answer: 3,
		options:
		[
			"km 10 mu isahaa" ,
		"km 20 mu isaha",
        "km 30 mu isaha",
      "nta gisubizo cy'ukuri kirimo"
		]
		
	},
	{
		
		numb: 4,
		question:"wakora iki ubonye icyi cyapa ?<br><img src='image/Capture16.jpg' weight:50%/></br>",
		answer: 1,
		options:
	[
	"guhagarara gusa igihe ibinyabiziga bikwegereye",
	"guhagarara niyo nta kinyabiziga ubona",
       "Guhagarara gusa niba hari abana bategereje kwambuka",
	 "Guhagarara gusa igihe ikimenyetso cyaka ari umutuku"
	]
		
	},
	{
		
		numb: 5,
		question:"Guhagarara akanya gato no guhagarara akanya kanini bibujijwe cyane cyane aha hakurikira:",
		answer:1,
		options:
		[
		"ku mihanda y'icyerekezo kimwe hose",
		"mu ruhande ruteganye n'urwo ikindi kinyabiziga gihagazemo akanya gato cyangwa kanini",
       "ku mihanda ibisikanirwamo, iyo ubugari bw'umwanya w'ibinyabiziga ugomba gutuma bibisikana butagifite m12",
		 " ibisubizo byose nibyo"
		]
		
	},

	{
		
		numb: 6,
		question:"Amatara ndangambere n'aya ndanganyuma y'imodoka zitarengeje m 6 z'uburebure na m 2 z'ubugari habariwemo imitwaro kdi nta kinyabiziga kindi kiziritseho ashobora gusimburwa n'amatara akurikira, iyo ibyo binyabiziga bihagaze umwanya muto cyangwa munini mu nsisiro bibangikanye ku ruhande rw'umuhanda:",
		answer:2,
		options:[
		"amatara magufi",
		" amatara ndangaburumbarare",
        "amatara yo guhagarara umwanya munini",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 7,
		question:"Iyo kuva bwije kugeza bukeye cyangwa bitewe nuko ibihe bimeze nk'igihe cy'igihu cyangwa cy'imvura bitagishoboka kubona neza muri m 200, imirongo y'ingabo z'igihugu zigendera kuri gahunda n'utundi dutsiko twose tw'abanyamaguru nk'imperekerane cyangwa udutsiko tw'abanyeshuri bari ku murongo bayobowe na mwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe, bagaragzwa ku buryo bukurikira:",
		answer: 0,
		options:[
		" imbere ni itara ryera ritwariwe ku ruhande rw'ibumoso n'umuntu uri ku murongo w'imbere hafi y'umurongo ugabanya umuhanda mo kabiri ",
		" inyuma ni itara umuhondo ritwariwe ku ruhande rw'ibumoso n'umuntu uri ku murongo w'inyuma hafi y'umurongo ugabanya umuhanda mo kabiri",
        " A na B ni ibisubizo by'ukuri",
	    "nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 8,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture17.jpg' height:80/></br>",
		answer: 0,
		options:[
		"Uguhinguka ku mwaro cyangwa ku nkombe cyangwa ahegereye icyome",
		"Inzira nyabagendwa iri kumusozi ucuramye",
         "Umuhanda utaringaniye ",
		 "Umuhanda wangijwe n'isuri "
		]
	},{
		
		numb: 9,
		question:"Imizigo yikorewe n'amagare, velomoteri, amapikipiki, ibinyamitende by'ibiziga bitatu nibyo ibiziga bine bifite cyangwa bidafite moteri inyuma ntishobora kurenza ibipimo bikurikira:",
		answer:2,
		options:[
		" cm 20 ",
		"cm 30 ",
         "cm 50 ",
		 "cm 60 "
		]
	},{
		
		numb: 10,
		question:" Itara ndanganyuma rigomba gushyirwa aha hakurikira:",
		answer: 0,
		options:[
		
		"ahegereye inguni y'ibumoso y'ikinyabiziga",
		"ahegereye inguni y'iburyo bw'ikinyabiziga",
         " inyuma kandi y'impera y'ibumoso bw'ikinyabiziga",
		 "Ntagisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 11,
		question:"Nta tara na rimwe cyangwa utugarurarumuri bishobora kuba bifunze kuburyo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi ya cm 40 kuva ku butaka igihe ikinyabiziga kidapakiye ariko ibyo ntibikurikizwa ku matara akurikira:",
		answer:  2,
		options:[
		"amatara kamenabihu",
		" amatara yo gusubira inyuma",
        "A na B ni ibisubizo by'ukuri",
		 " nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 12,
		question:"Iyo tumuritswe n'amatara y'urugendo y'ikinyabiziga utugarurarumuri tugomba n'ijoro, igihe ijuru rikeye kubonwa n'umuyobozi w'ikinyabiziga kiri mu ntera ikurikira:",
		answer: 1,
		options:[
		" metero 100 ",
		" metero 150 ",
        "metero 200 ",
		 "nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 13,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture18.jpg' height:80/></br>",
		answer: 3,
		options:[
		"Hanyurwa na velomoteri gusa ",
		"Nta modoka ",
        "Hanyurwa nimodoka gusa",
		 "Ntihanyurwa n'amapikipiki"
		]
	},{
		
		numb: 14,
		question:"Ibinyabiziga bigendeshwa na moteri, hatarimo velomoteri n'ibinyabiziga bidapakiye umuvuduko wabyo udashobora kurenga km 50 mu isaha ahateganye bigomba kuba bifite ibikoresho by'ihoni byumvikanira mu ntera ikurikira:",
		answer: 3,
		options:[
		" metero 200 ",
		" metero 150",
        "metero 100 ",
		 "metero 50"
		]
	},{
		
		numb: 15,
		question:"Ahatari mu nsisiro ibyapa biburira n'ibyapa byo gutambuka mbere bigomba gushyirwa mu ntera ikurikira y'ahantu habyerekana:",
		answer: 0,
		options:[
		"metero 150 kugeza kuri 200",
		" metero 100 kugeza kuri 150",
        " metero 50 kugeza kuri 100",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 16,
		question:" Inkombe z'inzira nyabagendwa cyangwa z'umuhanda zishobora kugaragazwa n'ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona ku buryo bukurikira:",
		answer: 2,
		options:[
		" babona iburyo bwabo ibyibara ritukura cyangwa ibisa n'icunga rihishije",
		"ibumoso babona iby'ibara ryera",
        "A na B ni ibisubizo by'ukuri",
		"Ntagisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 17,
		question:"Icyapa gitanga uburenganzira bwo gutambuka mbere kigira iyihe shusho?<br><img src='image/Capture19.jpg' height:80/></br>",
		answer: 3,
		options:[
		"a",
		"b",
        "c",
		"d"
		]
	},{
		
		numb: 18,
		question:" Iki cyapa gisobanura iki?<br><img src='image/Capture20.jpg' height:80/></br>",
		answer: 0,
		options:[
		"Ahegereye amasangano y'inzira nyabagendwa n'inzira ya gari ya moshi ibambiye ",
		"Inzira ibambiye imbere",
        "Inzira itabambiye itanafunze ",
		 "Imbere hari ikiraro cy'amatungo"
		]
	},{
		
		numb: 19,
		question:" Ahatari mu nsisiro, umuyobozi wese ugenza ikinyabiziga kimwe cyangwa ibinyabiziga bikomatanye bifite uburemere ntarengwa bwemewe burenga ibiro 3500 cyangwa bifite uburebure bwite burenga metero 10 agomba, keretse iyo anyuze cyangwa agiye kunyura ku bindi binyabiziga, gusiga hagati y'ikinyabiziga cye n'iki muri imbere umwanya uhagije kugirango ibinyabiziga bimuhiseho bishobore kuhigobeka bidateje impanuka igihe bibaye ngombwa ariko ibyo ntibikurikizwa mu bihe bikurikira:",
		answer: 0,
		options:[
			
		" mu gihe ibigendera mu muhanda ari byinshi kimwe no mu duce tw'inzira nyabagendwa aho kunyuranaho bibujijwe",
		"igihe ibigendera mu muhanda ari byinshi",
        " mu duce tw'inzira nyabagendwa aho kunyuranaho bibujijwe",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 20,
		question:"Ibiziga by'ibinyabiziga bigendeshwa na moteri n'ibya velomoteri kimwe n'ibya romoruki zabyo bigomba kuba byambaye inziga zihagwa zifite amano n'ubujyakuzimu butari munsi ya milimetero imwe ku migongo yabyo yose nubudodo bwabyo ntibugire ahantu na hamwe bugaragara kandi ntibugire aho byacitse bikomeye mu mpande zabyo ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
		answer:0,
		options:[
		"ibinyabiziga bidapakiye kandi bitajya birenza umuvuduko wa km 25 mu isaha ahateganye",
		" ibinyabiziga bya police bijya ahatarenga km 25 uvuye aho biba",
        " A na B ni ibisubizo by'ukuri",
		 " nta gisubizo cy'ukuri kirimo"
		]
	},
];