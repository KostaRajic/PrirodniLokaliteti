import sombor1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/desktop/Sombor1.jpg";
import sombor2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/desktop/Sombor2.jpg";
import sombor3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/desktop/Sombor3.jpg";
import laza from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/desktop/laza.jpg";
import jovan from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/desktop/jovan.jpg";
import spomen1999 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/desktop/spomen1999.jpg";
import sombor5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/desktop/Sombor5.jpg";
import sombor11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/mobile/MSombor1.jpg";
import sombor22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/mobile/MSombor2.jpg";
import sombor33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/mobile/MSombor3.jpg";
import laza1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/mobile/Mlaza.jpg";
import jovan1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/mobile/Mjovan.jpg";
import spomen19991 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/mobile/Mspomen1999.jpg";
import sombor55 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/mobile/MSombor5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";

export const Sombor = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${sombor11} 400w, ${sombor1} `} alt="Sombor 1" />
        <h2>Sombor</h2>


      <p>
        Sombor je grad u severozapadnom delu Srbije, u Vojvodini, smešten na
        zapadnoj granici sa Mađarskom. Poznat je po svojoj bogatoj istoriji,
        tradiciji i kulturnom nasleđu. Grad se prvi put spominje u 12. veku, a
        tokom srednjeg veka razvijao se kao trgovačko i administrativno
        središte. Danas je Sombor jedan od važnijih gradova u Vojvodini i ima
        status opštine sa značajnom ulogom u regionalnom razvoju.
      </p>

      <img srcSet={`${sombor22} 400w, ${sombor2} `} alt="sombor 2" />

      <p>
        Arhitektura grada odražava bogatu prošlost, sa brojnim zgradama u
        baroknom, klasicističkom i secesijskom stilu. Grad je poznat po svom
        trgu, spomenicima, i zgradama koje svedoče o značajnim istorijskim
        periodima. Sombor je i kulturni centar, domaćin mnogim manifestacijama,
        koncertima i izložbama, a grad i okolna sela imaju bogatu tradiciju u
        muzici, folkloru i likovnoj umetnosti.
      </p>

      <img srcSet={`${sombor33} 400w, ${sombor3} `} alt="sombor3" />

      <p>
        Sombor je okružen plodnim poljima, a poljoprivreda i stočarstvo imaju
        veliku ulogu u privredi grada. Takođe, priroda i mirna atmosfera čine ga
        atraktivnim za turizam, a blizina granice sa Mađarskom doprinosi
        njegovoj strateškoj važnosti. Sombor je grad koji spaja tradiciju,
        kulturu i prirodne lepote, pružajući svojim posetiocima jedinstven
        doživljaj.
      </p>

      <div className="displayFlex">
        <div>
          <img srcSet={`${laza1} 400w, ${laza} `} alt="Laza Kostic" />
          <p>Spomenik Lazi Kosticu</p>
        </div>
        <div>
          <img srcSet={`${jovan1} 400w, ${jovan} `} alt="Jovan Ducic" />
          <p>Spomenik Jovanu Ducicu</p>
        </div>
        <div>
          <img srcSet={`${spomen19991} 400w, ${spomen1999} `} alt="Spomen 1999" />
          <p>Spomenik zrtvama nato agresiji 1999</p>
        </div>
      </div>

      <img srcSet={`${sombor55} 400w, ${sombor5} `} alt="sombor5" />

      <p>
        Sombor je grad koji spaja tradiciju, kulturu i prirodne lepote,
        pružajući svojim posetiocima jedinstven doživljaj.
      </p>
    </div>
  );
};
