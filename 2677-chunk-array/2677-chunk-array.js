/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    container = [];
    item = [];
    index = 0;
    for (var i = 0; i < Math.ceil(arr.length/size); i++) {
        for (var k = 0; k < size; k++) {
            if (arr[index] == null) {
                continue;
            }
            item.push(arr[index++]);
        }
        container.push(item)
        item = [];
    }
    return container;
};
