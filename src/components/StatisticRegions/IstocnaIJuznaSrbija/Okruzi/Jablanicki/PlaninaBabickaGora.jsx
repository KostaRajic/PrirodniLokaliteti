/* eslint-disable react/no-unknown-property */
import babickaGora1 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/desktop/babickaGora1.jpg'
import babickaGora2 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/desktop/babickaGora2.jpg'
import babickaGora3 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/desktop/babickaGora3.jpg'
import babickaGora4 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/desktop/babickaGora4.jpg'
import babickaGora11 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/mobile/babickaGoraM1.jpg'
import babickaGora22 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/mobile/babickaGoraM2.jpg'
import babickaGora33 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/mobile/babickaGoraM3.jpg'
import babickaGora44 from '../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BabickaGora/mobile/babickaGoraM4.jpg'

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from './JablanickiOkrugPathRoutes';
import { useContextAuth } from '../../../../../Context'
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react'

const PlaninaBabickaGora = () => {
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

        <title>{switchLanguage === 'rs' ? "Planina Babička Gora – Pošumljeni vrh juga Srbije | Serbia Wonders" : "Babička Gora Mountain – A Forested Peak of Southern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Babička Gora, severoistočno od Leskovca, jedna je od najlepših planina juga Srbije. Sa najvišim vrhom Kriva Buka (1.059 m), stazama, manastirima i prirodnim lepotama idealna je za planinarenje."
            :
            "Babička Gora, northeast of Leskovac, is a scenic mountain in southern Serbia with its highest peak Kriva Buka (1,059 m). Known for hiking trails, monasteries, and serene forest landscapes."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Babička Gora, Kriva Buka, Leskovac, planinarenje, planine Srbije, Južna Srbija, Zaplanje, Seličevica, priroda, manastiri, vikend naselje, Vavedenje, Sv. Jovan"
            :
            "Babička Gora, Kriva Buka, Leskovac, hiking in Serbia, southern Serbia, mountains, nature, monasteries, Jarsenovo trail, Vavedenje monastery, forest plateau"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/babicka-gora`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/babicka-gora"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/babicka-gora"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/babicka-gora"
        />


      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(jablanickiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${babickaGora11} 450w, ${babickaGora1} `} alt="Planina Babička Gora 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h2>Planina Babička Gora</h2>

              <section lang="sr">
                <p>
                  Severoistočno od <strong>Leskovca</strong> nalazi se <strong>Babička Gora</strong> (najviši vrh <strong>Kriva buka</strong>, <strong>1.059 m</strong>).
                  To je ogromna planina u <strong>jugoistočnoj Srbiji</strong>, između <strong>Južne Morave</strong> na zapadu i <strong>Kutininske reke</strong> na istoku.
                  Na severozapadu se nalazi planina <strong>Seličevica</strong>, a na jugoistoku <strong>Kruševica</strong>. <strong>Berbeška kotlina</strong> odvaja
                  Babičku goru od Seličevice, <strong>Leskovačka kotlina</strong> je na jugozapadu, a <strong>Zaplanjska kotlina</strong> na severoistoku.
                  Izgrađena je od starih <em>metamorfnih stena</em>, <em>škriljaca</em> <strong>prekambrijumske</strong> starosti.
                </p>
              </section>

              <img srcSet={`${babickaGora22} 450w, ${babickaGora2}`} alt="Planina Babička Gora 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Uspon na <strong>Krivu buku</strong> može se započeti iz <strong>Zaplanja</strong>, iz sela <strong>Gornje Dragovlje</strong>.
                  Od puta koji povezuje <strong>Nišku banju</strong>, <strong>Gažin Han</strong>, <strong>Donji Dušnik</strong> i <strong>Svođe</strong> do vrha ima oko <strong>10 km</strong>.
                  Raskrsnica na putu je na nadmorskoj visini od <strong>450 metara</strong>, pa je visinska razlika oko <strong>600 metara</strong>.
                  <em>Staza nije markirana</em> do samog kraja, kada se priključuje markaciji koja vodi do vrha sa druge strane, iz <strong>Leskovačke kotline</strong>.
                </p>
              </section>

              <img srcSet={`${babickaGora33} 450w, ${babickaGora3}`} alt="Planina Babička Gora 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Prva dva kilometra je <em>asfalt</em>, a zatim se prate <em>kolski putevi</em> koji vode uzbrdo u planinu.
                  Putevi prolaze kroz <strong>šumu</strong>, <em>vidikovci</em> su retki, ali planinarima pružaju zadovoljstvo u pogledu na ovu lepu i pošumljenu planinu
                  sa <em>blagim stranama</em> i <em>zaravnjenim vrhom</em>. Tačku vrha na pošumljenom platou nije lako odrediti.
                  Mesto okupljanja planinara pored <strong>stare i krive bukve</strong> koja je označena tablom možda i nije najviša tačka,
                  ali je svakako prihvaćena kao takva.
                </p>
              </section>

              <img srcSet={`${babickaGora44} 450w, ${babickaGora4}`} alt="Planina Babička Gora 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Markirana planinarska staza <strong>Jarsenovo – G. Kupinovica – Kriva Buka</strong> oznake <strong>7-1-2</strong>, duga <strong>13 km</strong>,
                  povezuje selo <strong>Jarsenovo</strong> – kotu <strong>611 m</strong> – manastir <strong>Sv. Jovan</strong> – vikend naselje – zaseok sela <strong>Golema Njiva</strong> –
                  ženski manastir <strong>Vavedenje Presvete Bogorodice</strong> – šumsku kuću i izvor, te vrh <strong>Kriva Buka</strong>.
                </p>
              </section>
            </>
          )
          :
          (
            <>

              <h2>Babička Gora Mountain</h2>

              <section lang="en">
                <p>
                  Northeast of <strong>Leskovac</strong> lies <strong>Babička Gora</strong> (highest peak <strong>Kriva Buka</strong>, <strong>1,059 m</strong>).
                  It is a vast mountain in <strong>southeastern Serbia</strong>, located between the <strong>South Morava River</strong> to the west and the <strong>Kutininska River</strong> to the east.
                  To the northwest lies <strong>Seličevica Mountain</strong>, and to the southeast <strong>Kruševica</strong>. The <strong>Berbeška Basin</strong> separates Babička Gora from Seličevica,
                  while the <strong>Leskovac Basin</strong> is to the southwest and the <strong>Zaplanje Basin</strong> to the northeast.
                  It is composed of ancient <em>metamorphic rocks</em> and <em>schists</em> of <strong>Precambrian</strong> age.
                </p>
              </section>

              <img srcSet={`${babickaGora22} 450w, ${babickaGora2}`} alt="Babička Gora Mountain 2" loading="lazy" />

              <section lang="en">
                <p>
                  The ascent to <strong>Kriva Buka</strong> can begin from <strong>Zaplanje</strong>, in the village of <strong>Gornje Dragovlje</strong>.
                  From the road that connects <strong>Niška Banja</strong>, <strong>Gadžin Han</strong>, <strong>Donji Dušnik</strong>, and <strong>Svođe</strong> to the peak, it's about <strong>10 km</strong>.
                  The crossroads on the road is at an elevation of <strong>450 meters</strong>, so the elevation gain is about <strong>600 meters</strong>.
                  <em>The trail is unmarked</em> until the very end, when it joins a marked path coming from the other side, from the <strong>Leskovac Basin</strong>.
                </p>
              </section>

              <img srcSet={`${babickaGora33} 450w, ${babickaGora3}`} alt="Babička Gora Mountain 3" loading="lazy" />

              <section lang="en">
                <p>
                  The first two kilometers are <em>paved</em>, after which dirt roads lead uphill into the mountain.
                  The roads pass through <strong>forest</strong>, and <em>viewpoints</em> are rare, but they offer hikers satisfaction in the views of this beautiful and forested mountain
                  with <em>gentle slopes</em> and a <em>flat summit</em>. It is not easy to determine the exact summit point on the wooded plateau.
                  The spot where hikers gather near the <strong>old, bent beech tree</strong> marked with a sign might not be the actual highest point,
                  but it is widely accepted as such.
                </p>
              </section>

              <img srcSet={`${babickaGora44} 450w, ${babickaGora4}`} alt="Babička Gora Mountain 4" loading="lazy" />

              <section lang="en">
                <p>
                  The marked hiking trail <strong>Jarsenovo – G. Kupinovica – Kriva Buka</strong>, labeled <strong>7-1-2</strong> and <strong>13 km</strong> long,
                  connects the village of <strong>Jarsenovo</strong> – elevation point <strong>611 m</strong> – <strong>St. Jovan Monastery</strong> – weekend settlement –
                  hamlet of the village <strong>Golema Njiva</strong> – women’s monastery <strong>Presentation of the Holy Mother of God</strong> – forest house and spring,
                  and finally the summit of <strong>Kriva Buka</strong>.
                </p>
              </section>

            </>
          )}

      </div >

    </>
  );
};


export default PlaninaBabickaGora;