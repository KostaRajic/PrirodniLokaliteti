import tisa1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/Tisa1.jpg";
import tisa2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/Tisa2.jpg";
import tisa3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/TIsa3.jpg";
import tisa4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/Tisa4.jpg";
import tisa5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/Tisa5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const RekaTisa = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={tisa1} alt="Tisa 1" />

      <h2>
        TISA REČNA I PRIRODNA OAZA
      </h2>

      <p style={{ paddingTop: "80px",marginTop: "-10px"  }}>
        Tisa je ukupne dužine 966 kilometara i tipična je ravničarska reka.
        Izvire u Karpatima i jedna je od najstarijih reka na svetu. Tok Tise
        deli se na tri dela: gornji tok od izvora, gde nastaje spajanjem Bele i
        Crne Tise, do ušća Samoša, zatim srednji tok, od ušća Samoša do ušća
        Moriša, kao i donji tok, od ušća Moriša do ušća u Dunav kod Slankamena.
      </p>

      <img src={tisa2} alt="Tisa 2" />

      <p style={{ marginTop: "-10px" }}>
        U Srbiji tok Tise iznosi oko 164 kilometra, od ušća u Dunav do
        srpsko-mađarske granice. Reka Tisa predstavlja prirodnu granicu između
        Bačke, na desnoj, i Banata na levoj obali, a pošto dodiruje i Srem na
        ušću kod Starog Slankamena, predstavlja pravu vojvođansku reku. Svojom
        širinom, Tisa predstavlja “žilu kucavicu” Vojvodine i mesto za odmor.
      </p>

      <img src={tisa5} alt="Tisa 3" />

      <p style={{ marginTop: "-10px" }}>
        U planinskom delu toka, Tisa je bistra i brza reka. Nedostatak jezera u
        oblastima Karpata utiče na to da su varijacije nivoa vode u Tisi
        izuzetno velike, sa tipično tri godišnja poplavna perioda. Ako se visok
        nivo vode u Tisi poklopi sa sličnom situacijom u Dunavu, Tisa nadire
        uzvodno, što izaziva velike poplave. Takva situacija je razorila Segedin
        proleća 1879. godine.
      </p>

      <img src={tisa3} alt="Tisa 4" />
      <p style={{ marginTop: "-10px" }}>
        Zahvaljujući širini i dubini korita i maloj brzini proticanja, Tisa je
        na srednjem, a naročito donjem toku i pre realizovanih regulacionih
        radova, predstavljala plovni put od regionalnog značaja. Tisa ima važnu
        ulogu u jeftinom rečnom transportu i na mađarskom i na srpskom delu
        toka. Nakon drastičnog skraćivanja korita i uspostavljanja dirigovanog
        režima na najvećem delu toka, plovidba na srednjoj i donjoj Tisi je
        postala bezbednija.
      </p>

      <img src={tisa4} alt="Tisa 5" style={{ marginBottom: "-10px" }} />
      <p>
        Pored povoljnih plovidbenih karakteristika i uslova plovidbe, Tisa
        predstavlja plovni put od izuzetnog značaja budući da je pritoka Dunava,
        koji predstavlja deo Evropske vodne magistrale između Severnog i Crnog
        mora.
      </p>
    </div>
  );
};
