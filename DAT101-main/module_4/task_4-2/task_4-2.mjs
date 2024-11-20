"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const OneToTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


for (let i = 0; i < OneToTwenty.length; i++) {
    console.log(OneToTwenty[i]);
}
printOut("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const OneToTwenty2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


for (let i = 0; i < OneToTwenty2.length; i++) {
    console.log(OneToTwenty2.join(' - '));
}
printOut("1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 - 12 - 13 - 14 - 15 - 16 - 17 - 18 - 19 - 20");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const HowAreYou = "Hei på deg, hvordan har du det?";


const words = HowAreYou.split(' ');


for (let i = 0; i < words.length; i++) {
    console.log(`Word number: ${i + 1}, Index: ${i}, Word: "${words[i]}"`);
}

printOut("Word number: 1, Index: 0, Word: Hei, Word number: 2, Index: 1, Word: på, Word number: 3, Index: 2, Word: deg and etc.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", 
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", 
    "Maria", "Elisabeth", "Kristin"];


function removeElement(array, text) {
const index = array.indexOf(text); 
if (index !== -1) {
array.splice(index, 1); // Remove the element if it exists
console.log(`${text} has been removed from the array.`);
} else {
console.log(`${text} does not exist in the array.`);
}
}


removeElement(girlNames, "Nina"); 
removeElement(girlNames, "Bob");  
console.log(girlNames); 

printOut("Nina has been removed from the array, Bob does not exist in the array.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const allNames = [...girlNames, ...boyNames];

console.log(allNames)

printOut("'Anne', 'Inger', 'Kari', 'Marit', 'Ingrid', 'Liv', 'Eva', 'Berit', 'Astrid', 'Bjørg', 'Hilde', 'Anna', 'Solveig', 'Marianne', 'Randi', 'Ida', 'Maria', 'Elisabeth', 'Kristin', 'Jakob', 'Lucas', 'Emil', 'Oskar', 'Oliver', 'William', 'Filip', 'Noah', 'Elias', 'Isak', 'Henrik', 'Aksel', 'Kasper', 'Mathias', 'Jonas', 'Tobias', 'Liam', 'Håkon', 'Theodor', 'Magnus'");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
};


const keys = Object.keys(EWeekDays);


for (let key of keys) {
    console.log(`${key}:`, EWeekDays[key]);
}

printOut("WeekDay1: {value: 1, name: 'Mandag'}");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);


const ascending = randomNumbers.slice().sort((a, b) => a - b);


const descending = randomNumbers.slice().sort((a, b) => b - a);


console.log("Original:", randomNumbers);
console.log("Ascending:", ascending);
console.log("Descending:", descending);

printOut("1 1 2 2, 19 18 18 18");
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
