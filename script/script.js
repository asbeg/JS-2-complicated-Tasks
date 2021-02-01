'use strict'

const lang = prompt('', 'en/ru');

const ru = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const en = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if (lang === 'ru'){
    console.log(ru);
} else {
    console.log(en);
}

switch (lang){
    case 'ru':
        console.log(ru);
        break;
    case 'en':
        console.log(en);
        break;
}

const array = {
    'ru': ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    'en': ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};
console.log(array[lang]);

// *2
//условие ? выражение1 : выражение2

const namePerson = '';
console.log((namePerson === 'Артем') ? 'директор' :
    (namePerson === 'Максим') ? 'преподаватель' :
        'студент');