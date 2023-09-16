import AboutMySelf from "@/components/about-my-self";
import { Metadata, NextPage } from "next";
import Image from "next/image";

export const metadata = {
  title: "Rocky Blog - About",
  description: "This is my Rocky Blog About Page to describe myself",
  openGraph: {
    title: "Rocky Blog - About",
    description: "This is my Rocky Blog About Page to describe myself"
  }
};

const About: NextPage = () => {
  return (
    <div className="w-full mx-auto max-w-screen-md">
      <h1 className="text-2xl text-center font-bold mb-4 md:my-8">
        About MySelf
      </h1>
      <AboutMySelf />
    </div>
  );
};

export default About;
