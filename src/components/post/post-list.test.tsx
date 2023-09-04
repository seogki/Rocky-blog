import { render } from "@testing-library/react";
import PostList from "./post-list";
import { getAllPostsOrderByDate, getPostsByCategoryName } from "@/data";
import { jest } from "@jest/globals";
import { Post } from "@/interface/posts.interface";

// const { getAllPostsOrderByDate, getPostsByCategoryName } = Data;

describe("empty", () => {
  beforeAll(() => {
    // jest
    //   .mocked(Data.getCategories)
    //   .mockImplementation(
    //     jest
    //       .fn<() => Promise<string[]>>()
    //       .mockResolvedValue(["RECENT", "JEST", "MARKDOWN", "NEXTJS"])
    //   );

    jest
      .mocked(getPostsByCategoryName)
      .mockImplementation(
        jest.fn<() => Promise<Post[]>>().mockResolvedValue([])
      );
  });

  test("should display empty description when data is empty", () => {
    render(<PostList category={"JEST"} />);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
