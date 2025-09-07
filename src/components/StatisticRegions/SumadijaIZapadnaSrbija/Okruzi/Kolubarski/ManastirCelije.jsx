/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import celije1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/desktop/manastirCelije1.jpg";
import celije2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/desktop/manastirCelije2.jpg";
import celije3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/desktop/manastirCelije3.jpg";
import celije4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/desktop/manastirCelije4.jpg";
import celije5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/desktop/manastirCelije5.webp";
import celije11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/mobile/MmanastirCelije1.jpg";
import celije22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/mobile/MmanastirCelije2.jpg";
import celije33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/mobile/MmanastirCelije3.jpg";
import celije44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/mobile/MmanastirCelije4.jpg";
import celije55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirCelije/mobile/MmanastirCelije5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirCelije = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Ćelije – Istorija i značaj | Serbia Wonders" : "Ćelije Monastery – History and Significance | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Ćelije, posvećen svetom Georgiju, nalazi se blizu Lajkovca. Saznajte više o njegovoj srednjovekovnoj istoriji, značajnim ličnostima i kulturnom nasleđu."
            :
            "Celije Monastery, dedicated to St. George, is located near Lajkovac. Learn more about its medieval history, important figures, and cultural heritage."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Ćelije, Lajkovac, svetom Georgiju, srednjovekovni manastir, Justin Popović, Srbija, kulturno nasleđe"
            :
            "Celije Monastery, Lajkovac, St. George, medieval monastery, Justin Popović, Serbia, cultural heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-celije`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-celije"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-celije"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-celije"
        />

      </Helmet >


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(kulubarskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: 'white' }}
        />
        <header></header>
        <img srcSet={`${celije44} 450w, ${celije4} `} alt="Manastir Ćelije 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2 style={{ color: "white" }}>Manastir Ćelije</h2>

              <section lang="sr">
                <p>
                  Manastir Ćelije posvećen <strong>svetom velikomučeniku Georgiju</strong> nalazi se oko <strong>3 km jugoistočno od Lajkovca</strong>, a <strong>2 km istočno od ušća reke Ljig u reku Kolubaru</strong>. Takođe, u neposrednoj blizini ušća tih dveju reka, na oko <strong>1 km udaljenosti</strong>, nalazi se <em>arheološko nalazište Anine iz Rimskog doba</em>. Manastirska crkva je sagrađena u uvali ispod <strong>Vrače brda (kota 293)</strong> i <strong>brda Čovke (kota 272)</strong> na nadmorskoj visini od <strong>139 m</strong>. Pored manastira u uvali protiče plitak potok Kameniča. U toj skrivenoj dolini, najverovatnije tokom <em>XIV ili početkom XV veka</em>, podignut je manji manastirski kompleks sastavljen od jednobrodne crkve i nekoliko objekata. Prošlost manastira sv. Georgija u selu Ćelije kod Lajkovca veoma je tajanstvena. Dosadašnji pokušaji da se ona odgonetnu nisu mogli biti zasnovani na uobičajenim pisanim izvorima, jer ih gotovo da nije ni bilo, već isključivo na izvorima drugačije prirode.
                </p>
              </section>

              <img srcSet={`${celije22} 450w, ${celije2} `} alt="Manastir Ćelije 2" />

              <section lang="sr">
                <p>
                  Tačan datum nastanka manastira nije poznat, ali prema opštem istorijskom pregledu, manastir potiče iz <strong>srednjeg veka</strong>. Narodno predanje ga povezuje sa vladavinom <strong>kralja Dragutina</strong>, koji je od 1282. do 1316. godine upravljao ovim područjem, a bio je poznat i kao <em>Sremski kralj</em>. Manastir Ćelije, kao i manastir kraj sela Lelić, pominje se u turskim izvorima iz <strong>1560. godine</strong>, a tokom <strong>XVIII veka</strong>, Ćelije su bile centar svih dešavanja u valjevskom kraju. Ugledni monasi ovog manastira imali su značajnu ulogu u podsticanju buna protiv Turaka, zbog čega je paša Bušatlija <strong>1791. godine</strong> zapalio manastir Ćelije, zajedno sa 13 crkava u valjevskom okrugu. U ovom manastiru je sveštenički čin primio i <strong>Hadži Ruvim</strong>.
                </p>
              </section>

              <img srcSet={`${celije33} 450w, ${celije3} `} alt="Manastir Ćelije 3" />

              <section lang="sr">
                <p>
                  Najstarija ikona u manastiru je ikona <strong>Sabora Svetih Arhangela</strong>, zaštitnika ove crkve, koja potiče iz perioda pre <strong>1798. godine</strong>, kada je priložena manastiru. Najstarija knjiga u manastiru je <em>"Boženstvenaja skrižalj"</em> (u zapisima poznata kao Skrižali), koju je crnogorski vladika <strong>Danilo Petrović</strong> kupio 1715. godine u Rusiji i zatim poklonio manastiru. Među starim knjigama nalaze se i dva mineja za mesece <strong>mart</strong> i <strong>novembar</strong>, koja, prema načinu štampe, malom formatu i zapisima, datiraju iz prve polovine XVIII veka, a veruje se da su štampana u <em>Veneciji</em>. Veliki trebnik, štampan u Rusiji u drugoj polovini XVIII veka, postao je deo manastirske biblioteke oko <strong>1814. godine</strong>. Takođe, u manastiru se čuva i Sveto pismo Starog zaveta na crkvenoslovenskom jeziku, koje je nekada pripadalo proti <strong>Matiji Nenadoviću</strong>, a ima značajnu istorijsku vrednost.
                </p>
              </section>

              <img srcSet={`${celije11} 450w, ${celije1} `} alt="Manastir Ćelije 4" />

              <section lang="sr">
                <p>
                  Manastir je bio namenjen za smeštaj manjeg broja monaha, a svojim izgledom i konceptom podseća na mnoge manastire koji su u to vreme, pod uticajem <strong>Svete Gore</strong>, podignuti u Srbiji. Najverovatnije je nastao u drugoj polovini <em>XIV</em> ili početkom <em>XV veka</em>, kada je nepoznati predstavnik srpske vlastele, vođen duhovnim motivima i pod snažnim uticajem svetogorskih ideja, odlučio da u srednjovekovnoj župi Pepelevac, u skrivenoj dolini pored malog potoka, podigne hram posvećen <strong>svetom Georgiju</strong>. Izbor jednog od svetih ratnika kao zaštitnika i lokacije za gradnju u pograničnom području prema Ugarskoj ukazuju da je osnivač bio predstavnik srpske vojne vlastele. Nakon svoje smrti, osnivač manastira je najverovatnije sahranjen u južnom delu zapadnog traveja crkve, uz postavljanje kamene nadgrobne ploče. Tokom gradnje spomen-kosturnice, ktitorski grob je bio oštećen.
                </p>
              </section>

              <img srcSet={`${celije55} 450w, ${celije5} `} alt="sveti Ava Justin" />

              <section lang="sr">
                <p>
                  Manastir Ćelije poznat je po tome što je u njemu boravio arhimandrit dr <strong>Justin Popović (1894—1979)</strong>, poznat kao <strong>Sveti Ava Justin</strong>, Veliki Svetionik Ćelijski, Svesrpski i Svepravoslavni. Njegov grob se nalazi na južnoj strani oltara, a prema njegovoj želji, grob nije obeležen nikakvim spomenikom osim velikog kamenog krsta i cveća na humci. Sa leve strane crkve, prema oltaru, odmah iza severnih vrata, nalazi se grob <strong>Ilije Birčanina</strong>, vojvode iz Podgorine, obor-kneza sa Medvednika. On je, zajedno sa valjevskim knezom <strong>Aleksom Nenadovićem</strong>, bio pogubljen od strane turskih dahija na <em>Kolubarskoj ćupriji u Valjevu 1804. godine</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Ćelije Monastery</h2>

              <section lang="en">
                <p>
                  The Ćelije Monastery, dedicated to <strong>Saint George the Great Martyr</strong>, is located about <strong>3 km southeast of Lajkovac</strong>, and <strong>2 km east of the confluence of the Ljig River into the Kolubara River</strong>. Also, near the confluence of these two rivers, at about <strong>1 km distance</strong>, lies the <em>archaeological site of Anine from the Roman period</em>. The monastery church was built in a valley beneath <strong>Vrače Hill (elevation 293 m)</strong> and <strong>Čovka Hill (elevation 272 m)</strong> at an altitude of <strong>139 meters</strong>. Next to the monastery, a shallow stream called Kameniča flows through the valley. In this secluded valley, most likely during the <em>14th or early 15th century</em>, a smaller monastic complex was erected, consisting of a single-nave church and several other buildings. The history of the Church of St. George in the village of Ćelije near Lajkovac remains very mysterious. Attempts to unravel it so far could not be based on conventional written sources, as they were nearly nonexistent, but solely on sources of a different nature.
                </p>
              </section>

              <img srcSet={`${celije22} 450w, ${celije2} `} alt="Ćelije Monastery 2" />

              <section lang="en">
                <p>
                  The exact date of the monastery’s founding is unknown, but according to the general historical overview, it dates back to the <strong>Middle Ages</strong>. Folk tradition links it with the reign of <strong>King Dragutin</strong>, who ruled this area from 1282 to 1316 and was also known as the <em>King of Srem</em>. The Ćelije Monastery, along with the monastery near the village of Lelić, is mentioned in Turkish sources from <strong>1560</strong>. During the <strong>18th century</strong>, Ćelije was the center of all events in the Valjevo region. The respected monks of this monastery played a significant role in encouraging uprisings against the Turks, which led to Pasha Bushatlija burning the Ćelije Monastery in <strong>1791</strong>, along with 13 churches in the Valjevo district. The monastery was also where <strong>Hadži Ruvim</strong> received his priestly ordination.
                </p>
              </section>

              <img srcSet={`${celije33} 450w, ${celije3} `} alt="Ćelije Monastery 3" />

              <section lang="en">
                <p>
                  The oldest icon in the monastery is the icon of the <strong>Assembly of the Holy Archangels</strong>, the protector of this church, dating from before <strong>1798</strong>, when it was donated to the monastery. The oldest book in the monastery is <em>"Boženstvenaja skrižalj"</em> (known in the records as Skrižali), purchased by the Montenegrin bishop <strong>Danilo Petrović</strong> in 1715 in Russia and then donated to the monastery. Among the old books are two menaia for the months of <strong>March</strong> and <strong>November</strong>, which, based on their printing style, small format, and records, date from the first half of the 18th century and are believed to have been printed in <em>Venice</em>. A large prayer book (trebnik), printed in Russia in the second half of the 18th century, became part of the monastery’s library around <strong>1814</strong>. Also, the monastery holds a copy of the Old Testament in Church Slavonic, which once belonged to the priest <strong>Matija Nenadović</strong> and is of significant historical value.
                </p>
              </section>

              <img srcSet={`${celije11} 450w, ${celije1} `} alt="Ćelije Monastery 4" />

              <section lang="en">
                <p>
                  The monastery was intended to accommodate a small number of monks, and in its appearance and concept, it resembles many monasteries built in Serbia at that time under the influence of <strong>Mount Athos</strong>. It most likely originated in the second half of the <em>14th</em> or early <em>15th century</em>, when an unknown representative of the Serbian nobility, motivated by spiritual reasons and strongly influenced by Athonite ideas, decided to build a temple dedicated to <strong>Saint George</strong> in the medieval parish of Pepelevac, in a hidden valley near a small stream. The choice of one of the holy warriors as protector and the location in a border area towards Hungary indicate that the founder was a representative of the Serbian military nobility. After his death, the founder was probably buried in the southern part of the western aisle of the church, with a stone tombstone placed. During the construction of the memorial ossuary, the founder's grave was damaged.
                </p>
              </section>

              <img srcSet={`${celije55} 450w, ${celije5} `} alt="Saint Ava Justin" />

              <section lang="en">
                <p>
                  The Ćelije Monastery is known for having hosted Archimandrite Dr. <strong>Justin Popović (1894–1979)</strong>, known as <strong>Saint Ava Justin</strong>, the Great Beacon of Ćelije, Pan-Serbian and Pan-Orthodox. His grave is located on the southern side of the altar, and according to his wish, it is marked only by a large stone cross and flowers on the mound. On the left side of the church, towards the altar, immediately behind the northern door, lies the grave of <strong>Ilija Birčanin</strong>, a voivode from Podgorina and chief knez of Medvednik. He was, together with the Valjevo knez <strong>Aleksa Nenadović</strong>, executed by Turkish dahijas on the <em>Kolubara Bridge in Valjevo in 1804</em>.
                </p>
              </section>


              <h2 style={{ color: "white" }}>Ćelije Monastery</h2>

              <section lang="en">
                <p style={{ paddingTop: "50px" }}>
                  The Ćelije Monastery, dedicated to <strong>Saint George the Great Martyr</strong>, is located about <strong>3 km southeast of Lajkovac</strong>, and <strong>2 km east of the confluence of the Ljig River into the Kolubara River</strong>. Also, near the confluence of these two rivers, at about <strong>1 km distance</strong>, lies the <em>archaeological site of Anine from the Roman period</em>. The monastery church was built in a valley beneath <strong>Vrače Hill (elevation 293 m)</strong> and <strong>Čovka Hill (elevation 272 m)</strong> at an altitude of <strong>139 meters</strong>. Next to the monastery, a shallow stream called Kameniča flows through the valley. In this secluded valley, most likely during the <em>14th or early 15th century</em>, a smaller monastic complex was erected, consisting of a single-nave church and several other buildings. The history of the Church of St. George in the village of Ćelije near Lajkovac remains very mysterious. Attempts to unravel it so far could not be based on conventional written sources, as they were nearly nonexistent, but solely on sources of a different nature.
                </p>
              </section>

              <img srcSet={`${celije22} 450w, ${celije2} `} alt="Ćelije Monastery 2" />

              <section lang="en">
                <p>
                  The exact date of the monastery’s founding is unknown, but according to the general historical overview, it dates back to the <strong>Middle Ages</strong>. Folk tradition links it with the reign of <strong>King Dragutin</strong>, who ruled this area from 1282 to 1316 and was also known as the <em>King of Srem</em>. The Ćelije Monastery, along with the monastery near the village of Lelić, is mentioned in Turkish sources from <strong>1560</strong>. During the <strong>18th century</strong>, Ćelije was the center of all events in the Valjevo region. The respected monks of this monastery played a significant role in encouraging uprisings against the Turks, which led to Pasha Bushatlija burning the Ćelije Monastery in <strong>1791</strong>, along with 13 churches in the Valjevo district. The monastery was also where <strong>Hadži Ruvim</strong> received his priestly ordination.
                </p>
              </section>

              <img srcSet={`${celije33} 450w, ${celije3} `} alt="Ćelije Monastery 3" />

              <section lang="en">
                <p>
                  The oldest icon in the monastery is the icon of the <strong>Assembly of the Holy Archangels</strong>, the protector of this church, dating from before <strong>1798</strong>, when it was donated to the monastery. The oldest book in the monastery is <em>"Boženstvenaja skrižalj"</em> (known in the records as Skrižali), purchased by the Montenegrin bishop <strong>Danilo Petrović</strong> in 1715 in Russia and then donated to the monastery. Among the old books are two menaia for the months of <strong>March</strong> and <strong>November</strong>, which, based on their printing style, small format, and records, date from the first half of the 18th century and are believed to have been printed in <em>Venice</em>. A large prayer book (trebnik), printed in Russia in the second half of the 18th century, became part of the monastery’s library around <strong>1814</strong>. Also, the monastery holds a copy of the Old Testament in Church Slavonic, which once belonged to the priest <strong>Matija Nenadović</strong> and is of significant historical value.
                </p>
              </section>

              <img srcSet={`${celije11} 450w, ${celije1} `} alt="Ćelije Monastery 4" />

              <section lang="en">
                <p>
                  The monastery was intended to accommodate a small number of monks, and in its appearance and concept, it resembles many monasteries built in Serbia at that time under the influence of <strong>Mount Athos</strong>. It most likely originated in the second half of the <em>14th</em> or early <em>15th century</em>, when an unknown representative of the Serbian nobility, motivated by spiritual reasons and strongly influenced by Athonite ideas, decided to build a temple dedicated to <strong>Saint George</strong> in the medieval parish of Pepelevac, in a hidden valley near a small stream. The choice of one of the holy warriors as protector and the location in a border area towards Hungary indicate that the founder was a representative of the Serbian military nobility. After his death, the founder was probably buried in the southern part of the western aisle of the church, with a stone tombstone placed. During the construction of the memorial ossuary, the founder's grave was damaged.
                </p>
              </section>

              <img srcSet={`${celije55} 450w, ${celije5} `} alt="Saint Ava Justin" />

              <section lang="en">
                <p>
                  The Ćelije Monastery is known for having hosted Archimandrite Dr. <strong>Justin Popović (1894–1979)</strong>, known as <strong>Saint Ava Justin</strong>, the Great Beacon of Ćelije, Pan-Serbian and Pan-Orthodox. His grave is located on the southern side of the altar, and according to his wish, it is marked only by a large stone cross and flowers on the mound. On the left side of the church, towards the altar, immediately behind the northern door, lies the grave of <strong>Ilija Birčanin</strong>, a voivode from Podgorina and chief knez of Medvednik. He was, together with the Valjevo knez <strong>Aleksa Nenadović</strong>, executed by Turkish dahijas on the <em>Kolubara Bridge in Valjevo in 1804</em>.
                </p>
              </section>
            </>
          )}


      </div>
    </>
  );
};


export default ManastirCelije;