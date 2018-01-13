// 함수 실행시 디폴트 값을 설정하는 방법
function myFunction(x = 1, y = 2, z = 3 + 5) {
    console.log(x, y, z);
}

// 1.
myFunction(6);

// 2.
myFunction(6,7);

// 3. 3번째 파라메터 z로 넘기는 방법
myFunction(undefined, undefined, 1);
