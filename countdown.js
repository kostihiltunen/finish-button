// Date and time 60 minutes from now
var countDownDate = new Date().getTime() + 1000 * 60 * 60.02;

var x = setInterval(function () {
  // Date and time right now
  var toBeReduced = new Date().getTime();
  // Distance between now and countDownDate
  var distance = countDownDate - toBeReduced;
  // Time calculations for minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id
  document.getElementById("counter").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";

  // This happens if count down is over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML =
      "завершение работы системы /nSystem shutdown";
  }
}, 1000);
