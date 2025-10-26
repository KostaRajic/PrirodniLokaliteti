/* eslint-disable react/no-unknown-property */
import hramSvetogSave1 from "../../../assets/images/Beograd/HramSvetogSave/desktop/hramSvetogSave1.jpg";
import hramSvetogSave2 from "../../../assets/images/Beograd/HramSvetogSave/desktop/hramSvetogSave2.jpg";
import hramSvetogSave3 from "../../../assets/images/Beograd/HramSvetogSave/desktop/hramSvetogSave3.jpg";
import hramSvetogSave4 from "../../../assets/images/Beograd/HramSvetogSave/desktop/hramSvetogSave4.jpg";
import hramSvetogSave5 from "../../../assets/images/Beograd/HramSvetogSave/desktop/hramSvetogSave5.jpg";
import hramSvetogSave6 from "../../../assets/images/Beograd/HramSvetogSave/desktop/hramSvetogSave6.jpg";
import hramSvetogSave7 from "../../../assets/images/Beograd/HramSvetogSave/desktop/hramSvetogSave7.jpg";
import hramSvetogSave8 from "../../../assets/images/Beograd/HramSvetogSave/desktop/hramSvetogSave8.jpg";
import hramSvetogSave11 from "../../../assets/images/Beograd/HramSvetogSave/mobile/hramSvetogSaveM1.jpg";
import hramSvetogSave22 from "../../../assets/images/Beograd/HramSvetogSave/mobile/hramSvetogSaveM2.jpg";
import hramSvetogSave33 from "../../../assets/images/Beograd/HramSvetogSave/mobile/hramSvetogSaveM3.jpg";
import hramSvetogSave44 from "../../../assets/images/Beograd/HramSvetogSave/mobile/hramSvetogSaveM4.jpg";
import hramSvetogSave55 from "../../../assets/images/Beograd/HramSvetogSave/mobile/hramSvetogSaveM5.jpg";
import hramSvetogSave66 from "../../../assets/images/Beograd/HramSvetogSave/mobile/hramSvetogSaveM6.jpg";
import hramSvetogSave77 from "../../../assets/images/Beograd/HramSvetogSave/mobile/hramSvetogSaveM7.jpg";
import hramSvetogSave88 from "../../../assets/images/Beograd/HramSvetogSave/mobile/hramSvetogSaveM8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const HramSvetogSave = () => {
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

        <title>{switchLanguage === 'rs' ? "Hram Svetog Save | Serbia Wonders" : "Temple of Saint Sava | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Hram Svetog Save na Vračaru – simbol duhovnosti, kulture i srpske istorije. Otkrijte njegovu arhitekturu, mozaike i duhovnu vrednost kroz vekove."
            :
            "The Church of Saint Sava in Vračar – a symbol of spirituality, culture, and Serbian history. Discover its architecture, mosaics, and spiritual significance through the centuries."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Hram Svetog Save, Beograd, Vračar, mozaici, neovizantijski stil, srpska pravoslavna crkva, Sveti Sava, kultura, duhovnost, arhitektura"
            :
            "Church of Saint Sava, Belgrade, Vračar, mosaics, Neo-Byzantine style, Serbian Orthodox Church, Saint Sava, culture, spirituality, architecture"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/beograd/hram-svetog-save`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/beograd/hram-svetog-save"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/beograd/hram-svetog-save"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/beograd/hram-svetog-save"
        />

      </Helmet >


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${hramSvetogSave11} 450w, ${hramSvetogSave1} `} alt="Hram Svetog Save 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h1>Hram Svetog Save</h1>

              <section lang='sr'>
                <p>
                  Istorijat Hrama Svetog Save, od trenutka kada se pojavila sama ideja do
                  njene konačne realizacije, na specifičan način odražava istorijske
                  tokove srpskog naroda tokom burnog <strong>20. veka</strong>. Ako Hram Svetog Save
                  simbolizuje najuzvišenije dostignuće srpskog duha u oblasti <em>duhovnosti,
                    kulture i državnosti</em>, onda je istorija njegove izgradnje najbolja
                  ilustracija istorijskog puta koji je srpski narod prešao u novijoj
                  istoriji.
                </p>
              </section>

              <img srcSet={`${hramSvetogSave22} 450w, ${hramSvetogSave2}`} alt="Hram Svetog Save 2" loading="lazy" />

              <section lang='sr'>
                <p>
                  Hram je izgrađen u <em>neovizantijskom stilu</em>, u obliku grčkog krsta, sa
                  velikom kupolom koja se uzdiže iznad njega. Građevina je obložena belim
                  mermerom, a dodatno je ukrašena sa još <strong>13 manjih kupola</strong>. Dužina hrama u
                  pravcu istok-zapad iznosi <strong>91 metar</strong>, a u pravcu sever-jug <strong>81 metar</strong>.
                  Glavni ulaz je sa zapadne strane, iznad kojeg se nalazi luneta sa
                  mozaikom <em>Hrista</em>. Eksterijer hrama je završen <strong>2004. godine</strong>, a potom je
                  započeta izrada unutrašnje dekoracije.
                </p>
              </section>

              <img srcSet={`${hramSvetogSave44} 450w, ${hramSvetogSave4}`} alt="Hram Svetog Save 3" loading="lazy" />

              <section lang='sr'>
                <p>
                  Hram Svetog Save predstavlja pravu <strong>ikonu srpske arhitekture</strong> i likovne
                  umetnosti. Unutar hrama nalaze se brojni mozaici, freske i ikone. Glavna
                  tema mozaika je <em>Vaznesenje Isusovo</em>, dok se u kripti hrama – posvećenoj
                  svetovelikomučeniku knezu Lazaru – održavaju i <em>kulturni događaji</em>. Ispred
                  hrama nalazi se <strong>Svetosavski plato</strong> sa fontanom, spomenikom Karađorđu i
                  zgradom Narodne biblioteke.
                </p>
              </section>

              <img srcSet={`${hramSvetogSave33} 450w, ${hramSvetogSave3}`} alt="Hram Svetog Save 4" loading="lazy" />

              <section lang='sr'>
                <p>
                  Hram Svetog Save se izdiže u centru Beograda, na prostoru zvanom
                  <strong>Vračar</strong>, sa kojeg se pruža impresivan pogled na grad, uključujući reke
                  Savu i Dunav. Zahvaljujući svojoj visini od <strong>79 metara</strong>, hram je
                  prepoznatljiv orijentir iz skoro svakog dela Beograda i simbol njegovih
                  <em>duhovnih i kulturnih vrednosti</em>.
                </p>
              </section>

              <img srcSet={`${hramSvetogSave55} 450w, ${hramSvetogSave5}`} alt="Hram Svetog Save 5" loading="lazy" />

              <section lang='sr'>
                <p>
                  Površina koju treba da pokriju mozaici iznosi čak <strong>17.000 m²</strong>, a na njima
                  radi tim od <strong>oko 90 mozaista</strong>. Mozaici su inspirisani <em>vizantijskom školom</em>,
                  sa zlatnim tonovima u glavnoj crkvi, dok je u kripti pristup moderniji,
                  sa svetlijim bojama. Tehnika mozaika je izabrana zbog monumentalnosti
                  same građevine.
                </p>
              </section>

              <img srcSet={`${hramSvetogSave77} 450w, ${hramSvetogSave7}`} alt="Hram Svetog Save 6" loading="lazy" />

              <section lang='sr'>
                <p>
                  Komisija za unutrašnje uređenje Hrama, osnovana od strane <em>Svetog
                    arhijerejskog sinoda</em>, definiše likovna i ikonografska rešenja. Biće
                  prikazano više od <strong>hiljadu svetitelja</strong>, dok će se <strong>imena donatora</strong> od
                  <strong>1896. godine</strong> do danas ispisati na unutrašnjim zidovima, uz pomoć i
                  elektronskog sistema za pretragu.
                </p>
              </section>

              <img srcSet={`${hramSvetogSave88} 450w, ${hramSvetogSave8}`} alt="Hram Svetog Save 7" loading="lazy" />

              <section lang='sr'>
                <p>
                  Život <strong>Svetog Save</strong> osvetljava njegovu mladost, duhovni put i boravak na
                  <em>Svetoj Gori</em>. Rastko je pokazivao izuzetnu čednost, umnost i saosećajnost –
                  izbegavao je prekomerna zadovoljstva, pomagao siromašnima i bio poznat po
                  svojoj <strong>plemenitosti i mudrosti</strong>. Njegovo razmišljanje o velikim
                  pitanjima postojanja izdvajalo ga je već u mladosti, a spoj rada i
                  duhovnog promišljanja učinio ga je jednim od <em>najznačajnijih mislilaca i
                    duhovnih vođa</em> u srpskoj istoriji.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Temple of Saint Sava</h1>

              <section lang='en'> <p> The history of the Temple of Saint Sava—from the moment the idea was conceived to its final realization—reflects the historical journey of the Serbian people throughout the turbulent <strong>20th century</strong>. If the Temple of Saint Sava symbolizes the highest achievement of the Serbian spirit in the fields of <em>spirituality, culture, and statehood</em>, then its construction history is the clearest illustration of the modern historical path of the Serbian nation. </p> </section>
              <img srcSet={`${hramSvetogSave22} 450w, ${hramSvetogSave2}`} alt="Temple of Saint Sava 2" loading="lazy" />

              <section lang='en'> <p> The temple was built in a <em>neo-Byzantine style</em>, shaped like a Greek cross, with a large dome rising above it. The structure is clad in white marble and further adorned with <strong>13 smaller domes</strong>. The church measures <strong>91 meters</strong> in length (east–west) and <strong>81 meters</strong> in width (north–south). The main entrance is on the western side, above which is a lunette featuring a mosaic of <em>Christ</em>. The exterior of the temple was completed in <strong>2004</strong>, after which the interior decoration began. </p> </section>
              <img srcSet={`${hramSvetogSave44} 450w, ${hramSvetogSave4}`} alt="Temple of Saint Sava 3" loading="lazy" />

              <section lang='en'> <p> The Temple of Saint Sava is a true <strong>icon of Serbian architecture</strong> and visual art. Inside the church are numerous mosaics, frescoes, and icons. The main theme of the mosaics is the <em>Ascension of Christ</em>, while in the crypt—dedicated to the holy martyr Prince Lazar—<em>cultural events</em> are also held. In front of the church lies the <strong>Svetosavski Plateau</strong> with a fountain, the monument to Karađorđe, and the building of the National Library. </p> </section>
              <img srcSet={`${hramSvetogSave33} 450w, ${hramSvetogSave3}`} alt="Temple of Saint Sava 4" loading="lazy" />

              <section lang='en'> <p> The Temple of Saint Sava rises in the center of Belgrade, in an area known as <strong>Vračar</strong>, from where there is an impressive view of the city, including the Sava and Danube rivers. Thanks to its height of <strong>79 meters</strong>, the temple is a recognizable landmark from almost every part of Belgrade and a symbol of its <em>spiritual and cultural values</em>. </p> </section>
              <img srcSet={`${hramSvetogSave55} 450w, ${hramSvetogSave5}`} alt="Temple of Saint Sava 5" loading="lazy" />

              <section lang='en'> <p> The area to be covered by mosaics amounts to an impressive <strong>17,000 m²</strong>, created by a team of around <strong>90 mosaic artists</strong>. The mosaics are inspired by the <em>Byzantine school</em>, with golden tones in the main church, while the crypt has a more modern approach, featuring lighter colors. The mosaic technique was chosen to reflect the monumentality of the building itself. </p> </section>
              <img srcSet={`${hramSvetogSave77} 450w, ${hramSvetogSave7}`} alt="Temple of Saint Sava 6" loading="lazy" />

              <section lang='en'> <p> The Committee for the Interior Design of the Temple, established by the <em>Holy Assembly of Bishops</em>, defines the artistic and iconographic solutions. More than <strong>one thousand saints</strong> will be depicted, while <strong>the names of donors</strong> from <strong>1896</strong> to the present will be inscribed on the interior walls, assisted by an electronic search system. </p> </section>
              <img srcSet={`${hramSvetogSave88} 450w, ${hramSvetogSave8}`} alt="Temple of Saint Sava 7" loading="lazy" />

              <section lang='en'> <p> The life of <strong>Saint Sava</strong> sheds light on his youth, spiritual journey, and time spent at <em>Mount Athos</em>. As a young man, Rastko displayed exceptional modesty, wisdom, and compassion—he avoided excessive pleasures, helped the poor, and was known for his <strong>nobility and wisdom</strong>. His contemplation on the great questions of existence set him apart early on, and the blend of action and spiritual reflection made him one of the <em>most important thinkers and spiritual leaders</em> in Serbian history. </p> </section>

            </>
          )}

      </div>

    </>
  );
};

export default HramSvetogSave;