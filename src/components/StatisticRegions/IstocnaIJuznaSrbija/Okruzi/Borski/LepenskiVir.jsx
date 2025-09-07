/* eslint-disable react/no-unknown-property */
import lepenskiVir1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/desktop/lepenskiVir1.jpg";
import lepenskiVir2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/desktop/lepenskiVir2.jpg";
import lepenskiVir3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/desktop/lepenskiVir3.jpg";
import lepenskiVir4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/desktop/lepenskiVir4.jpg";
import lepenskiVir111 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/mobile/lepenskiVirM1.jpg";
import lepenskiVir22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/mobile/lepenskiVirM2.jpg";
import lepenskiVir33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/mobile/lepenskiVirM3.jpg";
import lepenskiVir44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/mobile/lepenskiVirM4.jpg";

import lepenskiVir11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_1.jpg";
import lepenskiVir12 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_2.jpg";
import lepenskiVir13 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_3.jpg";
import lepenskiVir14 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_4.jpg";
import lepenskiVir15 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_5.jpg";
import lepenskiVir16 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_6.jpg";
import lepenskiVir17 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_7.jpg";
import lepenskiVir333 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/lepenskiVir3_3.jpg";


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";

const LepenskiVir = () => {
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
      src: lepenskiVir11,
      alt: "Artifakti Lepenski Vir 1",
    },
    {
      src: lepenskiVir12,
      alt: "Artifakti Lepenski Vir 2",
    },
    {
      src: lepenskiVir13,
      alt: "Artifakti Lepenski Vir 3",
    },
    {
      src: lepenskiVir14,
      alt: "Artifakti Lepenski Vir 4",
    },
    {
      src: lepenskiVir15,
      alt: "Artifakti Lepenski Vir 5",
    },
    {
      src: lepenskiVir16,
      alt: "Artifakti Lepenski Vir 6",
    },
    {
      src: lepenskiVir17,
      alt: "Artifakti Lepenski Vir 7",
    },
  ];

  return (

    <>

      <Helmet>


        <title>{switchLanguage === 'rs' ? "Lepenski Vir – Arheološko Blago Đerdapske Klisure | Serbia Wonders" : "Lepenski Vir – The Archaeological Treasure of the Đerdap Gorge | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Lepenski Vir je jedno od najvažnijih mezolitskih i neolitskih nalazišta u Srbiji, smešteno u Đerdapskoj klisuri. Otkrića uključuju jedinstvene skulpture, trapezoidne građevine i sedam sukcesivnih naselja."
            :
            "Lepenski Vir is one of the most important Mesolithic and Neolithic sites in Serbia, located in the Đerdap Gorge. Discover unique sculptures, trapezoidal buildings, and seven successive settlements."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Lepenski Vir, Đerdapska klisura, mezolit, neolit, arheologija Srbije, Dragoslav Srejović, Đerdapsko jezero, Gvozdena kapija, neolitske skulpture, praistorija Balkana, Boljetin, Donji Milanovac, kultura Lepenskog Vira"
            :
            "Lepenski Vir, Đerdap Gorge, Mesolithic, Neolithic, Serbian archaeology, Dragoslav Srejović, Đerdap Lake, Iron Gate, Neolithic sculptures, Balkan prehistory, Boljetin, Donji Milanovac, Lepenski Vir culture"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(borskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${lepenskiVir111} 450w, ${lepenskiVir1} `} alt="Lepenski Vir 1" loading="lazy" />

        <h2>Lepenski Vir</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Lepenski Vir</h2>

              <section lang="sr">
                <p>
                  <strong>Lepenski Vir</strong> je jedno od najvećih i najznačajnijih mezolitskih i
                  neolitskih arheoloških nalazišta, smešteno na desnoj obali Dunava u
                  <strong>Đerdapskoj klisuri</strong>, u Srbiji, u centralnom delu Balkanskog poluostrva.
                  Ovaj lokalitet, koji je ime dobio po dunavskom viru, bio je središte
                  jedne od najvažnijih i najsloženijih kultura praistorije – kulture
                  <strong>Lepenskog Vira</strong>.
                  <br />
                  <br />
                  Između 1965. i 1970. godine otkriveno je ribarsko-lovačko naselje sa
                  začecima kultivacije i domestikacije. Tokom iskopavanja pronađeno je
                  sedam sukcesivnih naselja i 136 objekata (stambenih i sakralnih),
                  izgrađenih u ranom mezolitu, u periodu od oko 9500. do 7200. godine pre
                  nove ere (<em>Proto Lepenski Vir 1 i 2</em>), a zatim i u ranom i srednjem
                  neolitu, od oko 6250. do 5500. godine pre nove ere (<em>Lepenski Vir I-III</em>).
                  <br />
                  <br />
                  Glavni istraživač ovog lokaliteta bio je profesor dr <strong>Dragoslav Srejović</strong>,
                  arheolog, akademik i profesor Univerziteta u Beogradu.
                </p>
              </section>

              <img srcSet={`${lepenskiVir2} 450w, ${lepenskiVir2} `} alt="Lepenski Vir 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Najnoviji radiokarbonski i AMS podaci sugerišu da se hronologija
                  <strong>Lepenskog Vira</strong> prostire između 9500/7200 i 5500 godina pre nove ere,
                  podeljena na rani i srednji mezolit, kasni mezolit, prelazni period i
                  neolit.
                  <br />
                  <br />
                  Postoje određena neslaganja oko tačnog početka naseljavanja i razvoja
                  kulture <strong>Lepenskog Vira</strong>, ali najnovija istraživanja ukazuju da se to
                  dogodilo između 9500. i 7200. godine pre nove ere. U kasnoj
                  arhitektonskoj fazi <strong>Lepenskog Vira</strong> (6300–6000 p.n.e.) razvijaju se
                  jedinstvene trapezoidne građevine i monumentalna skulptura, što je
                  povezano s mešanjem lovaca-sakupljača iz oblasti <em>Gvozdenih vrata</em> s
                  novopridošlim ranim evropskim zemljoradnicima.
                  <br />
                  <br />
                  Lokalitet <strong>Lepenski Vir</strong> čini jedno veliko naselje s desetak manjih,
                  satelitskih sela. Tokom istraživanja, na lokalitetu su pronađene brojne
                  skulpture bazena i neobični arhitektonski ostaci.
                </p>
              </section>

              {isMobile ? (
                <>
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image.src}
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
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          style={{
                            width: "400px",
                            height: "400px",
                            margin: "40px 0 40px 50px",
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                </>
              )}

              <section lang="sr">
                <p>
                  <strong>Srejović</strong> je uspeo da obezbedi neophodna sredstva i 6. avgusta 1965.
                  godine, zajedno sa <strong>Zagorkom Leticom</strong>, započeo istraživanje lokaliteta.
                  Iskopavanja su nastavljena tokom 1966. i 1967. godine.
                  <br />
                  <br />
                  Sondiranje terena 1965. godine preraslo je u zaštitna iskopavanja 1966,
                  a zatim se razvilo u potpuno sistematska iskopavanja 1967. godine, kako
                  su istraživači sve dublje kopali. Kulturno-arheološki sloj počinje ispod
                  površinskog sloja humusa, debljine 50 cm.
                  <br />
                  <br />
                  Tek 1967. godine, nakon otkrića prvih mezolitskih skulptura, značaj
                  lokaliteta postao je potpuno jasan. Ovi nalazi su zvanično objavljeni
                  16. avgusta 1967. godine.
                  <br />
                  <br />
                  Iskopavanja su završena 1971. godine, kada je ceo lokalitet izmesten 297
                  metara više, kako bi se izbegla poplava izazvana formiranjem <strong>Đerdapskog
                    jezera</strong> nakon izgradnje hidroelektrane <strong>Đerdap I</strong>.
                </p>
              </section>

              <img
                srcSet={`${lepenskiVir333} 450w, ${lepenskiVir3} `}
                sizes="(max-width: 600px) 400px, 1050px"
                alt="Lepenski Vir 3"
                loading="lazy"

              />

              <section lang="sr">
                <p>
                  <strong>Lepenski Vir</strong> se nalazi na desnoj obali Dunava u istočnoj Srbiji, unutar
                  klisure <em>Gvozdena kapija</em>. Smešten je u selu <strong>Boljetin</strong>, nedaleko od <strong>Donjeg Milanovca</strong>.
                  <br />
                  <br />
                  Pogled iznad i preko Dunava je široko otvoren, dok stabilan i izdržljiv
                  teren na obali reke uspešno odoleva intenzivnom erozivnom uticaju
                  Dunava. Stabilnost je osigurana pomoću dve ili tri stenske gromade –
                  kamenog rta koji se duboko pruža u reku. Ove gromade su služile kao
                  prirodno sidro za teren na kojem se naselje razvijalo.
                  <br />
                  <br />
                  Dugotrajno stanovanje na ovom lokalitetu omogućili su blizina velike
                  reke, prirodna bogatstva zaleđa i termalne prednosti nagomilanih
                  krečnjačkih stena, naročito imajući u vidu da je ledeno doba tek
                  završeno. Osim toga, dugoročan opstanak naselja olakšavalo je i
                  pretpostavljeno poznavanje određenih metoda kontrole rađanja, budući da
                  je prostor za širenje naselja bio ograničen, iako se veruje da pojedini
                  njegovi delovi još uvek nisu otkriveni.
                </p>
              </section>

              <img srcSet={`${lepenskiVir44} 450w, ${lepenskiVir4} `} alt="Lepenski Vir 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Vrtlozi su nastali usled izbočenih stena, a uskovitlani tok vode
                  bogatiji je kiseonikom i algama, što ga čini bogatijim ribom. Vrtložna
                  struja olakšava ribolov u odnosu na brze vode koje jure kroz klisuru.
                  <br />
                  <br />
                  Takođe, vrtložna voda je taložila materijale na nizvodnoj strani plaža,
                  danas poznatoj kao <strong>Katarinine Livadice</strong>, čineći je jačom i stabilnijom,
                  umesto da dozvoli brzoj i snažnoj reci da je erodira. U neposrednom
                  zaleđu nalazi se padina poznata kao <strong>Košo Brdo</strong>. U njoj se nalazi prirodna
                  kamena niša ili stenovito sklonište (<em>abri</em>), nazvano <strong>Lepenska Potkapina</strong>,
                  koje je istraživao arheolog <strong>Branko Gavela</strong>.
                  <br />
                  <br />
                  Nizvodno od <strong>Lepenskog Vira</strong>, u pravcu <strong>Vlasca</strong>, na pola puta do ušća male
                  <strong>Boljetinke</strong> ili <strong>Lepenke</strong>, nad rekom se uzdiže okomita stena <strong>Lepena</strong>, visoka
                  40 metara. U njenom podnožju Rimljani su izgradili put, koji je danas
                  potopljen na dubini od 13,5 metara ispod vode <strong>Đerdapskog jezera</strong>, zajedno
                  s putnom pločom postavljenom u čast cara <strong>Tiberija</strong>.
                  <br />
                  <br />
                  Naziv <strong>Lepena</strong> odnosi se i na padinu iznad Dunava između <strong>Lepenke stene</strong> i
                  ušća <strong>Lepenke reke</strong>, kao i na uvalu u kojoj se padina završava.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Lepenski Vir</h2>

              <section lang="en">
                <p>
                  <strong>Lepenski Vir</strong> is one of the largest and most significant Mesolithic and
                  Neolithic archaeological sites, located on the right bank of the Danube in
                  the <strong>Iron Gates Gorge</strong>, in Serbia, in the central part of the Balkan Peninsula.
                  This site, named after the Danube whirlpool, was the center
                  of one of the most important and complex prehistoric cultures – the
                  <strong>Lepenski Vir culture</strong>.
                  <br />
                  <br />
                  Between 1965 and 1970, a fishing and hunting settlement with
                  beginnings of cultivation and domestication was discovered. During excavations,
                  seven successive settlements and 136 structures (residential and sacred)
                  were found, built in the early Mesolithic, from about 9500 to 7200 BCE (<em>Proto Lepenski Vir 1 and 2</em>), and then in the early and middle
                  Neolithic, from about 6250 to 5500 BCE (<em>Lepenski Vir I-III</em>).
                  <br />
                  <br />
                  The main researcher of this site was professor Dr. <strong>Dragoslav Srejović</strong>,
                  archaeologist, academician, and professor at the University of Belgrade.
                </p>
              </section>

              <img srcSet={`${lepenskiVir2} 450w, ${lepenskiVir2} `} alt="Lepenski Vir 2" loading="lazy" />

              <section lang="en">
                <p>
                  The latest radiocarbon and AMS data suggest that the chronology
                  of <strong>Lepenski Vir</strong> spans from 9500/7200 to 5500 BCE,
                  divided into early and middle Mesolithic, late Mesolithic, transitional period, and
                  Neolithic.
                  <br />
                  <br />
                  There are some disagreements about the exact beginning of settlement and development
                  of the <strong>Lepenski Vir</strong> culture, but recent research indicates that it
                  happened between 9500 and 7200 BCE. In the late architectural phase of <strong>Lepenski Vir</strong> (6300–6000 BCE), unique trapezoidal buildings and monumental sculpture developed,
                  which is connected with the mixing of hunter-gatherers from the Iron Gates area with
                  newly arrived early European farmers.
                  <br />
                  <br />
                  The site of <strong>Lepenski Vir</strong> consists of one large settlement with about ten smaller,
                  satellite villages. During research, numerous sculptures of basins and unusual architectural remains
                  were found at the site.
                </p>
              </section>

              {isMobile ? (
                <>
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image.src}
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
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          style={{
                            width: "400px",
                            height: "400px",
                            margin: "40px 0 40px 50px",
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                </>
              )}

              <section lang="en">
                <p>
                  <strong>Srejović</strong> managed to secure the necessary funding and on August 6, 1965,
                  together with <strong>Zagorka Letica</strong>, started the research of the site.
                  Excavations continued throughout 1966 and 1967.
                  <br />
                  <br />
                  Terrain probing in 1965 turned into protective excavations in 1966,
                  and then developed into fully systematic excavations in 1967, as
                  researchers dug deeper. The cultural-archaeological layer begins beneath
                  the surface humus layer, about 50 cm thick.
                  <br />
                  <br />
                  Only in 1967, after the discovery of the first Mesolithic sculptures, did the significance
                  of the site become fully clear. These findings were officially published
                  on August 16, 1967.
                  <br />
                  <br />
                  Excavations were completed in 1971, when the entire site was relocated 297
                  meters higher to avoid flooding caused by the formation of the <strong>Đerdap Lake</strong> following the construction of the hydroelectric power plant <strong>Đerdap I</strong>.
                </p>
              </section>

              <img
                srcSet={`${lepenskiVir333} 450w, ${lepenskiVir3} `}
                sizes="(max-width: 600px) 400px, 1050px"
                alt="Lepenski Vir 3"
                loading="lazy"
              />

              <section lang="en">
                <p>
                  <strong>Lepenski Vir</strong> is located on the right bank of the Danube in eastern Serbia, within
                  the <em>Iron Gate Gorge</em>. It is situated in the village of <strong>Boljetin</strong>, near <strong>Donji Milanovac</strong>.
                  <br />
                  <br />
                  The view above and across the Danube is wide open, while the stable and durable
                  terrain on the riverbank successfully resists the intense erosive impact
                  of the Danube. Stability is ensured by two or three rocky masses —
                  stone spurs that extend deeply into the river. These masses served as
                  natural anchors for the terrain on which the settlement developed.
                  <br />
                  <br />
                  Long-term habitation at this site was enabled by the proximity of a large
                  river, natural resources of the hinterland, and the thermal advantages of accumulated
                  limestone rocks, especially considering the Ice Age had just ended. Moreover, long-term survival of the settlement was facilitated by the
                  presumed knowledge of certain birth control methods, since
                  the space for settlement expansion was limited, although it is believed that some
                  parts of it remain undiscovered.
                </p>
              </section>

              <img srcSet={`${lepenskiVir44} 450w, ${lepenskiVir4} `} alt="Lepenski Vir 4" loading="lazy" />

              <section lang="en">
                <p>
                  Whirlpools formed due to protruding rocks, and the swirling water flow
                  is richer in oxygen and algae, making it richer in fish. The whirlpool
                  current facilitates fishing compared to the fast waters rushing through the gorge.
                  <br />
                  <br />
                  Also, the whirlpool water deposited materials on the downstream side of the beaches,
                  known today as <strong>Katarinine Livadice</strong>, making them stronger and more stable,
                  instead of allowing the fast and powerful river to erode them. In the immediate
                  hinterland there is a slope known as <strong>Košo Brdo</strong>. It contains a natural
                  stone niche or rocky shelter (<em>abri</em>), called <strong>Lepenska Potkapina</strong>,
                  which was explored by archaeologist <strong>Branko Gavela</strong>.
                  <br />
                  <br />
                  Downstream from <strong>Lepenski Vir</strong>, in the direction of <strong>Vlasac</strong>, halfway to the mouth of the small
                  <strong>Boljetinka</strong> or <strong>Lepenka</strong> river, a vertical rock called <strong>Lepena</strong>, 40 meters high, rises over the river. At its foot, the Romans
                  built a road, which is now submerged 13.5 meters below the water of <strong>Đerdap Lake</strong>, together
                  with a milestone set up in honor of Emperor <strong>Tiberius</strong>.
                  <br />
                  <br />
                  The name <strong>Lepena</strong> also refers to the slope above the Danube between <strong>Lepenka rock</strong> and
                  the mouth of the <strong>Lepenka river</strong>, as well as the bay where the slope ends.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default LepenskiVir;