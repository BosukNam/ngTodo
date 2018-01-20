import {Observable} from "rxjs";

// 중간처리 operator
new Observable(observer => {
    let count = 0;
    let timeout = setInterval(() => {
        ++count;
        observer.next(count);
    }, 1000);
}).filter((data: number) => data%2 === 0).subscribe(data => console.log(data));
