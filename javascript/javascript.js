const compass = document.querySelector('.compass');
const speedEl = document.querySelector('.speed');

navigator.geolocation.watchPosition((position) => {
  const { speed = 0, heading = 0 } = position.coords;
  console.log(speed, heading);
  compass.style.transform = `rotate(${heading}deg)`;
  speedEl.textContent = speed;
}, (err) => {
  console.error(err);
});
