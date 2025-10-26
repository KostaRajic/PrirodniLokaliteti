/* eslint-disable react/no-unknown-property */
import gronjak1 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/desktop/gornjak1.jpg'
import gronjak2 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/desktop/gornjak2.jpg'
import gronjak3 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/desktop/gornjak3.jpg'
import gronjak41F from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/desktop/gornjak41F.jpg'
import gronjak42F from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/desktop/gornjak42F.jpg'
import gronjak5 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/desktop/gornjak5.jpg'
import gronjak11 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/mobile/gornjakM1.jpg'
import gronjak22 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/mobile/gornjakM2.jpg'
import gronjak33 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/mobile/gornjakM3.jpg'
import gronjak441F from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/mobile/gornjak41MF.jpg'
import gronjak442F from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/mobile/gornjak42MF.jpg'
import gronjak55 from '../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirGornjak/mobile/gornjakM5.jpg'

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from './BranicevskiOkrugPathRoutes'
import { useContextAuth } from '../../../../../Context'
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react'

const ManastirGornjak = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Gornjak – Srednjovekovni Srpski Manastir u Eparhiji Braničevskoj | Serbia Wonders" : "Gornjak Monastery – A Medieval Serbian Monastery in the Braničevo Eparchy | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Gornjak, zadužbina kneza Lazara iz 14. veka, smešten u dolini reke Mlave između Petrovca na Mlavi i Žagubice. Kulturno dobro i spomenik kulture Eparhije braničevske sa bogatom istorijom i arhitekturom moravske škole."
            :
            "Gornjak Monastery, founded by Prince Lazar in the 14th century, located in the Mlava River valley between Petrovac na Mlavi and Žagubica. A cultural monument and heritage site of the Braničevo Diocese with rich history and Morava school architecture."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Gornjak, Eparhija braničevska, knez Lazar, srednjovekovni manastir, Srbija, spomenik kulture, dolina Mlave, Petrovac na Mlavi, Žagubica, moravska škola"
            :
            "Gornjak Monastery, Braničevo Diocese, Prince Lazar, medieval monastery, Serbia, cultural monument, Mlava valley, Petrovac na Mlavi, Žagubica, Morava school"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-gornjak`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-gornjak"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-gornjak"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-gornjak"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(branicevskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${gronjak11} 450w, ${gronjak1} `} alt="Manastir Gornjak 1" loading='lazy' />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Gornjak</h1>

              <section lang="sr">
                <p>
                  Manastir Gornjak pripada <strong>Eparhiji braničevskoj</strong> Srpske pravoslavne crkve
                  i predstavlja nepokretno kulturno dobro kao <em>spomenik kulture</em>. Nalazi se
                  u dolini reke <strong>Mlave</strong>, između <strong>Petrovca na Mlavi</strong> i <strong>Žagubice</strong>, <strong>65 km</strong>
                  jugoistočno od <strong>Požarevca</strong>, odnosno na <strong>18 km</strong> od Petrovca ka Žagubici.
                  Izgrađen je u periodu od <strong>1376–1380. godine</strong> kao zadužbina kneza <strong>Lazara</strong>.
                  Prema brojnim istorijskim izvorima, manastir je neprekidno bio naseljen
                  monaškim životom. Od srednjovekovnih građevina sačuvani su glavna
                  manastirska crkva, posvećena <strong>Vavedenju</strong>, i kapela u pećini, posvećena
                  <strong>Svetom Nikoli</strong>.
                  <br />
                  <br />
                  Po arhitektonskoj koncepciji, gornjačka crkva pripada <em>moravskoj školi</em>.
                  Crkva Vavedenja ima trolisnu osnovu sa kupolom. Priprata je naknadno
                  dozidana, kao i zvonik sa tremom. Živopis je slabije očuvan, a <strong>1847. godine</strong>
                  preslikao ga je Živko Pavlović, slikar iz Požarevca. Freske u
                  kapeli Svetog Nikole bolje su sačuvane. Poznati srpski pisac <strong>Đura Jakšić</strong>
                  napisao je poemu „<em>Put u Gornjak</em>“.
                </p>
              </section>

              <img srcSet={`${gronjak33} 450w, ${gronjak3} `} alt="Manastir Gornjak 2" loading='lazy' />

              <section lang="sr">
                <p>
                  Manastir <strong>Ždrelo</strong>, kasnije nazvan <strong>Gornjak</strong>, nalazi se na maloj zaravni
                  iznad leve obale <strong>Mlave</strong>, ispod strmih litica planine <strong>Ježevac</strong>. Ova
                  zadužbina kneza <strong>Lazara</strong> podignuta je u predivnom i živopisnom kraju,
                  toliko očaravajućem da je <strong>Đura Jakšić</strong> u oduševljenju pevao: „Od Velikog
                  Sela do samoga Ždrela, ko da je vila neka ćilim razastrela.“ <strong>Felix Kanic</strong>
                  je zapisao: „Zastali smo kao opčinjeni raskošnom idilom ovog predela gde
                  su boravili srpski pustinjaci.“
                  <br />
                  <br />
                  Manastir je podignut <strong>1378. godine</strong>, kada je knez izdao osnivačku povelju,
                  a patrijarh <strong>Spiridon</strong> je potvrdio svojom duhovnom vlašću. Kao motiv za
                  izgradnju manastira, knez Lazar je naveo želju da učini mali prinos
                  Bogorodici „s nadom u njenu pomoć na Strašnom sudu Hristovom“. Međutim,
                  pored duhovnih razloga, mogući su i određeni državnički motivi. Naime,
                  Lazar je tek ovladao ovim krajevima i želeo je da to obeleži svojom
                  zadužbinom.
                </p>
              </section>

              <img srcSet={`${gronjak22} 450w, ${gronjak2} `} alt="Manastir Gornjak 3" loading='lazy' />

              <section lang="sr">
                <p>
                  Za vreme trajanja srednjovekovne srpske države, manastir je uživao sva
                  prava iz osnivačke povelje, kao i veliki ugled među narodom i monaštvom.
                  Za to je najviše zaslužan njegov ktitor, knez <strong>Lazar</strong>, koji se opredelio
                  za <em>Carstvo nebesko</em>, jer „zemaljsko je za malena carstvo, a nebesko uvek
                  i do veka“. Iguman manastira Gornjaka zamonašio je oko <strong>1503. godine</strong>
                  despota <strong>Đorđa Brankovića</strong>, unuka despota Đurđa, sina Stefana Slepeg,
                  dodelivši mu monaško ime <strong>Maksim</strong>.
                  <br />
                  <br />
                  Ipak, tursko ropstvo donelo je mnoge nevolje kako narodu, tako i
                  monasima. Prvi turski popis beleži Vavedenje u Ždrelu zajedno sa selom
                  Bistricom, sa zajedničkim obavezama. Manastir je tada bio „nastanjen“,
                  što znači da su u njemu živeli monasi. U prvoj polovini XVI veka popis
                  beleži šest kaluđera, dok je godišnji prihod sultanovoj blagajni iznosio
                  <strong>437 akči</strong>. Kasniji popisi beleže napredak manastira – broj monaha raste
                  na osam, a godišnji prihod od dažbina (najviše od vina) dostiže <strong>2.681
                    akču</strong>.
                </p>
              </section>

              <div className="displayFlexClassic">
                <img
                  srcSet={`${gronjak41F} 450w, ${gronjak441F} `}
                  alt="Inđija centar"
                  style={{ padding: "25px", width: "48%" }}
                  loading='lazy'
                />
                <img
                  srcSet={`${gronjak42F} 450w, ${gronjak442F} `}
                  alt="Inđija crkva sv. Georgija"
                  style={{ padding: "25px", width: "48%" }}
                  loading='lazy'
                />
              </div>


              <section lang="sr">
                <p>
                  Međutim, popis iz vremena <strong>Murata III (1574–1595)</strong> pokazuje pad manastira
                  – broj monaha opada na dva, a godišnji prihod se smanjuje na <strong>1.000 akči</strong>.
                  U ovom popisu prvi put se javlja novo ime manastira – <strong>Gornjak</strong>. Ime ne
                  potiče od zapadnog vetra, već od „<em>gornjeg grada</em>“. Naime, Gornjačka
                  klisura prepuna je ostataka starih utvrđenja: na visu <strong>Vukanu</strong> nalazio se
                  gradić, na <strong>Uzengiji</strong> još jedno utvrđenje, dok je na suprotnoj strani, na
                  <strong>Ježevcu</strong>, stajala stražarska osmatračnica s koje se mogao videti ceo
                  predeo, čak do Beograda. Pored reke su postojale zidine i kapije koje su
                  zatvarale taj jedini i teško prohodni prolaz u Homolje.
                </p>
              </section>

              <img srcSet={`${gronjak55} 450w, ${gronjak5} `} alt="Manastir Gornjak 5" loading='lazy' />

              <section lang="sr">
                <p>
                  Manastir Gornjak, iako vladarska zadužbina, skromnih je dimenzija, što
                  je često izazivalo sumnju u Lazarovo ktitorstvo. Mnogi manastirski
                  objekti nisu sačuvani u prvobitnom stanju. Tokom Drugog svetskog rata
                  spaljena su oba konaka.
                  <br />
                  <br />
                  Danas manastirski kompleks čine manastirska crkva, kapela <strong>Grigorija
                    Sinajita</strong>, <em>Zimska kapela</em> i kapela <strong>Svetog Ilije</strong>, kao i stari i novi konak.
                  Izvan manastirskog kompleksa nalaze se dva objekta – jednospratna zgrada
                  za duhovnika i goste, kao i trpezarija za vernike koji se ovde okupljaju
                  za velike praznike.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Gornjak Monastery</h1>

              <section lang="en">
                <p>
                  Gornjak Monastery belongs to the <strong>Braničevo Eparchy</strong> of the Serbian Orthodox Church
                  and represents an immovable cultural property as a <em>cultural monument</em>. It is located
                  in the valley of the <strong>Mlava River</strong>, between <strong>Petrovac na Mlavi</strong> and <strong>Žagubica</strong>, <strong>65 km</strong>
                  southeast of <strong>Požarevac</strong>, or <strong>18 km</strong> from Petrovac towards Žagubica.
                  It was built between <strong>1376 and 1380</strong> as the endowment of Prince <strong>Lazar</strong>.
                  According to numerous historical sources, the monastery has been continuously inhabited
                  by monastic life. From medieval buildings, the main
                  monastery church dedicated to <strong>Presentation of the Virgin</strong> and the cave chapel dedicated to
                  <strong>Saint Nicholas</strong> have been preserved.
                  <br />
                  <br />
                  Architecturally, the Gornjak church belongs to the <em>Morava School</em>.
                  The Presentation church has a trefoil base with a dome. The narthex was added later,
                  as well as the bell tower with a porch. The frescoes are less well preserved, and in <strong>1847</strong>
                  they were copied by Živko Pavlović, a painter from Požarevac. The frescoes in
                  the Saint Nicholas chapel are better preserved. The famous Serbian writer <strong>Đura Jakšić</strong>
                  wrote the poem "<em>Journey to Gornjak</em>".
                </p>
              </section>

              <img srcSet={`${gronjak33} 450w, ${gronjak3} `} alt="Gornjak Monastery 2" loading='lazy' />

              <section lang="en">
                <p>
                  The monastery <strong>Ždrelo</strong>, later called <strong>Gornjak</strong>, is located on a small plateau
                  above the left bank of the <strong>Mlava</strong> River, beneath the steep cliffs of <strong>Ježevac</strong> mountain. This
                  endowment of Prince <strong>Lazar</strong> was built in a beautiful and picturesque region,
                  so enchanting that <strong>Đura Jakšić</strong> enthusiastically sang: “From Veliko Selo
                  to Ždrelo itself, as if a fairy had spread a carpet.” <strong>Felix Kanic</strong>
                  recorded: “We stopped as if enchanted by the luxurious idyll of this area where
                  Serbian hermits resided.”
                  <br />
                  <br />
                  The monastery was established in <strong>1378</strong>, when the prince issued the founding charter,
                  and Patriarch <strong>Spiridon</strong> confirmed it with his spiritual authority. As a motive for
                  building the monastery, Prince Lazar cited the desire to make a small offering
                  to the Mother of God “with hope for her help at the Last Judgment of Christ.” However,
                  besides spiritual reasons, certain political motives are possible. Namely,
                  Lazar had just taken control of these lands and wanted to mark it with his
                  endowment.
                </p>
              </section>

              <img srcSet={`${gronjak22} 450w, ${gronjak2} `} alt="Gornjak Monastery 3" loading='lazy' />

              <section lang="en">
                <p>
                  During the medieval Serbian state, the monastery enjoyed all the rights from the founding charter,
                  as well as great respect among the people and the monastic community.
                  This is mostly due to its founder, Prince <strong>Lazar</strong>, who chose
                  the <em>Heavenly Kingdom</em>, because “the earthly kingdom is for the small,
                  but the heavenly is forever and ever.” The abbot of Gornjak Monastery tonsured around <strong>1503</strong>
                  Despot <strong>Đorđe Branković</strong>, grandson of Despot Đurađ, son of Stefan the Blind,
                  giving him the monastic name <strong>Maksim</strong>.
                  <br />
                  <br />
                  However, Turkish slavery brought many troubles to both the people and
                  the monks. The first Turkish census recorded Presentation at Ždrelo together with the village
                  Bistrica, with joint obligations. The monastery was then “inhabited,”
                  meaning monks lived there. In the first half of the 16th century, the census
                  recorded six monks, while the annual income to the sultan’s treasury amounted to
                  <strong>437 akçe</strong>. Later censuses show the monastery’s progress – the number of monks rose
                  to eight, and the annual income from taxes (mostly from wine) reached <strong>2,681
                    akçe</strong>.
                </p>
              </section>

              <div className="displayFlexClassic">
                <img
                  srcSet={`${gronjak41F} 450w, ${gronjak441F} `}
                  alt="Inđija centar"
                  loading='lazy'
                />
                <img
                  srcSet={`${gronjak42F} 450w, ${gronjak442F} `}
                  alt="Inđija crkva sv. Georgija"
                  loading='lazy'
                />
              </div>

              <section lang="en">
                <p>
                  However, the census from the time of <strong>Murat III (1574–1595)</strong> shows the monastery’s decline
                  – the number of monks decreased to two, and the annual income fell to <strong>1,000 akçe</strong>.
                  In this census, the new name of the monastery first appears – <strong>Gornjak</strong>. The name does not
                  come from the west wind, but from the “<em>upper town</em>.” Namely, the Gornjak
                  Gorge is full of remains of old fortifications: on the hill <strong>Vukan</strong> there was
                  a small fortress, on <strong>Uzengija</strong> another fortification, while on the opposite side, on
                  <strong>Ježevac</strong>, there was a watchtower from which the whole
                  area, even to Belgrade, could be seen. Along the river there were walls and gates
                  closing off this only and difficult to pass passage into Homolje.
                </p>
              </section>

              <img srcSet={`${gronjak55} 450w, ${gronjak5} `} alt="Gornjak Monastery 5" loading='lazy' />

              <section lang="en">
                <p>
                  Although Gornjak Monastery was a royal endowment, it is modest in size,
                  which often raised doubts about Lazar’s founding role. Many monastic
                  buildings have not been preserved in their original state. During World War II,
                  both guesthouses were burned down.
                  <br />
                  <br />
                  Today, the monastery complex consists of the monastery church, the chapel of <strong>Gregory of Sinai</strong>,
                  the <em>Winter Chapel</em>, and the chapel of <strong>Saint Elijah</strong>, as well as old and new guesthouses.
                  Outside the monastery complex, there are two buildings – a one-story building
                  for the spiritual father and guests, as well as a refectory for the faithful who gather here
                  for major holidays.
                </p>
              </section>


            </>
          )
        }

      </div>
    </>
  );
};


export default ManastirGornjak;