class Engine {
        
    constructor() {
        this.objects = [];
          setInterval(() => this.draw(), 20);
  }
      
    draw() {
          this.objects.forEach(object => object.draw());
  }

}