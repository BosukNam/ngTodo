// call과 apply에서 this의 의미
// 자바스크립트에서 오버라이딩이 존재하는가?
function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};

console.log(add.call(o, 5, 7));
console.log(add.call(o, 5));
console.log(add.call(o, 5, 7, 9));
