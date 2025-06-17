import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac2MV.jpg";

export const KonakKnezaMihaila = () => {
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
          Konak Kneza Mihaila
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Konak kneza Mihaila sagrađen je 1860. godine po nalogu kneza Mihaila
          Obrenovića, unutar dvorskog kompleksa kneza Miloša, današnjeg
          Miloševog venca. Ovaj orijentalni kompleks izdvajao se kao jedna od
          prvih evropskih građevina rađenih po austrijskom uzoru. Konak ima
          visoko prizemlje, sprat i tavan, a osnova mu je pravougaonog oblika.
          Uticaj evropske arhitekture je vidljiv kroz simetriju i umerenu
          klasičističku ornamentiku. Krajem XIX veka u njemu je bio Oficirski
          dom. Danas se u njemu nalaze uprava Narodnog muzeja i muzejska
          biblioteka. Odlukom Skupštine SR Srbije, zgrada je 1979. godine
          proglašena za spomenik kulture od velikog značaja.
        </p>
      </div>
    </div>
  );
};
