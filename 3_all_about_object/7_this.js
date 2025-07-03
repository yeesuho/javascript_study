/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다. 
 * 
 * ***** 하지만 this 키워드는 바인딩이 객체가 생성되는 
 */
const testFunction = function() {
    return this;
}

console.log(testFunction());
console.log(testFunction() === global);

const suHo = {
    name: '이수호',
    year: 2008,
    sayHello: function() {
        return `안녕하세요 저는 ${this.name}입니다.`
    },
}

console.log(suHo.sayHello());

function Person(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const suHo2 = new Person('이수호', 2008);

console.log(suHo2.sayHello);

Person.prototype.dance = function() {
    function dance2() {
        return `${this.name}이 춤을 춥니다.`;
    }

    return dance2();
}

console.log(suHo2.dance());

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다.
 * 
 * 1) 일반 함수 호출할땐 this가 최상위 객체 (gloal 또는 window)를 가리킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName() {
    return this.name;
}

console.log(returnName());

const suHo3 = {
    name: '이수호',
}

console.log(returnName.call(suHo3));
console.log(returnName.apply(suHo3));

/**
 * 차이점
 * 1) call -> 콤마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야한다.
 */

function multiply(x, y, z) {
    return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(suHo3, 3, 4, 5)); // 콤마를 기준으로
console.log(multiply.apply(suHo3, [3, 4, 5])); // 리스로 입력해야함

/**
 * bind()
 */
const laterFunc = multiply.bind(suHo3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc()); // 바인드만 하고 나중에 실행할 수 있게 해줌