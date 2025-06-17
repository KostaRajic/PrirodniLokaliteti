import pozarevac1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac1.jpg";
import pozarevac2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac2.jpg";
import pozarevac3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac3.jpg";
import pozarevac4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac4.jpg";
import pozarevac5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac5.jpg";
import pozarevac6 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac6.jpg";
import pozarevac11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM1.jpg";
import pozarevac22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM2.jpg";
import pozarevac33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM3.jpg";
import pozarevac44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM4.jpg";
import pozarevac55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM5.jpg";
import pozarevac66 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";

export const Pozarevac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(branicevskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${pozarevac11} 400w, ${pozarevac1} `} alt="Požarevac 1" />

      <h2>Požarevac</h2>

      <p style={{ paddingTop: "50px" }}>
        Požarevac je gradsko naselje i sedište istoimene teritorijalne jedinice
        u Srbiji. Administrativni je centar Braničevskog upravnog okruga. Prema
        popisu iz 2022. godine, broj stanovnika iznosio je 42.530. Nalazi se u
        južnoj i istočnoj Srbiji, između tri reke — Dunava, Velike Morave i
        Mlavе.
      </p>

      <img srcSet={`${pozarevac22} 400w, ${pozarevac2} `} alt="Zgrada Okružnog zdanja u Pozarevcu" />

      <p>
        Zgrada Okružnog zdanja, svojim impozantnim dimenzijama i dekorativnim
        obradama, bila je najreprezentativnija i najveća upravna zgrada tog
        vremena u Srbiji, čija je izgradnja omogućila uspostavljanje bližih
        kontakata sa Evropom.
        <br />
        <br /> Na ovom mestu se nekada nalazio kоnak kneginje Ljubice, koji je
        bio srušen. Zgrada je izgrađena 1889. godine (za samo godinu dana).
        Projekat za izgradnju Zdanja osmislio je inženjer Miler. Okružna vlast
        je prikupljala sredstva od poreza tokom pet godina kako bi se sagradila
        ova impozantna građevina. Fasada Zdanja izvedena je u duhu bečkog
        akademizma, a svojom formom i detaljima podsećala je na zgrade
        italijanske renesanse.
      </p>

      <img srcSet={`${pozarevac33} 400w, ${pozarevac3} `} alt="Spomenik Knezu Milosu u Pozarevcu" />

      <p>
        Požarevac je dugo bio druga rezidencija kneza Miloša. On je izgradio
        konake za svoju porodicu i sebe, razvijao trgovinu jer je i sam bio
        trgovac. Oslobodio je Požarevac od turske vlasti u Drugom srpskom
        ustanku 1815. godine. U znak zahvalnosti, 1898. godine podignut je
        spomenik njemu, koji je otkrio tadašnji kralj Srbije Aleksandar
        Obrenović, u prisustvu bivšeg kralja, njegovog oca, Milana Obrenovića.
        <br />
        <br />
        Spomenik je izliven u bronzi i delo je poznatog vajara Đorđa Jovanovića,
        a napravljen je u Parizu 1897. godine. Nalazi se u samom centru gradskog
        parka, ispred zgrade Okružnog zdanja. Na spomeniku su uklesane godine
        koje označavaju rođenje (1780) i smrt (1860) kneza Miloša, kao i čuvena
        poruka upućena turskom vojvodi: „Delibaša, carski delijo, ti imaš kuda i
        na drugu stranu, a ja nemam kuda, nego tuda, pa u život ili smrt“, kao i
        godine oslobođenja Požarevca od Turaka (1815). Turistička organizacija
        grada Požarevca izradila je mesinganu repliku statue spomenika kao
        simbol i reprezentativni suvenir grada.
        <br />
        <br /> Biste i spomen-ploče narodnih heroja koje se, pored kneza Miloša,
        nalaze u gradskom parku podignute su i Čedi Vasoviću, Bošku Vrebalovu,
        Božidaru Dimitrijeviću – Koziči, Veljku Dugosaviću i narodnom tribunu
        Vasi Pelagiću.
      </p>

      <img srcSet={`${pozarevac44} 400w, ${pozarevac4} `} alt="Argela Ljubicevo" />

      <p>
        Jednu od najstarijih ergela u Srbiji osnovao je knez Miloš Obrenović
        1860. godine na imanju „Morava“, pored Velike Morave, udaljenom 5 km od
        grada. Osnovana je s ciljem unapređenja konjarstva i uzgoja najboljih
        konjskih rasa. Kasnije, njegov sin Mihailo je ovom posedu na 300 hektara
        dao ime „Ljubičevo“, po svojoj majci, kneginji Ljubici.
        <br />
        <br /> U Ljubičevu je podignut Ljubičin konak, kao i nekoliko štala u
        kojima je knez držao svoje konje. Početkom 20. veka, ergela je postala
        institucija evropskog ranga, s oko 500 grla. Poznala su je konji kao
        Ljubičevac, Kastor, Ramoz, Hajdžan. Spomenik konju Ljubičevcu, pobedniku
        „Tripla krune“ (nepobedivom galoperu), nalazi se u centru ove oaze mira
        i tišine, gde su i brojne staze za šetanje. Za ergelu je vezana
        turističko-sportska manifestacija „Ljubičevske konjičke igre“.
      </p>

      <img srcSet={`${pozarevac55} 400w, ${pozarevac5} `} alt="Narodni muzej u Požarevcu" />
      <p>
        Narodni muzej u Požarevcu, osnovan 1895. godine, drugi je najstariji
        muzej u Srbiji, odmah nakon Narodnog muzeja u Beogradu. Pokriva
        teritoriju Braničevskog okruga i u svojim zbirkama čuva više od 50.000
        muzejskih predmeta iz različitih istorijskih perioda. Muzej ima nekoliko
        stalnih i povremenih postavki, raspoređenih na različitim lokacijama.
        <br />
        <br />
        GLAVNA ZGRADA MUZEJA, koja sadrži stalnu postavku arheoloških zbirki i
        depo, smeštena je u ulici Voje Dulića 10. U muzeju se nalaze neki
        svetski unikatni predmeti, kao što je pero CALAMUS, koje je služilo za
        pisanje po rimskim voštanim tablama, jedinstvena numizmatička zbirka,
        grb Viminaciuma napravljen od mermera u obliku potkovice, rimski i
        venecijanski zlatnici, zlatnik Aleksandra Makedonskog, sarkofazi,
        skulpture, medalje Poožarevačkog mira…
      </p>

      <img srcSet={`${pozarevac66} 400w, ${pozarevac6} `} alt="Čačalica" />
      <p>
        Čačalica je brdo koje se uzdiže iznad grada na 203 metra nadmorske
        visine. Pre 300 godina, ovo područje je bilo močvarno i nepristupačno, o
        čemu postoje zapisi iz turskog perioda. Vekovima je bila poznata kao
        „ničije brdo“, sve do Drugog svetskog rata, kada je postala poligon za
        obuku vojnika Jugoslovenske vojske.<br />
        <br /> Na ovom mestu je streljano oko 3000
        antifašista i civila. Mesto gde se nalaze njihovi posmrtni ostaci
        obeleženo je spomenikom u obliku zida sa udubljenjima od pušaka i
        simbolima koji podsećaju na streljanje žrtava.
      </p>
    </div>
  );
};
