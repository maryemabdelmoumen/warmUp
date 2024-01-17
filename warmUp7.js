/**
 * 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
 * objKey({name:'ahmed',age:20}) ==> ['name','age']
 *
 * @function objKey
 * @param {Object} obj
 * @return {Array}
 */

function objKey(obj) {
    const keysArray = []
    for (let key in obj) {
        keysArray.push(key)
    }
    return keysArray
}


/**
 * 2 - Write a function named objLength to get the length of a JavaScript object
 * objLength({name:'ahmed',age:20}) ==> 2
 *
 * @function objLength
 * @param {Object} obj
 * @return {number}
 */

function objLength(obj) {
    var  count = 0
    for (var key in obj) {
        count++
    }
    return count
}


/**
 * 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
 * objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
 *
 * @function objSort
 * @param {Array<{id: number, value: number}>} obj
 * @return {Array}
 */

function objSort(objArray) {
    for (var i = 0; i < objArray.length - 1; i++) {
        for (var j = 0; j < objArray.length - 1 - i; j++) {
            if (objArray[j].id > objArray[j + 1].id) {
                var  temp = objArray[j]
                objArray[j] = objArray[j + 1]
                objArray[j + 1] = temp
            }
        }
    }

    return objArray
} 

var  arr  = [
    { id: 2, value: 50 },
    { id: 0, value: 70 },
    { id: 1, value: 40 }
] 


var sortedArray = objSort(arr)