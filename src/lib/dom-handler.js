function updateCoutdownInScreen({ hours, minutes, seconds }) {
  document.getElementById("countdown-hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("countdown-minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("countdown-seconds").innerHTML = seconds.toString().padStart(2, '0');
}

export { updateCoutdownInScreen };