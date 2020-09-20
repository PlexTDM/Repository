score = [0, 0];
activePlayer = 0;
roundScore = 0;
playing = true;
winnerPlayer = activePlayer+1;
var input = document.getElementById('input')
input.innerText = 100
//    var yalahOnoo;
//    if(input){
//        yalahOnoo = input;
//    }
//    else{
//        yalahOnoo = 100;
//    }

document.querySelector('.btn-roll').addEventListener('click', function(){
	if (playing){
         //Dice 1
		dice = Math.floor(Math.random() * 6) + 1;
		diceImg = document.querySelector('#dice');
		diceImg.src = './assets/images/dice-' + dice + '.png';
        //Dice 2
		dice1 = Math.floor(Math.random() * 6) + 1;
		diceImg1 = document.querySelector('#dice1');
		diceImg1.src = './assets/images/dice-' + dice1 + '.png';
		if (dice !== 1){
			document.querySelector('#score-' + activePlayer).innerText = score[activePlayer];
			roundScore = roundScore + dice + dice1;
			document.querySelector('#current-' + activePlayer).innerText = roundScore;
		}
		else{
			changePlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if (playing){
		score[activePlayer] += roundScore;
		document.querySelector('#score-' + activePlayer).innerText = score[activePlayer];
		if (score[activePlayer] >= input.value){
		    document.querySelector('#score-' + activePlayer).innerText = score[activePlayer];
			alert("Player "+ winnerPlayer +" WON!");
			playing = false;
		}else {
			changePlayer();
		}
	}
});
function changePlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.getElementById('current-0').innerText = 0;
	document.getElementById('current-1').innerText = 0;
};