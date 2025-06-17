import djavoljaVaros1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros1.jpg";
import djavoljaVaros2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros2.jpg";
import djavoljaVaros3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros3.jpg";
import djavoljaVaros4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros4.jpg";
import djavoljaVaros5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros5.jpg";
import djavoljaVaros11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM1.jpg";
import djavoljaVaros22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM2.jpg";
import djavoljaVaros33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM3.jpg";
import djavoljaVaros44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM4.jpg";
import djavoljaVaros55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";

export const DjavoljaVaros = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(toplickiOkurgPathRoutes.home)} />
      <header></header>
      <img srcSet={`${djavoljaVaros11} 400w, ${djavoljaVaros1} `} alt="Đavolja Varoš 1" />

      <h2>Đavolja Varoš</h2>

      <p style={{ paddingTop: "50px" }}>
        Đavolja varoš je skup zemljanih glavutaka ili kula na čijim vrhovima se
        nalaze kamene kape (blokovi, andezitske kupe). Ima ih više od dvesta,
        visoke su od dva do petnaest metara, a široke od pola do tri metra.
        Đavolja varoš je retki prirodni fenomen koji se nalazi na Radan planini
        u ataru sela Đake, u blizini Kuršumlije, oko 90 km jugozapadno od Niša.
        Čini je 202 kamene figure koje su nastale dugotrajnim i strpljivim radom
        prirode. Smeštene su u dve jaruge (Đavolja jaruga i Paklena jaruga),
        koje su podeljene vododelnicom, čiji se završni delovi spajaju u
        erozivnu čelenku.
      </p>

      <img srcSet={`${djavoljaVaros22} 400w, ${djavoljaVaros2} `} alt="Đavolja Varoš 2" />
      <p>
        Ovaj spomenik kulture čine dva, u svetu retka prirodna fenomena:
        zemljane figure, kao specifični oblici reljefa, i dva izvora veoma
        kisele vode sa visokom mineralizacijom.
        <br />
        <br />
        Đavolja varoš je bila najbolje plasirani evropski kandidat u svojoj
        kategoriji, kao jedan od 77 kandidata za sedam svetskih čuda prirode, a
        još je značajnije što je bila u trci sve do poslednjeg glasanja koje se
        završilo leta 2010. godine.
        <br />
        <br />
        Stavljena je pod zaštitu još 1959. godine, a 1995. godine Đavolja varoš
        je Uredbom Vlade Republike Srbije proglašena za prirodno dobro od
        izuzetnog značaja i stavljena je u prvu kategoriju zaštite kao spomenik
        prirode.
      </p>

      <img srcSet={`${djavoljaVaros33} 400w, ${djavoljaVaros3} `} alt="Đavolja Varoš 3" />

      <p>
        Kameni stubovi su nastali delovanjem erozije na zemljište sastavljeno od
        rastresitog, ali čvrstog materijala na kojem se nalazi veće kamenje. Pre
        više miliona godina celo područje je bilo centar snažnih vulkanskih
        aktivnosti, o čemu i danas svedoče raznobojne stene u zaledju stubova.
        Međutim, ova pojava je nastala relativno kasno, a njenom stvaranju
        najviše su doprineli ljudi. Uništavanjem šume, otvorili su put razornom
        delovanju vode, pri čemu su krupni komadi stena štitili dublje i mekše
        slojeve zemlje od udarnih kišnih kapljica i ispiranja vodom. U toj prvoj
        fazi, delovanjem kiše i erozijom, urušava se zemljište, osim ispod
        stena, koje svojom težinom sprečavaju dalji pad zemlje. Tako nastaju
        piramide i/ili kule. Kameni blokovi na vrhovima stubova služe kao
        zaštita od kiše, ali vodene bujice i dalje prolaze između figura,
        spiraju zemlju i čine da vremenom figure postaju sve veće. Ova pojava
        spada u drugu fazu koja se sastoji od „finalne obrade“. Naime,
        delovanjem prirodnih sila, piramide i kule se još više istanjuju, tako
        da na kraju ostaju pravilni stubovi sa kamenim kapama. Ovaj erozivni
        proces traje vekovima, a figure tokom tog procesa nastaju, rastu,
        menjaju se, skraćuju, postepeno nestaju i ponovo se stvaraju.
      </p>

      <img srcSet={`${djavoljaVaros44} 400w, ${djavoljaVaros4} `} alt="Đavolja Varoš 4" />

      <p>
        Ovaj geomorfološki fenomen je jedinstven u Srbiji i vrlo redak u svetu.
        U Evropi postoje slične pojave u Alpima, kao i u SAD, gde je poznata
        „Bašta bogova“. Međutim, kule Đavolje varoši su znatno veće i stabilnije
        nego na drugim lokacijama, što ih čini najpoznatijim prirodnim
        spomenikom ove vrste u Evropi. Do Đavolje varoši se može doći iz opština
        Kuršumlija, Bojnik i Lebane, ali je najlakši i najlepši način
        planinarenje iz Lebana.
        <br />
        <br />
        Đavolja varoš je svrstana u Sedam srpskih čuda, u kategoriju istorijskih
        i kulturnih spomenika Srbije, kao i sedam prirodnih mesta, koja su
        odabrana u akciji dodatka „Magazin“ lista Politika i Turističke
        organizacije Srbije.
      </p>

      <img srcSet={`${djavoljaVaros55} 400w, ${djavoljaVaros5} `} alt="Đavolja Varoš 5" />

      <p>
        Pored kamenih kula, Đavolja varoš je poznata i po dva izvora veoma
        kisele vode. Jedan od njih je Đavolja voda, hladan i ekstremno kisel
        izvor (pH 1.5) sa visokom mineralizacijom (15 g/l vode), koji se nalazi
        u Đavoljoj jaruzi. Crveno vrelo je drugi izvor (pH 3.5), sa nižom
        mineralizacijom (4.372 mg/l vode). Ovakve vrste vode su vrlo retke u
        svetu i koriste se u banjskom lečenju, jer narod veruje da su izuzetno
        lekovite, ali naučnici upozoravaju da se voda sa izvora Đavolja voda ne
        treba piti, jer nije dovoljno istražena. Sadržaj nekih elemenata kao što
        su gvožđe, bakar i sumpor je ekstremno visok u odnosu na vodu koja je
        pogodna za piće.
      </p>
    </div>
  );
};
