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
import { PlaninaKukavica } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PlaninaKukavica";
import { PlaninaCemernik } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PlaninaCemernik";
import { KosovoIMetohijaTekstModal } from "./components/StatisticRegions/KosovoIMetohija/KosovoIMetohijaTekstModal";
import { KosovoIMetohija } from "./components/StatisticRegions/KosovoIMetohija/KosovoIMetohija";
import { peckiOkrugPathRoutes } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckiOkrugPathRoutes";
import { PeckiOkrug } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckiOkrug";
import { Pec } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/Pec";
import { PeckaPatrijarsija } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckaPatrijarsija";
import { PlaninaMokraGora } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PlaninaMokraGora";
import { VodopadBeliDrim } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/VodopadBeliDrim";
import { PlaninaZutiKamen } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PlaninaZutiKamen";
import { mitrovackiOkrugPathRoutes } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/MitrovackiOkrugPathRoutes";
import { MitrovackiOkrug } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/MitrovackiOkrug";
import { KosovskaMitrovica } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/KMitrovica";
import { ManastirBanjska } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/manastirBanjska";
import { GazivodskoJezero } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/GazivodskoJezero";
import { ManastirDevic } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/ManastirDevic";
import { pristinskiOkrugPathRoutes } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/PristinskiOkrugPathRoutes";
import { PristinskiOkrug } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/PristinskiOkrug";
import { Pristina } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/Pristina";
import { ManastirGracanica } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/Gracanica";
import { Gazimestan } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/Gazimestan";
import { MermernaPecina } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/MermernaPecina";
import { TvrdjavaNovoBrdo } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/TvrdjavaNovoBrdo";
import { prizrenskiOkrugPathRoutes } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Prizrenski/PrizrenskiOkrugPathRoutes";
import { PrizrenskiOkrug } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Prizrenski/PrizrenskiOkrug";
import { Prizren } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Prizrenski/Prizren";
import { ManastirSvetihArhangela } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Prizrenski/ManastirSvetihArhangela";
import { VodopadMirusa } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Prizrenski/VodopadMirusa";
import { djakovickiOkrugPathRoutes } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/DjakovickiOkrugPathRoutes";
import { DjakovickiOkrug } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/DjakovickiOkrug";
import { Djakovica } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/Djakovica";
import { ManastirVisokiDecani } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/ManastirVisokiDecani";
import { Prokletije } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/Prokletije";
import { urosevackiOkrugPathRoutes } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Uroevacki/UrosevackiOkrugPathRoutes";
import { UrosevackiOkrug } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Uroevacki/UrosevackiOkrug";
import { Urosevac } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Uroevacki/Urosevac";
import { Brezovica } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Uroevacki/Brezovica";
import { Ljuboten } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Uroevacki/Ljuboten";
import { gnjilanskiOkrugPathRoutes } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Gnjilanski/GnjilanskiOkrugPathRoutes";
import { GnjilanskiOkrug } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Gnjilanski/GnjilanskiOkrug";
import { Gnjilane } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Gnjilanski/Gnjilane";
import { ManastirUbozac } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Gnjilanski/ManastirUbozac";
import { TvrdjavaPodgradje } from "./components/StatisticRegions/KosovoIMetohija/Okruzi/Gnjilanski/PodgradjeTvrdjava";
import { beogradPathRoutes } from "./components/StatisticRegions/Beograd/BeogradPathRoutes";
import { borskiOkrugPathRoutes } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/BorskiOkrugPathRoutes";
import { branicevskiOkrugPathRoutes } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/BranicevskiOkrugPathRoutes";
import { podunavskiOkrugPathRoutes } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/PodunavskiOkrugPathRouts";
import { zajecarskiOkrugPathRoutes } from "./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/ZajecarskiOkrugPathRoutes";
import { kulubarskiOkrugPathRoutes } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/KolubarskiOkrugPathRoutes";
import { macvanskiOkrugPathRoutes } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/MacvanskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "./components/serbianMapPathRoutes";
import { moravickiOkrugPathRoutes } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/MoravickiOkrugPathRoutes";
import { pomoravskiOkrugPathRoutes } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/PomoravskiOkrugPathRoutes";
import { rasinskiOkrugData } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/rasinskiOkrugData";
import { rasinskiOkrugPathRoutes } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/RasinskiOkrugPathRoutes";
import { raskiOkrugPathRoutes } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/RaskiOkrugPathRoutes";
import { sumadijskiOkrugPathRoutes } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/SumadijskiOkrugPathRoutes";
import { zlatiborskiOkrugPathRoutes } from "./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ZlatiborskiOkrugPahtRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SerbianMap />} />
        <Route path={beogradPathRoutes.home} element={<Beograd />} />
        <Route path={beogradPathRoutes.beograd} element={<Beograd2 />} />
        <Route path={beogradPathRoutes.kalemegdan} element={<Kalemegdan />} />
        <Route path={beogradPathRoutes.hramSvetogSave} element={<HramSvetogSave />} />
        <Route path={beogradPathRoutes.knezMihajlova} element={<KnezMihailova />} />
        <Route path={beogradPathRoutes.trgRepublike} element={<TrgRepublike />} />
        <Route path={beogradPathRoutes.botanickaBasta} element={<BotanickaBata />} />
        <Route path={beogradPathRoutes.skadarlija} element={<Skadarlija />} />
        <Route path={beogradPathRoutes.adaCiganlija} element={<AdaCiganlija />} />
        <Route path={beogradPathRoutes.kosutnjak} element={<Kosutnjak />} />
 
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
        
        <Route
          path={serbianMapPathRoutes.SumadijaIZapadnaSrbijaModal}
          element={<SumadijaIZapadnaSrbijaTekstModal />}
        />
        <Route
          path={serbianMapPathRoutes.SumadijaIZapadnaSrbija}
          element={<SumadijaIZapadnaSrbija />}
        />
        <Route
          path={macvanskiOkrugPathRoutes.home}
          element={<MacvanskiOkrug />}
        />
        <Route
          path={macvanskiOkrugPathRoutes.sabac}
          element={<Sabac />}
        />
        <Route
          path={macvanskiOkrugPathRoutes.gucevo}
          element={<Gucevo />}
        />
        <Route
          path={macvanskiOkrugPathRoutes.zvornickoJezero}
          element={<ZvornickoJezero />}
        />
        <Route
          path={macvanskiOkrugPathRoutes.manastirTronosa}
          element={<ManastirTronosa />}
        />
        <Route
          path={macvanskiOkrugPathRoutes.planinaCer}
          element={<Cer />}
        />
        <Route
          path={macvanskiOkrugPathRoutes.mackovKamen}
          element={<MackovKamen />}
        />
        <Route
          path={macvanskiOkrugPathRoutes.trsic}
          element={<Trsic />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.home}
          element={<KolubarskiOkrug />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.valjevo}
          element={<Valjevo />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.taorskaVrela}
          element={<TaorskaVrela />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.petnickaPecina}
          element={<PetnickaPecina />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.rekaGradac}
          element={<RekaGradac />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.manastirLelic}
          element={<ManastirLelic />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.vidikovacVelikaStena}
          element={<VidikovacVelikaStena />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.vrhRajac}
          element={<VrhRajac />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.manastirCelije}
          element={<ManastirCelije />}
        />
        <Route
          path={kulubarskiOkrugPathRoutes.divcibare}
          element={<Divcibare />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.home}
          element={<SumadijskiOkrug />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.kragujevac}
          element={<Kragujevac />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.staraPridvornaCrkva}
          element={<StaraPridvornaCrkva />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.konakKnezaMihaila}
          element={<KonakKnezaMihaila />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.zgradaGimnazije}
          element={<ZgradaGimnazije />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.spomenikStarimSumadincima}
          element={<SpomenikPalimSumadincima />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.zgradaGimnazije}
          element={<ZgradaStareLivnice />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.arandjelovac}
          element={<Arandjelovac />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.oplenac}
          element={<Oplenac />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.gruzanskoJezero}
          element={<GruzanskoJezero />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.manastirBlagovestenjeRudnicko}
          element={<ManastirBlagovestenjeRudnicko />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.manastirPetkovica}
          element={<ManastirPetkovica />}
        />
        <Route
          path={sumadijskiOkrugPathRoutes.planinarskaStazaZezeljIBesnjaja}
          element={<PlaninarskaStazaZezeljIBesnjaja />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.home}
          element={<ZlatiborskiOkrug />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.uzice}
          element={<Uzice />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.rekaUvac}
          element={<RekaUvac />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.nacionalniParkTara}
          element={<NacionalniParkTara />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.planinaZlatibor}
          element={<PlaninaZlatibor />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.manastirMileseva}
          element={<ManastirMileseva />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.jezeroPerucac}
          element={<JezeroPerucac />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.vodopadSopotnice}
          element={<VodopadSopotnice />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.manastirRujan}
          element={<ManastirRujan />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.planinaZlatar}
          element={<PlaninaZlatar />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.zaovinskoJezero}
          element={<ZaovinskoJezero />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.stopicaPecina}
          element={<StopicaPecina />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.vodopadGostilje}
          element={<VodopadGostilje />}
        />
        <Route
          path={zlatiborskiOkrugPathRoutes.mokraGora}
          element={<MokraGora />}
        />
        <Route
          path={moravickiOkrugPathRoutes.home}
          element={<MoravickiOkrug />}
        />
        <Route
          path={moravickiOkrugPathRoutes.cacak}
          element={<Cacak />}
        />
        <Route
          path={moravickiOkrugPathRoutes.ovcarskoKablarskaKlisura}
          element={<OvcarskoKablarskaKlisura />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirJovanje}
          element={<ManastirJovanje />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirNikolje}
          element={<ManastirNikolje />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirPreobrazenje}
          element={<ManastirPreobraženje />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirSavinje}
          element={<ManastirSavinje />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirSveteTrojice}
          element={<ManastirSveteTrojice />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirUspenje}
          element={<ManastirUspenje />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirVavedenje}
          element={<ManastirVavedenje />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirVaznesenje}
          element={<ManastirVaznesenje />}
        />
        <Route
          path={moravickiOkrugPathRoutes.jezeroMedjuvrsje}
          element={<JezeroMedjuvrsje />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirBlagovestenje}
          element={<ManastirBlagovestenje />}
        />
        <Route
          path={moravickiOkrugPathRoutes.guca}
          element={<Guca />}
        />
        <Route
          path={moravickiOkrugPathRoutes.gornjiMilanovac}
          element={<GornjiMilanovac />}
        />
        <Route
          path={moravickiOkrugPathRoutes.planinaRudnik}
          element={<PlaninaRudnik />}
        />
        <Route
          path={moravickiOkrugPathRoutes.manastirSretenje}
          element={<ManastirSretenje />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.home}
          element={<PomoravskiOkrug />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.jagodina}
          element={<Jagodina />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.grza}
          element={<Grza />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.manastirManasija}
          element={<ManastirManasija />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.vodopadLisine}
          element={<VodopadLisine />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.manastirJosanica}
          element={<ManastirJosanica />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.resavskaPecina}
          element={<ResavskaPecina />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.vodopadPrskalo}
          element={<VodopadPrskalo />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.manastirRavanica}
          element={<ManastirRavanica />}
        />
        <Route
          path={pomoravskiOkrugPathRoutes.prirodnjackiCentar}
          element={<PrirodnjackiCentar />}
        />
        <Route
          path={raskiOkrugPathRoutes.home}
          element={<RaskiOkrug />}
        />
        <Route
          path={raskiOkrugPathRoutes.kraljevo}
          element={<Kraljevo />}
        />
        <Route
          path={raskiOkrugPathRoutes.manastirStudenica}
          element={<ManastirStudenica />}
        />
        <Route
          path={raskiOkrugPathRoutes.planinaKopaonik}
          element={<PlaninaKopaonik />}
        />
        <Route
          path={raskiOkrugPathRoutes.vrnjackaBanja}
          element={<VrnjackaBanja />}
        />
        <Route
          path={raskiOkrugPathRoutes.manastirZica}
          element={<ManastirZica />}
        />
        <Route
          path={raskiOkrugPathRoutes.tvrdjavaMaglic}
          element={<TvrdjavaMaglic />}
        />
        <Route
          path={raskiOkrugPathRoutes.planinaGoc}
          element={<PlaninaGoc />}
        />
        <Route
          path={raskiOkrugPathRoutes.manastirDjurdjeviStupovi}
          element={<ManastirDjurdjeviStupovi />}
        />
        <Route
          path={raskiOkrugPathRoutes.tvrdjavaStariRas}
          element={<TvrdjavaStariRas />}
        />
        <Route
          path={raskiOkrugPathRoutes.manastirSopocani}
          element={<ManastirSopocani />}
        />
        <Route
          path={rasinskiOkrugData.home}
          element={<RasinskiOkrug />}
        />
        <Route
          path={rasinskiOkrugPathRoutes.krusevac}
          element={<Krusevac />}
        />
        <Route
          path={rasinskiOkrugPathRoutes.jezeroCelije}
          element={<JezeroCelije />}
        />
        <Route
          path={rasinskiOkrugPathRoutes.tvrdjavaKoznik}
          element={<TvrdjavaKoznik />}
        />
        <Route
          path={rasinskiOkrugPathRoutes.manastirDjunis}
          element={<ManastirDjunis />}
        />
        <Route
          path={rasinskiOkrugPathRoutes.svetilisteMetodje}
          element={<SvetilisteMetodje />}
        />
        <Route
          path={rasinskiOkrugData.ribarskaBanja}
          element={<RibarskaBanja />}
        />
        <Route
          path={rasinskiOkrugPathRoutes.manastirLjubostinja}
          element={<ManastirLjubostinja />}
        />
        <Route
          path={rasinskiOkrugPathRoutes.vodopadJelovarnik}
          element={<VodopadJelovarnik />}
        />
        <Route
          path={serbianMapPathRoutes.IstocnaSrbijaTekstModal}
          element={<JuznaIIStocnaSrbijaTekstModal />}
        />
        <Route
          path={serbianMapPathRoutes.IstocnaSrbija}
          element={<IstocnaiJuznaSrbija />}
        />
        <Route
          path={podunavskiOkrugPathRoutes.home}
          element={<PodunavskiOkrug />}
        />
        <Route
          path={podunavskiOkrugPathRoutes.smederevo}
          element={<Smederevo />}
        />
        <Route
          path={podunavskiOkrugPathRoutes.manastirPokajnica}
          element={<ManastirPokajnica />}
        />
        <Route
          path={podunavskiOkrugPathRoutes.smedervskaTvrdjava}
          element={<SmederevskaTvrdjava />}
        />
        <Route
          path={podunavskiOkrugPathRoutes.radovanjskiLug}
          element={<RadovanjskiLug />}
        />
        <Route
          path={podunavskiOkrugPathRoutes.manastirKoporin}
          element={<ManastirKoporin />}
        />
        <Route
          path={branicevskiOkrugPathRoutes.home}
          element={<BranicevskiOkrug />}
        />
        <Route
          path={branicevskiOkrugPathRoutes.pozarevac}
          element={<Pozarevac />}
        />
        <Route
          path={branicevskiOkrugPathRoutes.tvrdjavaGolubac}
          element={<TvrdjavaGolubac />}
        />
        <Route
          path={branicevskiOkrugPathRoutes.srebrnoJezero}
          element={<SrebrnoJezero />}
        />
        <Route
          path={branicevskiOkrugPathRoutes.manastirTumane}
          element={<ManastirTumane />}
        />
        <Route
          path={branicevskiOkrugPathRoutes.krupajskoVrelo}
          element={<KrupajskoVrelo />}
        />
        <Route
          path={branicevskiOkrugPathRoutes.manastirGornjak}
          element={<ManastirGornjak />}
        />
        <Route
          path={branicevskiOkrugPathRoutes.planinaBeljanica}
          element={<PlaninaBeljanica />}
        />
        <Route
          path={borskiOkrugPathRoutes.home}
          element={<BorskiOkrug />}
        />
        <Route
          path={borskiOkrugPathRoutes.bor}
          element={<Bor />}
        />
        <Route
          path={borskiOkrugPathRoutes.djerdapskaKlisura}
          element={<DjerdapskaKlisura />}
        />
        <Route
          path={borskiOkrugPathRoutes.lazarevKanjon}
          element={<LazarevKanjon />}
        />
        <Route
          path={borskiOkrugPathRoutes.lazarevaPecina}
          element={<LazarevaPecina />}
        />
        <Route
          path={borskiOkrugPathRoutes.borskoJezero}
          element={<BorskoJezero />}
        />
        <Route
          path={borskiOkrugPathRoutes.lepenskiVir}
          element={<LepenskiVir />}
        />
        <Route
          path={borskiOkrugPathRoutes.rajkovaPecina}
          element={<RajkovaPecina />}
        />
        <Route
          path={zajecarskiOkrugPathRoutes.home}
          element={<ZajecarskiOkrug />}
        />
        <Route
          path={zajecarskiOkrugPathRoutes.zajecar}
          element={<Zajecar />}
        />
        <Route
          path={zajecarskiOkrugPathRoutes.sokoBanja}
          element={<SokoBanja />}
        />
        <Route
          path={zajecarskiOkrugPathRoutes.planinaRtanj}
          element={<PlaninaRtanj />}
        />
        <Route
          path={zajecarskiOkrugPathRoutes.vodopadRipaljka}
          element={<VodopadRipaljka />}
        />
        <Route
          path={zajecarskiOkrugPathRoutes.sokoGrad}
          element={<SokoGrad />}
        />
        <Route
          path={zajecarskiOkrugPathRoutes.gamzigrad}
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
        <Route path={pcinjskiOkrugPathRoutes.vranje} element={<Vranje />} />
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
        <Route
          path={pcinjskiOkrugPathRoutes.planinaKukavica}
          element={<PlaninaKukavica />}
        />
        <Route
          path={pcinjskiOkrugPathRoutes.planinaCemernik}
          element={<PlaninaCemernik />}
        />
        <Route
          path={"/KosovoIMetohijaTekstModal"}
          element={<KosovoIMetohijaTekstModal />}
        />
        <Route
          path={"/KosovoIMetohijaTekstModal/KosovoIMetohija"}
          element={<KosovoIMetohija />}
        />
        <Route path={peckiOkrugPathRoutes.home} element={<PeckiOkrug />} />
        <Route path={peckiOkrugPathRoutes.pec} element={<Pec />} />
        <Route path={peckiOkrugPathRoutes.peckaPatrijarsija} element={<PeckaPatrijarsija />} />
        <Route path={peckiOkrugPathRoutes.mokraGora} element={<PlaninaMokraGora />} />
        <Route path={peckiOkrugPathRoutes.vodopadBeliDrim} element={<VodopadBeliDrim />} />
        <Route path={peckiOkrugPathRoutes.planinaZutiKamen} element={<PlaninaZutiKamen />} />
        <Route path={mitrovackiOkrugPathRoutes.home} element={<MitrovackiOkrug />} />
        <Route path={mitrovackiOkrugPathRoutes.mitrovica} element={<KosovskaMitrovica />} />
        <Route path={mitrovackiOkrugPathRoutes.banjska} element={<ManastirBanjska />} />
        <Route path={mitrovackiOkrugPathRoutes.gazivode} element={<GazivodskoJezero />} />
        <Route path={mitrovackiOkrugPathRoutes.devic} element={<ManastirDevic />} />
        <Route path={pristinskiOkrugPathRoutes.home} element={<PristinskiOkrug />} />
        <Route path={pristinskiOkrugPathRoutes.pristina} element={<Pristina />} />
        <Route path={pristinskiOkrugPathRoutes.gracanica} element={<ManastirGracanica />} />
        <Route path={pristinskiOkrugPathRoutes.gazimestan} element={<Gazimestan />} />
        <Route path={pristinskiOkrugPathRoutes.mermernaPecina} element={<MermernaPecina />} />
        <Route path={pristinskiOkrugPathRoutes.tvrdjavaNovoBrdo} element={<TvrdjavaNovoBrdo />} />
        <Route path={prizrenskiOkrugPathRoutes.home} element={<PrizrenskiOkrug />} />
        <Route path={prizrenskiOkrugPathRoutes.prizren} element={<Prizren />} />
        <Route path={prizrenskiOkrugPathRoutes.manastirSvetihArhangela} element={<ManastirSvetihArhangela />} />
        <Route path={prizrenskiOkrugPathRoutes.vodopadMirusa} element={<VodopadMirusa />} />
        <Route path={djakovickiOkrugPathRoutes.home} element={<DjakovickiOkrug />} />
        <Route path={djakovickiOkrugPathRoutes.djakovica} element={<Djakovica />} />
        <Route path={djakovickiOkrugPathRoutes.decani} element={<ManastirVisokiDecani />} />
        <Route path={djakovickiOkrugPathRoutes.prokletije} element={<Prokletije />} />
        <Route path={urosevackiOkrugPathRoutes.home} element={<UrosevackiOkrug />} />
        <Route path={urosevackiOkrugPathRoutes.urosevac} element={<Urosevac />} />
        <Route path={urosevackiOkrugPathRoutes.brezovica} element={<Brezovica />} />
        <Route path={urosevackiOkrugPathRoutes.ljuboten} element={<Ljuboten />} />
        <Route path={gnjilanskiOkrugPathRoutes.home} element={<GnjilanskiOkrug />} />
        <Route path={gnjilanskiOkrugPathRoutes.gnjilane} element={<Gnjilane />} />
        <Route path={gnjilanskiOkrugPathRoutes.ubozac} element={<ManastirUbozac />} />
        <Route path={gnjilanskiOkrugPathRoutes.podgradje} element={<TvrdjavaPodgradje />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
