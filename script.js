'use strict';

//calc local current time

// const day = String(curTime.getDay()).padStart(2, '0');
// const month = String(curTime.getMonth() + 1).padStart(2, '0');
// const year = String(curTime.getFullYear()).padStart(2, '0');
// const time = `${day}/${month}/${year}, ${hour}:${min}`;

// const hour = String(curTime.getHours()).padStart(2, '0');
// const min = String(curTime.getMinutes()).padStart(2, '0');

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

// implementing StopWatch
const implementing = function () {
  document.querySelector('.reset').disabled = true;

  //start btn
  document.querySelector('.start').addEventListener('click', function () {
    document.querySelector('.start').disabled = true;
    document.querySelector('.pause').disabled = false;
    document.querySelector('.reset').disabled = false;

    var calcCounter = setInterval(function () {
      counter++;

      let counterMin = String(Math.trunc(counter / 60)).padStart(2, '0');
      let counterSec = String(Math.trunc(counter % 60)).padStart(2, '0');
      document.querySelector(
        '.crono-text'
      ).textContent = `${counterMin}:${counterSec}`;
    }, 1000);

    //reset btn
    document.querySelector('.reset').addEventListener('click', function () {
      counter = -1;
      document.querySelector('.crono-text').textContent = '00:00';
    });

    //pause btn
    document.querySelector('.pause').addEventListener('click', function () {
      document.querySelector('.start').disabled = false;
      document.querySelector('.pause').disabled = true;

      clearInterval(calcCounter);
    });
  });
  let counter = 0;
};

implementing();

const cookieScrlBtn = document.querySelector('.cookie__btn');

const scroolTo = document.querySelector('.cookie__agree');

cookieScrlBtn.addEventListener('click', function () {
  scroolTo.scrollIntoView({ behavior: 'smooth' });
});
