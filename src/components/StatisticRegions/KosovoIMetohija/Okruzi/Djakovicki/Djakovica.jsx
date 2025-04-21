import djakovica1 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/djakovica1.jpg";
import djakovica2 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/djakovica2.jpg";
import djakovica3 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/djakovica3.jpg";
import djakovica4 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/djakovica4.jpg";
import djakovica5 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/djakovica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { djakovickiOkrugPathRoutes } from "./DjakovickiOkrugPathRoutes";

export const Djakovica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(djakovickiOkrugPathRoutes.home)} />
      <header></header>
      <img src={djakovica1} alt="Đakovica 1" />

      <h2>Đakovica</h2>

      <p style={{ paddingTop: "50px" }}>
        Gjakova je grad i administrativno sedište opštine Gjakova u južnom delu
        Kosova i Metohije, koje pripada Pećkom okrugu. Gradska površina obuhvata
        tri katastarske opštine: Đakovica-varoš (254 ha), Đakovica-van varoš
        (2.227 ha) i Sadik-agin zid (299 ha). Grad je smešten u donjem delu
        Metohije, okružen dolinama reka Belog Drima, Ribnika (Erenik), Krene i
        Miruše. Okolna brda i planine čine ga impresivnim, sa vrhovima
        Prokletija, Paštrika i Koritnika koji ga okružuju.
      </p>

      <img src={djakovica2} alt="Đakovica 2" />

      <p>
        Grad je ime dobio po manje poznatom gospodaru i vazalu Vuka Brankovića,
        Jakovu, koji je imao posede u tom području. Očuvan je njegov novac sa
        natpisom "Iakov", od kojeg je izvedeno ime "Đakov". Đakovica se kao
        naselje gradskog tipa razvila u srednjem veku. Njena geografska pozicija
        bila je veoma pogodna za razvoj zanatstva i trgovine. U 19. veku, grad
        se prostirao na obe obale reke koja prolazi kroz njega, a 1900. godine
        bilo je čak 12 mostova "dobro utvrđenih". U opširnom turskom popisu iz
        1485. godine, Đakovica se pominje kao selo sa 67 domaćinstava i seoskim
        popom. Većina ličnih imena u tom popisu bila su srpska, osim dva koja su
        verovatno bila albanskog porekla.
      </p>

      <img src={djakovica3} alt="Đakovica 3" />

      <p>
        Od 16. veka, u vreme obnovljene Pećke patrijaršije, u Đakovici je
        postojala Crkva Uspenja Bogorodice, koja je bila metoh manastira Dečana.
        Ktitor ove crkve bio je Stefan Uroš III Dečanski. Najverovatnije, iz ove
        crkve potiče veliko zvono sa natpisom na grčkom jeziku, koje se danas
        čuva u riznici manastira Dečana. Crkva je mala, prizemna, pravougaona
        građevina. Zgrada crkvenog konaka predstavlja lep primer stare gradske
        prizemne kuće iz 19. veka. U crkvi je bila smeštena vredna zbirka ikona
        i crkvenih predmeta i sasuđa iz 18. i 19. veka. Posebnu umetničku
        vrednost ima okovana ikona Uspenja Bogorodice iz 17. veka. Ova crkva je
        krajem 1967. godine registrovana kao spomenik kulture.
      </p>

      <img src={djakovica4} alt="Đakovica 4" />

      <p>
        Razvoj grada može se pratiti od kraja 16. veka, kada je nastala
        najstarija očuvana građevina, Hadum-džamija, oko koje je formirana
        čaršija. Ostale sačuvane građevine potiču iz kraja 19. ili prve polovine
        20. veka. Pored džamije, u istom kompleksu nalaze se mekteb, biblioteka
        i manje groblje. Kasnije su u istom kompleksu izgrađeni hanovi za
        trgovce i putnike, a postojalo je i tursko kupatilo koje je sada
        srušeno. Urbani kompleks stare čaršije upisan je 1955. godine u registar
        spomenika kulture Srbije.
      </p>

      <img src={djakovica5} alt="Đakovica 4" />

      <p>
        U Đakovici je bilo sedište kaimakama (sreskog poglavara) i sud, a tu su
        se nalazile i kasarna, pošta, telegrap i opštinska zgrada. Čaršija je
        bila podeljena na više delova; na desnoj obali nalazile su se Glavna i
        Žitna, dok su na levoj bile Mala, Drvarska, Ćerimova i Marvna. Na obali
        reke, 1900. godine, postojala je fabrika za "čićenje kože" (tabakanje) i
        nekoliko "prostih" mlinova. U 18. veku u tom području radila je srpska
        pravoslavna Bogoslovija.
      </p>
    </div>
  );
};
