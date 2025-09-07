/* eslint-disable react/no-unknown-property */
import gostilje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/desktop/vodopadGostilje1.jpg";
import gostilje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/desktop/vodopadGostilje2.jpg";
import gostilje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/desktop/vodopadGostilje3.jpg";
import gostilje4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/desktop/vodopadGostilje4.jpg";
import gostilje5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/desktop/vodopadGostilje5.jpg";
import gostilje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/mobile/MvodopadGostilje1.jpg";
import gostilje22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/mobile/MvodopadGostilje2.jpg";
import gostilje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/mobile/MvodopadGostilje3.jpg";
import gostilje44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/mobile/MvodopadGostilje4.jpg";
import gostilje55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/mobile/MvodopadGostilje5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const VodopadGostilje = () => {
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
            ? 'Vodopad Gostilje | Prirodna lepota Zlatibora'
            : 'Gostilje Waterfall | Natural Beauty of Zlatibor'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Vodopad Gostilje je jedna od najlepših prirodnih atrakcija Zlatibora. Nalazi se u selu Gostilje i poznat je po svojoj visini, kristalno čistoj vodi, mini zoo vrtu i bogatom biljnim svetom.'
              : 'Gostilje Waterfall is one of Zlatibor’s most beautiful natural attractions, located in the village of Gostilje. Known for its height, crystal-clear water, mini zoo, and rich flora.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Vodopad Gostilje, Gostilje, Zlatibor, prirodne atrakcije, slapovi, izletište, turizam Srbija, planinski vodopad, restoran Gostiljska vrela, netaknuta priroda, vila, legenda, komplet lepinja, pastrmka'
              : 'Gostilje Waterfall, Gostilje village, Zlatibor, natural attractions Serbia, waterfall Serbia, nature tourism, mountain waterfall, untouched nature, local cuisine, trout restaurant, folklore'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-gostilje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-gostilje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-gostilje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-gostilje"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${gostilje22} 450w, ${gostilje2} `} alt="Vodopad Gostilje 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2>Vodopad Gostilje</h2>


              <section lang="sr">
                <p>
                  <strong>Vodopad Gostilje</strong>, smešten u selu <strong>Gostilje</strong>, u blizini <strong>Zlatibora</strong>, na padinama <strong>Čigote</strong> i <strong>Borkovca</strong> na 850 metara nadmorske visine, predstavlja jednu od najvećih <em>prirodnih atrakcija</em> u ovom regionu. Na ušću u reku <strong>Katušnicu</strong>, voda se sa visine od oko dvadeset metara obrušava, stvarajući <em>spektakularan prizor</em>. Ovaj vodopad spada među <strong>najlepše u Srbiji</strong> i jedno je od glavnih obeležja okoline. Poznat je i pod nazivom <em>Vrelo</em>. Nizvodno od vodopada, reka formira manja potoka, virove i slapove, sve dok ne utopi u reku <strong>Katušnicu</strong>.
                </p>
              </section>

              <img srcSet={`${gostilje55} 450w, ${gostilje5} `} alt="Vodopad Gostilje 2" loading="lazy" />

              <section lang="sr">
                <p>
                  U blizini vodopada postavljene su <strong>klupe za odmor</strong>, klackalice i ljuljaške za decu, kao i <strong>mini zoo vrt</strong>. Sedenje na klupi pored <em>kristalno čiste vode</em> koja škripi kroz kamenčiće i pada sa manjih visina stvarajući male slapove predstavlja pravo uživanje. Nedaleko se nalazi <strong>fudbalski teren</strong> i uredni bazen, koji se puni <em>izvorskom vodom</em>, pružajući dodatnu atrakciju za posetioce.
                </p>
              </section>

              <img srcSet={`${gostilje33} 450w, ${gostilje3} `} alt="Vodopad Gostilje 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Pristup vodopadu je <strong>veoma jednostavan</strong> i omogućava posetiocima da lako dođu do slapova i potoka. Ovaj potok je značajan zbog svog <em>hidropotencijala</em>, koji je sredinom prošlog veka bio korišćen za snabdevanje <strong>Gostilja električnom energijom</strong>. Voda u okolini je veoma hladna, a boravak u neposrednoj blizini vodopada pruža osećaj kao pod <em>hladnim tušem</em>, što je savršeno osveženje tokom vrućih letnjih dana. Milioni vodenih kapi, uz zvuke prirode, raspršuju se dok padaju od vrha vodopada, dodirujući prve kamenčiće na svom putu.
                </p>
              </section>

              <img srcSet={`${gostilje44} 450w, ${gostilje4} `} alt="Vodopad Gostilje 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Prostor oko vodopada je potpuno prilagođen <strong>turističkim posetama</strong>. U poslednjim godinama, vodopad je postao mnogo posećeniji, naročito u proleće kada je najlepši, a priroda bujna, čineći celokupni pejzaž još <em>impresivnijim</em>. Okolinu vodopada čine <strong>šume bora i bukve</strong>, kao i raznovrsno <em>lekovito bilje</em>. Na putu do vodopada nalazi se restoran <strong>Gostiljska vrela</strong>, idealno mesto za uživanje u obroku ili piću. Na meniju restorana, osim tradicionalnih jela, može se uživati u specijalitetima poput <em>žara pastrmke</em> iz obližnjeg ribnjaka kalifornijske pastrmke.
                </p>
              </section>

              <img srcSet={`${gostilje11} 450w, ${gostilje1} `} alt="Vodopad Gostilje 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Prema starom predanju, na ovom vodopadu su se nekada kupale <em>vile</em>, koje su svojim magičnim moćima povezivale <strong>zaljubljene parove</strong>. Veruje se da, kada momak i devojka prođu kroz vodopad, zauvek ostaju zajedno, a njihov život biće ispunjen <em>lepotom i ljubavlju</em>, posut cvećem. Danas, posetioci imaju jedinstvenu priliku da osete snagu i lepotu <strong>netaknute prirode</strong>, uživajući u njenoj neukrotivosti. Stene prekrivene mahovinom, iz kojih izbija voda, deluju kao iz <em>bajke</em>. Ovaj prirodni fenomen, snaga vode i divna priroda, okupljeni su na ovom mestu u srcu planine <strong>Zlatibor</strong>, koji je pravo utočište <em>netaknute lepote</em>. Bistra, providna voda daje ovom kraju posebnu <strong>svežinu i harmoniju</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Gostilje Waterfall</h2>


              <section lang="en"> <p> The <strong>Gostilje Waterfall</strong>, located in the village of <strong>Gostilje</strong>, near <strong>Zlatibor</strong>, on the slopes of <strong>Čigota</strong> and <strong>Borkovac</strong> at 850 meters above sea level, is one of the greatest <em>natural attractions</em> in this region. At its confluence with the river <strong>Katušnica</strong>, water plunges from a height of about twenty meters, creating a <em>spectacular sight</em>. This waterfall is among the <strong>most beautiful in Serbia</strong> and one of the main landmarks of the area. It is also known as <em>Vrelo</em>. Downstream from the waterfall, the river forms smaller streams, whirlpools, and cascades, until it flows into the <strong>Katušnica</strong> River. </p> </section>
              <img srcSet={`${gostilje55} 450w, ${gostilje5} `} alt="Gostilje Waterfall 2" loading="lazy" />

              <section lang="en"> <p> Near the waterfall, there are <strong>benches for resting</strong>, seesaws and swings for children, as well as a <strong>mini zoo</strong>. Sitting on a bench next to the <em>crystal-clear water</em> that gurgles over the pebbles and falls from smaller heights creating tiny cascades is a true pleasure. Not far from here is a <strong>football field</strong> and a well-maintained pool, which is filled with <em>spring water</em>, offering an additional attraction for visitors. </p> </section>
              <img srcSet={`${gostilje33} 450w, ${gostilje3} `} alt="Gostilje Waterfall 3" loading="lazy" />

              <section lang="en"> <p> Access to the waterfall is <strong>very easy</strong>, allowing visitors to reach the cascades and streams without difficulty. This stream is important due to its <em>hydropower potential</em>, which was used in the mid-20th century to supply <strong>Gostilje with electricity</strong>. The water around here is very cold, and staying close to the waterfall feels like being under a <em>cold shower</em>, which is perfect refreshment during hot summer days. Millions of water droplets, accompanied by the sounds of nature, scatter as they fall from the top of the waterfall, touching the first pebbles on their way down. </p> </section>
              <img srcSet={`${gostilje44} 450w, ${gostilje4} `} alt="Gostilje Waterfall 4" loading="lazy" />

              <section lang="en"> <p> The area around the waterfall is fully adapted for <strong>tourist visits</strong>. In recent years, the waterfall has become much more visited, especially in spring when it is at its most beautiful and nature is lush, making the entire landscape even more <em>impressive</em>. The surroundings are covered with <strong>pine and beech forests</strong>, as well as diverse <em>medicinal herbs</em>. On the way to the waterfall is the restaurant <strong>Gostiljska Vrela</strong>, an ideal place to enjoy a meal or a drink. The restaurant’s menu offers, besides traditional dishes, specialties such as <em>grilled trout</em> from the nearby California trout fishpond. </p> </section>
              <img srcSet={`${gostilje11} 450w, ${gostilje1} `} alt="Gostilje Waterfall 5" loading="lazy" />

              <section lang="en"> <p> According to an old legend, <em>fairies</em> once bathed in this waterfall, and with their magical powers, they connected <strong>lovers</strong>. It is believed that when a young man and woman pass through the waterfall, they remain together forever, and their life will be filled with <em>beauty and love</em>, sprinkled with flowers. Today, visitors have a unique opportunity to feel the power and beauty of <strong>untouched nature</strong>, enjoying its wildness. Moss-covered rocks, from which water gushes, seem like something out of a <em>fairy tale</em>. This natural phenomenon, the power of water, and beautiful nature come together in this place in the heart of the <strong>Zlatibor</strong> mountain, which is a true refuge of <em>pristine beauty</em>. The clear, transparent water gives this area a special <strong>freshness and harmony</strong>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default VodopadGostilje;