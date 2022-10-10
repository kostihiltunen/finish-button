var Gpio = require("onoff").Gpio;

var pushButtonB = new Gpio(27, "in", "both");

var endTime = new Date().getTime() + 1000 * 60 * 0.1;

var timer = setInterval(function () {
// local variable for time at right this moment(current time)
let now = new Date().getTime();
// local variable for remaining from this moment to the endDate variable
let t = endTime - now;

if (t >= 0) {
    // calculations for changing UTC time from(magic number, I know)
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("timer-hours").innerHTML =
    ("0" + hours).slice(-2) + "<span class='label'>HR(S)</span>";

    document.getElementById("timer-mins").innerHTML =
    ("0" + mins).slice(-2) + "<span class='label'>MIN(S)</span>";

    document.getElementById("timer-secs").innerHTML =
    ("0" + secs).slice(-2) + "<span class='label'>SEC(S)</span>";
} else {
    self.location="gameover.html";
}
}, 1000);


pushButtonB.watch(function (err, value) {
  if (err) {
    console.log("There was an error", err);
    return;
  }
  if (value === 1) {
    self.location = "nappikello1.html";
  }
});