import krusedol1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/krusedol2.jpg";
import krusedol2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/krusedol3.jpg";
import krusedol3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/krusedol4.jpg";
import krusedol4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/krusedol5.jpg";
import krusedol5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/krusedol6.jpg";
import krusedol6 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/krusedol7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ManastirKrusedol = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={krusedol4} alt="Manastir Krusedol 1" />

      <h2>
        MANASTIR KRUŠEDOL
      </h2>

      <p style={{ paddingTop: "50px"}}>
        Manastir Krušedol je jedan od najvažnijih i najlepših manastira na
        Fruškoj gori, u Vojvodini, Srbija. Smešten je u blizini grada Sremska
        Mitrovica, u opštini Ruma, i predstavlja značajnu tačku na kulturnoj i
        verskoj mapi Srbije. Manastir je deo grupe fruškogorskih manastira, koja
        je poznata po bogatoj istoriji i duhovnoj tradiciji.
      </p>

      <img src={krusedol2} alt="Manastir Krusedol 2" />

      <p style={{ marginTop: "-10px" }}>
        Manastir Krušedol je osnovan u 16. veku, 1509. godine, i to
        najverovatnije od strane despotice Jelene, majke Despotovića. Manastir
        je imao značajnu ulogu u duhovnom životu srpskog naroda, naročito tokom
        osmanske vladavine u ovom delu Balkana. Kroz istoriju, manastir je bio
        sedište srpske pravoslavne crkve i grobnica mnogih značajnih ličnosti.
        Manastir je bio i sedeći manastir za patrijarhe srpske pravoslavne
        crkve, a u njemu su sahranjivani brojni vladari, patrijarsi, duhovnici i
        plemići, među kojima se izdvaja patrijarh Arsenije III Čarnojević.
      </p>

      <img src={krusedol3} alt="Manastir Krusedol 3" />

      <p style={{ marginTop: "-10px" }}>
        Manastir je izgrađen u stilu srpskog srednjovekovnog manastira, sa
        kombinacijom srpsko-vizantijskog i moravskog stila. Najznačajniji deo
        manastira je crkva posvećena Svetoj Trojici, koja je središnji objekat
        kompleksa. Unutrašnjost crkve ukrašena je prelepim freskama i ikonama,
        među kojima su one koje prikazuju scene iz života svetaca i istorijske
        ličnosti.
      </p>

      <img src={krusedol1} alt="Manastir Krusedol 4" />
      <p style={{ marginTop: "-10px" }}>
        Manastir Krušedol je od velikog značaja u verskom i kulturnom smislu.
        Bio je jedno od najvažnijih mesta duhovnog okupljanja i prosvetiteljskih
        aktivnosti u vreme osmanske okupacije. Manastir je značajno uticao na
        razvoj kulture, obrazovanja i religioznosti u regionu.
      </p>

      <img
        src={krusedol5}
        alt="Manastir Krusedol 5"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Manastir je poznat po svojim freskama koje su značajna umetnička dela.
        One prikazuju scene iz života svetaca, kao i portrete srpskih vladara i
        duhovnih lidera.
      </p>

      <img
        src={krusedol6}
        alt="Manastir Krusedol 5"
        style={{ marginBottom: "-10px" }}
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
