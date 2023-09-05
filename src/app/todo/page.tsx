import { Fix } from "@/interface/todos.interface";
import { HiCheckCircle } from "@react-icons/all-files/hi/HiCheckCircle";
import { MdWarning } from "@react-icons/all-files/md/MdWarning";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rocky Blog - Todo",
  description: "This is my Rocky Blog Todo Page of what i need to do"
};

export default function TodoHomePage() {
  const fixList: Fix[] = [
    {
      expectation: "Expect to see my post as soon as possible",
      error: "Slow Rendering in vercel almost 2~5 seconds, i have to wait",
      done: true,
      result:
        "I have tested in Vercel and Railway to deploy my app, Vercel took almost 3 seconds to display my post, but railway was only 400ms. I just decided that vercel has network limits when using hobby"
    },
    {
      expectation:
        "By Streaming condition, I expected see loading skeleton before fetching all the server side html, because streaming break down the page's HTML into smaller chunks and pass down one by one",
      error:
        "Even though Suspense is set, i have to wait 2~5 seconds to fetch document only depend on my post before actual loading happen. I still have not figured out whether it is causing by nextjs 13 or something else",
      done: false
    },
    {
      expectation:
        "When building my nextjs i expect to see one rehype-prism-plus bundle share between components",
      error:
        "I see two rehype-prism-plus bundled in two different js files of server side from @next/bundle-analyzer. I need to find out whether server side does not share components or i have implemented wrongly",
      done: false
    },
    {
      expectation:
        "When i am testing async react component i expect to set parameters just like normal react components",
      error:
        "async components cannot pass props values when component is actually rendered, and gives me error that props cannot destructure. Many people discussed about it in 'https://github.com/testing-library/react-testing-library/issues/1209' github, but could not find validate answer",

      done: false
    }
  ];

  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-4 md:my-8">Todo</h1>
      <div className="space-y-4 max-w-screen-md mx-auto">
        <h2 className="text-lg font-medium">Need To Fix</h2>
        {fixList.map((fix, idx) => (
          <FixSection key={idx} fix={fix} />
        ))}
      </div>
    </>
  );
}

type FixSectionProps = {
  fix: Fix;
};

const FixSection = ({ fix }: FixSectionProps) => {
  return (
    <>
      <section className="drop-shadow-lg dark:drop-shadow-none p-4 md:p-5 mx-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
        <HiCheckCircle
          className={`float-right text-2xl ${
            fix.done && "text-green-600 dark:text-green-400"
          }`}
        />
        <h3 className="text-base font-normal pb-4 mx-2">Expectation</h3>
        <p className="py-2 mx-4 font-light">{fix.expectation}</p>

        <h3 className=" text-base font-normal py-4 mx-2 text-red-600 dark:text-red-400">
          <MdWarning className="mr-2 mb-1 inline-block" />
          Error
        </h3>
        <p className="py-2 mx-4 font-light">{fix.error}</p>

        <h3 className="text-base font-normal py-4 mx-2">Result</h3>
        {!fix.done && <p className="py-2 mx-4 font-light">On Progress...</p>}
        {fix.done && <p className="py-2 mx-4 font-light">{fix.result}</p>}
      </section>
    </>
  );
};
