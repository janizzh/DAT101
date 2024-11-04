"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 9  ;
if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let Value = 4  ;
if (Value > 0) {
  printOut("Positive");
} else if (Value < 0) {
  printOut("Negative");
} else {
  printOut("Zero")
}
printOut("Output will be Positive if Value is > 0 and Negative if Value is < 0, and any other integer that is not negative or positive wil output Zero" );
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let MPSize = Math.floor((Math.random() * 8) + 1); // A variable that generates a random number from 1 to 8 inclusive
if (MPSize >= 4) { 
  printOut("Thank you");
} else {
  printOut("The image is too small");
}
printOut("Used Math.floor and Math.random to generate a random integer from 1 to 8 inclusive, if the integer is >= 4 it will print out Thank you, otherwise The image is too small");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let MPSize2 = Math.floor((Math.random() * 8) + 1); 
if (MPSize2 >= 4) {
 printOut("Thank you");
} else if (MPSize2 >= 6) { // add else if statement to include Image is too large if MPSize is greater than or equal to 6
  printOut("Image is too large");
} else {
  printOut("The image is too small");
}
printOut("Added an else if command if MPSize is >= 6 then output will be Image is too large");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
let NeedVitaminD = monthName.includes("r") // A variable that checks if any of the random outputs in monthName contains the string 'r'
  if (NeedVitaminD = true) {
  printOut("You must take vitamin D")
} else {
  printOut("You do not need to take vitamin D")
}
printOut("Use the const monthName to check if it includes the string r and if it does, the output will be You must take vitamin D");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthName2 = "February"; // Using february as an example

let days;

if (monthName === "January" || monthName === "March" || monthName === "May" || monthName === "July" || monthName === "August" || monthName === "October" || monthName === "December") {
  days = 31;
} else if (monthName === "April" || monthName === "June" || monthName === "September" || monthName === "November") {
  days = 30;
} else if (monthName === "February") {
  days = 28; // For non-leap year
} else {
  days = -1; // Invalid month name
}

console.log(`There are ${days} days in the month of ${monthName}.`);
printOut("Since we know what months have 31 days and which have 30 we can use a bunch of if statements to find out how many days there are from the const monthName");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthName3 = "February"; // Using february as an example

let closedDays;
const Closed = "Closed"
const Open = "Temporary premises in the building next door"
if (monthName === "March" || monthName === "May") { // if monthName output is march or may the output will be "Closed"
  closedDays = Closed;
  printOut(closedDays)
} else if (monthName === "April") { // if monthName output is april, the output will be "Temporary premises in the building next door"
  closedDays = Open;
  printOut(closedDays)
} else if (monthName === "February") {
  days = 28; // For non-leap year
} else {
  days = -1; // Invalid month name
}
printOut("Replace this with you answer!");
printOut(newLine);
