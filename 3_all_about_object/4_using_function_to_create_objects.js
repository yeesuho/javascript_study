/**
 * Using function to create objects
 */

function SuHoModel(name, year) {
    if(!new.target) {
        return new SuHoModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    };
}

const suHo = new SuHoModel('이수호', 2008);
console.log(suHo);
console.log(suHo.dance());

const suHo2 = SuHoModel('이수호', 2008);
console.log(suHo2);
console.log(global.name);

const SuhoModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const suHo3 = new SuhoModelArrow('이수호', 2008); //arrow 함수에선 new 키워드를 사용해서 객체 생성 불가
