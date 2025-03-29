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
import { ManastirJosanica } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/ManastirJosanica";
import { ResavskaPecina } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/ResavskaPecina";
import { VodopadPrskalo } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/VodopadPrskalo";
import { ManastirRavanica } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/ManastirRavanica";
import { PrirodnjackiCentar } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/PrirodnjackiCentar";
import { RaskiOkrug } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/RaskiOkrug";
import { Kraljevo } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/Kraljevo";
import { ManastirStudenica } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/ManastirStudenica";
import { PlaninaKopaonik } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/PlaninaKopaonik";
import { VrnjackaBanja } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/VrnjackaBanja";
import { ManastirZica } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/ManastirZica";
import { TvrdjavaMaglic } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/TvrdjavaMaglic";
import { PlaninaGoc } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/PlaninaGoc";
import { ManastirDjurdjeviStupovi } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/ManastirDjurdjeviStupovi";
import { TvrdjavaStariRas } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/TvrdjavaStariRas";
import { ManastirSopocani } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/ManastirSopocani";
import { MacvanskiOkrug } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/MacvanskiOkrug";
import { RasinskiOkrug } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/RasinskiOkrug";
import { Krusevac } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/Krusevac";
import { JezeroCelije } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/JezeroCelije";
import { TvrdjavaKoznik } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/SrednjovekovnaTvrdjavaKoznik";
import { ManastirDjunis } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/ManastirDjunis";
import { SvetilisteMetodje } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/Metodje";
import { RibarskaBanja } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/RibarskaBanja";
import { ManastirLjubostinja } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/ManastirLjubostinja";
import { VodopadJelovarnik } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/VodopadJelovarnik";
import { JuznaIIStocnaSrbijaTekstModal } from "./components/StatisticRegions/IstocnaIJuznaSrbija/IstocnaIJuznaSrbijaTekstModal";
import { IstocnaiJuznaSrbija } from "./components/StatisticRegions/IstocnaIJuznaSrbija/IstocnaIJuznaSrbija";
import { PodunavskiOkrug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/PodunavskiOkrug";
import { Smederevo } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/Smederevo";
import { ManastirPokajnica } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/ManastirPokajnica";
import { SmederevskaTvrdjava } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/SmederevskaTvrdjava";
import { RadovanjskiLug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/RadovanjskiLug";
import { ManastirKoporin } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/ManastirKoporin";
import { BranicevskiOkrug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/BranicevskiOkrug";
import { Pozarevac } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/Pozarevac";
import { TvrdjavaGolubac } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/TvrdjavaGolubac";
import { SrebrnoJezero } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/SrebrnoJezero";
import { ManastirTumane } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/ManastirTumane";
import { KrupajskoVrelo } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/KrupajskoVrelo";
import { ManastirGornjak } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/ManastirGornjak";
import { PlaninaBeljanica } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/PlaninaBeljanica";
import { BorskiOkrug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/BorskiOkrug";
import { Bor } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/Bor";
import { DjerdapskaKlisura } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/DjerdapskaKlisura";
import { LazarevKanjon } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/LazarevKanjon";
import { LazarevaPecina } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/LazarevaPecina";
import { BorskoJezero } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/BorskoJezero";
import { LepenskiVir } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/LepenskiVir";
import { RajkovaPecina } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/RajkovaPecina";
import { ZajecarskiOkrug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/ZajecarskiOkrug";
import { Zajecar } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/Zajecar";
import { SokoBanja } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/Sokobanja";
import { PlaninaRtanj } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/PlaninaRtanj";
import { VodopadRipaljka } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/VodopadRipaljka";
import { SokoGrad } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/SokoGrad";
import { FelixRomulijana } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/FelixRomulijana";
import { NisavskiOkrug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/NisavskiOkrug";
import { JuznoBackiPathRoutes } from "./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/JuznoBackiPathRoutes";
import { nisavskiOkrugPathRoutes } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/NisavskiOkrugPathRoutes";
import { Nis } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/Nis";
import { Cegar } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/Cegar";
import { BovanskoJezero } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/BovanskoJezero";
import { SuvaPlanina } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/SuvaPlanina";
import { SicevackaKlisura } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/SicevackaKlisura";
import { ManastirSvetaPetkaIverica } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/ManastirSvetaPetkaIverica";
import { NiskaBanja } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/NiskaBanja";
import { ToplickiOkrug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/ToplickiOkrug";
import { toplickiOkurgPathRoutes } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/ToplickiOkurgPathRoutes";
import { Prokuplje } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/Prokuplje";
import { DjavoljaVaros } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/DjavoljaVaros";
import { PlaninaJastrebac } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/PlaninaJastrebac";
import { TvrdjavaHisar } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/HisarProkuplje";
import { ManastirSvetogNikole } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/ManastirSvetogNikole";
import { PlaninaRadan } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/PlaninaRadan";
import { pirotskiOkrugPathRoutes } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/PirotskiOkrugPathRoutes";
import { PirotskiOkrug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/PIrotskiOkrug";
import { Pirot } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/Pirot";
import { StaraPlanina } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/StaraPlanina";
import { ZavojskoJezero } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/ZavojskoJezero";
import { VodopadTupavica } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/VodopadTupavica";
import { ManastirSukovo } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/ManastirSukovo";
import { VodopadBigar } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/VodopadBigar";
import { KanjonRekeJerme } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/KanjonRekeJerme";
import { jablanickiOkrugPathRoutes } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/JablanickiOkrugPathRoutes";
import { JablanickiOkrug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/JablanickiOkrug";
import { Leskovac } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/Leskovac";
import { BrestovackoJezero } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/BrestovackoJezero";
import { PlaninaBabickaGora } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/PlaninaBabickaGora";
import { KanjonVucjanke } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/KanjonVucjanke";
import { PlaninaGoljak } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/PlaninaGoljak";
import { TularskaBanja } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/TularskaBanja";
import { pcinjskiOkrugPathRoutes } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PcinjskiOkrugPathRoutes";
import { PcinjskiOkrug } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PcinjskiOkrug";
import { Vranje } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/Vranje";
import { VlasinskoJezero } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/VlasinskoJezero";
import { PlaninaBesnaKobila } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PlaninaBesnaKobila";
import { ManastirProhoraPcinjskog } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/ManastirProhoraPcinjskog";

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
        <Route path={JuznoBackiPathRoutes.home} element={<JuznoBacki />} />
        <Route
          path={JuznoBackiPathRoutes.fruskaGora}
          element={<FruskaGora />}
        />
        <Route path={JuznoBackiPathRoutes.noviSad} element={<NoviSad />} />
        <Route
          path={JuznoBackiPathRoutes.manastirKrusedol}
          element={<ManastirKrusedol />}
        />
        <Route
          path={JuznoBackiPathRoutes.sremskiKarlovci}
          element={<SremskiKarlovci />}
        />
        <Route
          path={JuznoBackiPathRoutes.manastirBeocin}
          element={<ManastirBeocin />}
        />
        <Route
          path={JuznoBackiPathRoutes.sajkaskaOblast}
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
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica"
          element={<ManastirJosanica />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina"
          element={<ResavskaPecina />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo"
          element={<VodopadPrskalo />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManatirRavanica"
          element={<ManastirRavanica />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar"
          element={<PrirodnjackiCentar />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug"
          element={<RaskiOkrug />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo"
          element={<Kraljevo />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica"
          element={<ManastirStudenica />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik"
          element={<PlaninaKopaonik />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja"
          element={<VrnjackaBanja />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica"
          element={<ManastirZica />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic"
          element={<TvrdjavaMaglic />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc"
          element={<PlaninaGoc />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi"
          element={<ManastirDjurdjeviStupovi />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas"
          element={<TvrdjavaStariRas />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani"
          element={<ManastirSopocani />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RasinskiOkrug"
          element={<RasinskiOkrug />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RasinskiOkrug/Krusevac"
          element={<Krusevac />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RasinskiOkrug/JezeroCelije"
          element={<JezeroCelije />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RasinskiOkrug/TvrdjavaKoznik"
          element={<TvrdjavaKoznik />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RasinskiOkrug/ManastirDjunis"
          element={<ManastirDjunis />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RasinskiOkrug/SvetilisteMetodje"
          element={<SvetilisteMetodje />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RasinskiOkrug/RibarskaBanja"
          element={<RibarskaBanja />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RasinskiOkrug/ManastirLjubostinja"
          element={<ManastirLjubostinja />}
        />
        <Route
          path="/sumadijaTekstModal/SumadijaIZapadnaSrbija/RasinskiOkrug/VodopadJelovarnik"
          element={<VodopadJelovarnik />}
        />
        <Route
          path="/istocnaSrbijaTekstModal"
          element={<JuznaIIStocnaSrbijaTekstModal />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija"
          element={<IstocnaiJuznaSrbija />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/PodunavskiOkrug"
          element={<PodunavskiOkrug />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/PodunavskiOkrug/Smederevo"
          element={<Smederevo />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/PodunavskiOkrug/ManastirPokajnica"
          element={<ManastirPokajnica />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava"
          element={<SmederevskaTvrdjava />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/PodunavskiOkrug/RadovanjskiLug"
          element={<RadovanjskiLug />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/PodunavskiOkrug/ManastirKoporin"
          element={<ManastirKoporin />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BranicevskiOkrug"
          element={<BranicevskiOkrug />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BranicevskiOkrug/Pozarevac"
          element={<Pozarevac />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BranicevskiOkrug/TvrdjavaGolubac"
          element={<TvrdjavaGolubac />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BranicevskiOkrug/SrebrnoJezero"
          element={<SrebrnoJezero />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BranicevskiOkrug/ManastirTumane"
          element={<ManastirTumane />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BranicevskiOkrug/KrupajskoVrelo"
          element={<KrupajskoVrelo />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BranicevskiOkrug/ManastirGornjak"
          element={<ManastirGornjak />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BranicevskiOkrug/PlaninaBeljanica"
          element={<PlaninaBeljanica />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BorskiOkrug"
          element={<BorskiOkrug />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BorskiOkrug/Bor"
          element={<Bor />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BorskiOkrug/DjerdapskaKlisura"
          element={<DjerdapskaKlisura />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BorskiOkrug/LazarevKanjon"
          element={<LazarevKanjon />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BorskiOkrug/LazarevaPecina"
          element={<LazarevaPecina />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BorskiOkrug/BorskoJezero"
          element={<BorskoJezero />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BorskiOkrug/LepenskiVir"
          element={<LepenskiVir />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/BorskiOkrug/RajkovaPecina"
          element={<RajkovaPecina />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/ZajecarskiOkrug"
          element={<ZajecarskiOkrug />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/ZajecarskiOkrug/Zajecar"
          element={<Zajecar />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/ZajecarskiOkrug/SokoBanja"
          element={<SokoBanja />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/ZajecarskiOkrug/PlaninaRtanj"
          element={<PlaninaRtanj />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/ZajecarskiOkrug/VodopadRipaljka"
          element={<VodopadRipaljka />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/ZajecarskiOkrug/SokoGrad"
          element={<SokoGrad />}
        />
        <Route
          path="/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/ZajecarskiOkrug/Gamzigrad"
          element={<FelixRomulijana />}
        />
        <Route
          path={nisavskiOkrugPathRoutes.home}
          element={<NisavskiOkrug />}
        />
        <Route path={nisavskiOkrugPathRoutes.nis} element={<Nis />} />
        <Route path={nisavskiOkrugPathRoutes.cegar} element={<Cegar />} />
        <Route
          path={nisavskiOkrugPathRoutes.bovanskoJezero}
          element={<BovanskoJezero />}
        />
        <Route
          path={nisavskiOkrugPathRoutes.suvaPlanina}
          element={<SuvaPlanina />}
        />
        <Route
          path={nisavskiOkrugPathRoutes.sicevackaKlisura}
          element={<SicevackaKlisura />}
        />
        <Route
          path={nisavskiOkrugPathRoutes.manastirSvetaPetkaIverica}
          element={<ManastirSvetaPetkaIverica />}
        />
        <Route
          path={nisavskiOkrugPathRoutes.niskaBanja}
          element={<NiskaBanja />}
        />
        <Route
          path={toplickiOkurgPathRoutes.home}
          element={<ToplickiOkrug />}
        />
        <Route
          path={toplickiOkurgPathRoutes.prokuplje}
          element={<Prokuplje />}
        />
        <Route
          path={toplickiOkurgPathRoutes.djavoljaVaros}
          element={<DjavoljaVaros />}
        />
        <Route
          path={toplickiOkurgPathRoutes.jastrebac}
          element={<PlaninaJastrebac />}
        />
        <Route
          path={toplickiOkurgPathRoutes.hisar}
          element={<TvrdjavaHisar />}
        />
        <Route
          path={toplickiOkurgPathRoutes.hisar}
          element={<TvrdjavaHisar />}
        />
        <Route
          path={toplickiOkurgPathRoutes.manastirSvetogNikole}
          element={<ManastirSvetogNikole />}
        />
        <Route
          path={toplickiOkurgPathRoutes.planinaRadan}
          element={<PlaninaRadan />}
        />
        <Route
          path={pirotskiOkrugPathRoutes.home}
          element={<PirotskiOkrug />}
        />
        <Route path={pirotskiOkrugPathRoutes.pirot} element={<Pirot />} />
        <Route
          path={pirotskiOkrugPathRoutes.staraPlanina}
          element={<StaraPlanina />}
        />
        <Route
          path={pirotskiOkrugPathRoutes.zavojskoJezero}
          element={<ZavojskoJezero />}
        />
        <Route
          path={pirotskiOkrugPathRoutes.vodopadTupavica}
          element={<VodopadTupavica />}
        />
        <Route
          path={pirotskiOkrugPathRoutes.manastirSukovo}
          element={<ManastirSukovo />}
        />
        <Route
          path={pirotskiOkrugPathRoutes.vodopadBigar}
          element={<VodopadBigar />}
        />
        <Route
          path={pirotskiOkrugPathRoutes.jerma}
          element={<KanjonRekeJerme />}
        />
        <Route
          path={jablanickiOkrugPathRoutes.home}
          element={<JablanickiOkrug />}
        />
        <Route
          path={jablanickiOkrugPathRoutes.leskovac}
          element={<Leskovac />}
        />
        <Route
          path={jablanickiOkrugPathRoutes.brestovackoJezero}
          element={<BrestovackoJezero />}
        />
        <Route
          path={jablanickiOkrugPathRoutes.babickaGora}
          element={<PlaninaBabickaGora />}
        />
         <Route
          path={jablanickiOkrugPathRoutes.kanjonVucjanke}
          element={<KanjonVucjanke />}
        />
        <Route
          path={jablanickiOkrugPathRoutes.planinaGoljak}
          element={<PlaninaGoljak />}
        />
        <Route
          path={jablanickiOkrugPathRoutes.tularskaBanja}
          element={<TularskaBanja />}
        />
        <Route
          path={pcinjskiOkrugPathRoutes.home}
          element={<PcinjskiOkrug />}
        />
         <Route
          path={pcinjskiOkrugPathRoutes.vranje}
          element={<Vranje />}
        />
        <Route
          path={pcinjskiOkrugPathRoutes.vlasinskoJezero}
          element={<VlasinskoJezero />}
        />
        <Route
          path={pcinjskiOkrugPathRoutes.besnaKobila}
          element={<PlaninaBesnaKobila />}
        />
        <Route
          path={pcinjskiOkrugPathRoutes.prohorPcinjski}
          element={<ManastirProhoraPcinjskog />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
