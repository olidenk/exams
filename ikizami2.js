//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:"Za octobisi zagenewe gutwara abanyeshuri zishobora gushyirwaho amatara abiri asa n'icunga rihishije amyasa kugirango yerekane ko zihagaze no kwerekana ko bagomba kwitonda , ayo matara ashyirwaho kuburyo bukurikira:",
		answer: 2,
		options:
		[  
		"amatara abiri ashyirwa inyuma ",
	    "amatara abiri ashyirwa imbere",
         "rimwe rishyirwa imbere irindi inyuma",
         "b na c ni ibisubizo byukuri"
		
		]
	
	},
	{
		
		numb: 2,
		question:"Itara ryo guhagarara ry'ibara ritukura rigomba kugaragara igihe ijuru rikeye nibura mu ntera ikurikira:",
		answer: 3,
		options:
		[
		
		"metero 100 kumanywa na metero 20 mu ijoro",
		"metero 150 kumanywa na metero 50 mu ijoro",
         "metero 200 kumanywa na metero 100 mu ijoro",
         "Ntagisubizo cy'ukuri kirimo"
		
		]
		
	},
	{
		
		numb: 3,
		question:"Iyo umuvuduko w'ibinyabiziga bidapakiye ushobora kurenga km 50 mu isaha ahategamye bigomba kuba bifite ibikoresho by'ihoni byumvikanira muntera",
		answer:2,
		options:
		[
		"metero 100" ,
		"metero 200",
        "metero 50",
        "metero 150"
		
		]
		
	},
	{
		
		numb: 4,
		question:"Uri hafi kunyura k'umuyobozi w'ikinyamitende. Muri ibi byapa bikurikira nikihe wakwitondera gukoresha.?<br><img src='image/Capture.jpg' weight:50%/></br>",
		answer: 2,
		options:
	[
	"a",
	"b",
     "c",
	 "d"
	]
		
	},
	{
		
		numb: 5,
		question:"igice kinzira nyabagendwa kigarukira ku mirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugirango imodoka zitambuke neza kiba ari:",
		answer:2,
		options:
		[
			"Ahanyurwa n'amagare na velomoteri",
		"Ahanyurwa n'ingorofani",
        "Ahanyurwa n'ibinyamitende",
		"Ntagisubizo cy'ukuri kirimo"
		]
		
	},

	{
		
		numb: 6,
		question:"Ubugari bwa remoroki ntiburenza ubugari bw'ikinyabiziga kiyikurura iyo ikuruwe n'ibinyabiziga bikurikira",
		answer: 2,
		options:[
			"Igare",
		"velomoteri",
         "ipikipiki ifite akanyabiziga kometse ku ruhande rwayo",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 7,
		question:"Iyo hatarimo indi myanya birabujijwe gutwara ku ntebe y'imbere y'imodoka abana badafite imyaka :",
		answer: 3,
		options:[
		"imyaka 10",
		"imyaka 12",
         "imyaka 7",
		"Ntagisubizo cy'ukuri kirimo"
		
		
		]
	},{
		
		numb: 8,
		question:"Iki cyapa cyivuga iki?<br><img src='image/Capture1.jpg'height=250/></br>",
		answer:  1,
		options:[
		"Umuvuduko ntarengwa 30 km/h",
		"Iherezo ryumuvuduko muke ntarengwa utegetswe.",
         "Iherezo ryUmuvuduko muto utegetswe ",
		 "Umuvuduko uri hejuru 30 km/h"
		]
	},{
		
		numb: 9,
		question:"Icyapa gikurikira kivuze iki?<br><img src='image/Capture2.jpg'height=250/></br>",
		answer: 1,
		options:[
		"Ntihanyurwa",
		"Birabujijwe guhagarara umwanya munini ",
         "Umuvuduko utarengeje ",
		 "Inzira yabanyeshuli"
		]
	},{
		
		numb: 10,
		question:"Icyapa kivuga gutambuka mbere y'ibinyabiziga biturutse imbere gifite amabara akurikira :",
		answer: 3,
		options:[
		
			"Ubuso ni umweru",
		"Ikirango ni umutuku n'umukara",
       "Ikirango ni umweru n'umukara",
		 "Ntagisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 11,
		question:"Ni ryari itegeko rigenga gutambuka mbere kw'iburyo rikurikizwa mu masangano:",
		answer:  2,
		options:[
		"Iyo nta cyapa cyogutambuka mbere gihari",
		"Iyo ikimenyetso kimurika cyagenewe ibinyabiziga kidakora ",
         "A na B ni ibisubizo byukuri",
		 "Ntagisubizo cyukuri kirimo"
		
		
		]
	},{
		
		numb: 12,
		question:"Ibimenyetso bimurika  byerekana uburyo bwo kugendera mumuhanda  kw'ibinyabiziga bishyirwa iburyo bw'umuhanda ariko bishobora no gushyirwa ibumoso cyagwa hejuru y'umuhanda:",
		answer:0,
		options:[
		"Hakurikijwe icyerekezo abagenzi bireba baganamo ",
	    "Hakurikijwe icyo ibyo bimenyetso bigamije kwerekana",
        "Kugirango birusheho kugaragara neza",
		"Ibusubizo byose ni ukuri"
		
		]
	},{
		
		numb: 13,
		question:"Iyo itara ry'umuhondo rimyasa rikoreshejwe mu masangano y'amayira ahwanyije agaciro rishyirwa ahaganahe:",
		answer: 3,
		options:[
		"Kuri buri nzira",
		"Hagati y'amasangano",
        "Iburyo bw'amasangano",
		 "a na b ni ibisubizo by'ukuri"
		]
	},{
		
		numb: 14,
		question:"Inkombe z'inzira nyabagendwa cyagwa z'umuhanda zishobora kugaragazwa n'ibikoresho ngarurarumuri. ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona :",
		answer: 3,
		options:[
		"Babona gusa ibumoso bwabo iby'ibara ritukura ",
		"Iburyo babona ibyibara risa n'icunga rihishije gusa ",
        "Babona iby'ibara ry'umuhondo ibumoso",
		 "Ntagisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 15,
		question:"Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa rimwe mu mezi 6 :",
		answer: 3,
		options:[
		"Ibinyabiziga bitwara abagenzi muri rusange",
		"Ibinyabiziga bigenewe gutwara ibintu birenhgeje toni 3.5",
        "Ibinyabiziga bigenewe kwigisha gutwara",
		"Ibisubizo byose ni ukuri"
		]
	},{
		
		numb: 16,
		question:"Iyo kuyobya umuhanda arimgobwa bigaragazwa kuva aho uhera no kuburebure bwawo n'icyapa gifite ubuso bwamabara akurikira  :",
		answer: 0,
		options:[
		"Ubururu",
		"Umweru",
        "Umutuku",
		"Ntagisubizo cyukuri kirimo"
		
		]
	},{
		
		numb: 17,
		question:"Ku mihanda ibyapa bikurikira bigomba kugaragazwa ku buryo bumwe:",
		answer: 2,
		options:[
		"ibyapa biyobora n'ibitegeka",
		"ibyapa biburira n'ibitegeka",
        "ibyapa bibuza n'ibitegeka",
		 "Ntagisubizo cyukuri kirimo"
		]
	},{
		
		numb: 18,
		question:"Niyihe feri ituma imodoka igenda buhoro kandi igahagarara kuburyo bwizewe bubangutse kandi nyabwo uko imodoka yaba yikoreye kose yaba igeze ahacuramye cyagwa ahaterera :",
		answer:0,
		options:[
		"feri y'urugendo",
		"feri y'ogutabara",
        "feri y'oguhagarara umwanya munini",
		"Ntagisubizo cyukuri kirimo"
		
		]
	},{
		
		numb: 19,
		question:" Inzira nyabagendwa ifite ibyerekezo bibiri, uruhande rw'ibumoso rudufasha iki?<br><img src='image/Capture3.jpg'height=250/></br>",
		answer: 1,
		options:[
			
		"Kunyuranaho gusa, ntugaruke iburyo bwawe ",
		"Kunyuranaho cyangwa ugakatira ibumoso",
        "Hemerewe kugenda imodoka zihuta gusa",
		 "Gukatira iburyo gusa utanyuranyeho"
		]
	},{
		
		numb: 20,
		question:"Ibizikisho by'iminyurururu cyagwa by'insinga kimwe n'ibindi by'ingoboka bikoreshwa gusa igihe nta kundi umuntu yabigenza kandi nta kindi bigiriwe uretse gusa kugirango ikinyabiziga kigere aho kigomba gukorerwa kandi nturenze na rimwe 20km mu isaha , ibyo bizirikisho bigaragazwa kuburyo bukurikira  :",
		answer: 3,
		options:[
			
		"Agatambaro gatukura kuri cm50 z'umuhanda",
		"Ikimenyetso cy'itara risa n'icunga rihishije",
        "Icyapa cyera cya mpande enye zingana gifite cm 20 kuri buri ruhande",
		 "Ntagisubizo cyukuri kirimo"
		]
	},
];