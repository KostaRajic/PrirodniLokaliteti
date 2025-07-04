import kikinda1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda1.jpg";
import kikinda2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda3.jpg";
import kikinda3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda4.jpg";
import kikinda4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda5.jpg";
import kikinda5 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda6.jpg";
import kikinda6 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda7.jpg";
import kikinda11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda1.jpg";
import kikinda22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda3.jpg";
import kikinda33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda4.jpg";
import kikinda44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda5.jpg";
import kikinda55 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda6.jpg";
import kikinda66 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";

export const Kikinda = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(severnoBanatskiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${kikinda11} 400w, ${kikinda1} `} alt="Kikinda 1" />

      <h2>Kikinda</h2>

      <p>
        Kikinda je grad u Severnobanatskom okrugu, smešten u Vojvodini, na
        severu Srbije, blizu granice sa Rumunijom. Grad se prostire uz reku Tisu
        i ima bogatu istoriju koja seže još od praistorijskih vremena, a u
        okolini su pronađeni značajni arheološki nalazi iz neolita, Rimskog
        carstva, i srednjeg veka. Kroz istoriju, Kikinda je bila deo različitih
        carstava, uključujući Habsburšku Monarhiju i Kraljevinu Srbiju, što je
        oblikovalo njen kulturni i etnički mozaik.
      </p>

      <img srcSet={`${kikinda22} 400w, ${kikinda2} `} alt="Kikinda 2" />

      <p>
        Kikinda je takođe poznata po svojim istorijskim spomenicima, poput
        Gradske crkve iz 18. veka, koja je jedno od glavnih verskih i kulturnih
        mesta. Grad je ponosan i na spomenik velikoj droplji, ptici koja je
        postala simbol ovog kraja zbog svog prisustva u okolnim prirodnim
        rezervatima. Tu je i Kikindska pijaca, gde posetioci mogu uživati u
        lokalnim proizvodima i okusima, kao i brojni spomenici kulture koji
        podsećaju na bogatstvo istorije.
      </p>

      <img srcSet={`${kikinda33} 400w, ${kikinda3} `} alt="Kikinda 3" />

      <p>
        Ulica Generala Petra Drapšina, zauzima visoko 22. mesto na listi
        najlepših ulica na svetu! Tako specifična i neobična privlači pažnju
        mnogih turista. Ukupno 389 stabala, stvara zeleni tunel, i čini oazu
        prirode u samom centru grada. Već osam godina, slika najlepše ulice u
        Srbiji, koja krasi severni Banat, nalazi se na spisku već osam godina,
        50 najelpših na svetu. Krošnje američkog koprivića, čine tunel dug 2 km.
        Na lokalu, ovo drvo zovu „pincike“, sam plod podseća na ukus bundeve, a
        da podvučemo da je Kikinda prestonica bundeve a njen plod podseća na
        bundevu.
      </p>

      <img srcSet={`${kikinda44} 400w, ${kikinda4} `} alt="Kikinda 4" />
      <p>
        Narodni muzej Kikinda je kulturna institucija koja čuva bogatu istoriju
        i tradiciju ovog grada. Muzej se sastoji od nekoliko zbirki, uključujući
        arheološke, etnološke i umetničke eksponate, a posebno je poznat po
        kolekciji fosila i zoološkim eksponatima.
      </p>

      <img
        srcSet={`${kikinda55} 400w, ${kikinda5} `}
        alt="Kikinda 5"
      />
      <p>
        Bogata riznica tehničkog i kulturno-istorijskog nasleđa Vojvodine i
        jedinstveni muzej sa fantastičnom kolekcijom parnih mašina, traktora,
        priključnih poljoprivrednih mašina, alata i predmeta koji oslikavaju
        nekadašnji način života kako paora, tako i veleposednika
        novomiloševačkih – muzej Žeravica!
      </p>

      <img
        srcSet={`${kikinda66} 400w, ${kikinda6} `}
        alt="Kikinda 5"
      />
      <p>
        Terra muzej Kikinda, jedinstvena institucija koja se fokusira na
        prirodnu baštinu ovog regiona. Osnovan je sa ciljem da očuva i prikaže
        geološke, paleontološke i zoološke zbirke, među kojima se izdvaja
        značajna kolekcija fosila. Muzej je posebno poznat po fosilima iz
        perioda miocena, uključujući fosile praistorijskih životinja. Terra
        muzej je važan kulturni centar koji doprinosi očuvanju istorije prirode
        Vojvodine.
      </p>
    </div>
  );
};
