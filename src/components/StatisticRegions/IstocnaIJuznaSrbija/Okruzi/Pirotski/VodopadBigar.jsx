/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import bigar1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/desktop/vodopadBigar1.jpg";
import bigar2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/desktop/vodopadBigar2.jpg";
import bigar3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/desktop/vodopadBigar3.jpg";
import bigar4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/desktop/vodopadBigar4.jpg";
import bigar11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/mobile/vodopadBigarM1.jpg";
import bigar22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/mobile/vodopadBigarM2.jpg";
import bigar33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/mobile/vodopadBigarM3.jpg";
import bigar44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadBigar/mobile/vodopadBigarM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const VodopadBigar = () => {
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

        <title>{switchLanguage === 'rs' ? "Vodopad Bigar – Dragulj Stare planine | Serbia Wonders" : "Bigar Waterfall – A Jewel of Stara Planina | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Vodopad Bigar na Staroj planini, visok 35 metara, poznat po jedinstvenom kamenu bigru. Otkrijte prirodne lepote kanjona reke Jerme i aktivnosti poput pešačenja, planinarenja i ribolova."
            :
            "Bigar Waterfall on Stara Planina is 35 meters tall and famous for its porous 'bigar' rock. Discover the natural beauty of the Jerma River canyon with hiking, cycling, and fishing opportunities."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Vodopad Bigar, Stara planina, kanjon reke Jerme, Poganovski manastir, planinarenje Stara planina, prirodne atrakcije Srbije, turizam Stara planina"
            :
            "Bigar Waterfall, Stara Planina, Jerma River canyon, Poganovo Monastery, hiking Stara Planina, natural attractions Serbia, tourism Stara Planina"
          }
        />
        < meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-bigar`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-bigar"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-bigar"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-bigar"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pirotskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${bigar11} 450w, ${bigar1} `} alt="Vodopad Bigar 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Vodopad Bigar</h2>

              <section lang='sr'>
                <p> Vodopad <strong>Bigar</strong> smešten je na <em>Staroj planini</em>, otprilike 5 kilometara od sela <strong>Kalna</strong>. Visok je <strong>35 metara</strong> i nalazi se na nadmorskoj visini od <strong>450 metara</strong>. Voda se sliva preko poroznog, rupičastog kamena, <em>bigra</em>, po kojem je vodopad i dobio svoje ime. </p>
              </section>

              <img srcSet={`${bigar44} 450w, ${bigar4} `} alt="Vodopad Bigar 2" loading="lazy" />

              <section lang='sr'>
                <p> Vodopad <strong>Bigar</strong> je pravi <em>dragulj turističke ponude Stare planine</em>. Njegova magična lepota i prirodni šarm privlače mnoge posetioce. <br /> <br /> Ovaj vodopad je prirodna atrakcija <strong>akumulativnog porekla</strong>, koja očarava svojom jedinstvenom lepotom. Njegovi odseci su nastali taloženjem <em>bigra</em>, specifične vrste kamena, po kojem je vodopad i dobio svoje ime. <strong>Bigar</strong> se sastoji od niza manjih odseka koji se nižu poput stepenica, stvarajući zaista spektakularan prizor. </p>
              </section>

              <img srcSet={`${bigar33} 450w, ${bigar3} `} alt="Vodopad Bigar 3" loading="lazy" />

              <section lang='sr'>
                <p> Do <strong>1927. godine</strong>, kanjon reke <strong>Jerme</strong> bio je potpuno izolovan i nepristupačan, sve dok nije došlo do ključnog trenutka kada je kroz ovu divlju klisuru probijena trasa uskog koloseka železnice. Ovaj važan događaj bio je deo plana za obezbeđivanje pristupa rudniku kamena uglja poznatom kao <em>“Rakita”</em>. U šezdesetim godinama 20. veka, rudnik je zatvoren, a sedamdesetih godina izgrađen je asfaltni put, koji je zamenio železničku prugu. <br /> <br /> Izgradnja puta otvorila je vrata prirodnoj lepoti kanjona reke <strong>Jerme</strong>, kao i <strong>Poganovskom manastiru</strong>, koji se nalazi uz samu reku. Zbog teške pristupačnosti kanjona pre 1927. godine, <em>Poganovski manastir</em> je ostao netaknut od mnogih osvajača kroz svoju istoriju. </p>
              </section>

              <img srcSet={`${bigar22} 450w, ${bigar2} `} alt="Vodopad Bigar 4" loading="lazy" />

              <section lang='sr'>
                <p> Kanjon reke <strong>Jerme</strong> pruža širok spektar aktivnosti za posetioce koji žele da istraže ovu prelepu regiju. <em>Pešačenje, planinarenje i vožnja biciklom</em> najpopularniji su izbori među ljubiteljima prirode i avanturizma. Tokom letnjih meseci, reka <strong>Jerma</strong> postaje savršeno mesto za ribolov i kupanje. <br /> <br /> Za one koji žele da se upoznaju sa bogatom istorijom ovog kanjona, postoji mnogo pešačkih staza koje vode kroz značajna istorijska i kulturna mesta. Takođe, organizovane ture omogućavaju posetiocima da se detaljnije upoznaju sa ovom fascinantnom oblasti i njenim kulturnim nasleđem. </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>“Stara Planina” National Park</h2>

              <section lang="en"> <p> The <strong>Bigar Waterfall</strong> is located on <em>Stara Planina</em>, about 5 kilometers from the village of <strong>Kalna</strong>. It is <strong>35 meters</strong> high and situated at an altitude of <strong>450 meters</strong> above sea level. The water flows over porous, pitted rock called <em>bigar</em>, from which the waterfall gets its name. </p> </section>
              <img srcSet={`${bigar44} 450w, ${bigar4}`} alt="Bigar Waterfall 2" loading="lazy" />

              <section lang="en"> <p> The <strong>Bigar Waterfall</strong> is a true <em>gem of the tourist offer of Stara Planina</em>. Its magical beauty and natural charm attract many visitors. <br /><br /> This waterfall is a natural attraction of <strong>accumulative origin</strong>, enchanting with its unique beauty. Its sections were formed by the deposition of <em>bigar</em>, a specific type of rock, which gave the waterfall its name. <strong>Bigar</strong> consists of a series of smaller sections arranged like steps, creating a truly spectacular sight. </p> </section>
              <img srcSet={`${bigar33} 450w, ${bigar3}`} alt="Bigar Waterfall 3" loading="lazy" />

              <section lang="en"> <p> Until <strong>1927</strong>, the canyon of the <strong>Jerma River</strong> was completely isolated and inaccessible, until a key moment when a narrow-gauge railway track was cut through this wild gorge. This important event was part of a plan to provide access to a coal mine known as <em>“Rakita”</em>. In the 1960s, the mine was closed, and in the 1970s an asphalt road was built, replacing the railway. <br /><br /> The construction of the road opened the doors to the natural beauty of the <strong>Jerma River</strong> canyon, as well as the <strong>Poganovo Monastery</strong>, located right along the river. Due to the canyon’s difficult accessibility before 1927, the <em>Poganovo Monastery</em> remained untouched by many invaders throughout its history. </p> </section>
              <img srcSet={`${bigar22} 450w, ${bigar2}`} alt="Bigar Waterfall 4" loading="lazy" />

              <section lang="en"> <p> The canyon of the <strong>Jerma River</strong> offers a wide range of activities for visitors who want to explore this beautiful region. <em>Hiking, mountaineering, and cycling</em> are the most popular choices among nature and adventure lovers. During the summer months, the <strong>Jerma River</strong> becomes a perfect place for fishing and swimming. <br /><br /> For those wishing to learn about the rich history of this canyon, there are many hiking trails leading through significant historical and cultural sites. Additionally, organized tours allow visitors to become better acquainted with this fascinating area and its cultural heritage. </p> </section>

            </>
          )}

      </div >
    </>
  );
};


export default VodopadBigar;