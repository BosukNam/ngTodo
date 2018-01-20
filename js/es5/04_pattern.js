// 네임 스페이스 패턴: 변수 x는 공개되어있어 변조가 가능하다.
var com = {};
com.eastflag = {};
com.eastflag.java = {
    x: 'public',
    getX: function() {
        console.log(this.x); // public
    }
};
com.eastflag.java.getX();

com.eastflag.java.x = 'change';
com.eastflag.java.getX(); // change

// IIFE (즉시 실행함수) 패턴
var comm = {};
comm.eastflag = {};
comm.eastflag.java = (function () {
    var x = 'private'; // 남이 접근못함 : 클로져 라고 부름!
    function y() {
        console.log(x); // private
    }
    return { getX: y };
})();

comm.eastflag.java.getX(); // 안나옴, 이미 var x는 날라감
