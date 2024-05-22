// ... 파라미터 (무한히 들어올 수 있는 매개변수)
console.log(1,2,3,4,5,6);       // ...

// rest parameter (... ) : 몇개가 입력될지 정확히 모를 때, 배열형태로 무한히 받음
function 함수8(...variable : (number | string)[])
{
    console.log(variable)   // [1,2,3,4]
}

함수8(1);
함수8(1,2,3,4);

// ... : rest 파라미터     (매개변수)
// ... : spread operator (배열/객체 앞에)
let arr1 = [1,2,3];     // number[]
let arr2 = ['a','b','c'];   // string[]

// unknown, any : 뭐든지 다 가능
// 배열을 붙일 떄는 ...으로 분해하고 합친후 다시 []
// let arr3 : unknown = arr1 + arr2;
let arr3 : (string|number)[] = [...arr1, ...arr2];
console.log(arr3);

let [변수명1, 변수명2] : [string, number] = ['hello', 300];        // 각각 저장
let arr08 :(string|number)[] = ['hello', 300];     // 통째로 저장 
let {id, data} = {id:'1', data:30};    // 객체 각각 이름이 같아야함
let props : {id:string, data:number}= {id:'1', data:30}        // 객체를 통째로 

console.log(변수명2)
console.log(arr08)
console.log(id)
console.log(props.id)

// <Component1 id:id, pw:pw/>
function Component1(props : {id:string, pw:string}){
    console.log(props.id)
    console.log(props.pw)
}

function Component2({id,pw} : {id:string, pw:string}){
    console.log(id)
    console.log(pw)
}