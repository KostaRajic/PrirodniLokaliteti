/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import koporin1 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/desktop/manastirKoporin1.jpg'
import koporin2 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/desktop/manastirKoporin2.jpg'
import koporin3 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/desktop/manastirKoporin3.jpg'
import koporin4 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/desktop/manastirKoporin4.jpg'
import koporin11 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/mobile/manastirKoporinM1.jpg'
import koporin22 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/mobile/manastirKoporinM2.jpg'
import koporin33 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/mobile/manastirKoporinM3.jpg'
import koporin44 from '../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirKoporin/mobile/manastirKoporinM4.jpg'


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { podunavskiOkrugPathRoutes } from './PodunavskiOkrugPathRouts';
import { useContextAuth } from '../../../../../Context'
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react'

const ManastirKoporin = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Koporin – Istorija i Legende Šumadije | Serbia Wonders" : "Koporin Monastery – History and Legends of Šumadija | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Koporin, smešten u dolini istoimene reke kod Velike Plane, poznat po vezama sa despotom Stefanom Lazarevićem i bogatoj istoriji Šumadije. Saznajte više o njegovim legendama i značaju."
            :
            "Koporin Monastery, located in the valley of the Koporin river near Velika Plana, is linked to despot Stefan Lazarević and rich medieval Serbian history. Discover its legends and cultural significance."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Koporin, Stefan Lazarević, Velika Plana, Šumadija, srpski manastiri, srednjovekovni manastiri, prenosa moštiju svetog Stefana"
            :
            "Koporin Monastery, Stefan Lazarević, Velika Plana, Šumadija, Serbian monasteries, medieval monasteries, relics of Saint Stefan"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/manastir-koporin`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/manastir-koporin"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/manastir-koporin"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/manastir-koporin"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(podunavskiOkrugPathRoutes.home(switchLanguage))}

        />
        <header></header>
        <img srcSet={`${koporin11} 450w, ${koporin1} `} alt="Manastir Koporin 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Koporin</h1>

              <section lang="sr">
                <p>
                  <strong>Manastir Koporin</strong> smešten je u dolini istoimene reke, oko 3 km od <em>Velike Plane</em>, u trouglu koji formira put <em>Velika Plana – Smederevska Palanka – Rača</em>. Nalazi se u valovitoj <em>Šumadiji</em>, okružen poljima pšenice i kukuruza, kao i vinogradima i voćnjacima. Istočno teče <em>Koporinska rečica</em>, zapadno se uzdiže <em>Koporinska kosa</em>, severno se prostire dolina <em>reke Jasenice</em>, a južno se nalazi <em>selo Radovanje</em>. U srednjem veku ovuda je prolazio važan put od <em>Beograda</em> do <em>Carigrada</em>, koji je tokom turske vlasti postao opasan zbog pljačkaških odreda.
                </p>
              </section>

              <img srcSet={`${koporin22} 450w, ${koporin2}`} alt="Manastir Koporin 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Tačno vreme izgradnje i ktitor manastira nisu poznati, jer nisu sačuvani primarni izvori kao što su povelje, natpisi ili ktitorske kompozicije. U narodnom predanju se navodi da ga je podigao <strong>despot Stefan Lazarević</strong>. Njegov portret na zidu hrama ukazuje na učešće, ali s obzirom da ne drži model crkve, istraživači smatraju da možda nije bio ktitor već <em>suktitor</em> – neko ko je manastir dovršio ili preuzeo.
                  <br /><br />
                  Na osnovu portreta sa simbolima despotske vlasti (kruna, skiptar, dolama), manastir se datuje između <strong>1402. i 1427. godine</strong>.
                </p>
              </section>

              <img srcSet={`${koporin33} 450w, ${koporin3}`} alt="Manastir Koporin 3" loading="lazy" />

              <section lang="sr">
                <p>
                  O imenu manastira postoji više legendi, koje povezuju naziv sa glagolom <em>kopati</em> ili <em>ukopavati</em>. Neka predanja govore da je podignut na mestu zločina, da se do njega silazilo kao u ukop ili da je delimično bio ukopan u brdo.
                  <br /><br />
                  Ipak, verovatnije je da je ime manastir dobio po <em>Koporinskoj reci</em>. Prema novijim istraživanjima, toponim „<strong>Koporin</strong>“ potiče od reči <em>„kopo“</em> (rudarsko kopanje) i <em>„rin“</em> (aluzija na nemačke rudare sa obala Rajne). Iako su tragovi tog naselja nestali, ime je sačuvano u nazivu manastira.
                </p>
              </section>

              <img srcSet={`${koporin44} 450w, ${koporin4}`} alt="Manastir Koporin 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Istoričarka <strong>Olga Zirojević</strong> pronašla je u turskim defterima da se manastir prvobitno zvao <em>Sveti Arhanđeo</em>. Iako nije jasno kojem arhanđelu je bio posvećen, pretpostavlja se <em>Mihailu</em>, <em>Gavrilu</em> ili obojici.
                  <br /><br />
                  U <strong>19. veku</strong>, manastir je obnovljen i posvećen <strong>svetom arhiđakonu Stefanu</strong>. On se slavi <em>27. decembra</em> i <em>2. avgusta</em> (po novom kalendaru <em>9. januara</em> i <em>15. avgusta</em>). Manastir Koporin proslavlja ovaj drugi datum – praznik Prenosa moštiju svetog Stefana.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Koporin Monastery</h1>

              <section lang="en"> <p> <strong>Koporin Monastery</strong> is located in the valley of the river of the same name, about 3 km from <em>Velika Plana</em>, in the triangle formed by the road <em>Velika Plana – Smederevska Palanka – Rača</em>. It lies in the rolling hills of <em>Šumadija</em>, surrounded by wheat and corn fields, as well as vineyards and orchards. To the east flows the <em>Koporin River</em>, to the west rises the <em>Koporin Hill</em>, to the north stretches the valley of the <em>Jasenica River</em>, and to the south lies the <em>village of Radovanje</em>. In the Middle Ages, an important road from <em>Belgrade</em> to <em>Constantinople</em> passed through this area, which became dangerous during Ottoman rule due to raiding bands. </p> </section>
              <img srcSet={`${koporin22} 450w, ${koporin2}`} alt="Koporin Monastery 2" loading="lazy" />

              <section lang="en"> <p> The exact time of construction and the founder of the monastery are unknown, as primary sources such as charters, inscriptions, or donor portraits have not been preserved. Folk tradition attributes its construction to <strong>Despot Stefan Lazarević</strong>. His portrait on the church wall suggests his involvement, but since he is not depicted holding a model of the church, researchers believe he may not have been the original founder but rather a <em>co-founder</em>—someone who completed or took over the monastery. <br /><br /> Based on the portrait featuring symbols of despot authority (crown, scepter, robe), the monastery is dated between <strong>1402 and 1427</strong>. </p> </section>
              <img srcSet={`${koporin33} 450w, ${koporin3}`} alt="Koporin Monastery 3" loading="lazy" />

              <section lang="en"> <p> There are several legends about the name of the monastery, linking it to the verb <em>to dig</em> or <em>to bury</em>. Some stories claim it was built at the site of a crime, that it was accessed by descending as into a grave, or that it was partially buried in a hill. <br /><br /> However, it is more likely that the monastery was named after the <em>Koporin River</em>. According to recent research, the toponym "<strong>Koporin</strong>" derives from the word <em>"kopo"</em> (mining excavation) and <em>"rin"</em> (an allusion to German miners from the Rhine region). Although traces of that settlement have disappeared, the name has been preserved in the monastery’s title. </p> </section>
              <img srcSet={`${koporin44} 450w, ${koporin4}`} alt="Koporin Monastery 4" loading="lazy" />

              <section lang="en"> <p> Historian <strong>Olga Zirojević</strong> found in Ottoman tax records that the monastery was originally called <em>Saint Archangel</em>. Although it is not clear to which archangel it was dedicated, it is assumed to be <em>Michael</em>, <em>Gabriel</em>, or both. <br /><br /> In the <strong>19th century</strong>, the monastery was restored and dedicated to <strong>Saint Stephen the Archdeacon</strong>. He is commemorated on <em>December 27</em> and <em>August 2</em> (according to the new calendar, <em>January 9</em> and <em>August 15</em>). Koporin Monastery celebrates the latter date—the Feast of the Translation of the Relics of Saint Stephen. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirKoporin;