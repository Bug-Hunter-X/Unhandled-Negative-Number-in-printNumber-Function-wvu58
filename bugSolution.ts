function printNumber(num: number): void {
  // Handle the case where the number is negative
  const positiveNum = Math.max(0, num);
  console.log(positiveNum);
}

printNumber(5); // Prints 5
printNumber(-5); // Prints 0