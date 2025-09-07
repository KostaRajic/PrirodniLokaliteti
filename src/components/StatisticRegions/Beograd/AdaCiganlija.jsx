/* eslint-disable react/no-unknown-property */
import adaCiganlija1 from "../../../assets/images/Beograd/AdaCiganlija/desktop/adaCiganlija1.jpg";
import adaCiganlija2 from "../../../assets/images/Beograd/AdaCiganlija/desktop/adaCiganlija2.jpg";
import adaCiganlija3 from "../../../assets/images/Beograd/AdaCiganlija/desktop/adaCiganlija3.jpg";
import adaCiganlija4 from "../../../assets/images/Beograd/AdaCiganlija/desktop/adaCiganlija4.jpg";
import adaCiganlija5 from "../../../assets/images/Beograd/AdaCiganlija/desktop/adaCiganlija5.jpg";
import adaCiganlija6 from "../../../assets/images/Beograd/AdaCiganlija/desktop/adaCiganlija6.jpg";
import adaCiganlija11 from "../../../assets/images/Beograd/AdaCiganlija/mobile/adaCiganlijaM1.jpg";
import adaCiganlija22 from "../../../assets/images/Beograd/AdaCiganlija/mobile/adaCiganlijaM2.jpg";
import adaCiganlija33 from "../../../assets/images/Beograd/AdaCiganlija/mobile/adaCiganlijaM3.jpg";
import adaCiganlija44 from "../../../assets/images/Beograd/AdaCiganlija/mobile/adaCiganlijaM4.jpg";
import adaCiganlija55 from "../../../assets/images/Beograd/AdaCiganlija/mobile/adaCiganlijaM5.jpg";
import adaCiganlija66 from "../../../assets/images/Beograd/AdaCiganlija/mobile/adaCiganlijaM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";


