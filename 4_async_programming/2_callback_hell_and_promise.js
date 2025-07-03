/**
 * Callback
 */

// function waitAndRun() {
//     setTimeout(() => {
//         console.log('끝')
//     }, 2000)
// }

// waitAndRun();

// 콜백 지옥
// function waitAndRun2() {
//     setTimeout(() => {
//         console.log('1번 콜백 끝');

//         setTimeout(() => {
//             console.log('2번 콜백 끝')

//             setTimeout(() => {
//                 console.log('3번 콜백 끝')
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }

// waitAndRun2();

/**
 * Promise
 */

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000)
});

// timeoutPromise.then((res)=>{
//     console.log('---then---');
//     console.log(res);
// });

// const getPromise = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완료');
//     }, seconds * 1000);
// });

// getPromise(1).then((res)=> {
//     console.log('---first then---');
//     console.log(res);

//     return getPromise(3);
// }).then((res)=> {
//     console.log('---second then---');
//     console.log(res);

//     return getPromise(4);
// }).then((res)=> {
//     console.log('---third then---');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if(xxx) {
        //     resolve('성공');
        // }else{
        //     reject('에러');
        // } //이런식으로 사용 가능
        resolve('에러');
    }, seconds * 1000);
});

// getPromise(1).then((res)=> {
//     console.log('---first then---');
//     console.log(res);
// }).catch((res) => {
//     console.log('---first catch---');
//     console.log(res);
// }).finally(()=> { // finally는 argument를 받지 않음
//     console.log('---finally---');
// })


Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res)=> {
    console.log(res);
}); // Promise.all을 하면 가장 느린 함수 기준으로 then/catch가 불린다.
// 1+1+4=6 6초가 걸리지 않고 4초가 걸렸기 때문에 실행은 동시에 된다는걸 알수 있음
