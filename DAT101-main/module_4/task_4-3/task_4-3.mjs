"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById("cmbTask1Calculate").addEventListener("click", cmbTask1CalculateClick);

function cmbTask1CalculateClick() {
    // Get the width and height from input fields (HTML file)
    const width = parseFloat(document.getElementById("txtRectWidth").value);
    const height = parseFloat(document.getElementById("txtRectHeight").value);

    // Validate inputs
    if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
        document.getElementById("txtTask1Output").textContent = "Please enter valid non-negative numbers for width and height.";
        return;
    }

    // Calculate area and the perimeter
    const perimeter = 2 * (width + height);
    const area = width * height;

    // output
    document.getElementById("txtTask1Output").textContent = `Circumference = ${perimeter}, Area = ${area}`;
}


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// Using an array to store all the words
const task2Words = [];

// Event listener for the keypress event
document.getElementById("txtTask2Word").addEventListener("keypress", txtTask2WordKeyPress);

function txtTask2WordKeyPress(event) {
    // Check if the "Enter" key was pressed
    if (event.key === "Enter") {
        // Get the word from the input field
        const word = document.getElementById("txtTask2Word").value.trim();

        // Adds only non-empty words to the array
        if (word !== "") {
            task2Words.push(word);
        }

        // Updates the output with the number of words and the list of words
        document.getElementById("txtTask2Output").textContent = 
            `Number of words = ${task2Words.length}: ${task2Words.join(", ")}`;

        // Clears the input field
        document.getElementById("txtTask2Word").value = "";
    }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// Event listener for the check answer button
document.getElementById("cmbTask3CheckAnswer").addEventListener("click", cmbTask3CheckAnswerClick);

function cmbTask3CheckAnswerClick() {
    // Get all the checkbox options with chkTask3
    const checkboxes = document.querySelectorAll("input[name='chkTask3']");
    
    // Array to store the selected checkboxes
    const selectedValues = [];

    // Loop through the checkboxes and check if they are selected
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });

    // Output
    const output = selectedValues.length > 0 
        ? `Selected values: ${selectedValues.join(", ")}` 
        : "No checkboxes selected.";

    // Update the output
    document.getElementById("txtTask3Output").textContent = output;
}

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
//Event listener to the selected element
document.getElementById("selectTask5Animals").addEventListener("change", selectTask5AnimalsChange);

function selectTask5AnimalsChange() {
    // Get the selected option
    const selectElement = document.getElementById("selectTask5Animals");
    const selectedAnimal = selectElement.options[selectElement.selectedIndex].text;

    // Update the output 
    document.getElementById("txtTask5Output").textContent = `You selected: ${selectedAnimal}`;
}

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// Array of the girls names
const GirlsNames2 = ["Emma", "Sophia", "Isabella", "Olivia", "Ava", "Mia", "Amelia", "Charlotte", "Harper", "Evelyn"];

// Add the names to the select option 
const selectTask6Girls = document.getElementById("selectTask6Girls");

GirlsNames2.forEach(name => {
    // Create an option element
    const option = document.createElement("option");
    option.value = name; // Set the value of the option
    option.textContent = name; // Set the display text of the option

    // Add the option to the select element
    selectTask6Girls.appendChild(option);
});

// Add an event listener for the change event
selectTask6Girls.addEventListener("change", selectTask6GirlsChange);

function selectTask6GirlsChange() {
    // Get the selected option
    const selectedName = selectTask6Girls.value;

    // Update the output paragraph with the selected name
    document.getElementById("txtTask6Output").textContent = `You selected: ${selectedName}`;
}


//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
