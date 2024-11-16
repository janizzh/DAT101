"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensionskonto"
  };
  
  // Print all account types as a single comma-separated line
  console.log(Object.values(AccountType).join(", "));
  

printOut("Brukskonto, Sparekonto, Kreditkonto, Pensionkonto");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const AccountType2 = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensionskonto"
  };
  
  
  class TAccount {
    #type; // Private property
  
    
    constructor(initialType) {
      this.#type = initialType;
    }
  
    
    toString() {
      return this.#type;
    }
  
    
    setType(newType) {
      console.log(`Account is changed from ${this.#type} to ${newType}`);
      this.#type = newType;
    }
  }
  
  
  const myAccount = new TAccount(AccountType.Normal);
  
  
  console.log("---------- Task 2 ------------------");
  console.log(`myAccount = ${myAccount.toString()}`);
  
  
  myAccount.setType(AccountType.Saving);
  
  
  console.log(`myAccount = ${myAccount.toString()}`);
  
printOut("myAccount = Brukskonto, Account is changed from Brukskonto to Sparekonto, myAccount = Sparekonto");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Define the constant object for account types
const AccountType3 = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensionskonto"
  };
  
  
  class TAccount2 {
    #type; 
    #balance; 
  
    
    constructor(initialType, initialBalance = 0) {
      this.#type = initialType;
      this.#balance = initialBalance;
    }
  
    
    toString() {
      return this.#type;
    }
  
    
    setType(newType) {
      console.log(`Account is changed from ${this.#type} to ${newType}`);
      this.#type = newType;
    }
  
    
    getBalance() {
      return this.#balance;
    }
  
    
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposit of ${amount}, new balance is ${this.#balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawal of ${amount}, new balance is ${this.#balance}`);
      } else if (amount > this.#balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Withdrawal amount must be positive.");
      }
    }
  }
  
  
  const myAccount2 = new TAccount2(AccountType3.Normal);
  
  
  console.log("---------- Task 3 ------------------");
  myAccount2.deposit(100); // Deposit 100
  myAccount2.withdraw(25); // Withdraw 25
  console.log(`My account balance is ${myAccount2.getBalance()}`); // Get current balance
  
printOut("Deposit of 100, new balance is 100, Withdrawal of 25, new balance is 75, My account balance is 75");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Define the CurrencyTypes as an object
// Define the CurrencyTypes as an object
const CurrencyTypes = {
    NOK: { name: "Norske kroner", denomination: "kr" },
    EUR: { name: "Euro", denomination: "€" },
    USD: { name: "United States dollar", denomination: "$" },
    GBP: { name: "Pound sterling", denomination: "£" },
    INR: { name: "Indian rupee", denomination: "₹" },
    AUD: { name: "Australian dollar", denomination: "A$" },
    PHP: { name: "Philippinske peso", denomination: "₱" },
    CAD: { name: "Canadiske dollar", denomination: "C$" },
    THB: { name: "Thai baht", denomination: "฿" },
};

// Define the TAccount class
class TAccount3 {
    #type; // Private property for account type
    #balance = 0; // Private property for balance
    #currencyType = "NOK"; // Default currency type

    // Constructor
    constructor(type) {
        this.#type = type || "Standard"; // Set account type (default: "Standard")
    }

    // Public method to get the account type
    getType() {
        return this.#type;
    }

    // Public method to get the balance
    getBalance() {
        return `${this.#balance} ${CurrencyTypes[this.#currencyType].denomination}`;
    }

    // Public method to deposit an amount
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(
                `Deposit of ${amount}${CurrencyTypes[this.#currencyType].denomination}, new balance is ${this.getBalance()}`
            );
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    // Public method to withdraw an amount
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(
                `Withdrawal of ${amount}${CurrencyTypes[this.#currencyType].denomination}, new balance is ${this.getBalance()}`
            );
        } else if (amount > this.#balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Withdrawal amount must be greater than zero.");
        }
    }

    // Public method to set the currency type
    setCurrencyType(newCurrencyType) {
        if (this.#currencyType === newCurrencyType) {
            console.log(`Currency type is already set to ${newCurrencyType}.`);
            return;
        }
        if (CurrencyTypes[newCurrencyType]) {
            this.#currencyType = newCurrencyType;
            console.log(`Currency type changed to ${newCurrencyType}.`);
        } else {
            console.log("Invalid currency type.");
        }
    }
}

// Example usage
const myAccount3 = new TAccount3("Savings");

// Deposit money
myAccount3.deposit(150);

// Check balance
console.log(myAccount3.getBalance());

// Change currency type
myAccount3.setCurrencyType("USD");

// Deposit money in new currency
myAccount3.deposit(100);

// Attempt to change to the same currency type
myAccount3.setCurrencyType("USD");

// Withdraw money
myAccount3.withdraw(50);


printOut("Deposit of 150kr, new balance is 150 kr");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);
