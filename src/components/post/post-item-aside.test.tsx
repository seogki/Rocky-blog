import { render } from "@testing-library/react";
import PostItemAside from "./post-item-aside";
import { Toc } from "@/interface/posts.interface";

const toc: Toc[] = [
  {
    href: "test1",
    parent: "h1",
    text: "test1 text"
  },
  {
    href: "test2",
    parent: "h2",
    text: "test2 text"
  },
  {
    href: "test3",
    parent: "h3",
    text: "test3 text"
  },
  {
    href: "test4",
    parent: "h4",
    text: "test4 text"
  },
  {
    href: "test5",
    parent: "h5",
    text: "test5 text"
  },
  {
    href: "test6",
    parent: "h6",
    text: "test6 text"
  }
];

test("should add prefix from h3 to h6", async () => {
  const { findByText } = render(<PostItemAside toc={toc} />);

  expect(await findByText(/Table of Contents/i)).not.toBeNull();

  expect(await findByText("test1 text")).not.toBeNull();
  expect(await findByText("test2 text")).not.toBeNull();

  expect(await findByText("· test3 text")).not.toBeNull();
  expect(await findByText("· test5 text")).not.toBeNull();

  expect(await findByText("- test4 text")).not.toBeNull();
  expect(await findByText("- test6 text")).not.toBeNull();
});

test("should add additional class based on h tags", async () => {
  const { findAllByRole } = render(<PostItemAside toc={toc} />);

  const contentsList = await findAllByRole("paragraph");

  expect(contentsList[0].className).toContain(
    "ml-2 font-normal text-sm xl:text-base"
  );

  expect(contentsList[1].className).toContain(
    "ml-2 font-normal text-sm xl:text-base"
  );

  expect(contentsList[2].className).toContain(
    "ml-4 font-light text-xs xl:text-sm text-zinc-800 dark:text-zinc-200"
  );

  expect(contentsList[3].className).toContain(
    "ml-6 font-light text-xs xl:text-sm text-zinc-700 dark:text-zinc-300"
  );

  expect(contentsList[4].className).toContain(
    "ml-8 font-extralight text-xs xl:text-sm text-zinc-600 dark:text-zinc-400"
  );

  expect(contentsList[5].className).toContain(
    "ml-10 font-extralight text-xs xl:text-sm text-zinc-500"
  );
});
