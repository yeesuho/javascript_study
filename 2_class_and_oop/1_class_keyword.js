/**
 * Class Keyword
 * 
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀이다.
 * 
 * 쉽게 생각하면 정보를 일반화해서 정리하는 방법
 */

class SuhoModel { //클래스 이름은 대문자로 시작
    name; //자바스크립트에선 constructor을 쓰면 정의는 옵셔널
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() { //클래스 안에선 함수명만 써주면 됨
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

// constructor - 생성자

const suHo = new SuhoModel('이수호', 2008);
console.log(suHo);

const kimSuHo = new SuhoModel('김수호', 2008);
console.log(kimSuHo);

const parkSuHo = new SuhoModel('박수호', 2008);
console.log(parkSuHo);

console.log(suHo.name);
console.log(suHo.year);

console.log(suHo.sayName());
console.log(kimSuHo.sayName());

console.log(typeof SuhoModel);
console.log(typeof suHo);