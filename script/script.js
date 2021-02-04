'use strict';
// 1
const arr = ['556', '424', '242', '565', '789', '987', '255'];

function searchNumber(item) {
    //indexOf если знач не найдено возвр -1
    if (item.indexOf('2') === 0 || item.indexOf('4') === 0) {
        return item;
    }
}

const startsWith = arr.filter(searchNumber);

console.log(startsWith);

// 2

for (let i = 1; i <= 100; i++) {
    let a = 0;
//влож цикл
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            //если число не простое
            //остльные - простые(а===0)
            a = 1;
            break;
        }
    }
    if (i > 1 && a === 0) {
        console.log("Делители этого числа: 1 и ", i);
    }
}