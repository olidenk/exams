//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:"Igice cy'umuhanda kiri hakurya y'umurongo mugari wera udacagaguye ugaragaza inkombe mpimbano y'umuhanda kiba kigenewe ibi bikurikira:",
		answer:3,
		options:
		[  
		"guhagararwamo umwanya muto gusa ",
		"guhagararwamo umwanya muto n'umunini ndetse no kumihanda irombereje y'ibisate byinshi n'imihanda y'imodoka",
        "A na B ni ibisubizo by'ukuri ",
		"nta gisubizo cy'ukuri kirimo"
		
		]
	
	},
	{
		
		numb: 2,
		question:"Iminyururu n'ibindi byuma bifashisha bishobora kuvanwaho cyangwa binagana, hatabariwemo ibimenyetso byerekana ibyerekezo bigomba gutungurwa ku kinyabiziga ku buryo igihe byizunguza bitarenga impande zihera uburumbarare bw'ikinyabiziga kandi ibyo byuma bifashisha ntibigomba gukururuka ku butaka ariko ibyo ntibibujijwe ku binyabiziga bikurikira:",
		answer:0,
		options:
		[
		
		" imashini zihinga ",
		"ibinyabiziga bitwaye ibintu bidashobora gufata inkongi",
        " A na B ni ibisubizo by'ukuri",
		"nta gisubizo cy'ukuri kirimo"
		
		
		]
		
	},
	{
		
		numb: 3,
		question:"Ku binyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntigishobora kurenga ibipimo bikurikira:",
		answer:1 ,
		options:
		[
		"  iby'inyuma : m3",
		"iby'imbere: m2.70 ",
        "A na B ni ibisubizo by'ukuri",
		"nta gisubizo cy'ukuri kirimo"
		
		]
		
	},
	{
		
		numb: 4,
		question:"Uretse bibonewe uruhushya, ubundi birabujijwe gushyira no gukomeza kugendesha imodoka cyangwa romoruki mu nzira nyabagendwa iyo uburemere bw'ibyikorewe burenze uburemere ntarengwa bwemewe n'ikarita Iranga ikinyabiziga ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
		answer:2,
		options:
	[
"  ibinyabiziga bya police",
"  ibinyabiziga bihinga",
 "  imashini zikoreshwa mu kubaka imihanda",
" ibisubizo byose ni ukuri"
		

	]
		
	},
	{
		
		numb: 5,
		question:"Nk'umuyobozi w'ikinyabiziga, n'iyihe myitwarire wagira?<br><img src='image/Capture50.jpg'height=250/></br>",
		answer:0,
		options:
		[
		"Umuyobozi w'ikinyabiziga agomba gukomeza",
		"Umuyobozi w'ikinyabiziga agomba kuguma mu ruhande rw'iburyo kugira ngo ahe inzira umumotari",
        "Umuyobozi w'ikinyabiziga agomba gutegereza",
	    "Umuyobozi w'ikinyabiziga agomba gutanga inzira ayiha umu motari"
		
		]
		
	},

	{
		
		numb: 6,
		question:"Gushyira mu muhanda ku buryo budasanzwe ibinyabiziga bikururana birenze bitatu bigomba gutangirwa uruhusa, uretse imashini ihinga iyo zigenda uregendo rutarenze km 25, ibinyabiziga bikururana bitwaye ibyamamazwa n'ibindi biteganwa n'iri teka ariko igiteranyo cy'uburebure bw'ibyo binyabiziga bikururana ntigishobora kurenga ibipimo bikurikira:",
		answer:2,
		options:[
		" m50 ",
		" m35 ",
        "m25 ",
		"nta gisubizo cy'ukuri kirimo" 
		]
	},{
		
		numb: 7,
		question:"Ibinyamitende itatu bifite moteri bigomba kugira amatara akurikira:",
		answer:2,
		options:[
		" amatara abiri ndangambere n'amatara abiri ndanganyuma yerekana ko ikinyabiziga gihagaze  ",
		"utugarurarumuri tubiri",
        "A na B ni ibisubizo by'ukuri ",
		" nta gisubizo cy'ukuri kirimo"
		
		
		]
	},{
		
		numb: 8,
		question:"N'iki umuyobozi w'ikinyabiziga yakora ashaka gukatira iburyo?<br><img src='image/Capture51.jpg'height=250/></br>",
		answer:2,
		options:[
		" Vuza ihoni umenyesha umunyegare ko Ushaka gukatira iburyo",
		"Kata ikoni mbere y'umunyegare",
        " Emerera umunyegare akomeze inzira ye",
		"Ongera umuvuuko kugira ngo umutange gukata mbere ye"
		]
	},{
		
		numb: 9,
		question:"Ibyapa bibuza n'ibitegeka bikurikizwa gusa aha hakurikira:",
		answer: 1,
		options:[
		"mu masangano",
		" mu gice cy'inzira nyabagendwa kiri hagati yaho bishinze n'inkomane ikurikiyeho ku ruhande rw'inzira bishinzeho",
         "ibyo byapa bishyirwaho hakurikijwe intera ibitandukanya",
		 " B na C ni ibisubizo by'ukuri"
		]
	},{
		
		numb: 10,
		question:"Icyapa cy'inyongera kerekana aho bagobokera ibinyabiziga kirangwa n'amabara akurikira:",
		answer: 1,
		options:[
		
		" ubururu, umweru, umutuku ",
		" umweru, umukara, ubururu",
         "umutuku, umweru n'umukara",
		" nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 11,
		question:"Icyapa cyerekana uburebure bw'igice cyatera ibyago cyangwa bw'ahantu amabwiriza y'icyo cyapa agomba gukurikizwa kirangwa n'ubuso n'ibimenyetso bikurikira:",
		answer:  3,
		options:[
		" ubuso umweru, ikimenyetso ubururu ",
		" ubuso ubururu, ikimenyetso umweru",
         "ubuso ubururu, ikimenyetso umweru n'umukara",
		 "nta gisubizo cy'ukuri kirimo"
		
		
		]
	},{
		
		numb: 12,
		question:"Muri ibi binyabiziga n'ikihe gihagaze nabi?<br><img src='image/Capture52.jpg'height=250/></br>",
		answer:  0,
		options:[
		"Ibinyabiziga byombi",
		"Ikinyabiziga cy'icyatsi",
        "Ikinyabiziga cy'umutuku ",
		 "Nta n'imwe"
		]
	},{
		
		numb: 13,
		question:"Umurongo w'umuhondo ucagaguye uciye ku nkombe nyayo y'umuhanda, umusezero w'inzira y'abanyamaguru cyangwa w'inkengero y'umuhanda yegutse uvuga ibi bikurikira:",
		answer:   3,
		options:[
		"guhagarara umwanya muto birabujijwe ku burebure bw'uwo murongo",
		"guhagarara umwanya muto n'umunini birabujijwe ku burebure bw'uwo murongo",
        "aho bahagarara umwanya munini cyangwa muto ",
		 " nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 14,
		question:"Ku binyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntigishobora kurenga ibipimo bikurikira:",
		answer:  3,
		options:[
		" iby'inyuma m 3.40 ",
		" iby'imbere m 2.50  ",
        "  A na B ni ibisubizo by'ukuri",
		 " nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 15,
		question:"nibintu uburebure ntarengwa kuri buri mitambiko 3 ifungwaho ibiziga bine ni:",
		answer:0,
		options:[
		" toni 24",
		"toni 10",
        " toni 16",
		 "toni 53"
		
		]
	},{
		
		numb: 16,
		question:"Ni gute umuyobozi w'ikinyabiziga yanyura kumunyegare hano?<br><img src='image/Capture53.jpg'height=250/></br>", 
		answer:  2,
		options:[
		"Aha umuyobozi w'ikinyabiziga ntashobora kumunyuraho",
		"Atarenze umurongo wera ucagaguye",
        "Arenze umurongo wera ucagaguye",
		"Nta kurenga iyi mirongo yombi"
		
		]
	},{
		
		numb: 17,
		question:"Iyo hagati y'uruhande rw'imbere rwa romoruki n'uruhande rw'inyuma rw'ikinyabiziga kiyikurura hari umwanya urenze m 3 ikibizirikanyije kigomba kugaragazwa ku buryo bukurikira iyo amatara y'ikinyabiziga agomba gucanwa:",
		answer:3,
		options:[
		"agatambaro gatukura gafite nibura cm 50 z'uruhande",
		" itara risa n'icunga rihishije rigaragara mu mbavu igihe ikibizirikanyije kimuritswe",
        " A na B ni ibisubizo by'ukuri ",
		" nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 18,
		question:"Itara ryo guhagarara ry'ibara ritukura rigomba kuba ridahumisha, kandi rigomba kugaragarira mu ntera ikurikira:",
		answer: 3,
		options:[
			
		"nijoro igihe ijuru rikeye nibura muri m 200  ",
		" ku manywa igihe cy'umucyo nibura muri m50 ",
        "nijoro nibura muri m 100 igihe ijuru rikeye ",
		 "nta gisubizo cy'ukuri kirimo "
		
		]
	},{
		
		numb: 19,
		question:"N'iki umuyobozi w'ikinyabiziga yakora aramutse ahumishijwe n'urumuri rw'amatara yikinyabiziga giturutse mu kindi cyerekezo?<br><img src='image/Capture54.jpg'height=250/></br>",
		answer: 1,
		options:[
			
		 "humisha ikinyabiziga giturutse mu kindi cyerekezo ucana amatara maremare.",
		"Egera kunkombe y'iburyo bw'umuhanda nibinashoboka ugabanye umuvuduko.",
        "Canira amatara ikinyabiziga kiva mukindi cyerekezo",
		 "Ongera umuvuduko kugira ngo usohoke mururwo rumuri vuba bishoboka "
		]
	},{
		
		numb: 20,
		question:"Birabujijwe kongera ku mpande z'ikinyabiziga kigendeshwa na moteri cyangwa velomoteri ibi bikurikira:",
		answer:2,
		options:[
		" imitako",
		"ibintu bifite imigongo cyangwa ibirenga ku mubyimba kandi bishobora gutera ibyago abandi bagenzi ",	
		"A na B ni ibisubizo by'ukuri",
		"nta gisubizo cy'ukuri kirimo"
		
		]
	},
];