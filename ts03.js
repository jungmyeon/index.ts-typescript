var objVar = { age: 33, height: 172.3 };
// 클래스
var Myclass = /** @class */ (function () {
    function Myclass(매개변수) {
        this.멤버변수 = 매개변수;
    }
    return Myclass;
}());
// constructor : 생성자 (클래스를 객체화 하는 순간 발동되는 함수)
//let 객체1 = new Myclass(3.1231234)      // 자료형 불일치
var 객체1 = new Myclass("str1");
var 객체2 = new Myclass("str2");
