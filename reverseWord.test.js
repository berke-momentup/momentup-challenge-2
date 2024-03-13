const reverseWords = require("./reverseWords");

test("should output tpircSavaJ si emosewa", () => {
  expect(reverseWords("JavaScript is awesome")).toBe("tpircSavaJ si emosewa");
});

test("should output ,olleH !dlroW", () => {
  expect(reverseWords("Hello, World!")).toBe(",olleH !dlroW");
});

test("should output Lütfen bir cümle giriniz.", () => {
  expect(reverseWords("")).toBe("Lütfen bir cümle giriniz.");
});
