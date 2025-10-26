/* eslint-disable react/no-unknown-property */
import peskara1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara2.jpg";
import peskara2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara3.jpg";
import peskara3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara4.jpg";
import peskara4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara5.jpg";
import peskara5 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara6.jpg";
import peskara11 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara2.jpg";
import peskara22 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara3.jpg";
import peskara33 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara4.jpg";
import peskara44 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara5.jpg";
import peskara55 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const KupalistePeskara = () => {
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
            ? 'Kupalište Peskara | Letnja destinacija uz vodu | Serbia Wonders'
            : 'Peskara Beach | Summer Lakeside Destination | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Kupalište Peskara, smešteno uz čistu vodu i peskovitu obalu, nudi idealne uslove za letnji odmor, sport, rekreaciju i dnevne izlete u prirodi.'
              : 'Peskara Beach, located by a clear lake with a sandy shore, offers perfect conditions for summer relaxation, sports, recreation, and day trips in nature.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Kupalište Peskara, Peskara Zrenjanin, plaža, letnji odmor, jezero, kajak, kupanje, odbojka na pesku, rekreacija, priroda, turizam'
              : 'Peskara Beach, Zrenjanin beach, summer vacation, lake, kayaking, swimming, beach volleyball, recreation, nature, tourism'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/kupaliste-peskara`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/kupaliste-peskara"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/kupaliste-peskara"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/kupaliste-peskara"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(srednjeBanatskiPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${peskara55} 450w, ${peskara5} `} alt="Kupalište peskara 1" />

        {switchLanguage === 'rs' ?
          (

            <>
              <h1>Kupalište peskara</h1>

              <section lang="sr">
                <p>
                  Kupalište je smešteno uz obalu <strong>Peskarske bare</strong>, odnosno, to je veće vodenoečnog područja koje se koristi za <strong>letnji odmor</strong>.
                </p>
                <p>
                  Voda u ovom području je obično <strong>čista</strong>, a obala je uređena za <strong>prijatan boravak</strong> posetilaca.
                </p>
                <p>
                  Plaža je uglavnom <strong>peskovita</strong>, odakle potiče i naziv „<strong>Peskara</strong>“, a pruža dovoljno prostora za <strong>uživanje u sunčanju i kupanju</strong>.
                </p>
              </section>

              <img srcSet={`${peskara22} 450w, ${peskara2} `} alt="Kupalište peskara 2" />

              <section lang="sr">
                <p>
                  Kupalište je <strong>dobro opremljeno</strong> sa potrebnim sadržajima, uključujući <strong>ležaljke</strong>, <strong>tuševe</strong>, <strong>kafiće</strong> i <strong>restorane</strong>, kao i <strong>prodavnice sa potrebštinama za turiste</strong>.
                </p>
                <p>
                  Na obali se nalaze i <strong>sportski tereni</strong> za različite aktivnosti poput <strong>odbojke na pesku</strong>, <strong>košarke</strong> ili <strong>fudbala</strong>, što pruža mogućnosti za aktivno uživanje u prirodi.
                </p>
              </section>


              <img srcSet={`${peskara33} 450w, ${peskara3} `} alt="Kupalište peskara 3" />

              <section lang="sr">
                <p>
                  Pored <strong>kupanja</strong>, posetioci mogu uživati u različitim rekreativnim aktivnostima poput <strong>vožnje čamcem</strong> ili <strong>kajakom</strong> po jezeru, <strong>biciklističkim</strong> i <strong>pešačkim turama</strong>, ili pak <em>opuštanju u prirodi</em>.
                </p>
                <p>
                  <strong>Peskara</strong> je popularno i lako dostupno odredište, što je čini pogodnom za <em>dnevne izlete</em>. Zbog svoje blizine <strong>Zrenjaninu</strong> i drugim većim gradovima Vojvodine, često je odredište za <strong>letnje vikende</strong>, ali i za <em>dnevne odmore</em>.
                </p>
              </section>

              <img
                srcSet={`${peskara44} 450w, ${peskara4} `}
                alt="Kupalište peskara 4"
              />

              <section lang="sr">
                <p>
                  Kupalište <strong>Peskara</strong> ima veliki značaj za lokalnu zajednicu jer privlači posetioce, podstičući razvoj turizma i povezane industrije.
                </p>
                <p>
                  Takođe doprinosi promociji <em>prirodnih lepota</em> i sportskih aktivnosti u regionu.
                </p>
              </section>

              <img srcSet={`${peskara11} 450w, ${peskara1} `} alt="Kupalište peskara 4" />

              <section lang="sr">
                <p>
                  Kupalište <strong>Peskara</strong> je atraktivno odredište koje pruža posetiocima savršen spoj prirode, sporta i rekreacije, idealno za opuštanje i uživanje u letnjim mesecima.
                </p>
                <p>
                  Zbog svoje blizine <em>Zrenjaninu</em>, lako je dostupno i predstavlja popularnu destinaciju za sve one koji žele da se opuste u prirodnom okruženju.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Peskara Beach</h1>

              <section lang="en">
                <p>
                  The beach is located on the shore of the <strong>Peskara pond</strong>, which is a larger water area used for <strong>summer relaxation</strong>.
                </p>
                <p>
                  The water in this area is usually <strong>clean</strong>, and the shore is arranged for a <strong>pleasant stay</strong> of visitors.
                </p>
                <p>
                  The beach is mostly <strong>sandy</strong>, from which its name „<strong>Peskara</strong>“ originates, providing plenty of space for <strong>sunbathing and swimming</strong>.
                </p>
              </section>

              <img srcSet={`${peskara22} 450w, ${peskara2} `} alt="Peskara Beach 2" />

              <section lang="en">
                <p>
                  The beach is <strong>well-equipped</strong> with necessary amenities, including <strong>deck chairs</strong>, <strong>showers</strong>, <strong>cafés</strong>, and <strong>restaurants</strong>, as well as <strong>shops with tourist essentials</strong>.
                </p>
                <p>
                  On the shore, there are also <strong>sports courts</strong> for various activities such as <strong>beach volleyball</strong>, <strong>basketball</strong>, or <strong>football</strong>, offering opportunities for active enjoyment in nature.
                </p>
              </section>

              <img srcSet={`${peskara33} 450w, ${peskara3} `} alt="Peskara Beach 3" />

              <section lang="en">
                <p>
                  Besides <strong>swimming</strong>, visitors can enjoy various recreational activities such as <strong>boating</strong> or <strong>kayaking</strong> on the lake, <strong>cycling</strong> and <strong>hiking tours</strong>, or simply <em>relaxing in nature</em>.
                </p>
                <p>
                  <strong>Peskara</strong> is a popular and easily accessible destination, making it suitable for <em>day trips</em>. Due to its proximity to <strong>Zrenjanin</strong> and other larger cities in Vojvodina, it is often a destination for <strong>summer weekends</strong> as well as for <em>daytime getaways</em>.
                </p>
              </section>

              <img
                srcSet={`${peskara44} 450w, ${peskara4} `}
                alt="Peskara Beach 4"
              />

              <section lang="en">
                <p>
                  The <strong>Peskara</strong> beach holds great importance for the local community as it attracts visitors, encouraging the development of tourism and related industries.
                </p>
                <p>
                  It also contributes to promoting the <em>natural beauty</em> and sporting activities in the region.
                </p>
              </section>

              <img srcSet={`${peskara11} 450w, ${peskara1} `} alt="Peskara Beach 1" />

              <section lang="en">
                <p>
                  The <strong>Peskara</strong> beach is an attractive destination that offers visitors the perfect combination of nature, sports, and recreation, ideal for relaxation and enjoyment during the summer months.
                </p>
                <p>
                  Due to its proximity to <em>Zrenjanin</em>, it is easily accessible and represents a popular destination for those who want to unwind in a natural environment.
                </p>
              </section>

            </>

          )}


      </div>
    </>
  );
};


export default KupalistePeskara;