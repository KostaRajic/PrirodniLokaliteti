/* eslint-disable react/no-unknown-property */
import arandjelovac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac1.jpg";
import arandjelovac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac2.jpg";
import arandjelovac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac31.jpg";
import arandjelovac12 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac32.jpg";
import arandjelovac13 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac33.jpg";
import arandjelovac14 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac34.jpg";
import arandjelovac15 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac35.jpg";
import arandjelovac16 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac36.jpg";
import arandjelovac17 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac37.jpg";
import arandjelovac18 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac38.jpg";
import arandjelovac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac5.jpg";
import arandjelovac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac6.jpg";
import arandjelovac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac7.jpg";
import arandjelovac8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/desktop/arandjelovac8.jpg";
import arandjelovac110 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac1.jpg";
import arandjelovac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac2.jpg";
import arandjelovac111 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac31.jpg";
import arandjelovac122 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac32.jpg";
import arandjelovac133 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac33.jpg";
import arandjelovac144 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac34.jpg";
import arandjelovac155 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac35.jpg";
import arandjelovac166 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac36.jpg";
import arandjelovac177 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac37.jpg";
import arandjelovac188 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac38.jpg";
import arandjelovac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac5.jpg";
import arandjelovac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac6.jpg";
import arandjelovac77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac7.jpg";
import arandjelovac88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/mobile/Marandjelovac8.jpg";

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


