/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    preferences.forEach(function(item, i, arr) {
        if(item > 0 && arr[item-1] > 0 && i+1 != arr[item-1] && i+1 === arr[arr[item-1]-1]) {
            count++;
        }
    });
    return count/3;
};