import ribarskaBanja1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/ribarskaBanja1.jpg";
import ribarskaBanja2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/ribarskaBanja2.jpg";
import ribarskaBanja3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/ribarskaBanja3.jpg";
import ribarskaBanja4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/ribarskaBanja4.jpg";
import ribarskaBanja5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/ribarskaBanja5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";

export const RibarskaBanja = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(rasinskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={ribarskaBanja1} alt="Ribarska Banja 1" />

      <h2 style={{ color: "white" }}>Ribarska Banja</h2>

      <p style={{ paddingTop: "50px" }}>
        Ribarska Banja je malo naselje smešteno na obroncima planine Jastrebac,
        tačnije na njenom masivu Veliki Jastrebac. Prema poslednjem popisu,
        naselje broji svega 280 stanovnika. Deo je Rasinskog okruga, a nalazi se
        na oko 34 km od Kruševca. Ako krećete iz Beograda, put do Ribarske Banje
        dugačak je gotovo 215 km, a vožnja traje nešto više od dva sata. Od Niša
        je udaljena oko 65 km, od Kragujevca oko 140 km, dok je od Novog Sada
        oko 310 km. <br />
        <br /> Kao što je već spomenuto, lepotu ove banje i njene lekovite
        izvore prvi su otkrili Rimljani, i to sasvim slučajno. Nakon nekoliko
        dana odmora na ovom području, tokom kupanja i upotrebe lekovite vode,
        nekoliko vojnika je primetilo da se osećaju izuzetno dobro i potpuno
        preporođeni.
      </p>

      <img src={ribarskaBanja2} alt="Ribarska Banja 2" />

      <p>
        Prema nekim istorijskim istraživanjima, prvo kupatilo u Ribarskoj banji
        izgrađeno je za vreme Carice Milice, koja je upravo ovde negovala svoju
        lepotu.
        <br /> Kasnije, i Turci su otkrili lekovite izvore ovog područja, pa su
        izgradili veliki hamam, u kojem su uživali samo najimućniji.
        <br /> Godine 1852. banju je posetio Aleksandar Karađorđević, koji je
        naredio izgradnju novog, tada modernog kupatila. Samo dve godine
        kasnije, banja je dobila svog prvog lekara.
        <br /> Nažalost, krajem 19. veka gotovo sve je bilo uništeno, ali je
        brzo obnovljeno. Ponovno interesovanje za banju, njen razvoj i gradnja
        novih objekata, javili su se za vreme vladavine kralja Petra I
        Karađorđevića.
        <br /> Ako ste se ikada pitali kako je Ribarska banja dobila svoje ime,
        postoji zanimljiva priča. Naime, ovde su ribari pecali za kneza Lazara,
        najčešće pastrmku, koja se smatrala najkvalitetnijom i najukusnijom
        ribom.
      </p>

      <img src={ribarskaBanja3} alt="Ribarska Banja 3" />

      <p>
        Samo lečenje, vežbe, terapija i dijagnostika se odvija u njihovoj
        Specijalnoj bolnici za rehabilitaciju. Ovde se leče skoro sva koštana
        oboljenja, sva tri oblika reumatizma, deformacije kičmenog stuba,
        povrede zglobova, hemiplegije, hemipareze…
        <br />
        <br /> Nakon operacija na kostima ili stanja nakon koštanih preloma,
        doktori će vam najčešće preporučiti Ribarsku banju kao idealno mesto za
        vaš oporavak.
        <br />
        <br /> S obzirom na to da se banja nalazi na nadmorskoj visini od 540m,
        okružena gustim šumama, prijatne subplaninske klime i svežeg vazduha,
        preporučuje se i nekim pacijentima sa lakšim plućnim problemima.
      </p>

      <img src={ribarskaBanja4} alt="Ribarska Banja 4" />

      <p>
        U Ribarskoj banji nalaze se čak šest termalnih izvora sa sumporovitom
        lekovitom vodom, od kojih je najtopliji sa temperaturom od čak 42°C.
        Ostali izvori imaju temperature koje variraju od 25°C do 37°C. Jedini
        izvor sa hladnijom vodom, oko 16°C, koristi se za pijenje. U centru za
        lečenje nalazi se zatvoreni bazen i nekoliko kadica, dok je za posetioce
        u letnjem periodu na raspolaganju veliki otvoreni bazen. Mališani će
        sigurno uživati u zabavi koja je zagarantovana.
        <br />
        <br /> Ako odlučite da svoj odmor provedete ovde i potpuno se opustite,
        na raspolaganju su vam različite wellness usluge, uključujući masaže,
        saune, parna kupatila, slanu sobu, tretmane za lice i telo, teretanu i
        još mnogo toga.
      </p>

      <img src={ribarskaBanja5} alt="Ribarska Banja 5" />

      <p>
        Ako ste ljubitelj uživanja i želite da svoj odmor provedete opuštajući
        se uz termalne vode, masaže i sve druge wellness usluge, Ribarska banja
        je pravo mesto za vas u bilo kojem periodu godine. Međutim, ako ste
        skloniji dugim šetnjama, avanturama i možda čak noćnom životu, leto je
        savršen period za vaš boravak.<br />
        <br /> Tokom letnjih meseci, Ribarska banja nudi
        raznovrsne događaje, bazare i manifestacije, a najpoznatija je Kulturno
        leto. Ovo je idealna prilika za sve ljubitelje folklora, umetničkih
        performansa i uživanja u domaćim specijalitetima.
      </p>
    </div>
  );
};