const AdaCiganlija = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang !== switchLanguage) {

      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);

  return (

    <>
      <Helmet>
        <title>Ada Ciganlija | Serbia Wonders</title>
        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Ada Ciganlija – beogradsko izletište i popularno mesto za odmor, sport i rekreaciju na reci Savi.'
              : 'Ada Ciganlija – Belgrade’s getaway spot, a popular place for relaxation, sports, and recreation on the Sava River.'
          }
        />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/beograd/ada-ciganlija`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/beograd/ada-ciganlija"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en//beograd/ada-ciganlija"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/beograd/ada-ciganlija"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(beogradPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img
          srcSet={`${adaCiganlija66} 450w, ${adaCiganlija6} `}
          alt="Ada Ciganlija 1"
          loading="lazy"
        />

        <h2>Ada Ciganlija</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Ada Ciganlija</strong>, koja se nalazi na samo <strong>4 km</strong> od centra Beograda, na reci
                  <strong>Savi</strong> u blizini njenog ušća u <strong>Dunav</strong>. Nekada je bila <em>ostrvo</em>, a danas je
                  <em>poluostrvo</em>. Ovo područje, bogato gustim <em>listopadnim šumama</em>, proplancima
                  i livadama, postalo je najpoznatije i najposećenije izletište, kupalište
                  i odmaralište Beograđana. Ime "<strong>Ada Ciganlija</strong>" potiče od keltskih reči
                  "<em>singa</em>" (<em>ostrvo</em>) i "<em>lia</em>" (<em>podvodno zemljište</em>), a kroz vreme je došlo do
                  promene u obliku reči, koja je na kraju postala "<strong>ciganlija</strong>". Ada je
                  odavno bila prepoznata kao prirodno bogatstvo, a još za vreme <strong>Karađorđa</strong>
                  i <strong>kneza Miloša Obrenovića</strong> bila je pod posebnom pažnjom. <strong>1821. godine
                    proglašena je državnim dobrom</strong>, status koji i danas ima.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija22} 450w, ${adaCiganlija2}`}
                alt="Ada Ciganlija 2"
                loading="lazy"
              />

              <section lang="sr">
                <p>
                  Donja i gornja pregrada na rukavcu reke <strong>Save</strong> izgrađene su <strong>1967. godine</strong>,
                  čime je Beograd dobio jedinstveno <em>jezero</em> dužine <strong>4,2 km</strong>, prosečne širine
                  <strong>200 m</strong> i dubine između <strong>4 i 6 m</strong>. Tokom letnjih meseci, <strong>Ada Ciganlija</strong>
                  privuče do <strong>300.000 posetilaca dnevno</strong>, koji se kupaju ili uživaju u
                  raznim oblicima rekreacije. Ukupna površina ove oblasti, uključujući Adu
                  Međicu i akvatorijum, iznosi <strong>800 hektara</strong>. Ada Ciganlija je značajan
                  ekološki centar, zahvaljujući povoljnoj kombinaciji vodenih površina i
                  šumskih područja, koja stvara specifičnu mikroklimu. Ova mikroklima
                  karakteriše se većom vlagom u vazduhu i nešto nižim letnjim
                  temperaturama u poređenju sa ostatkom Beograda.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija33} 450w, ${adaCiganlija3}`}
                alt="Ada Ciganlija 3"
                loading="lazy"
              />

              <section lang="sr">
                <p>
                  <strong>Savsko jezero (Ada Ciganlija)</strong> je idealno za vrhunska takmičenja na
                  mirnim vodama, zahvaljujući svom položaju, kvalitetu vode, opremljenosti
                  objekata i dužini staza. Pogodno je za različite vodene sportove kao što
                  su <em>plivanje</em>, <em>veslanje</em>, <em>kajak</em>, <em>vaterpolo</em>, <em>skakanje u vodu</em>, <em>jedrenje na
                    dasci</em> i mnoge druge aktivnosti. Na jezeru su se održavala brojna svetska
                  i domaća prvenstva. Ada Ciganlija nudi više od <strong>50 sportskih terena</strong> na
                  otvorenom, uključujući <strong>golf teren</strong> i <strong>žičaru za skijanje na vodi</strong>. Tu se
                  nalaze i <strong>fudbalski</strong>, <strong>teniski</strong>, <strong>rukometni</strong>, <strong>odbojkaški</strong> i <strong>košarkaški tereni</strong>,
                  kao i igrališta za <strong>bejzbol</strong>, <strong>ragbi</strong> i <strong>hokej na travi</strong>. Pored toga, postoje
                  tereni za <em>odbojku na pesku</em> i <em>akva-soker</em>, dok ljubitelji ekstremnih
                  sportova mogu uživati u <strong>bandži džampu</strong>, <em>veštačkoj steni za penjanje</em> i
                  <em>peintbolu</em>. Za ljubitelje ribolova tu je i <strong>jezero Ada safari</strong>.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija44} 450w, ${adaCiganlija4}`}
                alt="Ada Ciganlija 4"
                loading="lazy"
              />

              <section lang="sr">
                <p>
                  Glavna vrsta vegetacije na Adi Ciganliji su <strong>hrastove</strong> i <strong>brestove šume</strong>.
                  Tokom sredine prošlog veka, flora je obogaćena uvođenjem <strong>američke topole</strong>
                  i <strong>zelenog jasena</strong>. Najdivlji delovi ostrva prekriveni su netaknutom
                  vegetacijom, što otežava prolaz, ali u isto vreme podstiče istraživačku
                  radoznalost i avanturistički duh. Ada je bogata životinjskim svetom, a
                  među najbrojnijim vrstama su ptice, naročito <strong>divlje patke</strong> i <strong>galebovi</strong>,
                  kao i <strong>fazani</strong> i <strong>prepelice</strong>. Ova lokacija je i jedno od retkih urbanih
                  mesta gde je moguće videti <strong>srne</strong> ili <strong>zečeve</strong> u prirodnom okruženju. Plaža
                  oko Savskog jezera je potpuno uređena i opremljena svim potrebnim
                  infrastrukturnim sadržajem, što je čini jednom od najvećih i najlepših
                  plaža na veštačkim jezerima u Evropi. Voda Savskog jezera je toplija i
                  čistija od rečne, što ga čini idealnim mestom za masovnu rekreaciju.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija55} 450w, ${adaCiganlija5}`}
                alt="Ada Ciganlija 5"
                loading="lazy"
              />

              <section lang="sr">
                <p>
                  Ada Ciganlija je kulturno-zabavni centar Beograda, posebno u <strong>letnjem
                    periodu</strong>. Organizuju se brojne manifestacije u kojima učestvuju
                  najpoznatiji <strong>književnici</strong>, <strong>dramski i estradni umetnici</strong>,
                  <strong>kulturno-umetnička društva</strong>, <strong>horovi</strong>, <strong>orkestri</strong> i <strong>amateri</strong> iz raznih
                  oblasti. Ugostiteljsku ponudu Ade čini više desetina <strong>restorana u rustik-stilu</strong>, <strong>splav-restorana</strong> i <strong>kućica na vodi</strong>, koji svojim sadržajem
                  čuvaju i neguju boemsku tradiciju Beograda. Na ulazu su <strong>parking-prostor
                    za hiljadu vozila</strong> i <strong>marina u Čukaričkom rukavcu</strong>, pogodna za pristajanje
                  čamaca, jahti i manjih brodova. Posetiocima Ade Ciganlije stoje na
                  raspolaganju i <strong>prodavnice</strong>, prostori za <strong>piknik</strong>, <strong>kuglana</strong>, <strong>mini-golf</strong>,
                  <strong>kočije sa konjima</strong>, <strong>turistički vozić</strong>, <strong>pedaline i sandoline za vožnju
                    jezerom</strong>, kao i <strong>eko-brod na električni pogon</strong>.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija11} 450w, ${adaCiganlija1}`}
                alt="Ada Ciganlija 6"
                loading="lazy"
              />

              <section lang="sr">
                <p>
                  Ada Ciganlija je poznata i po svojoj ponudi <strong>ekstremnih sportova</strong>, a jedan
                  od najuzbudljivijih sadržaja je <strong>bandži džamp</strong>. Na ovom mestu, posetioci
                  mogu doživeti <em>adrenalin</em> u najčišćem obliku, skačući sa visine sa
                  sigurnosnim sistemom koji omogućava bezbedan pad. <strong>Bandži džamp na Adi
                    Ciganliji</strong> je popularan među ljubiteljima ekstremnih sportova koji žele
                  da se suoče sa strahom i uživaju u nezaboravnom iskustvu skakanja sa
                  visine, uz fantastičan pogled na okolinu.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Ada Ciganlija</strong>, located just <strong>4 km</strong> from the center of Belgrade, on the river
                  <strong>Sava</strong> near its confluence with the <strong>Danube</strong>. It used to be an <em>island</em>, but today it is a
                  <em>peninsula</em>. This area, rich in dense <em>deciduous forests</em>, clearings,
                  and meadows, has become the most famous and most visited excursion spot, bathing area,
                  and recreational site for Belgraders. The name "<strong>Ada Ciganlija</strong>" originates from Celtic words
                  "<em>singa</em>" (<em>island</em>) and "<em>lia</em>" (<em>underwater land</em>), which over time
                  evolved into the current form "<strong>ciganlija</strong>". Ada has long been recognized as a natural treasure, and during the times of <strong>Karađorđe</strong>
                  and <strong>Prince Miloš Obrenović</strong> it was under special protection. In <strong>1821, it was declared state property</strong>, a status it retains to this day.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija22} 450w, ${adaCiganlija2}`}
                alt="Ada Ciganlija 2"
                loading="lazy"
              />

              <section lang="en">
                <p>
                  The lower and upper dams on the <strong>Sava</strong> river branch were built in <strong>1967</strong>,
                  creating a unique <em>lake</em> for Belgrade, stretching <strong>4.2 km</strong> in length, with an average width of
                  <strong>200 m</strong> and depths between <strong>4 and 6 m</strong>. During the summer months, <strong>Ada Ciganlija</strong>
                  attracts up to <strong>300,000 visitors daily</strong>, who come to swim or enjoy
                  various recreational activities. The total area, including Ada Međica and the water basin, is <strong>800 hectares</strong>.
                  Ada Ciganlija is an important ecological center thanks to the favorable combination of water surfaces and
                  forested areas, creating a unique microclimate. This microclimate is characterized by higher humidity and slightly lower summer
                  temperatures compared to the rest of Belgrade.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija33} 450w, ${adaCiganlija3}`}
                alt="Ada Ciganlija 3"
                loading="lazy"
              />

              <section lang="en">
                <p>
                  <strong>Sava Lake (Ada Ciganlija)</strong> is ideal for top competitions on
                  calm waters, thanks to its location, water quality, equipped facilities,
                  and course lengths. It is suitable for various water sports such as <em>swimming</em>,
                  <em>rowing</em>, <em>kayaking</em>, <em>water polo</em>, <em>diving</em>, <em>windsurfing</em>, and many other activities.
                  Numerous world and national championships have been held on the lake. Ada Ciganlija offers over <strong>50 outdoor sports courts</strong>,
                  including a <strong>golf course</strong> and a <strong>water skiing cableway</strong>. There are also <strong>football</strong>,
                  <strong>tennis</strong>, <strong>handball</strong>, <strong>volleyball</strong>, and <strong>basketball courts</strong>,
                  as well as playgrounds for <strong>baseball</strong>, <strong>rugby</strong>, and <strong>field hockey</strong>. Additionally,
                  there are courts for <em>beach volleyball</em> and <em>aquasoccer</em>, while extreme sports enthusiasts can enjoy <strong>bungee jumping</strong>,
                  <em>artificial climbing walls</em>, and <em>paintball</em>. For fishing lovers, there is the <strong>Ada Safari lake</strong>.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija44} 450w, ${adaCiganlija4}`}
                alt="Ada Ciganlija 4"
                loading="lazy"
              />

              <section lang="en">
                <p>
                  The main types of vegetation on Ada Ciganlija are <strong>oak</strong> and <strong>elm forests</strong>.
                  During the mid-20th century, the flora was enriched by introducing <strong>American poplar</strong>
                  and <strong>green ash</strong>. The wildest parts of the island are covered with untouched
                  vegetation, which makes passage difficult but at the same time encourages exploratory
                  curiosity and an adventurous spirit. Ada is rich in wildlife, with the most numerous species being birds,
                  especially <strong>wild ducks</strong> and <strong>gulls</strong>, as well as <strong>pheasants</strong> and <strong>quails</strong>.
                  This location is also one of the rare urban places where it is possible to see <strong>roe deer</strong> or <strong>hares</strong> in their natural habitat.
                  The beach around Sava Lake is fully equipped with all necessary infrastructure, making it one of the largest and most beautiful
                  beaches on artificial lakes in Europe. The water of Sava Lake is warmer and cleaner than river water,
                  making it an ideal place for mass recreation.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija55} 450w, ${adaCiganlija5}`}
                alt="Ada Ciganlija 5"
                loading="lazy"
              />

              <section lang="en">
                <p>
                  Ada Ciganlija is a cultural and entertainment center of Belgrade, especially during the <strong>summer
                    period</strong>. Numerous events are organized featuring the most famous <strong>writers</strong>, <strong>theatrical and music artists</strong>,
                  <strong>cultural and artistic societies</strong>, <strong>choirs</strong>, <strong>orchestras</strong>, and <strong>amateurs</strong> from various fields.
                  The catering offer on Ada consists of dozens of <strong>rustic-style restaurants</strong>, <strong>floating restaurants</strong>, and <strong>houses on the water</strong>, which preserve and nurture the bohemian tradition of Belgrade.
                  At the entrance, there is a <strong>parking lot for a thousand vehicles</strong> and a <strong>marina in the Čukarički branch</strong>, suitable for docking boats, yachts, and smaller ships.
                  Visitors to Ada Ciganlija also have at their disposal <strong>shops</strong>, picnic areas, a <strong>bowling alley</strong>, <strong>mini-golf</strong>,
                  <strong>horse-drawn carriages</strong>, a <strong>tourist train</strong>, <strong>pedal boats and sandolines for lake rides</strong>, as well as an <strong>eco-friendly electric boat</strong>.
                </p>
              </section>

              <img
                srcSet={`${adaCiganlija11} 450w, ${adaCiganlija1}`}
                alt="Ada Ciganlija 6"
                loading="lazy"
              />

              <section lang="en">
                <p>
                  Ada Ciganlija is also known for its offer of <strong>extreme sports</strong>, and one
                  of the most thrilling attractions is <strong>bungee jumping</strong>. Here, visitors
                  can experience <em>adrenaline</em> in its purest form by jumping from heights with
                  a safety system that ensures a safe fall. <strong>Bungee jumping at Ada
                    Ciganlija</strong> is popular among extreme sports enthusiasts who want
                  to face their fears and enjoy an unforgettable experience of jumping from
                  heights, with a fantastic view of the surroundings.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};

export default AdaCiganlija;