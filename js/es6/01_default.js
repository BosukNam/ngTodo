// 함수 실행시 디폴트 값을 설정하는 방법
function myFunction(x = 1, y = 2, z = 3 + 5) {
    console.log(x, y, z);
}

// 1. 6 2 8
myFunction(6);

// 2. 6 7 8
myFunction(6,7);

// 3. 3번째 파라메터 z로 넘기는 방법, 1 2 1
myFunction(undefined, undefined, 1);


// js에서는 오버로딩 불가(오버라이딩 됨), ts에서는 가능!
/*function myFunction(x) {
  console.log('hi');
}*/
