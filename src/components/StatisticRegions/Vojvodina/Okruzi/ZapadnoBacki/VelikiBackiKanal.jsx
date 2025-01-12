import VBK2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/VBK2.jpg";
import VBK3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/VBK3.jpg";
import VBK1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/VBK4.jpg";
import VBK5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/VBK5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const VelikiBackiKanal = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <div className="vbkBackground">
        <h2>VELIKI BAČKI KANAL</h2>
      </div>

      <p>
        Veliki bački kanal je deo Hidrosistema Dunav-Tisa-Dunav, smešten u
        Vojvodini, i predstavlja jedan od najznačajnijih i najstarijih kanala u
        ovom regionu. Izgrađen u 18. veku, prvenstveno radi unapređenja plovidbe
        i odvoda viška vode, kanal povezuje reke Dunav i Tisu, prolazeći kroz
        više vojvođanskih gradova i sela, uključujući Sombor, Vrbas i Kulu.
      </p>

      <img src={VBK2} alt="Veliki Backi Kanal2" />

      <p style={{ marginTop: "-10px" }}>
        Prokopavanje Velikog bačkog kanala predstavljalo je jedan od
        najznačajnijih poduhvata u istoriji Sombora, ali i cele Bačke. Kanal je
        bio posebno važan za regulisanje nivoa voda u gradskom ataru, pre svega
        na oranicama, pašnjacima i livadama.
      </p>

      <img src={VBK3} alt="Veliki Backi Kanal3" />

      <p style={{ marginTop: "-10px" }}>
        Njegovim prokopavanjem značajno je smanjen broj bara, močvara, mrtvaja,
        jezeraca i rečica koje su, povremeno ili stalno, ugrožavale zemljište u
        ataru grada i okolnih naselja. Samim tim, znatno su umanjene i stalne
        pretnje od malaričnih zaraznih bolesti, koje su decenijama i vekovima
        ranije često desetkovale ovdašnje stanovništvo i domaće životinje.
      </p>

      <img
        src={VBK1}
        alt="Veliki Backi Kanal5"
        style={{ marginBottom: "-10px" }}
      />
      <p>
        Veliki bački kanal je značajan i kao stanište za raznovrstan biljni i
        životinjski svet, što ga čini važnim za očuvanje biodiverziteta u
        Vojvodini. Njegova obala pruža priliku za šetnje, biciklizam i ribolov,
        dok istorijski mostovi i infrastruktura duž kanala svedoče o njegovom
        kulturnom i tehničkom značaju.
      </p>
    </div>
  );
};
