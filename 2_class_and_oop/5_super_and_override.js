/**
 * Super and Override
 */

class SuhoModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요 ${this.name}입니다.`
    }
}

class PartSuhoModel extends SuhoModel{
    //노래 / 코딩
    part;

    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    sayHello() {
        return `${super.sayHello()} ${this.part}하는 중 입니다.`
    }
}

const suHo = new PartSuhoModel('이수호', 2008, '코딩');
console.log(suHo);

const kimSuho = new SuhoModel('김수호', 2008);
console.log(kimSuho);
console.log(kimSuho.sayHello());
console.log(suHo.sayHello());