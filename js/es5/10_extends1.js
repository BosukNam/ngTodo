// 속성 상속
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
var obj1 = {a:1, b:2};
obj1.__proto__ = {b:3, c:4};

console.log(obj1.a);
console.log(obj1.b);
console.log(obj1.c);
console.log(obj1.d);
console.log(obj1);