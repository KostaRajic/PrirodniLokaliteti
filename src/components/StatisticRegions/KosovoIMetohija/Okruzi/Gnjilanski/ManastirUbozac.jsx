/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import ubozac1 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/desktop/ubozac1.jpg";
import ubozac2 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/desktop/ubozac2.jpg";
import ubozac3 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/desktop/ubozac3.jpg";
import ubozac4 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/desktop/ubozac4.jpg";
import ubozac11 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/mobile/Mubozac1.jpg";
import ubozac22 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/mobile/Mubozac2.jpg";
import ubozac33 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/mobile/Mubozac3.jpg";
import ubozac44 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/ManastirUbozac/mobile/Mubozac4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { gnjilanskiOkrugPathRoutes } from "./GnjilanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirUbozac = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Ubožac – Svetinja Novog Brda | Serbia Wonders" : "Ubožac Monastery – The Sanctuary of Novo Brdo | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Ubožac, poznat i kao Rđavac, nalazi se kod sela Močare. Podignut je 1548. godine od strane arhiepiskopa Prohora i predstavlja značajan primer arhitekture 16. veka. Posvećen je Vavedenju Presvete Bogorodice."
            :
            "Ubožac Monastery, also known as Rđavac, is located near the village of Močare. Built in 1548 by Archbishop Prohor, it is one of the most representative examples of 16th-century Serbian monastic architecture. Dedicated to the Entry of the Most Holy Theotokos."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Ubožac, Rđavac, Močare, Novi Brdo, arhiepiskop Prohor, Ana Neda, Stefan Dečanski, manastirske ruševine, Vavedenje Presvete Bogorodice, Savatije, Paisije, srpski manastiri, 16. vek"
            :
            "Ubozac Monastery, Rđavac, Močare, Novo Brdo, Archbishop Prohor, Ana Neda, Stefan Dečanski, Entry of the Theotokos, Patriarch Savatije, Paisije, Serbian monasteries, 16th century, Orthodox heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/manastir-ubozac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/manastir-ubozac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/manastir-ubozac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/manastir-ubozac"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(gnjilanskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${ubozac11} 450w, ${ubozac1} `} alt="Ostaci Manastira Ubožac" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h2>Ostaci Manastira Ubožac</h2>

              <section lang="sr">
                <p>
                  <strong>Ubožac</strong> se nalazi u ataru sela <strong>Močare</strong>, blizu <strong>Novog Brda</strong>. Danas je poznat pod imenom <strong>Rđavac</strong>.
                  <br /><br />
                  Ranije se smatralo da je manastir podignut sredinom 14. veka i da je predstavljao prethodnicu <em>moravskog stila</em>.
                  Prema predanju, ktitor je bila <strong>Ana Neda</strong>, sestra kralja <strong>Stefana Dečanskog</strong>.
                  <br /><br />
                  Međutim, najnovija istraživanja ukazuju da je manastir sagrađen sredinom 16. veka, najverovatnije <strong>1548. godine</strong>,
                  a kao ktitor se pominje <strong>ohriđanski arhiepiskop Prohor</strong>.
                </p>
              </section>

              <img srcSet={`${ubozac22} 450w, ${ubozac2}`} alt="Ostaci Manastira Ubožac 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Manastirski kompleks je danas sačuvan u ruševinama i predstavlja jedan od najreprezentativnijih primera gradnje iz 16. veka.
                  Crkva manastira posvećena je <strong>Vavedenju Presvete Bogorodice</strong> i građena je od <em>kamena, bigre i opeke</em>.
                  Iako je nekada bila oslikana freskama, danas <strong>nema sačuvanih tragova</strong>.
                  <br /><br />
                  Pored impozantne crkve, u kompleksu se nalazila i <strong>spratna građevina</strong> — prizemlje je služilo ekonomskim funkcijama,
                  dok je na spratu najverovatnije bila <strong>trpezarija</strong>. Verovatno su postojale i <em>monaške kapele</em>.
                </p>
              </section>

              <img srcSet={`${ubozac33} 450w, ${ubozac3}`} alt="Ostaci Manastira Ubožac 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Zabeleženo je da je <strong>1586. godine</strong> u Ubošcu preminuo i bio sahranjen <strong>pećki patrijarh Savatije</strong>.
                  Nakon toga, manastir je bio posebno vezan za <strong>patrijarha Paisija</strong>, koji ga je više puta posećivao.
                  <br /><br />
                  Manastir je verovatno <strong>napušten krajem 17. veka</strong> i od tada nije bilo obnova.
                </p>
              </section>

              <img srcSet={`${ubozac44} 450w, ${ubozac4}`} alt="Ostaci Manastira Ubožac 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Arheološki i konzervatorski radovi na manastiru sprovedeni su u periodu između <strong>1963. i 1967. godine</strong>.
                  <br /><br />
                  U poslednjim godinama, raste interesovanje javnosti, <strong>pravoslavnih vernika</strong> i ljubitelja istorije za ovu svetinju.
                  Posetioci sve češće izražavaju želju da manastir Ubožac bude <strong>obnovljen u budućnosti</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>


              <h2>Remains of the Ubožac Monastery</h2>

              <section lang="en">
                <p>
                  <strong>Ubožac</strong> is located in the area of the village <strong>Močare</strong>, near <strong>Novo Brdo</strong>. Today, it is known as <strong>Rđavac</strong>.
                  <br /><br />
                  It was previously believed that the monastery was built in the mid-14th century and represented a forerunner of the <em>Morava style</em>.
                  According to tradition, its founder was <strong>Ana Neda</strong>, sister of King <strong>Stefan Dečanski</strong>.
                  <br /><br />
                  However, the most recent research indicates that the monastery was built in the mid-16th century, most likely in <strong>1548</strong>,
                  and its founder is believed to have been the <strong>Archbishop of Ohrid, Prohor</strong>.
                </p>
              </section>

              <img srcSet={`${ubozac22} 450w, ${ubozac2}`} alt="Remains of Ubožac Monastery 2" loading="lazy" />

              <section lang="en">
                <p>
                  The monastic complex is preserved in ruins and represents one of the most notable examples of 16th-century construction.
                  The monastery church is dedicated to the <strong>Presentation of the Most Holy Theotokos</strong> and was built using <em>stone, tufa, and brick</em>.
                  Although once decorated with frescoes, <strong>no traces of them remain today</strong>.
                  <br /><br />
                  In addition to the imposing church, the complex included a <strong>two-story building</strong> — the ground floor served economic purposes,
                  while the upper floor likely housed the <strong>refectory</strong>. It is also believed that there were <em>monastic chapels</em>.
                </p>
              </section>

              <img srcSet={`${ubozac33} 450w, ${ubozac3}`} alt="Remains of Ubožac Monastery 3" loading="lazy" />

              <section lang="en">
                <p>
                  It was recorded that in <strong>1586</strong>, the <strong>Patriarch of Peć, Savatije</strong>, died and was buried at Ubožac.
                  After that, the monastery maintained a special connection with <strong>Patriarch Paisije</strong>, who visited the holy site multiple times.
                  <br /><br />
                  The monastery was likely <strong>abandoned by the end of the 17th century</strong> and has not been restored since.
                </p>
              </section>

              <img srcSet={`${ubozac44} 450w, ${ubozac4}`} alt="Remains of Ubožac Monastery 4" loading="lazy" />

              <section lang="en">
                <p>
                  Archaeological and conservation work at the monastery was carried out between <strong>1963 and 1967</strong>.
                  <br /><br />
                  In recent years, there has been growing interest from the general public, <strong>Orthodox believers</strong>, and history enthusiasts in this sacred site.
                  Visitors increasingly express the desire for the Ubožac Monastery to be <strong>restored in the future</strong>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ManastirUbozac;