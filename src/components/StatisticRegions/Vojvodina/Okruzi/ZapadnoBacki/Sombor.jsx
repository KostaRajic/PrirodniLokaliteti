import sombor2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Sombor2.jpg";
import sombor3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Sombor3.jpg";
import laza from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/laza.jpg";
import jovan from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/jovan.jpg";
import spomen1999 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/spomen1999.jpg";
import sombor5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Sombor5.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const Sombor = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <div className="somborBackground">
        <h2>SOMBOR</h2>
      </div>

      <p>
        Sombor je grad u severozapadnom delu Srbije, u Vojvodini, smešten na
        zapadnoj granici sa Mađarskom. Poznat je po svojoj bogatoj istoriji,
        tradiciji i kulturnom nasleđu. Grad se prvi put spominje u 12. veku, a
        tokom srednjeg veka razvijao se kao trgovačko i administrativno
        središte. Danas je Sombor jedan od važnijih gradova u Vojvodini i ima
        status opštine sa značajnom ulogom u regionalnom razvoju.
      </p>

      <img src={sombor2} alt="sombor2" />

      <p style={{ marginTop: "-10px" }}>
        Arhitektura grada odražava bogatu prošlost, sa brojnim zgradama u
        baroknom, klasicističkom i secesijskom stilu. Grad je poznat po svom
        trgu, spomenicima, i zgradama koje svedoče o značajnim istorijskim
        periodima. Sombor je i kulturni centar, domaćin mnogim manifestacijama,
        koncertima i izložbama, a grad i okolna sela imaju bogatu tradiciju u
        muzici, folkloru i likovnoj umetnosti.
      </p>

      <img src={sombor3} alt="sombor3" />

      <p style={{ marginTop: "-10px" }}>
        Sombor je okružen plodnim poljima, a poljoprivreda i stočarstvo imaju
        veliku ulogu u privredi grada. Takođe, priroda i mirna atmosfera čine ga
        atraktivnim za turizam, a blizina granice sa Mađarskom doprinosi
        njegovoj strateškoj važnosti. Sombor je grad koji spaja tradiciju,
        kulturu i prirodne lepote, pružajući svojim posetiocima jedinstven
        doživljaj.
      </p>

      <div className="displayFlex">
        <div>
          <img src={laza} alt="Laza Kostic" />
          <p>Spomenik Lazi Kosticu</p>
        </div>
        <div>
          <img src={jovan} alt="Jovan Ducic" />
          <p>Spomenik Jovanu Ducicu</p>
        </div>
        <div>
          <img src={spomen1999} alt="Spomen 1999" />
          <p>Spomenik zrtvama nato agresiji 1999</p>
        </div>
      </div>

      <img src={sombor5} alt="sombor5" />

      <p style={{ marginTop: "-10px" }}>
        {" "}
        Sombor je grad koji spaja tradiciju, kulturu i prirodne lepote,
        pružajući svojim posetiocima jedinstven doživljaj.
      </p>
    </div>
  );
};
