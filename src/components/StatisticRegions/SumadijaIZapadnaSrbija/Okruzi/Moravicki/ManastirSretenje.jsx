import sretenje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/desktop/manastirSretenje1.jpg";
import sretenje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/desktop/manastirSretenje2.jpg";
import sretenje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/desktop/manastirSretenje3.jpg";
import sretenje4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/desktop/manastirSretenje4.jpg";
import sretenje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/mobile/MmanastirSretenje1.jpg";
import sretenje22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/mobile/MmanastirSretenje2.jpg";
import sretenje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/mobile/MmanastirSretenje3.jpg";
import sretenje44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/mobile/MmanastirSretenje4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";

export const ManastirSretenje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home)} style={{fill: 'white'}}/>
      <header></header>
      <img srcSet={`${sretenje11} 400w, ${sretenje1} `} alt="Manastir Sretenje" />

      <h2 style={{ color: "white" }}>Manastir Sretenje</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Sretenje nalazi se u Dučalovićima, mestu u opštini Lučani, pod
        samim vrhom planine Ovčar na 800 metara nadmorske visine. Prema pisanim
        izvorima, manastir Sretenje prvi put se pominje u manastiru Jovanju
        1571. godine, a spominje se i njegovo rušenje 1623. godine, što upućuje
        na to da je postojao i ranije. Prema predanju, sa vrha Ovčara bačena je
        kruna (korona), a gledalo se gde će da padne; na tom mestu je trebalo da
        se sagradi crkva. Zbog ovog događaja, brdo iznad samog manastira nosi
        ime Koronsko brdo. Manastir Sretenje predstavlja nepokretno kulturno
        dobro, spomenik kulture od velikog značaja. Takođe, postoji metoh
        manastira Sretenje u selu Pakovraće.
      </p>

      <img srcSet={`${sretenje22} 400w, ${sretenje2} `} alt="Manastir Sretenje na Ovcaru i Kablaru" />

      <p>
        Manastirska crkva je obnovljena zahvaljujući trudu monaha Nikifora
        Maksimovića, koji je nakon obnove manastira Preobraženja 1818. godine,
        započeo obnovu manastira Sretenje. Tada su obnovljeni crkva, konak i
        bedemi. Po želji kneza Miloša, zbog velikih zasluga, Nikifor Maksimović
        je postavljen za arhimandrita manastira Sretenje, a kasnije je bio
        hirotonisan za Episkopa užičkog. Upokojio se 1853. godine i sahranjen je
        u crkvi manastira Sretenje.
      </p>

      <img srcSet={`${sretenje33} 400w, ${sretenje3} `} alt="Manastir Sretenje u moravickom okrugu" />

      <p>
        Manastirska crkva je izgrađena kao jednobrodna građevina, sa dubokom,
        spolja petougaonim oltarskim apsidama, plitkim pravougaonim pevnicama i
        pripratom gotovo kvadratne osnove, iznad koje je podignuta kula-zvonara.
        Crkva je pokrivena polukružnim svodom, dok priprata ima slepu kupolu.
        Fasadna dekoracija je jednostavna, sa kamenim soklom i blago
        profilisanim krovnvim vencem. Donji delovi naosa, oltarske apside i
        zidane oltarske pregrade, kao i mermerna roseta amvona u obliku
        šestokrake zvezde sa okvirom od srcolikih listova bršljana, datuju
        manastirsku crkvu na kraj 16. veka.
      </p>

      <img srcSet={`${sretenje44} 400w, ${sretenje4} `} alt="Manastir Sretenje 2" />

      <p>
        Živopis naosa, oltarskog prostora i zidane oltarske pregrade iz 1844.
        godine delo je Živka Pavlovića iz Požarevca, dok je Nikola Janković
        autor slikane dekoracije priprate. Na strogost u izboru, kako
        ikonografskih tako i likovnih rešenja, ovog konvencionalnog slikarskog
        stila, sa tek ponekim elementima baroka, uticao je duboko religiozan
        Nikifor Maksimović. Oltarska freska prikazuje sveštenika kome je anđeo
        vezao ruke jer je nedostojan i nesprema da služi Svetu Liturgiju.
        Manastirski kompleks je ograđen zidom 1845. godine. Većina konaka, kao i
        imanje sa vinogradom u Pakovraču, pripadaju vremenu užičkog episkopa.
      </p>
    </div>
  );
};
