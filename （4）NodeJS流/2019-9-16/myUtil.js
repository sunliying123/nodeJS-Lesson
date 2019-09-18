const util = require("util");

function Parent(name) {
    this.name = name;
}
Parent.prototype.show = function() {
    console.log(this.name);
}


function Child() {

}
util.inherits(Child, Parent);

/**继承方式
 * 1、Parent.call(this)   Child.prototype._proto_=Parent.prototype
 * 2、Child extends Parents{}
 * 3、util.inherits(Child,Parent)
 */