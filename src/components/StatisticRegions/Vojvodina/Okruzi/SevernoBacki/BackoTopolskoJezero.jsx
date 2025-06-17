import btjezero1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/desktop/btjezero1.jpg";
import btjezero2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/desktop/btjezero2.jpg";
import btjezero3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/desktop/btjezero3.jpg";
import btjezero4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/desktop/btjezero4.jpg";
import btjezero11 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/mobile/Mbtjezero1.jpg";
import btjezero22 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/mobile/Mbtjezero2.jpg";
import btjezero33 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/mobile/Mbtjezero3.jpg";
import btjezero44 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/mobile/Mbtjezero4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";

export const BackoTopolskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(servernoBackiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${btjezero44} 400w, ${btjezero4} `} alt="Backotopolsko jezero 1" />

      <h2>
        Bačkotopolsko Jezero
      </h2>

      <p>
        Jezero kod Bačke Topole, 2019. godine je
        proglašeno za najčistije u Vojvodini i u potpunosti je prilagođeno
        kupanju i letnjim zanimacijama. Jedno je od atraktivnih kupališta u
        Vojvodini, savršeno za letnje rashlađivanje i dobru zabavu.
      </p>

      <img srcSet={`${btjezero22} 400w, ${btjezero2} `} alt="Backotopolsko jezero 2" />

      <p>
        Plaža je šljunkovita, sa odličnim prilazima, ima i dosta travnatih
        delova za sunčanje i odmaranje u hladu. Jezero je površine 226 hektara i
        dužine oko 5 km (duplo veće od Palićkog) i predstavlja pravi raj za
        kupače. Na više mesta postoje drveni molovi sa toboganima, idealni i za
        skakanje u vodu, pa je leti sve prepuno mališana i omladine.
      </p>

      <img srcSet={`${btjezero11} 400w, ${btjezero1} `} alt="Backotopolsko jezero 3" />

      <p>
        Voda je prijatne temperature, po jakim vrućinama i mlaka, ali opet
        savršena da rashladi. Postoji i nekoliko tuševa i česmi sa pijaćom
        vodom, tako da ne morate da brinete ni o čemu, a tu su i spasioci koji
        vode računa o bezbednosti kupača.
      </p>

      <img srcSet={`${btjezero33} 400w, ${btjezero3} `} alt="Backotopolsko jezero 4" />
      <p style={{ marginTop: "-28px", position: "absolute" }}>
        U hladovitom delu nalazi se i veliko dečije igralište, sa trambolinom,
        ljuljaškama i penjalicama, a ostali hladoviti delovi omiljeni su
        društvima koji roštiljaju ili prave kotlić. Takođe su na raspolaganju i
        razni sportski tereni, te svako može da nađe zabavu kakva mu najviše
        prija.
      </p>
    </div>
  );
};
