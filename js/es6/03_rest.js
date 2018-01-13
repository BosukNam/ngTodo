// 나머지 연산자 ...
function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5,3,1));


// es5에서 arguments와 es6와의 차이점
function sortArguments() {
    // arguments는 무엇인가?
    console.log(arguments);
    var sortedArgs = arguments.sort();
    return sortedArgs;
}

console.log(sortArguments(5,3,1));
