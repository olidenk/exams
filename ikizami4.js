//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:" Ubugari bw'imizigo yikorewe n'ipikipiki idafite akanyabiziga ko kuruhande kimwe n'ubwa romoruki ikuruwe na bene icyo kinyabiziga ntibushobora kurenza ibipimo bikurikira:",
		answer:0,
		options:
		[  
		" m 1.25 ",
		"cm 30",
        "cm 75 ",
		"Ntagisubizo cyukuri kirimo"
		
		]
	
	},
	{
		
		numb: 2,
		question:"Ibinyabiziga bikurikira bigomba kugira itara ry'ubururu rimyatsa riboneka mu mpande zose:",
		answer: 2,
		options:
		[
		
		"ibinyabiziga bifite ubugari burenga m 2 na cm 10 ",
		"ibinyabiziga bya police y'igihugu",
        "ibinyabiziga ndakumirwa",
		"ibisubizo byose ni ukuri"
		
		
		]
		
	},
	{
		
		numb: 3,
		question:"Kunyura ku binyabiziga bindi,uretse icy'ibiziga bibiri bibujijwe aha hakurikira:",
		answer:3,
		options:
		[
		"Hafi y'iteme iyo hari umuhanda ufunganye ",
		"Hafi y'aho abanyamaguru banyura ",
        "Hafi y'ibice by'umuhanda bimeze nabi",
		"Ibisubizo byose ni ukuri" 
		
		]
		
	},
	{
		
		numb: 4,
		question:"  Ibinyabiziga bihinga n'ibindi bikoresho byihariye bikoreshwa n'ibigo bipatana imirimo, iyo bigenda mu nzira nyabagendwa igihe cya nijoro cyangwa bitewe n'uko ibihe bimeze bitagishoboka kubona neza muri m 200 bishobora kugaragazwa inyuma n'amatara 2 atukura, bipfa kuba bitarenza ibipimo bikurikira :",
		answer: 3,
		options:
	[
"kutarenza umuvuduko wa km20 mu isaha",
"uburebure bwabyo habariwemo ibyo bitwaye bukaba butarengeje m6",
 "uburebure ntarengwa ntiburenga m8",
" A na B nibyo bisubizo by'ukuri",
		

	]
		
	},
	{
		
		numb: 5,
		question:"Iyo romoruki iziritse ku kinyamitende,velomoteri n'amapikipiki bidafite akanyabiziga ko kuruhande uretse ikinyamitende na velomoteri bidafite umuyobozi, iyo uburumbarare bwayo cyangwa bw'ibyo yikoreye bituma itara igihe bitagishoboka kubona neza muri m 200 bigomba kugaragazwa ku buryo bukurikira :",
		answer:0,
		options:
		[
		"itara ryera cyangwa ry'umuhondo cyangwa risa n'icunga rihishije riri kuri rumoruki inyuma",
		"itara ry'icyatsi cyangwa ry'umuhondo cyangwa risa n'icunga rihishije riri kuri rumoruki inyuma",
        " A na B ni ibisubizo by'ukuri",
	    "Ntagisubizo cy'ukuri kirimo"
		
		]
		
	},

	{
		
		numb: 6,
		question:"Ku kinyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntikigomba kurenga ibipimo bikurikira:",
		answer: 0,
		options:[
		"inyuma ni m 3 na cm 50 ",
		"imbere ni m 1 na cm 70 ",
        "A na B ni ibisubizo by'ukuri",
		"Ntagisubizo cyukuri kirimo" 
		]
	},{
		
		numb: 7,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture10.jpg'height=250/></br>",
		answer: 2,
		options:[
		"Umuhanda uzenguruka  ",
		"Igice cy'umuhanda uzenguruka",
        "Aho banyura bazengurutse ",
		"Ibisubizo byose nibyo"
		
		
		]
	},{
		
		numb: 8,
		question:" Iyo amatara y'ikinyabiziga agomba gucanwa kandi igihe imizigo isumba impera y'ikinyabiziga ho metero irenga igice gihera cy'imizigo kigaragazwa ku buryo bukurikira:",
		answer:  3,
		options:[
		"itara ritukura cyangwa akagarurarumuri ku mutuku ku manywa",
		"agatambaro gatukura gafite nibura cm 50 z'uruhande mu ijoro",
        "itara ry'umuhondo cyangwa akagarurarumuri k'umuhondo",
		"Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 9,
		question:"Iyo imizigo igizwe n'ibinyampeke, ikawa, ipamba idatonoye, ibishara, ibyatsi, ibishami cyangwa ubwatsi bw'amatungo bidahambiriye uretse amapaki afunze, ubugari bwayo bushobora kugera ku bipimo bikurikira:",
		answer: 1,
		options:[
		" m 2.50",
		" m 2.75 ",
         " m 3 ",
		 " nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 10,
		question:" Uretse mu mijyi kuyindi mihanda yagenywe na minisiteri ushinzwe gutwara ibintu n'abantu, uburemere ntarengwa bwemewe ku binyabiziga bifatanye bifite imitambiko itatu ni:",
		answer: 2,
		options:[
		
		"toni 20 ",
		" toni 16",
         "toni 12",
		"toni 10"
		
		]
	},{
		
		numb: 11,
		question:"Iki cyapa gisubanura iki?<br><img src='image/Capture11.jpg'height=250/></br>",
		answer: 1,
		options:[
		"Iteme ridahoraho",
		"Umuhanda utaringaniye",
         "Umuhanda w'injira mu kuzimu",
		 "Ubutaka bworoshye "
		
		
		]
	},{
		
		numb: 12,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture12.jpg'height=250/></br>",
		answer: 0,
		options:[
		"Umuyaga w'intambike",
		"Urusaku rwo mu muhanda",
        "Ikibuga cy'indege",
		"Ibisubizo byose nibyo "
		
		
		]
	},{
		
		numb: 13,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture13.jpg'height=250/></br>",
		answer: 1,
		options:[
		" Iherezo Ry'inzira Y'abanyamaguru",
		"Iherezo Ry'umuhanda Urombereje W'ibice Byinshi",
        "A Na B Ni Ibisubizo By'ukuri ",
		 "Nta nzira ihari"
		
		]
	},{
		
		numb: 14,
		question:"Buri modoka cyangwa buri romoruki ikuruwe n'iyo modoka bishobora kugira itara rituma umuyobozi yerekana ko yabonye ikimenyetso cy'uwitegura kumunyuraho. Iryo tara rifite amabara akurikira:",
		answer: 1,
		options:[
		"umuhondo  ",
		"icyatsi kibisi ",
        "umweru",
		 "umutuku"
		]
	},{
		
		numb: 15,
		question:" Ikinyabiziga cyangwa ibinyabiziga bikururana bifite imitambiko ibiri ikurikiranye mu bugari bwayo ni ukuvuga imitambiko yihindukiza kucyo ifungiyeho, uburebure bwabyo ntibugomba kurenza ibipimo bikurikira:",
		answer:2,
		options:[
		"m11 ",
		"  m10 ",
        " m7 ",
		"nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 16,
		question:"Bumwe muri ubu bwoko bwa feri ituma imodoka iguma aho iri uko yaba yikoreye kose ku muzamuko cyangwa ku gacuri bya 16%, imyanya ya feri igomba gufata igakomeza kwegera kuburyo bw'ibyuma niyo umuyobozi yaba atarimo:",
		answer: 0,
		options:[
		" feri yo guhagarara umwanya munini",
		"feri y'urugendo",
        "feri yo gutabara",
		" nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 17,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture14.jpg'height=250/></br>",
		answer:  2,
		options:[
		"Iherezo Ry'umuhanda Wi Byerekezo Bibiri ",
		" Iteme rinini Kandi rirerire",
        " Ifungana Ry'umuhanda ",
		 "Iherezo ry'iteme rifunganye"
		]
	},{
		
		numb: 18,
		question:"Utugarurarumuri turi mu mbavu z'ikinyabiziga tugomba kugira ibara rikurikira:",
		answer:  1,
		options:[
			
		"  umweru  ",
		"umuhondo ",
        "umutuku",
		 "Nta gisubizo cy'ukuri kirimo "
		
		]
	},{
		
		numb: 19,
		question:"Romoruki zifite ubugari ntarengwa bwa cm 80 zishobora gushyirwaho akagarurarumuri kamwe gusa iyo zikuruwe n'ibinyabiziga bikurikira:",
		answer:  1,
		options:[
			
		" velomoteri   ",
		"ipikipiki idafite akanyabiziga ku ruhande ",
        "amavatiri y'ifasi ",
		 "Nta gisubizo cy'ukuri kirimo "
		]
	},{
		
		numb: 20,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture28.jpg'height=250/></br>",
		answer: 1,
		options:[
		"Isangano rifite ishusho ya T",	
		"Inzira idakomeza",
		"Aho baterefonera ",
		 "Nta gisubizo cy'ukuri "
		]
	},
];