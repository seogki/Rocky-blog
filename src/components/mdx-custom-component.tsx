import Image from "next/image";

export function MdxCustomComponent() {
  const ResponsiveImage = (props: any) => (
    <Image
      alt={props.alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "auto", height: "auto" }}
      {...props}
    />
  );

  const components = {
    img: ResponsiveImage
  };

  return { components };
}
