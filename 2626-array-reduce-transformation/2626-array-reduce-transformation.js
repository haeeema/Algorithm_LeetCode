/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length == 0) {
        return init;
        // If the length of the array is 0, it should return init.
    }

    let val = 0;

    for (var i = 0; i < nums.length; i++) {
        if (i == 0) {
            val = fn(init, nums[i]);
        } else {
            val = fn(val, nums[i]);
        }
    }

    return val;
};