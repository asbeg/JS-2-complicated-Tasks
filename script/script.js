const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = ['января', 'февраля', 'марта', 'апреля', 'мае', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const date = new Date();

const d = date.getDate();
const m = date.getMonth() + 1;
const y = date.getFullYear();

const h = date.getHours();
const m1 = date.getMinutes();
const s = date.getSeconds();
const dayIndex = date.getDay()

const monthRu = month[m];
const dayName = week[dayIndex];

let dateString = `${functionB(d)}.${functionB(m)}.${y}-${functionB(h)}.${functionB(m1)}.${functionB(s)}`;

const formattedString = `Сегодня ${dayName}, ${d} ${monthRu} ${y} года, ${h} ${functionA(h)} ${m1} минут ${s} секунд`;

const p = document.createElement('p');
p.innerHTML = dateString;
document.body.appendChild(p);

const p1 = document.createElement('p');
p1.innerHTML = formattedString;
document.body.appendChild(p1);

// 1 a
function functionA(n) {
    let text_forms = ['час', 'часа', 'часов'];
    n = Math.abs(n) % 100;
    let n1 = n % 10;

    if (n > 10 && n < 20) {
        return text_forms[2];
    } else if (n1 > 1 && n1 < 5) {
        return text_forms[1];
    } else if (n1 === 1) {
        return text_forms[0];
    } else {
        return text_forms[2];
    }
}

// 2 b
function functionB(n) {
    if (n > 0 && n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

