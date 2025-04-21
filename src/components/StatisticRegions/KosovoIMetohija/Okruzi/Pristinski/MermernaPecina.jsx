import mermernaPecina1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/MermernaPecina/mermernaPecina1.jpg";
import mermernaPecina2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/MermernaPecina/mermernaPecina2.jpg";
import mermernaPecina3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/MermernaPecina/mermernaPecina3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";

export const MermernaPecina = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(pristinskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={mermernaPecina1} alt="Mermerna Pećina 1" />

      <h2>Mermerna Pećina</h2>

      <p style={{ paddingTop: "50px" }}>
        Mermerna pećina se nalazi u opštini Lipljan, u selu Donja Gadimlja, oko
        20 km južno od Prištine i 360 km od Beograda. Pećina se smeštа na
        jugoistočnim padinama Kopaoničkog masiva, konkretno na planini Žegovac.
        Otvor pećine je na visini od 590 metara nadmorske visine, iznad korita
        Gadimske reke. Ime je dobila po mermeru, odnosno krečnjaku od kojeg je
        nastala, a stene koje je čine potiču iz Paleozoika. Za posetioce je
        uređeno 440 metara kanala, dok ukupna dužina pećine iznosi 1.260 metara.
      </p>

      <img src={mermernaPecina2} alt="Mermerna Pećina 2" />

      <p>
        Pećina je slučajno otkrivena 1969. godine, prilikom vađenja građevinskog
        kamena, ali je u to vreme bila uglavnom ispunjena glinom. Da bi bila
        prilagođena za turizam, veliki deo nanosa je uklonjen, što je dovelo do
        promene mikroklime. Temperatura u pećini varira od 10 do 15°C, u
        zavisnosti od galerije. Pećina ima četiri galerije. Ulazna galerija se
        sastoji od dva horizonta, ukupne dužine 180 metara. Zapadna galerija je
        u obliku lavirinta, sa glavnim kanalom i nekoliko većih i manjih
        proširenja, ukupne dužine 220 metara. Severna galerija sadrži brojne
        hodnike, kanale i dvorane, a u jednoj od dvorana nalazi se basen
        Kristalnog jezera. Istočna galerija obuhvata Dugi i Plavi kanal (koji je
        dobio ime po nakitu plave boje).
      </p>

      <img src={mermernaPecina3} alt="Mermerna Pećina 3" />

      <p>
        Mermerna pećina je jedinstven prirodni fenomen, jer je formirana od
        mermernih litica koje su nastale metamorfozom krečnjaka, a ukrasi
        variraju u bojama od bele do crvene. Pećina podseća na pravi lavirint,
        sa brojnim kanalima koji su ispunjeni stalaktitima, stalagmitima,
        kalcitnim stubovima i bigrenim basenima. Posebnu pažnju privlači
        aragonitski nakit snežno bele boje. Pećinska jezera se nalaze gotovo
        svuda u pećini, ukupno 29. Takođe, postoje i dva podzemna toka – jedan u
        Dvorani suza, a drugi u Zapadnoj galeriji. Ovi tokovi su kanalisani, a
        njihove vode izlaze u Gadimsku reku.
      </p>
    </div>
  );
};
