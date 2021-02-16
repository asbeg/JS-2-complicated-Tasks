const btn = document.getElementById('change'),
color = document.getElementById('color');

function randomColor() {
    let newColor = Math.floor(Math.random() * 16777216).toString(16);
    document.body.style.backgroundColor = "#" + newColor;
    color.innerHTML = "#" + newColor;
}

btn.addEventListener('click', randomColor);
randomColor();