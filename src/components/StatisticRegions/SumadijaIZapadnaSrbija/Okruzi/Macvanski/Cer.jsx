import cer1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cer1.jpg";
import cer2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cer2.jpg";
import cer3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cer3.jpg";
import cer5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cer5.jpg";
import cer6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cer6.jpg";
import cer1M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cerManastirCokesina.jpg";
import cer2M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cerManastirKaona.jpg";
import cer3M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cerManastirPetkovica.jpg";
import cer4M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cerManastirPetraIPavla.jpg";
import cer5M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cerManastirPreobrazenjeGospodnje.jpg";
import cer6M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/cerManastirRadovasnica.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export const Cer = () => {
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
      pauseOnHover: false,
      arrows: false,
    }
  : {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: false,
      arrows: false,
    };


  const images = [
    {
      name: "Manastir Čokešina",
      src: cer1M,
      alt: "Manastir Cokesina",
    },
    {
      name: "Manastir Kaona",
      src: cer2M,
      alt: "Manastir Kaona",
    },
    {
      name: "Manastir Petkovica",
      src: cer3M,
      alt: "Manastir Petkovica",
    },
    {
      name: "Manastir Svetih apostola Petra i Pavla",
      src: cer4M,
      alt: "Manastir Svetih apostola Petra i Pavla",
    },
    {
      name: "Manastir Preobraženje Gospodnje",
      src: cer5M,
      alt: "Manastir Preobrazenje Gospodnje",
    },
    {
      name: "Manastir Radovašnica",
      src: cer6M,
      alt: "Manastir Radovašnica",
    },
  ];

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={cer1} alt="Planina Cer 1" />
      <h2>PLANINA CER</h2>
      <p style={{ paddingTop: "50px" }}>
        Cer je planina u blizini Šapca, koja nudi raznovrsne sadržaje za
        turiste. Iako je najpoznatija po istorijskoj bici iz Prvog svetskog
        rata, ova mirna lepotica još uvek nije dovoljno otkrivena od strane
        domaćih posetilaca. Sa nekoliko prelepih vidikovaca, sa kojih se pruža
        pogled na pola Srbije, Cer je savršen za ljubitelje prirode. Idealna je
        za etno turizam, vikend izlete, šetnje i biciklizam. Kao turistički
        dragulj severozapadne Srbije, Cer će vas oduševiti na mnoge načine.
        Donosimo vam deset razloga zbog kojih biste trebali da je posetite još
        ove godine.
      </p>

      <img src={cer2} alt="Planina Cer 2" />
      <p>
        Pogledi sa ove planine su glavni razlog zbog kojih turisti dolaze na
        Cer. Najviši vrh dostiže visinu od 687 metara, a na planini se nalaze
        četiri vrha viša od 600 metara. Jedan od najlepših vidikovaca je
        Proplanak, ali ni ostali nisu ništa manje impresivni. Kako kažu meštani,
        sa jednog od njih može se videti pola Srbije, dok su i oni koji
        obuhvataju okolna sela podjednako lepi. Osećaj koji ovi vidikovci
        pružaju razlog je zbog kojeg mnogi odlučuju da krenu planiranim stazama
        Cera, kako bi došli do nekog od njih i uživali u moćnom pogledu, često i
        uz fotografiju koja zabeleži taj trenutak.
      </p>
      <img src={cer3} alt="Planina Cer 3" />

      <p>
        Jedan od najvažnijih događaja u nacionalnoj istoriji odigrao se upravo
        na Zelenoj planini. Sećanje na Cersku bitku, u kojoj je srpska vojska,
        uprkos brojčanoj inferiornosti, pod vođstvom Stepe Stepanovića pobedila
        Austrougare, čuva se na više načina. U znak sećanja na Cerske junake i
        legendarni sukob, 1928. godine u selu Tekerišu podignut je spomenik sa
        spomen-kosturnicom posvećenim Cerskim junacima. Spomenik je izrađen od
        cerskog granita, a na njegovom vrhu nalazi se orao sa lovorovim vencem u
        kljunu, simbolom moći i pobede. Natpis na spomeniku „Vaša dela su
        besmrtna“ odražava zahvalnost i ponos srpskog naroda prema hrabrim
        vojnicima. Pored spomenika, tu je i mešovito groblje na kojem su
        sahranjeni srpski i austrougraski vojnici poginuli tokom Cerske bitke.
      </p>

      <img src={cer6} alt="Planina Cer 4" />
      <p>
        Cer se često pominje kao pogodna destinacija za rehabilitaciju osoba
        koje pate od neuroza ili depresije. Međutim, on je savršen i za sve koji
        žele da pobegnu od svakodnevnog života u gradu. Njegov svež vazduh,
        blaga klima i prirodne boje koje umiruju i revitalizuju, zajedno sa
        prelepim vidikovcima, pružaju pravo osveženje za dušu. Veruje se da je
        kretanje lek, a s obzirom na to da Cer nudi idealne staze za šetnje,
        nije iznenađenje što mnogi preporučuju ovu planinu kao mesto koje ima
        snagu da izleči našu unutrašnju ravnotežu.
      </p>

      {isMobile ? (
        <>
          <h4
            style={{
              textAlign: "center",
              margin: "10px 0 35px 0",
              color: "rgb(19 17 35)",
              fontSize: "25px",
              fontWeight: "400",
            }}
          >
            Manastiri planine Cer
          </h4>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    width: "170px",
                    height: "230px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    textAlign: "center",
                    paddingBottom: '5px'
                  }}
                >
                  {image.name}
                </p>
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <>
          <h4
            style={{
              textAlign: "center",
              margin: "20px 0 60px 0",
              color: "rgb(19 17 35)",
              fontSize: "35px",
              fontWeight: "400",
            }}
          >
            Manastiri planine Cer
          </h4>
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

      <p style={{ marginTop: "-10px" }}>
        Na planini Gučevo, u blizini Loznice, postavljen je spomenik ruskoj
        bolničarki Darji Aleksandrovnoj Korobkinoj, koja je poginula dok je
        pomagali srpskim vojnicima tokom Prvog svetskog rata. „Ono što danas
        činimo na stotu godišnjicu završetka Prvog svetskog rata predstavlja
        spomenik časti i zahvalnosti Darji Aleksandrovnoj. Na Gučevu svako drvo
        simbolizuje slobodu, svaka bukva izrasla je iz krvi i patnji mnogih duša
        koje je ona svakodnevno lečila, obavezivala i pružala pomoć, i to čak
        sto pedeset puta dnevno“, izjavio je gradonačelnik Loznice.
      </p>
      <img src={cer5} alt="Planina Cer 5" />
      <p>
        Zelena planina nije zahtevna destinacija, što znači da vam nije potrebna
        specijalizovana planinarska oprema da biste uživali u šetnjama njenim
        stazama i posetili prelepe vidikovce. Planina je bogata florom, a tokom
        šetnje uživaćete u miru koji pružaju brojna stabla cera, bukovine,
        hrasta i graba. Ova šumovita planina, koja nije previše naseljena, sa
        laganim i prijatnim stazama, idealna je za beg od gradske gužve. Poseban
        adut su tematske staze koje se organizuju na Ceru. Možete krenuti
        Rimskom stazom i obići Trojanov grad iz trećeg veka, ili izabrati šumsku
        stazu. Ako ste ljubitelj nacionalne istorije, staza slave i pobede će
        biti vaš izbor. Maj je idealan mesec za posetu, jer tada možete proći
        stazom „Moj Cer, moja staza“, koja kreće od manastira Radovašnica i
        završava se kod Lipovih voda. Dužina staze je 6 km, a duž nje su
        smeštena uredna odmarališta.
      </p>
    </div>
  );
};