/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import manasija1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/desktop/manastirManasija1.jpg";
import manasija2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/desktop/manastirManasija2.jpg";
import manasija3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/desktop/manastirManasija3.jpg";
import manasija4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/desktop/manastirManasija4.jpg";
import manasija5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/desktop/manastirManasija5.jpg";
import manasija11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/mobile/MmanastirManasija1.jpg";
import manasija22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/mobile/MmanastirManasija2.jpg";
import manasija33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/mobile/MmanastirManasija3.jpg";
import manasija44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/mobile/MmanastirManasija4.jpg";
import manasija55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirManasija/mobile/MmanastirManasija5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirManasija = () => {
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
            ? "Manastir Manasija – Zadužbina despota Stefana Lazarevića | Srbija Wonders"
            : "Manasija Monastery – Legacy of Despot Stefan Lazarević | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Manasija, zadužbina despota Stefana Lazarevića iz 15. veka, jedno je od najznačajnijih duhovnih i kulturnih središta srednjovekovne Srbije. Poznat po Resavskoj školi, moćnim kulama i freskama, predstavlja vrhunac moravske arhitekture."
              : "Manasija Monastery, the 15th-century endowment of Despot Stefan Lazarević, is one of the most important spiritual and cultural centers of medieval Serbia. Known for the Resava School, its powerful towers, and remarkable frescoes, it's a masterpiece of Morava architecture."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Manasija, Stefan Lazarević, Resavska škola, moravska arhitektura, srednjovekovni manastiri, freske, kulturna baština Srbije, Despotovac, istorija Srbije"
              : "Manasija Monastery, Stefan Lazarević, Resava School, Morava architecture, medieval monasteries, frescoes, Serbian cultural heritage, Despotovac, Serbian history"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-manasija`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-manasija"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-manasija"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-manasija"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pomoravskiOkrugPathRoutes.home(switchLanguage))}

        />
        <header></header>
        <img srcSet={`${manasija11} 450w, ${manasija1} `} alt="Manastir Manasija 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Manastir Manasija</h1>

              <section lang="sr">
                <p>
                  <strong>Manastir Manasija</strong>, smešten u dolini reke <em>Resave</em>, otprilike jedan
                  kilometar od <strong>Despotovca</strong>, jedan je od najvažnijih srpskih srednjovekovnih
                  manastira. Poznat je po <em>"Resavskoj školi"</em> i svojoj bogatoj istoriji.
                  Crkva manastira, posvećena <strong>Svetoj Trojici</strong>, nalazi se na strateški
                  izabranom mestu na šumovitom brdu, a okružena je impozantnim utvrđenjem
                  sa <strong>11 kula</strong>. Manastir je zadužbina despota <strong>Stefana Lazarevića</strong>, sina kneza
                  Lazara i kneginje Milice Hrebeljanović, i podignut je između <strong>1407. i 1418. godine</strong>
                  kao mauzolej za ovog vladara, gde je i sahranjen 1427. godine. Iako je postojala
                  dugo rasprava među naučnicima o tome da li su mošti pronađene u manastiru pripadale njemu
                  ili njegovom bratu <strong>Vuku</strong>, 2014. godine zvanično je potvrđeno da se u Manasiji
                  nalaze posmrtni ostaci despota Stefana Lazarevića.
                </p>
              </section>

              <img srcSet={`${manasija22} 450w, ${manasija2} `} alt="Manastir Manasija 2" />

              <section lang="sr">
                <p>
                  Despot <strong>Stefan Lazarević</strong>, poznat u narodu kao <em>Stefan Visoki</em> zbog svoje
                  impozantne građe i visokog ugleda kako među svojim narodom, tako i među
                  evropskom aristokratijom, došao je na vlast <strong>1389. godine</strong>, nakon što je
                  na Kosovskom polju poginuo njegov otac, knez <strong>Lazar</strong>. Kao maloletan
                  vladar, preuzeo je vlast uz podršku svoje majke, kneginje <strong>Milice Hrebeljanović</strong>.
                  Kada je Stefan postao punoletan, njegova majka se povukla iz političkog života,
                  postavši monahinja <em>Evgenija</em> i posvetila se svojoj zadužbini, manastiru <strong>Ljubostinja</strong>.
                  Iako je bio cenjen kao jedan od najboljih vitezova <em>„Zmajevog reda“</em> i izuzetno vešt vojni lider,
                  Despot Stefan je imao i izraženu umetničku dušu. Njegova književna dela svrstavaju ga među
                  najistaknutije srpske srednjovekovne pisce. Neka od najvažnijih dela uključuju <em>"Zakon o rudnicima"</em>,
                  <em>"Pohvalno slovo Knezu Lazaru"</em> iz <strong>1403. godine</strong>, kao i <em>"Slovo ljubve"</em> iz
                  <strong>1409. godine</strong>, koje se smatra jednim od najlepših tekstova srpske književnosti.
                </p>
              </section>

              <img srcSet={`${manasija33} 450w, ${manasija3} `} alt="Manastir Manasija 3" />

              <section lang="sr">
                <p>
                  Manastir Manasija je ubrzo nakon svog osnivanja postao utočište za mnoge
                  učenjake koji su bežali pred Osmanlijama. Oni su u manastiru pronašli
                  sigurno sklonište, a zahvaljujući njihovom prisustvu, Manasija je
                  postala ključni kulturni centar despotovine. Tu su se razvijali
                  književni radovi, a takođe je nastala i čuvena <em>„Resavska“ prepisivačka
                    škola</em>, koja je imala veliki uticaj na dalji razvoj srpske književnosti.
                  Prvi veliki udarac manastir je doživeo <strong>1456. godine</strong>, kada je, prema
                  nekim pretpostavkama, uništena trepezarija, kao i druge važne zgrade.
                  Tri godine kasnije, kada su Turci osvojili Srbiju, manastir je postao
                  važno vojno uporište. Tokom svoje istorije, manastir je nekoliko puta
                  bio uništen i opljačkan. Tek krajem 19. veka započela je obnova
                  manastirskog kompleksa i crkve.
                </p>
              </section>

              <img srcSet={`${manasija44} 450w, ${manasija4} `} alt="Manastir Manasija 4" />

              <section lang="sr">
                <p>
                  Manastir Manasija je poznat po svom jedinstvenom utvrđenju koje okružuje
                  crkvu <strong>Svete Trojice</strong>. Ovo utvrđenje čine jedanaest kula, a najveća među
                  njima je <em>„Despotova kula“</em>. Ova tvrđava predstavlja vrhunski primer
                  srpske arhitekture iz kasnog srednjeg veka, jer je oko bedema, na
                  udaljenosti od samo dva metra, podignut još jedan zaštitni zid. Ovaj
                  način gradnje kasnije je primenjen i prilikom izgradnje Smederevske
                  tvrđave. Crkva Svete Trojice je druga po veličini među srpskim
                  srednjovekovnim crkvama, odmah nakon crkve manastira <strong>Visoki Dečani</strong>.
                  Smatra se jednim od najlepših primera <em>moravske arhitekture</em>, iako se u
                  dekoraciji razlikuje od drugih crkava tog perioda. Fasade manastira
                  prekrivene su tesanikom i tankim slojem maltera, a crkva je petokupolna
                  građevina sa <em>trikonhosnim tlocrtom</em>. Veliko centralno kupola počiva na
                  četiri impozantna stupa sa polukružnim kolonama.
                </p>
              </section>

              <img srcSet={`${manasija55} 450w, ${manasija5} `} alt="Manastir Manasija 5" />

              <section lang="sr">
                <p>
                  Iako je pretrpeo značajna oštećenja, <em>živopis</em> crkve Manasije i dalje
                  predstavlja izuzetnu umetničku celinu koja nosi bogato nasleđe srpske
                  srednjovekovne slikarske tradicije. Freske su naslikane vrhunskom
                  tehnikom najboljih ikonopisaca tog vremena. Iako je deo originalnog
                  slikarstva izgubljen, na površini od preko <strong>2000 m²</strong> i danas se u
                  fragmentima prepoznaju freske koje prikazuju <strong>Hristova čuda</strong>, <strong>Hristovu
                    parabolu o bogatašu i siromašnom Lazaru</strong>, <em>carskoj svadbi</em>, <em>bludnom sinu</em>,
                  kao i mnoge druge scene iz života Hrista. Na zapadnom zidu se izdvajaju
                  scene poput <em>Uspenja Bogorodice</em>, dok je monumentalni portret despota
                  Stefana, u ktitorskoj kompoziciji, smešten na istom zidu.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Manasija Monastery</h1>

              <section lang="en">
                <p>
                  <strong>Manasija Monastery</strong>, located in the valley of the <em>Resava</em> river, about one
                  kilometer from <strong>Despotovac</strong>, is one of the most important Serbian medieval
                  monasteries. It is known for the <em>"Resava School"</em> and its rich history.
                  The monastery church, dedicated to the <strong>Holy Trinity</strong>, is situated on a strategically
                  chosen spot on a wooded hill and is surrounded by an impressive fortress
                  with <strong>11 towers</strong>. The monastery was founded by Despot <strong>Stefan Lazarević</strong>, son of Prince
                  Lazar and Princess Milica Hrebeljanović, and built between <strong>1407 and 1418</strong>
                  as a mausoleum for this ruler, where he was also buried in 1427. Although there was
                  a long debate among scholars whether the relics found in the monastery belonged to him
                  or his brother <strong>Vuk</strong>, it was officially confirmed in 2014 that the remains
                  of Despot Stefan Lazarević are kept in Manasija.
                </p>
              </section>

              <img srcSet={`${manasija22} 450w, ${manasija2} `} alt="Manasija Monastery 2" />

              <section lang="en">
                <p>
                  Despot <strong>Stefan Lazarević</strong>, known among the people as <em>Stefan Visoki</em> due to his
                  imposing stature and high reputation both among his people and European aristocracy,
                  came to power in <strong>1389</strong>, after his father, Prince <strong>Lazar</strong>, died
                  at the Battle of Kosovo. As a minor ruler, he took power with the support of his mother,
                  Princess <strong>Milica Hrebeljanović</strong>. When Stefan reached adulthood, his mother withdrew
                  from political life, becoming the nun <em>Eugenia</em> and dedicated herself to her endowment,
                  the <strong>Ljubostinja Monastery</strong>. Though praised as one of the best knights of the <em>"Order of the Dragon"</em>
                  and an exceptionally skilled military leader, Despot Stefan also had a pronounced artistic soul.
                  His literary works place him among the most prominent Serbian medieval writers. Some of his
                  most important works include <em>"The Law on Mines"</em>, <em>"Praise to Prince Lazar"</em> from
                  <strong>1403</strong>, as well as <em>"The Word of Love"</em> from <strong>1409</strong>, considered
                  one of the most beautiful texts in Serbian literature.
                </p>
              </section>

              <img srcSet={`${manasija33} 450w, ${manasija3} `} alt="Manasija Monastery 3" />

              <section lang="en">
                <p>
                  Shortly after its founding, Manasija Monastery became a refuge for many
                  scholars fleeing the Ottomans. They found safe shelter in the monastery,
                  and thanks to their presence, Manasija became a key cultural center of the Despotate.
                  Literary works developed there, and the famous <em>"Resava" scriptorium</em> was established,
                  which had a significant influence on the further development of Serbian literature.
                  The monastery suffered its first major blow in <strong>1456</strong>, when, according to
                  some assumptions, the refectory and other important buildings were destroyed.
                  Three years later, when the Turks conquered Serbia, the monastery became
                  an important military stronghold. Throughout its history, the monastery was destroyed
                  and looted several times. Only at the end of the 19th century did restoration
                  of the monastery complex and church begin.
                </p>
              </section>

              <img srcSet={`${manasija44} 450w, ${manasija4} `} alt="Manasija Monastery 4" />

              <section lang="en">
                <p>
                  Manasija Monastery is known for its unique fortress surrounding
                  the <strong>Holy Trinity Church</strong>. This fortress consists of eleven towers, with the largest
                  among them being the <em>"Despot's Tower"</em>. This fortress represents a supreme example
                  of Serbian architecture from the late Middle Ages, as around the ramparts, at
                  a distance of only two meters, another protective wall was built. This
                  construction method was later applied in the building of the Smederevo
                  Fortress. The Holy Trinity Church is the second largest among Serbian
                  medieval churches, right after the church of the <strong>Visoki Dečani Monastery</strong>.
                  It is considered one of the most beautiful examples of <em>Morava architectural style</em>,
                  although its decoration differs from other churches of that period. The monastery’s
                  facades are covered with hewn stone and a thin layer of plaster, and the church is a five-domed
                  structure with a <em>triconch ground plan</em>. The large central dome rests on
                  four imposing pillars with semicircular columns.
                </p>
              </section>

              <img srcSet={`${manasija55} 450w, ${manasija5} `} alt="Manasija Monastery 5" />

              <section lang="en">
                <p>
                  Although it has suffered significant damage, the <em>frescoes</em> of Manasija Church still
                  represent an exceptional artistic whole that carries the rich heritage of Serbian
                  medieval painting tradition. The frescoes were painted with the masterful
                  technique of the best iconographers of that time. Although part of the original
                  painting was lost, on an area of over <strong>2000 m²</strong> frescoes depicting
                  <strong>Christ’s miracles</strong>, the <strong>parable of the rich man and poor Lazarus</strong>,
                  the <em>imperial wedding</em>, the <em>prodigal son</em>, and many other scenes from Christ’s life
                  can still be recognized in fragments today. On the western wall, scenes such as
                  the <em>Assumption of the Virgin</em> stand out, while the monumental portrait of Despot
                  Stefan, in the donor’s composition, is located on the same wall.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};

export default ManastirManasija;
