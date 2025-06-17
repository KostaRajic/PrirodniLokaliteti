import blagovestenje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/desktop/manastirBlagovestenje1.jpg";
import blagovestenje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/desktop/manastirBlagovestenje2.jpg";
import blagovestenje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/desktop/manastirBlagovestenje3.jpg";
import blagovestenje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/mobile/MmanastirBlagovestenje1.jpg";
import blagovestenje22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/mobile/MmanastirBlagovestenje2.jpg";
import blagovestenje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/mobile/MmanastirBlagovestenje3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";

export const ManastirBlagovestenje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${blagovestenje22} 400w, ${blagovestenje2} `} alt="Manastir Blagoveštenja na Kablaru" />

      <h2 style={{ color: "white" }}>Manastir Blagoveštenja</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Blagoveštenje smešten je u podnožju Kablara. Tačan datum
        osnivanja nije poznat, ali određeni arhitektonski elementi Rške škole
        sugerišu da je možda podignut u 12. ili 13. veku. Natpis iznad ulaznih
        vrata hrama, posvećenog Blagovestima Presvete Bogorodice, navodi da je
        manastir osnovan 1602. godine „trudom i nastojanjem igumana Nikodima“.
      </p>

      <img srcSet={`${blagovestenje11} 400w, ${blagovestenje1} `} alt="Manastir Blagoveštenja na Kablaru 2" />

      <p>
        Podaci o freskopisanju hrama nalaze se na pilastru severnog zida, gde je
        zapisano da su freske urađene 1632. godine za vreme igumana Mihaila i
        patrijarha Pajsija. Jedna od najlepših scena je prikaz Strahovitog suda,
        koja se nalazi na spoljnim zidovima zapadne strane crkve. Ikoanositas sa
        bogatim duborezom iz ovog perioda smatra se jednim od najlepših iz 17.
        veka. Jovan Vujic je 1826. godine zabeležio da je manastir bio spaljen.
      </p>

      <img srcSet={`${blagovestenje33} 400w, ${blagovestenje3} `} alt="Manastir Blagoveštenja na Kablaru 3" />

      <p>
        Feliks Kanic je 1866. godine zapisao da je uživao u gostoprimstvu
        Blagoveštenijskog bratstva, što je bio dokaz da je svetiinja bila
        obnovljena. Međutim, već 1895. godine crkva je bila u toliko lošem
        stanju da u njoj nije bilo moguće obavljati bogosluženje. Tek 1932.
        godine, za vreme igumana Mitrofana, crkva je obnovljena i ponovo
        pokrivena. U ovom manastiru je blaženopočivši patrijarh Pavle primio
        monaški postrig 1948. godine.
      </p>
    </div>
  );
};
