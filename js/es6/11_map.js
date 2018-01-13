let map = new Map();

let o = {n: 1};

map.set(o, "A"); //추가
map.set("2", 9);

console.log(map.has("2")); //존재하는 키인지 확인

console.log(map.get(o)); //키의 해당 값 조회

console.log(...map); //[key, value] 가 연속됨

map.delete("2"); //키/값 삭제

map.clear(); //전부 삭제

//이터러블 객체로부터 맵 생성
let map_1 = new Map([[1, 2], [4, 5]]);

console.log(map_1.size); //키 개수
console.log(map_1.get(4));
console.log(...map_1);
console.log(map_1);