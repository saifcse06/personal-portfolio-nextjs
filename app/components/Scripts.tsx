import Script from "next/script";

export default function Scripts() {
  return (
    <>
      <script src="/js/main.js" defer></script>
      <script src="/js/navbar.js" defer></script>
    </>
  );
}