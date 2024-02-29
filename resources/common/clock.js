const time = document.getElementById('time');

function checkTime(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
};

const theTime = () => {
    const t = new Date();
    let hours = t.getHours();
    let mins = t.getMinutes();
    let secs = t.getSeconds();
    hours = checkTime(hours);
    mins = checkTime(mins);
    secs = checkTime(secs);
    const myTime = `${hours}:${mins}:${secs}`;
    time.innerHTML = myTime;
};

setInterval(theTime, 1000);

const myFunction = () => {
    let x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};