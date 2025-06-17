import kopovo1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo3.jpg";
import kopovo2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo2.jpg";
import kopovo3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo4.jpg";
import kopovo4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo5.jpg";
import kopovo5 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo6.jpg";
import kopovo11 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo3.jpg";
import kopovo22 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo2.jpg";
import kopovo33 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo4.jpg";
import kopovo44 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo5.jpg";
import kopovo55 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";

export const SlanoKopovo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(srednjeBanatskiPathRoutes.home)} />
        <header></header>
        <img srcSet={`${kopovo11} 400w, ${kopovo1} `} alt="Slano Kopovo 1" />

        <h2>
        Specijalni rezervat prirode "Slano Kopovo"
        </h2>

        <p>
          Specijalni rezervat prirode “Slano Kopovo” u Novom Bečeju, uredbom
          Vlade Republike Srbije 2011. godine proglašen je za prirodno dobro od
          izuzetnog značaja prve kategorije. Spada među poslednje očuvane bare
          na slatinama u Srbiji. Reka slana akvatorija koja je očuvana do danas
          u kompleksu vodoplavnih terena Potisja.
        </p>

        <img srcSet={`${kopovo22} 400w, ${kopovo2} `} alt="Slano Kopovo 2" />

        <p>
          Ovo panonsko stanište odlikuje se slanim, blatnjavim barama i u
          zavisnosti od klimatskih uslova postaje jezero. U toku letnjih meseci
          kada se voda povuče, Slano kopovo biva pokriveno belom skramom od
          nekoliko centimetara. Jezero se snabdeva vodom iz atmosferskih taloga,
          površinskim pritičanjem vode i podzemnim vodama. Najveća dubina jezera
          je oko 20 centimetara.
        </p>

        <img srcSet={`${kopovo33} 400w, ${kopovo3} `} alt="Slano Kopovo 3" />

        <p>
          Novi Bečej je poznat po svojoj kulturnoj baštini. Grad se ponosi i
          očuvanim istorijskim spomenicima i tradicionalnim manifestacijama, kao
          i brojnim verskim objektima, kao što je crkva Sv. Đorđa, koja je deo
          lokalne istorijske baštine. U poslednjim godinama, Novi Bečej se sve
          više razvija kao turistička destinacija, sa akcentom na prirodu,
          rekreaciju i seoski turizam. Zbog svoje blizine velikim gradovima, kao
          što je Zrenjanin i Pančevo, kao i Rumuniji, grad privlači posetioce
          koji žele da uživaju u mirnom okruženju i prirodnim lepotama.
        </p>

        <img srcSet={`${kopovo44} 400w, ${kopovo4} `} alt="Slano Kopovo 4" />

        <p>
          Usled isparavanja i povlačenja vode iz najnižih prizemnih oblasti,
          dolazi do nagomilavanja slojeva soli i do nekoliko centimetara. A
          povećano zagrevanje vazduha iznad jezera i razlika u temperaturi sa
          okolnih polja dovodi do optičkih i meteoroloških pojava u vidu
          fatamorgana ili iznenadne pojave vetrova. Nalazi se na prosečnoj
          nadmorskoj visini od 80m, a rezervat čine dva bazena: Slano kopovo i
          Poština kopovo.
        </p>

        <img srcSet={`${kopovo55} 400w, ${kopovo5} `} alt="Slano Kopovo 5" />
        <p>
          Rezervat predstavlja jedno od najvažnijih stanica ptica u Srbiji i
          Evropi. Veliki broj vrsta ptica sa svetske crvene liste ugroženih
          ptica, gnezdi se upravo na ovom području. Ovo mesto je i značajna
          migratorna stanica za više stotina hiljada ptica vodenih staništa.
          Zabeleženo je prisustvo više od 200 vrsta ptica, od čega je 73 vrste
          zabeleženo na gnežđenju.
        </p>
      </div>
    </>
  );
};
