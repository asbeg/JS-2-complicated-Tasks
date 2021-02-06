const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let myDate = new Date();
// Воскр =0 и субб.== 6
let today = myDate.getDay();
console.log(today);

for (let i = 0; i < week.length; i++) {
    let days = week[i];
    if (i===today){
        days = days.bold();
    }
    if ((i === today && i === 0) || (i === today && i === 6)) {
        days = days.bold().italics();
    } else if (i === 0 || i === 6) {
        days = days.italics();
    }

    const p = document.createElement('p');
    p.innerHTML = days;
    document.body.appendChild(p);
}
