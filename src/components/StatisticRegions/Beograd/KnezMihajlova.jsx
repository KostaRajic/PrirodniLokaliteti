/* eslint-disable react/no-unknown-property */
import KnezMihailova1 from "../../../assets/images/Beograd/KnezMihailova/desktop/knezMihailova1.jpg";
import KnezMihailova2 from "../../../assets/images/Beograd/KnezMihailova/desktop/knezMihailova2.jpg";
import KnezMihailova3 from "../../../assets/images/Beograd/KnezMihailova/desktop/knezMihailova3.jpg";
import KnezMihailova4 from "../../../assets/images/Beograd/KnezMihailova/desktop/knezMihailova4.jpg";
import KnezMihailova5 from "../../../assets/images/Beograd/KnezMihailova/desktop/knezMihailova5.jpg";
import KnezMihailova6 from "../../../assets/images/Beograd/KnezMihailova/desktop/knezMihailova6.jpg";
import KnezMihailova11 from "../../../assets/images/Beograd/KnezMihailova/mobile/knezMihailovaM1.jpg";
import KnezMihailova22 from "../../../assets/images/Beograd/KnezMihailova/mobile/knezMihailovaM2.jpg";
import KnezMihailova33 from "../../../assets/images/Beograd/KnezMihailova/mobile/knezMihailovaM3.jpg";
import KnezMihailova44 from "../../../assets/images/Beograd/KnezMihailova/mobile/knezMihailovaM4.jpg";
import KnezMihailova55 from "../../../assets/images/Beograd/KnezMihailova/mobile/knezMihailovaM5.jpg";
import KnezMihailova66 from "../../../assets/images/Beograd/KnezMihailova/mobile/knezMihailovaM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const KnezMihailova = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();


  useEffect(() => {
    if (lang !== switchLanguage) {

      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  return (

    <>
      <Helmet>

        <title>{switchLanguage === 'rs' ? "Knez Mihailova – Najpoznatija Ulica Beograda | Serbia Wonders" : "Knez Mihailova – The Most Famous Street in Belgrade | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Ulica Kneza Mihaila – simbol Beograda, istorijska pešačka zona nastala iz plana Emilijana Josimovića 1867. godine. Otkrijte njenu istoriju i arhitekturu."
            :
            "Knez Mihailova Street – a symbol of Belgrade, a historic pedestrian zone developed from Emilijan Josimović’s 1867 urban plan. Discover its history and architecture."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Knez Mihailova, Beograd, ulica, istorija, Emilijan Josimović, knez Mihailo, urbanizam, kulturna baština, pešačka zona, arhitektura, Beogradski centar"
            :
            "Knez Mihailova, Belgrade, street, history, Emilijan Josimović, Prince Mihailo, urbanism, cultural heritage, pedestrian zone, architecture, Belgrade center"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/beograd/knez-mihailova`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/beograd/knez-mihailova"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/beograd/knez-mihailova"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/beograd/knez-mihailova"
        />

      </Helmet >

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${KnezMihailova11} 450w, ${KnezMihailova1} `} alt="Knez Mihailova 1" loading="lazy" />

        <h2>Knez Mihajlova</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang='sr'>
                <p>
                  Nastanak i razvoj najpoznatije beogradske ulice, koja je danas isključivo <strong>pešačka zona</strong>, najviše je povezan sa dve ličnosti – <strong>kneza Mihaila Obrenovića</strong>, poznatog po zalaganju za evropsizaciju Beograda, i <strong>Emilijana Josimovića</strong>, uz čije ime se često dodaje sintagma <em>„prvi srpski urbanista“</em>. Josimovićev plan objavljen je <strong>1867. godine</strong> – iste godine kada je knez Mihailo primio ključeve Beogradske tvrđave od Ali-Riza paše, čime je označen <em>kraj turske vladavine</em> u Srbiji.
                </p>
              </section>

              <img srcSet={`${KnezMihailova22} 450w, ${KnezMihailova2}`} alt="Knez Mihailova 2" loading="lazy" />

              <section lang='sr'>
                <p>
                  <strong>Realizacija Josimovićevog plana</strong> započeta je 1869. godine, a među prvim radovima bilo je uređenje <strong>Delijske ulice</strong>, dela današnje Kneza Mihailova od Ulice kralja Petra do Ulice Vuka Karadžića. Na njenoj levoj strani nalazila se nekadašnja bašta kneza Aleksandra Karađorđevića, koja je nakon povratka kneza Miloša Obrenovića na vlast 1858. godine konfiskovana i pretvorena u državno vlasništvo. Do <strong>1870. godine</strong> ulica je proširena do Terazija, ali je povezivanje sa Kalemegdanom išlo sporije zbog brojnih <em>privatnih poseda</em>. I pored odstupanja, većina poprečnih ulica nastala je u skladu sa Josimovićevim urbanističkim planom.
                </p>
              </section>

              <img srcSet={`${KnezMihailova33} 450w, ${KnezMihailova3}`} alt="Knez Mihailova 3" loading="lazy" />

              <section lang='sr'>
                <p>
                  Samo nekoliko kuća u Kneza Mihailova, građenih <strong>pre Josimovićevog plana</strong>, postoje i danas. Najstarije su nekadašnji hoteli <em>„Grčka kraljica“</em> (broj 51) i <em>„Rusija“</em> (broj 38). Svaka zgrada ima <strong>istorijski, arhitektonski ili kulturni značaj</strong> – bilo zbog ličnosti koje su ih gradile, događaja koji su se u njima odigrali, ili institucija koje su tu funkcionisale. Iako za neke nije poznat tačan projektant ni godina gradnje, većinu su podigli poznati beogradski graditelji. U početku, Kneza Mihailova nije bila naročito atraktivna za <em>poslovanje ili stanovanje</em>, ali se to promenilo u prvim decenijama 20. veka, kada postaje središte trgovačkog, političkog i kulturnog života.
                </p>
              </section>

              <img srcSet={`${KnezMihailova44} 450w, ${KnezMihailova4}`} alt="Knez Mihailova 4" loading="lazy" />

              <section lang='sr'>
                <p>
                  <strong>Komunalna infrastruktura</strong> nije pratila brzinu razvoja velelepnih zgrada. U početku se hodalo po nabijenom zemljištu koje je leti bilo prašnjavo, a zimi blatnjavo. Prvo popločavanje izvedeno je <strong>1876. godine drvenom kockom</strong>, a nakon <strong>1886.</strong> granitnom. Do <strong>1892.</strong> ulica se snabdevala vodom iz <em>Delijske česme</em>, a tada je Beograd dobio prvi vodovod. Iako Beograd dobija električno osvetljenje 1891. godine, prva sijalica nije postavljena u Kneza Mihailova, ali je to bila <strong>prva beogradska ulica sa uličnom električnom rasvetom</strong>. Kanalizaciju je dobila tek <strong>1908. godine</strong>.
                </p>
              </section>

              <img srcSet={`${KnezMihailova55} 450w, ${KnezMihailova5}`} alt="Knez Mihailova 5" loading="lazy" />

              <section lang='sr'>
                <p>
                  Prema pojedinim zapisima, <strong>Kneza Mihailova</strong> je prva ulica u Beogradu koja je zvanično dobila ime. <strong>Odluku</strong> je donela uprava varoši Beograda <strong>1870. godine</strong>, dok drugi izvori tvrde da se to dogodilo tek <strong>1872.</strong> Ipak, jedno je sigurno – <em>Kneza Mihailova nikada nije menjala ime</em>, što je prava retkost u beogradskoj istoriji.
                </p>
              </section>

              <img srcSet={`${KnezMihailova66} 450w, ${KnezMihailova6}`} alt="Knez Mihailova 6" loading="lazy" />

              <section lang='sr'>
                <p>
                  Potpuna <strong>rekonstrukcija Kneza Mihailova</strong> izvedena je <strong>1988. godine</strong> prema projektu arhitekte <em>Branislava Jovina</em>. Radovi su započeti u aprilu, a <strong>20. oktobra</strong> iste godine ulica je otvorena za pešake. Pre rekonstrukcije postojali su kolovoz i trotoari, dok je nakon radova ulica u potpunosti postala <strong>pešačka zona</strong>, u potpunosti prilagođena savremenim potrebama urbanog pešačkog prostora.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang='en'> <p> The origin and development of Belgrade’s most famous street, which today is a strictly <strong>pedestrian zone</strong>, is most closely associated with two figures – <strong>Prince Mihailo Obrenović</strong>, known for his advocacy of Belgrade’s Europeanization, and <strong>Emilijan Josimović</strong>, often referred to as the <em>“first Serbian urban planner”</em>. Josimović’s plan was published in <strong>1867</strong> – the same year Prince Mihailo received the keys to the Belgrade Fortress from Ali Riza Pasha, marking the <em>end of Ottoman rule</em> in Serbia. </p> </section>
              <img srcSet={`${KnezMihailova22} 450w, ${KnezMihailova2}`} alt="Knez Mihailova 2" loading="lazy" />

              <section lang='en'> <p> The <strong>implementation of Josimović’s plan</strong> began in 1869, with the redevelopment of <strong>Delijska Street</strong>, now part of Knez Mihailova, stretching from Kralja Petra Street to Vuka Karadžića Street. On the left side was the former garden of Prince Aleksandar Karađorđević, which, after Prince Miloš Obrenović returned to power in 1858, was confiscated and turned into state property. By <strong>1870</strong>, the street had been extended to Terazije, but connecting it with Kalemegdan progressed more slowly due to numerous <em>private properties</em>. Despite some deviations, most of the cross streets were built in accordance with Josimović’s urban plan. </p> </section>
              <img srcSet={`${KnezMihailova33} 450w, ${KnezMihailova3}`} alt="Knez Mihailova 3" loading="lazy" />

              <section lang='en'> <p> Only a few houses on Knez Mihailova, built <strong>before Josimović’s plan</strong>, still stand today. The oldest include the former hotels <em>“Greek Queen”</em> (No. 51) and <em>“Russia”</em> (No. 38). Each building holds <strong>historical, architectural, or cultural value</strong>—whether because of the individuals who built them, the events that took place there, or the institutions they housed. Although the exact architect or year of construction is unknown for some buildings, most were erected by renowned Belgrade builders. Initially, Knez Mihailova was not particularly attractive for <em>business or residence</em>, but that changed in the early 20th century when it became the center of commercial, political, and cultural life. </p> </section>
              <img srcSet={`${KnezMihailova44} 450w, ${KnezMihailova4}`} alt="Knez Mihailova 4" loading="lazy" />

              <section lang='en'> <p> <strong>Utility infrastructure</strong> did not keep pace with the rapid development of grand buildings. At first, the street was simply compacted earth—dusty in summer and muddy in winter. The first paving was done in <strong>1876 with wooden blocks</strong>, and after <strong>1886</strong>, with granite. Until <strong>1892</strong>, the street’s water supply came from the <em>Delijska Fountain</em>, after which Belgrade installed its first waterworks. Although electric lighting came to Belgrade in 1891, the first lightbulb wasn’t installed in Knez Mihailova—but it did become the <strong>first Belgrade street with public electric street lighting</strong>. A sewage system was added only in <strong>1908</strong>. </p> </section>
              <img srcSet={`${KnezMihailova55} 450w, ${KnezMihailova5}`} alt="Knez Mihailova 5" loading="lazy" />

              <section lang='en'> <p> According to some records, <strong>Knez Mihailova</strong> was the first street in Belgrade to be officially named. The <strong>decision</strong> was made by the city administration in <strong>1870</strong>, although other sources claim it happened in <strong>1872</strong>. One thing is certain – <em>Knez Mihailova has never changed its name</em>, a true rarity in Belgrade’s history. </p> </section>
              <img srcSet={`${KnezMihailova66} 450w, ${KnezMihailova6}`} alt="Knez Mihailova 6" loading="lazy" />

              <section lang='en'> <p> A complete <strong>reconstruction of Knez Mihailova</strong> was carried out in <strong>1988</strong> according to the design by architect <em>Branislav Jovin</em>. The works began in April, and on <strong>October 20th</strong> of the same year, the street was officially opened for pedestrians. Prior to the reconstruction, it had a roadway and sidewalks, but following the renovation, the street became a <strong>fully pedestrian zone</strong>, completely adapted to the modern needs of urban pedestrian space. </p> </section>

            </>
          )}

      </div>

    </>
  );
};

export default KnezMihailova;