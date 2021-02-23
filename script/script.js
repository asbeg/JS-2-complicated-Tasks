let zug = document.querySelector('.zug'),
    btn = document.querySelector('#btn'),
    animate = false,
    count = 0,
    interval;

let runAnimate = function () {
    interval = requestAnimationFrame(runAnimate)
    count++;
    zug.style.left = count + 'px';
};

btn.addEventListener('click', function () {
    if (!animate) {
        interval = requestAnimationFrame(runAnimate);
        animate = true;
    } else {
        animate = false;
        cancelAnimationFrame(interval);
    }
});

