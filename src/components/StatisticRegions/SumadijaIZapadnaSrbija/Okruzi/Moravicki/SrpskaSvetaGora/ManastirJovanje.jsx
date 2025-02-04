import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg2.jpg";

export const ManastirJovanje = () => {
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
        Manastir Jovanje
        </h2>

        <p
          style={{
            margin: "50px 50px 70px 50px",
            overflow: "auto",
            fontSize: isMobile ? "20px" : "30px",
          }}
          className={isMobile ? "scrollableClass" : ""}
        >
          Manastir Jovanje nalazi se na levoj obali reke Zapadne Morave, na
          njenom najvećem meandru. Niko sa sigurnošću ne može da kaže ko je i
          kada izgradio Jovanje. Stara crkva posvećena Svetom Jovanu potopljena
          je 1954. godine prilikom izgradnje hidroelektrane. Brojna razaranja i
          rušenja koja je manastir pretrpeo potpuno su uništila gotovo sve
          tragove prvobitne građevine. Tako je nestala i riznica nekada velikog
          hrama. Najvredniji predmeti u riznici su dve prestolne ikone iz 1850.
          godine.
        </p>
      </div>
    </div>
  );
};
