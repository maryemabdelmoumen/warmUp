/**
 * 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
 */
function larger(str1, str2){ 
    if(str1.length > str2.length){
        return str1
    }
    return str2

}

function smaller(str1, str2){
    if(str1.length<str2.length){
        return str1
    }
    return str2

}


/**
 * 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
 * counting(5); // => '1, 2, 3, 4, 5'
 * counting(1); // => '1'
 * counting(3); // => '1, 2, 3'
 */
var count = 0

function counting(n) {
  count++
  var result = ''
  for (let i = 1; i <= count; i++) {
    result += i
    if (i < count) {
      result += ', '
    }
  }
  return result
}



/**
 * 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
 * welcome 1
 * welcome 2, meet 1
 * welcome 3, meet 1 and 2
 * welcome 4, meet 1, 2 and 3
 * welcome 5, meet 1, 2, 3 and 4
 */
function meetNGreet(n) {
    for (var i = 1; i <= n; i++) {
      var welcome= 'welcome ' + i;
      var meet = ''
      
      if (i > 1) {
        meet = ', meet '
        for (var j = 1; j < i; j++) {
          meet += j
          if (j < i - 1) {
            meet += ' and '
          }
        }
      }
      
      return welcome + meet
    }
  }
  

// 4- Write a function shortestWord that accept array of strings, and return the shortest string

function shortestWord(array){
    var shortest = array[0]
    for (var i = 1; i < array.length; i++) {
      if (array[i].length < shortest.length) {
        shortest = array[i]
      }
    }
  
    return shortest
  }
  
