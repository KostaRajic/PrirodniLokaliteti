/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import guca1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/desktop/guca1.jpg";
import guca2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/desktop/guca2.jpg";
import guca3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/desktop/guca3.jpg";
import guca4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/desktop/guca4.jpg";
import guca5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/desktop/guca5.jpg";
import guca11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/mobile/Mguca1.jpg";
import guca22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/mobile/Mguca2.jpg";
import guca33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/mobile/Mguca3.jpg";
import guca44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/mobile/Mguca4.jpg";
import guca55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/mobile/Mguca5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Guca = () => {
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
            ? "Guča – Grad trubača i Dragačevski sabor | Serbia Wonders"
            : "Guča – Trumpet City and Dragačevo Trumpet Festival | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Guča, urbano naselje u opštini Lučani, poznata je po tradicionalnom Dragačevskom saboru trubača koji svake godine okuplja desetine hiljada posetilaca. Sa bogatom istorijom od 1476. godine, Guča je centar srpske trubačke kulture i domaćin prestižnog muzičkog festivala."
              : "Guča, an urban settlement in the Lučani municipality, is famous for the traditional Dragačevo Trumpet Festival, attracting tens of thousands of visitors annually. With a rich history dating back to 1476, Guča is the center of Serbian trumpet culture and home to a prestigious music festival."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Guča, Dragačevski sabor, trubači, opština Lučani, Moravički okrug, festival trube, srpska muzika, istorija Guče, crkva Svetog Arhangela Gavrila"
              : "Guča, Dragačevo Trumpet Festival, trumpet players, Lučani municipality, Moravica district, trumpet festival, Serbian music, Guča history, Church of St. Archangel Gabriel"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/guca`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/guca"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/guca"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/guca"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${guca11} 450w, ${guca1} `} alt="Guča" />

        <h1>Guča</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Guča</strong> je <strong>gradsko naselje</strong> u <strong>opštini Lučani</strong>, u <em>Moravičkom okrugu</em>, u <strong>Srbiji</strong>.
                  Prema <em>popisu iz 2022. godine</em>, ima <strong>1.491 stanovnika</strong>. U Guči se nalazi
                  <strong>Lapidarium</strong>, a svake godine se tradicionalno održava <strong>Dragačevski sabor trubača</strong>.
                </p>
              </section>

              <img srcSet={`${guca33} 450w, ${guca3}`} alt="Guča 2" />

              <section lang="sr">
                <p>
                  Guča se prvi put pominje u <em>turskom katastarskom popisu</em> iz <strong>1476. godine</strong>.
                  Upravom <strong>kralja</strong>, 2. avgusta <strong>1893. godine</strong>, naselje je dobilo status <strong>varoši</strong>.
                  Guča je, kao <em>centar zajednice naselja</em> i <em>subopštinski centar</em> opštine Lučani, starije urbano naselje od samih Lučana.
                  Bila je <strong>opštinsko</strong>, a zatim i <strong>sresko sedište</strong> do <strong>1955. godine</strong>, nakon čega je
                  postala opštinsko sedište do <strong>1962. godine</strong>, kada je ukinuta <strong>opština Guča</strong>,
                  a formirana <em>opština Lučani</em> sa sedištem u Lučanima. <strong>Crkvu Svetog Arhangela Gavrila</strong> podigli su
                  <em>meštani</em> <strong>1832. godine</strong> uz značajnu pomoć <strong>kneza Miloša Obrenovića</strong>.
                </p>
              </section>

              <img srcSet={`${guca22} 450w, ${guca2}`} alt="Guča 3" />

              <section lang="sr">
                <p>
                  <strong>Dragačevski sabor</strong> je <em>godišnji festival trubača</em> koji se održava u <strong>Guči</strong>, u
                  regionu <em>Dragačevo</em>. Svake godine, nekoliko stotina hiljada posetilaca iz <strong>Srbije</strong> i <em>inostranstva</em> dolazi
                  u ovo naselje sa svega nekoliko hiljada stanovnika. Rekordan broj posetilaca zabeležen je <strong>2009. godine</strong>,
                  na <strong>49. saboru</strong>, koji je, prema podacima, okupio više od <strong>600.000 ljudi</strong>.
                  O ovom festivalu snimljeno je nekoliko <em>dokumentarnih filmova</em>.
                </p>
              </section>

              <img srcSet={`${guca44} 450w, ${guca4}`} alt="Guča 4" />

              <section lang="sr">
                <p>
                  Prvi <strong>Dragačevski sabor</strong> u Guči započeo je skromno, sredinom <em>oktobra 1961. godine</em>,
                  kada su učestvovala samo <strong>četiri orkestra</strong>. Idejni tvorac festivala bio je dugogodišnji novinar <strong>Duge</strong>,
                  <strong>Blagoje "Blaža" Radivojević</strong>. Veliki doprinos osmišljavanju ove manifestacije dao je <strong>pisac Branko V. Radičević</strong>,
                  koji je festivalu dao ime: <em>Veliki (narodni) sabor "Sa Ovčara i Kablara"</em>.
                </p>
              </section>

              <img srcSet={`${guca55} 450w, ${guca5}`} alt="Guča 5" />

              <section lang="sr">
                <p>
                  Za festival su zaslužni i <em>muzički entuzijasti</em> poput <strong>Miodraga Vasiljevića</strong>,
                  <strong>Dragoljuba Jovaševića</strong>, <strong>Dragoslava Devića</strong>, <strong>Živojina Zdravkovića</strong>, <strong>Borivoja Ilića</strong>,
                  <strong>Budimira Gajića</strong>, vojnog muzičara <strong>Milomira Miletića</strong> iz Tijanija, kao i dva Dragačevca:
                  <strong>Vlastimira "Lalu" Vujovića</strong> i <strong>Nikolu "Niku" Stojića</strong>. Na nagovor <strong>Branka V. Radičevića</strong>,
                  u popularizaciji <em>srpske trube</em> uključio se i list <strong>"Večernje novosti"</strong>, koji je godinama
                  dodeljivao nagradu <strong>"Zlatna truba"</strong> najpopularnijem trubaču na Saboru.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Guča</strong> is an <strong>urban settlement</strong> in the <strong>municipality of Lučani</strong>, in the <em>Moravica District</em> of <strong>Serbia</strong>.
                  According to the <em>2022 census</em>, it has a population of <strong>1,491 inhabitants</strong>. Guča is home to the
                  <strong>Lapidarium</strong>, and each year it traditionally hosts the <strong>Dragačevo Trumpet Festival</strong>.
                </p>
              </section>

              <img srcSet={`${guca33} 450w, ${guca3}`} alt="Guča 2" />

              <section lang="en">
                <p>
                  Guča was first mentioned in a <em>Turkish cadastral census</em> from <strong>1476</strong>.
                  By a royal decree, on August 2<sup>nd</sup>, <strong>1893</strong>, the settlement was granted the status of a <strong>town</strong>.
                  Guča, as a <em>local community center</em> and <em>sub-municipal center</em> of the Lučani municipality, is an older urban settlement than Lučani itself.
                  It served as a <strong>municipal</strong> and later a <strong>district center</strong> until <strong>1955</strong>, after which
                  it remained a municipal seat until <strong>1962</strong>, when the <strong>municipality of Guča</strong> was dissolved
                  and the <em>municipality of Lučani</em> was formed with its seat in Lučani. The <strong>Church of the Holy Archangel Gabriel</strong> was built
                  by <em>local residents</em> in <strong>1832</strong>, with significant help from <strong>Prince Miloš Obrenović</strong>.
                </p>
              </section>

              <img srcSet={`${guca22} 450w, ${guca2}`} alt="Guča 3" />

              <section lang="en">
                <p>
                  The <strong>Dragačevo Trumpet Festival</strong> is an <em>annual trumpet event</em> held in <strong>Guča</strong>, in the
                  <em>Dragačevo</em> region. Each year, several hundred thousand visitors from <strong>Serbia</strong> and <em>abroad</em> come
                  to this small town of just a few thousand inhabitants. A record number of visitors was recorded in <strong>2009</strong>,
                  during the <strong>49th festival</strong>, which reportedly gathered more than <strong>600,000 people</strong>.
                  Several <em>documentary films</em> have been made about the festival.
                </p>
              </section>

              <img srcSet={`${guca44} 450w, ${guca4}`} alt="Guča 4" />

              <section lang="en">
                <p>
                  The first <strong>Dragačevo Trumpet Festival</strong> in Guča began modestly in <em>October 1961</em>,
                  with only <strong>four orchestras</strong> participating. The festival’s founder was <strong>Blagoje "Blaža" Radivojević</strong>,
                  a longtime journalist of the magazine <strong>Duga</strong>. A major contribution to the event’s concept came from <strong>writer Branko V. Radičević</strong>,
                  who named the festival: <em>The Great (Folk) Gathering "From Ovčar and Kablar"</em>.
                </p>
              </section>

              <img srcSet={`${guca55} 450w, ${guca5}`} alt="Guča 5" />

              <section lang="en">
                <p>
                  Credit for the festival’s development also goes to <em>music enthusiasts</em> such as <strong>Miodrag Vasiljević</strong>,
                  <strong>Dragoljub Jovašević</strong>, <strong>Dragoslav Dević</strong>, <strong>Živojin Zdravković</strong>, <strong>Borivoje Ilić</strong>,
                  <strong>Budimir Gajić</strong>, military musician <strong>Milomir Miletić</strong> from Tijanje, as well as two locals from Dragačevo:
                  <strong>Vlastimir "Lala" Vujović</strong> and <strong>Nikola "Nika" Stojić</strong>. At the suggestion of <strong>Branko V. Radičević</strong>,
                  the newspaper <strong>"Večernje novosti"</strong> joined the effort to popularize <em>Serbian trumpet music</em>, and for years
                  awarded the <strong>"Golden Trumpet"</strong> to the most popular trumpet player at the festival.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Guca;