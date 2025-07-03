/**
 * Prototype Chain
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function SuHoModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(SuHoModel.prototype);

// console.dir(SuhoModel.prototype, {
//     showHidden: true,
// });


//circular reference (서로가 서로를 참조하는 상황)
console.log(SuHoModel.prototype.constructor === SuHoModel);
console.log(SuHoModel.prototype.constructor.prototype === SuHoModel.prototype);

const suHo = new SuHoModel('이수호', 2008);

console.log(suHo.__proto__);
console.log(suHo.__proto__ === SuHoModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(SuHoModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(SuHoModel.prototype.__proto__ === Object.prototype);

console.log(suHo.toString());
console.log(Object.prototype.toString());

function SuHoModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `${this.name}이 인사를 합니다.`;
    }
}

const suHo2 = new SuHoModel2('이수호', 2008);
const kimSuHo2 = new SuHoModel2('김수호', 2008);

console.log(suHo2.sayHello());
console.log(kimSuHo2.sayHello());
console.log(suHo2.sayHello === kimSuHo2.sayHello);

console.log(suHo2.hasOwnProperty('sayHello'));

function SuHoModel3(name, year) {
    this.name = name;
    this.year = year;
}

SuHoModel3.prototype.sayHello = function() {
    return `${this.name}가 인사를 합니다.`;
}

const suHo3 = new SuHoModel3('이수호', 2008);
const kimSuHo3 = new SuHoModel3('김수호', 2008);

console.log(suHo3.sayHello());
console.log(kimSuHo3.sayHello());
console.log(suHo3.sayHello === kimSuHo3.sayHello);


console.log(suHo3.hasOwnProperty('sayHello')); //상속받은 프로퍼티 메모리를 효율적으로 사용할 수 있게됨

SuHoModel3.sayStaticHello = function() {
    return '안녕하세요 저는 static method 입니다.';
}

console.log(SuHoModel3.sayStaticHello());

/**
 * Overriding
 */
function SuHoModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return '안녕하세요 저는 인스턴스 메서드입니다.';
    }
}

SuHoModel4.prototype.sayHello = function() {
    return '안녕하세요 저는 prototype 메서드입니다!';
}

const suHo4 = new SuHoModel4('이수호', 2008);
// 프로퍼티 셰도잉 = class에서 override
console.log(suHo4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function SuhoModel(name, year) {
    this.name = name;
    this.name = year;
}

SuhoModel.prototype.sayHello = function() {
    return `${this.name}가 인사를 합니다.`
}

function DanceSuhoModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}가 춤을 춥니다.`;
    }
}

const parkSuHo = new SuhoModel('박수호', 2008);
const leeSuHo = new DanceSuhoModel('이수호', 2008);

console.log(parkSuHo.__proto__);
console.log(parkSuHo.__proto__ === SuhoModel.prototype);
console.log(Object.getPrototypeOf(parkSuHo) === SuhoModel.prototype);

console.log(parkSuHo.sayHello());
console.log(leeSuHo.dance());
//console.log(leeSuHo.sayHello()) //당연히 안됨
console.log(Object.getPrototypeOf(leeSuHo) === DanceSuhoModel.prototype);

Object.setPrototypeOf(leeSuHo, SuhoModel.prototype);
console.log(leeSuHo.sayHello())

console.log(leeSuHo.constructor === DanceSuhoModel);
console.log(leeSuHo.constructor === SuhoModel);
console.log(parkSuHo.constructor === SuhoModel);
console.log(Object.getPrototypeOf(leeSuHo) === DanceSuhoModel.prototype);
console.log(Object.getPrototypeOf(leeSuHo) === SuhoModel.prototype);
console.log(DanceSuhoModel.prototype === SuhoModel.prototype);

DanceSuhoModel.prototype = SuhoModel.prototype;

const sam = new DanceSuhoModel('삼수호', 2008);
console.log(Object.getPrototypeOf(sam) === DanceSuhoModel.prototype);
console.log(DanceSuhoModel.prototype === SuhoModel.prototype);
