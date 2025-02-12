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
import { Gucevo } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/Gucevo";
import { ZvornickoJezero } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/ZvornickoJezero";
import { ManastirTronosa } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/ManastirTronosa";
import { Cer } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/PlaninaCer";
import { MackovKamen } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/MackovKamen";
import { Trsic } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/Trsic";
import { KolubarskiOkrug } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/KulubarskiOkrug";
import { Valjevo } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/Valjevo";
import { TaorskaVrela } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/TaorskaVrela";
import { PetnickaPecina } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/PetnickaPecina";
import { RekaGradac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/RekaGradac";
import { ManastirLelic } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/ManastirLelic";
import { VidikovacVelikaStena } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/VidikovacVelikaStena";
import { VrhRajac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/VrhRajac";
import { ManastirCelije } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/ManastirCelije";
import { Divcibare } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/Divcibare";
import { SumadijskiOkrug } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/SumadijskiOkrug";
import { Kragujevac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Kragujevac";
import { StaraPridvornaCrkva } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Milosev Venac Kragujevac/StaraPridvornacrkva";
import { KonakKnezaMihaila } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Milosev Venac Kragujevac/KonakKnezaMihaila";
import { ZgradaGimnazije } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Milosev Venac Kragujevac/ZgradaGimnazije";
import { SpomenikPalimSumadincima } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Milosev Venac Kragujevac/SpomenikPalimZumadincima";
import { ZgradaStareLivnice } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Milosev Venac Kragujevac/ZgradaStareLinvice";
import { Arandjelovac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Arandjelovac";
import { Oplenac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Oplenac";
import { GruzanskoJezero } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/GruzanskoJezero";
import { ManastirBlagovestenjeRudnicko } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/ManastirBlagovestenjeRudnicko";
import { ManastirPetkovica } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/ManastirPetkovica";
import { PlaninarskaStazaZezeljIBesnjaja } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/PlaninrskaStazaZezeljIBesnjaja";
import { ZlatiborskiOkrug } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ZlatiborskiOkrug";
import { Uzice } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/Uzice";
import { RekaUvac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/Uvac";
import { NacionalniParkTara } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/NacionalniParkTara";
import { PlaninaZlatibor } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/PlaninaZlatibor";
import { ManastirMileseva } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ManastirMileseva";
import { JezeroPerucac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/JezeroPerucac";
import { VodopadSopotnice } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/VodopadSopotnice";
import { ManastirRujan } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ManastirRujan";
import { PlaninaZlatar } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/PlaninaZlatar";
import { ZaovinskoJezero } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ZaovinskoJezero";
import { StopicaPecina } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/StopicaPecina";
import { VodopadGostilje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/VodopadGostilje";
import { MokraGora } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/MokraGora";
import { MoravickiOkrug } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/MoravickiOkrug";
import { Cacak } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/Cacak";
import { JezeroMedjuvrsje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/JezeroMedjuvrsje";
import { ManastirBlagovestenje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/ManastirBlagovestenje";
import { Guca } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/Guca";
import { GornjiMilanovac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/GornjiMilanovac";
import { OvcarskoKablarskaKlisura } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/OvcarskoKablarskaKlisura";
import { ManastirJovanje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirJovanje";
import { ManastirNikolje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirNikolje";
import { ManastirPreobraženje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirPreobrazenje";
import { ManastirSavinje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirSavinje";
import { ManastirSveteTrojice } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirSveteTrojice";
import { ManastirUspenje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirUspenje";
import { ManastirVavedenje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirVavedenje";
import { ManastirVaznesenje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirVaznesenje";
import { PlaninaRudnik } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/PlaninaRudnik";
import { ManastirSretenje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/ManastirSretenje";
import { PomoravskiOkrug } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/PomoravskiOkrug";
import { Jagodina } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/Jagodina";
import { Grza } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/Grza";
import { ManastirManasija } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/ManastirManasija";
import { VodopadLisine } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/VodopadLisine";
// import { PlaninaRudnik } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/MoravickiOkrug/PlaninaRudnik";

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
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Macvanski/Gucevo"
          element={<Gucevo />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Macvanski/ZvornickoJezero"
          element={<ZvornickoJezero />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Macvanski/ManastirTronosa"
          element={<ManastirTronosa />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Macvanski/PlaninaCer"
          element={<Cer />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Macvanski/MackovKamen"
          element={<MackovKamen />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Macvanski/Trsic"
          element={<Trsic />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski"
          element={<KolubarskiOkrug />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski/Valjevo"
          element={<Valjevo />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski/TaorskaVrela"
          element={<TaorskaVrela />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski/PetnickaPecina"
          element={<PetnickaPecina />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski/RekaGradac"
          element={<RekaGradac />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski/ManastirLelic"
          element={<ManastirLelic />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski/VidikovacVelikaStena"
          element={<VidikovacVelikaStena />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski/VrhRajac"
          element={<VrhRajac />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski/ManastirCelije"
          element={<ManastirCelije />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Kolubarski/Divcibare"
          element={<Divcibare />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski"
          element={<SumadijskiOkrug />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/Kragujevac"
          element={<Kragujevac />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/Kragujevac/StaraPridvornaCrkva"
          element={<StaraPridvornaCrkva />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/Kragujevac/KonakKnezaMihaila"
          element={<KonakKnezaMihaila />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/Kragujevac/ZgradaGimnazije"
          element={<ZgradaGimnazije />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/Kragujevac/SpomenikPalimSumadincima"
          element={<SpomenikPalimSumadincima />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/Kragujevac/ZgradaStareLivnice"
          element={<ZgradaStareLivnice />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/Arandjelovac"
          element={<Arandjelovac />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/Oplenac"
          element={<Oplenac />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/GruzanskoJezero"
          element={<GruzanskoJezero />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/ManastirBlagovestenjeRudnciko"
          element={<ManastirBlagovestenjeRudnicko />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/ManastirPetkovica"
          element={<ManastirPetkovica />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/Sumadijski/ZezeljIBesnjaja"
          element={<PlaninarskaStazaZezeljIBesnjaja />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug"
          element={<ZlatiborskiOkrug />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice"
          element={<Uzice />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/RekaUvac"
          element={<RekaUvac />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara"
          element={<NacionalniParkTara />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/PlaninaZlatibor"
          element={<PlaninaZlatibor />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirMileseva"
          element={<ManastirMileseva />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac"
          element={<JezeroPerucac />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadSopotnice"
          element={<VodopadSopotnice />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan"
          element={<ManastirRujan />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/PlaninaZlatar"
          element={<PlaninaZlatar />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero"
          element={<ZaovinskoJezero />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina"
          element={<StopicaPecina />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje"
          element={<VodopadGostilje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora"
          element={<MokraGora />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug"
          element={<MoravickiOkrug />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak"
          element={<Cacak />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura"
          element={<OvcarskoKablarskaKlisura />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/ManastirJovanje"
          element={<ManastirJovanje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/ManastirNikolje"
          element={<ManastirNikolje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/ManastirPreobrazenje"
          element={<ManastirPreobraženje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/ManastirSavinje"
          element={<ManastirSavinje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/ManastirSveteTrojice"
          element={<ManastirSveteTrojice />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/ManastirUspenje"
          element={<ManastirUspenje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/ManastirVavedenje"
          element={<ManastirVavedenje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/ManastirVaznesenje"
          element={<ManastirVaznesenje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje"
          element={<JezeroMedjuvrsje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje"
          element={<ManastirBlagovestenje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca"
          element={<Guca />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac"
          element={<GornjiMilanovac />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik"
          element={<PlaninaRudnik />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje"
          element={<ManastirSretenje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug"
          element={<PomoravskiOkrug />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina"
          element={<Jagodina />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza"
          element={<Grza />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija"
          element={<ManastirManasija />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine"
          element={<VodopadLisine />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
