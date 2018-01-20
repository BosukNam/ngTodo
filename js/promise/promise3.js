// promise를 만드는 또다른 방법 resolve 함수
// 차이점은 Promise.resolve 는 비동기처리가 안된다.
Promise.resolve(
    setTimeout(()=>{
        console.log('async setTimeout');
    }, 1000)
).then(()=>{
    console.log('ok');
});

/*
new Promise(resolve=> {
    setTimeout(() => {
        console.log('async setTimeout');
        resolve('ok')
    }, 1000)
}).then((value)=>{
    console.log(value);
});*/
