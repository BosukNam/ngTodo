new Promise(resolve => {
    setTimeout(()=>{
        console.log('async1');
        resolve('success');
    }, 1000);
}).then(value=>{
    //Promise는 비동기 작업을 동기식으로 처리한다. setTimeout 같은 비동기를 new Promise로 감싸지 않으면 비동기적으로 동작한다.
    console.log(value);
    setTimeout(()=>{
        console.log('async2');
    }, 1000);
    return value;
}).then(value=>{
    console.log(value);
});
