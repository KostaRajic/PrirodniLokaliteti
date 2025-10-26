/* eslint-disable react/no-unknown-property */
import krupajskoVrelo1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/desktop/krupajskoVrelo1.jpg";
import krupajskoVrelo2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/desktop/krupajskoVrelo2.jpg";
import krupajskoVrelo3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/desktop/krupajskoVrelo3.jpg";
import krupajskoVrelo4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/desktop/krupajskoVrelo4.jpg";
import krupajskoVrelo5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/desktop/krupajskoVrelo5.jpg";
import krupajskoVrelo11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/mobile/krupajskoVreloM1.jpg";
import krupajskoVrelo22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/mobile/krupajskoVreloM2.jpg";
import krupajskoVrelo33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/mobile/krupajskoVreloM3.jpg";
import krupajskoVrelo44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/mobile/krupajskoVreloM4.jpg";
import krupajskoVrelo55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/KrupajskoVrelo/mobile/krupajskoVreloM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const KrupajskoVrelo = () => {
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

        <title>{switchLanguage === 'rs' ? "Krupajsko Vrelo – Prirodni Biser Istočne Srbije | Serbia Wonders" : "Krupajsko Spring – The Natural Jewel of Eastern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Krupajsko Vrelo u istočnoj Srbiji je jedno od najlepših kraških izvora sa izuzetnim prirodnim ambijentom i termalnim izvorima. Zaštićeno kao spomenik prirode, idealno za ljubitelje prirode i speleoronilačke avanture."
            :
            "Krupajsko Vrelo in eastern Serbia is one of the most beautiful karst springs with an exceptional natural environment and thermal springs. Protected as a natural monument, ideal for nature lovers and cave diving adventures."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Krupajsko vrelo, istočna Srbija, kraški izvori, Beljanica, termalni izvori, speleoronilaštvo, prirodni spomenik, Žagubica, priroda Srbije, vodopad, restoran Krupajsko vrelo"
            :
            "Krupajsko Vrelo, eastern Serbia, karst springs, Beljanica, thermal springs, cave diving, natural monument, Žagubica, nature of Serbia, waterfall, Krupajsko Vrelo restaurant"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/krupajsko-vrelo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/krupajsko-vrelo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/krupajsko-vrelo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/krupajsko-vrelo"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(branicevskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${krupajskoVrelo11} 450w, ${krupajskoVrelo1} `} alt="Krupajsko Vrelo 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h1>Krupajsko Vrelo</h1>

              <section lang="sr">
                <p>
                  <strong>Krupajsko vrelo</strong> se nalazi u <em>istočnoj Srbiji</em>, ispod zapadnog krečnjačkog odseka <strong>Beljanice</strong>, sa desne strane <strong>Krupajske reke</strong>, na nadmorskoj visini od <strong>220 metara</strong>. Smešteno je u ataru sela <strong>Milanovca</strong>, oko <strong>35 kilometara</strong> od <strong>Žagubice</strong>. Ovo vrelo pripada grupi <em>kraških izvora</em>, a temperatura vode se kreće između <strong>9 i 11 °C</strong>. Okruženo je strmim, mestimično vertikalnim stenama koje formiraju <em>amfiteatralni oblik</em>.
                  <br /><br />
                  Potok koji izvire iz vrela, dug <strong>435 metara</strong>, najpre teče ka <em>severu</em> u dužini od <strong>130 metara</strong>, zatim skreće ka <em>zapadu</em> i nakon oko <strong>300 metara</strong> uliva se u <strong>Krupajsku reku</strong>. Zbog izgradnje brane visoke oko <strong>3 metra</strong>, vrelo danas ima izgled izduženog jezerca dužine <strong>40</strong> i širine <strong>17 metara</strong>. Njegova voda se preko krune ustave preliva u vidu atraktivnog <em>vodopada</em>, dodatno naglašavajući lepotu ovog prirodnog bisera.
                </p>
              </section>

              <img srcSet={`${krupajskoVrelo44} 450w, ${krupajskoVrelo4}`} alt="Krupajsko Vrelo 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Speleoronilačkim istraživanjima iz <strong>1998. godine</strong>, koja su predstavljala izuzetan naučni poduhvat, otkriven je inverzni krak pećinskog sifona dublji od <strong>70 metara</strong>, kroz koji vode vrela dospevaju iz krečnjačkog masiva <strong>Beljanice</strong>. Od brane do starog mlina, vrelski potok protiče kroz krečnjačku sutjesku strmih strana i slapovitog korita.
                </p>
              </section>

              <img srcSet={`${krupajskoVrelo33} 450w, ${krupajskoVrelo3}`} alt="Krupajsko Vrelo 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Hidrološki režim vrela i njegova izdašnost nisu dovoljno istraženi. Kao i većina kraških izvora, ovo vrelo pokazuje velike promene u izdašnosti tokom godine, a naročito u višegodišnjem periodu. Pored zgrade mlina nalazi se betonska česma sa <strong>pet metalnih cevi</strong> iz kojih izvire topla voda temperature <strong>26 °C</strong> i izdašnosti od <strong>6 do 10 litara u sekundi</strong>. Ova voda potiče iz prirodnog termalnog izvora koji je kaptiran i podzemno sproveden do česme.
                  <br /><br />
                  Na oko <strong>deset metara</strong> od česme nalazi se još jedna termalna pojava – izvor u obliku minijaturnog vodopada, koji je nastao na samoizlivnoj geološkoj bušotini.
                </p>
              </section>

              <img srcSet={`${krupajskoVrelo22} 450w, ${krupajskoVrelo2}`} alt="Krupajsko Vrelo 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Krupajsko vrelo</strong> i njegov ambijent, koji obuhvata površinu od <strong>9 hektara</strong>, zaštićeni su kao <em>spomenik prirode</em> od nacionalnog značaja <strong>Republike Srbije</strong>. Spomenik prirode „<strong>Krupajsko vrelo</strong>“ proglašen je Uredbom Vlade Republike Srbije („Službeni glasnik RS“, br. 9/95), na osnovu Zakona o zaštiti životne sredine.
                  <br /><br />
                  Ovo prirodno dobro od izuzetnog značaja predstavlja jedan od najizdašnijih kraških izvora u Srbiji. Zbog morfologije svog izvorišta, hidroloških funkcija i pratećih prirodnih karakteristika, ubraja se među najreprezentativnija <em>gravitaciona vrela</em> u zemlji.
                </p>
              </section>

              <img srcSet={`${krupajskoVrelo55} 450w, ${krupajskoVrelo5}`} alt="Krupajsko Vrelo 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Pored <strong>Krupajskog vrela</strong> nalazi se restoran koji nudi prijatan ambijent u prirodnom okruženju, sa pogledom na samo vrelo i njegovu kristalno čistu vodu. Restoran je popularno mesto za odmor i uživanje u domaćoj kuhinji, gde posetioci mogu probati tradicionalna <em>srpska jela</em>, svežu ribu i specijalitete pripremljene od lokalnih sastojaka.
                  <br /><br />
                  Atmosfera je opuštajuća, a prirodni pejzaž i šum vode doprinose jedinstvenom doživljaju. Restoran je omiljeno mesto kako za turiste, tako i za lokalno stanovništvo koje posećuje <strong>Krupajsko vrelo</strong> tokom cele godine.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Krupajsko Spring</h1>

              <section lang="en">
                <p>
                  <strong>Krupajsko Spring</strong> is located in <em>eastern Serbia</em>, beneath the western limestone section of <strong>Beljanica</strong>, on the right bank of the <strong>Krupaj River</strong>, at an altitude of <strong>220 meters</strong>. It is situated within the territory of the village of <strong>Milanovac</strong>, about <strong>35 kilometers</strong> from <strong>Žagubica</strong>. This spring belongs to a group of <em>karst springs</em>, with water temperature ranging between <strong>9 and 11 °C</strong>. It is surrounded by steep, partly vertical cliffs forming an <em>amphitheatrical shape</em>.
                  <br /><br />
                  The stream emerging from the spring, which is <strong>435 meters</strong> long, initially flows north for <strong>130 meters</strong>, then turns west and after about <strong>300 meters</strong> flows into the <strong>Krupaj River</strong>. Due to the construction of a dam about <strong>3 meters</strong> high, the spring today looks like an elongated pond, <strong>40</strong> meters long and <strong>17 meters</strong> wide. Its water overflows the dam crest in the form of an attractive <em>waterfall</em>, further highlighting the beauty of this natural gem.
                </p>
              </section>

              <img srcSet={`${krupajskoVrelo44} 450w, ${krupajskoVrelo4}`} alt="Krupajsko Spring 2" loading="lazy" />

              <section lang="en">
                <p>
                  Cave diving explorations conducted in <strong>1998</strong>, which represented an extraordinary scientific endeavor, discovered a reverse arm of a cave siphon deeper than <strong>70 meters</strong>, through which the spring waters come from the limestone massif of <strong>Beljanica</strong>. From the dam to the old mill, the spring stream flows through a limestone gorge with steep sides and a waterfall-like bed.
                </p>
              </section>

              <img srcSet={`${krupajskoVrelo33} 450w, ${krupajskoVrelo3}`} alt="Krupajsko Spring 3" loading="lazy" />

              <section lang="en">
                <p>
                  The hydrological regime of the spring and its discharge capacity are not sufficiently researched. Like most karst springs, this spring shows large fluctuations in discharge throughout the year, especially over multi-year periods. Next to the mill building there is a concrete fountain with <strong>five metal pipes</strong> from which warm water flows at a temperature of <strong>26 °C</strong> and a discharge of <strong>6 to 10 liters per second</strong>. This water comes from a natural thermal spring that has been captured and conducted underground to the fountain.
                  <br /><br />
                  About <strong>ten meters</strong> from the fountain there is another thermal phenomenon – a spring in the form of a miniature waterfall, created on a self-flowing geological borehole.
                </p>
              </section>

              <img srcSet={`${krupajskoVrelo22} 450w, ${krupajskoVrelo2}`} alt="Krupajsko Spring 4" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Krupajsko Spring</strong> and its surroundings, covering an area of <strong>9 hectares</strong>, are protected as a <em>natural monument</em> of national importance in the <strong>Republic of Serbia</strong>. The natural monument "Krupajsko Spring" was declared by the Government of the Republic of Serbia (Official Gazette RS, No. 9/95), based on the Environmental Protection Law.
                  <br /><br />
                  This natural asset of exceptional significance represents one of the most abundant karst springs in Serbia. Due to the morphology of its source, hydrological functions, and accompanying natural characteristics, it is considered one of the most representative <em>gravity springs</em> in the country.
                </p>
              </section>

              <img srcSet={`${krupajskoVrelo55} 450w, ${krupajskoVrelo5}`} alt="Krupajsko Spring 5" loading="lazy" />

              <section lang="en">
                <p>
                  Next to <strong>Krupajsko Spring</strong> there is a restaurant offering a pleasant atmosphere in a natural setting, with a view of the spring itself and its crystal-clear water. The restaurant is a popular place to relax and enjoy traditional <em>Serbian cuisine</em>, fresh fish, and specialties prepared from local ingredients.
                  <br /><br />
                  The atmosphere is relaxing, and the natural landscape and sound of water contribute to a unique experience. The restaurant is a favorite spot for both tourists and locals who visit <strong>Krupajsko Spring</strong> throughout the year.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default KrupajskoVrelo;