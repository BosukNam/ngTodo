// 함수 표현식, 호이스팅 안됨 (할당한 것이기 때문)
let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};

// 위의 문장을 한줄로 작성하시오.
// expression 이면 return 생략가능
// 매개변수가 한개면 () 생략가능
// 매개변수가 없는 경우는 () 생략 불가능
// 본문은 한줄이면 {} 생략 가능
let myCircleArea = (pi, r) => pi*r*r;

let result = myCircleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
