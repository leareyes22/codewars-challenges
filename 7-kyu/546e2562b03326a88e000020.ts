/*
Square every digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 7*7 is 49, 6*6 is 36, and 5*5 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

export function squareDigits(num: number): number {
  return Number(
    num
      .toString()
      .split("")
      .map((n) => Number(n) * Number(n))
      .join("")
  );
}
