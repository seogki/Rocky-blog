import { toUniqueList } from "./list";

test("should return unique list when duplicate items given", () => {
  const result = toUniqueList([
    "test",
    "test1",
    "test1",
    "test2",
    "test3",
    "test3"
  ]);

  expect(result).toStrictEqual(["test", "test1", "test2", "test3"]);
});
