import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg4.jpg";

export const ManastirNikolje = () => {
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
        Manastir Nikolje
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Manastir Nikolje, najstarija crkva među Ovčarsko-Kablarskim
          manastirima, podignut je na padinama Kablara, na levoj obali Zapadne
          Morave. Na osnovu arhitektonskih karakteristika, pretpostavlja se da
          potiče iz srednjeg veka, verovatno kraja 14. ili početka 15. veka. U
          riznici manastira Nikolje čuva se najvažnija rukopisna knjiga u
          srpskoj kulturi, Karanovsko jevanđelje, napisano početkom 17. veka. U
          manastiru je nekoć živelo i do 300 monaha. Tu se od Turaka sklonio i
          Miloš Obrenović sa porodicom. On je 1817. godine sagradio konak u
          manastirskoj porti koji i danas postoji i nosi njegovo ime.
        </p>
      </div>
    </div>
  );
};
