import krusedol1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol2.jpg";
import krusedol2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol3.jpg";
import krusedol3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol4.jpg";
import krusedol4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol5.jpg";
import krusedol5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol6.jpg";
import krusedol6 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol7.jpg";
import krusedol11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM2.jpg";
import krusedol22 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM3.jpg";
import krusedol33 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM4.jpg";
import krusedol44 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM5.jpg";
import krusedol55 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM6.jpg";
import krusedol66 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";

export const ManastirKrusedol = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(JuznoBackiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${krusedol44} 400w, ${krusedol4} `} alt="Manastir Krusedol 1" />

      <h2>
      Manastir Krusedol
      </h2>

      <p style={{ paddingTop: "50px"}}>
        Manastir Krušedol je jedan od najvažnijih i najlepših manastira na
        Fruškoj gori, u Vojvodini, Srbija. Smešten je u blizini grada Sremska
        Mitrovica, u opštini Ruma, i predstavlja značajnu tačku na kulturnoj i
        verskoj mapi Srbije. Manastir je deo grupe fruškogorskih manastira, koja
        je poznata po bogatoj istoriji i duhovnoj tradiciji.
      </p>

      <img srcSet={`${krusedol22} 400w, ${krusedol2} `} alt="Manastir Krusedol 2" />

      <p>
        Manastir Krušedol je osnovan u 16. veku, 1509. godine, i to
        najverovatnije od strane despotice Jelene, majke Despotovića. Manastir
        je imao značajnu ulogu u duhovnom životu srpskog naroda, naročito tokom
        osmanske vladavine u ovom delu Balkana. Kroz istoriju, manastir je bio
        sedište srpske pravoslavne crkve i grobnica mnogih značajnih ličnosti.
        Manastir je bio i sedeći manastir za patrijarhe srpske pravoslavne
        crkve, a u njemu su sahranjivani brojni vladari, patrijarsi, duhovnici i
        plemići, među kojima se izdvaja patrijarh Arsenije III Čarnojević.
      </p>

      <img srcSet={`${krusedol33} 400w, ${krusedol3} `} alt="Manastir Krusedol 3" />

      <p>
        Manastir je izgrađen u stilu srpskog srednjovekovnog manastira, sa
        kombinacijom srpsko-vizantijskog i moravskog stila. Najznačajniji deo
        manastira je crkva posvećena Svetoj Trojici, koja je središnji objekat
        kompleksa. Unutrašnjost crkve ukrašena je prelepim freskama i ikonama,
        među kojima su one koje prikazuju scene iz života svetaca i istorijske
        ličnosti.
      </p>

      <img srcSet={`${krusedol11} 400w, ${krusedol1} `} alt="Manastir Krusedol 4" />
      <p>
        Manastir Krušedol je od velikog značaja u verskom i kulturnom smislu.
        Bio je jedno od najvažnijih mesta duhovnog okupljanja i prosvetiteljskih
        aktivnosti u vreme osmanske okupacije. Manastir je značajno uticao na
        razvoj kulture, obrazovanja i religioznosti u regionu.
      </p>

      <img
        srcSet={`${krusedol55} 400w, ${krusedol5} `}
        alt="Manastir Krusedol 5"
      />
      <p>
        Manastir je poznat po svojim freskama koje su značajna umetnička dela.
        One prikazuju scene iz života svetaca, kao i portrete srpskih vladara i
        duhovnih lidera.
      </p>

      <img
        srcSet={`${krusedol66} 400w, ${krusedol6} `}
        alt="Manastir Krusedol 5"
      />
      <p>
        Manastir Krušedol je lako dostupan, smešten u blizini Sremske Mitrovice
        i Rume, a ujedno je deo jednog od najlepših prirodnih okruženja u Srbiji
        — Fruške gore. Posetioci mogu uživati u šetnjama po okolnim šumama i
        istraživanju kulturnog i istorijskog nasleđa manastira. Pored duhovne
        vrednosti, manastir je popularna destinacija za ljubitelje istorije,
        umetnosti i kulture. Manastir organizuje verske obrede, a pored toga,
        tokom godine se održavaju i različite kulturne manifestacije i događaji.
      </p>
    </div>
  );
};
