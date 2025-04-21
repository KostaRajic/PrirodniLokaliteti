import babickaGora1 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/babickaGora1.jpg'
import babickaGora2 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/babickaGora2.jpg'
import babickaGora3 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/babickaGora3.jpg'
import babickaGora4 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/babickaGora4.jpg'

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from './JablanickiOkrugPathRoutes';

export const PlaninaBabickaGora = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(jablanickiOkrugPathRoutes.home)} />
      <header></header>
      <img src={babickaGora1} alt="Planina Babička Gora 1" />

      <h2>Planina Babička Gora</h2>

      <p style={{ paddingTop: "50px" }}>
        Severoistočno od Leskovca nalazi se Babička Gora (najviši vrh Kriva buka
        1059 m). To je ogromna planina u jugoistočnoj Srbiji, između Južne
        Morave na zapadu i Kutininske reke na istoku. Na severozapadu se nalazi
        planina Seličevica, a na jugoistoku Kruševica. Berbeška kotlina odvaja
        Babičku goru od Seličevice, Leskovačka kotlina je na jugozapadu, a
        Zaplanjska kotlina na severoistoku. Izgrađena je od starih metamorfnih
        stena, škriljaca prekambrijumske starosti.
      </p>

      <img src={babickaGora2} alt="Planina Babička Gora 2" />

      <p>
        Uspon na Krivu buku može se započeti iz Zaplanja, iz sela Gornje
        Dragovlje. Od puta koji povezuje Nišku banju, Gažin Han, Donji Dušnik i
        Svođe do vrha ima oko 10 km. Raskrsnica na putu je na nadmorskoj visini
        od 450 metara, pa je visinska razlika oko 600 metara. Staza nije
        markirana do samog kraja, kada se priključuje markaciji koja vodi do
        vrha sa druge strane, iz Leskovačke kotline.
      </p>

      <img src={babickaGora3} alt="Planina Babička Gora 3" />

      <p>
        Prva dva kilometra je asfalt, a zatim se prate kolski putevi koji vode
        uzbrdo u planinu. Putevi prolaze kroz šumu, vidikovci su retki, ali
        planinarima pružaju zadovoljstvo u pogledu na ovu lepu i pošumljenu
        planinu sa blagim stranama i zaravnjeni vrh. Tačku vrha na pošumljenom
        platou nije lako odrediti. Mesto okupljanja planinara pored stare i
        krive bukve koja je označena tablom možda i nije najviša tačka, ali je
        svakako prihvaćena kao takva.
      </p>

      <img src={babickaGora4} alt="Planina Babička Gora 4" />

      <p>
        Markirana planinarska staza Jarsenovo – G. Kupinovica – Kriva Buka
        oznake 7-1-2, duga 13 km, povezuje selo Jarsenovo – kotu 611 m –
        manastir Sv. Jovan – vikend naselje – zaseok sela Golema Njiva – ženski
        manastir Vavedenje Presvete Bogorodice – šumsku kuću i izvor, te vrh
        Kriva Buka.
      </p>
    </div>
  );
};
