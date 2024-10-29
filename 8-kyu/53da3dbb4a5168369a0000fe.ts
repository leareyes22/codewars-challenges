/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

export function evenOrOdd(number: number): string {
  return number % 2 == 0 ? "Even" : "Odd";
}
