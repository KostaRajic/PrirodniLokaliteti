import btjezero1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/btjezero1.jpg";
import btjezero2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/btjezero2.jpg";
import btjezero3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/btjezero3.jpg";
import btjezero4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/btjezero4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const BackoTopolskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={btjezero4} alt="Backotopolsko jezero 1" />

      <h2>
        BAČKOTOPOLSKO JEZERO
      </h2>

      <p>
        Jezero kod Bačke Topole, 2019. godine je
        proglašeno za najčistije u Vojvodini i u potpunosti je prilagođeno
        kupanju i letnjim zanimacijama. Jedno je od atraktivnih kupališta u
        Vojvodini, savršeno za letnje rashlađivanje i dobru zabavu.
      </p>

      <img src={btjezero2} alt="Backotopolsko jezero 2" />

      <p style={{ marginTop: "-10px" }}>
        Plaža je šljunkovita, sa odličnim prilazima, ima i dosta travnatih
        delova za sunčanje i odmaranje u hladu. Jezero je površine 226 hektara i
        dužine oko 5 km (duplo veće od Palićkog) i predstavlja pravi raj za
        kupače. Na više mesta postoje drveni molovi sa toboganima, idealni i za
        skakanje u vodu, pa je leti sve prepuno mališana i omladine.
      </p>

      <img src={btjezero1} alt="Backotopolsko jezero 3" />

      <p style={{ marginTop: "-10px" }}>
        Voda je prijatne temperature, po jakim vrućinama i mlaka, ali opet
        savršena da rashladi. Postoji i nekoliko tuševa i česmi sa pijaćom
        vodom, tako da ne morate da brinete ni o čemu, a tu su i spasioci koji
        vode računa o bezbednosti kupača.
      </p>

      <img src={btjezero3} alt="Backotopolsko jezero 4" />
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
