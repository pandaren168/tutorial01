// // var input = "ABCDE";
// // var output= "";
// // var output2="";
// // //var input2 = "abc";

// // //console.log(thisName + thisName2);

// // for (let i=input.length-1; i>= 0; i--){
// //     output = output+input[i]
// //     //console.log(input[i]);
// // }

// // for (let i= 0; i<input.length; i++){
// //     output2 =input[i]+output2
// //     console.log(output2);
// // }
// let inputArray = [
//   2, 16, 0, -100, 423, 15, 99, -2, 4, 166, 293
// ];

// let resultArray = [
//   -100, -2, 0, 2, 4, 15, 16, 99, 166, 293, 423
// ];

// function sortSmallToBig(inputArray) {
//   console.log(inputArray);
//   let outputArray = [];
//   // Do your code here
//   for (let i = 0; i < inputArray.length; i++) {
//     for (let j = i + 1; j < inputArray.length; j++){
//       if (inputArray[i] > inputArray[j]) {
//         let replaceInput = inputArray[i];
//         inputArray[i] = inputArray[j];
//         inputArray[j] = replaceInput; 
//       }
//       console.log(inputArray);
//     }
//     console.log("end of \\ \"loop\" i = " + i);
//   }
//   outputArray = inputArray;
//   console.log(outputArray);
//   return outputArray;
// }

// function tester() {
//   let actualResult = sortSmallToBig(inputArray);
//   if (actualResult.length !== resultArray.length) {
//     return console.log('Noob Shit')
//   }
//   for (let i = 0; i < actualResult.length; i++) {
//     if (actualResult[i] != resultArray[i]) {
//       return console.log('Noob Shit');
//     }
//   }
//   return console.log('You Win');
// }

// tester();

// // function reverseText(input){
// let reverseText = (input) => {
//   let output = "";
//   for (let i = 0; i < input.length; i++) {
//     output = input[i] + output;
//   }
//   return output;
// }

const express = require('express')
const test = require("./controller/test")
const app = express()
mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017",{
    useMongoClient: true
})

app.get('/hello', test.helloworld)

app.get("/test", test.createUser)

app.listen(3000, () => console.log('Example app listening on port 3000!'))