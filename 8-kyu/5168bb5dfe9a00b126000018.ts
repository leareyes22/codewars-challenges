/* 
Reversed strings

Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

export function solution(str: string): string {
  let strArray: Array<string> = str.split("");
  let auxArray: Array<string> = [];

  // Iterate from back to front of the array and push chars to the auxArray
  for (let i = strArray.length - 1; i >= 0; i--) auxArray.push(strArray[i]);

  // Re-join the string
  return auxArray.join("");
}
