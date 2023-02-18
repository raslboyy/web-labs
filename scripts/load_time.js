
function showLoadTime(time) {
  var place = document.getElementById("load-time");
  place.textContent = `Page load time is ${time} seconds`;
}

addEventListener('DOMContentLoaded', (event) => {
  var time = (event.timeStamp / 1000).toPrecision(3);
  showLoadTime(time);
});