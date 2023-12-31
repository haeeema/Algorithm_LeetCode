/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums2_index = 0;
    for (var i = 0; i < m + n; i++) {
        if (i >= m + nums2_index) {
            nums1[i] = nums2[nums2_index];
            nums2_index++;
        } else if (nums1[i] > nums2[nums2_index]) {
            nums1.splice(i, 0, nums2[nums2_index]);
            nums2_index++;
            nums1.pop();
        }
    }
};