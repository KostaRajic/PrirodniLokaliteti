import ripaljka1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka1.jpg";
import ripaljka2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka2.jpg";
import ripaljka3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka3.jpg";
import ripaljka4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka4.jpg";
import ripaljka5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka5.jpg";
import ripaljka11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM1.jpg";
import ripaljka22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM2.jpg";
import ripaljka33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM3.jpg";
import ripaljka44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM4.jpg";
import ripaljka55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";

export const VodopadRipaljka = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${ripaljka11} 400w, ${ripaljka1} `} alt="Vodopad Ripaljka 1" />

      <h2>Vodopad Ripaljka</h2>

      <p style={{ paddingTop: "50px" }}>
        Ripaljka je vodopad na reci Gradašnici, smešten na planini Ozren, oko 5
        km od Sokobanje. Proglašen je prvim spomenikom prirode u Jugoslaviji,
        zaštićenim zakonom još 1948. godine. Prema zapisima Jovana Cvijića, u to
        vreme Ripaljka je važila za najviši vodopad u Srbiji.
      </p>

      <img srcSet={`${ripaljka22} 400w, ${ripaljka2} `} alt="Vodopad Ripaljka 2" />

      <p>
        Ripaljka je akumulativni vodopad smešten na nadmorskoj visini od 420
        metara, a sam vodopad je visok 17,5 metara. Tokom letnjih i jesenjih
        meseci reka Gradašnica presušuje, zbog čega vodopad povremeno nestaje.
        Ime „Ripaljka” potiče od reči „ripnuti”, koja se u ovom delu Srbije
        koristi kao sinonim za „skočiti”.
        <br />
        <br />
        Ovaj vodopad je jedan od najlepših u Srbiji i nalazi se samo nekoliko
        desetina metara od ulaza u kompleks Specijalne bolnice na Ozrenu,
        udaljen svega 5 km od Sokobanje. Nastao je na reci Gradašnici, koja se
        ispod Sokobanje uliva u reku Moravicu.
      </p>

      <img srcSet={`${ripaljka33} 400w, ${ripaljka3} `} alt="Vodopad Ripaljka 3" />

      <p>
        Ripaljka se sastoji od 11 odseka čija ukupna visina iznosi oko 40
        metara. Najveći od njih, poznat kao Velika Ripaljka, visok je 11 metara.
        Ispod njega se nalazi manji vodopad visok 5 metara, dok su ostali manji
        slapi, čija visina varira od 0,5 do 2 metra. Okruženi su bujnom
        vegetacijom, zbog čega su često nevidljivi. Posetioci koji prvi put
        dolaze mogu ga pomešati sa manjim slapom koji se nalazi na gornjem delu
        jezera-pondova u krugu bolnice.
      </p>

      <img srcSet={`${ripaljka44} 400w, ${ripaljka4} `} alt="Vodopad Ripaljka 4" />

      <p>
        Ripaljka je jedna od nezaobilaznih atrakcija ovog kraja i omiljena
        destinacija među posetiocima Sokobanje. Ako želite da zabeležite lepu
        sliku sa ovog mesta, najbolje je da ga posetite početkom proleća. Tokom
        otapanja snega i kišnih perioda, velika količina vode koja pada sa
        visine od 11 metara stvara zaista impozantan prizor.
        <br />
        <br />
        Iako je ovo zaštićeno prirodno dobro, suočava se sa pretnjama usled
        problema sa vodosnabdevanjem. Iako spada među najlepše vodopade Srbije,
        često mu se oduzima biološki minimum zbog potreba za vodosnabdevanjem
        Sokobanje i Ozrenska kraja, što može dovesti do njegovog presušivanja
        tokom leta. Ovo je posebno iznenađujuće kada se uzme u obzir da je
        Ripaljka jedno od prvih zaštićenih prirodnih dobara u Srbiji.
      </p>

      <img srcSet={`${ripaljka55} 400w, ${ripaljka5} `} alt="Vodopad Ripaljka 5" />

      <p>
        Prvo područje koje je stavljeno pod zaštitu na teritoriji današnje
        Srbije bila je Obedska bara, koja je zaštićena još 1874. godine. Prva
        zaštićena prirodna dobra u Srbiji obuhvatala su šumske rezerve Oštrozub,
        Mustafa i Feješana u okolini Majdanpeka, kao i vodopad „Velika i mala
        Ripaljka” u okolini Sokobanje, koji je postao zaštićen 1949. godine.
        Prema rečima Jovana Cvijića (1865—1927), ovo je bio najviši vodopad u
        Srbiji u to vreme.
      </p>
    </div>
  );
};
