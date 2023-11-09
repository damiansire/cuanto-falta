function updateCoutdownInScreen({ hours, minutes, seconds }) {
  document.getElementById("countdown-hours").innerHTML = hours;
  document.getElementById("countdown-minutes").innerHTML = minutes;
  document.getElementById("countdown-seconds").innerHTML = seconds;
}

export { updateCoutdownInScreen };