/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import studenica1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/desktop/manastirStudenica1.jpg";
import studenica2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/desktop/manastirStudenica2.jpg";
import studenica3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/desktop/manastirStudenica3.jpg";
import studenica4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/desktop/manastirStudenica4.jpg";
import studenica5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/desktop/manastirStudenica5.jpg";
import studenica11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/mobile/MmanastirStudenica1.jpg";
import studenica22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/mobile/MmanastirStudenica2.jpg";
import studenica33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/mobile/MmanastirStudenica3.jpg";
import studenica44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/mobile/MmanastirStudenica4.jpg";
import studenica55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirStudenica/mobile/MmanastirStudenica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "../Rasinski/RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirStudenica = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams;

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
            ? "Manastir Studenica – Zadužbina Stefana Nemanje | Srbija Wonders"
            : "Studenica Monastery – Legacy of Stefan Nemanja | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Studenica, osnovan 1186. godine od strane Stefana Nemanje, predstavlja duhovno i kulturno središte srednjovekovne Srbije, poznat po raškoj arhitekturi, freskama i moštima Nemanjića. Upisan na UNESCO listu."
              : "The Studenica Monastery, founded in 1186 by Stefan Nemanja, is a spiritual and cultural center of medieval Serbia, known for its Raška architectural style, frescoes, and relics of the Nemanjić dynasty. A UNESCO World Heritage Site."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Studenica, Stefan Nemanja, Sveti Sava, Nemanjići, raška arhitektura, srpsko srednjovekovno nasleđe, UNESCO, freske, kulturna baština, manastiri Srbije"
              : "Studenica Monastery, Stefan Nemanja, Saint Sava, Nemanjić dynasty, Raška architecture, Serbian medieval heritage, UNESCO, frescoes, cultural heritage, Serbian monasteries"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-studenica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-studenica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-studenica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-studenica"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${studenica11} 450w, ${studenica1} `} alt="Manastir Studenica 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2 style={{ color: "white" }}>Manastir Studenica</h2>

              <section lang="sr">
                <p>
                  Manastir Studenica je <strong>muški manastir</strong> Srpske pravoslavne crkve. Osnovao ga je <strong>1186. godine</strong> srpski župan <strong>Stefan Nemanja</strong>. Godine <strong>1206.</strong> na mesto igumana dolazi princ Rastko — u monaštvu prvi arhiepiskop srpski, <em>Sveti Sava</em> — i pod njegovim starateljstvom Studenica postaje <strong>kulturno, umetničko, bolničko i duhovno središte</strong> srpske države. Dugogodišnji starešina manastira bio je arhimandrit <strong>Tihon (Rakićević)</strong>, sa bratstvom na čelu od <strong>2004. godine</strong>. Arhimandrit studenički Tihon izabran je za episkopa moravičkog <strong>2024. godine</strong>. Hironisao ga je patrijarh srpski <strong>Porfirije</strong> u Hramu Svetog Save na Vračaru <strong>8. septembra 2024. godine</strong>. Trenutni iguman manastira je <strong>Arhiepiskop i Mitropolit žički dr Justin</strong>. Manastir se nalazi <strong>57 kilometara južno od Kraljeva</strong>, i <strong>44 kilometara severno od Raške</strong>.
                </p>
              </section>

              <img srcSet={`${studenica22} 450w, ${studenica2}`} alt="Manastir Studenica 2" />

              <section lang="sr">
                <p>
                  Pripada <strong>Eparhiji žičkoj</strong> Srpske pravoslavne crkve. Manastirski kompleks se sastoji od konaka i četiri crkve — <strong>Bogorodične</strong>, <strong>Kraljeve (crkve Svetih Joakima i Ane)</strong>, <strong>crkve Svetog Nikole</strong>, i još jedne, očuvane u temeljima. Bogorodičina crkva u Studenici poznata je kao začetnica i najreprezentativniji nosilac <em>raškog stila u arhitekturi</em>, koji je nastao kao mešavina <strong>romanickih i vizantijskih</strong>, tj. <em>zapadnih i istočnih srednjovekovnih arhitektonskih uticaja</em>. Crkvu i danas krasi najbogatija <strong>romanička fasadna plastika</strong> u srpskoj kulturi. Pored toga, manastir je poznat i po svojoj zbirci fresaka iz 13. i 14. veka, od kojih je daleko najpoznatija freska <strong>Raspeće Hristovo iz 1207. godine</strong>, jedno od najvećih dostignuća umetnosti srednjeg veka. Zamišljena kao svojevrsni mauzolej rodonačelnika vladarske loze Nemanjića, Bogorodičina crkva danas čuva mošti velikog župana <strong>Stefana Nemanje</strong>, velike županiče Ane (<em>Anastasije</em>) Nemanjić, prvog srpskog kralja, <strong>Stefana Prvovenčanog</strong> i kralja <strong>Stefana Radoslava</strong>. Kao jedan od najstarijih i najvećih srpskih srednjovekovnih manastira, Studenica predstavlja <strong>nepokretno kulturno dobro Republike Srbije</strong> i <strong>spomenik kulture od izuzetnog značaja</strong>. UNESCO je <strong>1986. godine</strong> uvrstio Studenicu na listu <em>Svetske baštine čovečanstva</em>. Često se navodi kao <strong>prvi po dostojanstvu, najugledniji srpski manastir</strong>.
                </p>
              </section>

              <img srcSet={`${studenica33} 450w, ${studenica3}`} alt="Manastir Studenica 3" />

              <section lang="sr">
                <p>
                  Manastir Studenicu je gradio veliki župan <strong>Stefan Nemanja</strong>, rodonačelnik dinastije Nemanjića. Radovi su trajali od <strong>1183. do 1196. godine</strong>. Smatra se da je glavna manastirska crkva, posvećena <strong>Uspenju Presvete Bogorodice</strong>, izgrađena <strong>1186. godine</strong>. Gradili su je najbolji majstori romanike sa jadranske obale. Kompleks je nastao na severnim padinama <strong>Golije</strong>, u predelu „koji beše lovište zverova”. Kada su radovi završeni u proleće 1196. godine, Stefan Nemanja je sazvao državnu skupštinu, na kojoj je prepustio presto svom sinu <strong>Stefanu Prvovenčanom</strong> i povukao se u svoju zadužbinu. Veliki župan je <strong>1198. godine</strong> otišao u svoju drugu zadužbinu, manastir <strong>Hilandar</strong>, gde je primio monaški postrig i uzeo ime <em>Simeon</em>. Tu je i umro <strong>1199. godine</strong>. Za to vreme o Studenici se brinuo kralj Stefan.
                </p>
              </section>

              <img srcSet={`${studenica44} 450w, ${studenica4}`} alt="Manastir Studenica 4" />

              <section lang="sr">
                <p>
                  Nemanjin treći sin, <strong>Sava Nemanjić</strong>, preneo je <strong>1207. godine</strong> mošti svog oca iz Hilandara u Studenicu, gde su položene u već pripremljenu grobnicu. Sveti Sava je nad očevim moštima izmirio svoju zavađenu braću, <strong>Stefana i Vukana Nemanjića</strong>. Pod njegovim starateljstvom, Studenica je postala politički, kulturni, medicinski i duhovni centar srednjovekovne Srbije. Tu je upravo napisao <strong>Studenički tipik</strong>, u kojem je odredio uređenje monaškog života u manastiru Studenica. U njemu je napisao da je iguman Studenice po staršinstvu iznad igumana svih drugih manastira i da vladar nema vlast nad manastirom, već je tu samo kako bi zaštitio bratstvo od napada neprijatelja. Time su postavljeni temelji autokefalnosti buduće <strong>Srpske pravoslavne crkve</strong>. U drugom delu, <strong>Žitije Svetog Simeona</strong>, ostavio je izvore o duhovnom i monaškom životu u njegovom vremenu. Zajedničkim ulaganjima <strong>Stefan i Vukan</strong> doveli su početkom 13. veka najbolje grčke slikare, koji su završili živopis Bogorodičine crkve oko <strong>1207. godine</strong>. Kruna tih radova bila je već tada monumentalna freska <strong>Raspeće Hristovo</strong>, koja se nametnula kao jedno od najvećih dostignuća u srednjovekovnoj umetnosti Evrope. Dve godine kasnije, Bogorodičina crkva bila je u potpunosti završena, u celosti oslikana freskama koje su je činile jednim od najlepših hramova na svetu. Sveti Sava je sredinom druge decenije 13. veka otišao iz Studenice. Iste godine, kako beleže letopisi, iz Simeonovog sarkofaga počelo je da teče lekovito miro, uz koje su zabeležena i isceljenja i druga čuda, pa Stefan Nemanja postaje <em>Simeon Mirotočivi</em>.
                </p>
              </section>

              <img srcSet={`${studenica55} 450w, ${studenica5}`} alt="Manastir Studenica 5" />

              <section lang="sr">
                <p>
                  Bogorodičina crkva je <strong>jednobrodna crkva s kupolom</strong>. Na njenom istočnom kraju nalazi se <strong>trostrana apsida</strong>, a na zapadnom je kralj Radoslav dozidao veliku pripratu. Na severnoj i južnoj strani su predvorja. Fasade su izgrađene od blokova belog mermera. Iznutra je crkva obložena tufom. Spolja, u crkvi se skladno mešaju romanički i vizantijski stil. Mešavina ova dva stila će na kraju proizvesti poseban stil arhitekture poznat kao <em>raška škola</em>. Severozapadno od Bogorodičine crkve nalazi se crkva Svetog Joakima i Ane, poznata i kao <strong>Kraljeva crkva</strong> po svom ktitoru, kralju Milutinu. Crkva je sagrađena <strong>1314. godine</strong>, u obliku sažetog krsta sa oktogonalnom kupolom. Izgrađena je od kamena i tufа, a fasade su obložene gipsom. Kompleks manastira obuhvata i crkvu Nikoljču, jednobrodnu crkvicu bez kupole, oslikanu iznutra u 12. ili početkom 13. veka. Između crkve Nikoljče i Kraljeve crkve nalaze se temelji crkve posvećene Svetom Jovanu Krstitelju. Zapadno od Bogorodičine crkve nalazi se trpezarija, sagrađena od kamena za vreme arhiepiskopa Save. Na zapadnoj strani kompleksa je zvonik podignut u 13. veku. Nekaada je u njemu bila kapela, a sada se mogu videti samo fragmenti fresaka. Ostaci fresaka, koji prikazuju rodoslovno stablo Nemanjića, mogu se takođe naći na spoljašnjoj strani priprate.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Studenica Monastery</h2>

              <section lang="en">
                <p> The Studenica Monastery is a <strong>male monastery</strong> of the Serbian Orthodox Church. It was founded in <strong>1186</strong> by the Serbian župan (prince) <strong>Stefan Nemanja</strong>. In <strong>1206</strong>, Prince Rastko — the first Serbian archbishop in monasticism, <em>Saint Sava</em> — became the abbot, and under his supervision, Studenica became a <strong>cultural, artistic, medical, and spiritual center</strong> of the Serbian state. The longtime head of the monastery was Archimandrite <strong>Tihon (Rakićević)</strong>, leading the brotherhood since <strong>2004</strong>. Archimandrite Tihon of Studenica was elected bishop of Moravica in <strong>2024</strong>. He was consecrated by the Serbian Patriarch <strong>Porfirije</strong> in the Church of Saint Sava in Vračar on <strong>September 8, 2024</strong>. The current abbot of the monastery is <strong>Archbishop and Metropolitan of Žiča Dr. Justin</strong>. The monastery is located <strong>57 kilometers south of Kraljevo</strong> and <strong>44 kilometers north of Raška</strong>. </p>
              </section>
              <img srcSet={`${studenica22} 450w, ${studenica2}`} alt="Studenica Monastery 2" />

              <section lang="en"> <p> It belongs to the <strong>Žiča Eparchy</strong> of the Serbian Orthodox Church. The monastery complex consists of a dormitory and four churches — the <strong>Church of the Virgin</strong>, the <strong>King’s Church (Church of Saints Joachim and Anne)</strong>, the <strong>Church of Saint Nicholas</strong>, and another one preserved only in foundations. The Church of the Virgin at Studenica is known as the originator and the most representative bearer of the <em>Raška architectural style</em>, which emerged as a mixture of <strong>Romanesque and Byzantine</strong>, i.e., <em>Western and Eastern medieval architectural influences</em>. The church still boasts the richest <strong>Romanesque façade sculpture</strong> in Serbian culture. Furthermore, the monastery is renowned for its collection of frescoes from the 13th and 14th centuries, the most famous being the fresco of the <strong>Crucifixion of Christ from 1207</strong>, one of the greatest achievements of medieval art. Conceived as a kind of mausoleum for the progenitor of the Nemanja ruling dynasty, the Church of the Virgin today holds the relics of the great župan <strong>Stefan Nemanja</strong>, the great županess Ana (<em>Anastasia</em>) Nemanjić, the first Serbian king, <strong>Stefan the First-Crowned</strong>, and King <strong>Stefan Radoslav</strong>. As one of the oldest and largest Serbian medieval monasteries, Studenica represents a <strong>cultural monument of the Republic of Serbia</strong> and a <strong>monument of culture of exceptional importance</strong>. UNESCO included Studenica in the list of <em>World Heritage Sites</em> in <strong>1986</strong>. It is often cited as the <strong>foremost and most prestigious Serbian monastery</strong>. </p> </section>
              <img srcSet={`${studenica33} 450w, ${studenica3}`} alt="Studenica Monastery 3" />

              <section lang="en"> <p> The Studenica Monastery was built by the great župan <strong>Stefan Nemanja</strong>, the progenitor of the Nemanjić dynasty. Construction lasted from <strong>1183 to 1196</strong>. It is believed that the main monastery church, dedicated to the <strong>Assumption of the Holy Virgin</strong>, was built in <strong>1186</strong>. It was constructed by the best Romanesque craftsmen from the Adriatic coast. The complex was built on the northern slopes of <strong>Golija Mountain</strong>, in an area "that was a hunting ground for beasts." When the work was completed in spring 1196, Stefan Nemanja convened a state assembly, where he abdicated the throne to his son <strong>Stefan the First-Crowned</strong> and retired to his endowment. The great župan went in <strong>1198</strong> to his second endowment, the monastery of <strong>Hilandar</strong>, where he received monastic tonsure and took the name <em>Simeon</em>. He died there in <strong>1199</strong>. During this time, King Stefan took care of Studenica. </p> </section>
              <img srcSet={`${studenica44} 450w, ${studenica4}`} alt="Studenica Monastery 4" />

              <section lang="en"> <p> Nemanja’s third son, <strong>Sava Nemanjić</strong>, transferred his father’s relics from Hilandar to Studenica in <strong>1207</strong>, where they were placed in a prepared tomb. Saint Sava reconciled his quarrelling brothers, <strong>Stefan and Vukan Nemanjić</strong>, over their father’s relics. Under his care, Studenica became the political, cultural, medical, and spiritual center of medieval Serbia. It was there that he wrote the <strong>Studenica Typikon</strong>, which regulated monastic life in the monastery. In it, he stated that the abbot of Studenica was senior to all other monastery abbots and that the ruler had no authority over the monastery, only serving to protect the brotherhood from enemy attacks. This laid the foundations for the autocephaly of the future <strong>Serbian Orthodox Church</strong>. In the second part, the <strong>Life of Saint Simeon</strong>, he left sources about spiritual and monastic life of his time. Together, <strong>Stefan and Vukan</strong> brought the best Greek painters at the beginning of the 13th century, who completed the fresco decoration of the Church of the Virgin around <strong>1207</strong>. The crowning achievement of these works was the monumental fresco of the <strong>Crucifixion of Christ</strong>, considered one of the greatest achievements in medieval European art. Two years later, the Church of the Virgin was fully completed and entirely covered in frescoes, making it one of the most beautiful churches in the world. Saint Sava left Studenica in the mid-1210s. According to chronicles, in the same year, healing myrrh began flowing from Simeon’s sarcophagus, accompanied by recorded healings and miracles, after which Stefan Nemanja became known as <em>Simeon the Myrrh-Streamer</em>. </p> </section>
              <img srcSet={`${studenica55} 450w, ${studenica5}`} alt="Studenica Monastery 5" />

              <section lang="en"> <p> The Church of the Virgin is a <strong>single-nave church with a dome</strong>. At its eastern end, there is a <strong>three-sided apse</strong>, while on the western end King Radoslav added a large narthex. On the north and south sides, there are vestibules. The façades are built of blocks of white marble. Inside, the church is lined with tuff. Outside, the church harmoniously combines Romanesque and Byzantine styles. This mixture produced a special architectural style known as the <em>Raška school</em>. Northwest of the Church of the Virgin is the Church of Saints Joachim and Anne, also known as the <strong>King’s Church</strong> after its founder, King Milutin. The church was built in <strong>1314</strong> in the shape of a compressed cross with an octagonal dome. It was built of stone and tuff, with façades covered with plaster. The monastery complex also includes the Church of Saint Nicholas, a single-nave church without a dome, painted inside in the 12th or early 13th century. Between the Church of Saint Nicholas and the King’s Church lie the foundations of a church dedicated to Saint John the Baptist. To the west of the Church of the Virgin is the refectory, built of stone during the time of Archbishop Sava. On the western side of the complex stands a bell tower, raised in the 13th century. It once contained a chapel, but now only fragments of frescoes remain. Remnants of frescoes depicting the genealogical tree of the Nemanjić dynasty can also be found on the exterior of the narthex. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirStudenica;