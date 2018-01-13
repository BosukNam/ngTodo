// Shape - 상위클래스
function Shape() {
    this.x = 0;
    this.y = 0;
}

// 상위클래스 메서드
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - 하위클래스
function Rectangle() {
    Shape.call(this); // super 생성자 호출.
}

// 하위클래스는 상위클래스를 확장
// prototype 체인은: Rectangle --> Shape.prototype --> Object.prototype --> null
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log(rect);
rect.move(1, 1); // Outputs, 'Shape moved.'
console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true



console.log(rect.__proto__);