/* eslint-disable react/no-unknown-property */
import beocin1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin1.jpg";
import beocin2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin2.jpg";
import beocin3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin3.jpg";
import beocin4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin4.jpg";
import beocin5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/desktop/mBeocin5.jpg";
import beocin11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM1.jpg";
import beocin22 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM2.jpg";
import beocin33 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM3.jpg";
import beocin44 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM4.jpg";
import beocin55 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirBeocin/mobile/mBeocinM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirBeocin = () => {
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
            ? 'Manastir Beočin | Duhovno utočište Fruške gore'
            : 'Beočin Monastery | Spiritual Haven of Fruška Gora'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Manastir Beočin, osnovan u 15. veku, jedno je od najznačajnijih duhovnih središta Fruške gore. Poznat po svojoj istoriji, ikonostasu i mirnom prirodnom okruženju.'
              : 'Founded in the 15th century, Beočin Monastery is one of the most significant spiritual centers of Fruška Gora, known for its history, iconostasis, and serene natural surroundings.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Manastir Beočin, Fruška gora, pravoslavni manastiri, duhovni turizam, Uspenje Presvete Bogorodice, srpsko pravoslavlje, ikonostas, molitva, istorija Srbije'
              : 'Beočin Monastery, Fruška Gora, Serbian Orthodox monasteries, spiritual tourism, Dormition of the Theotokos, Serbian Orthodoxy, iconostasis, prayer, Serbian history'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/manastir-beocin`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/manastir-beocin"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/manastir-beocin"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/manastir-beocin"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(JuznoBackiPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${beocin33} 450w, ${beocin3} `} alt="Manastir Beočin 1" />

        {switchLanguage === 'rs' ? (

          <>

            <h1 style={{ color: 'white' }}>
              Manastir Beočin
            </h1>

            <section lang='sr'>
              <p>
                <strong>Manastir Beočin</strong> je <em>pravoslavni manastir</em> koji se nalazi u istoimenom naselju <strong>Beočin</strong>, u južnom delu <em>Vojvodine</em>, u blizini grada <strong>Novog Sada</strong>.
              </p>
              <p>
                Manastir je smešten na padinama <strong>Fruške gore</strong>, u prelepom prirodnom okruženju koje pruža mir i duhovnu tišinu, što ga čini idealnim mestom za <em>molitvu</em>, <em>meditaciju</em> i duhovne posete.
              </p>
            </section>

            <img srcSet={`${beocin11} 450w, ${beocin1} `} alt="Manastir Beočin 2" />

            <section lang='sr'>
              <p>
                <strong>Manastir Beočin</strong> ima bogatu istoriju, a osnovan je u <em>15. veku</em>, tačnije <strong>1443. godine</strong>, iako se neki izvori navode da je manastir postojao i ranije. Prema istorijskim podacima, manastir je bio deo bogate tradicije <em>pravoslavnog monaštva</em> na <strong>Fruškoj gori</strong>, koja je tokom srednjeg veka bila centar <em>duhovnog života</em> i <em>kulturnog stvaralaštva</em>.
              </p>
            </section>
            <img srcSet={`${beocin44} 450w, ${beocin4} `} alt="Manastir Beočin 3" />

            <section lang='sr'>
              <p>
                Manastir je nekoliko puta bio <strong>uništavan i obnavljan</strong> tokom istorije, preživljavajući napade i vladavinu različitih političkih režima. Tokom <em>osmanske vlasti</em>, manastir je često bio zapušten, ali je nakon <strong>oslobođenja Srbije</strong> obnovljen i ponovo postao aktivno <em>duhovno središte</em>.
              </p>
            </section>
            <img srcSet={`${beocin22} 450w, ${beocin2} `} alt="Manastir Beočin 4" />

            <section lang='sr'>
              <p>
                <strong>Manastir Beočin</strong> je pravi primer tradicionalne <em>srpske pravoslavne arhitekture</em>, sa crkvom posvećenom <strong>Uspenju Presvete Bogorodice</strong>. Crkva je izgrađena u <em>baroknom stilu</em>, sa visokim svodom i bogato ukrašenim <strong>ikonostasom</strong>. Unutrašnjost crkve je ukrašena <em>freskama</em> i <em>ikonama</em>, koje su delo talentovanih umetnika tog vremena. Pored crkve, u kompleksu manastira nalaze se <strong>monaške ćelije</strong>, <strong>trpeza</strong> i druga pomoćna zdanja. Uživanje u duhovnoj tišini i lepoti prirode često privuče posetioce koji žele da provedu neko vreme u <em>molitvi</em> i <em>razmišljanju</em>.
              </p>
            </section>
            <img srcSet={`${beocin55} 450w, ${beocin5} `} alt="Manastir Beočin 5" />

            <section lang='sr'>
              <p>
                Danas je <strong>manastir Beočin</strong> aktivan manastir, u kojem žive <em>monasi</em> koji se bave <em>duhovnim životom</em>, <em>molitvom</em>, a takođe i sačuvavanjem i obnovom <strong>kulturno-istorijskog nasleđa</strong>. Manastir je takođe mesto <em>hodočašća</em> i <em>spiritualnih okupljanja</em>, a posetioci mogu uživati u njegovoj tišini i duhovnoj atmosferi. <strong>Manastir Beočin</strong> je i <em>turistička destinacija</em>, koja privlači ljubitelje <em>istorije</em>, <em>religije</em> i <em>prirode</em>. Posetioci mogu obići manastir, učestvovati u <em>molitvama</em> i <em>liturgijama</em>, kao i uživati u prelepom okruženju <strong>Fruške gore</strong>.
              </p>
            </section>
          </>

        )
          :
          (
            <>

              <h1 style={{ color: 'white' }}>
                Beočin Monastery
              </h1>

              <section lang="en">
                <p>
                  <strong>Beočin Monastery</strong> is a <em>Serbian Orthodox monastery</em> located in the eponymous settlement of <strong>Beočin</strong>, in the southern part of <em>Vojvodina</em>, near the city of <strong>Novi Sad</strong>.
                </p>
                <p>
                  The monastery is situated on the slopes of <strong>Fruška Gora</strong>, in a beautiful natural environment that offers peace and spiritual silence, making it an ideal place for <em>prayer</em>, <em>meditation</em>, and spiritual visits.
                </p>
              </section>
              <img srcSet={`${beocin11} 450w, ${beocin1} `} alt="Manastir Beočin 2" />
              <section lang="en">
                <p>
                  <strong>Beočin Monastery</strong> has a rich history and was founded in the <em>15th century</em>, specifically in <strong>1443</strong>, although some sources suggest the monastery existed even earlier. According to historical records, the monastery was part of the rich tradition of <em>Orthodox monasticism</em> on <strong>Fruška Gora</strong>, which during the Middle Ages was a center of <em>spiritual life</em> and <em>cultural creativity</em>.
                </p>
              </section>
              <img srcSet={`${beocin44} 450w, ${beocin4} `} alt="Manastir Beočin 3" />
              <section lang="en">
                <p>
                  The monastery was <strong>destroyed and rebuilt</strong> several times throughout history, surviving attacks and rule under various political regimes. During the <em>Ottoman rule</em>, the monastery was often neglected, but after the <strong>liberation of Serbia</strong>, it was restored and once again became an active <em>spiritual center</em>.
                </p>
              </section>
              <img srcSet={`${beocin22} 450w, ${beocin2} `} alt="Manastir Beočin 4" />
              <section lang="en">
                <p>
                  <strong>Beočin Monastery</strong> is a true example of traditional <em>Serbian Orthodox architecture</em>, with a church dedicated to the <strong>Assumption of the Blessed Virgin Mary</strong>. The church is built in the <em>Baroque style</em>, featuring a high vault and a richly decorated <strong>iconostasis</strong>. The interior of the church is adorned with <em>frescoes</em> and <em>icons</em>, created by talented artists of that time. Besides the church, the monastery complex includes <strong>monastic cells</strong>, a <strong>refectory</strong>, and other auxiliary buildings. Enjoying the spiritual silence and natural beauty often attracts visitors who wish to spend some time in <em>prayer</em> and <em>reflection</em>.
                </p>
              </section>
              <img srcSet={`${beocin55} 450w, ${beocin5} `} alt="Manastir Beočin 5" />
              <section lang="en">
                <p>
                  Today, <strong>Beočin Monastery</strong> is an active monastery, home to <em>monks</em> who dedicate themselves to <em>spiritual life</em>, <em>prayer</em>, as well as the preservation and restoration of <strong>cultural and historical heritage</strong>. The monastery is also a place of <em>pilgrimage</em> and <em>spiritual gatherings</em>, where visitors can enjoy its tranquility and spiritual atmosphere. <strong>Beočin Monastery</strong> is also a <em>tourist destination</em>, attracting lovers of <em>history</em>, <em>religion</em>, and <em>nature</em>. Visitors can tour the monastery, participate in <em>prayers</em> and <em>liturgies</em>, and enjoy the beautiful surroundings of <strong>Fruška Gora</strong>.
                </p>
              </section>
            </>

          )}
      </div>
    </>
  );
};


export default ManastirBeocin;