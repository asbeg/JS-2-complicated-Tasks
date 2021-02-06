
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let myDate = new Date();
// Воскр =0 и субб.== 6
let today = myDate.getDay();
console.log(today);

for (let i = 0; i < week.length; i++) {
    if ((i === 6) && (i !== today)) {
        document.write(`${week[i].italics()}<br/>`);
    } else if ((i === 0) && (i !== today)) {
        document.write(`${week[i].italics()}<br/>`);
    }else if (i === today){
        document.write(`${week[i].bold()}<br/>`);
    }else
    document.write(`${week[i]}<br/>`);

}
