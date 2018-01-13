// proto type 개념 이해
// # 1.
var A = function () {
    this.x = function () {
        console.log('hello');
    };
};
A.x=function() {
    console.log('world');
};
var a = new A();
console.log(a.x()); //hello
console.log(a);
// A는 함수 원형이고 a는 A로 부터 만들어진 객체이다.
// a를 생성하기 위해서 위한 프로토타입은 hello이며 다른 값을 대입해도 변하지 않는다.

// # 2.
var B = function () { };
B.x = function() {
    console.log('hello');
};
B.prototype.x = function () {
    console.log('world');
};
var b = new B();
console.log(b.x());
//B는 함수 원형이고 prototype에 x를 추가하면 함수원형이 변하게 된다.