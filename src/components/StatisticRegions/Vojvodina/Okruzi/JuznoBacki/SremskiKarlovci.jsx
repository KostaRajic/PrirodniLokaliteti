import karlovci1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci1.jpg";
import karlovci2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci2.jpg";
import karlovci3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci3.jpg";
import karlovci4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci4.jpg";
import karlovci5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci5.jpg";
import karlovci11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci1.jpg";
import karlovci22 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci2.jpg";
import karlovci33 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci3.jpg";
import karlovci44 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci4.jpg";
import karlovci55 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";

export const SremskiKarlovci = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(JuznoBackiPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${karlovci11} 400w, ${karlovci1} `} alt="Sremski Karlovci 1" />

      <h2
        style={{color: "white" }}
      >
        Sremski Karlovci
      </h2>

      <p style={{ paddingTop: "50px"}}>
        Sremski Karlovci su mali grad u Vojvodini, smešten na desnoj obali reke
        Dunav, u blizini grada Novi Sad. Poznati su po svojoj bogatoj istoriji,
        kulturnom nasleđu, prelepim baroknim građevinama, kao i tradiciji
        vinarstva. Sremski Karlovci su nekada bili centar Srpske pravoslavne
        crkve i jedan od najvažnijih kulturnih centara u regionu.
      </p>

      <img srcSet={`${karlovci22} 400w, ${karlovci2} `} alt="Sremski Karlovci 2" />

      <p>
        Kada se uželite unikatne i šarene arhitekture i čase dobrog vina vreme
        je da se uputite u Sremske Karlovce. O ovom malom vojvođanskom mestu
        pisao je Branko Radičević, u njemu možete da lajete na zvezde, pijete
        vodu iz glave lava i ručate sa pogledom na Dunav. U nastavku bloga
        sprovešćemo vas kroz najpoznatije atrakcije u Sremskim Karlovcima koje
        ne smete propustiti, uputiti vas u dobro poznate vinarije i restorane,
        na vama je samo da se spremate za put.
      </p>

      <img srcSet={`${karlovci33} 400w, ${karlovci3} `} alt="Sremski Karlovci 3" />

      <p>
        Da li ste spremni za razgibavanje pored česme? Česma Četiri lava može se
        posmatrati i kao spomenik kulture s obzirom na to koliko je čuvena i
        značajna. Ova unikatna česma, čije su slavine simbolično uređene u
        obliku lavlje glave, nalazi se u samom srcu Karlovca i vremenom je
        postala mesto susreta. Česma je nemi svedok vremena koje prolaze, ali
        uspela je da verno isprati mnoge đake, profesore, znatiželjne turiste,
        kao i mnoge televizijske ekipe. Možete je pronaći nadomak gimnazije,
        voda sa nje je čista i osvežavajuća, a takođe je i odlično mesto za
        fotografisanje. Ako je verovati predanju, svi koji popiju vodu vratiće
        se u Karlovce i u njima se venčati!
      </p>

      <img srcSet={`${karlovci44} 400w, ${karlovci4} `} alt="Sremski Karlovci 4" />
      <p>
        Jedno je sasvim sigurno, znamenitosti u Sremskim Karlovcima ima zaista
        na pretek. Sremski Karlovci poseduju sve što vam treba za savršen izlet,
        počevši od arhitekture, preko restorana i vinarija sa dugom tradicijom,
        sve do istaknutih spomenika kulture i parkova. Mnogi Karlovce nazivaju
        živim muzejom, te će vam sama šetnja kroz centralne gradske ulice biti
        pravi užitak.
      </p>

      <img
        srcSet={`${karlovci55} 400w, ${karlovci5} `}
        alt="Sremski Karlovci 5"
      />
      <p>
        Verujemo da će ljubitelji vina i iskusni gurmani biti oduševljeni
        prelepim vinogradima i kvalitetnim vinima ovog kraja. Vinska tradicija
        je posebno jaka na severu naše zemlje, a Sremski Karlovci nisu izuzetak.
        Vina koja probate u ovom gradu biće jedna od najboljih u celoj zemlji.
        Nakon što obiđete sve znamenitosti, lepote i atrakcije Karlovaca, naša
        preporuka je i da posetite neku od karlovačkih prestižnih vinarija i
        prepustite se čarima ovog reskog i opojnog pića.
      </p>
    </div>
  );
};
