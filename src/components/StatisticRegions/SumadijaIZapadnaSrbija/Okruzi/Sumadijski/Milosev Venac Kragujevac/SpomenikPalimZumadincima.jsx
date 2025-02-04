import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/kragujevac4MV.jpg";

export const SpomenikPalimSumadincima = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="singleComponent">
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
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
        <h2 style={{ padding: "50px 50px 0 50px", fontSize: "40px" }}>
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
      </div>
    </div>
  );
};
