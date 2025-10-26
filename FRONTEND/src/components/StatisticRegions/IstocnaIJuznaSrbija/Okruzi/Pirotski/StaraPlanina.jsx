/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import staraPlaina1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina1.jpg";
import staraPlaina2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina2.jpg";
import staraPlaina3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina3.jpg";
import staraPlaina4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina4.jpg";
import staraPlaina5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina5.jpg";
import staraPlaina6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina6.jpg";
import staraPlaina7 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina7.jpg";
import staraPlaina8 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina8.jpg";
import staraPlaina11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM1.jpg";
import staraPlaina22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM2.jpg";
import staraPlaina33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM3.jpg";
import staraPlaina44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM4.jpg";
import staraPlaina55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM5.jpg";
import staraPlaina66 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM6.jpg";
import staraPlaina77 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM7.jpg";
import staraPlaina88 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const StaraPlanina = () => {
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


        <title>{switchLanguage === 'rs' ? "Nacionalni Park Stara Planina – Prirodna lepota istočne Srbije | Serbia Wonders" : "Stara Planina National Park – The Natural Beauty of Eastern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Nacionalni Park Stara Planina je dom najvišeg vrha u Srbiji i bogat prirodnim lepotama, od vodopada do planinskih vrhova. Otkrijte prirodu, istoriju i aktivnosti na Staroj planini."
            :
            "Stara Planina National Park is home to Serbia’s highest peak and rich natural wonders, from waterfalls to mountain summits. Discover nature, history, and activities in Stara Planina."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Stara Planina, Nacionalni park Stara Planina, Babin zub, Kopren, Miđor, vodopadi, priroda Srbije, planinarenje, Pirot, Istočna Srbija"
            :
            "Stara Planina, Stara Planina National Park, Babin Zub, Kopren, Midzor, waterfalls, Serbia nature, hiking, Pirot, Eastern Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/stara-planina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/stara-planina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/stara-planina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/stara-planina"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pirotskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${staraPlaina11} 450w, ${staraPlaina1} `} alt="Stara Planina 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Nacionalni Park "Stara Planina"</h1>

              <section lang="sr">
                <p> <strong>Stara planina</strong> je jedina visoka planina istočne Srbije, sa najvišom tačkom u zemlji, bez pokrajina. Takođe je poznata i kao <em>Balkan</em>, po kojem je i celo poluostrvo, na kojem se planina nalazi, dobilo naziv <em>Balkansko poluostrvo</em>. Smestila se na krajnjem istoku Srbije, dok je veći deo planine u Bugarskoj, gde se nalazi i najviši vrh, <strong>Botev (2376 m)</strong>. Stara planina spada u mlade venčane planine. Istočne padine, koje gledaju prema Bugarskoj, su strme, dok su zapadne padine, okrenute prema Srbiji, blaže i pitomije. </p>
              </section>

              <img srcSet={`${staraPlaina22} 450w, ${staraPlaina2} `} alt="Babin Zub" loading="lazy" />

              <section lang="sr">
                <p> <strong>Babin zub</strong> je jedan od vrhova planinskog masiva Stara planina, koji se uzdiže na visinu od <em>1785 m/nv</em>. Sa ovog vrha počinje uspon ka Midžoru. Zapadna strana Babinog zuba prepoznaje se po strmim, vertikalnim stenovitim odsecima. Jedan od njih podseća na stari zub, što je i inspirisalo naziv ovog masiva. Sam vrh doseže visinu od 200 metara, a njegova uspinjanja su namenjena isključivo alpinistima. Babin zub je okružen brojnim selima, među kojima su: <em>Ravno Bučije, Aldina Reka, Janja, Mezdreja, Crni Vrh, Ćuštica, Stanjinac, Šugrin, Mirkovci, Zaskovci i Topli Do</em>. <br /> <br /> Klima u ovom regionu je kontinentalna, s blagim prolećem i jesenjom sezonom. Leta su veoma topla i sušna, dok su zime hladne i vetrovite, sa snežnim padavinama. <br /> <br /> Na području Babinog Zuba postoji mnogo izvora, od kojih se izdvaja <strong>Trgoviški Timok</strong>, sa temperaturom vode od 4°C, što ga čini najhladnijim izvorom u bivšoj SFRJ. Tu su i drugi izvori kao što su <em>Kaluđerske vode, Tri Kladenca, Dojkino Vrelo, Vir, Tresetište, Zaskovački kamen</em>. Podzemne vode ovog područja sadrže velike količine minerala kao što su zlato, granit, uran i uljani škriljci. Okolina Babinog Zuba je poznata po bogatstvu jezera i vodopada. <strong>Zavojsko</strong> i <strong>Smilovsko jezero</strong> su najpoznatija, dok su vodopadi <em>Čunguljski (42 m), Kurtulski (27 m)</em> i <em>Tupavica (15 m)</em> veoma atraktivni. Reke u ovom regionu bogate su pastrmkom i idealne su za ribolov. </p>
              </section>

              <img srcSet={`${staraPlaina33} 450w, ${staraPlaina3} `} alt="Vrh Kopren - Stara Planina" loading="lazy" />


              <section lang="sr">
                <p> <strong>Kopren</strong> je vrh na Staroj planini, sa visinom od <em>1963 m</em>, a ujedno predstavlja i manju morfološku celinu. Ova oblast je zaštićena zakonom 1985. godine i predstavlja stanište biljke <em>Rosulje</em>. Prostire se zapadno i južno od glavnog planinskog venca, između izvorišnih krivina i dolinskih sistema Dojkinačke i Jelovičke reke. Glavni vrh Koprena nalazi se na srpsko-bugarskoj granici, sa stenovitim odsecima prema Bugarskoj, dok je zapadno, u Srbiji, prostrana, slabo razuđena površina sa međuvisinama od 1840 do 1935 m n.v. i drugim širim i nižim vrhom Koprena, čija visina iznosi 1935 m. </p>
              </section>

              <img
                srcSet={`${staraPlaina44} 450w, ${staraPlaina4} `} alt="Slavinjsko grlo, ili Rosomački lonci - Stara Planina" loading="lazy" />

              <section lang="sr">
                <p> <strong>Slavinjsko grlo</strong>, ili <em>Rosomački lonci</em>, predstavlja klisuru rečne doline Rosomačke reke. Nalazi se u blizini sela Slavinja, koje je od Pirota udaljeno oko 30 km. Do kanjona se može doći iz centra sela za oko 15 minuta laganog hoda. Staza je dobro obeležena i vodi kroz jedinstven reljef ovog dela Stare planine. <br /> <br /> Kanjon je nastao intenzivnim erozivnim delovanjem vode koja je prodrla u stenske slojeve Stare planine. Karakteristična pojava u ovom kanjonu su prečage u koritu reke, koje stvaraju impresivan niz slapova i virova, poznatih kao "<em>lonci</em>". Ovi fenomeni su rezultat vertikalne fluvijalne erozije, gde reka, padajući sa kaskada, svojim velikim kinetičkim energijama duboko urezuje delove rečnog korita, odmah iza kaskade. Ovaj jedinstveni prizor prirodnog reljefa Stare planine predstavlja pravo blago koje još uvek nije potpuno otkriveno, i predstavlja pravi raj za sve ljubitelje prirode. </p>
              </section>

              <img srcSet={`${staraPlaina55} 450w, ${staraPlaina5} `} alt="Stara Planina" loading="lazy" />

              <section lang="sr">
                <p> Masiv Stare planine smešten je u istočnom delu <strong>Karpato-balkanskog sistema</strong>, a čini zapadni deo masiva Balkana, koji se u celini prostire kroz Bugarsku. Stara planina se sastoji od planinskog venca koji počinje od padina <em>Vrške Čuke</em> iznad <em>Zaјečara</em>, a zatim se pruža prema jugoistoku, gde se naglo uzdiže iznad <em>Knjaževca</em> i prelazi u visoki planinski masiv. Ovaj masiv se ukoso prostire pravcem <em>severozapad-jugoistok</em>, a njegova najveća visina je na vrhu <strong>Miđor</strong>. Severoistočne padine pripadaju teritoriji Bugarske, dok se jugoistočne padine, zajedno sa obroncima, nalaze na teritoriji Srbije. </p>
              </section>

              <img srcSet={`${staraPlaina66} 450w, ${staraPlaina6} `} alt="Čunguljski vodopad" loading="lazy" />

              <section lang="sr">
                <p> <strong>Čunguljski vodopad</strong> je jedan od najlepših i najimpresivnijih vodopada na Staroj planini. Njegova visina prelazi <em>40 metara</em>, a zbog svog skrivenog položaja u dubokim šumama Stare planine, otkriven je tek <strong>1996. godine</strong>. <br /> <br /> Nalazi se na oko 9 km od <em>Toplog Dola</em>, koji je najčešće polazna tačka za posetu ovom očaravajućem vodopadu. Ovo područje je poznato po tome što se u njegovoj blizini nalaze neki od najlepših vodopada Staroplaninskog masiva. <br /> <br /> Staza koja vodi do Čunguljskog vodopada, od Toplog Dola, dobro je označena, ali zahteva određenu fizičku spremnost, jer pešačenje traje oko <em>2,5 sata</em>. <br /> <br /> Jedinstvena karakteristika ovog vodopada je to što postepeno raste svake godine, jer snaga vode koja pada produbljuje stene na dnu vodopada, čineći ga još impozantnijim. </p>
              </section>

              <img srcSet={`${staraPlaina77} 450w, ${staraPlaina7} `} alt="Toplodolska reka" loading="lazy" />

              <section lang="sr">
                <p> <strong>Toplodolska reka</strong> je druga najvažnija pritoka (sastavnica) u slivu <em>Visočice (Temštine)</em>, koja drenuje južne padine Stare planine. Nastaje u Toplom Dolu spajanjem <em>Javorski</em> i <em>Rekitske reke</em>. U širem smislu, pripada slivu reke Temštine kao njena leva sastavnica, dok u najširem smislu spada u sliv reke Nišave, odnosno Južne Morave, Velike Morave, Dunava, a samim tim i Crnomorski sliv. Administrativno, sliv Toplodolske reke pripada opštini Pirot u Pirotskom upravnom okrugu. </p>
              </section>

              <img srcSet={`${staraPlaina88} 450w, ${staraPlaina8} `} alt="Midzor" loading="lazy" />

              <section lang="sr">
                <p> <strong>Miđor</strong> je najviši vrh Stare planine u Srbiji, a ujedno i najviši vrh centralnog dela Srbije. Nalazi se na granici između Srbije i Bugarske. Miđor se uzdiže na visinu od <em>2.169 metara</em>. U njegovoj blizini nalaze se izvori <strong>Trgoviškog Timoka</strong> i <em>Loma</em>. Geološku osnovu Miđora čine permijski crveni peščari. </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>“Stara Planina” National Park</h1>

              <section lang="en"> <p> <strong>Stara Planina</strong> is the only high mountain in eastern Serbia, with the highest peak in the country excluding the provinces. It is also known as the <em>Balkan</em>, after which the entire peninsula, where the mountain is located, is named the <em>Balkan Peninsula</em>. It is situated at the far east of Serbia, while most of the mountain lies in Bulgaria, where the highest peak, <strong>Botev (2376 m)</strong>, is located. Stara Planina belongs to the young folded mountains. The eastern slopes, facing Bulgaria, are steep, while the western slopes, facing Serbia, are gentler and milder. </p> </section>
              <img srcSet={`${staraPlaina22} 450w, ${staraPlaina2} `} alt="Babin Zub" loading="lazy" />

              <section lang="en"> <p> <strong>Babin Zub</strong> is one of the peaks of the Stara Planina mountain massif, rising to an altitude of <em>1785 m above sea level</em>. From this peak, the ascent to Midžor begins. The western side of Babin Zub is recognizable by steep, vertical rocky cliffs. One of them resembles an old tooth, which inspired the name of this massif. The peak itself reaches a height of 200 meters, and its climbs are intended exclusively for mountaineers. Babin Zub is surrounded by numerous villages, including: <em>Ravno Bučije, Aldina Reka, Janja, Mezdreja, Crni Vrh, Ćuštica, Stanjinac, Šugrin, Mirkovci, Zaskovci, and Topli Do</em>. <br /><br /> The climate in this region is continental, with mild springs and autumn seasons. Summers are very hot and dry, while winters are cold and windy, with snowy precipitation. <br /><br /> There are many springs in the Babin Zub area, the most notable being the <strong>Trgoviški Timok</strong>, with a water temperature of 4°C, making it the coldest spring in the former SFRY. Other springs include <em>Kaluđerske Vode, Tri Kladenca, Dojkino Vrelo, Vir, Tresetište, Zaskovački Kamen</em>. The underground waters in this area contain large amounts of minerals such as gold, granite, uranium, and oil shale. The surroundings of Babin Zub are known for their abundance of lakes and waterfalls. <strong>Zavojsko</strong> and <strong>Smilovsko Lakes</strong> are the most famous, while the waterfalls <em>Čunguljski (42 m), Kurtulski (27 m)</em>, and <em>Tupavica (15 m)</em> are very attractive. The rivers in this region are rich in trout and ideal for fishing. </p> </section>
              <img srcSet={`${staraPlaina33} 450w, ${staraPlaina3} `} alt="Kopren Peak - Stara Planina" loading="lazy" />

              <section lang="en"> <p> <strong>Kopren</strong> is a peak on Stara Planina, with an elevation of <em>1963 m</em>, and also represents a smaller morphological unit. This area was protected by law in 1985 and is a habitat for the plant <em>Rosulja</em>. It extends west and south of the main mountain ridge, between the source bends and valley systems of the Dojkinačka and Jelovička rivers. The main Kopren peak is located on the Serbian-Bulgarian border, with rocky cliffs toward Bulgaria, while the western side, in Serbia, is a vast, sparsely dissected area with elevations ranging from 1840 to 1935 m above sea level, including another wider and lower Kopren peak with an elevation of 1935 m. </p> </section>
              <img srcSet={`${staraPlaina44} 450w, ${staraPlaina4} `} loading="lazy" alt="Slavinjsko Grlo, or Rosomački Lonci - Stara Planina" />

              <section lang="en"> <p> <strong>Slavinjsko Grlo</strong>, or <em>Rosomački Lonci</em>, is a gorge of the Rosomačka river valley. It is located near the village of Slavinja, about 30 km from Pirot. The canyon can be reached from the village center in about 15 minutes of easy walking. The trail is well marked and leads through the unique relief of this part of Stara Planina. <br /><br /> The canyon was formed by intense erosive action of water that penetrated the rock layers of Stara Planina. A characteristic feature of this canyon are natural "pots" in the riverbed, which create an impressive series of waterfalls and whirlpools, known as "<em>lonci</em>" (pots). These phenomena are the result of vertical fluvial erosion, where the river, falling from cascades, deeply carves parts of the riverbed immediately behind the cascade due to its high kinetic energy. This unique natural landscape of Stara Planina is a true treasure, still not fully discovered, and a real paradise for all nature lovers. </p> </section>
              <img srcSet={`${staraPlaina55} 450w, ${staraPlaina5} `} alt="Stara Planina" loading="lazy" />

              <section lang="en"> <p> The Stara Planina massif is located in the eastern part of the <strong>Carpathian-Balkan system</strong> and constitutes the western part of the Balkan massif, which extends entirely through Bulgaria. Stara Planina consists of a mountain ridge that starts from the slopes of <em>Vrška Čuka</em> above <em>Zaječar</em>, then stretches southeast, where it sharply rises above <em>Knjaževac</em> and transitions into a high mountain massif. This massif extends obliquely in the <em>northwest-southeast</em> direction, with its highest elevation at the peak <strong>Midžor</strong>. The northeastern slopes belong to Bulgarian territory, while the southeastern slopes along with the foothills are located in Serbia. </p> </section>
              <img srcSet={`${staraPlaina66} 450w, ${staraPlaina6} `} alt="Čunguljski Waterfall" loading="lazy" />

              <section lang="en"> <p> <strong>Čunguljski Waterfall</strong> is one of the most beautiful and impressive waterfalls on Stara Planina. Its height exceeds <em>40 meters</em>, and due to its hidden location deep in the forests of Stara Planina, it was only discovered in <strong>1996</strong>. <br /><br /> It is located about 9 km from <em>Topli Dol</em>, which is the most common starting point for visiting this enchanting waterfall. This area is known for having some of the most beautiful waterfalls in the Stara Planina massif. <br /><br /> The trail leading to Čunguljski Waterfall from Topli Dol is well marked but requires a certain level of physical fitness, as the hike takes about <em>2.5 hours</em>. <br /><br /> A unique characteristic of this waterfall is that it gradually grows each year because the force of the falling water deepens the rocks at the bottom of the waterfall, making it even more impressive. </p> </section>
              <img srcSet={`${staraPlaina77} 450w, ${staraPlaina7} `} alt="Toplodolska River" loading="lazy" />

              <section lang="en"> <p> <strong>Toplodolska River</strong> is the second most important tributary (component) in the watershed of <em>Visočica (Temštica)</em>, which drains the southern slopes of Stara Planina. It originates in Topli Dol by the confluence of the <em>Javorska</em> and <em>Rekitska rivers</em>. In a broader sense, it belongs to the Temštica river basin as its left tributary, and in the widest sense, it belongs to the basin of the Nišava river, i.e., the Južna Morava, Velika Morava, Danube, and consequently the Black Sea basin. Administratively, the Toplodolska River basin belongs to the municipality of Pirot in the Pirot administrative district. </p> </section>
              <img srcSet={`${staraPlaina88} 450w, ${staraPlaina8} `} alt="Midžor" loading="lazy" />

              <section lang="en"> <p> <strong>Midžor</strong> is the highest peak of Stara Planina in Serbia and also the highest peak of the central part of Serbia. It is located on the border between Serbia and Bulgaria. Midžor rises to an altitude of <em>2,169 meters</em>. Nearby are the sources of the <strong>Trgoviški Timok</strong> and the <em>Lom</em> rivers. The geological base of Midžor consists of Permian red sandstones. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default StaraPlanina;