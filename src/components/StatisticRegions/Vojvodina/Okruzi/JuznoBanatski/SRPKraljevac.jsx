/* eslint-disable react/no-unknown-property */
import kraljevac1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/desktop/kraljevac2.jpg";
import kraljevac2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/desktop/kraljevac3.jpg";
import kraljevac3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/desktop/kraljevac4.jpg";
import kraljevac4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/desktop/kraljevac5.jpg";
import kraljevac11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/mobile/Mkraljevac2.jpg";
import kraljevac22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/mobile/Mkraljevac3.jpg";
import kraljevac33 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/mobile/Mkraljevac4.jpg";
import kraljevac44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/mobile/Mkraljevac5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SRPKraljevac = () => {
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
            ? 'Specijalni Rezervat Prirode Kraljevac | Plutajuća Ostrva i Divlja Lepota Deliblatske Peščare'
            : 'Kraljevac Nature Reserve | Floating Islands & Untamed Beauty of Deliblato Sands'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Istražite Specijalni rezervat prirode Kraljevac – jezero sa plutajućim ostrvima, bogatom florom i faunom, idealno za posmatranje ptica, ribolov i istraživanje. Nalazi se na rubu Deliblatske peščare, u blizini sela Deliblato.'
              : 'Discover the Kraljevac Special Nature Reserve – a lake with floating islands, rich biodiversity, and ideal conditions for birdwatching, fishing, and exploration. Located on the edge of the Deliblato Sands near the village of Deliblato.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Kraljevac, Deliblatska peščara, prirodni rezervat, jezero Kraljevac, plutajuća ostrva, ptice močvarice, ribolov, fotografisanje prirode, steppe fauna, Deliblato, zaštićene vrste, turizam u Vojvodini'
              : 'Kraljevac, Deliblato Sands, nature reserve, Lake Kraljevac, floating islands, wetland birds, fishing, wildlife photography, steppe mammals, Deliblato, protected species, Vojvodina tourism'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/srp-kraljevac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/srp-kraljevac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/srp-kraljevac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/srp-kraljevac"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(juznoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${kraljevac11} 450w, ${kraljevac1} `} alt="Bela Crkva 1" />

        {switchLanguage === 'rs' ?
          (

            <>

              <h2>Specijlani Rezervat Prirode "Kraljevac"</h2>

              <section lang="sr">
                <p>
                  Specijalni rezervoar prirode <strong>„Kraljevac”</strong> smešten je u srcu <em>vojvođanske ravnice</em>, na rubu <strong>Deliblatske peščare</strong>, u slikovitom selu <strong>Deliblato</strong>, koje deluje kao oaza mira i tišine.
                </p>
                <p>
                  Jezero <strong>„Kraljevac”</strong> nastalo je usled delovanja vetra, formirajući lesnu terasu u koju su urezane prostrane doline izvora <em>Spasovina</em>, <em>Obzovik</em>, <em>Mramoračka reka</em> i <em>Kraljevac</em>, nastale usled rečne erozije.
                </p>
                <p>
                  Godine <strong>1983.</strong>, podizanjem nasipa i prelazne brane, ova rečica je pretvorena u jezero. Podizanjem nivoa vode došlo je do poplave okolnih ritnih šuma i obradivih površina, a odvajanje treseta sa dna jezera dovelo je do formiranja plutajućih i stalnih ostrva.
                </p>
                <p>
                  Najveće plutajuće ostrvo ima površinu od oko <strong>2 hektara</strong>.
                </p>
              </section>

              <img srcSet={`${kraljevac22} 450w, ${kraljevac2} `} alt="Bela Crkva 2" />

              <section lang="sr">
                <p>
                  Odlukom <strong>Vlade Republike Srbije</strong>, 2009. godine, Specijalni rezervoar prirode <strong>„Kraljevac”</strong> stavljen je pod zaštitu države kao prirodno dobro od izuzetnog značaja prve kategorije, sa ukupnom površinom od oko <strong>264 hektara</strong>.
                </p>
                <p>
                  Jezero <strong>Kraljevac</strong>, sa svojim plutajućim ostrvima, okruženo tršćacima, šumama, livadama i pašnjacima, bogato je i raznovrsno u pogledu flore i faune.
                </p>
                <p>
                  Ovaj specijalni rezervoar prirode je područje izuzetne prirodne lepote, jer plutajuća ostrva, koja se pomeraju pod uticajem jakog vetra, stalno menjaju izgled okruženja i pejzaža.
                </p>
              </section>

              <img srcSet={`${kraljevac33} 450w, ${kraljevac3} `} alt="Bela Crkva 3" />

              <section lang="sr">
                <p>
                  Među biljnim vrstama koje nastanjuju ovo područje nalazi se <strong>barska paprat</strong>, koja potiče iz ledenog doba, kao i <strong>močvarna iva</strong>.
                </p>
                <p>
                  Plutajuća i stalna ostrva, sa vodenim oknima i podzemnim izvorima koji ne zmrzavaju ni tokom najhladnijih zima, predstavljaju važno stanište za oko <strong>25 vrsta riba</strong>, među kojima se izdvajaju <strong>mrgud</strong>, <strong>linjak</strong>, <strong>barski karaš</strong> i <strong>čikov</strong>, kao i ugrožena vrsta <strong>umbra</strong>.
                </p>
                <p>
                  U čistoj i mirnoj vodi jezera često se mogu uočiti i <strong>vidre</strong>. Rezervat je takođe značajno gnezdište retkih vrsta ptica močvarica, sa oko <strong>70 vrsta</strong>, među kojima se posebno izdvaja <strong>mračna i žuta čaplja</strong>, <strong>gak</strong>, <strong>čapljić</strong>, <strong>eja močvarica</strong>, kao i globalno ugrožena <strong>patka njorka</strong>.
                </p>
                <p>
                  Jezero <strong>Kraljevac</strong> je idealno mesto za gnežđenje velikih kolonija <strong>pčelariča</strong>, a u njemu se može pronaći i oko <strong>20 vrsta dnevnih leptira</strong>.
                </p>
              </section>

              <img srcSet={`${kraljevac44} 450w, ${kraljevac4} `} alt="Bela Crkva 4" />

              <section lang="sr">
                <p>
                  Obližnji pašnjaci predstavljaju jedno od poslednjih utočišta ugroženih vrsta <strong>steppskih glodara</strong>, poput <strong>tekuniče</strong> i <strong>slepog kučeta</strong>, u Srbiji.
                </p>
                <p>
                  Rezervat nudi posetiocima izvanredne mogućnosti za <strong>sportski ribolov</strong>, <strong>pešačenje</strong>, <strong>posmatranje ptica</strong> i <strong>fotografisanje prirode</strong>.
                </p>
                <p>
                  Takođe, rezervat je jedinstven <strong>naučni poligon</strong> i <strong>učionica na otvorenom</strong> za đake, studente i istraživače.
                </p>
              </section>


            </>


          )
          :
          (
            <><h2>Special Nature Reserve "Kraljevac"</h2>

              <section lang="en">
                <p>
                  The special nature reservoir <strong>"Kraljevac"</strong> is located in the heart of the <em>Vojvodina plain</em>, on the edge of the <strong>Deliblato Sands</strong>, in the picturesque village of <strong>Deliblato</strong>, which feels like an oasis of peace and quiet.
                </p>
                <p>
                  The lake <strong>"Kraljevac"</strong> was formed by the action of the wind, creating a loess terrace into which the spacious valleys of the springs <em>Spasovina</em>, <em>Obzovik</em>, <em>Mramoračka River</em>, and <em>Kraljevac</em> were carved, formed by river erosion.
                </p>
                <p>
                  In <strong>1983</strong>, by building embankments and a temporary dam, this stream was transformed into a lake. Raising the water level caused flooding of the surrounding marsh forests and arable land, and the separation of peat from the lake bottom led to the formation of floating and permanent islands.
                </p>
                <p>
                  The largest floating island covers an area of about <strong>2 hectares</strong>.
                </p>
              </section>

              <img srcSet={`${kraljevac22} 450w, ${kraljevac2} `} alt="Bela Crkva 2" />

              <section lang="en">
                <p>
                  By decision of the <strong>Government of the Republic of Serbia</strong> in 2009, the special nature reservoir <strong>"Kraljevac"</strong> was placed under state protection as a natural asset of exceptional importance, first category, covering a total area of about <strong>264 hectares</strong>.
                </p>
                <p>
                  Lake <strong>Kraljevac</strong>, with its floating islands, surrounded by reeds, forests, meadows, and pastures, is rich and diverse in terms of flora and fauna.
                </p>
                <p>
                  This special nature reservoir is an area of exceptional natural beauty, as the floating islands, which move under the influence of strong winds, constantly change the appearance of the surroundings and landscape.
                </p>
              </section><img srcSet={`${kraljevac33} 450w, ${kraljevac3} `} alt="Bela Crkva 3" /><section lang="en">
                <p>
                  Among the plant species inhabiting this area is the <strong>marsh fern</strong>, originating from the Ice Age, as well as the <strong>swamp willow</strong>.
                </p>
                <p>
                  Floating and permanent islands, with water eyes and underground springs that do not freeze even during the coldest winters, represent an important habitat for about <strong>25 species of fish</strong>, among which the <strong>mrgud</strong>, <strong>linjak</strong>, <strong>barski karaš</strong>, and <strong>čikov</strong> stand out, as well as the endangered species <strong>umbra</strong>.
                </p>
                <p>
                  In the clean and calm water of the lake, <strong>otters</strong> can often be seen. The reserve is also an important nesting site for rare species of marsh birds, with about <strong>70 species</strong>, among which the <strong>black and yellow heron</strong>, <strong>gak</strong>, <strong>little bittern</strong>, <strong>marsh harrier</strong>, as well as the globally endangered <strong>ferruginous duck</strong> stand out.
                </p>
                <p>
                  Lake <strong>Kraljevac</strong> is an ideal place for nesting large colonies of <strong>bee-eaters</strong>, and about <strong>20 species of daytime butterflies</strong> can also be found here.
                </p>
              </section>

              <img srcSet={`${kraljevac44} 450w, ${kraljevac4} `} alt="Bela Crkva 4" />

              <section lang="en">
                <p>
                  Nearby pastures represent one of the last refuges of endangered species of <strong>steppe rodents</strong>, such as the <strong>tekuniča</strong> and <strong>blind mole rat</strong> in Serbia.
                </p>
                <p>
                  The reserve offers visitors excellent opportunities for <strong>sport fishing</strong>, <strong>hiking</strong>, <strong>bird watching</strong>, and <strong>nature photography</strong>.
                </p>
                <p>
                  It is also a unique <strong>scientific field site</strong> and <strong>outdoor classroom</strong> for pupils, students, and researchers.
                </p>
              </section></>

          )}

      </div>
    </>
  );
};


export default SRPKraljevac;