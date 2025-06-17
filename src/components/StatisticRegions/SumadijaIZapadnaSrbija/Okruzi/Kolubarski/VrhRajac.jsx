import rajac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac1.jpg";
import rajac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac2.jpg";
import rajac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac3.jpg";
import rajac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac4.jpg";
import rajac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac5.jpg";
import rajac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac6.jpg";
import rajac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac7.jpg";
import rajac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac1.jpg";
import rajac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac2.jpg";
import rajac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac3.jpg";
import rajac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac4.jpg";
import rajac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac5.jpg";
import rajac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac6.jpg";
import rajac77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";

export const VrhRajac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(kulubarskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${rajac11} 400w, ${rajac1} `} alt="Vrh Rajac 1" />

      <h2>Vrh Rajac</h2>

      <p style={{ paddingTop: "50px" }}>
        Vrh Rajac je jedan od najpoznatijih vrhova na planini Suvobor, smeštenoj
        u zapadnom delu Srbije. Sa nadmorskom visinom od 848 metara, Rajac
        predstavlja omiljenu destinaciju za planinare, ljubitelje prirode i
        izletnike. Poznat je po blagim padinama prekrivenim livadama i
        prostranim pašnjacima, koji tokom proleća i leta postaju posebno
        atraktivni zbog bogatstva cveća i biljnog sveta. Rajac je deo Suvobora,
        planinskog masiva poznatog po svojoj prirodnoj lepoti, istorijskom
        značaju i netaknutoj prirodi. Na vrhu se nalazi prepoznatljiva
        planinarska kuća koja služi kao odmorište za posetioce, kao i polazna
        tačka za istraživanje okolnih staza. Odatle se pruža fantastičan pogled
        na okolne planine, doline i šume, čineći ga idealnim mestom za
        fotografisanje i uživanje u prirodi.
      </p>

      <img srcSet={`${rajac22} 400w, ${rajac2} `} alt="Vrh Rajac 2" />

      <p>
        Osim prirodnih lepota, područje oko Rajca ima i značajan istorijski
        kontekst, jer je Suvobor bio poprište važnih bitaka tokom Prvog svetskog
        rata, posebno Kolubarske bitke. Stoga, ovo mesto privlači i ljubitelje
        istorije koji žele da istraže priče o herojima i događajima iz tog
        perioda. Vrh Rajac je dostupan tokom cele godine i nudi raznovrsne
        aktivnosti, uključujući planinarenje, biciklizam, piknike i posmatranje
        prirode. Njegova blizina većim gradovima, poput Valjeva i Gornjeg
        Milanovca, čini ga savršenim za jednodnevne izlete i beg od gradske
        gužve.
      </p>

      <img srcSet={`${rajac33} 400w, ${rajac3} `} alt="Vrh Rajac paraglajding" />

      <p>
        Rajac je poznat i kao jedno od najatraktivnijih mesta za paraglajding u
        Srbiji. Njegova blaga nadmorska visina, povoljni vetrovi i otvoreni
        prostrani tereni čine ga idealnom destinacijom za ljubitelje ovog
        adrenalinskog sporta. Padine Rajca omogućavaju lake uzlete i sigurna
        sletanja, što ga čini pogodnim i za početnike i za iskusne paraglajdere.
        Jedan od ključnih razloga za popularnost Rajca među paraglajderima je
        izuzetno stabilna termika, koja omogućava duže letove i uživanje u
        panoramskim pogledima na okolne planine, doline i prostrane livade.
        Vetrovi na Rajcu su uglavnom konstantni i blagi, što dodatno doprinosi
        bezbednosti i kvalitetu letenja. Osim povoljnih prirodnih uslova, Rajac
        ima razvijenu infrastrukturu za paraglajding. Često se organizuju
        kursevi i obuke za početnike, kao i takmičenja koja okupljaju
        paraglajdere iz celog regiona. Ove manifestacije su idealna prilika da
        se paraglajderi povežu, razmene iskustva i uživaju u zajedničkom hobiju.
      </p>

      <img srcSet={`${rajac44} 400w, ${rajac4} `} alt="Manastir Vavedenje na Rajcu" />

      <p>
        Manastir Vavedenje na Rajcu, posvećen Vavedenju Presvete Bogorodice,
        nalazi se na padinama planine Suvobor, blizu vrha Rajac. Ovaj
        pravoslavni manastir pripada Eparhiji šabačkoj i predstavlja mesto mira
        i duhovnosti, smešteno u prelepom prirodnom okruženju. Manastir je
        izgrađen u srednjem veku, a tokom istorije je obnavljan i očuvan kao
        značajno duhovno središte ovog kraja. Njegova tišina i spokoj privlače
        vernike i posetioce koji traže duhovnu obnovu i utehu.
      </p>

      <img srcSet={`${rajac55} 400w, ${rajac5} `} alt="Crkva Svetog Jovana Krstitelja na vrhu Rajac" />

      <p>
        Crkva Svetog Jovana Krstitelja na vrhu Rajac je dragoceno istorijsko i
        duhovno nasleđe ovog kraja. Ova crkva potiče iz srednjeg veka, a njen
        značaj dodatno naglašava nekropola sa nadgrobnim spomenicima iz 13. i
        14. veka, koja se nalazi u neposrednoj blizini. Nekropola sadrži kamene
        spomenike sa ornamentima i natpisima, svedočeći o kulturnom i duhovnom
        životu u to doba. Crkva i nekropola su smeštene u prirodnom okruženju
        planine Suvobor, pružajući mirnu atmosferu za posetioce i ljubitelje
        istorije. Ovo mesto predstavlja značajan spoj prirode, istorije i
        tradicije, privlačeći turiste, arheologe i vernike.
      </p>

      <img srcSet={`${rajac66} 400w, ${rajac6} `} alt="Kosidba na Rajcu" />

      <p>
        Kosidba na Rajcu je tradicionalna manifestacija koja se svake godine
        održava na padinama planine Suvobor, na vrhu Rajac. Ovaj događaj, poznat
        kao "Sabor kosača," okuplja veliki broj učesnika i posetilaca iz Srbije
        i regiona, čuvajući sećanje na stari način života i običaje vezane za
        ručno košenje trave. Manifestacija ima takmičarski karakter, gde se
        kosci nadmeću u brzini i preciznosti košenja tradicionalnim alatima, uz
        ocenjivanje veštine, tehnike i kvaliteta obavljenog posla. Pored
        takmičenja, organizuju se i kulturno-umetnički programi, uključujući
        folklorne nastupe, izložbe narodnih rukotvorina, kao i degustacije
        lokalnih specijaliteta. Kosidba na Rajcu nije samo sportski i kulturni
        događaj, već i prilika za očuvanje tradicije i promociju prirodnih
        lepota ovog kraja. Livade Rajca, sa svojim prostranim pašnjacima i
        pogledima, pružaju savršenu pozadinu za ovaj festival, koji privlači
        ljubitelje prirode, istorije i srpske baštine.
      </p>

      <img srcSet={`${rajac77} 400w, ${rajac7} `} alt="Vodopad Crkvine" />

      <p>
        Vodopad Crkvine jedno je od najlepših mesta na Rajcu i planini Suvobor,
        ali nažalost, nije dovoljno prepoznat među turistima koji posećuju ovu
        oblast. To je verovatno zbog veoma strme i uske šumske staze, kao i
        slabog obeležavanja puta koji vodi do vodopada. Kada se sa Rajca,
        tačnije od Planinarskog doma, krene ka selu Slavkovica i Ljigu, ubrzo se
        s desne strane nailazi na proširenje pogodno za parkiranje, kao i
        putokaz koji označava skretanje desno ka vodopadu. Putokaz je teško
        uočiti iz suprotnog pravca, prilikom uspona ka Rajcu, pa je potrebno
        obratiti pažnju kako bi se izbeglo promašivanje skretanja. Od tog mesta
        počinje zemljani put, a nakon nekoliko stotina metara, skreće se levo ka
        šumskoj stazi, gde se nalazi poslednje adekvatno obeležje koje pokazuje
        pravac ka vodopadu.
      </p>
    </div>
  );
};
