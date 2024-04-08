'use strict';

//local current TIME
const curTime = new Date();

const option = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const timeTest = new Intl.DateTimeFormat('fa-IR', option).format(curTime);

//show time to ui
document.querySelector(
  '.current-time'
).textContent = `Local Time: ${timeTest}  `;

//ADD btn
let timer = 0;

document.querySelector('.add').addEventListener('click', function () {
  timer++;

  const min = String(Math.trunc(timer / 60)).padStart(2, '0');
  const sec = String(Math.trunc(timer % 60)).padStart(2, '0');

  const calcTimer = `${min}:${sec}`;
  document.querySelector('.Timer-text').textContent = calcTimer;
});

//REMOVE btn
document.querySelector('.remove').addEventListener('click', function () {
  if (timer > 0) timer--;

  const min = String(Math.trunc(timer / 60)).padStart(2, '0');
  const sec = String(Math.trunc(timer % 60)).padStart(2, '0');

  const calcTimer = `${min}:${sec}`;
  document.querySelector('.Timer-text').textContent = calcTimer;
});

//START btn
document.querySelector('.start').addEventListener('click', function () {
  document.querySelector('.start').disabled = true;
  document.querySelector('.pause').disabled = false;

  const calcCounter = setInterval(function () {
    if (timer > 0) timer--;

    const min = String(Math.trunc(timer / 60)).padStart(2, '0');
    const sec = String(Math.trunc(timer % 60)).padStart(2, '0');

    const calcTimer = `${min}:${sec}`;
    document.querySelector('.Timer-text').textContent = calcTimer;
  }, 1000);

  document.querySelector('.reset').addEventListener('click', function () {
    timer = 0;
    document.querySelector('.Timer-text').textContent = '00:00';
  });

  //PAUSE btn
  document.querySelector('.pause').addEventListener('click', function () {
    document.querySelector('.start').disabled = false;
    document.querySelector('.pause').disabled = true;

    clearInterval(calcCounter);
  });
});

////////////////////////////////

// const startlogin = function () {
//   let time = 10;

//   setInterval(function () {
//     console.log(`here is your time : ${time}`);

//     time--;
//   }, 1000);
// };

// startlogin();
// //srat decrease every sec
