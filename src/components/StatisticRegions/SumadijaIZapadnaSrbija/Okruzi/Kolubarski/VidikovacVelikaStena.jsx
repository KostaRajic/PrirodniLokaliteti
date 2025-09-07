/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import velikaStena1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena5.jpg";
import velikaStena2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena1.jpg";
import velikaStena3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena2.jpg";
import velikaStena4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena3.jpg";
import velikaStena5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/desktop/velikaStena4.jpg";
import velikaStena11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena5.jpg";
import velikaStena22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena1.jpg";
import velikaStena33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena2.jpg";
import velikaStena44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena3.jpg";
import velikaStena55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/VidikovacVelikaStena/mobile/MvelikaStena4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VidikovacVelikaStena = () => {
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
            ? "Vidikovac Velika Stena – Pogled na Rovni i Istoriju Srbije | Serbia Wonders"
            : "Velika Stena Viewpoint – Overlooking Rovni and Serbian History | Serbia Wonders"}
        </title>
        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Vidikovac Velika Stena, poznat i kao Lazareva stena, nudi spektakularan pogled na jezero Rovni i okolnu prirodu planine Maljen. Idealno mesto za izlete, planinarenje i fotografisanje."
              : "Velika Stena Viewpoint, also known as Lazar's Rock, offers spectacular views of Rovni Lake and the surrounding nature of Mount Maljen. A perfect spot for hiking, day trips, and photography."
          }
        />
        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Velika Stena, Lazareva stena, vidikovac, Rovni, Maljen, Valjevo, priroda, planinarenje, turizam, Zapadna Srbija"
              : "Velika Stena, Lazar's Rock, viewpoint, Rovni, Maljen, Valjevo, nature, hiking, tourism, Western Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vidikovac-velika-stena`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vavidikovac-velika-stenaljevo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vidikovac-velika-stena"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vidikovac-velika-stena"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(kulubarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${velikaStena11} 450w, ${velikaStena1} `} alt="Vidikovac Velika Stena 1" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h2>Vidikovac Velika Stena</h2>

              <section lang="sr">
                <p>
                  <strong>Velika stena</strong>, poznata i kao <em>Lazareva stena</em>, predstavlja jedan od
                  najlepših <strong>vidikovaca</strong> u <em>Zapadnoj Srbiji</em>. Smeštena je na obroncima planine
                  <strong>Maljen</strong>, nedaleko od <strong>Valjeva</strong>, i poznata je po svom jedinstvenom
                  panoramskom pogledu na <em>jezero Rovni</em> i okolne prirodne predele. Ovo mesto
                  je dobilo ime po <strong>knezu Lazaru</strong>, jer se veruje da je ovo područje povezano
                  sa istorijskim događajima iz njegove epohe. Velika stena je popularna
                  destinacija za ljubitelje prirode, planinare i fotografe koji žele da
                  uživaju u spektakularnim prizorima.
                </p>
              </section>

              <img srcSet={`${velikaStena22} 450w, ${velikaStena2} `} alt="Vidikovac Velika Stena 2" />

              <section lang="sr">
                <p>
                  <em>Jezero Rovni</em>, koje se vidi sa stene, veštački je rezervoar koji je
                  izgrađen radi vodosnabdevanja <strong>Valjeva</strong> i okolnih naselja. Svojim
                  smaragdno zelenim nijansama i netaknutom okolinom, jezero predstavlja
                  pravi dragulj ovog kraja. Osim što je važno za lokalnu infrastrukturu,
                  jezero je postalo omiljeno mesto za izlete, kampovanje i ribolov.
                  Prirodni ambijent oko jezera, sa bogatim biljnim i životinjskim svetom,
                  dodatno doprinosi atraktivnosti ovog područja.
                </p>
              </section>

              <img srcSet={`${velikaStena33} 450w, ${velikaStena3} `} alt="Vidikovac Lazareva Stena 1" />

              <section lang="sr">
                <p>
                  Velika stena se nalazi u blizini sela <strong>Stubo</strong>, poznatog po svojoj očuvanoj
                  prirodi i kulturno-istorijskom značaju. Do stene vodi nekoliko pešačkih
                  staza koje prolaze kroz guste šume i pružaju jedinstvenu priliku za
                  istraživanje prirode. Ove staze su prilagođene posetiocima različitih
                  nivoa fizičke spremnosti, što čini stenu dostupnom i porodicama sa
                  decom. Pogled sa Velike stene je naročito lep u <em>jutarnjim</em> i <em>večernjim</em>
                  satima, kada sunčeva svetlost stvara prelepe kontraste između jezera,
                  šuma i neba.
                </p>
              </section>

              <img srcSet={`${velikaStena44} 450w, ${velikaStena4} `} alt="Veštačko jezero Rovni" />

              <section lang="sr">
                <p>
                  Veštačko jezero <strong>Rovni</strong>, poznato i kao <em>Akumulacija Stubo-Rovni</em>, formirano
                  je radi rešavanja problema vodosnabdevanja <strong>Valjeva</strong> i okolnih mesta. Ovo
                  jezero je deo velikog infrastrukturnog projekta koji je započet kako bi
                  se obezbedila stabilna i čista voda za piće u ovom delu Srbije. Prostire
                  se na površini od oko <strong>8 kvadratnih kilometara</strong> i ima kapacitet od preko
                  <strong>50 miliona kubnih metara</strong> vode. Njegova primarna funkcija je prikupljanje
                  i čuvanje vode iz reke <em>Jablanice</em> i njenih pritoka, koja se zatim
                  prečišćava i distribuira stanovnicima <strong>Valjeva</strong>, kao i okolnim naseljima
                  poput <strong>Mionice</strong>, <strong>Lajkovca</strong> i <strong>Lazarevca</strong>. Pored vodosnabdevanja, jezero Rovni
                  ima i značajnu ulogu u zaštiti od poplava, jer može akumulirati velike
                  količine vode tokom kišnih sezona i sprečiti potencijalne štete.
                </p>
              </section>

              <img srcSet={`${velikaStena55} 450w, ${velikaStena5} `} alt="Vidikovac Lazareva Stena 2" />

              <section lang="sr">
                <p>
                  Osim prirodnih lepota, područje oko Velike stene i jezera Rovni ima i
                  <strong>istorijski značaj</strong>. Ovaj kraj je bogat legendama i pričama koje su
                  povezane sa srpskom srednjovekovnom istorijom. Ljubitelji istorije mogu
                  istraživati lokalne znamenitosti, dok oni koji traže mir i tišinu mogu
                  uživati u netaknutoj prirodi i zvucima šume. Velika stena i jezero Rovni
                  postali su nezaobilazna destinacija za sve koji žele da iskuse
                  <em>autentičnu lepotu Srbije</em>. Ova lokacija nudi idealan spoj prirodnih
                  pejzaža, rekreacije i istorijske baštine, pružajući nezaboravno iskustvo
                  svakom posetiocu.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Velika Stena Viewpoint</h2>

              <section lang="en">
                <p>
                  <strong>Velika Stena</strong>, also known as <em>Lazareva Stena</em>, is one of the
                  most beautiful <strong>viewpoints</strong> in <em>Western Serbia</em>. It is located on the slopes of
                  the <strong>Maljen</strong> mountain, near <strong>Valjevo</strong>, and is famous for its unique
                  panoramic view of <em>Rovni Lake</em> and the surrounding natural landscapes. This place
                  was named after <strong>Prince Lazar</strong>, as it is believed that the area is connected
                  to historical events from his era. Velika Stena is a popular
                  destination for nature lovers, hikers, and photographers who want to
                  enjoy spectacular sights.
                </p>
              </section>

              <img srcSet={`${velikaStena22} 450w, ${velikaStena2} `} alt="Velika Stena Viewpoint 2" />

              <section lang="en">
                <p>
                  <em>Rovni Lake</em>, visible from the rock, is an artificial reservoir built
                  to supply water to <strong>Valjevo</strong> and nearby settlements. With its
                  emerald green hues and untouched surroundings, the lake is a true
                  gem of this region. Besides being important for local infrastructure,
                  the lake has become a favorite spot for outings, camping, and fishing.
                  The natural environment around the lake, rich in flora and fauna,
                  further enhances the area's appeal.
                </p>
              </section>

              <img srcSet={`${velikaStena33} 450w, ${velikaStena3} `} alt="Lazareva Stena Viewpoint 1" />

              <section lang="en">
                <p>
                  Velika Stena is located near the village of <strong>Stubo</strong>, known for its preserved
                  nature and cultural-historical significance. Several hiking trails
                  lead to the rock, passing through dense forests and offering a unique opportunity
                  to explore nature. These trails are suitable for visitors of varying
                  physical fitness levels, making the rock accessible even for families with
                  children. The view from Velika Stena is especially beautiful in the <em>morning</em> and <em>evening</em>
                  hours, when the sunlight creates beautiful contrasts between the lake,
                  forests, and sky.
                </p>
              </section>

              <img srcSet={`${velikaStena44} 450w, ${velikaStena4} `} alt="Artificial Rovni Lake" />

              <section lang="en">
                <p>
                  The artificial <strong>Rovni</strong> Lake, also known as <em>Stubo-Rovni Reservoir</em>, was created
                  to solve the water supply problems of <strong>Valjevo</strong> and surrounding towns. This
                  lake is part of a large infrastructure project started to ensure
                  a stable and clean drinking water supply in this part of Serbia. It
                  covers an area of about <strong>8 square kilometers</strong> and has a capacity of over
                  <strong>50 million cubic meters</strong> of water. Its primary function is to collect
                  and store water from the <em>Jablanica</em> river and its tributaries, which is then
                  purified and distributed to residents of <strong>Valjevo</strong> and nearby settlements
                  such as <strong>Mionica</strong>, <strong>Lajkovac</strong>, and <strong>Lazarevac</strong>. In addition to water supply,
                  Rovni Lake also plays an important role in flood protection, as it can
                  accumulate large volumes of water during rainy seasons and prevent potential damage.
                </p>
              </section>

              <img srcSet={`${velikaStena55} 450w, ${velikaStena5} `} alt="Lazareva Stena Viewpoint 2" />

              <section lang="en">
                <p>
                  Besides its natural beauty, the area around Velika Stena and Rovni Lake also has
                  <strong>historical significance</strong>. This region is rich in legends and stories connected
                  to Serbian medieval history. History enthusiasts can explore local landmarks,
                  while those seeking peace and quiet can enjoy the untouched nature and sounds of the forest.
                  Velika Stena and Rovni Lake have become an indispensable destination for everyone
                  who wants to experience the <em>authentic beauty of Serbia</em>. This location offers an ideal
                  blend of natural landscapes, recreation, and historical heritage, providing
                  an unforgettable experience for every visitor.
                </p>
              </section>

            </>
          )
        }

      </div >
    </>
  );
};


export default VidikovacVelikaStena;