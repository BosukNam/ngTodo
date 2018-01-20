new Promise(resolve => {
    setTimeout(()=>{
        console.log('async1');
        resolve('success');
    }, 1000);
}).then(value=>{
    //비동기 작업을 Promise로 감싸서 동기식으로 처리하게 했다.
    console.log(value);
    return new Promise(res=>{
        setTimeout(()=>{
            console.log('async2');
            res('async2 success');
        }, 1000);
    })
}).then(value=>{
    console.log(value);
});
// Promise.resolve()는 sync 로직 흐름에서, new Promise()는 sync는 물론, async 로직 흐름에서도 사용할 수 있다.