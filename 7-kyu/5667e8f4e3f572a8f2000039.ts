/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

export function accum(s: string): string {
  let stringArr: string[] = [];
  
  for (let i=0; i < s.length; i++) { 
    let auxStr = s[i].toUpperCase();
    for (let j=0; j < i; j++) {
      auxStr += s[i].toLowerCase();
    }
    stringArr.push(auxStr);
  }
  
  return stringArr.join('-');
}
