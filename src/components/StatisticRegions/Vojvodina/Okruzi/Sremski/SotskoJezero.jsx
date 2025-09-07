/* eslint-disable react/no-unknown-property */
import sotsko1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero2.jpg";
import sotsko2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero3.jpg";
import sotsko3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero4.jpg";
import sotsko4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero5.jpg";
import sotsko5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/desktop/sotskoJezero6.jpg";
import sotsko11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero2.jpg";
import sotsko22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero3.jpg";
import sotsko33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero4.jpg";
import sotsko44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero5.jpg";
import sotsko55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SotskoJezero/mobile/MsotskoJezero6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SotskoJezero = () => {
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
            ? "Sotsko Jezero | Priroda, Rekreacija i Porodični Izlet na Fruškoj Gori | Serbia Wonders"
            : "Sotsko Lake | Nature, Recreation & Family Outing on Fruška Gora | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Sotsko Jezero na Fruškoj gori je idealno mesto za odmor, rekreaciju i uživanje u netaknutoj prirodi, sa igralištima, šetnjama i mnoštvom sadržaja za porodice."
              : "Sotsko Lake on Fruška Gora is the perfect spot for relaxation, recreation, and enjoying pristine nature, featuring playgrounds, walking trails, and plenty of family activities."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Sotsko Jezero, Fruška Gora, priroda, rekreacija, porodica, roštilj, kupanje, ptice, pecanje, jezera u Srbiji"
              : "Sotsko Lake, Fruška Gora, nature, recreation, family, barbecue, swimming, birds, fishing, lakes in Serbia"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sotsko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sotsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sotsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sotsko-jezero"
        />


      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(sremskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sotsko11} 450w, ${sotsko1} `} alt="Sotsko Jezero 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Sotsko Jezero</h2>

              <section lang="sr">
                <p>
                  Ako tražite <strong>savršen prostor</strong> za opuštanje, rekreaciju, uživanje u roštilju,
                  kupanje <em>(na sopstvenu odgovornost)</em> ili jednostavno uživanje u tišini prirode,
                  dok se deca zabavljaju na jednom od igrališta, ovo <strong>prelepo jezero na Fruškoj gori</strong>
                  je pravo mesto za vas. Mnogi ga, s pravom, smatraju <em>najlepšim na ovom delu planine</em>,
                  a <strong>mirna atmosfera</strong> i <strong>netaknuta priroda</strong> pružaju
                  <em>idealne uslove za beg od svakodnevnog života</em>.
                </p>
              </section>

              <img srcSet={`${sotsko22} 450w, ${sotsko2} `} alt="Sotsko Jezero 2" />

              <section lang="sr">
                <p>
                  <strong>Prelepi pejzaži</strong> koji se prostiru do horizonta pružaju <em>osećaj mira i opuštanja</em>,
                  a njihov očaravajući izgled poziva da ih zabeležite fotoaparatom. Dok šetate obalom jezera,
                  sastaćete se sa <em>raznovrsnim predstavnicima faune</em>, koji nesmetano obavljaju svoje svakodnevne aktivnosti.
                  <strong>Ovde, čovek se ponaša u harmoniji sa prirodom</strong>, koja mu uzvraća svojom <em>jedinstvenom lepotom</em>.
                  Na ovom području <strong>nema opasnih životinja</strong>, pa se možete bez straha kretati,
                  dok vas u susret dolaze naši simpatični domaćini – <em>gušteri zelembaći</em> sa svojom
                  <strong>zapanjujućom tirkiznom bojom</strong>, kao i <em>brze belouške</em> koje se trude da nas ne primete
                  dok žure na svom putu u potragu za hranom.
                </p>
              </section>

              <img srcSet={`${sotsko33} 450w, ${sotsko3} `} alt="Sotsko Jezero 3" />

              <section lang="sr">
                <p>
                  Uživajte u pesmi <strong>brojnih ptica</strong> kao što su <em>grmuše</em>, <em>senice</em> i <em>slavuje</em>,
                  dok <strong>tropski šareno krilo</strong> <em>pčelarica</em> i <em>vodomara</em> donosi dodatnu magiju prirode.
                  U plićacima vas sa distance posmatraju <strong>bojažljive čaplje</strong>, koje su uvek spremne da rašire
                  svoja <em>impozantna krila</em> i polete. Ako obratite pažnju, visoko na nebu možete uočiti
                  <strong>vladare ovog prostora</strong> – <em>poljsku eju</em> i <em>orla krstaša</em>, koji sa visine
                  prate dešavanja u svom kraljevstvu. <strong>Nekrunisani vladari jezera</strong>,
                  <em>labudica i njen partner</em>, sa svojim potomcima, godinama vladaju ovom vodom,
                  a kao pravi vladari često postaju <strong>omiljeni modeli za fotoaparate posetilaca</strong>.
                </p>
              </section>

              <img srcSet={`${sotsko44} 450w, ${sotsko4} `} alt="Sotsko Jezero 4" />

              <section lang="sr">
                <p>
                  Kada poželite da se opustite nakon šetnje, raširite svoje ćebe na <strong>sveže pokošenu travu u šljiviku</strong>
                  ili se smestite na obalu ispod vrba i <em>uživajte u pikniku</em>. Za ovu vrstu uživanja tu su i
                  <strong>nove klupe i stolovi sa roštilj mestima</strong>. Ako niste poneli hranu,
                  <em>najbližu prodavnicu</em> možete pronaći na samo <strong>2 km od jezera</strong>.
                  Ne zaboravite da ponesete <em>torbu za plažu</em>, jer je <strong>kupanje</strong>
                  <em>(na sopstvenu odgovornost)</em> i <strong>sunčanje na jezeru</strong> posebno iskustvo.
                  <strong>Veštiji kupači</strong> će uživati na brani i tek renoviranom molu,
                  dok se <em>porodice sa decom</em> kupaju na <strong>šljunkovitoj plaži</strong> koja ima <em>savršen plićak</em>.
                  Ako deca žele promenu, u blizini plaže se nalazi <strong>dečji mobilijar</strong> sa
                  <em>ljuljaškama, klackalicama, toboganom i dva zip lajna</em>, koji su <strong>pravi hit</strong>.
                  Za ljubitelje sporta, tu je i <strong>odbojkaški teren sa novim peskom</strong>, odmah pored plaže.
                </p>
              </section>

              <img srcSet={`${sotsko55} 450w, ${sotsko5} `} alt="Sotsko Jezero 5" />

              <section lang="sr">
                <p>
                  Ako odlučite da prošetate duž obale, na oko <strong>300 metara od plaže</strong> pronaći ćete
                  <strong>jedinstveno Štrumf selo</strong>, izgrađeno od <em>drvenih bačvi</em> i oslikano motivima iz
                  <em>popularnog crtaća</em>. Kada poželite da se sklonite u hlad, preporučujem šetnju
                  <strong>desnom obalom jezera</strong>, koja je okružena <strong>listopadnom šumom</strong>
                  u kojoj prednjači <em>lipa</em>. Kroz ovu šumu prolazi <em>uska stazica</em> dugačka oko
                  <strong>300 metara</strong>, sa posebnim punktovima za <strong>strastvene pecaroše</strong>
                  koji se nadaju da će im neki od <em>velikih somova</em> povući plovak.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Sotsko Lake</h2>

              <section lang="en">
                <p>
                  If you're looking for the <strong>perfect place</strong> to relax, enjoy recreational activities, have a barbecue,
                  go swimming <em>(at your own risk)</em>, or simply enjoy the silence of nature while children play at one of the playgrounds,
                  this <strong>beautiful lake on Fruška Gora</strong> is the right place for you. Many rightly consider it
                  <em>the most beautiful lake in this part of the mountain</em>, and its <strong>peaceful atmosphere</strong> and
                  <strong>untouched nature</strong> offer <em>ideal conditions for escaping everyday life</em>.
                </p>
              </section>

              <img srcSet={`${sotsko22} 450w, ${sotsko2} `} alt="Sotsko Lake 2" />

              <section lang="en">
                <p>
                  <strong>Stunning landscapes</strong> stretching to the horizon provide a <em>sense of peace and relaxation</em>,
                  and their enchanting appearance invites you to capture the moment with your camera. As you walk along the lake shore,
                  you'll encounter <em>various species of wildlife</em> going about their daily routines undisturbed.
                  <strong>Here, people coexist in harmony with nature</strong>, which rewards them with its <em>unique beauty</em>.
                  In this area, there are <strong>no dangerous animals</strong>, so you can explore freely, while being greeted by
                  our friendly hosts – <em>green lizards</em> with their <strong>stunning turquoise color</strong>, and
                  <em>quick grass snakes</em> that try not to be noticed as they rush off in search of food.
                </p>
              </section>

              <img srcSet={`${sotsko33} 450w, ${sotsko3} `} alt="Sotsko Lake 3" />

              <section lang="en">
                <p>
                  Enjoy the songs of <strong>numerous birds</strong> such as <em>warblers</em>, <em>tits</em>, and <em>nightingales</em>,
                  while the <strong>tropical-colored wings</strong> of <em>bee-eaters</em> and <em>kingfishers</em> add extra magic to the scene.
                  In the shallows, you may spot <strong>shy herons</strong> watching you from a distance, always ready to spread
                  their <em>majestic wings</em> and take off. If you look up, you might see the <strong>rulers of these skies</strong> –
                  <em>the common buzzard</em> and <em>the eastern imperial eagle</em>, observing their kingdom from above.
                  The <strong>uncrowned rulers of the lake</strong>, <em>a graceful swan and her mate</em> with their young,
                  have ruled these waters for years, and as true monarchs, they often become <strong>favorite subjects of visitors' cameras</strong>.
                </p>
              </section>

              <img srcSet={`${sotsko44} 450w, ${sotsko4} `} alt="Sotsko Lake 4" />

              <section lang="en">
                <p>
                  When you're ready to relax after a walk, spread your blanket on the <strong>freshly mowed grass in the plum orchard</strong>
                  or settle on the shore beneath the willows to <em>enjoy a picnic</em>. For this type of leisure, there are
                  <strong>new benches and tables with barbecue areas</strong>. If you didn’t bring food,
                  <em>the nearest shop</em> is only <strong>2 km from the lake</strong>. Don’t forget to bring a
                  <em>beach bag</em>, as <strong>swimming</strong> <em>(at your own risk)</em> and <strong>sunbathing by the lake</strong>
                  are truly special experiences. <strong>More experienced swimmers</strong> can enjoy the dam and the newly renovated pier,
                  while <em>families with children</em> prefer the <strong>gravel beach</strong> with its <em>perfectly shallow water</em>.
                  If children want a change of pace, near the beach there's a <strong>children's playground</strong> with
                  <em>swings, seesaws, a slide, and two zip lines</em>, which are <strong>an absolute hit</strong>.
                  For sports lovers, there’s a <strong>volleyball court with new sand</strong> right next to the beach.
                </p>
              </section>

              <img srcSet={`${sotsko55} 450w, ${sotsko5} `} alt="Sotsko Lake 5" />

              <section lang="en">
                <p>
                  If you decide to walk along the shoreline, about <strong>300 meters from the beach</strong> you'll find a
                  <strong>unique Smurf Village</strong>, built from <em>wooden barrels</em> and painted with motifs from the
                  <em>popular cartoon</em>. When you want to escape the heat, we recommend a walk along the
                  <strong>right side of the lake</strong>, surrounded by a <strong>deciduous forest</strong> dominated by
                  <em>linden trees</em>. Through this forest runs a <em>narrow path</em> about <strong>300 meters</strong> long,
                  with special spots for <strong>passionate anglers</strong> hoping that one of the <em>big catfish</em>
                  will tug on their float.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default SotskoJezero;