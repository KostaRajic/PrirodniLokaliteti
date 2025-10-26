/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
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
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";

const RekaGradac = () => {
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
    <>

      <Helmet>

        <title>{switchLanguage === "rs" ? "Reka Gradac – Prirodni dragulj Valjevskog kraja | Serbia Wonders" : "Reka Gradac – A Natural Gem of the Valjevo Region | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === "rs" ?
            "Reka Gradac, poznata po čistoj vodi, kanjonu i bogatoj flori i fauni. Idealna destinacija za ljubitelje prirode i avanturiste u Valjevskom okrugu."
            :
            "Gradac River is known for its clean water, canyon, and rich flora and fauna. A perfect destination for nature lovers and adventurers in the Valjevo district."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === "rs" ?
            "Reka Gradac, kanjon Gradac, Valjevo, priroda, speleologija, ribolov, etno kuće, turizam, čistа voda"
            :
            "Gradac River, Gradac canyon, Valjevo, nature, speleology, fishing, ethno houses, tourism, clean water"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/reka-gradac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/reka-gradac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/reka-gradac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/reka-gradac"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(kulubarskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${gradac11} 450w, ${gradac1} `} alt="Reka Gradac 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Reka Gradac</h1>

              <section lang="sr">
                <p>
                  <strong>Reka Gradac</strong> je jedno od najlepših prirodnih blaga Srbije, koja je deo
                  hidrološkog sistema zapadnog dela zemlje. Prolazi kroz okrug <strong>Valjevo</strong>,
                  teče kroz planinske predele, stvarajući prirodne lepote koje privlače
                  posetioce iz svih krajeva. Gradac je poznat po <em>čistoj vodi</em>, velikom
                  broju izvora i bistrim potocima, zbog čega je stekao reputaciju jedne od
                  najlepših reka u Srbiji.
                </p>
              </section>

              <img srcSet={`${gradac33} 450w, ${gradac3}`} alt="Reka Gradac 2" />

              <section lang="sr">
                <p>
                  Izvire na <strong>planini Maljen</strong> i teče kroz <strong>Valjevske planine</strong>, stvarajući
                  slapove, kaskade i prirodne bazene. Njegovo korito je bogato <em>florom i faunom</em>,
                  a reka je značajna zbog prirodnih resursa, uključujući <strong>vodu izuzetne
                    čistoće</strong>. Pored toga, Gradac je i <strong>turistička destinacija</strong> koja
                  pruža uživanje u šetnjama, izletima i kupanju u prirodnim bazenima.
                  Njegove obale su dom brojnim vrstama <em>ptica, riba i biljaka</em>.
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
                  <strong>Gradac</strong> je reka <em>ponornica</em>, koja na jednom delu toka ponire u zemlju,
                  a zatim ponovo izvire na površinu. Kroz klisuru teče sve do reke <strong>Kolubare</strong>,
                  u koju se uliva. <strong>Kanjon</strong> reke dugačak je <strong>22,7 kilometara</strong> i predstavlja
                  jedinstveni primer netaknute prirodne lepote. Zbog bistrine i čistoće,
                  reka je dom mnogim vrstama <strong>riba</strong>, među kojima je <em>pastrmka</em> najzastupljenija,
                  a <strong>pecanje</strong> je veoma popularna aktivnost. U kanjonu se nalazi oko
                  <strong>70 istraženih pećina i jama</strong>, što ovu oblast čini izuzetno značajnom
                  za speleološka i biološka istraživanja.
                </p>
              </section>

              <img srcSet={`${gradac220} 450w, ${gradac2}`} alt="Reka Gradac 3" />

              <section lang="sr">
                <p>
                  Reka Gradac obiluje prirodnim bogatstvima – od pećina i jama do livada i
                  šuma. U kanjonu se mogu pronaći <strong>retke vrste biljaka</strong>, uključujući
                  <em>orhideje</em>, dok životinjski svet obuhvata brojne vrste <strong>ptica, gmizavaca,
                    divljači i riba</strong>. Gradac je dom za preko <strong>240 različitih vrsta gljiva i pečuraka</strong>.
                  Među životinjama koje naseljavaju ovu oblast nalaze se <em>kosovi, prepelice,
                    zečevi, srne, vidre</em> i mnoge vrste <strong>riba</strong> poput <em>pastrmke, mrene i klena</em>.
                  Ovaj region predstavlja pravi <strong>raj za ljubitelje prirode</strong> i one koji žele da
                  uživaju u <em>netaknutoj divljini</em>.
                </p>
              </section>

              {isMobile ? (<div className="displayFlexClassic">
                <img
                  srcSet={`${gradac44} 450w, ${gradac4} `}
                  alt="Reka Gradac 31"
                  style={{ margin: '0 10px', width: "40%", height: "200px" }}
                />
                <img
                  srcSet={`${gradac66} 450w, ${gradac6} `}
                  alt="Reka Gradac 32"
                  style={{ margin: "0 10px", width: "40%", height: "200px" }}
                />
              </div>)
                :
                (<div className="displayFlexClassic">
                  <img
                    srcSet={`${gradac44} 450w, ${gradac4} `}
                    alt="Reka Gradac 31"
                    style={{ margin: "0 50px", width: "600px", height: "600px" }}
                  />
                  <img
                    srcSet={`${gradac66} 450w, ${gradac6} `}
                    alt="Reka Gradac 32"
                    style={{ margin: "0 50px", width: "600px", height: "600px" }}
                  />
                </div>)}

              <section lang="sr">
                <p>
                  Zbog svojih prirodnih karakteristika, smatra se da su <strong>obale reke i kanjon</strong>
                  bili naseljeni još od <strong>paleolita</strong> i <strong>antičkog perioda</strong>.
                  Kanjon je <em>prohodan celom dužinom</em>, što omogućava avanturističke šetnje i
                  uživanje u pejzažima. Obilazak reke često počinje od <strong>manastira Ćelije</strong>,
                  koji se nalazi na <strong>6 kilometara od Valjeva</strong>, odakle posetioci mogu pratiti tok
                  reke, <em>kupati se, kampovati i piti čistu izvorsku vodu</em>.
                </p>
              </section>

              <img srcSet={`${gradac55} 450w, ${gradac5}`} alt="Reka Gradac 5" />

              <section lang="sr">
                <p>
                  <strong>Reka Gradac</strong>, osim što je prirodni dragulj, pruža i raznovrsne mogućnosti
                  za <em>odmor i relaksaciju</em> u obližnjim <strong>restoranima i etno domaćinstvima</strong>.
                  U okolini se nalaze brojne <strong>etno-kuće</strong>, tradicionalni <strong>restorani</strong> i
                  <strong>turistički sadržaji</strong> koji nude autentičnu atmosferu, domaću hranu i
                  savršeno prirodno okruženje. Ljubitelji <strong>ribolova</strong> mogu uživati u
                  pecanju uz obalu, a <em>lokalni restorani</em> često u ponudi imaju <strong>sveže ulovljenu
                    pastrmku</strong> iz reke, pripremljenu na tradicionalan način.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Gradac River</h1>

              <section lang="en">
                <p>
                  <strong>Gradac River</strong> is one of the most beautiful natural treasures of Serbia, forming part of the
                  hydrological system of the country's western region. It flows through the <strong>Valjevo</strong> district,
                  winding through mountainous areas and creating stunning natural landscapes that attract
                  visitors from all over. Gradac is renowned for its <em>clean water</em>, numerous springs,
                  and crystal-clear streams, earning it a reputation as one of the most beautiful rivers in Serbia.
                </p>
              </section>

              <img srcSet={`${gradac33} 450w, ${gradac3}`} alt="Gradac River 2" />

              <section lang="en">
                <p>
                  The river originates on <strong>Mount Maljen</strong> and flows through the <strong>Valjevo Mountains</strong>,
                  creating waterfalls, cascades, and natural pools. Its riverbed is rich in <em>flora and fauna</em>,
                  and the river is valued for its natural resources, including <strong>exceptionally clean water</strong>.
                  In addition, Gradac is a <strong>popular tourist destination</strong> offering hiking, picnicking,
                  and swimming in natural surroundings. Its banks are home to many species of <em>birds, fish, and plants</em>.
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
                  <strong>Gradac</strong> is a <em>losing stream</em>, disappearing underground along part of its course
                  and re-emerging to the surface. It flows through a gorge until it joins the <strong>Kolubara River</strong>.
                  The <strong>canyon</strong> of the Gradac River is <strong>22.7 kilometers</strong> long and represents a
                  unique example of untouched natural beauty. Due to its clarity and purity, the river is home to many species
                  of <strong>fish</strong>, with <em>trout</em> being the most common. <strong>Fishing</strong> is a very popular activity.
                  Around <strong>70 explored caves and pits</strong> can be found in the canyon, making it highly significant
                  for speleological and biological research.
                </p>
              </section>

              <img srcSet={`${gradac220} 450w, ${gradac2}`} alt="Gradac River 3" />

              <section lang="en">
                <p>
                  The Gradac River is rich in natural features – from caves and pits to meadows and
                  forests. The canyon is home to <strong>rare plant species</strong>, including <em>orchids</em>, while its
                  wildlife includes numerous species of <strong>birds, reptiles, game, and fish</strong>. Gradac is also home to
                  over <strong>240 different types of fungi and mushrooms</strong>. Animals living in the area include <em>blackbirds,
                    quails, hares, deer, otters</em>, and many types of <strong>fish</strong> such as <em>trout, barbel, and chub</em>.
                  This region is a true <strong>paradise for nature lovers</strong> and for those seeking to enjoy <em>untouched wilderness</em>.
                </p>
              </section>

              {isMobile ? (<div className="displayFlexClassic">
                <img
                  srcSet={`${gradac44} 450w, ${gradac4} `}
                  alt="Reka Gradac 31"
                  style={{ margin: '0 10px', width: "40%", height: "200px" }}
                />
                <img
                  srcSet={`${gradac66} 450w, ${gradac6} `}
                  alt="Reka Gradac 32"
                  style={{ margin: "0 10px", width: "40%", height: "200px" }}
                />
              </div>)
                :
                (<div className="displayFlexClassic">
                  <img
                    srcSet={`${gradac44} 450w, ${gradac4} `}
                    alt="Reka Gradac 31"
                    style={{ margin: "0 50px", width: "600px", height: "600px" }}
                  />
                  <img
                    srcSet={`${gradac66} 450w, ${gradac6} `}
                    alt="Reka Gradac 32"
                    style={{ margin: "0 50px", width: "600px", height: "600px" }}
                  />
                </div>)}

              <section lang="en">
                <p>
                  Due to its natural features, it is believed that the <strong>riverbanks and canyon</strong>
                  were inhabited as far back as the <strong>Paleolithic</strong> and <strong>Antiquity</strong>.
                  The canyon is <em>walkable along its entire length</em>, offering opportunities for adventure walks
                  and enjoying the scenery. The best starting point for exploring the river is <strong>Ćelije Monastery</strong>,
                  located <strong>6 kilometers from Valjevo</strong>. From there, visitors can follow the river’s course,
                  <em>swim, camp, and drink clean spring water</em>.
                </p>
              </section>

              <img srcSet={`${gradac55} 450w, ${gradac5}`} alt="Gradac River 5" />

              <section lang="en">
                <p>
                  <strong>The Gradac River</strong>, in addition to being a natural gem, offers various opportunities for
                  <em>relaxation and leisure</em> in nearby <strong>restaurants and rural households</strong>.
                  The surrounding area features numerous <strong>ethno-houses</strong>, traditional <strong>restaurants</strong>,
                  and <strong>tourist attractions</strong> offering an authentic atmosphere, homemade food,
                  and a perfect natural setting. Fishing enthusiasts can enjoy casting their lines from the riverbanks,
                  while <em>local restaurants</em> often serve <strong>freshly caught trout</strong> from the river,
                  prepared in traditional ways.
                </p>
              </section>


            </>
          )}


      </div>
    </>
  );
};


export default RekaGradac;