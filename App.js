

var scores, dice, activePlayer, scoreRound, isGamePlaying;


 newGame()

// document.querySelector("#current-" + activePlayer).textContent = dice;


function newGame() {
    isGamePlaying = true;
    scores = [0,0];
    activePlayer = 0;
    scoreRound = 0;

document.querySelector('.dice').style.display = "none";
document.getElementById('score-0').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-1').textContent = "0";

document.getElementById('name-0').textContent = "Player 1";
document.getElementById('name-1').textContent = "Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');



    
}

document.querySelector(".btn-roll").addEventListener("click",function() {

    if(isGamePlaying) {
   
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceImage = document.querySelector('.dice');
        diceImage.style.display = "block";
        diceImage.src = "images/dice-" + dice + '.png';
    
    
        if(dice !== 1) {
    
            scoreRound += dice;
            document.querySelector("#current-" + activePlayer).textContent = scoreRound;
    
        }else {
           
                nextPlayer();
    
            }
    
    }

   
})



document.querySelector('.btn-hold').addEventListener('click', function() {

    if(isGamePlaying) {

        
    scores[activePlayer] += scoreRound;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100) {

        document.querySelector('#name-' + activePlayer).textContent = "Winner!";
        document.querySelector('.dice').style.display = "none";
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        isGamePlaying = false;


    }else {
        nextPlayer();
    }
    
    }


});



function nextPlayer() {
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
    scoreRound = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

   document.querySelector('.dice').style.display = 'none';

}



document.querySelector('.btn-new').addEventListener('click',newGame);