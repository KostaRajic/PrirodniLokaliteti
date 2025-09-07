/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import zvornickoJezero1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/desktop/zvornickoJezero1.jpg";
import zvornickoJezero2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/desktop/zvornickoJezero2.jpg";
import zvornickoJezero3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/desktop/zvornickoJezero3.jpg";
import zvornickoJezero4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/desktop/zvornickoJezero4.jpg";
import zvornickoJezero5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/desktop/zvornickoJezero5.jpg";
import zvornickoJezero6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/desktop/zvornickoJezero6.jpg";
import zvornickoJezero11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/mobile/MzvornickoJezero1.jpg";
import zvornickoJezero22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/mobile/MzvornickoJezero2.jpg";
import zvornickoJezero33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/mobile/MzvornickoJezero3.jpg";
import zvornickoJezero44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/mobile/MzvornickoJezero4.jpg";
import zvornickoJezero55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/mobile/MzvornickoJezero5.jpg";
import zvornickoJezero66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ZvornickoJezero/mobile/MzvornickoJezero6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { macvanskiOkrugPathRoutes } from "./MacvanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ZvornickoJezero = () => {
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
            ? "Zvorničko jezero – Oaza prirode, ribolova i mira | Serbia Wonders"
            : "Lake Zvornik – Oasis of Nature, Fishing, and Serenity | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Zvorničko jezero je popularna destinacija za ribolov, kupanje i odmor. Sa bogatim ribljim fondom, uređenim plažama i manifestacijama poput Somovijade, jezero pruža idealan ambijent za uživanje u prirodi tokom cele godine."
              : "Lake Zvornik is a popular destination for fishing, swimming, and relaxation. With rich aquatic life, organized beaches, and events like Somovijada, it offers a perfect setting for enjoying nature throughout the year."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Zvorničko jezero, Mali Zvornik, ribolov, Somovijada, plaža Sakar, Drina, ribolovni turizam, priroda, vikendica, kanjon Drine, kupanje, letovanje u Srbiji"
              : "Lake Zvornik, Mali Zvornik, fishing, Somovijada, Sakar beach, Drina river, angling tourism, nature, cottages, Drina canyon, swimming, summer in Serbia"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/zvornicko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/zvornicko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/zvornicko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/zvornicko-jezero"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(macvanskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zvornickoJezero11} 450w, ${zvornickoJezero1} `} alt="Zvorničko jezero 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Zvorničko jezero</h2>

              <section lang="sr">
                <p>
                  <strong>Priča o Zvorničkom jezeru</strong> počinje <em>1948. godine</em>, kada su započeti
                  pripremni radovi za izgradnju <strong>brane</strong> i prateće infrastrukture. Godine
                  <strong>1955.</strong> jezerski basen je napunjen vodom, stvarajući prelepi vodeni
                  prostor na nadmorskoj visini od <strong>140 metara</strong>. Jezero nudi savršene uslove
                  za razvoj <em>nautičkog turizma</em>, a njegovu obalu krase male <strong>plaže</strong>,
                  <strong>vikendice</strong> i brojni <strong>ugostiteljski objekti</strong>, koji upotpunjuju lepotu
                  ovog <em>prirodnog okruženja</em>.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero22} 450w, ${zvornickoJezero2} `} alt="Zvorničko jezero 2" />

              <section lang="sr">
                <p>
                  <strong>Zvorničko jezero</strong> je popularna <em>turistička destinacija</em>, posebno za
                  <strong>ribolovce</strong>, koji dolaze iz različitih delova sveta u <strong>Mali Zvornik</strong>.
                  Glavni razlog za ovakav interes leži u bogatom <strong>ribljem fondu</strong> jezera, koje
                  skriva velike primerke različitih vrsta riba. Najzastupljenije vrste uključuju
                  <em>deveriku, ploticu, grgeča, šarana, štuku, soma, mladicu, pastrmku, linjaka</em> i mnoge druge.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero33} 450w, ${zvornickoJezero3} `} alt="Zvorničko jezero 3" />

              <section lang="sr">
                <p>
                  Bogatstvo <strong>ribljeg fonda jezera</strong>, kao ključna prednost za razvoj
                  <em>ribolovnog turizma</em>, zajedno s atraktivnim izgledom jezera i njegove
                  okolice, stvorilo je potrebu za organizovanjem različitih <strong>ribolovnih takmičenja</strong>
                  i razvojem <em>manifestacijskog turizma</em> u opštini. Ove manifestacije pružaju priliku da se predstavi
                  široka i raznovrsna <strong>turistička ponuda</strong> opštine. Takmičenje sa najdužom tradicijom je
                  čuvena <strong>Somovijada</strong>, koja se na Zvorničkom jezeru održava od <strong>1998. godine</strong>
                  svakog leta, poslednjeg vikenda u julu, i okuplja brojne <strong>ribolovce</strong>, kao i sve
                  ljubitelje <em>prirode</em>.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero66} 450w, ${zvornickoJezero6} `} alt="Zvorničko jezero 4" />

              <section lang="sr">
                <p>
                  Nekih <strong>4 kilometra</strong> od Malog Zvornika, u selu <strong>Sakar</strong>, nalazi se jedna od
                  najlepših i najbolje uređenih <strong>plaža</strong> u okolini. Obala je ravna i
                  <em>šljunkovita</em>, što je iskoristila lokalna zajednica da stvori pravu
                  <strong>turističku atrakciju</strong>. Ova plaža je definitivno mesto koje vredi
                  posetiti, ukoliko se nađete u blizini Malog Zvornika.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero44} 450w, ${zvornickoJezero4} `} alt="Zvorničko jezero 5" />

              <section lang="sr">
                <p>
                  Ovo prelepo malo jezero prostire se uzvodno kroz <em>drinski kanjon</em>, od
                  <strong>Zvornika</strong> (Republika Srpska) i <strong>Malog Zvornika</strong> (Srbija), sve do ušća reke
                  <strong>Velika reka</strong>, koja pripada opštini Mali Zvornik. Bujični nanosi okolnih
                  reka i potoka, koji se ulivaju u jezero, vremenom su prekrili više od polovine
                  jezerskog bazena, stvarajući <em>erozivne naslage</em>. Najveći doprinos ovom procesu dale su
                  reke <strong>Drinjača</strong>, <strong>Boranjska reka</strong> i <strong>Jošanica</strong>. Dodatnu
                  lepotu i atraktivnost Zvorničkog jezera čine brojne manje ostruvke i poluostrva,
                  nastala usled erozije i nanosa.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero55} 450w, ${zvornickoJezero5} `} alt="Zvorničko jezero 6" />

              <section lang="sr">
                <p>
                  <strong>Zvorničko jezero tokom zime</strong> pruža potpuno drugačiji, ali jednako
                  fascinantan prizor. Dok <em>zimske temperature</em> padaju, površina jezera može
                  zamrznuti, stvarajući <em>zimski raj</em> za ljubitelje prirode. Oko jezera, u
                  zaleđu, <em>snežne padavine</em> prekrivaju pejzaž, a okolne šume postaju tihe i
                  mistične. Zimska idila često privlači ljubitelje <em>mirnog okruženja</em> i
                  fotografe, koji žele da zabeleže ovu tišinu i lepotu. Iako <em>zimski uslovi</em>
                  smanjuju aktivnosti kao što je <em>nautički turizam</em>, jezero u ovom periodu
                  postaje <strong>mirno utočište</strong> za one koji žele da uživaju u spokojnom
                  okruženju, dok priroda prelazi u <em>zimski san</em>.
                </p>
              </section>


            </>

          )
          :
          (
            <>

              <h2>Lake Zvornik</h2>

              <section lang="en">
                <p>
                  The <strong>story of Lake Zvornik</strong> begins in <em>1948</em>, when preparatory
                  work started for the construction of the <strong>dam</strong> and associated infrastructure. In
                  <strong>1955</strong>, the lake basin was filled with water, creating a beautiful water
                  area at an altitude of <strong>140 meters</strong>. The lake offers perfect conditions
                  for the development of <em>nautical tourism</em>, and its shores are adorned with small <strong>beaches</strong>,
                  <strong>cottages</strong>, and numerous <strong>hospitality facilities</strong>, complementing the beauty
                  of this <em>natural environment</em>.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero22} 450w, ${zvornickoJezero2} `} alt="Lake Zvornik 2" />

              <section lang="en">
                <p>
                  <strong>Lake Zvornik</strong> is a popular <em>tourist destination</em>, especially for
                  <strong>anglers</strong>, who come from various parts of the world to <strong>Mali Zvornik</strong>.
                  The main reason for this interest lies in the rich <strong>fish stock</strong> of the lake, which
                  harbors large specimens of various fish species. The most common species include
                  <em>barbel, bleak, gudgeon, carp, pike, catfish, huchen, trout, tench</em>, and many others.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero33} 450w, ${zvornickoJezero3} `} alt="Lake Zvornik 3" />

              <section lang="en">
                <p>
                  The richness of the <strong>lake’s fish stock</strong>, as a key advantage for the development
                  of <em>fishing tourism</em>, together with the attractive appearance of the lake and its
                  surroundings, has created a need for organizing various <strong>fishing competitions</strong>
                  and developing <em>event tourism</em> in the municipality. These events provide an opportunity to present
                  the wide and diverse <strong>tourist offer</strong> of the municipality. The competition with the longest tradition is
                  the famous <strong>Somovijada</strong>, held at Lake Zvornik since <strong>1998</strong>
                  every summer, on the last weekend in July, gathering numerous <strong>fishermen</strong> as well as all
                  nature <em>enthusiasts</em>.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero66} 450w, ${zvornickoJezero6} `} alt="Lake Zvornik 4" />

              <section lang="en">
                <p>
                  About <strong>4 kilometers</strong> from Mali Zvornik, in the village of <strong>Sakar</strong>, there is one of
                  the most beautiful and best-maintained <strong>beaches</strong> in the area. The shore is flat and
                  <em>pebbly</em>, which the local community used to create a true
                  <strong>tourist attraction</strong>. This beach is definitely a place worth
                  visiting if you find yourself near Mali Zvornik.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero44} 450w, ${zvornickoJezero4} `} alt="Lake Zvornik 5" />

              <section lang="en">
                <p>
                  This beautiful small lake stretches upstream through the <em>Drina canyon</em>, from
                  <strong>Zvornik</strong> (Republika Srpska) and <strong>Mali Zvornik</strong> (Serbia), all the way to the mouth of the river
                  <strong>Velika reka</strong>, which belongs to the municipality of Mali Zvornik. The torrential deposits of surrounding
                  rivers and streams flowing into the lake have over time covered more than half
                  of the lake basin, creating <em>erosive deposits</em>. The biggest contributors to this process are
                  the rivers <strong>Drinjača</strong>, <strong>Boranjska reka</strong>, and <strong>Jošanica</strong>. Additional
                  beauty and attractiveness of Lake Zvornik are created by numerous smaller islets and peninsulas,
                  formed due to erosion and deposits.
                </p>
              </section>

              <img srcSet={`${zvornickoJezero55} 450w, ${zvornickoJezero5} `} alt="Lake Zvornik 6" />

              <section lang="en">
                <p>
                  <strong>Lake Zvornik during winter</strong> offers a completely different, but equally
                  fascinating sight. As <em>winter temperatures</em> drop, the lake surface may
                  freeze, creating a <em>winter paradise</em> for nature lovers. Around the lake, in the
                  hinterland, <em>snowfall</em> covers the landscape, and the surrounding forests become quiet and
                  mystical. The winter idyll often attracts lovers of <em>peaceful surroundings</em> and
                  photographers eager to capture this silence and beauty. Although <em>winter conditions</em>
                  reduce activities such as <em>nautical tourism</em>, the lake during this period
                  becomes a <strong>peaceful refuge</strong> for those wishing to enjoy tranquil
                  surroundings while nature enters its <em>winter slumber</em>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ZvornickoJezero;