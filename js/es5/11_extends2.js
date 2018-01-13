// 메서드 상속
var o = {
    a: 2,
    m: function(b){
        return this.a + 1;
    }
};

console.log(o.m()); // 3
// o.m을 호출하면 'this' 는 o를 가리킨다.

var p = Object.create(o);
// p 는 프로토타입을 o로 가지는 새로 생성된 오브젝트이다.
// m이라는 펑션을 상속 받는다.

console.log(p.a);
console.log(p.m());
console.log(p);

p.a = 12; // p 에 'a'라는 새로운 속성을 만들었다.
console.log(p.m()); // 13
// p.m이 호출 될 때 'this' 는 'p'를 가리킨다.
// 따라서 o의 함수 m을 상속 받으며,
// 'this.a'는 p.a를 나타내며 p의 개인 속성 'a'가 된다.
console.log(p);