/* eslint-disable react/no-unknown-property */
import zasavica1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/desktop/zasavica2.jpg";
import zasavica2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/desktop/zasavica1.jpg";
import zasavica3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/desktop/zasavica4.jpg";
import zasavica4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/desktop/zasavica5.jpg";
import zasavica5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/desktop/zasavica6.jpg";
import zasavica6 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/desktop/zasavica7.jpg";
import zasavica11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/mobile/Mzasavica2.jpg";
import zasavica22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/mobile/Mzasavica1.jpg";
import zasavica33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/mobile/Mzasavica4.jpg";
import zasavica44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/mobile/Mzasavica5.jpg";
import zasavica55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/mobile/Mzasavica6.jpg";
import zasavica66 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SRPZasavica/mobile/Mzasavica7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SRPZasavica = () => {
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
          {switchLanguage === "rs"
            ? 'Specijalni rezervat prirode Zasavica | Priroda i Zaštita Životne Sredine | Serbia Wonders'
            : 'Zasavica Nature Reserve | Nature and Environmental Protection | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? 'Specijalni rezervat prirode Zasavica je močvarno područje izuzetnog značaja sa bogatim biljnim i životinjskim svetom, idealan za posetioce i ljubitelje prirode.'
              : 'The Zasavica Nature Reserve is a wetland area of exceptional importance, rich in flora and fauna, perfect for visitors and nature lovers.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? 'Zasavica, specijalni rezervat prirode, močvara, dabrovi, ptice, Mačva, priroda, zaštita životne sredine'
              : 'Zasavica, special nature reserve, wetland, beavers, birds, Macva, nature, environmental protection'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/srp-sasavica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/srp-sasavica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/srp-sasavica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/srp-sasavica"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(sremskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zasavica44} 450w, ${zasavica4} `} alt="Specijalni rezervat prirode 'Zasavica' 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h1>Specijalni rezervat prirode "Zasavica"</h1>

              <section lang="sr">
                <p>
                  <strong>Specijalni rezervat prirode Zasavica</strong> je <em>prirodni rezervat</em> stavljen pod
                  <strong>zaštitu države 1977. godine</strong> kao prirodno dobro <strong>I kategorije</strong> od <em>izuzetnog značaja</em>.
                  Rezervat se prostire u <strong>severnoj Mačvi</strong> na teritorijama opština
                  <em>Sremska Mitrovica</em> i <em>Bogatić</em>. Ovo je <strong>močvarno područje</strong> sa
                  <em>poplavnim livadama i šumama</em> površine <strong>1825 hektara</strong> uz rečicu <em>Zasavicu</em> dužine <strong>33,1 km</strong>.
                  Kroz ovaj rezervat teče rečica <em>Zasavica</em>, potok <em>Batar</em>, kanali <em>Jovac</em> i
                  <em>Prekopac</em>, i postoji veza sa rekom <strong>Savom</strong>.
                </p>
              </section>

              <img srcSet={`${zasavica11} 450w, ${zasavica1} `} alt="Specijalni rezervat prirode 'Zasavica' 2" />


              <section lang="sr">
                <p>
                  <strong>Vizitorski centar</strong> predstavlja <em>centralno turističko mesto rezervata</em>.
                  Izgrađena je drvena građevina sa <strong>turnjem visine 18 m</strong> sa koga se pruža
                  pogled ka <em>pašnjaku od 300 ha</em> i <strong>najširem i najlepšem delu toka Zasavice</strong>.
                  U ovom objektu nalazi se <strong>trafika za prodaju suvenira</strong> i <em>2 sobe sa ukupno 7 ležaja</em>,
                  kao i <strong>dve pomoćne prostorije</strong>.
                </p>
              </section>

              <img srcSet={`${zasavica33} 450w, ${zasavica3} `} alt="Specijalni rezervat prirode 'Zasavica' 3" />

              <section lang="sr">
                <p>
                  Na ovom području do sada je zabeleženo preko <strong>600 biljnih vrsta</strong>.
                  Posebno je značajno prisustvo: <em>belog i žutog lokvanja</em>, <em>testerice</em>,
                  <em>lokvanjića</em>, <em>močvarne koprive</em> i <em>iđirota</em>.
                  Ovo je <strong>jedino mesto u Srbiji</strong> gde možete videti <em>dabra</em>.
                </p>
              </section>

              <img srcSet={`${zasavica22} 450w, ${zasavica2} `} alt="Specijalni rezervat prirode 'Zasavica' 4" />

              <section lang="sr">
                <p>
                  Danas, kad svaka zemlja vodi računa o <strong>očuvanju autohtonih rasa</strong>, uz pomoć države,
                  <strong>Specijalni rezervat Zasavica</strong> postao je čuvar <em>starih rasa</em>, odnosno
                  <em>genetskog potencijala</em>. Na pašnjaku <strong>Valjevac</strong>, koji je srce Rezervata,
                  slobodno žive, kao i pre više stotina godina, <strong>autohtone rase</strong>.
                  <strong>Podolsko goveče</strong> je <em>najveće radno goveče u Evropi</em>, koje sada ponovo pase i razmnožava se na Valjevcu.
                  Zna se da je <em>magareće mleko</em> među <strong>najboljim sredstvima za negu kože</strong>, kao i odličan lek za imunitet.
                </p>
              </section>

              <img srcSet={`${zasavica55} 450w, ${zasavica5} `} alt="Specijalni rezervat prirode 'Zasavica' 5" />

              <section lang="sr">
                <p>
                  Zahvaljujući <strong>brižljivom upravljanju</strong> kroz sve protekle godine,
                  <strong>Specijalni rezervat Zasavica</strong> i danas je bez ijedne fabrike i bez ijednog
                  <em>zagađivača</em>. A, Zasavica se za svu dosadašnju brigu odužila neverovatnim
                  <strong>diverzitetom</strong>. Svakodnevno privlači pažnju <em>stručnjaka iz mnogih naučnih oblasti</em>,
                  kao i pažnju sve većeg broja <strong>posetilaca i poštovalaca prirode</strong> iz Srbije i sveta.
                </p>
              </section>

              <img
                srcSet={`${zasavica66} 450w, ${zasavica6} `}
                alt="Specijalni rezervat prirode 'Zasavica' 6"
              />

              <section lang="sr">
                <p>
                  Posebno bogatstvo čine i <strong>213 vrsta ptica</strong>, a tu je, nakon mnogih decenija,
                  ponovo i sasvim neobičan stanovnik voda Zasavice - <em>neumorni graditelj, dabrovi</em>.
                  Opstanak retkih i <strong>zaštićenih biljnih vrsta</strong>, <em>vodozemaca i insekata</em>,
                  kao i ogromni resursi <strong>pijaće vode</strong> u dubinama zemljišta, čine
                  <strong>Specijalni rezervat Zasavica</strong>, pored ostalog, mestom od
                  <em>vitalnog i strateškog značaja</em> za sadašnje i buduće generacije kojima
                  ćemo ostaviti ovo prirodno bogatstvo.
                </p>
              </section>


            </>

          )
          :
          (
            <>
              <h1>Special Nature Reserve "Zasavica"</h1>

              <section lang="en">
                <p>
                  The <strong>Special Nature Reserve Zasavica</strong> is a <em>natural reserve</em> placed under
                  <strong>state protection in 1977</strong> as a natural good of <strong>Category I</strong> of <em>exceptional importance</em>.
                  The reserve extends in <strong>northern Mačva</strong> across the municipalities of
                  <em>Sremska Mitrovica</em> and <em>Bogatić</em>. It is a <strong>wetland area</strong> with
                  <em>flood meadows and forests</em> covering <strong>1825 hectares</strong> alongside the stream <em>Zasavica</em> which is <strong>33.1 km</strong> long.
                  The reserve is traversed by the stream <em>Zasavica</em>, the creek <em>Batar</em>, the canals <em>Jovac</em> and
                  <em>Prekopac</em>, and it connects to the <strong>Sava River</strong>.
                </p>
              </section>

              <img srcSet={`${zasavica11} 450w, ${zasavica1} `} alt="Special Nature Reserve 'Zasavica' 2" />

              <section lang="en">
                <p>
                  The <strong>Visitor Center</strong> represents the <em>central tourist spot of the reserve</em>.
                  It is a wooden building with a <strong>tower 18 meters high</strong> offering a view over the <em>300-hectare pasture</em> and the <strong>widest and most beautiful section of the Zasavica stream</strong>.
                  Inside the building there is a <strong>kiosk selling souvenirs</strong> and <em>2 rooms with a total of 7 beds</em>,
                  as well as <strong>two auxiliary rooms</strong>.
                </p>
              </section>

              <img srcSet={`${zasavica33} 450w, ${zasavica3} `} alt="Special Nature Reserve 'Zasavica' 3" />

              <section lang="en">
                <p>
                  Over <strong>600 plant species</strong> have been recorded in this area to date.
                  Particularly significant are the presences of: <em>white and yellow water lilies</em>, <em>sawgrass</em>,
                  <em>water lilies</em>, <em>marsh nettle</em>, and <em>bur-reed</em>.
                  This is the <strong>only place in Serbia</strong> where you can see <em>beavers</em>.
                </p>
              </section>

              <img srcSet={`${zasavica22} 450w, ${zasavica2} `} alt="Special Nature Reserve 'Zasavica' 4" />

              <section lang="en">
                <p>
                  Today, as every country takes care of <strong>preserving indigenous breeds</strong>, with the help of the state,
                  the <strong>Special Reserve Zasavica</strong> has become a guardian of <em>old breeds</em>, i.e., of
                  the <em>genetic potential</em>. On the <strong>Valjevac pasture</strong>, which is the heart of the Reserve,
                  <strong>indigenous breeds</strong> live freely, just as they did several hundred years ago.
                  The <strong>Podolian cattle</strong> is the <em>largest draft cattle breed in Europe</em>, which now grazes and reproduces again on Valjevac.
                  It is known that <em>donkey milk</em> is among the <strong>best remedies for skin care</strong> as well as an excellent immune booster.
                </p>
              </section>

              <img srcSet={`${zasavica55} 450w, ${zasavica5} `} alt="Special Nature Reserve 'Zasavica' 5" />

              <section lang="en">
                <p>
                  Thanks to <strong>careful management</strong> throughout all these years,
                  the <strong>Special Reserve Zasavica</strong> is still free of factories and any kind of <em>pollution</em>.
                  Zasavica has repaid all the care with incredible <strong>biodiversity</strong>.
                  It daily attracts the attention of <em>experts from many scientific fields</em>,
                  as well as an increasing number of <strong>visitors and nature enthusiasts</strong> from Serbia and worldwide.
                </p>
              </section>

              <img
                srcSet={`${zasavica66} 450w, ${zasavica6} `}
                alt="Special Nature Reserve 'Zasavica' 6"
              />

              <section lang="en">
                <p>
                  A special richness is made up of <strong>213 bird species</strong>, and there is, after many decades,
                  once again a very unusual inhabitant of Zasavica waters — the <em>tireless builder, the beaver</em>.
                  The survival of rare and <strong>protected plant species</strong>, <em>amphibians and insects</em>,
                  as well as enormous <strong>drinking water resources</strong> deep underground, make
                  the <strong>Special Reserve Zasavica</strong> a place of <em>vital and strategic importance</em>
                  for current and future generations to whom we will leave this natural wealth.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default SRPZasavica;