/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let alpa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let result = "";
    while (columnNumber > 0) {
        let temp = columnNumber % 26;
        if (temp == 0) {
            result = "Z" + result;
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            result = alpa[columnNumber % 26 - 1] + result;
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    return result;
};