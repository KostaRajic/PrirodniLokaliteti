import cacak1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/cacak1.jpg";
import cacak2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/cacak2.jpg";
import cacak3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/cacak3.jpg";
import cacak4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/cacak4.jpg";
import cacak5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/cacak5.jpg";
import cacak6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/cacak6.jpg";
import cacak7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/cacak7.jpg";
import cacak8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/cacak8.webp";
import cacakSpomenBIP1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/spomenParkBorbeIPobede1.webp";
import cacakSpomenBIP2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/spomenParkBorbeIPobede2.webp";
import cacakSpomenBIP3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/spomenParkBorbeIPobede3.jpg";
import cacakSpomenBIP4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/spomenParkBorbeIPobede4.webp";
import cacakSpomenBIP5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/spomenParkBorbeIPobede5.webp";
import cacakSpomenBIP6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/spomenParkBorbeIPobede6.webp";
import cacakSpomenBIP7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Cacak/spomenPakrBorbeIPobede/spomenParkBorbeIPobede7.webp";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export const Cacak = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

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
      src: cacakSpomenBIP1,
      alt: "Spomenik Borbe i Pobede u Čačku 1",
    },
    {
      src: cacakSpomenBIP2,
      alt: "Spomenik Borbe i Pobede u Čačku 2",
    },
    {
      src: cacakSpomenBIP3,
      alt: "Spomenik Borbe i Pobede u Čačku 3",
    },
    {
      src: cacakSpomenBIP4,
      alt: "Spomenik Borbe i Pobede u Čačku 4",
    },
    {
      src: cacakSpomenBIP5,
      alt: "Spomenik Borbe i Pobede u Čačku 5",
    },
    {
      src: cacakSpomenBIP6,
      alt: "Spomenik Borbe i Pobede u Čačku 6",
    },
    {
      src: cacakSpomenBIP7,
      alt: "Spomenik Borbe i Pobede u Čačku 7",
    },
  ];

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={cacak1} alt="Planina Rudnik 1" />

      <h2 style={{ color: "white" }}>ČAČAK</h2>

      <p style={{ paddingTop: "50px" }}>
        Grad Čačak se većim delom nalazi u zapadnom Pomoravlju i predstavlja
        most između brdovitog područja Šumadije na severu i planinskih oblasti
        unutrašnjih Dinarida na jugu. Centar grada zauzima čačanska kotlina,
        smeštena između planina Jelice na jugu, Ovčara i Kablara na zapadu, te
        Vujna na severu, dok je na istoku otvorena prema Kraljevačkoj kotlini.
        Planine se postepeno i talasasto spuštaju prema čačanskoj kotlini, gradu
        i toku Zapadne Morave.
      </p>

      <img src={cacak2} alt="Planina Rudnik 2" />

      <p>
        Reljef grada Čačka uglavnom je brdsko-brežuljkasti, dok je u centralnom
        delu ravničarski, dok na periferiji prelazi u planinske predel.
        Teritoriju grada možemo podeliti u tri glavne morfološke celine:
        čačansku kotlinu, brdsko-brežuljkasti predeo i planinski predeo.
        Čačanska kotlina, koja se nalazi na nadmorskoj visini od 200 do 300
        metara, okružena je planinama Ovčar i Kablar sa zapadne strane, planinom
        Jelicom na jugu i planinama Vujan i Bukovik sa severa. Dužina kotline,
        od Ovčarsko-kablarske klisure do suženja kod Kraljeva, iznosi oko 40 km,
        srednja širina je oko 5,5 km, dok je ukupna površina nešto više od 270
        kvadratnih kilometara. Grad Čačak se smešta u centralni deo kotline, uz
        obale Zapadne Morave.
      </p>

      <img src={cacak3} alt="Planina Rudnik 3" />

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

      {isMobile ? (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ margin: "20px" }}>
              <img
                src={image.src}
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
                  src={image.src}
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

      <p>
        Spomen park borbe i pobede posvećen je palim borcima NOVJ i žrtvama
        fašizma iz Čačka i okolnih područja, koji su stradali tokom Drugog
        svetskog rata. Autor spomen-kompleksa je arhitekta Bogdan Bogdanović, a
        zvanično je otvoren 1980. godine. Centralni objekat u parku, trodelni
        megaron, visok je 12 metara, a na njegovim zidovima nalaze se prikazi
        divljih zveri iz različitih svetskih mitologija.
      </p>

      <img src={cacak4} alt="Planina Rudnik 4" />

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

      <img src={cacak5} alt="Planina Rudnik 5" />

      <p>
        Narodni muzej u Čačku je značajna kulturna institucija koja čuva i
        predstavlja bogatu istorijsku, umetničku i arheološku baštinu ovog
        kraja. Osnovan je 1951. godine i danas je domaćin brojnim izložbama,
        kako stalnim, tako i povremenim, koje obuhvataju različite periode i
        aspekte prošlosti Čačka i šireg regiona. Muzej se sastoji iz nekoliko
        odeljenja, među kojima su arheološko, etnološko, istorijsko i umetničko.
        Posetioci mogu da se upoznaju sa značajnim arheološkim nalazima,
        predmetima iz svakodnevnog života, kao i sa umetničkim delima koja
        ilustruju kulturni razvoj ovog područja. Muzej je i edukativni centar,
        koji često organizuje radionice, predavanja i tematske izložbe, čineći
        ga važnim mestom za očuvanje i proučavanje kulturne baštine Čačka.
      </p>

      <img src={cacak6} alt="Planina Rudnik 5" />

      <p>
        Memorijalni kompleks i spomenik na Ljubiću posvećeni su boji na Ljubiću
        iz 1815. godine, tokom Drugog srpskog ustanka. Spomenik na Ljubiću je
        najstariji u ovom kompleksu, čija izgradnja je započeta 1938. godine
        prema projektu vajara Milovana Krstića. Ima oblik visokog obeliska na
        postolju, koje je ukrašeno bronzanim frizom sa prikazom Tanaska Rajića
        kako gine braneći top. Radovi na spomeniku su nastavljeni 1978. godine,
        kada je dovršen i ureden. Spomenik je posvećen ustanicima na čelu sa
        Tanaskom Rajićem, koji je poginuo tokom boja, 25. aprila 1815. godine.
      </p>

      <img src={cacak7} alt="Planina Rudnik 5" />

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

      <img src={cacak8} alt="Planina Rudnik 5" />

      <p>
        Crkva se nalazi u samom centru Čačka. Ktitor je knez Stracimir, brat
        velikog Župana Stefana Nemanje. Hram je građen od 1180. do 1190. godine.
        Osnova crkve je pravougaona, dužine 29,75 m. Po arhitekturi, to je veoma
        prostoran hram sa trodelnim oltarskim prostorom na istočnoj strani, sa
        zvonicima i visokom srednjom kupolom čiji je raspon skoro 12 metara.
        Turci su crkvu delimično rušili i od nje pravili islamsku bogomolju, ali
        su je Srbi uporno obnavljali.
      </p>
    </div>
  );
};
