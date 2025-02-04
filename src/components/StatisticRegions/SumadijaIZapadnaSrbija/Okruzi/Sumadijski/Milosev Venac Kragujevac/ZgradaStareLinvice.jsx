import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/kragujevac33MV.jpg";

export const ZgradaStareLivnice = () => {
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
          Zgrada Stare Livnice
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Zgrada Stare Livnice predstavlja jedan od najstarijih industrijskih
          objekata na ovom području. Kada je 1851. godine Topolivnica premeštena
          iz Beograda u Kragujevac, započeta je izgradnja industrijskog
          kompleksa. Sadašnja zgrada Livnice potiče iz osamdesetih godina XIX
          veka i delimično je izgrađena na temeljima nekadašnje Topolivnice.
          Građena je po uzoru na slične industrijske objekte ovog tipa u
          Nemačkoj i Francuskoj. Danas se u njoj nalazi Muzej „Stara Livnica“.
        </p>
      </div>
    </div>
  );
};
