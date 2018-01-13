//생성자 상속 : 생성자로 생성된 객체의 프로토타입은 Graph.Prototype과 같다.
function Graph() {
    this.vertexes = [];
}

Graph.prototype = {
    addVertex: function(v){
        this.vertexes.push(v);
    }
};

var g = new Graph();
g.addVertex(1);
console.log(g);
// g 'vertexes' 와 'edges'를 속성으로 가지는 객체이다.
// 생성시 g.[[Prototype]]은 Graph.prototype의 값과 같은 값을 가진다.