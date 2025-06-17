import pirot1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot1.jpg";
import pirot2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot2.jpg";
import pirot4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot4.jpg";
import pirot5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot5.jpg";
import pirot6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot6.jpg";
import pirot11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM1.jpg";
import pirot22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM2.jpg";
import pirot44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM4.jpg";
import pirot55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM5.jpg";
import pirot66 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";

export const Pirot = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pirotskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${pirot11} 400w, ${pirot1} `} alt="Pirot 1" />

      <h2>Pirot</h2>

      <p style={{ paddingTop: "50px" }}>
        Pirot je grad na jugoistoku Srbije sa bogatom kulturnom tradicijom i
        burnom istorijom. Nalazi se na značajnoj međunarodnoj transverzali
        "koridoru 10", koji povezuje Evropu sa Azijom, a u srednjem veku bio je
        poznat kao Via militaris. Pirot je administrativni centar najveće
        opštine u Republici, koja pored njega obuhvata opštine Dimitrovgrad,
        Babušnica i Bela Palanka, dok je po površini od 1232 km² na trećem mestu
        u zemlji. Nekada je bio centar prerađivačke industrije mlečnih
        proizvoda, kože, vune, drvenih i tekstilnih proizvoda. Vredno je
        pomenuti da je imao više grla stoke nego tadašnja Kraljevina, kasnije
        SFR Jugoslavija. Pirot svoju prepoznatljivost pre svega duguje poznatom
        pirotskom ovčijem kačkavalju, pirotskom ćilimu i, danas, svakako, i
        auto-gumi "Tigar MH". odigrala čuvena bitka iz Prvog srpskog ustanka, u
        znak sećanja na poginule vojnike i njihovog komandanta Stevana
        Sinđelića. Spomenik na Čegaru predstavlja nepokretno kulturno dobro kao
        značajno istorijsko mesto od izuzetnog značaja.
      </p>

      <img srcSet={`${pirot22} 400w, ${pirot2} `} alt="Pirot 2" />

      <p>
        Pirot se nalazi u pograničnom području Srbije prema Bugarskoj i
        raspolaže brojnim turističkim vrednostima koje se razlikuju po obliku i
        karakteristikama. Priroda preovlađuje nad kulturno-istorijskim
        spomenicima, ali pri turističkoj valorizaciji potrebno je primeniti
        princip komplementarnosti kako bi se potencijali ovog područja prikazali
        u celosti.
        <br />
        <br />
        Turistički potencijali Pirota i okolnih mesta obuhvataju Planinarski
        dom, Zavojsko jezero, Vrelo i Zvonačku banju. U samom gradu izdvajaju se
        Muzej Ponišavlja, radovi na obnovi tvrđave Momčilov grad, rekonstrukcija
        manastira Sveti Đorđe kod sela Temska, manastir Sveti Jovan Blagoslov -
        Poganovski manastir, kao i uređen sportsko-rekreativni centar između
        reke Nišave i HE "Pirot".
      </p>

      <img srcSet={`${pirot44} 400w, ${pirot4} `} alt="Pirot 3" />

      <p>
        Klima Pirota je umerena, sa karakterističnim osobinama. Proleća su
        vlažna i prijatna, leta topla, dok su jeseni blage i duge, a zime
        uglavnom hladne. Vetrovi često dolaze iz različitih pravaca. Tokom
        zimskih meseci, najčešće duvaju istočni i severni vetrovi, poznati kao
        severac ili košava. U proleće, povremeno se javlja topliji jugozapadni
        vetar, poznat kao razvigorac, koji ima povoljan uticaj na rast biljaka.
        U ostalim delovima godine, vetrovi sa severozapada i zapada donose
        padavine.
        <br />
        <br />
        Pirot, zajedno sa okolnim gradovima poput Niša, spada u najsuvlje
        regione u Srbiji. Najveće količine padavina javljaju se u maju, junu i
        oktobru, dok je sušno u januaru, februaru i julu.
      </p>

      <img srcSet={`${pirot55} 400w, ${pirot5} `} alt="Muzej Ponišavlja" />

      <p>
        Muzej je osnovan oktobra 1947. godine odlukom Gradskog narodnog odbora
        Pirota pod nazivom Narodni muzej. Već je posedovao izvestan broj
        predmeta, uglavnom poklona od građana Pirota i okoline. Odlukom
        Skupštine opštine Pirot, Muzej je 1969. godine dobio današnji naziv -
        Muzej Ponišavlja.
        <br />
        <br />
        Kao regionalna muzejska ustanova, koja koncepcijski spada u kategoriju
        zavičajnih muzejskih ustanova kompleksnog tipa, delatnost proučavanja,
        zaštite i prezentacije kulturnog tipa, delatnost i proučavanje, zaštite
        i prezentacije kulturno umetničkih i istorijskih dela, odnosno pokretnih
        kulturnih dobara, ova muzejska ustanova obavlja na teritoriji opštine
        Pirot, Dimitrovgrad, Babušnica i Bela Palanka.
        <br />
        <br />
        Organizacionu strukturu Muzeja čine odeljenja za arheologiju,
        etnologiju, numizmatiku, istoriju i istoriju umetnosti. Zbirke navedenih
        odeljenja formiraju muzejski fond od oko 6.500 predmeta. U sastav
        muzejskog fonda ulazi i fond Galerije fresaka u Starom gradu koga čine
        reprodukcije fresaka iz manastira Svetog Jovana Bogoslova, zadužbine
        Konstantina Dejanovića, u selu Poganovu, kao i dva legata, od kojih je
        jedan legat učitelja Ćire Rančića iz oblasti dečije književnosti, a
        drugi legat učitelja Duška Ćirića sa etnološko-istorijskom građom. Pored
        toga, Muzej ima depandanse u Babušnici, Beloj Palanci i Dimitrovgradu.
      </p>

      <img srcSet={`${pirot66} 400w, ${pirot6} `} alt="Pirotski kej" />

      <p>
        Pirotski kej je popularno šetalište u Pirotu. Reka Nišava je u početku
        20. veka izazivala velike poplave u ovom gradu. Profesor Pirotske
        gimnazije, Velimir Vukićević, predložio je izgradnju keja na Nišavi kako
        bi se izbegle dalje poplave. Regulisanje toka Nišave započelo je 1923.
        godine uzvodno od Velikog mosta, a paralelno sa regulacijom reke,
        gradila se i šetnica sa obe strane. U izgradnji keja učestvovali su i
        sami građani Pirota, a bogatiji su davali donacije. Radovi su se
        odvijali u više faza. Da bi kej dobio današnji izgled, 1933. godine
        potrudio se tadašnji predsednik opštine, Svetozar Misirlić, koji je
        inicirao sadnju drveća na vrhu nasipa, koje je lično zalivao. Te godine
        su zasadjene i lipe. Korito Nišave je uobličeno 60-ih godina 20. veka,
        kada su podignuti nasipi i produžen drvored lipa oko staze. Početkom 21.
        veka, kej je dodatno uređen, a šetališta su popločana kaldrmom koja je
        vađena iz ulice Nikole Pašića.
      </p>
    </div>
  );
};
