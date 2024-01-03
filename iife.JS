function* numbers(first, last) {
  let i = first%2 ? first : ++first;
  while(i <= last) {
      yield i;
      i += 2
  }
}

console.log([...numbers(2, 10)])
// question-2
function sentenceCase (str) {
  if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();

 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(sentenceCase('PHP. java.'));
//question-3
const sum = function() {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
}();
console.log(sum(1, 2, 3))

// question-4
const array = [1, ...Array(20).keys()]; 


function Prime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));
//question-5
function isPalindrome(n) {
  if (n < 10) return false;
  const str = String(n);
  return str === [...str].reverse().join('');
}
function sumArray(arr) {
return arr
  .filter(isPalindrome)
  .reduce((a, b) => a + b, 0);
}
console.log(sumArray([12, 313, 11, 44, 9, 1]));
console.log(              313 +11+ 44);

//question-6
let numbers = [1, 2, 3, 3, 4, 5, 5];

let uniqueNumbers = [];

numbers.forEach(function(value) {
  if (uniqueNumbers.indexOf(value) === -1) {
    uniqueNumbers.push(value);
  }
});

console.log(uniqueNumbers);
//question-7


