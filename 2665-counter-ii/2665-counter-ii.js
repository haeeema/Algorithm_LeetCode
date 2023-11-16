/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */


var createCounter = function(init) {
    let temp = init;
    const increment = function() {
        return ++temp;
    }
    const decrement = function() {
        return --temp;
    }
    const reset = function() {
        temp = init;
        return temp;
    }
    return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */