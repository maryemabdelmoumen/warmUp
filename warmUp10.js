/**
 * A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
 * For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
 * The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
 * Write a function  dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr.
 * The function should return −1 if array does not have a dominator. All values in arr will be >=0.
 *
 * @param {Array} arr
 * @return {number}
 */
function dominator(arr) {
    if (arr.length === 0) {
        return -1
    }
    var candidate = arr[0]
    var  count = 1
    for (var i = 1; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i]
            count = 1
        } else {
            if (candidate === arr[i]) {
                count++
            } else {
                count--
            }
        }
    }

    // Count the occurrences of the candidate
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }

    // Check if the candidate is a dominator
    if (count > arr.length / 2) {
        return candidate;
    } else {
        return -1;
    }
}
