import { BsGithub } from "react-icons/bs";

export default function MyFooter({ className }: { className?: string }) {
  return (
    <>
      <footer
        className={`${className} h-24 sm:h-32 w-full px-6 pt-2 border-t-2 border-gray-200 dark:border-gray-600`}
      >
        <div className="w-full h-full max-w-screen-xl flex flex-row justify-center items-center">
          <a
            href="https://github.com/seogki"
            className="text-xl h-max w-auto p-4"
          >
            <BsGithub></BsGithub>
          </a>
        </div>
      </footer>
    </>
  );
}
