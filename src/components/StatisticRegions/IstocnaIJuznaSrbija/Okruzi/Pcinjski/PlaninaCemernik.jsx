import cemernik1 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/cemernik1.jpg'
import cemernik2 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/cemernik2.jpg'
import cemernik3 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/cemernik3.jpg'
import cemernik4 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/cemernik4.jpg'
import cemernik5 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/cemernik5.jpg'


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from './PcinjskiOkrugPathRoutes'

export const PlaninaCemernik = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={cemernik1} alt="Planina Čemernik 1" />

      <h2>Planina Čemernik</h2>

      <p style={{ paddingTop: "50px" }}>
        Čemernik rado i često posećuju planinari i preduzimljivi turisti koji
        borave kraj Vlasinskog jezera, jer je lako doći do samog vrha (Vrlo
        Osoje 1638 m). Put je širok, a do vrha se stiže za 2 do 2,5 sata. Sa
        obronaka se pruža prelep pogled na jezero i okolne planine, kao što su
        Strešer, Gramada, Vardenik i Ostrozub. Na zapadu se spusta do Sićevačke
        klisure, na severu se graniči sa Ostrozubom. Vlasina ga sa severozapada
        odvaja od Gramade, dok je na jugu reka Vrla, preko koje se nalazi
        Vardenik. Planina se nalazi na teritoriji opštine Surdulica.
      </p>

      <img src={cemernik2} alt="Planina Čemernik 2" />

      <p>
        Čemernik pripada planinama srednje visine i predstavlja tipičnu
        impozantnu planinu sa zaobljenim vrhovima. Sastavljen je od starih
        kristalastih škriljaca iz paleozoika, koji su mestimično probijeni
        mlađim dacitima. Planina je dobila ime po otrovnoj biljci čemerici
        (Veratrum), koju, pored ostalog planinskog bilja, ima u izobilju. Sastav
        planine čine kristalasti škriljci prve grupe. Površina je uglavnom
        ogoljena, dok su padine delimično prekrivene šumom. U istočnom podnožju
        nalaze se najveća naselja Vlasina Rid i Crna Trava, dok su na zapadnom
        delu naselja Mlačište, Mačkatića, Mañak i Ljutež.
      </p>

      <img src={cemernik3} alt="Planina Čemernik 3" />

      <p>
        Na Čemerniku su do 1941. godine svoja stada napasali i Ašani ili
        Karačani, poreklom iz severne Grčke. Narod ih je još zvao i Crnovuncima,
        jer su njihove ovce imale crno runo i bile izuzetno izdržljive na
        vremenske uslove. O njihovom boravku na ovoj planini svedoče i toponimi:
        Ašanske kolibe i Ašanske livade.
      </p>

      <img src={cemernik4} alt="Planina Čemernik 4" />

      <p>
        U Mačkatici je novembra 1940. godine jedna nemačka firma započela
        eksploataciju rude molibdena. Rudarstvo je obustavljeno 1950. godine.
        <br />
        <br />
        Najviši vrh planine je Vrlo Osoje, prema podacima OpenTopoMap, koji ima
        visinu od 1638 m. Kota koja je na topografskoj karti VGI označena kao
        Veliki Čemernik (1638 m) nije na najvišoj tački planine; nekoliko je
        metara niža od Vrlog Osoja i nalazi se gotovo 300 metara jugozapadno.
        Oba vrha se nalaze na ravnom, zaobljenom i pošumljenom bregu.
      </p>

      <img src={cemernik5} alt="Planina Čemernik 5" />

      <p>
        Do vrha se može stići sa hotela na Vlasinskom Ridu. Dužina staze do vrha
        je oko 7 km, a visinska razlika iznosi 420 m. Staza vodi preko vrha
        Preslap (1538 m), koji je lep vidikovac, za razliku od vrha Čemernika,
        koji je prekriven četinarskom šumom.
      </p>
    </div>
  );
};
