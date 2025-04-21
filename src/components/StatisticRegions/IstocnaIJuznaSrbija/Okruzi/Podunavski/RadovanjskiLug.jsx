import radovanjskiLug1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/radovanskiLug1.jpg";
import radovanjskiLug2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/radovanskiLug2.jpg";
import radovanjskiLug3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/radovanskiLug3.jpg";
import radovanjskiLug4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/radovanskiLug4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { podunavskiOkrugPathRoutes } from "./PodunavskiOkrugPathRouts";

export const RadovanjskiLug = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(podunavskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={radovanjskiLug1} alt="Radovanjski Lug 1" />

      <h2>Radovanjski Lug</h2>

      <p style={{ paddingTop: "50px" }}>
        Radovanjski Lug je spomen kompleks, koji se nalazi u stoletnoj šumi u
        ataru sela Radovanje. Nalazi se na 8,5 km od Velike Plane i obuhvata
        površinu od 46 ha. Radovanjski Lug, kao prirodno-memorijalni spomenik
        ima status nepokretnog kulturnog dobra kao znamenito mesto od izuzetnog
        značaja.
        <br />
        <br /> Spomen kompleks obuhvata obeleženo mesto ubistva i prvobitan grob
        Vožda Đorđa Petrovića Karađorđa.Pored groba vožda tu se nalazi i crkva
        posvećena Svetom arhangelu Gavrilu, poznata i pod imenom Crkva
        Zahvalnica, nedavno izgrađeni parohijski dom,letnju pozornicu i ulaznu
        kapiju u Radovanjski lug.
      </p>

      <img src={radovanjskiLug2} alt="Radovanjski Lug 2" />

      <p>
        Vožd Đorđe Petrović – Karađorđe zauzima posebno mesto u srpskoj
        istoriji, ne samo kao pokretač i vođa Prvog srpskog ustanka (1804–1813),
        već i zbog svoje tragične sudbine i činjenice da je njegovo telo čak
        četiri puta bilo sahranjivano.
        <br />
        <br /> Nakon tri godine izgnanstva, Karađorđe se 1817. godine, zajedno
        sa svojim pratiocem, pisarom Naumom Krnarom, tajno vratio u Srbiju iz
        Rusije. Na savet svog kuma, narodnog starešine Vujice Vulićevića,
        sklonio se u kolibu od pruća na imanju Dragića Vojkića u Radovanjskom
        lugu.
        <br />
        <br /> Po nalogu kneza Miloša, koji je strepeo za svoju vlast, u ranim
        jutarnjim satima 13. jula (odnosno 26. jula po novom kalendaru), na
        praznik Arhangela Gavrila, zaverenici su ga ubili sekirom.
      </p>

      <img src={radovanjskiLug3} alt="Radovanjski Lug 3" />

      <p>
        Karađorđe je sahranjen u grobu, sto koraka od kolibe prema potoku, bez
        glave, koja je, po naređenju kneza Miloša, odrana, preparirana i poslata
        u Carigrad kako bi se stekla naklonost i poverenje Porte.
        <br />
        <br /> Kasnije je njegovo telo više puta premeštano i ponovo
        sahranjivano, da bi konačno našlo svoje mesto u dinastičkoj zadužbini
        Karađorđevića – crkvi Svetog Đorđa na Oplencu.
        <br />
        <br /> Prvobitni grob vođe Prvog srpskog ustanka obeležen je 1845.
        godine velikim drvenim krstom. Danas se na tom mestu nalazi mermerna
        ploča sa natpisom, veliki drveni krst i gvozdena ograda.
      </p>

      <img src={radovanjskiLug4} alt="Radovanjski Lug 4" />

      <p>
        Na mestu gde je ubijen vožd Karađorđe, 1920. godine postavljen je kamen
        temeljac za spomen-crkvu posvećenu Svetom Arhangelu Gavrilu, poznatu kao
        crkva Zahvalnica. Narod ju je nazvao Zahvalnica u znak zahvalnosti za
        sve što je vođa Prvog srpskog ustanka učinio.<br />
        <br /> Crkva je izgrađena prema
        projektu arhitekte Vasilija Androsova, kao umanjena verzija oplenačke
        crkve. To je jednobrodna građevina dimenzija 13,58 x 10,53 metra, sa
        osmostranom kupolom na vrhu. Zidana je od opeke, u srpsko-vizantijskom
        stilu, sa skromnim arhitektonskim ukrasima.<br />
        <br /> Unutrašnjost hrama podeljena
        je na pripratu, naos i oltarski prostor, za koji se veruje da se nalazi
        upravo na mestu Karađorđevog ubistva. Ikonostas, koji razdvaja oltar od
        naosa, sadrži sedam ikona i izrađen je pod uticajem srpskog
        srednjovekovnog slikarstva. U naosu crkve nalazi se Karađorđev portret u
        prirodnoj veličini (210 x 110 cm), delo čuvenog srpskog slikara Paje
        Jovanovića.
      </p>
    </div>
  );
};
