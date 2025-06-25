/**
 * Array Functions
 */

let suhoMembers = [
    '일수호',
    '이수호',
    '삼수호',
    '사수호',
    '오수호',
    '육수호',
]

console.log(suhoMembers);


// push()
console.log(suhoMembers.push('칠수호'));
console.log(suhoMembers);

console.log('------------------');
// pop()
console.log(suhoMembers.pop());
console.log(suhoMembers);

console.log('------------------');
// shift()
console.log(suhoMembers.shift());
console.log(suhoMembers);

// unshift()
console.log(suhoMembers.unshift('일수호'));
console.log(suhoMembers);

console.log('------------------');

// splice()
console.log(suhoMembers.splice(0, 3));
console.log(suhoMembers);

suhoMembers = [
    '일수호',
    '이수호',
    '삼수호',
    '사수호',
    '오수호',
    '육수호',
]

console.log('------------------');

console.log(suhoMembers);

// concat()
console.log(suhoMembers.concat('칠수호'));
console.log(suhoMembers);
console.log('------------------');

// slice()
console.log(suhoMembers.slice(0, 3));
console.log(suhoMembers);

//spread operator
let suhoMembers2 = [
    ...suhoMembers
];

console.log(suhoMembers2);

let suhoMembers3 = [
    suhoMembers,
];
console.log(suhoMembers3)

console.log('------------------');

let suhoMembers4 = suhoMembers;
console.log(suhoMembers4);
console.log(suhoMembers4 === suhoMembers);

// console.log([
//     ...suhoMembers,
// ] === suhoMembers); //false

console.log('------------------');

// join()
console.log(suhoMembers.join());
console.log(typeof suhoMembers.join());

console.log(suhoMembers.join('/'));
console.log(suhoMembers.join(', '));


// sort()
// 오름차순
suhoMembers.sort();
console.log(suhoMembers);

console.log(suhoMembers.reverse());

console.log('------------------');

let numbers = [
    1,
    9,
    7,
    5,
    3,
]

console.log(numbers);

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 수를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 수를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});

console.log(numbers);

numbers.sort((a, b)=>{
    return a < b ? 1 : -1;
});
console.log(numbers);





numbers.sort((a, b) => a > b ? -1 : 1);

console.log(numbers);


console.log('------------------');

// map()
console.log(suhoMembers.map((x) => x));

console.log(suhoMembers.map((x) => `이름 : ${x}`));


console.log(suhoMembers.map((x) => {
    if(x === '이수호') {
        return `성이 이씨: ${x}`;
    } else {
        return x;
    }
})); // 원래의 array에 영향을 주지 않음

console.log(suhoMembers);

console.log('------------------');

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));


// find()
console.log(numbers.find((x) => x % 2 === 0)); // 해당되는 첫 번째 값만 죽시 반환 

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); // 해당되는 첫 번째 값의 인덱스 죽시 반환 

// reduce()
console.log(numbers.reduce((p, n) => p + n,0));

