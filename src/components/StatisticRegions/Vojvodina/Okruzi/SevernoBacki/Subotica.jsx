import sub6 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/sub6.jpg";
import sub2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/sub2.jpg";
import sub3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/sub3.jpg";
import sub4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/sub4.jpg";
import sub5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/sub5.jpg";
import spomenPetarKaradjordjevic from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/Spomenici/spomenPetarKaradjordjevic.jpg";
import spomenSvetomTrojstvu from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/Spomenici/spomenSvetoTrojstvo.jpg";
import spomenIvanuSaricu from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/Spomenici/spomenIvanSaric.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const Subotica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={sub5} alt="Subotica 1" />

      <h2>SUBOTICA</h2>

      <p style={{ paddingTop: "80px", marginTop: "-10px" }}>
        Grad Subotica, smešten na severu Republike Srbije, u blizini granice sa
        Mađarskom, ima prosečnu nadmorsku visinu od 114 metara. Nalazi se 40
        metara iznad nivoa reke Tise u Kanjiži i 32 metra iznad nivoa Dunava u
        Bajji. Kroz grad prolazi međunarodni put E-75, a do graničnog prelaza
        Kelebija udaljenost je 10 kilometara, dok je do Horgoša 30 kilometara.
        Na severu se pruža plodna peščara, poznata po vinogradima i voćnjacima,
        dok je južno zemljište bogato oranicama.
      </p>

      <img src={sub2} alt="Subotica 2" />

      <p style={{ marginTop: "-10px" }}>
        Subotica je prepoznatljiva po zgradama u secesijskom stilu, naročito u
        centru grada, kao što je Gradska kuća i Sinagoga, koja je jedan od
        najlepših primera ovog arhitektonskog pravca. Grad ima i mnogo drugih
        kulturnih spomenika, muzeja, galerija i manifestacija, što ga čini
        važnim kulturnim centrom Vojvodine.
      </p>

      <img src={sub3} alt="Subotica 3" />

      <p style={{ marginTop: "-10px" }}>
        Danas grad sa okolnim opštinama ima oko 150.000 stanovnika: Mađara,
        Hrvata, Bunjevaca, Srba i drugih naroda. Oko grada je podignuto 18 većih
        naselja: Bajmok, Bački Vinogradi, Bačko Dušanovo, Bikovo, Višnjevac,
        Gornji Tavankut, Donji Tavankut, Đurđin, Kelebija, Ljutovo, Mala Bosna,
        Mišićevo, Novi Žednik, Palić, Stari Žednik, Hajdukovo, Čantavir i
        Šupljak. Grad je povezan sa starim letovalištem i jezerom Palić.
      </p>

      <img src={sub4} alt="Subotica 4" />
      <p style={{ marginTop: "-10px" }}>
        Pored toga, Subotica je i ekonomski centar, poznata po poljoprivredi,
        trgovini i industriji. Takođe, grad se ponosi bogatom tradicijom u
        obrazovanju i nauci. U njegovoj blizini nalaze se prirodne lepote, poput
        Palićkog jezera, koje dodatno doprinosi turizmu i kvalitetu života.
      </p>

      <div className="displayFlex" style={{ marginTop: "-10px", height: '90vh' }}>
        <div>
          <img src={spomenPetarKaradjordjevic} alt="Petar1 Karadjordjevic" />
          <p>Kralj Petar Prvi Karađorđević</p>
        </div>
        <div>
          <img src={spomenSvetomTrojstvu} alt="Sveto Trojstvo" />
          <p>Sveto Trojstvo</p>
        </div>
        <div>
          <img src={spomenIvanuSaricu} alt="Ivan Saric" />
          <p>Ivan Šarić</p>
        </div>
      </div>

      <img src={sub6} alt="Subotica 5" style={{ marginBottom: "-10px" }} />
      <p>
        Gradska kuća u Subotici je najveća, a po mnogima i najlepša građevina
        Subotice. Podignuta je za dve godine, od 1908. do 1910, ali su vrhunski
        majstori onog vremena još pune dve godine ukrašavali njene enterijere.
        Podignuta je po projektu Marcela Komora (1868-1944.) i Dežea Jakaba
        (1864-1932.), budimpeštanskih arhitekata, u tada vrlo modernom stilu –
        mađarskoj varijanti secesije. Ukrašena je s bezbroj šara stilizovanog
        cveta. Gradska kuća je skladan spoj umetnosti i zanata. Visoka je 76m,
        terasa vidikovca je na 45,5m, duga 105,08m, široka 55,56m, a prostire se
        na 5.838 kvadratnih metara.
      </p>
    </div>
  );
};
