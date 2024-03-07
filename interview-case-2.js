function reverseWords(sentence) {
  if (sentence === "") {
    return "Lütfen bir cümle giriniz.";
  }
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("JavaScript is awesome")); // tpircSavaJ si emosewa
console.log(reverseWords("Hello, World!")); // olleH, !dlroW
console.log(reverseWords("")); // Lütfen bir cümle giriniz.
