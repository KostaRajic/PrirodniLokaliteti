import stisa1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/staraTisa2.jpg";
import stisa2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/staraTisa3.jpg";
import stisa3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/staraTisa4.jpg";
import stisa4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/staraTisa5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const StaraTisa = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={stisa1} alt="Stara Tisa 1" />

      <h2 style={{right: '50px'}}>PARK PRIRODE "STARA TISA" KOD BISERNOG OSTRVA</h2>

      <p style={{ paddingTop: "80px", marginTop: "-10px" }}>
        Park prirode «Stara Tisa kod Bisernog ostrva» je kao hidrološki objekat
        posebno značajan zbog svoje očuvanosti. Dužina od 23.706 km čini je
        najdužom mrtvajom uz ceo tok reke Tise. Stara (Mrtva) Tisa je očuvala
        svoje prirodne vrednosti iz XIX veka, kada je odsečena od svog toka.
        Najvažnije karakteristike prirodnih staništa su određene geografskim
        položajem, kao i geomorfološkim i hidrološkim osobinama područja. Ova
        vodena, močvarna i šumska staništa utočište su 67 vrsta fitoplanktona i
        27 vrsta zooplanktona, 148 taksona vaskularne flore, 21 bilјne
        zajednice, 1 vrste maločekinjastih crva, velikog broja insekata, 29
        vrsta riba, 9 vrsta vodozemaca i 4 vrste gmizavaca, 183 vrste ptica i 27
        vrsta sisara, od kojih su mnoge ugrožene.
      </p>

      <img src={stisa2} alt="Stara Tisa 2" />

      <p style={{ marginTop: "-10px" }}>
        Kao park prirode, Stara Tisa ima zaštitu koja omogućava očuvanje
        biodiverziteta i prirodnih vrednosti ovog područja. Aktivnosti koje mogu
        negativno uticati na ekosistem, kao što su prekomerni lov, uništavanje
        staništa i zagađenje, regulisane su zakonodavstvom.
      </p>

      <img src={stisa3} alt="Stara Tisa 3" />

      <p style={{ marginTop: "-10px" }}>
        Park prirode je područje dobro očuvanih prirodnih vrednosti sa pretežno
        očuvanim prirodnim ekosistemima i živopisnim pejsažima, namenjeno
        očuvanju ukupne geološke, biološke i predeone raznovrsnosti, kao i
        zadovolјenju naučnih, obrazovnih, duhovnih, estetskih, kulturnih,
        turističkih, zdravstveno-rekreativnih potreba i ostalih delatnosti
        usklađenih sa tradicionalnim načinom života i načelima održivog razvoja.
      </p>

      <img src={stisa4} alt="Stara Tisa 4" />

      <p style={{ marginTop: "-10px" }}>
        Pored ekološke vrednosti, park prirode ima i socio-ekonomski značaj za
        lokalnu zajednicu. Kroz održivi turizam i edukaciju, park doprinosi
        podizanju svesti o zaštiti prirode i očuvanju biološke raznovrsnosti.
      </p>
    </div>
  );
};
