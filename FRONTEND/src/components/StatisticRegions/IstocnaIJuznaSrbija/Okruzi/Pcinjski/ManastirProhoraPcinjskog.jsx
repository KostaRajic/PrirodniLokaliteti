/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import prohorPcinjski1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/desktop/manastirProhoraPcinjskog1.jpg";
import prohorPcinjski2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/desktop/manastirProhoraPcinjskog2.jpg";
import prohorPcinjski3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/desktop/manastirProhoraPcinjskog3.jpg";
import prohorPcinjski4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/desktop/manastirProhoraPcinjskog4.jpg";
import prohorPcinjski5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/desktop/manastirProhoraPcinjskog5.jpg";
import prohorPcinjski11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/mobile/manastirProhoraPcinjskogM1.jpg";
import prohorPcinjski22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/mobile/manastirProhoraPcinjskogM2.jpg";
import prohorPcinjski33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/mobile/manastirProhoraPcinjskogM3.jpg";
import prohorPcinjski44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/mobile/manastirProhoraPcinjskogM4.jpg";
import prohorPcinjski55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/ManastirSvetogProhoraPcinjskog/mobile/manastirProhoraPcinjskogM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirProhoraPcinjskog = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Prohora Pčinjskog – Svetinja sa dubokim istorijskim korenima | Serbia Wonders" : "Prohor Pčinjski Monastery – A Sanctuary with Deep Historical Roots | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Prohora Pčinjskog je spomenik kulture od izuzetnog značaja, podignut u 11. veku, sa bogatom istorijom, značajnim freskama i kulturnom ulogom kroz vekove."
            :
            "Prohor Pčinjski Monastery is a cultural monument of exceptional importance, built in the 11th century, known for its rich history, iconic frescoes, and enduring spiritual significance."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Prohora Pčinjskog, Prohor Pčinjski, manastiri u Srbiji, kulturna baština, srednjovekovni manastir, Vizantija, kralj Milutin, freske, srpski manastiri, južna Srbija, Kozjak, pravoslavlje"
            :
            "Prohor Pčinjski Monastery, Serbian monasteries, cultural heritage, medieval church, Byzantine, King Milutin, frescoes, Orthodox Christianity, southern Serbia, Kozjak mountain"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/prohor-pcinjski`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/prohor-pcinjski"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/prohor-pcinjski"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/prohor-pcinjski"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${prohorPcinjski11} 450w, ${prohorPcinjski1} `} alt="Manastir Prohora Pčinjskog 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Prohora Pčinjskog</h1>

              <section lang="sr">
                <p>
                  <strong>Manastir Prohora Pčinjskog</strong> kao celina predstavlja nepokretno kulturno
                  dobro i <strong>spomenik kulture od izuzetnog značaja</strong>. Politički događaji koji
                  su se desili krajem <em>10. i početkom 11. veka</em> morali su ostaviti trag u
                  graditeljstvu ovog kraja. Pobedom <strong>Vasilija II</strong> nad <strong>Samuilom</strong>, <em>Vizantija</em> je
                  povratila ranije izgubljene teritorije <strong>Balkanskog poluostrva</strong>, što je
                  zahtevalo reorganizaciju političke i crkvene uprave i stavljanje
                  stanovništva pod njen uticaj. Carskom poveljom iz <strong>1020. godine</strong>, <strong>Vasilije
                    II</strong> je reorganizovao Ohridsku patrijaršiju, koja je sada postala
                  arhiepiskopija, u kojoj se pominje episkopija <strong>Morzoviška</strong>, u čijem
                  sastavu se pored drugih mesta nalazi i <strong>Kozjak</strong> – današnje ime planine u
                  čijem podnožju se nalazi manastir <strong>Sv. Prohora Pčinjsog</strong>. Manastir je
                  podigao vizantijski car <strong>Roman IV Diogen</strong>, na molbu budućeg sveca i
                  patrona hrama <strong>Prohora Pčinjsog</strong>. Sistematska arheološka istraživanja, uz
                  sveobuhvatniju analizu dosadašnjih saznanja, potvrdila bi tvrdnju da je
                  prvobitna skromna jednobrodna crkva izgrađena u <em>11. veku ili početkom
                    12. veka</em>.
                </p>
              </section>

              <img srcSet={`${prohorPcinjski22} 450w, ${prohorPcinjski2}`} alt="Manastir Prohora Pčinjskog 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Prema rečima <strong>Stefana Prvovenčanog</strong>, <strong>Nemanja</strong> je u ratovima sa Vizantijom
                  između <em>1180–1190. godine</em> osvojio oblast <strong>Vranja</strong>. Pripajanjem novih
                  teritorija Srbiji, otvorila se potreba za organizacijom crkve, što je
                  sprovedeno od strane <strong>Sv. Save</strong> <em>1220. godine</em>. Manastir je ostao u sastavu
                  srpske države sve do njenog konačnog pada.
                  <br /><br />
                  <strong>Kralj Milutin</strong> je, uz svojih 40 manastirskih zadužbina, obnovio i ovaj
                  manastir, a iz Karlovačkog rodoslova saznajemo da je podigao i manastir
                  posvećen <strong>Pšinskom Prohoru</strong>, što potvrđuje i opeka ugrađena na severnoj
                  fasadi stare crkve, sa imenom <strong>SAVA</strong> u plitkom reljefu, što otkriva
                  njegovu neposrednu brigu o obnovi hrama, arhiepiskopa <strong>Save III</strong>
                  (<em>1309-1316</em>). Jedna od najopsežnijih obnove bila je zasluga kralja
                  Milutina, koji je angažovao solunske slikare <strong>Mihaila i Evtihija</strong> da
                  oslikaju novi hram <em>1316. ili 1317. godine</em>.
                </p>
              </section>

              <img srcSet={`${prohorPcinjski33} 450w, ${prohorPcinjski3}`} alt="Manastir Prohora Pčinjskog 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Posle <strong>Kosovske bitke 1454. godine</strong>, manastir su razorili Osmanlije, a
                  <strong>1489. godine</strong> obnovio ga je <strong>Marim</strong>, sin popa Radonje iz Kratova. Tada je
                  oslikan freskama koje se ubrajaju u <strong>najznačajnija umetnička dela svog
                    vremena</strong>. S obzirom na to da je obnova izvedena na stogodišnjicu
                  <strong>Kosovskog boja</strong>, u crkvi je oslikan i lik <strong>Svetog kneza Lazara</strong>. Podignuta
                  je i manja crkva <strong>Svetog Jovana</strong>, od koje su danas ostali samo temelji.
                  Tom prilikom, kratovski knez <strong>Andrija</strong> darovao je manastiru jevanđelje. U
                  <em>16. veku</em>, u manastiru je postojala slikarska i zografska radionica, čiji
                  su majstori oslikavali freske velikih likovnih vrednosti u kapeli na
                  južnoj strani crkve. Takođe, u manastiru su radile pisarnica i
                  štamparija.
                </p>
              </section>

              <img srcSet={`${prohorPcinjski44} 450w, ${prohorPcinjski4}`} alt="Manastir Prohora Pčinjskog 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Još dva puta manastir je stradao od strane <strong>Turaka i Arnauta</strong>. U prvoj
                  polovini <em>19. veka</em>, međutim, došla su bolja vremena, zahvaljujući milosti
                  <strong>Husein-paše Kavanazoglua (1821)</strong>, koji je bio izuzetno naklonjen i štitio
                  hrišćansku svetiinju. Ali manastirska crkva je izgorila u požaru <strong>1854.
                    godine</strong> zbog neopreznosti popa Staše. Tada je bio oštećen i grob Sv.
                  Prohora. Manastirski hram sa šest odeljenja brzo je popravljen, a ostaci
                  svetih moštiju su ugradeni u oltarski zid. U to vreme, u manastiru je
                  živeo "<strong>Gazda</strong>" (domaćin manastira) <strong>Nedeљko Kovačević</strong>, izuzetno bogat, ali
                  skroman čovek. Niti se kaluđerio, niti ženio, a u manastiru je živeo i
                  sav svoj novac trošio na manastirske potrebe. Družio se i hranio sa
                  manastirskim slugama, najamnicarima i čobanima. Manastirski episkop
                  Nedeљko je srušio četiri odeljenja i sagradio novu crkvu, a od stare je
                  sačuvao samo jedno odeljenje sa grobnicom i ispovedaonicom u novom
                  oltaru.
                </p>
              </section>

              <img srcSet={`${prohorPcinjski55} 450w, ${prohorPcinjski5}`} alt="Manastir Prohora Pčinjskog 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Manastir je ponovo ušao u okvire <strong>srpske države 1912. godine</strong>. Tokom Prvog
                  svetskog rata, <strong>1915. godine</strong>, <strong>Bugari</strong> su opljačkali manastir, a igumana
                  Vladimira Protića, monaha Arsenija i popa Stojana odveli na Rujan, gde
                  su ih kod sela Lukarca <strong>22. oktobra</strong> te godine isekli noževima, polili
                  petrolejom i zapalili.
                  <br /><br />
                  U manastiru se <strong>1927. godine</strong> zatekao ruski izbeglica, <strong>Ivan Oern</strong>, poreklom
                  iz švedske plemićke porodice Oern. Umesto da se zakaluđeri, po savetu
                  starešine manastira postao je administrativno lice. Taj bivši ruski
                  carski vojnik, koji je služio kod Vrangela, bio žandar u Bijelom Polju,
                  a zatim student tehnike u Beogradu, opravdao je očekivanja i značajno
                  unapredio manastirsku ekonomiju. Po rešenju Skopske eparhije, skromni
                  plemić je premesten u manastir Lešok, gde je i dalje pomagao svojim
                  angažmanom.
                  <br /><br />
                  Godine <strong>1930.</strong> manastirski starešina bio je iguman <strong>Sava</strong>. Manastir je imao
                  vrednu šumu na <strong>Kozjak-planini</strong>, koja je bila teško dostupna za
                  eksploataciju, prihode od dve vodeniце, ali glavni izvor prihoda bili su
                  prilazi tokom proslava i taksa za isecanje kolača.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Monastery of Prohor of Pčinja</h1>

              <section lang="en">
                <p>
                  <strong>The Monastery of Prohor Pčinjski</strong> as a whole represents an immovable cultural
                  good and a <strong>monument of culture of exceptional importance</strong>. Political events that
                  took place at the end of the <em>10th and beginning of the 11th century</em> had to leave a mark in
                  the architecture of this region. With the victory of <strong>Vasilije II</strong> over <strong>Samuel</strong>,
                  <em>Byzantium</em> regained previously lost territories of the <strong>Balkan Peninsula</strong>, which
                  required the reorganization of political and church administration and placing
                  the population under its influence. By imperial charter from <strong>1020</strong>, <strong>Vasilije
                    II</strong> reorganized the Ohrid Patriarchate, which became
                  an archbishopric, where the Morzoviška bishopric is mentioned, in whose
                  jurisdiction, among other places, is <strong>Kozjak</strong> – the modern name of the mountain at the
                  foot of which the <strong>St. Prohor Pčinjski</strong> monastery is located. The monastery was
                  founded by Byzantine Emperor <strong>Roman IV Diogen</strong> at the request of the future saint and
                  patron of the church, <strong>Prohor Pčinjski</strong>. Systematic archaeological research, along with
                  a comprehensive analysis of previous findings, would confirm the assertion that the
                  original modest single-nave church was built in the <em>11th or early 12th century</em>.
                </p>
              </section>

              <img srcSet={`${prohorPcinjski22} 450w, ${prohorPcinjski2}`} alt="Monastery of Prohor Pčinjski 2" loading="lazy" />

              <section lang="en">
                <p>
                  According to <strong>Stefan the First-Crowned</strong>, <strong>Nemanja</strong> conquered the region of <strong>Vranje</strong> in wars against Byzantium
                  between <em>1180–1190</em>. By annexing new territories to Serbia, the need arose to organize the church,
                  which was implemented by <strong>St. Sava</strong> in <em>1220</em>. The monastery remained part of
                  the Serbian state until its final fall.
                  <br /><br />
                  <strong>King Milutin</strong>, with his 40 monastic endowments, also restored this
                  monastery, and from the Karlovci genealogy, we learn that he built a monastery
                  dedicated to <strong>Prohor of Pčinje</strong>, which is confirmed by a brick embedded in the northern
                  facade of the old church, bearing the name <strong>SAVA</strong> in low relief, revealing
                  his direct care for the restoration of the church, Archbishop <strong>Sava III</strong>
                  (<em>1309–1316</em>). One of the most extensive restorations was the work of King
                  Milutin, who engaged Thessaloniki painters <strong>Mihailo and Evtihije</strong> to
                  paint the new church in <em>1316 or 1317</em>.
                </p>
              </section>

              <img srcSet={`${prohorPcinjski33} 450w, ${prohorPcinjski3}`} alt="Monastery of Prohor Pčinjski 3" loading="lazy" />

              <section lang="en">
                <p>
                  After the <strong>Battle of Kosovo in 1454</strong>, the monastery was destroyed by the Ottomans, and
                  it was restored in <strong>1489</strong> by <strong>Marim</strong>, the son of priest Radonja from Kratovo. At that time, it was
                  decorated with frescoes considered among the <strong>most significant artistic works of its
                    time</strong>. Since the restoration was carried out on the centenary of the
                  <strong>Battle of Kosovo</strong>, the church also features a fresco of <strong>Saint Prince Lazar</strong>. A
                  smaller church dedicated to <strong>St. John</strong> was also built, of which only the foundations remain
                  today. On that occasion, Kratovo knez <strong>Andrija</strong> donated a gospel book to the monastery.
                  In the <em>16th century</em>, the monastery had a painting and iconography workshop whose
                  masters painted highly valuable frescoes in the chapel on the
                  southern side of the church. Also, the monastery had a scriptorium and
                  a printing press.
                </p>
              </section>

              <img srcSet={`${prohorPcinjski44} 450w, ${prohorPcinjski4}`} alt="Monastery of Prohor Pčinjski 4" loading="lazy" />

              <section lang="en">
                <p>
                  Twice more the monastery suffered damage at the hands of <strong>Turks and Albanians</strong>. In the first
                  half of the <em>19th century</em>, however, better times came thanks to the grace of
                  <strong>Husein Pasha Kavanazoglu (1821)</strong>, who was very favorable and protected
                  the Christian sanctuary. But the monastery church burned down in a fire in <strong>1854
                    due to the carelessness of priest Staša</strong>. The grave of St.
                  Prohor was also damaged then. The monastery church with six sections was quickly repaired, and the remains
                  of the holy relics were embedded in the altar wall. At that time,
                  <strong>"Gazda"</strong> (the monastery’s steward) <strong>Nedeљko Kovačević</strong> lived in the monastery, an
                  extremely wealthy but modest man. He neither became a monk nor married, and
                  he lived in the monastery spending all his money on its needs. He socialized and ate
                  with monastery servants, tenants, and shepherds. The monastery bishop
                  Nedeљko demolished four sections and built a new church, preserving only
                  one section with a tomb and a confessional in the new
                  altar.
                </p>
              </section>

              <img srcSet={`${prohorPcinjski55} 450w, ${prohorPcinjski5}`} alt="Monastery of Prohor Pčinjski 5" loading="lazy" />

              <section lang="en">
                <p>
                  The monastery re-entered the territory of the <strong>Serbian state in 1912</strong>. During World War I,
                  in <strong>1915</strong>, the <strong>Bulgarians</strong> plundered the monastery and took the abbot
                  Vladimir Protić, monk Arsenije, and priest Stojan to Rujan, where
                  near the village of Lukarce on <strong>October 22</strong> of that year they were cut with knives, doused
                  with petroleum, and burned.
                  <br /><br />
                  In <strong>1927</strong>, the monastery hosted a Russian refugee, <strong>Ivan Oern</strong>, descended
                  from the Swedish noble family Oern. Instead of becoming a monk, following the advice
                  of the monastery’s superior, he became an administrative figure. This former Russian
                  imperial soldier, who served under Wrangel, was a gendarme in Bijelo Polje,
                  then a student of technology in Belgrade, and he justified expectations by significantly
                  improving the monastery’s economy. By the decision of the Skopje Diocese, the modest
                  nobleman was transferred to the Lešok monastery, where he continued to assist with his
                  engagement.
                  <br /><br />
                  In <strong>1930</strong>, the monastery’s superior was Abbot <strong>Sava</strong>. The monastery owned
                  valuable forest on <strong>Kozjak Mountain</strong>, which was difficult to access for
                  exploitation, income from two watermills, but the main sources of revenue were
                  donations during celebrations and fees for cutting cakes.
                </p>
              </section>



            </>
          )}

      </div>

    </>
  );
};


export default ManastirProhoraPcinjskog;