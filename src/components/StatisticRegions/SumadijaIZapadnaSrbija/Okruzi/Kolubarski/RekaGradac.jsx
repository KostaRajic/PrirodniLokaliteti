import gradac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac1.jpg";
import gradac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac2.jpg";
import gradac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac3.jpg";
import gradac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac4.jpg";
import gradac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac5.jpg";
import gradac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac6.jpg";
import gradac21 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac21.jpg";
import gradac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac22.jpg";
import gradac23 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac23.jpg";
import gradac24 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac24.jpg";
import gradac25 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac25.jpg";
import gradac26 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/desktop/gradac26.jpg";
import gradac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac1.jpg";
import gradac220 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac2.jpg";
import gradac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac3.jpg";
import gradac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac4.jpg";
import gradac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac5.jpg";
import gradac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac6.jpg";
import gradac211 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac21.jpg";
import gradac222 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac22.jpg";
import gradac233 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac23.jpg";
import gradac244 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac24.jpg";
import gradac255 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac25.jpg";
import gradac266 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/RekaGradac/mobile/Mgradac26.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";

export const RekaGradac = () => {
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
      desktopSrc: gradac21,
      mobileSrc: gradac211,
      alt: "Reka Gradac 21",
    },
    {
      desktopSrc: gradac22,
      mobileSrc: gradac222,
      alt: "Reka Gradac 22",
    },
    {
      desktopSrc: gradac23,
      mobileSrc: gradac233,
      alt: "Reka Gradac 23",
    },
    {
      desktopSrc: gradac24,
      mobileSrc: gradac244,
      alt: "Reka Gradac 24",
    },
    {
      desktopSrc: gradac25,
      mobileSrc: gradac255,
      alt: "Reka Gradac 25",
    },
    {
      desktopSrc: gradac26,
      mobileSrc: gradac266,
      alt: "Reka Gradac 26",
    },
  ];

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(kulubarskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${gradac11} 400w, ${gradac1} `} alt="Reka Gradac 1" />

      <h2 style={{ color: "white" }}>Reka Gradac</h2>

      <p style={{ paddingTop: "50px" }}>
        Reka Gradac je jedno od najlepših prirodnih blaga Srbije, koja je deo
        hidrološkog sistema zapadnog dela zemlje. Prolazi kroz okrug Valjevo,
        teče kroz planinske predele, stvarajući prirodne lepote koje privlače
        posetioce iz svih krajeva. Gradac je poznat po čistoj vodi, velikom
        broju izvora i bistrim potocima, zbog čega je stekao reputaciju jedne od
        najlepših reka u Srbiji.
      </p>

      <img srcSet={`${gradac33} 400w, ${gradac3} `} alt="Reka Gradac 2" />

      <p>
        Izvire na planini Maljen i teče kroz Valjevske planine, stvarajući
        slapove, kaskade i prirodne bazene. Njegovo korito je bogato florom i
        faunom, a reka je značajna zbog prirodnih resursa, uključujući vodu
        izuzetne kvalitete. Pored toga, Gradac je i turistička destinacija koja
        pruža uživanje u šetnjama, planiranim izletima i kupanju u prirodnim
        bazenima. Njegove obale su domaćin velikim količinama divlje flore i
        faune, među kojima su brojne vrste ptica, riba i biljaka.
      </p>

      {isMobile ? (
        <>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  srcSet={`${image.mobileSrc} 400w, ${image.desktopSrc} `}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    width: "80%",
                    height: "230px",
                    margin: "0 8% 0 12%"
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
        </>
      ) : (
        <>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  srcSet={`${image.mobileSrc} 400w, ${image.desktopSrc} `}
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
        Gradac je reka ponornica, koja na jednom delu svog toka ponire u zemlju,
        pa ponovo izvire na površinu. Kroz klisuru teče sve do Kolubare, u koju
        se uliva. Kanjon reke dugačak je 22.7 kilometara i predstavlja
        jedinstveni primer prirodne lepote. Zbog svoje bistrine i čistoće, reka
        je dom mnogim vrstama riba, među kojima je pastrmka
        najrasprostranjenija, a pecanje je popularna aktivnost. U kanjonu se
        nalazi oko 70 istraženih pećina i jama, što ovu oblast čini veoma
        specifičnom i vrednom istraživanja.
      </p>

      <img srcSet={`${gradac220} 400w, ${gradac2} `} alt="Reka Gradac 3" />

      <p>
        Reka Gradac obiluje prirodnim bogatstvima, od pećina i jama, do livada i
        šuma. U kanjonu se mogu pronaći retke vrste biljaka, uključujući
        orhideje, dok životinjski svet obuhvata brojne vrste ptica, gmizavaca,
        divljači i riba. Gradac je dom i za 240 različitih vrsta gljiva i
        pečuraka. Životinje koje nastanjuju ovaj kraj uključuju kosove,
        prepelice, zečeve, srne, vidre, kao i mnoge vrste riba poput pastrmke,
        mrene i klena. Ovaj region je pravi raj za ljubitelje prirode i one koji
        žele da uživaju u netaknutoj divljini.
      </p>

      { isMobile ? (<div className="displayFlexClassic">
        <img
          srcSet={`${gradac44} 400w, ${gradac4} `}
          alt="Reka Gradac 31"
          style={{ margin: '0 10px', width: "40%", height: "200px" }}
        />
        <img
          srcSet={`${gradac66} 400w, ${gradac6} `}
          alt="Reka Gradac 32"
          style={{ margin: "0 10px", width: "40%", height: "200px" }}
        />
      </div>)
      :
      (<div className="displayFlexClassic">
        <img
srcSet={`${gradac44} 400w, ${gradac4} `}
          alt="Reka Gradac 31"
          style={{ margin: "0 50px", width: "600px", height: "600px" }}
        />
        <img
 srcSet={`${gradac66} 400w, ${gradac6} `}
          alt="Reka Gradac 32"
          style={{ margin: "0 50px", width: "600px", height: "600px" }}
        />
      </div>)}

      

      <p>
        Zbog svojih pogodnih prirodnih karakteristika, veruje se da su obalu
        reke i kanjon naseljavali ljudi još od paleolita i antičkog perioda.
        Kanjon je čitavom dužinom prohodan, što omogućava posetiocima da se
        upuste u avanturističke šetnje i uživanje u prirodi. Obilazak reke
        najbolje je započeti od manastira Ćelije, koji se nalazi 6 kilometara od
        Valjeva, a odatle možete pratiti tok reke, kupati se, plivati, kampovati
        i uživati u čistoj vodi koja je pogodna za piće.
      </p>

      <img srcSet={`${gradac55} 400w, ${gradac5} `} alt="Reka Gradac 5" />

      <p>
        Reka Gradac, osim što je prirodni raj za ljubitelje prirode, nudi i
        raznovrsne mogućnosti za odmor i opuštanje u okolnim restoranima i
        odmaralištima. U tom području nalaze se brojne etno kuće, restorani i
        turistička mesta, koja nude autentičnu uslugu, tradicionalnu hranu i
        savršeno okruženje za uživanje u prirodi. Ukoliko ste ljubitelj
        ribolova, reka Gradac je poznata po svojoj populaciji pastrmki, pa
        možete uživati u pecanju uz obalu i probati svoje sreće u ovom
        tradicionalnom sportu. Restorani uz reku takođe često nude svježe
        ulovljenu ribu iz reke, koja je pripremljena na tradicionalan način.
      </p>
    </div>
  );
};
