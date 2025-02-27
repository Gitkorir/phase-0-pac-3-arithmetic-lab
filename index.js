// index.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increment(n) {
  return n + 1;
}

function decrement(n) {
  return n - 1;
}
// index.js

function add(a, b) {
  return a + b;
}

// ... (other functions) ...

function makeInt(n) {
  return parseInt(n, 10); // Parse as base 10 integer
}

function preserveDecimal(n) {
  return parseFloat(n); // Parse as floating-point number
}

// Export the new functions
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    increment: increment,
    decrement: decrement,
    makeInt: makeInt,
    preserveDecimal: preserveDecimal,
  };
}
