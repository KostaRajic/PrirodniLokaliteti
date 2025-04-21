import banjska1 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/banjska1.jpg";
import banjska2 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/banjska2.jpg";
import banjska3 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/banjska3.jpg";
import banjska4 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/banjska4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";

export const ManastirBanjska = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(mitrovackiOkrugPathRoutes.home)} />
      <header></header>
      <img src={banjska1} alt="Crkva Svetog Stefana Manastir Banjska" />

      <h2>Manastir Banjska</h2>

      <p style={{ paddingTop: "50px" }}>
        Crkva Svetog Stefana izgrađena je na mestu starijeg uništenog hrama, a
        tokom druge polovine 13. veka, za vreme oca kralja Milutina, kralja
        Uroša I, ovde je bilo sedište Banjske episkopije. Kralj Milutin je
        episkopiju pretvorio u igumaniju "na opštežilište monasima". Oko
        podizanja svoje zadužbine, kralj Milutin se, nakon saveta sa svojom
        majkom, tada već monahinjom Jelenom, bratom Dragutinom i arhiepiskopom
        Savom III, obratio Danilu Drugom, koji je kasnije postao prvi banjski
        iguman i srpski arhiepiskop. Danilo je bio blizak kraljev saradnik i
        poverenik, književnik, čovek velikog znanja i izgrađenog ukusa, jedan od
        najprosvećenijih ljudi tog vremena među Srbima. Danilov životopisac kaže
        da je kralj Milutin u Banjskoj, skupljajući "mnogo svoje bogatstvo i
        svoja imanja", postavio Danila, koji je teško napustio Hilandar, za
        čuvara kraljevske riznice.
      </p>

      <img src={banjska2} alt="Manastir Banjska 2" />

      <p>
        Zidanje crkve posvećene Svetom Stefanu, zaštitniku svih Nemanjića i
        verovatno prvoj srpskoj slavi, započelo je krajem 1312. godine. Po
        izričitoj želji kralja, novo zdanje trebalo je biti podignuto "na sliku
        Svete Bogorodice Studeničke". Pokušavajući da u gradnji imituju više od
        vek i po stariju Studenicu, grobnu crkvu osnivača dinastije, Stefana
        Nemanje (Svetog Simeona), graditelji su se ponašali prilično slobodno,
        pa je uzor u stvari bio samo sledjen u osnovnim crtama. "Banjska najviše
        prati svoj uzor u obradi fasada skupocenim kamenom i u arhitektonskom
        ukrasu", kako tvrde istoričari umetnosti.
      </p>

      <img src={banjska3} alt="Manastir Banjska 3" />

      <p>
        Po svojoj arhitekturi, manastir Banjska spada u grupu crkava raškog
        stila. Priprata je imala dve kule (zvonike) na zapadnoj strani. Crkva je
        bila obložena blokovima crvenog, plavog i belog mermera. Pored toga,
        fasada hrama Sv. Stefana bila je bogato ukrašena skulpturama i kamenim
        plastikama. "To je bila snažna, visoka, elegantna trobrodna crkva sa
        visokim poprečnim brodom i kupolom u sredini. Na njenim širokim i ravnim
        fasadama smenjivale su se trobojne površine kamena sa raskošnim
        reljefima koji su pokrivali okvire prozora i portala. Spoj jedinstvenog
        koloriteta i mekanog, toplog reljefa raške tradicije davao je banjskim
        fasadama svečani izgled, po kojima bi im mogle biti ravne samo toskanske
        fasade sijenjske katedrale."
        <br />
        <br />
        Glavni ponos Banjske bilo je čuveno "banjsko zlato", opevano u narodnoj
        pesmi i opisano u onovremenim putopisima. Činili su ga tanki zlatni
        listići kojima je bila obložena pozadina fresaka, takođe po uzoru na
        manastire Studenicu, Mileševu i Sopoćane. Danas je od tog živopisa
        očuvano samo nekoliko izbledelih fragmenata.
      </p>

      <img src={banjska4} alt="Manastir Banjska 4" />

      <p>
        Kada se kralj Milutin 1321. godine упокојио у свом двору у Неродимљу, а
        arhiepiskop Danilo preneo njegovo telo u Banjsku, crkva je velikog
        zadužbinara dočekala u punom sjaju svoje impozantne arhitekture,
        oduhovljene raskošnim fresko-slikarstvom i crkvenom umetnošću. U
        Banjskoj je, u severnoj kapeli, kasnije sahranjena i kraljica Teodora,
        supruga Stefana Dečanskog i majka cara Dušana, zbog čega je car Dušan,
        povodom svog krunisanja 1346. godine, već bogatoj Banjskoj darovao novim
        posjedima putem povelje.
      </p>
    </div>
  );
};
