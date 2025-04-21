import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg9.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";


export const ManastirVavedenje = () => {
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
        Manastir Vavedenje
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Manastir Vavedenje je podignut na samom početku klisure. Stilističke
          karakteristike originalnih delova hrama ukazuju na to da je manastir
          nastao u 16. veku. Ikonostas manastira Vavedenje čine, između ostalih,
          ikone Nikole Apostolovića, Bogorodica sa Hristom i Isus Hristos.
          Sačuvane su i pozlaćene carske vrata na kojima je prikazana scena
          Blagovesti. Skromnu umetničku celinu koju čini ikonostas ovog
          manastira dopunjuju ikone koje su preostale i sačuvane.{" "}
        </p>
      </div>
    </div>
  );
};
