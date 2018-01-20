// spread 연산자 ...
let array1 = [1, 2];
let array2 = [...array1, ...[3, 4]]; //여러 배열로 펼친다
let array3 = [5];

function myFunction(a, b, c, d, e) {
    return a+b+c+d+e;
}

// apply는 배열, call은 parameter를 넘김
let result = myFunction.apply(null, [...array2, ...array3]);
console.log(result);
