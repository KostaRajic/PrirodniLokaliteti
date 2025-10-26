/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import devic1 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/desktop/manastirDevic1.jpg";
import devic2 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/desktop/manastirDevic2.jpg";
import devic3 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/desktop/manastirDevic3.jpg";
import devic4 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/desktop/manastirDevic4.jpg";
import devic11 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/mobile/MmanastirDevic1.jpg";
import devic22 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/mobile/MmanastirDevic2.jpg";
import devic33 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/mobile/MmanastirDevic3.jpg";
import devic44 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirDevic/mobile/MmanastirDevic4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirDevic = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Devič – Svetište Drenice | Serbia Wonders" : "Devič Monastery – Sanctuary of Drenica | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Devič iz XV veka, zadužbina Joanikija Devičkog i despota Đurđa Brankovića, poznat po isceliteljskim čudima i burnoj istoriji rušenja i obnove."
            :
            "Devič Monastery, built in the 15th century and dedicated by Despot Đurađ Branković, is a Serbian Orthodox shrine known for miraculous healings and the relics of St. Joanikije."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Devič, Joanikije Devički, Đurađ Branković, Vavedenje Presvete Bogorodice, Drenica, Srbica, srpske svetinje, freske, isceljenja, srpski manastiri, konzervacija, balisti"
            :
            "Devič Monastery, Joanikije of Devič, Đurađ Branković, Drenica, Serbian monasteries, Saint Joanikije, Marian Church, frescoes, holy site, healing miracles, destruction, restoration"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manastir-devic`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manastir-devic"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manastir-devic"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manastir-devic"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(mitrovackiOkrugPathRoutes.home(switchLanguage))} style={{ fill: "white" }} />
        <header></header>
        <img srcSet={`${devic11} 450w, ${devic1} `} alt="Crkva Svetog Stefana Manastir Banjska" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Devič</h1>

              <section lang="sr">
                <p>
                  Manastir Devič se nalazi u Drenici, pod glavnim vencom istoimene
                  planine, iznad Marinskog potoka, oko 2 kilometra južno od Srbice.
                  <br />
                  <br />
                  Podignut je početkom <em>XV veka</em>, a prvi ktitor bio je <strong>Joanikije Devički</strong>,
                  svetitelj za kojeg je vezana cela prošlost ove svetiinje.
                </p>
              </section>

              <img srcSet={`${devic22} 450w, ${devic2} `} alt="Manastir Devič 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Na tom mestu je oko <em>1434. godine</em>, u znak zahvalnosti zbog ozdravljenja
                  svoje kćeri – device (po kojoj je manastir i dobio ime), despot <strong>Đurađ
                    Branković</strong> podigao drugu crkvu – crkvu <strong>Vavedenja Presvete Bogorodice</strong>.
                  <br />
                  <br />
                  Manastir je imao četiri hramovne celine koje su se razlikovale po
                  veličini i obliku. Bio je domaćin bogate zbirke rukopisnih i štampanih
                  knjiga (prema nekim podacima, u manastiru je <em>1872. godine</em> bilo više od
                  100 rukopisnih i oko 10 štampanih srpskih knjiga).
                </p>
              </section>

              <img srcSet={`${devic33} 450w, ${devic3} `} alt="Manastir Devič 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Balisti su proleća <em>1941. godine</em> minirali, razorili i spalili crkve i
                  konake manastira. Manastir je srušen do temelja. Tom prilikom uništene
                  su sve manastirske knjige i ikonaostasi, uključujući ikone iz ranijih
                  perioda, ali i one iz <em>III</em> i <em>II veka</em>. Balisti nisu poštedeli nijednu
                  srpsku svetiinju, pa ni one u kojima su se dešavala isceljenja,
                  uključujući i one koje su pripadale albanskom narodu.
                </p>
              </section>

              <img srcSet={`${devic44} 450w, ${devic4} `} alt="Manastir Devič 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Do danas je manastir četiri puta bio srušen do temelja.
                  <br />
                  <br />
                  Tokom izvođenja konzervatorskih radova <em>1966. godine</em> u severnom paraklisu
                  otkrivene su freske iz vremena prvog freskopisanja manastira. Pored lika
                  svetog <strong>Joanikija Devičkog</strong>, obučenog u odelo velikoshimnika i sa očuvanim
                  natpisom u kojem piše da je on „prvi ktitor ovog mesta“, sačuvan je i
                  lik svetog <strong>Akakija</strong>, kao i kompozicije „Svadba u Kani Galilejskoj“ i
                  „Isceljenje raslabljenog“. Takođe, dobro su očuvane slike drugih
                  predstavki.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Devič Monastery</h1>

              <section lang="en">
                <p>
                  Devič Monastery is located in Drenica, beneath the main ridge of the mountain of the same name, above Marinski Creek, about 2 kilometers south of Srbica.
                  <br />
                  <br />
                  It was built at the beginning of the <em>15th century</em>, and its first founder was <strong>Joanikije Devički</strong>,
                  a saint to whom the entire history of this sanctuary is connected.
                </p>
              </section>

              <img srcSet={`${devic22} 450w, ${devic2} `} alt="Devič Monastery 2" loading="lazy" />

              <section lang="en">
                <p>
                  Around <em>1434</em>, at this site, as a token of gratitude for the healing
                  of his daughter – a virgin (after whom the monastery got its name), Despot <strong>Đurađ
                    Branković</strong> built another church – the Church of the <strong>Entry of the Most Holy Theotokos</strong>.
                  <br />
                  <br />
                  The monastery had four temple units that differed in size and shape. It housed a rich collection of handwritten and printed books (according to some data, in the monastery there were more than 100 manuscripts and about 10 printed Serbian books in <em>1872</em>).
                </p>
              </section>

              <img srcSet={`${devic33} 450w, ${devic3} `} alt="Devič Monastery 3" loading="lazy" />

              <section lang="en">
                <p>
                  In the spring of <em>1941</em>, the Ballists mined, destroyed, and burned the churches and monastic buildings. The monastery was demolished to the foundations. On this occasion, all monastery books and iconostases were destroyed, including icons from earlier periods, as well as those from the <em>3rd</em> and <em>2nd centuries</em>. The Ballists spared no Serbian sanctuary, not even those where healings occurred, including those belonging to the Albanian people.
                </p>
              </section>

              <img srcSet={`${devic44} 450w, ${devic4} `} alt="Devič Monastery 4" loading="lazy" />

              <section lang="en">
                <p>
                  To this day, the monastery has been destroyed to its foundations four times.
                  <br />
                  <br />
                  During conservation works in <em>1966</em> in the northern chapel,
                  frescoes from the time of the monastery’s first painting were discovered. Besides the image
                  of Saint <strong>Joanikije Devički</strong>, dressed in the vestments of a great schema monk and with a preserved inscription stating that he was "the first founder of this place," the image of Saint <strong>Akakije</strong> was also preserved, as well as compositions of the "Wedding at Cana of Galilee" and "Healing of the Paralytic." Additionally, other depictions are well preserved.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ManastirDevic;