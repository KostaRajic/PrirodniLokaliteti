import staraPlaina1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/staraPlanina1.jpg";
import staraPlaina2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/staraPlanina2.jpg";
import staraPlaina3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/staraPlanina3.jpg";
import staraPlaina4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/staraPlanina4.jpg";
import staraPlaina5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/staraPlanina5.jpg";
import staraPlaina6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/staraPlanina6.jpg";
import staraPlaina7 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/staraPlanina7.jpg";
import staraPlaina8 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/staraPlanina8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";

export const StaraPlanina = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pirotskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={staraPlaina1} alt="Stara Planina 1" />

      <h2>Nacionalni Park "Stara Planina"</h2>

      <p style={{ paddingTop: "50px" }}>
        Stara planina je jedina visoka planina istočne Srbije, sa najvišom
        tačkom u zemlji, bez pokrajina. Takođe je poznata i kao Balkan, po kojem
        je i celo poluostrvo, na kojem se planina nalazi, dobilo naziv Balkansko
        poluostrvo. Smestila se na krajnjem istoku Srbije, dok je veći deo
        planine u Bugarskoj, gde se nalazi i najviši vrh, Botev (2376 m). Stara
        planina spada u mlade venčane planine. Istočne padine, koje gledaju
        prema Bugarskoj, su strme, dok su zapadne padine, okrenute prema Srbiji,
        blaže i pitomije.
      </p>

      <img src={staraPlaina2} alt="Babin Zub" />

      <p>
        Babin zub je jedan od vrhova planinskog masiva Stara planina, koji se
        uzdiže na visinu od 1785 m/nv. Sa ovog vrha počinje uspon ka Midžoru.
        Zapadna strana Babinog zuba prepoznaje se po strmim, vertikalnim
        stenovitim odsecima. Jedan od njih podseća na stari zub, što je i
        inspirisalo naziv ovog masiva. Sam vrh doseže visinu od 200 metara, a
        njegova uspinjanja su namenjena isključivo alpinistima. Babin zub je
        okružen brojnim selima, među kojima su: Ravno Bučije, Aldina Reka,
        Janja, Mezdreja, Crni Vrh, Ćuštica, Stanjinac, Šugrin, Mirkovci,
        Zaskovci i Topli Do.
        <br />
        <br />
        Klima u ovom regionu je kontinentalna, s blagim prolećem i jesenjom
        sezonom. Leta su veoma topla i sušna, dok su zime hladne i vetrovite, sa
        snežnim padavinama.
        <br />
        <br />
        Na području Babinog Zuba postoji mnogo izvora, od kojih se izdvaja
        Trgoviški Timok, sa temperaturom vode od 4°C, što ga čini najhladnijim
        izvorom u bivšoj SFRJ. Tu su i drugi izvori kao što su Kaluđerske vode,
        Tri Kladenca, Dojkino Vrelo, Vir, Tresetište, Zaskovački kamen. Podzemne
        vode ovog područja sadrže velike količine minerala kao što su zlato,
        granit, uran i uljani škriljci. Okolina Babinog Zuba je poznata po
        bogatstvu jezera i vodopada. Zavojsko i Smilovsko jezero su
        najpoznatija, dok su vodopadi Čunguljski (42 m), Kurtulski (27 m) i
        Tupavica (15 m) veoma atraktivni. Reke u ovom regionu bogate su
        pastrmkom i idealne su za ribolov.
      </p>

      <img src={staraPlaina3} alt="Vrh Kopren - Stara Planina" />

      <p>
        Kopren je vrh na Staroj planini, sa visinom od 1963 m, a ujedno
        predstavlja i manju morfološku celinu. Ova oblast je zaštićena zakonom
        1985. godine i predstavlja stanište biljke Rosulje. Prostire se zapadno
        i južno od glavnog planinskog venca, između izvorišnih krivina i
        dolinskih sistema Dojkinačke i Jelovičke reke. Glavni vrh Koprena nalazi
        se na srpsko-bugarskoj granici, sa stenovitim odsecima prema Bugarskoj,
        dok je zapadno, u Srbiji, prostrana, slabo razuđena površina sa
        međuvisinama od 1840 do 1935 m n.v. i drugim širim i nižim vrhom
        Koprena, čija visina iznosi 1935 m.
      </p>

      <img
        src={staraPlaina4}
        alt="Slavinjsko grlo, ili Rosomački lonci - Stara Planina"
      />

      <p>
        Slavinjsko grlo, ili Rosomački lonci, predstavlja klisuru rečne doline
        Rosomačke reke. Nalazi se u blizini sela Slavinja, koje je od Pirota
        udaljeno oko 30 km. Do kanjona se može doći iz centra sela za oko 15
        minuta laganog hoda. Staza je dobro obeležena i vodi kroz jedinstven
        reljef ovog dela Stare planine.
        <br />
        <br />
        Kanjon je nastao intenzivnim erozivnim delovanjem vode koja je prodrla u
        stenske slojeve Stare planine. Karakteristična pojava u ovom kanjonu su
        prečage u koritu reke, koje stvaraju impresivan niz slapova i virova,
        poznatih kao "lonci". Ovi fenomeni su rezultat vertikalne fluvijalne
        erozije, gde reka, padajući sa kaskada, svojim velikim kinetičkim
        energijama duboko urezuje delove rečnog korita, odmah iza kaskade. Ovaj
        jedinstveni prizor prirodnog reljefa Stare planine predstavlja pravo
        blago koje još uvek nije potpuno otkriveno, i predstavlja pravi raj za
        sve ljubitelje prirode.
      </p>

      <img src={staraPlaina5} alt="Stara Planina" />

      <p>
        Masiv Stare planine smešten je u istočnom delu Karpato-balkanskog
        sistema, a čini zapadni deo masiva Balkana, koji se u celini prostire
        kroz Bugarsku. Stara planina se sastoji od planinskog venca koji počinje
        od padina Vrške Čuke iznad Zaјečara, a zatim se pruža prema jugoistoku,
        gde se naglo uzdiže iznad Knjaževca i prelazi u visoki planinski masiv.
        Ovaj masiv se ukoso prostire pravcem severozapad-jugoistok, a njegova
        najveća visina je na vrhu Miđor. Severoistočne padine pripadaju
        teritoriji Bugarske, dok se jugoistočne padine, zajedno sa obroncima,
        nalaze na teritoriji Srbije.
      </p>

      <img src={staraPlaina6} alt="Čunguljski vodopad" />

      <p>
        Čunguljski vodopad je jedan od najlepših i najimpresivnijih vodopada na
        Staroj planini. Njegova visina prelazi 40 metara, a zbog svog skrivenog
        položaja u dubokim šumama Stare planine, otkriven je tek 1996. godine.
        <br />
        <br />
        Nalazi se na oko 9 km od Toplog Dola, koji je najčešće polazna tačka za
        posetu ovom očaravajućem vodopadu. Ovo područje je poznato po tome što
        se u njegovoj blizini nalaze neki od najlepših vodopada Staroplaninskog
        masiva.
        <br />
        <br />
        Staza koja vodi do Čunguljskog vodopada, od Toplog Dola, dobro je
        označena, ali zahteva određenu fizičku spremnost, jer pešačenje traje
        oko 2,5 sata.
        <br />
        <br />
        Jedinstvena karakteristika ovog vodopada je to što postepeno raste svake
        godine, jer snaga vode koja pada produbljuje stene na dnu vodopada,
        čineći ga još impozantnijim.
      </p>

      <img src={staraPlaina7} alt="Toplodolska reka" />

      <p>
        Toplodolska reka je druga najvažnija pritoka (sastavnica) u slivu
        Visočice (Temštine), koja drenuje južne padine Stare planine. Nastaje u
        Toplom Dolu spajanjem Javorski i Rekitske reke. U širem smislu, pripada
        slivu reke Temštine kao njena leva sastavnica, dok u najširem smislu
        spada u sliv reke Nišave, odnosno Južne Morave, Velike Morave, Dunava, a
        samim tim i Crnomorski sliv. Administrativno, sliv Toplodolske reke
        pripada opštini Pirot u Pirotskom upravnom okrugu.
      </p>

      <img src={staraPlaina8} alt="Midzor" />

      <p>
        Miđor je najviši vrh Stare planine u Srbiji, a ujedno i najviši vrh
        centralnog dela Srbije. Nalazi se na granici između Srbije i Bugarske.
        Miđor se uzdiže na visinu od 2.169 metara. U njegovoj blizini nalaze se
        izvori Trgoviškog Timoka i Loma. Geološku osnovu Miđora čine permijski
        crveni peščari.
      </p>
    </div>
  );
};
