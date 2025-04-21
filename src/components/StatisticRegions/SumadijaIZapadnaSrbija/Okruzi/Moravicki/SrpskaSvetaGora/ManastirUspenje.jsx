import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg8.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";


export const ManastirUspenje = () => {
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
          Manastir Uspenje
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Na uzvišenju iznad manastira Jovanje nalazi se manastir Uspenje, koji
          je vidljiv sa svih strana klisure. U turskim izvorima pominje se 1536.
          godine. Posvećen je Uspenju Presvete Bogorodice. Na tom mestu je
          nekada postojala kula sa zvonikom visoka oko 30 metara. Pretpostavlja
          se da su je Turci srušili u isto vreme kada i manastir Jovanje.
          Vladika Nikolaj je na tom mestu zatekao samo ruševine. Po njegovoj
          želji, 1939. godine izgrađena je nova crkva manastira Uspenja, koja je
          verna kopija crkve Sv. Cara Konstantina i Jelene u Ohridu. Prvobitni
          ikonosats uništili su Bugari 1943. godine. Manastir je ponovo
          obnovljen 1998. godine, a 2004. godine naselile su ga monahinje.
          Manastirski hram ima nekoliko posebnosti koje se retko viđaju u drugim
          srpskim pravoslavnim crkvama. Crkva manastira Uspenja ima vrlo mali
          broj prozora uskog pravougaonog oblika, bez ikakvih ukrasa. Nikada
          nije bila slikana. U manastirskom hramu zapravo postoje dve crkve koje
          dele jednu zajedničku pripratu. Levi deo hrama posvećen je Uspenju
          Presvete Bogorodice, a desni Sedmorici efeskih mučenika.
        </p>
      </div>
    </div>
  );
};
