var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');
var sec;
function hexClock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
  var hexColorStr = '#' + 'f2' + 'e4' + ('f'+seconds%10);
   
  clock.textContent = clockStr;
  hexColor = hexColorStr;
document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);