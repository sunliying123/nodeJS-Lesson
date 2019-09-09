function Bomb() {
    this.message = "bomb!!";
}
Bomb.prototype.explode = function() {
    console.log(this);
    console.log(this.message);
}

var bomb = new Bomb();
setTimeout(bomb.explode, 2000); //输出undefined，因为函数方法的嵌套使this指向发生改变

setTimeout(bomb.explode.bind(bomb), 2000);