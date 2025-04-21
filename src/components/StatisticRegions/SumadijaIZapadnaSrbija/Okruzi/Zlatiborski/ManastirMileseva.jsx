import mileseva1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/miloseva1.jpg";
import mileseva2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/miloseva2.jpg";
import mileseva3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/miloseva3.jpg";
import mileseva4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/miloseva4.jpg";
import mileseva5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/miloseva5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";

export const ManastirMileseva = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.manastirMileseva)} />
      <header></header>
      <img src={mileseva4} alt='Manastir Mileševa 1' />

      <h2>Manastir Mileševa</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Mileševa smešten je u dolini istoimene reke, nedaleko od
        Prijepolja. Građen je između 1218. i 1219. godine, a njegov živopis je
        završen između 1222. i 1228. godine. Osnovao ga je kralj Vladislav, sin
        kralja Stefana Prvovenčanog i unuk Nemanji. Vladislav je izgradio
        Mileševu kao svoju porodičnu grobnicu, slično kako je njegov otac
        podigao manastir Žiču, a deda Studenicu. Nakon što je 1234. godine, uz
        pomoć plemstva, zbacio svog starijeg brata Radoslava sa prestola,
        Vladislav je 1243. godine, predajući vlast svom mlađem bratu Urošu, sam
        napustio tron. Preminuo je u Zeti u sedamdesetim godinama XIII veka, a
        sahranjen je u svojoj zadužbini. U hijerarhiji srpskih manastira,
        Mileševa je zauzimala drugo mesto, odmah nakon Studenice.
      </p>

      <img src={mileseva2} alt="Manastir Mileševa 2" />

      <p>
        Turci su prvi put poharali Mileševu 1459. godine, ali je ubrzo
        obnovljena. Iako pod turskom vlašću, manastir je nastavio da razvija
        bogatu kulturnu delatnost. U njemu je crkveni i prosvetni život, iako
        povremeno usporen, trajao gotovo neprekidno. U XVI veku (1543. i 1544.
        godine) u Mileševi je radila jedna od prvih srpskih štamparija, koja je
        izdala veliki broj bogoslužbenih i drugih crkvenih knjiga, što ukazuje
        na to da je u manastiru nastavljeno raditi na knjigama i pisanoj reči, i
        u najtežim uslovima. Pored štamparije, u Mileševi je delovala i
        manastirska škola, jedna od najstarijih u Srbiji. Iz okolnih područja
        Mileševe potekli su, izgleda, i braća Sokolovići, od kojih je poturčeni
        Mehmed postao veliki vezir, dok je drugi, Mileševski đak Makarios,
        postao prvi patrijarh obnovljene Pećke patrijaršije. U drugoj polovini
        XVI veka, za vreme patrijarha Makariosa Sokolovića, usledila je velika
        obnova Mileševe. Tom prilikom podignuta je i spoljašnja priprata sa
        živopisom.
      </p>

      <img src={mileseva3} alt="Manastir Mileševa 3" />

      <p>
        U XVI i XVII veku mnogi ugledni putnici posećivali su manastir, ponekad
        ga nalazeći prepunog i u blagostanju, a ponekad su bili svedoci njegovih
        teškoća. U XVII veku izvršene su značajne popravke manastirskih zgrada.
        Krajem XVII veka, u vreme narodnih ustanaka, Mileševa je doživela
        sudbinu sličnu onoj koju su pretrpeli nedaleki Sopoćani i drugi
        manastiri u regionu sa kojeg je stanovništvo, pod patrijarhom
        Čarnojevićem, pobeglo u Austriju. Turci su zapalili konake i opljačkali
        manastir. Zabeleženo je da je crkva opljačkana i krajem XVIII veka.
        Često napuštan, manastir je sve više propadao. Godine 1857. ruski
        putopisac i naučnik Giljferding piše da je crkva bila u ruševinama, da
        su zidovi opstali, ali da nije bilo krova, da su kupole gotovo potpuno
        srušene i da ih podržavaju samo delovi svodova.
      </p>

      <img src={mileseva1} alt="Manastir Mileševa 4" />

      <p>
        Najvažnija obnova manastira Mileševe izvršena je od 1863. do 1865.
        godine, zahvaljujući trudu građana iz Prijepolja. Tada je manastirska
        crkva značajno promenila svoj prvobitni arhitektonski izgled. Podignuti
        su krovovi i kupole, dozidana polurazrušena apsida, a verovatno je
        čitava građevina nad spoljnim nartheksom takođe obnovljena. Osvježeni su
        freske, zaštitni zidovi, kao i manastirska vodenička zgrada. Nije
        potpuno sigurno, ali se pretpostavlja da je prilikom obnove crkvi naneta
        značajna šteta, uključujući uništavanje gotovo celog zida između
        unutrašnje priprate i naosa, na kojem se nalazila velika scena Smrt
        Bogorodice. Tom prilikom su oštećene i druge freske, uključujući portret
        Nemanjića. Verovatno je zid sa portalom bio toliko oštećen i napukao da
        majstori nisu mogli da ga konsoliduju, te su ga skoro u potpunosti
        uklonili, proširujući time samu crkvu.
      </p>

      <img src={mileseva5} alt="Manastir Mileševa 5" />
      <p>
        Mileševarska crkva Svetog Vaznesenja Gospodnjeg izgrađena je po uzoru na
        ranije vladarske zadužbine, Studenicu i Žiču, u raškom stilu. Ovaj stil
        karakteriše romanijska tehnika zidanja, koja je bila uobičajena u
        tadašnjem srpskom primorju, prilagođena potrebama Pravoslavne crkve.
        Crkva je jednostavna, zidana ciglom, a zatim omalterisana. Građevina je
        jednobrodna, sa dve niske pevnice, širokom centralnom apsidom i dve
        bočne apside. Prvobitno je imala jednu kupolu, a tokom restauracija u
        XVII ili XIX veku dodata je još jedna. Od nekadašnjeg unutrašnjeg
        portala, verovatno izgrađenog po uzoru na studenički, sačuvao se samo
        jedan kameni lav, prilično grubo isklesan. Ostale plastične dekoracije u
        crkvi nisu prisutne, osim plitkih arkadica oko kupola i ornamentalnih
        traka oko portala i nekih prozora. Posebnost arhitekture čini
        jednobrodna osnova hrama, koja se širi od zapada (ulaza) prema istoku,
        kao i izostavljanje istočnog traveja, zbog čega tri široke oltarske
        apside neposredno leže uz istočni zid pod kupolom. Crkva je, u poređenju
        sa drugim građevinama raškog stila, prilično visoka.
      </p>
    </div>
  );
};
