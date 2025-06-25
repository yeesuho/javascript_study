/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('------------------');

// console.log(name);
// var name = 'suho';
// console.log(name);

//위에 코드는 밑에처럼 실행이 됨 (호이스팅)
// var name;
// console.log(name);
// name = 'suho';
// console.log(name);

/**
 * Hoisting은 무엇인가??
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

console.log(suho);
let suho = '이수호';
// let과 const는 오류를 띄움으로써 호이스팅을 막아준다 호이스팅이 안되는 것은 아님