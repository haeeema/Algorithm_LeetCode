/**
 * @param {number} millis
 * @return {Promise}
 */

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

/*
async function sleep(millis) {
    await setTimeout(function() {}, millis)
}
// setTimeout 함수는 Promise를 반환하지 않기 때문에 await 키워드로 처리할 수 없습니다.
*/

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */