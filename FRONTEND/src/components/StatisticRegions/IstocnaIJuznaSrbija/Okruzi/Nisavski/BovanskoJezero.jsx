/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import bovanskoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/desktop/bovanskoJezero1.jpg";
import bovanskoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/desktop/bovanskoJezero2.jpg";
import bovanskoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/desktop/bovanskoJezero3.jpg";
import bovanskoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/desktop/bovanskoJezero4.jpg";
import bovanskoJezero5 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/desktop/bovanskoJezero5.jpg";
import bovanskoJezero11 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/mobile/bovanskoJezeroM1.jpg";
import bovanskoJezero22 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/mobile/bovanskoJezeroM2.jpg";
import bovanskoJezero33 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/mobile/bovanskoJezeroM3.jpg";
import bovanskoJezero44 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/mobile/bovanskoJezeroM4.jpg";
import bovanskoJezero55 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/BovanskoJezero/mobile/bovanskoJezeroM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";
import { Helmet } from "react-helmet-async";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";

const BovanskoJezero = () => {
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

        <title>{switchLanguage === 'rs' ? "Bovansko jezero – Letnja destinacija za kupanje i prirodu | Serbia Wonders" : "Bovan Lake – A Summer Destination for Swimming and Nature | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Bovansko jezero, smešteno između Sokobanje i Aleksinca, idealno je mesto za kupanje, ribolov, jedrenje i kampovanje. Uživate u prirodi, čistoj vodi i miru juga Srbije."
            :
            "Bovansko Lake, located between Sokobanja and Aleksinac, is a perfect summer destination for swimming, fishing, sailing, and camping. Enjoy the clean water and peaceful surroundings of southern Serbia."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Bovansko jezero, Aleksinac, Sokobanja, letovanje u Srbiji, kupanje, kampovanje, ribolov, jedrenje, priroda Srbije, letnja destinacija"
            :
            "Bovansko Lake, Serbia lake, summer in Serbia, swimming, fishing, camping, sailing, nature getaway, Sokobanja, Aleksinac, travel Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/bovansko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/bovansko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/bovansko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/bovansko-jezero"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(nisavskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${bovanskoJezero11} 450w, ${bovanskoJezero1} `} alt="Bovansko Jezero 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Bovansko Jezero</h1>

              <section lang="sr">
                <p>
                  Mesto <strong>Bovan</strong>, koje se nalazi između <em>Sokobanje</em> i <em>Aleksinca</em>, domaćin je
                  veštačkog <strong>Bovanskog jezera</strong>, koje je nastalo kao deo sistema
                  hidrocentrale <em>Đerdap</em>. Iako je njegovo osnovno značenje u tehnološkim
                  funkcijama, <strong>Bovansko jezero</strong> je vremenom steklo reputaciju zahvaljujući
                  prirodnim lepotama i turističkim potencijalima, pa je danas postalo
                  jedno od popularnijih odredišta u ovom delu Srbije.
                </p>
              </section>

              <img srcSet={`${bovanskoJezero22} 450w, ${bovanskoJezero2}`} alt="Bovansko Jezero 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Bovansko jezero</strong> je nastalo izgradnjom brane na reci <em>Sokobanjskoj Moravici</em>,
                  čime su stvorena brojna atraktivna mesta za kupanje i
                  opuštanje. Jezero je dugo <strong>8 kilometara</strong> i široko <strong>500 metara</strong>, a
                  projektovano je tako da akumulira vodu iz planinskih reka i obezbeđuje
                  snabdevanje <em>Aleksinca</em> pijaćom vodom. Zbog svoje važnosti u različitim
                  aspektima, ovo jezero je postalo prepoznatljivo, a poslednjih godina
                  posebno se izdvaja kao omiljena destinacija za odmor i zabavu.
                </p>
              </section>

              <img srcSet={`${bovanskoJezero33} 450w, ${bovanskoJezero3}`} alt="Bovansko Jezero 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Bovansko jezero</strong>, smešteno u prelepom prirodnom okruženju, deluje kao da
                  je oduvek bilo deo ovog kraja. Njegove obale su lako pristupačne, a
                  prostrane plaže savršene su za sve koji žele da se opuste i osveže u
                  bistroj vodi tokom vrelih letnjih dana. Jezero je pogodno i za mlade i
                  za starije posetioce, nudeći raznovrsne aktivnosti.
                  <br /><br />
                  Plivanje i kupanje su posebno prijatni zahvaljujući čistoj i svežoj
                  vodi. Ljubitelji ribolova uživaće u velikoj raznovrsnosti riba koje
                  nastanjuju jezero, kao što su <em>som</em>, <em>smuđ</em>, <em>šaran</em>, <em>mrena</em>, a povremeno se
                  može uloviti i <em>štuka</em>. Za one koji vole sportove na vodi, jezero je
                  idealno za plovidbu, jedrenje ili splavljanje. Takođe, u okolini se
                  nalaze prostrana mesta pogodna za piknike, roštiljanje i kampovanje, što
                  je odlično za one koji žele da uživaju u prirodi.
                </p>
              </section>

              <img srcSet={`${bovanskoJezero44} 450w, ${bovanskoJezero4}`} alt="Bovansko Jezero 4" loading="lazy" />

              <section lang="sr">
                <p>
                  U blizini sela <strong>Bovan</strong> imate priliku da iznajmite pedalinu ili čamac i
                  uživate u opuštajućoj vožnji po jezeru. Ovo je savršeno mesto za
                  opuštanje, zabavu i odmor, jer će vas mirno okruženje <strong>Bovanskog jezera</strong>
                  potpuno opustiti i razmaziti. Zbog svega toga, ovo jezero predstavlja
                  idealnu destinaciju za letnji odmor, ali i odličnu alternativu za one
                  koji žele uživanje u prirodi, a ne na moru.
                </p>
              </section>

              <img srcSet={`${bovanskoJezero55} 450w, ${bovanskoJezero5}`} alt="Bovansko Jezero 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Bovansko jezero</strong> takođe domaćin je jedriličarske regate "<em>Bovan</em>", koja se
                  održava u aprilu i septembru, a možete joj prisustvovati i uživati u
                  uzbudljivim takmičenjima. Pored toga, često se organizuju i razna
                  ribolovačka takmičenja, koja privlače ljubitelje ribolova sa svih
                  strana.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Bovan Lake</h1>

              <section lang="en">
                <p>
                  The town of <strong>Bovan</strong>, located between <em>Sokobanja</em> and <em>Aleksinac</em>, is home to the
                  artificial <strong>Bovan Lake</strong>, which was created as part of the
                  Đerdap hydroelectric system. Although its primary purpose is technological,
                  <strong>Bovan Lake</strong> has over time gained a reputation thanks to its
                  natural beauty and tourist potential, and today it has become
                  one of the more popular destinations in this part of Serbia.
                </p>
              </section>

              <img srcSet={`${bovanskoJezero22} 450w, ${bovanskoJezero2}`} alt="Bovan Lake 2" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Bovan Lake</strong> was formed by constructing a dam on the river <em>Sokobanjska Moravica</em>,
                  creating numerous attractive spots for swimming and relaxation.
                  The lake is <strong>8 kilometers</strong> long and <strong>500 meters</strong> wide, and
                  it was designed to accumulate water from mountain rivers and provide
                  drinking water supply to <em>Aleksinac</em>. Due to its importance in various
                  aspects, this lake has become well known, and in recent years
                  it has especially stood out as a favorite destination for rest and recreation.
                </p>
              </section>

              <img srcSet={`${bovanskoJezero33} 450w, ${bovanskoJezero3}`} alt="Bovan Lake 3" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Bovan Lake</strong>, located in a beautiful natural environment, feels like it
                  has always been part of this region. Its shores are easily accessible, and
                  the spacious beaches are perfect for anyone wanting to relax and refresh in
                  the clear water during hot summer days. The lake is suitable for both young and
                  older visitors, offering a variety of activities.
                  <br /><br />
                  Swimming and bathing are especially pleasant thanks to the clean and fresh
                  water. Fishing enthusiasts will enjoy the wide variety of fish inhabiting the lake,
                  such as <em>catfish</em>, <em>zander</em>, <em>carp</em>, <em>barbel</em>, and occasionally
                  <em>pike</em> can be caught. For those who enjoy water sports, the lake is
                  ideal for boating, sailing, or rafting. Also, there are spacious areas nearby
                  suitable for picnics, barbecues, and camping, which is perfect for those who want to enjoy nature.
                </p>
              </section>

              <img srcSet={`${bovanskoJezero44} 450w, ${bovanskoJezero4}`} alt="Bovan Lake 4" loading="lazy" />

              <section lang="en">
                <p>
                  Near the village of <strong>Bovan</strong>, you have the opportunity to rent a pedal boat or a rowboat and
                  enjoy a relaxing ride on the lake. This is a perfect place for
                  relaxation, fun, and rest, as the peaceful surroundings of <strong>Bovan Lake</strong>
                  will completely relax and pamper you. Because of all this, this lake represents
                  an ideal destination for a summer vacation, but also a great alternative for those
                  who want to enjoy nature rather than the seaside.
                </p>
              </section>

              <img srcSet={`${bovanskoJezero55} 450w, ${bovanskoJezero5}`} alt="Bovan Lake 5" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Bovan Lake</strong> is also host to the sailing regatta "Bovan," held in April and September,
                  which you can attend and enjoy exciting competitions. Additionally, various
                  fishing competitions are often organized here, attracting fishing enthusiasts from all
                  over.
                </p>
              </section>

            </>
          )
        }

      </div >
    </>
  );
};


export default BovanskoJezero;