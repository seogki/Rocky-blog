import { Metadata, NextPage } from "next";
import Image from "next/image";
// import myPic from "@/assets/image/me.jpg";

export const metadata: Metadata = {
  title: "Rocky Blog - About",
  description: "Rocky Blog about"
};

const About: NextPage = () => {
  return (
    <div className="w-full mx-auto max-w-screen-md">
      <h1 className="text-center mt-8">Ing..</h1>
      {/* <Image
        src={myPic}
        width={120}
        height={50}
        alt="Seogki Hong"
        className="rounded-full"
        placeholder="blur"
      /> */}
      {/* <h1 className="text-2xl">About MySelf</h1> */}
    </div>
  );
};

export default About;
