// // count vowel characters of a string
// function countVowel(anyName : string) {
//     let vowelCount = 0;
//     for(let val of anyName) {
//         if(val == "a"  || val== "e" || val == "i" || val == "o" || val == "u"){
//             vowelCount++;
//         }
//     }
//     console.log(`Number of vowels in your string  = ${vowelCount}`)
//     }
// countVowel("iabcdeeeeeeeeaaaaaaabbiiiooooouuuuuuuuuuuuuu")
// //  Prime numbers are greater than 1 and have exactly  divisors: by the number itself.
// function checkPrime(num : number){
//                     //2-20 < 21
//    for(let i = 2; i < num; i++){   
//     if(num % i == 0 ){
//         return `The ${num} is not  prime number`;
//     }else{
//         return `The ${num} is  prime number`}
//     }
//    }
// console.log(checkPrime(21))
// write a javascript funtion to find first not repeated character
// function firstNotRepeatedCharacter(str : string) {
// let arry: any = []
//    for(let val of str){
//     if(str.indexOf(val) === str.lastIndexOf(val)){       // here (str.indexOf("") ) is a string method to check first index of any string & (str.lastIndexOf("z")) is a string method to check last index of any string .
//         arry.push(val)
//   }    
//                                                    // val acess each element of string and iterate , on any element of the val when the if condition becomes true then we get our non repeated element in the strin
// }
// return arry;
// }
// console.log(firstNotRepeatedCharacter("azanxyzvgyehiopkljmn"))
// write a function that returns a square of a number
// function square(a: number, b: number): number {
//     return a ** b;
// }
// console.log(square(100,2))
//function displayMessage() print hello world using console.log() function
var printValue = function () {
    console.log("hello world");
};
printValue();
