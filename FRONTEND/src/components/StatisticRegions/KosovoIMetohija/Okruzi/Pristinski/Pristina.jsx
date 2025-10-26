/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import pristina1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/desktop/pristina1.jpg";
import pristina2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/desktop/pristina2.jpg";
import pristina3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/desktop/pristina3.jpg";
import pristina4 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/desktop/pristina4.jpg";
import pristina5 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/desktop/pristina5.jpg";
import pristina11 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/mobile/Mpristina1.jpg";
import pristina22 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/mobile/Mpristina2.jpg";
import pristina33 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/mobile/Mpristina3.jpg";
import pristina44 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/mobile/Mpristina4.jpg";
import pristina55 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Pristina/mobile/Mpristina5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Pristina = () => {
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

        <title>{switchLanguage === 'rs' ? "Priština – Istorija, kultura i priroda | Serbia Wonders" : "Priština – History, Culture, and Nature | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Priština, glavni grad Kosova, bogata je istorijom, kulturnim znamenitostima kao što su Narodna biblioteka i Muzej Kosova i Metohije, kao i prirodnim lepotama poput Parka prirode Grmija."
            :
            "Pristina, the capital of Kosovo, is rich in history and cultural landmarks such as the National Library and Museum of Kosovo and Metohija, alongside natural attractions like Grmija Nature Park."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Priština, Kosovo, Narodna biblioteka Ivo Andrić, Muzej Kosova i Metohije, noćni život Priština, Park prirode Grmija, istorija Kosova"
            :
            "Pristina, Kosovo, Ivo Andrić National Library, Kosovo and Metohija Museum, Pristina nightlife, Grmija Nature Park, Kosovo history"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/pristina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/pristina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/pristina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/pristina"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pristinskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${pristina11} 450w, ${pristina1} `} alt="Priština 1" loading="lazy" />

        <h1>Priština</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  Tokom srednjeg veka, <strong>Priština</strong> je postala važan grad unutar <strong>Srpskog kraljevstva</strong>,
                  a kasnije i <strong>Srpskog carstva</strong>. U blizini grada, srpski kralj <strong>Milutin Nemanjić</strong>
                  podigao je manastir <strong>Gračanicu</strong>, koji je i danas značajan kulturni spomenik. Godine 1389.
                  na <strong>Gazimestanu</strong>, nedaleko Prištine, odigrala se čuvena <strong>Bitka na Kosovu</strong>,
                  u kojoj su poginuli srpski vladar <strong>knez Lazar Hrebeljanović</strong> i osmanski sultan <strong>Murat I</strong>.
                  Iako je srpska vojska u toj bitci ostvarila pobedu, <strong>Osmansko Carstvo</strong> je kasnije osvojilo Balkan
                  i veliki deo Evrope. Nakon bitke, stanovnici Prištine su bili pod snažnim uticajem islamizacije,
                  koja je bila najizraženija među <strong>Albancima</strong>, dok su <strong>Srbi</strong> nastavili sa praksom
                  <strong>pravoslavlja</strong>. Srpsko stanovništvo je bilo obavezano da plaća <em>džiziju</em>,
                  porez koji je nemuslimansko stanovništvo moralo plaćati Osmanskom Carstvu.
                </p>
              </section>

              <img srcSet={`${pristina22} 450w, ${pristina2}`} alt="Narodna biblioteka u Prištini" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Narodna i univerzitetska biblioteka „Ivo Andrić”</strong> predstavlja najvažniju biblioteku
                  na <strong>Kosovu i Metohiji</strong>, smeštenu u <strong>Prištini</strong>. Njena misija je da prikuplja,
                  čuva, promoviše i učini dostupnim dokumentarno i intelektualno nasleđe. Biblioteka je poznata po jedinstvenoj
                  istoriji i arhitektonskom stilu zgrade, koju je projektovao jugoslovenski i hrvatski arhitekta
                  <strong>Andrija Mutnjaković</strong>. Zbirke koje pripadaju hrišćanskoj i muslimanskoj verskoj zajednici
                  smatraju se najstarijim arhivskim bibliotekama na Kosovu i Metohiji. Biblioteka je zvanično otvorena
                  <strong>novembra 1944. godine u Prizrenu</strong>, a <strong>1982. godine</strong> je premeštena u sadašnju
                  zgradu u Prištini.
                </p>
              </section>

              <img srcSet={`${pristina33} 450w, ${pristina3}`} alt="Muzej Kosova i Metohije" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Muzej Kosova i Metohije</strong> nalazi se u <strong>Prištini</strong> i osnovan je <strong>1949. godine</strong>
                  od strane vlasti <strong>FNR Jugoslavije</strong>. To je najveći muzej na Kosovu i Metohiji, smešten u zgradi
                  iz <strong>1889. godine</strong>, izgrađenoj u <strong>austro-ugarskom stilu</strong>, koja je ranije bila
                  sedište visoke vojne komande.
                  <br /><br />
                  Muzej je prva institucija kulturnog nasleđa na Kosovu i Metohiji, osnovana sa ciljem očuvanja, restauracije,
                  konzervacije i prezentacije pokretnog nasleđa. Zgrada je značajna i sa arhitektonske strane, kao i zbog svoje
                  lokacije u starom jezgru gradskog centra.
                </p>
              </section>

              <img srcSet={`${pristina44} 450w, ${pristina4}`} alt="Noćni život u Prištini" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Noćni život u Prištini</strong> je živahan i dinamičan, sa brojnim barovima, restoranima i klubovima
                  koji privlače lokalne i međunarodne posetioce. Grad je poznat po opuštenoj atmosferi, a popularna mesta
                  poput <strong>Trga Majke Tereze</strong> i ulica u centru grada nude širok izbor zabave, muzike i hrane.
                  Mladi ljudi često izlaze u kafiće i noćne klubove gde se održavaju koncerti i tematske večeri.
                  <strong>Priština</strong> je takođe domaćin različitim kulturnim događanjima i manifestacijama, čime
                  obogaćuje noćnu scenu i nudi nešto za svakog.
                </p>
              </section>

              <img srcSet={`${pristina55} 450w, ${pristina5}`} alt="Park prirode Grmija" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Park prirode Grmija</strong> smešten je na istočnom rubu <strong>Velikokosovske kotline</strong>,
                  u neposrednoj blizini <strong>Prištine</strong>, i predstavlja glavno izletište za stanovnike grada.
                  Njegovu severnu granicu čini dolina reke <strong>Prištavke</strong>, dok južnu čine reke <strong>Mramorska</strong>,
                  <strong>Badovačka</strong> i <strong>Gračanka</strong>. Najistaknutiji reljefni oblik je venac
                  <strong>Butovačkog brega (1.095 m)</strong>, koji je takođe hidrogeografsko čvorište reka
                  <strong>Prištavke</strong>, <strong>Veluše</strong> i <strong>Gračanke</strong>. Najznačajnija geomorfološka
                  celina je izvorni basen <strong>Veluše</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  During the Middle Ages, <strong>Priština</strong> became an important city within the <strong>Serbian Kingdom</strong>,
                  and later the <strong>Serbian Empire</strong>. Near the city, Serbian King <strong>Milutin Nemanjić</strong>
                  built the <strong>Gračanica Monastery</strong>, which remains a significant cultural monument to this day.
                  In 1389, on <strong>Gazimestan</strong>, near Priština, the famous <strong>Battle of Kosovo</strong> took place,
                  in which the Serbian ruler <strong>Prince Lazar Hrebeljanović</strong> and the Ottoman Sultan <strong>Murad I</strong> were killed.
                  Although the Serbian army achieved a victory in that battle, the <strong>Ottoman Empire</strong> later conquered the Balkans
                  and much of Europe. After the battle, the inhabitants of Priština came under strong influence of Islamization,
                  which was most prominent among the <strong>Albanians</strong>, while the <strong>Serbs</strong> continued practicing
                  <strong>Orthodox Christianity</strong>. The Serbian population was required to pay the <em>jizya</em>,
                  a tax that non-Muslim subjects had to pay to the Ottoman Empire.
                </p>
              </section>

              <img srcSet={`${pristina22} 450w, ${pristina2}`} alt="National Library in Priština" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>National and University Library "Ivo Andrić"</strong> is the most important library
                  in <strong>Kosovo and Metohija</strong>, located in <strong>Priština</strong>. Its mission is to collect,
                  preserve, promote, and make accessible the documentary and intellectual heritage.
                  The library is known for its unique history and architectural style, designed by Yugoslav and Croatian architect
                  <strong>Andrija Mutnjaković</strong>. The collections belonging to Christian and Muslim religious communities
                  are considered the oldest archival libraries in Kosovo and Metohija. The library was officially opened
                  in <strong>November 1944 in Prizren</strong>, and in <strong>1982</strong> was relocated to its current building in Priština.
                </p>
              </section>

              <img srcSet={`${pristina33} 450w, ${pristina3}`} alt="Museum of Kosovo and Metohija" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Museum of Kosovo and Metohija</strong> is located in <strong>Priština</strong> and was founded in <strong>1949</strong>
                  by the authorities of the <strong>FNR Yugoslavia</strong>. It is the largest museum in Kosovo and Metohija, housed in a building
                  from <strong>1889</strong>, built in the <strong>Austro-Hungarian style</strong>, which previously served as the headquarters
                  of the high military command.
                  <br /><br />
                  The museum is the first cultural heritage institution in Kosovo and Metohija, founded with the aim of preserving,
                  restoring, conserving, and presenting movable heritage. The building is notable both architecturally and for its
                  location in the old urban core of the city.
                </p>
              </section>

              <img srcSet={`${pristina44} 450w, ${pristina4}`} alt="Nightlife in Priština" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Nightlife in Priština</strong> is lively and dynamic, with numerous bars, restaurants, and clubs
                  attracting both local and international visitors. The city is known for its relaxed atmosphere, and popular spots
                  like <strong>Mother Teresa Square</strong> and the downtown streets offer a wide selection of entertainment,
                  music, and food. Young people often gather in cafes and nightclubs where concerts and themed nights are held.
                  <strong>Priština</strong> also hosts various cultural events and festivals, enriching the night scene and
                  offering something for everyone.
                </p>
              </section>

              <img srcSet={`${pristina55} 450w, ${pristina5}`} alt="Germia Nature Park" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Germia Nature Park</strong> is located on the eastern edge of the <strong>Great Kosovo Basin</strong>,
                  near <strong>Priština</strong>, and serves as the main recreational area for the city's residents.
                  Its northern boundary is formed by the <strong>Prištavka River</strong> valley, while the southern boundary
                  is defined by the <strong>Mramorska</strong>, <strong>Badovacka</strong>, and <strong>Gračanka</strong> rivers.
                  The most prominent relief feature is the ridge of <strong>Butovac Hill (1,095 m)</strong>, which is also the hydrographic
                  junction of the <strong>Prištavka</strong>, <strong>Veluša</strong>, and <strong>Gračanka</strong> rivers.
                  The most significant geomorphological unit is the source basin of <strong>Veluša</strong>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default Pristina;