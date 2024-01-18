/**
 * 1 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 * followed by a number starting from zero(solve it using while loop).
 * example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */
function reverseStr(str) {
    var reversedString = ''
    var index = 0
    while (index < str.length) {
        reversedString = str[index] + index + reversedString
        index++
    }

    return reversedString
}


/**
 * 2 - write a function called (sameLength) that takes array of strings and returns an array of the strings that have the same length
 * example :  ['hi','hello','welcome','hy'] ==> ["hi","hy"]
 *
 * @param {Array<string>} array
 * @return {Array<string>}
 */
function sameLength(array) {
    var  resultArr = []
    if (array.length < 2) {
        return resultArr
    }
    const referenceLength = array[0].length
    for (var i = 1; i < array.length; i++) {
        if (array[i].length === referenceLength) {
            resultArr.push(array[i])
        }
    }
    return resultArr
}
