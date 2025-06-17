import besnaKobila1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila1.jpg";
import besnaKobila2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila2.jpg";
import besnaKobila3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila3.jpg";
import besnaKobila4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila4.jpg";
import besnaKobila5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila5.jpg";
import besnaKobila11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM1.jpg";
import besnaKobila22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM2.jpg";
import besnaKobila33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM3.jpg";
import besnaKobila44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM4.jpg";
import besnaKobila55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";

export const PlaninaBesnaKobila = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${besnaKobila11} 400w, ${besnaKobila1} `} alt="Planina Besna Kobila 1" />

      <h2>Planina Besna Kobila</h2>

      <p style={{ paddingTop: "50px" }}>
        Besna kobila je planina u jugoistočnom delu Srbije, smeštena na granici
        sliva Južne Morave i sliva reke Strume. Deo je Rodopskog planinskog
        masiva. Najviši vrh planine doseže visinu od 1.922 metra, dok ostali
        značajni vrhovi uključuju Šuplji pad (1.862 m), Musul (1.777 m), Mečit
        (1.587 m), kao i Bele Vode i Modriku. Tokom perioda od 1878. do 1919.
        godine, greben ove planine činio je granicu između Srbije i Bugarske.
      </p>

      <img srcSet={`${besnaKobila22} 400w, ${besnaKobila2} `} alt="Planina Besna Kobila 2" />

      <p>
        U prošlim vremenima, na planini bogatoj zelenim pašnjacima, naselili su
        se nomadi sa svojim stadima ovaca, krava i konja. Po dolasku, brzo su
        počeli da grade svoje kolibe. U tom naselju živela je lepa devojka po
        imenu Feja. Feja je bila snažna i hrabra, sa talentom za jahanje koji je
        bio jednak, ako ne i bolji, od svih muškaraca iz sela. Njena najveća
        strast bilo je jahanje, a gotovo nikada nije silazila sa svoje kobile.
        <br />
        <br />
        Jednog dana, dok je Feja bila na putu, njenoj kobili je zadao ujeda
        besan pas. Feja nije primetila ujed, ali je ubrzo videla krvave tragove
        na nozdrvama svoje kobile. Požurila je u selo u nadi da će joj ljudi
        pomoći da spase ljubimicu. Međutim, kobila je iznenada krenula u
        suprotnom pravcu i pojurila prema planini. U tom momentu, dok je kobila
        naglo skrenula, Feja je pala sa nje i slomila nogu.
        <br />
        <br />
        Selo je pronašlo nesvesnu Feju i odnelo je u očevu kolibu, gde su je
        dugo lečili. Iako su je spasili, Feja je ostala hroma. Kao podsećanje na
        ovu lepu i hrabru devojku, te njenu tragičnu sudbinu, selo je nazvano
        Kriva Feja, a planina je dobila ime Besna kobila.
      </p>

      <img srcSet={`${besnaKobila33} 400w, ${besnaKobila3} `} alt="Planina Besna Kobila 3" />

      <p>
        Planina Besna kobila, sa najvišim vrhom koji se uzdiže na 1.922 metra
        nadmorske visine, smeštena je u jugoistočnom delu Srbije. Nalazi se 27
        kilometara istočno od Vranja, a od Niša, Skoplja i Sofije udaljena je
        oko 90 kilometara u pravoj liniji.
        <br />
        <br />
        Ova planina deo je rodopskog planinskog masiva. Rodopske planine se
        protežu i na istočnu i zapadnu stranu od Južne Morave. Uz Besnu kobilu,
        u rodopski masiv spadaju i planine poput Dukata, Vardenika, Čemernika,
        Kukavice, Jastrepcu i druge. Severno od Besne kobile smešteni su
        Vardenik (1.874 m), Čemernik (1.638 m) i Oštrozub (1.546 m), dok južno
        od nje leže Dukat i Ostrogovske planine u Makedoniji.
        <br />
        <br />
        Severnim podnožjem planine vodi put koji povezuje Bosilegrad sa dolinom
        Južne Morave. Na južnoj padini planine nalazi se rudnik galenita.
      </p>

      <img srcSet={`${besnaKobila44} 400w, ${besnaKobila4} `} alt="Planina Besna Kobila 4" />

      <p>
        Planina Besna kobila bogata je raznovrsnim biljnim vrstama, sa preko 700
        vrsta drvenastih, žbunastih i zeljastih biljaka. Najzastupljenije su
        samonikle lekovite biljke poput kantariona, koprive, nane i maslačka.
        Što se tiče životinjskog sveta, na ovoj planini nastanjuju se vukovi,
        divlje svinje i lisice.
        <br />
        <br />
        Srednja godišnja temperatura na Besnoj kobili iznosi 4,5°C. Najtoplije
        je tokom jula, kada prosečna temperatura dostiže 13,6°C, dok je januar
        najoštriji mesec, sa prosečnom temperaturom od -6,5°C. Kada su u pitanju
        padavine, Besna kobila prima između 900 i 1000 milimetara kiše godišnje.
        Najveći padavinski period je u junu, sa 117 milimetara, dok je oktobar
        najsušniji mesec, sa svega 35 milimetara padavina.
      </p>

      <img srcSet={`${besnaKobila55} 400w, ${besnaKobila5} `} alt="Planina Besna Kobila 5" />

      <p>
        Najvažniji prirodni resursi područja Besne kobile uključuju sliv reke
        Južne Morave, reku Strumu sa njenim pritokama, termalne vode Vranjske
        banje, kao i Vlasinsko i Lisinsko jezero.
        <br />
        <br />
        Sliv Južne Morave je ključni vodeni sistem u ovom regionu. Reka Južna
        Morava teče od makedonske granice ka severu, dugačka 295 kilometara, i
        uliva se u Veliku Moravu. Deo je crnomorskog sliva, a površina njenog
        sliva obuhvata 15.469 kvadratnih kilometara. Pritoke koje teku u blizini
        Besne kobile uključuju Vranjsku reku, Vrlu i Vlasinu.
        <br />
        <br />U opštini Bosilegrad, hidrografsku mrežu čini reka Dragovištica,
        sa pritokama Brankovskom, Ljubatskom i Lisinskom rekama. Svi vodeni
        tokovi u ovom području usmereni su ka Strumi i Egejskom moru, osim
        Božičke, Lisinske i Ljubatske reke, koje putem Lisinskog jezera ulaze u
        sliv Vlasinskog jezera.
      </p>
    </div>
  );
};
