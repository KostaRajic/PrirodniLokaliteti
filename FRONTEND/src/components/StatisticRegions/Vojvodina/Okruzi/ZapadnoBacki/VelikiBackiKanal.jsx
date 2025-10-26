/* eslint-disable react/no-unknown-property */
import VBK2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/desktop/VBK2.jpg";
import VBK3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/desktop/VBK3.jpg";
import VBK1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/desktop/VBK4.jpg";
import VBK5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/desktop/VBK5.jpg";
import VBK22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/mobile/MVBK2.jpg";
import VBK33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/mobile/MVBK3.jpg";
import VBK11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/mobile/MVBK4.jpg";
import VBK55 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/VelikiBackiKanal/mobile/MVBK5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VelikiBackiKanal = () => {
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
          {switchLanguage === "rs"
            ? "Veliki bački kanal | Istorijski i ekološki značaj Vojvodine | Serbia Wonders"
            : "Great Bačka Canal | Historical and Ecological Importance of Vojvodina | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Veliki bački kanal je jedan od najstarijih i najznačajnijih kanala u Vojvodini, izgrađen u 18. veku radi unapređenja plovidbe, regulacije voda i očuvanja prirodnog biodiverziteta."
              : "The Great Bačka Canal is one of the oldest and most significant canals in Vojvodina, built in the 18th century to improve navigation, regulate water levels, and preserve natural biodiversity."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Veliki bački kanal, Vojvodina, Sombor, Bačka, kanalizacija, istorija, ekologija, biodiverzitet, DTD, Dunav-Tisa-Dunav"
              : "Great Bačka Canal, Vojvodina, Sombor, Bačka, canal system, history, ecology, biodiversity, DTD, Danube-Tisa-Danube"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/veliki-backi-kanal`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/veliki-backi-kanal"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/veliki-backi-kanal"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/veliki-backi-kanal"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home(switchLanguage))} />
        <header></header>

        <img srcSet={`${VBK55} 450w, ${VBK5} `} alt="Veliki Backi Kanal 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h1>Veliki Bački Kanal</h1>

              <section lang="sr">
                <p>
                  <strong>Veliki bački kanal</strong> je deo <em>Hidrosistema Dunav-Tisa-Dunav</em>, smešten u
                  <strong>Vojvodini</strong>, i predstavlja jedan od <strong>najznačajnijih</strong> i <strong>najstarijih kanala</strong> u
                  ovom regionu. Izgrađen u <em>18. veku</em>, prvenstveno radi unapređenja <strong>plovidbe</strong>
                  i odvoda viška vode, kanal povezuje reke <strong>Dunav</strong> i <strong>Tisu</strong>, prolazeći kroz
                  više vojvođanskih gradova i sela, uključujući <strong>Sombor</strong>, <strong>Vrbas</strong> i <strong>Kulu</strong>.
                </p>
              </section>

              <img srcSet={`${VBK22} 450w, ${VBK2} `} alt="Veliki Backi Kanal 2" />

              <section lang="sr">
                <p>
                  Prokopavanje Velikog bačkog kanala predstavljalo je jedan od
                  <strong>najznačajnijih poduhvata</strong> u istoriji <strong>Sombora</strong>, ali i cele <strong>Bačke</strong>. Kanal je
                  bio posebno važan za <em>regulisanje nivoa voda</em> u gradskom ataru, pre svega
                  na <strong>oranicama</strong>, <strong>pašnjacima</strong> i <strong>livadama</strong>.
                </p>
              </section>

              <img srcSet={`${VBK33} 450w, ${VBK3} `} alt="Veliki Backi Kanal 3" />

              <section lang="sr">
                <p>
                  Njegovim prokopavanjem značajno je smanjen broj <strong>bara</strong>, <strong>močvara</strong>, <strong>mrtvaja</strong>,
                  <strong>jezeraca</strong> i <strong>rečica</strong> koje su, povremeno ili stalno, ugrožavale zemljište u
                  ataru grada i okolnih naselja. Samim tim, znatno su umanjene i stalne
                  pretnje od <em>malaričnih zaraznih bolesti</em>, koje su decenijama i vekovima
                  ranije često desetkovale ovdašnje stanovništvo i domaće životinje.
                </p>
              </section>

              <img srcSet={`${VBK11} 450w, ${VBK1} `} alt="Veliki Backi Kanal 5" />

              <section lang="sr">
                <p>
                  <strong>Veliki bački kanal</strong> je značajan i kao stanište za raznovrstan <strong>biljni</strong> i
                  <strong>životinjski svet</strong>, što ga čini važnim za očuvanje <em>biodiverziteta</em> u
                  <strong>Vojvodini</strong>. Njegova obala pruža priliku za <strong>šetnje</strong>, <strong>biciklizam</strong> i <strong>ribolov</strong>,
                  dok <em>istorijski mostovi</em> i <em>infrastruktura</em> duž kanala svedoče o njegovom
                  <strong>kulturnom</strong> i <strong>tehničkom značaju</strong>.
                </p>
              </section>

            </>
          )
          :
          (

            <>

              <h1>Great Bačka Canal</h1>

              <section lang="en">
                <p>
                  The <strong>Great Bačka Canal</strong> is part of the <em>Danube-Tisa-Danube Hydrosystem</em>, located in
                  <strong>Vojvodina</strong>, and represents one of the <strong>most important</strong> and <strong>oldest canals</strong> in
                  this region. Built in the <em>18th century</em>, primarily to improve <strong>navigation</strong>
                  and drain excess water, the canal connects the rivers <strong>Danube</strong> and <strong>Tisa</strong>, passing through
                  several towns and villages in Vojvodina, including <strong>Sombor</strong>, <strong>Vrbas</strong>, and <strong>Kula</strong>.
                </p>
              </section>

              <img srcSet={`${VBK22} 450w, ${VBK2} `} alt="Great Backa Canal 2" />

              <section lang="en">
                <p>
                  The excavation of the Great Bačka Canal was one of the
                  <strong>most significant undertakings</strong> in the history of <strong>Sombor</strong> as well as the entire <strong>Bačka</strong> region.
                  The canal was especially important for <em>regulating water levels</em> in the city’s territory, primarily
                  on <strong>farmlands</strong>, <strong>pastures</strong>, and <strong>meadows</strong>.
                </p>
              </section>

              <img srcSet={`${VBK33} 450w, ${VBK3} `} alt="Great Backa Canal 3" />

              <section lang="en">
                <p>
                  Its excavation significantly reduced the number of <strong>ponds</strong>, <strong>swamps</strong>, <strong>oxbow lakes</strong>,
                  <strong>small lakes</strong>, and <strong>streams</strong> that occasionally or permanently threatened the land
                  in the city’s and surrounding settlements’ territory. Consequently, it also greatly diminished the constant
                  threat of <em>malaria infectious diseases</em>, which had often decimated the local population and livestock
                  for decades and centuries before.
                </p>
              </section>

              <img srcSet={`${VBK11} 450w, ${VBK1} `} alt="Great Backa Canal 5" />

              <section lang="en">
                <p>
                  The <strong>Great Bačka Canal</strong> is also significant as a habitat for diverse <strong>plant</strong> and
                  <strong>animal life</strong>, making it important for the preservation of <em>biodiversity</em> in
                  <strong>Vojvodina</strong>. Its banks offer opportunities for <strong>walking</strong>, <strong>cycling</strong>, and <strong>fishing</strong>,
                  while the <em>historic bridges</em> and <em>infrastructure</em> along the canal testify to its
                  <strong>cultural</strong> and <strong>technical significance</strong>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default VelikiBackiKanal;