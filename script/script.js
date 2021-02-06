'use strict';


const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },

    start = function () {
        let count = 9;
        let x = Math.floor(Math.random() * 101);
        console.log(x);
        return doCheck();

        function doCheck() {
            let userPoint = prompt('Угадай число от 1 до 100...');
            if (userPoint === null || (count === 0 && userPoint != x)) {
                alert('Игра окончена!');
            } else if (!isNumber(userPoint)) {
                alert('Введи число');
                doCheck();
            } else if (Number(userPoint) < x) {
                alert('Загаданное число больше, осталось попыток ...' + count);
                count--;
                console.log(count);
                doCheck();
            } else if (Number(userPoint) > x) {
                alert('Загаданное число меньше, осталось попыток ...' + count);
                count--;
                console.log(count);
                doCheck();
            } else if (Number(userPoint) === x) {
                alert('Поздравляю, Вы угадали!!!');
                startAgain();
            }
        }

        function startAgain() {
            let question = confirm('Хотели бы сыграть еще?');
            if (question) {
                start();
            } else alert("Прощай!");
        }
    }

start();