/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import lelic1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/desktop/manastirLelic1.jpg";
import lelic2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/desktop/manastirLelic2.jpg";
import lelic3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/desktop/manastirLelic3.jpg";
import lelic4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/desktop/manastirLelic4.jpg";
import lelic11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/mobile/MmanastirLelic1.jpg";
import lelic22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/mobile/MmanastirLelic2.jpg";
import lelic33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/mobile/MmanastirLelic3.jpg";
import lelic44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/ManastirLelic/mobile/MmanastirLelic4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirLelic = () => {
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

        <title>{switchLanguage === "rs" ? "Manastir Lelić – Istorijsko mesto kod Valjeva | Serbia Wonders" : "Lelić Monastery – A Historic Site near Valjevo | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === "rs" ?
            "Manastir Lelić u selu Lelić kod Valjeva, zadužbina Vladike Nikolaja. Saznajte više o njegovoj istoriji, prenosu moštiju i duhovnom značaju."
            :
            "Lelic Monastery in the village of Lelic near Valjevo, founded by Bishop Nikolaj. Learn about its history, relic transfer, and spiritual importance."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === "rs" ?
            "Manastir Lelić, Valjevo, Vladika Nikolaj, mošti, pravoslavlje, episkop Lavrentije, muzej episkopa Nikolaja"
            :
            "Lelic Monastery, Valjevo, Bishop Nikolaj, relics, Orthodoxy, Bishop Lavrentije, Bishop Nikolaj museum"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-lelic`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-lelic"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-lelic"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/manastir-lelic"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(kulubarskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${lelic44} 450w, ${lelic4} `} alt="Manastir Lelić 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2 style={{ color: "white" }}>Manastir Lelić</h2>

              <section lang="sr">
                <p>
                  <strong>Manastir Lelić</strong> se nalazi u istoimenom selu, na teritoriji grada <strong>Valjeva</strong>, na oko <strong>11 km</strong> od samog grada. Ovaj manastir je <strong>zadužbina Vladike Nikolaja</strong> i njegovog oca <strong>Dragomira Velimirovića</strong>. Prenosom moštiju <em>svetog vladike Nikolaja</em> iz <em>Amerike</em> u <strong>Lelić</strong>, uz nove verske građevine u porti i oko nje, kao i lep ikonostas i živopis, stvoreni su uslovi za transformaciju crkve u manastir.
                  Ideja o tome potekla je od <strong>Njegovog preosveštenstva Lavrentija</strong>, episkopa šabačko-valjevske eparhije. Pripreme za realizaciju ove ideje trajale su <strong>pet godina</strong>, a najveći izazov bio je <em>nedostatak monaha</em>. Rešenje je pronađeno u formiranju prelaznog karaktera, prema kojem bi <em>bratstvo manastira Kaona</em> preuzelo upravu nad manastirom Lelić. Na taj način, manastir Lelić postaje <strong>metoh manastira Kaone</strong>.
                </p>
              </section>

              <img srcSet={`${lelic22} 450w, ${lelic2} `} alt="Manastir Lelić 2" />

              <section lang="sr">
                <p>
                  Odluka o pretvaranju <strong>parohijskog hrama</strong> u Leliću u manastir doneta je <strong>12. maja 1996. godine</strong>, kada ju je pročitao episkop zvorničkotuzlanski <strong>Vasilije</strong>. Tog dana, Lelić je obeležio dva značajna jubileja: <strong>40 godina od upokojenja vladike Nikolaja</strong> i <strong>pet godina od prenosa njegovih moštiju</strong> iz Amerike u Srbiju. U manastirskom dvorištu održana je svečana <em>sveta liturgija</em>, kojoj je prisustvovalo oko <strong>6.000 vernika</strong>. Bogosluženje je predvodio <strong>Njegova svetost patrijarh srpski gospodin Pavle</strong>, uz učešće brojnih episkopa. Manastirska crkva sagrađena je u stilu koji spaja <em>elemente moravske arhitekture</em> s modernim rešenjima. Ima oblik <strong>krsta s kupolom</strong> iznad centralnog dela hrama, a građena je od <em>kamena, cigle i sige</em>. Ispred crkve nalaze se <strong>veliki zvonik</strong> i <em>crkveni dom</em>.
                </p>
              </section>

              <img srcSet={`${lelic33} 450w, ${lelic3} `} alt="Manastir Lelić 3" />

              <section lang="sr">
                <p>
                  <strong>Živopis crkve</strong> osmišljen je prema zamisli Vladike Nikolaja i odlikuje se <em>jedinstvenim crtežima</em> koji uključuju <strong>bogoslovska tumačenja</strong> samog vladike. Među prikazima <em>biblijskih događaja</em>, posebno se ističe <strong>scena Strašnog Suda</strong>, koja dominira celokupnim živopisom. Ikonostas potiče iz perioda izgradnje crkve. <strong>Mošti Vladike Nikolaja</strong> prenete su <em>12. maja 1992. godine</em> iz manastira Svetog Save u <strong>Libertvilu</strong>, Ilinois, SAD, u crkvu u Leliću. U manastirskoj porti nalazi se i <strong>kapela</strong>, koja je takođe <em>zadužbina episkopa Nikolaja</em>.
                </p>
              </section>

              <img srcSet={`${lelic11} 450w, ${lelic1} `} alt="Manastir Lelić 4" />

              <section lang="sr">
                <p>
                  Godine <strong>1991.</strong> u okviru manastirskog kompleksa otvoren je <strong>muzej posvećen episkopu Nikolaju</strong>, jednom od <em>najistaknutijih umova Srpske pravoslavne crkve</em>. U manastiru su aktivne i <strong>radionice za ikonopis i duborez</strong>. Prvi iguman manastira, nakon njegovog osamostaljenja, bio je <strong>arhimandrit Avakum (Đukanović)</strong> (1932), dugogodišnji brat <strong>manastira Tronoše</strong> i duhovno čedo <em>blaženopočivšeg starca Antonija Tronoškog</em>. Brojni vernici pronalaze <em>utehu i duhovni mir</em> kroz njegove molitve i savete, posebno u prisustvu <strong>moštiju Svetog Vladike Nikolaja Srpskog</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Lelić Monastery</h2>

              <section lang="en">
                <p>
                  <strong>Lelić Monastery</strong> is located in the village of the same name, within the administrative area of the city of <strong>Valjevo</strong>, approximately <strong>11 km</strong> from the city center. This monastery is the <strong>endowment of Bishop Nikolaj</strong> and his father <strong>Dragomir Velimirović</strong>. With the transfer of the <em>relics of Saint Bishop Nikolaj</em> from the <em>United States</em> to <strong>Lelić</strong>, alongside the construction of new religious buildings in and around the monastery grounds, and a beautiful iconostasis and frescoes, the conditions were created for transforming the church into a monastery.
                  The idea originated from <strong>His Grace Bishop Lavrentije</strong>, of the Šabac-Valjevo Diocese. Preparations for this transformation lasted for <strong>five years</strong>, with the <em>lack of monks</em> being the greatest challenge. A solution was found by establishing a transitional administration, in which the <em>brotherhood of Kaona Monastery</em> would take over the governance of Lelić Monastery. In this way, the Lelić Monastery became a <strong>dependency of Kaona Monastery</strong>.
                </p>
              </section>

              <img srcSet={`${lelic22} 450w, ${lelic2} `} alt="Lelić Monastery 2" />

              <section lang="en">
                <p>
                  The decision to transform the <strong>parish church</strong> in Lelić into a monastery was made on <strong>May 12, 1996</strong>, when it was publicly announced by Bishop <strong>Vasilije</strong> of Zvornik and Tuzla. On that day, Lelić commemorated two significant jubilees: <strong>40 years since the repose of Bishop Nikolaj</strong> and <strong>five years since the transfer of his relics</strong> from the USA to Serbia. A solemn <em>Holy Liturgy</em> was held in the monastery courtyard, attended by around <strong>6,000 faithful</strong>. The service was led by <strong>His Holiness Serbian Patriarch Pavle</strong>, with participation from numerous bishops. The monastery church is built in a style that blends <em>elements of Moravian architecture</em> with modern solutions. It has the shape of a <strong>cross with a dome</strong> above the central part of the church, and is constructed from <em>stone, brick, and tufa</em>. In front of the church are a <strong>large bell tower</strong> and a <em>church residence</em>.
                </p>
              </section>

              <img srcSet={`${lelic33} 450w, ${lelic3} `} alt="Lelić Monastery 3" />

              <section lang="en">
                <p>
                  The <strong>church frescoes</strong> were designed according to the vision of Bishop Nikolaj and are characterized by <em>unique illustrations</em> that include <strong>his own theological interpretations</strong>. Among the depictions of <em>Biblical scenes</em>, the <strong>Last Judgment</strong> stands out as a dominant theme. The iconostasis dates back to the time of the church’s construction. The <strong>relics of Bishop Nikolaj</strong> were transferred on <em>May 12, 1992</em> from the Monastery of Saint Sava in <strong>Libertyville</strong>, Illinois, USA, to the church in Lelić. There is also a <strong>chapel</strong> within the monastery grounds, which is another <em>endowment of Bishop Nikolaj</em>.
                </p>
              </section>

              <img srcSet={`${lelic11} 450w, ${lelic1} `} alt="Lelić Monastery 4" />

              <section lang="en">
                <p>
                  In <strong>1991</strong>, a <strong>museum dedicated to Bishop Nikolaj</strong>—one of the <em>greatest minds of the Serbian Orthodox Church</em>—was opened within the monastery complex. The monastery is also home to active <strong>icon painting and woodcarving workshops</strong>. The first abbot of the monastery after it became independent was <strong>Archimandrite Avakum (Đukanović)</strong> (born 1932), a longtime member of the <strong>Tronoša Monastery</strong> and spiritual disciple of the <em>late Elder Antonije of Tronoša</em>. Many believers find <em>comfort and spiritual peace</em> through his prayers and guidance, especially in the presence of the <strong>relics of Saint Bishop Nikolaj of Serbia</strong>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirLelic;