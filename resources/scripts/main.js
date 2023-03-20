const time = document.getElementById('time');

const theTime = () => {
    const t = new Date();
    const hours = t.getHours();
    const mins = t.getMinutes();
    const secs = t.getSeconds();
    const  myTime = `${hours}:${mins}:${secs}`;
    time.innerHTML = myTime;
}

setInterval(theTime, 1000);