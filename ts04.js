var _유니온 = 123;
var _어레이 = [1, '2', 3];
var _오브젝트 = { str: '33' };
var _숫자또는문자열;
var 모두;
// 1. 타입을 정해서 에러를 없애기
var 객체04 = {
    num: [100, 102, 104],
    str: "str",
    name: "son"
};
객체04.num[4] = false;
객체04.name = ['lee', 객체04.str];
// 2. 타입 정하기
var 사람04 = '홍길동';
var 나이04 = undefined;
var 성인04 = false;
나이04 = 33;
var 친구04 = [사람04, 나이04, 성인04];
