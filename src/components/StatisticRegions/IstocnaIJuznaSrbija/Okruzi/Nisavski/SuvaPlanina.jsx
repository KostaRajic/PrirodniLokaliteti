import suvaPlanina1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/suvaPlanina1.jpg";
import suvaPlanina2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/suvaPlanina2.jpg";
import suvaPlanina3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/suvaPlanina3.jpg";
import suvaPlanina4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/suvaPlanina4.jpg";
import suvaPlanina5 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/suvaPlanina5.jpg";
import suvaPlanina6 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/suvaPlanina6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const SuvaPlanina = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={suvaPlanina1} alt="Suva Planina 1" />

      <h2>Suva Planina</h2>

      <p style={{ paddingTop: "50px" }}>
        Suva planina je planina u jugoistočnoj Srbiji duga 45 km, a široka 15
        km, koja u geološkom i geografskom smislu pripada karpatsko-balkanskoj
        grupi planina na samoj granici sa starijom Srpsko-makedonskom masom.
        Prostire se pravcem severozapad-jugoistok u visinskim zonama od 250 m do
        1.810 m i počinje istočno od Niške Banje, a završava se jugozapadno od
        Babušnice u Lužničkoj kotlini kroz koju protiče reka Lužnica.
      </p>

      <img src={suvaPlanina2} alt="Suva Planina 2" />
      <p>
        Sa severozapadne i severne strane Suva planina se graniči rekama Nišavom
        (oko koje se formiraju Belopalanačka, Ostričička i Niška kotlina), sa
        istočne strane Koritničkom, a sa jugoistočne i južne strane Lužničkom
        rekom. Prema zapadu, planina se postepeno spušta u Zaplanjsku kotlinu,
        dok prema tokovima Nišave i Lužničke reke, kao i okolnim duboko
        spuštenim kotlinama (Niškoj, Zaplanjskoj, Lužničkoj, Koritničkoj,
        Belopalanačkoj i Ostričičkoj), to spuštanje uglavnom ide strmo, a
        ponekad i oštro. Kako su kotline, površine i okolne planine znatno niže
        od Suve planine, ona je jasno izdvojena i izdignuta u odnosu na druge
        geografske celina, te je vidljiva sa svih strana i na velikim
        udaljenostima.
        <br />
        <br />
        Obronci Suve planine pripadaju opštinama: Niška Banja, Gadžin Han, Bela
        Palanka, Babušnica i Vlasotince.
      </p>

      <img src={suvaPlanina3} alt="Suva Planina 3" />

      <p>
        Suva planina je masiv sa izuzetnim pojavnim oblicima krasnog reljefa,
        bogatstvo sedimenta različite starosti koji sadrže fosilnu floru,
        jedinstvenu fitocenozu i šumski ekosistem, u okviru kojeg je prisutno
        1.261 biljnih vrsta, od kojih 3 pripadaju prečicama, 4 rastavićima, 18
        papratnicama, 6 golosemenicama i 1.232 skrivenosemenicama, a
        evidentirano je 128 endemskih vrsta flore, 58 vrsta lišajeva, 139 vrsta
        ptica itd. Zbog toga je prema nacionalnom zakonodavstvu proglašena za
        područje sa statusom rezervata prirode i objektom geonasleđa Srbije.
      </p>

      <img src={suvaPlanina6} alt="Suva Planina 6" />
      <p>
        Od ukupno 31.860 ha površine zaštićenog područja Specijalnog rezervata
        prirode „Suva planina”, 18.176 ha ima prvi (4,5%), drugi (8,5%) i treći
        stepen zaštite (87%).
      </p>

      <img src={suvaPlanina4} alt="Suva Planina 4" />

      <p>
        Suva planina se nalazi na jugoistoku Srbije, pored magistralnog pravca
        Beograd—Niš—Sofija—Istanbul (ili nišavsko-maricke magistrale), udaljena
        3 km od Niške Banje, 17 km od Niša i 256 km od Beograda.
        <br />
        <br />
        Suva planina se nalazi na jugoistoku Srbije, pored magistralnog pravca
        Beograd—Niš—Sofija—Istanbul (ili nišavsko-maricke magistrale), udaljena
        3 km od Niške Banje, 17 km od Niša i 256 km od Beograda.
      </p>

      <img src={suvaPlanina5} alt="Suva Planina 5" />

      <p>
        Suva planina se prostire pravcem severozapad—jugoistok u visinskim
        zonama od 250 m do 1.810 m. Počinje istočno od Niške Banje, a završava
        se jugozapadno od Babušnice u Lužničkoj kotlini. Sa severozapadne i
        severne strane graniči se rekama Nišavom, sa istočne strane Koritnjakom,
        a sa jugoistočne i južne strane Lužničkom rekom. Prema zapadu, planina
        se postepeno spušta u Zaplanjsku kotlinu, dok prema tokovima Nišave i
        Lužničke reke i okolnim duboko spuštenim kotlinama (Niškoj, Zaplanjskoj,
        Babušničkoj, Koritničkoj, Belopalanačkoj i Ostričičkoj) spuštanje je
        uglavnom strmo, a ponekad i oštro. Kako su kotline, površine i okolne
        planine znatno niže od Suve planine, ona je jasno izdvojena i izdignuta
        u odnosu na druge geografske celina, te je vidljiva sa svih strana i na
        velikim udaljenostima.
      </p>
    </div>
  );
};
