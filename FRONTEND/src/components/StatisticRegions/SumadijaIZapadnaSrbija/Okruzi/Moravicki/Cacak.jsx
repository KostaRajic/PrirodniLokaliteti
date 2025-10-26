/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import cacak1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/desktop/cacak1.jpg";
import cacak2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/desktop/cacak2.jpg";
import cacak3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/desktop/cacak3.jpg";
import cacak4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/desktop/cacak4.jpg";
import cacak5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/desktop/cacak5.jpg";
import cacak6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/desktop/cacak6.jpg";
import cacak7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/desktop/cacak7.jpg";
import cacak8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/desktop/cacak8.jpg";
import cacakSpomenBIP1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/desktop/spomenParkBorbeIPobede1.jpg";
import cacakSpomenBIP2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/desktop/spomenParkBorbeIPobede2.jpg";
import cacakSpomenBIP3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/desktop/spomenParkBorbeIPobede3.jpg";
import cacakSpomenBIP4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/desktop/spomenParkBorbeIPobede4.jpg";
import cacakSpomenBIP5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/desktop/spomenParkBorbeIPobede5.jpg";
import cacakSpomenBIP6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/desktop/spomenParkBorbeIPobede6.jpg";
import cacakSpomenBIP7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/desktop/spomenParkBorbeIPobede7.jpg";
import cacak11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/mobile/Mcacak1.jpg";
import cacak22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/mobile/Mcacak2.jpg";
import cacak33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/mobile/Mcacak3.jpg";
import cacak44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/mobile/Mcacak4.jpg";
import cacak55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/mobile/Mcacak5.jpg";
import cacak66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/mobile/Mcacak6.jpg";
import cacak77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/mobile/Mcacak7.jpg";
import cacak88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/mobile/Mcacak8.jpg";
import cacakSpomenBIP11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/mobile/MspomenParkBorbeIPobede1.jpg";
import cacakSpomenBIP22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/mobile/MspomenParkBorbeIPobede2.jpg";
import cacakSpomenBIP33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/mobile/MspomenParkBorbeIPobede3.jpg";
import cacakSpomenBIP44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/mobile/MspomenParkBorbeIPobede4.jpg";
import cacakSpomenBIP55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/mobile/MspomenParkBorbeIPobede5.jpg";
import cacakSpomenBIP66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/mobile/MspomenParkBorbeIPobede6.jpg";
import cacakSpomenBIP77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/mobile/MspomenParkBorbeIPobede7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";

