/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할때 호출되는 함수로 구성된 프로퍼티 예를 들면 getter와 setter
 */

const suHo = {
    name: '이수호',
    year: 2008,
};


console.log(Object.getOwnPropertyDescriptor(suHo, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부. flase로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumberable - 열거가 가능한지 여부이다. for...in 룹 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptor(suHo, 'name'));

console.log(Object.getOwnPropertyDescriptors(suHo));

const suHo2 = {
    name: '이수호',
    year: 2008,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(suHo2);

console.log(suHo2.age);

suHo2.age = 18;
console.log(suHo2.age);
console.log(suHo2.year);

console.log(Object.getOwnPropertyDescriptor(suHo2, 'age'));

/* suHo2.height = 173;
// suHo2['height'] = 173;
console.log(suHo2);
console.log(Object.getOwnPropertyDescriptor(suHo2, 'height')); */

Object.defineProperty(suHo2, 'height', {
    value: 173,
    writable: true,
    enumerable: true,
    configurable: true,
})

console.log(suHo2);
console.log(Object.getOwnPropertyDescriptor(suHo2, 'height'));

suHo2.height = 180;
console.log(suHo2);

Object.defineProperty(suHo2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(suHo2, 'height'));
console.log('------------------');
suHo2.height = 173;
console.log(suHo2);

console.log('------------------');

/**
 * Enumerable
 */
console.log(Object.keys(suHo2));
for(let key in suHo2) {
    console.log(key);
}

Object.defineProperty(suHo2, 'name', {
    enumerable:false,
});

console.log(Object.getOwnPropertyDescriptor(suHo2, 'name'));

console.log(Object.keys(suHo2));
for(let key in suHo2) {
    console.log(key);
}

console.log(suHo2);
console.log(suHo2.name);

/**
 * Configurable
 */

Object.defineProperty(suHo2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(suHo2, 'height'));

// Object.defineProperty(suHo2, 'height', {
//     enumerable: false,
// })

Object.defineProperty(suHo2, 'height', {
    value: 173,
});
console.log(Object.getOwnPropertyDescriptor(suHo2, 'height'));

Object.defineProperty(suHo2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(suHo2, 'height'));

Object.defineProperty(suHo2, 'height', {
    writable: true,
});