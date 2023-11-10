function updateCoutdownInScreen({ days, hours, minutes, seconds }) {
  document.getElementById("countdown-hours").innerHTML = (hours + days * 24).toString().padStart(2, '0');
  document.getElementById("countdown-minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("countdown-seconds").innerHTML = seconds.toString().padStart(2, '0');

  document.getElementById("remainingDays").innerHTML = days.toString();
  document.getElementById("remainingHours").innerHTML = hours.toString();
}

export { updateCoutdownInScreen };