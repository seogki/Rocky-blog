export default function PostTags({ tags }: { tags: string }) {
  return (
    <>
      {tags.split(",").map((tag) => (
        <span
          key={tag}
          className="mx-1 first-of-type:ml-0 last-of-type:mr-0 py-1 px-3 rounded-2xl bg-violet-500 text-white"
        >
          {tag}
        </span>
      ))}
    </>
  );
}
