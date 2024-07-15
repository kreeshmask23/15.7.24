/*let n=30;
if(n%3==0 && n%5==0){
    console.log("FizzBuzz");

}
else if(n%3==0){
    console.log("Fizz");
}
else{
    console.log("Buzz");
}*/
/*function isPalindrome(str){
    let j =str.length-1;
    for(let i=0;i<str.length/2;i++){
        if(str[i]!=str[j]){
            return false;
        }
        j--;
    }
    return true;
}
let str1="malayalam";
let str2="hello";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));*/
/*function LargestNumber(number){
    if(number.length === 0){
        throw new Error("Array is empty");
    }
    let largest = number[0];
    for(let i = 1;i<number.length; i++){
        if(number[i]>largest){
            largest=number[i];
        }
    }
    return largest;
}
const array=[10,23,5,46,16];
const largestNumber=LargestNumber(array);
console.log("The largest number is:",largestNumber);*/
/*function countCharacter(str) {
    var Count = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (Count[char]) {
            Count[char]++;
        } else {
            Count[char] = 1;
        }
    }
    return Count;
}

var string = "hello world";
console.log(countCharacter(string));*/

/*function LongestWord(str) {
    let words = str.split(' ');
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {

        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

let string = " I am Kreeshma";
const longestWord=LongestWord(string);
console.log(longestWord);*/

/*function factorial(n) {
    
    if (n === 0) {
        return 1;
    }
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


var number = 6;
console.log("The factorial of " + number + " is " + factorial(number)); // 120*/

/*function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
var celsius = 23;
var fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.");*/

function findMissingNumber(nums) {
    var n = nums.length;
    var expectedSum = (n * (n + 1)) / 2;
    var actualSum = nums.reduce((acc, num) => acc + num, 0);
    var missingNumber = expectedSum - actualSum;
    return missingNumber;
}

var nums = [0,1,2,4];
console.log("The missing number is:", findMissingNumber(nums)); 
