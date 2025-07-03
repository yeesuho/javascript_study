/**
 * All about objects
 * 
 * 객체를 선언할때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */
// 1)
const Suho = {
    name: '이수호',
    year: 2008,
};
console.log(Suho);

// 2)
class SuhoModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(new SuhoModel('이수호', 2008));

// 3) 생성자 함수
function SuhoFunction(name, year) {
    this.name = name;
    this.year = year;
}

const kimSuHo = new SuhoFunction('김수호', 2008);
console.log(kimSuHo);