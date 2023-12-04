const body = document.body;
const button = document.querySelector('.button');
const hexCode = document.querySelector('.hex-code');

button.addEventListener('click', changeColor);

function getRandomArrEl(){
    const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    const randomNumber = Math.floor(Math.random() * array.length);
    const randomArrEl = array[randomNumber];

    return randomArrEl;
}

function changeColor() {
    const newHexCode = `#${getRandomArrEl()}${getRandomArrEl()}${getRandomArrEl()}${getRandomArrEl()}${getRandomArrEl()}${getRandomArrEl()}`;
    body.style.backgroundColor = newHexCode;
    hexCode.innerHTML = `Hex Code is: ${newHexCode}`;
}

