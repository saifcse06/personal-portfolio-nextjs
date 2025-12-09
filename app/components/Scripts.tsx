import Script from "next/script";

export default function Scripts() {
  return (
    <>
      <Script src="/assets/js/jquery-3.2.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/popper.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />
    </>
  );
}