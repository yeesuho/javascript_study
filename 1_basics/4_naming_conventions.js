/**
 * Naming Conventions
 * 
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용 할 수 있다.
 * 2) 특수기호는 언더스코어와 달러를 사용 할 수 있다.
 * 3) 숫자로 이름을 시작할 수 없다.
 *      1Name, 2Hello
 * 4) 키워드는 변수명으로 사용랄 수 없다.
 *      var const = 'var';
 */

let suho = '수호';
var $suho = '$수호';
const _suho = '이수호';

console.log(suho);
console.log($suho);
console.log(_suho);

// let 1name = 'no'; 첫글자 숫자 사용 불가
// let const = 'yes'; 키워드 사용 불가

/**
 * Naming Convention 2
 * 
 * 1) camelCase - 대부분의 언어에서 많이 사용
 * 2) snake_case -> 파이썬 같은 언어에서 사용
 * 3) PascalCasse -> C# 같은 마이크로소프트 계열의 언어에서 사용함
 */

//이수호
const leeSuHo = '이수호'; //카멜케이스
console.log(leeSuHo);
