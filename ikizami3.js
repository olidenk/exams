//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:" Uretse mumijyi, ku yindi mihanda yajyenwe na minisitiri ushizwe gutwara abantu n'ibintu , uburemere ntaregwa ku binyabiziga bifite imitambiko itatu cyagwa irenga hatarimo makuzungu ni:",
		answer: 2,
		options:
		[  
		"Toni 10",
		"Toni 12",
        "Toni 16",
		 "Toni 24",
		
		]
	
	},
	{
		
		numb: 2,
		question:"ubugari bwimizigo yikorewe nibinyamitende itatu nubwikorewe nibinyamitende 4 bifite cyagwa bidafite moteri kimwe nubwikorewe na rumoroki zikuruwe n'ibyo binyabiziga ntibushobora kurenga ibipimo bikurikira:",
		answer:2,
		options:
		[
		
		"cm 30 kubugari bw icyo kinyabiziga kidapakiye ",
		"Ubugari ntaregwa budakuka ni metero 2 na sentimetero 50",
        "A na B ni ibisubizo by'ukuri",
		 "Ntagisubizo cyukuri kirimo"
		
		
		]
		
	},
	{
		
		numb: 3,
		question:"Kunyura ku binyabiziga bindi,uretse icy'ibiziga bibiri bibujijwe aha hakurikira:",
		answer:3,
		options:
		[
		"Hafi yiteme iyo hari umuhanda ufunganye ",
		"Hafi yaho abanyamaguru banyura ",
        "Hafi yibice by'umuhanda bimeze nabi",
		"Ibisubizo byose ni ukuri" 
		
		]
		
	},
	{
		
		numb: 4,
		question:"Niki wakora mugihe usanze mu bimenyetso bimurika harimo ibara ry'umuhondo.<br><img src='image/Capture4.jpg'height=250/></br>",
		answer: 2,
		options:
	[
"Kongera umuvuduko",
"Kugumana umuvuduko wari uriho.",
"Kwitegura guhagarara.",
"Gufata feri cyane."

	]
		
	},
	{
		
		numb: 5,
		question:"Utuyira turi ku mpande zumuhanda ninkengero zigiye hejuru bihariwe abanyamaguru mu bihe bikurikira :",
		answer: 2,
		options:
		[
		"Iyo hari amategeko yihariye yerekanwa nibimenyetso ",
		"Iyo badatanye kandi bayobowe n'umwarimu",
        "Iyo hatari amategeko yihariye yerekanwa nibimenyetso ",
		"Ibisubizo byose nukuri"
		
		]
		
	},

	{
		
		numb: 6,
		question:"Iki cyapa gisobanura iki ?<br><img src='image/Capture5.jpg'height=250/></br>",
		answer: 0,
		options:[
		"Iherezo ryibibuzwa byose mu karere ku binyabiziga bigenda",
		"Ntihemerewe kuhahagarara",
         "Umuvuduko ntarengwa wemewe",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 7,
		question:"Imburira zimurika zemewe gukoreshwa kugirango bamenyeshe umuyobozi ko bagiye kumunyuraho aha hakurikira :",
		answer: 3,
		options:[
		"Munsisiro gusa ",
		"Ahegereye inyamatswa zikurura",
        "Hafi yamatungo ",
		"Ntagisubizo cyukuri kirimo"
		
		
		]
	},{
		
		numb: 8,
		question:"Uburemere ntaregwa bwemewe ntibushobora kurenza 1/2 cyuburemere bwikinyabiziga nubwumuyobozi kuri romoruki zikurikira :",
		answer:  1,
		options:[
		"Rumoruki ifite feri y'urugendo",
		"Rumoruki idafite feri y'urugendo",
        "Rumoruki itarenza kg 750",
		"Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 9,
		question:" Ibinyabiziga bifite ubugari bufite ibipimo bikurikira bigomba kugira amatara ndangaburumbarare :",
		answer: 0,
		options:[
		"Metero 2 na cm 10",
		"Metero 2 na cm 50",
         "Metero 2",
		 "Metero 3"
		]
	},{
		
		numb: 10,
		question:"Ntatara narimwe cyagwa akagarurarumuri bishobora kuba bifunze ku buryo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi yibipimo bikurikira kuva ku butaka igihe ikinyabiziga kidapakiye :",
		answer: 1,
		options:[
		
		"Cm 30",
		"Cm 40",
         "Cm 50",
		"Metero 1 na cm 55"
		
		]
	},{
		
		numb: 11,
		question:"Ibyapa bitegeka bikozwe muyihe shusho?<br><img src='image/Capture6.jpg'height=250/></br>",
		answer: 2,
		options:[
		"a",
		"b",
         "c",
		 "d"
		
		
		]
	},{
		
		numb: 12,
		question:"Iyo ikinyabiziga gifite amatara abiri cyagwa menshi y'ubwoko bumwe ayo matara agomba kugira ibara rimwe ningufu zingana kandi akagomba gushyirwaho ku buryo buteganye uhereye kumurongo ugabanyamo ikinyabiziga kabiri mu burebure bwacyo ariko ibi ntibikurikizwa kumatara akurikira :",
		answer: 2,
		options:[
		"Itara ndangamubyimba",
		"Itara ndangaburumbarare",
        "Itara ribonesha icyapa kiranga numero yikinyabiziga inyuma",
		"A na B byose nibyo"
		
		
		]
	},{
		
		numb: 13,
		question:"Ahari hejuru cyane yubuso bumurika hamatara ndangambere na ndanganyuma ntihashobora kuba aharenze ibipimo bikurikira hejuru yubutaka iyo ikinyabiziga kidapakiye:",
		answer: 2,
		options:[
		" m1 na cm 50 ",
		"m1 na cm 75",
        "m 1 na cm 90",
		 "m2 na cm 10"
		
		]
	},{
		
		numb: 14,
		question:"Ni ryari ikinyabiziga gishobora kugenda mu muhanda moteri itaka cyangwa vitesi idakora:",
		answer: 1,
		options:[
		"igihe kigenda ahamanuka ",
		"igihe gikuruwe nikindi kinyabiziga",
        "igihe gifite feri y urugendo",
		 "ibisubizo byose ni byo"
		]
	},{
		
		numb: 15,
		question:" Umurongo mugari wera udacagaguye ushobora gucibwa ku muhanda kugirango ugaragaze ibi bikurikira :",
		answer:0,
		options:[
		"inkombe mpimbano zumuhanda",
		" ahahagararwa umwanya muto numunini",
        "ahanyura abayobozi bamagare",
		"Ntagisubizo cyukuri kirimo"
		]
	},{
		
		numb: 16,
		question:"Nikihe cyapa cyerekena ko nta kinyabiziga gifite moteri cyemerewe kuhanyura?<br><img src='image/Capture7.jpg'height=250/></br>",
		answer: 1,
		options:[
		"a",
		"b",
        "c",
		"d"
		
		]
	},{
		
		numb: 17,
		question:" Buri modoka cyangwa buri romoruki ikuruwe niyo modoka bishobora kugira itara risa nicyatsi kibisi bituma umuyobozi yerekana ko yabonye ikimenyetso cyuwitegura kumunyuraho. Iryo tara rigomba gushyirwa aha hakurikira: ",
		answer:3,
		options:[
		"hafi yinguni yibumoso bwikinyabiziga",
		" inyuma hafi yimpera yiburyo bwikinyabiziga",
        " inyuma ahegereye inguni yiburyo",
		 "Ntagisubizo cyukuri kirimo"
		]
	},{
		
		numb: 18,
		question:"Ibinyabiziga bikurikira bigomba kugira icyerekana umuvuduko kiri aho umuyobozi areba neza kandi kigahora kitabwaho kugirango kigume gukora neza:",
		answer:1,
		options:[
		"ibinyabiziga bifite umuvuduko nibura wa km 60 mu isaha",
		" ibinyabiziga bishobora kurenza km 40 mu isaha ",
        " ibinyabiziga bishobora kurenza km 30 mu isaha",
		" ibinyabiziga bishobora kurenza km 25 mu isaha"
		
		
		]
	},{
		
		numb: 19,
		question:" iki cyapa gisobanura iki ?<br><img src='image/Capture8.jpg'height=250/></br>",
		answer:  3,
		options:[
			
		" Uburenganzira bwo gutambuka mbere  ",
		"Nta kinyabiziga kigendeshwa na moteri ",
        "ibyerekezo bibiri byumuhanda",
		 "Birabujijwe kunyuranaho "
		]
	},{
		
		numb: 20,
		question:"Imbere yawe iki cyapa kikubwiye iki ? <br><img src='image/Capture9.jpg'height=250/></br>",
		answer: 2,
		options:[
		"Umuvuduko ntarengwa wemewe",	
		"Iherezo ryibyo wabuzwaga",
		"Guhagarara umwanya munini numwanya moto ntibyemewe",
		 "Birabujijwe kuhinjira"
		]
	},
];