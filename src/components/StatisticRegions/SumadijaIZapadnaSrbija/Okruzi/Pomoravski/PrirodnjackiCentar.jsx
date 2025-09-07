/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import prirodnjackiCentar1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/desktop/prirodnjackiCentar1.jpg";
import prirodnjackiCentar2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/desktop/prirodnjackiCentar2.jpg";
import prirodnjackiCentar3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/desktop/prirodnjackiCentar3.jpg";
import prirodnjackiCentar4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/desktop/prirodnjackiCentar4.jpg";
import prirodnjackiCentar5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/desktop/prirodnjackiCentar5.jpg";
import prirodnjackiCentar11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/mobile/MprirodnjackiCentar1.jpg";
import prirodnjackiCentar22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/mobile/MprirodnjackiCentar2.jpg";
import prirodnjackiCentar33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/mobile/MprirodnjackiCentar3.jpg";
import prirodnjackiCentar44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/mobile/MprirodnjackiCentar4.jpg";
import prirodnjackiCentar55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/mobile/MprirodnjackiCentar5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PrirodnjackiCentar = () => {
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
            ? "Prirodnjački centar Svilajnac – Dino park, mamut Kika i svet nauke | Srbija Wonders"
            : "Natural History Center Svilajnac – Dino Park, Mammoth Kika & Science for Families | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Prirodnjački centar u Svilajncu je savršeno mesto za porodičnu zabavu i edukaciju – uz Dino park, replike dinosaurusa, mamuta Kiku, postavke o vulkanima, nebeskom kamenju i još mnogo toga!"
              : "Natural History Center in Svilajnac is the perfect destination for family fun and education – featuring a Dino Park, full-size dinosaur replicas, Mammoth Kika, volcano models, meteorites and more!"}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Prirodnjački centar Svilajnac, Dino park, mamut Kika, porodični izlet, nauka za decu, izložba dinosaurusa, prirodnjački muzej Srbija, turistička atrakcija Svilajnac"
              : "Natural History Center Svilajnac, Dino Park, Mammoth Kika, family trip, science for kids, dinosaur exhibition, natural history museum Serbia, tourist attraction Svilajnac"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/prirodnjacki-centar`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/prirodnjacki-centar"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/prirodnjacki-centar"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/prirodnjacki-centar"
        />


      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pomoravskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${prirodnjackiCentar11} 450w, ${prirodnjackiCentar1} `} alt="Prirodnjački Centar u Svilajncu 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2 style={{ color: "white" }}>Prirodnjački Centar u Svilajncu</h2>

              <section lang="sr">
                <p>
                  <strong>Prirodnjački centar u Svilajncu</strong> je savršeno odredište za ugodno i
                  zabavno popodne sa porodicom, nudeći sjajan spoj <em>obrazovanja, nauke,
                    zabave i turizma</em>. Ovaj jedinstveni kompleks obuhvata prostrani izložbeni
                  prostor sa devet stalnih postavki koje pokrivaju razne teme iz prirodnih
                  nauka, kao i zabavni <strong>Dino park</strong> na otvorenom, u kojem se nalazi više od
                  <strong>30 replika dinosaurusa</strong> u prirodnoj veličini.
                </p>
              </section>

              <img srcSet={`${prirodnjackiCentar22} 450w, ${prirodnjackiCentar2} `} alt="Prirodnjački Centar u Svilajncu 2" />

              <section lang="sr">
                <p>
                  Osim već pomenutih, Prirodnjački centar nudi i razgledanje postavki kao
                  što su <strong>Svet minerala i stena</strong>, <em>Geološki vremeplov</em>, <strong>Biodiverzitet i
                    Geodiverzitet Srbije</strong>, <strong>Vulkan</strong> i <em>Nebesko kamenje</em>. Među najzanimljivijim
                  postavkama, pored one koja se bavi životom i izumiranjem dinosaurusa,
                  izdvaja se i postavka <strong>Mamut "Kika"</strong>, koja privlači posebnu pažnju
                  posetilaca.
                </p>
              </section>

              <img srcSet={`${prirodnjackiCentar33} 450w, ${prirodnjackiCentar3} `} alt="Prirodnjački Centar u Svilajncu 3" />

              <section lang="sr">
                <p>
                  Izložba <strong>"Svet dinosaurusa"</strong> izaziva najveće interesovanje, naročito među
                  najmlađim posetiocima, jer su u posebnom delu Prirodnjačkog centra
                  postavljene replike dinosaurusa u prirodnoj veličini. Najveći deo centra
                  zauzima <em>Dino park</em>, koji se prostire na <strong>tri hektara</strong> i sadrži tridesetak
                  replika dinosaurusa u prirodnoj veličini. Pored toga, tu su <strong>suvenirnica</strong>,
                  <strong>igraonica</strong> i <em>maketa vulkana</em>, čineći ovu lokaciju savršenim mestom za
                  porodice.
                </p>
              </section>

              <img srcSet={`${prirodnjackiCentar44} 450w, ${prirodnjackiCentar4} `} alt="Prirodnjački Centar u Svilajncu 4" />

              <section lang="sr">
                <p>
                  Ova jedinstvena institucija zapošljava veliki broj ljudi koji se
                  svakodnevno brinu o održavanju objekta, kao i stručnog osoblja,
                  uključujući vodiče za posetioce svih uzrasta, ali i pedagoge koji rade
                  sa decom u igraonici.
                </p>
              </section>

              <img srcSet={`${prirodnjackiCentar55} 450w, ${prirodnjackiCentar5} `} alt="Prirodnjački Centar u Svilajncu 5" />

              <section lang="sr">
                <p>
                  <strong>Prirodnjački centar</strong> je otvoren svaki dan, uključujući vikende i
                  praznike, obično od <strong>10 do 18 časova</strong>, dok tokom letnjih meseci, u julu i
                  avgustu, radno vreme traje do <strong>20 časova</strong>. Centar se nalazi na svega <strong>7 km</strong>
                  od auto-puta (E75), uz regionalni put <em>Markovac-Svilajnac-Despotovac</em>, u
                  neposrednoj blizini kompleksa <strong>Sportskog-turističkog centra</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Natural History Center in Svilajnac</h2>

              <section lang="en">
                <p>
                  The <strong>Natural History Center in Svilajnac</strong> is a perfect destination for a pleasant and
                  fun afternoon with family, offering a great combination of <em>education, science,
                    entertainment, and tourism</em>. This unique complex includes a spacious exhibition
                  area with nine permanent displays covering various topics in natural
                  sciences, as well as an entertaining <strong>Dino Park</strong> outdoors, featuring more than
                  <strong>30 life-sized dinosaur replicas</strong>.
                </p>
              </section>

              <img srcSet={`${prirodnjackiCentar22} 450w, ${prirodnjackiCentar2} `} alt="Natural History Center in Svilajnac 2" />

              <section lang="en">
                <p>
                  In addition to the ones already mentioned, the Natural History Center also offers exhibitions such as
                  the <strong>World of Minerals and Rocks</strong>, <em>Geological Time Machine</em>, <strong>Biodiversity and
                    Geodiversity of Serbia</strong>, <strong>Volcano</strong>, and <em>Heavenly Stones</em>. Among the most interesting
                  exhibits, besides the one about the life and extinction of dinosaurs,
                  is the <strong>Mammoth "Kika"</strong> exhibit, which attracts special attention
                  from visitors.
                </p>
              </section>

              <img srcSet={`${prirodnjackiCentar33} 450w, ${prirodnjackiCentar3} `} alt="Natural History Center in Svilajnac 3" />

              <section lang="en">
                <p>
                  The <strong>"World of Dinosaurs"</strong> exhibition draws the greatest interest, especially among
                  the youngest visitors, because life-sized dinosaur replicas
                  are displayed in a special section of the Natural History Center. The largest part of the center
                  is occupied by the <em>Dino Park</em>, which covers <strong>three hectares</strong> and contains about thirty
                  life-sized dinosaur replicas. Additionally, there is a <strong>souvenir shop</strong>,
                  a <strong>playroom</strong>, and a <em>volcano model</em>, making this location perfect for
                  families.
                </p>
              </section>

              <img srcSet={`${prirodnjackiCentar44} 450w, ${prirodnjackiCentar4} `} alt="Natural History Center in Svilajnac 4" />

              <section lang="en">
                <p>
                  This unique institution employs a large number of people who
                  take care of the facility daily, as well as professional staff,
                  including guides for visitors of all ages, and educators working
                  with children in the playroom.
                </p>
              </section>

              <img srcSet={`${prirodnjackiCentar55} 450w, ${prirodnjackiCentar5} `} alt="Natural History Center in Svilajnac 5" />

              <section lang="en">
                <p>
                  The <strong>Natural History Center</strong> is open every day, including weekends and
                  holidays, usually from <strong>10 AM to 6 PM</strong>, while during the summer months, in July and
                  August, it stays open until <strong>8 PM</strong>. The center is located just <strong>7 km</strong>
                  from the highway (E75), along the regional road <em>Markovac-Svilajnac-Despotovac</em>, near
                  the <strong>Sports and Tourist Center</strong> complex.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default PrirodnjackiCentar;