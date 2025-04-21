import ljuboten1 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/ljuboten1.jpg";
import ljuboten2 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/ljuboten2.jpg";
import ljuboten3 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/ljuboten3.jpg";
import ljuboten5 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/ljuboten5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { urosevackiOkrugPathRoutes } from "./UrosevackiOkrugPathRoutes";

export const Ljuboten = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(urosevackiOkrugPathRoutes.home)} />
      <header></header>
      <img src={ljuboten1} alt="Ljuboten Šar Planina 1" />

      <h2>Ljuboten Šar Planina</h2>

      <p style={{ paddingTop: "50px" }}>
        Ljuboten (mkd. Ljuboten, alb. Luboten) je jedan od vrhova na
        Šar-planini, koji se uzdiže na 2.498 metara. Ovaj vrh čini granicu
        između Srbije i Severne Makedonije. Ivan Jastrebov je zabeležio da je
        put od sela Štrpca, sa samog podnožja planine, do vrha Ljubotena dug oko
        pet sati hoda. Sa strane Kacanika, vrh Ljubotena je blago nagnut, dok je
        sa strane Štrpca izuzetno strm. Do vrha se, u poslednjem delu, mora
        penjati gotovo na sve četiri.
      </p>

      <img src={ljuboten2} alt="Ljuboten Šar Planina 2" />

      <p>
        Na vrhu Ljubotena nalazi se ravno područje od oko 4 kvadratna hvata, sa
        spektakularnim pogledom u svim pravcima. Sa ovog mesta mogu se videti
        Kacanik, Skoplje, ispod Tefovsko polje, Gostivar, celo Podrimlje,
        Dečani, Peć, Đakovica, Priština i Gnjilane. Prema Jastrebovu, nema
        boljeg mesta sa kojeg se može videti čitava Stara Srbija, a Ljuboten je
        njen centralni deo.
      </p>

      <img src={ljuboten3} alt="Ljuboten Šar Planina 3" />

      <p>
        Ljubotensko jezero se nalazi oko sat vremena hoda od podnožja vrha. Sa
        južne, zapadne i severne strane je zatvoreno strmim stenama, dok je sa
        istočne strane otvoreno i pruža pogled sa Ljubotenskog vrha. Jezero nije
        veliko, a voda je čista i bistra. Iz njega izvire reka Lepenac. U
        podnožju planine, pored Štrpca, nalazi se i selo Gotovuša.
      </p>

      <img src={ljuboten5} alt="Ljuboten Šar Planina 5" />

      <p>
      Na vrhu planine Jalič sačuvane su ruševine male kapelice, posvećene
        Svetom proroku Iliji. 20. jula, stanovnici okolnih sela smatraju za
        sveti običaj da se popnu na vrh i obave molitvu, što je tradicija koja
        se prenosi sa predaka.
        <br/><br/>
        Slično tome, Tadrinci na Uspenje idu na planinu Drošnju, dok Sirničani i
        Kačani penju na Ljuboten. Na Ljubotenu nisu pronađeni tragovi postojanja
        molitvenog mesta, dok na Drošnji postoji stari grob, kao i na planini
        Paštrik. Sličan običaj čuvaju i Srbi iz Bara, koji se na praznik Svete
        Trojice penju na vrh Rumije.
      </p>
    </div>
  );
};
