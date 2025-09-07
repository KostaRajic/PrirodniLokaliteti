/* eslint-disable react/no-unknown-property */
import belaC1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC1.jpg";
import belaC2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC2.jpg";
import belaC3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC3.jpg";
import belaC4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC4.jpg";
import belaC5 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC5.jpg";
import belaC6 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC6.jpg";
import belaC7 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/desktop/BC7.jpg";
import belaC11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC1.jpg";
import belaC22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC2.jpg";
import belaC33 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC3.jpg";
import belaC44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC4.jpg";
import belaC55 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC5.jpg";
import belaC66 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC6.jpg";
import belaC77 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/BelaCrkva/mobile/MBC7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const BelaCrkva = () => {
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
            ? 'Bela Crkva | Jezera, priroda i manifestacije'
            : 'Bela Crkva | Lakes, Nature & Cultural Events'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Bela Crkva je turistička oaza juga Banata – poznata po prelepim jezerima, Tamišu, rekreaciji i manifestacijama poput maskenbala i letnjih festivala. Idealna destinacija za prirodni odmor.'
              : 'Bela Crkva is a tourism gem in southern Banat, known for beautiful lakes, the Tamiš River, outdoor recreation, and events like masquerade parades and summer festivals. Perfect for a nature escape.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Bela Crkva, jezera, turizam, ekoturizam, priroda, Tamiš, rekreacija, kupanje, manifestacije, maskenbal, letnji festivali, vikend destinacija, Gradski park'
              : 'Bela Crkva, lakes, tourism, ecotourism, nature, Tamiš River, recreation, swimming, cultural events, masquerade, summer festivals, weekend getaway, town park'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/bela-crkva`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/bela-crkva"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/bela-crkva"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/bela-crkva"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(juznoBanatskiPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${belaC55} 450w, ${belaC5} `} alt="Bela Crkva 1" />

        <h2>Bela Crkva</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Bela Crkva</strong>, smeštena u <em>jugozapadnom delu Srbije</em>, poznata je po svojim <em>prirodnim lepotama</em> i <em>bogatom kulturnom nasleđu</em>, što ovu destinaciju čini <strong>interesantnom za turizam</strong>.
                </p>
                <p>
                  Grad i okolna područja nude raznovrsne mogućnosti za <strong>ekoturizam</strong>, <em>rekreativne aktivnosti</em> i uživanje u prirodi.
                </p>
              </section>

              <img srcSet={`${belaC44} 450w, ${belaC4} `} alt="Bela Crkva 2" />

              <section lang="sr">
                <p>
                  <strong>Bela Crkva</strong> se nalazi u blizini <em>reke Tamiš</em>, okružena bogatim <em>šumama, močvarama i jezerima</em>, što ovu oblast čini idealnom za <strong>ljubitelje prirode</strong>.
                </p>
                <p>
                  Grad je posebno poznat po jezerima u okolini, koja su popularna za <em>pecanje, vožnju čamcem</em> i druge <em>vodene aktivnosti</em>. Jezera poput <strong>Bela Crkva</strong> i <strong>Crna Bara</strong> atraktivna su za posetioce koji uživaju u <em>mirnoj i netaknutoj prirodi</em>.
                </p>
                <p>
                  Bela Crkva i okolna područja predstavljaju idealnu destinaciju za <strong>ekoturizam</strong>. Obilazak prirodnih rezervata, šetnje kroz šumske staze, biciklizam i posmatranje ptica su među popularnim aktivnostima. Region je bogat raznovrsnim biljnim i životinjskim vrstama, što ga čini pogodnim za <em>ekološke ture</em>.
                </p>
              </section>

              <img srcSet={`${belaC11} 450w, ${belaC1} `} alt="Bela Crkva 3" />

              <section lang="sr">
                <p>
                  <strong>Gradski park</strong> predstavlja zelenu oazu u samom <em>centru Bele Crkve</em>, koja posetiocima pruža prijatan odmor od <em>gradske buke</em>.
                </p>
                <p>
                  U središtu parka nalazi se paviljon za svečanosti i okupljanja, koji podseća na <em>prošla vremena</em>. Prvi podaci o postojanju parka u Beloj Crkvi datiraju iz perioda <em>nakon 1840. godine</em>.
                </p>
                <p>
                  Godine 1912. podignut je današnji muzički paviljon, a 1913. godine izgrađeno je postrojenje sa bunarom i kućicom. Na kućici su urezani <em>geografska širina, dužina i nadmorska visina Bele Crkve</em>.
                </p>
                <p>
                  <strong>Gradski park u Beloj Crkvi</strong> ima pravilni <em>geometrijski oblik</em>, čije staze zvezdasto vode od dva centralna kružna platóa, u čijem je jednom centru postavljen <strong>Spomenik pobedi</strong>.
                </p>
              </section>

              <img srcSet={`${belaC33} 450w, ${belaC3} `} alt="Bela Crkva 4" />

              <section lang="sr">
                <p>
                  <strong>Bela Crkva</strong> je poznata po svom <em>prirodnom okruženju</em> i blizini nekoliko <em>jezera</em>, koja pružaju odlične uslove za <strong>odmor</strong> i <strong>uživanje u vodi</strong> tokom <em>letnjih meseci</em>.
                </p>
                <p>
                  <strong>Plaža na jezeru</strong> predstavlja popularno mesto za <em>kupanje, opuštanje i rekreaciju</em>. Jezero je poznato po <em>čistoći vode</em> i <em>lepoj prirodi</em> koja ga okružuje, što ga čini atraktivnim za sve koji žele da pobegnu od <em>gradske vreve</em> i uživaju u <em>prirodnom ambijentu</em>.
                </p>
                <p>
                  Plaža nudi različite sadržaje za posetioce, uključujući <em>ležaljke, restorane i kafiće</em>, kao i prostrane <em>travnate površine za sunčanje</em>. Voda je pogodna za kupanje, a ljubitelji <strong>sportova na vodi</strong> mogu uživati u <em>vožnji čamcem ili pedalini</em>. Okolica jezera je idealna za šetnje, a mnogi posetioci koriste priliku da uživaju u <em>prirodi i tišini</em>.
                </p>
                <p>
                  Ovaj deo Bele Crkve je takođe popularan među <strong>porodicama</strong>, jer se ovde mogu provoditi opušteni dani uz vodu, istovremeno uživajući u svim prednostima prirodnog okruženja.
                </p>
                <p>
                  <strong>Bela Crkva</strong> je domaćin različitih <em>kulturnih manifestacija</em> tokom godine. Među njima se izdvaja <strong>Bela Crkva Summer Fest</strong>, manifestacija koja okuplja posetioce sa ciljem promocije <em>kulture, muzike i umetnosti</em>. Takođe, grad organizuje i lokalne manifestacije kao što su <em>Izložba domaćih proizvoda, festivali folklora i narodne muzike</em>, kao i <em>sportski događaji</em>.
                </p>
              </section>

              <img srcSet={`${belaC22} 450w, ${belaC2} `} alt="Bela Crkva 5" />

              <section lang="sr">
                <p>
                  <strong>Gradsko jezero</strong> se prostire duž <em>leve strane puta za Kovin</em>, uz <em>zapadni obod Bele Crkve</em>.
                </p>
                <p>
                  Na <em>severnoj strani</em> izgrađena je <strong>betonska obala</strong> sa blagim prelazom ka većoj dubini, iznad koje se nalazi <em>restoran „Jezero”</em>.
                </p>
                <p>
                  U produžetku, na oko 300 metara, smešteni su <strong>bungalovi sa 66 ležajeva</strong>.
                </p>
                <p>
                  Prosečna dubina jezera je oko <em>3 metra</em>, dok tokom maksimalnog vodostaja ne prelazi <em>6,5 metara</em>.
                </p>
              </section>

              <img srcSet={`${belaC66} 450w, ${belaC6} `} alt="Bela Crkva 6" />

              <section lang="sr">
                <p>
                  <strong>Reka Tamiš</strong>, koja protiče kroz grad, predstavlja važan turistički resurs zbog brojnih <em>prirodnih lepota</em> u njenoj blizini.
                </p>
                <p>
                  Posetioci mogu uživati u <strong>vožnji čamcem</strong>, <strong>ribolovu</strong> i <em>šetnjama uz obalu</em>.
                </p>
                <p>
                  Pored toga, reka pruža mogućnosti za različite <strong>sportske aktivnosti</strong>, uključujući <em>kajak</em> i <em>rafting</em>.
                </p>
              </section>

              <img srcSet={`${belaC77} 450w, ${belaC7} `} alt="Bela Crkva 7" />

              <section lang="sr">
                <p>
                  Ovo je <em>stara manifestacija</em>, koja se u ovim krajevima zove <strong>„maskembal”</strong>.
                </p>
                <p>
                  Datum manifestacije se prilagođava <em>početku posta u pravoslavnom kalendaru</em> (februar–marta).
                </p>
                <p>
                  Karnevalsku povorku organizuje <strong>Mesna zajednica</strong> u saradnji sa <strong>OŠ "Mihael Sadoveanu"</strong> i meštanima sela.
                </p>
                <p>
                  Povorku predvodi folklorna grupa koju nazivaju <em>"kalušari"</em>. Grupa mladih u tradicionalnoj rumunskoj nošnji, izvodi igru koja se igra samo tog dana.
                </p>
                <p>
                  Prethodno, u toku prepodneva, <em>"kalušari"</em> obiđu selo i u svakoj kući odigraju ples.
                </p>
                <p>
                  Povorka sa eksponatima prolazi glavnom ulicom Grebenca. U toku manifestacije organizuje se <strong>izložba ručnih radova</strong>, kao i <strong>kompozicije sa starim nameštajem</strong>.
                </p>
              </section>
            </>

          )
          :
          (
            <><section lang="en">
              <p>
                <strong>Bela Crkva</strong>, located near the <em>Tamiš River</em>, is surrounded by lush <em>forests, wetlands, and lakes</em>, making this area ideal for <strong>nature lovers</strong>. The town is especially known for its nearby lakes, popular for <em>fishing, boating</em>, and other <em>water-based activities</em>. Lakes such as <strong>Bela Crkva</strong> and <strong>Crna Bara</strong> attract visitors seeking a <em>peaceful and untouched natural setting</em>. Bela Crkva and its surroundings are an ideal destination for <strong>ecotourism</strong>. Visiting nature reserves, walking forest trails, cycling, and birdwatching are among the popular activities. The region hosts diverse plant and animal species, making it suitable for <em>eco-tours</em>.
              </p>
            </section><img srcSet={`${belaC44} 450w, ${belaC4}`} alt="Bela Crkva 2" /><section lang="en">
                <p>
                  <strong>City Park</strong> provides a green oasis in the very <em>center of Bela Crkva</em>, offering visitors a pleasant escape from the <em>city noise</em>.
                </p>
                <p>
                  At the heart of the park is a pavilion for ceremonies and gatherings that evokes a sense of <em>times past</em>. The first records of the park in Bela Crkva date back to <em>after 1840</em>.
                </p>
                <p>
                  In <em>1912</em> the current music pavilion was built, and in <em>1913</em> a facility with a well and a small house was constructed. Geographic coordinates and the elevation of Bela Crkva were engraved on the house.
                </p>
                <p>
                  The <strong>City Park in Bela Crkva</strong> features a symmetrical <em>geometric layout</em>, with pathways radiating from two central circular plateaus—one of which hosts the <strong>Victory Monument</strong>.
                </p>
              </section><img srcSet={`${belaC33} 450w, ${belaC3}`} alt="Bela Crkva 4" /><section lang="en">
                <p>
                  <strong>Bela Crkva</strong> is known for its <em>natural surroundings</em> and proximity to several <em>lakes</em>, which offer excellent opportunities for <strong>rest and water enjoyment</strong> during the <em>summer months</em>.
                </p>
                <p>
                  The <strong>beach by the lake</strong> is a popular spot for <em>swimming, relaxation, and recreation</em>. The water is known for its <em>clarity</em> and the scenic beauty surrounding it, attracting those looking to escape the <em>urban hustle</em> and enjoy the <em>natural ambiance</em>.
                </p>
                <p>
                  The beach offers various visitor amenities, including <em>loungers, restaurants, and cafés</em>, as well as spacious <em>grassy sunbathing areas</em>. The water is suitable for swimming, and fans of <strong>water sports</strong> can enjoy <em>boating or pedal boating</em>. The lakeside is ideal for walking, and many visitors take the opportunity to revel in the <em>nature and tranquility</em>.
                </p>
                <p>
                  This part of Bela Crkva is also popular with <strong>families</strong>, offering relaxed days by the water alongside all the benefits of a natural setting.
                </p>
                <p>
                  <strong>Bela Crkva</strong> hosts a variety of <em>cultural events</em> throughout the year. Among these is the <strong>Bela Crkva Summer Fest</strong>, which gathers visitors to promote <em>culture, music, and the arts</em>. The town also organizes local events such as the <em>Local Products Fair, folklore and traditional music festivals</em>, and <em>sports events</em>.
                </p>
              </section><img srcSet={`${belaC22} 450w, ${belaC2}`} alt="Bela Crkva 5" /><section lang="en">
                <p>
                  <strong>City Lake</strong> stretches along the <em>left side of the road to Kovin</em>, on the <em>western edge of Bela Crkva</em>.
                </p>
                <p>
                  On the <em>northern side</em> a <strong>concrete embankment</strong> has been built with a gentle slope leading into deeper water, above which stands the <em>“Jezero” restaurant</em>.
                </p>
                <p>
                  Continuing for about 300 meters are <strong>bungalows with 66 beds</strong>.
                </p>
                <p>
                  The lake’s average depth is around <em>3 meters</em>, and during maximum water levels it does not exceed <em>6.5 meters</em>.
                </p>
              </section><img srcSet={`${belaC66} 450w, ${belaC6}`} alt="Bela Crkva 6" /><section lang="en">
                <p>
                  <strong>The Tamiš River</strong>, which flows through the town, is an important tourist resource due to the many <em>natural attractions</em> along its banks.
                </p>
                <p>
                  Visitors can enjoy <strong>boating</strong>, <strong>fishing</strong>, and <em>riverside walks</em>.
                </p>
                <p>
                  Additionally, the river provides opportunities for various <strong>water sports activities</strong>, including <em>kayaking</em> and <em>rafting</em>.
                </p>
              </section><img srcSet={`${belaC77} 450w, ${belaC7}`} alt="Bela Crkva 7" /><section lang="en">
                <p>
                  This is an <em>old celebration</em> locally called <strong>“maskembal”</strong>.
                </p>
                <p>
                  The date of the celebration is adjusted according to the <em>start of Lent in the Orthodox calendar</em> (February–March).
                </p>
                <p>
                  The carnival procession is organized by the <strong>Local Community</strong> in cooperation with <strong>“Mihael Sadoveanu” Elementary School</strong> and the villagers.
                </p>
                <p>
                  The parade is led by a folklore group known as <em>"kalušari"</em>. A group of young people in traditional Romanian attire performs a dance that is only played on that day.
                </p>
                <p>
                  Earlier in the morning, the <em>"kalušari"</em> go around the village and perform the dance in every household.
                </p>
                <p>
                  The procession with exhibits passes through the main Grebenca street. During the celebration, an <strong>exhibition of handicrafts</strong> and <strong>compositions with old furniture</strong> is also arranged.
                </p>
              </section></>

          )}

      </div>
    </>
  );
};


export default BelaCrkva;