/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('------------------');

for(let i = 10; i > 0; i --) {
    console.log(i);
}


console.log('------------------');

for(let i = 0; i<3; i++) {
    for(let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

let square = '';

// *을 이용해서 6x6의 정사각형을 출력해라
for(let i = 0; i<6; i++) {
    for(let j=0;j<6;j++) {
        square += '*';
    }
    
    console.log(square);
    square = '';
}
console.log('------------------');

for(let i = 0; i<6; i++) {
    for(let j=0;j<6;j++) {
        square += '*';
    }
    square += '\n'
}
console.log(square);

console.log('------------------');

/**
 * for...in
 */
const suHo = {
    name: '이수호',
    year: 2008,
    age: 17,
}

for (let key in suHo){
    console.log(key);
}

console.log('------------------');

const suHoArray = ['이수호', '김수호', '박수호', '최수호'];

for(let key in suHoArray) {
    console.log(key);
    console.log(`${key}:${suHoArray[key]}`)
}

console.log('------------------');

/**
 * for...of
 */
for(let value of suHoArray) {
    console.log(value);
}


//인덱스 값을 가져오고 싶응땐 for...in 값을 가져오고 싶을땐 for...of

console.log('------------------');
/**
 * while
 */

let number = 0;

while(number < 10) {
    console.log(number)
    number ++;
}

console.log('------------------');

/**
 * do...while
 */
number = 0;

do {
    number++;
} while(number < 10) {
    console.log(number);
}


console.log('------------------');

/**
 * break
 */

for(let i = 0; i< 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log('------------------');

number = 0;

while(number < 10) {
    if(number === 5) {
        break;
    }

    number ++;
    console.log(number);
}

console.log('------------------');

/**
 * continue
 */

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue; //현재 진행하고 있는 loop만 스킵
    }
    console.log(i);
}

console.log('------------------');

number = 0;

while(number < 10) {
    number ++;
    if(number === 5) {
        continue;
    }

    console.log(number);
}