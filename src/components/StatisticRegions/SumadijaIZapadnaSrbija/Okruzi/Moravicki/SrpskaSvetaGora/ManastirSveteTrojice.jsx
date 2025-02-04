import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg7.jpg";

export const           ManastirSveteTrojice = () => {
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
          Manastir Svete Trojice
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Crkva manastira Sv. Trojice, zbog svoje arhitekture, smatra se
          najlepšim hramom u Ovčarsko-Kablarskoj klisuri, smeštena na
          jugozapadnim šumovitim padinama Ovčara. Nije utvrđeno ko je i kada
          podigao manastir. Na osnovu dosadašnjih saznanja, koja se oslanjaju na
          turske popise, ovaj manastir potiče iz druge polovine 16. veka. Kao i
          ostali manastiri u Srbiji, i ovaj je pretrpeo stradanja krajem 17.
          veka. U manastiru Sv. Trojice čuva se jedan veliki prestolni krst,
          izvezen zlatom i srebrnom žicom, od velike umetničke vrednosti. Pored
          tog krsta, u manastiru se nalaze i dve jedinstvene prestolne ikone –
          Spasiteljeva i Bogorodičina – od antikvitetne vrednosti.
        </p>
      </div>
    </div>
  );
};
