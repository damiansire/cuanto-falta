import { getRemaingTime } from './lib/date.js';
import { updateCoutdownInScreen } from './lib/dom-handler.js';

const targetDate = "Nov 15, 2023 21:00:00"

const x = setInterval(function () {

  const remainingTime = getRemaingTime(targetDate)
  updateCoutdownInScreen(remainingTime)

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "¡Tiempo expirado!";
  }
}, 1000);

