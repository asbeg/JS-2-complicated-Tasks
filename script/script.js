let num = 266219;
let result = 1;

function arr(a) {
    return num = Array.from(String(a), Number);
}
arr(num);

for (let i = 0; i < num.length; i++){
    result = result * num[i];
}

let power = result ** 3;

console.log("Array: ", num);
console.log("Result: ", result);
console.log('result pow: ', power);
console.log(String(power).slice(0, 2));