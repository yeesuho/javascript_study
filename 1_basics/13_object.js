/**
 * Object / 객체
 */

// key : value pair
let suho = {
    name: '이수호',
    age: 17,
    dance: function() {
        return `${this.name}가 춤을 춥니다.`;
    }
}

console.log(suho);
console.log(suho.name);
console.log(suho['name']);

const key = 'name';
console.log(suho[key]);

console.log(suho.dance());

const nameKey = 'name';
const nameValue = '이수호';

const ageKey = 'age';
const ageValue = 17;

const suho2 =  {
    [nameKey]: nameValue,
    [ageKey]: ageValue,
    dance: function() {
        return `${this.name}가 춤을 춥니다.`;
    }
}

console.log(suho2);
console.log(suho2.dance());

suho2['age'] = 18;
console.log(suho2);

suho2['englishName'] = 'Lee Su Ho';
suho2['NickName'] = '수호천사';
console.log(suho2)

delete suho2['NickName'];
console.log(suho2);

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

const LeeSuHo = {
    name: '이수호',
    age: 18,
};

console.log(LeeSuHo);

// LeeSuHo = {};

LeeSuHo['age'] = 17;
console.log(LeeSuHo);

/**
 * 모든 키값 다 가져오기
 */

console.log(Object.keys(LeeSuHo));
console.log(Object.values(LeeSuHo));

const name = '이수호';

const suho3 = {
    name: name, //밑에랑 같음
    name, //새로 생긴 문법
};

console.log(suho3)