/* eslint-disable react/no-unknown-property */
import palicko1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/Palić4.jpg";
import palicko2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/Palić2.jpg";
import palicko3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/PalićFilmFestival.jpg";
import palicko4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/Palićzoo.jpg";
import palicko5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/Palić3.jpg";
import palicko11 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalić4.jpg";
import palicko22 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalić2.jpg";
import palicko33 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalićFilmFestival.jpg";
import palicko44 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalićzoo.jpg";
import palicko55 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalić3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PalićkoJezero = () => {
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
            ? 'Palićko jezero | Letnji turizam, priroda i događaji u Subotici'
            : 'Palic Lake | Summer Tourism, Nature & Events near Subotica'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Palićko jezero, najveće prirodno jezero u Srbiji, nudi uređene plaže, prirodu, zabavu, festival filma i jedinstveni ZOO vrt. Idealno za sve uzraste i interesovanja!'
              : 'Palic Lake, the largest natural lake in Serbia, offers beaches, nature, entertainment, a film festival, and a unique zoo. Ideal for all ages and interests!'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Palićko jezero, Subotica, turizam Palić, Festival evropskog filma, ZOO vrt, priroda Srbija, plaže Vojvodina, letovanje Srbija, smeštaj Palić, kulturni događaji'
              : 'Palic Lake, Subotica tourism, Palic Film Festival, Zoo Park Palic, nature Serbia, Vojvodina beaches, summer Serbia, accommodation Palic, cultural events'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/palicko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/palicko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/palicko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/palicko-jezero"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(servernoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${palicko22} 450w, ${palicko2} `} alt="palicko jezero 5" />

        {switchLanguage === 'rs' ?
          (

            <><h2>Palicko jezero</h2>

              <section lang="sr">
                <p>
                  <strong>Palićko jezero</strong> se nalazi u Vojvodini, na 8 kilometara od Subotice, jednog od najlepših gradova u Srbiji, pa svi posetioci jezera lako mogu da odu i vreme provedu i u ovom gradu. To je najveće prirodno jezero u Srbiji. Jezero, prečnika skoro 5 km i najveće dubine 3.5 metra, ima tri uređene plaže, toplu vodu i prijatan ambijent.
                </p>
              </section>

              <img srcSet={`${palicko11} 450w, ${palicko1} `} alt="palicko jezero 1" />

              <section lang="sr">
                <p>
                  <strong>Obala jezera</strong> je duga 17 kilometara i uređena je celom svojom dužinom.
                  Zbog ovoga, atraktivne su i pešačke ture, ali i pecanje, posmatranje ptica, kao i obilazak parka prirode oko samog jezera.
                </p>
              </section>

              <img srcSet={`${palicko55} 450w, ${palicko5} `} alt="palicko jezero 2" />

              <section lang="sr">
                <p>
                  Kada se ovome dodaju i novoizgrađeni hoteli, restorani, manje vile različitih smeštajnih kapaciteta, kao i poslovično dobar noćni život,
                  <strong>Palićko jezero</strong> postaje mesto koje ne smete propustiti, koliko god godina da imate i kakva god da su vam interesovanja!
                </p>
              </section>

              <img srcSet={`${palicko33} 450w, ${palicko3} `} alt="palicko jezero 3" />

              <section lang="sr">
                <p>
                  U letnjim mesecima, na Paliću se održava i Festival evropskog filma, pa ovo mesto postaje stecište mnogih, pre svega, regionalnih filmskih stvaralaca, glumaca i kritičara.
                  Zaljubljenici u <em>“sedmu umetnost”</em> ovde mogu uživati u prijatnom ambijentu gledajući najnovija filmska ostvarenja,
                  a jedna od glavnih specifičnosti festivala je i činjenica da je jedan od retkih manifestacija ovog tipa sa 100 odsto evropskim sadržajem.
                </p>
              </section>

              <img
                srcSet={`${palicko44} 450w, ${palicko4} `}
                alt="palicko jezero 4"
              />

              <section lang="sr">
                <p>
                  U neposrednoj blizini jezera se nalazi i atraktivni <strong>ZOO vrt</strong> u kome većina životinja nije smeštena u kaveze već slobodno šeta ograđenim delovima parka,
                  što ovo mesto čini veoma zanimljivim, pre svega za najmlađe, ali i za sve ljubitelje životinja.
                  Čak i ako ne odete u zoo, biljni i životinjski svet oko jezera će vas očarati i ostaviti bez daha.
                </p>
              </section>

            </>
          )
          :
          (
            <>
              <h2>Lake Palić</h2>

              <section lang="en">
                <p>
                  <strong>Lake Palić</strong> is located in Vojvodina, just 8 kilometers from Subotica, one of the most beautiful cities in Serbia, so visitors to the lake can easily visit and spend time in this city as well. It is the largest natural lake in Serbia. The lake, nearly 5 km in diameter and with a maximum depth of 3.5 meters, has three equipped beaches, warm water, and a pleasant atmosphere.
                </p>
              </section>

              <img srcSet={`${palicko11} 450w, ${palicko1} `} alt="Lake Palić 1" />

              <section lang="en">
                <p>
                  The <strong>lake shore</strong> stretches 17 kilometers and is maintained along its entire length.
                  Because of this, it is attractive for hiking tours, as well as fishing, bird watching, and exploring the nature park surrounding the lake.
                </p>
              </section>

              <img srcSet={`${palicko55} 450w, ${palicko5} `} alt="Lake Palić 2" />

              <section lang="en">
                <p>
                  When you add newly built hotels, restaurants, smaller villas with various accommodation capacities, and the characteristically good nightlife,
                  <strong>Lake Palić</strong> becomes a place you must not miss, no matter your age or interests!
                </p>
              </section>

              <img srcSet={`${palicko33} 450w, ${palicko3} `} alt="Lake Palić 3" />

              <section lang="en">
                <p>
                  In the summer months, the European Film Festival is held at Palić, making this place a gathering point primarily for regional filmmakers, actors, and critics.
                  Lovers of the <em>"seventh art"</em> can enjoy a pleasant atmosphere while watching the latest film productions,
                  and one of the main unique features of the festival is that it is one of the few events of its kind with 100 percent European content.
                </p>
              </section>

              <img srcSet={`${palicko44} 450w, ${palicko4} `} alt="Lake Palić 4" />

              <section lang="en">
                <p>
                  In the immediate vicinity of the lake, there is also an attractive <strong>zoo garden</strong> where most animals are not kept in cages but freely roam enclosed parts of the park,
                  making this place very interesting, especially for the youngest visitors, but also for all animal lovers.
                  Even if you don’t visit the zoo, the plant and animal life around the lake will enchant you and leave you breathless.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default PalićkoJezero;