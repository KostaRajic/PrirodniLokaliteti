import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac1MV.jpg";

export const StaraPridvornaCrkva = () => {
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
          Stara (Pridvorna crkva)
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Stara (Pridvorna crkva) podignuta je 1818. godine, na mestu
          nekadašnjeg groblja. Knez Miloš Obrenović, kao ktitor ovog hrama, nije
          štedeo na materijalnim sredstvima, angažujući najbolje majstore za
          izgradnju crkve. Crkva je posvećena Silasku Svetog Duha na apostole.
          Zadužbina kneza Miloša više puta je rekonstruisana. Godine 1829. prvi
          put su zazvonila zvona ove crkve. Stara crkva bila je prva
          mitropolitska, katedralna i dvorska crkva u oslobođenoj Srbiji. U
          njenoj porti proglašavane su gotovo sve značajne odluke za srpski
          narod, uključujući hatišerife i ustave. U porti crkve održana je i
          Sretenjska skupština 1835. godine, na kojoj je donet Prvi srpski
          ustav. Sva skupštinska zasedanja do 1859. godine održavana su u porti
          crkve, a od te godine u novoizgrađenoj skupštinskoj zgradi.
        </p>
      </div>
    </div>
  );
};
