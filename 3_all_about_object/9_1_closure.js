/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical
 *  environment within which that function was declared
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다."
 */

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

// console.log(number); //당연히 에러남

// console.log(getNumber());

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */
function cacheFunction(newNumb) {
    //아래 계산은 매우 오래 걸린다는 가정을 했을때
    var number = 10 * 10;

    function innerCacheFunction(newNumb) {
        return number * newNumb;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }
    return increment;
}

// 위 코드에서 increment 함수는 cacheFunction2 함수 안에서 정의되었습니다
// 그래서 자바스크립트는 increment를 만들 때,
// "이 함수는 number라는 변수가 있는 환경 안에서 만들어졌구나!"
// 라고 기억합니다
// 이렇게 기억되는 걸 렉시컬 환경(Lexical Environment) 이라고 하죠

/**
 * ### 함수가 반환된 후에도 기억하는 이유: 클로저
 * 일반적으로 cacheFunction2() 함수가 끝나면, 안에 있던 number는 사라져야 합니다.
 * 그런데 increment 함수가 외부로 반환(return) 되었기 때문에,
 * 자바스크립트는 "이 함수가 나중에 실행될 수도 있어! 그런데 얘는 number를 써야 하잖아?" 라고 판단해서,
 * increment 함수가 쓰던 외부 환경을 함께 묶어서 저장해 둡니다.
 * 즉, increment와 number는 함께 살아남고 이 구조가 바로 클로저(Closure)입니다
 */

const runner3 = cacheFunction2();

console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3()); // 값을 기억하기 때문에 계속 1씩 값이 증가하는 것을 볼 수 있음 


/**
 * 3) 정보 은닉
 */
function Suho(name, year) {
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function () {
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const suHo = new Suho('이수호', 2008);
console.log(suHo.sayNameAndYear());
console.log(suHo.name);
console.log(suHo._year); //this 키워드를 하지 않았기 때문에 존재하지 않음 = 정보은닉 가능