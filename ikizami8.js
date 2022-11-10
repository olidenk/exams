//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture37.jpg'height=250/></br>",
		answer: 0,
		options:
		[  
		"Ntihanyurwa n'abanyamaguru ",
		"Akayira kabanyamaguru",
        "Aho abanayamaguru bambukira ",
		"B na c ni ibisubizo by'ukuri "
		
		]
	
	},
	{
		
		numb: 2,
		question:"Icyapa cyerekana ko hari amabwiriza yihariye mu buryo bwo kugendera mu cyambu cyangwa ku kibuga cy'indege giteye ku buryo bukurikira:",
		answer: 1,
		options:
		[
		
		"ishusho mpandeshatu, ubuso mu ibara ryera, ikirango mu ibara ry'umukara ",
		"ishusho mpandenye, ubuso mu ibara ry'ubururu n'ikirango kiri mu ibara ryera",
        "ishusho y'uruziga mu ibara ry'ubururu ni ikirango kiri mu ibara ryera ",
		"nta gisubizo cy'ukuri kirimo"
		
		
		]
		
	},
	{
		
		numb: 3,
		question:"Nijoro igihe ijuru rikeye, itara ribonesha icyapa kiranga numero y'ikinyabiziga rigomba gutuma izo numero zisomerwa nibura mu ntera ikurikira:",
		answer:2,
		options:
		[
		"m150",
		"m50 ",
        " m20",
		"m10 "
		
		]
		
	},
	{
		
		numb: 4,
		question:"Urenze munsisiro ,ukahasanga ibyapa bibiri iburyo bwawe bimenyesha ko irangira ry'imirimo bitewe nicyo ibyo byapa bemenyesha wagendera kuwuhe muvuduko ?<br><img src='image/Capture38.jpg'height=250/></br>",
		answer: 3,
		options:
	[
" 70 km/h",
" 50 km/h",
 " 40 km/h",
" 80 km/h"
		

	]
		
	},
	{
		
		numb: 5,
		question:"Ibyapa byerekana icyago cyidahoraho kandi bigenewe kwerekana aho bagana cyangwa aho berekeza umuhanda nk'igihe cy'impanuka cyangwa hari imirimo ikorwa mu muhanda birangwa n'amabara akurikira:",
		answer:3,
		options:
		[
		"umweru n'umukara",
		" umweru n'umuhondo",
        "  ubuso bw'umweru gusa",
	    "Ntagisubizo cy'ukuri kirimo"
		
		]
		
	},

	{
		
		numb: 6,
		question:"Birabujijwe kubangamira imigendere isanzwe y'ibindi binyabiziga kubera ibi bikurikira:",
		answer:2,
		options:[
		"  kugabanya umuvuduko kuburyo budasanzwe ",
		" gukacira feri bidatewe no kwirinda ibyago ",
        "A na B ni ibisubizo by'ukuri",
		"nta gisubizo cy'ukuri kirimo" 
		]
	},{
		
		numb: 7,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture39.jpg'height=250/></br>",
		answer:1,
		options:[
		"Hotel ",
		" Ibitaro",
        "Ahagenewe kugwa kajugujugu ",
		"B na c ni ibisubizo by'ukuri"
		
		
		]
	},{
		
		numb: 8,
		question:"Iyo kuva bwije kugeza bukeye cyangwa bitewe n'uko ibihe bimeze bitagishoboka kubona neza muri m 200, mu nzira nyabagendwa, romoruki iziritse kuri velomoteri cyangwa ipikipiki idafite akanyabiziga ku ruhande, uretse velomoteri idafite umuyobozi, kandi uburumbarare bwayo, cyangwa bw'ibyo yikoreye bukaba butuma itara ry'ikinyabiziga biyikurura ritagaragara, iyo romoruki igaragazwa ku buryo bukurikira:",
		answer:  3,
		options:[
		"itara ryera riri kuri romoruki inyuma",
		" itara ry'umuhondo riri kuri romoruki inyuma ",
        " itara risa n'icunga riri kuri romoruki inyuma",
		"ibi bisubizo byose nibyo"
		]
	},{
		
		numb: 9,
		question:"igice kinzira nyabagendwa gikikijwe n'imirongo ibiri y'umweru iciyemo uduce kandi iteganye :<br><img src='image/Capture40.jpg'height=250/></br>",
		answer:  2,
		options:[
		"ahagenewe guhagarara umwanya munini n'umuto",
		" ahagenewe abanayamaguru ",
         "  ahagenewe inzira y'ibinyamitende",
		 " a na b ni ibisubizo by'ukuri"
		]
	},{
		
		numb: 10,
		question:" Amatara maremare y'ikinyabiziga agomba kuzimwa mu bihe bikurikira:",
		answer:  2,
		options:[
		
		"iyo umuhanda umurikiwe hose kandi umuyobozi ashobora kubona nibura mu ntera ingana na metero 200",
		"iyo ikinyabiziga gikurikiye mu ntambwe zitagera muri m100 keretse iyo umuyobozi wacyo ashaka kunyura kucyo akurikiye acana azimya vuba vuba amatara maremare",
         "A na B ni ibisubizo by'ukuri",
		" nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 11,
		question:"iki cyapa kibuza abayobozi bibinyabiziga kunyuranaho :<br><img src='image/Capture41.jpg'height=250/></br>",
		answer: 1,
		options:[
		"iburyo ",
		"ibumoso",
         "iburyo n'ibumoso",
		 "nta gisubizo cy'ukuri kirimo"
		
		
		]
	},{
		
		numb: 12,
		question:"Iyo akanyabiziga gasunikwa cyangwa ibyo gatwaye bidatuma umuyobozi abona neza imbere ye, uwo muyobozi agomba gukora ibi bikurikira:",
		answer: 1,
		options:[
		" gushaka umuherekeza",
		"gukurura ikinyabiziga cye",
        " A na B ni ibisubizo by'ukuri",
		"nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 13,
		question:"Uretse igihe hari amategeko yihariye akurikizwa muri ako karere cyangwa imitunganyirize bwite y'aho, ikinyabiziga cyose cyangwa inyamaswa ihagaze umwanya muto cyangwa munini igomba kuba iri aha hakurikira:",
		answer: 2,
		options:[
		" mu kaboko k'iburyo hakurikijwe aho yaganaga uretse igihe ari mu muhanda w'icyerekezo kimwe",
		"ahegereye bishobotse akayira k'abanyamaguru iyo umuhanda ugafite ariko umwanya w'ibiziga n'akayira ntube urenga santimetero 50",
        "A Na B Ni Ibisubizo By'ukuri ",
		 "nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 14,
		question:" Iki cyapa kibuza kunyuranaho ibumoso ku binyabiziga bikurikira :<br><img src='image/Capture41.jpg'height=250/></br>",
		answer: 2,
		options:[
		"ku binyabiziga byose  ",
		"ku binyabiziga byose bifite moteri ",
        "kubinyabiziga byose uretse ibinyamitende ibiri n'amapikipiki adafite akanyabiziga ko k'uruhande",
		 " nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 15,
		question:"iki kimenyetso cyaka kinyemerera gukomeza:<br><img src='image/Capture42.jpg'height=250/></br>",
		answer: 3,
		options:[
		"yego",
		"yego ariko utanga inzira kubanyamaguru",
        "yego utanga inzira kubandi bayobozi b'ibinyabizaga baturutse mukindi cyerekezo ",
		 " oya"
		
		]
	},{
		
		numb: 16,
		question:"Iyo ikinyabiziga gihagaritswe n'ijoro ku buryo abayobozi bakigana badashobora kumenya ko kibabereye imbogamizi, kigomba kurangirwa kure n'ikimenyetso cyabigenewe kiri ahantu hagaragara kugirango kiburire hakiri kare abandi bayobozi baza bagisanga, ariko ntibireba ibinyabiziga bikurikira:",
		answer:  2,
		options:[
		"velomoteri",
		" ipikipiki idafite akanyabiziga ku ruhande",
        " A na B ni ibisubizo by'ukuri",
		" nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 17,
		question:"Abanyamaguru batatanye cyangwa bagize udutsiko tudafatanyije gahunda kdi batanayobowe n'umwarimu bategetswe kunyura mu tuyira turi ku mpande z'umuhanda no ku nkengero zigiye hejuru uretse ubutaka butsindagiye butandukanya imihanda ibiri bwo kunyurwamo gusa n'aba bakurikira:",
		answer: 0,
		options:[
		"abanyamaguru bashaka guhagarara akanya gato igihe bambukiranya umuhanda",
		"abanyamaguru bagize udutsiko tw'abantu benshi",
        " A na B ni ibisubizo by'ukuri ",
		 "nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 18,
		question:"Mu muhanda ufite uruhererekane rw'amakoni, feri y'urugendo ikoreshwa ryari?<br><img src='image/Capture43.jpg'height=250/></br>",
		answer: 2,
		options:[
			
		" Mbere ya buri koni  ",
		"Muri buri koni ",
        "Nyuma ya buri koni",
		 "Nta gisubizo cy'ukuri kirimo "
		
		]
	},{
		
		numb: 19,
		question:". Ibinyabiziga biherekeranyije mu butumwa ntibishobora gutonda uburebure burenga umurongo wa m 500, iyo bibaye bityo ibinyabiziga biherekeranyije mu butumwa bishobora kugabanywamo amatsinda atonze umurongo utarengeje ibipimo bikurikira:",
		answer:  0,
		options:[
			
		 "utarengeje m50 ",
		"utarengeje m100 ",
        " utarengeje 150 ",
		 "Nta gisubizo cy'ukuri kirimo "
		]
	},{
		
		numb: 20,
		question:"Ibyapa byereka inkomane y'inzira nyabagendwa n'inzira ya gariyamoshi bigomba iteka kumurikwa cyangwa kugarura urumuri ku buryo bigaragarira nibura mu ntera ikurikira igihe ijuru rikeye:",
		answer: 3,
		options:[
		" m200",
		"m 250 ",	
		"m300",
		"nta gisubizo cy'ukuri kirimo",
		
		]
	},
];