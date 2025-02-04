import sajkaska1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/srp koviljsko petrovaradinski rit.jpg";
import sajkaska2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/titelskiBreg.jpg";
import sajkaska3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/manastirSvetihArhangela.jpg";
import sajkaska4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/kapadokija.jpg";
import sajkaska5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/krcedinska ada.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const SajkaskaOblast = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={sajkaska1} alt="srp koviljsko petrovaradinski rit" />

      <h2>ŠAJKAŠKA OBLAST</h2>

      <p style={{ paddingTop: "50px"}}>
        Šajkaška oblast je bila i srce stvaranja Srpske Vojvodine. U toku
        revolucije 1848. godine, Šajkaška je bila ključ organizovanja srpske
        odbrane od mađarskih napada i to ne samo zbog generacija Srba koje su
        stasavale iz tih krajeva za vojnički poziv, već i zbog njihovog
        specifičnog vojnog umeća i izuzetnog geografskog položaja. Jedan od
        brojnih lokaliteta koji se nalazi u ovoj oblasti je SRP "Koviljsko -
        petrovaradanski rit", koji je lociran u neposrednoj blizini autoputa E75
        u jugoistočnom delu Bačke i manjim delom u Sremu. Barsko-močvari i
        šumski ekosistemi posebno su značajni zbog velikog broja ptica, od kojih
        su crna roda i orao belorepan sa statusom prirodne retkosti. Okolina
        rezervata je čuvena po velikom broju parova roda koji se vraćaju svakog
        proleća u sve većem broju.
      </p>

      <img src={sajkaska2} alt="Titelski Breg" />

      <p style={{ marginTop: "-10px" }}>
        Titelski breg je lesna zaravan i breg u pokrajini Vojvodini, na severu
        Srbije. Nalazi se u jugoistočnoj Bačkoj (u regiji Šajkaška), između
        gradića Titela na jugu, sela Lok, Vilovo i Šajkaš na jugozapadu, sela
        Mošorin na severu i reke Tisa na istoku. Nadmorska visina mu je 128
        metara, a pruža se pravcem severozapad-jugoistok. Titelski breg je
        geomorfološki, u stvari, lesna zaravan nastala navejavanjem lesa tokom
        pleistocena. Dugačka je 18 km, a široka oko sedam i po. Naginuta je ka
        jugoistoku, a iznad Tise se diže strmi odsek visine 60 metara. U njemu
        se zapaza šest smeđih zona, što ukazuje na to da je zaravan formirana iz
        šest etapa. Breg je interesantna forma, pošto je jedino uzvišenje u
        Bačkoj, koja je uglavnom ravnica.
      </p>

      <img src={sajkaska3} alt="Manastir Svetih Arhangela" />

      <p style={{ marginTop: "-10px" }}>
        Manastir Sv. Arhangela Mihaila u Kovilju je jedan od najstarijih i
        najznačajnijih manastira u Srbiji. Nalazi se u blizini Novog Sada, u
        selu Kovilj, na levoj obali reke Dunav, i pripada Eparhiji bačkoj Srpske
        pravoslavne crkve. Tačnih podataka o osnivanju manastira nema, ali neki
        izvori kažu da je osnovan u 14. veku, u vreme vladavine kralja Srbije
        Stefana Dušana. Podignut je u čast Svetih arhanđela Mihaila i Gavrila,
        koji se slave 26. jula. Danas, manastir Sv. Arhangela Mihaila u Kovilju
        je aktivan manastir, u kojem se i dalje živi monaški život. Manastir je
        posećen od strane turista, ali i vernika koji dolaze da se pomole i
        učestvuju u bogosluženjima.
      </p>

      <img src={sajkaska4} alt="Srpska kapadokija" />
      <p style={{ marginTop: "-10px" }}>
        Dobrodošli u „Srpsku Kapadokiju“, novu turističku atrakciju u Srbiji,
        koja donosi duh egzotike u naše krajeve. Zamislite moment trenutka kada
        se uzdižete, osećaj slobode dok lagano prelazite preko ritova, reke,
        rukavaca i polja dok sunčevi zraci obasjavaju ovaj prelepi pejzaž ispod
        vas. Letenje balonom nije samo putovanje, to je jedinstveni doživljaj
        koji omogućava da svet posmatrate iz sasvim nove perspektive i koji će
        zauvek ostati u vašem sećanju. Postanite deo ove jedinstvene avanture i
        doživite letenje balonom iznad prelepe Krčedinske ade.
      </p>

      <img
        src={sajkaska5}
        alt="Krcedinska Ada"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Krčedinska ada je prirodno rečno ostrvo, nastalo na prostoru takozvanog
        koviľsko-petrovaradinskog rita, netaknute prirode pod zaštitom države
        Srbije. Nalazi se u rukavcu koji se proteže preko puta Krčedina, u
        dunavskom toku. Po svojoj površini spada u grupu najvećih Dunavskih ada.
        Krčedinska ada je svojvrstan raj za domaće životinje. Na tom ostrvu
        usred Dunava slobodno živi i kreće se na stotine domaćih životinja.
        Ljudi brinu o njima, svakodnevno ih obilaze i donose zalihe hrane.
      </p>
    </div>
  );
};
