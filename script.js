'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelectorAll('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 14;
// console.log((document.querySelector('.guess').value = 14));

let secretNum = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message){
  document.querySelector('.message').textContent = message
};


document.querySelector('.check').addEventListener
('click', function(){
   const guess = Number(document.querySelector('.guess').value); 
   console.log(typeof guess, guess);
  //  document.querySelector('.number').textContent = secretNum;


   //when there is no input number
  if(!guess){
    // document.querySelector('.message').textContent = "⛔ No number!";
    displayMessage('⛔ No number!');

    //when a player wins
  }else if (guess === secretNum){
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNum;
    score += 3;
    document.querySelector('.score').textContent = score

    // document.querySelector('header').style.backgroundColor = 'blue';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').
      textContent = highscore;
    }

    //when the guess is wrong
  }else if(guess !== secretNum){
     if (score > 1) {
    //   document.querySelector('.message').textContent = 
    //   guess > secretNum ? '📈 Too high!' : '📉 Too low!';
    displayMessage(guess > secretNum ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
 
     } else {
        //  document.querySelector('.message').textContent =
        //   'Sorry 😔..You lose the game!';
        displayMessage('Sorry 😔..You lose the game!');
         document.querySelector('.score').textContent = 0;
         document.querySelector('body').style.backgroundColor = 'red';
     }


  }
    //when the guess is too high
  // }else if(guess > secretNum){
  //   if (score > 1) {
  //    document.querySelector('.message').textContent = '📈 Too high!';
  //    score--;
  //    document.querySelector('.score').textContent = score;
  //    document.querySelector('body').style.backgroundColor = '#222';

  //   } else {
  //       document.querySelector('.message').textContent =
  //        'Sorry 😔..You lose the game!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //   }
  //  //when the guess is too low  
  // }else if(guess < secretNum){
  //   if (score > 1){
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('body').style.backgroundColor = '#222';

  //   }else{
  //       document.querySelector('.message').textContent = 'Sorry 😔..You lose the game!'
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }

});

document.querySelector('.again').addEventListener
('click', function(){
  score = 20;
  secretNum = Math.trunc(Math.random()* 20) + 1;

  document.querySelector('body').style.backgroundColor ='#222';
  document.querySelector('.score').textContent = 20
  // document.querySelector('.message').textContent = 'Start guessing...'
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});