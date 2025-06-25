/**
 * Data Types
 * 
 * 자바스크립트는 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */


/**
 * Number 타입
 */
const age = 17;
const tempature = 10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('------------------');

/**
 * String 타입
 */
const suho = '수호';
console.log(suho);
console.log(typeof suho);

const leesuho = "'이' 수호";
console.log(leesuho);
console.log(typeof leesuho);


/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력하면 된다.
 */
const kimSuHo = '김\n수호';
console.log(kimSuHo);
const leeSuHo = '이\t수호';
console.log(leeSuHo);
const backSlash = '이\\수호';
console.log(backSlash);

const lee = '이';
console.log(lee + '수호');
console.log(`${lee}수호`);

console.log('------------------');


/**
 * Boolean 타입
 */

const isTure = true;
const isFalse = false;
console.log(isTure);
console.log(typeof isTure);
console.log(isFalse);
console.log(typeof isFalse);
console.log('------------------');

/**
 * Undefined 
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야 한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('------------------');

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용된다.
 */

let init = null;
console.log(init);
console.log(typeof init);
//null 타입이 object type으로 뜨는건 버그임 개발자가 인정함
console.log('------------------');

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2); //true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); //flase
console.log('------------------');
/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
}

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);
console.log('------------------');
/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입이다
 */

const suhoArray = [
    '이수호',
    '김수호',
    '박수호',
]

console.log(suhoArray);
console.log('------------------');
/**
 * index
 * 
 * 0부터 시작
 * 1씩 올라갑니다
 */

console.log(suhoArray[0]);
console.log(suhoArray[5]);

suhoArray[0] = '수호';
console.log(suhoArray);
console.log(typeof suhoArray);
console.log('------------------');

/**
 * static typing(정적 타이핑) -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다.
 *      C
 * dynamic typing(동적 타이핑) -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론한다."
 * JS -> dynamic typing
 */