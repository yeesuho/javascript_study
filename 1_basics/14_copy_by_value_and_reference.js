/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
//copy by value다
let original = '안녕하세요 ';
let clone = original;

console.log(original);
console.log(clone);

clone += '이수호 입니다.';
console.log('------------------');
console.log(original);
console.log(clone);
console.log('------------------');


//copy by reference다
let originalObj = {
    name: '이수호',
    age: 17,
}

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['age'] = 18;
console.log(originalObj);
console.log(cloneObj);
console.log('------------------');
console.log(originalObj === cloneObj);
console.log(original == clone);

const suho1 = {
    name: '이수호',
    age: 17,
}
const suho2 = suho1
const suho3 = {
    name: '이수호',
    age: 17,
}
console.log('------------------');
console.log(suho1 === suho2); // true
console.log(suho1 === suho3); // false
console.log(suho2 === suho3); // false


/**
 * Spread Operator
 */
// copy by value
const suho4 = {
    ...suho3,
};

console.log(suho4);

console.log(suho4 === suho3);

const suho5 = {
    year: 2008,
    ...suho3,
}
console.log(suho5);

const suho6 = {
    name: '김수호',
    ...suho3,
}

console.log(suho6)


const suho7 = {
    ...suho3,
    name: '김수호',
}

console.log(suho7);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
]

console.log(numbers2)

const numbers3 = [
    ...numbers2,
]
console.log(numbers2)