const Cacak = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
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
    };

  const images = [
    {
      desktopSrc: cacakSpomenBIP1,
      mobileSrc: cacakSpomenBIP11,
      alt: "Spomenik Borbe i Pobede u Čačku 1",
    },
    {
      desktopSrc: cacakSpomenBIP2,
      mobileSrc: cacakSpomenBIP22,
      alt: "Spomenik Borbe i Pobede u Čačku 2",
    },
    {
      desktopSrc: cacakSpomenBIP3,
      mobileSrc: cacakSpomenBIP33,
      alt: "Spomenik Borbe i Pobede u Čačku 3",
    },
    {
      desktopSrc: cacakSpomenBIP4,
      mobileSrc: cacakSpomenBIP44,
      alt: "Spomenik Borbe i Pobede u Čačku 4",
    },
    {
      desktopSrc: cacakSpomenBIP5,
      mobileSrc: cacakSpomenBIP55,
      alt: "Spomenik Borbe i Pobede u Čačku 5",
    },
    {
      desktopSrc: cacakSpomenBIP6,
      mobileSrc: cacakSpomenBIP66,
      alt: "Spomenik Borbe i Pobede u Čačku 6",
    },
    {
      desktopSrc: cacakSpomenBIP7,
      mobileSrc: cacakSpomenBIP77,
      alt: "Spomenik Borbe i Pobede u Čačku 7",
    },
  ];

  return (
    <>

      <Helmet>
        <title>
          {switchLanguage === 'rs'
            ? "Čačak – Grad na obali Zapadne Morave | Serbia Wonders"
            : "Čačak – A City on the Banks of the West Morava | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Čačak se nalazi u zapadnom Pomoravlju, između planina Ovčara, Kablara, Jelice i Vujna. Grad se odlikuje bogatom istorijom, kulturnim znamenitostima i prirodnim lepotama poput Zapadne Morave, gradskog parka, muzeja i spomen-parka Borbe i pobede."
              : "Čačak is located in western Pomoravlje, surrounded by the mountains Ovčar, Kablar, Jelica, and Vujan. The city is known for its rich history, cultural landmarks, and natural beauty, including the West Morava River, city park, museum, and Memorial Park of Struggle and Victory."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Čačak, Zapadna Morava, Ovčar, Kablar, Šumadija, Pomoravlje, Čačanska kotlina, gradski park, Narodni muzej Čačak, Bogdan Bogdanović, Spomen park borbe i pobede, kulturna baština, priroda u gradu"
              : "Čačak, West Morava, Ovčar, Kablar, Šumadija, Pomoravlje, Čačak Basin, city park, National Museum of Čačak, Bogdan Bogdanović, Memorial Park of Struggle and Victory, cultural heritage, urban nature"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/cacak`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/cacak"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/cacak"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/cacak"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${cacak11} 450w, ${cacak1} `} alt="Grad Čačak 1" />

        <h1 style={{ color: "white" }}>Čačak</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  Grad <strong>Čačak</strong> se većim delom nalazi u <strong>zapadnom Pomoravlju</strong> i predstavlja
                  most između brdovitog područja <strong>Šumadije</strong> na severu i planinskih oblasti
                  <em>unutrašnjih Dinarida</em> na jugu. Centar grada zauzima <strong>čačanska kotlina</strong>,
                  smeštena između planina <strong>Jelice</strong> na jugu, <strong>Ovčara i Kablara</strong> na zapadu, te
                  <strong>Vujna</strong> na severu, dok je na istoku otvorena prema <strong>Kraljevačkoj kotlini</strong>.
                  Planine se postepeno i talasasto spuštaju prema čačanskoj kotlini, gradu
                  i toku <strong>Zapadne Morave</strong>.
                </p>
              </section>

              <img srcSet={`${cacak22} 450w, ${cacak2}`} alt="Čačak 2" />

              <section lang="sr">
                <p>
                  Reljef grada Čačka uglavnom je <em>brdsko-brežuljkasti</em>, dok je u centralnom
                  delu <strong>ravničarski</strong>, dok na periferiji prelazi u planinske predel.
                  Teritoriju grada možemo podeliti u tri glavne morfološke celine:
                  <strong>čačansku kotlinu</strong>, <em>brdsko-brežuljkasti predeo</em> i <strong>planinski predeo</strong>.
                  Čačanska kotlina, koja se nalazi na nadmorskoj visini od <strong>200 do 300
                    metara</strong>, okružena je planinama <strong>Ovčar i Kablar</strong> sa zapadne strane, planinom
                  <strong>Jelicom</strong> na jugu i planinama <strong>Vujan i Bukovik</strong> sa severa. Dužina kotline,
                  od Ovčarsko-kablarske klisure do suženja kod Kraljeva, iznosi oko <strong>40 km</strong>,
                  srednja širina je oko <strong>5,5 km</strong>, dok je ukupna površina nešto više od <strong>270
                    kvadratnih kilometara</strong>. Grad Čačak se smešta u centralni deo kotline, uz
                  obale <strong>Zapadne Morave</strong>.
                </p>
              </section>

              <img srcSet={`${cacak33} 450w, ${cacak3}`} alt="Centar grada Čačka" />

              <section lang="sr">
                <p>
                  Centar grada Čačka je urbano i administrativno središte, koje čini
                  jezgro grada i glavni centar svih važnih dešavanja. U njemu se nalaze
                  glavne ulice, trgovi, administrativne i kulturne institucije, kao i
                  brojni restorani, prodavnice i kafići. Grad je poznat po svom
                  istorijskom nasleđu, a u centru se nalaze i značajni spomenici, crkve,
                  kao i druge kulturne znamenitosti. Centar grada je dobro povezan sa
                  okolnim područjima, čineći ga pristupačnim za turiste i posetioce. Osim
                  toga, centralna zona grada je i komercijalno i ekonomski najživahnija, s
                  mnoštvom prodavnica i poslovnih prostora.
                </p>
              </section>

              {isMobile ? (
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index} style={{ margin: "20px" }}>
                      <img
                        srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
                        alt={image.alt}
                        loading="lazy"
                        style={{
                          width: "85%",
                          height: "230px",
                          margin: "4% 4% 4% 6%",
                        }}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          paddingBottom: "5px",
                        }}
                      >
                        {image.name}
                      </p>
                    </div>
                  ))}
                </Slider>
              ) : (
                <>
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
                          alt={image.alt}
                          loading="lazy"
                          style={{
                            width: "400px",
                            height: "400px",
                            marginLeft: "50px",
                          }}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            padding: "40px 20px 0  20px",
                            width: "400px",
                            marginLeft: "50px",
                          }}
                        >
                          {image.name}
                        </p>
                      </div>
                    ))}
                  </Slider>
                </>
              )}

              <section lang="sr">
                <p>
                  <strong>Spomen park borbe i pobede</strong> posvećen je palim borcima NOVJ i žrtvama
                  fašizma iz Čačka i okolnih područja, koji su stradali tokom Drugog
                  svetskog rata. Autor spomen-kompleksa je arhitekta <strong>Bogdan Bogdanović</strong>, a
                  zvanično je otvoren <strong>1980. godine</strong>. Centralni objekat u parku, trodelni
                  megaron, visok je <strong>12 metara</strong>, a na njegovim zidovima nalaze se prikazi
                  divljih zveri iz različitih svetskih mitologija.
                </p>
              </section>

              <img srcSet={`${cacak44} 450w, ${cacak4}`} alt="Gradski park u Čačku" />

              <section lang="sr">
                <p>
                  Gradski park u Čačku je jedan od omiljenih prostora za odmor i
                  rekreaciju meštana i posetilaca. Smesten u samom centru grada, pruža
                  mirnu i zelenu oazu u urbanoj sredini. Park je bogat zelenilom, drvećem
                  i raznovrsnim biljem, a tu su i staze za šetanje, klupe za odmor i
                  igrališta za decu. Pored toga, često se koristi i za različite kulturne
                  i društvene događaje. Gradski park je idealno mesto za uživanje u
                  prirodi, a njegova centralna lokacija čini ga lako dostupnim svim
                  posetiocima.
                </p>
              </section>

              <img srcSet={`${cacak55} 450w, ${cacak5}`} alt="Narodni muzej u Čačku" />

              <section lang="sr">
                <p>
                  Narodni muzej u Čačku je značajna kulturna institucija koja čuva i
                  predstavlja bogatu istorijsku, umetničku i arheološku baštinu ovog
                  kraja. Osnovan je <strong>1951. godine</strong> i danas je domaćin brojnim izložbama,
                  kako stalnim, tako i povremenim, koje obuhvataju različite periode i
                  aspekte prošlosti Čačka i šireg regiona. Muzej se sastoji iz nekoliko
                  odeljenja, među kojima su arheološko, etnološko, istorijsko i umetničko.
                  Posetioci mogu da se upoznaju sa značajnim arheološkim nalazima,
                  predmetima iz svakodnevnog života, kao i sa umetničkim delima koja
                  ilustruju kulturni razvoj ovog područja. Muzej je i edukativni centar,
                  koji često organizuje radionice, predavanja i tematske izložbe, čineći
                  ga važnim mestom za očuvanje i proučavanje kulturne baštine Čačka.
                </p>
              </section>

              <img srcSet={`${cacak66} 450w, ${cacak6}`} alt="Memorijalni kompleks i spomenik na Ljubiću" />

              <section lang="sr">
                <p>
                  Memorijalni kompleks i spomenik na Ljubiću posvećeni su boji na Ljubiću
                  iz <strong>1815. godine</strong>, tokom Drugog srpskog ustanka. Spomenik na Ljubiću je
                  najstariji u ovom kompleksu, čija izgradnja je započeta <strong>1938. godine</strong>
                  prema projektu vajara <strong>Milovana Krstića</strong>. Ima oblik visokog obeliska na
                  postolju, koje je ukrašeno bronzanim frizom sa prikazom Tanaska Rajića
                  kako gine braneći top. Radovi na spomeniku su nastavljeni <strong>1978. godine</strong>,
                  kada je dovršen i uređen. Spomenik je posvećen ustanicima na čelu sa
                  Tanaskom Rajićem, koji je poginuo tokom boja, <strong>25. aprila 1815. godine</strong>.
                </p>
              </section>

              <img srcSet={`${cacak77} 450w, ${cacak7}`} alt="Rimske terme u Čačku" />

              <section lang="sr">
                <p>
                  Rimske terme u Čačku predstavljaju značajan arheološki lokalitet koji
                  svedoči o bogatoj istoriji ovog regiona u periodu Rimskog carstva.
                  Nalaze se u samom centru grada, a veruje se da su bile deo rimskog
                  naselja koja su postojala na ovom području. Terme su korišćene za
                  kupanje i društvene aktivnosti, a istraživanja su pokazala da su bile
                  opremljene sa svim karakteristikama tadašnjih rimskih kupališta,
                  uključujući prostorije za topli i hladni bazen, kao i sisteme za
                  grejanje vode. Ovaj lokalitet pruža uvid u svakodnevni život Rimljana u
                  regionu i značajnu ulogu koju su terme imale u društvenom životu toga
                  vremena. Arheološki nalazi sa ovog lokaliteta, uključujući delove
                  građevinskih struktura i predmete koji su otkriveni, doprinose boljem
                  razumevanju rimskog života u Čačku. Rimske terme su danas popularna
                  turistička destinacija i važan deo kulturno-istorijskog nasleđa grada.
                </p>
              </section>

              <img srcSet={`${cacak88} 450w, ${cacak8}`} alt="Crkva u Čačku" />

              <section lang="sr">
                <p>
                  Crkva se nalazi u samom centru Čačka. Ktitor je knez Stracimir, brat
                  velikog Župana Stefana Nemanje. Hram je građen od <strong>1180. do 1190. godine</strong>.
                  Osnova crkve je pravougaona, dužine <strong>29,75 metara</strong>. Sastoji se od
                  trodelnog oltarskog prostora, zvonika i visoke centralne kupole, sa
                  rasponom od <strong>12 metara</strong>. Tokom turske vladavine, crkva je korišćena
                  kao džamija, ali je nakon oslobođenja grada obnovljena i vraćena u
                  prvobitnu namenu. Danas je spomenik kulture od velikog značaja i simbol
                  duhovnog života grada.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  The city of <strong>Čačak</strong> is mostly located in the <strong>western Pomoravlje</strong> region and represents
                  a bridge between the hilly area of <strong>Šumadija</strong> to the north and the mountainous regions
                  of the <em>inner Dinarides</em> to the south. The city center occupies the <strong>Čačak basin</strong>,
                  situated between the <strong>Jelica</strong> mountain to the south, the <strong>Ovčar and Kablar</strong> mountains to the west, and
                  <strong>Vujan</strong> to the north, while to the east it opens towards the <strong>Kraljevo basin</strong>.
                  The mountains gradually and wave-like descend towards the Čačak basin, the city,
                  and the flow of the <strong>Western Morava River</strong>.
                </p>
              </section>

              <img srcSet={`${cacak22} 450w, ${cacak2}`} alt="Čačak 2" />

              <section lang="en">
                <p>
                  The relief of the city of Čačak is mostly <em>hilly and rolling</em>, while the central
                  part is <strong>flat</strong>, transitioning to mountainous terrain on the outskirts.
                  The city territory can be divided into three main morphological units:
                  the <strong>Čačak basin</strong>, <em>hilly-rolling area</em>, and <strong>mountainous region</strong>.
                  The Čačak basin, located at an altitude of <strong>200 to 300 meters</strong>, is surrounded by the
                  <strong>Ovčar and Kablar</strong> mountains on the west side, the <strong>Jelica</strong> mountain to the south,
                  and the <strong>Vujan and Bukovik</strong> mountains to the north. The length of the basin,
                  from the Ovčar-Kablar gorge to the narrowing near Kraljevo, is about <strong>40 km</strong>,
                  the average width is about <strong>5.5 km</strong>, while the total area is slightly over <strong>270
                    square kilometers</strong>. The city of Čačak is located in the central part of the basin, along
                  the banks of the <strong>Western Morava River</strong>.
                </p>
              </section>

              <img srcSet={`${cacak33} 450w, ${cacak3}`} alt="Center of Čačak" />

              <section lang="en">
                <p>
                  The center of Čačak is an urban and administrative hub, forming
                  the core of the city and the main center of all important events. It hosts
                  main streets, squares, administrative and cultural institutions, as well as
                  numerous restaurants, shops, and cafés. The city is known for its
                  historical heritage, and the center features significant monuments, churches,
                  and other cultural landmarks. The city center is well connected to
                  surrounding areas, making it accessible to tourists and visitors. Furthermore,
                  the central zone of the city is also the most commercially and economically active,
                  with many shops and business premises.
                </p>
              </section>

              {isMobile ? (
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index} style={{ margin: "20px" }}>
                      <img
                        srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
                        alt={image.alt}
                        loading="lazy"
                        style={{
                          width: "85%",
                          height: "230px",
                          margin: "4% 4% 4% 6%",
                        }}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          paddingBottom: "5px",
                        }}
                      >
                        {image.name}
                      </p>
                    </div>
                  ))}
                </Slider>
              ) : (
                <>
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
                          alt={image.alt}
                          loading="lazy"
                          style={{
                            width: "400px",
                            height: "400px",
                            marginLeft: "50px",
                          }}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            padding: "40px 20px 0  20px",
                            width: "400px",
                            marginLeft: "50px",
                          }}
                        >
                          {image.name}
                        </p>
                      </div>
                    ))}
                  </Slider>
                </>
              )}

              <section lang="en">
                <p>
                  The <strong>Memorial Park of the Fight and Victory</strong> is dedicated to the fallen fighters of the NOVJ (National Liberation Army)
                  and victims of fascism from Čačak and the surrounding areas, who perished during World War II.
                  The memorial complex was designed by architect <strong>Bogdan Bogdanović</strong> and officially opened in <strong>1980</strong>.
                  The central structure in the park, a three-part megaron, is <strong>12 meters tall</strong>,
                  and its walls feature depictions of wild beasts from various world mythologies.
                </p>
              </section>

              <img srcSet={`${cacak44} 450w, ${cacak4}`} alt="City Park in Čačak" />

              <section lang="en">
                <p>
                  The City Park in Čačak is one of the favorite places for rest and
                  recreation for locals and visitors. Located right in the city center, it offers
                  a peaceful and green oasis in the urban environment. The park is rich with greenery, trees,
                  and various plants, and it also includes walking paths, benches for resting, and
                  playgrounds for children. Additionally, it is often used for various cultural
                  and social events. The City Park is an ideal place to enjoy nature, and its central location
                  makes it easily accessible to all visitors.
                </p>
              </section>

              <img srcSet={`${cacak55} 450w, ${cacak5}`} alt="National Museum in Čačak" />

              <section lang="en">
                <p>
                  The National Museum in Čačak is a significant cultural institution that preserves and
                  presents the rich historical, artistic, and archaeological heritage of this
                  region. It was established in <strong>1951</strong> and today hosts numerous exhibitions,
                  both permanent and temporary, covering various periods and aspects of Čačak's
                  and the wider region’s past. The museum consists of several departments, including archaeological,
                  ethnological, historical, and artistic. Visitors can explore important archaeological finds,
                  everyday life artifacts, as well as artworks illustrating the cultural development of the area.
                  The museum also serves as an educational center, often organizing workshops, lectures,
                  and themed exhibitions, making it an important place for preserving and studying Čačak’s cultural heritage.
                </p>
              </section>

              <img srcSet={`${cacak66} 450w, ${cacak6}`} alt="Memorial Complex and Monument at Ljubić" />

              <section lang="en">
                <p>
                  The Memorial Complex and Monument at Ljubić are dedicated to the Battle of Ljubić
                  from <strong>1815</strong>, during the Second Serbian Uprising. The monument at Ljubić is
                  the oldest in this complex, with construction beginning in <strong>1938</strong> based on
                  a design by sculptor <strong>Milovan Krstić</strong>. It has the shape of a tall obelisk on
                  a pedestal, decorated with a bronze frieze depicting Tanasko Rajić dying while defending a cannon.
                  Work on the monument continued in <strong>1978</strong>, when it was completed and arranged.
                  The monument is dedicated to the insurgents led by Tanasko Rajić,
                  who died during the battle on <strong>April 25, 1815</strong>.
                </p>
              </section>

              <img srcSet={`${cacak77} 450w, ${cacak7}`} alt="Roman Baths in Čačak" />

              <section lang="en">
                <p>
                  The Roman baths in Čačak represent an important archaeological site that
                  testifies to the rich history of this region during the Roman Empire period.
                  They are located in the city center and are believed to have been part of
                  a Roman settlement that existed in this area. The baths were used for
                  bathing and social activities, and research has shown they were equipped
                  with all the features of Roman baths at the time, including rooms for hot and cold pools,
                  as well as heating systems for the water. This site provides insight into
                  the daily life of Romans in the region and the significant role baths
                  played in the social life of that era. Archaeological finds from this site,
                  including parts of building structures and discovered objects, contribute
                  to a better understanding of Roman life in Čačak. Today, the Roman baths
                  are a popular tourist destination and an important part of the city's cultural and historical heritage.
                </p>
              </section>

              <img srcSet={`${cacak88} 450w, ${cacak8}`} alt="Church in Čačak" />

              <section lang="en">
                <p>
                  The church is located in the very center of Čačak. The founder is Prince Stracimir,
                  brother of the great Župan Stefan Nemanja. The temple was built from <strong>1180 to 1190</strong>.
                  The church’s foundation is rectangular, with a length of <strong>29.75 meters</strong>.
                  It consists of a three-part altar area, a bell tower, and a tall central dome,
                  with a span of <strong>12 meters</strong>. During Ottoman rule, the church was used
                  as a mosque, but after the city’s liberation, it was restored and returned to
                  its original purpose. Today, it is a cultural monument of great importance and a symbol
                  of the city's spiritual life.
                </p>
              </section>


            </>
          )}


      </div>
    </>
  );
};


export default Cacak;