/* eslint-disable react/no-unknown-property */
import djerdap1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/desktop/djerdap1.jpg";
import djerdap2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/desktop/djerdap6.jpg";
import djerdap3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/desktop/djerdap3.jpg";
import djerdap4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/desktop/djerdap4.jpg";
import djerdap5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/desktop/djerdap5.jpg";
import djerdap11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/mobile/djerdapM1.jpg";
import djerdap22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/mobile/djerdapM6.jpg";
import djerdap33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/mobile/djerdapM3.jpg";
import djerdap44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/mobile/djerdapM4.jpg";
import djerdap55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/DjerdapskaKlisura/mobile/djerdapM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const DjerdapskaKlisura = () => {
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

        <title>{switchLanguage === 'rs' ? "Đerdapska Klisura – Železna Vrata Dunava | Serbia Wonders" : "Đerdap Gorge – The Iron Gates of the Danube | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Đerdapska klisura, najveća i najlepša rečna klisura u Evropi. Spektakularni pejzaži, Nacionalni park Đerdap, Lepenski Vir, rimski put i hidroelektrana Đerdap I."
            :
            "Đerdap Gorge, the largest and most beautiful river gorge in Europe. Spectacular landscapes, Đerdap National Park, Lepenski Vir, the Roman road, and the Đerdap I hydroelectric power plant."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Đerdapska klisura, Đerdap, Železna vrata, Dunav, Nacionalni park Đerdap, Lepenski vir, Kazan, Gospođin vir, Donji Milanovac, Sip, rimski put, hidroelektrana, prirodne lepote Srbije, turizam u Srbiji"
            :
            "Đerdap Gorge, Đerdap, Iron Gates, Danube, Đerdap National Park, Lepenski Vir, Kazan, Gospođin Vir, Donji Milanovac, Sip, Roman road, hydroelectric plant, natural beauty of Serbia, tourism in Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/djerdapska-klisura`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/djerdapska-klisura"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/djerdapska-klisura"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/djerdapska-klisura"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(borskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${djerdap11} 450w, ${djerdap1} `} alt="Đerdapska Klisura 1" loading='lazy' />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Đerdapska Klisura</h1>

              <section lang="sr">
                <p>
                  <strong>Đerdapska klisura</strong>, najveća i najlepša rečna klisura u Evropi, vekovima
                  očarava posetioce iz svih delova sveta. Njeni jedinstveni pejzaži ne
                  samo da svedoče o bogatoj istoriji ovog kraja, već i čuvaju tragove prve
                  evropske civilizacije. Oduvek su ljudi osećali snažan poriv da istraže i
                  osvoje divlju lepotu ovog područja.
                  <br /><br />
                  Ova impozantna klisura nastala je usled drevnih geoloških promena, kada
                  se deo <strong>Karpatskog masiva</strong> rascenio, omogućivši isticanje <strong>Panonskog mora</strong> u
                  <strong>Crno more</strong>. <strong>Đerdap</strong> zapravo obuhvata četiri zasebne klisure, svaka sa
                  svojim jedinstvenim karakteristikama i prirodnim lepotama.
                </p>
              </section>

              <img srcSet={`${djerdap44} 450w, ${djerdap4}`} alt="Đerdapska Klisura 2" loading='lazy' />

              <section lang="sr">
                <p>
                  Tragovi ljudskih nastojanja da osvoje i prilagode ove surove predele
                  vidljivi su i danas – urezani u stene klisure, razasuti duž peščanih
                  obala i sačuvani u naseljima koja su vekovima opstajala na ovim
                  prostorima, od rimskih legija do savremenih vremena.
                  <br /><br />
                  <strong>Đerdapski deo Dunava</strong> proteže se na <strong>119 kilometara</strong> i odlikuje se
                  dinamičnim i nepredvidivim karakteristikama. Nekada je ovaj sektor bio
                  poznat po velikom padu reke, snažnim vrtlozima i visokim brzinama vode,
                  kao i iznenadnim promenama širine korita i dubine. Plovidba je ovde
                  oduvek predstavljala ozbiljan izazov, prepun skrivenih opasnosti od
                  podvodnih stena i hridina.
                </p>
              </section>

              <img srcSet={`${djerdap33} 450w, ${djerdap3}`} alt="Đerdapska Klisura 3" loading='lazy' />

              <section lang="sr">
                <p>
                  Pre izgradnje hidroenergetskog sistema <em>„Đerdap I“</em>, Dunav je na najužem
                  delu klisure bio širok samo <strong>165 metara</strong>, dok je njegova najveća dubina
                  dostizala <strong>80 metara</strong>. Nakon izgradnje, širina reke porasla je na <strong>220
                    metara</strong>, a dubina na <strong>105 metara</strong>, čime su se značajno promenili uslovi
                  plovidbe.
                  <br /><br />
                  Na izlasku iz Đerdapske klisure, Dunav se naglo širi, ali ni tu nije
                  imao miran tok. Podvodne stene koje su se prostirale duž korita gotovo
                  su ga pregrađivale, a pri niskim vodostajima mnoge su izranjale iz vode.
                  To je stvaralo iluziju da bi čovek, skačući s jedne stene na drugu,
                  mogao preći reku s obale na obalu.
                </p>
              </section>

              <img srcSet={`${djerdap22} 450w, ${djerdap2}`} alt="Đerdapska Klisura 4" loading='lazy' />

              <section lang="sr">
                <p>
                  <strong>Đerdapska klisura</strong>, poznata i kao <em>Železna vrata</em>, nosi svoje ime
                  zahvaljujući svojoj snazi, nepredvidivosti i nekadašnjoj neprohodnosti.
                  Ova impozantna klisura zapravo se sastoji od više celina koje se protežu
                  od <strong>Donjeg Milanovca</strong> do <strong>Sipa</strong>: <strong>Gornja klisura</strong>, <strong>Gospođin vir</strong>, <strong>Veliki</strong> i <strong>Mali
                    Kazan</strong>, te <strong>Sipska klisura</strong>, međusobno odvojene tesnacima.
                  <br /><br />
                  Najveća dubina Dunava od <strong>82 metra</strong> zabeležena je u Gospođinom viru, što
                  ga svrstava među najdublje rečne delove na svetu. Najspektakularniji
                  prizori pružaju se u Kazanu, gde se strme stene uzdižu i do <strong>300 metara</strong>
                  iznad reke. Ovde Dunav značajno menja svoju širinu, a njegovo korito
                  poprima oblik nalik posudi – po čemu je ovaj deo klisure i dobio ime.
                </p>
              </section>

              <img srcSet={`${djerdap55} 450w, ${djerdap5}`} alt="Đerdapska Klisura 5" loading='lazy' />

              <section lang="sr">
                <p>
                  Nacionalni park <strong>Đerdap</strong> odlikuje se izuzetno bogatim biljnim i
                  životinjskim svetom, a u njegovom sklopu nalazi se i jedna od najvećih
                  hidroelektrana u ovom delu Evrope, sa ogromnim akumulacionim jezerom.
                  Zahvaljujući povoljnom položaju i jedinstvenoj lepoti, ovo područje ima
                  bogatu i dugu istoriju, što potvrđuju brojni kulturno-istorijski
                  spomenici, poput <strong>Lepenskog vira</strong>, rimskog puta i srednjovekovnih tvrđava.
                  <br /><br />
                  Kada poželite predah od veličanstvenih prirodnih pejzaža, zakoračite u
                  prošlost istražujući jedinstveno neolitsko naselje <strong>Lepenski vir</strong>, staro
                  više od <strong>6000 godina</strong>, ili se divite ostacima rimskih utvrđenja i drevnih
                  tvrđava koje svedoče o burnim vremenima ovog kraja.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Đerdap Gorge</h1>

              <section lang="en">
                <p>
                  <strong>Đerdap Gorge</strong>, the largest and most beautiful river gorge in Europe, has fascinated visitors from all over the world for centuries. Its unique landscapes not only testify to the rich history of this region but also preserve traces of the first European civilization. People have always felt a strong urge to explore and conquer the wild beauty of this area.
                  <br /><br />
                  This impressive gorge was formed due to ancient geological changes when part of the <strong>Carpathian massif</strong> split, allowing the <strong>Pannonian Sea</strong> to flow into the <strong>Black Sea</strong>. <strong>Đerdap</strong> actually encompasses four separate gorges, each with its own unique features and natural beauties.
                </p>
              </section>

              <img srcSet={`${djerdap44} 450w, ${djerdap4}`} alt="Đerdap Gorge 2" loading='lazy' />

              <section lang="en">
                <p>
                  Traces of human efforts to conquer and adapt these harsh areas are still visible today – carved into the rocks of the gorge, scattered along sandy shores, and preserved in settlements that have survived here for centuries, from Roman legions to modern times.
                  <br /><br />
                  The <strong>Đerdap section of the Danube</strong> stretches for <strong>119 kilometers</strong> and is characterized by dynamic and unpredictable features. This sector was once known for its large river falls, strong whirlpools, and high water speeds, as well as sudden changes in riverbed width and depth. Navigation here has always been a serious challenge, full of hidden dangers from submerged rocks and reefs.
                </p>
              </section>

              <img srcSet={`${djerdap33} 450w, ${djerdap3}`} alt="Đerdap Gorge 3" loading='lazy' />

              <section lang="en">
                <p>
                  Before the construction of the hydroelectric system <em>„Đerdap I“</em>, the Danube at the narrowest part of the gorge was only <strong>165 meters</strong> wide, while its greatest depth reached <strong>80 meters</strong>. After construction, the river’s width increased to <strong>220 meters</strong>, and the depth to <strong>105 meters</strong>, significantly changing navigation conditions.
                  <br /><br />
                  At the exit of the Đerdap Gorge, the Danube suddenly widens, but even there its flow was not calm. Submerged rocks stretching along the riverbed almost blocked it, and at low water levels many of them emerged from the water. This created the illusion that a person, jumping from one rock to another, could cross the river from bank to bank.
                </p>
              </section>

              <img srcSet={`${djerdap22} 450w, ${djerdap2}`} alt="Đerdap Gorge 4" loading='lazy' />

              <section lang="en">
                <p>
                  <strong>Đerdap Gorge</strong>, also known as the <em>Iron Gates</em>, owes its name to its power, unpredictability, and former impassability. This impressive gorge actually consists of several parts stretching from <strong>Donji Milanovac</strong> to <strong>Sip</strong>: the <strong>Upper Gorge</strong>, <strong>Gospođin Vir</strong>, the <strong>Great</strong> and <strong>Small Kazan</strong>, and the <strong>Sip Gorge</strong>, separated by narrows.
                  <br /><br />
                  The greatest depth of the Danube, <strong>82 meters</strong>, was recorded in Gospođin Vir, ranking it among the deepest river sections in the world. The most spectacular views are found in Kazan, where steep cliffs rise up to <strong>300 meters</strong> above the river. Here, the Danube significantly changes its width, and its riverbed takes the shape of a basin – from which this part of the gorge gets its name.
                </p>
              </section>

              <img srcSet={`${djerdap55} 450w, ${djerdap5}`} alt="Đerdap Gorge 5" loading='lazy' />

              <section lang="en">
                <p>
                  The Đerdap National Park boasts an exceptionally rich plant and animal world, and within it lies one of the largest hydroelectric power plants in this part of Europe, with a huge reservoir lake. Thanks to its favorable location and unique beauty, this area has a rich and long history, confirmed by numerous cultural and historical monuments such as Lepenski Vir, Roman roads, and medieval fortresses.
                  <br /><br />
                  When you want a break from the magnificent natural landscapes, step into the past by exploring the unique Neolithic settlement of <strong>Lepenski Vir</strong>, over <strong>6000 years</strong> old, or admire the remains of Roman fortifications and ancient fortresses that testify to the turbulent times of this region.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};

export default DjerdapskaKlisura;