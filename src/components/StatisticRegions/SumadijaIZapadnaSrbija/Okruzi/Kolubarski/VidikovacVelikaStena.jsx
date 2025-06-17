import velikaStena1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena5.jpg";
import velikaStena2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena1.jpg";
import velikaStena3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena2.jpg";
import velikaStena4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena3.jpg";
import velikaStena5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena4.jpg";
import velikaStena11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena5.jpg";
import velikaStena22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena1.jpg";
import velikaStena33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena2.jpg";
import velikaStena44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena3.jpg";
import velikaStena55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";

export const VidikovacVelikaStena = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(kulubarskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${velikaStena11} 400w, ${velikaStena1} `} alt="Vidikovac Velika Stena 1" />

      <h2>Vidikovac Velika Stena</h2>

      <p style={{ paddingTop: "50px" }}>
        Velika stena, poznata i kao Lazareva stena, predstavlja jedan od
        najlepših vidikovaca u Zapadnoj Srbiji. Smeštena je na obroncima planine
        Maljen, nedaleko od Valjeva, i poznata je po svom jedinstvenom
        panoramskom pogledu na jezero Rovni i okolne prirodne predele. Ovo mesto
        je dobilo ime po knezu Lazaru, jer se veruje da je ovo područje povezano
        sa istorijskim događajima iz njegove epohe. Velika stena je popularna
        destinacija za ljubitelje prirode, planinare i fotografe koji žele da
        uživaju u spektakularnim prizorima.
      </p>

      <img srcSet={`${velikaStena22} 400w, ${velikaStena2} `} alt="Vidikovac Velika Stena 2" />

      <p>
        Jezero Rovni, koje se vidi sa stene, veštački je rezervoar koji je
        izgrađen radi vodosnabdevanja Valjeva i okolnih naselja. Svojim
        smaragdno zelenim nijansama i netaknutom okolinom, jezero predstavlja
        pravi dragulj ovog kraja. Osim što je važno za lokalnu infrastrukturu,
        jezero je postalo omiljeno mesto za izlete, kampovanje i ribolov.
        Prirodni ambijent oko jezera, sa bogatim biljnim i životinjskim svetom,
        dodatno doprinosi atraktivnosti ovog područja.
      </p>

      <img srcSet={`${velikaStena33} 400w, ${velikaStena3} `} alt="Vidikovac Lazareva Stena 1" />

      <p>
        Velika stena se nalazi u blizini sela Stubo, poznatog po svojoj očuvanoj
        prirodi i kulturno-istorijskom značaju. Do stene vodi nekoliko pešačkih
        staza koje prolaze kroz guste šume i pružaju jedinstvenu priliku za
        istraživanje prirode. Ove staze su prilagođene posetiocima različitih
        nivoa fizičke spremnosti, što čini stenu dostupnom i porodicama sa
        decom. Pogled sa Velike stene je naročito lep u jutarnjim i večernjim
        satima, kada sunčeva svetlost stvara prelepe kontraste između jezera,
        šuma i neba.
      </p>

      <img srcSet={`${velikaStena44} 400w, ${velikaStena4} `} alt="Veštačko jezero Rovni" />

      <p>
        Veštačko jezero Rovni, poznato i kao Akumulacija Stubo-Rovni, formirano
        je radi rešavanja problema vodosnabdevanja Valjeva i okolnih mesta. Ovo
        jezero je deo velikog infrastrukturnog projekta koji je započet kako bi
        se obezbedila stabilna i čista voda za piće u ovom delu Srbije. Prostire
        se na površini od oko 8 kvadratnih kilometara i ima kapacitet od preko
        50 miliona kubnih metara vode. Njegova primarna funkcija je prikupljanje
        i čuvanje vode iz reke Jablanice i njenih pritoka, koja se zatim
        prečišćava i distribuira stanovnicima Valjeva, kao i okolnim naseljima
        poput Mionice, Lajkovca i Lazarevca. Pored vodosnabdevanja, jezero Rovni
        ima i značajnu ulogu u zaštiti od poplava, jer može akumulirati velike
        količine vode tokom kišnih sezona i sprečiti potencijalne štete.
      </p>

      <img srcSet={`${velikaStena55} 400w, ${velikaStena5} `} alt="Vidikovac Lazareva Stena 2" />

      <p>
        Osim prirodnih lepota, područje oko Velike stene i jezera Rovni ima i
        istorijski značaj. Ovaj kraj je bogat legendama i pričama koje su
        povezane sa srpskom srednjovekovnom istorijom. Ljubitelji istorije mogu
        istraživati lokalne znamenitosti, dok oni koji traže mir i tišinu mogu
        uživati u netaknutoj prirodi i zvucima šume. Velika stena i jezero Rovni
        postali su nezaobilazna destinacija za sve koji žele da iskuse
        autentičnu lepotu Srbije. Ova lokacija nudi idealan spoj prirodnih
        pejzaža, rekreacije i istorijske baštine, pružajući nezaboravno iskustvo
        svakom posetiocu.
      </p>
    </div>
  );
};
