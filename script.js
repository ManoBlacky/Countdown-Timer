// get elements for querySelectors ;

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

var stop = setInterval(function timeout() {

    const currentDate = new Date();

    const currentYear = new Date().getFullYear()+1;

    const userValue = new Date(`jan${currentYear},1`);  // user values ;

    const diff = userValue - currentDate;  // find different


    const d = Math.floor((diff / 1000 / 60 / 60 / 24));
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;

    if (d <= 0 & h <= 0 & m <= 0 & s <= 0) {
        clearInterval(stop);
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
    }

}, 1000);