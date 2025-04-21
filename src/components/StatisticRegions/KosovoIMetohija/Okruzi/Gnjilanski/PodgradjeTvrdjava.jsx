import podgradje1 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/tvrdjavaPodgradja1.jpg";
import podgradje2 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/tvrdjavaPodgradja2.jpg";
import podgradje3 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/tvrdjavaPodgradja3.jpg";
import podgradje4 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/tvrdjavaPodgradja4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { gnjilanskiOkrugPathRoutes } from "./GnjilanskiOkrugPathRoutes";

export const TvrdjavaPodgradje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(gnjilanskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={podgradje1} alt="Tvrđava Podgrađe" />

      <h2>Tvrđava Podgrađe</h2>

      <p style={{ paddingTop: "50px" }}>
        Tvrđava se nalazi na brdu koje se uzdiže oko 50 metara iznad rečne
        doline. Sastoji se od Donjeg Grada, opasanog zidinama, i bolje očuvane
        citadele (Gornji Grad) na vrhu brda.
        <br />
        <br />
        Raspored Gornjeg Grada zasniva se na nepravilnom petouglu koji prati
        oblik vrha brda, sa tri vrha (jugozapadni, severozapadni i
        severoistočni) ojačana kulama. Na najvišoj tački tvrđave nalazi se
        donžonska kula, otprilike četvrtasta u osnovi (oko 8x8 m), čiji je
        zapadni zid sačuvan do visine od oko 10 metara sa ulazom, a deo
        jugoistočnog zida ima strelišta, dok se na ostatku istočnog zida vidi
        ostatak drugog strelišta. Ulaz u Gornji Grad verovatno se nalazio na
        severozapadnoj strani kule, sa strane sa koje je tvrđava bila najlakše
        pristupačna, jer se tu vide ostaci pristupne rampe. Na tom području su
        pronađeni ostaci drugih zgrada. Zidine tvrđave na nekim mestima su
        sačuvane do visine od 4 metra.
      </p>

      <img src={podgradje2} alt="Tvrđava Podgrađe 2" />

      <p>
        Tvrđava Podgrađe se nalazi 10 km jugoistočno od Gnjilana, odnosno 1 km
        od sela Podgrađe. Pozicionirana je u planinama Karadak, na 567 metara
        nadmorske visine, na čijim se padinama nalazi reka Morava e Binçes. Grad
        ima unutrašnju površinu od 1,2 hektara i tipična je za Justinijansku eru
        (6. vek), odnosno deo mreže tvrđava podignutih u Dardaniji krajem kasne
        antike. To je takođe potvrđeno pisanom dokumentacijom i novčićima
        pronađenim tokom aktivnosti na konzervaciji i istraživanju tvrđave.
        Najstariji novčić pronađen u tvrđavi potiče iz perioda 246–249. godine i
        nosi portret Otacije Sever, prve žene cara Filipa.
      </p>

      <img src={podgradje3} alt="Tvrđava Podgrađe 3" />

      <p>
        Tvrđava Pogragja ima izgled nepravilnog pentagona, dok južna strana
        centralne kule služi kao zaštitni zid citadele, što je jedna od
        karakteristika ove tvrđave. Tvrđava posjeduje tri zaštitna zida, koji su
        označeni kao prvi, drugi i treći zaštitni zid. Deo ovih zidova je iznad
        zemlje, dok se ostatak nalazi ispod zemlje. Prvi zaštitni zid je dug 17
        metara i visok 4 metra, drugi zid je dug 27 metara, a na gornjem delu
        pruža pogled na okolinu. Zidovi drugog zida su visoki do deset metara i
        imaju simetrične kvadratne dimenzije 8x8 metara.
      </p>

      <img src={podgradje4} alt="Tvrđava Podgrađe 4" />

      <p>
        Takođe, deo tvrđave čine i manji tornjevi, postavljeni na njenim
        zapadnoj, severnoj i jugoistočnoj strani, koji povremeno dosežu visinu
        od 4 metra. Zidovi su građeni od tesanog i netesanog kamena, povezani sa
        malterom od krečnog lepkova. Tokom radova izvršenih 2007. godine,
        otkriven je podzemni kanal koji povezuje unutrašnjost tvrđave sa rekom
        Moravom. Tvrđava je takođe dom tzv. "Mleka kamena", koji je popularno
        poznat kao isceliteljski kamen. Tvrđava Pogragja predstavlja spomenik
        velikog istorijskog, naučnog i kulturnog značaja.
      </p>
    </div>
  );
};
