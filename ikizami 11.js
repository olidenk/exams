//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:" Ikintu cyose cyatuma hahindurwa ibyanditswe bireba nyirikarita cyangwa ibiranga ikinyabiziga kigomba kumenyeshwa ibiro by'imisoro haba mu magambo cyangwa mu ibaruwa ishinganye. Ibyo bikorwa mu gihe kingana gute:",
		answer:1,
		options:
		[  
		"mu minsi 5 ",
		"mu minsi 8",
        "mu minsi 15 ",
		"nta gisubizo cy'ukuri kirimo"
		
		]
	
	},
	{
		
		numb: 2,
		question:"Iyo ubugari bw'inzira nyabagendwa igenderwamo n'ibinyabiziga budahagije kugirango bibisikane nta nkomyi abagenzi bategetswe:",
		answer:2,
		options:
		[
		
		" kunyura mu nzira z'impande z'abanyamaguru ",
		"guhagarara aho bageze",
        "koroherana",
		"gukuraho inkomyi"
		
		
		]
		
	},
	{
		
		numb: 3,
		question:"Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k'abanyamaguru ariko amaze kureba ibi bikurikira:",
		answer:3,
		options:
		[
		" umuvuduko w'abanyamaguru",
		" ubugari bw'umuhanda",
        "umubare w'abanyamaguru",
		"nta gisubizo cy'ukuri kirimo"
		
		]
		
	},
	{
		
		numb: 4,
		question:"Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa ku binyabiziga bifite uburebure ntarengwa bukurikira:",
		answer:3,
		options:
	[
" burenga toni 1",
" burenga toni 2",
 " burenga toni 24",
" nta gisubizo cy'ukuri kirimo"
		

	]
		
	},
	{
		
		numb: 5,
		question:"Niki ugomba gukora igihe wegereye ikimenyetso kimurika kiva mucyatsi kijya mumuhondo?<br><img src='image/Capture55.jpg'height=250/></br>",
		answer:2,
		options:
		[
		"Ongera umuvuduko kugirango usoze ikoni",
		"Komeza kuko itara ry'icyatsi rigiye kwaka",
        "Hagarara niba utateza ibyago",
	    "Komeza ubwitonzi witegura guhagarara mugihe itara rihindutse umutuku"
		
		]
		
	},

	{
		
		numb: 6,
		question:"Birabujijwe guhagarara akanya kanini aha hakurikira:",
		answer: 2,
		options:[
		"mu duhanda tw'abanyamagare ",
		" mu duhanda twagenewe velomoteri",
        " A na B ni ibisubizo by'ukuri ",
		"nta gisubizo cy'ukuri kirimo" 
		]
	},{
		
		numb: 7,
		question:"Amatara maremare y'ikinyabiziga agomba kutamurika mu bihe bikurikira:",
		answer:1,
		options:[
		"  iyo umuhanda umurikiwe umuyobozi abasha kureba muri m 200",
		"iyo ikinyabiziga kigiye kubisikana nikindi",
        "iyo ari mu nsisiro ",
		"ibisubizo byose nibyo"
		
		
		]
	},{
		
		numb: 8,
		question:"Niki umuyobozi w'ikinyabiziga akwiriye kumenya mugihe akurikiye umuyobozi wikinyamitende ibiri kandi imodoka y'umweru iri gusubira inyuma ijya mumuhanda?<br><img src='image/Capture56.jpg'height=250/></br>",
		answer:3,
		options:[
		"Umuyobozi wikinyabiziga gisubira inyuma azahagarara nabona umuyobozi w'ikinyabimitende ibiri",
		"Umuyobozi w'ikinyamitende ibiri ashobora gusaba umuyobozi w'ikinyabiziga gisubira inyuma guhagarara",
        " Amatara yoguhagarara ashobora kuzima ikinyabiziga gikomeza gusubira inyuma",
		"Umuyobozi w'ikinyamitende ashobora guhagarara bitunguranye"
		]
	},{
		
		numb: 9,
		question:"Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza bwitwa:",
		answer: 2,
		options:[
		"feri y'urugendo",
		" feri yo guhagarara",
         "feri yo gutabara",
		 " Nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 10,
		question:"Nta mwanya n'umwe feri ifungiraho ushobora kurekurana n'ibiziga keretse:",
		answer: 3,
		options:[
		
		" iyo bireba feri y'urugendo ",
		" iyo kurekurana ari ibyakanya gato",
         "iyo bireba feri yo guhagarara umwanya munini, ubwo kurekurana bikaba bidashoboka bidakozwe n'umuyobozi",
		" byose ni ibisubizo by'ukuri"
		
		]
	},{
		
		numb: 11,
		question:"Ibiziga by'ibinyabiziga bigendeshwa na moteri n'ibya velomoteri kimwe n'ibya romoruki zabyo bigomba kuba byambaye inziga zihagwa zifite amano n'ubujyakuzimu butari munsi ya milimetero imwe ku migongo yabyo yose, n'ubudodo bwabyo ntibugire ahantu na hamwe bugaragara kdi ntibigire aho byacitse bikomeye mu mpande zabyo. Ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
		answer: 0,
		options:[
		"ibinyabiziga bidapakiye kdi bitajya birenza umuvuduko wa km 25 mu isaha ahateganye ",
		"ibinyabiziga bya police bijya ahatarenga km 25 uvuye aho biba",
         "A na B ni ibisubizo by'ukuri",
		 "nta gisubizo cy'ukuri kirimo"
		
		
		]
	},{
		
		numb: 12,
		question:"Muri ibi binyabiziga bine ni ikihe kiri mu buryo bwiza bwo gukata ikoni ry'iburyo kiva mu muhanda munini kijya mu muto?<br><img src='image/Capture57.jpg'height=250/></br>",
		answer:  "Ikinyabiziga cya mbere kiri mu buryo bwiza bwo gukata ikoni ry'iburyo",
		options:[
		"Ikinyabiziga cya mbere kiri mu buryo bwiza bwo gukata ikoni ry'iburyo",
		"Ikinyabiziga cya kabiri kiri mu buryo bwiza bwo gukata ikoni ry'iburyo",
        "Ikinyabiziga cya gatatu kiri mu buryo bwiza bwo gukata ikoni ry'iburyo ",
		 "Ikinyabiziga cya kane kiri mu buryo bwiza bwo gukata ikoni ry'iburyo"
		]
	},{
		
		numb: 13,
		question:"Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri na za romoruki zikururwa nabyo, iyo ibiziga byambaye inziga zidahagwa cyangwa inziga zikururuka zifite umubyimba uri hasi ya cm 4. Ariko ibyo ntibikurikizwa ku binyabiziga bikurikira:",
		answer:  " ibinyabiziga bihinga iyo bigendeshwa mu karere katarenga km 25 uvuye aho ziba",
		options:[
		"ku binyabiziga by'ingabo",
		" ibinyabiziga bihinga iyo bigendeshwa mu karere katarenga km 25 uvuye aho ziba",
        "ibinyabiziga bya police ",
		 " nta gisubizo cy'ukuri kirimo"
		
		]
	},{
		
		numb: 14,
		question:"Imirongo yera iteganye n'umurongo ugabanya umuhanda mo kabiri mu burebure bwawo ugaragaza: ",
		answer:  " ahanyurwa n'abanyamaguru",
		options:[
		"  ahanyurwa n'amagare na velomoteri ",
		" ahanyurwa n'ingorofani n'ibinyamitende  ",
        " ahanyurwa n'abanyamaguru",
		 "nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 15,
		question:"Iyo harimo indi myanya birabujijwe gutwara ku ntebe y'imbere y'imodoka abana badafite imyaka ikurikira:",
		answer:"imyaka 12",
		options:[
		" imyaka 10",
		"imyaka 12",
        "  imyaka 7",
		 "nta gisubizocy'ukuri kirimo"
		
		]
	},{
		
		numb: 16,
		question:"Umurongo w'umweru urombereje uciye hagati mu muhanda uvuze iki?<br><img src='image/Capture58.jpg'height=250/></br>", 
		answer:  "Umuyobozi wese abujijwe kuwurenga",
		options:[
		"Umuyobozi wese abujijwe kuwurenga",
		"Abanyamitende wemerewe kunyuranaho",
        "Kuhahagara biremewe",
		"Guhindukira ku manywa"
		
		]
	},{
		
		numb: 17,
		question:"Iyo ikinyabiziga kitagikora cyangwa cyoherejwe mu mahanga burundu ibyapa ndanga bigomba gukurwaho bikoherezwa mu biro by'imisoro, ibyo bikorwa mu gihe kingana gute:",
		answer:" amezi abiri",
		options:[
		"ibyumweru bibiri",
		" amezi abiri",
        " ukwezi kumwe ",
		" nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 18,
		question:"Inkombe z'inzira nyabagendwa cyangwa z'umuhanda zishobora kugaragazwa n'ibikoresho ngarurarumuri ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona ku buryo bukurikira:",
		answer:  " A na B ni ibisubizo by'ukuri ",
		options:[
			
		" babona gusa ibumoso bwabo ibyibara ryera  ",
		" iburyo babona iby'ibara ritukura cyangwa risa n'icunga rihishije gusa ",
        " A na B ni ibisubizo by'ukuri ",
		 "nta gisubizo cy'ukuri kirimo "
		
		]
	},{
		
		numb: 19,
		question:"Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n'icyapa gifite ubuso bw'amabara akurikira:",
		answer:  "nta gisubizo cy'ukuri kirimo ",
		options:[
			
		 " umukara",
		" umweru",
        " umutuku",
		 "nta gisubizo cy'ukuri kirimo "
		]
	},{
		
		numb: 20,
		question:"Ku mihanda yagenwe na minisitiri ubifite mu nshingano ibyapa biburira n'ibyapa byerekana bigomba kugaragazwa kuva bwije kugera bukeye n'urumuri rwihariye cyangwa amatara ku mihanda cyangwa ibintu ngarurarumuri. Igihe ijuru rikeye intera y'ahagaragara igomba kuba nibura:",
		answer:" nta gisubizo cy'ukuri kirimo",
		options:[
		" m50",
		" m120 ",	
		"m150",
		" nta gisubizo cy'ukuri kirimo"
		
		]
	},
];