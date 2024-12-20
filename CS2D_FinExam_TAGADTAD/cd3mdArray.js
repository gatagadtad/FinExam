subArray1 = ["Genevieve" ,"Juan", "Luna", "Gabriel", "Elise"];
subArray2 = [24, 65, 21, 5, 9];

// Prompt user for names and ages
let names = prompt("Enter names (Genevieve, Juan, Luna, Gabriel, Elise):");
let ages = prompt("Enter ages (24, 65, 21, 5, 9):");

// Convert input strings to arrays
let subArray1 = names.split(",").map(name => name.trim());
let subArray2 = ages.split(",").map(age => parseInt(age.trim(), 10));

// Ensure the arrays have the same length
if (subArray1.length !== subArray2.length) {
  console.error("Error: The number of names and ages do not match!");
} else {
  // Restructure the arrays into a new multi-dimensional array
  let restructuredArray = subArray1.map((name, index) => [name, subArray2[index]]);

  // Log the restructured multi-dimensional array
  console.log("Restructured Multi-dimensional Array:");
  restructuredArray.forEach(subArray => {
    console.log(subArray);
  });
}
