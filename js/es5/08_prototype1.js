// 개념 잡기
// http://insanehong.kr/post/javascript-prototype/

function foo(x) {
    this.x = x;
};

var A = new foo('hello');
console.log(A.x);

console.log(foo.prototype.x);
// syntax error