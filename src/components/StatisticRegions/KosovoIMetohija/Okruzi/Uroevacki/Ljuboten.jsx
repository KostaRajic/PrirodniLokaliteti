/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import ljuboten1 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/desktop/ljuboten1.jpg";
import ljuboten2 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/desktop/ljuboten2.jpg";
import ljuboten3 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/desktop/ljuboten3.jpg";
import ljuboten5 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/desktop/ljuboten5.jpg";
import ljuboten11 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/mobile/Mljuboten1.jpg";
import ljuboten22 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/mobile/Mljuboten2.jpg";
import ljuboten33 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/mobile/Mljuboten3.jpg";
import ljuboten55 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Ljuboten/mobile/Mljuboten5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { urosevackiOkrugPathRoutes } from "./UrosevackiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Ljuboten = () => {
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

        <title>{switchLanguage === 'rs' ? "Ljuboten – Vrh Šar planine | Serbia Wonders" : "Ljuboten – Peak of the Šar Mountain | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Ljuboten je jedan od najviših vrhova Šar planine (2.498 m), poznat po prelepim vidicima i bogatoj istoriji. Nalazi se na granici Srbije i Severne Makedonije, sa prirodnim znamenitostima kao što je Ljubotensko jezero."
            :
            "Ljuboten is one of the highest peaks of Šar Mountain (2,498 m), known for stunning views and rich history. Located on the border of Serbia and North Macedonia, with natural attractions like Ljuboten Lake."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Ljuboten, Šar planina, planinarenje, vrhovi Šar planine, Ljubotensko jezero, priroda Srbije, Severna Makedonija, planinski vrhovi"
            :
            "Ljuboten, Šar Mountain, hiking, Šar mountain peaks, Ljuboten Lake, nature in Serbia, North Macedonia, mountain peaks"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/ljuboten`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/ljuboten"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/ljuboten"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/ljuboten"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(urosevackiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${ljuboten11} 450w, ${ljuboten1} `} alt="Ljuboten Šar Planina 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Ljuboten Šar Planina</h2>

              <section lang="sr">
                <p>
                  <strong>Ljuboten</strong> (mkd. Ljuboten, alb. Luboten) je jedan od vrhova na
                  <strong>Šar-planini</strong>, koji se uzdiže na <strong>2.498 metara</strong>. Ovaj vrh čini granicu
                  između Srbije i Severne Makedonije. <strong>Ivan Jastrebov</strong> je zabeležio da je
                  put od sela <strong>Štrpca</strong>, sa samog podnožja planine, do vrha Ljubotena dug oko
                  <strong>pet sati hoda</strong>. Sa strane <strong>Kacanika</strong>, vrh Ljubotena je blago nagnut, dok je
                  sa strane Štrpca izuzetno strm. Do vrha se, u poslednjem delu, mora
                  penjati gotovo na sve četiri.
                </p>

                <img srcSet={`${ljuboten22} 450w, ${ljuboten2}`} alt="Ljuboten Šar Planina 2" loading="lazy" />

                <p>
                  Na vrhu Ljubotena nalazi se ravno područje od oko <strong>4 kvadratna hvata</strong>, sa
                  spektakularnim pogledom u svim pravcima. Sa ovog mesta mogu se videti
                  <strong>Kacanik</strong>, <strong>Skoplje</strong>, ispod <strong>Tefovsko polje</strong>, <strong>Gostivar</strong>, celo <strong>Podrimlje</strong>,
                  <strong>Dečani</strong>, <strong>Peć</strong>, <strong>Đakovica</strong>, <strong>Priština</strong> i <strong>Gnjilane</strong>. Prema Jastrebovu, nema
                  boljeg mesta sa kojeg se može videti čitava <em>Stara Srbija</em>, a Ljuboten je
                  njen centralni deo.
                </p>

                <img srcSet={`${ljuboten33} 450w, ${ljuboten3}`} alt="Ljuboten Šar Planina 3" loading="lazy" />

                <p>
                  <strong>Ljubotensko jezero</strong> se nalazi oko sat vremena hoda od podnožja vrha. Sa
                  južne, zapadne i severne strane je zatvoreno strmim stenama, dok je sa
                  istočne strane otvoreno i pruža pogled sa Ljubotenskog vrha. Jezero nije
                  veliko, a voda je čista i bistra. Iz njega izvire reka <strong>Lepenac</strong>. U
                  podnožju planine, pored Štrpca, nalazi se i selo <strong>Gotovuša</strong>.
                </p>

                <img srcSet={`${ljuboten55} 450w, ${ljuboten5}`} alt="Ljuboten Šar Planina 5" loading="lazy" />

                <p>
                  Na vrhu planine <strong>Jalič</strong> sačuvane su ruševine male kapelice, posvećene
                  <strong>Svetom proroku Iliji</strong>. 20. jula, stanovnici okolnih sela smatraju za
                  sveti običaj da se popnu na vrh i obave molitvu, što je tradicija koja
                  se prenosi sa predaka.
                  <br /><br />
                  Slično tome, <strong>Tadrinci</strong> na <strong>Uspenje</strong> idu na planinu <strong>Drošnju</strong>, dok <strong>Sirničani</strong> i
                  <strong>Kačani</strong> penju na Ljuboten. Na Ljubotenu nisu pronađeni tragovi postojanja
                  molitvenog mesta, dok na Drošnji postoji stari grob, kao i na planini
                  <strong>Paštrik</strong>. Sličan običaj čuvaju i Srbi iz Bara, koji se na praznik <strong>Svete
                    Trojice</strong> penju na vrh <strong>Rumije</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Ljuboten Šar Mountain</h2>

              <section lang="en">
                <p>
                  <strong>Ljuboten</strong> (Mkd. Ljuboten, Alb. Luboten) is one of the peaks of the
                  <strong>Šar Mountains</strong>, rising to <strong>2,498 meters</strong>. This peak marks the border
                  between Serbia and North Macedonia. <strong>Ivan Jastrebov</strong> recorded that the
                  path from the village of <strong>Štrpce</strong>, at the very foot of the mountain, to the summit of Ljuboten takes about
                  <strong>five hours on foot</strong>. From the <strong>Kacanik</strong> side, the Ljuboten peak is gently sloped, while from the Štrpce side it is extremely steep. In the final part, one must climb almost on all fours to reach the top.
                </p>

                <img srcSet={`${ljuboten22} 450w, ${ljuboten2}`} alt="Ljuboten Šar Mountains 2" loading="lazy" />

                <p>
                  At the top of Ljuboten there is a flat area of about <strong>4 square hvats</strong>, with
                  a spectacular view in all directions. From this spot, one can see
                  <strong>Kacanik</strong>, <strong>Skopje</strong>, below the <strong>Tefovo field</strong>, <strong>Gostivar</strong>, the entire <strong>Podrimlje</strong>,
                  <strong>Dečani</strong>, <strong>Peć</strong>, <strong>Đakovica</strong>, <strong>Priština</strong>, and <strong>Gnjilane</strong>. According to Jastrebov, there is
                  no better place from which the whole <em>Old Serbia</em> can be seen, and Ljuboten is
                  its central part.
                </p>

                <img srcSet={`${ljuboten33} 450w, ${ljuboten3}`} alt="Ljuboten Šar Mountains 3" loading="lazy" />

                <p>
                  <strong>Ljuboten Lake</strong> is located about an hour's walk from the foot of the peak. It is
                  surrounded on the south, west, and north sides by steep cliffs, while the
                  eastern side is open and provides a view from the Ljuboten peak. The lake is not
                  large, and the water is clean and clear. The <strong>Lepenac</strong> river originates from it. At
                  the foot of the mountain, near Štrpce, lies the village of <strong>Gotovuša</strong>.
                </p>

                <img srcSet={`${ljuboten55} 450w, ${ljuboten5}`} alt="Ljuboten Šar Mountains 5" loading="lazy" />

                <p>
                  At the top of the <strong>Jalič</strong> mountain lie the ruins of a small chapel dedicated to
                  <strong>Saint Prophet Elijah</strong>. On July 20th, locals from the surrounding villages consider it a
                  sacred custom to climb to the summit and pray, a tradition passed down from their ancestors.
                  <br /><br />
                  Similarly, the <strong>Tadrinci</strong> ascend <strong>Drošnja</strong> mountain on the Assumption, while the <strong>Sirničani</strong> and
                  <strong>Kačani</strong> climb Ljuboten. No traces of a prayer site have been found on Ljuboten, while on Drošnja there is an old grave, as well as on
                  <strong>Paštrik</strong> mountain. A similar custom is kept by Serbs from Bar, who climb to the summit of <strong>Rumija</strong> on the holiday of the <strong>Holy Trinity</strong>.
                </p>
              </section>


            </>
          )}

      </div>

    </>
  );
};


export default Ljuboten;