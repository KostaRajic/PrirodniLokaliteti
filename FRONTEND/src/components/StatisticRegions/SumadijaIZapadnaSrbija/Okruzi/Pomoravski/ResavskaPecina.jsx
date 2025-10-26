/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import resavskaPecina1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/desktop/resavskaPecina1.jpg";
import resavskaPecina2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/desktop/resavskaPecina2.jpg";
import resavskaPecina3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/desktop/resavskaPecina3.jpg";
import resavskaPecina4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/desktop/resavskaPecina4.jpg";
import resavskaPecina5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/desktop/resavskaPecina5.jpg";
import resavskaPecina11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/mobile/MresavskaPecina1.jpg";
import resavskaPecina22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/mobile/MresavskaPecina2.jpg";
import resavskaPecina33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/mobile/MresavskaPecina3.jpg";
import resavskaPecina44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/mobile/MresavskaPecina4.jpg";
import resavskaPecina55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/mobile/MresavskaPecina5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugData } from "./pomoravskiOkrugData";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ResavskaPecina = () => {
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
            ? "Resavska pećina – Najlepša pećina Srbije, prirodno blago Gornje Resave | Srbija Wonders"
            : "Resava Cave – Serbia’s Most Beautiful Cave & Natural Wonder of Eastern Serbia | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Resavska pećina kod Despotovca je jedna od najlepših i najstarijih istraženih pećina u Srbiji – bogata kristalnim ukrasima, stalagmitima i podzemnim dvoranama, idealna za avanturiste i porodice."
              : "Resava Cave near Despotovac is one of Serbia’s oldest and most stunning caves – filled with crystal formations, stalagmites, and underground chambers, perfect for adventurers and families."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Resavska pećina, turističke pećine Srbija, speleologija, prirodna atrakcija Srbija, stalaktiti, stalagmiti, Resavska lepotica, Despotovac turizam"
              : "Resava Cave, tourist caves Serbia, speleology, natural attraction Serbia, stalactites, stalagmites, Resava Beauty, Despotovac tourism"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/resavska-pecina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/resavska-pecina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/resavska-pecina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/resavska-pecina"
        />


      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pomoravskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${resavskaPecina11} 450w, ${resavskaPecina1} `} alt="Resavska Pećina 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Resavska Pećina</h1>

              <section lang="sr">
                <p>
                  <strong>Resavska pećina</strong> je jedna od najvažnijih turističkih pećina u Srbiji.
                  Nalazi se u centralnoj Srbiji, u oblasti <em>Gornje Resave</em>, na <em>Divljakovčkom polju</em>, ispod venca <strong>Babine glave</strong>, a pripada opštini <strong>Despotovac</strong>, tačnije ataru sela <strong>Jelovac</strong>. Udaljena je 152 km od Beograda, 20 km od Despotovca, a oko 5 km od sela Jelovac. Njena nadmorska visina iznosi 483 metra. Površina predviđena za zaštitu je 10,87 hektara i obuhvata neposrednu okolinu pećine, na padini koja se spušta sa 120 metara iznad ulaza do dna Divljakovčke uvale. Obuhvata ukupno 14 i po katastarskih parcela.
                </p>
              </section>

              <img srcSet={`${resavskaPecina22} 450w, ${resavskaPecina2} `} alt="Resavska Pećina 2" />

              <section lang="sr">
                <p>
                  Resavska pećina je višenamenski speleološki objekat ukupne dužine istraženih kanala od oko 400 metara, sa visinskom razlikom između ulaza i najnižeg dela pećine (<em>Bobanova dvorana</em>) od oko 30 metara. Ukupna dužina Resavske pećine iznosi 2.800 metara, a nastala je erozivnim delovanjem nekadašnjeg vodenog toka koji je bio razvijen u Divljačkom uvati pri višem nivou njegovog dna, koji je tada ulazio u pećinu na mestu današnjeg ulaza. Pećina nema stalni ili povremeni vodeni tok, a aktivnost kapljica vode zavisi od padavina na površini. Svi delovi pećine, osim <strong>Ulazne dvorane</strong>, bogati su kristalnom kalcitnom ornamentikom. Zastupljene su gotovo sve vrste pećinskih ukrasa kitnjastih formi, od masivnih stubova stalagmita i stalaktita, do malih kadica sa perlama na pećinskom dnu. Neke grupe stalagmita ili kolona dobile su posebna imena kao što su <strong>"Košnice"</strong>, <strong>"Deda i baba"</strong>, <strong>"Porodica Taran"</strong> i drugi.
                </p>
              </section>

              <img srcSet={`${resavskaPecina33} 450w, ${resavskaPecina3} `} alt="Resavska Pećina 3" />

              <section lang="sr">
                <p>
                  Za pećinu su znali samo stočari koji su se sklanjali od nevremena sa stadima ovaca. Jedan od stočara je 1962. godine otkrio pećinu u saradnji sa planinarima iz Svilajnca. Njeno izvorno ime bilo je <strong>Divljakovčka pećina</strong>, po krasnom polju u kojem se nalazi. Detaljno su je istraživali novosadski speleolozi, na čelu sa dr. <strong>Jovanom Petrovićem</strong>. Radovi na uređenju pećine trajali su 10 godina, a pećina je zvanično otvorena za posetioce <strong>22. aprila 1972. godine</strong>. Smatra se jednom od najstarije istraženih pećina. Dužina pećine je 4.500 metara, od čega je istraženo 2.850 metara, dok je deo namenjen turističkim obilascima dugačak oko 800 metara.
                </p>
              </section>

              <img srcSet={`${resavskaPecina55} 450w, ${resavskaPecina5} `} alt="Resavska Pećina 4" />

              <section lang="sr">
                <p>
                  Temperatura u pećini je konstantna i iznosi <strong>7 °C</strong>, dok vlažnost vazduha varira između <strong>80%</strong> i <strong>100%</strong>. Starost nakita koji se nalazi u pećini procenjuje se na <strong>45 miliona godina</strong>. Unutrašnjost pećine je bogata brojnim i raznovrsnim dvoranama, kanalima, galerijama, stubovima, stalaktitima, stalagmitima, draperijama i okamenjenim vodopadima. Zbog bogatstva i raznolikosti nakita, Resavsku pećinu često nazivaju i <em>„Resavska lepotica“</em>.
                </p>
              </section>

              <img srcSet={`${resavskaPecina44} 450w, ${resavskaPecina4} `} alt="Resavska Pećina 5" />

              <section lang="sr">
                <p>
                  Nakit pećine počinje već od samog ulaza, koji se nalazi na nadmorskoj visini od 485 m. On nastaje rastvaranjem kalcijum-karbonata, a boja zavisi od minerala kroz koje voda prolazi. Nakit se pojavljuje u tri boje: crvenoj, žutoj i beloj. Najdominantnija je crvena, koja potiče od oksida gvožđa, bela potiče od kristalnog kalcijuma, a žuta od prisustva gline. Pećina se prostire na četiri nivoa, a za turističke posete uređeni su samo delovi prva dva nivoa. U gornjoj galeriji obilaže se četiri dvorane: <strong>Dvorana sraslih stubova ili kolona</strong>, <strong>Dvorana košnica</strong>, <strong>Predvorja istorije</strong>, <strong>Kristalna dvorana</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Resava Cave</h1>

              <section lang="en">
                <p>
                  <strong>Resava Cave</strong> is one of the most important tourist caves in Serbia.
                  It is located in central Serbia, in the <em>Upper Resava</em> region, on the <em>Divljakovac field</em>, beneath the ridge of <strong>Babina Glava</strong>, and belongs to the municipality of <strong>Despotovac</strong>, specifically in the area of the village <strong>Jelovac</strong>. It is 152 km from Belgrade, 20 km from Despotovac, and about 5 km from the village Jelovac. Its elevation is 483 meters above sea level. The protected area covers 10.87 hectares and includes the immediate surroundings of the cave on a slope descending from 120 meters above the entrance to the bottom of the Divljakovac valley. It encompasses a total of 14 and a half cadastral parcels.
                </p>
              </section>

              <img srcSet={`${resavskaPecina22} 450w, ${resavskaPecina2} `} alt="Resava Cave 2" />

              <section lang="en">
                <p>
                  Resava Cave is a multifunctional speleological site with a total explored passage length of about 400 meters, and an elevation difference between the entrance and the lowest part of the cave (<em>Bobanova Hall</em>) of about 30 meters. The total length of Resava Cave is 2,800 meters, formed by erosive action of a former water flow that was developed in the Divljakovac valley at a higher level of its bottom, which then entered the cave at the current entrance site. The cave has no permanent or temporary water flow, and the activity of dripping water depends on precipitation on the surface. All parts of the cave, except the <strong>Entrance Hall</strong>, are rich in crystalline calcite ornamentation. Almost all types of speleothem decorations in ornate forms are represented, from massive stalagmite and stalactite columns to small basins with pearls on the cave floor. Some groups of stalagmites or columns have received special names such as <strong>"Beehives"</strong>, <strong>"Grandpa and Grandma"</strong>, <strong>"Taran Family"</strong>, and others.
                </p>
              </section>

              <img srcSet={`${resavskaPecina33} 450w, ${resavskaPecina3} `} alt="Resava Cave 3" />

              <section lang="en">
                <p>
                  The cave was known only to shepherds who sought shelter from storms with their flocks of sheep. One of the shepherds discovered the cave in 1962 in cooperation with climbers from Svilajnac. Its original name was <strong>Divljakovac Cave</strong>, named after the beautiful field where it is located. It was thoroughly explored by speleologists from Novi Sad, led by Dr. <strong>Jovan Petrović</strong>. Work on arranging the cave lasted 10 years, and it was officially opened to visitors on <strong>April 22, 1972</strong>. It is considered one of the oldest explored caves. The cave length is 4,500 meters, of which 2,850 meters are explored, while the section intended for tourist visits is about 800 meters long.
                </p>
              </section>

              <img srcSet={`${resavskaPecina55} 450w, ${resavskaPecina5} `} alt="Resava Cave 4" />

              <section lang="en">
                <p>
                  The temperature inside the cave is constant at <strong>7 °C</strong>, while air humidity varies between <strong>80%</strong> and <strong>100%</strong>. The age of the cave decorations is estimated at <strong>45 million years</strong>. The interior of the cave is rich with numerous and diverse halls, passages, galleries, columns, stalactites, stalagmites, draperies, and petrified waterfalls. Due to the richness and diversity of its decorations, Resava Cave is often called the <em>"Resava Beauty"</em>.
                </p>
              </section>

              <img srcSet={`${resavskaPecina44} 450w, ${resavskaPecina4} `} alt="Resava Cave 5" />

              <section lang="en">
                <p>
                  The cave’s decorations start right from the entrance, located at an altitude of 485 meters. They are formed by the dissolution of calcium carbonate, and their color depends on the minerals the water passes through. The decorations appear in three colors: red, yellow, and white. The most dominant is red, derived from iron oxide; white comes from crystalline calcium; and yellow from the presence of clay. The cave extends over four levels, but only parts of the first two levels are arranged for tourist visits. In the upper gallery, four halls are toured: <strong>Hall of fused columns or pillars</strong>, <strong>Beehive Hall</strong>, <strong>Vestibule of History</strong>, and <strong>Crystal Hall</strong>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ResavskaPecina;