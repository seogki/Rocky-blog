"use client";

export default function CategoryTagItem({
  key,
  name
}: {
  key: string;
  name: string;
}) {
  const onClickCategory = () => {};

  return (
    <div
      key={key}
      className="py-2 px-4 rounded-2xl m-2 bg-amber-600 text-white text-sm"
      onClick={() => onClickCategory()}
    >
      {name}
    </div>
  );
}
