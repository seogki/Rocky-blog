import { render, screen } from "@testing-library/react";
import PostTags from "./post-tags";

test("should return three tags", async () => {
  const { findAllByText } = render(
    <PostTags tags={["test1", "test2", "test3"]} />
  );

  const tags = await findAllByText(/test/i);

  expect(tags).toHaveLength(3);
});
