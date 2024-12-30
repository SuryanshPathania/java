//sum of the first 5 natural numbers.

let sum = 0;
for (let a = 1; a<=5 ; a++){
    sum += a; // sum = sum +a
}
console.log(sum);

// prints all even numbers from 0 to 100
for (let i = 0 ; i <=100 ; i++){
    if (i %2 == 0){
        console.log("num = " , i)
    }
}


//prints odd numbers from 0 to 100
for (let i = 0 ; i <=100 ; i++){
    if (i %2 !== 0){
        console.log("num = " , i)
    }
}

//guess game 
let gamenumber = 25;
let userNum = prompt("enter the number");
while (gamenumber != userNum){
    userNum = prompt("wrong guess enter the number again");
}
console.log("congratulations you enter right number"); 

//capital letter mein karne k lie
// let str = "hello my name is suryansh";
// str =str.replace("h","H");
// console.log(str);
//
let str = "hello my name is suryansh";
str =str[0].toUpperCase()+str.slice(1);
console.log(str);

