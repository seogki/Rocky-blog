import Image from "next/image";

export function MdxCustomComponent() {
  const ResponsiveImage = (props: any) => (
    <Image
      className="rounded-lg border-2 border-zinc-600 dark:border-zinc-400"
      alt={props.alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "auto", height: "auto" }}
      {...props}
    />
  );

  // const Strong = (props: any) => (
  //   <strong className={`text-teal-600 dark:text-teal-400`} {...props}></strong>
  // );

  const Strong = (props: any) => (
    <strong
      className={`bg-zinc-200 dark:bg-zinc-800 rounded-lg px-3 py-1 my-1`}
      {...props}
    ></strong>
  );

  const BlockQuote = (props: any) => (
    <blockquote
      className="bg-zinc-200 dark:bg-zinc-700"
      {...props}
    ></blockquote>
  );

  const components = {
    img: ResponsiveImage,
    strong: Strong,
    blockquote: BlockQuote
  };

  return { components };
}
