/* eslint-disable react/no-unknown-property */
import stopicaPecina1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina1.jpg";
import stopicaPecina2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina2.jpg";
import stopicaPecina3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina3.jpg";
import stopicaPecina4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina4.jpg";
import stopicaPecina5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina5.jpg";
import stopicaPecina6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/desktop/stopicaPecina6.jpg";
import stopicaPecina11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina1.jpg";
import stopicaPecina22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina2.jpg";
import stopicaPecina33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina3.jpg";
import stopicaPecina44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina4.jpg";
import stopicaPecina55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina5.jpg";
import stopicaPecina66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/StopicaPecina/mobile/MstopicaPecina6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const StopicaPecina = () => {
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
            ? "Stopića pećina | Speleološki dragulj Zlatibora"
            : "Stopića Cave | Speleological Jewel of Zlatibor"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Stopića pećina, smeštena na padinama Zlatibora, predstavlja jedan od najlepših prirodnih spomenika Srbije. Poznata po bigrenim kadama, pećinskim dvoranama i jedinstvenom podzemnom svetu."
              : "Stopića Cave, located on the slopes of Zlatibor Mountain, is one of Serbia's most beautiful natural monuments. Known for its tufa bathtubs, spacious halls, and unique underground world."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Stopića pećina, Zlatibor pećina, bigrene kade, speleologija Srbija, turističke atrakcije Zlatibor, prirodna znamenitost, pećinski turizam, Trnavski potok, Jovan Cvijić"
              : "Stopića Cave, Zlatibor cave, tufa tubs, speleology Serbia, tourist attractions Zlatibor, natural monument, cave tourism, Trnavski stream, Jovan Cvijić"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/stopica-pecina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/stopica-pecina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/stopica-pecina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/stopica-pecina"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${stopicaPecina11} 450w, ${stopicaPecina1} `} alt="Stopica Pecina 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: 'white' }}>Stopića Pećina</h1>

              <section lang="sr">
                <p>
                  <strong>Stopića pećina</strong> smeštena je na <strong>severoistočnim padinama Zlatibora</strong>, između sela
                  <strong>Rožanstvo</strong> i <strong>Trnava</strong>, nedaleko od puta <strong>Zlatibor-Sirogojno</strong>.
                  Njena blizina glavne saobraćajnice čini je jednom od najdostupnijih pećina u Srbiji.
                  Od turističkog centra Zlatibora udaljena je 19 kilometara. Ova impozantna pećina
                  privukla je pažnju stručnjaka još početkom 20. veka, a prvi pisani podaci nalaze se u
                  Zapisniku Srpskog geološkog društva iz 1901. godine. Temeljna speleološka istraživanja
                  sproveo je <strong>Jovan Cvijić</strong>, pionir naučne speleologije u Srbiji, u periodu od
                  1909. do 1913. godine. Stopića pećina je 2005. godine, Uredbom Vlade Republike Srbije,
                  proglašena za <em>spomenik prirode</em> i zaštićeno prirodno dobro od izuzetnog značaja.
                  Ova odluka doneta je zbog njenog jedinstvenog morfološkog i hidrološkog karaktera, posebno
                  impresivnih <em>bigrenih kada</em>, retkih po veličini i načinu nastanka, kao i zbog očuvane
                  pećinske flore i celokupnog ekosistema. Upravljač pećine je <strong>Turistička organizacija Zlatibor</strong>,
                  a za posetioce je otvorena 2009. godine, kada je izgrađena pešačka staza od parkinga do ulaza u pećinu.
                </p>
              </section>

              <img srcSet={`${stopicaPecina22} 450w, ${stopicaPecina2}`} alt="Stopića pećina 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Stopića pećina ime je dobila po obližnjem zaseoku <strong>Stopići</strong>. Današnja pešačka staza povezuje se sa nekadašnjom
                  prilaznom stazom kojom su ranije posetioci dolazili do pećine. Jedan od najzanimljivijih delova te stare trase jeste prolazak
                  između <em>vigleda</em> – otvora u pećinskoj tavanici, poznatih i kao dugure. U pećini ih ima šest, a svaki je povezan s njom
                  kroz sistem bočnih kanala. Najveći dug je 22,5 metara i širok 16 metara. Meštani su pre speleologa otkrili povezanost vigleda
                  i pećine bacajući obojeno kamenje u otvore i kasnije pronalazeći kamenčiće unutar pećine. Trenutno je prolazak ovom trasom zabranjen
                  jer staza nije u potpunosti uređena.
                </p>
              </section>

              <img srcSet={`${stopicaPecina33} 450w, ${stopicaPecina3}`} alt="Stopića pećina 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Ulaz u Stopića pećinu jedan je od najvećih pećinskih otvora u Srbiji, visok 18 metara, a širina varira između 30 i 40 metara.
                  Smešten je na 711 metara nadmorske visine, na desnoj obali reke <strong>Prištevice</strong>, čiji se huk jasno čuje pri približavanju.
                  Reka Prištavica je brza planinska reka, a u prošlosti su duž njenog toka postojale vodenice koje su koristili meštani okolnih sela
                  za mlevenje žita. Prilaz pećini i plato ispred ulaza uređeni su 2009. godine kada je pećina otvorena za turiste. Izgrađena je biletarnica,
                  postavljeni stolovi i klupice za odmor, a ceo prilazni kompleks rekonstruisan je 2018. godine.
                </p>
              </section>

              <img srcSet={`${stopicaPecina44} 450w, ${stopicaPecina4}`} alt="Stopića pećina 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Stopića pećina je rečna pećina kroz koju protiče <strong>Trnavski potok</strong>, a njen ceo pećinski sistem dugačak je 1.691 metar.
                  Pećina ima razgranatu strukturu i sastoji se od pet speleomorfoloških celina: <em>Svetle dvorane</em>, <em>Tamne dvorane</em>,
                  <em>Sale sa kadama</em>, <em>Kanala sa kadama</em> (uređeni za turističke obilaske) i <em>Rečnog kanala</em> (još nije otvoren
                  za javnost). Svetla i Tamna dvorana sa Salom sa kadama deo su Glavnog kanala, dok se pećina dalje deli na dva ogranka:
                  jedan vodi do ponora Trnavskog potoka, a drugi do Pećinice. Stopića pećina, ponor i Pećinica čine jedinstven speleološki sistem.
                  Celi sistem su detaljno istražili češki speleolozi 1983. i 1984. godine.
                </p>
              </section>

              <img srcSet={`${stopicaPecina55} 450w, ${stopicaPecina5}`} alt="Stopića pećina 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <em>Svetla dvorana</em> prostire se od ulaza do granice gde dolazi dnevno svetlo, dugačka je 76 metara i zauzima površinu od
                  2.800 m². Na 30 metara od ulaza, sa leve strane, nalazi se siparska kupa prečnika 15–20 metara i visine 8 metara.
                  Iznad nje je vigled – otvor u tavanici kroz koji je siparski materijal dospeo i formirao kupu. Visina tavanice iznad vrha
                  siparske kupe iznosi 16 metara, a visina vertikalnog kanala do površine je 44 metra. Tokom istraživanja 1984. godine,
                  na siparskoj kupi pronađeni su mumificirani ostaci pasa, pa je ovaj deo poznat i kao <em>„Pseće groblje“</em>.
                  <em>Tamna dvorana</em> počinje gde prestaje dnevno svetlo i dostiže dužinu od 98,5 metara i površinu od 1.200 m².
                  Tu se nalazi i najveća visina Stopića pećine – 25,5 metara. Uređene su nove pešačke staze (2015), a 2017. godine regulisan
                  je tok Trnavskog potoka. Pre izgradnje brane dno Tamne dvorane bilo je često poplavljeno.
                </p>
              </section>

              <img srcSet={`${stopicaPecina66} 450w, ${stopicaPecina6}`} alt="Stopića pećina 6" loading="lazy" />

              <section lang="sr">
                <p>
                  Svetla i Tamna dvorana su siromašne pećinskim nakitom, sa golim stenovitim zidovima, dok je značajan deo tavanice bez ukrasa.
                  Ovo je posledica velikog pećinskog otvora koji omogućava snažan uticaj spoljašnje klime i jakog strujanja vazduha,
                  što smanjuje vlažnost i sprečava stvaranje bogatog pećinskog nakita. Međutim, ostali delovi pećine bogati su različitim
                  pećinskim ukrasima. Živi svet obuhvata slepe miševe, paukove i rečne rakove, koji su usled nedostatka svetla izgubili pigment
                  i imaju karakterističnu belu boju. <em>Sala sa kadama</em> je dugačka 30 metara, sa površinom od 450 m² i izuzetno bogata
                  pećinskim nakitom. Posebni značaj ima prisustvo <em>bigrenih kadi</em>, jedinstvenih u celoj Evropi, koje su glavni element
                  turističkog uređenja pećine. Kade su raspoređene duž nagiba sale, formirajući vijugave rumenkaste bigrene nabore različitih
                  širina, dužina i dubina. Bigrena masa se spušta do visine od jednog metra, a nabori prelaze u dublje i šire formacije.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: 'white' }}>Stopića Cave</h1>

              <section lang="en"> <p> <strong>Stopića Cave</strong> is located on the <strong>northeastern slopes of Zlatibor</strong>, between the villages of <strong>Rožanstvo</strong> and <strong>Trnava</strong>, not far from the <strong>Zlatibor-Sirogojno road</strong>. Its proximity to the main road makes it one of the most accessible caves in Serbia. It is 19 kilometers away from the Zlatibor tourist center. This impressive cave attracted the attention of experts as early as the beginning of the 20th century, with the first written records found in the Journal of the Serbian Geological Society from 1901. Thorough speleological research was conducted by <strong>Jovan Cvijić</strong>, the pioneer of scientific speleology in Serbia, between 1909 and 1913. In 2005, Stopića Cave was declared a <em>natural monument</em> and a protected natural asset of exceptional importance by the Government of the Republic of Serbia. This decision was made due to its unique morphological and hydrological characteristics, especially the impressive <em>travertine pools</em>, rare in size and formation process, as well as for its preserved cave flora and overall ecosystem. The cave is managed by the <strong>Zlatibor Tourist Organization</strong> and was opened to visitors in 2009, when a walking trail from the parking lot to the cave entrance was built. </p> </section>
              <img srcSet={`${stopicaPecina22} 450w, ${stopicaPecina2}`} alt="Stopića Cave 2" loading="lazy" />

              <section lang="en"> <p> Stopića Cave got its name from the nearby hamlet of <strong>Stopići</strong>. The current walking path connects with an old access trail that visitors once used to reach the cave. One of the most interesting parts of that old route is the passage between the <em>vigledi</em> – openings in the cave ceiling, also known as skylights. There are six vigledi in the cave, each connected through a system of side channels. The largest skylight is 22.5 meters long and 16 meters wide. Locals discovered the connection between the vigledi and the cave before speleologists by throwing colored stones into the openings and later finding them inside the cave. Currently, passage along this route is forbidden because the path is not fully developed. </p> </section>
              <img srcSet={`${stopicaPecina33} 450w, ${stopicaPecina3}`} alt="Stopića Cave 3" loading="lazy" />

              <section lang="en"> <p> The entrance to Stopića Cave is one of the largest cave openings in Serbia, 18 meters high, with a width varying between 30 and 40 meters. It is situated at an altitude of 711 meters, on the right bank of the <strong>Prištevica River</strong>, whose roar is clearly heard when approaching. The Prištevica is a fast mountain river, and in the past, mills were located along its course, used by the inhabitants of surrounding villages to grind grain. The access path to the cave and the plateau in front of the entrance were arranged in 2009 when the cave was opened to tourists. A ticket office was built, tables and benches for rest were placed, and the entire access complex was reconstructed in 2018. </p> </section>
              <img srcSet={`${stopicaPecina44} 450w, ${stopicaPecina4}`} alt="Stopića Cave 4" loading="lazy" />

              <section lang="en"> <p> Stopića Cave is a river cave through which the <strong>Trnavski stream</strong> flows, and its entire cave system is 1,691 meters long. The cave has a branched structure and consists of five speleomorphological units: the <em>Bright Hall</em>, the <em>Dark Hall</em>, the <em>Hall with Pools</em>, the <em>Channel with Pools</em> (developed for tourist visits), and the <em>River Channel</em> (not yet open to the public). The Bright and Dark Halls, along with the Hall with Pools, are part of the Main Channel, while the cave further divides into two branches: one leads to the Trnavski stream sinkhole, and the other to Pećinica. Stopića Cave, the sinkhole, and Pećinica form a unique speleological system. The entire system was thoroughly explored by Czech speleologists in 1983 and 1984. </p> </section>
              <img srcSet={`${stopicaPecina55} 450w, ${stopicaPecina5}`} alt="Stopića Cave 5" loading="lazy" />

              <section lang="en"> <p> The <em>Bright Hall</em> extends from the entrance to the boundary where daylight reaches, is 76 meters long, and covers an area of 2,800 m². Thirty meters from the entrance, on the left side, there is a travertine cone 15–20 meters in diameter and 8 meters high. Above it is a vigled – an opening in the ceiling through which travertine material fell and formed the cone. The ceiling height above the top of the travertine cone is 16 meters, and the height of the vertical shaft to the surface is 44 meters. During research in 1984, mummified dog remains were found on the travertine cone, so this part is also known as the <em>“Dog Cemetery”</em>. The <em>Dark Hall</em> begins where daylight ends and reaches a length of 98.5 meters and an area of 1,200 m². It contains the greatest height inside Stopića Cave – 25.5 meters. New walking paths were constructed in 2015, and in 2017 the flow of the Trnavski stream was regulated. Before the dam was built, the floor of the Dark Hall was often flooded. </p> </section>
              <img srcSet={`${stopicaPecina66} 450w, ${stopicaPecina6}`} alt="Stopića Cave 6" loading="lazy" />

              <section lang="en"> <p> The Bright and Dark Halls are poor in cave formations, with bare rocky walls, and a significant part of the ceiling is without decorations. This is due to the large cave opening that allows a strong influence of external climate and intense air circulation, which reduces humidity and prevents the formation of rich cave decorations. However, other parts of the cave are rich in various cave formations. The living world includes bats, spiders, and river crayfish, which have lost pigment due to the lack of light and have a characteristic white color. The <em>Hall with Pools</em> is 30 meters long, with an area of 450 m², and is exceptionally rich in cave decorations. Particular importance lies in the presence of <em>travertine pools</em>, unique in all of Europe, which are the main element of the cave's tourist arrangement. The pools are arranged along the slope of the hall, forming winding yellowish travertine folds of varying widths, lengths, and depths. The travertine mass descends to a height of one meter, and the folds transition into deeper and wider formations. </p> </section>
            </>
          )}

      </div>
    </>
  );
};


export default StopicaPecina;