/* eslint-disable react/no-unknown-property */
import manastirSukovo1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/desktop/manastirSukovo1.jpg";
import manastirSukovo2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/desktop/manastirSukovo2.jpg";
import manastirSukovo3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/desktop/manastirSukovo3.jpg";
import manastirSukovo4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/desktop/manastirSukovo4.jpg";
import manastirSukovo5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/desktop/manastirSukovo5.jpg";
import manastirSukovo11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/mobile/manastirSukovoM1.jpg";
import manastirSukovo22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/mobile/manastirSukovoM2.jpg";
import manastirSukovo33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/mobile/manastirSukovoM3.jpg";
import manastirSukovo44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/mobile/manastirSukovoM4.jpg";
import manastirSukovo55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ManastirSukovo/mobile/manastirSukovoM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirSukovo = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Sukovo – Duhovni mir i istorija blizu Pirota | Serbia Wonders" : "Monastery Sukovo – Spiritual Peace and History near Pirot | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Sukovski manastir kod Pirota, posvećen Uspenju Presvete Bogorodice, mesto je duhovnog mira i bogate istorije. Okružen je gustim šumama i kanjonom reke Jerme, sa fascinantnim narodnim predanjem."
            :
            "Sukovo Monastery near Pirot, dedicated to the Assumption of the Blessed Virgin Mary, is a place of spiritual peace and rich history. Surrounded by dense forests and the Jerma river canyon, it holds fascinating folk tales."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Sukovo, Sukovski manastir, Pirot, Jerma, Carev kamen, Uspenje Presvete Bogorodice, istorija manastira, srpski manastiri, kulturno dobro, duhovni mir, freske, arheološki lokalitet"
            :
            "Sukovo Monastery, monastery near Pirot, Jerma river, Carev kamen, Assumption of Virgin Mary, Serbian monasteries, cultural heritage, spiritual peace, frescoes, archaeological site"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/manastir-sukovo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/manastir-sukovo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/manastir-sukovo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/manastir-sukovo"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pirotskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${manastirSukovo11} 450w, ${manastirSukovo1} `} alt="Manastir Sukovo 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Sukovo</h1>

              <section lang="sr">
                <p>
                  <strong>Sukovski manastir</strong> nalazi se u neposrednoj blizini sela <strong>Sukovo</strong>, 18 km istočno od <strong>Pirota</strong>, na desnoj obali reke <strong>Jerme</strong>, okružen vrletima gustog šumovitog brda <em>Carev kamen</em>. Zbog zaklonjenosti od glavnog puta i impresivnog prirodnog okruženja – guste šume i neposredne blizine klisure reke Jerme – <strong>Sukovski manastir</strong> već pri prvom susretu ostavlja snažan emotivni utisak spokoja i duhovnog mira. Iako još uvek nema dokumentovanih dokaza o postojanju starijeg, čak i ranohristijanskog sakralnog objekta na mestu današnjeg manastira, istoričari ne isključuju mogućnost da se prvobitna građevina datira u <em>IV vek</em>. Današnji izgled manastira, posvećenog <strong>Uspenju Presvete Bogorodice</strong>, potiče iz perioda <em>1857–1859</em>, a njegov nastanak prati zanimljivo narodno predanje koje doprinosi folklornoj vrednosti manastira.
                </p>
              </section>

              <img srcSet={`${manastirSukovo22} 450w, ${manastirSukovo2}`} alt="Manastir Sukovo 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Današnje celokupno manastirsko imanje pripadalo je <strong>Turčinu Sali-begu</strong> iz Pirota, čiji je sin <strong>Emin</strong> često boravio na tom mestu. Tokom jedne šetnje, Sali-beg sreće <strong>Velju</strong>, siroče iz <strong>Velikog Sela</strong> kod Krupca, koji je na mestu današnje crkve čuvao ovce i zaspao. Velja je bio neobično dete, koje je u snovima često viđalo <strong>Presvetu Bogorodicu</strong> okruženu anđelima. U snu mu je rekla da na tom mestu podigne manastir. Kada je krupački pop <strong>Jovan Madić</strong>, koji je Velju prihvatio kao sina, poverovao u snove, naložio je da se na mestu zvanom <em>"Crkvište"</em> otkopa manastir. Prilikom iskopavanja pronašli su ikonu i kandilo, što je ukazivalo na postojanje starog hrama.
                </p>
              </section>

              <img srcSet={`${manastirSukovo33} 450w, ${manastirSukovo3}`} alt="Manastir Sukovo 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Mladog i bahatog <strong>Emina</strong> razbesnela su ova dešavanja, pa je hteo da oskrnavi mesto. U tom trenutku mu se telo oduzelo, a razum izgubio. Njegovi roditelji, uplašeni, pozvaše popa Jovana. On izgovori molitvu <strong>Bogorodici</strong>, nakon čega se Eminu odmah olakšalo. Nakon što je <strong>Sali-beg</strong> poljubio ruku Velji i poklonio se svetom mestu, njegov sin se potpuno oporavio. Sali-beg se tada zavetovao da će pomoći u izgradnji manastira. Godine <strong>1856</strong>, pop Jovan dobija <em>carski ferman</em> iz <strong>Konstantinopola</strong> kojim se dozvoljava obnova crkve. Već <strong>1857. godine</strong>, pop Jovan prodaje svoje imanje u Krupcu i sa Veljom se nastanjuje u Sukovu. Ubrzo, <strong>vladika Antim</strong> zamonašuje Velju pod imenom <strong>monah Venijamin</strong>. On i <strong>monahinja Efimija</strong> prikupljaju priloge i završavaju izgradnju crkve, o čemu svedoči natpis: <em>„Poče se leto 1857. završi se leto 1859.“</em>
                </p>
              </section>

              <img srcSet={`${manastirSukovo44} 450w, ${manastirSukovo4}`} alt="Manastir Sukovo 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Hram <strong>Presvete Bogorodice</strong> je spolja jednostavna longitudinalna građevina u obliku trikona. Sa pomalo asimetričnim tlocrtom, ravnim pročeljem i bočnim zidovima sa retkim polukružnim prozorima, odaje utisak skromnog, provincijalnog arhitektonskog stila. Zidali su ga meštani od <em>sivog tesanog kamena</em> i kreča, a krov je prekriven običnom ćeramidom. Na vrhu se nalazi <em>osmerokutni tambur</em> ukrašen kupama kanaličama i reljefnim vencem od opeke – elementima koji predstavljaju skroman odjek <strong>moravskog graditeljskog stila</strong>. Slični ukrasi nalaze se i oko tambura i konhi sa severne i južne strane.
                </p>
              </section>

              <img srcSet={`${manastirSukovo55} 450w, ${manastirSukovo5}`} alt="Manastir Sukovo 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Trijem (priprata)</strong>, kroz koji se ulazi u hram, srušen je tokom <strong>Drugog svetskog rata</strong> zbog loših materijala, ali je obnovljen <em>1947. godine</em> zahvaljujući trudu monahinja. Levo od ulaza nalazi se zajednička grobnica <strong>monaha Venijamina</strong> i <strong>popa Jovana</strong>, osnivača manastira. Cela priprata je oslikana scenama <strong>Strašnog suda</strong>, u skladu sa pravilima fresko-slikarstva. Unutrašnjost hrama odlikuje se dinamičnom prostornom koncepcijom sa stubovima raspoređenim u <em>tri traveja</em> i bogatom <em>freskopisnom</em> naracijom, koja prikazuje ključne događaje iz <strong>Hristovog</strong> i <strong>Bogorodičinog</strong> života.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Sukovo Monastery</h1>

              <section lang="en"> <p> <strong>The Sukovo Monastery</strong> is located near the village of <strong>Sukovo</strong>, 18 km east of <strong>Pirot</strong>, on the right bank of the <strong>Jerma River</strong>, surrounded by the steep, forested slopes of the hill known as <em>Carev Kamen</em> (“Emperor’s Rock”). Hidden from the main road and nestled in a stunning natural setting—with dense forests and the nearby Jerma River gorge—the <strong>Sukovo Monastery</strong> immediately leaves a strong emotional impression of peace and spiritual tranquility. Although there is no documented evidence of an older, possibly early Christian sacred structure at the site of today’s monastery, historians do not rule out the possibility that the original building dates back to the <em>4th century</em>. The current appearance of the monastery, dedicated to the <strong>Assumption of the Holy Mother of God</strong>, dates from the period <em>1857–1859</em>, and its origin is tied to a fascinating folk legend that adds to the monastery’s cultural value. </p> </section>
              <img srcSet={`${manastirSukovo22} 450w, ${manastirSukovo2}`} alt="Sukovo Monastery 2" loading="lazy" />

              <section lang="en"> <p> The entire estate where the monastery stands once belonged to a <strong>Turk named Sali-beg</strong> from Pirot, whose son <strong>Emin</strong> often visited the area. During one walk, Sali-beg encountered <strong>Velja</strong>, an orphan from <strong>Veliko Selo</strong> near Krupac, who was herding sheep at the site of the present-day church and had fallen asleep. Velja was an unusual child, who often dreamed of the <strong>Holy Mother of God</strong> surrounded by angels. In one of these dreams, she told him to build a monastery at that very place. When the priest from Krupac, <strong>Jovan Madić</strong>, who had taken Velja in as a son, came to believe in these visions, he ordered an excavation at a spot known as <em>"Crkvište"</em> (“Church Place”). During the digging, they discovered an icon and an oil lamp, indicating the presence of an old sacred site. </p> </section>
              <img srcSet={`${manastirSukovo33} 450w, ${manastirSukovo3}`} alt="Sukovo Monastery 3" loading="lazy" />

              <section lang="en"> <p> The young and arrogant <strong>Emin</strong> was enraged by these events and attempted to desecrate the site. At that moment, his body became paralyzed, and he lost his mind. His frightened parents summoned Father Jovan, who prayed to the <strong>Mother of God</strong>, after which Emin immediately began to recover. When <strong>Sali-beg</strong> kissed Velja’s hand and bowed to the sacred place, his son fully regained his health. Sali-beg then vowed to support the construction of the monastery. In <strong>1856</strong>, Father Jovan received an <em>imperial decree (ferman)</em> from <strong>Constantinople</strong> granting permission to rebuild the church. By <strong>1857</strong>, Father Jovan had sold his property in Krupac and settled in Sukovo with Velja. Soon after, <strong>Bishop Antim</strong> tonsured Velja as a monk under the name <strong>Veniamin</strong>. He and <strong>nun Efimija</strong> collected donations and completed the church's construction, as evidenced by the inscription: <em>“Started in the year 1857, completed in the year 1859.”</em> </p> </section>
              <img srcSet={`${manastirSukovo44} 450w, ${manastirSukovo4}`} alt="Sukovo Monastery 4" loading="lazy" />

              <section lang="en"> <p> The <strong>Church of the Holy Mother of God</strong> is externally a simple longitudinal structure in the shape of a triconch. With a somewhat asymmetrical floor plan, a flat façade, and side walls featuring a few semicircular windows, it gives the impression of a modest, provincial architectural style. It was built by locals using <em>gray hewn stone</em> and lime, with a roof covered in traditional tiles. On top, there is an <em>octagonal dome drum</em> adorned with grooved ceramic caps and a brick relief cornice—elements that represent a humble echo of the <strong>Morava architectural style</strong>. Similar decorations can be seen around the dome and the apses on the north and south sides. </p> </section>
              <img srcSet={`${manastirSukovo55} 450w, ${manastirSukovo5}`} alt="Sukovo Monastery 5" loading="lazy" />

              <section lang="en"> <p> The <strong>narthex (vestibule)</strong>, through which one enters the church, was destroyed during <strong>World War II</strong> due to poor materials but was rebuilt in <em>1947</em> thanks to the efforts of the nuns. To the left of the entrance is the shared tomb of <strong>Monk Veniamin</strong> and <strong>Father Jovan</strong>, the founders of the monastery. The entire narthex is painted with scenes of the <strong>Last Judgment</strong>, in accordance with traditional fresco painting rules. The church interior features a dynamic spatial layout with columns arranged in <em>three bays</em> and a rich <em>fresco narrative</em> depicting key events from the lives of <strong>Christ</strong> and the <strong>Mother of God</strong>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirSukovo;