import Script from "next/script";

export default function GoogleAdsense() {
  return (
    <>
      {process.env.NEXT_PUBLIC_APP_GA_PUB_KEY && (
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_APP_GA_PUB_KEY}
          `}
          crossOrigin="anonymous"
        ></Script>
      )}
    </>
  );
}
