import kragujevac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac1.jpg";
import kragujevac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac2.jpg";
import kragujevac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac3.jpg";
import kragujevac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac4.jpg";
import kragujevac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac5.jpg";
import kragujevac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac6.jpg";
import kragujevac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac7.jpg";
import kragujevac8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac8.jpg";
import kragujevac9 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac9.jpg";
import kragujevac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac1MV.jpg";
import kragujevac12 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac2MV.jpg";
import kragujevac13 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac3MV.jpg";
import kragujevac14 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac4MV.jpg";
import kragujevac15 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac5MV.jpg";
import kragujevac110 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac1.jpg";
import kragujevac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac2.jpg";
import kragujevac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac3.jpg";
import kragujevac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac4.jpg";
import kragujevac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac5.jpg";
import kragujevac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac6.jpg";
import kragujevac77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac7.jpg";
import kragujevac88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac8.jpg";
import kragujevac99 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac9.jpg";
import kragujevac111 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac1MV.jpg";
import kragujevac122 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac2MV.jpg";
import kragujevac133 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac3MV.jpg";
import kragujevac144 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac4MV.jpg";
import kragujevac155 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/mobile/Mkragujevac5MV.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sumadijskiOkrugPathRoutes } from "./SumadijskiOkrugPathRoutes";

