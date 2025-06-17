import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 600);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <div className="homePage">
        <div>

            <h1>
              "Explore the Hidden Gems of Serbia: Unforgettable Travel
              Destinations"
            </h1>

          <h2>
            View them on the{" "}
            <span onClick={() => navigate("/serbianMap")}>Map of Serbia</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
