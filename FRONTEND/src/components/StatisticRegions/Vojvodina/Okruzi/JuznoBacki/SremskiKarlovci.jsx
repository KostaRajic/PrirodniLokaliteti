/* eslint-disable react/no-unknown-property */
import karlovci1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci1.jpg";
import karlovci2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci2.jpg";
import karlovci3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci3.jpg";
import karlovci4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci4.jpg";
import karlovci5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/desktop/karlovci5.jpg";
import karlovci11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci1.jpg";
import karlovci22 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci2.jpg";
import karlovci33 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci3.jpg";
import karlovci44 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci4.jpg";
import karlovci55 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SremskiKarlovci/mobile/Mkarlovci5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SremskiKarlovci = () => {
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
            ? 'Sremski Karlovci | Istorija, kultura i vino na obali Dunava'
            : 'Sremski Karlovci | History, Culture & Wine on the Danube'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Sremski Karlovci su čuveno mesto bogate istorije, barokne arhitekture i vrhunskog vinarstva. Posetite Česmu Četiri lava, gimnaziju, crkve i uživajte u najboljem vinu Srbije.'
              : 'Sremski Karlovci is a famous town of rich history, baroque architecture, and excellent winemaking. Visit the Four Lions Fountain, historic landmarks, and enjoy the best wines in Serbia.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Sremski Karlovci, vinarije, vino, barokna arhitektura, Česma Četiri lava, Dunav, istorija, kultura, znamenitosti, Novi Sad, turistička destinacija'
              : 'Sremski Karlovci, wineries, wine, baroque architecture, Four Lions Fountain, Danube, history, culture, landmarks, Novi Sad, travel destination'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/sremski-karlovci`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/sremski-karlovci"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/sremski-karlovci"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/sremski-karlovci"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(JuznoBackiPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${karlovci11} 450w, ${karlovci1} `} alt="Sremski Karlovci 1" />

        <h1
          style={{ color: "white" }}>
          Sremski Karlovci
        </h1>

        {switchLanguage === 'rs' ? (
          <>

            <section lang="sr">
              <p>
                <strong>Sremski Karlovci</strong> su mali grad u Vojvodini, smešten na desnoj obali reke
                <strong>Dunav</strong>, u blizini grada <strong>Novi Sad</strong>. Poznati su po svojoj bogatoj istoriji,
                kulturnom nasleđu, prelepim <em>baroknim građevinama</em>, kao i tradiciji
                <em>vinarstva</em>.Sremski Karlovci su nekada bili centar <strong>Srpske pravoslavne
                  crkve</strong> i jedan od najvažnijih kulturnih centara u regionu.
              </p>
            </section>

            <img srcSet={`${karlovci22} 450w, ${karlovci2} `} alt="Sremski Karlovci 2" />

            <section lang="sr">
              <p>
                Kada se uželite <strong>unikatne i šarene arhitekture</strong> i čaše dobrog vina, vreme
                je da se uputite u <strong>Sremske Karlovce</strong>. O ovom malom vojvođanskom mestu
                pisao je <strong>Branko Radičević</strong>, u njemu možete da <em>lajete na zvezde</em>, pijete
                <em>vodu iz glave lava</em> i ručate sa pogledom na <strong>Dunav</strong>. U nastavku bloga
                sprovešćemo vas kroz <strong>najpoznatije atrakcije</strong> u Sremskim Karlovcima koje
                ne smete propustiti, uputiti vas u <strong>dobro poznate vinarije i restorane</strong>,
                na vama je samo da se spremate za put.
              </p>
            </section>

            <img srcSet={`${karlovci33} 450w, ${karlovci3} `} alt="Sremski Karlovci 3" />

            <section lang="sr">
              <p>
                Da li ste spremni za razgibavanje pored česme?<strong>Česma Četiri lava</strong> može se
                posmatrati i kao <em>spomenik kulture</em> s obzirom na to koliko je čuvena i
                značajna. Ova unikatna česma, čije su slavine simbolično uređene u
                obliku <em>lavlje glave</em>, nalazi se u <strong>samom srcu Karlovca</strong> i vremenom je
                postala <em>mesto susreta</em>. Česma je nemi svedok vremena koje prolaze, ali
                uspela je da verno isprati mnoge đake, profesore, znatiželjne turiste,
                kao i mnoge televizijske ekipe.Možete je pronaći nadomak <strong>gimnazije</strong>,
                voda sa nje je <em>čista i osvežavajuća</em>, a takođe je i odlično mesto za
                fotografisanje.Ako je verovati predanju, svi koji popiju vodu <strong>vratiće
                  se u Karlovce</strong> i u njima se <strong>venčati</strong>!
              </p>
            </section>

            <img srcSet={`${karlovci44} 450w, ${karlovci4} `} alt="Sremski Karlovci 4" />

            <section lang="sr">
              <p>
                Jedno je sasvim sigurno, <strong>znamenitosti u Sremskim Karlovcima</strong> ima zaista
                na pretek.<strong>Sremski Karlovci</strong> poseduju sve što vam treba za savršen izlet,
                počevši od <em>arhitekture</em>, preko <em>restorana</em> i <em>vinarija sa dugom tradicijom</em>,
                sve do <em>istaknutih spomenika kulture</em> i <em>parkova</em>. Mnogi Karlovce nazivaju
                <strong>živim muzejom</strong>, te će vam sama šetnja kroz <em>centralne gradske ulice</em> biti
                pravi užitak.
              </p>
            </section>

            <img
              srcSet={`${karlovci55} 450w, ${karlovci5} `}
              alt="Sremski Karlovci 5" />

            <section lang="sr">
              <p>
                Verujemo da će <strong>ljubitelji vina</strong> i <strong>iskusni gurmani</strong> biti oduševljeni
                prelepim vinogradima i kvalitetnim vinima ovog kraja.<strong>Vinska tradicija</strong>
                je posebno jaka na severu naše zemlje, a <strong>Sremski Karlovci</strong> nisu izuzetak.
                <em>Vina</em> koja probate u ovom gradu biće jedna od <em>najboljih u celoj zemlji</em>.
                Nakon što obiđete sve znamenitosti, lepote i atrakcije Karlovaca, naša
                preporuka je i da posetite neku od <strong>karlovačkih prestižnih vinarija</strong> i
                prepustite se čarima ovog <em>reskog i opojnog pića</em>.
              </p>
            </section>
          </>

        )
          :
          (

            <>
              <section lang="en">
                <p>
                  <strong>Sremski Karlovci</strong> is a small town in Vojvodina, located on the right bank of the
                  <strong>Danube River</strong>, near the city of <strong>Novi Sad</strong>. It is known for its rich history,
                  cultural heritage, beautiful <em>Baroque architecture</em>, as well as a long tradition of
                  <em>winemaking</em>.Sremski Karlovci was once the center of the <strong>Serbian Orthodox Church</strong>
                  and one of the most important cultural centers in the region.
                </p>
              </section>

              <img srcSet={`${karlovci22} 450w, ${karlovci2} `} alt="Sremski Karlovci 2" />

              <section lang="en">
                <p>
                  When you’re in the mood for <strong>unique and colorful architecture</strong> and a glass of good wine, it’s time to head to <strong>Sremski Karlovci</strong>.This small town in Vojvodina was written about by <strong>Branko Radičević</strong>; here, you can <em>howl at the stars</em>, drink <em>water from a lion’s head</em>, and enjoy lunch with a view of the <strong>Danube</strong>.In the rest of this blog, we’ll guide you through the <strong>most famous attractions</strong> in Sremski Karlovci that you shouldn’t miss, introduce you to its <strong>well-known wineries and restaurants</strong> — all that’s left is for you to get ready for the trip.
                </p>
              </section>

              <img srcSet={`${karlovci33} 450w, ${karlovci3} `} alt="Sremski Karlovci 3" />

              <section lang="en">
                <p>
                  Are you ready to stretch by the fountain?The <strong>Four Lions Fountain</strong> can also be seen as a <em>cultural monument</em> due to its fame and significance.This unique fountain, whose taps are symbolically shaped like <em>lion heads</em>, is located in the <strong>very heart of Karlovci</strong> and over time has become a popular <em>meeting spot</em>.The fountain is a silent witness to the passage of time, yet it has faithfully seen off generations of students, teachers, curious tourists, and many television crews.You can find it near the <strong>gymnasium</strong>; the water is <em>clean and refreshing</em>, and it is also a great place for photos.According to legend, everyone who drinks the water will <strong>return to Karlovci</strong> and <strong>get married</strong> there!
                </p>
              </section>

              <img srcSet={`${karlovci44} 450w, ${karlovci4} `} alt="Sremski Karlovci 4" />

              <section lang="en">
                <p>
                  One thing is certain — there is no shortage of <strong>landmarks in Sremski Karlovci</strong>.<strong>Sremski Karlovci</strong> offers everything you need for a perfect day trip, from its remarkable <em>architecture</em>, through <em>restaurants</em> and <em>wineries with a long tradition</em>, to <em>notable cultural monuments</em> and <em>parks</em>.Many people call Karlovci a <strong>living museum</strong>, and just walking through its <em>central city streets</em> will be a true delight.
                </p>
              </section>

              <img
                srcSet={`${karlovci55} 450w, ${karlovci5} `}
                alt="Sremski Karlovci 5" />

              <section lang="en">
                <p>
                  We believe that <strong>wine lovers</strong> and <strong>experienced gourmets</strong> will be delighted by the beautiful vineyards and high-quality wines of this region.The <strong>wine tradition</strong> is especially strong in the north of our country, and <strong>Sremski Karlovci</strong> are no exception.The <em>wines</em> you taste in this town will be among the <em>best in the entire country</em>.After visiting all the landmarks, beauties, and attractions of Karlovci, we also recommend visiting one of the <strong>prestigious local wineries</strong> and surrendering to the charms of this <em>crisp and intoxicating drink</em>.
                </p>
              </section>
            </>

          )}
      </div>
    </>
  );
};


export default SremskiKarlovci;