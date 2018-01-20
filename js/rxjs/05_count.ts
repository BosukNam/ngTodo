import {Observable} from "rxjs";

// 최종처리 operator: 한개의 최종값을 Observable로 리턴
const source = Observable.of(1, 2, 3, 4);
const result = source.count();

const subscribe = result.subscribe(val => console.log('Sum:', val));
