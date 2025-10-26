/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import cer1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cer1.jpg";
import cer2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cer2.jpg";
import cer3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cer3.jpg";
import cer5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cer5.jpg";
import cer6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cer6.jpg";
import cer1M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cerManastirCokesina.jpg";
import cer2M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cerManastirKaona.jpg";
import cer3M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cerManastirPetkovica.jpg";
import cer4M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cerManastirPetraIPavla.jpg";
import cer5M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cerManastirPreobrazenjeGospodnje.jpg";
import cer6M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/desktop/cerManastirRadovasnica.jpg";
import cer11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/Mcer1.jpg";
import cer22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/Mcer2.jpg";
import cer33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/Mcer3.jpg";
import cer55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/Mcer5.jpg";
import cer66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/Mcer6.jpg";
import cer11M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/McerManastirCokesina.jpg";
import cer22M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/McerManastirKaona.jpg";
import cer33M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/McerManastirPetkovica.jpg";
import cer44M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/McerManastirPetraIPavla.jpg";
import cer55M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/McerManastirPreobrazenjeGospodnje.jpg";
import cer66M from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Cer/mobile/McerManastirRadovasnica.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { macvanskiOkrugPathRoutes } from "./MacvanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";

const Cer = () => {
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
      name: "Manastir Čokešina",
      desktopSrc: cer1M,
      mobileSrc: cer11M,
      alt: "Manastir Cokesina",
    },
    {
      name: "Manastir Kaona",
      desktopSrc: cer2M,
      mobileSrc: cer22M,
      alt: "Manastir Kaona",
    },
    {
      name: "Manastir Petkovica",
      desktopSrc: cer3M,
      mobileSrc: cer33M,
      alt: "Manastir Petkovica",
    },
    {
      name: "Manastir Svetih apostola Petra i Pavla",
      desktopSrc: cer4M,
      mobileSrc: cer44M,
      alt: "Manastir Svetih apostola Petra i Pavla",
    },
    {
      name: "Manastir Preobraženje Gospodnje",
      desktopSrc: cer5M,
      mobileSrc: cer55M,
      alt: "Manastir Preobrazenje Gospodnje",
    },
    {
      name: "Manastir Radovašnica",
      desktopSrc: cer6M,
      mobileSrc: cer66M,
      alt: "Manastir Radovašnica",
    },
  ];

  return (
    <>

      <Helmet>
        <title>
          {switchLanguage === 'rs'
            ? "Planina Cer – Vidikovci, Istorija i Prirodni Mir | Serbia Wonders"
            : "Mount Cer – Viewpoints, History and Nature Escapes | Serbia Wonders"}
        </title>
        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Planina Cer, poznata po Cerskoj bici, nudi prelepe vidikovce, tematske staze, prirodni mir i kulturno-istorijski značaj. Idealna destinacija za šetnje, izlete i rehabilitaciju."
              : "Mount Cer, known for the Battle of Cer, offers scenic viewpoints, thematic trails, natural peace, and cultural-historical significance. A perfect spot for hikes, excursions, and wellness."
          }
        />
        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Planina Cer, Cerska bitka, Tekeriš, vidikovci, etno turizam, priroda, pešačenje, staze, planinarenje, Srbija, Stepa Stepanović, Trojanov grad, Radovašnica"
              : "Mount Cer, Battle of Cer, Tekeriš, viewpoints, ethno tourism, nature, hiking, trails, trekking, Serbia, Stepa Stepanović, Trojan's City, Radovašnica"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/planina-cer`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/planina-cer"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/planina-cer"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/planina-cer"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(macvanskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${cer11} 450w, ${cer1} `} alt="Planina Cer 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Cer</h1>

              <section lang="sr">
                <p>
                  <strong>Cer</strong> je planina u blizini <em>Šapca</em>, koja nudi raznovrsne sadržaje za turiste. Iako je najpoznatija po istorijskoj bici iz <strong>Prvog svetskog rata</strong>, ova mirna lepotica još uvek nije dovoljno otkrivena od strane <em>domaćih posetilaca</em>. Sa nekoliko prelepih <strong>vidikovaca</strong>, sa kojih se pruža pogled na <em>pola Srbije</em>, Cer je savršen za <em>ljubitelje prirode</em>. Idealna je za <em>etno turizam</em>, <em>vikend izlete</em>, <em>šetnje</em> i <em>biciklizam</em>. Kao turistički dragulj <strong>severozapadne Srbije</strong>, Cer će vas oduševiti na mnoge načine. Donosimo vam deset razloga zbog kojih biste trebali da je posetite još ove godine.
                </p>
              </section>

              <img srcSet={`${cer22} 450w, ${cer2}`} alt="Planina Cer 2" />

              <section lang="sr">
                <p>
                  Pogledi sa ove planine su glavni razlog zbog kojih turisti dolaze na <strong>Cer</strong>. Najviši vrh dostiže visinu od <strong>687 metara</strong>, a na planini se nalaze <strong>četiri vrha</strong> viša od 600 metara. Jedan od najlepših vidikovaca je <strong>Proplanak</strong>, ali ni ostali nisu ništa manje impresivni. Kako kažu meštani, sa jednog od njih može se videti <em>pola Srbije</em>, dok su i oni koji obuhvataju <em>okolna sela</em> podjednako lepi. Osećaj koji ovi vidikovci pružaju razlog je zbog kojeg mnogi odlučuju da krenu <em>planiranim stazama</em> Cera, kako bi došli do nekog od njih i uživali u moćnom pogledu, često i uz <strong>fotografiju</strong> koja zabeleži taj trenutak.
                </p>
              </section>

              <img srcSet={`${cer33} 450w, ${cer3}`} alt="Planina Cer 3" />

              <section lang="sr">
                <p>
                  Jedan od najvažnijih događaja u <strong>nacionalnoj istoriji</strong> odigrao se upravo na <strong>Zelenoj planini</strong>. Sećanje na <strong>Cersku bitku</strong>, u kojoj je <strong>srpska vojska</strong>, uprkos brojčanoj inferiornosti, pod vođstvom <strong>Stepe Stepanovića</strong> pobedila Austrougare, čuva se na više načina. U znak sećanja na <em>Cerske junake</em> i legendarni sukob, <strong>1928. godine</strong> u selu <strong>Tekeriš</strong> podignut je <strong>spomenik sa spomen-kosturnicom</strong>. Spomenik je izrađen od <em>cerskog granita</em>, a na njegovom vrhu nalazi se <strong>orao</strong> sa <em>lovorovim vencem</em> u kljunu, simbolom moći i pobede. Natpis na spomeniku „<strong>Vaša dela su besmrtna</strong>“ odražava <em>zahvalnost</em> i <em>ponos</em> srpskog naroda prema hrabrim vojnicima. Pored spomenika, tu je i <em>mešovito groblje</em> na kojem su sahranjeni i srpski i austrougarski vojnici poginuli tokom Cerske bitke.
                </p>
              </section>

              <img srcSet={`${cer66} 450w, ${cer6}`} alt="Planina Cer 4" />

              <section lang="sr">
                <p>
                  <strong>Cer</strong> se često pominje kao pogodna destinacija za <strong>rehabilitaciju</strong> osoba koje pate od <em>neuroza</em> ili <em>depresije</em>. Međutim, on je savršen i za sve koji žele da <em>pobegnu od svakodnevnog života</em> u gradu. Njegov <strong>svež vazduh</strong>, <strong>blaga klima</strong> i <em>prirodne boje</em> koje umiruju i revitalizuju, zajedno sa <strong>prelepim vidikovcima</strong>, pružaju pravo <em>osveženje za dušu</em>. Veruje se da je <strong>kretanje lek</strong>, a s obzirom na to da Cer nudi <em>idealne staze za šetnje</em>, nije iznenađenje što mnogi preporučuju ovu planinu kao <em>mesto koje ima snagu da izleči našu unutrašnju ravnotežu</em>.
                </p>
              </section>

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
                  <strong>Zelena planina</strong> nije zahtevna destinacija, što znači da vam nije potrebna <strong>specijalizovana planinarska oprema</strong> da biste uživali u šetnjama njenim stazama i posetili <strong>prelepe vidikovce</strong>. Planina je bogata <em>florom</em>, a tokom šetnje uživaćete u miru koji pružaju brojna stabla <em>cera, bukovine, hrasta i graba</em>. Ova <strong>šumovita planina</strong>, koja nije previše naseljena, sa <em>laganim i prijatnim stazama</em>, idealna je za <em>beg od gradske gužve</em>.
                </p>
              </section>

              <img srcSet={`${cer55} 450w, ${cer5}`} alt="Planina Cer 5" />

              <section lang="sr">
                <p>
                  Poseban adut su <strong>tematske staze</strong> koje se organizuju na Ceru. Možete krenuti <strong>Rimskom stazom</strong> i obići <strong>Trojanov grad</strong> iz <em>trećeg veka</em>, ili izabrati <strong>šumsku stazu</strong>. Ako ste ljubitelj <em>nacionalne istorije</em>, <strong>staza slave i pobede</strong> će biti vaš izbor. <strong>Maj</strong> je idealan mesec za posetu, jer tada možete proći stazom „<strong>Moj Cer, moja staza</strong>“, koja kreće od <strong>manastira Radovašnica</strong> i završava se kod <strong>Lipovih voda</strong>. Dužina staze je <strong>6 km</strong>, a duž nje su smeštena <em>uredna odmarališta</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Mount Cer</h1>

              <section lang="en">
                <p>
                  <strong>Cer</strong> is a mountain near <em>Šabac</em> that offers a variety of attractions for tourists. Although it is best known for the historic battle of <strong>World War I</strong>, this peaceful beauty still remains largely undiscovered by <em>domestic visitors</em>. With several stunning <strong>viewpoints</strong> offering a panorama of <em>half of Serbia</em>, Cer is perfect for <em>nature lovers</em>. It’s ideal for <em>ethno-tourism</em>, <em>weekend getaways</em>, <em>hiking</em>, and <em>cycling</em>. As a tourist gem of <strong>northwestern Serbia</strong>, Cer will amaze you in many ways. Here are ten reasons why you should visit it this year.
                </p>
              </section>

              <img srcSet={`${cer22} 450w, ${cer2}`} alt="Mount Cer 2" />

              <section lang="en">
                <p>
                  The views from this mountain are the main reason why tourists come to <strong>Cer</strong>. Its highest peak reaches <strong>687 meters</strong>, and the mountain has <strong>four peaks</strong> higher than 600 meters. One of the most beautiful viewpoints is <strong>Proplanak</strong>, though the others are equally impressive. According to locals, from one of these spots you can see <em>half of Serbia</em>, while those overlooking the <em>surrounding villages</em> are just as charming. The feeling these viewpoints evoke is why many choose to follow <em>marked trails</em> on Cer, aiming to reach one and enjoy the breathtaking views—often capturing the moment with a <strong>photo</strong>.
                </p>
              </section>

              <img srcSet={`${cer33} 450w, ${cer3}`} alt="Mount Cer 3" />

              <section lang="en">
                <p>
                  One of the most important events in <strong>national history</strong> took place right on this <strong>Green Mountain</strong>. The memory of the <strong>Battle of Cer</strong>, where the <strong>Serbian army</strong>, despite being outnumbered, defeated the Austro-Hungarians under the leadership of <strong>Stepa Stepanović</strong>, is preserved in various ways. In 1928, a <strong>monument and ossuary</strong> was erected in the village of <strong>Tekeriš</strong> to honor the <em>heroes of Cer</em> and the legendary battle. The monument is made of <em>Cer granite</em>, and at its top stands an <strong>eagle</strong> holding a <em>laurel wreath</em> in its beak, symbolizing power and victory. The inscription on the monument reads “<strong>Your deeds are immortal</strong>,” expressing the <em>gratitude</em> and <em>pride</em> of the Serbian people for their brave soldiers. Next to the monument is a <em>mixed cemetery</em> where both Serbian and Austro-Hungarian soldiers who fell during the battle are buried.
                </p>
              </section>

              <img srcSet={`${cer66} 450w, ${cer6}`} alt="Mount Cer 4" />

              <section lang="en">
                <p>
                  <strong>Cer</strong> is often mentioned as a suitable destination for the <strong>rehabilitation</strong> of people suffering from <em>neuroses</em> or <em>depression</em>. However, it is also perfect for anyone looking to <em>escape everyday life</em> in the city. Its <strong>fresh air</strong>, <strong>mild climate</strong>, and <em>natural colors</em> that soothe and revitalize, along with <strong>beautiful viewpoints</strong>, offer true <em>refreshment for the soul</em>. It is believed that <strong>movement is medicine</strong>, and since Cer offers <em>ideal hiking trails</em>, it's no surprise that many recommend this mountain as a <em>place with the power to restore inner balance</em>.
                </p>
              </section>

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
                    The Monasteries of the Cer Mountain
                  </h4>
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
                    The Monasteries of the Cer Mountain
                  </h4>
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
                  The <strong>Green Mountain</strong> is not a demanding destination, meaning you don’t need any <strong>special hiking equipment</strong> to enjoy its trails and visit its <strong>beautiful viewpoints</strong>. The mountain is rich in <em>flora</em>, and during your walk you’ll enjoy the peace provided by numerous trees such as <em>Turkey oak, beech, common oak, and hornbeam</em>. This <strong>forested mountain</strong>, which is sparsely populated, features <em>gentle and pleasant trails</em>, making it ideal for a <em>getaway from urban crowds</em>.
                </p>
              </section>

              <img srcSet={`${cer55} 450w, ${cer5}`} alt="Mount Cer 5" />

              <section lang="en">
                <p>
                  A special feature of Cer is its <strong>themed trails</strong>. You can take the <strong>Roman Trail</strong> and visit <strong>Trojan’s Town</strong> from the <em>third century</em>, or choose the <strong>forest trail</strong>. If you’re a fan of <em>national history</em>, the <strong>Trail of Glory and Victory</strong> will be your pick. <strong>May</strong> is the ideal month to visit, as you can then walk the trail called “<strong>My Cer, My Trail</strong>,” which begins at the <strong>Radovašnica Monastery</strong> and ends near the <strong>Lipove Vode</strong> springs. The trail is <strong>6 km</strong> long and features <em>well-maintained rest areas</em> along the way.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default Cer;