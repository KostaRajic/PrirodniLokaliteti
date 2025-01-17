import "./App.css";
import { SerbianMap } from "./components/SerbianMap";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { VojvodinaTekstModal } from "./components/StatisticRegions/Vojvodina/VojvodinaTekstModal";
import { Vojvodina } from "./components/StatisticRegions/Vojvodina/Vojvodina";
import { ZapadnoBacki } from "./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/ZapadnoBacki";
import { Sombor } from "./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/Sombor";
import { GornjePodunavlje } from "./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/GornjePodunavlje";
import { Apatin } from "./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/ApatinIApatinskeTerminalneVode";
import { VelikiBackiKanal } from "./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/VelikiBackiKanal";
import { ManastirBodjani } from "./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/Manastir Bodjani";
import { SalasiUBackoj } from "./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/SalasiUBackoj";
import { DunavskeAde } from "./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/DunavskeAde";
import { SevernoBacki } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/SevernoBacki";
import { PalićkoJezero } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/PalićkoJezero";
import { Subotica } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/Subotica";
import { RekaTisa } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/RekaTisa";
import { SubotickaPescara } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/SubotickaPescara";
import { BackaTopola } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/BackaTopola";
import { BackoTopolskoJezero } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/BackoTopolskoJezero";
import { SevernoBanatski } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/SevernoBanatski";
import { Kikinda } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/Kikinda";
import { Kanjiza } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/KanjizaITermalneVode";
import { SelevenjskePustare } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/SelevenjskePustare";
import { RezervatVelikeDroplje } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/RezervatVelikeDroplje";
import { Senta } from "./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/Senta";
import { JuznoBacki } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/JuznoBacki";
import { FruskaGora } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/FruskaGora";
import { NoviSad } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/NoviSad";
import { BelaCrkva } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/BelaCrkva";
import { ManastirKrusedol } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/ManastirKrusedol";
import { SremskiKarlovci } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/SremskiKarlovci";
import { ManastirBeocin } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/ManastirBeocin";
import { SrednjeBanatski } from "./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/SrednjeBanatski";
import { Zrenjanin } from "./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/Zrenjanin";
import { SajkaskaOblast } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/SajkaskaOblast";
import { NoviBecej } from "./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/NoviBecej";
import { SlanoKopovo } from "./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/SlanoKopovo";
import { StaraTisa } from "./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/StaraTisa";
import { KupalistePeskara } from "./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/KupalistePeskara";
import { SremskiOkrug } from "./components/StatisticRegions/Vojvodina/Okruzi/Sremski/SremskiOkrug";
import { SremskaMitrovica } from "./components/StatisticRegions/Vojvodina/Okruzi/Sremski/SremskaMitrovica";
import { SRPZasavica } from "./components/StatisticRegions/Vojvodina/Okruzi/Sremski/SRPZasavica";
import { Indjija } from "./components/StatisticRegions/Vojvodina/Okruzi/Sremski/Inđija";
import { SotskoJezero } from "./components/StatisticRegions/Vojvodina/Okruzi/Sremski/SotskoJezero";
import { ManastirNovoHopovo } from "./components/StatisticRegions/Vojvodina/Okruzi/Sremski/ManastirNovoHopovo";
import { Sid } from "./components/StatisticRegions/Vojvodina/Okruzi/Sremski/Sid";
import { ManastirJazak } from "./components/StatisticRegions/Vojvodina/Okruzi/Sremski/ManastirJazak";
import { BesenovackoJezero } from "./components/StatisticRegions/Vojvodina/Okruzi/Sremski/BesenovackoJezero";
import { JuznoBanatski } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/JuznoBanatski";
import { Pancevo } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/Pancevo";
import { VracevgajskoJezero } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/VracevgajskoJezero";
import { DelibaltskaPescaraIZagajickaBrda } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/DelibaltskaPescaraIZagajickaBrda";
import { Vrsac } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/Vrsac";
import { SRPKraljevac } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/SRPKraljevac";
import { Beograd } from "./components/StatisticRegions/Beograd/Beograd";
import { Beograd2 } from "./components/StatisticRegions/Beograd/Beograd2";
import { Kalemegdan } from "./components/StatisticRegions/Beograd/Kalemegdan";
import { HramSvetogSave } from "./components/StatisticRegions/Beograd/HramSvetogSave";
import { KnezMihailova } from "./components/StatisticRegions/Beograd/KnezMihajlova";
import { TrgRepublike } from "./components/StatisticRegions/Beograd/TrgRepublike";
import { BotanickaBata } from "./components/StatisticRegions/Beograd/BotanickaBasta";
import { Skadarlija } from "./components/StatisticRegions/Beograd/Skadarlija";
import { AdaCiganlija } from "./components/StatisticRegions/Beograd/AdaCiganlija";
import { Kosutnjak } from "./components/StatisticRegions/Beograd/Kosutnjak";
import { SumadijaIZapadnaSrbijaTekstModal } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/SumdijaIZapadnaSrbijaTekstModal";
import { SumadijaIZapadnaSrbija } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/SumadijaIZapadnaSrbija";
import { MacvanskiOkrug } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/MacvanskiOkrug";
import { Sabac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/Sabac";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SerbianMap />} />
        <Route path="/vojvodinaTekstModal" element={<VojvodinaTekstModal />} />
        <Route path="/vojvodinaTekstModal/Vojvodina" element={<Vojvodina />} />

        <Route
          path="/vojvodinaTekstModal/Vojvodina/ZapadnoBacki"
          element={<ZapadnoBacki />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/ZapadnoBacki/Sombor"
          element={<Sombor />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/ZapadnoBacki/GornjePodunavlje"
          element={<GornjePodunavlje />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/ZapadnoBacki/ApatinITerminalneVode"
          element={<Apatin />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/ZapadnoBacki/VelikiBackiKanal"
          element={<VelikiBackiKanal />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/ZapadnoBacki/ManastirBodjani"
          element={<ManastirBodjani />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/ZapadnoBacki/SalasiUBackoj"
          element={<SalasiUBackoj />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/ZapadnoBacki/DunavskeAde"
          element={<DunavskeAde />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBacki"
          element={<SevernoBacki />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBacki/PalickoJezero"
          element={<PalićkoJezero />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBacki/Subotica"
          element={<Subotica />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBacki/Tisa"
          element={<RekaTisa />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBacki/SubotickaPescara"
          element={<SubotickaPescara />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBacki/BackaTopola"
          element={<BackaTopola />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBacki/BackoTopolskoJezero"
          element={<BackoTopolskoJezero />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBanatski"
          element={<SevernoBanatski />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBanatski/Kikinda"
          element={<Kikinda />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBanatski/Kanjiza"
          element={<Kanjiza />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBanatski/SelevenjskePustare"
          element={<SelevenjskePustare />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBanatski/RezervatVelikeDroplje"
          element={<RezervatVelikeDroplje />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SevernoBanatski/Senta"
          element={<Senta />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBacki"
          element={<JuznoBacki />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBacki/FruskaGora"
          element={<FruskaGora />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBacki/NoviSad"
          element={<NoviSad />}
        />

        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBacki/ManastirKrusedol"
          element={<ManastirKrusedol />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBacki/SremskiKarlovci"
          element={<SremskiKarlovci />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBacki/ManastirBeocin"
          element={<ManastirBeocin />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBacki/SajkaskaOblast"
          element={<SajkaskaOblast />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SrednjeBanatski"
          element={<SrednjeBanatski />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SrednjeBanatski/Zrenjanin"
          element={<Zrenjanin />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SrednjeBanatski/NoviBecej"
          element={<NoviBecej />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SrednjeBanatski/SlanoKopovo"
          element={<SlanoKopovo />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SrednjeBanatski/StaraTisa"
          element={<StaraTisa />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/SrednjeBanatski/KupalistePeskara"
          element={<KupalistePeskara />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/Sremski"
          element={<SremskiOkrug />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/Sremski/SremskaMitrovica"
          element={<SremskaMitrovica />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/Sremski/SRPZasavica"
          element={<SRPZasavica />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/Sremski/Indjija"
          element={<Indjija />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/Sremski/SotskoJezero"
          element={<SotskoJezero />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/Sremski/NovoHopovo"
          element={<ManastirNovoHopovo />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/Sremski/Sid"
          element={<Sid />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/Sremski/ManastirJazak"
          element={<ManastirJazak />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/Sremski/BesenovackoJezero"
          element={<BesenovackoJezero />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBanatski"
          element={<JuznoBanatski />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBanatski/Pancevo"
          element={<Pancevo />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBanatski/BelaCrkva"
          element={<BelaCrkva />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBanatski/VracevgajskoJezero"
          element={<VracevgajskoJezero />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBanatski/DelibaltskaPescaraIZagajickaBrda"
          element={<DelibaltskaPescaraIZagajickaBrda />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBanatski/Vrsac"
          element={<Vrsac />}
        />
        <Route
          path="/vojvodinaTekstModal/Vojvodina/JuznoBanatski/SRPKraljevac"
          element={<SRPKraljevac />}
        />
        <Route path="/Beograd" element={<Beograd />} />
        <Route path="/Beograd/Beograd2" element={<Beograd2 />} />
        <Route path="/Beograd/Kalemegdan" element={<Kalemegdan />} />
        <Route path="/Beograd/HramSvetogSave" element={<HramSvetogSave />} />
        <Route path="/Beograd/KnezMihailova" element={<KnezMihailova />} />
        <Route path="/Beograd/TrgRepublike" element={<TrgRepublike />} />
        <Route path="/Beograd/BotanickaBasta" element={<BotanickaBata />} />
        <Route path="/Beograd/Skadarlija" element={<Skadarlija />} />
        <Route path="/Beograd/AdaCiganlija" element={<AdaCiganlija />} />
        <Route path="/Beograd/Kosutnjak" element={<Kosutnjak />} />
        <Route
          path="/sumadijaTekstModal"
          element={<SumadijaIZapadnaSrbijaTekstModal />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija"
          element={<SumadijaIZapadnaSrbija />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Macvanski"
          element={<MacvanskiOkrug />}
        />
         <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Macvanski/Sabac"
          element={<Sabac />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
