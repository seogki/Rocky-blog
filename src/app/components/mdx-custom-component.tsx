import Image from "next/image";

export function MdxCustomComponent() {
  const ResponsiveImage = (props: any) => (
    <Image alt={props.alt} sizes="100vw" width={1000} height={500} {...props} />
  );

  const components = {
    img: ResponsiveImage
  };

  return { components };
}
