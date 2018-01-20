// 생성자 함수에서의 this의 의미
function person() {
    this.someValue = 2;
    var someValue2 = 3;
    someValue = 5;
}

console.log(person()); //실행결과는? 그 이유는? undefined, 리턴문이 없다

console.log(new person()); // 생성자 함수로 생성시 실행결과는? person { someValue: 2 }, 인스턴스 this를 리턴함(리턴문없으면)

console.log(someValue); // 실행결과와, 이유를 말하시오
                        // 5, 일반적인 this의 의미 : 자기 펑션이 속한 부모를 의미(window), global function
