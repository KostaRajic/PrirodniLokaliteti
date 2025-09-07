/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import manastirSvetihArhangela1 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/desktop/manastirSvetihArhangela1.jpg";
import manastirSvetihArhangela2 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/desktop/manastirSvetihArhangela2.jpg";
import manastirSvetihArhangela3 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/desktop/manastirSvetihArhangela3.jpg";
import manastirSvetihArhangela4 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/desktop/manastirSvetihArhangela4.jpg";
import manastirSvetihArhangela11 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/mobile/MmanastirSvetihArhangela1.jpg";
import manastirSvetihArhangela22 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/mobile/MmanastirSvetihArhangela2.jpg";
import manastirSvetihArhangela33 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/mobile/MmanastirSvetihArhangela3.jpg";
import manastirSvetihArhangela44 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/mobile/MmanastirSvetihArhangela4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { prizrenskiOkrugPathRoutes } from "./PrizrenskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirSvetihArhangela = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Svetih Arhangela – Dušanova Zadužbina | Serbia Wonders" : "Monastery of the Holy Archangels – Dušan’s Legacy | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Svetih Arhangela je srednjovekovni manastir iz 14. veka, zadužbina cara Dušana Nemanjića, smešten kod Prizrena. Važno je arheološko i kulturno nasleđe srpske srednjovekovne arhitekture i umetnosti."
            :
            "The Monastery of the Holy Archangels is a 14th-century medieval monastery, founded by Emperor Dušan Nemanjic, located near Prizren. It is an important archaeological and cultural monument of Serbian medieval architecture and art."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Svetih Arhangela, Dušan Nemanjić, Prizren, srpska srednjovekovna arhitektura, raška škola, srednjovekovni manastiri, kulturno nasleđe Srbije, car Dušan"
            :
            "Monastery of the Holy Archangels, Dušan Nemanjic, Prizren, Serbian medieval architecture, Raška school, medieval monasteries, Serbian cultural heritage, Emperor Dušan"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/manastir-svetih-arhangela`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/manastir-svetih-arhangela"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/manastir-svetih-arhangela"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/manastir-svetih-arhangela"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(prizrenskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${manastirSvetihArhangela11} 450w, ${manastirSvetihArhangela1} `} loading="lazy" alt="Manastir Svetih Arhangela 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Manastir Svetih Arhangela</h2>

              <section lang="sr">
                <p>
                  Ostaci manastira <strong>Svetih Arhangela</strong>, zadužbine najmoćnijeg srpskog
                  srednjovekovnog vladara, kralja (a od <strong>1346. godine</strong> cara) <strong>Dušana
                    Nemanjića</strong>, nalaze se <strong>3 km</strong> uzvodno od <strong>Prizrena</strong>, na levoj obali reke
                  <strong>Bistrice</strong> koja na tom mestu pravi oštru krivinu oko ravnog platova
                  trokutastog oblika. Donji grad (ili Dušanov, u užem smislu) izgrađen je
                  na krčevini usred nekadašnjih gustih šuma, u blizini bogatih izvora, sa
                  pogledom prema šarplaninskim vrhovima. U manastirski kompleks spada i
                  obližnja tvrđava <strong>Višegrad</strong>, stariji deo svetoarhangelskog <em>"grada"</em>, koja
                  se nalazi na brdu iznad manastirskog lokaliteta i predstavlja utvrđenje
                  koje je nekada služilo za odbranu. Ono potiče iz pre nemanjićkih
                  vremena, a meštani ga zovu <em>Gornji grad</em>.
                </p>
              </section>

              <img srcSet={`${manastirSvetihArhangela22} 450w, ${manastirSvetihArhangela2}`} alt="Manastir Svetih Arhangela 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Odlučujući da sagradi manastir Svetih Arhangela kod <strong>Prizrena</strong>, <strong>Dušan</strong> je
                  donio ovu odluku <strong>1341/1342. godine</strong>, nakon čudesnog izlečenja od tada
                  neizlečive bolesti, uz posredstvo <strong>Svetog Mihaila</strong>, iscelitelja i poznatog
                  zaštitnika hrišćanskih cara. Carski manastir najpre je bio pravno
                  zasnovan, a kasnije i izgrađen. Naime, kralj je <strong>1343. godine</strong> simbolično
                  "postavio kamen" za manastir i formirao njegovo bratstvo, sa igumanom na
                  čelu. Na mestu koje je kralj Dušan odabrao za svoju zadužbinu, već je
                  postojao stari, oronuli hram, čiji su temelji otkriveni u podu
                  veličanstvene Dušanove crkve. Taj hram je morao biti razgrađen, teren
                  očišćen, a materijal (<em>drvo</em> i <em>kamen</em>) za izgradnju novog manastira
                  obezbeđen. Pripreme su završene tokom leta <strong>1347. godine</strong>, a manastirska
                  crkva je stavljena pod olovni krov <strong>1349. godine</strong>. Okolna zdanja, kao i
                  celokupni slikarski radovi, dovršeni su do <strong>1352. godine</strong>. Manastir je bio
                  toliko lep da je jedan letopisac iz <em>XV veka</em> napisao da ne veruje da
                  postoji nešto slično pod suncem.
                </p>
              </section>

              <img srcSet={`${manastirSvetihArhangela33} 450w, ${manastirSvetihArhangela3}`} alt="Manastir Svetih Arhangela 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Prema arheološkim istraživanjima iz <strong>1927. godine</strong>, sprovedenim pod
                  rukovodstvom dr <strong>Radoslava Grujića</strong>, manastirsko naselje Svetih Arhangela,
                  koje je obuhvatilo površinu od <strong>6,5 hektara</strong>, imalo je osnovu nepravilnog,
                  otprilike jednako krakog <em>trougla</em>. Naselje je bilo smešteno unutar
                  odbrambenog zida koji ga je okruživao sa svih strana, a činile su ga
                  sledeće jedinice:
                  <br /><br />
                  - Velika ili glavna crkva Svetih Arhangela, koja je bila centralna tačka
                  unutrašnjeg prostora, sa <strong>carevom grobnicom</strong>
                  <br />
                  - Crkva Svetog Nikole, koja je u velikoj meri ličila na glavnu crkvu,
                  ali je bila dvostruko manja, a bila je <em>prva sagrađena</em>
                  <br />
                  - Manastirska trpezarija sa kuhinjom
                  <br />
                  - Kraljevski konaci
                  <br />
                  - Monastički konaci
                  <br />
                  - Igumanija
                  <br />
                  - <em>"Stup knjižni"</em>, tj. knjižara i pisarnica (<em>skryptorijum</em>)
                  <br />
                  - Bolnica
                  <br />
                  - Drugi prateći objekti manastirske ekonomije
                </p>
              </section>

              <img srcSet={`${manastirSvetihArhangela44} 450w, ${manastirSvetihArhangela4}`} alt="Manastir Svetih Arhangela 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Glavna crkva, posvećena <strong>Svetim Arhangelima</strong>, danas sačuvana samo u
                  fragmentima, predstavlja poslednji veliki spomenik <strong>raške škole</strong>. Po svom
                  arhitektonskom konceptu, ona obuhvata gotovo sve elemente raške škole,
                  uz nagoveštaj <em>moravske</em>. Ova raskošna petokupolna građevina bila je
                  monumentalno zdanje sa osnovom u obliku upisanog <em>krsta</em>, ali sa
                  neobičajno suženim bočnim brodovima. Imala je pravougaoni oblik sa dužom
                  stranom od <strong>28,5 metara</strong> i kraćom od <strong>16,7 metara</strong>. Na istočnoj strani
                  nalazila se trodelna oltarska apsida. Veliko dvanaestospratno kupola
                  hram je počivala na četiri luka koja su podržavali četiri stuba, dok su
                  prema rekonstrukciji postojala i četiri manja bočna kupola. Smatra se da
                  je slabo očuvani živopis u ovoj crkvi bio superiorniji u odnosu na onaj
                  u <strong>Dečanima</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Monastery of the Holy Archangels</h2>

              <section lang="en">
                <p>
                  The remains of the <strong>Monastery of the Holy Archangels</strong>, the endowment of the most powerful Serbian medieval ruler, King (and from <strong>1346</strong> Emperor) <strong>Dušan Nemanjić</strong>, are located <strong>3 km</strong> upstream from <strong>Prizren</strong>, on the left bank of the <strong>Bistrica River</strong>, which makes a sharp bend around a flat triangular plateau at that point. The Lower Town (or Dušan’s, in the narrow sense) was built on a clearing in the midst of once dense forests, near abundant springs, overlooking the peaks of the Šar Mountains. The monastic complex also includes the nearby <strong>Višegrad Fortress</strong>, the older part of the <em>Holy Archangels' "city"</em>, which is located on a hill above the monastery site and served as a defensive structure. It dates back to pre-Nemanjić times and is locally known as <em>Gornji Grad</em> ("Upper Town").
                </p>
              </section>

              <img srcSet={`${manastirSvetihArhangela22} 450w, ${manastirSvetihArhangela2}`} alt="Monastery of the Holy Archangels 2" loading="lazy" />

              <section lang="en">
                <p>
                  Deciding to build the Monastery of the Holy Archangels near <strong>Prizren</strong>, <strong>Dušan</strong> made this decision in <strong>1341/1342</strong>, after a miraculous recovery from what was then an incurable illness, through the intercession of <strong>Saint Michael</strong>, the healer and renowned protector of Christian emperors. The imperial monastery was first legally founded and later constructed. In <strong>1343</strong>, the king symbolically "laid the cornerstone" for the monastery and formed its brotherhood with an abbot at the head. At the site chosen by King Dušan for his endowment, there was already an old, dilapidated church, whose foundations were discovered beneath the floor of Dušan's magnificent church. That church had to be dismantled, the land cleared, and the necessary building material (<em>wood</em> and <em>stone</em>) secured. Preparations were completed during the summer of <strong>1347</strong>, and the monastery church was roofed with lead in <strong>1349</strong>. The surrounding buildings, along with the entire fresco decoration, were completed by <strong>1352</strong>. The monastery was so beautiful that a chronicler from the <em>15th century</em> wrote that he did not believe anything like it existed under the sun.
                </p>
              </section>

              <img srcSet={`${manastirSvetihArhangela33} 450w, ${manastirSvetihArhangela3}`} alt="Monastery of the Holy Archangels 3" loading="lazy" />

              <section lang="en">
                <p>
                  According to archaeological research from <strong>1927</strong>, conducted under the leadership of Dr. <strong>Radoslav Grujić</strong>, the monastic settlement of the Holy Archangels, which covered an area of <strong>6.5 hectares</strong>, had the shape of an irregular, roughly equilateral <em>triangle</em>. The settlement was enclosed within defensive walls on all sides and consisted of the following units:
                  <br /><br />
                  - The large or main Church of the Holy Archangels, the central point of the inner space, containing the <strong>emperor's tomb</strong>
                  <br />
                  - The Church of St. Nicholas, which closely resembled the main church but was half its size, and was the <em>first to be built</em>
                  <br />
                  - The monastery refectory with kitchen
                  <br />
                  - Royal quarters
                  <br />
                  - Monastic quarters
                  <br />
                  - Abbot's residence
                  <br />
                  - <em>"Stup knjizhni"</em>, i.e., a bookshop and scriptorium (<em>scriptorium</em>)
                  <br />
                  - Hospital
                  <br />
                  - Other auxiliary buildings for the monastery’s economy
                </p>
              </section>

              <img srcSet={`${manastirSvetihArhangela44} 450w, ${manastirSvetihArhangela4}`} loading="lazy" alt="Monastery of the Holy Archangels 4" />

              <section lang="en">
                <p>
                  The main church, dedicated to the <strong>Holy Archangels</strong>, is today preserved only in fragments and represents the last major monument of the <strong>Raška architectural school</strong>. In its architectural concept, it includes almost all elements of the Raška style, with a hint of the <em>Morava style</em>. This lavish five-domed building was a monumental structure with a base in the form of an inscribed <em>cross</em>, but with unusually narrow side aisles. It had a rectangular shape with a longer side of <strong>28.5 meters</strong> and a shorter side of <strong>16.7 meters</strong>. On the eastern side was a tripartite altar apse. The large twelve-sided dome rested on four arches supported by four columns, and, according to reconstructions, there were also four smaller side domes. It is believed that the poorly preserved frescoes in this church were superior to those in <strong>Dečani</strong>.
                </p>
              </section>

            </>
          )}

      </div >
    </>
  );
};


export default ManastirSvetihArhangela;