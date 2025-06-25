/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let 
 * 3) const
 */

var name = '이수호';

console.log(name);

var age = 17;

console.log(age);

let suho = '이수호';
console.log(suho);


/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

suho = '김수호';
console.log(suho);

const leesuho = '이수호';
console.log(leesuho);

// leesuho = '김수호';


/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 */
var name; //선언
var name = 'suho'; //선언 & 할당

let Friend;
console.log(Friend); // 값이 없으면 undefined 할당

// const Friend2; // const는 값을 정해줘야함 안그러면 오류 (상수이기 때문에 undefined를 할당할 수 없음)