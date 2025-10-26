/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import prizren1 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren2.jpg";
import prizren2 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren1.jpg";
import prizren3 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren3.jpg";
import prizren4 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren4.jpg";
import prizren5 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren5.jpg";
import prizren6 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren6.jpg";
import prizren7 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/desktop/prizren7.jpg";
import prizren11 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren2.jpg";
import prizren22 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren1.jpg";
import prizren33 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren3.jpg";
import prizren44 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren4.jpg";
import prizren55 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren5.jpg";
import prizren66 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren6.jpg";
import prizren77 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/Prizren/mobile/Mprizren7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { prizrenskiOkrugPathRoutes } from "./PrizrenskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Prizren = () => {
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

        <title>{switchLanguage === 'rs' ? "Prizren – Istorijski i kulturni biser Balkana | Serbia Wonders" : "Prizren – Historical and Cultural Jewel of the Balkans | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Prizren je grad bogate istorije i kulturnog nasleđa, poznat po spomenicima kao što su crkva Bogorodice Ljeviške, Sinan-pašina džamija i Kameni most. Važno srpsko i balkansko nasleđe."
            :
            "Prizren is a city rich in history and cultural heritage, known for landmarks like the Church of the Virgin of Ljeviška, Sinan Pasha Mosque, and the Stone Bridge. An important Serbian and Balkan heritage site."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Prizren, Bogorodica Ljeviška, Sinan-pašina džamija, Kameni most, Prizrenska Bogoslovija, srpska istorija, UNESCO, kulturno nasleđe, Balkan"
            :
            "Prizren, Church of the Virgin of Ljeviška, Sinan Pasha Mosque, Stone Bridge, Prizren Theological Seminary, Serbian history, UNESCO, cultural heritage, Balkans"
          }
        />
        <meta name="author" content="Srpsko kulturno nasleđe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/prizren`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/prizren"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/prizren"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/prizren"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(prizrenskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${prizren11} 450w, ${prizren1} `} alt="Prizren 1" loading="lazy" />

        <h1>Prizren</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Prizren</strong> je grad bogat <em>istorijom</em> i kulturnim nasleđem, u kojem se nalaze značajni spomenici poput crkve <strong>Bogorodice Ljeviške</strong>, koja je uvrštena na listu <em>svetske baštine UNESCO</em>, i <strong>Sinan-pašine džamije</strong>, izgrađene od ostataka crkve <em>Svetih Arhangela Mihaila i Gavrila</em>, koju je podigao srpski car <strong>Dušan</strong>.
                </p>
              </section>

              <img srcSet={`${prizren22} 450w, ${prizren2}`} alt="Prizren 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Grad <strong>Prizren</strong> svoje ime duguje <em>Vizantijcima</em>, dok su srpski srednjovekovni vladari učinili ovu varoš prepoznatljivom po svojoj lepoti i trgovinskoj važnosti. Turski osvajači su, koristeći ostatke zadužbine cara <strong>Dušana</strong>, izgradili veličanstvenu <strong>Sinan-pašinu džamiju</strong>, jedan od simbola grada.
                </p>
              </section>

              <img srcSet={`${prizren33} 450w, ${prizren3}`} alt="Kameni most u Prizrenu" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Kameni most</strong> u <strong>Prizrenu</strong> je simbol grada, smešten preko reke <em>Prizrenskoj Bistrici</em> i povezuje trg <em>„Šadrvan“</em> sa delom grada poznatim kao <em>Saračana</em>. Most je dugačak 17 metara i izgrađen je krajem 15. ili početkom 16. veka.
                </p>
              </section>

              <img srcSet={`${prizren44} 450w, ${prizren4}`} alt="Prizrenska Bogoslovija" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Prizrenska Bogoslovija</strong>, osnovana 1871. godine, bila je važna institucija koja je služila kao obrazovni centar za pravoslavne Srbe i ključni kulturni i politički oslonac.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Prizren</strong> is a city rich in <em>history</em> and cultural heritage, home to significant monuments such as the church of <strong>Bogorodica Ljeviška</strong>, which is included on the <em>UNESCO World Heritage List</em>, and the <strong>Sinan Pasha Mosque</strong>, built from the remains of the church of the <em>Holy Archangels Michael and Gabriel</em>, founded by the Serbian Tsar <strong>Dušan</strong>.
                </p>
              </section>

              <img srcSet={`${prizren22} 450w, ${prizren2}`} alt="Prizren 2" loading="lazy" />

              <section lang="en">
                <p>
                  The city of <strong>Prizren</strong> owes its name to the <em>Byzantines</em>, while Serbian medieval rulers made this town famous for its beauty and commercial importance. Ottoman conquerors, using the remnants of Tsar <strong>Dušan</strong>'s endowment, built the magnificent <strong>Sinan Pasha Mosque</strong>, one of the city's symbols.
                </p>
              </section>

              <img srcSet={`${prizren33} 450w, ${prizren3}`} alt="Stone Bridge in Prizren" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Stone Bridge</strong> in <strong>Prizren</strong> is a symbol of the city, located over the <em>Prizren Bistrica River</em>, connecting <em>Šadrvan Square</em> with the part of the city known as <em>Saračana</em>. The bridge is 17 meters long and was built at the end of the 15th or beginning of the 16th century.
                </p>
              </section>

              <img srcSet={`${prizren44} 450w, ${prizren4}`} alt="Prizren Theological Seminary" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Prizren Theological Seminary</strong>, founded in 1871, was an important institution serving as an educational center for Orthodox Serbs and a key cultural and political support.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Prizren;