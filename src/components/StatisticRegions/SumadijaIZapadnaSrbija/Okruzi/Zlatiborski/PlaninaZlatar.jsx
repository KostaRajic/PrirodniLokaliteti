import zlatar1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar1.jpg";
import zlatar2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar2.jpg";
import zlatar3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar3.jpg";
import zlatar4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar4.jpg";
import zlatar5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar5.jpg";
import zlatar6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar6.jpg";
import zlatar11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar1.jpg";
import zlatar22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar2.jpg";
import zlatar33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar3.jpg";
import zlatar44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar4.jpg";
import zlatar55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar5.jpg";
import zlatar66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";

export const PlaninaZlatar = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${zlatar33} 400w, ${zlatar3} `} alt="Planina Zlatar 1" />

      <h2>Planina Zlatar</h2>

      <p style={{ paddingTop: "50px" }}>
        Planina Zlatar nalazi se u jugozapadnom delu Srbije, na ivici Pešterske
        visoravni, između reka Lim, Mileševka, Bistrica i Uvac. Smeštena je na
        udaljenosti od samo 4 kilometra od Nove Varoši i 35 kilometara od
        Priboja. Njen najviši vrh, Golo brdo, doseže nadmorsku visinu od 1627
        metara.
      </p>

      <img srcSet={`${zlatar22} 400w, ${zlatar2} `} alt="Planina Zlatar 2" />

      <p>
        Zlatar planina već godinama privlači veliki broj turista, a jedan od
        glavnih razloga je činjenica da ima čak 285 sunčanih dana godišnje. Ovo
        ukazuje na prisustvo mediteranske, odnosno sredozemne klime, u
        kombinaciji s planinskom. Takva klima pruža idealne uslove za razvoj
        planinske vegetacije, koju uglavnom čine guste šume i prostrani
        pašnjaci.
      </p>

      <img srcSet={`${zlatar11} 400w, ${zlatar1} `} alt="Planina Zlatar 3" />

      <p>
        Na Zlataru su zastupljene šume lišćara i četinarskih vrsta, uključujući
        smrču, hrast, brezu, javor, bukvu i grab. Ova planina je bogata i
        lekovitim biljem, poput hajdučke trave (sporiša), kantariona i kamilice.
        Zahvaljujući raznovrsnoj flori i čistom vazduhu, Zlatar je stekao status
        „vazdušne banje“.
      </p>

      <img srcSet={`${zlatar44} 400w, ${zlatar4} `} alt="Planina Zlatar 4" />

      <p>
        Životinjski svet planine Zlatar nije bogato razvijen, ali se mogu
        pronaći vrste sitne i krupne divljači. Ipak, posebnu pažnju privlači
        reliktna vrsta – beloglavi sup, koji zauzima značajno mesto u fauni ovog
        područja. Pored prirodnih bogatstava, planina Zlatar je poznata i po
        rudnicima mrkog uglja i lignita.
      </p>

      <img srcSet={`${zlatar55} 400w, ${zlatar5} `} alt="Planina Zlatar 5" />
      <p>
        Zlatar je poznat po proizvodnji sjeničkog i zlatarskog sira, a
        stočarstvo na ovom području beleži sve veći razvoj. Na planini se nalazi
        i Zavod za prevenciju, lečenje i rehabilitaciju kardiovaskularnih
        bolesti i povišenog krvnog pritiska, smešten u okruženju borovih i
        brezovih šuma. Ova planina nudi brojne aktivnosti, uključujući
        planinarenje, lov na sitnu i krupnu divljač, splavarenje, foto-turizam,
        kao i razne sportsko-rekreativne sadržaje poput vožnje džipovima,
        krstarenja, vožnje kvadova, kajaka, bicikala, zip lajna i mnogih drugih.
        Izletnički turizam je takođe dobro razvijen.
      </p>

      <img srcSet={`${zlatar66} 400w, ${zlatar6} `} alt="Planina Zlatar 5" />
      <p>
        Na Zlataru su uređene dve ski staze. Prva staza, dužine 800 metara,
        opremljena je ski liftom od 420 metara, a posetioci imaju mogućnost
        iznajmljivanja ski opreme. Druga staza, poznata kao Briježđa, nalazi se
        u Novoj Varoši. Žičara polazi iz samog centra grada i vodi do
        televizijskog predajnika iznad naselja Cvijetnjak, poznatog kao
        „repetitor“. Ova staza je duga 980 metara i klasifikovana je delimično
        kao plava, a delimično kao crvena.
      </p>
    </div>
  );
};
