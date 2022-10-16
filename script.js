'use strict';

let confidentialNumber = Math.trunc(Math.random() * 50) + 1;
// document.querySelector('.number').textContent = confidentialNumber;
let finalScore = 50;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const userValue = Number(document.querySelector('.guess').value);
  console.log(userValue, typeof userValue);

  //Adde an Event to the "Again" button:
  document.querySelector('.again').addEventListener('click', function () {
    finalScore = 50;
    confidentialNumber = Math.trunc(Math.random() * 50) + 1;

    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = finalScore;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

  //When there is no number!
  if (!userValue) {
    document.querySelector('.message').textContent = '⛔️No number';

    //When the user wins:
  } else if (userValue === confidentialNumber) {
    document.querySelector('.number').textContent = confidentialNumber;
    document.querySelector('.message').textContent =
      '🤩🎉Congratulations You are Correct!';

    //Css Manipulation:

    //When there are two words property in css just like background-color,it supposed to be write in the camelcase form "backgroundColor" as give below and make sure that the value should be in the quotes or string.

    document.querySelector('body').style.backgroundColor = '#FF8C00';
    document.querySelector('.number').style.width = '280px';

    if (finalScore > highScore) {
      highScore = finalScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    //The correct guessing no should be visible when the user guess the right number.So we have to keep the below code of line in this section.
    // document.querySelector('.number').textContent = confidentialNumber;

    // When the userinput is high or no is incorrect:
  } else if (userValue > confidentialNumber) {
    if (finalScore > 1) {
      document.querySelector('.message').textContent = '⬆️Your value is High!';
      ('⬇️Your value is Too Low!');
      finalScore--;
      document.querySelector('.score').textContent = finalScore;
    } else {
      document.querySelector('.message').textContent =
        '😔Sorry! You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //When the userinput is low or no is incorrect:
  } else if (userValue < confidentialNumber) {
    if (finalScore > 1) {
      document.querySelector('.message').textContent =
        '⬇️Your value is Too Low!';
      finalScore--;
      document.querySelector('.score').textContent = finalScore;
    } else {
      document.querySelector('.message').textContent =
        '😔Sorry! You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
