/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import decani1 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/desktop/manastirDecani1.jpg";
import decani2 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/desktop/manastirDecani2.jpg";
import decani3 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/desktop/manastirDecani3.jpg";
import decani4 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/desktop/manastirDecani4.jpg";
import decani11 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/mobile/MmanastirDecani1.jpg";
import decani22 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/mobile/MmanastirDecani2.jpg";
import decani33 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/mobile/MmanastirDecani3.jpg";
import decani44 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/mobile/MmanastirDecani4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { djakovickiOkrugPathRoutes } from "./DjakovickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirVisokiDecani = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Visoki Dečani – Srednjovekovna svetinja Metohije | Serbia Wonders" : "Visoki Dečani Monastery – Medieval Monastic Heritage of Metohija | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Visoki Dečani, zadužbina kralja Stefana Dečanskog, predstavlja jedan od najvrednijih spomenika srednjovekovne srpske arhitekture i umetnosti. Nalazi se u dolini reke Bistrice u Metohiji."
            :
            "The Visoki Dečani Monastery, endowment of King Stefan Dečanski, is one of the most valuable monuments of medieval Serbian architecture and spirituality, located in the valley of the Bistrica River in Metohija."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Visoki Dečani, Stefan Dečanski, Sveti Sava, Dečani, Metohija, srednjovekovni manastiri, Raški stil, kulturno nasleđe Srbije, pravoslavna crkva, Srpska pravoslavna crkva, Dečanska crkva"
            :
            "Visoki Decani Monastery, Stefan Decanski, Serbian medieval architecture, Orthodox monastery, Metohija, Raska school, UNESCO World Heritage, Serbian Orthodox Church, Serbian heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/manastir-visoki-decani`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/manastir-visoki-decani"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/manastir-visoki-decani"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/manastir-visoki-decani"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(djakovickiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${decani11} 450w, ${decani1} `} alt="Menastir Visoki Dečani 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h2>Manastir Visoki Dečani</h2>

              <section lang="sr">
                <p>
                  <strong>Metohija</strong> je plodna ravnica koja se prostire od podnožja <strong>Prokletija</strong> na severu, sve do <strong>Šare</strong> na jugu i jugoistoku, te <strong>Drenicom</strong> do granica Kosova,
                  duž linije gradova <strong>Peć – Đakovica – Prizren</strong>. Ime je dobila po brojnim
                  "metosima" i "metohijama" – monaškim posedima Srpske svetosavske crkve,
                  na koje je oduvek bila podeljena. Ovi posedi, koje su srednjovekovni
                  srpski vladari darivali Crkvi svog naroda, sastojali su se od
                  starosedečkih srpskih sela sa njihovim žiteljima, oranica, vinograda,
                  kao i planina pokrivenih šumama i vodama metohijskih bistrih reka.
                </p>
              </section>

              <img srcSet={`${decani22} 450w, ${decani2} `} alt="Manastir Visoki Dečani 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Stefan Uroš Treći</strong> je podigao manastir nedaleko od "prvog sela zvanog
                  Detčani (Dedčani)" i nazvao ga Dečanskim, prema obližnjem području koje
                  je tako nazvano ne samo zbog blizine brojnih monaških ćelija u kojima su
                  se, iz generacije u generaciju, podvizavali "dobri dedovi ili starci" –
                  što je izvorno značenje grčke reči "kaluđeri", već i u znak zahvalnosti
                  svom najvoljenijem pretku, pradedu po telu i "dedi" duhovnom,
                  <strong>Svetom Savi</strong>, čijim je molitvama to mesto bilo otkriveno.
                  <br /><br />
                  Epitet <strong>"Visoki"</strong> Dečani su dobili zbog toga što njihova crkva predstavlja
                  najveću i najvišu očuvanu građevinu srednjovekovne Srbije, ali i zbog
                  dragocenih građevinskih materijala od kojih je sagrađena, što je
                  doprinosilo tome da ona "preuzvišenom blagodati sja svima koji je
                  gledaju". Jedan anonimni putopisac iz 15. veka ostavio je zapis da je
                  Stefanova crkva "svaku misao prevazišla lepotom, mermerom i veličinom, i
                  različitim likovima, za što nije dovoljno ni godina da se ispriča, a
                  izgled crkve i svetlost mermera umara oči koje je gledaju, kao neka
                  zvezda Danica koja sja iznutra".
                </p>
              </section>

              <img srcSet={`${decani33} 450w, ${decani3} `} alt="Manastir Visoki Dečani 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Od veličanstvenog prvobitnog arhitektonskog i prostornog koncepta
                  monaške naselbine, osim crkve, sačuvane su dve srednjovekovne građevine –
                  <strong>trpezarija</strong> i delimično očuvana <strong>ulazna kula</strong>, koje su podignute u isto
                  vreme kao i crkva, rukama istih majstora. Od višespratne odbrambene
                  kule, sačuvano je samo prizemlje. Godine <strong>1926.</strong> postavljena je nova
                  krovna konstrukcija, kao i nova metalna vrata, koja su zamenila staru
                  drvenu kapiju. Pretpostavlja se da je ulazna kula, visoka oko 9 metara,
                  imala još najmanje tri sprata i zvonik na vrhu, te da je bila
                  najdominantnija građevina unutar manastirskog utvrđenja.
                  <br /><br />
                  Manastir Dečani je izgrađen prema srednjovekovnom obrascu za formiranje
                  većih monaških naselja: glavno sveto zdanje je <strong>crkva</strong>, smeštena u sredini
                  kružnog prostora, koji je opasan zidom, a ostale zgrade se nalaze u
                  njegovoj blizini.
                </p>
              </section>

              <img srcSet={`${decani44} 450w, ${decani4} `} alt="Manastir Visoki Dečani 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Hram posvećen <strong>Hristu Spasu Svedržitelju</strong>, odnosno <strong>Vaznesenju Gospodnjem</strong>,
                  sagrađen je kao <em>grobna crkva</em> na mestu koje je za "dom Božiji", prema
                  rečima <strong>Svetog Kralja</strong>, odabrao <strong>Sveti Sava</strong>, ali nije uspeo da ga sam
                  izgradi. Pod budnim okom <strong>arhiepiskopa Danila Drugog</strong>, grupa majstora iz
                  <strong>Primorja</strong>, na čelu sa <strong>fra Vitom Trifunovim Čučom</strong>, opatima crkve Svete
                  Marije na Gurdicu, od "Kotora, grada kraljevog", obukla je hram u
                  "evropskiji" izgled spolja, dok ga je iznutra potpuno prilagodila
                  <em>pravoslavnom bogosluženju</em>.
                  <br /><br />
                  Arhitektura katolikon manastira Visoki Dečani spada u <strong>raški stil</strong> i
                  predstavlja spoj višebrodne <em>vaselike</em> (nazvane po starorimskoj
                  "basiliki") i jednobrodne i jednokupolne <em>raške crkve</em>, koja spolja deluje
                  kao trobrodna. Unutrašnjost čini prostoran <strong>brod (naos)</strong> podeljen na pet
                  delova, nadvišen <strong>kupolom</strong> koja se oslanja na četiri masivna stuba (u tom
                  delu crkva je visoka do 29 metara), a na zapadnoj strani nalazi se
                  trobrodna priprata ili tročlano predvorje (<em>narteks</em>), gde je nekada bila
                  <strong>krstionica</strong>. Dečanska crkva je dugačka više od 36 metara, a široka 24
                  metra. <strong>Oltarski prostor</strong> je trodelan, u sredini se nalazi glavni oltar
                  sa <em>Časnom trpezom</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>


              <h2>Monastery of Visoki Dečani</h2>

              <section lang="en">
                <p>
                  <strong>Metohija</strong> is a fertile plain stretching from the foothills of the <strong>Prokletije</strong> mountains in the north, all the way to the <strong>Šar Mountains</strong> in the south and southeast, and along the <strong>Drenica</strong> region to the borders of Kosovo, following the line of cities <strong>Peć – Gjakova – Prizren</strong>. Its name comes from the numerous “metochions” and “metohijas”—monastic estates of the Serbian Orthodox Church—that have long been distributed throughout the region. These estates, granted by medieval Serbian rulers to the Church of their people, consisted of traditional Serbian villages with their inhabitants, arable lands, vineyards, and mountains covered with forests and the clear rivers of Metohija.
                </p>
              </section>

              <img srcSet={`${decani22} 450w, ${decani2} `} alt="Monastery Visoki Dečani 2" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Stefan Uroš III</strong> built the monastery near the "first village called Detčani (Dedčani)" and named it Dečani, after the nearby area, so named not only because of the many monastic cells where “good elders or hermits” lived and practiced asceticism through generations—the original meaning of the Greek word “kaluđeri”—but also as a tribute to his most beloved ancestor, his patriarchal forebear and spiritual “grandfather,” <strong>Saint Sava</strong>, through whose prayers the site was revealed.
                  <br /><br />
                  The epithet <strong>"Visoki"</strong> (“High”) Dečani was given because their church is the largest and tallest preserved medieval Serbian structure, and because of the precious building materials used in its construction, which contribute to its “exalted grace shining on all who behold it.” An anonymous 15th-century travel writer noted that Stefan’s church “surpassed every thought with its beauty, marble, and size, and with varied figures that no years are sufficient to describe; the church’s appearance and the light of its marble weary the eyes that behold it, like the morning star glowing from within.”
                </p>
              </section>

              <img srcSet={`${decani33} 450w, ${decani3} `} alt="Monastery Visoki Dečani 3" loading="lazy" />

              <section lang="en">
                <p>
                  Of the original grand architectural and spatial layout of the monastic community, two medieval structures have been preserved aside from the church—the <strong>refectory</strong> and a partially preserved <strong>entrance tower</strong>, built at the same time as the church by the same master builders. Only the ground floor remains of the multi-story defensive tower. In <strong>1926</strong>, a new roof structure and new metal doors replaced the old wooden gate. It is believed that the entrance tower, approximately 9 meters high, originally had at least three additional floors and a bell tower on top, making it the most dominant structure within the monastery's fortifications.
                  <br /><br />
                  The Dečani Monastery was built according to the medieval model for larger monastic communities: the main sacred building is the <strong>church</strong>, located in the center of a circular enclosure surrounded by a wall, with other structures located nearby.
                </p>
              </section>

              <img srcSet={`${decani44} 450w, ${decani4} `} alt="Monastery Visoki Dečani 4" loading="lazy" />

              <section lang="en">
                <p>
                  The temple, dedicated to <strong>Christ the Saviour Pantocrator</strong>—that is, the <strong>Ascension of the Lord</strong>—was constructed as a <em>funerary church</em> at the location chosen by <strong>Saint Sava</strong> as the “house of God,” according to the words of the Holy King, though he was unable to build it himself. Under the supervision of <strong>Archbishop Danilo II</strong>, a group of craftsmen from the coastal region, led by <strong>Fra Vito Trifunović Čuča</strong>, the abbot of the Church of Saint Mary at Gurdica, from “Kotor, the royal city,” clothed the temple in a more “European” external appearance, while fully adapting its interior to Orthodox worship.
                  <br /><br />
                  The architecture of the main church (katholikon) of Visoki Dečani belongs to the <strong>Raška style</strong> and represents a blend of a multi-nave basilica (named after the ancient Roman “basilica”) with a single-nave, single-dome Raška-style church, appearing externally as a triple-nave structure. Inside, the church features a spacious <strong>nave (naos)</strong> divided into five sections, topped by a <strong>dome</strong> supported by four massive pillars (in that part the church reaches up to 29 meters in height), and on the western side is a three-naved narthex, where a <strong>baptistery</strong> once stood. The Dečani church is over 36 meters long and 24 meters wide. The <strong>altar area</strong> is triple-parted, with the main altar and the <em>Holy Table</em> at the center.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ManastirVisokiDecani;