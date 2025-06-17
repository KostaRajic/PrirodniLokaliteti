import maglic1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic1.jpg";
import maglic2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic2.jpg";
import maglic3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic3.jpg";
import maglic4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic4.jpg";
import maglic5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic5.jpg";
import maglic11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic1.jpg";
import maglic22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic2.jpg";
import maglic33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic3.jpg";
import maglic44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic4.jpg";
import maglic55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";

export const TvrdjavaMaglic = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${maglic11} 400w, ${maglic1} `} alt="Kraljevo 1" />

      <h2 style={{ color: "white" }}>Tvrđava Maglič</h2>

      <p style={{ paddingTop: "50px" }}>
        Maglič je jedna od najbolje očuvanih srednjovekovnih tvrđava u Srbiji,
        smeštena oko trideset kilometara od Kraljeva. Nalazi se na glavnom putu
        koji vodi ka Novom Pazaru, Crnoj Gori i Kosovu i Metohiji. Tvrđava je
        smeštena na visokoj steni koja dominira Ibarskom dolinom, a do nje vodi
        lepo uređena staza sa klupama za odmor. Tvrđava je nazivana Maglič zbog
        magle koja je često obavija, što joj daje tajanstveni izgled. Takođe,
        poreklo tvrđave ostaje obavijeno misterijom, jer ni danas nije u
        potpunosti razjašnjeno. Smatra se da je izgrađena nakon mongolske
        invazije 1240. godine. Prvi pisani tragovi o ovom srednjovekovnom
        utvrđenju potiču iz 1337. godine, kada je arhiepiskop Danilo II, pored
        postojećih objekata na Magliču, podigao palate i ćelije.
      </p>

      <img srcSet={`${maglic22} 400w, ${maglic2} `} alt="Kraljevo 2" />

      <p>
        Tvrđava Maglič sastoji se od sedam kula visine oko deset metara, dok je
        glavna Donžon kula visoka oko dvadeset metara. Opasana je debelim
        zidinama i ima nepravilni oblik zbog neravnog terena. Dužina tvrđave
        iznosi oko 100 metara, a širina oko 40 metara. Unutrašnjost tvrđave čine
        dva dvorišta – manji i veći – u kojem se nalaze ruševine crkve Svetog
        Đorđa, palate, pekare i dve cisterne za vodu. Maglič je poznat i kao
        srpski Kamelot, a njegov očuvani izgled i misteriozna atmosfera često
        privlače filmske ekipe. Tvrđava je bila mesto snimanja nastavka filma
        „Ironclad“, a filmska ekipa je bila oduševljena očuvanošću zidina.
      </p>

      <img srcSet={`${maglic33} 400w, ${maglic3} `} alt="Narodni muzej u Kraljevu" />

      <p>
        Istorijski podaci o tvrđavi Magliču su prilično oskudni. Na osnovu
        arheoloških istraživanja, utvrđeno je da je na ovom mestu postojala
        starija utvrda koja datira iz kraja 11. ili prve četvrtine 12. veka,
        kada je ovo područje bilo pod vlašću Vizantijskog carstva. Verovatno je
        reč o malom kastelu, smeštenom na prirodno zaštićenom položaju, kakve su
        gradili u vreme dinastije Komnina. Ova prvobitna građevina uništena je u
        požaru i neko vreme bila napuštena. <br />
        <br /> Postoji nekoliko teorija o vremenu i razlozima izgradnje tvrđave
        kakvu danas poznajemo. Jedna od teorija je da je Maglič sagradio kralj
        Uroš I (1241/1242-1276) nakon mongolskih napada, kako bi sprečio nove
        upade kroz Ibar i zaštitio prilaz manastirima Sopoćanima i Studenici.
      </p>

      <img srcSet={`${maglic44} 400w, ${maglic4} `} alt="Muzej Slatka - Kuća cvetića kraljevo" />

      <p>
        Druga teorija postavlja izgradnju tvrđave na početak 13. veka, za vreme
        vladavine Stefana Prvovenčanog (1196–1227), sa ciljem zaštite manastira
        Žiče i Studenice. Međutim, verovatnije je da je gradnja započela krajem
        13. ili početkom 14. veka, paralelno sa obnovom manastira Žiče, koji je
        pretrpeo velika razaranja 1292. godine. Novo utvrđenje bilo je
        prostornije, dok su ostaci prethodnih fortifikacija uklonjeni.
        <br />
        <br /> Razvoj srpske srednjovekovne države doveo je do gubitka
        strateškog značaja Magliča, koji je postao utvrđenje smešteno u srcu
        zemlje, daleko od granica. Tokom 14. veka, tvrđava je služila kao
        utočište arhiepiskopa Danila II (1324–1337) iz Žiče, koji je izvršio
        dogradnju i sagradio palate unutar nje. Iz Magliča je upravljao crkvenim
        i državnim poslovima, a u samoj tvrđavi je organizovano pisanje crkvenih
        knjiga.
      </p>

      <img srcSet={`${maglic55} 400w, ${maglic5} `} alt="Saborna crkva Svete Trojice u Kraljevu" />

      <p>
        Nema konkretnih podataka o tome kada je Maglič prešao pod tursku vlast,
        ali se smatra da je to bilo oko 1459. godine, kada je pripojen Osmanskom
        carstvu. Nakon turskih osvajanja, tvrđava postaje sedište nahije. Tokom
        borbi 1683. godine, ustanici su na kratko zauzeli Maglič, ali je, nakon
        sloma ustanka, tvrđava napuštena. Kasnije, pominje se na austrijskim
        kartama iz 1718. godine, a poslednju značajnu ulogu imala je 1815.
        godine, tokom Drugog srpskog ustanka, kada su je koristili srpski
        ustanici. <br />
        <br />
        Maglič je izgrađen na uskoj zaravni na stenovitoj kosi, okružen Ibrom sa
        tri strane. Njegovo zaleđe, naročito prema istočnom i južnom masivu
        Stolova, je pusto i teško pristupačn
      </p>
    </div>
  );
};
