let el = document.getElementById('block1');
let x_position = Math.round(Math.random() * (document.body.offsetWidth - 50));
let y_position = Math.round(Math.random() * (document.body.offsetHeight - 50));
el.style.left = x_position;
el.style.top = y_position;