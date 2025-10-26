/* eslint-disable react/no-unknown-property */
import vracevgajskoJezero1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/desktop/vracevgajskoJezero2.jpg";
import vracevgajskoJezero2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/desktop/vracevgajskoJezero3.jpg";
import vracevgajskoJezero3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/desktop/vracevgajskoJezero4.jpg";
import vracevgajskoJezero4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/desktop/vracevgajskoJezero5.jpg";
import vracevgajskoJezero11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/mobile/MvracevgajskoJezero2.jpg";
import vracevgajskoJezero22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/mobile/MvracevgajskoJezero3.jpg";
import vracevgajskoJezero33 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/mobile/MvracevgajskoJezero4.jpg";
import vracevgajskoJezero44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/VracevgajskoJezero/mobile/MvracevgajskoJezero5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VracevgajskoJezero = () => {
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
            ? 'Vračevgajsko Jezero | Turizam i Rekreacija u Prirodi kod Bele Crkve'
            : 'Vracevgajsko Lake | Tourism and Recreation in Nature near Bela Crkva'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Vračevgajsko jezero, udaljeno samo 3 km od Bele Crkve, nudi savršeno mesto za odmor, kupanje, kampovanje i porodične izlete. Uživajte u plažama, ostrvu i netaknutoj prirodi.'
              : 'Vracevgajsko Lake, just 3 km from Bela Crkva, is a perfect destination for swimming, camping, family picnics, and enjoying nature. Discover its beaches, island, and peaceful surroundings.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Vračevgajsko jezero, jezera Bela Crkva, kampovanje, kupanje, plaža, ostrvo, Vojvođanska Venecija, priroda, rekreacija, turizam, vikend izlet, letovanje u Srbiji'
              : 'Vracevgajsko Lake, Bela Crkva lakes, camping, swimming, beach, island, Vojvodina Venice, nature, recreation, tourism, weekend getaway, summer in Serbia'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/srp-kraljevac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/srp-kraljevac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/srp-kraljevac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/srp-kraljevac"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(juznoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${vracevgajskoJezero22} 450w, ${vracevgajskoJezero2} `} alt="Vračevgajsko Jezero 1" />

        {switchLanguage === 'en' ?
          (

            <>
              <h1>Vračevgajsko Jezero</h1>

              <section lang="sr">
                <p>
                  <strong>Vračevgajsko jezero</strong> se nalazi u blizini <strong>Bele Crkve</strong>, na samo tri kilometra od grada, uz glavnu saobraćajnicu <em>Beograd - Bela Crkva</em>.
                </p>
                <p>
                  Ovo jezero je popularno odredište za sve ljubitelje prirode i rekreacije. Na obalama jezera smeštena su dva auto-kampa koji nude širok spektar sadržaja, uključujući kamp jedinice, bungalove, restoran, kao i sanitarne čvorove sa toplotnom i hladnom vodom.
                </p>
                <p>
                  Ovaj kompleks pruža odlične uslove za odmor i uživanje u prirodi, sa mogućnostima za kupanje, pecanje i razne vanjske aktivnosti, što ga čini savršenim mestom za porodične izlete i vikend odmore.
                </p>
              </section>

              <img srcSet={`${vracevgajskoJezero33} 450w, ${vracevgajskoJezero3} `} alt="Vračevgajsko Jezero 2" />

              <section lang="sr">
                <p>
                  Na <strong>Vračevgajskom jezeru</strong> nalazi se lepo uređena plaža sa ležaljkama i suncobranima, kao i toboganom, što je čini savršenim mestom za opuštanje i zabavu.
                </p>
                <p>
                  Za ljubitelje aktivnosti, plaža je obogaćena različitim sadržajem za rekreaciju, a mališani mogu uživati na ljuljaškama, klackalicama i toboganima.
                </p>
                <p>
                  Pored toga, jezero se ponosi brojnim zavučenim uvalama, okruženim netaknutom prirodom, koje pružaju privatnost i prostor za smeštaj plažnog mobilijara, omogućavajući posetiocima potpuni mir i udobnost tokom boravka.
                </p>
              </section>

              <img srcSet={`${vracevgajskoJezero44} 450w, ${vracevgajskoJezero4} `} alt="Vračevgajsko Jezero 3 Bela Crkva" />

              <section lang="sr">
                <p>
                  <strong>Vračevgajsko jezero</strong> je najduže od svih jezera u okolini Bele Crkve, sa dužinom od <strong>980 metara</strong>.
                </p>
                <p>
                  Kao i ostala jezera u ovom području, nastalo je veštačkim putem početkom <strong>20. veka</strong>.
                </p>
                <p>
                  Jedna od ključnih karakteristika ovog jezera su prirodni filteri koji omogućavaju obnovu vode nekoliko puta tokom godine.
                </p>
                <p>
                  U letnjim mesecima, prosečna temperatura vode kreće se između <strong>20 i 26 stepeni Celzijusa</strong>, što ga čini idealnim za kupanje i druge vodene aktivnosti.
                </p>
              </section>

              <img srcSet={`${vracevgajskoJezero11} 450w, ${vracevgajskoJezero1} `} alt="Vračevgajsko Jezero 4 Brla Crkva" />

              <section lang="sr">
                <p>
                  Jedna od posebnosti <strong>Vračevgajskog jezera</strong> je i ostrvo koje se nalazi uz samu obalu, često nazvano <em>„Vojvođanska Venecija”</em>.
                </p>
                <p>
                  Ovo ostrvo je lako dostupno, jer postoje uređeni pristupi sa kopna i vode. Staza koja vodi sa kopna prelazi preko drvenog mosta, smeštenog između dve plaže.
                </p>
                <p>
                  Na ostrvu posetioci mogu uživati u sunčanju na ležaljkama ili na zelenim površinama, dok visoko drveće pruža prirodan hlad.
                </p>
                <p>
                  Na ostrvu se nalazi i restoran i bar, koji upotpunjuju ponudu za sve koji žele da se opuste i uživaju u prelepom ambijentu.
                </p>
              </section>


            </>

          )
          :
          (
            <>
              <h1>Vračevgajsko Lake</h1>
              
              <section lang="en">
                <p>
                  <strong>Vračevgajsko Lake</strong> is located near <strong>Bela Crkva</strong>, just three kilometers from the town, along the main road <em>Belgrade - Bela Crkva</em>.
                </p>
                <p>
                  This lake is a popular destination for all nature and recreation lovers. On the shores of the lake, there are two auto-camps offering a wide range of facilities, including camping units, bungalows, a restaurant, and sanitary facilities with hot and cold water.
                </p>
                <p>
                  This complex provides excellent conditions for relaxation and enjoying nature, with opportunities for swimming, fishing, and various outdoor activities, making it a perfect spot for family trips and weekend getaways.
                </p>
              </section>

              <img srcSet={`${vracevgajskoJezero33} 450w, ${vracevgajskoJezero3} `} alt="Vračevgajsko Lake 2" />

              <section lang="en">
                <p>
                  At <strong>Vračevgajsko Lake</strong>, there is a well-maintained beach with sunbeds and umbrellas, as well as a slide, making it a perfect place for relaxation and fun.
                </p>
                <p>
                  For activity enthusiasts, the beach is enriched with various recreational facilities, and children can enjoy swings, seesaws, and slides.
                </p>
                <p>
                  Additionally, the lake boasts numerous secluded coves surrounded by untouched nature, providing privacy and space for placing beach furniture, allowing visitors complete peace and comfort during their stay.
                </p>
              </section>

              <img srcSet={`${vracevgajskoJezero44} 450w, ${vracevgajskoJezero4} `} alt="Vračevgajsko Lake 3 Bela Crkva" />

              <section lang="en">
                <p>
                  <strong>Vračevgajsko Lake</strong> is the longest of all lakes around Bela Crkva, with a length of <strong>980 meters</strong>.
                </p>
                <p>
                  Like other lakes in the area, it was artificially created in the early <strong>20th century</strong>.
                </p>
                <p>
                  One of the key features of this lake is the natural filters that enable the water to renew several times throughout the year.
                </p>
                <p>
                  During summer months, the average water temperature ranges between <strong>20 and 26 degrees Celsius</strong>, making it ideal for swimming and other water activities.
                </p>
              </section>

              <img srcSet={`${vracevgajskoJezero11} 450w, ${vracevgajskoJezero1} `} alt="Vračevgajsko Lake 4 Bela Crkva" />

              <section lang="en">
                <p>
                  One of the unique features of <strong>Vračevgajsko Lake</strong> is an island located right by the shore, often called <em>"Vojvodina Venice"</em>.
                </p>
                <p>
                  This island is easily accessible, with arranged paths from both land and water. The path from the land crosses a wooden bridge situated between two beaches.
                </p>
                <p>
                  Visitors can enjoy sunbathing on sunbeds or grassy areas on the island, while tall trees provide natural shade.
                </p>
                <p>
                  The island also features a restaurant and bar, enhancing the offer for those who want to relax and enjoy the beautiful surroundings.
                </p>
              </section>
            </>

          )}

      </div>
    </>
  );
};


export default VracevgajskoJezero;