// Using the function keyword:

function mul(a, b) {
    console.log(a * b);
}
mul(3, 5);


// Using an arrow function:

const mul = (a, b) => {
    console.log(a * b);
};
mul(3, 5);


// using IIFE
((a, b) => {
    console.log(a * b);
})(3, 5);


// create a function using function keyword  that takes string as an argument and returns number of  vowels in string
function getvowel(str){
    let count = 0;
   for(  char of str ){
       if(char ==="a" || char ==="e" || char ==="i" || char==="o" ||char==="u" ){
           count++
       }
   
      
   }
    return count
    }
   console.log(getvowel("aaaaaae"))


   /// with arrow function
   function getvowel(str){
    let count = 0;
   for(  char of str ){
       if(char ==="a" || char ==="e" || char ==="i" || char==="o" ||char==="u" ){
           count++
       }
   
      
   }
    return count
    }
   console.log(getvowel("aaaaaae"))



   //callback function
   function abc(){
    console.log("hello Suryansh")
}
function newFunc(abc){
    return abc
}
newFunc(abc)()

// for each  (forEach) // will only used for arrays
num = [1 ,2, 3, 4, 5];
num.forEach((val) => {
    console.log(val);
})

//filter
const arr = [1, 2, 34, 5, 6, 7, 7];
const newArr = arr.filter((num) => {
  return num % 2 == 0;
});
console.log(newArr);


//reduce
const arr = [1, 2, 3, 5, 6,];
const newArr = arr.reduce((rus , current) => {
  return rus + current ;
});
console.log(newArr);
 
//largest in array 
const arr = [1, 2, 3, 5, 6,];
const newArr = arr.reduce((rus , current) => {
  return rus > current ? res : current ;
});
console.log(newArr);


//// take number n as input from user create an array of numbers from 1 to n


// take number n as input from user create an array of numbers from 1 to n

let n = prompt("Enter number");
 let arr = [];
 for(let i = 1 ; i<=n ; i++){
     arr[i-1] = i 
     
 }
console.log(arr)

// use reduce method to calculate sum of all numbers in array
 let abc = arr.reduce((res,num) => {
    return res + num ;
})
console.log("sum = ",abc)
   
// factorial of n or product of all numbers   
let efg = arr.reduce((res,num) => {
    return res * num;
})
console.log("product =" ,efg)


