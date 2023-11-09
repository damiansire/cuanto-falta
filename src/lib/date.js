function getRemaingTime(targetDate) {
  const countdownDate = new Date(targetDate).getTime();
  const now = new Date().getTime();

  const distance = countdownDate - now;

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return { hours, minutes, seconds }
}

export { getRemaingTime };