import {Observable} from "rxjs";

// 중간처리 operator map
new Observable(observer => {
    let count = 0;
    let timeout = setInterval(() => {
        ++count;
        observer.next(count);
    }, 1000);
}).map((data: number) => data * data).subscribe(data => console.log(data));
