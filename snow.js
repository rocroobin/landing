let i = 0;
let div = document.createElement('div');
div.className = "snowflake";
document.body.insertBefore(div, document.body.firstChild);
let el = document.body.querySelectorAll('div.snowflake');
let max = el.length;
    
for (; i < max; i += 1){
    let x_position = Math.round(Math.random() * (document.body.offsetWidth - 50));
    let y_position = Math.round(Math.random() * (document.body.offsetHeight - 50));
    // 50 - это размер картинки, чтобы не смещалась за пределы body
    el[i].style.left = x_position;
    el[i].style.top = y_position;
}