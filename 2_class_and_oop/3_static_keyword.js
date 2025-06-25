/**
 * Static Keyword
 */

// class SuhoModel {
//     name;
//     year;
//     static club = 'MC';

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     static returnClubName() {
//         return 'MC';
//     }
// }

// const suHo = new SuhoModel('이수호', 2008);
// console.log(suHo);

// console.log(SuhoModel.club);
// console.log(SuhoModel.returnClubName());

/**
 * factory constructor
 */

class SuhoModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new SuhoModel(
            object.name,
            object.year,
        )
    }

    static fromList(list) {
        return new SuhoModel(
            list[0],
            list[1],
        )
    }
}

const suHo2 = SuhoModel.fromObject({
    name: '이수호',
    year: 2008,
});

console.log(suHo2);

const kimSuHo = SuhoModel.fromList(
    [
        '김수호',
        2008
    ]
);
console.log(kimSuHo)