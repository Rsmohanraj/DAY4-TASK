const isOdd = (n) => (n & 1) === 1;

const num = [1,2,3,4,5,6,7,8,9];

console.log( `Odd numbers are ${ num.filter( n => isOdd(n))}` );
//question-2
const swap = (str) => str.split('').reduce((acc, char) =>
  acc += char === char.toLowerCase() ? char.toUpperCase() :
  char.toLowerCase(), '')
console.log(swap('Peter'))

//question-3
const sum = (num1, num2) => {
    
    
    console.log(3,5);
    }
    sum();
    //question-4
    const newArray = [1, 3, 2, 5, 10];
const Prime = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(Prime);
//question-5
const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(getAllPalindromes(["hello", "noon"]));