const Arandjelovac = () => {
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
      desktopSrc: arandjelovac11,
      mobileSrc: arandjelovac111,
      alt: "Bukovacka banja 1",
    },
    {
      desktopSrc: arandjelovac12,
      mobileSrc: arandjelovac122,
      alt: "Bukovacka banja 2",
    },
    {
      desktopSrc: arandjelovac13,
      mobileSrc: arandjelovac133,
      alt: "Bukovacka banja 3",
    },
    {
      desktopSrc: arandjelovac14,
      mobileSrc: arandjelovac144,
      alt: "Bukovacka banja 4",
    },
    {
      desktopSrc: arandjelovac15,
      mobileSrc: arandjelovac155,
      alt: "Bukovacka banja 5",
    },
    {
      desktopSrc: arandjelovac16,
      mobileSrc: arandjelovac166,
      alt: "Bukovacka banja 6",
    },
    {
      desktopSrc: arandjelovac17,
      mobileSrc: arandjelovac177,
      alt: "Bukovacka banja 7",
    },
    {
      desktopSrc: arandjelovac18,
      mobileSrc: arandjelovac188,
      alt: "Bukovacka banja 8",
    },
  ];

  return (
    <>

      <Helmet>
        <title>
          {switchLanguage === 'rs'
            ? "Aranđelovac – Bukovička banja, Risovača, Bukulja, Garaško jezero | Srbija Wonders"
            : "Aranđelovac – Bukovička Spa, Risovača Cave, Bukulja Mountain, Garaško Lake | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Aranđelovac je grad u srcu Šumadije poznat po Bukovičkoj banji, planini Bukulji, pećini Risovači, Garaškom jezeru i bogatoj istoriji. Otkrijte kulturna i prirodna blaga ovog kraja."
              : "Aranđelovac is a town in central Serbia known for Bukovička Spa, Bukulja Mountain, Risovača Cave, Garaško Lake, and its rich historical heritage. Discover the cultural and natural gems of the region."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Aranđelovac, Bukovička banja, Bukulja, Garaško jezero, Risovača, Narodni muzej Aranđelovac, Aqua park Izvor, Karađorđe, Orašac, Marićevića jaruga, turističke atrakcije, Šumadija"
              : "Aranđelovac, Bukovička Spa, Bukulja Mountain, Garaško Lake, Risovača Cave, National Museum Aranđelovac, Aqua Park Izvor, Karađorđe, Orašac, Marićevića jaruga, tourist attractions, Šumadija"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/arandjelovac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/arandjelovac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/arandjelovac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/arandjelovac"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(sumadijskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${arandjelovac110} 450w, ${arandjelovac1} `} alt="Aradjelovac 1" />

        <h2>Aranđelovac</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Aranđelovac</strong> je grad i opština u Srbiji, smešten u podnožju planina
                  <em>Bukulja</em> i <em>Venčac</em>, na nadmorskoj visini od oko <strong>255 metara</strong> i udaljen <strong>76
                    kilometara</strong> od Beograda. Opština obuhvata dve gradske i 18 seoskih mesnih zajednica, a u samom gradu nalazi se <strong>Bukovička banja</strong>. Administrativno pripada <em>Šumadijskom okrugu</em> sa sedištem u Kragujevcu. Prema popisu iz 2002. godine, u gradu je živelo <strong>24.309 stanovnika</strong>, dok je na području cele opštine zabeleženo <strong>48.129 stanovnika</strong>. Kraj je poznat po <em>slobodarskoj tradiciji</em>, a posebno po podizanju <strong>Prvog srpskog ustanka 1804. godine</strong> u selu <strong>Orašac</strong>, udaljenom 6 kilometara od Aranđelovca. U Orašcu se nalazi memorijalni kompleks oko <strong>Marićevića jaruge</strong>, mesta gde je <strong>Karađorđe</strong> izabran za vođu ustanka i gde je započeto stvaranje moderne srpske države.
                </p>
              </section>

              <img srcSet={`${arandjelovac22} 450w, ${arandjelovac2} `} alt="Narodni muzej u Aranđelovcu" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej u Aranđelovcu</strong> čuva i prikazuje brojne eksponate iz oblasti
                  <em>paleontologije, arheologije, etnologije, istorije i istorije umetnosti</em>, pružajući uvid u materijalnu i duhovnu kulturu ovog dela Šumadije. U okviru stalne postavke, posetioci mogu da se upoznaju sa prošlošću grada i okoline, počevši od kamenog doba pa sve do 20. veka. Pored toga, muzej nudi i izložbu izuzetnih dela savremene umetničke keramike.
                </p>
              </section>

              <h3
                style={{
                  textAlign: "center",
                  margin: "10px 0 45px 0",
                  color: "rgb(19 17 35)",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                Park Bukovičke banje
              </h3>

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
                  <strong>Park Bukovičke banje</strong> zauzima površinu veću od <strong>22 hektara</strong>. Zemljište za njegovu izgradnju nabavljeno je 1849. godine, kada su postavljene prve staze, posađeno drveće i uređeni izvor i kupatilo Talpara. Temeljna obnova i oblikovanje parka započeti su 1856. godine, kada su uređene staze, zasađeni drvoredi, postavljeni travnjaci i cvetnjaci, te izgrađeno toplo kupatilo Đulara, čime je prostor dobio današnji izgled. Tokom sedamdesetih godina 19. veka, pod vladavinom kneza Mihaila Obrenovića, Bukovička banja je postala jedno od najuređenijih turističkih lečilišta u Srbiji, zadržavajući tu reputaciju sve do početka Prvog svetskog rata. Staro zdanje, najstarija očuvana građevina u okviru parka, predstavlja dragocen primer arhitekture <em>srpskog romantizma</em>. Njegovu izgradnju 1865. godine pokrenuo je <strong>knez Mihailo Obrenović</strong>, zamišljajući ga kao letnju rezidenciju dinastije Obrenović i prostor za održavanje skupštinskih zasedanja.
                </p>
              </section>

              <img
                srcSet={`${arandjelovac55} 450w, ${arandjelovac5} `}
                alt="Planina Bukulja"
              />

              <section lang="sr">
                <p>
                  <strong>Bukulja</strong> je planina u srcu Šumadije, iznad Aranđelovca i Bukovičke banje, sa najvišim vrhom koji doseže <strong>696 metara</strong> nadmorske visine. Planina je vulkanskog porekla, što potvrđuju granitne stene bogate specifičnim mineralnim sastavom. Prekrivena je gustom šumom bukve, graba i hrasta, a naziv Bukulja potiče od reči <em>bukulj</em>, umanjenice slovenskog izraza za bukvu. Planina je popularna destinacija za sportske pripreme i rekreativne aktivnosti, sa uređenim stazama koje vode od Bukovičkog parka do samog vrha. Njena pozicija štiti Aranđelovac od jakih vetrova. Na vrhu Bukulje nalazi se hidrometeorološka stanica, dok se na njenim obroncima prostire <strong>Garaško jezero</strong>. Bukulja je omiljeno izletište za lokalno stanovništvo i posetioce banje, sa brojnim ugostiteljskim objektima poput <em>Lovačkog doma</em>, <em>Kačare</em> i restorana <em>Kod Coke</em>. Na planini se takođe nalazi izvorište poznate gazirane mineralne vode <strong>Knjaz Miloš</strong>, što dodatno doprinosi njenom značaju.
                </p>
              </section>

              <img srcSet={`${arandjelovac66} 450w, ${arandjelovac6} `} alt="Pećina Risovača u Arandjelovcu" />

              <section lang="sr">
                <p>
                  <strong>Pećina Risovača</strong> nalazi se na ulazu u Aranđelovac iz pravca Topole i predstavlja jedno od najvažnijih paleolitskih nalazišta u Evropi. Ovaj prirodni objekat, nekadašnje stanište ljudi iz ledenog doba, retkost je koja privlači pažnju kako naučnika tako i posetilaca zainteresovanih za istoriju ljudske prošlosti. Zbog svog prirodnog bogatstva i značajnih arheoloških i paleontoloških nalaza, pećina je <strong>1983. godine</strong> proglašena kulturnim dobrom od velikog značaja. Od <strong>1995. godine</strong>, zajedno sa okolnim prostorom od oko <strong>13 hektara</strong>, zaštićena je kao spomenik prirode prve kategorije. Ulaz u pećinu nalazi se na severoistočnoj strani brda Risovača, na visini od oko <strong>17 metara</strong> iznad toka reke Kubršnice. Iza ulaza prostire se dvorana duga <strong>22 metra</strong>, koja se prvo pruža ka zapadu, a potom skreće ka jugoistoku. Pretpostavlja se da ukupna dužina pećine iznosi oko <strong>800 metara</strong>, do Vrbčke reke. Risovaču godišnje poseti oko <strong>30.000 ljudi</strong>, što je čini popularnom turističkom destinacijom i značajnim mestom za istraživanje ljudske istorije.
                </p>
              </section>

              <img srcSet={`${arandjelovac77} 450w, ${arandjelovac7} `} alt="Garaško jezero" />

              <section lang="sr">
                <p>
                  <strong>Garaško jezero</strong> se odlikuje strmim obalama sa jedne strane, dok je sa druge strane lakše pristupačno. Dno jezera je čvrsto, sa blagim kanjonima koji prate nekadašnje rečne tokove, a najdublji deo doseže dubinu od preko <strong>20 metara</strong>. Jezero je bogato različitim vrstama riba, među kojima se nalaze klen, crvenperka, krupatica, babuška, šaran, som, ali i štuka, koja je postavila nezvanični državni rekord sa primerkom težim od <strong>19 kg</strong>. Ovo akumulaciono jezero nudi mnoštvo zabavnih sadržaja i mogućnosti za avanturističke aktivnosti. Ako se nađete u blizini Aranđelovca, obavezno posetite Garaško jezero – sigurno će vam ostati u sećanju, a možda i postati vaša omiljena destinacija za opuštanje i uživanje u prirodi. Nedaleko od Garaškog jezera nalazi se otvoreni bazen <strong>SRC Šumadija</strong> sa sportskim terenima za mali fudbal, rukomet i odbojku na pesku.
                </p>
              </section>

              <img srcSet={`${arandjelovac88} 450w, ${arandjelovac8} `} alt="Aqua park Izvor Arandjelovac" />

              <section lang="sr">
                <p>
                  <strong>Aqua park Izvor</strong> se nalazi u Aranđelovcu, u Bukovičkoj banji, na samo sat vremena vožnje od Beograda. Na površini od <strong>6 ha</strong> uz tri bazena sa mineralnom vodom, moderne atrakcije i najviše tobogane u Srbiji ovaj akva park vam nudi do sada neviđeno <em>adrenalinsko iskustvo</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>Aranđelovac</strong> is a town and municipality in Serbia, located at the foothills of the <em>Bukulja</em> and <em>Venčac</em> mountains, at an altitude of about <strong>255 meters</strong> and <strong>76 kilometers</strong> from Belgrade. The municipality includes two urban and 18 rural local communities, while in the town itself is the <strong>Bukovička Spa</strong>. Administratively, it belongs to the <em>Šumadija District</em> with its seat in Kragujevac. According to the 2002 census, the town had <strong>24,309 inhabitants</strong>, while the entire municipality recorded <strong>48,129 inhabitants</strong>. The region is known for its <em>tradition of freedom</em>, especially for the initiation of the <strong>First Serbian Uprising in 1804</strong> in the village of <strong>Orašac</strong>, located 6 kilometers from Aranđelovac. In Orašac, there is a memorial complex around <strong>Marićević Jaruga</strong>, the place where <strong>Karađorđe</strong> was chosen as the leader of the uprising and where the formation of the modern Serbian state began. </p> </section>
              <img srcSet={`${arandjelovac22} 450w, ${arandjelovac2} `} alt="National Museum in Aranđelovac" />

              <section lang="en"> <p> The <strong>National Museum in Aranđelovac</strong> preserves and displays numerous exhibits from the fields of <em>paleontology, archaeology, ethnology, history, and art history</em>, providing insight into the material and spiritual culture of this part of Šumadija. Within the permanent exhibition, visitors can learn about the past of the town and its surroundings, from the Stone Age to the 20th century. Additionally, the museum offers an exhibition of exceptional works of contemporary artistic ceramics. </p> </section>

              <h3 style={{ textAlign: "center", margin: "10px 0 45px 0", color: "rgb(19 17 35)", fontSize: "30px", fontWeight: "600", }} >
                Bukovička Spa Park </h3>

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

              <section lang="en"> <p> <strong>Bukovička Spa Park</strong> covers an area of more than <strong>22 hectares</strong>. The land for its construction was purchased in 1849, when the first paths were laid out, trees planted, and the Talpar spring and bath were arranged. A fundamental renovation and shaping of the park began in 1856, when paths were improved, tree lines planted, lawns and flower beds established, and the Đulara thermal bath was built, giving the area its current appearance. During the 1870s, under the rule of Prince Mihailo Obrenović, Bukovička Spa became one of the best-maintained tourist resorts in Serbia, maintaining that reputation until the beginning of World War I. The old building, the oldest preserved structure within the park, represents a valuable example of <em>Serbian Romantic architecture</em>. Its construction was initiated in 1865 by <strong>Prince Mihailo Obrenović</strong>, who envisioned it as the summer residence of the Obrenović dynasty and a venue for parliamentary sessions. </p> </section>

              <img
                srcSet={`${arandjelovac55} 450w, ${arandjelovac5} `}
                alt="Bukulja Mountain"
              />

              <section lang="en"> <p> <strong>Bukulja</strong> is a mountain in the heart of Šumadija, above Aranđelovac and Bukovička Spa, with its highest peak reaching <strong>696 meters</strong> above sea level. The mountain is of volcanic origin, confirmed by granite rocks rich in a specific mineral composition. It is covered with dense forests of beech, hornbeam, and oak, and the name Bukulja comes from the word <em>bukulj</em>, a diminutive of the Slavic word for beech. The mountain is a popular destination for sports training and recreational activities, with maintained trails leading from Bukovička Park to the summit. Its position protects Aranđelovac from strong winds. At the top of Bukulja is a hydrometeorological station, while on its slopes lies the <strong>Garaško Lake</strong>. Bukulja is a favorite excursion spot for locals and spa visitors, featuring numerous hospitality facilities such as the <em>Hunting Lodge</em>, <em>Kačara</em>, and the restaurant <em>Kod Coke</em>. The mountain is also the source of the famous carbonated mineral water <strong>Knjaz Miloš</strong>, adding to its significance. </p> </section>
              <img srcSet={`${arandjelovac66} 450w, ${arandjelovac6} `} alt="Risovača Cave in Aranđelovac" />

              <section lang="en"> <p> <strong>Risovača Cave</strong> is located at the entrance to Aranđelovac from the direction of Topola and represents one of the most important Paleolithic sites in Europe. This natural feature, once inhabited by people during the Ice Age, is a rarity that attracts the attention of both scientists and visitors interested in the history of human past. Due to its natural wealth and significant archaeological and paleontological finds, the cave was declared a cultural monument of great importance in <strong>1983</strong>. Since <strong>1995</strong>, along with the surrounding area of about <strong>13 hectares</strong>, it has been protected as a first-category natural monument. The entrance to the cave is on the northeastern side of Risovača Hill, at an altitude of about <strong>17 meters</strong> above the course of the Kubršnica River. Behind the entrance lies a hall 22 meters long, which first extends westward, then turns southeast. The total length of the cave is estimated at around <strong>800 meters</strong>, reaching the Vrbčka River. Risovača is visited annually by about <strong>30,000 people</strong>, making it a popular tourist destination and an important site for human history research. </p> </section>
              <img srcSet={`${arandjelovac77} 450w, ${arandjelovac7} `} alt="Garaško Lake" />

              <section lang="en"> <p> <strong>Garaško Lake</strong> features steep shores on one side, while the other side is more accessible. The lake bottom is firm, with gentle canyons following former river flows, and the deepest part reaches over <strong>20 meters</strong>. The lake is rich in various fish species, including chub, perch, crucian carp, bream, carp, catfish, and pike, which unofficially set a national record with a specimen weighing over <strong>19 kg</strong>. This reservoir offers many entertaining and adventurous activities. If you find yourself near Aranđelovac, be sure to visit Garaško Lake — it will surely remain in your memory and may become your favorite destination for relaxation and enjoying nature. Near Garaško Lake is the open pool complex <strong>SRC Šumadija</strong>, with sports fields for small football, handball, and beach volleyball. </p> </section>
              <img srcSet={`${arandjelovac88} 450w, ${arandjelovac8} `} alt="Izvor Aqua Park Aranđelovac" />

              <section lang="en"> <p> <strong>Izvor Aqua Park</strong> is located in Aranđelovac, within Bukovička Spa, just an hour’s drive from Belgrade. Covering an area of <strong>6 hectares</strong>, with three pools filled with mineral water, modern attractions, and the tallest slides in Serbia, this aqua park offers an unprecedented <em>adrenaline experience</em>. </p> </section>

            </>
          )}


      </div>
    </>
  );
};


export default Arandjelovac;