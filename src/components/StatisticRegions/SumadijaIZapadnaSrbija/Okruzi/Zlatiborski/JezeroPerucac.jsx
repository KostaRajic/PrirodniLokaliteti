/* eslint-disable react/no-unknown-property */
import perucac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/desktop/jezeroPerucac1.jpg";
import perucac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/desktop/jezeroPerucac2.jpg";
import perucac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/desktop/jezeroPerucac3.jpg";
import perucac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/desktop/jezeroPerucac4.jpg";
import perucac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/desktop/jezeroPerucac5.jpg";
import perucac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/desktop/jezeroPerucac6.jpg";
import perucac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/mobile/MjezeroPerucac1.jpg";
import perucac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/mobile/MjezeroPerucac2.jpg";
import perucac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/mobile/MjezeroPerucac3.jpg";
import perucac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/mobile/MjezeroPerucac4.jpg";
import perucac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/mobile/MjezeroPerucac5.jpg";
import perucac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/JezeroPerucac/mobile/MjezeroPerucac6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const JezeroPerucac = () => {
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
            ? "Jezero Perućac | Turizam, priroda i avantura u Srbiji"
            : "Lake Perućac | Tourism, Nature & Adventure in Serbia"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Jezero Perućac, smešteno između Bajine Bašte i Višegrada, idealno je mesto za letnji odmor. Kupanje, ribolov, vožnja čamcem i Drinska regata privlače brojne posetioce."
              : "Lake Perućac, located between Bajina Bašta and Višegrad, is a perfect summer destination for swimming, fishing, boating, and the famous Drina River Regatta."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Jezero Perućac, Bajina Bašta, Drina, Drinska regata, Tara, Nacionalni park Tara, kupanje, splavovi, ribolov, turizam u Srbiji, aktivan odmor, vodopadi, rafting"
              : "Lake Perucac, Bajina Basta, Drina River, Drina Regatta, Tara Mountain, Tara National Park, swimming, floating rafts, fishing, Serbia tourism, outdoor adventure, rafting"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/jezero-perucac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/jezero-perucac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/jezero-perucac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/jezero-perucac"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home)} />
        <header></header>
        <img srcSet={`${perucac11} 450w, ${perucac1} `} alt="Jezero Perućac 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h2>Jezero Perućac</h2>

              <section lang="sr">
                <p>
                  <strong>Perućačko jezero</strong> je veštačko jezero udaljeno oko <em>2,4 km</em> od istoimenog mesta <strong>Perućac</strong>, opština <strong>Bajina Bašta</strong>. Svojim geografskim položajem, jezero Perućac nalazi se na području opštine Bajina Bašta, Republika Srbija, i opštine Srebrenica, Republika Srpska, BiH. Jezero leži u prirodnom zavoju kanjona reke <em>Drine</em> između Bajine Bašte i Višegrada, obavijajući planinu <strong>Taru</strong>, na kojoj se prostire <em>Nacionalni park Tara</em>. Ovo podrinjsko jezero smešteno je na <em>290 metara nadmorske visine</em> i okruženo je planinama <strong>Javor</strong>, <strong>Devetak</strong>, <strong>Zvijezda</strong> i <strong>Tara</strong>.
                </p>
              </section>

              <img srcSet={`${perucac22} 450w, ${perucac2}`} alt="Jezero Perućac 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Jezero je nastalo tokom 60-ih godina prošlog veka pregrađivanjem toka reke <strong>Drine</strong> radi izgradnje hidroelektrane <em>„Bajina Bašta“</em>. Ukupna površina jezera iznosi <em>12,5 km²</em>, dok je zapremina vode <strong>345 x 10⁶ m³</strong>. Prosečna dubina jezera je <em>60 metara</em>, dok najdublja tačka doseže čak <strong>1000 metara</strong>. Veći deo jezera nalazi se u kanjonu reke Drine, koji počinje na udaljenosti od <em>7 km</em> od brane hidroelektrane <em>„Bajina Bašta“</em>. Najduži deo jezera, koji prolazi kroz kanjon, okružen je strmim obalama sa visokim kamenim liticama i blokovima koji se vertikalno spuštaju u vodu. Zbog velike strmine, dubina jezera na svega nekoliko metara od obale iznosi između <em>3 i 8 metara</em>.
                </p>
              </section>

              <img srcSet={`${perucac33} 450w, ${perucac3}`} alt="Jezero Perućac 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Za ljubitelje avanture i aktivnog odmora, <strong>Perućac</strong> pruža mnoštvo mogućnosti. Bez obzira da li birate kupanje u bistroj vodi jezera, ribolov, vožnju čamcem, kanuom ili pedalinu, ili se odlučite za uzbudljivo spuštanje čamcima ili SUP daskama niz <em>Drinu</em>, svaki trenutak ovde obećava uživanje i adrenalin. Splavovi sa plažama, opremljeni pokretnim pontonima i dečjim bazenima, nude sigurno i veselo mesto za kupanje, dok dodatni sadržaji poput tuševa, tobogana i skakaonica čine boravak još zanimljivijim i dinamičnijim.
                </p>
              </section>

              <img srcSet={`${perucac44} 450w, ${perucac4}`} alt="Jezero Perucac 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Turistički potencijal jezera <strong>Perućac</strong> ogleda se u mogućnosti da posetioci zadovolje svoje osnovne potrebe za odmorom i rekreacijom. Turistička sezona na ovom jezeru traje od <em>juna do avgusta</em>. Na samoj obali nalazi se hotel niže kategorije, a u njegovoj neposrednoj blizini smešteno je nekoliko bungalova namenjenih turistima. Ispod hotela i bungalova, na obali jezera, nalazi se montažna pontonska plaža koju posetioci koriste tokom letnjih meseci. Pontonska plaža je podeljena na dva dela: deo sa četiri bazena za decu i veći deo namenjen odraslima, sa direktnim ulazom u jezero. Pored pontonske plaže, duž obale jezera nalazi se nekoliko montažnih objekata (splavova) koji pružaju ugostiteljske usluge, ali i mogućnost privatnog smeštaja.
                </p>
              </section>

              <img srcSet={`${perucac66} 450w, ${perucac6}`} alt="Jezero Perucac 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Krajem jula, već nekoliko godina unazad, održava se <strong>Drinska regata</strong> na relaciji od brane u Perućcu do Rogačice (<em>25 km</em>). Broj učesnika iz godine u godinu raste, pa je 2010. godine dostigao čak <strong>deset hiljada</strong>. Drinska regata predstavlja jednu od najvećih manifestacija na vodi u Srbiji i ključni je deo turističke ponude ovog kraja. Na ovom jezeru, 2015. godine, svečano je zatvoren prvi internacionalni festival kratkog igranog filma, poznat kao <em>Bašta Fest</em>, koji se održava u <strong>Bajinoj Bašti</strong>.
                </p>
              </section>

              <img srcSet={`${perucac55} 450w, ${perucac5}`} alt="Jezero Perucac 6" loading="lazy" />

              <section lang="sr">
                <p>
                  Na jezeru <strong>Perućac</strong> postoje restorani koji nude jedinstveno iskustvo uživanja u lokalnim specijalitetima i prelepom ambijentu. Restorani su smešteni uz samu obalu jezera ili na splavovima, pružajući posetiocima priliku da uživaju u panoramskom pogledu na vodu i okolne planine. Specijaliteti uključuju svežu ribu iz <em>Drine</em> i jezera, kao što su pastrmka, smuđ i mladica, ali i tradicionalna srpska jela, poput jagnjetine ispod sača, domaćih pogača i raznih vrsta sireva. Pored hrane, mnogi restorani nude lokalna vina i rakije, koje upotpunjuju gastronomski doživljaj. Večernji ambijent u restoranima je posebno čaroban, uz osvetljene splavove, mirnu vodu i često prisutnu živu muziku, što stvara savršenu atmosferu za opuštanje i uživanje.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Perućac Lake</h2>

              <section lang="en">
                <p>
                  <strong>Perućac Lake</strong> is an artificial lake located about <em>2.4 km</em> from the town of <strong>Perućac</strong>, in the municipality of <strong>Bajina Bašta</strong>. Geographically, Perućac Lake lies within the municipality of Bajina Bašta, Republic of Serbia, and the municipality of Srebrenica, Republika Srpska, Bosnia and Herzegovina. The lake is situated in a natural bend of the <em>Drina River</em> canyon between Bajina Bašta and Višegrad, surrounding the <strong>Tara</strong> mountain, where the <em>Tara National Park</em> is located. This Podrinje lake is situated at an <em>altitude of 290 meters above sea level</em> and is surrounded by the mountains <strong>Javor</strong>, <strong>Devetak</strong>, <strong>Zvijezda</strong>, and <strong>Tara</strong>.
                </p>
              </section>

              <img srcSet={`${perucac22} 450w, ${perucac2}`} alt="Perućac Lake 2" loading="lazy" />

              <section lang="en">
                <p>
                  The lake was formed during the 1960s by damming the flow of the <strong>Drina River</strong> for the construction of the <em>„Bajina Bašta“</em> hydroelectric power plant. The total surface area of the lake is <em>12.5 km²</em>, while the water volume is <strong>345 x 10⁶ m³</strong>. The average depth of the lake is <em>60 meters</em>, with the deepest point reaching as much as <strong>1000 meters</strong>. Most of the lake lies within the Drina River canyon, which begins about <em>7 km</em> from the dam of the <em>„Bajina Bašta“</em> hydroelectric power plant. The longest part of the lake passing through the canyon is surrounded by steep shores with high rocky cliffs and blocks that drop vertically into the water. Due to the steepness, the lake’s depth just a few meters from the shore ranges between <em>3 and 8 meters</em>.
                </p>
              </section>

              <img srcSet={`${perucac33} 450w, ${perucac3}`} alt="Perućac Lake 3" loading="lazy" />

              <section lang="en">
                <p>
                  For lovers of adventure and active recreation, <strong>Perućac</strong> offers many opportunities. Whether you choose to swim in the crystal-clear lake water, fish, ride a boat, canoe, or paddle boat, or opt for an exciting ride on boats or SUP boards down the <em>Drina</em>, every moment here promises enjoyment and adrenaline. Rafts with beaches, equipped with floating pontoons and children's pools, provide a safe and cheerful place for swimming, while additional amenities such as showers, slides, and diving platforms make the stay even more fun and dynamic.
                </p>
              </section>

              <img srcSet={`${perucac44} 450w, ${perucac4}`} alt="Perućac Lake 4" loading="lazy" />

              <section lang="en">
                <p>
                  The tourism potential of <strong>Perućac Lake</strong> is reflected in the visitors’ ability to satisfy their basic needs for rest and recreation. The tourist season at this lake lasts from <em>June to August</em>. On the shore, there is a lower-category hotel, and nearby there are several bungalows intended for tourists. Below the hotel and bungalows, on the lake shore, there is a modular floating beach used by visitors during the summer months. The floating beach is divided into two parts: a section with four pools for children and a larger section intended for adults, with direct access to the lake. Besides the floating beach, along the lake shore, there are several modular facilities (rafts) offering hospitality services as well as options for private accommodation.
                </p>
              </section>

              <img srcSet={`${perucac66} 450w, ${perucac6}`} alt="Perućac Lake 5" loading="lazy" />

              <section lang="en">
                <p>
                  At the end of July, for several years now, the <strong>Drina Regatta</strong> is held on the route from the dam in Perućac to Rogačica (<em>25 km</em>). The number of participants has increased year by year, reaching as many as <strong>ten thousand</strong> in 2010. The Drina Regatta represents one of the largest water events in Serbia and is a key part of the local tourism offer. In 2015, the first international short feature film festival, known as <em>Bašta Fest</em>, which is held in <strong>Bajina Bašta</strong>, was ceremonially closed at this lake.
                </p>
              </section>

              <img srcSet={`${perucac55} 450w, ${perucac5}`} alt="Perućac Lake 6" loading="lazy" />

              <section lang="en">
                <p>
                  At <strong>Perućac Lake</strong>, there are restaurants offering a unique experience of enjoying local specialties in a beautiful setting. Restaurants are located right on the lake shore or on rafts, giving visitors the opportunity to enjoy panoramic views of the water and surrounding mountains. Specialties include fresh fish from the <em>Drina</em> and the lake, such as trout, zander, and sterlet, as well as traditional Serbian dishes like lamb cooked under the bell (sač), homemade flatbreads, and various types of cheeses. In addition to food, many restaurants offer local wines and brandies, completing the gastronomic experience. The evening atmosphere in the restaurants is especially magical, with illuminated rafts, calm water, and often live music, creating the perfect ambiance for relaxation and enjoyment.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default JezeroPerucac;