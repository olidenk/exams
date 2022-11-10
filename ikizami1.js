//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:"ikinyabiziga cyose cyangwa ibinyabiziga bigendabigomba kugira?",
	    answer:0,	
		options:
		[ "ubiyobora",
	    "umuherekeza",
        "A na B ni ibisubizo byukuri",
       "Ntagisubizo cyukuri kirimo"
		]
		
		
	
	},
	{
		
		numb: 2,
		question:"ijambo akayira bivuga inzira nyabagendwa ifunganye yagenewe gusa? ",
		answer: 2,
		options:
		[
		
		"Abanyamaguru",
        "Ibinyabiziga bigendera ku biziga bibiri" ,
		"A na B ni ibisubizo by'ukuri",
       "Ntagisubizo cy'ukuri kirimo"
		]
		
	},
	{
		
		numb: 3,
		question:"Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n'uturanga gukata tw'ibara ryera utwo turanga cyerekezo tumenyesha ?",
		answer:2,
		options:
		[
			"Igisate cy'umuhanda abayobozi bagomba gukurikira" ,
		"Aherekeye umurongo ukomeje",
        "Igabanurwa ry'umubare w'ibisate by'umuhanda mu cyerekezo bajyamo",
      "A na C nibyo"
		]
		
	},
	{
		
		numb: 4,
		question:"Ahantu ho kugendera mu muhanda herekanwa n'ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda ?",
		answer:3,
		options:
	[
	"Biteganye",
	"kumurongo umwe",
       "A na B nibyo",
	 "Ntagisubizo cy'ukuri kirimo"
	]
		
	},
	{
		
		numb: 5,
		question:"Umuvuduko ntarengwa muri iyi nzira nyabagendwa ungana ute?<br><img src='image/540726.jpg' weight:50%/></br>",
		answer:0,
		options:
		[
		"90 km/h",
		"100 km/h",
       "80 km/h",
		 "Ntagisubizo cy'ukuri kirimo"]
		
	},

	{
		
		numb: 6,
		question:"Ubugari bwa remoroki Ikuruwe n'ikinyamitende itatu ntibigomba kurenza ibipimo bikurikira ?",
		answer: 3,
		options:[
		"cm 75",
		"cm 125",
        "cm 265",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 7,
		question:"Uburebure bw'ibinyabiziga  bikurikira ntibugomba kurenza metero 11:",
		answer: 3,
		options:[
		"Ibifite umutambiko umwe uhuza imipira",
		"Ibifite imitambiko ibiri ikurikiranye",
        "Makuzungu",
	    "Ntagisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 8,
		question:"Iri tara ryerekana ko ikinyabiziga gikora iki? <br><img src='image/548772.jpg' height:80/></br>",
		answer:  1,
		options:[
		"Guhita gihagarara",
		"Gukomeza imbere",
         "Kunyuranaho",
		 "nta gisubizo cy'ukuri"
		]
	},{
		
		numb: 9,
		question:"Kunyuranaho bikorerwa:",
		answer: 3,
		options:[
		"Muruhande rw'iburyo gusa",
		"Igihe cyose ni ibumoso",
         "Iburyo iyo unyura ku nyamaswa",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 10,
		question:"Icyapa cyerekana umuvuduko ntaregwa ikinyabiziga kitagomba kurenza gishyirwa gusa ku binyabiziga bifite uburemere ntaregwa bukurikira:",
		answer: 3,
		options:[
		
		"burenga toni 1",
		"burenga toni 2",
         "burenga toni 24",
		 "Ntagisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 11,
		question:"Ahatari mu nsisiro umuvuduko ntaregwa  mu isaha wa velomoteri ni:",
		answer: 0,
		options:[
		"km 50",
		"km 40",
        "km 30",
		 "Ntagisubizo cyukuri kirimo"
		
		]
	},{
		
		numb: 12,
		question:"Ako kapa ka mpandeshatu gashyirwa mu ntera ingana gute mu muhanda nyabagendwa? :<br><img src='image/881791.jpg' weight:50%/></br>",
		answer: 0,
		options:[
		"Muri metero 100",
		"Muri metero 150",
        "Muri metero 200",
		 "Muri metero 50"
		]
	},{
		
		numb: 13,
		question:"Kubyerekeye kwerekana ibinyabiziga n'ukumurika kwabyo ndetse no kwerekana ihindura ry'ibyerekezo byabyo birabujijwe gukora andi matara cyagwa utugarurarumuri uretse ibitegetswe ariko ntibireba amatara akurikira :",
		answer: 1,
		options:[
		"Amatara ndanga",
		"Amatara ari imbere mumodoka ",
        "Amatara ndangaburumbarare",
		 "Ibisubizo byose nibyo"
		]
	},{
		
		numb: 14,
		question:"Iyo nta mategeko awugabanya by'umwihariko umuvuduko ntaregwa w'amapikipiki mu isaha ni :",
		answer: 3,
		options:[
		"km 25",
		"km 70",
        "km 40",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 15,
		question:"Iki cyapa gishingwa he kubera iyihe mpamvu?<br><img src='image/D3.jpg' height=250/></br>",
		answer:1,
		options:[
		"Ahabujijwe kugenda bazengurutse",
		"Hafi y'isangano cyerekana isangano bagendamo bazengurutse",
        "Hafi y'isangano kiburira imodoka ko barinyuramo bazengurutse",
		 "Ntagisubizo cyukuri kirimo"
		]
	},{
		
		numb: 16,
		question:"Nibura ikinyabiziga gitegeswe kugira uduhanagurakirahure tungahe :",
		answer: 2,
		options:[
		"2",
		"3",
        "1",
		"Ntagisubizo cyukuri kirimo"
		
		]
	},{
		
		numb: 17,
		question:"Amatara maremare yikinyabiziga agomba kuzimwa mu bihe bikurikira  :",
		answer: 1,
		options:[
		"iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20",
		"iyo ikinyabiziga kigiye kubisikana nibindi",
        "iyo ari munsisiro",
		 "ibisubizo byose nukuri"
		]
	},{
		
		numb: 18,
		question:"ikinyabiziga ntigishobora kugira amatara arenga abiri y'ubwoko bumwe keretse kubyerekeye amatara akurikira :",
		answer: 3,
		options:[
		"itara ndangamubyimba",
		"itara ryerekana icyerekezo",
        "itara ndangaburumbarare",
		 "ibisubizo byose nukuri"
		]
	},{
		
		numb: 19,
		question:"Iki cyapa gisobanura iki?<br><img src='image/A2.jpg' height=250/></br>",
		answer: 2,
		options:[
			
		"Cyerekana ko hamanuka ku kigero cya 10% ugereranyije n'ahantu hazamuka cyane mu Rwanda",
		"Gisaba kugabanyaho 10% ku muvuduko",
        "Cyerekana akamanuko gashobora guteza ibyago mu kigereranyo cya 10%",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 20,
		question:"Iki cyapa gikoreshwa gute?<br><img src='image/C3e.jpg'height=250/></br>",
		answer: 3,
		options:[
		"Ntihanyurwa na makuzungu",
		"Inzira yagenewe makuzungu gusa",
        "Inzira yagenewe imodoka zipima hejuru ya toni 10 gusa",
		 "Ntihanyurwa n'ibinyabiziga bigenewe kwikorera ibicuruzwa"
		]
	},
];