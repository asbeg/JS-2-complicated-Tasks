'use strict'

const isString = function (string) {
    if (typeof string !== 'string'){
        return ("B качестве аргумента передана не строка");
    }else if (string.length > 30){
        string = string.trim();
        return string.slice(0, 30) + '...';
    }
}

console.log("Test 1:", isString("             Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)           "));
console.log("Test 2:", isString(50));
