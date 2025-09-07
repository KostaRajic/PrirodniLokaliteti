/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
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
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sumadijskiOkrugPathRoutes } from "./SumadijskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";

const Kragujevac = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const isChangingSlide = useRef(false);
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


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
        navigate(sumadijskiOkrugPathRoutes.staraPridvornaCrkva(switchLanguage));
        break;
      case "Konak Kneza Mihaila":
        navigate(sumadijskiOkrugPathRoutes.konakKnezaMihaila(switchLanguage));
        break;
      case "Zgrada Gimnazije":
        navigate(sumadijskiOkrugPathRoutes.zgradaGimnazije(switchLanguage));
        break;
      case "Spomenik palim Sumadincima":
        navigate(sumadijskiOkrugPathRoutes.spomenikStarimSumadincima(switchLanguage));
        break;
      case "Zgrada stare livnice":
        navigate(sumadijskiOkrugPathRoutes.ZgradaStareLivnice(switchLanguage));
        break;
    }
  };

  return (
    <>

      <Helmet>
        <title>
          {switchLanguage === 'rs'
            ? "Kragujevac – Istorijski i industrijski centar Šumadije | Srbija Wonders"
            : "Kragujevac – Historical and Industrial Hub of Šumadija | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Kragujevac je nekadašnja prestonica Srbije, danas moderan grad sa bogatom istorijom, kulturnim nasleđem, industrijom, univerzitetom i memorijalnim kompleksom Šumarice. Otkrijte sve što ovaj grad nudi!"
              : "Kragujevac, once the capital of Serbia, is now a modern city known for its rich history, cultural heritage, university, industrial legacy, and the Šumarice Memorial Park. Discover its many highlights!"
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Kragujevac, Šumadija, Srbija, istorija Srbije, Spomen park Šumarice, Veliki park, Šumarničko jezero, industrija, obrazovanje, turizam Kragujevac"
              : "Kragujevac, Šumadija, Serbia, Serbian history, Šumarice Memorial Park, Veliki Park, Šumarničko Lake, industry, education, tourism Kragujevac"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(sumadijskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${kragujevac11} 450w, ${kragujevac1} `} alt="Kragujevac 1" />

        <h2>Kragujevac</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Kragujevac</strong> je ekonomski, administrativni, obrazovni, zdravstveni, kulturni i sportski centar <em>Šumadije</em>. Grad se nalazi na ključnom spoju državnih puteva i glavnih saobraćajnih pravaca, u neposrednoj blizini železničkog i drumskog koridora <strong>10</strong>, koji povezuje Kragujevac sa ostatkom Srbije i Evropom. Od Beograda je udaljen <strong>140 kilometara</strong> na jug, a od Niša <strong>150 kilometara</strong> na sever. Grad se prostire na površini od <strong>835 kvadratnih kilometara</strong> i smešten je na obalama reke <strong>Lepenice</strong>, u <em>Kragujevačkoj kotlini</em>, gde se spajaju krajnji delovi šumadijskih planina: <strong>Rudnik, Crni Vrh</strong> i <strong>Gledićke planine</strong>. Kragujevac je sedište <strong>Šumadijskog okruga</strong>, a na njegovoj teritoriji nalazi se i geografski centar Srbije, koji se nalazi osam kilometara severozapadno od centra grada, u ataru sela <strong>Drača</strong>.
                </p>
              </section>

              <img srcSet={`${kragujevac22} 450w, ${kragujevac2} `} alt="Kragujevac 2" />

              <section lang="sr">
                <p>
                  Kragujevac se izdvaja po povoljnoj demografskoj situaciji, sa pozitivnim kretanjima u broju stanovnika, prosečnoj starosti i obrazovnoj strukturi, u poređenju sa ostatkom Srbije. Prema popisu iz <strong>2022. godine</strong>, grad broji <strong>171.186 stanovnika</strong>, čime je najveći u Šumadiji i četvrti u zemlji. Grad obuhvata <strong>57 naseljenih mesta</strong> i <strong>78 mesnih zajednica</strong>. Od ukupnog broja stanovnika, <strong>146.315</strong> živi u gradskom području, dok <strong>24.871</strong> živi na selu. Što se tiče obrazovne strukture, najveći procenat stanovništva ima <strong>srednje stručno obrazovanje</strong> (<strong>57%</strong>), dok <strong>15%</strong> ima završeno osnovno obrazovanje. Oko <strong>7%</strong> ima završeno više obrazovanje, dok <strong>17%</strong> ima visoko obrazovanje. U Kragujevcu je <strong>49%</strong> stanovništva kompjuterski pismeno, dok <strong>27%</strong> delimično poznaje rad na računaru. Kragujevac, zajedno sa Beogradom, Novim Sadom i Nišom, predstavlja ključni centar prostornog i održivog razvoja Srbije. U poslednjih pedeset godina, grad je značajno porastao, uglavnom zbog svoje uloge regionalnog i nacionalnog industrijskog centra. Stepen urbanizacije u Kragujevcu je bio viši nego u ostatku Srbije, a grad nije privlačio samo stanovništvo iz okolnih područja, već i iz drugih delova zemlje.
                </p>
              </section>

              <img srcSet={`${kragujevac33} 450w, ${kragujevac3} `} alt="Kragujevac 3" />

              <section lang="sr">
                <p>
                  Kragujevac se prvi put pominje <strong>1476. godine</strong>, u vreme turskog osvajanja, u tapu-defteru (popisnoj katastarskoj knjizi), kao <em>Trg</em> sa <strong>32 kuće</strong>. Nakon toga, grad je bio skoro pust, kao i čitava Šumadija, sve do druge polovine <strong>XV veka</strong>, kada Turci podižu novo naselje na levoj obali reke <strong>Lepenice</strong>. Grad je dobio ime po ptici <em>kraguj</em> (vrsta orla) koja je, prema narodnom predanju, živela u okolnim šumama. Sve do narodnih ustanaka, većinu stanovništva činili su Turci, osim u periodima austrijske vlasti: prvi put <strong>1689–1690. godine</strong>, i drugi put <strong>1719–1738. godine</strong>, kada je zabeleženo značajno doseljavanje hrišćanskog stanovništva. Prvi pravi procvat Kragujevac doživljava <strong>1818. godine</strong>, kada je <strong>6. maja, na Đurđevdan</strong>, proglašen prestonicom obnovljene Srbije. Zbog povoljnog geografskog položaja i nacionalne homogenosti, za razliku od Beograda, gde je bila turska uprava, knez <strong>Miloš</strong> je odlučio da preseli prestonicu u Kragujevac, čime je grad postao politički centar.
                </p>
              </section>

              <h3
                className="milosevVenac"
              >
                Milošev Venac
              </h3>

              {isMobile ? (
                <>
                  <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
                          alt={image.alt}
                          loading="lazy"
                          style={{
                            width: "80%",
                            height: "230px",
                            margin: "0 8% 0 12%",
                          }}
                          onClick={handleMilosevVenac}
                        />

                      </div>
                    ))}
                  </Slider>

                </>
              ) : (
                <>
                  <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
                          alt={image.alt}
                          loading="lazy"
                          className="kgImages"

                          onClick={handleMilosevVenac}
                        />
                        <p className="milosevVenacName">{image.name}</p>
                      </div>
                    ))}
                  </Slider>

                </>
              )}


              <section lang="sr">
                <p>
                  Nakon što je prestonica ponovo premeštena u Beograd <strong>1841. godine</strong>, Kragujevac ulazi u period stagnacije. Ipak, grad je i dalje bio važan politički centar, gde su se održavale ključne skupštine u Srbiji, sve do <strong>1878. godine</strong>. Posebno značajnu ulogu u istoriji grada i srpskog naroda ima <strong>Sretenjska skupština</strong>, na kojoj je donet prvi Ustav kneževine Srbije, kao i objava odluka <em>Berlinskog kongresa 1878. godine</em>, kojim je Srbija postala samostalna država.
                </p>
              </section>

              <img
                srcSet={`${kragujevac44} 450w, ${kragujevac4} `}
                alt="Spomen park „Kragujevački oktobar“"
              />

              <section lang="sr">
                <p>
                  <strong>Spomen park „Kragujevački oktobar“</strong> nalazi se na mestu gde su <strong>21. oktobra 1941. godine</strong> nemački vojnici streljali nekoliko hiljada ljudi iz Kragujevca, među kojima su bili muškarci, žene i deca. Ovaj masakr usledio je kao odmazda za nemačke gubitke u borbama sa četničkim i partizanskim trupama na pravcu Kragujevac – Gornji Milanovac. U znak sećanja na žrtve, prostor <em>Šumarica</em> je <strong>1953. godine</strong> pretvoren u Spomen park koji se prostire na <strong>352 hektara</strong>. Tu se svake godine održava manifestacija <em>„Veliki školski čas“</em> pored Spomenika streljanim đacima i profesorima.
                </p>
              </section>

              <img srcSet={`${kragujevac55} 450w, ${kragujevac5} `} alt="Šumarničko jezero" />

              <section lang="sr">
                <p>
                  <strong>Šumarničko jezero</strong> ima dekorativni značaj i podignuto je s ciljem uljepšavanja spomen parka Šumarice. Ovo jezero je veoma posećeno, posebno tokom letnjih meseci. Takođe je jedno od najpoznatijih kupališta u Šumadiji, privlačeći veliki broj kupača i ribolovaca. Šumarničko jezero je dugačko <strong>1.500 metara</strong> i široko <strong>175 metara</strong>. U jezeru se akumulira oko <strong>800.000 m³</strong> vode, a zauzima površinu od oko <strong>22 hektara</strong>.
                </p>
              </section>

              <img srcSet={`${kragujevac66} 450w, ${kragujevac6} `} alt="Veliki park u Kragujevac" />

              <section lang="sr">
                <p>
                  <strong>Veliki park</strong> je omiljeno mesto za šetnju Kragujevčana svih generacija. Osnovan <strong>1898. godine</strong>, park je potpuno renoviran povodom svog <strong>110. rođendana</strong>. Prostire se na više od <strong>10 hektara</strong> zelenila, a guste krošnje stogodišnjih stabala, obnovljene staze i nove klupe čine ga idealnim mestom za odmor, šetnju i opuštanje. U okviru Velikog parka i njegovoj blizini nalaze se sportski tereni za košarku, fudbal, odbojku, tenis, američki fudbal i rukomet, zatvoreni i otvoreni bazeni, balon sala, kao i veliki broj ugostiteljskih objekata.
                </p>
              </section>

              <img srcSet={`${kragujevac77} 450w, ${kragujevac7} `} alt="Spomen-muzej „21. oktobar“ u Kragujevcu" />

              <section lang="sr">
                <p>
                  <strong>Spomen-muzej „21. oktobar“</strong> u Kragujevcu je posvećen sećanju na žrtve masovnog streljanja koje se desilo <strong>21. oktobra 1941. godine</strong>, kada su nacističke okupatorske snage u Kragujevcu streljale više od <strong>2.300 civila</strong>, među kojima su bili i učenici i profesori. Ovaj događaj je jedan od najtragičnijih u istoriji grada i postao je simbol stradanja i otpora tokom Drugog svetskog rata. Muzej je otvoren <strong>1976. godine</strong>, a njegov cilj je da sačuva sećanje na žrtve i obeleži hrabrost naroda u borbi za slobodu. Spomen-muzej se nalazi u kompleksu u <em>Šumaricama</em>, u blizini mesta gde je izvršeno streljanje. Kompleks se sastoji od muzeja, spomenika, i spomen-parkova, a posebno je značajan Spomenik streljanim đacima i profesorima.
                </p>
              </section>

              <img srcSet={`${kragujevac88} 450w, ${kragujevac8} `} alt="Jezero Bubanj" />

              <section lang="sr">
                <p>
                  <strong>Jezero Bubanj</strong> nalazi se na samo kilometar od centra grada i, iako se smatra veštačkim, formirano je prirodnim putem. Smešteno je na prostoru nekadašnje ciglane, a napaja se kišnicom i snažnim izvorom <em>Bubanj</em>. Ovo jezero je jedno od omiljenih mesta za šetnju i odmor Kragujevčana i posetilaca. Nastalo je spajanjem manjih lokvi koje su se vremenom širile, formirajući današnje jezero Bubanj. Prostire se na površini od oko <strong>3 ara</strong>, s prosečnom dubinom od <strong>0,8 metara</strong>. U jezeru žive ribe poput pastrmke, mrene i suničice, dok su na njegovim obalama prisutne divlje patke. Zbog svoje uloge u ublažavanju ekstremnih vremenskih uslova, jezero Bubanj predstavlja značajnu prirodnu vrednost za Kragujevac.
                </p>
              </section>

              <img srcSet={`${kragujevac99} 450w, ${kragujevac9} `} alt="Eko park Ilina voda" />

              <section lang="sr">
                <p>
                  <strong>Eko park Ilina voda</strong> nalazi se u kragujevačkom naselju Ilina voda i poznat je kao prvi ekološki park u Srbiji. Otvoren je <strong>1900. godine</strong>, što ga čini drugim najstarijim javnim parkom u Kragujevcu. Tokom devedesetih godina bio je u opasnosti da postane divlja deponija, ali su građani volonterskim radom sprečili njegovo propadanje. Park se prostire na više od <strong>7 hektara</strong> i izdvaja se svojim jedinstvenim konceptom u Srbiji – svi objekti u njemu izgrađeni su od recikliranog materijala i starih predmeta. Pored uobičajenih sadržaja, park sadrži i mini zoo vrt, a njegovo održavanje finansira se iz donacija društveno odgovornih kompanija i pojedinaca.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Kragujevac</strong> is the economic, administrative, educational, healthcare, cultural, and sports center of <em>Šumadija</em>. The city is located at a key junction of state roads and main traffic routes, in close proximity to the railway and highway corridor <strong>10</strong>, which connects Kragujevac with the rest of Serbia and Europe. It is situated <strong>140 kilometers</strong> south of Belgrade and <strong>150 kilometers</strong> north of Niš. The city covers an area of <strong>835 square kilometers</strong> and lies on the banks of the <strong>Lepenica</strong> River, in the <em>Kragujevac Basin</em>, where the final parts of the Šumadija mountains meet: <strong>Rudnik, Crni Vrh</strong>, and <strong>Gledićke Mountains</strong>. Kragujevac is the administrative center of the <strong>Šumadija District</strong>, and its territory includes the geographical center of Serbia, located eight kilometers northwest of the city center, in the area of the village of <strong>Drača</strong>.
                </p>
              </section>

              <img srcSet={`${kragujevac22} 450w, ${kragujevac2} `} alt="Kragujevac 2" />

              <section lang="en">
                <p>
                  Kragujevac stands out due to a favorable demographic situation, with positive trends in population growth, average age, and educational structure compared to the rest of Serbia. According to the <strong>2022 census</strong>, the city has <strong>171,186 inhabitants</strong>, making it the largest city in Šumadija and the fourth largest in the country. The city includes <strong>57 settlements</strong> and <strong>78 local communities</strong>. Of the total population, <strong>146,315</strong> live in the urban area, while <strong>24,871</strong> live in rural areas. Regarding educational structure, the largest percentage of the population has <strong>secondary vocational education</strong> (<strong>57%</strong>), while <strong>15%</strong> have completed only primary education. About <strong>7%</strong> have completed higher education, and <strong>17%</strong> hold a university degree. In Kragujevac, <strong>49%</strong> of the population is computer literate, while <strong>27%</strong> partially know how to use a computer. Along with Belgrade, Novi Sad, and Niš, Kragujevac represents a key center for spatial and sustainable development in Serbia. Over the past fifty years, the city has grown significantly, mainly due to its role as a regional and national industrial center. The level of urbanization in Kragujevac has been higher than in the rest of Serbia, attracting population not only from surrounding areas but also from other parts of the country.
                </p>
              </section>

              <img srcSet={`${kragujevac33} 450w, ${kragujevac3} `} alt="Kragujevac 3" />

              <section lang="en">
                <p>
                  Kragujevac was first mentioned in <strong>1476</strong>, during the Turkish conquest, in the tax-defter (a cadastral record book), as a <em>market town</em> with <strong>32 houses</strong>. Afterward, the city was almost deserted, like the entire Šumadija region, until the second half of the <strong>15th century</strong>, when the Turks established a new settlement on the left bank of the <strong>Lepenica</strong> River. The city was named after the bird <em>kraguj</em> (a species of hawk), which, according to local legend, lived in the surrounding forests. Until the national uprisings, the majority of the population consisted of Turks, except during periods of Austrian rule: first from <strong>1689 to 1690</strong>, and second from <strong>1719 to 1738</strong>, when significant settlement of Christian populations was recorded. Kragujevac experienced its first true boom in <strong>1818</strong>, when on <strong>May 6th, St. George's Day</strong>, it was proclaimed the capital of the restored Serbia. Due to its favorable geographical position and national homogeneity, unlike Belgrade where the Turkish administration was present, Prince <strong>Miloš</strong> decided to move the capital to Kragujevac, making the city the political center.
                </p>
              </section>

              <h3
                className="milosevVenac"
              >
                Milošev Venac
              </h3>

              {isMobile ? (
                <>
                  <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
                          alt={image.alt}
                          loading="lazy"
                          style={{
                            width: "80%",
                            height: "230px",
                            margin: "0 8% 0 12%",
                          }}
                          onClick={handleMilosevVenac}
                        />
                        <p className="milosevVenacName">{image.name}</p>
                      </div>
                    ))}
                  </Slider>
                </>
              ) : (
                <>
                  <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
                          alt={image.alt}
                          loading="lazy"
                          className="kgImages"
                          onClick={handleMilosevVenac}
                        />
                        <p className="milosevVenacName">{image.name}</p>
                      </div>
                    ))}
                  </Slider>
                </>
              )}

              <section lang="en">
                <p>
                  After the capital was moved back to Belgrade in <strong>1841</strong>, Kragujevac entered a period of stagnation. Nevertheless, the city remained an important political center where key assemblies in Serbia were held until <strong>1878</strong>. A particularly significant role in the history of the city and Serbian people was played by the <strong>Sretenje Assembly</strong>, where the first Constitution of the Principality of Serbia was adopted, as well as the announcement of the decisions of the <em>Berlin Congress of 1878</em>, which declared Serbia an independent state.
                </p>
              </section>

              <img
                srcSet={`${kragujevac44} 450w, ${kragujevac4} `}
                alt="Memorial Park 'Kragujevac October'"
              />

              <section lang="en">
                <p>
                  The <strong>Memorial Park "Kragujevac October"</strong> is located at the site where on <strong>October 21, 1941</strong>, German soldiers executed several thousand people from Kragujevac, including men, women, and children. This massacre was a reprisal for German losses in battles with Chetnik and Partisan forces on the Kragujevac – Gornji Milanovac route. In memory of the victims, the <em>Šumarice</em> area was transformed into a Memorial Park in <strong>1953</strong>, covering <strong>352 hectares</strong>. Every year, the event <em>"The Great School Lesson"</em> is held next to the Monument to executed pupils and teachers.
                </p>
              </section>

              <img srcSet={`${kragujevac55} 450w, ${kragujevac5} `} alt="Šumarice Lake" />

              <section lang="en">
                <p>
                  <strong>Šumarice Lake</strong> serves a decorative purpose and was created to beautify the Šumarice Memorial Park. This lake is very popular, especially during the summer months. It is also one of the most well-known swimming spots in Šumadija, attracting many swimmers and anglers. Šumarice Lake is <strong>1,500 meters</strong> long and <strong>175 meters</strong> wide. It holds approximately <strong>800,000 m³</strong> of water and covers an area of about <strong>22 hectares</strong>.
                </p>
              </section>

              <img srcSet={`${kragujevac66} 450w, ${kragujevac6} `} alt="Veliki Park in Kragujevac" />

              <section lang="en">
                <p>
                  <strong>Veliki Park</strong> is a favorite spot for walks among Kragujevac residents of all ages. Founded in <strong>1898</strong>, the park was completely renovated on its <strong>110th anniversary</strong>. It covers more than <strong>10 hectares</strong> of greenery, with dense canopies of century-old trees, renovated paths, and new benches making it an ideal place for rest, walks, and relaxation. Within and near Veliki Park are sports courts for basketball, football, volleyball, tennis, American football, and handball, as well as indoor and outdoor swimming pools, a balloon hall, and numerous catering establishments.
                </p>
              </section>

              <img srcSet={`${kragujevac77} 450w, ${kragujevac7} `} alt="Memorial Museum 'October 21' in Kragujevac" />

              <section lang="en">
                <p>
                  The <strong>Memorial Museum "October 21"</strong> in Kragujevac is dedicated to the memory of the victims of the mass execution that occurred on <strong>October 21, 1941</strong>, when Nazi occupation forces in Kragujevac shot more than <strong>2,300 civilians</strong>, including students and teachers. This event is one of the most tragic in the city's history and has become a symbol of suffering and resistance during World War II. The museum opened in <strong>1976</strong>, aiming to preserve the memory of the victims and honor the courage of the people in their fight for freedom. The museum is located within the Šumarice complex, near the site of the execution. The complex includes the museum, monuments, and memorial parks, with the Monument to executed pupils and teachers being especially significant.
                </p>
              </section>

              <img srcSet={`${kragujevac88} 450w, ${kragujevac8} `} alt="Bubanj Lake" />

              <section lang="en">
                <p>
                  <strong>Bubanj Lake</strong> is located only one kilometer from the city center and, although considered artificial, it was formed naturally. It is situated on the site of a former brick factory and is fed by rainwater and a strong spring called <em>Bubanj</em>. This lake is one of the favorite places for walking and relaxation among Kragujevac residents and visitors. It was formed by merging smaller pools that gradually expanded, creating today's Bubanj Lake. It covers an area of about <strong>3 ares</strong> with an average depth of <strong>0.8 meters</strong>. The lake is home to fish such as trout, barbel, and sunbleak, while wild ducks inhabit its shores. Due to its role in mitigating extreme weather conditions, Bubanj Lake represents a significant natural asset for Kragujevac.
                </p>
              </section>

              <img srcSet={`${kragujevac99} 450w, ${kragujevac9} `} alt="Eco Park Ilina Voda" />

              <section lang="en">
                <p>
                  <strong>Eco Park Ilina Voda</strong> is located in the Kragujevac neighborhood of Ilina Voda and is known as the first ecological park in Serbia. It was opened in <strong>1900</strong>, making it the second oldest public park in Kragujevac. During the 1990s, it was threatened to become an illegal dump, but citizens prevented its degradation through volunteer work. The park covers over <strong>7 hectares</strong> and stands out for its unique concept in Serbia – all structures within it are built from recycled materials and old objects. Besides the usual amenities, the park includes a mini zoo, and its maintenance is funded through donations from socially responsible companies and individuals.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Kragujevac;