import belaC1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/BC1.jpg";
import belaC2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/BC2.jpg";
import belaC3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/BC3.jpg";
import belaC4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/BC4.jpg";
import belaC5 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/BC5.jpg";
import belaC6 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/BC6.jpg";
import belaC7 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/BC7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const BelaCrkva = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={belaC4} alt="Bela Crkva 1" />

      <h2>BELA CRKVA</h2>

      <p style={{ paddingTop: "50px", marginTop: "-10px" }}>
        Bela Crkva, smeštena u jugozapadnom delu Srbije, poznata je po svojim
        prirodnim lepotama i bogatom kulturnom nasleđu, što čini ovu destinaciju
        interesantnom za turizam. Grad i okolna područja nude raznovrsne
        mogućnosti za ekoturizam, rekreativne aktivnosti i uživanje u prirodi.
      </p>

      <img src={belaC2} alt="Bela Crkva 2" />

      <p style={{ marginTop: "-10px" }}>
        Bela Crkva se nalazi u blizini reke Tamiš, okružena bogatim šumama,
        močvarama i jezerima, što ovu oblast čini idealnom za ljubitelje
        prirode. Grad je posebno poznat po jezerima u okolini, koja su popularna
        za ljubitelje pecanja, vožnje čamcem i drugih vodenih aktivnosti. Jezera
        poput Bela Crkva i Crna Bara su atraktivna za posetioce koji uživaju u
        mirnoj i netaknutoj prirodi.
      </p>

      <img src={belaC3} alt="Bela Crkva 3" />

      <p style={{ marginTop: "-10px" }}>
        Bela Crkva i okolna područja predstavljaju idealnu destinaciju za
        ekoturizam. Obilazak prirodnih rezervata, šetnje kroz šumske staze,
        biciklizam i posmatranje ptica su popularne aktivnosti. Region je
        domaćin raznim biljnim i životinjskim vrstama, što ga čini pogodnim za
        ekološke ture.
      </p>

      <img src={belaC1} alt="Bela Crkva 4" />
      <p style={{ marginTop: "-10px" }}>
        Bela Crkva je domaćin različitih kulturnih manifestacija tokom godine.
        Među njima se izdvaja Bela Crkva Summer Fest, manifestacija koja okuplja
        posetioce sa ciljem promocije kulture, muzike i umetnosti. Takođe, grad
        organizuje i lokalne manifestacije kao što su Izložba domaćih proizvoda,
        festivali folklora i narodne muzike, kao i sportski događaji.
      </p>

      <img
        src={belaC5}
        alt="Bela Crkva 5"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Gradsko jezero se prostire duž leve strane puta za Kovin, uz zapadni
        obod Bele Crkve. Na severnoj strani je izgrađena betonska obala sa
        blagim prelazom ka većoj dubini iznad koje se nalazi restoran „Jezero”.
        U produžetku od oko 300 metara nalaze se bungalovi sa 66 ležajeva.
        Prosečna dubina jezera je 3 metra, a u toku maksimalnog vodostaja ne
        prelazi 6,5 metara.
      </p>

      <img
        src={belaC6}
        alt="Bela Crkva 6"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Reka Tamiš, koja protiče kroz grad, je važna za turizam, jer se u njenoj
        blizini nalaze brojne prirodne lepote. Posetioci mogu uživati u vožnji
        čamcem, ribolovu i šetnjama uz obalu. Takođe, reka nudi mogućnosti za
        sportske aktivnosti, kao što su kajak i rafting.
      </p>

      <img
        src={belaC7}
        alt="Bela Crkva 7"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Ovo je stara manifestacija, koja se u ovim krajevima zove
        „maskembal”. Datum manifestacijе se prilagođava početku posta u pravoslavnom kalendaru (februar-
          marta).  Karnevalsku povorku organizuje Mesna zajednica u saradnji
        sa OŠ "Mihael Sadoveanu" i meštanima sela. Povorku predvodi folklorna
        grupa koju nazivaju "kalušari". Grupa mladih u tradicionalnoj rumunskoj
        nošnji, izvodi igru koja se igra samo tog dana. Prethodno u toku
        prepodneva "kalušari" obiđu selo i u svakoj kući odigraju ples. Povorka
        sa eksponatima prolazi glavnom ulicom Grebenca. U toku manifestacije
        organizuje se izložba ručnih radova, kao i kompozicije sa starim
        nameštajem.
      </p>
    </div>
  );
};
