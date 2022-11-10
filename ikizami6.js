//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:"Amatara ndangacyerekezo agomba kuba agizwe n'ibintu bifashe ku rumuri rumyasa, biringaniye ku buryo bigira umubare utari igiharwe ku mpande z'imbere n'inyuma z'ikinyabiziga ayo matara aba afite amabara akurikira:",
		answer: 2,
		options:
		[
		"amatara y'imbere aba yera cyangwa ari umuhondo",
	    "ayinyuma aba atukura cyangwa asa n'icunga rihishije ",
        "A na B ni ibisubizo by'ukuri",
        "ayinyuma aba asa n'icunga rihishije "
		]
	
	},
	{
		
		numb: 2,
		question:"Amahoni y'ibinyabiziga bigendeshwa na moteri agomba kohereza ijwi ry'injyana imwe rikomeza kandi ridacengera amatwi ariko ibinyabiziga bikurikira bishobora kugira ihoni ridasanzwe ridahuye n'ibivuzwe haruguru:",
		answer: 3,
		options:
		[
		
		" ibinyabiziga ndakumirwa",
        "ibinyabiziga bikora ku mihanda" ,
		"  ibinyabiziga bifite ubugari burenze m 2.10 ",
       "A na B ni ibisubizo by'ukuri"
		]
		
	},
	{
		
		numb: 3,
		question:"Iki cyapa gisobanura iki?<br><img src='image/A2.jpg' height=250/></br>",
		answer: 1,
		options:
		[
			"Umuhanda wubatswe nabi" ,
		"Agacuri kateza ibyago",
        "Umuhanda utaringaniye",
      "Akazamuko gahanamye"
		]
		
	},
	{
		
		numb: 4,
		question:"Icyapa kibuza kunyura kubindi binyabiziga byose uretse ibinyamitende ibiri n'amapikipiki adafite akanyabiziga ku ruhande gifite ibimenyetso by'amabara akurikira:",
		answer: 0,
		options:
	[
	"umweru n'umukara",
	"umutuku n'umukara",
       "ubururu",
	 "A na B ni ibisubizo by'ukuri"
	]
		
	},
	{
		
		numb: 5,
		question:"Icyapa kivuga ko hatanyurwa mu byerekezo byombi kirangwa n'ubuso bw'ibara rikurikira:",
		answer:1,
		options:
		[
		"umukara",
		"umweru",
       "ubururu",
		 "umutuku"
		]
		
	},

	{
		
		numb: 6,
		question:"Ibinyabiziga bikurikira bigomba kugira ibikoresho by'ihoni byumvikanira mu ntera ya m 20:",
		answer:1,
		options:[
		" amapikipiki",
		" velomoteri",
        " ibinyabiziga bigendeshwa na moteri bidapakiye",
		 "nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 7,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture21.jpg' height:80/></br>",
		answer:1,
		options:[
		" Guhindura icyerekezo ibumoso ugana aho bahagarara ",
		" Umuhanda udakomeza",
        " Nti byemewe guhindura icyerekezo ibumoso",
	    "Guhindura ikirekezo ibumoso ugana ku cyome"
		
		]
	},{
		
		numb: 8,
		question:"Imirongo y'ingabo z'igihugu zigendera kuri gahunda n'utundi dutsiko twose tw'abanyamaguru nk'imperekerane cyangwa udutsiko tw'abanyeshuri iyo bitagishoboka kubona neza muri m200, bagaragazwa ni itara ryera imbere naho inyuma ni itara ry'umutuku ariko iyo uburebure bwiyo mirongo cyangwa bw'utwo dutsiko burenga m6 impande zatwo cyangwa zayo zigaragazwa ku buryo bukurikira:",
		answer:   3,
		options:[
		" itara rimwe cyangwa menshi yera",
		" amatara menshi y'umuhondo",
         "amatara menshi asa n'icunga rihishije",
		 " ibisubizo byose nibyo"
		]
	},{
		
		numb: 9,
		question:"Amatara ndangambere na ndanganyuma y'imodoka zitarengeje m 6 z'uburebure na m 2 z'ubugari habariwemo imitwaro kandi nta kindi kinyabiziga kiziritseho ashobora gusimburwa n'amatara yo guhagarara umwanya munini iyo ibyo binyabiziga bihagaze umwanya muto cyangwa munini mu nsisiro bibangikanye ku ruhande rw'umuhanda. Ayo matara arangwa n'amabara akurikira:",
		answer:  2,
		options:[
		" umweru cyangwa umuhondo imbere ",
		"umutuku cyangwa umuhondo inyuma ",
         "A na B ni ibisubizo by'ukuri  ",
		 "nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 10,
		question:"Amatara ndangaburumbarare agomba kubonwa nijoro igihe ijuru rikeye n'umuyobozi w'ikinyabiziga kiri mu ntera ya :",
		answer:  3,
		options:[
		
		"m 50 nibura",
		" m 100",
         " m 150",
		 "m 200 nibura"
		
		]
	},{
		
		numb: 11,
		question:"Mu bimenyetso bimurika itara ritukura rivuga iki?<br><img src='image/Capture22.jpg' height:80/></br>",
		answer:  2,
		options:[
		"Hagarara kereste niba ushaka gukata ibumoso",
		" Hagarara niba ubona ntabyago byaguteza",
        "Birabujijwe kurenga icyo kimenyetso",
		 " Wemerewe kugenda niba aho asohokera mu masangano y'umuhanda hafunze"
		
		]
	},{
		
		numb: 12,
		question:" Mubimenyetso bimurika itara ry'umuhondo risobanura iki ?<br><img src='image/Capture23.jpg' /></br>",
		answer: 1,
		options:[
		" Itegure kugenda ",
		"Birabujijwe gutambuka umurongo wo guhagarara umwanya muto cg igihe uwo murongo udahari icyo kimenyetso ubwacyo ",
        "A na b ni ibisubizo by'ukuri ",
		 "Nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 13,
		question:"Mubimenyetso bimurika itara ry'icyatsi risobanura iki ?<br><img src='image/Capture24.jpg' height:80/></br>",
		answer: 1,
		options:[
		"Kwitegura kugenda ",
		"Uburenganzira bwo kurenga icyo kimenyetso ",
        "Hagarara niba inzira isohoka mu isangano ry'imihanda ifunze ",
		 "Ntagisubizo cyukuri kirimo"
		]
	},{
		
		numb: 14,
		question:"Uretse ku byerekeye imihanda iromboreje y'ibisate byinshi n'imihanda yimodoka igice cy'umuhanda kiri hakurya y'umurongo mugari wera ucibwa ku muhanda ngo ugaragaze inkombe mpimbano zawo kigenewe ibi bikurikira",
		answer: 2,
		options:[
		"guhagararwamo umwanya muto gusa ",
		" guhagararwamo umwanya munini gusa",
        "guhagararwamo umwanya muto n'umunini ",
		 "nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 15,
		question:"Ibimenyetso by'agateganyo bigizwe n'imitemeri y'ibara risa n'icunga rihishije bishobora gusimbura ibi bikurikira:",
		answer:1,
		options:[
		"imirongo yera irombereje idacagaguye gusa",
		"imirongo yera irombereje idacagaguye n'icagaguye",
        " imirongo icagaguye nidacagaguye ibangikanye",
		 "Ntagisubizo cyukuri kirimo"
		]
	},{
		
		numb: 16,
		question:"  Iyo bitagishoboka kubona muri m 200 imodoka zikuruwe n'inyamaswa, ingorofani, inyamaswa zitwaye imizigo cyangwa zigenderwamo kimwe n'amatungo bigomba kurangwa na :",
		answer: 3,
		options:[
		"  imbere ni itara ryera",
		"imbere ni itara ry'umuhondo cyangwa risa n'icunga rihishije",
        " inyuma ni itara rimwe ritukura",
		"ibisubizo byose ni ukuri"
		
		]
	},{
		
		numb: 17,
		question:"Uretse igihe hari amategeko yihariye akurikizwa muri ako karere ikinyabiziga cyose gihagaze umwanya muto cyangwa munini, iyo gihagaze mu mwanya wo kuruhande wagenewe abanyamaguru, kugirango bashobore kugenda batagombye kunyura mu muhanda, umuyobozi agombye kubasigira akayira gafite byibura ibipimo bikurikira by'ubugari:",
		answer: 0,
		options:[
		"m 1",
		"m 2",
        "m 0.5",
		"nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 18,
		question:" Icyapa cyerekana ahantu hagenewe guhagararwamo n'imodoka nini zagenewe gutwara abantu cyirangwa n'ubuso bw'amabara akurikira:",
		answer: 3,
		options:[
		"ubururu",
		"umweru",
        "umutuku ",
		 "nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 19,
		question:"Iki cyapa gisobanura iki?<br><img src='image/Capture27.jpg' /></br>",
		answer: 0,
		options:[
			
		"Ukugendera mu muhanda ubisikanirwamo",
		"Ukugendera mu muhanda ubisikanirwamo ntibyemewe",
        " Cyerekana aho umunyegare agomba kunyura ",
		 "Nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 20,
		question:"Umurongo ucagaguye wera mu muhanda usobanura iki?<br><img src='image/Capture25.jpg' /></br>",
		answer:0,
		options:[
		"Birabujijwe kuwurenga",
		" Birabujijwe kuhahagarara",
        " Wegereye ahaguteza ibyago",
		 " Kunyuranaho ntibyemewe "
		]
	},
];