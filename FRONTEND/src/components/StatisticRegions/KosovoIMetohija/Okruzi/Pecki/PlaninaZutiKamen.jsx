/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import zutiKamen1 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/desktop/zutiKamen1.jpg";
import zutiKamen2 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/desktop/zutiKamen2.jpg";
import zutiKamen3 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/desktop/zutiKamen3.jpg";
import zutiKamen4 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/desktop/zutiKamen4.jpg";
import zutiKamen11 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/mobile/MzutiKamen1.jpg";
import zutiKamen22 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/mobile/MzutiKamen2.jpg";
import zutiKamen33 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/mobile/MzutiKamen3.jpg";
import zutiKamen44 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/mobile/MzutiKamen4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from "./PeckiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaZutiKamen = () => {
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

        <title>{switchLanguage === 'rs' ? "Žuti Kamen – Impresivni vrh Prokletija | Serbia Wonders" : "Žuti Kamen – Impressive Peak of the Prokletije | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Planina Žuti Kamen nalazi se na jugozapadu Srbije, deo je Prokletija, poznata po krševitim padinama, raznovrsnoj flori i netaknutoj prirodi."
            :
            "Mount Žuti Kamen is located in southwestern Serbia, part of the Prokletije range, known for rugged terrain, diverse flora, and pristine nature."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Planina Žuti Kamen, Prokletije, Srbija, jugozapadna Srbija, planinarenje, priroda, endemske biljke, avanturistički turizam"
            :
            "Mount Žuti Kamen, Prokletije, Serbia, southwestern Serbia, hiking, nature, endemic plants, adventure tourism"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/planina-zuti-kamen`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/planina-zuti-kamen"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/planina-zuti-kamen"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/planina-zuti-kamen"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zutiKamen22} 450w, ${zutiKamen2} `} alt="Planina Žuti Kamen 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Žuti Kamen</h1>

              <section lang="sr">
                <p>
                  <strong>Planina Žuti Kamen</strong> je planina koja se nalazi u jugozapadnom delu <strong>Srbije</strong>,
                  u blizini granice sa <strong>Crnom Gorom</strong>. Ova planina je deo <strong>Prokletija</strong>,
                  planinskog venca koji se prostire kroz <strong>Albaniju</strong>, <strong>Crnu Goru</strong> i <strong>Srbiju</strong>.
                  Žuti Kamen je smešten u južnom delu Srbije, u <strong>opštini Peć</strong>, te se smatra
                  jednim od značajnih <em>planinskih masiva</em> u ovom regionu.
                </p>
              </section>

              <img srcSet={`${zutiKamen11} 450w, ${zutiKamen1}`} alt="Planina Žuti Kamen 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Planina Žuti Kamen je poznata po svojoj <em>impresivnoj visini</em> i oštrim,
                  <strong>krševitim padinama</strong>. Najviši vrh ove planine je <strong>vrh Žuti Kamen</strong>, koji se
                  uzdiže na visinu od <strong>2.522 metara</strong> nadmorske visine. Planina se prostire
                  duž južnih padina, a njen reljef karakterišu <strong>visoke i strme litice</strong>, <strong>uske doline</strong>,
                  kao i brojne <em>vrtače i krška polja</em>. Ovaj region je prepoznatljiv
                  po tome što ima <strong>izraženo suvu klimu</strong>, što stvara specifične <em>ekološke uslove</em>.
                </p>
              </section>

              <img srcSet={`${zutiKamen33} 450w, ${zutiKamen3}`} alt="Planina Žuti Kamen 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Flora planine Žuti Kamen obuhvata <strong>raznovrsne biljne vrste</strong>, od kojih su mnoge
                  <em>endemične</em> i mogu se naći samo u ovom regionu. U nižim predelima
                  raste <strong>bor</strong>, <strong>jela</strong>, <strong>smrča</strong>, kao i <strong>bukva</strong>, dok se na višim visinama pojavljuju
                  <strong>travnate površine</strong> i <strong>planinske livade</strong>. Bogatstvo biljnih vrsta čini ovo
                  područje posebno <em>interesantnim za biologe i ekologe</em>.
                </p>
              </section>

              <img srcSet={`${zutiKamen44} 450w, ${zutiKamen4}`} alt="Planina Žuti Kamen 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Žuti Kamen</strong> je još uvek <em>relativno netaknuti</em> i <em>nedovoljno istraženi</em>
                  turistički region. Međutim, njegova <strong>netaknuta priroda</strong>, <strong>divlji pejzaži</strong> i
                  <strong>visoke planine</strong> privlače ljubitelje <em>planinarenja</em>, <em>prirode</em> i
                  <strong>avanturističkog turizma</strong>. U planinskim predelima oko Žutog Kamena moguće
                  je <em>pešačiti</em>, <em>planinariti</em> i <strong>uživati u tišini prirode</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Mount Žuti Kamen</h1>

              <section lang="en">
                <p>
                  <strong>Mount Žuti Kamen</strong> is a mountain located in the southwestern part of <strong>Serbia</strong>,
                  near the border with <strong>Montenegro</strong>. This mountain is part of the <strong>Prokletije</strong> mountain range,
                  which stretches across <strong>Albania</strong>, <strong>Montenegro</strong>, and <strong>Serbia</strong>.
                  Žuti Kamen is situated in the southern part of Serbia, in the <strong>municipality of Peć</strong>, and is considered
                  one of the significant <em>mountain massifs</em> in the region.
                </p>
              </section>

              <img srcSet={`${zutiKamen11} 450w, ${zutiKamen1}`} alt="Mount Žuti Kamen 2" loading="lazy" />

              <section lang="en">
                <p>
                  Mount Žuti Kamen is known for its <em>impressive height</em> and steep,
                  <strong>rugged slopes</strong>. The highest peak of this mountain is <strong>Žuti Kamen Peak</strong>,
                  which rises to an elevation of <strong>2,522 meters</strong> above sea level. The mountain extends
                  along its southern slopes, and its relief is characterized by <strong>high and steep cliffs</strong>, <strong>narrow valleys</strong>,
                  and numerous <em>sinkholes and karst fields</em>. This region is recognized for having a
                  <strong>distinctly dry climate</strong>, creating specific <em>ecological conditions</em>.
                </p>
              </section>

              <img srcSet={`${zutiKamen33} 450w, ${zutiKamen3}`} alt="Mount Žuti Kamen 3" loading="lazy" />

              <section lang="en">
                <p>
                  The flora of Mount Žuti Kamen includes <strong>diverse plant species</strong>, many of which are
                  <em>endemic</em> and can be found only in this region. In lower areas,
                  you can find <strong>pine</strong>, <strong>fir</strong>, <strong>spruce</strong>, and <strong>beech</strong>, while higher elevations feature
                  <strong>grassy surfaces</strong> and <strong>alpine meadows</strong>. The richness of plant species makes this
                  area especially <em>interesting to biologists and ecologists</em>.
                </p>
              </section>

              <img srcSet={`${zutiKamen44} 450w, ${zutiKamen4}`} alt="Mount Žuti Kamen 4" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Žuti Kamen</strong> is still a <em>relatively untouched</em> and <em>insufficiently explored</em>
                  tourist region. However, its <strong>pristine nature</strong>, <strong>wild landscapes</strong>, and
                  <strong>high mountains</strong> attract lovers of <em>hiking</em>, <em>nature</em>, and
                  <strong>adventure tourism</strong>. In the mountain areas around Žuti Kamen, it is possible
                  to <em>hike</em>, <em>trek</em>, and <strong>enjoy the peace of nature</strong>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default PlaninaZutiKamen;