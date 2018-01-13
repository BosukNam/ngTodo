// 네임 스페이스 패턴: 변수 x는 공개되어있어 변조가 가능하다.
var com = {};
com.eastflag = {};
com.eastflag.java = {
    x: 'public',
    getX: function() {
        console.log(this.x);
    }
};
com.eastflag.java.getX();

com.eastflag.java.x = 'change';
com.eastflag.java.getX();

// IIFE (즉시 실행함수) 패턴
/*var com = {};
com.eastflag = {};
com.eastflag.java = (function () {
    var x = 'private';
    function y() {
        console.log(x);
    }
    return { getX: y };
})();

com.eastflag.java.getX();*/
