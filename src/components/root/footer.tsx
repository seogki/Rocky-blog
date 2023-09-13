import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";

export default function MyFooter({ className = "" }: { className?: string }) {
  return (
    <>
      <footer
        className={`${className} h-24 sm:h-32 w-full px-6 pt-2 border-t-2 border-zinc-300 dark:border-zinc-700`}
      >
        <div className="w-full h-full max-w-screen-xl flex flex-row justify-center items-center mx-auto">
          <a
            title="Seogki's github"
            href="https://github.com/seogki"
            className="text-xl h-max w-auto p-4"
          >
            <AiFillGithub></AiFillGithub>
          </a>

          <a
            title="Seogki's mail"
            href="mailto:skhmailweb@gmail.com"
            className="text-xl h-max w-auto p-4"
          >
            <SiGmail></SiGmail>
          </a>
        </div>
      </footer>
    </>
  );
}
