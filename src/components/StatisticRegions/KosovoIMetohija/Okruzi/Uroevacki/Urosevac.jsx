import urosevac1 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/urosevac1.jpg";
import urosevac2 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/urosevac2.jpg";
import urosevac3 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/urosevac3.jpg";
import urosevac4 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/urosevac4.jpg";
import urosevac5 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/urosevac5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { urosevackiOkrugPathRoutes } from "./UrosevackiOkrugPathRoutes";

export const Urosevac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(urosevackiOkrugPathRoutes.home)} />
      <header></header>
      <img src={urosevac1} alt="Prizren 1" />

      <h2>Uroševac</h2>

      <p style={{ paddingTop: "50px" }}>
        Grad Uroševac je bio naseljen još od praistorije, što potvrđuju tragovi
        kultura kao što su Starčevo, Vinča i Baden. Tokom osmanskog perioda,
        Uroševac je bio važan trgovački centar na ruti između Beograda i Soluna.
        Kroz istoriju, grad je bio poznat po verskoj i kulturnoj toleranciji,
        gde su različite zajednice živele u suživotu. Nakon konflikta 1999.
        godine, u blizini grada je izgrađena američka vojna baza Bondstil. To je
        najveća i najskuplja strana vojna baza koju su Sjedinjene Američke
        Države podigle u jugoistočnoj Evropi još od vremena Vijetnamskog rata.
      </p>

      <img src={urosevac2} alt="Prizren 2" />

      <p>
        Uroševac je poznat i po jedinstvenom geografskom fenomenu – bifurkaciji
        reke. Reka Nerodimka se u jednom delu svog toka razdvaja na dve grane
        koje završavaju u različitim morima, što predstavlja retku hidrografsku
        pojavu u svetu. Grad se nalazi na južnom obodu Kosovske kotline, u
        podnožju Šar-planine, na nadmorskoj visini od 573 metra. Smešten je na
        obalama reke Nerodimke i leži na važnoj saobraćajnoj magistrali koja
        povezuje Prištinu i Skoplje. Ova geografska pozicija doprinosi
        strateškom značaju grada u regionu.
      </p>

      <img src={urosevac3} alt="Kameni most u Prizrenu" />

      <p>
        Grad, koji je tokom osmanske vladavine nosio ime Ferizović, bio je tek
        malo veće selo sve do 1873. godine, kada je kroz njega prošla železnica
        na pravcu Beograd–Solun. Tada je započeo njegov brži razvoj. Ime
        Ferizović potiče od hotela koji je postojao pre izgradnje pruge, a bio
        je u vlasništvu Feriza Šasivarija.
        <br />
        <br />
        Najstarija etno-kulturna zajednica koja je naseljavala prostor Kosova i
        Metohije u 6. i 5. milenijumu pre nove ere bila je kultura Starčeva.
        Njeni pripadnici gradili su naselja pored reka i na rečnim terasama, a
        kuće su pravili od pruća i blata. Bili su pretežno zemljoradnici i
        bavili se oranjem i uzgojem biljaka.
      </p>

      <img src={urosevac5} alt="Prizrenska Bogoslovija" />

      <p>
        Nakon Starčevačke kulture, na teritoriji Kosova i Metohije nastanjuje se
        Vinska kultura, koja je došla oko 4300. godine pre nove ere. Novi
        doseljenici su, kao i prethodnici, gradili svoja naselja u blizini reka.
        Njihova naselja su bila neuredna, sa gustim redovima vrba i kućama od
        blata. Ostatci njihove materijalne kulture, prepoznatljivi po različitim
        oblicima keramike i brojnim figurama od pečene gline, ukazuju na visoki
        nivo razvijenosti njihove kulture.
        <br />
        <br />
        Nakon Vinske kulture, usledila je kultura Bubanji-Ham, koja je došla sa
        istoka, sa područja današnje Bugarske. Ova etno-kulturna grupa je,
        dolaskom u region pre kraja 6. milenijuma pre nove ere, uništila naselja
        Vinske kulture. Ostatci njihove materijalne kulture nisu sačuvani do
        današnjih dana.
      </p>

      <img src={urosevac4} alt="Bogorodica Ljeviška" />

      <p>
        Aqua park u Uroševcu je popularno odredište za sve ljubitelje vodenih
        sportova i uživanja u vodi. Sa brojnim bazenima, toboganima i drugim
        sadržajima, idealan je za porodične izlete i opuštanje u letnjim
        mesecima. Pored toga, aqua park nudi i razne sadržaje za decu, kao i
        restorane i kafiće za uživanje u osvežavajućim napicima i obrocima.
      </p>
    </div>
  );
};
