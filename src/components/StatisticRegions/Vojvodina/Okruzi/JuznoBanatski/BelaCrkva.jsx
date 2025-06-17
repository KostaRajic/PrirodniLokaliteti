import belaC1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC1.jpg";
import belaC2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC2.jpg";
import belaC3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC3.jpg";
import belaC4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC4.jpg";
import belaC5 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC5.jpg";
import belaC6 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC6.jpg";
import belaC7 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC7.jpg";
import belaC11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC1.jpg";
import belaC22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC2.jpg";
import belaC33 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC3.jpg";
import belaC44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC4.jpg";
import belaC55 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC5.jpg";
import belaC66 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC6.jpg";
import belaC77 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";

export const BelaCrkva = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(juznoBanatskiPathRoutes.home)} style={{fill: 'white'}}/>
      <header></header>
      <img srcSet={`${belaC55} 400w, ${belaC5} `} alt="Bela Crkva 1" />

      <h2>Bela Crkva</h2>

      <p style={{ paddingTop: "50px"}}>
        Bela Crkva, smeštena u jugozapadnom delu Srbije, poznata je po svojim
        prirodnim lepotama i bogatom kulturnom nasleđu, što čini ovu destinaciju
        interesantnom za turizam. Grad i okolna područja nude raznovrsne
        mogućnosti za ekoturizam, rekreativne aktivnosti i uživanje u prirodi.
      </p>

      <img srcSet={`${belaC44} 400w, ${belaC4} `} alt="Bela Crkva 2" />

      <p>
        Bela Crkva se nalazi u blizini reke Tamiš, okružena bogatim šumama,
        močvarama i jezerima, što ovu oblast čini idealnom za ljubitelje
        prirode. Grad je posebno poznat po jezerima u okolini, koja su popularna
        za ljubitelje pecanja, vožnje čamcem i drugih vodenih aktivnosti. Jezera
        poput Bela Crkva i Crna Bara su atraktivna za posetioce koji uživaju u
        mirnoj i netaknutoj prirodi. Bela Crkva i okolna područja predstavljaju
        idealnu destinaciju za ekoturizam. Obilazak prirodnih rezervata, šetnje
        kroz šumske staze, biciklizam i posmatranje ptica su popularne
        aktivnosti. Region je domaćin raznim biljnim i životinjskim vrstama, što
        ga čini pogodnim za ekološke ture.
      </p>

      <img srcSet={`${belaC11} 400w, ${belaC1} `} alt="Bela Crkva 3" />

      <p>
        Gradski park predstavlja zelenu oazu u samom centru Bele Crkve, koja posetiocima
        pruža prijatan odmor od gradske buke. U središtu parka nalazi se
        paviljon za svečanosti i okupljanja koji podseća na prošla vremena. Prvi
        podaci o postojanju parka u Beloj Crkvi datiraju iz perioda nakon 1840.
        godine. Godine 1912. podignut je današnji muzički paviljon, a 1913.
        godine izgrađeno je postrojenje sa bunarom i kućicom. Na kućici je
        urezana geografska širina, dužina i nadmorska visina Bele Crkve. Gradski
        park u Beloj Crkvi ima pravilni geometrijski oblik, čije staze zvezdasto
        vode od dva centralna kružna platóa, u čijem je jednom centru postavljen
        Spomenik pobedi.
      </p>

      <img srcSet={`${belaC33} 400w, ${belaC3} `} alt="Bela Crkva 4" />
      <p>
      Bela Crkva je poznata po svom prirodnom okruženju i blizini nekoliko jezera, koja pružaju odlične uslove za odmor i uživanje u vodi tokom letnjih meseci. Plaža na jezeru u Beloj Crkvi predstavlja popularno mesto za kupanje, opuštanje i rekreaciju. Jezero je poznato po čistoći vode i lepoj prirodi koja ga okružuje, što ga čini atraktivnim za sve koji žele da pobegnu od gradske vreve i uživaju u prirodnom ambijentu.

Plaža na jezeru nudi različite sadržaje za posetioce, uključujući ležaljke, restorane i kafiće, kao i prostrane travnate površine za sunčanje. Voda je pogodna za kupanje, a ljubitelji sportova na vodi mogu uživati u vožnji čamcem ili pedalini. Okolica jezera je idealna za šetnje, a mnogi posetioci koriste priliku da uživaju u prirodi i tišini ovog prelepog mesta.

Ovaj deo Bele Crkve takođe je popularan među porodicama, jer se ovde mogu provoditi opušteni dani uz vodu, a istovremeno uživati u svim prednostima prirodnog okruženja.

        Bela Crkva je domaćin različitih kulturnih manifestacija tokom godine.
        Među njima se izdvaja Bela Crkva Summer Fest, manifestacija koja okuplja
        posetioce sa ciljem promocije kulture, muzike i umetnosti. Takođe, grad
        organizuje i lokalne manifestacije kao što su Izložba domaćih proizvoda,
        festivali folklora i narodne muzike, kao i sportski događaji.
      </p>

      <img srcSet={`${belaC22} 400w, ${belaC2} `} alt="Bela Crkva 5" />
      <p>
        Gradsko jezero se prostire duž leve strane puta za Kovin, uz zapadni
        obod Bele Crkve. Na severnoj strani je izgrađena betonska obala sa
        blagim prelazom ka većoj dubini iznad koje se nalazi restoran „Jezero”.
        U produžetku od oko 300 metara nalaze se bungalovi sa 66 ležajeva.
        Prosečna dubina jezera je 3 metra, a u toku maksimalnog vodostaja ne
        prelazi 6,5 metara.
      </p>

      <img srcSet={`${belaC66} 400w, ${belaC6} `} alt="Bela Crkva 6" />
      <p>
        Reka Tamiš, koja protiče kroz grad, je važna za turizam, jer se u njenoj
        blizini nalaze brojne prirodne lepote. Posetioci mogu uživati u vožnji
        čamcem, ribolovu i šetnjama uz obalu. Takođe, reka nudi mogućnosti za
        sportske aktivnosti, kao što su kajak i rafting.
      </p>

      <img srcSet={`${belaC77} 400w, ${belaC7} `} alt="Bela Crkva 7" />
      <p>
        Ovo je stara manifestacija, koja se u ovim krajevima zove „maskembal”.
        Datum manifestacijе se prilagođava početku posta u pravoslavnom
        kalendaru (februar- marta). Karnevalsku povorku organizuje Mesna
        zajednica u saradnji sa OŠ "Mihael Sadoveanu" i meštanima sela. Povorku
        predvodi folklorna grupa koju nazivaju "kalušari". Grupa mladih u
        tradicionalnoj rumunskoj nošnji, izvodi igru koja se igra samo tog dana.
        Prethodno u toku prepodneva "kalušari" obiđu selo i u svakoj kući
        odigraju ples. Povorka sa eksponatima prolazi glavnom ulicom Grebenca. U
        toku manifestacije organizuje se izložba ručnih radova, kao i
        kompozicije sa starim nameštajem.
      </p>
    </div>
  );
};
