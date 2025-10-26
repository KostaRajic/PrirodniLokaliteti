/* eslint-disable react/no-unknown-property */
import tisa1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/Tisa1.jpg";
import tisa2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/Tisa2.jpg";
import tisa3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/TIsa3.jpg";
import tisa4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/Tisa4.jpg";
import tisa5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Tisa/Tisa5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const RekaTisa = () => {
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
            ? 'Reka Tisa | Plovidba, priroda i istorija reke u Vojvodini'
            : 'Tisa River | Navigation, Nature & History of the River in Vojvodina'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Reka Tisa, jedna od najstarijih i najznačajnijih reka u Evropi, protiče kroz Vojvodinu, povezuje Banat, Bačku i Srem, i ima važnu ulogu u plovidbi i turizmu.'
              : 'The Tisa River, one of the oldest and most significant rivers in Europe, flows through Vojvodina, connecting Banat, Bačka, and Srem, and plays a major role in navigation and tourism.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Reka Tisa, Tisa Vojvodina, plovidba Tisa, priroda Vojvodina, rečni transport, Tisa Dunav, Banat Bačka granica, istorija Tise, Segedin poplava, reka Srbija'
              : 'Tisa River, Vojvodina rivers, Tisa navigation, Tisa Serbia, Danube tributary, river transport, Banat Backa border, Segedin flood, history of Tisa'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/tisa`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/tisa"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/tisa"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/tisa"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(servernoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img src={tisa1} alt="Tisa 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h1>
                Reka Tisa
              </h1>

              <section lang="sr">
                <p>
                  <strong>Tisa</strong> je ukupne dužine 966 kilometara i tipična je ravničarska reka.
                </p>
                <p>
                  Izvire u Karpatima i jedna je od najstarijih reka na svetu.
                </p>
                <p>
                  Tok Tise deli se na tri dela: gornji tok od izvora, gde nastaje spajanjem Bele i Crne Tise, do ušća Samoša,
                </p>
                <p>
                  zatim srednji tok, od ušća Samoša do ušća Moriša,
                </p>
                <p>
                  kao i donji tok, od ušća Moriša do ušća u Dunav kod Slankamena.
                </p>
              </section>


              <img src={tisa2} alt="Tisa 2" />

              <section lang="sr">
                <p>
                  U Srbiji tok Tise iznosi oko 164 kilometra, od ušća u Dunav do srpsko-mađarske granice.
                </p>
                <p>
                  Reka Tisa predstavlja prirodnu granicu između Bačke, na desnoj, i Banata na levoj obali,
                  a pošto dodiruje i Srem na ušću kod Starog Slankamena, predstavlja pravu vojvođansku reku.
                </p>
                <p>
                  Svojom širinom, Tisa predstavlja <strong>“žilu kucavicu”</strong> Vojvodine i mesto za odmor.
                </p>
              </section>


              <img src={tisa5} alt="Tisa 3" />

              <section lang="sr">
                <p>
                  U planinskom delu toka, <strong>Tisa</strong> je bistra i brza reka. Nedostatak jezera u oblastima Karpata utiče na to da su varijacije nivoa vode u Tisi izuzetno velike,
                  sa tipično tri godišnja poplavna perioda.
                </p>
                <p>
                  Ako se visok nivo vode u Tisi poklopi sa sličnom situacijom u Dunavu, <strong>Tisa nadire uzvodno</strong>, što izaziva velike poplave.
                  Takva situacija je razorila <em>Segedin</em> proleća 1879. godine.
                </p>
              </section>

              <img src={tisa3} alt="Tisa 4" />

              <section lang="sr">
                <p>
                  Zahvaljujući širini i dubini korita i maloj brzini proticanja, <strong>Tisa</strong> je na srednjem, a naročito donjem toku i pre realizovanih regulacionih radova, predstavljala plovni put od regionalnog značaja.
                </p>
                <p>
                  Tisa ima važnu ulogu u jeftinom rečnom transportu i na mađarskom i na srpskom delu toka.
                </p>
                <p>
                  Nakon drastičnog skraćivanja korita i uspostavljanja dirigovanog režima na najvećem delu toka, plovidba na srednjoj i donjoj Tisi je postala bezbednija.
                </p>
              </section>

              <img src={tisa4} alt="Tisa 5" />

              <section lang="sr">
                <p>
                  Pored povoljnih plovidbenih karakteristika i uslova plovidbe, <strong>Tisa</strong> predstavlja plovni put od izuzetnog značaja budući da je pritoka <em>Dunava</em>,
                  koji predstavlja deo Evropske vodne magistrale između Severnog i Crnog mora.
                </p>
              </section>

            </>

          )
          :
          (

            <>

              <h1>
                The Tisa River
              </h1>

              <section lang="en">
                <p>
                  <strong>The Tisa</strong> is a typical lowland river with a total length of 966 kilometers.
                </p>
                <p>
                  It springs from the Carpathians and is one of the oldest rivers in the world.
                </p>
                <p>
                  The course of the Tisa is divided into three parts: the upper course from the source, where it forms by the confluence of the White and Black Tisa, up to the mouth of the Samoš,
                </p>
                <p>
                  then the middle course, from the mouth of the Samoš to the mouth of the Mureș,
                </p>
                <p>
                  and the lower course, from the mouth of the Mureș to its confluence with the Danube near Slankamen.
                </p>
              </section>

              <img src={tisa2} alt="Tisa 2" />

              <section lang="en">
                <p>
                  In Serbia, the Tisa flows for about 164 kilometers, from its confluence with the Danube to the Serbian-Hungarian border.
                </p>
                <p>
                  The Tisa River forms a natural border between Bačka on the right bank and Banat on the left bank, and since it also touches Srem at the mouth near Stari Slankamen, it is truly a river of Vojvodina.
                </p>
                <p>
                  Due to its width, the Tisa is considered the "lifeline" of Vojvodina and a place for relaxation.
                </p>
              </section>

              <img src={tisa5} alt="Tisa 3" />

              <section lang="en">
                <p>
                  In the mountainous part of its course, the <strong>Tisa</strong> is a clear and fast river. The lack of lakes in the Carpathian areas causes the water level variations in the Tisa to be very large,
                  with typically three annual flood periods.
                </p>
                <p>
                  If the high water level in the Tisa coincides with a similar situation in the Danube, the <strong>Tisa flows upstream</strong>, causing major floods.
                  Such an event destroyed <em>Szeged</em> in the spring of 1879.
                </p>
              </section>

              <img src={tisa3} alt="Tisa 4" />

              <section lang="en">
                <p>
                  Thanks to the width and depth of its riverbed and the slow flow velocity, the <strong>Tisa</strong> was, especially on the middle and lower courses and before the realization of regulation works, a waterway of regional importance.
                </p>
                <p>
                  The Tisa plays an important role in cheap river transport on both the Hungarian and Serbian parts of its course.
                </p>
                <p>
                  After the drastic shortening of the riverbed and the establishment of a controlled regime on most of its course, navigation on the middle and lower Tisa became safer.
                </p>
              </section>

              <img src={tisa4} alt="Tisa 5" />

              <section lang="en">
                <p>
                  Besides favorable navigational characteristics and conditions, the <strong>Tisa</strong> is a waterway of exceptional importance since it is a tributary of the <em>Danube</em>,
                  which is part of the European waterway connecting the North Sea and the Black Sea.
                </p>
              </section>
            </>
          )}


      </div>
    </>
  );
};


export default RekaTisa;