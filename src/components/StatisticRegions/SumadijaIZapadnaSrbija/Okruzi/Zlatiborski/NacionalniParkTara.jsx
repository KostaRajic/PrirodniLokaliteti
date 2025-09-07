/* eslint-disable react/no-unknown-property */
import tara1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/desktop/tara1.jpg";
import tara2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/desktop/tara2.jpg";
import tara3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/desktop/tara3.jpg";
import tara4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/desktop/tara4.jpg";
import tara5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/desktop/tara5.jpg";
import tara6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/desktop/tara6.jpg";
import tara7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/desktop/tara7.jpg";
import tara8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/desktop/tara8.jpg";
import tara11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/mobile/Mtara1.jpg";
import tara22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/mobile/Mtara2.jpg";
import tara33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/mobile/Mtara3.jpg";
import tara44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/mobile/Mtara4.jpg";
import tara55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/mobile/Mtara5.jpg";
import tara66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/mobile/Mtara6.jpg";
import tara77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/mobile/Mtara7.jpg";
import tara88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/NacionalniParkTara/mobile/Mtara8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const NacionalniParkTara = () => {
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
            ? "Nacionalni park Tara | Priroda, vidikovci, Pančićeva omorika, aktivnosti i smeštaj"
            : "Tara National Park | Nature, viewpoints, Pancic Spruce, activities and accommodation"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Nacionalni park Tara je jedno od najlepših prirodnih područja Srbije, dom Pančićeve omorike i mrkog medveda. Otkrijte šume, vidikovce, jezera i raznovrsne aktivnosti u srcu zapadne Srbije."
              : "Tara National Park is one of Serbia's most beautiful natural areas, home to Pancic Spruce and brown bears. Discover forests, viewpoints, lakes, and diverse outdoor activities in western Serbia."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Nacionalni park Tara, Tara Srbija, Pančićeva omorika, Banjska stena, vidikovci Tara, priroda Srbije, turizam u Srbiji, Tara smeštaj, Bajina Bašta, jezero Perućac, planinarenje, medvedi u Srbiji"
              : "Tara National Park, Serbia nature, Pancic Spruce, Banjska Stena viewpoint, hiking in Serbia, Tara viewpoints, Perucac Lake, Bajina Basta, brown bears, ecotourism Serbia, Tara accommodation"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/nacionalni-park-tara`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/nacionalni-park-tara"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/nacionalni-park-tara"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/nacionalni-park-tara"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${tara11} 450w, ${tara1} `} alt='Nacionalni Park "Tara" 1' loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Nacionalni Park "Tara"</h2>

              <section lang="sr">
                <p>
                  <strong>Nacionalni park Tara</strong>, pravo prirodno blago zapadne Srbije, uživa status
                  zaštićenog područja od <strong>1981. godine</strong>. Prostire se na površini od skoro
                  <strong>25.000 hektara</strong>, obuhvatajući ključne predele planinskog masiva <strong>Tare</strong> i
                  <strong>Zvijezde</strong>. Park se nalazi uz reku <strong>Drinu</strong>, koja deli <strong>Bajinu Baštu</strong> u Srbiji
                  od <strong>Višegrada</strong> u Bosni, pružajući spektakularne pejzaže i jedinstvenu
                  prirodnu harmoniju.
                </p>
              </section>

              <img srcSet={`${tara22} 450w, ${tara2}`} alt="Nacionalni Park Tara" loading="lazy" />

              <section lang="sr">
                <p>
                  Planina Tara pripada <strong>srednje visokim planinama</strong>, prepoznatljivim po
                  <strong>krečnjačkom reljefu</strong> i nadmorskim visinama između <strong>1.000 i 1.200 metara</strong>. Neki
                  od njenih najviših vrhova su <strong>Kozji rid</strong>, <strong>Zborište</strong>, <strong>Janjač</strong>, <strong>Smiljevac</strong>
                  i <strong>Galinika</strong>. Najniža tačka je reka <strong>Vrelo</strong> na 234 metra. Više od <strong>80%</strong> parka
                  prekriveno je <strong>mešovitim šumama</strong>. Ovaj jedinstveni ekosistem dom je mnogim
                  biljnim i životinjskim vrstama, uključujući <strong>Pančićevu omoriku</strong>, endemsku
                  vrstu iz ledenog doba. Tu živi preko <strong>140 vrsta ptica</strong>, <strong>19 vrsta riba</strong> i
                  <strong>60 vrsta sisavaca</strong>, uključujući najveću populaciju <strong>mrkih medveda</strong> u Srbiji.
                </p>
              </section>

              <img srcSet={`${tara33} 450w, ${tara3}`} alt="Nacionalni Park Tara 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Nacionalni park Tara bogat je <strong>arheološkim nalazištima</strong> i spomenicima od
                  neolita do kasnog srednjeg veka. Najznačajniji su <strong>manastir Rača</strong> iz
                  <strong>13. veka</strong> i <strong>nekropole sa stećcima</strong> u <strong>Perućcu</strong> i <strong>Rastištu</strong>, na
                  <strong>UNESKO-voj listi</strong> od 2016. Posebnu pažnju privlače vidikovci poput
                  <strong>Banjske stene</strong>, <strong>Bilješke stene</strong>, <strong>Sjeniča</strong>, <strong>Crnjeskova</strong>, <strong>Sokolarice</strong> i
                  <strong>Osluše</strong>. Uz to, tu je i <strong>kanjon Drine</strong> i <strong>jezero Perućac</strong>, idealno za
                  krstarenja brodom.
                </p>
              </section>

              <img srcSet={`${tara44} 450w, ${tara4}`} alt="Nacionalni Park Tara 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Ovo područje je jedno od <strong>najbogatijih šumskih ekosistema</strong> u Evropi i često se
                  naziva <strong>„plućima Srbije“</strong>. Dominiraju šume <strong>jele</strong>, <strong>bukve</strong> i <strong>smrče</strong>, a
                  posebno se izdvaja <strong>Pančićeva omorika</strong>. Tara je dom za više od <strong>1.100 biljnih
                    vrsta</strong>, što čini skoro <strong>trećinu flore Srbije</strong>. Zabeleženo je i <strong>96 vrsta lišajeva</strong>,
                  <strong>171 vrsta mahovina</strong>, <strong>30 paprati</strong>, <strong>7 golosemenica</strong> i oko <strong>950
                    skrivenosemenica</strong>.
                </p>
              </section>

              <img srcSet={`${tara55} 450w, ${tara5}`} alt="Planina Tara" loading="lazy" />

              <section lang="sr">
                <p>
                  Tara je dom <strong>raznovrsnim životinjskim vrstama</strong>: <strong>12 vodozemaca</strong>,
                  <strong>140 insekata</strong>, <strong>135 ptica</strong> – uključujući <strong>belog orla</strong>, <strong>beloglavog supa</strong>,
                  <strong>surog orla</strong>, <strong>sivog sokola</strong>, <strong>šumsku šljuku</strong> i <strong>velikog tetreba</strong>. Među
                  <strong>55 vrsta sisavaca</strong> nalaze se <strong>divokoze</strong>, <strong>srne</strong>, <strong>risi</strong>, <strong>vukovi</strong>,
                  <strong>šakali</strong>, <strong>divlje svinje</strong>, <strong>kune</strong> i zaštićene vrste poput <strong>vidre</strong> i
                  <strong>mrkog medveda</strong>.
                </p>
              </section>

              <img srcSet={`${tara66} 450w, ${tara6}`} alt="Ledena pećina" loading="lazy" />

              <section lang="sr">
                <p>
                  Park nudi brojne aktivnosti: <strong>planinarenje</strong>, <strong>biciklizam</strong>, <strong>kanjoning</strong>,
                  <strong>skijanje</strong>, <strong>plivanje</strong>, kao i <strong>vođene ture</strong>. Ljubitelji divljih životinja
                  mogu posmatrati <strong>medvede</strong> iz specijalnih osmatračnica, dok je za
                  <strong>ljubitelje jahanja</strong> organizovano jahanje kroz prelepe pejzaže parka.
                </p>
              </section>

              <img srcSet={`${tara77} 450w, ${tara7}`} alt="Tara 1" loading="lazy" />

              <section lang="sr">
                <p>
                  Tara je bogata <strong>vodopadima</strong>, <strong>potocima</strong> i <strong>izvorima</strong> koji čine poseban
                  <strong>vodni sistem</strong>. Vodopadi i rečni tokovi ostavljaju snažan utisak svojom
                  lepotom. U kombinaciji sa <strong>šumama</strong>, <strong>planinskim vrhovima</strong> i <strong>rekama</strong>, Tara
                  predstavlja savršeno mesto za <strong>ljubitelje prirode</strong> i <strong>mira</strong>.
                </p>
              </section>

              <img srcSet={`${tara88} 450w, ${tara8}`} alt="Tara 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Šetnje i izleti u parku vode kroz <strong>označene staze</strong>, guste šume i do
                  <strong>vidikovaca</strong> sa kojih se pruža pogled na <strong>Drinu</strong> i okolinu. Popularne ture
                  uključuju posete <strong>vodopadima</strong>, <strong>kanjonu Drine</strong> i <strong>istorijskim lokalitetima</strong>.
                  Duže ture uključuju <strong>uspon na vrhove</strong>, dok su kraće idealne za <strong>porodice sa
                    decom</strong>. Tara je pravo utočište za <strong>avanturiste</strong> i <strong>ljubitelje tišine</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Tara National Park</h2>

              <section lang="en"> <p> <strong>Tara National Park</strong>, a true natural treasure of western Serbia, has enjoyed protected status since <strong>1981</strong>. It covers an area of nearly <strong>25,000 hectares</strong>, encompassing key parts of the mountainous massifs of <strong>Tara</strong> and <strong>Zvijezda</strong>. The park lies along the <strong>Drina River</strong>, which separates <strong>Bajina Bašta</strong> in Serbia from <strong>Višegrad</strong> in Bosnia, offering spectacular landscapes and a unique natural harmony. </p> </section>
              <img srcSet={`${tara22} 450w, ${tara2}`} alt="Tara National Park" loading="lazy" />

              <section lang="en"> <p> Tara Mountain belongs to the group of <strong>mid-altitude mountains</strong>, recognizable for its <strong>limestone relief</strong> and elevations ranging between <strong>1,000 and 1,200 meters</strong>. Some of its highest peaks are <strong>Kozji rid</strong>, <strong>Zborište</strong>, <strong>Janjač</strong>, <strong>Smiljevac</strong>, and <strong>Galinika</strong>. The lowest point is the <strong>Vrelo River</strong> at 234 meters. More than <strong>80%</strong> of the park is covered in <strong>mixed forests</strong>. This unique ecosystem is home to many plant and animal species, including the endemic <strong>Pančić's spruce</strong>, a relic from the Ice Age. Over <strong>140 bird species</strong>, <strong>19 fish species</strong>, and <strong>60 mammal species</strong> live here, including Serbia’s largest population of <strong>brown bears</strong>. </p> </section>
              <img srcSet={`${tara33} 450w, ${tara3}`} alt="Tara National Park 2" loading="lazy" />

              <section lang="en"> <p> Tara National Park is rich in <strong>archaeological sites</strong> and monuments from the Neolithic to the late Middle Ages. The most significant are the <strong>Rača Monastery</strong> from the <strong>13th century</strong> and the <strong>necropolises with stećci</strong> in <strong>Perućac</strong> and <strong>Rastište</strong>, which have been on the <strong>UNESCO list</strong> since 2016. The park's most captivating viewpoints include <strong>Banjka Stena</strong>, <strong>Bilješka Stena</strong>, <strong>Sjeniča</strong>, <strong>Crnjeskovo</strong>, <strong>Sokolarica</strong>, and <strong>Osluša</strong>. Additionally, the <strong>Drina Canyon</strong> and <strong>Perućac Lake</strong> are ideal for boat cruises. </p> </section>
              <img srcSet={`${tara44} 450w, ${tara4}`} alt="Tara National Park 3" loading="lazy" />

              <section lang="en"> <p> This area is one of the <strong>richest forest ecosystems</strong> in Europe and is often called the <strong>"lungs of Serbia"</strong>. The forests are dominated by <strong>fir</strong>, <strong>beech</strong>, and <strong>spruce</strong>, with the particularly notable <strong>Pančić's spruce</strong>. Tara is home to more than <strong>1,100 plant species</strong>, making up nearly <strong>a third of Serbia’s flora</strong>. It also has recorded <strong>96 species of lichens</strong>, <strong>171 species of mosses</strong>, <strong>30 types of ferns</strong>, <strong>7 gymnosperms</strong>, and around <strong>950 angiosperms</strong>. </p> </section>
              <img srcSet={`${tara55} 450w, ${tara5}`} alt="Tara Mountain" loading="lazy" />

              <section lang="en"> <p> Tara is home to a <strong>diverse range of animal species</strong>: <strong>12 amphibians</strong>, <strong>140 insects</strong>, and <strong>135 bird species</strong> – including the <strong>white-tailed eagle</strong>, <strong>griffon vulture</strong>, <strong>golden eagle</strong>, <strong>peregrine falcon</strong>, <strong>woodcock</strong>, and <strong>western capercaillie</strong>. Among the <strong>55 mammal species</strong> are <strong>chamois</strong>, <strong>roe deer</strong>, <strong>lynx</strong>, <strong>wolves</strong>, <strong>jackals</strong>, <strong>wild boars</strong>, <strong>martens</strong>, and protected species like the <strong>otter</strong> and <strong>brown bear</strong>. </p> </section>
              <img srcSet={`${tara66} 450w, ${tara6}`} alt="Ice Cave" loading="lazy" />

              <section lang="en"> <p> The park offers a wide range of activities: <strong>hiking</strong>, <strong>cycling</strong>, <strong>canyoning</strong>, <strong>skiing</strong>, <strong>swimming</strong>, as well as <strong>guided tours</strong>. Wildlife enthusiasts can observe <strong>bears</strong> from specially designed viewing shelters, while <strong>horseback riding</strong> is organized through the park’s beautiful landscapes. </p> </section>
              <img srcSet={`${tara77} 450w, ${tara7}`} alt="Tara 1" loading="lazy" />

              <section lang="en"> <p> Tara is rich in <strong>waterfalls</strong>, <strong>streams</strong>, and <strong>springs</strong> that form a unique <strong>water system</strong>. The waterfalls and river flows make a powerful impression with their beauty. Combined with the <strong>forests</strong>, <strong>mountain peaks</strong>, and <strong>rivers</strong>, Tara is the perfect place for <strong>nature lovers</strong> and seekers of <strong>peace</strong>. </p> </section>
              <img srcSet={`${tara88} 450w, ${tara8}`} alt="Tara 2" loading="lazy" />

              <section lang="en"> <p> Walks and excursions in the park lead along <strong>marked trails</strong>, dense forests, and to <strong>viewpoints</strong> overlooking the <strong>Drina River</strong> and its surroundings. Popular tours include visits to <strong>waterfalls</strong>, the <strong>Drina Canyon</strong>, and <strong>historical sites</strong>. Longer tours include <strong>climbing to mountain peaks</strong>, while shorter ones are ideal for <strong>families with children</strong>. Tara is a true haven for <strong>adventurers</strong> and <strong>lovers of silence</strong>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default NacionalniParkTara;