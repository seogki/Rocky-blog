import PostList from "./components/post/post-list";
import PostContainer from "./components/post/post-container";
import { Metadata } from "next";
import PostListSkeleton from "./components/skeleton/post-list-skeleton";
import { Suspense } from "react";
import Script from "next/script";

export const generateMetadata = (): Metadata => {
  return {
    title: `Rocky Blog - Posts`,
    description: `Rocky Blog - Posts`
  };
};

export default function Home() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}');

    `}
      </Script>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={"RECENT"}>
        <Suspense fallback={<PostListSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <PostList category={"RECENT"}></PostList>
        </Suspense>
      </PostContainer>
    </>
  );
}
