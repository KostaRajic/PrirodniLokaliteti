/* eslint-disable react/no-unknown-property */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac4MV.jpg";
import { useContextAuth } from "../../../../../../Context";
import { sumadijskiOkrugPathRoutes } from "../SumadijskiOkrugPathRoutes";
import { Helmet } from "react-helmet-async";

const SpomenikPalimSumadincima = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>

      <Helmet>
        <title>
          {switchLanguage === 'rs'
            ? "Spomenik palim Šumadincima – Simbol borbe i slobode | Srbija Wonders"
            : "Monument to the Fallen from Šumadija – Symbol of Struggle and Freedom | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Spomenik palim Šumadincima u Kragujevcu, delo vajara Antuna Augustinčića iz 1932. godine, posvećen je borcima za slobodu iz perioda 1804–1918. i jedan je od najlepših spomenika centralne Srbije."
              : "The Monument to the Fallen from Šumadija in Kragujevac, created by sculptor Antun Augustinčić in 1932, honors freedom fighters from 1804 to 1918 and is one of central Serbia’s most beautiful monuments."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Spomenik palim Šumadincima, Kragujevac, Antun Augustinčić, Mali park, srpski ustanci, Prvi svetski rat, Balkanski ratovi, istorija Srbije, spomenici u Srbiji"
              : "Monument to the Fallen from Šumadija, Kragujevac, Antun Augustinčić, Mali park, Serbian uprisings, World War I, Balkan Wars, Serbian history, monuments in Serbia"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/spomenik-palim-sumadincima`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/spomenik-palim-sumadincima"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/spomenik-palim-sumadincima"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/spomenik-palim-sumadincima"
        />
      </Helmet>


      <div className="singleComponent">
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(sumadijskiOkrugPathRoutes.kragujevac(switchLanguage))}
          style={{ fill: "white" }}
        />
        <div
          style={{
            backgroundImage: `url(${z})`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundBlendMode: "overlay",
            color: "white",
            paddingBottom: "50px",
            fontSize: "26px",
            textShadow: "5px 5px 5px black",
          }}
        >

          {switchLanguage === 'rs' ?
            (
              <>
                <h2 style={{ padding: "120px 50px 0 50px", fontSize: "40px" }}>
                  Spomenik palim Šumadincima
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  Spomenik palim Šumadincima nalazi se u Malom parku kod gradske pijace.
                  Smatra se jednim od najlepših spomenika u ovom delu Srbije, a delo je
                  poznatog vajara Antuna Augustinčića. Izgrađen je 1932. godine, a
                  osnova mu je u obliku krsta. Na postamentu se nalaze četiri grupe
                  figura livenih u bronzi, posvećene palim borcima u ratovima za
                  oslobođenje od 1804. do 1918. godine. Figure simbolizuju četiri
                  generacije i četiri istorijske epohe kroz ratne događaje: Prvi i Drugi
                  srpski ustanak, Balkanske ratove i Prvi svetski rat. Iz sredine
                  postamenta uzdiže se stub na čijem vrhu se nalazi statua devojke,
                  livena u bronzi, koja u ruci drži krunu. Nažalost, tokom posleratne
                  Jugoslavije, ruka koja je držala krunu bila je odsečena, a postavljena
                  je ruka sa lovorovim vencem. Prvobitni izgled spomenika vraćen je
                  krajem dvadesetog veka, kada je kruna ponovo postavljena.
                </p>
              </>
            )
            :
            (
              <>
                <h2 style={{ padding: "120px 50px 0 50px", fontSize: "40px" }}>
                  The Monument to the Fallen Šumadinci Soldiers
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  The Monument to the Fallen Šumadinci Soldiers is located in Mali Park near the city market. It is considered one of the most beautiful monuments in this part of Serbia and is the work of the famous sculptor Antun Augustinčić. Built in 1932, its base is shaped like a cross. On the pedestal are four groups of bronze-cast figures dedicated to the fallen fighters in the wars for liberation from 1804 to 1918. The figures symbolize four generations and four historical epochs through wartime events: the First and Second Serbian Uprisings, the Balkan Wars, and World War I. Rising from the center of the pedestal is a column topped with a statue of a girl cast in bronze, holding a crown in her hand. Unfortunately, during post-war Yugoslavia, the hand holding the crown was cut off and replaced with a hand holding a laurel wreath. The monument’s original appearance was restored at the end of the twentieth century when the crown was reinstalled.
                </p>
              </>
            )}

        </div>
      </div>
    </>
  );
};


export default SpomenikPalimSumadincima;