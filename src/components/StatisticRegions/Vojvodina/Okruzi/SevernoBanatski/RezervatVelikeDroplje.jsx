import vd1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/pasnjaciVD1.jpg";
import vd2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/pasnjaciVD2.jpg";
import vd3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/pasnjaciVD3.jpg";
import vd4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/pasnjaciVD4.jpg";
import droplja1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/droplja2.jpg";
import droplja2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/droplja3.jpg";
import droplja3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/droplja4.jpg";
import droplja4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/droplja5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";


export const RezervatVelikeDroplje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={vd1} alt="Rezervat Velike Droplje 1" />

      <h2>SPECIJALNI REZERVAT "PAŠNJACI VELIKE DROPLJE"</h2>

      <p>
        Specijalni rezervoat Pašnjaci velike droplje nalazi se na severu Banata,
        na prostranoj aluvijalnoj ravni reke Zlatice, između novokneževačke i
        krsturko-siriške lesne terase. Rezervat čine 3 odvojene celine. Najveći
        je Jaroš (tromeđa sela Mokrin, Jazovo i Sajan), zatim Siget (pored
        Banatskog Aranđelova) i najmanji Kočovat (pored sela Vrbiца).
      </p>

      <img src={vd2} alt="Rezervat Velike Droplje 2" />

      <p style={{ marginTop: "-10px" }}>
        Osnovni značaj Specijalnog rezervata Pašnjaci velike droplje je što se u
        njemu nalazi poslednja populacija velike droplje (lat. Otis tarda) u
        Srbiji. Ova vrsta nalazi se na „Crvenoj listi“ ugroženih vrsta i strogo
        je zaštićena u Srbiji. Procenuje se da je početkom 20. veka u Vojvodini
        živelo preko 1000 jedinki velike droplje.
      </p>

      <div
        className="fourImages"
      >
        <img src={droplja1} alt="Velika droplja 1" />
        <img src={droplja2} alt="Velika droplja 2" />
        <img src={droplja3} alt="Velika droplja 3" />
        <img src={droplja4} alt="Velika droplja 4" />
      </div>

      <p style={{ marginTop: "-10px" }}>
        Pored velike droplje, rezervat je stanište i sledećih vrsta ptica: eja
        livadarka, siva vetruška, stepski sokol, prepelica, ždral, ritska sova,
        pupavac, modrovrana, stepska trepteljka, žuta pliska, obična beloguza,
        obična travarka, rusi svračak, sivi svračak i velika strnadica.
      </p>

      <img src={vd3} alt="Rezervat Velike Droplje 3" />
      <p style={{ marginTop: "-10px" }}>
        Najveću površinu Rezervata zauzima slatinsko zemljište, pa je i
        vegetacija slatinska. Biljne zajednice devesilje (Peucedanum officinale)
        i zvezdana, "slanice" (Tripolium pannonicum) posebno se ističu na ovom
        području.
      </p>

      <img
        src={vd4}
        alt="Rezervat Velike Droplje 4"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Danas je njihov broj spao na par desetina jedinki. Područje rezervata
        predstavlja kombinaciju ravničarskih steppskih, slatinskih i barskih
        ekosistema. To je očuvani panonski predel sa velikim brojem zaštićenih
        biljnih i životinjskih vrsta.
      </p>
    </div>
  );
};
