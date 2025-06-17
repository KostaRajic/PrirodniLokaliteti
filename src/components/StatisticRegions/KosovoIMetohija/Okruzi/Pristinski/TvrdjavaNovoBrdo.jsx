import novoBrdo1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/desktop/tvrdjavaNovoBrdo1.jpg";
import novoBrdo2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/desktop/tvrdjavaNovoBrdo2.jpg";
import novoBrdo3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/desktop/tvrdjavaNovoBrdo3.jpg";
import novoBrdo4 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/desktop/tvrdjavaNovoBrdo4.jpg";
import novoBrdo11 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/mobile/MtvrdjavaNovoBrdo1.jpg";
import novoBrdo22 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/mobile/MtvrdjavaNovoBrdo2.jpg";
import novoBrdo33 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/mobile/MtvrdjavaNovoBrdo3.jpg";
import novoBrdo44 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/mobile/MtvrdjavaNovoBrdo4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";

export const TvrdjavaNovoBrdo = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pristinskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${novoBrdo11} 400w, ${novoBrdo1} `} alt="Tvrđava Novo Brdo 1" />

      <h2>Tvrđava Novo Brdo</h2>

      <p style={{ paddingTop: "50px" }}>
        Novo Brdo je srednjovekovna tvrđava koja se nalazi u Srbiji, 20 km
        istočno od Prištine, odnosno 30–35 km severno od Gnjilana, kod
        istoimenog naselja. Tvrđava je sagrađena na usamljenom vrhu Male planine
        (1.124 m nadmorske visine), koji je sa istoka jedini bio pristupačan.
        Ovaj vrh se nalazi između reke Prilepnice, Novobrdske reke i Krive reke,
        koje su leve pritoke Binačke Morave.
        <br />
        <br />
        Novo Brdo ima veliki značaj za proučavanje srednjovekovnih utvrđenja,
        gradova i urbanizacije u srpskim zemljama tog perioda. Tvrđava je važan
        arheološki spomenik, koji svedoči o ekonomskom napretku Srbije u
        srednjem veku.
      </p>

      <img srcSet={`${novoBrdo22} 400w, ${novoBrdo2} `} alt="Tvrđava Novo Brdo 2" />

      <p>
        Tvrđava Novo Brdo sagrađena je početkom 14. veka kako bi štitila bogato
        rudarsko područje, u kojem su se eksploatisali gvožđe, olovo, srebro i
        zlato. Od sredine 14. veka, ta oblast postaje najvažniji rudnik u
        Srbiji, a 1349. godine počinje da kova sopstveni srebrni novac. Najveći
        procvat tvrđava i rudnici doživljavaju u vreme despotovine, kada su
        Novobrdski rudnici, pod upravom despota Đurađa (1427–1456), donosili
        između 50.000 i 200.000 zlatnih dukata godišnje, prema različitim
        izvorima. Okolina tvrđave prepuna je ostataka naselja i rudnika iz tog
        perioda, a pristup celom području bio je dodatno zaštićen utvrđenjima u
        Prizrenu i Priljepcu, koja su štitila najlakši prilaz novobrdskoj
        oblasti sa juga, iz doline Binačke Morave. Sama tvrđava se sastoji od
        Gornjeg Grada, nepravilnog šestougla na vrhu brda, i Donjeg Grada, koji
        se lepezasto širi niz padinu ka zapadu. Ceo grad bio je okružen suvim
        šancem sa severne i zapadne strane. Tvrđava je dokazala svoju snagu
        tokom više osmanlijskih opsada, naročito tokom dvogodišnje opsade
        (1439–1441), u periodu kada srpska despotovina više nije postojala.
      </p>

      <img srcSet={`${novoBrdo33} 400w, ${novoBrdo3} `} alt="Tvrđava Novo Brdo 3" />

      <p>
        Novo Brdo se sa estetskog aspekta izdvaja korišćenjem mrkocrvene breče,
        koja je oblikovana u pravilne kvadere i korišćena za izgradnju uglova
        kula i prolaza kapija, dok je ostatak tvrđave napravljen od običnog
        sivog kamenja, uglavnom krečnjaka. Posebnu lepotu utvrđenju daje veliki
        krst na zapadnoj kuli Gornjeg Grada, izveden u mrkocrvenoj breči, koji
        je postao simbol tvrđave. Iako je danas ceo prostor tvrđave u
        ruševinama, ostaci kula i dalje svedoče o njegovoj monumentalnosti i
        nekadašnjem bogatstvu.
      </p>

      <img srcSet={`${novoBrdo44} 400w, ${novoBrdo4} `} alt="Tvrđava Novo Brdo 4" />

      <p>
        Jedan od glavnih problema novobrdske tvrđave su stalni pokušaji da se
        pronađe zakopano blago, što dovodi do uništavanja važnih arheoloških
        slojeva. Ovaj problem je postao još izraženiji nakon dolaska UNMIK-a i
        KFOR-a u južnu srpsku pokrajinu, jer su pripadnici poljskih snaga, koji
        su bili deo UNMIK-a, nekoliko puta vršili amaterska iskopavanja na
        području tvrđave.
      </p>
    </div>
  );
};
