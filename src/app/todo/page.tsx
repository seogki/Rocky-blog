import { HiCheckCircle } from "@react-icons/all-files/hi/HiCheckCircle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rocky Blog - Todo",
  description: "This is my Rocky Blog Todo Page of what i need to do"
};

export default function TodoHomePage() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-4 md:my-8">Todo</h1>
      <div className="space-y-4 max-w-screen-md mx-auto">
        <h2 className="text-lg font-medium">Need To Fix</h2>
        <section className="p-4 md:p-5 mx-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
          <HiCheckCircle className="float-right text-xl" />
          <h3 className="text-base font-normal pb-4 mx-2">Expectation</h3>
          <p className="py-2 mx-4 font-light">
            By Streaming condition, I expected see loading skeleton before
            fetching all the server side html, because streaming break down the
            page&apos;s HTML into smaller chunks and pass down one by one
          </p>

          <h3 className="text-base font-normal py-4 mx-2 text-red-600 dark:text-red-400">
            Error
          </h3>
          <p className="py-2 mx-4 font-light">
            Even though Suspense is set, i have to wait 2~5 seconds to fetch
            document only depend on my post before actual loading happen. I
            still have not figured out whether it is causing by nextjs 13 or
            something else
          </p>

          <h3 className="text-base font-normal py-4 mx-2">Result</h3>
          <p className="py-2 mx-4 font-light">On Progress...</p>
        </section>

        <section className="p-4 md:p-5 mx-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
          <HiCheckCircle className="float-right text-xl" />
          <h3 className="text-base font-normal pb-4 mx-2">Expectation</h3>
          <p className="py-2 mx-4 font-light">
            When building my nextjs i expect to see one rehype-prism-plus bundle
            share between components
          </p>

          <h3 className="text-base font-normal py-4 mx-2 text-red-600 dark:text-red-400">
            Error
          </h3>
          <p className="py-2 mx-4 font-light">
            I see two rehype-prism-plus bundled in two different js files of
            server side from @next/bundle-analyzer. I need to find out whether
            server side does not share components or i have implemented wrongly
          </p>
          <h3 className="text-base font-normal py-4 mx-2">Result</h3>
          <p className="py-2 mx-4 font-light">On Progress...</p>
        </section>
      </div>
    </>
  );
}