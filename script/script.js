function angle(hour, minute) {
    let check;
    hour = hour % 12;

    let hm = 0.5 * minute,
        hh = 30 * hour,
        ma = 6 * minute,
        sum = Math.abs(hm + hh - ma);
    return check ? 360 - sum : sum;
}

console.log("12:01", angle(6, 0));
console.log("12:00", angle(3, 0));
console.log("16:42", angle(3, 30));
