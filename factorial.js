

function factorial(n) {
  if (n < 0) return undefined; // Factorial for negative numbers is undefined
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
const number=5;
console.log(`Factorial of ${number} is ${factorial(number)}`);

