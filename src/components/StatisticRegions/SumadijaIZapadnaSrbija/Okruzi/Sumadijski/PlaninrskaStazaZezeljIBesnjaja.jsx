import zezeljIBesnjaja1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja1.jpg";
import zezeljIBesnjaja2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja2.jpg";
import zezeljIBesnjaja31 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja31.jpg";
import zezeljIBesnjaja32 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja32.jpg";
import zezeljIBesnjaja33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja33.jpg";
import zezeljIBesnjaja34 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja34.jpg";
import zezeljIBesnjaja35 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja35.jpg";
import zezeljIBesnjaja36 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja36.jpg";
import zezeljIBesnjaja37 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja37.jpg";
import zezeljIBesnjaja4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja4.jpg";
import zezeljIBesnjaja5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/desktop/zezeljIBesnjaja5.jpg";
import zezeljIBesnjaja11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja1.jpg";
import zezeljIBesnjaja22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja2.jpg";
import zezeljIBesnjaja311 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja31.jpg";
import zezeljIBesnjaja322 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja32.jpg";
import zezeljIBesnjaja333 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja33.jpg";
import zezeljIBesnjaja344 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja34.jpg";
import zezeljIBesnjaja355 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja35.jpg";
import zezeljIBesnjaja366 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja36.jpg";
import zezeljIBesnjaja377 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja37.jpg";
import zezeljIBesnjaja44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja4.jpg";
import zezeljIBesnjaja55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ZezeljIBesnjaja/mobile/MzezeljIBesnjaja5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PlaninarskaStazaZezeljIBesnjaja = () => {
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
      desktopSrc: zezeljIBesnjaja31,
      mobileSrc: zezeljIBesnjaja311,
      alt: "Planinarska staza Žeželj i Bešnjaja 1",
    },
    {
      desktopSrc: zezeljIBesnjaja22,
      mobileSrc: zezeljIBesnjaja322,
      alt: "Planinarska staza Žeželj i Bešnjaja 2",
    },
    {
      desktopSrc: zezeljIBesnjaja33,
      mobileSrc: zezeljIBesnjaja333,
      alt: "Planinarska staza Žeželj i Bešnjaja 3",
    },
    {
      desktopSrc: zezeljIBesnjaja34,
      mobileSrc: zezeljIBesnjaja344,
      alt: "Planinarska staza Žeželj i Bešnjaja 4",
    },
    {
      desktopSrc: zezeljIBesnjaja35,
      mobileSrc: zezeljIBesnjaja355,
      alt: "Planinarska staza Žeželj i Bešnjaja 5",
    },
    {
      desktopSrc: zezeljIBesnjaja36,
      mobileSrc: zezeljIBesnjaja366,
      alt: "Planinarska staza Žeželj i Bešnjaja 6",
    },
    {
      desktopSrc: zezeljIBesnjaja37,
      mobileSrc: zezeljIBesnjaja377,
      alt: "Planinarska staza Žeželj i Bešnjaja 7",
    },
  ];

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${zezeljIBesnjaja11} 400w, ${zezeljIBesnjaja1} `} alt="Planinarska staza Žeželj i Bešnjaja 1" />

      <h2 style={{ color: "white" }}>Planinarska staza Žeželj i Bešnjaja</h2>

      <p style={{ paddingTop: "50px" }}>
        Žeželj je brdo koje se nalazi u kragujevačkom naselju Ždraljica. Vrh se
        uzdiže na 486 metara nadmorske visine, sa kojeg se pruža pogled na grad
        Kragujevac, dolinu reke Ždraljice i Gledićke planine na horizontu. Od
        centra Kragujevca udaljeno je 4-5 km. Poznato je kao planinarski teren i
        izletnička destinacija. Kroz njega prolazi registrovana Kragujevačka
        planinarska staza Žežel-Bešnaja. Po ovom brdu je ime dobilo i
        kragujevačko Planinarsko društvo Žeželj.
      </p>

      <img srcSet={`${zezeljIBesnjaja22} 400w, ${zezeljIBesnjaja2} `} alt="Planinarska staza Žeželj i Bešnjaja 2" />

      <p>
        Planinarska staza Žeželj-Bešnjaja je popularna izletnička tura koja
        povezuje brdo Žeželj i planinu Bešnjaju. Duga je 19 km i polazi iz
        naselja Ždraljica, sa obližnjeg vodopada Buk (Duboki potok), a završava
        kod Momičilove vodeniče u naselju Bukovac. Staza počinje u naselju
        Ždraljica, prati put prema starom selu Ždraljica na oko stotinu metara,
        a zatim skreće prema vodopadu Buk.
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
                    height: "200px",
                    margin: "0 8% 0 12%",
                  }}
                />
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
                    margin: "0 0 50px 50px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </>
      )}

      <p>
        Ispred vodopada nalazi se platforma za razgledanje. Buk je najviši
        vodopad u Šumadiji i glavna atrakcija ove ture. Staza zatim vodi
        grebenom kroz pojas stoletne bukove šume i proplanke, sve do vrha Žeželj
        (486 m), sa kojeg se pruža pogled na grad Kragujevac, dolinu reke
        Ždraljice i Gledićke planine.
      </p>

      <img srcSet={`${zezeljIBesnjaja44} 400w, ${zezeljIBesnjaja4} `} alt="Planinarska staza Žeželj i Bešnjaja 4" />

      <p>
        Na vrhu se nalaze ostaci planinarskog doma koji je uništen u požaru.
        Staza od vodopada do vrha Žeželj duga je 2,5 km i sve vreme vodi kroz
        šumu. Sa Žeželja, staza se spušta do zaseoka Srednja mala u Donjoj
        Sabanti, prolazi pored nekoliko stoletnih spomenika i spušta se do ušća
        Mamutovačkog potoka u reku Osanicu. Odatle sledi uspon ka vrhu Cerjak
        (507 m), do dela puta zvanog Prlić, sa kojeg se ponovo pružaju lepi
        pogledi na okolinu.
      </p>

      <img srcSet={`${zezeljIBesnjaja55} 400w, ${zezeljIBesnjaja5} `} alt="Planinarska staza Žeželj i Bešnjaja 5" />

      <p>
        Dalje, staza prolazi ispod vrha Lisin Laz (613 m). Odatle se put spušta
        i prolazi iznad izvora "Đurina česma", odakle, preko kosine Veliko brdo,
        izlazi na greben Bešnjaje. Nastavlja u pravcu naselja Gornje Komarice,
        skreće prema Gigovskom potoku i odatle, nakon kraćeg uspona, spušta se u
        Bukovac, do Momičilove vodeniče.
      </p>
    </div>
  );
};
