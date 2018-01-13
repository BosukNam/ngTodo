/**
 * Created by eastflag on 2017-11-11.
 */
// obj1 객체에 a 속성을 정의하고 20을 할당 하였지만 결과는 10이 출력된다.
// 그 이유는 무엇이고, 어떻게 수정해야 하는가? (reflection api, descriptor)
var obj1 = {};

Object.defineProperty(obj1, "a", {value: 10});

obj1.a = 20;
console.log(obj1.a);

// defileProperty() 리플렉션 api로 객체의 속성을 정의를 할때, value만 정의하면,
// 값을 쓸수 있게 하는 writable, 반복할수 있는 enumarator, 속성을 삭제할 수 있는 configurable 값이 디폴트로 false로 설정된다.
// 그러므로 a 속성으 read 속성만 되므로 write가 되지 않았다.
// 아래와 같이 생성하면 write가 가능해진다.

Object.defineProperty(obj1, 'a', {
  value: 10,
  writable: true,  //default false
  enumerable: true, //default false
  configurable: true  //default false
});

obj1.a = 20;
console.log(obj1.a);
