const start_btn= document.querySelector(".start_btn button");
const info_box= document.querySelector(".info_box");
const exit_btn= info_box.querySelector(".buttons .quit");
const continue_btn= info_box.querySelector(".buttons .restart");
const quiz_box= document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const timercount= quiz_box.querySelector(".timer .timer_sec");
const timeOff= quiz_box.querySelector("header .time_text"); 
const option_list = document.querySelector(".option_list");
const restart_btn= result_box.querySelector(".buttons .restart_quiz");
const quit_btn = result_box.querySelector(".buttons .quit");
const form=document.querySelector(".form");


start_btn.onclick=()=>{
	
	info_box.classList.add("activeinfo");//show info box
}

exit_btn.onclick=()=>{
	info_box.classList.remove("activeinfo");//hide infobox
}

continue_btn.onclick=()=>{
	info_box.classList.remove("activeinfo");
	quiz_box.classList.add("activequiz");
	showquestions(0);	
	quecounter(1);
	updateCountdown(20);
}

let que_count= 0;
let que_numb = 1;
let counter;
let userScore = 0;
const next_btn = quiz_box.querySelector(".next_btn");
restart_btn.onclick = ()=>{
window.location.reload();
timeOff.textContent="time left";
}
quit_btn.onclick =()=>{
	window.location.reload();
}

next_btn.onclick = ()=>{
	if(que_count < questions.length - 1){
	que_count ++;
	que_numb ++;
    showquestions(que_count);
	quecounter(que_numb);
    
	timeOff.textContent="time left";
}else{
	clearInterval(timercount);
	console.log("questions completed");
	showResultBox();
	
}if(que_count == questions.length - 1){
	next_btn.textContent="SOZA";
}
}

//getting questions and options from array

function showquestions(index){
	const que_text = document.querySelector(".que_text");
	
	let que_tag = '<span>'+ questions[index].numb + " . " + questions[index].question+'</span>';
	
   let option_tag ='<div class="option">'+"<input type='checkbox' id ='choice' >" + questions[index].options[0] +'<span></span></div>'
		+ '<div class="option">'+"<input type='checkbox' id ='choice' >" + questions[index].options[1] +'<span></span></div>'
	 + '<div class="option">'+"<input type='checkbox' id ='choice' >" + questions[index].options[2] +'<span></span></div>'
	  + '<div class="option">'+"<input type='checkbox' id ='choice' >" + questions[index].options[3] +'<span></span></div>';
	   
	que_text.innerHTML = que_tag;
	option_list.innerHTML = option_tag;
const option = option_list.querySelectorAll(".option");
	

	for (let i=0; i< option.length; i++){
		option[i].setAttribute("onclick", "optionchecked(this)");
	}
	
	
}

let tickicon ='<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
let crossicon ='<div class="icon x"><i class="fa-solid fa-xmark"></i></div>';




function optionchecked(answer){
	let userAns = answer.textContent;
	let correctAnswer = questions[que_count].answer;
	let allOptions = option_list.children.length;
	if(userAns == correctAnswer){
		userScore +=1;
	    console.log(userScore);
		answer.classList.add("corre");
		console.log("answer is correct");
		answer.insertAdjacentHTML("beforeend", tickicon);
		
	}else{
		answer.classList.add("incorrect");
		console.log("answer is wrong");
		answer.insertAdjacentHTML("beforeend", crossicon);
		
		for(let i = 0; i < allOptions; i++){
		if(option_list.children[i].textContent == correctAnswer){
		option_list.children[i].setAttribute("class", "option corre");
		option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
	}
}	
}
	//once user selected disabled all options
for(let i=0; i < allOptions; i++){
	option_list.children[i].classList.add("disabled");
}		
}



//TIMER
const startingMinutes = 20;
let time = startingMinutes*60;
counter = setInterval(updateCountdown, 1000);
function updateCountdown(){
	const minutes =Math.floor(time/60);
	let seconds = time % 60;
	seconds = seconds < 10 ? '0' + seconds:seconds;
	timercount.innerHTML = `${minutes}: ${seconds}`;
	time--;
	if(time<0){
	
			clearInterval(startingMinutes);
			timercount.textContent="00";
			timeOff.textContent="TIME OFF";
			showResultBox();
		}
	
	}




function showResultBox(){
	info_box.classList.remove("activeinfo");//hide infobox
	quiz_box.classList.remove("activequiz");
	result_box.classList.add("activeresult");
	const scoreText = result_box.querySelector(".score_text");
if( userScore > 11){
let scoreTag = '<span>WATSINZE, ubonye<p>' + userScore + '</p>/<p>'+questions.length+ '</p> </span>';
		scoreText.innerHTML = scoreTag;
	scoreText.setAttribute("style", "color:green");
}else if(userScore < 12){
let scoreTag = '<span>watsinzwe, ubonye<p>' + userScore + '</p>/<p>' + questions.length + '</p> </span>';
		scoreText.innerHTML = scoreTag;
	scoreText.setAttribute("style", "color:red");
}else{
let scoreTag = '<span>Wagerageje ,ubonye<p>' + userScore + '</p>/<p>' + questions.length + '</p> </span>';
		scoreText.innerHTML = scoreTag;
	scoreText.setAttribute("style", "color:yellow");
	}
		
}




function quecounter(index){
	const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalquescountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>questions</span>';
bottom_ques_counter.innerHTML = totalquescountTag;
}