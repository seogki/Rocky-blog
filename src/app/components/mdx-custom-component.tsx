import Image from "next/image";

export function MdxCustomComponent() {
  const ResponsiveImage = (props: any) => (
    <Image
      alt={props.alt}
      sizes="100vw"
      width={1000}
      height={1000}
      {...props}
    />
  );

  const components = {
    img: ResponsiveImage,
    h1: (props: any) => (
      <h1 {...props} className="large-text">
        {props.children}
      </h1>
    )
  };

  return { components };
}
