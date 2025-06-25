/**
 * Inheritance
 */
class SuhoModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

}

class DanceSuhoModel extends SuhoModel {
    dance() {
        return `${this.name}가 춤을 춥니다.`;
    }
}

class SingSuhoModel extends SuhoModel {
    sing() {
        return `${this.name}가 노래를 부릅니다.`;
    }
}

const suHo = new DanceSuhoModel('이수호', 2008);
console.log(suHo);
console.log(suHo.dance());
console.log(suHo.name);

const kimSuHo = new SingSuhoModel('김수호', 2008);
console.log(kimSuHo);
console.log(kimSuHo.sing());
console.log(kimSuHo.year);

//console.log(kimSuHo.dance()); // 이건 당연히 안됨

const me = new SuhoModel('이수호', 2008);
console.log(me);
console.log(me.name);

//console.log(me.dance()); // 이것도 안됨 부모가 자식 클래스의 메서드를 상속받진 못함

console.log(suHo instanceof SuhoModel); //true
console.log(suHo instanceof DanceSuhoModel); //true
console.log(suHo instanceof SingSuhoModel); //false
console.log('------------------');
console.log(kimSuHo instanceof SuhoModel); //true
console.log(kimSuHo instanceof DanceSuhoModel); //false
console.log(kimSuHo instanceof DingSuhoModel); //true
console.log('------------------');
console.log(me instanceof SuhoModel); //true
console.log(me instanceof DanceSuhoModel); //false
console.log(me instanceof DingSuhoModel); //false