import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [scrollButton, setScrollButton] = useState(false);
  console.log(scrollButton)

  useEffect(() => {
    const handelScroll = () => {
        console.log("Scroll Y:", window.scrollY);
        console.log("Document Scroll Top:", document.documentElement.scrollTop);
      if (document.documentElement.scrollTop > 50) {
        setScrollButton(true);
      } else {
        setScrollButton(false);
      }
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollButton && (
        <button
        className={`scroll-to-top-btn`}

          onClick={scrollToTop}
        >
          ^
        </button>
      )}
    </>
  );
};
