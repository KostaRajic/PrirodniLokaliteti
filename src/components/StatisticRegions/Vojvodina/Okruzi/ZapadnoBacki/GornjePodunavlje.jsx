import GP3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP3.jpg";
import GP1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP1.jpg";
import GP4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP4.jpg";
import GP2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP2.jpg";
import GP5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP5.jpg";
import GP33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP3.jpg";
import GP11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP1.jpg";
import GP44 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP4.jpg";
import GP22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP2.jpg";
import GP55 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";

export const GornjePodunavlje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${GP55} 400w, ${GP5} `} alt="Gornje Podunavlje 1" />
        <h2>Gornje Podunavlje</h2>


      <p>
        Gornje Podunavlje je specijalni rezervat prirode na desnoj obali Dunava
        u Zapadno Bačkom okrugu. Proteže se na preko 20.000 hektara i
        predstavlja jedno od najočuvanijih močvarnih područja u Srbiji. Ovo
        područje je deo međunarodno značajnih močvara i uključeno je u mrežu
        zaštićenih područja Evrope.
      </p>

      <img srcSet={`${GP11} 400w, ${GP1} `} alt="Gornje Podunavlje 2" />

      <p>
        Gornje Podunavlje je popularna destinacija za ekoturizam. Posetioci mogu
        uživati u vožnji čamcima kroz mrežu dunavskih rukavaca, posmatranju
        ptica, planinarenju i biciklizmu. Ribolovci ovde pronalaze bogate riblje
        vode, dok ljubitelji prirode mogu istraživati očuvane pejzaže i uživati
        u miru i tišini.
      </p>

      <img srcSet={`${GP44} 400w, ${GP4} `} alt="Gornje Podunavlje 3" />

      <p>
        Idealno je za porodice, istraživače i ekoturiste koji žele da provedu
        vreme u tišini i miru, daleko od gradske vreve. Ovaj prirodni biser
        pruža priliku da posetioci dožive Dunav na jedinstven način, kroz
        plovidbu njegovim rukavcima i posmatranje bogate flore i faune.
      </p>

      <img srcSet={`${GP33} 400w, ${GP3} `} alt="Gornje Podunavlje 4" />

      <p>
        Ovaj rezervat je pravi biser prirode, značajan ne samo za očuvanje
        biodiverziteta, već i za promovisanje održivog turizma i podizanje
        svesti o važnosti očuvanja prirodnih staništa. Gornje Podunavlje je
        idealno mesto za ljubitelje prirode, istraživače i sve koji žele da se
        povežu sa netaknutim okruženjem.
      </p>

      <img srcSet={`${GP22} 400w, ${GP2} `} alt="Gornje Podunavlje 5" />
      <p>
        Istražite Gornje Podunavlje, oazu netaknute prirode uz Dunav, idealnu za
        posmatranje ptica, vožnju čamcem i uživanje u miru močvarnih pejzaža.
      </p>
    </div>
  );
};
