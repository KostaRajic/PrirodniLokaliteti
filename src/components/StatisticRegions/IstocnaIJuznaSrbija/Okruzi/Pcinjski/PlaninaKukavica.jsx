/* eslint-disable react/no-unknown-property */
import kukavica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/desktop/planinaKukavica1.jpg";
import kukavica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/desktop/planinaKukavica2.jpg";
import kukavica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/desktop/planinaKukavica3.jpg";
import kukavica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/desktop/planinaKukavica4.jpg";
import kukavica5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/desktop/planinaKukavica5.jpg";
import kukavica11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/mobile/planinaKukavicaM1.jpg";
import kukavica22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/mobile/planinaKukavicaM2.jpg";
import kukavica33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/mobile/planinaKukavicaM3.jpg";
import kukavica44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/mobile/planinaKukavicaM4.jpg";
import kukavica55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/mobile/planinaKukavicaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaKukavica = () => {
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

        <title>{switchLanguage === 'rs' ? "Kukavica – Planina mira i netaknute prirode | Serbia Wonders" : "Kukavica – The Mountain of Peace and Untouched Nature | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Planina Kukavica u južnoj Srbiji pruža bogatstvo flore i faune, netaknute šume, čiste izvore i arheološko blago. Idealna destinacija za planinarenje i istraživanje prirode."
            :
            "Mount Kukavica in southern Serbia offers rich flora and fauna, untouched forests, fresh water springs, and archaeological heritage. A perfect destination for hiking and nature exploration."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Kukavica, planina u Srbiji, južna Srbija, Vladičin Han, Vranje, Leskovac, priroda, zlatna bukva, Skobajić grad, planinarenje, ekoturizam, biljni i životinjski svet, turistički potencijal"
            :
            "Kukavica, mountain in Serbia, southern Serbia, Vladičin Han, Vranje, Leskovac, nature, golden beech, Skobajić grad, hiking, ecotourism, biodiversity, tourism potential"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-kukavica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-kukavica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-kukavica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-kukavica"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${kukavica11} 450w, ${kukavica1} `} alt="Planina Kukavica 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Planina Kukavica</h2>

              <section lang="sr">
                <p>
                  Planina <strong>Kukavica</strong> je jedna od planina naše zemlje čije prirodne lepote i
                  blagodeti još uvek nisu potpuno istražene. Ona skriva mnoge tajne i
                  lepote, što joj daje dodatnu čar i notu misterije. <strong>Kukavica</strong> je oaza mira
                  i opuštanja. Planina koja tek treba da doživi pravi procvat.
                </p>
              </section>

              <img srcSet={`${kukavica22} 450w, ${kukavica2}`} alt="Planina Kukavica 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Prostrla se na teritoriji <strong>Vladičinog Hana</strong>, <strong>Leskovca</strong> i <strong>Vranja</strong>, između
                  <strong>Vranjske</strong> i <strong>Leskovačke kotline</strong>, <strong>Grdeličke klisure</strong> i doline reke
                  <strong>Veternice</strong>. Najviši vrh, <strong>Vlajna</strong> (<em>1.441 m</em>), nalazi se na teritoriji
                  opštine <strong>Vladičin Han</strong>. Tu je smeštena najvažnija meteorološka stanica za
                  jug Srbije. Na južnom delu planine uzdižu se dva vrha, <strong>Oblik</strong> (<em>1.310 m</em>) i
                  <strong>Grot</strong> (<em>1.327 m</em>), paleo-volkanske kupe koje se zbog svojih pravilnih,
                  kupastih oblika ponekad smatraju zasebnim planinama.
                </p>
              </section>

              <img srcSet={`${kukavica33} 450w, ${kukavica3}`} alt="Planina Kukavica 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Kukavica</strong> je prekrivena gustim šumama, pretežno bukovim i hrastovim, dok
                  je četinarska šuma zastupljena u manjoj meri. Najpoznatija je zlatna
                  bukva, koja je deo istoimenog prirodnog rezervata i smatra se jednim od
                  najkvalitetnijih drveta ove vrste u Srbiji. Bogatstvo flore ove planine
                  upotpunjuju i druge biljne vrste, poput divlje maline, kupine, pečurki,
                  lekovitog i začinskog bilja.
                </p>
              </section>

              <img srcSet={`${kukavica44} 450w, ${kukavica4}`} alt="Planina Kukavica 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Ništa manje bogat nije ni životinjski svet. <strong>Kukavica</strong> je stanište brojnih
                  životinjskih vrsta, među kojima se posebno izdvaja divlja svinja,
                  lisica, srna i vuk od krupne divljači, dok su od sitne divljači prisutni
                  fazan, divlji golub, zec, veverica i jazavac. Kao skladan ekosistem
                  brojnih flora i faune, sa vodotokovima među kojima se izdvaja više od 50
                  izvora pitke vode, <strong>Kukavica</strong> predstavlja jedan od najvažnijih turističkih
                  potencijala opštine <strong>Han</strong>.
                </p>
              </section>

              <img srcSet={`${kukavica55} 450w, ${kukavica5}`} alt="Planina Kukavica 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Na obroncima <strong>Kukavice</strong>, iznad kanjona <strong>Vučjanske reke</strong>, na <em>550 metara</em>
                  nadmorske visine, nalazi se arheološki lokalitet i kulturno dobro –
                  utvrđenje <strong>Skobajić grad</strong>.
                  <br /><br />
                  Na ovoj planini postoje i dva smeštajna objekta: Lovački dom „<strong>Kukavica</strong>“,
                  u vlasništvu JP „<strong>Srbijašume</strong>“, Šumsko gazdinstvo Vranje, i Planinarski
                  dom „<strong>Preka voda</strong>“, pod ingerencijom PSk „<strong>Kukavica</strong>“ Leskovac.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Kukavica Mountain</h2>

              <section lang="en">
                <p>
                  <strong>Kukavica</strong> Mountain is one of the mountains in our country whose natural beauties and blessings are still not fully explored. It hides many secrets and charms, which gives it an additional magic and a touch of mystery. <strong>Kukavica</strong> is an oasis of peace and relaxation. A mountain that is yet to experience its true bloom.
                </p>
              </section>

              <img srcSet={`${kukavica22} 450w, ${kukavica2}`} alt="Kukavica Mountain 2" loading="lazy" />

              <section lang="en">
                <p>
                  It stretches across the territory of <strong>Vladičin Han</strong>, <strong>Leskovac</strong>, and <strong>Vranje</strong>, between the <strong>Vranje</strong> and <strong>Leskovac basins</strong>, the <strong>Grdelica Gorge</strong>, and the valley of the <strong>Veternica River</strong>. The highest peak, <strong>Vlajna</strong> (<em>1,441 m</em>), is located within the municipality of <strong>Vladičin Han</strong>. Here is also the most important meteorological station for southern Serbia. In the southern part of the mountain rise two peaks, <strong>Oblik</strong> (<em>1,310 m</em>) and <strong>Grot</strong> (<em>1,327 m</em>), paleo-volcanic cones that, due to their regular, conical shapes, are sometimes considered separate mountains.
                </p>
              </section>

              <img srcSet={`${kukavica33} 450w, ${kukavica3}`} alt="Kukavica Mountain 3" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Kukavica</strong> is covered with dense forests, mainly beech and oak, while coniferous forests are less represented. The most famous is the golden beech, which is part of the nature reserve of the same name and is considered one of the highest quality woods of this type in Serbia. The mountain's flora is complemented by other plant species such as wild raspberries, blackberries, mushrooms, medicinal and aromatic herbs.
                </p>
              </section>

              <img srcSet={`${kukavica44} 450w, ${kukavica4}`} alt="Kukavica Mountain 4" loading="lazy" />

              <section lang="en">
                <p>
                  No less rich is the animal world. <strong>Kukavica</strong> is home to numerous animal species, among which wild boar, fox, roe deer, and wolf stand out among the large game, while among the small game are pheasant, wild pigeon, hare, squirrel, and badger. As a harmonious ecosystem of numerous flora and fauna, with waterways including more than 50 sources of drinking water, <strong>Kukavica</strong> represents one of the most important tourist potentials of the <strong>Han</strong> municipality.
                </p>
              </section>

              <img srcSet={`${kukavica55} 450w, ${kukavica5}`} alt="Kukavica Mountain 5" loading="lazy" />

              <section lang="en">
                <p>
                  On the slopes of <strong>Kukavica</strong>, above the canyon of the <strong>Vučjanska River</strong>, at an altitude of <em>550 meters</em>, there is an archaeological site and cultural monument – the fortress <strong>Skobajić grad</strong>.
                  <br /><br />
                  On this mountain, there are also two accommodation facilities: the Hunting Lodge "<strong>Kukavica</strong>", owned by JP "<strong>Srbijašume</strong>", Forest Management Vranje, and the Mountaineering Lodge "<strong>Preka voda</strong>", under the jurisdiction of PSk "<strong>Kukavica</strong>" Leskovac.
                </p>
              </section>



            </>
          )}

      </div>
    </>
  );
};


export default PlaninaKukavica;