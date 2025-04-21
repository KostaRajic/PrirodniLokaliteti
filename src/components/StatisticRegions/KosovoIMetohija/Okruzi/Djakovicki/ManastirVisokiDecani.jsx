import decani1 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/manastirDecani1.jpg";
import decani2 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/manastirDecani2.jpg";
import decani3 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/manastirDecani3.jpg";
import decani4 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/manastirDecani4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { djakovickiOkrugPathRoutes } from "./DjakovickiOkrugPathRoutes";

export const ManastirVisokiDecani = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(djakovickiOkrugPathRoutes.home)} />
      <header></header>
      <img src={decani1} alt="Menastir Visoki Dečani 1" />

      <h2>Menastir Visoki Dečani</h2>

      <p style={{ paddingTop: "50px" }}>
        Metohija je plodna ravnica koja se prostire od podnožja Prokletija na
        severu, sve do Šare na jugu i jugoistoku, te Drenicom do granica Kosova,
        duž linije gradova Peć - Đakovica - Prizren. Ime je dobila po brojnim
        "metosima" i "metohijama" – monaškim posedima Srpske svetosavske crkve,
        na koje je oduvek bila podeljena. Ovi posedi, koje su srednjovekovni
        srpski vladari darivali Crkvi svog naroda, sastojali su se od
        starosedečkih srpskih sela sa njihovim žiteljima, oranica, vinograda,
        kao i planina pokrivenih šumama i vodama metohijskih bistrih reka.
      </p>

      <img src={decani2} alt="Menastir Visoki Dečani 2" />

      <p>
        Stefan Uroš Treći je podigao manastir nedaleko od "prvog sela zvanog
        Detčani" (Dedčani) i nazvao ga Dečanskim, prema obližnjem području koje
        je tako nazvano ne samo zbog blizine brojnih monaških ćelija u kojima su
        se, iz generacije u generaciju, podvizavali "dobri dedovi ili starci" –
        što je izvorno značenje grčke reči "kaluđeri", već i u znak zahvalnosti
        svom najvoljenijem pretku, pradedu po telu i "dedi" duhovnom, Svetom
        Savi, čijim je molitvama to mesto bilo otkriveno.
        <br />
        <br />
        Epitet "Visoki" Dečani su dobili zbog toga što njihova crkva predstavlja
        najveću i najvišu očuvanu građevinu srednjovekovne Srbije, ali i zbog
        dragocenih građevinskih materijala od kojih je sagrađena, što je
        doprinosilo tome da ona "preuzvišenom blagodati sja svima koji je
        gledaju". Jedan anonimni putopisac iz 15. veka ostavio je zapis da je
        Stefanova crkva "svaku misao prevazišla lepotom, mermerom i veličinom, i
        različitim likovima, za što nije dovoljno ni godina da se ispriča, a
        izgled crkve i svetlost mermera umara oči koje je gledaju, kao neka
        zvezda Danica koja sja iznutra".
      </p>

      <img src={decani3} alt="Menastir Visoki Dečani 3" />

      <p>
        Od veličanstvenog prvobitnog arhitektonskog i prostornog koncepta
        monaške naselbine, osim crkve, sačuvane su dve srednjovekovne građevine
        – trpezarija i delimično očuvana ulazna kula, koje su podignute u isto
        vreme kao i crkva, rukama istih majstora. Od višespratne odbrambene
        kule, sačuvano je samo prizemlje. Godine 1926. postavljena je nova
        krovna konstrukcija, kao i nova metalna vrata, koja su zamenila staru
        drvenu kapiju. Pretpostavlja se da je ulazna kula, visoka oko 9 metara,
        imala još najmanje tri sprata i zvonik na vrhu, te da je bila
        najdominantnija građevina unutar manastirskog utvrđenja.
        <br />
        <br />
        Manastir Dečani je izgrađen prema srednjovekovnom obrascu za formiranje
        većih monaških naselja: glavno sveto zdanje je crkva, smeštena u sredini
        kružnog prostora, koji je opasan zidom, a ostale zgrade se nalaze u
        njegovoj blizini.
      </p>

      <img src={decani4} alt="Menastir Visoki Dečani 4" />

      <p>
        Hram posvećen Hristu Spasu Svedržitelju, odnosno Vaznesenju Gospodnjem,
        sagrađen je kao grobna crkva na mestu koje je za "dom Božiji", prema
        rečima Svetog Kralja, odabrao Sveti Sava, ali nije uspeo da ga sam
        izgradi. Pod budnim okom arhiepiskopa Danila Drugog, grupa majstora iz
        Primorja, na čelu sa fra Vitom Trifunovim Čučom, opatima crkve Svete
        Marije na Gurdicu, od "Kotora, grada kraljevog", obukla je hram u
        "evropskiji" izgled spolja, dok ga je iznutra potpuno prilagodila
        pravoslavnom bogosluženju.
        <br />
        <br />
        Arhitektura katolikon manastira Visoki Dečani spada u raški stil i
        predstavlja spoj višebrodne vaselike (nazvane po starorimskoj
        "basiliki") i jednobrodne i jednokupolne raške crkve, koja spolja deluje
        kao trobrodna. Unutrašnjost čini prostoran brod (naos) podeljen na pet
        delova, nadvišen kupolom koja se oslanja na četiri masivna stuba (u tom
        delu crkva je visoka do 29 metara), a na zapadnoj strani nalazi se
        trobrodna priprata ili tročlano predbrdoje (narteks), gde je nekada bila
        krstionica. Dečanska crkva je dugačka više od 36 metara, a široka 24
        metra. Oltaorski prostor je trodelan, u sredini se nalazi glavni oltar
        sa Časnom trpezom.
      </p>
    </div>
  );
};
