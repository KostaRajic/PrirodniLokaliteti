import ubozac1 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/desktop/ubozac1.jpg";
import ubozac2 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/desktop/ubozac2.jpg";
import ubozac3 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/desktop/ubozac3.jpg";
import ubozac4 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/desktop/ubozac4.jpg";
import ubozac11 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/mobile/Mubozac1.jpg";
import ubozac22 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/mobile/Mubozac2.jpg";
import ubozac33 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/mobile/Mubozac3.jpg";
import ubozac44 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/mobile/Mubozac4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { gnjilanskiOkrugPathRoutes } from "./GnjilanskiOkrugPathRoutes";

export const ManastirUbozac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(gnjilanskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${ubozac11} 400w, ${ubozac1} `} alt="Ostaci Manastira Ubožac" />

      <h2>Ostaci Manastira Ubožac</h2>

      <p style={{ paddingTop: "50px" }}>
        Ubožac se nalazi u ataru sela Močare, blizu Novog Brda. Danas je poznat
        pod imenom Rđavac.
        <br />
        <br />
        Ranije se smatralo da je manastir izgrađen sredinom 14. veka i da
        predstavlja prethodnicu moravskog stila, a prema predaji, njegov ktitor
        bila je Ana Neda, sestra kralja Stefana Dečanskog.
        <br />
        <br />
        Međutim, najnovija istraživanja su pokazala da je manastir podignut
        sredinom 16. veka, najverovatnije 1548. godine, a njegov ktitor bio je
        ohriđanski arhiepiskop Prohor.
      </p>

      <img srcSet={`${ubozac22} 400w, ${ubozac2} `} alt="Ostaci Manastira Ubožac 2" />

      <p>
        Manastirski kompleks je sačuvan u ruševinama i predstavlja jedan od
        najreprezentativnijih primera gradnje iz 16. veka. Njegova crkva je
        posvećena Bogorodičinom Vavedenju i građena je od kamena, bigre i opeke.
        Crkva je bila oslikana, ali danas ne postoje tragovi fresaka.
        <br />
        <br />
        Pored impozantne manastirske crkve, u kompleksu je postojala i spratna
        građevina, čije je prizemlje bilo namenjeno ekonomskim funkcijama, dok
        je na spratu najverovatnije bila trpezarija. U ostalim delovima
        kompleksa nalazile su se verovatno monaške kapele.
      </p>

      <img srcSet={`${ubozac33} 400w, ${ubozac3} `} alt="Ostaci Manastira Ubožac 3" />

      <p>
        Zabeleženo je da je 1586. godine u Ubošcu preminuo i sahranjen pećki
        patrijarh Savatije. Nakon toga, manastir je bio posebno vezan za
        patrijarha Paisija, koji je više puta posećivao ovu svetinju.
        <br />
        <br />
        Manastir Ubožac je verovatno napustio krajem 17. veka, a od tada nije
        bilo obnova.
      </p>

      <img srcSet={`${ubozac44} 400w, ${ubozac4} `} alt="Ostaci Manastira Ubožac 3" />

      <p>
        Arheološki i konzervatorski radovi na manastiru sprovedeni su između
        1963. i 1967. godine.
        <br />
        <br />U poslednjim godinama poraslo je interesovanje šire javnosti,
        pravoslavnih vernika i ljubitelja istorije za ovu svetinju, a posetioci
        izražavaju želju da manastir bude obnovljen u budućnosti.
      </p>
    </div>
  );
};
