/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
const VojvodinaTekstModal = lazy(() => import("./components/StatisticRegions/Vojvodina/VojvodinaTekstModal"))
const Vojvodina = lazy(() => import("./components/StatisticRegions/Vojvodina/Vojvodina"))
const ZapadnoBacki = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/ZapadnoBacki"))
const Sombor = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/Sombor"))
const GornjePodunavlje = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/GornjePodunavlje"))
const Apatin = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/ApatinIApatinskeTerminalneVode"))
const VelikiBackiKanal = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/VelikiBackiKanal"))
const ManastirBodjani = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/ManastirBodjani"))
const SalasiUBackoj = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/SalasiUBackoj"))
const DunavskeAde = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/DunavskeAde"))
const SevernoBacki = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/SevernoBacki"))
const PalićkoJezero = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/PalićkoJezero"))
const Subotica = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/Subotica"))
const RekaTisa = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/RekaTisa"))
const SubotickaPescara = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/SubotickaPescara"))
const BackaTopola = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/BackaTopola"))
const BackoTopolskoJezero = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBacki/BackoTopolskoJezero"))
const SevernoBanatski = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/SevernoBanatski"))
const Kikinda = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/Kikinda"))
const Kanjiza = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/KanjizaITermalneVode"))
const SelevenjskePustare = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/SelevenjskePustare"))
const RezervatVelikeDroplje = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/RezervatVelikeDroplje"))
const Senta = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/Senta"))
const JuznoBacki = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/JuznoBacki"))
const FruskaGora = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/FruskaGora"))
const NoviSad = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/NoviSad"))
const BelaCrkva = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/BelaCrkva"))
const ManastirKrusedol = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/ManastirKrusedol"))
const SremskiKarlovci = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/SremskiKarlovci"))
const ManastirBeocin = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/ManastirBeocin"))
const SrednjeBanatski = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/SrednjeBanatski"))
const Zrenjanin = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/Zrenjanin"))
const SajkaskaOblast = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBacki/SajkaskaOblast"))
const NoviBecej = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/NoviBecej"))
const SlanoKopovo = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/SlanoKopovo"))
const StaraTisa = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/StaraTisa"))
const KupalistePeskara = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/KupalistePeskara"))
const SremskiOkrug = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/Sremski/SremskiOkrug"))
const SremskaMitrovica = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/Sremski/SremskaMitrovica"))
const SRPZasavica = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/Sremski/SRPZasavica"))
const Indjija = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/Sremski/Inđija"))
const SotskoJezero = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/Sremski/SotskoJezero"))
const ManastirNovoHopovo = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/Sremski/ManastirNovoHopovo"))
const Sid = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/Sremski/Sid"))
const ManastirJazak = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/Sremski/ManastirJazak"))
const BesenovackoJezero = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/Sremski/BesenovackoJezero"))
const JuznoBanatski = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/JuznoBanatski"))
const Pancevo = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/Pancevo"))
const VracevgajskoJezero = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/VracevgajskoJezero"))
const DelibaltskaPescaraIZagajickaBrda = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/DelibaltskaPescaraIZagajickaBrda"))
const Vrsac = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/Vrsac"))
const SRPKraljevac = lazy(() => import("./components/StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/SRPKraljevac"))
const Beograd = lazy(() => import("./components/StatisticRegions/Beograd/Beograd"))
const Beograd2 = lazy(() => import("./components/StatisticRegions/Beograd/Beograd2"))
const Kalemegdan = lazy(() => import("./components/StatisticRegions/Beograd/Kalemegdan"))
const HramSvetogSave = lazy(() => import("./components/StatisticRegions/Beograd/HramSvetogSave"))
const KnezMihailova = lazy(() => import("./components/StatisticRegions/Beograd/KnezMihajlova"))
const TrgRepublike = lazy(() => import("./components/StatisticRegions/Beograd/TrgRepublike"))
const BotanickaBata = lazy(() => import("./components/StatisticRegions/Beograd/BotanickaBasta"))
const Skadarlija = lazy(() => import("./components/StatisticRegions/Beograd/Skadarlija"))
const AdaCiganlija = lazy(() => import("./components/StatisticRegions/Beograd/AdaCiganlija"))
const Kosutnjak = lazy(() => import("./components/StatisticRegions/Beograd/Kosutnjak"))
const SumadijaIZapadnaSrbijaTekstModal = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/SumdijaIZapadnaSrbijaTekstModal"))
const SumadijaIZapadnaSrbija = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/SumadijaIZapadnaSrbija"))
const MacvanskiOkrug = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/MacvanskiOkrug"))
const Sabac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/Sabac"))
const Gucevo = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/Gucevo"))
const ZvornickoJezero = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/ZvornickoJezero"))
const ManastirTronosa = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/ManastirTronosa"))
const Cer = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/PlaninaCer"))
const MackovKamen = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/MackovKamen"))
const Trsic = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/Trsic"))
const KolubarskiOkrug = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/KulubarskiOkrug"))
const Valjevo = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/Valjevo"))
const TaorskaVrela = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/TaorskaVrela"))
const PetnickaPecina = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/PetnickaPecina"))
const RekaGradac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/RekaGradac"))
const ManastirLelic = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/ManastirLelic"))
const VidikovacVelikaStena = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/VidikovacVelikaStena"))
const VrhRajac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/VrhRajac"))
const ManastirCelije = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/ManastirCelije"))
const Divcibare = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/Divcibare"))
const SumadijskiOkrug = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/SumadijskiOkrug"))
const Kragujevac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Kragujevac"))
const StaraPridvornaCrkva = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/MilosevVenacKragujevac/StaraPridvornacrkva"))
const KonakKnezaMihaila = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/MilosevVenacKragujevac/KonakKnezaMihaila"))
const ZgradaGimnazije = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/MilosevVenacKragujevac/ZgradaGimnazije"))
const SpomenikPalimSumadincima = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/MilosevVenacKragujevac/SpomenikPalimZumadincima"))
const ZgradaStareLivnice = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/MilosevVenacKragujevac/ZgradaStareLinvice"))
const Arandjelovac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Arandjelovac"))
const Oplenac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/Oplenac"))
const GruzanskoJezero = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/GruzanskoJezero"))
const ManastirBlagovestenjeRudnicko = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/ManastirBlagovestenjeRudnicko"))
const ManastirPetkovica = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/ManastirPetkovica"))
const PlaninarskaStazaZezeljIBesnjaja = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/PlaninrskaStazaZezeljIBesnjaja"))
const ZlatiborskiOkrug = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ZlatiborskiOkrug"))
const Uzice = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/Uzice"))
const RekaUvac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/Uvac"))
const NacionalniParkTara = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/NacionalniParkTara"))
const PlaninaZlatibor = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/PlaninaZlatibor"))
const ManastirMileseva = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ManastirMileseva"))
const JezeroPerucac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/JezeroPerucac"))
const VodopadSopotnice = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/VodopadSopotnice"))
const ManastirRujan = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ManastirRujan"))
const PlaninaZlatar = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/PlaninaZlatar"))
const ZaovinskoJezero = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ZaovinskoJezero"))
const StopicaPecina = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/StopicaPecina"))
const VodopadGostilje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/VodopadGostilje"))
const MokraGora = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/MokraGora"))
const MoravickiOkrug = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/MoravickiOkrug"))
const Cacak = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/Cacak"))
const JezeroMedjuvrsje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/JezeroMedjuvrsje"))
const ManastirBlagovestenje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/ManastirBlagovestenje"))
const Guca = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/Guca"))
const GornjiMilanovac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/GornjiMilanovac"))
const OvcarskoKablarskaKlisura = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/OvcarskoKablarskaKlisura"))
const ManastirJovanje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirJovanje"))
const ManastirNikolje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirNikolje"))
const ManastirPreobraženje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirPreobrazenje"))
const ManastirSavinje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirSavinje"))
const ManastirSveteTrojice = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirSveteTrojice"))
const ManastirUspenje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirUspenje"))
const ManastirVavedenje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirVavedenje"))
const ManastirVaznesenje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/SrpskaSvetaGora/ManastirVaznesenje"))
const PlaninaRudnik = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/PlaninaRudnik"))
const ManastirSretenje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/ManastirSretenje"))
const PomoravskiOkrug = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/PomoravskiOkrug"))
const Jagodina = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/Jagodina"))
const Grza = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/Grza"))
const ManastirManasija = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/ManastirManasija"))
const VodopadLisine = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/VodopadLisine"))
const ManastirJosanica = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/ManastirJosanica"))
const ResavskaPecina = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/ResavskaPecina"))
const VodopadPrskalo = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/VodopadPrskalo"))
const ManastirRavanica = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/ManastirRavanica"))
const PrirodnjackiCentar = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/PrirodnjackiCentar"))
const RaskiOkrug = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/RaskiOkrug"))
const Kraljevo = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/Kraljevo"))
const ManastirStudenica = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/ManastirStudenica"))
const PlaninaKopaonik = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/PlaninaKopaonik"))
const VrnjackaBanja = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/VrnjackaBanja"))
const ManastirZica = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/ManastirZica"))
const TvrdjavaMaglic = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/TvrdjavaMaglic"))
const PlaninaGoc = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/PlaninaGoc"))
const ManastirDjurdjeviStupovi = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/ManastirDjurdjeviStupovi"))
const TvrdjavaStariRas = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/TvrdjavaStariRas"))
const ManastirSopocani = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/ManastirSopocani"))
const RasinskiOkrug = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/RasinskiOkrug"))
const Krusevac = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/Krusevac"))
const JezeroCelije = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/JezeroCelije"))
const TvrdjavaKoznik = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/SrednjovekovnaTvrdjavaKoznik"))
const ManastirDjunis = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/ManastirDjunis"))
const SvetilisteMetodje = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/Metodje"))
const RibarskaBanja = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/RibarskaBanja"))
const ManastirLjubostinja = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/ManastirLjubostinja"))
const VodopadJelovarnik = lazy(() => import("./components/StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/VodopadJelovarnik"))
const JuznaIIStocnaSrbijaTekstModal = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/IstocnaIJuznaSrbijaTekstModal"))
const IstocnaiJuznaSrbija = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/IstocnaIJuznaSrbija"))
const PodunavskiOkrug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/PodunavskiOkrug"))
const Smederevo = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/Smederevo"))
const ManastirPokajnica = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/ManastirPokajnica"))
const SmederevskaTvrdjava = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/SmederevskaTvrdjava"))
const RadovanjskiLug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/RadovanjskiLug"))
const ManastirKoporin = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/ManastirKoporin"))
const BranicevskiOkrug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/BranicevskiOkrug"))
const Pozarevac = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/Pozarevac"))
const TvrdjavaGolubac = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/TvrdjavaGolubac"))
const SrebrnoJezero = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/SrebrnoJezero"))
const ManastirTumane = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/ManastirTumane"))
const KrupajskoVrelo = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/KrupajskoVrelo"))
const ManastirGornjak = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/ManastirGornjak"))
const PlaninaBeljanica = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/PlaninaBeljanica"))
const BorskiOkrug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/BorskiOkrug"))
const Bor = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/Bor"))
const DjerdapskaKlisura = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/DjerdapskaKlisura"))
const LazarevKanjon = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/LazarevKanjon"))
const LazarevaPecina = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/LazarevaPecina"))
const BorskoJezero = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/BorskoJezero"))
const LepenskiVir = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/LepenskiVir"))
const RajkovaPecina = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/RajkovaPecina"))
const ZajecarskiOkrug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/ZajecarskiOkrug"))
const Zajecar = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/Zajecar"))
const SokoBanja = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/Sokobanja"))
const PlaninaRtanj = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/PlaninaRtanj"))
const VodopadRipaljka = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/VodopadRipaljka"))
const SokoGrad = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/SokoGrad"))
const FelixRomulijana = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/FelixRomulijana"))
const NisavskiOkrug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/NisavskiOkrug"))
const Nis = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/Nis"))
const Cegar = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/Cegar"))
const BovanskoJezero = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/BovanskoJezero"))
const SuvaPlanina = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/SuvaPlanina"))
const SicevackaKlisura = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/SicevackaKlisura"))
const ManastirSvetaPetkaIverica = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/ManastirSvetaPetkaIverica"))
const NiskaBanja = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/NiskaBanja"))
const ToplickiOkrug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/ToplickiOkrug"))
const Prokuplje = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/Prokuplje"))
const DjavoljaVaros = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/DjavoljaVaros"))
const PlaninaJastrebac = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/PlaninaJastrebac"))
const TvrdjavaHisar = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/HisarProkuplje"))
const ManastirSvetogNikole = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/ManastirSvetogNikole"))
const PlaninaRadan = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/PlaninaRadan"))
const PirotskiOkrug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/PIrotskiOkrug"))
const Pirot = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/Pirot"))
const StaraPlanina = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/StaraPlanina"))
const ZavojskoJezero = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/ZavojskoJezero"))
const VodopadTupavica = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/VodopadTupavica"))
const ManastirSukovo = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/ManastirSukovo"))
const VodopadBigar = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/VodopadBigar"))
const KanjonRekeJerme = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/KanjonRekeJerme"))
const JablanickiOkrug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/JablanickiOkrug"))
const Leskovac = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/Leskovac"))
const BrestovackoJezero = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/BrestovackoJezero"))
const PlaninaBabickaGora = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/PlaninaBabickaGora"))
const KanjonVucjanke = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/KanjonVucjanke"))
const PlaninaGoljak = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/PlaninaGoljak"))
const TularskaBanja = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/TularskaBanja"))
const PcinjskiOkrug = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PcinjskiOkrug"))
const Vranje = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/Vranje"))
const VlasinskoJezero = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/VlasinskoJezero"))
const PlaninaBesnaKobila = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PlaninaBesnaKobila"))
const ManastirProhoraPcinjskog = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/ManastirProhoraPcinjskog"))
const PlaninaKukavica = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PlaninaKukavica"))
const PlaninaCemernik = lazy(() => import("./components/StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PlaninaCemernik"))
const KosovoIMetohijaTekstModal = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/KosovoIMetohijaTekstModal"))
const KosovoIMetohija = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/KosovoIMetohija"))
const PeckiOkrug = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckiOkrug"))
const Pec = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/Pec"))
const PeckaPatrijarsija = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckaPatrijarsija"))
const PlaninaMokraGora = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PlaninaMokraGora"))
const VodopadBeliDrim = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/VodopadBeliDrim"))
const PlaninaZutiKamen = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PlaninaZutiKamen"))
const MitrovackiOkrug = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/MitrovackiOkrug"))
const KosovskaMitrovica = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/KMitrovica"))
const ManastirBanjska = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/manastirBanjska"))
const GazivodskoJezero = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/GazivodskoJezero"))
const ManastirDevic = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/ManastirDevic"))
const PristinskiOkrug = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/PristinskiOkrug"))
const Pristina = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/Pristina"))
const ManastirGracanica = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PlaninaZutiKamen"))
const Gazimestan = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/Gazimestan"))
const MermernaPecina = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/MermernaPecina"))
const TvrdjavaNovoBrdo = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckiOkrug"))
const PrizrenskiOkrug = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/Pec"))
const Prizren = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckaPatrijarsija"))
const ManastirSvetihArhangela = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PlaninaMokraGora"))
const VodopadMirusa = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/VodopadBeliDrim"))
const DjakovickiOkrug = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/DjakovickiOkrug"))
const Djakovica = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/Djakovica"))
const ManastirVisokiDecani = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/ManastirVisokiDecani"))
const Prokletije = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/Prokletije"))
const UrosevackiOkrug = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/ManastirDevic"))
const Urosevac = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/PristinskiOkrug"))
const Brezovica = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/Pristina"))
const Ljuboten = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PlaninaZutiKamen"))
const GnjilanskiOkrug = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/KosovoIMetohijaTekstModal"))
const Gnjilane = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/KosovoIMetohija"))
const ManastirUbozac = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckiOkrug"))
const TvrdjavaPodgradje = lazy(() => import("./components/StatisticRegions/KosovoIMetohija/Okruzi/Pecki/Pec"))
import { Layout } from "./components/Layout";
import { HomePage } from "./homePage";
const Home = lazy(() => import('../src/homePage'));
const SerbianMapComp = lazy(() => import('../src/components/SerbianMap'));



