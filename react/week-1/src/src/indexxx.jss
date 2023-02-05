 //불변성의 개념 : 메모리에 있는 값을 변경할 수 없는 것

let number = 1;
let secondNumber = 1;

//원시데이터 : 숫자, 문자, 불리언... -->불변성이 있따 : 값이 변한다. 
console.log("number와 secondNumber는 같나")
console.log(number === secondNumber); // "

//원시데이터가 아닌 것들 : 배열, 객체. 함수,,,
let obj1 = {
    name: "kim",
}
obj1.name = 'park' //객체는 불변성이 없습니다

let obk2 = {
    name: "kim",
}
console.log("obj1과 obj2는 일치하나요")
console.log(obj1 === obk2); 

//데이터를 수정하는 경우 