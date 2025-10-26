/* eslint-disable react/no-unknown-property */
import ribarskaBanja1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/desktop/ribarskaBanja1.jpg";
import ribarskaBanja2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/desktop/ribarskaBanja2.jpg";
import ribarskaBanja3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/desktop/ribarskaBanja3.jpg";
import ribarskaBanja4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/desktop/ribarskaBanja4.jpg";
import ribarskaBanja5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/desktop/ribarskaBanja5.jpg";
import ribarskaBanja11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/mobile/MribarskaBanja1.jpg";
import ribarskaBanja22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/mobile/MribarskaBanja2.jpg";
import ribarskaBanja33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/mobile/MribarskaBanja3.jpg";
import ribarskaBanja44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/mobile/MribarskaBanja4.jpg";
import ribarskaBanja55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/RibarskaBanja/mobile/MribarskaBanja5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const RibarskaBanja = () => {
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
            ? 'Ribarska Banja – Lekovita voda i zdravlje na Jastrepcu | Srbija Wonders'
            : 'Ribarska Banja – Healing Waters and Wellness at Jastrebac | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Ribarska Banja je poznato lečilište na obroncima Jastrepca sa šest termalnih izvora, modernim wellness centrom i bogatom istorijom još od rimskog doba.'
              : 'Ribarska Banja is a famous spa on the slopes of Jastrebac, known for its six thermal springs, modern wellness center, and rich history dating back to Roman times.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Ribarska Banja, banje u Srbiji, lekoviti izvori, termalne vode, rehabilitacija, wellness, Jastrebac, istorija, turizam'
              : 'Ribarska Banja, spas in Serbia, healing springs, thermal waters, rehabilitation, wellness, Jastrebac, history, tourism'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/ribarska-banja`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/ribarska-banja"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/ribarska-banja"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/ribarska-banja"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(rasinskiOkrugPathRoutes.home)}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${ribarskaBanja11} 450w, ${ribarskaBanja1} `} alt="Ribarska Banja 1" />


        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Ribarska Banja</h1>

              <section lang="sr">
                <p>
                  <strong>Ribarska Banja</strong> je malo naselje smešteno na obroncima planine <strong>Jastrebac</strong>,
                  tačnije na njenom masivu <strong>Veliki Jastrebac</strong>. Prema poslednjem popisu, naselje broji svega
                  <strong> 280 stanovnika</strong>. Deo je <strong>Rasinskog okruga</strong>, a nalazi se na oko
                  <strong> 34 km od Kruševca</strong>. Ako krećete iz <strong>Beograda</strong>, put do Ribarske Banje
                  dugačak je gotovo <strong>215 km</strong>, a vožnja traje nešto više od dva sata. Od <strong>Niša</strong>
                  je udaljena oko <strong>65 km</strong>, od <strong>Kragujevca</strong> oko <strong>140 km</strong>,
                  dok je od <strong>Novog Sada</strong> oko <strong>310 km</strong>.
                  <br />
                  <br />
                  Kao što je već spomenuto, lepotu ove banje i njene <strong>lekovite izvore</strong> prvi su otkrili
                  <strong> Rimljani</strong>, i to sasvim slučajno. Nakon nekoliko dana odmora na ovom području, tokom
                  kupanja i upotrebe lekovite vode, nekoliko vojnika je primetilo da se osećaju izuzetno dobro
                  i potpuno preporođeni.
                </p>
              </section>

              <img srcSet={`${ribarskaBanja22} 450w, ${ribarskaBanja2}`} alt="Ribarska Banja 2" />

              <section lang="sr">
                <p>
                  Prema nekim istorijskim istraživanjima, prvo <strong>kupatilo</strong> u Ribarskoj Banji izgrađeno je
                  za vreme <strong>carice Milice</strong>, koja je upravo ovde negovala svoju lepotu.
                  <br />
                  Kasnije su i <strong>Turci</strong> otkrili lekovite izvore ovog područja, pa su izgradili veliki
                  <strong> hamam</strong>, u kojem su uživali samo najimućniji.
                  <br />
                  Godine <strong>1852.</strong> banju je posetio <strong>Aleksandar Karađorđević</strong>, koji je naredio
                  izgradnju novog, tada modernog kupatila. Samo dve godine kasnije, banja je dobila svog
                  <strong> prvog lekara</strong>.
                  <br />
                  Nažalost, krajem <strong>19. veka</strong> gotovo sve je bilo uništeno, ali je brzo obnovljeno.
                  Ponovno interesovanje za banju, njen razvoj i gradnja novih objekata, javili su se za vreme
                  vladavine <strong>kralja Petra I Karađorđevića</strong>.
                  <br />
                  Ako ste se ikada pitali kako je Ribarska Banja dobila svoje ime, postoji zanimljiva priča.
                  Naime, ovde su <strong>ribari</strong> pecali za <strong>kneza Lazara</strong>, najčešće
                  <strong> pastrmku</strong>, koja se smatrala najkvalitetnijom i najukusnijom ribom.
                </p>
              </section>

              <img srcSet={`${ribarskaBanja33} 450w, ${ribarskaBanja3}`} alt="Ribarska Banja 3" />

              <section lang="sr">
                <p>
                  Samo <strong>lečenje</strong>, <strong>vežbe</strong>, <strong>terapija</strong> i <strong>dijagnostika</strong>
                  se odvijaju u <strong>Specijalnoj bolnici za rehabilitaciju</strong>. Ovde se leče skoro sva
                  <strong> koštana oboljenja</strong>, sva tri oblika <strong>reumatizma</strong>,
                  <strong> deformacije kičmenog stuba</strong>, <strong>povrede zglobova</strong>,
                  <strong> hemiplegije</strong>, <strong>hemipareze</strong>…
                  <br />
                  <br />
                  Nakon <em>operacija na kostima</em> ili stanja nakon preloma, doktori će vam najčešće preporučiti
                  <strong> Ribarsku Banju</strong> kao idealno mesto za vaš oporavak.
                  <br />
                  <br />
                  S obzirom na to da se banja nalazi na nadmorskoj visini od <strong>540 m</strong>, okružena
                  <strong> gustim šumama</strong>, prijatne <strong>subplaninske klime</strong> i <strong>svežeg vazduha</strong>,
                  preporučuje se i pacijentima sa <em>lakšim plućnim problemima</em>.
                </p>
              </section>

              <img srcSet={`${ribarskaBanja44} 450w, ${ribarskaBanja4}`} alt="Ribarska Banja 4" />

              <section lang="sr">
                <p>
                  U Ribarskoj Banji nalazi se čak <strong>šest termalnih izvora</strong> sa
                  <strong> sumporovitom lekovitom vodom</strong>, od kojih je <strong>najtopliji</strong> sa temperaturom
                  od čak <strong>42°C</strong>. Ostali izvori imaju temperature koje variraju od
                  <strong> 25°C do 37°C</strong>. Jedini izvor sa <strong>hladnijom vodom</strong>, oko <strong>16°C</strong>,
                  koristi se za <em>pijenje</em>.
                  <br />
                  U centru za lečenje nalazi se <strong>zatvoreni bazen</strong> i nekoliko <strong>kadica</strong>,
                  dok je za posetioce u letnjem periodu na raspolaganju <strong>veliki otvoreni bazen</strong>.
                  <strong> Mališani</strong> će sigurno uživati u <em>zabavi koja je zagarantovana</em>.
                  <br />
                  <br />
                  Ako odlučite da svoj odmor provedete ovde i potpuno se opustite, na raspolaganju su vam
                  različite <strong>wellness usluge</strong>, uključujući <strong>masaže</strong>, <strong>saune</strong>,
                  <strong> parna kupatila</strong>, <strong>slanu sobu</strong>, <strong>tretmane za lice i telo</strong>,
                  <strong> teretanu</strong> i još mnogo toga.
                </p>
              </section>

              <img srcSet={`${ribarskaBanja55} 450w, ${ribarskaBanja5}`} alt="Ribarska Banja 5" />

              <section lang="sr">
                <p>
                  Ako ste <strong>ljubitelj uživanja</strong> i želite da svoj odmor provedete opuštajući se
                  uz <strong>termalne vode</strong>, <strong>masaže</strong> i sve druge <strong>wellness usluge</strong>,
                  <strong> Ribarska Banja</strong> je pravo mesto za vas u bilo kojem periodu godine.
                  <br />
                  <br />
                  Međutim, ako ste skloniji <strong>dugim šetnjama</strong>, <strong>avanturama</strong> i možda čak
                  <strong> noćnom životu</strong>, <strong>leto</strong> je savršen period za vaš boravak.
                  <br />
                  <br />
                  Tokom <strong>letnjih meseci</strong>, Ribarska Banja nudi raznovrsne <strong>događaje</strong>,
                  <strong> bazare</strong> i <strong>manifestacije</strong>, a najpoznatija među njima je
                  <strong> Kulturno leto</strong>. Ovo je idealna prilika za sve ljubitelje <strong>folklora</strong>,
                  <strong> umetničkih performansa</strong> i <strong>uživanja u domaćim specijalitetima</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Ribarska Banja</h1>

              <section lang="en">
                <p>
                  <strong>Ribarska Banja</strong> is a small settlement located on the slopes of Mount <strong>Jastrebac</strong>,
                  specifically on its <strong>Veliki Jastrebac</strong> massif. According to the latest census, the village has only
                  <strong> 280 inhabitants</strong>. It is part of the <strong>Rasina District</strong> and is located about
                  <strong> 34 km from Kruševac</strong>. If you're coming from <strong>Belgrade</strong>, the road to Ribarska Banja
                  is almost <strong>215 km</strong> long, and the drive takes just over two hours. It is about <strong>65 km</strong>
                  from <strong>Niš</strong>, around <strong>140 km</strong> from <strong>Kragujevac</strong>, and approximately
                  <strong> 310 km</strong> from <strong>Novi Sad</strong>.
                  <br />
                  <br />
                  As mentioned earlier, the beauty of this spa and its <strong>healing springs</strong> were first discovered by the
                  <strong> Romans</strong>, quite by accident. After a few days of rest in the area, during bathing and using the
                  therapeutic waters, several soldiers noticed that they felt exceptionally well and completely rejuvenated.
                </p>
              </section>

              <img srcSet={`${ribarskaBanja22} 450w, ${ribarskaBanja2}`} alt="Ribarska Banja 2" />

              <section lang="en">
                <p>
                  According to some historical research, the first <strong>bathhouse</strong> in Ribarska Banja was built
                  during the time of <strong>Princess Milica</strong>, who maintained her beauty right here.
                  <br />
                  Later, the <strong>Turks</strong> also discovered the healing springs of this area and built a large
                  <strong> hammam</strong>, which was enjoyed only by the wealthiest.
                  <br />
                  In <strong>1852</strong>, <strong>Alexander Karađorđević</strong> visited the spa and ordered the construction
                  of a new, then-modern bathhouse. Just two years later, the spa received its
                  <strong> first physician</strong>.
                  <br />
                  Unfortunately, by the end of the <strong>19th century</strong>, almost everything was destroyed, but it was
                  quickly rebuilt. Renewed interest in the spa, its development, and the construction of new facilities emerged
                  during the reign of <strong>King Peter I Karađorđević</strong>.
                  <br />
                  If you've ever wondered how Ribarska Banja got its name, there's an interesting story. Fishermen used to fish
                  here for <strong>Knez Lazar</strong>, mostly catching <strong>trout</strong>, which was considered the
                  highest-quality and tastiest fish.
                </p>
              </section>

              <img srcSet={`${ribarskaBanja33} 450w, ${ribarskaBanja3}`} alt="Ribarska Banja 3" />

              <section lang="en">
                <p>
                  All <strong>treatments</strong>, <strong>exercises</strong>, <strong>therapy</strong>, and
                  <strong> diagnostics</strong> take place in the <strong>Special Rehabilitation Hospital</strong>.
                  Almost all <strong>bone diseases</strong> are treated here, including all three types of
                  <strong> rheumatism</strong>, <strong>spinal deformities</strong>, <strong>joint injuries</strong>,
                  <strong> hemiplegia</strong>, <strong>hemiparesis</strong>, and more.
                  <br />
                  <br />
                  After <em>bone surgeries</em> or recovery from fractures, doctors will often recommend
                  <strong> Ribarska Banja</strong> as the ideal place for your rehabilitation.
                  <br />
                  <br />
                  Situated at an altitude of <strong>540 m</strong> and surrounded by <strong>dense forests</strong>,
                  with a pleasant <strong>sub-mountain climate</strong> and <strong>fresh air</strong>, the spa is also
                  recommended for patients with <em>mild respiratory conditions</em>.
                </p>
              </section>

              <img srcSet={`${ribarskaBanja44} 450w, ${ribarskaBanja4}`} alt="Ribarska Banja 4" />

              <section lang="en">
                <p>
                  Ribarska Banja has as many as <strong>six thermal springs</strong> with
                  <strong> sulfur-rich healing water</strong>, the hottest of which reaches a temperature of
                  <strong> 42°C</strong>. The other springs vary in temperature from <strong>25°C to 37°C</strong>.
                  The only <strong>cold-water spring</strong>, around <strong>16°C</strong>, is used for <em>drinking</em>.
                  <br />
                  The treatment center includes an <strong>indoor pool</strong> and several <strong>bathing tubs</strong>,
                  while during the summer, a large <strong>outdoor pool</strong> is available for visitors.
                  <strong> Children</strong> will definitely enjoy the <em>guaranteed fun</em>.
                  <br />
                  <br />
                  If you decide to spend your vacation here and completely unwind, you can enjoy a range of
                  <strong> wellness services</strong>, including <strong>massages</strong>, <strong>saunas</strong>,
                  <strong> steam baths</strong>, <strong>salt rooms</strong>, <strong>facial and body treatments</strong>,
                  <strong> a gym</strong>, and much more.
                </p>
              </section>

              <img srcSet={`${ribarskaBanja55} 450w, ${ribarskaBanja5}`} alt="Ribarska Banja 5" />

              <section lang="en">
                <p>
                  If you are a <strong>wellness enthusiast</strong> and want to spend your vacation relaxing in
                  <strong> thermal waters</strong>, enjoying <strong>massages</strong>, and various <strong>spa services</strong>,
                  then <strong>Ribarska Banja</strong> is the right place for you, any time of the year.
                  <br />
                  <br />
                  However, if you're more into <strong>long walks</strong>, <strong>adventures</strong>, or even a bit of
                  <strong> nightlife</strong>, <strong>summer</strong> is the perfect season for your visit.
                  <br />
                  <br />
                  During the <strong>summer months</strong>, Ribarska Banja hosts a variety of <strong>events</strong>,
                  <strong> markets</strong>, and <strong>festivals</strong>, the most famous of which is the
                  <strong> Cultural Summer</strong>. It’s the perfect opportunity for fans of <strong>folklore</strong>,
                  <strong> art performances</strong>, and <strong>local culinary delights</strong>.
                </p>
              </section>


            </>
          )
        }

      </div >
    </>
  );
};


export default RibarskaBanja;