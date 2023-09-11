import { convertFormat, stringToDate } from "./date";

test("should convertFormat when date given", () => {
  const result = convertFormat("11/09/2023");
  expect(result).toBe("9th 11.2023");
});

test("should convertFormat when date and format given", () => {
  const result = convertFormat("2023/11/09", "YYYY-MM-DD");
  expect(result).toBe("2023-11-09");
});

test("should convert to date format when string given", () => {
  const result = stringToDate("2023/11/09", "YYYY-MM-DD");

  expect(result instanceof Date).toBe(true);
});
