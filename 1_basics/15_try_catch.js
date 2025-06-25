/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */

function runner() {
    try {
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다!'); //에러를 던지면 다음 코드는 실행이 안됨

        console.log('Suho');
    } catch (e) {
        console.log('---catch---');
        console.log(e); //에러 던진걸 잡을때 사용
    } finally {
       console.log('---finally---'); // try에서 에러가 났든 안 났든 무조건 실행 (옵션)
    }
}

runner();