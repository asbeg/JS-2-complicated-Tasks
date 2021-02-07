
function generateOddNumber(x, y) {
    let min = Math.min(x, y);
    let max = Math.max(x, y);
    let z = max - min;

    let number = Math.floor(Math.random() * z / 2) * 2 + 1;

    console.log(number);
}

generateOddNumber(1, 100);
generateOddNumber(0, -10);
generateOddNumber(-7, -3);
generateOddNumber(-100, 100);
generateOddNumber(1, -1);
