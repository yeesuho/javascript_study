/**
 * Async / Await
 */

// const getPromise = (seconds)=> new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve('완료')
//     }, seconds * 1000)
// });
// // Promise로 만들은 함수만 이렇게 await를 쓸 수 있음
// async function runner() {
//     // console.log(await getPromise(1));
//     const result1 = await getPromise(1);
//     console.log(result1);

//     const result2 = await getPromise(2);
//     console.log(result2);

//     const result3 = await getPromise(1);
//     console.log(result3);
// }

// runner();

// console.log('실행 끝')

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('에러')
    }, seconds * 1000)
});
// Promise로 만들은 함수만 이렇게 await를 쓸 수 있음
async function runner() {
    try {
        // console.log(await getPromise(1));
        const result1 = await getPromise(1);
        console.log(result1);

        const result2 = await getPromise(2);
        console.log(result2);

        const result3 = await getPromise(1);
        console.log(result3);
    } catch (e) {
        console.log('---catch e---')
        console.log(e)
    } finally {
        console.log('---finally---');
    }
}

runner();

console.log('실행 끝')