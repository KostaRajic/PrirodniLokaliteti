/* eslint-disable react/no-unknown-property */
import btjezero1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/desktop/btjezero1.jpg";
import btjezero2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/desktop/btjezero2.jpg";
import btjezero3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/desktop/btjezero3.jpg";
import btjezero4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/desktop/btjezero4.jpg";
import btjezero11 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/mobile/Mbtjezero1.jpg";
import btjezero22 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/mobile/Mbtjezero2.jpg";
import btjezero33 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/mobile/Mbtjezero3.jpg";
import btjezero44 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackoTopolskoJezero/mobile/Mbtjezero4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const BackoTopolskoJezero = () => {
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
            ? 'Bačkotopolsko jezero | Kupanje, Plaža i Letnji Odmor u Vojvodini'
            : 'Backotopolsko Lake | Swimming, Beach & Summer Fun in Vojvodina'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Bačkotopolsko jezero je najčistije jezero u Vojvodini, savršeno za letnje kupanje, sunčanje i porodične aktivnosti. Idealna destinacija za odmor u prirodi.'
              : 'Backotopolsko Lake is the cleanest lake in Vojvodina, perfect for summer swimming, sunbathing, and family-friendly activities. A great spot for nature lovers.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Bačkotopolsko jezero, kupanje u Vojvodini, plaže Srbija, letnji odmor, priroda Bačka Topola, jezera Vojvodina, dečije igralište, molovi, sportski tereni'
              : 'Backotopolsko Lake, swimming in Vojvodina, beaches Serbia, summer vacation, nature Backa Topola, lakes in Vojvodina, kids playground, piers, sports courts'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/backo-topolsko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/backo-topolsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/backo-topolsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/backo-topolsko-jezero"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(servernoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${btjezero44} 450w, ${btjezero4} `} alt="Backotopolsko jezero 1" />

        {switchLanguage === 'rs' ?
          (

            <>
              <h1>
                Bačkotopolsko Jezero
              </h1>

              <section lang="sr">
                <p>
                  <strong>Jezero kod Bačke Topole</strong> je 2019. godine proglašeno za najčistije u Vojvodini i u potpunosti je prilagođeno kupanju i letnjim zanimacijama. Jedno je od atraktivnih kupališta u Vojvodini, savršeno za letnje rashlađivanje i dobru zabavu.
                </p>
              </section>

              <img srcSet={`${btjezero22} 450w, ${btjezero2} `} alt="Backotopolsko jezero 2" />

              <section lang="sr">
                <p>
                  <strong>Plaža je šljunkovita</strong>, sa odličnim prilazima, ima i dosta travnatih delova za sunčanje i odmaranje u hladu. Jezero je površine 226 hektara i dužine oko 5 km (duplo veće od Palićkog) i predstavlja pravi raj za kupače. Na više mesta postoje drveni molovi sa toboganima, idealni i za skakanje u vodu, pa je leti sve prepuno mališana i omladine.
                </p>
              </section>

              <img srcSet={`${btjezero11} 450w, ${btjezero1} `} alt="Backotopolsko jezero 3" />

              <section lang="sr">
                <p>
                  <strong>Voda je prijatne temperature</strong>, po jakim vrućinama i mlaka, ali opet savršena da rashladi. Postoji i nekoliko tuševa i česmi sa pijaćom vodom, tako da ne morate da brinete ni o čemu, a tu su i spasioci koji vode računa o bezbednosti kupača.
                </p>
              </section>

              <img srcSet={`${btjezero33} 450w, ${btjezero3} `} alt="Backotopolsko jezero 4" />

              <section lang="sr">
                <p>
                  <strong>U hladovitom delu</strong> nalazi se i veliko dečije igralište, sa trambolinom, ljuljaškama i penjalicama, a ostali hladoviti delovi omiljeni su društvima koji roštiljaju ili prave kotlić. Takođe su na raspolaganju i razni sportski tereni, te svako može da nađe zabavu kakva mu najviše prija.
                </p>
              </section>

            </>

          )
          :
          (
            <>
              <h1>
                Bačka Topola Lake
              </h1>

              <section lang="en">
                <p>
                  <strong>The lake near Bačka Topola</strong> was declared the cleanest in Vojvodina in 2019 and is fully equipped for swimming and summer activities. It is one of the most attractive bathing spots in Vojvodina, perfect for cooling off and having fun during the summer.
                </p>
              </section>

              <img srcSet={`${btjezero22} 450w, ${btjezero2} `} alt="Bačka Topola Lake 2" />

              <section lang="en">
                <p>
                  <strong>The beach is pebbly</strong>, with excellent access, and there are many grassy areas for sunbathing and relaxing in the shade. The lake covers an area of 226 hectares and is about 5 km long (twice the size of Lake Palić), making it a true paradise for swimmers. In several spots, there are wooden piers with slides, ideal for jumping into the water, and in summer, the place is full of children and young people.
                </p>
              </section>

              <img srcSet={`${btjezero11} 450w, ${btjezero1} `} alt="Bačka Topola Lake 3" />

              <section lang="en">
                <p>
                  <strong>The water is pleasantly warm</strong>, even lukewarm during hot days, yet still perfect for cooling down. There are several showers and drinking water fountains available, so you don’t have to worry about a thing, and lifeguards are present to ensure swimmers’ safety.
                </p>
              </section>

              <img srcSet={`${btjezero33} 450w, ${btjezero3} `} alt="Bačka Topola Lake 4" />

              <section lang="en">
                <p>
                  <strong>In the shaded area</strong>, there is a large children's playground with a trampoline, swings, and climbing structures. Other shaded areas are popular with groups enjoying barbecues or cooking in kettles. Various sports courts are also available, so everyone can find the kind of fun they enjoy most.
                </p>
              </section>

            </>

          )}

      </div >
    </>
  );
};


export default BackoTopolskoJezero;