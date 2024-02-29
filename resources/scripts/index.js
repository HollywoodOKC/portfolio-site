const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();

const changeBtn1 = () => {
    button1.style.backgroundColor = 'hsl(356, 100%, 67.5%)';
    button1.style.color = 'hsl(0, 0%, 100%)';
}

const changeBtn2 = () => {
    button2.style.backgroundColor = 'hsl(356, 100%, 67.5%)';
    button2.style.color = 'hsl(0, 0%, 100%)';
}

const changeBtn1Back = () => {
    button1.style.backgroundColor = 'hsl(0, 0%, 100%)';
    button1.style.color = 'hsl(0, 0%, 0%)';
}

const changeBtn2Back = () => {
    button2.style.backgroundColor = 'hsl(0, 0%, 100%)';
    button2.style.color = 'hsl(0, 0%, 0%)';
}

button1.addEventListener('mouseover', changeBtn1);
button1.addEventListener('mouseout', changeBtn1Back);
button2.addEventListener('mouseover', changeBtn2);
button2.addEventListener('mouseout', changeBtn2Back);