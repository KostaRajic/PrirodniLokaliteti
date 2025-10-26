/* eslint-disable react/no-unknown-property */
import trgRepublike1 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike1.jpg";
import trgRepublike2 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike2.jpg";
import trgRepublike3 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike3.jpg";
import trgRepublike4 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike4.jpg";
import trgRepublike5 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike5.jpg";
import trgRepublike6 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike6.jpg";
import trgRepublike11 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM1.jpg";
import trgRepublike22 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM2.jpg";
import trgRepublike33 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM3.jpg";
import trgRepublike44 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM4.jpg";
import trgRepublike55 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM5.jpg";
import trgRepublike66 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TrgRepublike = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang !== switchLanguage) {

      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  return (
    <>

      <Helmet>

        <title>{switchLanguage === 'rs' ? "Trg Republike | Serbia Wonders" : "Republic Square | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Trg Republike u Beogradu – istorijski i kulturni centar grada. Otkrijte tribunalni prostor okružen Narodnim pozorištem, Narodnim muzejom, zgradom Doma štampe i važnim spomenicima."
            :
            "Republic Square in Belgrade – the historical and cultural center of the city. Discover the central area surrounded by the National Theatre, National Museum, the Press House building, and important monuments."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Trg Republike, Beograd, Narodno pozorište, Narodni muzej, Stambol kapija, Vasa Čarapić, Narodni muzej Beograd, kulturni događaji, koncerti, simboli Beograda"
            :
            "Republic Square, Belgrade, National Theatre, National Museum, Stambol Gate, Vasa Čarapić, National Museum Belgrade, cultural events, concerts, symbols of Belgrade"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/beograd/trg-republike`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/beograd/trg-republike"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/beograd/trg-republike"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/beograd/trg-republike"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(beogradPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${trgRepublike11} 450w, ${trgRepublike1} `} alt="Trg Republike 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }} > Trg Republike</h1>

              <section lang="sr">
                <p>
                  Glavni gradski trg prostire se između <em>„Gradske kafane“</em>, bioskopa <em>„Jadran“</em>, <strong>Narodnog pozorišta</strong> i <strong>Centralnog kluba Vojske Srbije</strong>. Današnji izgled trga formiran je nakon rušenja <strong>Stambol-kapije</strong> 1866. godine i izgradnje Narodnog pozorišta 1869. godine. Stambol-kapija, podignuta početkom 18. veka od strane Austrijanaca, nalazila se između spomenika knezu Mihailu i Narodnog pozorišta. Smatrana je najlepšom kapijom u doba kada je Beograd bio opasan bedemima. Dobila je naziv jer se kroz nju išlo prema Carigradu (Istanbulu). Ispred nje su Turci vršili javne egzekucije, što je ostavilo snažan trag u narodnoj memoriji. Tokom borbi za Beograd 1806. godine, pred ovom kapijom smrtno je ranjen <strong>Vasa Čarapić</strong>.
                </p>
              </section>

              <img srcSet={`${trgRepublike22} 450w, ${trgRepublike2}`} alt="Trg Republike 2" loading="lazy" />

              <section lang="sr">
                <p>
                  U znak sećanja na Vasu Čarapića, jedna ulica nosi njegovo ime, a podignut je i spomenik. Nakon rušenja Stambol-kapije, prostor Trga Republike ostao je neizgrađen sve do kraja 19. veka. <strong>Narodno pozorište</strong> bilo je jedina značajna građevina na tom prostoru više od tri decenije. Tek 1882. godine, kada je podignut <strong>spomenik knezu Mihailu</strong>, počinje postepena urbanizacija trga. Na mestu današnjeg Narodnog muzeja nekada se nalazila kafana <em>„Dardaneli“</em>, poznata kao mesto okupljanja umetnika. Kafana je srušena 1903. godine, a na njenom mestu je sagrađena <strong>Uprava fondova</strong>, današnja zgrada Narodnog muzeja.
                </p>
              </section>

              <img srcSet={`${trgRepublike66} 450w, ${trgRepublike6}`} alt="Narodni muzej" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej u Beogradu</strong> predstavlja jedno od najvažnijih kulturnih odredišta Srbije. Osnovan 1844. godine, čuva više od <strong>400.000 eksponata</strong>, uključujući umetnička dela, arheološke nalaze i istorijske predmete. U muzeju se nalaze radovi velikana poput <strong>Paje Jovanovića</strong> i <strong>Uroša Predića</strong>, kao i međunarodna umetnička dela. Posebno se ističu zbirke rimskih i srednjovekovnih artefakata, novčića i predmeta iz perioda Otomanske i Austro-Ugarske vladavine. Muzej pruža i interaktivne izložbe i edukativne programe koji obogaćuju razumevanje prošlosti Srbije i Balkana.
                </p>
              </section>

              <img srcSet={`${trgRepublike44} 450w, ${trgRepublike4}`} alt="Narodno Pozorište" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Narodno pozorište</strong>, osnovano 1868. godine, je ključni kulturni simbol Beograda. Građeno u stilu neorenesanse, otvoreno je 1869. i do danas je sedište srpske drame, opere i baleta. Kroz brojne adaptacije zadržalo je svoju arhitektonsku lepotu. Za posetioce, ovo zdanje nije samo mesto umetnosti, već i istorijska atrakcija koja svedoči o razvoju kulture u Srbiji. Posetioci mogu prisustvovati predstavama, kao i razgledati impozantni enterijer zgrade.
                </p>
              </section>

              <img srcSet={`${trgRepublike33} 450w, ${trgRepublike3}`} alt="Kolarac" loading="lazy" />

              <section lang="sr">
                <p>
                  U parku pored Narodnog pozorišta nalazili su se kafana i bioskop <strong>„Kolarac“</strong>, u zgradi koja je pripadala Iliji Milosavljeviću Kolarcu. <strong>Palata „Riunione“</strong>, današnji bioskop <em>„Jadran“</em>, izgrađena je 1930. godine. Prostor današnjeg Doma štampe bio je ispunjen malim zgradama koje su uništene tokom <strong>nemačkog bombardovanja 6. aprila 1941.</strong>. Nakon rata, uklonjena je tramvajska okretnica, a na tom mestu je postavljena <strong>grobnica borcima Crvene armije</strong>, koji su poginuli 1944. Njihovi ostaci su kasnije preneti na Groblje oslobodilaca, a na tom mestu je izgrađena <strong>zgrada Doma štampe</strong>, sa Gradskom kafanom i Pres-centrom.
                </p>
              </section>

              <img srcSet={`${trgRepublike55} 450w, ${trgRepublike5}`} alt="Trg Republike koncerti" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Trg Republike</strong> je jedno od najpoznatijih i najposećenijih mesta u Beogradu. Često je domaćin različitih kulturnih i muzičkih događaja, uključujući koncerte na otvorenom. Okružen važnim institucijama kao što su <strong>Narodno pozorište</strong> i <strong>Narodni muzej</strong>, predstavlja idealnu lokaciju za kulturne manifestacije. Repertoar događaja obuhvata sve – od klasične muzike do savremenih pop i rock nastupa, privlačeći posetioce iz zemlje i inostranstva.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Republic Square</h1>

              <section lang="en">
                <p>
                  The main city square is located between the <em>“City Tavern”</em>, the <em>“Jadran”</em> cinema, the <strong>National Theatre</strong>, and the <strong>Central Club of the Serbian Army</strong>. The current appearance of the square was shaped after the demolition of the <strong>Stambol Gate</strong> in 1866 and the construction of the National Theatre in 1869. The Stambol Gate, built in the early 18th century by the Austrians, stood between the monument to Prince Mihailo and the National Theatre. It was considered the most beautiful gate during the time when Belgrade was surrounded by ramparts. It got its name because the road through it led toward Constantinople (Istanbul). In front of the gate, the Ottomans carried out public executions, which left a deep mark in the collective memory. During the Battle for Belgrade in 1806, <strong>Vasa Čarapić</strong> was fatally wounded in front of this gate.
                </p>
              </section>

              <img srcSet={`${trgRepublike22} 450w, ${trgRepublike2}`} alt="Republic Square 2" loading="lazy" />

              <section lang="en">
                <p>
                  In memory of Vasa Čarapić, a street bears his name, and a monument has been erected. After the Stambol Gate was demolished, the Republic Square area remained undeveloped until the end of the 19th century. The <strong>National Theatre</strong> was the only prominent building in that area for more than three decades. Only in 1882, with the erection of the <strong>monument to Prince Mihailo</strong>, did the gradual urbanization of the square begin. At the site of today’s National Museum, there once stood the <em>“Dardaneli”</em> tavern, known as a gathering spot for artists. The tavern was demolished in 1903, and in its place, the <strong>Fund Administration</strong> building was constructed, which is today’s National Museum.
                </p>
              </section>

              <img srcSet={`${trgRepublike66} 450w, ${trgRepublike6}`} alt="National Museum" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>National Museum in Belgrade</strong> is one of Serbia’s most important cultural institutions. Founded in 1844, it houses over <strong>400,000 exhibits</strong>, including artworks, archaeological findings, and historical artifacts. The museum features works by great Serbian artists such as <strong>Paja Jovanović</strong> and <strong>Uroš Predić</strong>, as well as international pieces. Noteworthy are its collections of Roman and medieval artifacts, coins, and objects from the Ottoman and Austro-Hungarian periods. The museum also offers interactive exhibitions and educational programs that enrich the understanding of Serbia’s and the Balkans’ past.
                </p>
              </section>

              <img srcSet={`${trgRepublike44} 450w, ${trgRepublike4}`} alt="National Theatre" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>National Theatre</strong>, founded in 1868, is a key cultural symbol of Belgrade. Built in the Neo-Renaissance style, it opened in 1869 and remains the home of Serbian drama, opera, and ballet. Despite numerous renovations, it has retained its architectural beauty. For visitors, this building is not only a place for performing arts, but also a historical landmark reflecting the development of Serbian culture. Guests can attend performances as well as admire the building’s impressive interior.
                </p>
              </section>

              <img srcSet={`${trgRepublike33} 450w, ${trgRepublike3}`} alt="Kolarac" loading="lazy" />

              <section lang="en">
                <p>
                  In the park next to the National Theatre, there once stood the <strong>“Kolarac”</strong> tavern and cinema, located in a building owned by Ilija Milosavljević Kolarac. The <strong>“Riunione” Palace</strong>, today’s <em>“Jadran”</em> cinema, was built in 1930. The area now occupied by the Press House was once filled with small buildings that were destroyed during the <strong>German bombing on April 6, 1941</strong>. After the war, the tram turning loop was removed, and a <strong>tomb for Red Army soldiers</strong> who died in 1944 was placed there. Their remains were later transferred to the Cemetery of Liberators, and the <strong>Press House building</strong> was constructed in their place, along with the City Tavern and Press Center.
                </p>
              </section>

              <img srcSet={`${trgRepublike55} 450w, ${trgRepublike5}`} alt="Republic Square Concerts" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Republic Square</strong> is one of the most famous and frequently visited places in Belgrade. It often hosts various cultural and musical events, including open-air concerts. Surrounded by major institutions such as the <strong>National Theatre</strong> and the <strong>National Museum</strong>, it is an ideal location for cultural happenings. The event repertoire includes everything from classical music to contemporary pop and rock performances, attracting both local and international visitors.
                </p>
              </section>

            </>
          )}

      </div >
    </>
  );
};

export default TrgRepublike;