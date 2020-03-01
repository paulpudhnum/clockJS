const secondHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // console.log(seconds);
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // console.log(minutes);
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  // console.log(hours);
}

setInterval(setDate, 1000);

setDate();
