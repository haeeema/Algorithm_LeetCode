/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    filteredArr = [];
    for (var k = 0; k < arr.length; k++) {
        if (fn(arr[k], k)) {
            filteredArr.push(arr[k]);
        }
    }
    return filteredArr;
};