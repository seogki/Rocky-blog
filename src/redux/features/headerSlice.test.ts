import headerSlice, {
  openDrawer,
  openMore,
  closeAll,
  closeDrawer,
  closeMore,
  openAll
} from "./headerSlice";

test("should return the initial state", () => {
  expect(headerSlice(undefined, { type: undefined })).toEqual({
    isDrawerOpen: false,
    isMore: false
  });
});

test("should change isDrawerOpen to true", () => {
  expect(headerSlice(undefined, openDrawer())).toEqual({
    isDrawerOpen: true,
    isMore: false
  });
});

test("should change isDrawerOpen to false", () => {
  expect(headerSlice(undefined, closeDrawer())).toEqual({
    isDrawerOpen: false,
    isMore: false
  });
});

test("should change isMore to true", () => {
  expect(headerSlice(undefined, openMore())).toEqual({
    isDrawerOpen: false,
    isMore: true
  });
});

test("should change isMore to false", () => {
  expect(headerSlice(undefined, closeMore())).toEqual({
    isDrawerOpen: false,
    isMore: false
  });
});

test("should change all to true", () => {
  expect(headerSlice(undefined, openAll())).toEqual({
    isDrawerOpen: true,
    isMore: true
  });
});

test("should change all to false", () => {
  expect(headerSlice(undefined, closeAll())).toEqual({
    isDrawerOpen: false,
    isMore: false
  });
});
