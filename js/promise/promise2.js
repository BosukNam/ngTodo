let promise = new Promise(resolve => {
    setTimeout(()=>{
        console.log('async setTimeout');
        resolve('success');
    }, 1000);
});
//Promise 생성자안의 펑션은 executor로써 선언과 동시에 실행된다.
//pending 상태 => resolve 상태 => settled 상태

promise.then(value=>{
    console.log(value);
});
