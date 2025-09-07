/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import tumane1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/desktop/manastirTumane1.jpg";
import tumane2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/desktop/manastirTumane2.jpg";
import tumane3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/desktop/manastirTumane3.jpg";
import tumane4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/desktop/manastirTumane4.jpg";
import tumane5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/desktop/manastirTumane5.jpg";
import tumane11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/mobile/manastirTumaneM1.jpg";
import tumane22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/mobile/manastirTumaneM2.jpg";
import tumane33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/mobile/manastirTumaneM3.jpg";
import tumane44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/mobile/manastirTumaneM4.jpg";
import tumane55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/ManastirTumane/mobile/manastirTumaneM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirTumane = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Tumane – Svetilište Duha i Vere u Eparhiji Braničevskoj | Serbia Wonders" : "Tumane Monastery – A Sanctuary of Spirit and Faith in the Braničevo Eparchy | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Tumane, smešten u podnožju Golubačkih planina, zadužbina Miloša Obilića. Poznat po Svetom Zosimu, čudotvornom izvoru i duhovnom značaju. Jedno od najposećenijih svetilišta u Srbiji."
            :
            "Tumane Monastery, located at the foot of the Golubac Mountains, is a legacy of Miloš Obilić. Known for Saint Zosimus, its healing spring, and deep spiritual significance. One of Serbia's most visited sacred places."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Tumane, Sveti Zosim, Miloš Obilić, Eparhija Braničevska, srpski manastir, svetilište, čudotvorni izvor, Golubac, pravoslavlje, duhovni turizam"
            :
            "Tumane Monastery, Saint Zosimus, Miloš Obilić, Braničevo Diocese, Serbian monastery, spiritual site, healing spring, Golubac, Orthodox Christianity, religious tourism"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-tumane`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-tumane"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-tumane"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/manastir-tumane"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(branicevskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${tumane11} 450w, ${tumane1} `} alt="Manastir Tumane 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Manastir Tumane</h2>

              <section lang="sr">
                <p>
                  Manastir Tumane nalazi se oko <strong>10 kilometara</strong> od <strong>Golupca</strong>, u podnožju
                  <strong>Golubačkih planina</strong>, na levoj obali <strong>Tumanske reke</strong>. Okružen gustim šumama,
                  skriven je od pogleda i odiše mirom. Smešten u prelepom prirodnom
                  ambijentu, deluje kao mesto predodređeno za monaški život i molitvenu
                  tišinu.
                  <br />
                  <br /> Prema predanju koje je i danas živo, manastir je zadužbina
                  kosovskog junaka <strong>Miloša Obilića</strong>. Veruje se da je on živeo i vladao delom
                  današnjeg <strong>Braničeva</strong>.
                </p>
              </section>

              <img srcSet={`${tumane22} 450w, ${tumane2} `} alt="Manastir Tumane 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Prema predanju, <strong>Miloš Obilić</strong> je lovio u šumama u okolini današnjeg
                  manastira. Tokom lova, nehotično je ranio pustinjaka, <strong>Svetog Zosima</strong>.
                  Pokušavajući da mu spase život, poneo ga je ka svom dvoru. Međutim, na
                  mestu gde se danas nalazi manastir, svetac ga je zamolio da ga spusti,
                  rekavši: „<em>Tu mani i pusti me da umrem.</em>“
                  <br />
                  <br /> Naziv manastira sačuvao se do danas, zajedno sa sećanjem na
                  Svetog Zosima. Vernici već vekovima dolaze u manastir da zatraže njegov
                  blagoslov i pronađu duhovnu utehu.
                </p>
              </section>

              <img srcSet={`${tumane33} 450w, ${tumane3} `} alt="Manastir Tumane 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Manastir se prvi put pominje u turskim popisima iz <strong>1572–1573. godine</strong>.
                  Drugi put se spominje u <strong>16. veku</strong>, za vreme sultana <strong>Murata III</strong>, u
                  kontekstu dažbina koje je plaćao turskom sultanu.
                  <br />
                  <br /> Pred Prvu veliku seobu Srba <strong>1690. godine</strong>, u želji da podunavske
                  Srbe podstaknu na ustanak protiv Osmanlija, u Tumanu su se sastali
                  patrijarh <strong>Arsenije III Čarnojević</strong> i grof <strong>Đorđe Branković</strong>.
                  <br />
                  <br /> Egzarh <strong>Maksim (Ratković)</strong>, izaslanik mitropolita beogradskog,
                  posetio je u prvoj polovini <strong>18. veka</strong> manastire u Braničevu. U svom
                  izveštaju o manastiru Tumane beleži da je crkva bila pokrivena crepom,
                  što je za tadašnje prilike bila prava retkost.
                </p>
              </section>

              <img srcSet={`${tumane44} 450w, ${tumane4} `} alt="Manastir Tumane 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Isposnica <strong>Zosima Sinajita</strong> nalazi se oko jedan kilometar od manastira
                  Tumane, duboko u gustoj šumi. Unutar stene nalaze se dve pećine,
                  povezane uskim prolazom.
                  <br />
                  <br />
                  <strong>Zosim Tumanski</strong> je živeo u jednoj od pećina, dok je u drugoj provodio
                  vreme u molitvi. Danas je na mestu njegove molitvene kelije uređena
                  kapela. Pećine su gotovo netaknute ljudskom rukom, a u njima je sačuvan
                  i nakit iz prošlih vremena.
                  <br />
                  <br />
                  Pored isposnice se nalazi čudotvorni izvor, a iza njega prelep šumski
                  vodopad sa naslagama bigra. Na tom mestu se nalazi i Spomenik prirode
                  <em>„Bigrena akumulacija kod manastira Tumane“</em>.
                </p>
              </section>

              <img srcSet={`${tumane55} 450w, ${tumane5} `} alt="Manastir Tumane 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Crkva koju je opisao Egzarh Maksim bila je prvobitna manastirska crkva,
                  koja je postojala sve do <strong>Kočine Krajine</strong>, kada su je Turci spalili. Narod
                  je obnovio spaljeni manastir velikim zalaganjem oberkneza <strong>Pavla
                    Bogdanovića</strong> u vreme vladavine kneza <strong>Miloša</strong>. <strong>Joakim Vujić</strong> je zabeležio da
                  je obnovljena tumanjska crkva bila male veličine i da je delimično bila
                  oslikana.
                  <br />
                  <br />
                  Godine <strong>1910.</strong> crkva je bila minirana i zbog velikih oštećenja, po naredbi
                  vlasti, srušena do temelja. Tokom narednih četrnaest godina manastir
                  Tumane bio je bez crkve, jer su mnoge okolnosti, među kojima i <strong>Prvi
                    svetski rat</strong>, sprečavale obnovu.
                  <br />
                  <br />
                  Sadašnja crkva podignuta je i osvećena <strong>1924. godine</strong>. Novi izgled
                  manastir je dobio dolaskom rusko-srpskog bratstva iz manastira <strong>Miljkovo</strong>
                  <strong>1936. godine</strong>. Tada je počela aktivna obnova, pre svega u
                  duhovno-bogoslužbenom smislu, a manastir je ojačao i ekonomski.
                  Izgrađeni su novi veliki konak i prateći objekti koji su bili neophodni
                  za život i rad monaškog bratstva.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Tumane Monastery</h2>

              <section lang="en">
                <p>
                  The Tumane Monastery is located about <strong>10 kilometers</strong> from <strong>Golubac</strong>, at the foothills
                  of the <strong>Golubac Mountains</strong>, on the left bank of the <strong>Tumane River</strong>. Surrounded by dense forests,
                  it is hidden from view and exudes peace. Situated in a beautiful natural
                  setting, it appears as a place destined for monastic life and prayerful
                  silence.
                  <br />
                  <br /> According to tradition, which is still alive today, the monastery was founded
                  by the Kosovo hero <strong>Miloš Obilić</strong>. It is believed that he lived and ruled
                  part of today's <strong>Braničevo</strong>.
                </p>
              </section>

              <img srcSet={`${tumane22} 450w, ${tumane2} `} alt="Tumane Monastery 2" loading="lazy" />

              <section lang="en">
                <p>
                  According to tradition, <strong>Miloš Obilić</strong> was hunting in the forests around the current
                  monastery. During the hunt, he accidentally wounded a hermit, <strong>Saint Zosim</strong>.
                  Trying to save his life, he carried him towards his court. However, at
                  the place where the monastery now stands, the saint asked him to set him down,
                  saying: "<em>Stop here and let me die.</em>"
                  <br />
                  <br /> The name of the monastery has been preserved to this day, along with the memory of
                  Saint Zosim. For centuries, believers have come to the monastery to ask for his
                  blessing and find spiritual comfort.
                </p>
              </section>

              <img srcSet={`${tumane33} 450w, ${tumane3} `} alt="Tumane Monastery 3" loading="lazy" />

              <section lang="en">
                <p>
                  The monastery was first mentioned in Ottoman records from <strong>1572–1573</strong>.
                  It was mentioned again in the <strong>16th century</strong>, during the reign of Sultan <strong>Murad III</strong>,
                  in the context of taxes paid to the Ottoman sultan.
                  <br />
                  <br /> Before the First Great Serbian Migration in <strong>1690</strong>, with the aim to encourage
                  the Danube Serbs to rise against the Ottomans, the Patriarch <strong>Arsenije III Čarnojević</strong> and Count <strong>Đorđe Branković</strong> met in Tumane.
                  <br />
                  <br /> Exarch <strong>Maxim (Ratković)</strong>, envoy of the Metropolitan of Belgrade,
                  visited monasteries in Braničevo in the first half of the <strong>18th century</strong>. In his
                  report on the Tumane monastery, he noted that the church was covered with tiles,
                  which was quite rare at that time.
                </p>
              </section>

              <img srcSet={`${tumane44} 450w, ${tumane4} `} alt="Tumane Monastery 4" loading="lazy" />

              <section lang="en">
                <p>
                  The hermitage of <strong>Zosim of Sinai</strong> is located about one kilometer from the Tumane
                  Monastery, deep in a dense forest. Inside the rock, there are two caves,
                  connected by a narrow passage.
                  <br />
                  <br />
                  <strong>Zosim of Tumane</strong> lived in one of the caves, while he spent time praying in the other.
                  Today, a chapel has been arranged on the site of his prayer cell. The caves are almost untouched by
                  human hands, and jewelry from past times has been preserved inside them.
                  <br />
                  <br />
                  Next to the hermitage, there is a miraculous spring, and behind it, a beautiful forest waterfall
                  with travertine deposits. On this site is also the Nature Monument
                  <em>"Travertine Accumulation near Tumane Monastery"</em>.
                </p>
              </section>

              <img srcSet={`${tumane55} 450w, ${tumane5} `} alt="Tumane Monastery 5" loading="lazy" />

              <section lang="en">
                <p>
                  The church described by Exarch Maxim was the original monastery church,
                  which existed until the <strong>Kočina Krajina</strong> uprising, when it was burned by the Turks.
                  The people rebuilt the burned monastery through the great efforts of Oberknezes <strong>Pavle Bogdanović</strong>
                  during the rule of Prince <strong>Miloš</strong>. <strong>Joakim Vujić</strong> recorded that the restored
                  Tumane church was small in size and partially painted.
                  <br />
                  <br />
                  In <strong>1910</strong>, the church was mined and due to extensive damage, demolished down to the foundations by
                  order of the authorities. For the next fourteen years, the Tumane Monastery was without a church, as
                  many circumstances, including the <strong>First World War</strong>, prevented its restoration.
                  <br />
                  <br />
                  The current church was built and consecrated in <strong>1924</strong>. The monastery received its new appearance
                  with the arrival of the Russian-Serbian brotherhood from the Miljkovo monastery in <strong>1936</strong>.
                  Then active restoration began, primarily in the spiritual and liturgical sense, and the monastery also strengthened economically.
                  New large lodging and accompanying facilities necessary for the life and work of the monastic brotherhood
                  were built.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirTumane;