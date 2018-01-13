// 브라우저에서만 쓰이는 자바스크립트가 많이 쓰이게 된 계기는 CommonJS 스펙으로 인한 모듈화이다.
// CommonJS 스펙에서 모듈화를 하는 방법은 남이 만든 자바스크립트 모듈을 가져오는 ( 1 )
// 자기가 만든 자바스크립트를 배포하는 ( 2 ) 이다.

// 자바스크립트에서 조심해야 할것은 global 변수의 충돌이다.
// 모듈화로 남이 만든 자바스크립트를 가져오거나 배포할때 global 변수가 충동할 수 있다.
var name = "global";
function checkscope(){
  name = "local";
  name2 = "local";
}
checkscope();
console.log(name);
console.log(name2); // 암묵적 global 변수
