"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodayInNorwegian() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString("no-NO", options);
    
    console.log(norwegianDate);
}

printTodayInNorwegian();

printOut("onsdag 6. november 2024 ");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodayInNorwegian2() {
    const today2 = new Date();
    const options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate2 = today2.toLocaleDateString("no-NO", options2);
    
    console.log(norwegianDate2);

    return today2; // Returns the Date object for more manipulations

    const dateObject = printTodayInNorwegian2();
    console.log(dateObject); // The Date object that can be manipulated 
}

function daysUntil2XKORelease() {
    const today = new Date(); // Today's date
    const releaseDate = new Date('2025-05-14');

    
    const timeDifference = releaseDate - today;
    
    // Convert the time difference from milliseconds to days
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
  
    console.log(daysRemaining);
    
    // Return the days remaining
    return daysRemaining;
}

const daysLeft = daysUntil2XKORelease();
console.log(daysLeft); 

printTodayInNorwegian();
printOut("189 days are left until the epic release of 2XKO");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circles(radius) {
    console.log("Diameter:", 2 * radius);
    console.log("Circumference:", 2 * Math.PI * radius);
    console.log("Areal:", Math.PI * radius * radius);
}

circles(4);


printOut("Diameter is 8, Circumference is 25.13 and Areal is 50.26");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangle({ width, height }) {
    console.log("Circumference:", 2 * (width + height));
    console.log("Areal:", width * height);
}

// Example usage
rectangle({ width: 4, height: 8 });

printOut("Circumference is 4 and Areal 32 when width = 4 and height = 8");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculatePrice(gross, vatGroup) {
    function getVatRate(group) {
        group = group.toLowerCase();
        if (group === "normal") return 25;
        if (group === "food") return 15;
        if (group === "hotel" || group === "transport" || group === "cinema") return 10;
        return NaN; // Unknown VAT group
    }

    const vatRate = getVatRate(vatGroup);
    if (isNaN(vatRate)) {
        console.log("Unknown VAT group!");
        return NaN;
    }

   
    const netPrice = (100 * gross) / (vatRate + 100);
    console.log(`Net price for ${vatGroup}:`, netPrice.toFixed(2));
    return netPrice;
}

// Example calls with different VAT groups
calculatePrice(125, "normal");    // 25% VAT
calculatePrice(115, "food");      // 15% VAT
calculatePrice(110, "hotel");     // 10% VAT
calculatePrice(150, "goblins");   // Unknown group

printOut("normal is 100 without 25% tax, food is 100 without 15% tax, hotel is 100 with 10% tax");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateMotion(distance, time, speed) {
    
    if (distance === undefined && time !== undefined && speed !== undefined) {
        return speed * time; // Distance = Speed * Time
    } else if (time === undefined && distance !== undefined && speed !== undefined) {
        return distance / speed; // Time = Distance / Speed
    } else if (speed === undefined && distance !== undefined && time !== undefined) {
        return distance / time; // Speed = Distance / Time
    } else {
        return NaN; 
    }
}

console.log(calculateMotion(100, 2, undefined));  // Calculate speed (100 / 2 = 50)
console.log(calculateMotion(100, undefined, 50));  // Calculate time (100 / 50 = 2)
console.log(calculateMotion(undefined, 2, 50));    // Calculate distance (50 * 2 = 100)
console.log(calculateMotion(100, undefined, undefined));  // Invalid (returns NaN)

printOut("Speed is 50 kmh, time is 2 h and distance is 100 km!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function modifyString(text, maxSize, char, insertBefore) {
    // Check if the text is smaller than the max size
    while (text.length < maxSize) {
        if (insertBefore) {
            text = char + text; 
        } else {
            text = text + char; 
        }
    }

    
    console.log(text);
    return text;
}


modifyString("This is a text", 20, "*", true);  
modifyString("This is a text", 20, "*", false); 
modifyString("Yes", 5, "!", true);      
modifyString("Yes", 5, "!", false);     

printOut("******This is a text, This is a text******");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    // Base case: if n is 1 or 0, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of n-1
    return n * factorial(n - 1);
}

// Example usage
let result = factorial(5); 
console.log(result);         

printOut("factorial(5) is 120");
printOut(newLine);
