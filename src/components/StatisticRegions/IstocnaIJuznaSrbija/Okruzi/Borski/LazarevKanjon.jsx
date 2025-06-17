import lazarevKanjon1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon1.jpg";
import lazarevKanjon2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon2.jpg";
import lazarevKanjon3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon3.jpg";
import lazarevKanjon4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon4.jpg";
import lazarevKanjon5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon5.jpg";
import lazarevKanjon11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM1.jpg";
import lazarevKanjon22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM2.jpg";
import lazarevKanjon33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM3.jpg";
import lazarevKanjon44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM4.jpg";
import lazarevKanjon55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";

export const LazarevKanjon = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(borskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${lazarevKanjon11} 400w, ${lazarevKanjon1} `} alt="Lazarev Kanjon 1" />

      <h2>Lazarev Kanjon</h2>

      <p style={{ paddingTop: "50px" }}>
        Kanjon Lazareve reke, poznat i kao Lazarev kanjon, najduži je i
        najdublji kanjon u istočnoj Srbiji. Nalazi se u blizini sela Zlot, oko
        20 kilometara od Bora, i prostire se između obronaka istočnog Kučaja i
        kraške visoravni Dubašnica. Zbog strmih stena i nepristupačnog terena,
        ni danas nije u potpunosti istražen. Poznat je po brojnim pećinama i
        jamama, a do sada je registrovano čak 70 speleoloških objekata.
        <br />
        <br />
        Najpoznatiji među njima je Lazareva pećina, ujedno i najduža pećina u
        Srbiji. Zbog svoje izuzetne prirodne vrednosti, Lazarev kanjon zaštićen
        je kao spomenik prirode.
      </p>

      <img srcSet={`${lazarevKanjon22} 400w, ${lazarevKanjon2} `} alt="Lazarev Kanjon 2" />

      <p>
        Sa dužinom od oko 9 kilometara i dubinom koja varira između 300 i 500
        metara, Lazarev kanjon je najduži i najdublji kanjon u istočnoj Srbiji.
        Nastao je usecanjem Lazareve reke i njenih pritoka – Valja Mikulj
        (Mikuljska reka), Valja de Mižlok i Vejske reke – u krečnjački masiv
        Kučaja. Ovaj predeo obiluje speleološkim objektima, među kojima se
        ističe Lazareva pećina, najduža pećina u Srbiji prema dosadašnjim
        istraživanjima, kao i pećina Vernjikica, koju mnogi smatraju
        najatraktivnijom u zemlji.
        <br />
        <br />
        Kanjon ima asimetričan poprečni profil – desna strana, koja se pruža
        ispod Malinika, dostiže visinu od 500 metara, dok je leva strana visoka
        oko 300 metara. Prosečan nagib uzdužnog profila kanjona iznosi 38%, a
        visinska razlika između njegovog završetka i ušća u Zlotsku reku je 200
        metara. Na pojedinim mestima, stenovite litice kanjona toliko su blizu
        da im se gornji rubovi nalaze na manje od 400 metara razmaka. U najužem
        delu kanjona formiran je niz džinovskih lonaca – vodom izdubljenih
        kotlova raspoređenih na dva visinska nivoa. Najveći među njima ima
        dužinu od 7,5 metara, širinu od 6,5 metara i dubinu od 3 metra.
      </p>

      <img srcSet={`${lazarevKanjon33} 400w, ${lazarevKanjon3} `} alt="Lazarev Kanjon 3" />

      <p>
        Kanjon je sa svih strana okružen stenovitim grebenima: na jugu i
        jugoistoku uzdiže se Malinik (1.087 m), na severu Strnjak (720 m) i
        Kornjet (696 m), dok se na zapadu nalaze Pogara (883 m) i Mikulja (1.022
        m). U svom sastavu krije više od 70 pećina, od kojih su samo neke
        istražene i dostupne. Ove pećine, poznate kao Zlotske pećine, uključuju
        Lazarevu pećinu, Vernjikicu, Hajdučicu, Mandinu pećinu, Dubašničku jamu
        i druge.
        <br />
        <br />
        Prostor Lazarevog kanjona čini zatvoren ekosistem, što je omogućilo
        opstanak retkih i endemskih biljnih vrsta, poput srpske ramonde. Kanjon
        je takođe stanište strogo zaštićenog surog orla, dok se u pećini
        Vernjikica nalazi kolonija od čak 50.000 slepih miševa – najveća te
        vrste u Evropi.
      </p>

      <img srcSet={`${lazarevKanjon44} 400w, ${lazarevKanjon4} `} alt="Lazarev Kanjon 4" />

      <p>
        Lazarev kanjon, kroz koji protiče istoimena reka, nekada je bio jedno od
        najvažnijih skrovišta homoljskih hajduka tokom turske vladavine. Ulazak
        u kanjon za hajduke je značio sigurnost, jer se Turci nikada nisu
        usuđivali da ih tamo slede.
        <br />
        <br />
        Prema legendi, nakon bitke na Marici 1371. godine, konjanici kneza
        Lazara stigli su u ovaj kraj i tu se zadržali neko vreme, po čemu su
        reka i kanjon dobili ime. Kasnije su u pećinama kanjona utočište
        pronalazili i hajduci koji su se borili protiv turskih osvajača.
      </p>

      <img srcSet={`${lazarevKanjon55} 400w, ${lazarevKanjon5} `} alt="Lazarev Kanjon 5" />
      <p>
        Lazarev kanjon spada među floristički i fitogeografski najsloženija i
        najraznovrsnija područja u Srbiji. Flora ovog kanjona i Malinika
        obuhvata 720 taksona, što čini 20% flore Srbije i 11% flore Balkana,
        raspoređenih u 345 rodova i 71 porodicu. Ipak, biljni svet ovog područja
        još uvek nije u potpunosti istražen, pa se pretpostavlja da je njegovo
        bogatstvo još veće.
        <br />
        <br />
        Danas je Lazarev kanjon stanište retkih biljnih vrsta, poput krimskog
        bora, reliktnog tise i srpske ramonde, kao i brojnih životinja,
        uključujući divokozu, surog orla, šumsku sovu i sivog sokola. Njegove
        pećine dom su mnogim endemskim zglavkarima i slepim miševima. Osim toga,
        u kanjonu se nalaze brojna legla otrovnih zmija, pre svega poskoka, što
        ga čini jednim od najvećih staništa ove vrste u Evropi.
      </p>
    </div>
  );
};
