import goc1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/planinaGoc1.jpg";
import goc2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/planinaGoc2.jpg";
import goc3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/planinaGoc3.jpg";
import goc4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/planinaGoc4.jpg";
import goc5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/planinaGoc5.jpg";
import goc6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/planinaGoc6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";

export const PlaninaGoc = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes.home)} style={{fill: 'white'}}/>
      <header></header>
      <img src={goc1} alt="Planina Goč 1" />

      <h2 style={{ color: "white" }}>Planina Goč</h2>

      <p style={{ paddingTop: "50px" }}>
        Južno od Zapadne Morave, iznad Vrnjačke Banje, uzdiže se planina Goč. To
        je niža planina sa najvišim vrhom Ljutken (1216 m), koja je izvor mnogih
        potoka i reka koje teku prema Zapadnoj Moravi i Rasini, čineći krajolik
        Goča posebnim i atraktivnim. Planina Goč, koja se nalazi na 13 km od
        Vrnjačke Banje, popularno je izletište i omiljeno odredište za posetioce
        ovog kraja.
      </p>

      <img src={goc2} alt="Planina Goč 2" />

      <p>
        Goč je prekriven uglavnom bukovim, jelovim i borovim šumama, pružajući
        lep i miran ambijent, kao i lekovite prednosti. Procene govore da na
        Goču raste oko 650 biljnih vrsta, od kojih je više od 200 lekovitih i
        aromatičnih. Planina je bogata izvorima čiste pijaće vode, a postoji oko
        250 izvora, od kojih su dva, Sokoljska i Gvozdačka, poribljena. Na tim
        izvorima nalaze se očuvane vodenice. Jezero Salište, koje se sja poput
        planinskog oka, predstavlja pravi dragulj, iako je kupanje u njemu
        zabranjeno.
      </p>

      <img src={goc3} alt="Planina Goč 3" />

      <p>
        Netaknuta priroda, savršen spoj blage klime, čistog vazduha i bogate
        vegetacije, pozitivno utiče na zdravlje, pomažući u borbi protiv
        anemičnosti, jačanju imuniteta i oporavku nervnog sistema. Ovi faktori
        čine Goč idealnim mestom za šetnje, planinarenje, piknike i sportski
        turizam. Zimi, Goč je prekriven snežnom belinom. Ovdje se nalaze uređene
        ski-staze namenjene početnicima i rekreativcima, sa kompletnom
        infrastrukturom, žičarama, ski-liftovima i školom skijanja. Posebno je
        atraktivna ski-staza Krst, koja se nalazi samo desetak kilometara od
        Vrnjačke Banje. Kombinovanjem opuštanja u banjskim wellness centrima,
        možete uživati u ski-aktivnostima na Goču za svega pola sata.
      </p>

      <img src={goc4} alt="Planina Goč 4" />

      <p>
        Goč nudi idealne terene za visinske pripreme sportista. Zbog svojih
        blagodeti, lekari sve češće preporučuju boravak na ovoj planini osobama
        koje imaju problema sa kardiovaskularnim sistemom, disajnim organima ili
        su pod psihičkim stresom. Za ljubitelje istorije, Goč je i značajno
        arheološko nalazište. Na ovoj planini se nalazi rimsko groblje, gde su
        bili sahranjivani Sasi – germanski rudari koji su radili u Srbiji za
        vreme vladavine dinastije Nemanjića.
      </p>

      <img src={goc5} alt="Planina Goč 5" />

      <p>
        Goč je lako dostupan zahvaljujući više različitih prilaznih puteva.
        Postoji stari put koji vodi preko Stanišinaca i nešto je duži, ali je
        manje strm i bez serpentina u poređenju sa novim putem koji direktno
        vodi do ski staza na banjskoj strani planine. Ova pogodnost čini Goč
        atraktivnim odredištem za turiste, a zahvaljujući blizini Vrnjačke Banje
        i dobroj putnoj infrastrukturi, predstavlja odličnu opciju za
        jednodnevne izlete posetilaca koji borave u ovom banjskom centru.
      </p>

      <img src={goc6} alt="Planina Goč 6" />

      <p>
        Na Goču postoji pet jasno označenih staza za pešačenje: žuta, zelena,
        braon, plava i crvena. Početne tačke svih staza nalaze se kod hotela
        ‘Piramida’ i kod nastavne baze Šumarskog fakulteta Gvozdac. Staze su
        prilagođene različitim nivoima kondicije, pa su pogodne kako za one koji
        žele kraće šetnje, tako i za ljubitelje dužih planinskih tura.
      </p>
    </div>
  );
};
