/**
 * Immutable Object
 */

const suHo = {
    name: '이수호',
    year: 2008,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(suHo);

/**
 * Extensible
 */
console.log(Object.isExtensible(suHo));

suHo['play'] = 'game';

console.log(suHo);

Object.preventExtensions(suHo);

console.log(Object.isExtensible(suHo)); //값을 추가하지 못하게함 / 삭제는 됨

suHo['club'] = 'MC';
console.log(suHo);

delete suHo['play'];
console.log(suHo);

/**
 * Seal (봉인) = Configurable: false + 값을 추가하거나 삭제하지 못하는 상태
 */
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

console.log(Object.isSealed(suHo2));

Object.seal(suHo2);

console.log(Object.isSealed(suHo2));

suHo2['club'] = 'MC';
console.log(suHo2);

delete suHo2['name'];
console.log(suHo2);

Object.defineProperty(suHo2, 'name', {
    writable: false,
})
console.log(Object.getOwnPropertyDescriptor(suHo2, 'name'));


/**
 * Freezed (동결)
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const suHo3 = {
    name: '이수호',
    year: 2008,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isFrozen(suHo3));

Object.freeze(suHo3);
console.log(Object.isFrozen(suHo3));

suHo3['club'] = 'MC';
console.log(suHo3);

delete suHo3['name'];
console.log(suHo3);

// Object.defineProperty(suHo3, 'name', {
//     value: '김수호'
// })
console.log(Object.getOwnPropertyDescriptor(suHo3, 'name'));

const suHo4 = {
    name: '이수호',
    year: 2008,
    kimSuho: {
        name: '김수호',
        year: 2008,
    },
};
Object.freeze(suHo4);
console.log(Object.isFrozen(suHo4));
console.log(Object.isFrozen(suHo4['kimSuho'])); //상위 오브젝트를 동결해도 하위 오브젝트가 동결되는 것은 아님