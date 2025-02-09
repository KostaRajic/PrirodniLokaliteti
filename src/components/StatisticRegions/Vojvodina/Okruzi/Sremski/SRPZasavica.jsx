import zasavica1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/zasavica2.jpg";
import zasavica2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/zasavica1.jpg";
import zasavica3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/zasavica4.jpg";
import zasavica4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/zasavica5.jpg";
import zasavica5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/zasavica6.jpg";
import zasavica6 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/zasavica7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const SRPZasavica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={zasavica4} alt="Specijalni rezervat prirode 'Zasavica' 1" />

      <h2 style={{ right: "50px" }}>Specijalni rezervat prirode "Zasavica"</h2>

      <p>
        Specijalni rezervat prirode Zasavica je prirodni rezervat stavljen pod
        zaštitu države 1977. godine kao prirodno dobro I kategorije od izuzetnog
        značaja. Rezervat se prostire u severnoj Mačvi na teritorijama opština
        Sremska Mitrovica i Bogatić. Ovo je močvarno područje sa poplavnim
        livadama i šumama površine 1825 hektara uz rečicu Zasavicu dužine 33,1
        km. Kroz ovaj rezervat teče rečica Zasavica, potok Batar, kanali Jovac i
        Prekopac, i postoji veza sa rekom Savom.
      </p>

      <img src={zasavica1} alt="Specijalni rezervat prirode 'Zasavica' 2" />

      <p>
        Vizitorski centar predstavlja centralno turističko mesto rezervata.
        Izgrađena je drvena građevina sa turnjem visine 18 m sa koga se pruža
        pogled ka pašnjaku od 300 ha i najširem i najlepšem delu toka Zasavice.
        U ovom objektu nalazi se trafika za prodaju suvenira i 2 sobe sa ukupno
        7 ležaja, kao i dve pomoćne prostorije.
      </p>

      <img src={zasavica3} alt="Specijalni rezervat prirode 'Zasavica' 3" />
      <p>
        Na ovom području do sada je zabeleženo preko 600 biljnih vrsta. Posebno
        je značajno prisustvo: belog i žutog lokvanja , testerice , lokvanjića ,
        močvarne koprive i iđirota. Ovo je jedino mesto u Srbiji gde možete
        videti dabra.
      </p>

      <img src={zasavica2} alt="Specijalni rezervat prirode 'Zasavica' 4" />
      <p>
        Danas, kad svaka zemlja vodi računa o očuvanju autohtonih rasa, uz pomoć
        države, Specijalni rezervoar Zasavica postao je čuvar starih rasa,
        odnosno genetskog potencijala. Na pašnjaku Valjevac, koji je srce
        Rezervata, slobodno žive, kao i pre više stotina godina, autohtone rase.
        Podolsko goveče je najveće radno goveče u Evropi, koje sada ponovo pase
        i razmnožava se na Valjevcu. Zna se da je magareće mleko među najboljim
        sredstvima za negu kože, kao i odličan lek za imunitet.
      </p>

      <img src={zasavica5} alt="Specijalni rezervat prirode 'Zasavica' 5" />

      <p>
        Zahvaljujući brižljivom upravljanju kroz sve protekle godine, Specijalni
        rezervoar Zasavica i danas je bez ijedne fabrike i bez ijednog
        zagađivača. A, Zasavica se za svu dosadašnju brigu odužila neverovatnim
        diverzitetom. Svakoodnevno privlači pažnju stručnjaka iz mnogih naučnih
        oblasti, kao i pažnju sve većeg broja posetilaca i poštovalaca prirode
        iz Srbije i sveta.
      </p>

      <img
        src={zasavica6}
        alt="Specijalni rezervat prirode 'Zasavica' 6"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Posebno bogatstvo čine i 213 vrsta ptica, a tu je, nakon mnogih
        decenija, ponovo i sasvim neobičan stanovnik voda Zasavice - neumorni
        graditelj, dabrovi. Opstanak retkih i zaštićenih biljnih vrsta,
        vodozemaca i insekata, kao i ogromni resursi pijaće vode u dubinama
        zemljišta, čine Specijalni rezervoar Zasavica, pored ostalog, mestom od
        vitalnog i strateškog značaja za sadašnje i buduće generacije kojima
        ćemo ostaviti ovo prirodno bogatstvo.
      </p>
    </div>
  );
};
