// Create an array and use prompt function to add numbers
let numbers = [];
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Enter number ${i + 1}:`, "42,25,12,63,48,10,16,5,30,78"));
  numbers.push(num);
}

// Function to implement Bubble Sort Algorithm
function bubbleSort(arr) {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      console.log(`Comparing ${arr[i]} and ${arr[i + 1]}`);
      if (arr[i] > arr[i + 1]) {
        // Swap the numbers
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        console.log(`Swapped to: ${arr}`);
      }
    }
  } while (swapped);
  return arr;
}

// Pass the values to the bubble sort function and log the sorted array
console.log("Original array:", numbers);
let sortedArray = bubbleSort(numbers);
console.log("Sorted array:", sortedArray);
