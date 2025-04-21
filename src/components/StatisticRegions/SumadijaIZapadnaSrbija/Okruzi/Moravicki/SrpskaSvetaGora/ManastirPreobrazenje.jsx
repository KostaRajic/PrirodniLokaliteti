import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg5.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";

export const ManastirPreobraženje = () => {
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
        onClick={() => navigate(moravickiOkrugPathRoutes.ovcarskoKablarskaKlisura)}
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
          Manastir Preobraženje
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Manastir Preobraženje danas se nalazi sa desne strane Zapadne Morave,
          na severnim obroncima Ovčara. Naspram manastira, preko reke, smeštena
          je železnička stanica u Ovčar Banji, na mestu gde se nekada nalazio
          manastir, ispod litica Kablara. Prvi pomen manastira Preobraženja u
          pisanim izvorima datira iz 1525. godine. Stari manastir Preobraženje
          je srušen, uz odobrenje vladike žičkog Save, kako bi se izgradila
          železnička pruga prema Užicu.
        </p>
      </div>
    </div>
  );
};
