/* eslint-disable react/no-unknown-property */
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
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContextAuth } from "../../../../../Context";
import { sumadijskiOkrugPathRoutes } from "./SumadijskiOkrugPathRoutes";
import { Helmet } from "react-helmet-async";

const PlaninarskaStazaZezeljIBesnjaja = () => {
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
    <>

      <Helmet>
        <title>
          {switchLanguage === 'rs'
            ? "Planinarska staza Žeželj – Bešnjaja | Kragujevac priroda i avantura"
            : "Žeželj – Bešnjaja Hiking Trail | Kragujevac Nature and Adventure"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Planinarska staza Žeželj-Bešnjaja kod Kragujevca vodi kroz bukove šume, proplanke i pored vodopada Buk. Idealna je za izletnike, ljubitelje prirode i planinare."
              : "The Žeželj–Bešnjaja hiking trail near Kragujevac offers scenic views, beech forests, meadows, and the tallest waterfall in Šumadija – Buk. Perfect for hikers and nature lovers."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Žeželj, Bešnjaja, planinarenje Kragujevac, Buk vodopad, planinarska staza, priroda Šumadije, izletište Kragujevac, šume, vrh Cerjak, Gledićke planine"
              : "Zezelj, Besnjaja, hiking Kragujevac, Buk waterfall, hiking trail Serbia, Šumadija nature, Cerjak peak, beech forest, scenic hike Serbia"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/zezelj-i-besnjaja`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/zezelj-i-besnjaja"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/zezelj-i-besnjaja"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/zezelj-i-besnjaja"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(sumadijskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${zezeljIBesnjaja11} 450w, ${zezeljIBesnjaja1} `} alt="Planinarska staza Žeželj i Bešnjaja 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Planinarska staza Žeželj i Bešnjaja</h1>

              <section lang="sr">
                <p>
                  <strong>Žeželj</strong> je brdo koje se nalazi u kragujevačkom naselju <em>Ždraljica</em>. Vrh se
                  uzdiže na <strong>486 metara</strong> nadmorske visine, sa kojeg se pruža pogled na grad
                  <strong>Kragujevac</strong>, dolinu reke <em>Ždraljice</em> i <strong>Gledićke planine</strong> na horizontu. Od
                  centra <strong>Kragujevca</strong> udaljeno je <em>4-5 km</em>. Poznato je kao planinarski teren i
                  izletnička destinacija. Kroz njega prolazi registrovana <strong>Kragujevačka planinarska staza Žeželj-Bešnjaja</strong>. Po ovom brdu je ime dobilo i
                  kragujevačko Planinarsko društvo <strong>Žeželj</strong>.
                </p>
              </section>

              <img
                srcSet={`${zezeljIBesnjaja22} 450w, ${zezeljIBesnjaja2}`}
                alt="Planinarska staza Žeželj i Bešnjaja 2"
              />

              <section lang="sr">
                <p>
                  Planinarska staza <strong>Žeželj-Bešnjaja</strong> je popularna izletnička tura koja
                  povezuje brdo <strong>Žeželj</strong> i planinu <strong>Bešnjaju</strong>. Duga je <em>19 km</em> i polazi iz
                  naselja <em>Ždraljica</em>, sa obližnjeg vodopada <strong>Buk (Duboki potok)</strong>, a završava
                  kod <strong>Momičilove vodeniče</strong> u naselju <em>Bukovac</em>. Staza počinje u naselju
                  <em>Ždraljica</em>, prati put prema starom selu <em>Ždraljica</em> na oko stotinu metara,
                  a zatim skreće prema vodopadu <strong>Buk</strong>.
                </p>
              </section>

              {isMobile ? (
                <>
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
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
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
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

              <section lang="sr">
                <p>
                  Ispred vodopada nalazi se platforma za razgledanje. <strong>Buk</strong> je najviši
                  vodopad u <em>Šumadiji</em> i glavna atrakcija ove ture. Staza zatim vodi
                  grebenom kroz pojas stoletne <strong>bukove šume</strong> i proplanke, sve do vrha <strong>Žeželj</strong>
                  (<em>486 m</em>), sa kojeg se pruža pogled na grad <strong>Kragujevac</strong>, dolinu reke
                  <em>Ždraljice</em> i <strong>Gledićke planine</strong>.
                </p>
              </section>

              <img
                srcSet={`${zezeljIBesnjaja44} 450w, ${zezeljIBesnjaja4}`}
                alt="Planinarska staza Žeželj i Bešnjaja 4"
              />

              <section lang="sr">
                <p>
                  Na vrhu se nalaze ostaci planinarskog doma koji je uništen u požaru.
                  Staza od vodopada do vrha <strong>Žeželj</strong> duga je <em>2,5 km</em> i sve vreme vodi kroz
                  šumu. Sa <strong>Žeželja</strong>, staza se spušta do zaseoka <em>Srednja mala</em> u <em>Donjoj Sabanti</em>,
                  prolazi pored nekoliko stoletnih spomenika i spušta se do ušća
                  <strong>Mamutovačkog potoka</strong> u reku <strong>Osanicu</strong>. Odatle sledi uspon ka vrhu <strong>Cerjak</strong>
                  (<em>507 m</em>), do dela puta zvanog <em>Prlić</em>, sa kojeg se ponovo pružaju lepi
                  pogledi na okolinu.
                </p>
              </section>

              <img
                srcSet={`${zezeljIBesnjaja55} 450w, ${zezeljIBesnjaja5}`}
                alt="Planinarska staza Žeželj i Bešnjaja 5"
              />

              <section lang="sr">
                <p>
                  Dalje, staza prolazi ispod vrha <strong>Lisin Laz</strong> (<em>613 m</em>). Odatle se put spušta
                  i prolazi iznad izvora <em>"Đurina česma"</em>, odakle, preko kosine <strong>Veliko brdo</strong>,
                  izlazi na greben <strong>Bešnjaje</strong>. Nastavlja u pravcu naselja <em>Gornje Komarice</em>,
                  skreće prema <strong>Gigovskom potoku</strong> i odatle, nakon kraćeg uspona, spušta se u
                  <em>Bukovac</em>, do <strong>Momičilove vodeniče</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Hiking Trail Žeželj and Bešnjaja</h1>

              <section lang="en">
                <p> <strong>Žeželj</strong> is a hill located in the Kragujevac neighborhood of <em>Ždraljica</em>. The peak rises to an altitude of <strong>486 meters</strong>, offering views of the city of <strong>Kragujevac</strong>, the valley of the <em>Ždraljica</em> river, and the <strong>Gledić Mountains</strong> on the horizon. It is located about <em>4-5 km</em> from the center of <strong>Kragujevac</strong>. It is known as a hiking area and a popular excursion destination. The registered <strong>Kragujevac hiking trail Žeželj-Bešnjaja</strong> passes through it. The Kragujevac Hiking Society named <strong>Žeželj</strong> after this hill. </p>
              </section>


              <img
                srcSet={`${zezeljIBesnjaja22} 450w, ${zezeljIBesnjaja2}`}
                alt="Hiking trail Žeželj and Bešnjaja 2"
              />

              <section lang="en"> <p> The hiking trail <strong>Žeželj-Bešnjaja</strong> is a popular excursion route connecting the hill <strong>Žeželj</strong> and the mountain <strong>Bešnjaja</strong>. It is <em>19 km</em> long and starts from the neighborhood of <em>Ždraljica</em>, near the waterfall <strong>Buk (Duboki potok)</strong>, and ends at <strong>Momićil's Watermill</strong> in the settlement of <em>Bukovac</em>. The trail begins in <em>Ždraljica</em>, follows the road toward the old village of <em>Ždraljica</em> for about one hundred meters, then turns toward the <strong>Buk</strong> waterfall. </p> </section>

              {isMobile ? (
                <>
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
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
                          srcSet={`${image.mobileSrc} 450w, ${image.desktopSrc} `}
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

              <section lang="en"> <p> In front of the waterfall there is a viewing platform. <strong>Buk</strong> is the highest waterfall in <em>Šumadija</em> and the main attraction of this tour. The trail then leads along the ridge through a belt of century-old <strong>beech forest</strong> and clearings, up to the peak of <strong>Žeželj</strong> (<em>486 m</em>), offering views of the city of <strong>Kragujevac</strong>, the valley of the <em>Ždraljica</em> river, and the <strong>Gledić Mountains</strong>. </p> </section>
              <img
                srcSet={`${zezeljIBesnjaja44} 450w, ${zezeljIBesnjaja4}`}
                alt="Hiking trail Žeželj and Bešnjaja 4"
              />

              <section lang="en"> <p> At the peak are the remains of a hikers’ lodge that was destroyed by fire. The trail from the waterfall to the peak of <strong>Žeželj</strong> is <em>2.5 km</em> long and leads entirely through the forest. From <strong>Žeželj</strong>, the trail descends to the hamlet of <em>Srednja Mala</em> in <em>Donja Sabanta</em>, passes by several century-old monuments, and descends to the confluence of <strong>Mamutovački Creek</strong> into the <strong>Osanica</strong> river. From there, the trail climbs to the peak of <strong>Cerjak</strong> (<em>507 m</em>), to a part of the trail called <em>Prlić</em>, which offers beautiful views of the surroundings again. </p> </section>
              <img
                srcSet={`${zezeljIBesnjaja55} 450w, ${zezeljIBesnjaja5}`}
                alt="Hiking trail Žeželj and Bešnjaja 5"
              />

              <section lang="en"> <p> Further on, the trail passes below the peak of <strong>Lisin Laz</strong> (<em>613 m</em>). From there, the path descends and passes above the spring called <em>"Đurina česma"</em>, then over the slope of <strong>Veliko brdo</strong>, emerging onto the ridge of <strong>Bešnjaja</strong>. It continues toward the settlement of <em>Gornje Komarice</em>, turns toward <strong>Gigovski Creek</strong>, and from there, after a short ascent, descends into <em>Bukovac</em>, to <strong>Momićil's Watermill</strong>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default PlaninarskaStazaZezeljIBesnjaja;