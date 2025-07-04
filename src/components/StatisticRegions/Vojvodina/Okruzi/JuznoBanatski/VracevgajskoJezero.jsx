import vracevgajskoJezero1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/desktop/vracevgajskoJezero2.jpg";
import vracevgajskoJezero2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/desktop/vracevgajskoJezero3.jpg";
import vracevgajskoJezero3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/desktop/vracevgajskoJezero4.jpg";
import vracevgajskoJezero4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/desktop/vracevgajskoJezero5.jpg";
import vracevgajskoJezero11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/mobile/MvracevgajskoJezero2.jpg";
import vracevgajskoJezero22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/mobile/MvracevgajskoJezero3.jpg";
import vracevgajskoJezero33 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/mobile/MvracevgajskoJezero4.jpg";
import vracevgajskoJezero44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/mobile/MvracevgajskoJezero5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";

export const VracevgajskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(juznoBanatskiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${vracevgajskoJezero22} 400w, ${vracevgajskoJezero2} `} alt="Vračevgajsko Jezero 1" />

      <h2>Vračevgajsko Jezero</h2>

      <p style={{ paddingTop: "50px" }}>
        Vračevgajsko jezero se nalazi u blizini Bele Crkve, na samo tri
        kilometra od grada, uz glavnu saobraćajnicu Beograd - Bela Crkva. Ovo
        jezero je popularno odredište za sve ljubitelje prirode i rekreacije. Na
        obalama jezera smeštena su dva auto-kampa koji nude širok spektar
        sadržaja, uključujući kamp jedinice, bungalove, restoran, kao i
        sanitarne čvorove sa toplotnom i hladnom vodom. Ovaj kompleks pruža
        odlične uslove za odmor i uživanje u prirodi, sa mogućnostima za
        kupanje, pecanje i razne vanjske aktivnosti, što ga čini savršenim
        mestom za porodične izlete i vikend odmore.
      </p>

      <img srcSet={`${vracevgajskoJezero33} 400w, ${vracevgajskoJezero3} `} alt="Vračevgajsko Jezero 2" />

      <p>
        Na Vračevgajskom jezeru nalazi se lepo uređena plaža sa ležaljkama i
        suncobranima, kao i toboganom, što je čini savršenim mestom za opuštanje
        i zabavu. Za ljubitelje aktivnosti, plaža je obogaćena različitim
        sadržajem za rekreaciju, a mališani mogu uživati na ljuljaškama,
        klackalicama i toboganima. Pored toga, jezero se ponosi brojnim
        zavučenim uvalama, okruženim netaknutom prirodom, koje pružaju
        privatnost i prostor za smeštaj plažnog mobilijara, omogućavajući
        posetiocima potpuni mir i udobnost tokom boravka.
      </p>

      <img srcSet={`${vracevgajskoJezero44} 400w, ${vracevgajskoJezero4} `} alt="Vračevgajsko Jezero 3 Bela Crkva" />

      <p>
        Vračevgajsko jezero je najduže od svih jezera u okolini Bele Crkve, sa
        dužinom od 980 metara. Kao i ostala jezera u ovom području, nastalo je
        veštačkim putem početkom 20. veka. Jedna od ključnih karakteristika ovog
        jezera su prirodni filteri koji omogućavaju obnovu vode nekoliko puta
        tokom godine. U letnjim mesecima, prosečna temperatura vode kreće se
        između 20 i 26 stepeni Celzijusa, što ga čini idealnim za kupanje i
        druge vodene aktivnosti.
      </p>

      <img srcSet={`${vracevgajskoJezero11} 400w, ${vracevgajskoJezero1} `} alt="Vračevgajsko Jezero 4 Brla Crkva" />
      <p>
        Jedna od posebnosti Vračevgajskog jezera je i ostrvo koje se nalazi uz
        samu obalu, često nazvano „Vojvođanska Venecija“. Ovo ostrvo je lako
        dostupno, jer postoje uređeni pristupi sa kopna i vode. Staza koja vodi
        sa kopna prelazi preko drvenog mosta, smeštenog između dve plaže. Na
        ostrvu posetioci mogu uživati u sunčanju na ležaljkama ili na zelenim
        površinama, dok visoko drveće pruža prirodan hlad. Na ostrvu se nalazi i
        restoran i bar, koji upotpunjuju ponudu za sve koji žele da se opuste i
        uživaju u prelepom ambijentu.
      </p>
    </div>
  );
};
