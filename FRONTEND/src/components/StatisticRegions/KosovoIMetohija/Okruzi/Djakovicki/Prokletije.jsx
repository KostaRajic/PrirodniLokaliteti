/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import prokletije1 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije1.jpg";
import prokletije2 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije2.jpg";
import prokletije3 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije3.jpg";
import prokletije4 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije4.jpg";
import prokletije5 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/desktop/prokletije5.jpg";
import prokletije11 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije1.jpg";
import prokletije22 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije2.jpg";
import prokletije33 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije3.jpg";
import prokletije44 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije4.jpg";
import prokletije55 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Prokletije/mobile/Mprokletije5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { djakovickiOkrugPathRoutes } from "./DjakovickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Prokletije = () => {
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

        <title>{switchLanguage === 'rs' ? "Prokletije – Najviši Planinski Venac Srbije | Serbia Wonders" : "Prokletije – Serbia’s Highest Mountain Range | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Prokletije su najviši, najsuroviji i najlepši planinski venac Srbije i Dinarskog sistema, poznate po vrhovima Đeravice, glečerskim jezerima, vodopadima i krečnjačkim klisurama. Nazvane su 'proklete planine' zbog svoje nepristupačnosti i mistične lepote."
            :
            "Prokletije Mountains, known as the 'Cursed Mountains', are the highest and most rugged part of Serbia and the Dinaric Alps. With glacial lakes, deep canyons, waterfalls and Đeravica peak, they offer a stunning display of natural beauty and geomorphological diversity."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Prokletije, Đeravica, planine Srbije, Dinarski planinski sistem, Bjeshkët e Nemuna, Metohija, Skakavica, vodopadi, planinarenje, glečerska jezera, Grlja, Plavsko jezero, Jovan Cvijić"
            :
            "Prokletije, Dinaric Alps, Đeravica, hiking Serbia, glacial lakes, karst springs, Grlja Canyon, Skakavica waterfall, Bjeshket e Nemuna, mountain tourism, Serbia mountains, Jovan Cvijić"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/planina-prokletije`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/planina-prokletije"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/planina-prokletije"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/planina-prokletije"
        />

      </Helmet >


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(djakovickiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${prokletije11} 450w, ${prokletije1} `} alt="Planina Prokletije 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Prokletije</h1>

              <section lang="sr">
                <p>
                  Srpske (severne) oblasti <strong>Prokletija</strong> počinju na <strong>Mokrim Gorama</strong> i <strong>Suvoj planini</strong> na severoistoku i nastavljaju se u blagom luku duž linije <strong>Istok – Peć – Dečani – Junik</strong> do reke <strong>Ribnik</strong> na jugoistoku. Zapadna granica je granica Srbije sa Crnom Gorom, a zatim granica Crne Gore sa Albanijom. Ova oblast obuhvata oko <strong>40 odvojenih planina</strong> koje zajedno čine jedan od najvećih masiva <strong>Dinarskih planina</strong>. U poređenju sa drugim delovima Dinarskih planina, geološka građa Prokletija je složenija. Tu se nalaze <em>krečnjaci</em> i <em>dolomiti</em>, <em>dijabaz</em>-ružna formacija, <em>bankoviti i masivni krečnjaci</em>, <em>argilozisti</em>, <em>peskari</em> i <em>konglomerati</em>.
                </p>
              </section>

              <img srcSet={`${prokletije22} 450w, ${prokletije2}`} alt="Planina Prokletije 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Prokletije</strong> su u prošlosti imale različite nazive: „<em>Beriseldi</em>“, „<em>Severoalbanski Alpi</em>“, „<em>Alpi na jugu Evrope</em>“, „<em>Crnogorski Alpi</em>“ i drugi. Današnji naziv u množini – <strong>Prokletije</strong>, koji označava veći broj planinskih venaca, prvi je uveo geograf <strong>Jovan Cvijić</strong>. Istražujući ovu planinsku grupu, primetio je da je srpsko stanovništvo ovde nazivalo <em>Bogićevicu</em>, <em>Greben</em>, <em>Bjelić</em>, <em>Karanfile</em> i <em>Trojan</em> zajedničkim imenom <strong>Prokletije</strong>, što znači „<em>proklete planine</em>“. Ovaj naziv je Cvijić proširio u svojim radovima na ceo planinski venac, počevši od <strong>Skadarskog jezera</strong> pa do <strong>Ibra i Metohije</strong>. Naziv je danas prihvaćen u opštem jeziku i toponimiji. Albansko stanovništvo Prokletije naziva <em>Bjeshkët e Nemuna</em>, što u prevodu znači „<em>proklete</em>“ ili „<em>zabranjene planine</em>“. Naziv ima dvostruko etimološko značenje – simbolizuje ne samo prirodne karakteristike ovog prostora (<em>krševitost</em>, <em>divljinu</em>, <em>nepristupačnost</em>), već i nekadašnje društveno-istorijske okolnosti (<em>lična nesigurnost</em>, <em>anarhija</em>, <em>opasnosti</em>).
                </p>
              </section>

              <img srcSet={`${prokletije33} 450w, ${prokletije3}`} alt="Planina Prokletije 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Đeravica</strong>, sa <strong>2.656 metara</strong> nadmorske visine, drugi je najviši vrh Srbije. Nalazi se u južnoj Srbiji, u opštini <strong>Dečani</strong>, pokrajina <strong>Kosovo i Metohija</strong>, iznad srednjovekovnog manastira <strong>Visoki Dečani</strong>. U njenoj neposrednoj blizini smeštena su brojna <em>ledenička jezera</em>, od kojih je najveće <strong>Đeravičko jezero</strong>. Ono se nalazi na oko <strong>2.200 metara</strong> nadmorske visine, a iz njega izvire reka <strong>Ribnik (Erenik)</strong>, koja protiče kroz <strong>Metohiju</strong>. Jezero ima oblik zuba, sa dužinom od <strong>240 metara</strong>, širinom od <strong>120 metara</strong> i dubinom do <strong>3,8 metara</strong>. U njemu obitavaju vrste vodozemaca iz porodice <em>salamandriida</em>, koje se hrane <em>letećim insektima</em>.
                </p>
              </section>

              <img srcSet={`${prokletije44} 450w, ${prokletije4}`} alt="Planina Prokletije 4" loading="lazy" />

              <section lang="sr">
                <p>
                  U geografskom istraživanju preovlađuje mišljenje da su <strong>Prokletije</strong> završne planine <strong>Dinarskog planinskog sistema</strong>. Zaista, dele mnoge karakteristike s tim sistemom, ali pojedini <strong>geolozi</strong> i <strong>geografi</strong> smatraju da su Prokletije <em>samostalan planinski sistem</em>. <strong>Jovan Cvijić</strong> je među prvima ukazao na geografsku specifičnost prokletijskog masiva. Glavni kriterijumi za njegovo izdvajanje kao posebnog <em>geološkog</em> i <em>geomorfološkog</em> kompleksa jesu <strong>facijalno-stratigrafski karakter</strong> i <strong>pravac pružanja glavnog grebena</strong>.
                </p>
              </section>

              <img srcSet={`${prokletije55} 450w, ${prokletije5}`} alt="Planina Prokletije 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Na <strong>Prokletijama</strong> se javlja specifična <strong>hidrografija</strong>, uglavnom vezana za <em>krečnjačke terene</em>. Ona obuhvata ne samo <em>krška vrela</em>, već i <em>rečne tokove</em> kroz <em>klisure</em> i <em>kanjone</em> sa <strong>vodopadima</strong> i <strong>velikim kamenim kotlovima</strong>, <em>ponore</em> i <em>krške izvore</em>. U <strong>kanjonu Grlje</strong>, istoimena reka pravi <strong>pet vodopada</strong> na dužini od <strong>500 metara</strong>, što znači da na svakih 100 metara dolazi do jednog. Prvi vodopad, na ulazu u kanjon, koji stvara reka <strong>Skakavica</strong>, visok je <strong>15 metara</strong>, dok najviši, poslednji vodopad dostiže <strong>oko 25 metara</strong>. <strong>Plavsko jezero</strong> je najveći <em>limnološki objekat</em> <strong>ledeničkog porekla</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Mount Prokletije</h1>

              <section lang="en">
                <p>
                  The Serbian (northern) regions of the <strong>Prokletije</strong> Mountains begin at <strong>Mokra Gora</strong> and <strong>Suva Planina</strong> in the northeast and continue in a gentle arc along the line <strong>Istok – Peć – Dečani – Junik</strong> to the <strong>Ribnik River</strong> in the southeast. The western border follows Serbia’s border with Montenegro, and then Montenegro’s border with Albania. This region includes around <strong>40 separate mountains</strong>, forming one of the largest massifs of the <strong>Dinaric Alps</strong>. Compared to other parts of the Dinaric range, the geological composition of the Prokletije is more complex. It includes <em>limestone</em> and <em>dolomite</em>, <em>diabase</em> (a rough formation), <em>bedded and massive limestones</em>, <em>argillites</em>, <em>sandstones</em>, and <em>conglomerates</em>.
                </p>
              </section>

              <img srcSet={`${prokletije22} 450w, ${prokletije2}`} alt="Prokletije Mountain 2" loading="lazy" />

              <section lang="en">
                <p>
                  In the past, the <strong>Prokletije</strong> Mountains had various names: "<em>Beriseldi</em>", "<em>Northern Albanian Alps</em>", "<em>Southern European Alps</em>", "<em>Montenegrin Alps</em>", and others. The current plural name – <strong>Prokletije</strong>, referring to a group of mountain ranges, was first introduced by geographer <strong>Jovan Cvijić</strong>. While studying the region, he noted that the local Serbian population referred to <em>Bogićevica</em>, <em>Greben</em>, <em>Bjelić</em>, <em>Karanfili</em>, and <em>Trojan</em> with the collective name <strong>Prokletije</strong>, meaning "cursed mountains". Cvijić extended this term in his writings to encompass the entire range, from <strong>Lake Skadar</strong> to the <strong>Ibar River</strong> and <strong>Metohija</strong>. Today, the name is widely accepted in both everyday language and toponymy. The Albanian population calls them <em>Bjeshkët e Nemuna</em>, meaning "cursed" or "forbidden" mountains. The name has a dual etymological meaning—symbolizing not only the natural features of the region (<em>ruggedness</em>, <em>wilderness</em>, <em>inaccessibility</em>), but also the past socio-historical conditions (<em>personal insecurity</em>, <em>anarchy</em>, <em>various dangers</em>).
                </p>
              </section>

              <img srcSet={`${prokletije33} 450w, ${prokletije3}`} alt="Prokletije Mountain 3" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Đeravica</strong>, at <strong>2,656 meters</strong> above sea level, is the second-highest peak in Serbia. It is located in southern Serbia, in the <strong>Dečani municipality</strong>, <strong>Kosovo and Metohija province</strong>, above the medieval <strong>Visoki Dečani Monastery</strong>. Near the peak lie numerous <em>glacial lakes</em>, the largest of which is <strong>Đeravičko Lake</strong>. The lake is situated at about <strong>2,200 meters</strong> elevation, and the <strong>Ribnik (Erenik) River</strong> springs from it, flowing through <strong>Metohija</strong>. The lake is tooth-shaped, with a length of <strong>240 meters</strong>, a width of <strong>120 meters</strong>, and a maximum depth of <strong>3.8 meters</strong>. It is home to several amphibian species from the <em>salamandridae</em> family, which feed on <em>flying insects</em>.
                </p>
              </section>

              <img srcSet={`${prokletije44} 450w, ${prokletije4}`} alt="Prokletije Mountain 4" loading="lazy" />

              <section lang="en">
                <p>
                  In geographic research, the prevailing view is that the <strong>Prokletije</strong> Mountains represent the final part of the <strong>Dinaric mountain system</strong>. Indeed, they share many characteristics with that system. However, some <strong>geologists</strong> and <strong>geographers</strong> argue that the Prokletije form an <em>independent mountain system</em>. <strong>Jovan Cvijić</strong> was among the first to point out the geographical distinctiveness of the Prokletije massif. The main criteria for distinguishing Prokletije as a separate <em>geological</em> and <em>geomorphological</em> complex are its <strong>facies-stratigraphic characteristics</strong> and the <strong>orientation of the main ridge</strong>.
                </p>
              </section>

              <img srcSet={`${prokletije55} 450w, ${prokletije5}`} alt="Prokletije Mountain 5" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Prokletije</strong> region exhibits a unique <strong>hydrography</strong>, mostly associated with <em>limestone terrain</em>. It includes not only <em>karst springs</em> but also sections of <em>river flows</em> through <em>gorges</em> and <em>canyons</em> featuring <strong>waterfalls</strong> and <strong>large rock basins</strong>, as well as <em>sinkholes</em> and <em>karst sources</em>. In the <strong>Grlja Canyon</strong>, the river of the same name creates <strong>five waterfalls</strong> along a length of <strong>500 meters</strong>, meaning there is a waterfall approximately every 100 meters. The first waterfall, at the entrance to the canyon, formed by the <strong>Skakavica River</strong>, is <strong>15 meters</strong> high, while the tallest and final one reaches about <strong>25 meters</strong>. <strong>Plav Lake</strong> is the largest <em>limnological feature</em> of <strong>glacial origin</strong>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default Prokletije;