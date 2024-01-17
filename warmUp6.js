// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors


/**
 * 2-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */
var females = ['maryem','linda','oumayma']
var males = ['salim','yassine','wassim']
var instructors = ['rafik','yassine','doctor','sara']
function midElement(array) {
    if (array.length === 0) {
        return null
    }
    var middleIndex = Math.floor(array.length / 2)
    return array[middleIndex]
}


/**
 *
 * 3-write a function called (multipleEvenIndexes) that takes an array of numbers, as an argument and returns an array of numbers, multiplied by two for even indexes.
 *
 * @param {Array<number>} array
 * @return {Array<number>}
 */
function multipleEvenIndexes(array) {
    const resultArray = []
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            resultArray.push(array[i] * 2)
        } else {
            resultArray.push(array[i])
        }
    }
    return resultArray
}