/**
 * @return {null|boolean|number|string|Array|Object}
 */

 /**
Array.prototype.last = function() {
    if(this === []) {
        return -1;
    } else {
        return this[this.length - 1];
    }
};
 */

// this === [] 이런식으로 비교하게되면, 값과 타입이 모두 같은지를 확인하게 되는데,
// 두 배열이 같은 내용을 가지더라도 서로 다른 객체일 경우 '===' 비교는 항상 'false' 반환

Array.prototype.last = function() {
    if(this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1];
    }
};

// JavaScript에서 'Array'는 내장 객체이며, 이러한 내장 객체에 메소드나 속성을 추가하고자 할때,
// `prototype`을 사용합니다. 객체의 'prototype'은 해당 객체의 프로토타입 체인에 있는 객체를 나타냄.
// 이를 이용하여 해당 객체의 모든 인스턴스가 공유하는 메소드나 속성을 추가할 수 있습니다.

// 위의 문제는 'Array' 객체의 프로토타입에 'last'라는 메소드를 추가하는 코드

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */