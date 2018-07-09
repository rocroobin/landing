const snow = [];
for (let i = 0; i < 50; i += 1){
    let div = document.createElement('div');
    div.className = "snowflake";
    document.body.insertBefore(div, document.body.firstChild);
    snow[i] = div;
}

let max = snow.length;
    
for (let i = 0; i < max; i += 1){
    let x_position = Math.round(Math.random() * (document.body.offsetWidth - 50));
    let y_position = Math.round(Math.random() * (document.body.offsetHeight - 50));
    // 50 - это размер картинки, чтобы не смещалась за пределы body
    snow[i].style.left = x_position;
    snow[i].style.top = y_position;
}

let start = Date.now();
let timer = setInterval(function() {
    // вычислить сколько времени прошло с начала анимации
    let timePassed = Date.now() - start;
// рисует состояние анимации, соответствующее времени timePassed
draw(timePassed);
}, 20);

function draw(timePassed) {
    for (let i = 0; i < 50; i += 1){
    snow[i].style.top = timePassed / 5;
    }
}