export const Kragujevac = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);
    const isChangingSlide  = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = isMobile
    ? {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        arrows: false,
        beforeChange: () => {
          isChangingSlide.current = true;
        },
        afterChange: () => {
          isChangingSlide.current = false;
        },
      }
    : {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        arrows: false,
        beforeChange: () => {
          isChangingSlide.current = true;
        },
        afterChange: () => {
          isChangingSlide.current = false;
        },
      };

  const images = [
    {
      name: "Stara (Pridvorna crkva)",
      desktopSrc: kragujevac11,
      mobileSrc: kragujevac110,
      alt: "Stara (Pridvorna crkva)",
    },
    {
      name: "Konak Kneza Mihaila",
      desktopSrc: kragujevac12,
      mobileSrc: kragujevac122,
      alt: "Konak Kneza Mihaila",
    },
    {
      name: "Zgrada Gimnazije",
      desktopSrc: kragujevac13,
      mobileSrc: kragujevac133,
      alt: "Zgrada Gimnazije",
    },
    {
      name: "Spomenik palim Sumadincima",
      desktopSrc: kragujevac14,
      mobileSrc: kragujevac144,
      alt: "Spomenik palim Sumadincima",
    },
    {
      name: "Zgrada stare livnice",
      desktopSrc: kragujevac15,
      mobileSrc: kragujevac155,
      alt: "Zgrada stare livnice",
    },
  ];

  const handleMilosevVenac = (e) => {
    if (isChangingSlide.current) {
      return;
    }

    switch (e.target.alt) {
      case "Stara (Pridvorna crkva)":
        navigate(sumadijskiOkrugPathRoutes.staraPridvornaCrkva);
        break;
      case "Konak Kneza Mihaila":
        navigate(sumadijskiOkrugPathRoutes.konakKnezaMihaila);
        break;
      case "Zgrada Gimnazije":
        navigate(sumadijskiOkrugPathRoutes.zgradaGimnazije);
        break;
      case "Spomenik palim Sumadincima":
        navigate(sumadijskiOkrugPathRoutes.spomenikStarimSumadincima);
        break;
      case "Zgrada stare livnice":
        navigate(sumadijskiOkrugPathRoutes.zgradaGimnazije);
        break;
    }
  };

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img srcSet={`${kragujevac11} 400w, ${kragujevac1} `} alt="Kragujevac 1" />

      <h2>Kragujevac</h2>

      <p style={{ paddingTop: "50px" }}>
        Kragujevac je ekonomski, administrativni, obrazovni, zdravstveni,
        kulturni i sportski centar Šumadije. Grad se nalazi na ključnom spoju
        državnih puteva i glavnih saobraćajnih pravaca, u neposrednoj blizini
        železničkog i drumskog koridora 10, koji povezuje Kragujevac sa ostatkom
        Srbije i Evropom. Od Beograda je udaljen 140 kilometara na jug, a od
        Niša 150 kilometara na sever. Grad se prostire na površini od 835
        kvadratnih kilometara i smesten je na obalama reke Lepenice, u
        Kragujevačkoj kotlini, gde se spajaju krajnji delovi šumadijskih
        planina: Rudnik, Crni Vrh i Gledićke planine. Kragujevac je sedište
        Šumadijskog okruga, a na njegovoj teritoriji nalazi se i geografski
        centar Srbije, koji se nalazi osam kilometara severozapadno od centra
        grada, u ataru sela Drača.
      </p>

      <img srcSet={`${kragujevac22} 400w, ${kragujevac2} `} alt="Kragujevac 2" />

      <p>
        Kragujevac se izdvaja po povoljnoj demografskoj situaciji, sa pozitivnim
        kretanjima u broju stanovnika, prosečnoj starosti i obrazovnoj
        strukturi, u poređenju sa ostatkom Srbije. Prema popisu iz 2022. godine,
        grad broji 171.186 stanovnika, čime je najveći u Šumadiji i četvrti u
        zemlji. Grad obuhvata 57 naseljenih mesta i 78 mesnih zajednica. Od
        ukupnog broja stanovnika, 146.315 živi u gradskom području, dok 24.871
        živi na selu. Što se tiče obrazovne strukture, najveći procenat
        stanovništva ima srednje stručno obrazovanje (57%), dok 15% ima završeno
        osnovno obrazovanje. Oko 7% ima završeno više obrazovanje, dok 17% ima
        visoko obrazovanje. U Kragujevcu je 49% stanovništva kompjuterski
        pismeno, dok 27% delimično poznaje rad na računaru. Kragujevac, zajedno
        sa Beogradom, Novim Sadom i Nišem, predstavlja ključni centar prostornog
        i održivog razvoja Srbije. U poslednjih pedeset godina, grad je značajno
        porastao, uglavnom zbog svoje uloge regionalnog i nacionalnog
        industrijskog centra. Stepen urbanizacije u Kragujevcu je bio viši nego
        u ostatku Srbije, a grad nije privlačio samo stanovništvo iz okolnih
        područja, već i iz drugih delova zemlje.
      </p>

      <img srcSet={`${kragujevac33} 400w, ${kragujevac3} `} alt="Kragujevac 3" />

      <p>
        Kragujevac se prvi put pominje 1476. godine, u vreme turskog osvajanja,
        u tapu-defteru (popisnoj katastarskoj knjizi), kao Trg sa 32 kuće. Nakon
        toga, grad je bio skoro pust, kao i čitava Šumadija, sve do druge
        polovine XV veka, kada Turci podižu novo naselje na levoj obali reke
        Lepenice. Grad je dobio ime po ptici kraguj (vrsta orla) koja je, prema
        narodnom predanju, živela u okolnim šumama. Sve do narodnih ustanaka,
        većinu stanovništva činili su Turci, osim u periodima austrijske vlasti:
        prvi put 1689–1690. godine, i drugi put 1719–1738. godine, kada je
        zabeleženo značajno doseljavanje hrišćanskog stanovništva. Prvi pravi
        procvat Kragujevac doživljava 1818. godine, kada je 6. maja, na
        Đurđevdan, proglašen prestonicom obnovljene Srbije. Zbog povoljnog
        geografskog položaja i nacionalne homogenosti, za razliku od Beograda,
        gde je bila turska uprava, knez Miloš je odlučio da preseli prestonicu u
        Kragujevac, čime je grad postao politički centar. Preseljenjem
        prestonice iz Male Crnuće u Kragujevac, knez Miloš je započeo novu fazu
        u istoriji grada, stvarajući urbanu sredinu suprotnu dotadašnjoj turskoj
        palanci.
      </p>

      <h3
        style={{
          textAlign: "center",
          margin: "10px 0 45px 0",
          color: "rgb(19 17 35)",
          fontSize: "30px",
          fontWeight: "600",
        }}
      >
        Milošev Venac
      </h3>

      {isMobile ? (
        <>
          <Slider {...settings}  ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  srcSet={`${image.mobileSrc} 400w, ${image.desktopSrc} `}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    width: "80%",
                    height: "230px",
                    margin: "0 8% 0 12%",
                  }}
                  onClick={handleMilosevVenac}
                />
                <p
                  style={{
                    textAlign: "center",
                    paddingBottom: "5px",
                    marginBottom: "20p",
                  }}
                  onClick={handleMilosevVenac}
                >
                  {image.name}
                </p>
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <>
          <Slider {...settings}  ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  srcSet={`${image.mobileSrc} 400w, ${image.desktopSrc} `}
                  alt={image.alt}
                  loading="lazy"
                  className="kgImages"
                  onClick={handleMilosevVenac}
                />
                <p
                  style={{
                    textAlign: "center",
                    padding: "40px 20px 0  20px",
                    width: "400px",
                    marginLeft: "50px",
                    cursor: "pointer",
                  }}
                  onClick={handleMilosevVenac}
                >
                  {image.name}
                </p>
              </div>
            ))}
          </Slider>
        </>
      )}

      <p>
        Nakon što je prestonica ponovo premeštena u Beograd 1841. godine,
        Kragujevac ulazi u period stagnacije. Ipak, grad je i dalje bio važan
        politički centar, gde su se održavale ključne skupštine u Srbiji, sve do
        1878. godine. Posebno značajnu ulogu u istoriji grada i srpskog naroda
        ima Sretenjska skupština, na kojoj je donet prvi Ustav kneževine Srbije,
        kao i objava odluka Berlinskog kongresa 1878. godine, kojim je Srbija
        postala samostalna država.
      </p>

      <img
        srcSet={`${kragujevac44} 400w, ${kragujevac4} `}
        alt="Spomen park „Kragujevački oktobar“"
      />

      <p>
        Spomen park „Kragujevački oktobar“ nalazi se na mestu gde su 21. oktobra
        1941. godine nemački vojnici streljali nekoliko hiljada ljudi iz
        Kragujevca, među kojima su bili muškarci, žene i deca. Ovaj masakr
        usledio je kao odmazda za nemačke gubitke u borbama sa četničkim i
        partizanskim trupama na pravcu Kragujevac – Gornji Milanovac. U znak
        sećanja na žrtve, prostor Šumarica je 1953. godine pretvoren u Spomen
        park koji se prostire na 352 hektara. Tu se svake godine održava
        manifestacija „Veliki školski čas“ pored Spomenika streljanim đacima i
        profesorima.
      </p>

      <img srcSet={`${kragujevac55} 400w, ${kragujevac5} `} alt="Šumarničko jezero" />
      <p>
        Šumarničko jezero ima dekorativni značaj i podignuto je s ciljem
        uljepšavanja spomen parka Šumarice. Ovo jezero je veoma posećeno,
        posebno tokom letnjih meseci. Takođe je jedno od najpoznatijih kupališta
        u Šumadiji, privlačeći veliki broj kupača i ribolovaca. Šumarničko
        jezero je dugačko 1.500 metara i široko 175 metara. U jezeru se
        akumulira oko 800.000 m³ vode, a zauzima površinu od oko 22 hektara.
      </p>

      <img srcSet={`${kragujevac66} 400w, ${kragujevac6} `} alt="Veliki park u Kragujevac" />
      <p>
        Veliki park je omiljeno mesto za šetnju Kragujevčana svih generacija.
        Osnovan 1898. godine, park je potpuno renoviran povodom svog 110.
        rođendana. Prostire se na više od 10 hektara zelenila, a guste krošnje
        stogodišnjih stabala, obnovljene staze i nove klupe čine ga idealnim
        mestom za odmor, šetnju i opuštanje. U okviru Velikog parka i njegovoj
        blizini nalaze se sportski tereni za košarku, fudbal, odbojku, tenis,
        američki fudbal i rukomet, zatvoreni i otvoreni bazeni, balon sala, kao
        i veliki broj ugostiteljskih objekata.
      </p>

      <img srcSet={`${kragujevac77} 400w, ${kragujevac7} `} alt="Spomen-muzej „21. oktobar“ u Kragujevcu" />
      <p>
        Spomen-muzej „21. oktobar“ u Kragujevcu je posvećen sećanju na žrtve
        masovnog streljanja koje se desilo 21. oktobra 1941. godine, kada su
        nacističke okupatorske snage u Kragujevcu streljale više od 2.300
        civila, među kojima su bili i učenici i profesori. Ovaj događaj je jedan
        od najtragičnijih u istoriji grada i postao je simbol stradanja i otpora
        tokom Drugog svetskog rata. Muzej je otvoren 1976. godine, a njegov cilj
        je da sačuva sećanje na žrtve i obeleži hrabrost naroda u borbi za
        slobodu. Spomen-muzej se nalazi u kompleksu u Šumaricama, u blizini
        mesta gde je izvršeno streljanje. Kompleks se sastoji od muzeja,
        spomenika, i spomen-parkova, a posebno je značajan Spomenik streljanim
        đacima i profesorima.
      </p>

      <img srcSet={`${kragujevac88} 400w, ${kragujevac8} `} alt="Jezero Bubanj" />
      <p>
        Jezero Bubanj nalazi se na samo kilometar od centra grada i, iako se
        smatra veštačkim, formirano je prirodnim putem. Smešteno je na prostoru
        nekadašnje ciglane, a napaja se kišnicom i snažnim izvorom Bubanj. Ovo
        jezero je jedno od omiljenih mesta za šetnju i odmor Kragujevčana i
        posetilaca. Nastalo je spajanjem manjih lokvi koje su se vremenom
        širile, formirajući današnje jezero Bubanj. Prostire se na površini od
        oko 3 ara, s prosečnom dubinom od 0,8 metara. U jezeru žive ribe poput
        pastrmke, mrene i suničice, dok su na njegovim obalama prisutne divlje
        patke. Zbog svoje uloge u ublažavanju ekstremnih vremenskih uslova,
        jezero Bubanj predstavlja značajnu prirodnu vrednost za Kragujevac.
      </p>

      <img srcSet={`${kragujevac99} 400w, ${kragujevac9} `} alt="Eko park Ilina voda" />
      <p>
        Eko park Ilina voda nalazi se u kragujevačkom naselju Ilina voda i
        poznat je kao prvi ekološki park u Srbiji. Otvoren je 1900. godine, što
        ga čini drugim najstarijim javnim parkom u Kragujevcu. Tokom devedesetih
        godina bio je u opasnosti da postane divlja deponija, ali su građani
        volonterskim radom sprečili njegovo propadanje. Park se prostire na više
        od 7 hektara i izdvaja se svojim jedinstvenim konceptom u Srbiji – svi
        objekti u njemu izgrađeni su od recikliranog materijala i starih
        predmeta. Pored uobičajenih sadržaja, park sadrži i mini zoo vrt, a
        njegovo održavanje finansira se iz donacija društveno odgovornih
        kompanija i pojedinaca.
      </p>
    </div>
  );
};
