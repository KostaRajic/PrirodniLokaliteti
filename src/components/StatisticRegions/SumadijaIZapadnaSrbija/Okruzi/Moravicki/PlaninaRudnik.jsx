import planinaRudnik1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/rudnik1.jpg";
import planinaRudnik2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/rudnik2.jpg";
import planinaRudnik3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/rudnik3.jpg";
import planinaRudnik4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/rudnik4.jpg";
import planinaRudnik5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/rudnik5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const PlaninaRudnik = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} style={{fill: 'white'}}/>
      <header></header>
      <img src={planinaRudnik1} alt="Planina Rudnik 1" />

      <h2 style={{color: 'white'}}>Planina Rudnik</h2>

      <p style={{ paddingTop: "50px" }}>
        Rudnik, planina koja dominira Šumadijom, nalazi se oko 100 km južno od
        Beograda, odnosno 15 km od Gornjeg Milanovca. Varošica Rudnik je
        smeštena između 500 i 700 m nadmorske visine. Na Rudniku se nalazi osam
        vrhova viših od 1.000 m nadmorske visine (zanimljivo, dva od njih se
        zovu "Javor"), a najviši je Cvijićev vrh (1.132 m), ranije poznat kao
        Veliki Šturac. Najveće naselje na planini je varošica Rudnik. Veliki deo
        planine je prekriven šumom, uglavnom bukovom, ali tu su i hrast, javor i
        mleč.
      </p>

      <img src={planinaRudnik2} alt="Planina Rudnik 2" />

      <p>
        Zahvaljujući izuzetnoj šumovitosti, prirodnim stazama zdravlja i blizini
        velikih gradova, Rudnik je idealan za razvoj letnjeg i zimskog
        zdravstvenog, školskog, sportskog i lovnog turizma. Zbog izvanrednih
        klimatskih uslova (visoka osunčanost tokom godine, vazdušna strujanja,
        visoka jonizacija vazduha i nezagađena prirodna sredina), Rudnik je još
        1922. godine proglašen vazdušnom banjom. Varošica i planina su povezane
        asfaltiranim putem i brojnim stazama zdravlja, a na raspolaganju su i
        tereni za male sportove. Posetioci mogu planinariti do Cvijićevog vrha i
        strmog vulkanskog uzvišenja Ostrvice, na kojem se nalaze ostaci
        Jerininog grada.
      </p>

      <img src={planinaRudnik4} alt="Planina Rudnik 3" />

      <p>
        Planina Rudnik zimi je pravo utočište za ljubitelje prirode i zimskih
        pejzaža. Njene snežne staze, prekrivene tišinom, idealne su za šetnje,
        uživanje na svežem vazduhu i istraživanje prirode. Guste šume i
        brežuljci stvaraju prelepe prizore, dok je vazduh bogat kiseonikom i
        poznat po lekovitom dejstvu. Zimske šetnje na Rudniku pružaju priliku da
        se istraže njegovi brojni vidikovci, odakle se pruža pogled na okolne
        planine i doline. Posebno je magično prošetati do Velikog Šturca,
        najvišeg vrha Rudnika, dok je sve prekriveno snegom.
      </p>

      <img src={planinaRudnik3} alt="Planina Rudnik 4" />

      <p>
        Planina je poznata i po čistim izvorima vode, a zimi njihova tiha
        žuborenja imaju poseban šarm. Nakon šetnje, posetioci mogu da uživaju u
        toplim napicima i domaćim specijalitetima u lokalnim etno restoranima i
        smeštajima. Rudnik zimi nije samo destinacija za odmor, već i mesto koje
        pruža spokoj i priliku za opuštanje daleko od svakodnevnog stresa.
      </p>

      <img src={planinaRudnik5} alt="Planina Rudnik 5" />

      <p>
        Između vrha Javor i Cvijićevog vrha, sa njegove jugoistočne strane,
        nalazi se prirodni rezervat „Veliki Šturac“. Ovo prirodno dobro prvi put
        je stavljeno pod zaštitu 1956. godine kao strogi prirodni rezervat, na
        površini od 8 hektara. Spada u prirodna dobra I kategorije – prirodno
        dobro od izuzetnog značaja.
      </p>
    </div>
  );
};
