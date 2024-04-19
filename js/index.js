let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let bill = document.getElementById("bill");

let startTime = new Date();
setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML =
    (currentTime.getHours() < 0 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 0 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 0 ? "0" : "") + currentTime.getSeconds();

  let elapsedTimeInMinutes = (currentTime - startTime) / (1000 * 60);

  let ratePerMinute = 5;

  let totalBill = elapsedTimeInMinutes * ratePerMinute;

  bill.innerHTML = `$${totalBill.toFixed(2)}`;
}, 1000);

//
