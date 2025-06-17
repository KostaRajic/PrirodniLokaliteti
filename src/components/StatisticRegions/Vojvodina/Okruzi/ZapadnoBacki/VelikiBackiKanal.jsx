import VBK2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/desktop/VBK2.jpg";
import VBK3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/desktop/VBK3.jpg";
import VBK1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/desktop/VBK4.jpg";
import VBK5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/desktop/VBK5.jpg";
import VBK22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/mobile/MVBK2.jpg";
import VBK33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/mobile/MVBK3.jpg";
import VBK11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/mobile/MVBK4.jpg";
import VBK55 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/mobile/MVBK5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";

export const VelikiBackiKanal = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home)} />
      <header></header>
      
      <img srcSet={`${VBK55} 400w, ${VBK5} `} alt="Veliki Backi Kanal 1" />
        <h2>Veliki Backi Kanal</h2>

      <p>
        Veliki bački kanal je deo Hidrosistema Dunav-Tisa-Dunav, smešten u
        Vojvodini, i predstavlja jedan od najznačajnijih i najstarijih kanala u
        ovom regionu. Izgrađen u 18. veku, prvenstveno radi unapređenja plovidbe
        i odvoda viška vode, kanal povezuje reke Dunav i Tisu, prolazeći kroz
        više vojvođanskih gradova i sela, uključujući Sombor, Vrbas i Kulu.
      </p>

      <img srcSet={`${VBK22} 400w, ${VBK2} `} alt="Veliki Backi Kanal 2" />

      <p>
        Prokopavanje Velikog bačkog kanala predstavljalo je jedan od
        najznačajnijih poduhvata u istoriji Sombora, ali i cele Bačke. Kanal je
        bio posebno važan za regulisanje nivoa voda u gradskom ataru, pre svega
        na oranicama, pašnjacima i livadama.
      </p>

      <img srcSet={`${VBK33} 400w, ${VBK3} `} alt="Veliki Backi Kanal 3" />

      <p>
        Njegovim prokopavanjem značajno je smanjen broj bara, močvara, mrtvaja,
        jezeraca i rečica koje su, povremeno ili stalno, ugrožavale zemljište u
        ataru grada i okolnih naselja. Samim tim, znatno su umanjene i stalne
        pretnje od malaričnih zaraznih bolesti, koje su decenijama i vekovima
        ranije često desetkovale ovdašnje stanovništvo i domaće životinje.
      </p>

      <img
        srcSet={`${VBK11} 400w, ${VBK1} `}
        alt="Veliki Backi Kanal 5"
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
