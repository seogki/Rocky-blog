import { ImageResponse } from "next/server";

export const runtime = "edge";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export async function Image({ params }: Props) {
  const { category, slug } = params;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#9E9E9E",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        [{category}] - {slug.replaceAll("-", " ")}
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  );
}
