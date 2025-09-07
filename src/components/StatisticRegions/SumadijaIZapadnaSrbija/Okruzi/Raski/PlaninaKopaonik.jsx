/* eslint-disable react/no-unknown-property */
import kopaonik1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/desktop/kopaonik1.jpg";
import kopaonik2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/desktop/kopaonik2.jpg";
import kopaonik3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/desktop/kopaonik3.jpg";
import kopaonik4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/desktop/kopaonik4.jpg";
import kopaonik5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/desktop/kopaonik5.jpg";
import kopaonik6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/desktop/kopaonik7.jpg";
import kopaonik11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/mobile/Mkopaonik1.jpg";
import kopaonik22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/mobile/Mkopaonik2.jpg";
import kopaonik33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/mobile/Mkopaonik3.jpg";
import kopaonik44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/mobile/Mkopaonik4.jpg";
import kopaonik55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/mobile/Mkopaonik5.jpg";
import kopaonik66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaKopaonik/mobile/Mkopaonik7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaKopaonik = () => {
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
            ? "Kopaonik – Sunčana i srebrna planina Srbije | Srbija Wonders"
            : "Kopaonik – The Sunny and Silver Mountain of Serbia | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Kopaonik je najveća i najposećenija planina u Srbiji, poznata po zimskim sportovima, skijalištima, sunčanim danima, wellness centrima i prirodnim lepotama. Idealna destinacija za odmor tokom cele godine."
              : "Kopaonik is the largest and most visited mountain in Serbia, known for winter sports, ski resorts, sunny weather, wellness centers, and natural beauty. A perfect year-round destination."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Kopaonik, skijanje u Srbiji, Pančićev vrh, skijalište Kopaonik, smeštaj Kopaonik, noćno skijanje, planinski turizam, Sunčana planina, zimovanje Srbija"
              : "Kopaonik, skiing in Serbia, Pančić's Peak, Kopaonik ski resort, Kopaonik accommodation, night skiing, mountain tourism, Sunny Mountain, winter holiday Serbia"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-kopaonik`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-kopaonik"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-kopaonik"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-kopaonik"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${kopaonik11} 450w, ${kopaonik1} `} alt="Planina Kopaonik 1" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h2 style={{ color: "white" }}>Planina Kopaonik</h2>

              <section lang="sr">

                <p>
                  <strong>Kopaonik</strong> je najveća i najposećenija planina u Srbiji, poznata i pod nazivom <em>Srebrna planina</em>.
                  Ova planina se nalazi u <strong>centralnom delu zemlje</strong> i proteže se od <strong>severozapada ka jugoistoku</strong>,
                  sa dužinom od oko <strong>75 kilometara</strong>. U svom središnjem delu, širina Kopaonika dostiže <strong>40 kilometara</strong>,
                  dok ukupna površina planinskog masiva iznosi <strong>2758 km²</strong>. Najviši vrh Kopaonika je <strong>Pančićev vrh (2017 m)</strong>,
                  a pored njega, drugi najviši vrhovi su <strong>Suvo Rudište (1976 m)</strong> i <strong>Karaman Vučak (1936 m)</strong>.
                  Prosečna visina planine je oko <strong>1700 metara</strong>, što je nivo na kom se nalazi većina njenog površinskog područja.
                </p>
              </section>

              <img srcSet={`${kopaonik22} 450w, ${kopaonik2}`} alt="Planina Kopaonik 2" />

              <section lang="sr">
                <p>
                  Osim imena <em>Srebrna planina</em>, Kopaonik je poznat i kao <em>Sunčana planina</em>, jer ima oko <strong>200 sunčanih dana godišnje</strong>,
                  što je najviše među planinama u Srbiji. Tokom <strong>jula i avgusta</strong>, beleži se oko <strong>240 sunčanih časova</strong>.
                  <strong>Snežni pokrivač</strong> traje prosečno <strong>šest meseci</strong>, najkraće <strong>180 dana</strong>, a najduže do <strong>230 dana</strong>.
                  Najniže temperature zabeležene su u <strong>januaru i februaru</strong>, kada se temperatura spušta do <em>-5.5°C</em>.
                </p>
              </section>

              <img srcSet={`${kopaonik33} 450w, ${kopaonik3}`} alt="Planina Kopaonik 3" />

              <section lang="sr">
                <p>
                  <strong>Kopaonik</strong> je postao popularno mesto za <strong>skijaška takmičenja</strong> još <strong>1935. godine</strong>,
                  a tradicija je prekinuta <strong>1941.</strong> zbog početka <strong>Drugog svetskog rata</strong>. Tokom rata, <em>planinarski dom</em> je potpuno uništen.
                  Na istom mestu je <strong>1948. godine</strong> izgrađen novi dom, nazvan <strong>Olga Dedijer</strong>, u čast lekarke i učesnice
                  <strong>narodnooslobodilačke borbe</strong>. U <strong>martu 1984. godine</strong>, Kopaonik je bio domaćin <strong>Evropskog kupa u skijanju</strong>,
                  čime je stekao status <em>međunarodnog sportskog centra</em>.
                </p>
              </section>

              <img srcSet={`${kopaonik44} 450w, ${kopaonik4}`} alt="Planina Kopaonik 4" />

              <section lang="sr">
                <p>
                  <strong>Kopaonik</strong> nudi raznovrstan <strong>smeštaj</strong> – hotele, vile, privatne kuće i apartmane različitih kategorija.
                  Većina hotela se nalazi <strong>u blizini skijaških staza</strong>, a oni udaljeniji nude <em>organizovan prevoz</em> do skijališta.
                  Pored osnovnog smeštaja, mnogi hoteli imaju <strong>bazen</strong>, <strong>fitnes centar</strong>, <strong>spa i wellness usluge</strong>,
                  kao i <strong>dečje igraonice</strong>. Bez obzira na želje i budžet, na Kopaoniku se može pronaći <em>odgovarajući smeštaj</em>.
                </p>
              </section>

              <img srcSet={`${kopaonik55} 450w, ${kopaonik5}`} alt="Planina Kopaonik 5" />

              <section lang="sr">
                <p>
                  <strong>Skijaška sezona</strong> traje od <strong>početka decembra</strong> do <strong>kraja aprila</strong>. Većina staza je opremljena
                  <strong>sistemima za veštački sneg</strong>. Na raspolaganju je <strong>25 žičara</strong> i <strong>2 pokretne trake</strong>, koje čine
                  sistem dužine <strong>22 km</strong> i mogu prevesti više od <strong>30.000 skijaša na sat</strong>. Najduža staza je <strong>Krčmar</strong> sa <strong>1902 metra</strong>,
                  dok ukupna dužina svih staza iznosi <strong>62 km</strong>. Tu su staze za <strong>alpsko</strong> i <strong>nordijsko skijanje</strong>,
                  pri čemu nordijske staze imaju dužinu <strong>20 km</strong>. Na raspolaganju su i <strong>tri FIS staze</strong> za slalom i veleslalom.
                  <strong>Pančićev vrh</strong>, <strong>Karaman greben</strong> i <strong>Malo jezero</strong> su opremljene <strong>rasvetom</strong> za <em>noćno skijanje</em>.
                  Jednom nedeljno jedna od staza se pretvara u <strong>stazu za sankanje</strong>, što pruža <em>uživanje posetiocima svih uzrasta</em>.
                  Za početnike tu je <strong>škola skijanja</strong> sa <em>grupnim i individualnim časovima</em>. Grupni treninzi su popularni kod dece i firmi
                  za <strong>team building</strong>, jer nude duže vreme s instruktorom po povoljnijoj ceni. Za najmlađe postoji <strong>ski vrtić</strong>,
                  bezbedan prostor u kome <em>kroz igru i zabavu</em> deca uz instruktore uče prve skijaške korake.
                </p>
              </section>

              <img srcSet={`${kopaonik66} 450w, ${kopaonik6}`} alt="Planina Kopaonik 6" />

              <section lang="sr">
                <p>
                  Za one koji žele <strong>pauzu od skijanja</strong> ili dodatnu <em>raznovrsnost</em> u boravku, Kopaonik nudi brojne druge aktivnosti:
                  <strong>bob staza</strong>, <strong>panoramska vožnja žičarom</strong>, <strong>paraglajding</strong> i <strong>zip lajn</strong>.
                  Takođe, tu su i uređene <strong>pešačke i planinarske staze</strong>. <strong>Avantura park</strong> prostire se na <strong>2000 m²</strong>
                  i podeljen je u zone prema uzrastima. Najmlađima je namenjeno <strong>dečje igralište</strong> posebno opremljeno za bezbednu igru.
                </p>
              </section>


            </>
          )
          :
          (
            <>


              <h2 style={{ color: "white" }}>Mount Kopaonik</h2>

              <section lang="en">
                <p>
                  <strong>Kopaonik</strong> is the largest and most visited mountain in Serbia, also known as the <em>Silver Mountain</em>.
                  It is located in the <strong>central part of the country</strong> and stretches from the <strong>northwest to the southeast</strong>,
                  with a length of about <strong>75 kilometers</strong>. In its central part, Kopaonik reaches a width of <strong>40 kilometers</strong>,
                  while the total area of the mountain massif covers <strong>2758 km²</strong>. The highest peak is <strong>Pančić's Peak (2017 m)</strong>,
                  followed by <strong>Suvo Rudište (1976 m)</strong> and <strong>Karaman Vučak (1936 m)</strong>. The average elevation is about
                  <strong>1700 meters</strong>, which is the altitude at which most of the mountain's surface lies.
                </p>
              </section>

              <img srcSet={`${kopaonik22} 450w, ${kopaonik2}`} alt="Mount Kopaonik 2" />

              <section lang="en">
                <p>
                  In addition to the name <em>Silver Mountain</em>, Kopaonik is also known as the <em>Sunny Mountain</em>, with about
                  <strong>200 sunny days a year</strong>, the most of any mountain in Serbia. During <strong>July and August</strong>,
                  it records around <strong>240 hours of sunshine</strong>. The <strong>snow cover</strong> lasts on average for
                  <strong>six months</strong>, with the shortest period being <strong>180 days</strong> and the longest reaching up to <strong>230 days</strong>.
                  The lowest temperatures are recorded in <strong>January and February</strong>, when they drop to around <em>-5.5°C</em>.
                </p>
              </section>

              <img srcSet={`${kopaonik33} 450w, ${kopaonik3}`} alt="Mount Kopaonik 3" />

              <section lang="en">
                <p>
                  <strong>Kopaonik</strong> became a popular venue for <strong>ski competitions</strong> as early as <strong>1935</strong>,
                  but the tradition was interrupted in <strong>1941</strong> due to the start of <strong>World War II</strong>.
                  During the war, the <em>mountain lodge</em> was completely destroyed. In <strong>1948</strong>, a new lodge was built on the same site,
                  named <strong>Olga Dedijer</strong> in honor of a physician and participant in the <strong>national liberation struggle</strong>.
                  In <strong>March 1984</strong>, Kopaonik hosted the <strong>European Ski Cup</strong>, earning it the status of an
                  <em>international sports center</em>.
                </p>
              </section>

              <img srcSet={`${kopaonik44} 450w, ${kopaonik4}`} alt="Mount Kopaonik 4" />

              <section lang="en">
                <p>
                  <strong>Kopaonik</strong> offers a wide variety of <strong>accommodation</strong> – hotels, villas, private houses, and apartments of various categories.
                  Most hotels are located <strong>near the ski slopes</strong>, while those further away offer <em>organized transport</em> to the ski area.
                  In addition to basic lodging, many hotels feature <strong>swimming pools</strong>, <strong>fitness centers</strong>,
                  <strong>spa and wellness services</strong>, as well as <strong>children’s playrooms</strong>.
                  Regardless of your preferences or budget, you're sure to find <em>suitable accommodation</em> on Kopaonik.
                </p>
              </section>

              <img srcSet={`${kopaonik55} 450w, ${kopaonik5}`} alt="Mount Kopaonik 5" />

              <section lang="en">
                <p>
                  The <strong>ski season</strong> on Kopaonik usually lasts from <strong>early December</strong> to <strong>late April</strong>.
                  Most slopes are equipped with <strong>artificial snow systems</strong>. There are <strong>25 ski lifts</strong> and <strong>2 conveyor belts</strong>,
                  covering a total system of <strong>22 km</strong>, capable of transporting over <strong>30,000 skiers per hour</strong>.
                  The longest run is <strong>Krčmar</strong> at <strong>1902 meters</strong>, and the total length of all slopes is <strong>62 km</strong>.
                  The mountain features trails for both <strong>alpine</strong> and <strong>Nordic skiing</strong>, with Nordic trails totaling <strong>20 km</strong>.
                  There are also <strong>three FIS-certified tracks</strong> for slalom and giant slalom. The slopes <strong>Pančić's Peak</strong>,
                  <strong>Karaman Greben</strong>, and <strong>Malo Jezero</strong> are equipped with <strong>lighting</strong> for <em>night skiing</em>.
                  Once a week, one of these slopes turns into a <strong>sledding track</strong>, offering <em>fun for visitors of all ages</em>.
                  For beginners, there’s a <strong>ski school</strong> with <em>group and individual lessons</em>. Group sessions are popular with children and companies
                  for <strong>team building</strong>, offering extended instructor time at more affordable prices. For the youngest, there is a <strong>ski kindergarten</strong>,
                  a safe environment where, <em>through play and fun</em>, children can learn their first skiing steps with the help of instructors.
                </p>
              </section>

              <img srcSet={`${kopaonik66} 450w, ${kopaonik6}`} alt="Mount Kopaonik 6" />

              <section lang="en">
                <p>
                  For those seeking a <strong>break from skiing</strong> or some added <em>variety</em> in their stay, Kopaonik offers many other activities:
                  a <strong>bobsled track</strong>, <strong>panoramic cable car rides</strong>, <strong>paragliding</strong>, and <strong>zip-lining</strong>.
                  There are also well-maintained <strong>hiking and trekking trails</strong>. The <strong>Adventure Park</strong> spans <strong>2000 m²</strong>,
                  divided into zones based on age, and there's a specially equipped <strong>children’s playground</strong> for the youngest visitors.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default PlaninaKopaonik;