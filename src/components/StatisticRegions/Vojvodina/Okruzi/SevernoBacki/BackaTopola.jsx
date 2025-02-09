import backaT1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/BT1.jpg";
import backaT2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/BT2.jpg";
import backaT3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/BT3.jpg";
import backaT4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/BT4.jpg";
import backaT5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/BT5.jpg";
import backaT6 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/BT6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const BackaTopola = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={backaT2} alt="Backa Topola 1" />

      <h2>
      Backa Topola
      </h2>

      <p style={{ paddingTop: "50px"}}>
        Ova vojvođanska varoš se „ugnjezdila“ na 69 km od Novog Sada, a 32 km od
        Subotice. Bačka Topola je pravi primer multikulturalnosti, ovde će vam
        poželjeti dobrodošlicu na srpskom ali i mađarskom jeziku. Dok šetate
        pojedinim ulicama Bačke Topole osetićete seosku idilu, pravi ravničarski
        duh. Ljubazni domaćini će vas ugostiti u starim švapskim kućama u kojima
        vas čeka udoban smeštaj a bićete i u mogućnosti da uživate u
        vojvođanskoj autentičnoj hrani.
      </p>

      <img src={backaT1} alt="Backa Topola 2" />

      <p style={{ marginTop: "-10px" }}>
        Zobnatičko jezero je prirodno jezero koje se nalazi u severnom delu
        Srbije, u pokrajini Vojvodina, u blizini Bačke Topole. Poznato je po
        svojoj prirodnoj lepotu i značaju kao destinacija za rekreaciju i odmor.
        Jezero privlači posetioce zbog mogućnosti za sportove na vodi, ribolov,
        kao i za porodice koje žele miran prostor za odmor u prirodi. Zbog svoje
        mirne okoline, Zobnatičko jezero je popularno među lokalnim
        stanovništvom i turistima, posebno tokom letnjih meseci.
      </p>

      <img src={backaT3} alt="Backa Topola 3" />

      <p style={{ marginTop: "-10px" }}>
        Turistički kompleks Zobnatice čini nekadašnje imanje porodice Terleeva
        koje je 1882. godine izgradio vlastelin Đula Terleeva. Imanje čini
        dvorac Zobnatica i kula osmatračnica. Zobnatica je poznata po ergeli
        koja je osnovana 1779. godine. Celokupni kompleks ergele sadrži
        konjušnicu sa oko 100 grla engleske punokrvne rase, hipodrom i druge
        terene za jahanje i treninge.
      </p>

      <img src={backaT4} alt="Backa Topola 4" />
      <p style={{ marginTop: "-10px" }}>
        Kaštel Krai – Muzej Bačke Topole predstavlja važan istorijski objekat i
        kulturnu instituciju u Bačkoj Topoli. Ovaj muzej se nalazi u jednom od
        značajnih istorijskih objekata u regionu i pruža uvid u bogatu istoriju,
        kulturu i tradiciju Bačke Topole i okolnih područja. Muzej nudi
        različite izložbe koje predstavljaju lokalnu istoriju, arheološke
        nalaze, etnografske zbirke i predmete koji ilustruju svakodnevni život
        kroz vekove u ovom delu Vojvodine. Posetioci mogu upoznati različite
        periode, od doba Rimskog Carstva, preko srednjovekovnog perioda, pa sve
        do savremenog života u ovom multikulturalnom regionu.
      </p>

      <img
        src={backaT5}
        alt="Backa Topola 5"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Dvorac (Kaštel - Panonija) je izgrađen 1846. godine za plemićku porodicu
        Falcione. Izgradnju dvorca je sproveo grof Arpad Falcione, a park oko
        zgrade je završen tek 1870. godine kada je imanjem upravljao Arpad II
        Falcione. Nalazi se na poljoprivrednom dobru "Panonija", u blizini mesta
        Bajša. Objekat je skromna prizemna građevina, smeštena u izuzetno
        negovanom prostranom parku. Dvorac je sagrađen u duhu zrelog klasicizma
        sa svim odlikama koje ovaj stil čine primerenim arhitekturi dvora.
        Portik nad glavnim ulazom je u centralnom delu izdužene pravougaone
        osnove. Oslonjen na četiri masivna stuba koji se završavaju jonskim
        kapitelima, iznad kojih se nalazi ravna arhitravna greda sa godinom
        izgradnje. Ulaz je masivan, a sa strane vrata se nalaze dva prozorska
        otvora.
      </p>

      <img
        src={backaT6}
        alt="Backa Topola 5"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Ergela Zobnatica, turistička i konjička atrakcija u Bačkoj Topoli,
        Vojvodina, sa bogatom tradicijom uzgoja konja. Pruža mogućnosti za
        jahanje, vožnju kočijama i rekreativne aktivnosti u prirodnom ambijentu.
        Idealna je za ljubitelje prirode, porodice i sve koji žele doživeti
        autentični vojvođanski ruralni duh.
      </p>
    </div>
  );
};
