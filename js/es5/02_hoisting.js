//함수 호이스팅:
hoisting1 = "hoisting1";
console.log(hoisting1);
var hoisting1; // 선언문이 맨위로 올라감

console.log(hoisting2);
var hoisting2="hoisting2"; // 선언문만 올라감, 할당문은 나중임

//함수 선언문은 호이스팅 된다.
myName("Yan", "Fan");

function myName(first, last) {
    console.log(first + last);
}

// 함수 표현식을 작성하고 테스트 하시오. 호이스팅 되는가? => 안됨!
myFunc("boss","nam"); // 불가
var myFunc = function(first, last) {
  console.log(first + last);
}
myFunc("boss","nam"); // 가능

// 익명함수는 애로우 펑션으로 표현가능. 차이점은 Lexical this
var myFunc2 = (first, last) => console.log(first + last);
myFunc2("shyong","ha");

