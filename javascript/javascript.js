const compass = document.querySelector('.compass');
const speedEl = document.querySelector('.speed');

navigator.geolocation.watchPosition((position) => {
  const { speed, heading } = position.coords;
  console.log(speed, heading);
  compass.style.transform = `rotate(${heading}deg)`;
  speedEl.textContent = speed;
}, (err) => {
  console.error(err);
});
