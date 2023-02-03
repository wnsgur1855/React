//node 리액트.js   
//01. 상수와 변수
//02. 상수 : const(constant : 변함없는 수)
//03. 변수 : let
const a =1;
let b = 3;
//a = 3;-->x 상수로 할당이미 해버려서  안 된다.
b = 1;
console.log('a',a);
console.log('b',b);

// {}안에서만 이 선언한 변수는 유효해야만 한다 but var는 block level scope가 아니라서 {}선언했더라도 다른 데서 쓸 수 있따,
// 그래서 var를 쓰면 ㄴㄴ

// 자바스크립트에서 말하는 object는 key-value가 쌍으로 있는 어떠한 것이구나(obj)
{
    key: 'value'
    key1: 'value'
}
//value는 그 어떤 것도 다 올 수 가 있다.-->함수 올 수 있다 : () =>{}화살표함수

const name = 'jun';    // -->생략해서 표현하는 방법 : 위에 key값을 변수로 만들었으니 key값을 저렇게 쓰기 가능(변수!=key)
const age = 21;
const testObj = {
    name,
    age,
    conmpany : 'Team Sparta',
}

const obj1 = { 
    value1: 10
 };
const obj2 = obj1;       //obj1을 obj2로 복사함         //1번째 방법 얕은 복사
/*얕은 복사
obj1은 저장되어있는 방법이'12345'라는 주솟값을 저장을 한 것이디. 그리고 이 주솟값은 어디를 바라고보있냐면 value = 10이다라는
객체를 가지고 있는 메모리를 바라보고 있다. 그리고 이 메모리를 바라보고 있는 주소값을 obj2에 복사 한 거죠
그럼 obj2도 주솟값이 '12345'가 된다. 그럼 obj1도 obj2도 같은 메모리 공간을 바라보게된다.
그래서 하나가+1된다하면 나머지 하나도 같은 주솟값을 가지고 있기에 값이 똑같이바뀐다.
이런 상황을 방지하는 것이 중요*/


const obj3 = JSON.parse(JSON.stringify(obj1))         //2번째 새로운 주솟값 생성
//obj1으로부터 stringify에서 새로 받아서 다시 parse로 묶어주게 되면 얘가 아예 새로운 주소값을 생성한다. 그걸 obj3로 넣는다.
obj1.value1 += 1;

// 결과를 예상해보세요! 같이 해봅시다.
console.log(`obj1:`, obj1);
console.log(`obj2:`, obj2);
console.log(`obj3:`, obj3);     //이렇게 지켜줘야한다 --리액트를 하면서 이 방법들을 배운다(spread, map, filter)

//Templete Literals
const testValue = 제어하는 값;
console.log(`문자열 ${testValue} 입니다.); 
 백틱 안에 문자열을 넣을 수도 있지만 placeholer을 통해 변수도 넣을 수 있다는 거
{}안에는 변수가 들어가고 결과론 제어하는 값이 나온다

0. De(out, 반대) + structur + ing = 구조를 만드는 걸 반대한다(구조를 분해한다.)
    =객체, 배열의 구조를 뜯어버린다.

1. spread operator
    let names = ["Steve", "John"];                     ["Tom",names, names]일경우 배열 안 배열형태로 합쳐지게된다.
    let students = ["Tom", ...names, ...names];    -> 배열의 구조를 깨고 나왔으면 좋겠어 [올바른 한 배열 형태로 나옴]

2. arrow function      
    기본 틀 : function 변수() {} --->함수를 선언하는 기본틀
    arrow 기본 틀 : const 변수 = () =>{}

    function mysum1(x, y) {     x,y는매개변수
    return x + y;
    }
    
    const mysum2 = (x, y) => {
    return x + y;       --->한줄일때 중괄호 생략 한줄로 바꼈을 때 return문이 한줄로 바뀌면서 빠지면서 중괄호 없앨 수 있따.
    }
    
    const mysum3 = (x, y) => x + y;      --->한줄일때 중괄호 생략 한줄로 바꼈을 때 return문이 한줄로 바뀌면서 빠지면서 중괄호 없앨 수 있따.
   
    const mysum4 = x => x +y    매개변수가 1개일 때 ()생략 가능

    console.log(mysum1(1, 2));
    console.log(mysum2(1, 2));
    console.log(mysum3(1, 2));
    console.log(mysum4(1, 2));

    //3 값은 전부 3으로 동일