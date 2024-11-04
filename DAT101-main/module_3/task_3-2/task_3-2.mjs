"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let OneToTen = "";
let TenToOne = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
    OneToTen += " " + i.toString(); // toString prints out the content of the strings
    TenToOne += " " + j.toString()
}
printOut(OneToTen + newLine);
printOut(TenToOne + newLine);   
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ChosenNumber = 55;

let GuessedNumber = 0;

while(GuessedNumber !== ChosenNumber) {
    GuessedNumber = Math.floor((Math.random() * 60) + 1);
}
console.log(GuessedNumber)


printOut("The number is 55");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ChosenNumber2 = 789332;

let GuessedNumber2 = 0;
let GuessCount = 0;

const StartTime =  Date.now() // Gives the time before the while loop starts

while(GuessedNumber2 !== ChosenNumber2) {
    GuessedNumber2 = Math.floor((Math.random() * 1000000) + 1);
    GuessCount++;
}

const EndTime = Date.now(); // Gives the time after the while loop has ended
const TimeTaken = EndTime - StartTime; // Total time taken
console.log("The guessed number is:", GuessedNumber2);
console.log("Number of guesses:", GuessCount);
console.log("Time taken (milliseconds):", TimeTaken);

printOut("Number is 789332, Program used 66036 tries and 9 milliseconds");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// start a for loop from 2 since 1 is not a prime number, counts up to 200
for (let Number = 2; Number <200; Number++) {
    let PrimeNumber = true; 
    let divisor = 2; // 

    while (divisor <= Math.sqrt(Number)) { //checks if Number variable is divisible by any number between 2 and sqrt(Numbers)
        if (Number % divisor === 0) {
          PrimeNumber = false;
          break;
        }
        divisor++;      
        
    } 


if (PrimeNumber) {
    console.log(Number)
}

}
printOut("2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Outer loop
for (let row = 1; row <= 7; row++) {
    let rowText = ""; 
  
    // Inner loop 
    for (let col = 1; col <= 9; col++) {
      rowText += `K${col} R${row} `; 
    }
  
    // Print the accumulated text for the current row
    console.log(rowText.trim()); 
  }
  
  
printOut("K1R1 to K9R7");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let i =1; i <= 5; i++) {
    let Score = Math.floor(Math.random() * 236) + 1;
    let Percentage = (Score / 236) * 100;
    let Grade;

    if (Percentage >= 89) {
        Grade = 'A';
    } else if (Percentage >= 77) {
        Grade = 'B';
    } else if (Percentage >= 65) {
        Grade = 'C';
    } else if (Percentage >= 53) {
        Grade = 'D';
    } else if (Percentage >= 41) {
        Grade = 'E';
    } else {
        Grade = 'F';
    }
    
    console.log(`Student ${i}: Score = ${Score}, Percentage = ${Percentage.toFixed(2)}%, Grade = ${Grade}`);
}
printOut("Student 1 got a score of 82, percentage of 34.75% giving the grade F");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
