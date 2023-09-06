import { ImageResponse } from "next/server";

// export const config = {
//   runtime: "edge"
// };

export const runtime = "edge";

type Props = {
  params: {
    category: string;
  };
};

export async function Image({ params }: Props) {
  const { category } = params;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "#9E9E9E",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        R. Blog - {category}
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  );
}
