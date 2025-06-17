import sotsko1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero2.jpg";
import sotsko2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero3.jpg";
import sotsko3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero4.jpg";
import sotsko4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero5.jpg";
import sotsko5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero6.jpg";
import sotsko11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero2.jpg";
import sotsko22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero3.jpg";
import sotsko33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero4.jpg";
import sotsko44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero5.jpg";
import sotsko55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";

export const SotskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(sremskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${sotsko11} 400w, ${sotsko1} `} alt="Sotsko Jezero 1" />

      <h2>Sotsko Jezero</h2>

      <p>
        Ako tražite savršen prostor za opuštanje, rekreaciju, uživanje u
        roštilju, kupanje (na sopstvenu odgovornost) ili jednostavno uživanje u
        tišini prirode, dok se deca zabavljaju na jednom od igrališta, ovo
        prelepo jezero na Fruškoj gori je pravo mesto za vas. Mnogi ga, s
        pravom, smatraju najlepšim na ovom delu planine, a mirna atmosfera i
        netaknuta priroda pružaju idealne uslove za beg od svakodnevnog života.
      </p>

      <img srcSet={`${sotsko22} 400w, ${sotsko2} `} alt="Sotsko Jezero 2" />

      <p>
        Prelepi pejzaži koji se prostiru do horizonta pružaju osećaj mira i
        opuštanja, a njihov očaravajući izgled poziva da ih zabeležite
        fotoaparatom. Dok šetate obalom jezera, sastaćete se sa raznovrsnim
        predstavnicima faune, koji nesmetano obavljaju svoje svakodnevne
        aktivnosti. Ovdje, čovek se ponaša u harmoniji sa prirodom, koja mu
        uzvraća svojom jedinstvenom lepotom. Na ovom području nema opasnih
        životinja, pa se možete bez straha kretati, dok vas u susret dolaze naši
        simpatični domaćini – gušteri zelembaći sa svojom zapanjujućom tirkiznom
        bojom, kao i brze belouške koje se trude da nas ne primete dok žure na
        svom putu u potragu za hranom.
      </p>

      <img srcSet={`${sotsko33} 400w, ${sotsko3} `} alt="Sotsko Jezero 3" />
      <p>
        Uživajte u pesmi brojnih ptica kao što su grmuše, senice i slavuje, dok
        tropski šareno krilo pčelarica i vodomara donosi dodatnu magiju prirode.
        U plićacima vas sa distance posmatraju bojažljive čaplje, koje su uvek
        spremne da rašire svoja impozantna krila i polete. Ako obratite pažnju,
        visoko na nebu možete uočiti vladare ovog prostora – poljsku eju i orla
        krstaša, koji sa visine prate dešavanja u svom kraljevstvu. Nekrunisani
        vladari jezera, labudica i njen partner, sa svojim potomcima, godinama
        vladaju ovom vodom, a kao pravi vladari često postaju omiljeni modeli za
        fotoaparate posetilaca.
      </p>

      <img srcSet={`${sotsko44} 400w, ${sotsko4} `} alt="Sotsko Jezero 4" />
      <p>
        Kada poželite da se opustite nakon šetnje, raširite svoje ćebe na sveže
        pokošenu travu u šljiviku ili se smestite na obalu ispod vrba i uživajte
        u pikniku. Za ovu vrstu uživanja tu su i nove klupe i stolovi sa roštilj
        mestima. Ako niste poneli hranu, najbližu prodavnicu možete pronaći na
        samo 2 km od jezera. Ne zaboravite da ponesete torbu za plažu, jer je
        kupanje (na sopstvenu odgovornost) i sunčanje na jezeru posebno
        iskustvo. Veštiji kupači će uživati na brani i tek renoviranom molu, dok
        se porodice sa decom kupaju na šljunkovitoj plaži koja ima savršen
        plićak. Ako deca žele promenu, u blizini plaže se nalazi dečji mobilijar
        sa ljuljaškama, klackalicama, toboganom i dva zip lajna, koji su pravi
        hit. Za ljubitelje sporta, tu je i odbojkaški teren sa novim peskom,
        odmah pored plaže.
      </p>

      <img srcSet={`${sotsko55} 400w, ${sotsko5} `} alt="Sotsko Jezero 5" />

      <p>
        Ako odlučite da prošetate duž obale, na oko 300 metara od plaže pronaći
        ćete jedinstveno Štrumf selo, izgrađeno od drvenih bačvi i oslikano
        motivima iz popularnog crtaća. Kada poželite da se sklonite u hlad,
        preporučujem šetnju desnom obalom jezera, koja je okružena listopadnom
        šumom u kojoj prednjači lipa. Kroz ovu šumu prolazi uska stazica dugačka
        oko 300 metara, sa posebnim punktovima za strastvene pecaroše koji se
        nadaju da će im neki od velikih somova povući plovak.
      </p>
    </div>
  );
};
