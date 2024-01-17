// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

/**
 * 1- Using recursion Write a JavaScript function called (greatestCommonDivisor) to find the greatest common divisor (gcd) of two positive numbers.
 * Take into account handling when one of the inputs is not a number
 *
 * @param {number} num1
 * @param {number} num2
 * @return {boolean|number}
 */
function greatestCommonDivisor(num1, num2) {
    // Base case: Check if either num1 or num2 is not a number
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false
    }
    // Base case: Check if num2 is 0, then num1 is the gcd
    if (num2 === 0) {
        return num1
    }
    // Recursive case: Call the function with num2 and num1 % num2
    return greatestCommonDivisor(num2, num1 % num2)
}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************





/**
 * 2-Write a function called (sum) that accepts two numbers as parameters, and sum them together but without summing them together directly
 * you can only add one at each summation, you'll need to use recursion in this.
 *
 *
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function sum(x, y) {
    // Base case: Check if the second number is 0
    if (y === 0) {
        return x
    }
    // Recursive case: Call the function with incremented x and decremented y
    return sum(x + 1, y - 1)
}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin main ****************