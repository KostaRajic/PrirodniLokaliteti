/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import gazivode1 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/desktop/gazivodskoJezero1.jpg";
import gazivode2 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/desktop/gazivodskoJezero2.jpg";
import gazivode3 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/desktop/gazivodskoJezero3.jpg";
import gazivode4 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/desktop/gazivodskoJezero4.jpg";
import gazivode11 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/mobile/MgazivodskoJezero1.jpg";
import gazivode22 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/mobile/MgazivodskoJezero2.jpg";
import gazivode33 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/mobile/MgazivodskoJezero3.jpg";
import gazivode44 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/mobile/MgazivodskoJezero4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const GazivodskoJezero = () => {
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

        <title>{switchLanguage === 'rs' ? "Gazivodsko jezero – Veštačko jezero i kulturno blago | Serbia Wonders" : "Gazivode Lake – Artificial Lake and Cultural Heritage | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Gazivodsko jezero je najveće veštačko jezero na Kosovu i Metohiji, nastalo pregrađivanjem reke Ibar. Poznato po brani visokoj 107 metara, ribolovu, kupalištima, i arheološkim nalazištima srednjovekovne Srbije."
            :
            "Gazivode Lake is the largest artificial reservoir in Kosovo and Metohija, created by damming the Ibar River. Known for its 107-meter dam, recreational fishing, and underwater archaeological discoveries from medieval Serbia."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Gazivodsko jezero, reka Ibar, Zubin Potok, Kosovska Mitrovica, veštačko jezero, brana, hidroelektrana, arheologija, kraljica Jelena Anžujska, manastir Čkilje, ribolov, Bogojavljenski krst, turistička destinacija, Gazivode"
            :
            "Gazivode Lake, Ibar River, Zubin Potok, artificial lake, dam, hydroelectric plant, underwater archaeology, Queen Helen of Anjou, medieval Serbia, Čkilje Monastery, fishing, swimming, cultural heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/gazivodsko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/gazivodsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/gazivodsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/gazivodsko-jezero"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(mitrovackiOkrugPathRoutes.home(switchLanguage))} style={{ fill: "white" }} />
        <header></header>
        <img srcSet={`${gazivode11} 450w, ${gazivode1} `} alt="Gazivodsko Jezero 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Gazivodsko Jezero</h1>

              <section lang="sr">
                <p>
                  <strong>Gazivodsko jezero</strong> je veštačko jezero koje se nalazi na severu <strong>Kosova i Metohije</strong>, u blizini <strong>Kosovske Mitrovice</strong>. Nastalo je 1977. godine pregrađivanjem reke <strong>Ibar</strong> u njenom gornjem toku. Predstavlja značajnu turističku destinaciju, posebno popularnu tokom plivanja za <em>Bogojavljenski krst</em>.
                </p>
              </section>

              <img srcSet={`${gazivode22} 450w, ${gazivode2}`} alt="Gazivodsko Jezero 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Izgradnju jedne od najvećih brana sa glinenom osnovom u Evropi izvela je firma <strong>Hidrotehnika-Hidroenergetika</strong> iz Beograda između 1973. i 1977. godine, po projektu firme <strong>Energoprojekt</strong>. Jezero se prostire na teritorijama opštine <strong>Tutin</strong> (jugozapadna Srbija) i <strong>Zubin Potok</strong> (sever Kosova). Iznad jezera se uzdižu planine <strong>Mokra Gora</strong>, a u njihovom podnožju nalaze se manastiri <strong>Crna Reka</strong> i <strong>Rogozna</strong>.
                </p>
                <p>
                  Jezero je dugačko <strong>24 kilometra</strong>. Visina brane je <strong>107 metara</strong>, dok je u osnovi široka <strong>460 metara</strong>, a duga <strong>408 metara</strong>. Osnovna namena je <strong>navodnjavanje Kosovske nizije</strong>, a poseduje i manju hidroelektranu u naselju <strong>Gazivode</strong>.
                </p>
              </section>

              <img srcSet={`${gazivode33} 450w, ${gazivode3}`} alt="Gazivodsko Jezero 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Sistem kanala preusmerava vodu iz Gazivoda do <strong>Gračaničkog jezera</strong>, odakle se snabdeva <strong>Priština</strong>. Takođe se koristi za hlađenje u <strong>TE Obilić</strong>. Most preko jezera izgrađen je između 1987. i 1989. godine.
                </p>
                <p>
                  Iako duž obale nema razvijenih ugostiteljskih objekata, <strong>jezero privlači veliki broj posetilaca</strong>. Ribolovci dolaze tokom cele godine, jer je voda bogata ribom. Tokom leta, jezero posećuju kupači iz <strong>obližnjih sela</strong>, <strong>Zubinog Potoka</strong>, <strong>Kosovske Mitrovice</strong>, <strong>Novog Pazara</strong>, ali i iz udaljenijih krajeva <strong>Kosova i Metohije</strong>.
                </p>
              </section>

              <img srcSet={`${gazivode44} 450w, ${gazivode4}`} alt="Gazivodsko Jezero 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Tokom 2017. i 2018. godine, međunarodni tim arheologa sproveo je <strong>podvodna istraživanja</strong> na Gazivodama. Otkriveni su brojni <strong>spomenici srednjovekovne srpske kulture</strong>, među kojima su: ostaci <strong>palate kraljice Jelene Anžujske</strong>, <strong>manastir Čkilje</strong>, <strong>zvonik iz 13. veka</strong>, dve srednjovekovne crkve i <strong>devet rimskih nekropola</strong>.
                </p>
                <p>
                  Takođe su otkriveni ostaci <strong>škole za dame</strong> i delovi <strong>dvorca</strong> u potopljenom selu <strong>Brnjaci</strong>, odakle je kraljica Jelena upravljala teritorijama <strong>Zete</strong>, <strong>Trebinja</strong>, <strong>Plava</strong> i <strong>Pojibarja</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Gazivode Lake</h1>
              
              <section lang="en">
                <p>
                  <strong>Gazivode Lake</strong> is an artificial lake located in the northern part of <strong>Kosovo and Metohija</strong>, near <strong>Mitrovica</strong>. It was created in 1977 by damming the <strong>Ibar River</strong> in its upper course. It is a popular tourist destination, especially known for the Epiphany cross swimming event.
                </p>
              </section>

              <img srcSet={`${gazivode22} 450w, ${gazivode2}`} alt="Gazivode Lake 2" loading="lazy" />

              <section lang="en">
                <p>
                  One of the largest earth-fill dams in Europe was constructed by the company <strong>Hidrotehnika-Hidroenergetika</strong> from Belgrade between 1973 and 1977, following the design of <strong>Energoprojekt</strong>. The lake stretches across the municipalities of <strong>Tutin</strong> (southwestern Serbia) and <strong>Zubin Potok</strong> (northern Kosovo). Above the lake rise the <strong>Mokra Gora</strong> mountains, at the foot of which lie the monasteries of <strong>Crna Reka</strong> and <strong>Rogozna</strong>.
                </p>
                <p>
                  The lake is <strong>24 kilometers</strong> long. The dam’s height is <strong>107 meters</strong>, with a base width of <strong>460 meters</strong> and length of <strong>408 meters</strong>. Its primary purpose is the <strong>irrigation of the Kosovo plain</strong>, and it also has a small hydroelectric power plant in the settlement of <strong>Gazivode</strong>.
                </p>
              </section>

              <img srcSet={`${gazivode33} 450w, ${gazivode3}`} alt="Gazivode Lake 3" loading="lazy" />

              <section lang="en">
                <p>
                  A system of canals diverts water from Gazivode to <strong>Graçanica Lake</strong>, which supplies the city of <strong>Pristina</strong>. The water is also used for cooling the <strong>Obilić Thermal Power Plant</strong>. The bridge over the lake was built between 1987 and 1989.
                </p>
                <p>
                  Although there are no developed hospitality facilities along the shore, the <strong>lake attracts many visitors</strong>. Fishermen come all year round due to its rich fish population. During summer, swimmers visit from <strong>nearby villages</strong>, <strong>Zubin Potok</strong>, <strong>Mitrovica</strong>, <strong>Novi Pazar</strong>, and even from more distant parts of <strong>Kosovo and Metohija</strong>.
                </p>
              </section>

              <img srcSet={`${gazivode44} 450w, ${gazivode4}`} alt="Gazivode Lake 4" loading="lazy" />

              <section lang="en">
                <p>
                  In 2017 and 2018, an international team of archaeologists conducted <strong>underwater research</strong> at Gazivode Lake. They discovered numerous <strong>medieval Serbian cultural monuments</strong>, including the remains of the <strong>palace of Queen Jelena Anžujska</strong>, the <strong>Čkilje monastery</strong>, a <strong>13th-century bell tower</strong>, two medieval churches, and <strong>nine Roman necropolises</strong>.
                </p>
                <p>
                  Among the underwater findings were remains of a <strong>ladies’ school</strong> and parts of a <strong>castle</strong> in the submerged village of <strong>Brnjaci</strong>, from where Queen Jelena ruled the territories of <strong>Zeta</strong>, <strong>Trebinje</strong>, <strong>Plav</strong>, and <strong>Pojibarje</strong>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default GazivodskoJezero;