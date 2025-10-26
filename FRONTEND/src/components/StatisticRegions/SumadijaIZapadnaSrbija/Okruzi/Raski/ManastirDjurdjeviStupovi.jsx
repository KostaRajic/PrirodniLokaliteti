/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import stupovi1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/desktop/djurdjeviStupovi1.jpg";
import stupovi2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/desktop/djurdjeviStupovi2.jpg";
import stupovi3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/desktop/djurdjeviStupovi3.jpg";
import stupovi4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/desktop/djurdjeviStupovi4.jpg";
import stupovi5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/desktop/djurdjeviStupovi5.jpg";
import stupovi11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/mobile/MdjurdjeviStupovi1.jpg";
import stupovi22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/mobile/MdjurdjeviStupovi2.jpg";
import stupovi33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/mobile/MdjurdjeviStupovi3.jpg";
import stupovi44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/mobile/MdjurdjeviStupovi4.jpg";
import stupovi55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirDjurdjeviStupovi/mobile/MdjurdjeviStupovi5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "../Rasinski/RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirDjurdjeviStupovi = () => {
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
            ? "Manastir Đunis – Svetilište Presvete Bogorodice | Srbija Wonders"
            : "Đunis Monastery – Sanctuary of the Holy Mother of God | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Đunis, poznat po ukazanju Presvete Bogorodice devojčici Mileni 1898. godine, duhovno je mesto poklonika širom Srbije. Nalazi se nedaleko od Kruševca, a danas predstavlja jedan od najposećenijih ženskih manastira u zemlji."
              : "Đunis Monastery, known for the apparition of the Holy Mother of God to a young girl named Milena in 1898, is a spiritual destination for pilgrims across Serbia. Located near Kruševac, it is now one of the most visited female monasteries in the country."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Đunis, Presveta Bogorodica, Milena, čudo u Đunisu, ženski manastiri, hodočašće, duhovnost Srbije, Kruševac, sveta mesta Srbije"
              : "Đunis Monastery, Holy Mother of God, Milena vision, miracle in Đunis, female monasteries, pilgrimage, Serbian spirituality, Kruševac, holy places in Serbia"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(rasinskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${stupovi22} 450w, ${stupovi2} `} alt="Manastir Đurđevi Stupovi 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Manastir Đurđevi Stupovi</h1>

              <section lang="sr">
                <p>
                  Manastir <strong>Đurđevih Stupova</strong> u <em>Starom Rasu</em>, jedan od najstarijih manastira
                  u nekadašnjoj prestonici srednjovekovne Srbije, podignut je od strane
                  <strong>Stefana Nemanje</strong> u prvim godinama njegove vladavine kao velikog župana.
                  Njegova silueta dominira dolinama <strong>Raške</strong> i <strong>Deževe</strong>. Nalazi se oko 4 km
                  severozapadno od <strong>Novog Pazara</strong>. Impozantna kupola na moćnoj osnovi
                  stubova, lukova i zidova izgleda veličanstveno – vidljiva je sa desetina
                  kilometara daljine. Manastir je smešten na vrhu uzvišenja, a specifična
                  arhitektura crkve Svetog Đorđa sa dve kule zvonika – stuba – dala je
                  kasniji naziv i crkvi i manastiru – <strong>Đurđevim Stupovima</strong>.
                </p>
              </section>


              <img srcSet={`${stupovi11} 450w, ${stupovi1} `} alt="Manastir Đurđevi Stupovi 2" />

              <section lang="sr">
                <p>
                  Tokom dinastičkih borbi za vrhovnu vlast u Srbiji, <strong>Stefan Nemanja</strong> je bio
                  zatvoren od strane svoje braće u jednoj pećini u Rasu. Prema pričama
                  njegovog biografa i sina, budućeg srpskog kralja <strong>Stefana Prvovenčanog</strong>,
                  Nemanja se tada zavetovao da će izgraditi hram posvećen Svetom Đorđu,
                  kojem se u životu više puta molio za pomoć. Nakon što je preuzeo vlast
                  <strong>1166. godine</strong>, Nemanja je započeo gradnju manastira.
                  <br />
                  <br /> Manastir Đurđevih Stupova izgrađen je na krunskim posedima
                  dinastije <strong>Nemanjića</strong> i imao je veliko vlastelinstvo. Mesto za izgradnju
                  crkve i manastira pažljivo je odabrano. Đurđev Stupovi su podignuti
                  odmah iznad Petrove crkve na vrhu brda, na nadmorskoj visini od 742
                  metra, s kojeg se pruža izvanredan pogled na masive <strong>Golije</strong> i <strong>Rogozne</strong>, a
                  u daljini prema Ibru vidi se masiv <strong>Kopaonika</strong>. Sa jedne strane je dolina
                  <strong>Raške</strong>, a sa druge <strong>Deževa</strong>, verovatno mesto rođenja <strong>Rastka Nemanjića</strong>.
                  Crkva je bila vidljiva sa svih strana i izdaleka, kao svetionik Raške
                  župe. Kada se gledala iz same župe, ostavljao je impozantan i nestvaran
                  utisak – kao da je hram na nebu. Danas je zaklonjena borovima koje je
                  posadila ljudska ruka.
                </p>
              </section>


              <img srcSet={`${stupovi33} 450w, ${stupovi3} `} alt="Manastir Đurđevi Stupovi 3" />

              <section lang="sr">
                <p>
                  Crkva je završena <strong>1171. godine</strong>, što potvrđuje ktitorški natpis na
                  zapadnom portalu hrama. Nešto kasnije, oko <strong>1175. godine</strong>, crkva je
                  oslikana, a manastir je ubrzo stekao veliki ugled kao prva vladarska
                  zadužbina dinastije <strong>Nemanjića</strong>. Tokom <strong>XIII veka</strong>, manastir, koji je tada
                  bio deo "<em>kraljevskih manastira</em>", imao je značajnu ulogu u životu zemlje.
                  U <em>Studeničkom tipiku</em>, iguman Đurđevih Stupova spominje se na prvom mestu
                  među šestoricom igumana koji su učestvovali u izboru studeničkog
                  igumana.
                  <br />
                  <br /> Iako je Stefan Nemanja još kao vladar regiona gradio crkve i
                  manastire, manastir Svetog Đorđa u Rasu predstavlja prekretnicu u
                  vladarskoj ideologiji <strong>Nemanjića</strong>. Na izuzetnom položaju, nedaleko od
                  katedralske crkve raške episkopije, na starim duhovnim temeljima, ovaj
                  manastir postavlja hrišćansku misao o srpskoj državnosti - misao o
                  potpunom skladu vere i države koju je Stefan Nemanja ugradio u temeljne
                  vrednosti srpskog društva. Pod njegovim svodovima, mladi <strong>Rastko Nemanjić</strong>
                  je stekao svoja prva duhovna iskustva.
                </p>
              </section>


              <img srcSet={`${stupovi44} 450w, ${stupovi4} `} alt="Manastir Đurđevi Stupovi 4" />

              <section lang="sr">
                <p>
                  Kralj <strong>Dragutin</strong>, poslednji vladar iz loze <strong>Nemanjića</strong> koji je stolovao u
                  Rasu, bio je drugi ktitor manastira Đurđevih Stupova. Tokom svoje
                  vladavine, a zatim do kraja života, brinuo je o napretku manastirske
                  zajednice, dogradio manastirsku crkvu i oslikao njen predvorje, sudеći
                  po ostatcima fresaka. Ulaznu kulu manastirskog kompleksa, koja se nalazi
                  dvadesetak metara zapadno od crkve, pretvorio je u kapelu i dodelio joj
                  funkciju grobne crkve.
                  <br />
                  <br /> Nakon nesrećnog pada s konja nedaleko od grada <strong>Jelača</strong>, kralj
                  Dragutin se odrekao prestola u korist svog brata <strong>Stefana Milutina</strong>. Na
                  čuvenom saboru u <strong>Deževi</strong> <strong>1282. godine</strong>, pod okriljem manastira Svetog
                  Đorđa, izvršena je primopredaja vlasti u prisustvu najviših predstavnika
                  crkve i vlastela. Taj važan istorijski trenutak, prema želji samog
                  kralja Dragutina, zauvek je zabeležen u kapeli manastira Svetog Đorđa,
                  kao deo jedinstvenog ciklusa državnih sabora Srbije.
                </p>
              </section>


              <img srcSet={`${stupovi55} 450w, ${stupovi5} `} alt="Manastir Đurđevi Stupovi 5" />

              <section lang="sr">
                <p>
                  Ideja o državi i najvišoj vlasti u zemlji, o prestolu i veri predaka,
                  umetnički je prikazana kroz četiri sabora – sabor <strong>Stefana Nemanje</strong>, sabor
                  na kojem je ustoličen kralj <strong>Stefan Uroš I</strong>, sabor na kojem je kralj
                  <strong>Dragutin</strong> preuzeo vlast i na kraju, sabor u <strong>Deževi</strong>. Misao o naslednoj
                  monarhiji i dinastiji utkane su i u ktitorsku kompoziciju prvih
                  <strong>Nemanjića</strong> (tzv. horizontalno stablo dinastije), sa <strong>Stefana Nemanjom</strong>,
                  Svetim Simeonom, na čelu. U kapeli je prikazan i kralj Dragutin sa
                  modelom crkve u ruci. Prema izričitoj želji ovog vladara, koji je pred
                  smrt primio monaški čin i ime <strong>Teoktist</strong>, on je iz "<em>sremske zemlje</em>" u
                  kojoj je živeo, prenet u manastir Svetog Đorđa i tu je sahranjen
                  (<strong>1316.</strong>). Međutim, njegova grobnica je opljačkana u <strong>XVIII veku</strong>, kada je
                  stradao i sam manastir. Sećanje na ovog vladara i njegov doprinos
                  procvatu manastira ostalo je u sećanju budućih generacija.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Monastery of Đurđevi Stupovi</h1>

              <section lang="en">
                <p>
                  The <strong>Monastery of Đurđevi Stupovi</strong> in <em>Old Ras</em>, one of the oldest monasteries
                  in the former capital of medieval Serbia, was built by
                  <strong>Stefan Nemanja</strong> in the early years of his rule as the Grand Župan.
                  Its silhouette dominates the valleys of <strong>Raška</strong> and <strong>Deževa</strong>. It is located about 4 km
                  northwest of <strong>Novi Pazar</strong>. The impressive dome on a powerful base
                  of pillars, arches, and walls looks majestic – visible from dozens
                  of kilometers away. The monastery is situated on top of a hill, and the distinctive
                  architecture of the Church of Saint George with two bell towers – pillars – gave
                  the later name to both the church and the monastery – <strong>Đurđevi Stupovi</strong>.
                </p>
              </section>


              <img srcSet={`${stupovi11} 450w, ${stupovi1} `} alt="Monastery of Đurđevi Stupovi 2" />

              <section lang="en">
                <p>
                  During the dynastic struggles for supreme power in Serbia, <strong>Stefan Nemanja</strong> was
                  imprisoned by his brothers in a cave in Ras. According to the stories
                  of his biographer and son, the future Serbian king <strong>Stefan the First-Crowned</strong>,
                  Nemanja then vowed to build a church dedicated to Saint George,
                  to whom he often prayed for help during his life. After taking power
                  in <strong>1166</strong>, Nemanja began the construction of the monastery.
                  <br />
                  <br /> The Monastery of Đurđevi Stupovi was built on the crown estates
                  of the <strong>Nemanjić</strong> dynasty and had a large landed estate. The site for building
                  the church and monastery was carefully chosen. Đurđevi Stupovi was erected
                  just above Peter’s Church on the hilltop, at an altitude of 742
                  meters, offering an excellent view of the Golija and Rogozna massifs, and
                  in the distance towards the Ibar River can be seen the massif of <strong>Kopaonik</strong>. On one side lies the valley
                  of <strong>Raška</strong>, and on the other <strong>Deževa</strong>, probably the birthplace of <strong>Rastko Nemanjić</strong>.
                  The church was visible from all sides and from afar, like a beacon of the Raška
                  district. When viewed from within the district itself, it left an imposing and unreal
                  impression – as if the temple was in the sky. Today it is sheltered by pine trees planted by human hands.
                </p>
              </section>


              <img srcSet={`${stupovi33} 450w, ${stupovi3} `} alt="Monastery of Đurđevi Stupovi 3" />

              <section lang="en">
                <p>
                  The church was completed in <strong>1171</strong>, as confirmed by the founder’s inscription on
                  the western portal of the temple. Shortly after, around <strong>1175</strong>, the church was
                  painted, and the monastery soon gained great prestige as the first royal
                  endowment of the <strong>Nemanjić</strong> dynasty. During the <strong>13th century</strong>, the monastery, which was then
                  part of the "<em>royal monasteries</em>", played an important role in the life of the country.
                  In the <em>Studenica Typikon</em>, the abbot of Đurđevi Stupovi is mentioned first
                  among the six abbots who participated in the selection of the Studenica
                  abbot.
                  <br />
                  <br /> Although Stefan Nemanja, even as a regional ruler, built churches and
                  monasteries, the Monastery of Saint George in Ras marks a turning point in
                  the ruling ideology of the <strong>Nemanjić</strong> dynasty. In an exceptional location, not far from
                  the cathedral church of the Raška bishopric, on ancient spiritual foundations, this
                  monastery establishes the Christian idea of Serbian statehood – the idea of
                  full harmony between faith and state, which Stefan Nemanja embedded in the
                  fundamental values of Serbian society. Under its vaults, the young <strong>Rastko Nemanjić</strong>
                  gained his first spiritual experiences.
                </p>
              </section>


              <img srcSet={`${stupovi44} 450w, ${stupovi4} `} alt="Monastery of Đurđevi Stupovi 4" />

              <section lang="en">
                <p>
                  King <strong>Dragutin</strong>, the last ruler from the <strong>Nemanjić</strong> lineage to reign in
                  Ras, was the second founder of the Đurđevi Stupovi monastery. During his
                  reign and until the end of his life, he cared for the progress of the monastic
                  community, expanded the monastery church, and painted its vestibule, judging
                  by the remnants of frescoes. The entrance tower of the monastery complex, located
                  about twenty meters west of the church, was converted by him into a chapel and given
                  the function of a burial church.
                  <br />
                  <br /> After an unfortunate fall from his horse near the town of <strong>Jelača</strong>, King
                  Dragutin abdicated the throne in favor of his brother <strong>Stefan Milutin</strong>. At the
                  famous council in <strong>Deževa</strong> in <strong>1282</strong>, under the auspices of the Monastery of Saint
                  George, the transfer of power was carried out in the presence of the highest representatives
                  of the church and nobility. This important historical moment, according to the wishes of King Dragutin himself,
                  was forever recorded in the chapel of the Monastery of Saint George,
                  as part of the unique cycle of state councils of Serbia.
                </p>
              </section>


              <img srcSet={`${stupovi55} 450w, ${stupovi5} `} alt="Monastery of Đurđevi Stupovi 5" />

              <section lang="en">
                <p>
                  The idea of the state and supreme authority in the land, of the throne and the faith of the ancestors,
                  is artistically depicted through four councils – the council of <strong>Stefan Nemanja</strong>, the council
                  where King <strong>Stefan Uroš I</strong> was enthroned, the council where King
                  <strong>Dragutin</strong> took power, and finally, the council in <strong>Deževa</strong>. The idea of hereditary
                  monarchy and dynasty is also woven into the founder’s composition of the first
                  <strong>Nemanjić</strong>s (the so-called horizontal family tree of the dynasty), headed by <strong>Stefan Nemanja</strong>,
                  Saint Simeon. In the chapel is also depicted King Dragutin holding
                  a model of the church in his hand. According to the explicit wishes of this ruler, who
                  took monastic vows and the name <strong>Theoctistus</strong> before his death, he was transferred from the "<em>Srem land</em>"
                  where he lived to the Monastery of Saint George and buried there
                  (<strong>1316</strong>). However, his tomb was robbed in the <strong>18th century</strong>, when the
                  monastery itself also suffered damage. The memory of this ruler and his contribution
                  to the flourishing of the monastery remains in the memory of future generations.
                </p>
              </section>



            </>
          )}

      </div>
    </>
  );
};


export default ManastirDjurdjeviStupovi;