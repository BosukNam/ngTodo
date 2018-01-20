import {Observable} from "rxjs";

// observable: stream of data
new Observable(observer => {
    let count = 0;
    let timeout = setInterval(() => {
        ++count;
        observer.next(count);
    }, 1000);
});
