import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac33MV.jpg";

export const ZgradaGimnazije = () => {
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
          Zgrada Gimnazije
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Zgrada Gimnazije je jedna od najmonumentalnijih školskih zgrada
          podignutih u Srbiji u XIX veku. Sagrađena je 1887. godine, kada je
          prva Gimnazija u Srbiji, osnovana 1833. godine, dobila svoju zgradu.
          Iz učionica ove škole, 21. oktobra 1941. godine, Nemci su izveli
          veliki broj đaka i profesora na streljanje. Jedna od učionica je
          preuređena u Spomen učionicu, posvećenu ovom tragičnom događaju.
        </p>
      </div>
    </div>
  );
};
