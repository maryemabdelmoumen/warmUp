/**
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
 * For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
 *              capitalize("azerty") = ['AzErTy','aZeRtY']
 * The input will be a lowercase string with no spaces.
 * Good luck!
 *
 * @param {string} str
 * @return {string[]}
 */
function capitalize(str) {
    if (str.length === 0) {
        return ['', '']
    }
    var even = ''
    let odd = ''
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            even += str[i].toUpperCase()
            odd += str[i]
        } else {
            odd += str[i].toUpperCase()
            even+= str[i]
        }
    }
    return [even, odd]
}
