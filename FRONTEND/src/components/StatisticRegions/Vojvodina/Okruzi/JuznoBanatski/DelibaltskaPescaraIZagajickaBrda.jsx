/* eslint-disable react/no-unknown-property */
import zagajickaBrda1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/desktop/zagajickaBrda2.jpg";
import zagajickaBrda2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/desktop/zagajickaBrda3.jpg";
import zagajickaBrda3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/desktop/zagajickaBrda4.jpg";
import zagajickaBrda4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/desktop/zagajickaBrda5.jpg";
import zagajickaBrda5 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/desktop/zagajickaBrda6.jpg";
import zagajickaBrda6 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/desktop/zagajickaBrda7.jpg";
import zagajickaBrda11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/mobile/MzagajickaBrda2.jpg";
import zagajickaBrda22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/mobile/MzagajickaBrda3.jpg";
import zagajickaBrda33 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/mobile/MzagajickaBrda4.jpg";
import zagajickaBrda44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/mobile/MzagajickaBrda5.jpg";
import zagajickaBrda55 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/mobile/MzagajickaBrda6.jpg";
import zagajickaBrda66 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/ZagajickaBrda/mobile/MzagajickaBrda7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const DelibaltskaPescaraIZagajickaBrda = () => {
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
            ? 'Deliblatska peščara i Zagajička brda | Srpska Sahara i prirodni raj'
            : 'Deliblato Sands & Zagajička Hills | Serbia’s Natural Wonderland'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Deliblatska peščara je jedinstveni prirodni fenomen u Evropi – pustinjsko-šumski pejzaž sa zaštićenim biljnim i životinjskim vrstama. Zagajička brda nude nezaboravan pogled, idealna za šetnje i izlete.'
              : 'The Deliblato Sands is a unique natural phenomenon in Europe – a blend of desert and forest landscapes with rare and protected species. The Zagajička Hills offer scenic views, perfect for hikes and nature trips.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Deliblatska peščara, Zagajička brda, priroda, Srbija, ekoturizam, stepski pejzaži, Banat, ptice, biljne vrste, astma, rekreacija, pešačenje, izleti, zaštićene vrste, pustinja u Srbiji'
              : 'Deliblato Sands, Zagajička Hills, nature, Serbia, ecotourism, steppe landscapes, Banat, birdwatching, plant species, asthma recovery, recreation, hiking, day trips, protected species, Serbian desert'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/delibaltska-pescara-i-zagajicka-brda`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/delibaltska-pescara-i-zagajicka-brda"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/delibaltska-pescara-i-zagajicka-brda"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/delibaltska-pescara-i-zagajicka-brda"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(juznoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zagajickaBrda11} 450w, ${zagajickaBrda1} `} alt="Deliblatska Peščara" />

        {switchLanguage === 'rs' ?
          (

            <>
              <h1>Deliblatska Peščara i Zagajička Brda</h1>

              <section lang="sr">
                <p>
                  <strong>Deliblatska peščara</strong> je jedinstvena prirodna pojava u <em>Evropi</em>, smeštena u <em>južnom Banatu</em>, u <em>Vojvodini</em>, i prostire se na površini od oko <strong>35.000 hektara</strong>.
                </p>
                <p>
                  Ovaj specifičan predeo nastao je tokom <em>ledenog doba</em>, a čitava površina je prekrivena <strong>peskom</strong>. Zbog varijacija u sposobnosti tla da upija <em>vodu</em> i <em>hranljive materije</em>, na ovom području se razvijaju različiti oblici reljefa.
                </p>
                <p>
                  Na nekim mestima možete pronaći <strong>zelene površine</strong> sa <em>bogatom vegetacijom</em>, <em>guste šume</em>, ali i <strong>pustinjske pejzaže</strong>, što ovu peščaru čini <strong>izuzetno raznolikom i interesantnom</strong>.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda22} 450w, ${zagajickaBrda2} `} alt="Deliblatska Pescara" />

              <section lang="sr">
                <p>
                  Već više od <strong>dve stotine godina</strong>, <strong>Deliblatska peščara</strong> se pošumljava, ali <em>šumske površine</em> i dalje čine samo <em>mali deo</em> ove prostrane oblasti.
                </p>
                <p>
                  Usamljena stabla koja se pojavljuju na <strong>širokim prostranstvima</strong> postala su pravi <em>fenomen</em>, a posebno upečatljiva su na <strong>Zagajičkim brdima</strong>, gde na vrhu malih uzvišenja često možete videti samo <em>jedno drvo</em>, što stvara <strong>jedinstvenu sliku</strong>.
                </p>
                <p>
                  Ova peščara je <strong>1977. godine</strong> proglašena <em>specijalnim rezervatom prirode</em> i danas predstavlja jedno od <strong>najposebnijih</strong> i <strong>najvrednijih stepskih područja</strong> u Srbiji.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda33} 450w, ${zagajickaBrda3} `} alt="Zajegačko Brdo" />


              <section lang="sr">
                <p>
                  Tokom mnogih godina, <strong>vetrovi</strong> su duvali kroz <em>peske</em>, stvarajući <strong>drevne dine</strong> na dnu <em>Panonskog mora</em>. Kroz vreme, te dine su se oblikovale u <strong>manja brda</strong>, a tanak sloj zemlje stvorio je temelje za formiranje <strong>zelenih Zagajičkih brda</strong>.
                </p>
                <p>
                  Ova brda pripadaju <em>Specijalnom rezervatu prirode Deliblatska peščara</em> i nalaze se u <strong>opštini Bela Crkva</strong>, u blizini sela <em>Grebenac</em>.
                </p>
                <p>
                  Zanimljiv je i <em>istorijski aspekt</em>, jer su brda nekada bila deo teritorije sela <strong>Zagajica</strong>. Međutim, došlo je do dogovora prema kojem su <strong>Zagajička brda</strong> pripala <em>Grebencu</em>, dok je Grebenac u zamenu ustupio deo svoje teritorije <em>Zagajici</em>.
                </p>
                <p>
                  Iako se brda danas nazivaju <strong>Zagajička</strong>, deo su teritorije <em>Grebenca</em>, što povremeno izaziva <strong>nezadovoljstvo među meštanima</strong> koji bi voleli da se <em>promeni naziv</em>.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda44} 450w, ${zagajickaBrda4} `} alt="Zajegacko Brdo" />

              <section lang="sr">
                <p>
                  Postoji nekoliko načina da se dođe do <strong>Zagajićkih brda</strong>, a mi smo iz <em>Beograda</em> krenule putem preko <em>Pančeva</em> i <em>Kovina</em>, sve do sela <strong>Grebenac</strong>.
                </p>
                <p>
                  Kada stignete u <strong>Grebenac</strong>, skrenite <em>oštro levo prema groblju</em> i nastavite vožnju nekoliko kilometara. Na levoj strani puta, nakon nekoliko kilometara, uočićete <strong>Zagajićka brda</strong>.
                </p>
                <p>
                  Ovdje se <strong>asfalt završava</strong> i počinje <em>zemljani put</em>. Još jedan znak da ste na pravom putu biće <strong>tabla</strong> koja označava <em>Specijalni rezervat prirode Deliblatska peščara</em>.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda55} 450w, ${zagajickaBrda5} `} alt="Zajegačko brdo i Delblatska Peščara" />

              <section lang="sr">
                <p>
                  <strong>Peščana tla</strong> i <em>jedinstveni ekološki uslovi</em> stvorili su <strong>šumo-stepska staništa</strong> koja podržavaju <em>izuzetno retke</em> i <strong>zaštićene vrste</strong> biljaka i životinja.
                </p>
                <p>
                  Flora ovog područja obuhvata više od <strong>900 biljnih vrsta</strong>, među kojima se nalaze i retki <em>endemi</em> kao što su <strong>banatski božur</strong>, <strong>stepski božur</strong>, <strong>Pančićev pelin</strong>, <strong>šerpet</strong> i oko <em>20 vrsta orhideja</em>.
                </p>
                <p>
                  Fauna ovog kraja je <strong>bogata i raznolika</strong>, a među najlepšim pticama koje nastanjuju ovo područje su <strong>pčelarica</strong>, <strong>pupavac</strong>, <strong>vodomar</strong>, <strong>orao krstaš</strong> i <strong>banatski soko</strong>.
                </p>
                <p>
                  <strong>Obala i ade na Dunavu</strong> predstavljaju <em>jedina stabilna gnezdilišta u Srbiji</em> za retke vrste poput <strong>laste bregunice</strong>, <strong>male bele čaplje</strong> i <strong>malog kormorana</strong>.
                </p>
                <p>
                  <strong>Deliblatska peščara</strong> je dom i za mnoge <em>sisavce</em>, uključujući <strong>jelene</strong>, <strong>srne</strong>, <strong>divlje svinje</strong>, ali i male stepske vrste poput <strong>slepog kučeta</strong> i <strong>stepskog skočimiša</strong>, koji se u Srbiji mogu naći <em>samo u ovom specifičnom regionu</em>.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda66} 450w, ${zagajickaBrda6} `} alt="Bela Crkva 4" />

              <section lang="sr">
                <p>
                  Poznato je da <strong>vazduh u Deliblatskoj peščari</strong>, posebno u području <strong>starih borovih šuma</strong>, ima <em>izuzetna fizičko-hemijska svojstva</em>.
                </p>
                <p>
                  Zbog toga se boravak u ovom delu preporučuje <strong>deci</strong>, <strong>rekonvalescentima</strong>, <strong>astmatičarima</strong>, <strong>sportistima</strong>, ali i svima koji žele <em>potpuni odmor</em> i <strong>uživanje u prirodnim lepotama</strong> ovog <em>jedinstvenog prirodnog predela</em>.
                </p>
              </section>


            </>

          )
          :
          (
            <>
              <h1>Deliblato Sands and the Zagajička Hills</h1>

              <section lang="en">
                <p>
                  <strong>Deliblato Sands</strong> is a unique natural phenomenon in <em>Europe</em>, located in <em>southern Banat</em>, in <em>Vojvodina</em>, and covers an area of about <strong>35,000 hectares</strong>.
                </p>
                <p>
                  This specific landscape was formed during the <em>Ice Age</em>, and the entire surface is covered with <strong>sand</strong>. Due to variations in the soil's ability to absorb <em>water</em> and <em>nutrients</em>, different landforms have developed in this area.
                </p>
                <p>
                  In some places, you can find <strong>green areas</strong> with <em>rich vegetation</em>, <em>dense forests</em>, and even <strong>desert landscapes</strong>, making the sands <strong>extremely diverse and fascinating</strong>.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda22} 450w, ${zagajickaBrda2}`} alt="Deliblato Sands" />

              <section lang="en">
                <p>
                  For more than <strong>two hundred years</strong>, <strong>Deliblato Sands</strong> has been undergoing afforestation, but <em>forest areas</em> still make up only a <em>small part</em> of this vast region.
                </p>
                <p>
                  Lone trees that appear across the <strong>vast expanses</strong> have become a true <em>phenomenon</em>, especially striking on the <strong>Zagajička Hills</strong>, where you often see just <em>one tree</em> atop a small hill, creating a <strong>unique scene</strong>.
                </p>
                <p>
                  In <strong>1977</strong>, the sands were declared a <em>special nature reserve</em>, and today represent one of the <strong>most exceptional</strong> and <strong>valuable steppe areas</strong> in Serbia.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda33} 450w, ${zagajickaBrda3}`} alt="Zagajička Hill" />

              <section lang="en">
                <p>
                  Over the years, <strong>winds</strong> have blown across the <em>sands</em>, creating <strong>ancient dunes</strong> at the bottom of the <em>Pannonian Sea</em>. Over time, these dunes transformed into <strong>small hills</strong>, and a thin layer of soil formed the basis for the growth of the <strong>green Zagajička Hills</strong>.
                </p>
                <p>
                  These hills are part of the <em>Special Nature Reserve Deliblato Sands</em> and are located in the <strong>municipality of Bela Crkva</strong>, near the village of <em>Grebenac</em>.
                </p>
                <p>
                  The <em>historical aspect</em> is also interesting — the hills once belonged to the territory of the village <strong>Zagajica</strong>. However, an agreement was made in which the <strong>Zagajička Hills</strong> became part of <em>Grebenac</em>, while Grebenac gave a portion of its land to <em>Zagajica</em> in exchange.
                </p>
                <p>
                  Although the hills are now called <strong>Zagajička</strong>, they are part of <em>Grebenac's</em> territory, which sometimes causes <strong>dissatisfaction among locals</strong> who would like the name to be <em>changed</em>.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda44} 450w, ${zagajickaBrda4}`} alt="Zagajička Hill" />

              <section lang="en">
                <p>
                  There are several ways to reach the <strong>Zagajička Hills</strong>. We started from <em>Belgrade</em>, taking the road through <em>Pančevo</em> and <em>Kovin</em>, all the way to the village of <strong>Grebenac</strong>.
                </p>
                <p>
                  Once you reach <strong>Grebenac</strong>, make a <em>sharp left turn toward the cemetery</em> and continue driving for a few kilometers. On the left side of the road, after a few kilometers, you will see the <strong>Zagajička Hills</strong>.
                </p>
                <p>
                  Here the <strong>paved road ends</strong> and a <em>dirt road</em> begins. Another sign you’re on the right path is a <strong>signpost</strong> marking the entrance to the <em>Deliblato Sands Special Nature Reserve</em>.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda55} 450w, ${zagajickaBrda5}`} alt="Zagajička Hill and Deliblato Sands" />

              <section lang="en">
                <p>
                  <strong>Sandy soil</strong> and <em>unique ecological conditions</em> have created <strong>forest-steppe habitats</strong> that support <em>extremely rare</em> and <strong>protected species</strong> of plants and animals.
                </p>
                <p>
                  The flora of this area includes over <strong>900 plant species</strong>, including rare <em>endemic</em> species such as <strong>Banat peony</strong>, <strong>steppe peony</strong>, <strong>Pančić’s wormwood</strong>, <strong>šerpet</strong>, and about <em>20 species of orchids</em>.
                </p>
                <p>
                  The fauna here is <strong>rich and diverse</strong>. Among the most beautiful birds that inhabit this area are the <strong>European bee-eater</strong>, <strong>hoopoe</strong>, <strong>kingfisher</strong>, <strong>imperial eagle</strong>, and <strong>Banat falcon</strong>.
                </p>
                <p>
                  The <strong>banks and islands of the Danube</strong> are the <em>only stable nesting grounds in Serbia</em> for rare species like the <strong>sand martin</strong>, <strong>little egret</strong>, and <strong>pygmy cormorant</strong>.
                </p>
                <p>
                  <strong>Deliblato Sands</strong> is also home to many <em>mammals</em>, including <strong>deer</strong>, <strong>roe deer</strong>, <strong>wild boars</strong>, and smaller steppe species such as the <strong>mole rat</strong> and <strong>steppe jerboa</strong>, which can be found in Serbia <em>only in this specific region</em>.
                </p>
              </section>

              <img srcSet={`${zagajickaBrda66} 450w, ${zagajickaBrda6}`} alt="Bela Crkva 4" />

              <section lang="en">
                <p>
                  It is well known that the <strong>air in Deliblato Sands</strong>, especially in the area of <strong>old pine forests</strong>, has <em>exceptional physical and chemical properties</em>.
                </p>
                <p>
                  Because of this, staying in this area is recommended for <strong>children</strong>, <strong>people recovering from illness</strong>, <strong>asthmatics</strong>, <strong>athletes</strong>, and anyone seeking <em>complete rest</em> and <strong>enjoyment of the natural beauty</strong> of this <em>unique natural area</em>.
                </p>
              </section></>

          )}

      </div>
    </>
  );
};


export default DelibaltskaPescaraIZagajickaBrda;