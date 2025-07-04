import beocin1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin1.jpg";
import beocin2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin2.jpg";
import beocin3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin3.jpg";
import beocin4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin4.jpg";
import beocin5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin5.jpg";
import beocin11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM1.jpg";
import beocin22 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM2.jpg";
import beocin33 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM3.jpg";
import beocin44 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM4.jpg";
import beocin55 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";

export const ManastirBeocin = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(JuznoBackiPathRoutes.home)} style={{fill: 'white'}}/>
      <header></header>
      <img srcSet={`${beocin33} 400w, ${beocin3} `} alt="Manastir Beočin 1" />

      <h2 style={{ color: 'white'}}>
        Manastir Beočin
      </h2>

      <p style={{ paddingTop: "50px"}}>
        Manastir Beočin je pravoslavni manastir koji se nalazi u istoimenom
        naselju Beočin, u južnom delu Vojvodine, u blizini grada Novog Sada.
        Manastir je smešten na padinama Fruške gore, u prelepom prirodnom
        okruženju koje pruža mir i duhovnu tišinu, što ga čini idealnim mestom
        za molitvu, meditaciju i duhovne posete.
      </p>

      <img srcSet={`${beocin11} 400w, ${beocin1} `} alt="Manastir Beočin 2" />

      <p>
        Manastir Beočin ima bogatu istoriju, a osnovan je u 15. veku, tačnije
        1443. godine, iako se neki izvori navode da je manastir postojao i
        ranije. Prema istorijskim podacima, manastir je bio deo bogate tradicije
        pravoslavnog monaštva na Fruškoj gori, koja je tokom srednjeg veka bila
        centar duhovnog života i kulturnog stvaralaštva.
      </p>

      <img srcSet={`${beocin44} 400w, ${beocin4} `} alt="Manastir Beočin 3" />

      <p>
        Manastir je nekoliko puta bio uništavan i obnavljan tokom istorije,
        preživljavajući napade i vladavinu različitih političkih režima. Tokom
        osmanske vlasti, manastir je često bio zapušten, ali je nakon
        oslobođenja Srbije obnovljen i ponovo postao aktivno duhovno središte.
      </p>

      <img srcSet={`${beocin22} 400w, ${beocin2} `} alt="Manastir Beočin 4" />
      <p>
        Manastir Beočin je pravi primer tradicionalne srpske pravoslavne
        arhitekture, sa crkvom posvećenom Uspenju Presvete Bogorodice. Crkva je
        izgrađena u baroknom stilu, sa visokim svodom i bogato ukrašenim
        ikonostasom. Unutrašnjost crkve je ukrašena freskama i ikonama, koje su
        delo talentovanih umetnika tog vremena. Pored crkve, u kompleksu
        manastira nalaze se monaške ćelije, trpeza i druga pomoćna zdanja.
        Uživanje u duhovnoj tišini i lepoti prirode često privuče posetioce koji
        žele da provedu neko vreme u molitvi i razmišljanju.
      </p>

      <img srcSet={`${beocin55} 400w, ${beocin5} `} alt="Manastir Beočin 5"/>
      <p>
        Danas je manastir Beočin aktivan manastir, u kojem žive monasi koji se
        bave duhovnim životom, molitvom, a takođe i sačuvavanjem i obnovom
        kulturno-istorijskog nasleđa. Manastir je takođe mesto hodočašća i
        spiritualnih okupljanja, a posetioci mogu uživati u njegovoj tišini i
        duhovnoj atmosferi. Manastir Beočin je i turistička destinacija, koja
        privlači ljubitelje istorije, religije i prirode. Posetioci mogu obići
        manastir, učestvovati u molitvama i liturgijama, kao i uživati u
        prelepom okruženju Fruške gore.
      </p>
    </div>
  );
};
