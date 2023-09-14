const calculateCompoundInterest = require("../calculator.js");

describe("Calculator: Compound interest", () => {
  // Exopected results based on Compound Interest Calculator and compounded monthly
  // https://www.thecalculatorsite.com/finance/calculators/compoundinterestcalculator.php

  // https://hassett.blog/2017/01/11/a-javascript-compound-interest-calculator/

  test("should return 732.81 given 100, 10 percent, 20 years", () => {
    const result = calculateCompoundInterest(100, 10, 20, 0);
    expect(result).toBe(732.81);
  });

  test("should return 181.94 given 100, 6 percent, 10 years", () => {
    const result = calculateCompoundInterest(100, 6, 10, 0);
    expect(result).toBe(181.94);
  });

  test("should return 149,058.55 given 100000, 5 percent, 8 years", () => {
    const result = calculateCompoundInterest(100000, 5, 8, 0);
    expect(result).toBe(149058.55);
  });

  test("should return 0.00 given 0, 10 percent, 1 year", () => {
    const result = calculateCompoundInterest(0, 10, 1, 0);
    expect(result).toBe(0.0);
  });

  test("should return 100.00 given 100, 0 percent, 10 years", () => {
    const result = calculateCompoundInterest(100, 0, 10, 0);
    expect(result).toBe(100.0);
  });

  // Include regular contributions
  test("should return 118,380.16 given 100, 5 percent, 8 years, 1000 per month", () => {
    const result = calculateCompoundInterest(100, 5, 8, 1000);
    expect(result).toBe(118380.16);
  });

  test("should return 156,093.99 given 100, 5 percent, 10 years, 1000 per month", () => {
    const result = calculateCompoundInterest(100, 5, 10, 1000);
    expect(result).toBe(156093.99);
  });

  test("should return 23,763.28 given 5000, 5 percent, 10 years, 100 per month", () => {
    const result = calculateCompoundInterest(5000, 5, 10, 100);
    expect(result).toBe(23827.98);
  });

  test("should return 475,442.59 given 116028.86, 7.5 percent, 8 years, 2006 per month", () => {
    const result = calculateCompoundInterest(116028.86, 7.5, 8, 2006);
    expect(result).toBe(475442.59);
  });

  test("should return 718,335.96 given 116028.86, 9 percent, 12 years, 1456 per month", () => {
    const result = calculateCompoundInterest(116028.86, 9, 12, 1456);
    expect(result).toBe(718335.96);
  });
});
