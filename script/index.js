/*
const months1 = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const date = new Date();
const year = date.getFullYear()
const dateToday = date.getDate()
const monthIndex = date.getMonth()
const monthName = months1[monthIndex];
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const dayIndex = date.getDay()
const dayName = days[dayIndex];

const formattedA = `${dateToday}.${monthIndex}.${year}`;
const formattedB = `${date.toLocaleDateString()}-${date.toLocaleTimeString()}`;
const formatted = `Сегодня ${dayName}, ${dateToday} ${monthName} ${year} года, ${hour} ${functionA(hour)} ${minute} минут ${second} секунд`;
console.log(formatted);
console.log(formattedB);
console.log(formattedA)
console.log(date, date.getFullYear(), date.getMonth());



function functionB(n) {
    if (n > 0 && n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

console.log(functionB(date.getMinutes()));


const p = document.createElement('p');
p.innerHTML = formatted;
document.body.appendChild(p);

const p1 = document.createElement('p');
p1.innerHTML = formattedB;
document.body.appendChild(p1);

// (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y*/
