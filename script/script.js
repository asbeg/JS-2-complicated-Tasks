window.setInterval('refresh()', 1000);

const date = new Date();
//*** 9-a
const myDate = date.toLocaleDateString(),
    time = date.toLocaleTimeString('ru');

const dateString = `${functionB(myDate)}-${functionB(time)}`;
const p = document.createElement('p');
p.innerHTML = dateString;
document.body.appendChild(p);

//*** 9-b
const today = date.toLocaleString('ru', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    }),
    hour = date.getHours(),
    minute = date.getMinutes(),
    sec = date.getSeconds(),
    year = date.toLocaleString('ru', {year: 'numeric'}),
    hourStr = declNum(hour, ['час', 'часа', 'часов']),
    minStr = declNum(minute, ['минута', 'минуты', 'минут']),
    secStr = declNum(sec, ['секунда', 'секунды', 'секунд']);

const formattedString = `Сегодня ${today} ${year} года ${hour} ${hourStr} ${minute} ${minStr} ${sec} ${secStr}`;
const p1 = document.createElement('p');
p1.innerHTML = formattedString;
document.body.appendChild(p1);

function refresh() {
    window.location.reload();
}

function declNum(n, str) {
    let cases = [2, 0, 1, 1, 1, 2];
    return str[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]];
}

function functionB(n) {
    return (n > 0 && n < 10) ? '0' + n : n
}

