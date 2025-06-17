import lelic1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/desktop/manastirLelic1.jpg";
import lelic2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/desktop/manastirLelic2.jpg";
import lelic3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/desktop/manastirLelic3.jpg";
import lelic4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/desktop/manastirLelic4.jpg";
import lelic11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/mobile/MmanastirLelic1.jpg";
import lelic22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/mobile/MmanastirLelic2.jpg";
import lelic33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/mobile/MmanastirLelic3.jpg";
import lelic44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/mobile/MmanastirLelic4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";

export const ManastirLelic = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(kulubarskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${lelic44} 400w, ${lelic4} `} alt="Manastir Lelić 1" />

      <h2 style={{ color: "white" }}>Manastir Lelić</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Lelić se nalazi u istoimenom selu, na teritoriji grada Valjeva,
        na oko 11 km od samog grada. Ovaj manastir je zadužbina Vladike Nikolaja
        i njegovog oca Dragomira Velimirovića. Prenosom moštiju sv. vladike
        Nikolaja iz Amerike u Lelić, uz nove verske građevine u porti i oko nje,
        kao i lep ikonostas i živopis, stvoreni su uslovi za transformaciju
        crkve u manastir. Ideja o tome je potekla od Njegovog preosveštenstva
        Lavrentija, Episkopa šabačko-valjevske eparhije. Pripreme za realizaciju
        ove ideje trajale su pet godina, a najveći izazov bio je nedostatak
        monaha. Rešenje je nađeno u formiranju prelaznog karaktera, prema kojem
        bi bratstvo manastira Kaona preuzelo upravu nad manastirom Lelić. Na taj
        način, manastir Lelić postaje metoh manastira Kaone.
      </p>

      <img srcSet={`${lelic22} 400w, ${lelic2} `} alt="Manastir Lelić 2" />

      <p>
        Odluka o pretvaranju parohijskog hrama u Leliću u manastir doneta je 12.
        maja 1996. godine, kada ju je pročitao episkop zvorničkotuzlanski
        Vasilije. Tog dana, Lelić je obeležio dva značajna jubileja: 40 godina
        od upokojenja vladike Nikolaja i pet godina od prenosa njegovih moštiju
        iz Amerike u Srbiju. U manastirskom dvorištu održana je svečana sveta
        liturgija, kojoj je prisustvovalo oko 6.000 vernika. Bogosluženje je
        predvodio Njegova svetost patrijarh srpski gospodin Pavle, uz učešće
        brojnih episkopa. Manastirska crkva je sagrađena u stilu koji spaja
        elemente moravske arhitekture s modernim rešenjima. Ima oblik krsta s
        kupolom iznad centralnog dela hrama. Građena je od kamena, cigle i sige,
        a ispred crkve nalaze se veliki zvonik i crkveni dom.
      </p>

      <img srcSet={`${lelic33} 400w, ${lelic3} `} alt="Manastir Lelić 3" />

      <p>
        Živopis crkve osmišljen je prema zamisli Vladike Nikolaja, a odlikuje se
        jedinstvenim crtežima koji uključuju bogoslovska tumačenja samog
        vladike. Među prikazima biblijskih događaja, posebno se ističe scena
        Strašnog Suda koja dominira celokupnim živopisom. Ikonostas potiče iz
        perioda u kojem je crkva izgrađena. Mošti Vladike Nikolaja prenete su
        12. maja 1992. godine iz manastira Svetog Save u Libertvilu, Ilinois,
        SAD, u crkvu u Leliću. U manastirskoj porti nalazi se kapela, koja je
        takođe zadužbina episkopa Nikolaja.
      </p>

      <img srcSet={`${lelic11} 400w, ${lelic1} `} alt="Manastir Lelić 4" />

      <p>
        Godine 1991. u okviru manastirskog kompleksa otvoren je muzej posvećen
        episkopu Nikolaju, jednom od najistaknutijih umova Srpske pravoslavne
        crkve. U manastiru su takođe aktivne radionice za ikonopis i duborez.
        Prvi iguman manastira, nakon njegovog osamostaljenja, bio je arhimandrit
        Avakum (Đukanović) (1932), dugogodišnji brat manastira Tronoše i duhovno
        čedo blaženopočivšeg starca Antonija Tronoškog. Brojni vernici pronalaze
        utehu i duhovni mir kroz njegove molitve i savete, posebno u prisustvu
        moštiju Svetog Vladike Nikolaja srpskog.
      </p>
    </div>
  );
};
