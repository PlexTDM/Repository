let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let Interval;
let running = false;
buttonStart.onclick = function() {
	clearInterval(Interval);
	Interval = setInterval(startTimer, 10);
	running = true;
}
buttonStop.onclick = function() {
	clearInterval(Interval);
	running = false;
}
buttonReset.onclick = function() {
	clearInterval(Interval);
	tens = '00';
	seconds = '00';
	appendTens.innerHTML = "00";
	appendSeconds.innerHTML = "00";
	let clr = document.querySelector('listclass');
	document.getElementById("laps").innerHTML = ""
}
function startTimer () {
	tens++;
	if(tens < 9){
	  	appendTens.innerHTML = "0" + tens;
	}
	if (tens > 9){
	  	appendTens.innerHTML = tens;
	}
	if (tens > 99) {
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	}
	if (seconds > 9){
	  	appendSeconds.innerHTML = seconds;
	}
}
function lap(){
	if(running){
		let lst = document.createElement('li');
		let display = document.getElementById('laps');
		lst.classList.add("listclass");
		lst.innerHTML = seconds + ':' + tens;
		display.appendChild(lst);
	}
}