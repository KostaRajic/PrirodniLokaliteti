/* eslint-disable react/no-unknown-property */
import fruska2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/Fruska1.jpg";
import fruska3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/desktop/Fruska5.jpg";
import fruska4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/desktop/Fruska3.jpg";
import fruska5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/desktop/Fruska4.jpg";
import fruska6 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/desktop/Fruska8.jpg";
import fruska11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/zanimljivosti/1.jpg";
import fruska12 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/zanimljivosti/2.jpg";
import fruska13 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/zanimljivosti/dombo1.jpg";
import fruska14 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/zanimljivosti/gradac.jpg";
import fruska22 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/mobile/FruskaM1.jpg";
import fruska33 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/mobile/FruskaM5.jpg";
import fruska44 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/mobile/FruskaM3.jpg";
import fruska55 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/mobile/FruskaM4.jpg";
import fruska66 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/mobile/FruskaM8.jpg";
import fruska11M from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/znimljivostimobile/1M.jpg";
import fruska12M from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/znimljivostimobile/2M.jpg";
import fruska13M from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/znimljivostimobile/dombo1M.jpg";
import fruska14M from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NacionalniParkFruskaGora/znimljivostimobile/gradacM.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const FruskaGora = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);

  return (
    <>

      <Helmet>
        <title>
          {switchLanguage === 'rs'
            ? 'Nacionalni park Fruška Gora | Prirodno i kulturno blago Vojvodine'
            : 'Fruška Gora National Park | Natural and Cultural Treasure of Vojvodina'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Nacionalni park Fruška Gora je jedno od najvažnijih prirodnih područja Srbije, poznat po bogatoj flori, fauni, manastirima, izletištima i arheološkim nalazištima.'
              : 'Fruška Gora National Park is one of Serbia’s most important natural areas, known for its rich flora and fauna, monasteries, picnic areas, and archaeological sites.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Fruška Gora, Nacionalni park, manastiri Fruške gore, Iriški venac, izletišta, priroda Srbije, flora i fauna, Sremska Kamenica, arheološka nalazišta, lekovite biljke'
              : 'Fruška Gora, National Park, Fruška Gora monasteries, Iriški venac, picnic areas, nature of Serbia, flora and fauna, Sremska Kamenica, archaeological sites, medicinal herbs'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/fruska-gora`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/fruska-gora"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/fruska-gora"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/fruska-gora"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(JuznoBackiPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }} />
        <header></header>
        <img srcSet={`${fruska22} 450w, ${fruska2} `} alt="Fruska Gora 1" />

        {switchLanguage === "en" ? (

          <>

            <h2 style={{ color: "white" }}>Nacionalni Park "Fruška Gora"</h2>

            <section

              className="sectionTextClass"
              lang="en"
            >
              <p>
                The highest peak of Fruška Gora is <strong>Crveni Čot</strong>{" "}
                (539 m), while the most important tourist center is{" "}
                <strong>Iriški Venac</strong>.
              </p>
              <p>
                The mountain stretches along the right bank of the{" "}
                <strong>Danube River</strong>, with a length of 78 km and a width
                of 15 km.
              </p>
              <p>
                The formation of Fruška Gora began in the{" "}
                <strong>Mesozoic era</strong>, approximately{" "}
                <strong>90 million years ago</strong>, and scientists often refer
                to it as a <em>"mirror of geological history."</em>
              </p>
              <p>
                So far, <strong>164 fossilized animal species</strong> have been
                discovered on the mountain, dating back around{" "}
                <strong>123 million years</strong>.
              </p>
              <p>
                The <strong>flora of Fruška Gora</strong> includes about{" "}
                <strong>1,500 plant species</strong>, making it a rich and
                important natural habitat.
              </p>
            </section>

            <hr />

            <div style={{ flexDirection: "column", display: "flex" }}>
              {window.innerWidth < 500 ? (
                <>
                  <img
                    src={fruska4}
                    srcSet={`${fruska44} 450w, ${fruska4} 800w`}
                    alt="Fruska Gora 2"
                    className="fruskaGoraClassImg" />
                  <section lang="en" className="fruskaGoraParagh">
                    <p>
                      Fruška Gora is rich in forests of <strong>oak</strong>, <strong>hornbeam</strong>, <strong>beech</strong>, <strong>linden</strong>, and other trees, with over <strong>50 protected plant species</strong>.
                    </p>
                    <p>
                      The mountain hosts numerous <strong>archaeological sites</strong> (from the Neolithic, Copper, Bronze, and Roman periods), as well as <strong>old Fruška Gora monasteries</strong> — a total of 17 — dating from the late 15th to the 18th century. The monasteries are known for their distinctive architecture, rich treasuries, libraries, and frescoes.
                    </p>
                    <p>
                      The administrative center of the <strong>Fruška Gora National Park</strong> is located in <strong>Sremska Kamenica</strong>.
                    </p>
                  </section>
                </>
              ) : (
                <div className="flexColumn" style={{ display: "flex" }}>
                  <section lang="en" className="fruskaGoraParagh">
                    <p>
                      Fruška Gora is rich in forests of <strong>oak</strong>, <strong>hornbeam</strong>, <strong>beech</strong>, <strong>linden</strong>, and other trees, with over <strong>50 protected plant species</strong>.
                    </p>
                    <p>
                      The mountain hosts numerous <strong>archaeological sites</strong> (from the Neolithic, Copper, Bronze, and Roman periods), as well as <strong>old Fruška Gora monasteries</strong> — a total of 17 — dating from the late 15th to the 18th century. The monasteries are known for their distinctive architecture, rich treasuries, libraries, and frescoes.
                    </p>
                    <p>
                      The administrative center of the <strong>Fruška Gora National Park</strong> is located in <strong>Sremska Kamenica</strong>.
                    </p>
                  </section>
                  <img
                    src={fruska4}
                    srcSet={`${fruska44} 450w, ${fruska4} 800w`}
                    alt="Fruska Gora 2"
                    className="fruskaGoraClassImg" />
                </div>
              )}

            </div>

            <hr />

            <div className="flexColumn" style={{ display: "flex" }}>
              <img
                srcSet={`${fruska66} 450w, ${fruska6} `}
                alt="Fruska Gora 3"
                className="fruskaGoraClassImg" />

              <section lang="en" className="fruskaGoraParagh">
                <p>
                  The <strong>flora of Fruška Gora</strong> is very diverse and specific. In the core zone of the <strong>National Park</strong>, there are about <strong>1000 plant species</strong>, while the total number of plants in the entire area, including the protective zone, exceeds <strong>1500 species</strong>.
                </p>
                <p>
                  This great diversity allows Fruška Gora to be compared to much larger and higher mountains in Serbia. The mountain is especially known for the presence of about <strong>700 medicinal plants</strong>, most of which are <strong>native (wild) species</strong>, while a smaller part are <strong>alien, cultivated plants</strong>.
                </p>
              </section>
            </div>

            <hr />

            {window.innerWidth < 500 ? (
              <>
                <img
                  srcSet={`${fruska33} 450w, ${fruska3} `}
                  alt="Fruska Gora 4"
                  className="fruskaGoraClassImg" />
                <section lang="en">
                  <p>
                    <strong>Picnic areas on Fruška Gora</strong> are spaces usually located near roads, cultural-historical monuments, and hospitality facilities. Besides picnic areas, there are also spots arranged for enjoying beautiful views of the nearby and distant surroundings, such as the viewpoint above the settlement of <strong>Vrdnik</strong>.
                  </p>
                  <p>
                    From <strong>Iriški Venac</strong>, you can see half of Bačka, Avala, Cer, and other mountains of ours. This view is a true remedy for those seeking peace in silence and nature. It is here that one truly feels the greatness and power of nature and, at the same time, the beauty of life.
                  </p>
                  <p>
                    Among the maintained picnic areas, the most notable are: <strong>Čortanovačka Forest, Stražilovo, Partizanski Put, Iriški Venac, Hopovo, Glavica, Popovica, Zmajevac, Letenka, Hajdučki Breg, Andrevlje, Testera, Ciganski Logor, Ležimir, Rohalj Base, Lipovača</strong>, and others.
                  </p>
                </section>

              </>
            ) : (
              <div style={{ display: "flex" }} className="flexColumn">
                <section lang="en" className="fruskaGoraParagh">
                  <p>
                    <strong>Picnic areas on Fruška Gora</strong> are spaces usually located near roads, cultural-historical monuments, and hospitality facilities. Besides picnic areas, there are also spots arranged for enjoying beautiful views of the nearby and distant surroundings, such as the viewpoint above the settlement of <strong>Vrdnik</strong>.
                  </p>
                  <p>
                    From <strong>Iriški Venac</strong>, you can see half of Bačka, Avala, Cer, and other mountains of ours. This view is a true remedy for those seeking peace in silence and nature. It is here that one truly feels the greatness and power of nature and, at the same time, the beauty of life.
                  </p>
                  <p>
                    Among the maintained picnic areas, the most notable are: <strong>Čortanovačka Forest, Stražilovo, Partizanski Put, Iriški Venac, Hopovo, Glavica, Popovica, Zmajevac, Letenka, Hajdučki Breg, Andrevlje, Testera, Ciganski Logor, Ležimir, Rohalj Base, Lipovača</strong>, and others.
                  </p>
                </section>


                <img
                  srcSet={`${fruska33} 450w, ${fruska3} `}
                  alt="Fruska Gora 4"
                  className="fruskaGoraClassImg" />
              </div>
            )}

            <hr />

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska55} 450w, ${fruska5} `}
                  alt="Fruska Gora 5"
                  className="fruskaGoraClassImg" />
                <section lang="en" className="fruskaGoraParagh">
                  <p>
                    Visitors to the <strong>Fruška Gora National Park</strong> are offered numerous opportunities for hiking. Whether it is a one-day or multi-day trip, it is important to be physically and mentally prepared for hiking, as well as to have the appropriate equipment.
                  </p>
                  <p>
                    The hiking trails on Fruška Gora lead through beautiful deciduous forests and meadows. Some trails offer easy walks with gentle inclines, while others require more effort due to their length and steepness.
                  </p>
                  <p>
                    Most trails are marked with hiking signs (<em>a white circle with a red heart in the center</em>), which ensures visitors' safety by preventing them from getting lost and providing the possibility to reach the mountain lodges.
                  </p>
                </section>

              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <img
                  srcSet={`${fruska55} 450w, ${fruska5} `}
                  alt="Fruska Gora 5"
                  className="fruskaGoraClassImg" />
                <section lang="en" className="fruskaGoraParagh">
                  <p>
                    Visitors to the <strong>Fruška Gora National Park</strong> are offered numerous opportunities for hiking. Whether it is a one-day or multi-day trip, it is important to be physically and mentally prepared for hiking, as well as to have the appropriate equipment.
                  </p>
                  <p>
                    The hiking trails on Fruška Gora lead through beautiful deciduous forests and meadows. Some trails offer easy walks with gentle inclines, while others require more effort due to their length and steepness.
                  </p>
                  <p>
                    Most trails are marked with hiking signs (<em>a white circle with a red heart in the center</em>), which ensures visitors' safety by preventing them from getting lost and providing the possibility to reach the mountain lodges.
                  </p>
                </section>
              </div>
            )}

            <hr />

            <h3
              style={{
                backgroundColor: "white",
                color: "rgb(19 17 35)",
                textAlign: "center",
                padding: "40px 0 10px 0",
                fontSize: "37px",
              }}
            >
              Curiosities
            </h3>

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska11M} 450w, ${fruska11} `}
                  alt="Beli Majdan"
                  className="fruskaGoraClassImg" />
                <section lang="en" className="fruskaGoraParagh">
                  <p>
                    <strong>Beli Majdan</strong> is one of the well-known locations on Fruška Gora, situated near the settlement of <strong>Iriški Venac</strong>. This name is linked to a specific geological phenomenon – rocky outcrops characterized by white limestone rock.
                  </p>
                  <p>
                    Beli Majdan was an important mining site, especially in the 18th and 19th centuries, when ores were extracted here. Today, it is known as a natural and tourist destination attracting visitors due to its beautiful surroundings, unique flora and fauna, as well as opportunities for hiking and enjoying nature.
                  </p>
                  <p>
                    This location, near Iriški Venac, is popular among nature lovers and tourists visiting Fruška Gora.
                  </p>
                </section>

              </div>
            ) : (

              <div style={{ display: "flex" }}>
                <section lang="en" className="fruskaGoraParagh">
                  <p>
                    <strong>Beli Majdan</strong> is one of the well-known locations on Fruška Gora, situated near the settlement of <strong>Iriški Venac</strong>. This name is linked to a specific geological phenomenon – rocky outcrops characterized by white limestone rock.
                  </p>
                  <p>
                    Beli Majdan was an important mining site, especially in the 18th and 19th centuries, when ores were extracted here. Today, it is known as a natural and tourist destination attracting visitors due to its beautiful surroundings, unique flora and fauna, as well as opportunities for hiking and enjoying nature.
                  </p>
                  <p>
                    This location, near Iriški Venac, is popular among nature lovers and tourists visiting Fruška Gora.
                  </p>
                </section>

                <img
                  srcSet={`${fruska11M} 450w, ${fruska11} `}
                  alt="Beli Majdan"
                  className="fruskaGoraClassImg" />
              </div>
            )}

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska12M} 450w, ${fruska12} `}
                  alt="Vrdnicka kula"
                  className="fruskaGoraClassImg" />
                <p className="fruskaGoraParagh">
                  <section lang="en" className="fruskaGoraParagh">
                    <p>
                      <strong>Vrdnik Tower</strong> is a historical monument located near <strong>Iriški Venac</strong>. It is known for its significance in the history of Srem and Serbia, and it is believed to date back to the Middle Ages, although the exact period of its origin is not fully confirmed.
                    </p>
                    <p>
                      According to some sources, Vrdnik Tower was part of a system of defensive fortifications used for protection against attacks, while its function also included a signaling role. The tower was built on an elevation, which allowed a wide view of the surroundings and control of the passage through the valley.
                    </p>
                  </section>
                </p>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <img
                  srcSet={`${fruska12M} 450w, ${fruska12} `}
                  alt="Vrdnicka kula"
                  className="fruskaGoraClassImg" />
                <section lang="en" className="fruskaGoraParagh">
                  <p>
                    <strong>Vrdnik Tower</strong> is a historical monument located near <strong>Iriški Venac</strong>. It is known for its significance in the history of Srem and Serbia, and it is believed to date back to the Middle Ages, although the exact period of its origin is not fully confirmed.
                  </p>
                  <p>
                    According to some sources, Vrdnik Tower was part of a system of defensive fortifications used for protection against attacks, while its function also included a signaling role. The tower was built on an elevation, which allowed a wide view of the surroundings and control of the passage through the valley.
                  </p>
                </section>

              </div>
            )}

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska13M} 450w, ${fruska13} `}
                  alt="Samostan Dombo"
                  className="fruskaGoraClassImg" />
                <section lang="en" className="fruskaGoraParagh">
                  <p>
                    On the hill <strong>Belegir</strong>, in <strong>Novi Rakovac</strong>, right opposite the elementary school, lie the remains of the fortified monastery <strong>Dombo</strong>. The monastery was hidden underground until the 1970s, when thanks to the persistent research work of archaeologist <strong>Šandor Nađ</strong>, it saw the light of day.
                  </p>
                  <p>
                    An interesting aspect of this site is its continuity through history — traces of entire civilization layers have been preserved there. Archaeologists found remains of a Celtic settlement, on whose foundations Roman buildings were later constructed.
                  </p>
                </section>

              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <section lang="en" className="fruskaGoraParagh">
                  <p>
                    On the hill <strong>Belegir</strong>, in <strong>Novi Rakovac</strong>, right opposite the elementary school, lie the remains of the fortified monastery <strong>Dombo</strong>. The monastery was hidden underground until the 1970s, when thanks to the persistent research work of archaeologist <strong>Šandor Nađ</strong>, it saw the light of day.
                  </p>
                  <p>
                    An interesting aspect of this site is its continuity through history — traces of entire civilization layers have been preserved there. Archaeologists found remains of a Celtic settlement, on whose foundations Roman buildings were later constructed.
                  </p>
                </section>

                <img
                  srcSet={`${fruska13M} 450w, ${fruska13} `}
                  alt="Samostan Dombo"
                  className="fruskaGoraClassImg" />
              </div>
            )}

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska14M} 450w, ${fruska14} `}
                  alt="Tvrdjava Gradac"
                  className="fruskaGoraClassImg" />
                <p className="fruskaGoraParagh">
                  <section lang="en" className="fruskaGoraParagh">
                    <p>
                      The archaeological site <strong>Gradač</strong> is located between the places <strong>Čerević</strong> and <strong>Banoštra</strong>, on the eponymous elevation. There was a Roman fortress built in the 1st century, covering an area of about 20 meters by 80 meters, surrounded by smaller trenches. The walls are made of broken stone and bricks with a binding material of hydraulic lime, about 1.50 meters thick, which are still well preserved today.
                    </p>
                    <p>
                      One entire wall and the partition, protective walls towards the northwest and southeast are preserved. To the north and the Danube is a steep, vertical cliff with two smaller, shallow earth trenches just below the walls.
                    </p>
                  </section>
                </p>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <img
                  srcSet={`${fruska14M} 450w, ${fruska14} `}
                  alt="Tvrdjava Gradac"
                  className="fruskaGoraClassImg" />
                <section lang="en" className="fruskaGoraParagh">
                  <p>
                    The archaeological site <strong>Gradač</strong> is located between the places <strong>Čerević</strong> and <strong>Banoštra</strong>, on the eponymous elevation. There was a Roman fortress built in the 1st century, covering an area of about 20 meters by 80 meters, surrounded by smaller trenches. The walls are made of broken stone and bricks with a binding material of hydraulic lime, about 1.50 meters thick, which are still well preserved today.
                  </p>
                  <p>
                    One entire wall and the partition, protective walls towards the northwest and southeast are preserved. To the north and the Danube is a steep, vertical cliff with two smaller, shallow earth trenches just below the walls.
                  </p>
                </section>
              </div>
            )}

          </>

        ) : (
          <>

            <h2 style={{ color: "white" }}>Nacionalni Park "Fruška Gora"</h2>

            <section

              className="sectionTextClass"
              lang="sr"
            >
              <p>
                Najviši vrh Fruške gore je <strong>Crveni Čot</strong> (539 m),
                dok je najznačajniji turistički centar{" "}
                <strong>Iriški venac</strong>.
              </p>
              <p>
                Planina se prostire duž desne obale <strong>Dunava</strong>, duga
                je 78 km, a široka 15 km.
              </p>
              <p>
                Stvaranje Fruške gore započelo je u <strong>mezozoiku</strong>,
                pre oko <strong>90 miliona godina</strong>, a naučnici je često
                nazivaju <em>„ogledalom geološke prošlosti“</em>.
              </p>
              <p>
                Na ovoj planini otkriveno je{" "}
                <strong>164 fosilne životinjske vrste</strong>, stare oko{" "}
                <strong>123 miliona godina</strong>.
              </p>
              <p>
                <strong>Floru Fruške gore</strong> čini oko{" "}
                <strong>1500 biljnih vrsta</strong>, što je čini značajnim
                prirodnim staništem.
              </p>
            </section>


            <hr />

            <div style={{ flexDirection: "column", display: "flex" }}>
              {window.innerWidth < 500 ? (
                <>
                  <img
                    srcSet={`${fruska44} 450w, ${fruska4} `}
                    alt="Fruska Gora 2"
                    className="fruskaGoraClassImg" />

                  <section lang="sr" className="fruskaGoraParagh">
                    <p>
                      Fruška gora bogata je šumama <strong>hrasta</strong>,{" "}
                      <strong>graba</strong>, <strong>bukve</strong>,{" "}
                      <strong>lipe</strong> i drugog drveća, sa više od{" "}
                      <strong>50 zaštićenih biljnih vrsta</strong>.
                    </p>
                    <p>
                      Na planini se nalaze brojna{" "}
                      <strong>arheološka nalazišta</strong> (iz perioda neolita,
                      bakarnog, bronzanog i rimskog doba), kao i{" "}
                      <strong>stari fruškogorski manastiri</strong> — ukupno 17 —
                      nastali od kraja 15. do 18. veka. Manastiri su poznati po
                      specifičnoj arhitekturi, bogatim riznicama, bibliotekama i
                      freskama.
                    </p>
                    <p>
                      Sedište uprave <strong>Nacionalnog parka Fruška gora</strong>{" "}
                      nalazi se u <strong>Sremskoj Kamenici</strong>.
                    </p>
                  </section>
                </>

              ) : (
                <div className="flexColumn" style={{ display: "flex" }}>
                  <section lang="sr" className="fruskaGoraParagh">
                    <p>
                      Fruška gora bogata je šumama <strong>hrasta</strong>,{" "}
                      <strong>graba</strong>, <strong>bukve</strong>,{" "}
                      <strong>lipe</strong> i drugog drveća, sa više od{" "}
                      <strong>50 zaštićenih biljnih vrsta</strong>.
                    </p>
                    <p>
                      Na planini se nalaze brojna{" "}
                      <strong>arheološka nalazišta</strong> (iz perioda neolita,
                      bakarnog, bronzanog i rimskog doba), kao i{" "}
                      <strong>stari fruškogorski manastiri</strong> — ukupno 17 —
                      nastali od kraja 15. do 18. veka. Manastiri su poznati po
                      specifičnoj arhitekturi, bogatim riznicama, bibliotekama i
                      freskama.
                    </p>
                    <p>
                      Sedište uprave <strong>Nacionalnog parka Fruška gora</strong>{" "}
                      nalazi se u <strong>Sremskoj Kamenici</strong>.
                    </p>
                  </section>
                  <img
                    srcSet={`${fruska44} 450w, ${fruska4} `}
                    alt="Fruska Gora 2"
                    className="fruskaGoraClassImg" />
                </div>
              )}
            </div>

            <hr />
            <div className="flexColumn" style={{ display: "flex" }}>
              <img
                srcSet={`${fruska66} 450w, ${fruska6} `}
                alt="Fruska Gora 3"
                className="fruskaGoraClassImg" />

              <section lang="sr" className="fruskaGoraParagh">
                <p>
                  <strong>Flora Fruške gore</strong> je veoma raznolika i
                  specifična. U užoj zoni <strong>Nacionalnog parka</strong> raste
                  oko <strong>1000 biljnih vrsta</strong>, dok broj biljaka u celom
                  području, uključujući i zaštitnu zonu, premašuje{" "}
                  <strong>1500 vrsta</strong>.
                </p>
                <p>
                  Ova velika raznolikost omogućava da se Fruška gora poredi sa
                  znatno većim i višim planinama u Srbiji. Planina je naročito
                  poznata po prisustvu oko <strong>700 lekovitih biljaka</strong>,
                  među kojima većinu čine <strong>autohtone (divlje) vrste</strong>,
                  dok je manji deo <strong>alohtonih, gajenih biljaka</strong>.
                </p>
              </section>
            </div>

            <hr />

            {window.innerWidth < 500 ? (
              <>
                <img
                  srcSet={`${fruska33} 450w, ${fruska3} `}
                  alt="Fruska Gora 4"
                  className="fruskaGoraClassImg" />
                <section lang="sr">
                  <p>
                    <strong>Izletišta na Fruškoj gori</strong> su prostori najčešće
                    pored saobraćajnica, kulturno-istorijskih spomenika i
                    ugostiteljskih objekata. Osim izletišta, uređuju se i prostori
                    sa kojih se pruža mogućnost uživanja u lepim vidicima na užu i
                    dalju okolinu, kao što je vidikovac iznad naselja{" "}
                    <strong>Vrdnik</strong>.
                  </p>
                  <p>
                    Sa <strong>Iriškog Venca</strong> se vidi pola Bačke, Avala, Cer
                    i druge naše planine. Taj vidik je pravi lek za one koji traže
                    mir u tišini i prirodi. Tek tu čovek oseti veličinu i snagu
                    prirode i istovremeno lepotu života.
                  </p>
                  <p>
                    Od izletišta koja se uređuju, značajnija su:{" "}
                    <strong>
                      Čortanovačka šuma, Stražilovo, Partizanski put, Iriški venac,
                      Hopovo, Glavica, Popovica, Zmajevac, Letenka, Hajdučki breg,
                      Andrevlje, Testera, Ciganski logor, Ležimir, Rohalj baze,
                      Lipovača
                    </strong>{" "}
                    i dr.
                  </p>
                </section>
              </>
            )
              :
              (
                <div style={{ display: "flex" }} className="flexColumn">
                  <section lang="sr" className="fruskaGoraParagh">
                    <p>
                      <strong>Izletišta na Fruškoj gori</strong> su prostori najčešće
                      pored saobraćajnica, kulturno-istorijskih spomenika i
                      ugostiteljskih objekata. Osim izletišta, uređuju se i prostori
                      sa kojih se pruža mogućnost uživanja u lepim vidicima na užu i
                      dalju okolinu, kao što je vidikovac iznad naselja{" "}
                      <strong>Vrdnik</strong>.
                    </p>
                    <p>
                      Sa <strong>Iriškog Venca</strong> se vidi pola Bačke, Avala, Cer
                      i druge naše planine. Taj vidik je pravi lek za one koji traže
                      mir u tišini i prirodi. Tek tu čovek oseti veličinu i snagu
                      prirode i istovremeno lepotu života.
                    </p>
                    <p>
                      Od izletišta koja se uređuju, značajnija su:{" "}
                      <strong>
                        Čortanovačka šuma, Stražilovo, Partizanski put, Iriški venac,
                        Hopovo, Glavica, Popovica, Zmajevac, Letenka, Hajdučki breg,
                        Andrevlje, Testera, Ciganski logor, Ležimir, Rohalj baze,
                        Lipovača
                      </strong>
                      i dr.
                    </p>
                  </section>

                  <img
                    srcSet={`${fruska33} 450w, ${fruska3} `}
                    alt="Fruska Gora 4"
                    className="fruskaGoraClassImg" />
                </div>
              )}

            <hr />

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska55} 450w, ${fruska5} `}
                  alt="Fruska Gora 5"
                  className="fruskaGoraClassImg" />
                <section lang="sr" className="fruskaGoraParagh">
                  <p>
                    Posetiocima <strong>Nacionalnog parka Fruška gora</strong> se
                    nude brojne mogućnosti za planinarenje. Bilo da se radi o
                    jednodnevnim ili višednevnim izletima, važno je da budete
                    fizički i mentalno pripremljeni za planinarenje, a takođe i da
                    imate odgovarajuću opremu.
                  </p>
                  <p>
                    Planinarske staze na Fruškoj gori vode kroz prelepe listopadne
                    šume i preko livada. Neke od staza nude pešačenje bez mnogo
                    napora, sa blagim usponima, dok druge zahtevaju više napora zbog
                    njihove dužine i uspona.
                  </p>
                  <p>
                    Većina staza je obeležena planinarskim oznakama (
                    <em>beo krug sa crvenim srcem u sredini</em>), što obezbeđuje
                    sigurnost posetiocima parka da se neće izgubiti, kao i mogućnost
                    da dođu do planinarskih domova.
                  </p>
                </section>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <img
                  srcSet={`${fruska55} 450w, ${fruska5} `}
                  alt="Fruska Gora 5"
                  className="fruskaGoraClassImg" />
                <section lang="sr" className="fruskaGoraParagh">
                  <p>
                    Posetiocima <strong>Nacionalnog parka Fruška gora</strong> se
                    nude brojne mogućnosti za planinarenje. Bilo da se radi o
                    jednodnevnim ili višednevnim izletima, važno je da budete
                    fizički i mentalno pripremljeni za planinarenje, a takođe i da
                    imate odgovarajuću opremu.
                  </p>
                  <p>
                    Planinarske staze na Fruškoj gori vode kroz prelepe listopadne
                    šume i preko livada. Neke od staza nude pešačenje bez mnogo
                    napora, sa blagim usponima, dok druge zahtevaju više napora zbog
                    njihove dužine i uspona.
                  </p>
                  <p>
                    Većina staza je obeležena planinarskim oznakama (
                    <em>beo krug sa crvenim srcem u sredini</em>), što obezbeđuje
                    sigurnost posetiocima parka da se neće izgubiti, kao i mogućnost
                    da dođu do planinarskih domova.
                  </p>
                </section>
              </div>
            )}

            <hr />

            <h3
              style={{
                backgroundColor: "white",
                color: "rgb(19 17 35)",
                textAlign: "center",
                padding: "40px 0 10px 0",
                fontSize: "37px",
              }}
            >
              Zanimljivosti
            </h3>

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska11M} 450w, ${fruska11} `}
                  alt="Beli Majdan"
                  className="fruskaGoraClassImg" />
                <section lang="sr" className="fruskaGoraParagh">
                  <p>
                    <strong>Beli Majdan</strong> je jedan od poznatih lokaliteta na
                    Fruškoj gori, smešten u blizini naselja{" "}
                    <strong>Iriški venac</strong>. Ovaj naziv je vezan za specifičan
                    geološki fenomen – stenovite izloženosti koje se karakterišu
                    belom krečnjačkom stenom.
                  </p>
                  <p>
                    Beli Majdan je bio značajan rudarski lokalitet, naročito u 18. i
                    19. veku, kada su se ovde vadile rude. Danas je poznat kao
                    prirodno i turističko odredište koje privlači posetioce zbog
                    svog prelepog okruženja, specifične flore i faune, kao i
                    mogućnosti za pešačenje i uživanje u prirodi.
                  </p>
                  <p>
                    Ovaj lokalitet, koji se nalazi u blizini Iriškog venca,
                    popularan je među ljubiteljima prirode i turizma na Fruškoj
                    gori.
                  </p>
                </section>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <section lang="sr" className="fruskaGoraParagh">
                  <p>
                    <strong>Beli Majdan</strong> je jedan od poznatih lokaliteta na
                    Fruškoj gori, smešten u blizini naselja{" "}
                    <strong>Iriški venac</strong>. Ovaj naziv je vezan za specifičan
                    geološki fenomen – stenovite izloženosti koje se karakterišu
                    belom krečnjačkom stenom.
                  </p>
                  <p>
                    Beli Majdan je bio značajan rudarski lokalitet, naročito u 18. i
                    19. veku, kada su se ovde vadile rude. Danas je poznat kao
                    prirodno i turističko odredište koje privlači posetioce zbog
                    svog prelepog okruženja, specifične flore i faune, kao i
                    mogućnosti za pešačenje i uživanje u prirodi.
                  </p>
                  <p>
                    Ovaj lokalitet, koji se nalazi u blizini Iriškog venca,
                    popularan je među ljubiteljima prirode i turizma na Fruškoj
                    gori.
                  </p>
                </section>
                <img
                  srcSet={`${fruska11M} 450w, ${fruska11} `}
                  alt="Beli Majdan"
                  className="fruskaGoraClassImg" />
              </div>
            )}

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska12M} 450w, ${fruska12} `}
                  alt="Vrdnicka kula"
                  className="fruskaGoraClassImg" />
                <p className="fruskaGoraParagh">
                  <section lang="en" className="fruskaGoraParagh">
                    <p>
                      <strong>Vrdnik Tower</strong> is a historical monument located
                      near <strong>Iriški Venac</strong>. It is known for its
                      significance in the history of Srem and Serbia, and it is
                      believed to date back to the Middle Ages, although the exact
                      period of its origin is not fully confirmed.
                    </p>
                    <p>
                      According to some sources, Vrdnik Tower was part of a system
                      of defensive fortifications used for protection against
                      attacks, while its function also included a signaling role.
                      The tower was built on an elevation, which allowed a wide view
                      of the surroundings and control of the passage through the
                      valley.
                    </p>
                  </section>
                </p>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <img
                  srcSet={`${fruska12M} 450w, ${fruska12} `}
                  alt="Vrdnicka kula"
                  className="fruskaGoraClassImg" />
                <section lang="sr" className="fruskaGoraParagh">
                  <p>
                    <strong>Vrdnička kula</strong> je istorijski spomenik koji se
                    nalazi u blizini <strong>Iriškog venca</strong>. Poznata je po
                    značaju u istoriji Srema i Srbije, a veruje se da potiče iz
                    srednjeg veka, iako tačan period nastanka nije potpuno potvrđen.
                  </p>
                  <p>
                    Prema nekim izvorima, Vrdnička kula je bila deo sistema
                    odbrambenih utvrđenja korišćenih za zaštitu od napada, dok je
                    njena funkcija uključivala i signalnu ulogu. Kula je izgrađena
                    na uzvišenju, što je omogućavalo širok pogled na okolinu i
                    kontrolu prolaza kroz dolinu.
                  </p>
                </section>
              </div>
            )}

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska13M} 450w, ${fruska131} `}
                  alt="Samostan Dombo"
                  className="fruskaGoraClassImg" />
                <section lang="sr" className="fruskaGoraParagh">
                  <p>
                    Na brdu <strong>Belegir</strong>, u{" "}
                    <strong>Novom Rakovcu</strong>, odmah nasuprot osnovne škole,
                    nalaze se ostaci utvrđenog samostana <strong>Dombo</strong>.
                    Samostan je bio skriven pod zemljom sve do sedamdesetih godina
                    XX veka, kada je zahvaljujući upornom istraživačkom radu
                    arheologa <strong>Šandora Nađa</strong> ugledao svetlost dana.
                  </p>
                  <p>
                    Zanimljivost ovog lokaliteta je njegova sledljivost kroz
                    istoriju — na njemu su sačuvani tragovi celih civilizacijskih
                    slojeva. Arheolozi su pronašli ostatke keltskog naselja, na
                    čijim su temeljima kasnije izgrađene rimske građevine.
                  </p>
                </section>
              </div>

            ) : (
              <div style={{ display: "flex" }}>
                <section lang="sr" className="fruskaGoraParagh">
                  <p>
                    Na brdu <strong>Belegir</strong>, u{" "}
                    <strong>Novom Rakovcu</strong>, odmah nasuprot osnovne škole,
                    nalaze se ostaci utvrđenog samostana <strong>Dombo</strong>.
                    Samostan je bio skriven pod zemljom sve do sedamdesetih godina
                    XX veka, kada je zahvaljujući upornom istraživačkom radu
                    arheologa <strong>Šandora Nađa</strong> ugledao svetlost dana.
                  </p>
                  <p>
                    Zanimljivost ovog lokaliteta je njegova sledljivost kroz
                    istoriju — na njemu su sačuvani tragovi celih civilizacijskih
                    slojeva. Arheolozi su pronašli ostatke keltskog naselja, na
                    čijim su temeljima kasnije izgrađene rimske građevine.
                  </p>
                </section>
                <img
                  srcSet={`${fruska13M} 450w, ${fruska13} `}
                  alt="Samostan Dombo"
                  className="fruskaGoraClassImg" />
              </div>
            )}

            {window.innerWidth < 500 ? (
              <div>
                <img
                  srcSet={`${fruska14M} 450w, ${fruska14} `}
                  alt="Tvrdjava Gradac"
                  className="fruskaGoraClassImg" />
                <section lang="sr" className="fruskaGoraParagh">
                  <p>
                    Arheološko nalazište <strong>Gradač</strong> se nalazi između
                    mesta <strong>Čerević</strong> i <strong>Banoštra</strong>, na
                    istoimenom uzvišenju. Tu se nalazilo rimsko utvrđenje izgrađeno
                    u 1. veku, koje zahvata površinu od oko 20 metara puta 80
                    metara, uokvireno manjim šančevima. Zidovi su građeni od
                    lomljenog kamena i opeke sa vezivnim materijalom od hidroličnog
                    kreča, debljine oko 1,50 metara, koji su i danas dobro očuvani.
                  </p>
                  <p>
                    Očuvan je ceo jedan zid i pregradni, zaštitni zidovi prema
                    severozapadu i jugoistoku. Prema severu i Dunavu je strma,
                    okomita litica sa dva manja, plitka zemljana šanca, neposredno
                    ispod zidova.
                  </p>
                </section>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <img
                  srcSet={`${fruska14M} 450w, ${fruska14} `}
                  alt="Tvrdjava Gradac"
                  className="fruskaGoraClassImg" />
                <section lang="sr" className="fruskaGoraParagh">
                  <p>
                    Arheološko nalazište <strong>Gradač</strong> se nalazi između
                    mesta <strong>Čerević</strong> i <strong>Banoštra</strong>, na
                    istoimenom uzvišenju. Tu se nalazilo rimsko utvrđenje izgrađeno
                    u 1. veku, koje zahvata površinu od oko 20 metara puta 80
                    metara, uokvireno manjim šančevima. Zidovi su građeni od
                    lomljenog kamena i opeke sa vezivnim materijalom od hidroličnog
                    kreča, debljine oko 1,50 metara, koji su i danas dobro očuvani.
                  </p>
                  <p>
                    Očuvan je ceo jedan zid i pregradni, zaštitni zidovi prema
                    severozapadu i jugoistoku. Prema severu i Dunavu je strma,
                    okomita litica sa dva manja, plitka zemljana šanca, neposredno
                    ispod zidova.
                  </p>
                </section>
              </div>
            )}
          </>
        )}

      </div>
    </>

  )
}

export default FruskaGora;