var Gpio = require("onoff").Gpio;

var pushButtonA = new Gpio(17, "in", "both");

pushButtonA.watch(function (err, value) {
  if (err) {
    console.log("There was an error", err);
    return;
  }
  if (value === 1) {
    self.location = "nappikello1.html";
  }
});
