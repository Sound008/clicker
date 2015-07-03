var Uscore = 0;
var highscore = 1000000;
var press = function() {
	Uscore++;
	document.getElementById('score').innerHTML = "Your Virus strength: " + Uscore;
	if (Uscore > highscore) { 
		alert("You wasted a lot of time.");
	}
	if (Uscore > 4999) {
		alert("STOP. YOU WASTED ENOUGH TIME. Are you sure you want to continue? I'm not going to try and stop you. You have been warned.");
		}
	if (Uscore > 999) {
		alert("Alright, just give up. We know you're an idiot already.");
	}
	if (Iscore > 1999) {
		alert("Seriously, just STOP!");
	}
};