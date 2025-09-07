/* eslint-disable react/no-unknown-property */
import vucjanke1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/desktop/kanjonVucjanke1.jpg";
import vucjanke2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/desktop/kanjonVucjanke2.jpg";
import vucjanke3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/desktop/kanjonVucjanke3.jpg";
import vucjanke4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/desktop/kanjonVucjanke4.jpg";
import vucjanke5 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/desktop/kanjonVucjanke5.jpg";
import vucjanke6 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/desktop/kanjonVucjanke6.jpg";
import vucjanke11 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/mobile/kanjonVucjankeM1.jpg";
import vucjanke22 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/mobile/kanjonVucjankeM2.jpg";
import vucjanke33 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/mobile/kanjonVucjankeM3.jpg";
import vucjanke44 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/mobile/kanjonVucjankeM4.jpg";
import vucjanke55 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/mobile/kanjonVucjankeM5.jpg";
import vucjanke66 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/mobile/kanjonVucjankeM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const KanjonVucjanke = () => {
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

        <title>{switchLanguage === 'rs' ? "Kanjon Vučjanke – Skriveni dragulj juga Srbije | Serbia Wonders" : "Vučjanka Canyon – A Hidden Gem of Southern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Kanjon reke Vučjanke kod Leskovca očarava divljom prirodom, vodopadima i virovima kao što su Đokini virovi. U podnožju planine Kukavice nalazi se i hidroelektrana Vučje iz 1903. godine."
            :
            "The Vučjanka River Canyon near Leskovac features wild nature, waterfalls, and rock pools known as Đokini virovi. Located below Mt. Kukavica, it’s home to the historic Vučje hydroelectric power plant from 1903."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Kanjon Vučjanke, Vučje, Đokini virovi, vodopadi, hidroelektrana Vučje, Leskovac, planina Kukavica, Vučjanka, jug Srbije, prirodne lepote, turizam u Srbiji"
            :
            "Vučjanka Canyon, Vučje, Đokini virovi, waterfalls, Vučje hydroelectric plant, Leskovac, Kukavica Mountain, southern Serbia, nature, tourism in Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/kanjon-vucjanke`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/kanjon-vucjanke"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/kanjon-vucjanke"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/kanjon-vucjanke"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(jablanickiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${vucjanke11} 450w, ${vucjanke1} `} alt="Kanjon Vučjanke 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Kanjon Vučjanke</h2>

              <section lang="sr">
                <p>
                  <strong>Kanjon Vučjanke</strong> deo je doline reke <strong>Vučjanke</strong>, desne pritoke <strong>Veternice</strong>.
                  <em>Vučjanka</em> nastaje spajanjem <strong>Goleme</strong> i <strong>Male reke</strong> kod <strong>Jasičkog ravništa</strong>, na
                  erozivnom proširenju gde se nalazi hotel "<strong>Vlaina</strong>" (<strong>686 m</strong>).
                </p>

                <img srcSet={`${vucjanke22} 450w, ${vucjanke2}`} alt="Kanjon Vučjanke 2" loading="lazy" />

                <p>
                  Kanjon je uscepen u severne padine planine <strong>Kukavica</strong> i nalazi se <strong>18 km</strong> jugozapadno od <strong>Leskovca</strong>.
                  Kanjonski oblik rečna dolina dobija ispod sela <strong>Zbežista</strong> i poteza <strong>Skolica</strong>. Kanjon je dug <strong>2 km</strong>,
                  uscepen između vrhova <strong>Kitka</strong> (<strong>988 m</strong>) i <strong>Samaric</strong> (<strong>619 m</strong>).
                </p>

                <img srcSet={`${vucjanke33} 450w, ${vucjanke3}`} alt="Kanjon Vučjanke 3" loading="lazy" />

                <p>
                  Ulaz u kanjon nalazi se na oko <strong>500 metara n.v.</strong>, a izlaz na oko <strong>340 metara n.v.</strong>. Na jednoj isturenoj litici leve obale kanjona,
                  na <strong>150 m</strong> iznad reke, nalazi se <strong>Zelen Grad</strong>. Na izlazu iz kanjona nalazi se hidroelektrana <strong>Vučje</strong>,
                  izgrađena <strong>1903. godine</strong>.
                </p>

                <img srcSet={`${vucjanke44} 450w, ${vucjanke4}`} alt="Kanjon Vučjanke 4" loading="lazy" />

                <p>
                  Korito u kanjonu puno je <em>„virova”</em>, vodopada i slapova. <em>„Virovi”</em> privlače posebnu pažnju ljudi i zapravo predstavljaju kamene lonce ili kazane.
                  Oni su <em>fluvijalni erozivni oblici</em> koji nastaju na mestima gde dolazi do snažne erozije, vrtložastog kretanja vodene mase i rečnog materijala koji ona nosi.
                  Vremenom se na tim mestima formiraju bućnasta udubljenja u stenovitom rečnom koritu.
                </p>

                <img srcSet={`${vucjanke55} 450w, ${vucjanke5}`} alt="Kanjon Vučjanke 5" loading="lazy" />

                <p>
                  Lonci u kanjonu poznati su pod nazivom <strong>Đokini virovi</strong>. Oni su udubljeni u kristalne škriljce, a poređani su stepenasto, jedni ispod drugih, od najvećeg do najmanjeg.
                  Predstavljaju turističku atrakciju ne samo <strong>Vučja</strong>, već i cele <strong>Leskovačke opštine</strong>.
                </p>

                <img srcSet={`${vucjanke66} 450w, ${vucjanke6}`} alt="Kanjon Vučjanke 6" loading="lazy" />

                <p>
                  Od vodopada izdvaja se:<br /><br />
                  Vodopad bezimenog potoka visine preko <strong>30 metara</strong>, kaskadnog tipa i periodičnog karaktera. Nalazi se <strong>100 metara</strong> iznad hidroelektrane <strong>Vučje</strong>, sa desne strane korita Vučjanke.<br /><br />
                  Vodopad pored hidroelektrane, sa leve strane korita Vučjanke, kaskadnog tipa, visok preko <strong>40 metara</strong> i uvek ima vode.<br /><br />
                  Ostali vodopadi su manjih visina i nalaze se na samoj reci <strong>Vučjanci</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>The Vučjanka Canyon</strong> is part of the valley of the <strong>Vučjanka River</strong>, a right tributary of the <strong>Veternica River</strong>.
                  <em>Vučjanka</em> is formed by the confluence of the <strong>Golema</strong> and <strong>Mala Rivers</strong> near <strong>Jasičko Ravnište</strong>,
                  at an erosional widening where the hotel "<strong>Vlaina</strong>" (<strong>686 m</strong>) is located.
                </p>

                <img srcSet={`${vucjanke22} 450w, ${vucjanke2}`} alt="Vučjanka Canyon 2" />

                <p>
                  The canyon is carved into the northern slopes of <strong>Kukavica Mountain</strong> and is located <strong>18 km</strong> southwest of <strong>Leskovac</strong>.
                  The river valley takes on a canyon shape below the village of <strong>Zbežiste</strong> and the area of <strong>Skolica</strong>. The canyon is <strong>2 km</strong> long,
                  carved between the peaks of <strong>Kitka</strong> (<strong>988 m</strong>) and <strong>Samaric</strong> (<strong>619 m</strong>).
                </p>

                <img srcSet={`${vucjanke33} 450w, ${vucjanke3}`} alt="Vučjanka Canyon 3" />

                <p>
                  The entrance to the canyon is located at about <strong>500 meters above sea level</strong>, and the exit at around <strong>340 meters above sea level</strong>.
                  On a prominent cliff on the left bank of the canyon, <strong>150 m</strong> above the river, lies <strong>Zelen Grad</strong>. At the canyon’s exit is the <strong>Vučje Hydropower Plant</strong>,
                  built in <strong>1903</strong>.
                </p>

                <img srcSet={`${vucjanke44} 450w, ${vucjanke4}`} alt="Vučjanka Canyon 4" />

                <p>
                  The riverbed in the canyon is full of <em>"whirlpools"</em>, waterfalls, and cascades. These <em>"whirlpools"</em> are especially attractive and are actually potholes or cauldrons.
                  They are <em>fluvial erosional formations</em> created in areas of intense erosion, where the swirling motion of the water and carried sediment slowly grind out rounded depressions
                  in the rocky riverbed.
                </p>

                <img srcSet={`${vucjanke55} 450w, ${vucjanke5}`} alt="Vučjanka Canyon 5" />

                <p>
                  The potholes in the canyon are known as <strong>Đoka’s Whirlpools</strong>. They are carved into crystalline schists and are arranged in a step-like sequence from largest to smallest.
                  They are a tourist attraction not only for <strong>Vučje</strong> but for the entire <strong>Leskovac municipality</strong>.
                </p>

                <img srcSet={`${vucjanke66} 450w, ${vucjanke6}`} alt="Vučjanka Canyon 6" />

                <p>
                  Notable waterfalls include:<br /><br />
                  A waterfall on an unnamed stream over <strong>30 meters</strong> high, cascading in type and seasonal in nature. It is located <strong>100 meters</strong> above the <strong>Vučje Hydropower Plant</strong>, on the right side of the Vučjanka riverbed.<br /><br />
                  A waterfall next to the hydropower plant, on the left side of the Vučjanka riverbed, cascading in type, over <strong>40 meters</strong> high, and flows year-round.<br /><br />
                  Other smaller waterfalls are found directly along the <strong>Vučjanka River</strong>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default KanjonVucjanke;