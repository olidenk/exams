//creating an array and passing the number,questions,options,ans answers
let quiz= [
	{
		numb: 1,
		question:" Kuki ugomba gucana amatara mugihe hatangiye kwijima?",
		answer: 1,
		options:
		[  
		"Kugirango akerekanamuvuduko kagaragare neza.  ",
		" Kugirango abandi biborohere kukubona.",
        "Kugira ngo ujyane nabandi bayobozi bibinyabiziga ",
		"Kuko amatara yo ku muhanda ari kwaka"
		
		]
	
	},
	{
		
		numb: 2,
		question:"Urimo kugenda munzira nyabagendwa ni gute wanyura k'umuyobozi w'igare?",
		answer:2,
		options:
		[
		
		"  Kuvuza ihoni mugihe umunyuraho  ",
		"Kumunyuraho umwegereye ",
        "Gusiga umwanya uhagije igihe umunyuraho",
		"Kugabanya umuvuduko mbere y'uko umunyuraho"
		
		
		]
		
	},
	{
		
		numb: 3,
		question:"Niki wakora igihe utabona neza usubira inyuma ?",
		answer:2,
		options:
		[
		"Kumanura ikirahure cy'imodoka urebe inyuma",
		"Gufungura umuryango w'imodoka ureba inyuma ",
        "Gushaka umuntu uri hanze y'ikinyabiziga ukuyobora",
		"Gukoresha akarebanyuma kakwegereye"
		
		]
		
	},
	{
		
		numb: 4,
		question:"Igihe ukurikiwe n'ikinyabiziga gitwara abarwayi gicanye amatara y'intabaza arabagirana. Wakora iki ?",
		answer:0,
		options:
	[
"Kugihigamira ako kanya ndetse byaba ngombwa ugahagarara",
"Kongera umuvuduko kugirango ugisige",
 "Kugumana umuvuduko wari ufite ",
"Guhagarara bitunguranye mu muhanda"
		

	]
		
	},
	{
		
		numb: 5,
		question:"Wifuza kugana ibumoso imbere yawe. kubera iki ushaka umwanya mwiza kandi uhagije?",
		answer: 2,
		options:
		[
		"Kwemerera abandi bayobozi b'ibinyabiziga kugutambukaho",
		"Kugirango ubone neza ikindi kerekezo ushaka gufata",
		"Kugirango ufashe abandi bose bakoresha umuhanda icyo ushaka gukora ",
        "Kwemerera abandi bayobozi b'ibinyabiziga kukunyura muruhande rw'ibumoso"
	    
		
		]
		
	},

	{
		
		numb: 6,
		question:"Utwaye ikinyabiziga inyuma ya romoruki.umuyobozi wayo akaguha ikimenyetso cyo kumutambukaho iburyo kandi ugana ibumoso, wakora iki ?",
		answer: 0,
		options:[
		" Kugabanya umuvuduko ukareka akagenda ",
		" Gukomeza iburyo bwawe",
        " Kumunyuraho iburyo bwe ",
		"Kugumana umuvuduko wari ufite ukamuvugiriza ihoni" 
		]
	},{
		
		numb: 7,
		question:"Iki cyapa kivuga:<br><img src='image/Capture62.jpg'height=250/></br>",
		answer:1,
		options:[
		" ifungana ry'umuhanda iburyo",
		" ifungana ry'umuhanda w'akayira gasatira umuhanda ibumoso",
        "akayira gato ",
		"nta gisubizo cy'ukuri kirimo"
		
		
		]
	},{
		
		numb: 8,
		question:"Wegereye inzira y'abanyamaguru ugasanga bategereje kwambuka. Ugomba gukora iki?",
		answer:1,
		options:[
		"Kureka abakuze n'abafite ubumuga bagatambuka mbere",
		"Kugabanya umuvuduko witegura guhagarara",
        " Gukoresha amatara abamenyesha kwambuka",
		"Gukoresha ibimenyetso byamaboko bibemerera kwambuka"
		]
	},{
		
		numb: 9,
		question:"Kumanywa urumuri rudahagije hatabona neza Ni ayahe matara y'urugendo ugomba gukoresha",
		answer: 1,
		options:[
		"Amatara yo kubisika na matara kamenabihu",
		"  Amatara kamena-bihu y'imbere",
         "Amatara yo kubisikana",
		 "Amatara kamena-bihu y'inyuma "
		]
	},{
		
		numb: 10,
		question:"Niyihe mpamvu ituma tugomba kugabanya umuvuduko mugihe hari ibihu ?",
		answer: 3,
		options:[
		
		"Igihe feri idakora ",
		" Igihe uhumishijwe n'amatara yo kubisikana",
         "Igihe moteri imara ngo izime",
		" Nuko biba bitoroshye kubona ikiri imbere"
		
		]
	},{
		
		numb: 11,
		question:"Niki ugomba gukora igihe uhagaze ku muhanda igihe cy'ibihu?",
		answer:  0,
		options:[
		" Kureka amatara ndanga akaguma yaka ",
		"Kureka amatara yo k'ubisikana na kamena-bihu akaguma yaka",
         "Kureka amatara yo kubisikana akaguma yaka ",
		 "Kureka amatara y'urugendo akaguma yaka"
		
		
		]
	},{
		
		numb: 12,
		question:"Icyi cyapa gisobanura :<br><img src='image/Capture63.jpg'height=250/></br>",
		answer: 0,
		options:[
		"ntihanyurwa mu byerekezo byombi",
		"ntihanyurwa n'abandi uretse abahatuye",
        "hanyurwa mu cyerekezo kimwe gusa ",
		 "nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 13,
		question:"Ni hehe byemewe kunyuranaho munzira y'icyerekezo kimwe?",
		answer: 0,
		options:[
		"ku gisate kiri Ibumoso bw'umuhanda  ",
		" Kunyuranaho ntibyemewe",
        "Ku gisate kiri iburyo bw'umuhanda gusa ",
		 "Ku gisate cy'ibumoso cyangwa iburyo"
		
		]
	},{
		
		numb: 14,
		question:" N'uwuhe muntu ushobora gusimbura ibimenyetso byo mumuhanda, dutegetswe kubaha? ",
		answer: 2,
		options:[
		"  Umuyobozi w'ikinyamitende  ",
		" Umunyamaguru  ",
        " Umukozi ubifitiye ububasha",
		 "Umuyobozi wa bisi"
		]
	},{
		
		numb: 15,
		question:"Ikinyabiziga gishya gikenerwa gusuzumwa bwambere nyuma y'igihe kingana iki ?",
		answer:1,
		options:[
		"Nyuma y'umwaka umwe ",
		" Nyuma y'imyaka ibiri",
        " A na b ni ibisubizo by'ukuri",
		 "nta gisubizocy'ukuri kirimo"
		
		]
	},{
		
		numb: 16,
		question:"Iki cyapa kivuga::<br><img src='image/Capture64.jpg'height=250/></br>", 
		answer:  0,
		options:[
		"ikoni iburyo",
		"akazamuko gashinze cyane",
        "akamanuko gashobora gutera ibyago",
		"b na c byose ni ukuri"
		
		]
	},{
		
		numb: 17,
		question:"Ni ryari ushobora kwakiriza icyarimwe amatara yose ndangacyerekezo y'ikinyabiziga ?",
		answer: 2,
		options:[
		"Mu gihe ushaka kuburira abandi bakoresha umuhanda ",
		"Mu gihe ikinyabiziga cyawe gishobora guteza ibyago",
        " A na B n'ibisubizo by'ukuri ",
		" nta gisubizo cy'ukuri kirimo"
		]
	},{
		
		numb: 18,
		question:"Ugeze ahabereye impanuka yo mumuhanda bwambere ugasanga abakomeretse bikomeye. wakiriza icyarimwe amatara y'ibyerekezo byombi, niki kindi ushobora gukora?",
		answer:0,
		options:[
			
		"Kumenya neza niba imbangukiragutabara yahamagawe ",
		"Guhagarika ibinyabiziga bindi no kubasaba ubufasha",
        "A na b ni ibisubizo by'ukuri ",
		 "Nta gisubizo cy'ukuri  "
		
		]
	},{
		
		numb: 19,
		question:"Wakoze impanuka yo mu muhanda , ni ikihe cyangombwa polisi ishobora kugusaba kucyerekana ?",
		answer:   1,
		options:[
			
		 " Icyemezo cy'iyandikwa ryi ikinyabiziga",
		"Uruhusa rwa burundu rwo gutwara ikinyabiziga",
        " Uruhushya rw'agateganyo",
		 "Imikorere y'ikinyabiziga "
		]
	},{
		
		numb: 20,
		question:"Mugihe ikinyabiziga cyacu bakinyuzeho",
		answer:0,
		options:[
		"Tugomba kugabanya umuvuduko",
		"Tugomba kongera umuvuduko ",	
		"Tugomba kongera umuvuduko n'ubwitonzi",
		" nta gisubizo cy'ukuri kirimo"
		
		]
	},
];