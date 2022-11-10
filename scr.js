const questionNumber= document.querySelector(".question-number");
const questionText= document.querySelector(".question-text");
const optionContainer= document.querySelector(".option-container");
const homebox= document.querySelector(".home-box");
const quizbox = document.querySelector(".quiz-box");
const resultbox= document.querySelector(".result-box");
const timercount= document.querySelector(".timer .timer_sec");
const timeOff= document.querySelector("header .time_text"); 
const form = document.querySelector(".form");


let quecount=0;
let currentque;
let availableQue=[];
let availableOpt=[];
let correctAns= 0;
let attempt = 0;
let que_numb = 1;
//push the question into availablequestion array


function setAvailableQue(){
	
	const totalQue=quiz.length;
	for(let i=0; i<totalQue; i++){
		
		availableQue.push(quiz[i]);
	}
}

function getNewque(index){
	//set que number
	questionNumber.innerHTML = "Question" + " " + (quecount+1)+ " "+ "of" + " " +quiz.length;
	//set quest text
	//get random que
	const queindex=availableQue[Math.floor(Math.random()* availableQue.length)]
	currentque=queindex;
	questionText.innerHTML=currentque.question;
	//get the position of queindex from the availableque array
	
const index1=availableQue.indexOf(queindex);
	//remove queindex from the availableque array so that the question does not repeat
	
	availableQue.splice(index1,1);
	//set opt
	//get length of opt
	
	const optionlen=currentque.options.length
	//push lentht into availableopt array
	for(let i=0; i<optionlen; i++)
		{
			availableOpt.push(i);
		}
	optionContainer.innerHTML = '';
	let animationDelay = 0.15;
	//creat option in html
	for(let i=0; i<optionlen; i++){
	//random option
	const optindex = availableOpt[Math.floor(Math.random() * availableOpt.length)];
	//get the pos of optindex from the available option
	const index2 = availableOpt.indexOf(optindex);
	// remove the optindex  from the availableopt so that option does not repeat
    availableOpt.splice(index2,1);
	//create opt in html
	const option = document.createElement("div");
		option.innerHTML="<input type='checkbox' id ='choice' >"+" " + currentque.options[i];
		option.id=i;
		option.style.animationDelay = animationDelay + "s";
		animationDelay = animationDelay + 0.15;
		option.className = "option";
		optionContainer.appendChild(option);
		option.setAttribute("onclick", "getResult(this)");
	
	}
		
  quecount++
} 
function getResult(element){
	const id = parseInt(element.id);
	//get the answer by compparing the id clicked option
	if(id===currentque.answer){
		element.classList.add("correct");
		console.log("answer is correct");
		correctAns++;
				console.log(correctAns);
	}else{
		element.classList.add("incorrect");
		console.log("answer is wrong");
		const optionlen = optionContainer.children.length;
		for(let i = 0; i<optionlen; i++){
			if(parseInt(optionContainer.children[i].id)===currentque.answer){
				optionContainer.children[i].classList.add("correct");
				
			}
		}
	}
	attempt++
	unclickableOpt();
}

function unclickableOpt(){
	
	const optionlen = optionContainer.children.length;
	for (let i=0; i<optionlen; i++){
		optionContainer.children[i].classList.add("disabled")
	}
}
function next(){
	
	if (quecount === quiz.length){
		console.log("quiz is over");
		//quizOver();
		//que_numb ++
		//quecount(que_numb);
		
	}else{
		getNewque();
	}
}

function quizOver(){
	quizbox.classList.add("hide");
	resultbox.classList.remove("hide");
	quizResult();
}
//get quiz result
function quizResult()
{	
resultbox.querySelector(".total-question").innerHTML = quiz.length;
resultbox.querySelector(".total-attempt").innerHTML = attempt;
resultbox.querySelector(".total-correct").innerHTML = correctAns;
resultbox.querySelector(".total-wrong").innerHTML = 	attempt - correctAns;
const percentage= (correctAns/quiz.length)*100;
resultbox.querySelector(".percentage").innerHTML = percentage.toFixed()+ "%";
resultbox.querySelector(".score").innerHTML =	correctAns+ "/" +quiz.length;

}

function subiramo(){
	window.location.reload();
timeOff.textContent="time left";
}

function resetQuiz(){
quecount=0;
correctAns= 0;
 attempt = 0;

}
function startQuiz(){
	homebox.classList.add("hide");
	quizbox.classList.remove("hide");
	setAvailableQue();
	getNewque();
	timer();
	
}
//TIMER
function timer(){
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
				quizOver();
		}
	
	}
}
//const soza = document.querySelector("sbtn");
function sbtn(){
	quizOver();
}


 function prev(){
	 que_numb ++
	quecount(que_numb);
 }

function emeza(){
	form.classList.add("hide");
	homebox.classList.remove("hide");
}

window.onload = function(){
homebox.querySelector(".total-questions").innerHTML = quiz.length;
}