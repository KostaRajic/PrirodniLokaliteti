import taorskaVrela1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela1.jpg";
import taorskaVrela2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela2.jpg";
import taorskaVrela3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela3.jpg";
import taorskaVrela4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela4.jpg";
import taorskaVrela5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela5.jpg";
import taorskaVrela11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela1.jpg";
import taorskaVrela22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela2.jpg";
import taorskaVrela33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela3.jpg";
import taorskaVrela44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela4.jpg";
import taorskaVrela55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";

export const TaorskaVrela = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(kulubarskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${taorskaVrela11} 400w, ${taorskaVrela1} `} alt="Taorska Vrela" />

      <h2 style={{ color: "white" }}>Taorska VrelaA</h2>

      <p style={{ paddingTop: "50px" }}>
        Taorska vrela su jedno od najlepših i najtajanstvenijih prirodnih
        bogatstava Zapadne Srbije i valjevskog kraja. Ova prelepa kaskadna vrela
        smeštena su u podnožju planine Povlen, koja je prepoznata kao jedna od
        najlepših u ovoj oblasti. Povlen je ujedno istorijski i geografski
        povezana sa još dve planine u regionu – Maljenom, na kojem se nalazi
        mirno planinsko odmaralište Divčibare, i Suvoborom. Sve tri planine su
        bogate prirodnim lepotama i atrakcijama. Iako Taorska vrela nisu još
        uvek postala široko prepoznatljivo odredište, ona privlače pažnju manjeg
        broja turista, uglavnom onih koji dolaze iz domaćih krajeva. Ipak,
        interesovanje za ovo prirodno blago iz godine u godinu raste, što je
        vidljivo u sve većem broju blogova i putopisnih članaka, kao i u
        turističkim ponudama koje uključuju ova mesta.
      </p>

      <img srcSet={`${taorskaVrela22} 400w, ${taorskaVrela2} `} alt="Taorska Vrela" />

      <p>
        Taorska vrela bez sumnje spadaju među najlepše prirodne kreacije u našoj
        zemlji i širem regionu. Tokom vremena bivše Jugoslavije, slike Taorskih
        vrela često su krasile naslovnice časopisa, a po svojoj lepoti
        upoređivana su s Plitvičkim jezerima u Hrvatskoj. Ono što Taorska vrela
        čini izuzetnim prirodnim spomenikom jesu njihove jedinstvene geološke
        osobitosti. Sastoje se od vrelske pećine koja se nalazi ispod masiva
        krečnjaka, iz koje izlazi glavni tok. Pored ove pećine, u okolini se
        nalaze i brojni manji izvori. Ako se krene nizvodno od glavnog izvora,
        dolazi se do najveće akumulacije bigra u ovom delu Srbije. Ovaj bigarski
        prostor presecaju brojne kaskade, kroz koje se slivaju kristalno čisti
        slapovi, stvarajući slikovite i zadivljujuće prizore.
      </p>

      <img srcSet={`${taorskaVrela33} 400w, ${taorskaVrela3} `} alt="Taorska Vrela" />

      <p>
        Taorski slapovi slivaju se u mali vodopad visine 4,5 metara, koji pada u
        reku Skrapež. Kroz kaskade i slapove prolaze ostaci starih vodenica, što
        dodatno doprinosi šarmu ovog područja. Pored velike akumulacije bigra,
        ovo područje je poznato i po bogatstvu sigom, kamenom koji je i dalje u
        potražnji i koristi se za različite svrhe. U blizini Taorskih vrela
        postoje kopovi ovog kamena. Nažalost, tokom godina ljudi su nesvesno
        iskopavali sigu u ovom području, što je negativno uticalo na prirodnu
        lepotu vodopada i njihovog okruženja, ostavljajući tragove eksploatacije
        na ovom prirodnom biseru.
      </p>

      <img srcSet={`${taorskaVrela44} 400w, ${taorskaVrela4} `} alt="Taorska Vrela" />

      <p>
        Prema sećanjima, izvor pod Povlenom bio je toliko očaravajući da je
        svakog posetioca ostavljao bez daha. Voda je izlazila iz pećine, pre
        nego što je kasnije preusmerena. Što se tiče vodenica, koje su bile deo
        narodnog graditeljstva, danas su sačuvane samo dve. Iako je izvorni
        izgled Taorskih vrela promenjen ljudskim delovanjem, ovo prirodno dobro
        i dalje očarava svojom lepotom i predstavlja destinaciju koju svakako
        treba posetiti.
      </p>

      <img srcSet={`${taorskaVrela55} 400w, ${taorskaVrela5} `} alt="Taorska Vrela" />
      <p>
        Ako odlučite da posetite Taorska vrela i lično doživite njihovu lepotu,
        kao i tajne starih vodenica, postoji nekoliko opcija kako da dođete do
        njih. Putovanje sopstvenim vozilom je jednostavno, ali takođe možete
        koristiti i autobuski ili vozni prevoz. Vrela se nalaze u selu Donji
        Taor, koje pripada teritoriji grada Valjeva, a smeštena su blizu puta ka
        selu Makovište. Sa prevozom možete prići blizu destinacije, a zatim je
        potrebno da nastavite pešačenjem. Za dolazak autobusom, treba imati u
        vidu da je put delimično asfaltiran, a delimično makadamski. Put je
        jasno označen, a tokom puta postoje parking prostori gde možete
        parkirati vozilo. Na raspolaganju je i autobuska linija koja povezuje
        Valjevo i Donji Taor.
      </p>
    </div>
  );
};
