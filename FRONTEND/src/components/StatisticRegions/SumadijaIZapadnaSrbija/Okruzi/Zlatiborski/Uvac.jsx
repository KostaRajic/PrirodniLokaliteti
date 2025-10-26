/* eslint-disable react/no-unknown-property */
import uvac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/desktop/uvac1.jpg";
import uvac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/desktop/uvac2.jpg";
import uvac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/desktop/uvac3.jpg";
import uvac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/desktop/uvac4.jpg";
import uvac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/desktop/uvac5.jpg";
import uvac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/desktop/uvac6.jpg";
import uvac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/mobile/Muvac1.jpg";
import uvac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/mobile/Muvac2.jpg";
import uvac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/mobile/Muvac3.jpg";
import uvac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/mobile/Muvac4.jpg";
import uvac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/mobile/Muvac5.jpg";
import uvac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/mobile/Muvac6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const RekaUvac = () => {
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
            ? 'Reka Uvac | Specijalni rezervat prirode i stanište beloglavog supa'
            : 'Uvac River | Special Nature Reserve and Griffon Vulture Habitat'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Reka Uvac i njen kanjon čine srce Specijalnog rezervata prirode Uvac. Poznata po meandrima, beloglavom supu, pećinskim sistemima i bogatom biodiverzitetu.'
              : 'The Uvac River and its canyon form the heart of the Uvac Special Nature Reserve. Famous for its meanders, griffon vultures, cave systems, and rich biodiversity.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Uvac, reka Uvac, kanjon Uvca, specijalni rezervat prirode, beloglavi sup, meandri Uvca, Ušačka pećina, Ledena pećina, priroda Srbija, turističke destinacije, speleologija, ptice grabljivice, Zlatar, jezera Uvac'
              : 'Uvac, Uvac River, Uvac canyon, Special Nature Reserve, griffon vulture, Uvac meanders, Usacka cave, Ice cave, nature Serbia, tourist destinations, speleology, birds of prey, Zlatar, Uvac lakes'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/reka-uvac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/reka-uvac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/reka-uvac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/reka-uvac"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${uvac22} 450w, ${uvac2} `} alt="Reka Uvac 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Reka Uvac</h1>

              <section lang="sr">
                <p>
                  Specijalni rezervat prirode <strong>"Uvac"</strong> jedno je od najvrednijih prirodnih bogatstava Srbije.
                  Ovaj zaštićeni prostor, od prvorazrednog značaja, nalazi se u jugozapadnom delu zemlje, u okviru
                  Starovlaško-raške visije. Okružen je planinskim masivima <strong>Zlatar</strong>, <strong>Murtenica</strong>,
                  <strong>Čemernica</strong>, <strong>Javor</strong> i <strong>Jadovnik</strong>, a prostire se na površini od 7.543 hektara.
                  Nadmorska visina rezervata varira od 760 do 1.322 metra, što ga čini pravom vazdušnom banjom.
                  Središnji deo rezervata čini impozantna kanjonska dolina reke <strong>Uvac</strong>, zajedno sa dolinama njenih pritoka.
                  Reka Uvac, najduža pritoka <strong>Lima</strong>, izvire na 560 metara nadmorske visine i proteže se u dužini od oko 120 kilometara.
                  Njene vode teku kroz duboke kanjone sa strmim krečnjačkim liticama, stvarajući upečatljiv pejzaž. Zahvaljujući
                  hidroenergetskom potencijalu planinske reke, na Uvcu su podignute tri brane, čime su formirana tri veštačka jezera:
                  <em>Zlatarsko jezero</em> (poznato i kao <em>Kokin Brod</em>), <em>Sjeničko ili Uvačko jezero</em> i <em>Radoinjsko jezero</em>.
                </p>
              </section>

              <img srcSet={`${uvac11} 450w, ${uvac1}`} alt="Reka Uvac 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Posebnu vrednost doline Uvca predstavljaju jedinstveni <strong>uklješteni meandri</strong>, koji su postali prepoznatljiv simbol ovog područja.
                  Njihova impresivna lepota često se ističe kao jedan od glavnih prirodnih dragulja Srbije. Osim meandara, okolinu krase brojni kraški oblici,
                  poput kraških površina, uvala, vrtača, okapina, pećina i jama. Pećine u ovom području su brojne i raznovrsne, od manjih potkapina do
                  impresivnih pećinskih sistema. Među njima se izdvaja <strong>Ušački pećinski sistem</strong>, koji sa svojih 6.185 metara dužine spada među najveće
                  poznate pećine u Srbiji. Ova pećina je dugo bila skrivana tajna, a njen izlaz danas nudi savršeno mesto za kampovanje. Pored Ušačke,
                  značajne su i druge pećine, poput <em>Tubića pećine</em>, <em>pećine Durulja</em> i <em>Baždarske pećine</em>. Sve one obiluju pećinskim nakitom,
                  nastalim taloženjem vode kroz vekove, uključujući stalaktite, stalagmite, stubove, draperije i staklaste iglice, koje ovom prostoru daju jedinstvenu
                  estetsku vrednost.
                </p>
              </section>

              <img srcSet={`${uvac33} 450w, ${uvac3}`} alt='Prirodni rezervat "Uvac"' loading="lazy" />

              <section lang="sr">
                <p>
                  Prirodni rezervat <strong>"Uvac"</strong> poznat je po izuzetno bogatoj fauni, a posebno se izdvaja kao stanište za oko 130 vrsta ptica.
                  Među njima, najznačajnija je populacija <em>beloglavog supa</em> (<em>Gyps fulvus</em>), jedne od dve preostale vrste lešinara koje se danas
                  gnezde u Srbiji. Ova ptica igra ključnu ulogu u ekosistemu, jer se hrani isključivo uginulim životinjama, čime sprečava širenje zaraza
                  i doprinosi "prirodnoj reciklaži". Godine 1994. beloglavi sup je zakonom zaštićen, što je omogućilo razvoj najveće kolonije ove vrste
                  na Balkanu i jedne od najvećih u Evropi. U poslednjih nekoliko godina, na područje rezervata vratile su se i dve vrste orlova lešinara
                  koje su nekada naseljavale ovo područje – crni lešinar i bela kanja. Pored lešinara, rezervat je dom i drugim pticama grabljivicama,
                  kao što su <em>orao belorepan</em>, <em>suri orao</em>, <em>orao mišar</em> i <em>orao zmijar</em>, dok brojni jastrebovi, sove i druge vrste
                  ptica dodatno obogaćuju ovu jedinstvenu ptičju zajednicu.
                </p>
              </section>

              <img srcSet={`${uvac44} 450w, ${uvac4}`} alt='Prirodni rezervat "Uvac"' loading="lazy" />

              <section lang="sr">
                <p>
                  Rezervat <strong>"Uvac"</strong> je takođe značajan zbog prisustva retkih i ugroženih sisara, poput vuka, medveda, divljih svinja,
                  lisica, zečeva, jazavaca i kuna. Pored bogate faune sisara, čiste vode kanjona rezervata predstavljaju stanište za čak 24 vrste riba.
                  Među njima se izdvajaju mladica, potočna pastrmka, jezerska pastrmka, zlatovčica, smuđ, klen, skobalj i potočna mrena, čiji se delovi
                  ovde prirodno razmnožavaju. Raznovrsnost netaknutih staništa, kao i prisustvo endemičnih, reliktnih i ugroženih biljnih i životinjskih vrsta,
                  igra ključnu ulogu u očuvanju biodiverziteta i geodiverziteta. Ove prirodne vrednosti doprinose ne samo zaštiti prirodnih resursa,
                  već i razvoju i promociji turističkih potencijala rezervata i celokupnog zlatarskog kraja. Brigu o Specijalnom rezervatu prirode
                  <strong>"Uvac"</strong> vodi Fond za zaštitu ptica grabljivica <em>"Beloglavi sup"</em>, sa sedištem u Novoj Varoši, čime se osigurava očuvanje
                  ovog jedinstvenog prirodnog blaga.
                </p>
              </section>

              <img srcSet={`${uvac55} 450w, ${uvac5}`} alt="Ušačka pećina" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Ušačka pećina</strong> je deo Ušačkog pećinskog sistema, jednog od najdužih i najznačajnijih speleoloških objekata u Srbiji,
                  sa ukupnom dužinom od 6.185 metara. Smeštena je u blizini sela <strong>Gornje Lopiže</strong>, u zaseoku Ušak, na području Peštera.
                  Ovaj pećinski sistem obuhvata Ušačku pećinu, Ledenu pećinu i Bezdan jamu, koje su međusobno povezane kanalima. Ušačka pećina
                  se nalazi oko 3 kilometra nizvodno od ušća reke Čajaka, na levoj strani kanjona Uvca. Pećina je formirana delovanjem Ušačkog potoka,
                  koji dolazi sa zapada i, presecajući vododržljive stene, ulazi u krečnjački plato kanjona Uvca, stvarajući ponorski otvor pećine.
                  Unutrašnjost pećine krase impresivne dvorane i kanali bogati pećinskim nakitom, poput stalaktita, stalagmita i draperija.
                  Zbog svoje dužine i kompleksnosti, Ušački pećinski sistem predstavlja jedno od najznačajnijih speleoloških nalazišta u Srbiji i regionu.
                </p>
              </section>

              <img srcSet={`${uvac66} 450w, ${uvac6}`} alt="Ledena pećina" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Ledena pećina</strong> je fascinantna podzemna formacija smeštena u Specijalnom rezervatu prirode <strong>"Uvac"</strong>.
                  Prostire se na dužini od oko 2.500 metara. Glavni kanal pećine dugačak je 1.527 metara, dok ostatak čine sporedni i bočni kanali.
                  Pećina je dobila ime zbog konstantne temperature od oko 8°C tokom cele godine, što stvara hladnu i svežu atmosferu unutar njenih hodnika.
                  Unutrašnjost Ledene pećine krase impresivni pećinski ukrasi, uključujući stalaktite, stalagmite i druge kalcitne formacije,
                  koje su nastajale hiljadama godina. Ovi prirodni ukrasi stvaraju očaravajući ambijent koji ostavlja posetioce bez daha.
                  Pristup pećini je moguć isključivo čamcem preko Uvačkog jezera, što dodatno doprinosi njenoj atraktivnosti.
                  Nakon vožnje kroz prepoznatljive meandre Uvca, posetioci mogu ući u pećinu i istražiti njene skrivene lepote.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Uvac River</h1>

              <section lang="en"> <p> The Special Nature Reserve <strong>"Uvac"</strong> is one of Serbia’s most valuable natural treasures. This protected area of prime importance is located in the southwestern part of the country, within the Starovlaško-Raška region. It is surrounded by the mountain massifs of <strong>Zlatar</strong>, <strong>Murtenica</strong>, <strong>Čemernica</strong>, <strong>Javor</strong>, and <strong>Jadovnik</strong>, covering an area of 7,543 hectares. The reserve's elevation ranges from 760 to 1,322 meters, making it a true air spa. The central part of the reserve consists of the impressive canyon valley of the <strong>Uvac River</strong>, along with the valleys of its tributaries. The Uvac River, the longest tributary of the <strong>Limp</strong>, springs at 560 meters above sea level and extends approximately 120 kilometers. Its waters flow through deep canyons with steep limestone cliffs, creating a striking landscape. Thanks to the hydroelectric potential of this mountain river, three dams were built on the Uvac, forming three artificial lakes: <em>Zlatarsko Lake</em> (also known as <em>Kokin Brod</em>), <em>Sjeničko or Uvačko Lake</em>, and <em>Radoinjsko Lake</em>. </p> </section>
              <img srcSet={`${uvac11} 450w, ${uvac1}`} alt="Uvac River 2" loading="lazy" />

              <section lang="en"> <p> A special value of the Uvac valley is represented by the unique <strong>entrenched meanders</strong>, which have become a recognizable symbol of this area. Their impressive beauty is often highlighted as one of Serbia’s main natural gems. Besides the meanders, the surroundings are adorned with numerous karst formations, such as karst fields, sinkholes, dolines, dripstones, caves, and pits. The caves in this area are numerous and diverse, ranging from smaller rock shelters to impressive cave systems. Among them stands out the <strong>Ušački Cave System</strong>, which, with its 6,185 meters in length, ranks among the largest known caves in Serbia. This cave was long a hidden secret, and its exit today offers a perfect camping spot. Besides Ušačka, other significant caves include <em>Tubića Cave</em>, <em>Durulja Cave</em>, and <em>Baždarska Cave</em>. All of them abound in cave decorations formed by water deposition over centuries, including stalactites, stalagmites, columns, draperies, and glassy needles, which give this area a unique aesthetic value. </p> </section>
              <img srcSet={`${uvac33} 450w, ${uvac3}`} alt='Natural reserve "Uvac"' loading="lazy" />

              <section lang="en"> <p> The natural reserve <strong>"Uvac"</strong> is known for its exceptionally rich fauna, especially notable as a habitat for about 130 bird species. Among them, the most significant is the population of the <em>Griffon vulture</em> (<em>Gyps fulvus</em>), one of the two remaining vulture species currently nesting in Serbia. This bird plays a key role in the ecosystem as it feeds exclusively on carrion, preventing the spread of diseases and contributing to "natural recycling." In 1994, the Griffon vulture was legally protected, which enabled the development of the largest colony of this species in the Balkans and one of the largest in Europe. In recent years, two species of eagle vultures that once inhabited this area — the black vulture and the Egyptian vulture — have also returned to the reserve. Besides vultures, the reserve is home to other birds of prey such as the <em>white-tailed eagle</em>, <em>lesser spotted eagle</em>, <em>hawk eagle</em>, and <em>short-toed eagle</em>, while numerous hawks, owls, and other bird species further enrich this unique bird community. </p> </section>
              <img srcSet={`${uvac44} 450w, ${uvac4}`} alt='Natural reserve "Uvac"' loading="lazy" />

              <section lang="en"> <p> The <strong>"Uvac"</strong> reserve is also important for the presence of rare and endangered mammals such as wolves, bears, wild boars, foxes, hares, badgers, and martens. Besides a rich mammal fauna, the clean waters of the reserve’s canyons serve as habitats for as many as 24 fish species. Among them are the huchen, brown trout, lake trout, golden spined loach, zander, chub, bleak, and river trout, parts of which reproduce naturally here. The diversity of pristine habitats, as well as the presence of endemic, relict, and endangered plant and animal species, plays a crucial role in preserving biodiversity and geodiversity. These natural values contribute not only to the protection of natural resources but also to the development and promotion of the reserve’s tourism potential and the entire Zlatar region. The care of the Special Nature Reserve <strong>"Uvac"</strong> is managed by the Birds of Prey Protection Fund <em>"Griffon Vulture"</em>, based in Nova Varoš, ensuring the conservation of this unique natural treasure. </p> </section>
              <img srcSet={`${uvac55} 450w, ${uvac5}`} alt="Ušačka Cave" loading="lazy" />

              <section lang="en"> <p> <strong>Ušačka Cave</strong> is part of the Ušački Cave System, one of the longest and most significant speleological sites in Serbia, with a total length of 6,185 meters. It is located near the village of <strong>Gornje Lopiže</strong>, in the hamlet of Ušak, within the Pešter region. This cave system includes Ušačka Cave, Ice Cave, and Bezdan Pit, all interconnected by channels. Ušačka Cave lies about 3 kilometers downstream from the confluence of the Čajak River, on the left side of the Uvac canyon. The cave was formed by the action of the Ušački Stream, which comes from the west and, cutting through impermeable rocks, enters the limestone plateau of the Uvac canyon, creating a ponor (swallow hole) cave entrance. The interior of the cave features impressive halls and channels rich in cave decorations such as stalactites, stalagmites, and draperies. Due to its length and complexity, the Ušački Cave System is one of the most important speleological sites in Serbia and the region. </p> </section>
              <img srcSet={`${uvac66} 450w, ${uvac6}`} alt="Ice Cave" loading="lazy" />

              <section lang="en"> <p> The <strong>Ice Cave</strong> is a fascinating underground formation located within the Special Nature Reserve <strong>"Uvac"</strong>. It stretches about 2,500 meters in length. The main cave channel is 1,527 meters long, with the remainder consisting of side and lateral channels. The cave got its name because of its constant temperature of about 8°C throughout the year, creating a cold and fresh atmosphere inside its corridors. The interior of the Ice Cave is adorned with impressive cave decorations, including stalactites, stalagmites, and other calcite formations, which have formed over thousands of years. These natural ornaments create a mesmerizing ambiance that leaves visitors breathless. Access to the cave is possible only by boat via Uvačko Lake, which adds to its attractiveness. After a boat ride through the distinctive meanders of the Uvac, visitors can enter the cave and explore its hidden beauties. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default RekaUvac;