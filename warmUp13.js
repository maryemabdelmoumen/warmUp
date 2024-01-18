/**
 * Write a function that accepts two arguments: an array/list of integers and another integer (n).
 * Determine the number of times where two integers in the array have a difference of n.
 * For example:
 * [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # [[5,1], [5,1], [9,5]]
 * [1, 1, 3, 3], n=2 --> 4 # [[3,1], [3,1], [3,1], [3,1]]
 *
 * @param {Array} arr
 * @param {number} n
 * @return {[]}
 */
const intDiff = function (arr, n) {
    if (arr.length < 2) {
        return 0
    }
    var count = 0
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            // Check if the difference between the pair is equal to n
            if (Math.abs(arr[i] - arr[j]) === n) {
                // Increment the count if the difference is equal to n
                count++
            }
        }
    }
    return count
}

    