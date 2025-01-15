import GP3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/GP3.jpg";
import GP1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/GP1.jpg";
import GP4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/GP4.jpg";
import GP2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/GP2.jpg";
import GP5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/GP5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const GornjePodunavlje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={GP5} alt="Gornje Podunavlje 1" />
        <h2>GORNJE PODUNAVLJE</h2>


      <p>
        Gornje Podunavlje je specijalni rezervat prirode na desnoj obali Dunava
        u Zapadno Bačkom okrugu. Proteže se na preko 20.000 hektara i
        predstavlja jedno od najočuvanijih močvarnih područja u Srbiji. Ovo
        područje je deo međunarodno značajnih močvara i uključeno je u mrežu
        zaštićenih područja Evrope.
      </p>

      <img src={GP1} alt="Gornje Podunavlje 2" />

      <p style={{ marginTop: "-10px" }}>
        Gornje Podunavlje je popularna destinacija za ekoturizam. Posetioci mogu
        uživati u vožnji čamcima kroz mrežu dunavskih rukavaca, posmatranju
        ptica, planinarenju i biciklizmu. Ribolovci ovde pronalaze bogate riblje
        vode, dok ljubitelji prirode mogu istraživati očuvane pejzaže i uživati
        u miru i tišini.
      </p>

      <img src={GP4} alt="Gornje Podunavlje 3" />

      <p style={{ marginTop: "-10px" }}>
        Idealno je za porodice, istraživače i ekoturiste koji žele da provedu
        vreme u tišini i miru, daleko od gradske vreve. Ovaj prirodni biser
        pruža priliku da posetioci dožive Dunav na jedinstven način, kroz
        plovidbu njegovim rukavcima i posmatranje bogate flore i faune.
      </p>

      <img src={GP3} alt="Gornje Podunavlje 4" />

      <p style={{ marginTop: "-10px" }}>
        Ovaj rezervat je pravi biser prirode, značajan ne samo za očuvanje
        biodiverziteta, već i za promovisanje održivog turizma i podizanje
        svesti o važnosti očuvanja prirodnih staništa. Gornje Podunavlje je
        idealno mesto za ljubitelje prirode, istraživače i sve koji žele da se
        povežu sa netaknutim okruženjem.
      </p>

      <img src={GP2} alt="Gornje Podunavlje 5" style={{ marginBottom: "-10px" }} />
      <p>
        Istražite Gornje Podunavlje, oazu netaknute prirode uz Dunav, idealnu za
        posmatranje ptica, vožnju čamcem i uživanje u miru močvarnih pejzaža.
      </p>
    </div>
  );
};
