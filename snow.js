class SnowFlake {

    constructor() {
        this.el = document.createElement('div');
        this.speed = Math.random() * (4 - 1) + 1;
        this.x = Math.round(Math.random() * (document.body.offsetWidth - 50));
        this.y = Math.round(Math.random() * (document.body.offsetHeight - 50));
        this.el.className = "snowflake";
        document.body.insertBefore(this.el, document.body.firstChild);
    }

    move() {
        this.y = this.y + this.speed;
        if (this.y > document.body.clientHeight) {
          this.y = -50;
        }
    }

    draw() {
        this.el.style.top = this.y;
        this.el.style.left = this.x;
    }
}