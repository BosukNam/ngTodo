// promise 사용법

let async1 = function (param) {
  return new Promise((resolve, reject)=>{
     if(param && param > 0) {
         resolve('positive');
     } else if(param && param < 0) {
         reject('nagative');
     } else {
         throw 'error';
     }
  });
};

async1(0) // 1, -1 해보기
    .then(value=> console.log('resolve1:', value), value=>console.log('error1:', value));

async1(0)
    .then(value=> console.log('resolve2:', value))
    .catch(value=> console.log('error2:', value));

async1(0)
    .then(value=> {
        console.log('resolve3:' + value);
        JSON.parse(value);
    })
    .catch(value=>console.log('catch:' + value));
