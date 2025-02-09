import nbecej1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/novibecej2.jpg";
import nbecej2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/novibecej3.jpg";
import nbecej3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/novibecej4.jpg";
import nbecej4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/novibecej5.jpg";
import nbecej5 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/novibecej6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const NoviBecej = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={nbecej3} alt="Novi Bečej 1" />

      <h2>Novi Bečej</h2>

      <p>
        Novi Bečej je grad i sedište opštine u Vojvodini, Srbija, smešten u
        severoistočnom delu pokrajine, u blizini granice sa Rumunijom. Grad leži
        na reki Tamiš, koja je važan vodeni tok u ovom delu Srbije.
      </p>

      <img src={nbecej2} alt="Novi Bečej 2" />

      <p style={{ marginTop: "-10px" }}>
        Grad je zvanično osnovan kao naselje u 18. veku, kada su prvi stanovnici
        naselili ovo područje. Tokom 19. i 20. veka, Novi Bečej je doživeo
        značajan privredni razvoj, a posebno je bio poznat po poljoprivredi i
        stočarstvu. Naziv mesta verovatno potiče od imena veleposedničke
        porodice Bechei (Wechey), koja je ovde imala posede. Prvi istorijski
        izvori koji pominju lokalitet s ovim imenom iz 11. veka odnose se na
        pristanište, verovatno skelu, koja je ovde postojala kontinuirano sve do
        kraja 20. veka. Moguće je da ime ovog mesta potiče i od naziva „Beč”,
        što znači „zemljoposed”, ili da znači „utvrđenje na vodi”
      </p>

      <img src={nbecej5} alt="Novi Bečej 3" />

      <p style={{ marginTop: "-10px" }}>
        Novi Bečej je poznat po svojoj kulturnoj baštini. Grad se ponosi i
        očuvanim istorijskim spomenicima i tradicionalnim manifestacijama, kao i
        brojnim verskim objektima, kao što je crkva Sv. Đorđa, koja je deo
        lokalne istorijske baštine. U poslednjim godinama, Novi Bečej se sve
        više razvija kao turistička destinacija, sa akcentom na prirodu,
        rekreaciju i seoski turizam. Zbog svoje blizine velikim gradovima, kao
        što je Zrenjanin i Pančevo, kao i Rumuniji, grad privlači posetioce koji
        žele da uživaju u mirnom okruženju i prirodnim lepotama.
      </p>

      <img src={nbecej1} alt="Novi Bečej 4" />

      <p style={{ marginTop: "-10px" }}>
        Privreda Novog Bečeja temelji se na poljoprivredi, ali u poslednje vreme
        raste i razvoj industrije. Gradske vlasti ulažu u poboljšanje
        infrastrukture, što uključuje i povećanje kapaciteta za turizam, kao i
        razvoj preduzetništva.
      </p>

      <img src={nbecej4} alt="Novi Bečej 5" />
      <p style={{ marginTop: "-110px", position: "absolute" }}>
        Biserno ostrvo je smešteno u toku reke Tamiš i predstavlja jedno od
        omiljenih mesta za odmor i rekreaciju. Ostrvo se odlikuje bogatstvom
        flore i faune, a često se koristi kao destinacija za ljubitelje prirode,
        ljubitelje ptica, kao i one koji uživaju u aktivnostima kao što su
        biciklizam, pešačenje i vožnja čamcem. Biserno ostrvo, sa svojom
        netaknutom prirodom, ima ekološki značaj, jer pruža stanište za
        različite vrste biljaka i životinja. Ova oblast je pod zaštitom, a to
        omogućava očuvanje biološke raznovrsnosti, te doprinosi očuvanju
        prirodnih resursa regiona.
      </p>
    </div>
  );
};
