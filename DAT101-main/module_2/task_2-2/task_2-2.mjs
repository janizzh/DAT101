"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Task 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let x = 2 + (3 * (2 - 4) * 6);
console.log(x)
printOut("2 + (3 * (2 - 4) * 6) = -34");
printOut(newLine);

printOut("--- Task 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const oneInch = 25.4; // one inch = 25.4 mm
let DistanceToConvert = 25340; // 25 meters and 34 centimeters = 25340 mm
let InInches = DistanceToConvert / oneInch 
let answer = InInches.toFixed(2); // 2 decimal places
console.log(answer)
printOut("25 meters and 34 centimeters = 997.64 inches (2 decimal places) ");
printOut(newLine);

printOut("--- Task 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const oneHour = 60; // one hour = 60 minutes
let threeDays = 24*3*60 // 4230 minutes in 3 days
let twelveHours = 12*60 // 720 minutes in 12 hours
let fourteenMinutes = 14 // already given in the task
let fortyfiveSeconds = 45/60 // dividing 45 by 60 to get 0.75 minutes in 45 seconds
let totalMinutes = threeDays+twelveHours+fourteenMinutes+fortyfiveSeconds
console.log(totalMinutes)
printOut("3 days, 12 hours, 14 minutes and 45 seconds = 5054.75 minutes");
printOut(newLine);

printOut("--- Task 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const MinutesToConvert = 6322.52;
const MinutesInOneDay = 60 * 24 // 1440 minutes a day
let MinutesToDays = MinutesToConvert/MinutesInOneDay
let MinutesToDaysNoDecimal = MinutesToDays.toFixed(0) // 0 decimals giving us 4 days
console.log(MinutesToDaysNoDecimal)
let RemainingMinutes = MinutesToConvert-60*4*24 
let RemainingMinutesTwoDecimal = RemainingMinutes.toFixed(2) // remaining minutes after 63522-5760 (4 days) = 562.52 minutes
console.log(RemainingMinutesTwoDecimal)
let MinutesToHours = RemainingMinutesTwoDecimal/60 // 9 hours in 562.52 minutes
let MinutesToHoursNoDecimal = MinutesToHours.toFixed(0) // 9 hours no decimals
console.log(MinutesToHoursNoDecimal)
let LastRemainingMinutes = RemainingMinutesTwoDecimal-60*9 // gives us 23 but i will use 22 as my answer to get the seconds at last
let LastRemainingMinutesNoDecimal = LastRemainingMinutes.toFixed(0)
console.log(LastRemainingMinutesNoDecimal)
let MinutesToSeconds = 0.52*60 // gives us 31 seconds
console.log(MinutesToSeconds)
printOut("6322.52 minutes equals: 4 days, 9 hours, 22 minutes, 31 seconds");
printOut(newLine);

printOut("--- Task 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const USD = 8.6;
const NOK = 76;
let ExchangeRate = 76/8.6
let ExchangeRateTwoDecimals = ExchangeRate.toFixed(2) //gives us that 1 USD = 8.84 NOK
console.log(ExchangeRateTwoDecimals) 
let FiftyFourUsdToNok = 54*ExchangeRateTwoDecimals
let FiftyFourUsdToNokNoDecimal = FiftyFourUsdToNok.toFixed(0) //gives us that 54 USD = 477 NOK using the exchange rate of 8.84 NOK per USD
console.log(FiftyFourUsdToNokNoDecimal)
alert(FiftyFourUsdToNokNoDecimal)
let FourHundredAndSeventySevenNokToUsd = 477/ExchangeRateTwoDecimals
let FourHundredAndSeventySevenNokToUsdNoDecimal = FourHundredAndSeventySevenNokToUsd.toFixed(0)
console.log(FourHundredAndSeventySevenNokToUsdNoDecimal)
alert(FourHundredAndSeventySevenNokToUsdNoDecimal)
printOut("54 USD = 477 NOK | 477 NOK = 54 USD");
printOut(newLine);

printOut("--- Task 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Task 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p = 5;
let z = 3;
let s = p > z 
alert (s) // gives us TRUE, 5 is greater than 3
let w = 7, o = 7; 
let j = w >= o
alert(j)
let a = "a", b = "b";
alert(a > b)
alert("a" > "1")
let abcd;
alert(2500 < abcd) // javascript gives false but statement is true
let arne, thomas;
alert(arne !== thomas) // gives false but statement is true
alert(2 == 5)
let bcd;
alert(abcd > bcd)
printOut("5 > 3 is true, 7 >= 7 is true, a > b is false, 1 < a is false, 2500 < abcd is true, arne !== thomas is true, 2 === 5 false is true, abcd > bcd === false is false ");
printOut(newLine);

printOut("--- Task 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let ToFiveFour = Number("254"); // using the Number() command to convert from string to integer
alert(ToFiveFour) //returns 254
let FiveSevenPointTwentyThree = Number("57.23")
alert(FiveSevenPointTwentyThree)  // returns 57.23
let TwentyFiveKroner = Number("25 kroner")
alert(TwentyFiveKroner)
printOut(" '254' returns 254, '57.23' returns 57.23, '25 kroner'returns NaN ");
printOut(newLine);

printOut("--- Task 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360 + 1)
console.log(r)
printOut("Math.floor(Math.random() * 360 + 1)");
printOut(newLine);

/* Task 10*/
printOut("--- Task 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const DaysToConvert = 131;
const DaysInOneWeek = 7;
let WeeksIn131Days = Math.floor(DaysToConvert/7); // gives us 18 weeks in 131 days (rounded down by using math.floor in actuality its 18.74)
let DaysLeft = DaysToConvert % 7; // By using modulus we get the remaining 5 days 
console.log(DaysLeft) 
printOut("131 days equals 18 weeks and 5 days.");
printOut(newLine);