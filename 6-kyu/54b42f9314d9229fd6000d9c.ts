/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

export function duplicateEncode(word: string): string {
  //Convert to lowercase to compare occurrencesqqqqqqq
  const lowerCaseWord = word.toLowerCase();
  //Count occurrences of every character and save in an object
  const occurrences = Array.from(lowerCaseWord).reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  //Iterate inside lowercase word and replace characters watching the number of occurences present in occurrences object
  const encodeWord = Array.from(lowerCaseWord)
    .map((key) => {
      return occurrences[key] == 1 ? "(" : ")";
    })
    .join("");
  return encodeWord;
}
