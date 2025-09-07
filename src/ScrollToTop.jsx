import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


export const ScrollToTop = () => {
  const [scrollButton, setScrollButton] = useState(false);


  useEffect(() => {
    const handelScroll = () => {
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
          <FaArrowUp style={{fontSize: '32px', marginBottom: '9px'}}/>
        </button>
      )}
    </>
  );
};
