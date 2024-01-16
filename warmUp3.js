// 1 - Complete the function cube that returns the cube of x:
 //
function cube(x) {
  // your code here
  return x ** 3
}

/**
 * 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.
 */
function sameLength(string1, string2) {
    return string1.length === string2.length
}

/**
 * 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.
 * To understand how to convert from score to grade visit this link: https://bigfuture.collegeboard.org/plan-for-college/college-basics/how-to-convert-gpa-4.0-scale
 */
function scoreToGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

/**
 * Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
 * repeatString('dog', 0); // => ''
 * repeatString('dog', 1); // => 'dog'
 * repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
 * repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
 */
function repeatString(str, count) {
 // Check if count is a non-negative integer
  if (count < 0) {
       return 'Invalid count. Please provide a non-negative integer.'
        }
        var  repeatedString = ''
        for (var i = 0; i < count; i++) {
          repeatedString += str
        }
      
        return repeatedString

      }