function App() {
  return (

    <Layout>

      <Routes>


        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>} />

        <Route path="/serbianMap"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SerbianMapComp />
            </Suspense>} />


        <Route path="/:lang/beograd" element={<Suspense fallback={<div>Loading...</div>}><Beograd /></Suspense>} />
        <Route path="/:lang/beograd/beograd2" element={<Suspense fallback={<div>Loading...</div>}><Beograd2 /></Suspense>} />
        <Route path="/:lang/beograd/kalemegdan" element={<Suspense fallback={<div>Loading...</div>}><Kalemegdan /></Suspense>} />
        <Route path="/:lang/beograd/hram-svetog-save" element={<Suspense fallback={<div>Loading...</div>}><HramSvetogSave /></Suspense>} />
        <Route path="/:lang/beograd/knez-mihajlova" element={<Suspense fallback={<div>Loading...</div>}><KnezMihailova /></Suspense>} />
        <Route path="/:lang/beograd/trg-republike" element={<Suspense fallback={<div>Loading...</div>}><TrgRepublike /></Suspense>} />
        <Route path="/:lang/beograd/botanicka-basta" element={<Suspense fallback={<div>Loading...</div>}><BotanickaBata /></Suspense>} />
        <Route path="/:lang/beograd/skadarlija" element={<Suspense fallback={<div>Loading...</div>}><Skadarlija /></Suspense>} />
        <Route path="/:lang/beograd/ada-ciganlija" element={<Suspense fallback={<div>Loading...</div>}><AdaCiganlija /></Suspense>} />
        <Route path="/:lang/beograd/kosutnjak" element={<Suspense fallback={<div>Loading...</div>}><Kosutnjak /></Suspense>} />

        <Route
          path="/:lang/vojvodina-tekst-modal"
          element={<Suspense fallback={<div>Loading...</div>}><VojvodinaTekstModal /></Suspense>}
        />

        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina"
          element={<Suspense fallback={<div>Loading...</div>}><Vojvodina /></Suspense>}
        />

        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi"
          element={<Suspense fallback={<div>Loading...</div>}><ZapadnoBacki /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/sombor"
          element={<Suspense fallback={<div>Loading...</div>}><Sombor /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/gornje-podunavlje"
          element={<Suspense fallback={<div>Loading...</div>}><GornjePodunavlje /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/apatin-i-terminalne-vode"
          element={<Suspense fallback={<div>Loading...</div>}><Apatin /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/veliki-backi-kanal"
          element={<Suspense fallback={<div>Loading...</div>}><VelikiBackiKanal /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/manastir-bodjani"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirBodjani /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/salasi-u-backoj"
          element={<Suspense fallback={<div>Loading...</div>}><SalasiUBackoj /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/zapadno-backi/dunavske-ade"
          element={<Suspense fallback={<div>Loading...</div>}><DunavskeAde /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-backi"
          element={<Suspense fallback={<div>Loading...</div>}><SevernoBacki /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/palicko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><PalićkoJezero /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/subotica"
          element={<Suspense fallback={<div>Loading...</div>}><Subotica /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/tisa"
          element={<Suspense fallback={<div>Loading...</div>}><RekaTisa /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/suboticka-pescara"
          element={<Suspense fallback={<div>Loading...</div>}><SubotickaPescara /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/backa-topola"
          element={<Suspense fallback={<div>Loading...</div>}><BackaTopola /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-backi/backo-topolsko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><BackoTopolskoJezero /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski"
          element={<Suspense fallback={<div>Loading...</div>}><SevernoBanatski /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/kikinda"
          element={<Suspense fallback={<div>Loading...</div>}><Kikinda /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/kanjiza"
          element={<Suspense fallback={<div>Loading...</div>}><Kanjiza /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/selevenjske-pustare"
          element={<Suspense fallback={<div>Loading...</div>}><SelevenjskePustare /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/rezervat-velike-droplje"
          element={<Suspense fallback={<div>Loading...</div>}><RezervatVelikeDroplje /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/severno-banatski/senta"
          element={<Suspense fallback={<div>Loading...</div>}><Senta /></Suspense>}
        />
        <Route path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi" element={<Suspense fallback={<div>Loading...</div>}><JuznoBacki /></Suspense>} />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/fruska-gora"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FruskaGora />
            </Suspense>
          }
        />
        <Route path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/novi-sad" element={<Suspense fallback={<div>Loading...</div>}><NoviSad /></Suspense>} />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/manastir-krusedol"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirKrusedol /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/sremski-karlovci"
          element={<Suspense fallback={<div>Loading...</div>}><SremskiKarlovci /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/manastir-beocin"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirBeocin /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-backi/sajkaska-oblast"
          element={<Suspense fallback={<div>Loading...</div>}><SajkaskaOblast /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski"
          element={<Suspense fallback={<div>Loading...</div>}><SrednjeBanatski /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/zrenjanin"
          element={<Suspense fallback={<div>Loading...</div>}><Zrenjanin /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/novi-becej"
          element={<Suspense fallback={<div>Loading...</div>}><NoviBecej /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/slano-kopovo"
          element={<Suspense fallback={<div>Loading...</div>}><SlanoKopovo /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/stara-tisa"
          element={<Suspense fallback={<div>Loading...</div>}><StaraTisa /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/srednje-banatski/kupaliste-peskara"
          element={<Suspense fallback={<div>Loading...</div>}><KupalistePeskara /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><SremskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/sremska-mitrovica"
          element={<Suspense fallback={<div>Loading...</div>}><SremskaMitrovica /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/srp-sasavica"
          element={<Suspense fallback={<div>Loading...</div>}><SRPZasavica /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/indjija"
          element={<Suspense fallback={<div>Loading...</div>}><Indjija /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/sotsko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><SotskoJezero /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/novo-hopovo"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirNovoHopovo /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/sid"
          element={<Suspense fallback={<div>Loading...</div>}><Sid /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/manastir-jazak"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirJazak /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/sremski-okrug/besenovacko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><BesenovackoJezero /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski"
          element={<Suspense fallback={<div>Loading...</div>}><JuznoBanatski /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/pancevo"
          element={<Suspense fallback={<div>Loading...</div>}><Pancevo /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/bela-crkva"
          element={<Suspense fallback={<div>Loading...</div>}><BelaCrkva /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/vracevgajsko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><VracevgajskoJezero /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/delibaltska-pescara-i-zagajicka-brda"
          element={<Suspense fallback={<div>Loading...</div>}><DelibaltskaPescaraIZagajickaBrda /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/vrsac"
          element={<Suspense fallback={<div>Loading...</div>}><Vrsac /></Suspense>}
        />
        <Route
          path="/:lang/vojvodina-tekst-modal/vojvodina/juzno-banatski/srp-kraljevac"
          element={<Suspense fallback={<div>Loading...</div>}><SRPKraljevac /></Suspense>}
        />

        <Route
          path="/:lang/sumadija-tekst-modal"
          element={<Suspense fallback={<div>Loading...</div>}><SumadijaIZapadnaSrbijaTekstModal /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija"
          element={<Suspense fallback={<div>Loading...</div>}><SumadijaIZapadnaSrbija /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><MacvanskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/sabac"
          element={<Suspense fallback={<div>Loading...</div>}><Sabac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/gucevo"
          element={<Suspense fallback={<div>Loading...</div>}><Gucevo /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/zvornicko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><ZvornickoJezero /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/manastir-tronosa"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirTronosa /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/planina-cer"
          element={<Suspense fallback={<div>Loading...</div>}><Cer /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/mackov-kamen"
          element={<Suspense fallback={<div>Loading...</div>}><MackovKamen /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/trsic"
          element={<Suspense fallback={<div>Loading...</div>}><Trsic /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><KolubarskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/valjevo"
          element={<Suspense fallback={<div>Loading...</div>}><Valjevo /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/taorska-vrela"
          element={<Suspense fallback={<div>Loading...</div>}> <TaorskaVrela /> </Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/petnicka-pecina"
          element={<Suspense fallback={<div>Loading...</div>}><PetnickaPecina /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/reka-gradac"
          element={<Suspense fallback={<div>Loading...</div>}><RekaGradac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-lelic"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirLelic /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vidikovac-velika-stena"
          element={<Suspense fallback={<div>Loading...</div>}><VidikovacVelikaStena /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vrh-rajac"
          element={<Suspense fallback={<div>Loading...</div>}><VrhRajac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-celije"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirCelije /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/divcibare"
          element={<Suspense fallback={<div>Loading...</div>}><Divcibare /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><SumadijskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/"
          element={<Suspense fallback={<div>Loading...</div>}><Kragujevac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/stara-pridvorna-crkva"
          element={<Suspense fallback={<div>Loading...</div>}><StaraPridvornaCrkva /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/konak-kneza-mihaila"
          element={<Suspense fallback={<div>Loading...</div>}><KonakKnezaMihaila /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-gimnazije"
          element={<Suspense fallback={<div>Loading...</div>}><ZgradaGimnazije /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/spomenik-palim-sumadincima"
          element={<Suspense fallback={<div>Loading...</div>}><SpomenikPalimSumadincima /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-stare-livnice"
          element={<Suspense fallback={<div>Loading...</div>}><ZgradaStareLivnice /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/arandjelovac"
          element={<Suspense fallback={<div>Loading...</div>}><Arandjelovac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/oplenac"
          element={<Suspense fallback={<div>Loading...</div>}><Oplenac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/gruzansko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><GruzanskoJezero /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-blagovestenje-rudnciko"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirBlagovestenjeRudnicko /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-petkovica"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirPetkovica /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/zezelj-i-besnjaja"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninarskaStazaZezeljIBesnjaja /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><ZlatiborskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/uzice"
          element={<Suspense fallback={<div>Loading...</div>}><Uzice /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/reka-uvac"
          element={<Suspense fallback={<div>Loading...</div>}><RekaUvac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/nacionalni-park-tara"
          element={<Suspense fallback={<div>Loading...</div>}><NacionalniParkTara /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatibor"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaZlatibor /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-mileseva"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirMileseva /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/jezero-perucac"
          element={<Suspense fallback={<div>Loading...</div>}><JezeroPerucac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-sopotnice"
          element={<Suspense fallback={<div>Loading...</div>}><VodopadSopotnice /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-rujan"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirRujan /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatar"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaZlatar /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/zaovinsko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><ZaovinskoJezero /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/stopica-pecina"
          element={<Suspense fallback={<div>Loading...</div>}><StopicaPecina /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-gostilje"
          element={<Suspense fallback={<div>Loading...</div>}><VodopadGostilje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/mokra-gora"
          element={<Suspense fallback={<div>Loading...</div>}><MokraGora /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><MoravickiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/cacak"
          element={<Suspense fallback={<div>Loading...</div>}><Cacak /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura"
          element={<Suspense fallback={<div>Loading...</div>}><OvcarskoKablarskaKlisura /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-jovanje"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirJovanje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-nikolje"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirNikolje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-preobrazenje"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirPreobraženje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-savinje"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirSavinje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-svete-trojice"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirSveteTrojice /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-uspenje"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirUspenje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-vavedenje"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirVavedenje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-vaznesenje"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirVaznesenje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/jezero-medjuvrsje"
          element={<Suspense fallback={<div>Loading...</div>}><JezeroMedjuvrsje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-blagovestenje"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirBlagovestenje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/guca"
          element={<Suspense fallback={<div>Loading...</div>}><Guca /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/gornji-milanovac"
          element={<Suspense fallback={<div>Loading...</div>}><GornjiMilanovac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/planina-rudnik"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaRudnik /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-sretenje"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirSretenje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><PomoravskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/jagodina"
          element={<Suspense fallback={<div>Loading...</div>}><Jagodina /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/grza"
          element={<Suspense fallback={<div>Loading...</div>}><Grza /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-manasija"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirManasija /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-lisine"
          element={<Suspense fallback={<div>Loading...</div>}><VodopadLisine /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-josanica"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirJosanica /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/resavska-pecina"
          element={<Suspense fallback={<div>Loading...</div>}><ResavskaPecina /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-prskalo"
          element={<Suspense fallback={<div>Loading...</div>}><VodopadPrskalo /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manatir-ravanica"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirRavanica /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/prirodnjacki-centar"
          element={<Suspense fallback={<div>Loading...</div>}><PrirodnjackiCentar /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><RaskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/kraljevo"
          element={<Suspense fallback={<div>Loading...</div>}><Kraljevo /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-studenica"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirStudenica /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-kopaonik"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaKopaonik /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/vrnjacka-banja"
          element={<Suspense fallback={<div>Loading...</div>}><VrnjackaBanja /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-zica"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirZica /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-maglic"
          element={<Suspense fallback={<div>Loading...</div>}><TvrdjavaMaglic /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-goc"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaGoc /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirDjurdjeviStupovi /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-stari-ras"
          element={<Suspense fallback={<div>Loading...</div>}><TvrdjavaStariRas /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-sopocani"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirSopocani /></Suspense>}
        />
        <Route
          path="/:lang/:sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><RasinskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/krusevac"
          element={<Suspense fallback={<div>Loading...</div>}><Krusevac /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/jezero-celije"
          element={<Suspense fallback={<div>Loading...</div>}><JezeroCelije /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/tvrdjava-koznik"
          element={<Suspense fallback={<div>Loading...</div>}><TvrdjavaKoznik /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-djunis"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirDjunis /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/svetiliste-metodje"
          element={<Suspense fallback={<div>Loading...</div>}><SvetilisteMetodje /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/ribarska-banja"
          element={<Suspense fallback={<div>Loading...</div>}><RibarskaBanja /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-ljubostinja"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirLjubostinja /></Suspense>}
        />
        <Route
          path="/:lang/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/vodopad-jelovarnik"
          element={<Suspense fallback={<div>Loading...</div>}><VodopadJelovarnik /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal"
          element={<Suspense fallback={<div>Loading...</div>}><JuznaIIStocnaSrbijaTekstModal /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija"
          element={<Suspense fallback={<div>Loading...</div>}><IstocnaiJuznaSrbija /></Suspense>}
        />
        <Route
          path="/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/"
          element={<Suspense fallback={<div>Loading...</div>}><PodunavskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/smederevo"
          element={<Suspense fallback={<div>Loading...</div>}><Smederevo /></Suspense>}
        />
        <Route
          path="/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/manastir-pokajnica"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirPokajnica /></Suspense>}
        />
        <Route
          path="/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/smederevska-tvrdjava"
          element={<Suspense fallback={<div>Loading...</div>}><SmederevskaTvrdjava /></Suspense>}
        />
        <Route
          path="/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/radovanjski-lug"
          element={<Suspense fallback={<div>Loading...</div>}><RadovanjskiLug /></Suspense>}
        />
        <Route
          path="/:lang/istocnaSrbijaTekstModal/IstocnaIZapadnaSrbija/podunavski-okrug/manastir-koporin"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirKoporin /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><BranicevskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/pozarevac"
          element={<Suspense fallback={<div>Loading...</div>}><Pozarevac /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tvrdjava-golubac"
          element={<Suspense fallback={<div>Loading...</div>}><TvrdjavaGolubac /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/srebrno-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><SrebrnoJezero /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-tumane"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirTumane /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/krupajsko-vrelo"
          element={<Suspense fallback={<div>Loading...</div>}><KrupajskoVrelo /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-gornjak"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirGornjak /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-beljanica"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaBeljanica /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><BorskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/bor"
          element={<Suspense fallback={<div>Loading...</div>}><Bor /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/djerdapska-klisura"
          element={<Suspense fallback={<div>Loading...</div>}><DjerdapskaKlisura /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon"
          element={<Suspense fallback={<div>Loading...</div>}><LazarevKanjon /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazareva-pecina"
          element={<Suspense fallback={<div>Loading...</div>}><LazarevaPecina /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/borsko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><BorskoJezero /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lepenski-vir"
          element={<Suspense fallback={<div>Loading...</div>}><LepenskiVir /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/rajkova-pecina"
          element={<Suspense fallback={<div>Loading...</div>}><RajkovaPecina /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><ZajecarskiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/zajecar"
          element={<Suspense fallback={<div>Loading...</div>}><Zajecar /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-banja"
          element={<Suspense fallback={<div>Loading...</div>}><SokoBanja /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/planina-rtanj"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaRtanj /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/vodopad-ripaljka"
          element={<Suspense fallback={<div>Loading...</div>}><VodopadRipaljka /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-grad"
          element={<Suspense fallback={<div>Loading...</div>}><SokoGrad /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/gamzigrad"
          element={<Suspense fallback={<div>Loading...</div>}><FelixRomulijana /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><NisavskiOkrug /></Suspense>}
        />
        <Route path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/nis" element={<Suspense fallback={<div>Loading...</div>}><Nis /></Suspense>} />
        <Route path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/cegar" element={<Suspense fallback={<div>Loading...</div>}><Cegar /></Suspense>} />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/bovansko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><BovanskoJezero /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/suva-planina"
          element={<Suspense fallback={<div>Loading...</div>}><SuvaPlanina /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/sicevacka-klisura"
          element={<Suspense fallback={<div>Loading...</div>}><SicevackaKlisura /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/manastir-sveta-petka-iverica"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirSvetaPetkaIverica /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/niska-banja"
          element={<Suspense fallback={<div>Loading...</div>}><NiskaBanja /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><ToplickiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/prokuplje"
          element={<Suspense fallback={<div>Loading...</div>}><Prokuplje /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/djavolja-varos"
          element={<Suspense fallback={<div>Loading...</div>}><DjavoljaVaros /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/jastrebac"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaJastrebac /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/tvrdajva-hisar"
          element={<Suspense fallback={<div>Loading...</div>}><TvrdjavaHisar /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/manastir-svetog-nikole"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirSvetogNikole /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-radan"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaRadan /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><PirotskiOkrug /></Suspense>}
        />
        <Route path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/pirot" element={<Suspense fallback={<div>Loading...</div>}><Pirot /></Suspense>} />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/stara-planina"
          element={<Suspense fallback={<div>Loading...</div>}><StaraPlanina /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/zavojsko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><ZavojskoJezero /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-tupavica"
          element={<Suspense fallback={<div>Loading...</div>}><VodopadTupavica /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/manastir-sukovo"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirSukovo /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-bigar"
          element={<Suspense fallback={<div>Loading...</div>}><VodopadBigar /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/kanjon-reke-jerme"
          element={<Suspense fallback={<div>Loading...</div>}><KanjonRekeJerme /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><JablanickiOkrug /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/leskovac"
          element={<Suspense fallback={<div>Loading...</div>}><Leskovac /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/brestovacko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><BrestovackoJezero /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/babicka-gora"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaBabickaGora /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/kanjon-vucjanke"
          element={<Suspense fallback={<div>Loading...</div>}><KanjonVucjanke /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/planina-goljak"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaGoljak /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/jablanicki-okrug/tularska-banja"
          element={<Suspense fallback={<div>Loading...</div>}><TularskaBanja /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug"
          element={<Suspense fallback={<div>Loading...</div>}><PcinjskiOkrug /></Suspense>}
        />
        <Route path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vranje" element={<Suspense fallback={<div>Loading...</div>}><Vranje /></Suspense>} />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vlasinsko-jezero"
          element={<Suspense fallback={<div>Loading...</div>}><VlasinskoJezero /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/besna-kobila"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaBesnaKobila /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/prohor-pcinjski"
          element={<Suspense fallback={<div>Loading...</div>}><ManastirProhoraPcinjskog /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-kukavica"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaKukavica /></Suspense>}
        />
        <Route
          path="/:lang/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-cemernik"
          element={<Suspense fallback={<div>Loading...</div>}><PlaninaCemernik /></Suspense>}
        />
        <Route
          path="/:lang/kosovo-i-metohija-tekst-modal"
          element={<Suspense fallback={<div>Loading...</div>}><KosovoIMetohijaTekstModal /></Suspense>}
        />
        <Route
          path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija"
          element={<Suspense fallback={<div>Loading...</div>}><KosovoIMetohija /></Suspense>}
        />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug" element={<Suspense fallback={<div>Loading...</div>}><PeckiOkrug /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pec" element={<Suspense fallback={<div>Loading...</div>}><Pec /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pecka-patrijarsija" element={<Suspense fallback={<div>Loading...</div>}><PeckaPatrijarsija /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/mokra-gora" element={<Suspense fallback={<div>Loading...</div>}><PlaninaMokraGora /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/vodopad-beli-drim" element={<Suspense fallback={<div>Loading...</div>}><VodopadBeliDrim /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/planina-zuti-kamen" element={<Suspense fallback={<div>Loading...</div>}><PlaninaZutiKamen /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug" element={<Suspense fallback={<div>Loading...</div>}><MitrovackiOkrug /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/kosovksa-mitrovica" element={<Suspense fallback={<div>Loading...</div>}><KosovskaMitrovica /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manatir-banjska" element={<Suspense fallback={<div>Loading...</div>}><ManastirBanjska /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/gazivodsko-jezero" element={<Suspense fallback={<div>Loading...</div>}><GazivodskoJezero /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manastir-devic" element={<Suspense fallback={<div>Loading...</div>}><ManastirDevic /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug" element={<Suspense fallback={<div>Loading...</div>}><PristinskiOkrug /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/pristina" element={<Suspense fallback={<div>Loading...</div>}><Pristina /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gracanica" element={<Suspense fallback={<div>Loading...</div>}><ManastirGracanica /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gazimestan" element={<Suspense fallback={<div>Loading...</div>}><Gazimestan /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/mermerna-pecina" element={<Suspense fallback={<div>Loading...</div>}><MermernaPecina /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/tvrdjava-novo-brdo" element={<Suspense fallback={<div>Loading...</div>}><TvrdjavaNovoBrdo /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug" element={<Suspense fallback={<div>Loading...</div>}><PrizrenskiOkrug /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/prizren" element={<Suspense fallback={<div>Loading...</div>}><Prizren /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/manastir-svetih-arhangela" element={<Suspense fallback={<div>Loading...</div>}><ManastirSvetihArhangela /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/vodopad-mirusa" element={<Suspense fallback={<div>Loading...</div>}><VodopadMirusa /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/" element={<Suspense fallback={<div>Loading...</div>}><DjakovickiOkrug /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/djakovica" element={<Suspense fallback={<div>Loading...</div>}><Djakovica /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/manastir-visoki-decani" element={<Suspense fallback={<div>Loading...</div>}><ManastirVisokiDecani /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/planina-prokletije" element={<Suspense fallback={<div>Loading...</div>}><Prokletije /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug" element={<Suspense fallback={<div>Loading...</div>}><UrosevackiOkrug /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/urosevac" element={<Suspense fallback={<div>Loading...</div>}><Urosevac /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/brezovica" element={<Suspense fallback={<div>Loading...</div>}><Brezovica /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/ljuboten" element={<Suspense fallback={<div>Loading...</div>}><Ljuboten /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug" element={<Suspense fallback={<div>Loading...</div>}><GnjilanskiOkrug /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/gnjilane" element={<Suspense fallback={<div>Loading...</div>}><Gnjilane /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/manastir-ubozac" element={<Suspense fallback={<div>Loading...</div>}><ManastirUbozac /></Suspense>} />
        <Route path="/:lang/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/tvrdjava-podgradje" element={<Suspense fallback={<div>Loading...</div>}><TvrdjavaPodgradje /></Suspense>} />

      </Routes>

    </Layout>
  );
}

export default App
