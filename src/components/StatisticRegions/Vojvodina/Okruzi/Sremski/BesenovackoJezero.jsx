/* eslint-disable react/no-unknown-property */
import besenovackoJezero1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/desktop/besenovackoJezero2.jpg";
import besenovackoJezero2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/desktop/besenovackoJezero3.jpg";
import besenovackoJezero3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/desktop/besenovackoJezero4.jpg";
import besenovackoJezero4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/desktop/besenovackoJezero5.jpg";
import besenovackoJezero5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/desktop/besenovackoJezero6.jpg";
import besenovackoJezero11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/mobile/MbesenovackoJezero2.jpg";
import besenovackoJezero22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/mobile/MbesenovackoJezero3.jpg";
import besenovackoJezero33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/mobile/MbesenovackoJezero4.jpg";
import besenovackoJezero44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/mobile/MbesenovackoJezero5.jpg";
import besenovackoJezero55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/mobile/MbesenovackoJezero6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const BesenovackoJezero = () => {
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
            ? 'Bešenovačko jezero | Beli kamen Fruške gore | Serbia Wonders'
            : 'Bešenovačko Lake | White Stone of Fruška Gora | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Bešenovačko jezero, poznato i kao Beli kamen, skriveni je dragulj Fruške gore sa tirkizno plavom vodom i bogatim mineralnim sastavom. Idealno za kupanje, odmor i uživanje u prirodi.'
              : 'Bešenovačko Lake, also known as White Stone, is a hidden gem of Fruška Gora with turquoise blue water and rich mineral content. Perfect for swimming, relaxing, and enjoying nature.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Bešenovačko jezero, Beli kamen, Fruška gora, prirodna jezera, kupanje u Srbiji, izletište Vojvodina, jezera za kupanje, Srbija priroda, avantura u prirodi'
              : 'Bešenovačko Lake, White Stone, Fruška Gora, natural lakes, swimming in Serbia, Vojvodina getaway, lakes for swimming, Serbian nature, outdoor adventure'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/besenovacko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/besenovacko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/besenovacko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/besenovacko-jezero"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(sremskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${besenovackoJezero11} 450w, ${besenovackoJezero1} `} alt="Bešenovačko jezero 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2 style={{ color: "white" }}>Bešenovačko jezero</h2>

              <section lang="sr">
                <p>
                  <strong>Bešenovačko jezero</strong>, poznato i kao jezero Beli kamen, pravo je prirodno blago Fruške gore. Nekada je bilo kop laporca u vlasništvu beočinske fabrike cementa, a danas, zahvaljujući kontrastu između plavetnila vode i bele boje kamena, podseća na mediteranske predele. Nakon što je kop iscrpljen i područje napusteno, jezero je počelo da se puni vodom tokom osamdesetih godina prošlog veka. Za više od dve decenije, nivo vode je porastao do dubine od oko 50 metara i nastavlja da raste. Meštani pričaju da je tokom kopanja presečena glavna vodena žila, zbog čega su okolni izvori presušili. Voda je kristalno čista i tirkizne boje, a mnogi veruju da ima lekovita svojstva zbog specifičnog mineralnog sastava. Na obali je često moguće videti posetioce koji se mažu blatom, za koje se takođe smatra da ima terapijska dejstva.
                </p>
              </section>

              <img srcSet={`${besenovackoJezero33} 450w, ${besenovackoJezero3} `} alt="Bešenovačko jezero 3" />

              <section lang="sr">
                <p>
                  Iako se nalazi duboko u srcu <strong>nacionalnog parka</strong> i okruženo <em>netaknutom prirodom</em>, Bešenovačko jezero svakodnevno privlači veliki broj posetilaca. Vikendom je parking često <strong>pun</strong>, a na plaži je teško pronaći slobodno mesto za <em>šator</em> ili <em>suncobran</em>. S obzirom na to da nema prirodnog hlada, <strong>suncobran je neophodan</strong> ako planirate da provedete ceo dan na jezeru. Ako želite da zauzmete <strong>najbolje mesto</strong>, preporučujemo da stignete <em>rano ujutro</em>.
                </p>
              </section>

              <img srcSet={`${besenovackoJezero55} 450w, ${besenovackoJezero5} `} alt="Bešenovačko jezero 4" />

              <section lang="sr">
                <p>
                  Jedan deo plaže jezera je uredan i opremljen sa nekoliko <strong>kafića</strong> gde možete da se opustite, uživate u <em>osveženju</em> i pronađete slobodnu <strong>ležaljku</strong>. S druge strane, obala jezera ostala je <em>divlja</em>, namenjena avanturistima, ali to joj ne umanjuje <strong>atraktivnost</strong>. Ako se odlučite za ovu stranu, preporučujemo da ponesete <strong>prostirku</strong>, jer je na tom delu jezera prisutno mnogo sitnog kamenja, što može otežati udoban boravak.
                </p>
              </section>

              <img srcSet={`${besenovackoJezero44} 450w, ${besenovackoJezero4} `} alt="Bešenovačko jezero 5" />

              <section lang="sr">
                <p>
                  Bešenovačko jezero smešteno je blizu sela <strong>Bešenovački Prnjavor</strong>, u Vojvodini, na teritoriji opštine <em>Sremska Mitrovica</em>. Od <strong>Novog Sada</strong> je udaljeno samo 30 kilometara. Ako dolazite iz <em>Beograda</em>, potrebno je da skrenete sa puta prema <strong>Rumi</strong> kada ugledate oznaku za <strong>Bešenovo</strong> ili selo <em>Jazak</em>. Nastavite pravo, a sa desne strane ćete primetiti <strong>crkvu</strong>. Na sledećoj raskrsnici, skrenite levo za <strong>Frušku Goru</strong>, dok desno vodi makadamski put do jezera <strong>Bešenovo</strong>. Parking je neposredno pre samog jezera.
                </p>
              </section>

            </>

          )
          :
          (
            <>
              <h2 style={{ color: "white" }}>Bešenovačko Lake</h2>

              <section lang="en">
                <p>
                  <strong>Bešenovačko Lake</strong>, also known as Beli Kamen Lake, is a true natural treasure of Fruška Gora. It was once a limestone quarry owned by the cement factory in Beočin, but today, thanks to the contrast between the blue water and the white stone, it resembles Mediterranean landscapes. After the quarry was exhausted and abandoned, the lake began to fill with water during the 1980s. Over more than two decades, the water level rose to a depth of about 50 meters and continues to rise. Locals say that during the excavation, the main water vein was cut, causing the surrounding springs to dry up. The water is crystal clear and turquoise in color, and many believe it has healing properties due to its specific mineral composition. Visitors are often seen applying mud on the shore, which is also believed to have therapeutic effects.
                </p>
              </section>

              <img srcSet={`${besenovackoJezero33} 450w, ${besenovackoJezero3} `} alt="Bešenovačko Lake 3" />

              <section lang="en">
                <p>
                  Although located deep in the heart of the <strong>national park</strong> and surrounded by <em>untouched nature</em>, Bešenovačko Lake attracts a large number of visitors every day. On weekends, the parking lot is often <strong>full</strong>, and it is difficult to find a free spot on the beach for a <em>tent</em> or <em>umbrella</em>. Since there is no natural shade, a <strong>sun umbrella is essential</strong> if you plan to spend the whole day at the lake. If you want to secure the <strong>best spot</strong>, we recommend arriving <em>early in the morning</em>.
                </p>
              </section>

              <img srcSet={`${besenovackoJezero55} 450w, ${besenovackoJezero5} `} alt="Bešenovačko Lake 4" />

              <section lang="en">
                <p>
                  One part of the lake’s beach is neat and equipped with several <strong>cafes</strong> where you can relax, enjoy a refreshing drink, and find a free <strong>sunbed</strong>. On the other hand, the lake’s shore remains <em>wild</em>, intended for adventurers, but this does not diminish its <strong>attractiveness</strong>. If you choose this side, we recommend bringing a <strong>mat</strong>, as this part of the lake has a lot of small stones, which can make staying comfortably more difficult.
                </p>
              </section>

              <img srcSet={`${besenovackoJezero44} 450w, ${besenovackoJezero4} `} alt="Bešenovačko Lake 5" />

              <section lang="en">
                <p>
                  Bešenovačko Lake is located near the village of <strong>Bešenovački Prnjavor</strong>, in Vojvodina, within the municipality of <em>Sremska Mitrovica</em>. It is only 30 kilometers away from <strong>Novi Sad</strong>. If you are coming from <em>Belgrade</em>, you need to turn off the road toward <strong>Ruma</strong> when you see the signs for <strong>Bešenovo</strong> or the village of <em>Jazak</em>. Continue straight, and on the right side, you will notice a <strong>church</strong>. At the next intersection, turn left for <strong>Fruška Gora</strong>, while the right leads via a dirt road to Bešenovo Lake. Parking is just before the lake.
                </p>
              </section>
            </>
          )}

      </div>
    </>
  );
};


export default BesenovackoJezero;