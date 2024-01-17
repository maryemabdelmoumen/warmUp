/**
 * 1 write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 *
 * @function reverseArray
 * @param {Array<number>} array
 * @return {Array<number>}
 */
function reverseArray(array) {
    // Create a new array to store the reversed elements
    const reversedArray = []
    // Iterate over the input array in reverse order and push elements to the new array
    for (var i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i])
    }
  
    return reversedArray
  }

/**
 * 2 Write a function called laugh() that takes one parameter,
 * num that represents the number of "ha"s to return.
 * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */

function laugh(num) {
    var result = ""
    for (var i = 0; i < num; i++) {
        result += "ha"
    }
    return result
}


/**
 * 3 Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */

var findAll = function (array, n) {
    // your code here
        var result = []
        for (var i = 0; i < array.length; i++) {
          if (array[i] === n) {
            result.push(i)
          }
        }
      
        return result
      }
      
