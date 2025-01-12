import palicko1 from '../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/Palić4.jpg'
import palicko2 from '../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/Palić1.jpg'
import palicko3 from '../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/PalićFilmFestival.jpg'
import palicko4 from '../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/Palićzoo.jpg'
import palicko5 from '../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/Palić3.jpg'

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from '../../../../../ScrollToTop'

export const PalićkoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <div className="palickoBackground">
        <h2>PALIĆKO JEZERO</h2>
      </div>

      <p>
        Palićko jezero se nalazi u Vojvodini, na 8 kilometara od Subotice,
        jednog od najlepših gradova u Srbiji, pa svi posetioci jezera lako mogu
        da odu i vreme provedu i u ovom gradu. To je najveće prirodno jezero u
        Srbiji. Jezero, prečnika skoro 5km i najveće dubine 3.5 metra, ima tri
        uređene plaže, toplu vodu i prijatan ambijent.
      </p>

      <img src={palicko1} alt="palicko jezero 1" />

      <p style={{ marginTop: "-10px" }}>
        Obala jezera je duga 17 kilometara i uređena je celom svojom dužinom.
        Zbog ovoga, atraktivne su i pešačke ture, ali i pecanje, posmatranje
        ptica, kao i obilazak parka prirode oko samog jezera.
      </p>

      <img src={palicko5} alt="palicko jezero 2" />

      <p style={{ marginTop: "-10px" }}>
        Kada se ovome dodaju i novoizgrađeni hoteli, restorani, manje vile
        različitih smeštajnih kapaciteta, kao i poslovično dobar noćni život,
        Palićko jezero postaje mesto koje ne smete propustiti, koliko god godina
        da imate i kakva god da su vam interesovanja!
      </p>

      <img src={palicko3} alt="palicko jezero 3" />

      <p style={{ marginTop: "-10px" }}>
        U letnjim mesecima, na Paliću se održava i Festival evropskog filma, pa
        ovo mesto postaje stecište mnogih, pre svega, regionalnih filmskih
        stvaralaca, glumaca i kritičara. Zaljubljenici u “sedmu umetnost” ovde
        mogu uživati u prijatnom ambijentu gledajući najnovija filmska
        ostvarenja, a jedna od glavnih specifičnosti festivala je i činjenica da
        je jedan od retkih manifestacija ovog tipa sa 100 odsto evropskim
        sadržajem.
      </p>

      <img src={palicko4} alt="palicko jezero 4" style={{ marginBottom: "-10px" }} />
      <p>
        U neposrednoj blizini jezera se nalazi i atraktivni ZOO vrt u kome
        većina životinja nije smeštena u kaveze već slobodno šeta ograđenim
        delovima parka što ovo mesto čini veoma zanimljivim, pre svega za
        najmlađe, ali i za sve ljubitelje životinja. Čak iako ne odete u zoo,
        biljni i životinjski svet oko jezera će vas očarati i ostaviti bez daha.
      </p>
    </div>
  );
};
