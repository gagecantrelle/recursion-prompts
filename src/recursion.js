// Solve all of the following prompts using recursion.
// use git push origin master
// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n, total = 1) {
  //check if n is equal to 1
  if (n === 0) {
    //return total
    return total;
    //check if n is less than 0
  } else if (n < 0) {
    //return null
    return null;
  }
  //set total to be equal to itself times n
  total *= n;
  //return the function with n equaling itself mines 1 and the current total
  return factorial(n - 1, total);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array, add = 0, num = 0) {
  //check if arr.length equal to num
  if (array.length === num) {
    //return sum
    return add;
  };
  //set add to equal itself plus the current value in array
  add += array[num];
  //return the function with the same array, updated add, num plus one
  return sum(array, add, num + 1);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
};

// 4. Check if a number is even.
var isEven = function (n) {
  //check if n is equal to zero or one
  if (n === 0) {
    //return true
    return true;
  } else if (n === 1) {
    //return false
    return false;
  }

  //check if n is a postive number
  if (n < 0) {
    //change n to be postive
    n *= -1;
    //return function with postive n
    return isEven(n);
    //run if n is postive
  } else {
    //return function with n mines 2
    return isEven(n - 2);
  }
}


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n, sum = 0) {

  //add up all numbers below a given number, for example
  // 10 = 9 + 8 + 7...

  //check if n = 0

  if (n === 0) {
    return sum
  }
  if (n < 0) {

    // if n is negative
    n += 1
    sum += n

    return sumBelow(n, sum)

  } else {
    //sets n to one number below it
    n -= 1
    //adds n to the sum
    sum += n
    //does the same thing again until n = 0
    return sumBelow(n, sum)
  }

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y, arr = []) {
  //check if there are any integers between the numbers
  if (x === y) {
    return arr
  } else if (x - 1 === y) {
    return arr
  } else if (x + 1 === y) {
    return arr
  }

  //checks if x is negative
  if (x < 0) {
    //checks if the negative number goes to a positive number
    if (x < y) {
      arr.push(x + 1)
      return range(x + 1, y, arr)
    } else {
      arr.push(x - 1)
      return range(x - 1, y, arr)
    }
  } else {
    //for when x is positive
    if (x < y) {
      arr.push(x + 1)
      return range(x + 1, y, arr)
    }
    //checks if the nuber goes down from x
    else {
      arr.push(x - 1)
      return range(x - 1, y, arr)
    }
  }

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp, tot = 1, count = 0) {
  //check if exp is equal to count
  if (exp === count) {
    //check if exp is negative
    if (exp < 0) {
      //return tot divided by one
      return 1 / tot
      //run if false
    } else {
      //return tot
      return tot
    }
  }
  //set tot equal to itself times base
  tot *= base
  //check if exp is negative
  if (exp < 0) {
    // return the function with base, exp, tot, and count mines one
    return exponent(base, exp, tot, count - 1)
    //run if false
  } else {
    // return the function with base, exp, tot, and count pulse one
    return exponent(base, exp, tot, count + 1)
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n, check = 1) {
  //check if n is equal to check
  if (n === check) {
    //return true
    return true;
    //check if check is greater than n
  } else if (check > n) {
    //return false
    return false
  }
  //return the function with n and check times two
  return powerOfTwo(n, check * 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (string, arr = [], newString = '') {
  //check if string length is the same as newString length
  if (string.length === newString.length) {
    //return new string
    return newString;
  }
  //check if arr has any values
  if (arr.length === 0) {
    //put each chacter in the string into arr
    arr = string.split("");
  }
  //add the last chacter in newString and remove it from arr
  newString += arr.pop();
  //return the function with string, arr, and newString
  return reverse(string, arr, newString);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string, noSpace = false) {
  //check if the length os zero or one
  if (string.length === 0 || string.length === 1) {
    //return true
    return true;
  }
  //check if noSpace is false
  if (noSpace === false) {
    //set string to be a string with no spaces and captile chacter
    string = string.replace(/ /g, '')
    string = string.toLowerCase();
    //set noSpace to be true
    noSpace = true;
  }
  //check if the first and last chacter are true
  if (string[0] === string[string.length - 1]) {
    //create a variable that equal to the string with the frist and last chacter remove  
    let str = string.slice(1);
    str = str.slice(0, (str.length - 1))
    //return the string with the str and noSpace
    return palindrome(str, noSpace);
    //run if false
  } else {
    //return false
    return false;
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function (x, y, value = 0, count = 0) {
  if (count === y) {
    return value;
  } else if (x === 0 || y === 0) {
    return 0
  } else if (y === 1) {
    return x;
  }


  if (x > 0 && y > 0) {
    value = value + x;
    count = count + 1;
  } else if (x < 0 && y > 0) {
    value = value + x;
    count = count + 1;
  } else if (x < 0 && y < 0) {
    value = value + (x - x - x);
    count = count - 1;
  }


  return multiply(x, y, value, count)
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2, arr1 = 'none', arr2 = 'none') {
  //check if arr1 and arr2 length are both zero
  if (arr1.length === 0 && arr2.length === 0) {
    //return zero
    return true;
  }
  //check if arr1 is equal to a string of 'none'
  if (arr1 === 'none') {
    //set arr1 to be an array of chacters from str1
    arr1 = str1.split("");
    //set arr2 to be an array of chacters from str2
    arr2 = str2.split("");
  }
  //check if the first value from arr1 and arr2 ar the same
  if (arr1[0] === arr2[0]) {
    //remove the first value from arr1 and arr2 
    arr1.shift();
    arr2.shift();
    //return the function with str1, str2 arr1, and arr2
    return compareStr(str1, str2, arr1, arr2);
    //run if false
  } else {
    //return false
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str, arr = []) {
  //check if string length is zero
  if (str.length === 0) {
    //return arr
    return arr
  }
  //push the first chacter in the str into arr
  arr.push(str[0]);
  //remove the first chacter
  let newStr = str.slice(1)
  console.log(newStr)
  //return function with newStr and arr
  return createArray(newStr, arr);
};

// 17. Reverse the order of an array
var reverseArr = function (array, arr = []) {
  //check if array length is equal to zero
  if (array.length === 0) {
    //return arr
    return arr;
  }
  //push the first value of array into arr
  arr.unshift(array[0]);
  //remove the first value of array
  array.shift();
  //return function with array and arr
  return reverseArr(array, arr);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length, array = []) {
  //check if length is equal to array length
  if (length === array.length) {
    //return array
    return array;
  }
  //push the value into array
  array.push(value);
  //return the function with value, length, and array
  return buildList(value, length, array)
};

//19.count the occurrence of a value inside a list
//countOccurrence([2,7,4,4,1,4], 4) return 3
var countOccurrence = function (array, value, total = 0) {
  //check if array length is zero
  if (array.length === 0) {
    //return total
    return total
  }
  //check if first value in array is equal to the given value
  if (value === array[0]) {
    //increase total value
    total++
  }
  //remove the first value of array
  array.shift();
  //return the function with array, value, total
  return countOccurrence(array, value, total)
}

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback, arr = []) {
  //check if array length is zero
  if (array.length === arr.length) {
    //return arr
    return arr
  }
  //push the fist value in arr after runing it through the callback
  arr.push(callback(array[arr.length]))
  //return the function with array, callback, and arr
  return rMap(array, callback, arr);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n, fib) {

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n, index = 'none', fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], count = 0) {

  //the default value for index
  if (index !== 'none') {
    return index
  } else if (n < 0) {
    return null
  } //if the given value is a negative number, return null

  if (n === count) {
    index = fib[0]
    return index
  } // if n is equal to the count, set the index to the first value of fib and return the index



  fib.shift()
  //deletes the first index in fib
  count++
  //increases count by 1

  return nthFibo(n, index, fib, count)
  //loops again
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, arr = [], count = 0) {

  //checks if the new array is equal to the original array, if it is, then return the new array
  if (arr.length === input.length) {
    return arr
  }

  arr.push(input[count].toUpperCase())
  //pushes the current index to the new array in uppercase

  return capitalizeWords(input, arr, count + 1)
  //loops again

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array, arr = [], count = 0) {

  //checks if the new array is equal to the original array, if it is, then return the new array
  if (arr.length === array.length) {
    return arr
  }

  var firstLetter = array[count][0].toUpperCase()
  //takes the first letter of the current string
  var firstString = array[count].slice(1)
  //takes the rest of the words


  arr.push(firstLetter + firstString)
  //combines the now uppercase letter with the rest of the string and pushes to the new array

  return capitalizeFirst(array, arr, count + 1)
  //loops again

};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj = {}) {

  if (str.length === 0) {
    return obj
  }
  //if the string is empty, returns the object


  if (obj[str[0]]) {
    obj[str[0]] += 1
  } else {
    obj[str[0]] = 1
  }
  //if there is already a key with that letter, it will add onto it, if not, it makes a new key with the number 1

  var newStr = str.slice(1)
  //removes the first letter

  return letterTally(newStr, obj)
  //loops again

};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list) {
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function (array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
