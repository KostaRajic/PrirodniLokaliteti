import manastirBlagovestenje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/desktop/manastirBlagovestenje1.jpg";
import manastirBlagovestenje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/desktop/manastirBlagovestenje2.jpg";
import manastirBlagovestenje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/desktop/manastirBlagovestenje3.jpg";
import manastirBlagovestenje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/mobile/MmanastirBlagovestenje1.jpg";
import manastirBlagovestenje22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/mobile/MmanastirBlagovestenje2.jpg";
import manastirBlagovestenje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/mobile/MmanastirBlagovestenje3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const ManastirBlagovestenjeRudnicko = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${manastirBlagovestenje11} 400w, ${manastirBlagovestenje1} `} alt="Manastir Blagoveštenje Rudničko 1" />

      <h2 style={{ color: "white" }}>Manastir Blagoveštenje Rudničko</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Blagoveštenje Rudničko, smešten na severnim obroncima planine
        Rudnik, u klisuri Blagoveštenske reke, šest kilometara zapadno od
        Stragara, jedno je od značajnih duhovnih mesta Srbije. Osnovan je oko
        1400. godine, a posvećen je Blagoveštenju Presvete Bogorodice.
      </p>

      <img srcSet={`${manastirBlagovestenje22} 400w, ${manastirBlagovestenje2} `} alt="Manastir Blagoveštenje Rudničko 2" />

      <p>
        Manastir je tokom svoje istorije više puta stradao i obnavljan. Tokom
        Prvog srpskog ustanka, 1795. godine, u njemu je skrivano oružje i barut,
        a 1796. godine u njemu je učinjen oproštaj Karađorđu za ubistvo oca.
        Danas je manastir aktivni ženski manastir, deo Eparhije šumadijske
        Srpske pravoslavne crkve. U njemu se nalazi crkva sa freskama iz 14. i
        15. veka, a kompleks uključuje konake i druge prateće objekte.
      </p>

      <img srcSet={`${manastirBlagovestenje33} 400w, ${manastirBlagovestenje3} `} alt="Manastir Blagoveštenje Rudničko 3" />

      <p>
        Manastir Blagoveštenje Rudničko predstavlja značajan duhovni centar i
        kulturno dobro, te je mesto koje privlači posetioce svojom istorijom,
        arhitekturom i prirodnim okruženjem.
      </p>
    </div>
  );
};
