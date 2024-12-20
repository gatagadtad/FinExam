// Create an empty array to act as a stack
let groceryStack = [];

// Peek function to check if the stack is empty or not and return the last item
function peek() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty");
    return null;
  }
  return groceryStack[groceryStack.length - 1];
}

// Push function to add an item to the stack
function push(item) {
  groceryStack.push(item);
  console.log(`${item} added to the stack.`);
  console.log("Current stack:", groceryStack);
  console.log("Top item:", peek());
}

// Pop function to remove the last item from the stack
function pop() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty, nothing to pop.");
    return null;
  }
  const item = groceryStack.pop();
  console.log(`${item} removed from the stack.`);
  console.log("Current stack:", groceryStack);
  console.log("Top item:", peek());
  return item;
}

// Prompt user to add grocery items to the stack
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}

// Optionally, you can add pop operations to test the stack behavior
// pop();
// pop();
