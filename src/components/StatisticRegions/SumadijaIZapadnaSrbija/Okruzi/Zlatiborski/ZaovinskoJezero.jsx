import zaovinskoJezero1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero1.jpg";
import zaovinskoJezero2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero2.jpg";
import zaovinskoJezero3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero3.jpg";
import zaovinskoJezero4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero4.jpg";
import zaovinskoJezero5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero5.jpg";
import zaovinskoJezero6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero6.jpg";
import zaovinskoJezero11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero1.jpg";
import zaovinskoJezero22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero2.jpg";
import zaovinskoJezero33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero3.jpg";
import zaovinskoJezero44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero4.jpg";
import zaovinskoJezero55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero5.jpg";
import zaovinskoJezero66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";

export const ZaovinskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${zaovinskoJezero11} 400w, ${zaovinskoJezero1} `} alt="Zaovinsko jezero 1" />

      <h2>Zaovinsko jezero</h2>

      <p style={{ paddingTop: "50px" }}>
        Zaovinsko jezero, smešteno na planini Tari u blizini slikovitog sela
        Zaovine, predstavlja pravo remek-delo prirode i omiljenu destinaciju
        zaljubljenika u netaknuti ambijent. Ovo veštačko jezero nastalo je
        između 1975. i 1983. godine izgradnjom brana kod vrha Kik (958 m
        nadmorske visine), čime je preusmeren tok Belog Rzava i stvoren
        zapanjujući vodeni pejzaž. Kada je na najvišem nivou, površina jezera se
        nalazi na nadmorskoj visini od 881,5 metara, dok njegova maksimalna
        dubina doseže čak 110 metara.
      </p>

      <img srcSet={`${zaovinskoJezero22} 400w, ${zaovinskoJezero2} `} alt="Zaovinsko jezero 2" />

      <p>
        Jezero Zaovine nije samo poznato po svojoj prirodnoj lepoti, već i po
        impresivnoj tehničkoj ulozi. Ono funkcioniše kao akumulacija
        reverzibilne hidroelektrane „Bajina Bašta“ u Perućcu, sa kojom je
        povezano vertikalnim cevovodom. Kada je nivo reke Drine nizak, jezero
        služi kao energetski rezervoar, omogućavajući rad turbina
        hidroelektrane. S druge strane, tokom perioda obilnih padavina i
        poplavnih talasa, voda se pumpa nazad u Zaovinsko jezero. Ova oscilacija
        nivoa vode dodatno naglašava njegovu jedinstvenost i tehničku
        značajnost.
      </p>

      <img srcSet={`${zaovinskoJezero33} 400w, ${zaovinskoJezero3} `} alt="Zaovinsko jezro 3" />

      <p>
        Zaovinsko jezero ima brojne funkcije koje ga čine jedinstvenim. Pored
        toga što služi kao rezervoar za hidroelektranu i pomaže u regulisanju
        vodostaja, voda iz jezera se koristi i za ljudsku ishranu nakon
        odgovarajuće obrade u postrojenjima za preradu. Takođe, jezero nudi
        savršene uslove za uzgoj pastrmki, čime doprinosi očuvanju
        biodiverziteta ovog kraja. Tokom letnjih meseci, neuređene plaže oko
        jezera postaju popularna destinacija za ljubitelje kupanja.
      </p>

      <img srcSet={`${zaovinskoJezero44} 400w, ${zaovinskoJezero4} `} alt="Jezero Zaovine 4" />

      <p>
        Pored svoje impresivne vodene lepote, Zaovinsko jezero je i pravo
        prirodno blago u pogledu flore. Oko 50% flore planine Tare i 15% flore
        celokupne Srbije raste upravo u ovom području, što ga čini rajem za
        botaničare i ljubitelje biljaka. Na ovom prostoru zabeleženo je
        prisustvo približno 600 biljnih vrsta, od kojih je 55 uvršteno na
        preliminarnu Crvenu listu flore Srbije. Takođe, Zaovinsko jezero je dom
        za 25 vrsta biljaka od međunarodnog značaja, dok je 15 biljnih vrsta
        zaštićeno kao prirodne retkosti.
      </p>

      <img srcSet={`${zaovinskoJezero55} 400w, ${zaovinskoJezero5} `} alt="Jezero Zaovine 5" />
      <p>
        Osim prirodnih lepota, Zaovinsko jezero pruža i bogato
        kulturno-istorijsko iskustvo. U blizini brane, posetioci mogu obići
        lokaciju gde je Josif Pančić otkrio Pančićevu omoriku, kao i istražiti
        srednjovekovno utvrđenje Grad. Jezero je postalo simbol divlje prirode,
        a neuređene plaže nude savršen mir i opuštanje. Okolne vikendice zrače
        autentičnošću, stvarajući jedinstvenu atmosferu. Ljubazni domaćini iz
        Zaovine srdačno dočekuju turiste, pružajući im toplu dobrodošlicu. Ovaj
        raj takođe privlači ljubitelje ribolova, dok blizina mesta otkrića
        Pančićeve omorike dodaje poseban značaj ovom području.
      </p>

      <img srcSet={`${zaovinskoJezero66} 400w, ${zaovinskoJezero6} `} alt="Jezero Zaovine 5" />
      <p>
        Za ljubitelje avantura i aktivnog odmora, uređene staze za šetnje i
        vožnju biciklom nude jedinstven način za istraživanje prirodnih lepota
        ovog kraja. Neuređene plaže u blizini brane Lazići, jezera Spajići i
        Lipovica dodatno obogaćuju turističku ponudu, nudeći različite opcije za
        opuštanje i bekstvo od svakodnevnog života. Zaovinsko jezero je postalo
        nezaobilazna destinacija za sve koji žele da uživaju u savršenoj
        kombinaciji prirode, kulturnog nasleđa i bogate turističke ponude.
      </p>
    </div>
  );
};
