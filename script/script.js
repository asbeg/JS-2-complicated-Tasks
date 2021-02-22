
function clock(){
    const date = new Date(),
        myDate = date.toLocaleDateString(),
        time = date.toLocaleTimeString('ru');
    document.getElementById('clock').innerHTML = functionB(myDate) + "-" + functionB(time);

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

    document.getElementById('clock1').innerHTML = `Сегодня ${today} ${year} года ${hour} ${hourStr} ${minute} ${minStr} ${sec} ${secStr}`;
}

setInterval(clock, 1000);
function declNum(n, str) {
    let cases = [2, 0, 1, 1, 1, 2];
    return str[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]];
}

function functionB(n) {
    return (n > 0 && n < 10) ? '0' + n : n;
}
