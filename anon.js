// question-a

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds = arr.filter(n => n%2)

console.log(odds)

//question-b
const str = "foo bar baz";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr)
//question-c

var sum = (num1, num2) => {
    
    if((num1.value !== 0)||(num2.value !== 0)){
        
    }
        return num1 + num2
    }
    console.log(sum(3,4))

  //question-c
  var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <=number.length; i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
 //question-d
 var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
//question-e
let name = "civic";
let strReverse = str.split("").reverse().join("");
if (name === strReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}
//question-f
const median = (a1, a2) => {
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  
  let a = [0,2,3,5,9];
  let b = [1,4];
  console.log(median(a,b));
  //question-g
  var month = ["january", "february", "january",  "march", "february", "february"];   

     function removeDuplicates(arr) { 

            return month.filter((item, index) => arr.indexOf(item) === index);

     }    

     console.log(removeDuplicates(month));
     //question-h
     const numList = [1, 2, 3, 4, 5, 6]
const p = 3

function changeArray(arr, shift) {
  for (let i = 0; i < shift; i++) {
    arr.unshift(arr.pop())
    console.log(`${i+1}:`, arr)
  }
}

console.log(changeArray(numList, p))
    