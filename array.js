
// looping over each array
let arr = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
for (let i =1 ; i<=arr.length ; i++){
    console.log(arr[i-1]);
}

 // for of  Returns: The values of an iterable (e.g., array, string, Map, Set, etc.).

//  let arr = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
for(let anyName of arr){
    console.log(anyName);
}


// for in  (objects keys)
let person = {
    name: "Suryansh",
    age: 25,
    city: "Jalandhar",
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


// for...in iterates over keys, which are the indices for arrays.
// Use for...in for objects, not arrays, 


// When you write person.key, JavaScript looks for a property literally named key inside the person object. Since the person object has no property called key, it returns undefined.
// To access the value of the property dynamically, you should use bracket notation (person[key]) instead of dot notation (person.key)



// practice for given array marks of students [[10, 20, 30, 40, 50, 60]  find avg marks of entire class
//for of
let numbers = [10, 20, 30, 40, 50, 60];
let sum = 0;
for (let val of numbers){
    sum+=val;
}
let avg =sum / numbers.length;
console.log(avg);


//for 0f loop
let prices = [100, 200, 300, 400, 500];
 let i =0;
 for(let val of prices){
   let  offer = val/10;
     prices[i] = prices[i] - offer;
     console.log(`value after offer ${prices[i]}`);
     i++;
 }
console.log(prices);

// for
let prices = [100, 200, 300, 400, 500];

for(let i = 0; i < prices.length ; i++){
    let offer = prices[i]/10;
    prices[i] -= offer;
}
console.log(prices);


// largest element in array 
let arr =[2,4,6,7,10];
let max = arr[0];
for (let i = 0 ; i<arr.length ; i++){
    if (arr[i] > max){
        max= arr[i]
    }
}
console.log(`largerst element is ${max}`)



// remove duplicates from array

let duplicateElements = [1, 2, 3, 4, 5, 3, 2, 4, 1, 5];

let uniqueElements = [...new Set(duplicateElements)];
console.log(uniqueElements);

// sort ascending
let unsortedArray = [23, 1, 56, 12, 89, 4, 78, 34];
unsortedArray.sort((a,b)=>a-b);
console.log(unsortedArray)

//sort descending
unsortedArray.sort((a,b)=>b-a);
console.log(unsortedArray)


// multiply each element of array by 2
let numbers = [1, 2, 3, 4, 5];
let multiplied = numbers.map(num => num * 2); // Create a new array with each element multiplied by 2
console.log(multiplied);


// 2nd largest aray
let numbers = [10, 20, 50, 30, 40, 50];

function findSecondLargest(arr) {
    let uniqueNumbers = [...new Set(arr)]; // Remove duplicates
    uniqueNumbers.sort((a, b) => b - a); // Sort in descending order
    return uniqueNumbers[1]; // Return the second largest
}

console.log(findSecondLargest(numbers));
