import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextAuth } from "./Context";
// import ImageBackgroundSlider from "./components/ImageBackground";
import ImageBackgroundSlider from "./components/ImageBackground";

const HomePage = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const [lang, setLang] = useState("rs");

  useEffect(() => {
    if (switchLanguage) setLang(switchLanguage);
  }, [switchLanguage]);

  return (
    <>
      <div className="homePage">
          <ImageBackgroundSlider/>
        <div className="homePageTextContent">
          <h1>
            {lang === "rs"
              ? "Otkrijte čuda i skrivene dragulje Srbije"
              : "Discover the Wonders and Hidden Gems of Serbia"}
          </h1>

          {lang === "rs" ? (
            <h2>
              Istražite ih na
              <button onClick={() => navigate("/serbianMap")}>interaktivnoj mapi Srbije</button>
            </h2>
          ) : (
            <h2>
              Explore them on the
              <button onClick={() => navigate("/serbianMap")}>INTERACTIVE MAP OF SERBIA</button>
            </h2>
          )}


        </div>
      </div>
    </>
  );
};

export default HomePage;
