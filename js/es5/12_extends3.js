var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

console.log(c.a);
console.log(c);