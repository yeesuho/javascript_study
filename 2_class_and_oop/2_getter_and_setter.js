/**
 * Getter and Setter
 */
class SuhoModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */
    get nameAndYear() { 
        return `${this.name}-${this.year}`;
    }

    set setName (name) {
        this.name = name;
    }   
}

const suHo = new SuhoModel('이수호', 2008);
console.log(suHo);
console.log(suHo.nameAndYear); //함수가 아님
console.log(typeof suHo.nameAndYear);

suHo.setName = '김수호'; //= 오른쪽 값이 setter에 매게변수가 됨
console.log(suHo);

class SuhoModel2 {
    #name;
    year;
    
    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
}

const suHo2 = new SuhoModel2('이수호', 2008);

console.log(suHo2);
console.log(suHo2.name);

suHo2.name = '김수호';
console.log(suHo2.name)