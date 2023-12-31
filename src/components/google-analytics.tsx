import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}`}
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', '${process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}');
    
        `}
          </Script>
        </>
      )}
    </>
  );
}
