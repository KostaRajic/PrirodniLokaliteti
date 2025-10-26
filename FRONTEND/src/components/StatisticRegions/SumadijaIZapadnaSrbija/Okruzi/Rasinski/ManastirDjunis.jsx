/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import djunis1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis1.jpg";
import djunis2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis2.jpg";
import djunis3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis3.jpg";
import djunis4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis4.jpg";
import djunis5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis5.jpg";
import djunis11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis1.jpg";
import djunis22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis2.jpg";
import djunis33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis3.jpg";
import djunis44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis4.jpg";
import djunis55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirDjunis = () => {
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
            ? "Manastir Đunis – Mesto ukazanja Presvete Bogorodice | Srbija Wonders"
            : "Đunis Monastery – Site of the Holy Virgin's Apparition | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Pokrova Presvete Bogorodice u Đunisu, poznat po ukazanju Bogorodice 1898. godine, mesto je čudesnih isceljenja i duhovnog mira koje posećuju vernici iz celog sveta."
              : "The Monastery of the Protection of the Holy Virgin in Đunis, known for the 1898 apparition of the Virgin Mary, is a sacred site of miraculous healings and spiritual peace visited by pilgrims from around the world."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Đunis, ukazanje Presvete Bogorodice, Milojka Jocić, Pokrov Presvete Bogorodice, sveta Liturgija, isceljenja, sabor, verski turizam Srbija"
              : "Đunis Monastery, apparition of the Holy Virgin, Milojka Jocić, Protection of the Holy Virgin, liturgy, healings, pilgrimage, religious tourism Serbia"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-djunis`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-djunis"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-djunis"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-djunis"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(rasinskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${djunis11} 450w, ${djunis1} `} alt="Manastir Đunis 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Manastir Đunis</h1>

              <section lang="sr">
                <p>
                  U selu <strong>Đunis</strong>, nekoliko kilometara od <strong>Kruševca</strong>, nalazi se
                  manastir <strong>Pokrova Presvete Bogorodice</strong>. Manastir je sagrađen na mestu gde se
                  <em>Presveta Bogorodica</em> javila devojčici <strong>Milojki Jocić</strong> 24. jula 1898.
                  godine. Milojka je tada imala <strong>13 godina</strong> i radila je na polju sa svojim
                  sestrama. Dok je išla po vodu, kod izvora je ugledala <em>Presvetu Bogorodicu</em>, koja joj
                  je rekla da će se na tom mestu isceljivati mnogi bolesnici i da tu treba podići crkvu. Vest o
                  ovom događaju brzo se proširila, pa su mnogi bolesni i nevoljni počeli da dolaze na ovo mesto,
                  gde su pronalazili <strong>isceljenje</strong>. Godine <strong>1934</strong>, po blagoslovu
                  svetog vladike <strong>Nikolaja Velimirovića</strong>, episkopa žičkog, na ovom mestu podignut
                  je drveni hram posvećen <strong>Pokrovu Presvete Bogorodice</strong>.
                </p>
              </section>

              <img srcSet={`${djunis22} 450w, ${djunis2}`} alt="Manastir Đunis 2" />

              <section lang="sr">
                <p>
                  Godine <strong>1977</strong>. započeta je izgradnja velikog hrama, ali je zbog zabrane
                  tadašnjih vlasti radovi obustavljeni <strong>1985</strong>. godine. Izgradnja je
                  nastavljena <strong>1993</strong>. godine, a u potpunosti završena <strong>2001</strong>.
                  godine. Hram je u celosti oslikan freskama, dok su u okviru manastirskog kompleksa podignuti
                  novi konaci i pomoćne zgrade. Godine <strong>1997</strong>. porušena je drvena crkva brvnara, a
                  na njenom mestu izgrađena je nova crkva od čvrstog materijala, koja je osvećena <strong>1998</strong>.
                  godine, na <em>stogodišnjicu ukazanja Presvete Bogorodice</em>.
                </p>
              </section>

              <img srcSet={`${djunis33} 450w, ${djunis3}`} alt="Manastir Đunis 3" />

              <section lang="sr">
                <p>
                  Godine <strong>1964</strong>, odlukom <strong>Svetog Arhijerejskog Sabora Srpske Pravoslavne Crkve</strong>,
                  ova svetinja dobija status manastira kao <em>metoh manastira Svetog Romana</em> u Đunisu. Prvobitno je bio
                  <strong>muški manastir</strong>, a prvi iguman bio je <strong>Kliment</strong>. Godine
                  <strong>1968</strong>, manastir je preobražen u <strong>ženski</strong>. Duhovni staratelj manastira bio je
                  arhimandrit <strong>Kornelije</strong>, a kasnije shiguman <strong>Andrej</strong>. Prva igumanija,
                  <strong>Minodora</strong>, okupila je u ovoj svetinji veliko sestrinstvo.
                </p>
              </section>

              <img srcSet={`${djunis44} 450w, ${djunis4}`} alt="Manastir Đunis 4" />

              <section lang="sr">
                <p>
                  Ikonostas u velikoj crkvi izradila je <strong>ikonopisna škola manastira Žiča</strong>, dok su živopis hrama
                  oslikali umetnici <strong>Antonios Stergiou</strong>, <strong>Slobodan Janićijević</strong> iz Jagodine i
                  profesor <strong>Dragimir Jašović</strong>. Na ploči postavljenoj na hramu zapisano je: <em>„Blagoizvoljenjem
                    Oca, sadejstvom Sina i blagodaću Duha Svetoga sazida se ovaj hram Pokrova Presvete Bogorodice u Đunisu,
                    od 1977. do 1983. godine. Živopisa se ktitorskom zaslugom gospodina Zlatka Marjanovića, zlatara
                    beogradskog, od 1993. do 2000. godine, u vreme episkopa niškog g. g. Irineja, igumanije Minodore sa
                    sestrama i jeromonaha Pavla. Osvećenje obavljeno godine 2001, septembra 16/3.“</em>
                </p>
              </section>

              <img srcSet={`${djunis55} 450w, ${djunis5}`} alt="Manastir Đunis 5" />

              <section lang="sr">
                <p>
                  Na dan <strong>Pokrova Presvete Bogorodice</strong> u manastiru se održava <strong>veliki sabor</strong>,
                  na koji dolazi mnoštvo vernika iz zemlje i inostranstva. Kod izvora se služi <em>akatist Presvetoj
                    Bogorodici</em>, dok se u hramu održava <strong>sveta Liturgija</strong>. U manastiru se svakodnevno
                  događaju <em>čudesna isceljenja</em> bolesnika.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Đunis Monastery</h1>

              <section lang="en">
                <p>
                  In the village of <strong>Đunis</strong>, a few kilometers from <strong>Kruševac</strong>, lies the
                  monastery of the <strong>Protection of the Most Holy Theotokos</strong>. The monastery was built at the
                  place where the <em>Most Holy Theotokos</em> appeared to a girl named <strong>Milojka Jocić</strong> on
                  July 24, 1898. Milojka was <strong>13 years old</strong> at the time and working in the fields with her
                  sisters. While fetching water from a spring, she saw the <em>Holy Mother of God</em>, who told her that
                  many sick people would be healed at that spot and that a church should be built there. News of the
                  event quickly spread, and many sick and suffering people began to visit the place, where they
                  experienced <strong>healing</strong>. In <strong>1934</strong>, with the blessing of Saint Bishop
                  <strong>Nikolaj Velimirović</strong> of Žiča, a wooden church was erected on the site, dedicated to the
                  <strong>Protection of the Most Holy Theotokos</strong>.
                </p>
              </section>

              <img srcSet={`${djunis22} 450w, ${djunis2}`} alt="Đunis Monastery 2" />

              <section lang="en">
                <p>
                  In <strong>1977</strong>, the construction of a large church began, but the work was halted in
                  <strong>1985</strong> due to a ban by the then-authorities. Construction resumed in <strong>1993</strong>
                  and was fully completed in <strong>2001</strong>. The church is entirely decorated with frescoes, and new
                  monastic quarters and auxiliary buildings were added within the monastery complex. In <strong>1997</strong>,
                  the wooden log church was demolished, and a new masonry church was built on the same site. It was
                  consecrated in <strong>1998</strong>, on the <em>centenary of the apparition of the Most Holy Theotokos</em>.
                </p>
              </section>

              <img srcSet={`${djunis33} 450w, ${djunis3}`} alt="Đunis Monastery 3" />

              <section lang="en">
                <p>
                  In <strong>1964</strong>, by the decision of the <strong>Holy Assembly of Bishops of the Serbian Orthodox Church</strong>,
                  this holy site was granted the status of a monastery, as a <em>dependency of the Monastery of Saint Roman</em> in Đunis.
                  It was initially a <strong>male monastery</strong>, and the first abbot was <strong>Kliment</strong>. In
                  <strong>1968</strong>, it was transformed into a <strong>female monastery</strong>. The spiritual caretaker
                  of the monastery was Archimandrite <strong>Kornelije</strong>, later replaced by Schema-abbot <strong>Andrej</strong>.
                  The first abbess, <strong>Minodora</strong>, gathered a large sisterhood in this holy place.
                </p>
              </section>

              <img srcSet={`${djunis44} 450w, ${djunis4}`} alt="Đunis Monastery 4" />

              <section lang="en">
                <p>
                  The iconostasis in the large church was made by the <strong>icon painting school of the Žiča Monastery</strong>,
                  while the frescoes were painted by artists <strong>Antonios Stergiou</strong>, <strong>Slobodan Janićijević</strong>
                  from Jagodina, and Professor <strong>Dragimir Jašović</strong>. A plaque mounted on the church reads:
                  <em>“By the good will of the Father, with the cooperation of the Son and the grace of the Holy Spirit,
                    this church of the Protection of the Most Holy Theotokos in Đunis was built from 1977 to 1983. It was
                    decorated through the patronage of Mr. Zlatko Marjanović, a goldsmith from Belgrade, from 1993 to 2000,
                    during the time of Bishop Irinej of Niš, Abbess Minodora with the sisters, and Hieromonk Pavle.
                    Consecration was performed in the year 2001, September 16/3.”</em>
                </p>
              </section>

              <img srcSet={`${djunis55} 450w, ${djunis5}`} alt="Đunis Monastery 5" />

              <section lang="en">
                <p>
                  On the <strong>Feast of the Protection of the Most Holy Theotokos</strong>, a <strong>great gathering</strong>
                  takes place at the monastery, attended by numerous faithful from the country and abroad. At the spring,
                  an <em>Akathist to the Most Holy Theotokos</em> is served, while a <strong>Divine Liturgy</strong> is held
                  in the church. <em>Miraculous healings</em> of the sick occur daily in the monastery.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ManastirDjunis;