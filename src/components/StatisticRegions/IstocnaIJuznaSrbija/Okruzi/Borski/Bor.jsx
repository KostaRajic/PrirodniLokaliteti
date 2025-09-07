/* eslint-disable react/no-unknown-property */
import bor1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor1.jpg";
import bor2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor2.jpg";
import bor3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor3.jpg";
import bor4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor4.jpg";
import bor5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor5.jpg";
import bor6 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor6.jpg";
import bor7 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor7.jpg";
import bor11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM1.jpg";
import bor22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM2.jpg";
import bor33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM3.jpg";
import bor44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM4.jpg";
import bor55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM5.jpg";
import bor66 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM6.jpg";
import bor77 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Bor = () => {
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

        <title>{switchLanguage === 'rs' ? "Bor – Grad Bakra, Prirode i Pećina | Serbia Wonders" : "Bor – The City of Copper, Nature, and Caves | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Bor – grad na istoku Srbije poznat po rudnicima bakra i zlata, Borskom jezeru, planinama Stol i Deli Jovan, Zlotskim pećinama i Brestovačkoj banji. Savršena kombinacija industrije i prirode."
            :
            "Bor – a city in eastern Serbia known for its copper and gold mines, Bor Lake, the Stol and Deli Jovan mountains, the Zlot Caves, and the Brestovac Spa. A perfect blend of industry and nature."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Bor, Srbija, Borsko jezero, Zlotske pećine, Brestovačka banja, Stol, Veliki Krš, Deli Jovan, planine istočne Srbije, rudnici, bakar, zlato, turističke destinacije u Srbiji"
            :
            "Bor, Serbia, Bor Lake, Zlot Caves, Brestovac Spa, Stol, Veliki Krš, Deli Jovan, mountains of eastern Serbia, mines, copper, gold, tourist destinations in Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/bor`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/bor"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/bor"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/bor"
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
        <img srcSet={`${bor11} 450w, ${bor1} `} alt="Bor 1" loading="lazy" />

        <h2>Bor</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  Grad <strong>Bor</strong> se nalazi na <strong>istoku Republike Srbije</strong>, u <strong>Timočkoj regiji</strong>, između gradova <strong>Zaječar</strong> i opština <strong>Negotin</strong>, <strong>Majdanpek</strong>, <strong>Žagubica</strong>, <strong>Despotovac</strong> i <strong>Boljevac</strong>. Karakteristična je blizina granica sa <strong>Bugarskom</strong> i <strong>Rumunijom</strong>. Veći deo teritorije je <em>brdsko-planinski</em>. Pripada <em>slivu Timoka</em>, odnosno <em>Dunava</em>. Grad Bor pripada <strong>Borčkom okrugu</strong> i zauzima površinu od <strong>856 km²</strong>, na kojoj živi <strong>41.280 stanovnika</strong> (prema popisu iz <strong>2022. godine</strong>), što je <strong>48 stanovnika po km²</strong>.
                </p>
              </section>

              <img srcSet={`${bor22} 450w, ${bor2}`} alt="Bor 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Grad Bor se sastoji od centralnog naselja i sedišta grada – <strong>gradskog naselja Bor</strong>, kao i <strong>12 sela</strong>: <strong>Gornjane</strong>, <strong>Tanda</strong>, <strong>Luka</strong>, <strong>Krivelj</strong>, <strong>Bučje</strong>, <strong>Oštrelj</strong>, <strong>Donja Bela Reka</strong>, <strong>Brestovac</strong>, <strong>Slatina</strong>, <strong>Zlot</strong>, <strong>Šarbanovac</strong> i <strong>Metovnica</strong>. Grad Bor je i sedište <strong>Borčkog okruga</strong> koji, pored Bora, čine opštine <strong>Kladovo</strong>, <strong>Majdanpek</strong> i <strong>Negotin</strong>.
                  <br /><br />
                  Veza sa glavnim putnim pravcem – <strong>autoputem E-75</strong> (<em>Beograd – Skoplje</em>) je moguća preko <strong>četiri putna pravca</strong> i to: put preko <strong>Boljevca i Paraćina</strong> dužine <strong>87 km</strong>; put preko <strong>Zaječara, Knjaževca i Niša</strong> dužine <strong>150 km</strong>; put preko <strong>Žagubice, Kučeva i Požarevca</strong> dužine <em>oko 158 km</em> i put preko <strong>Zagrađa i Miloševe kule</strong> dužine <em>oko 205 km</em>.
                </p>
              </section>

              <img srcSet={`${bor33} 450w, ${bor3}`} alt="Bor 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Prirodni resursi Bora ne obuhvataju samo nalazišta ruda bogatih <strong>bakrom</strong> i <strong>zlatom</strong>, već se u njegovoj neposrednoj blizini nalaze i <em>oaze netaknute prirode</em>. Važnu specifičnost grada, koja nije uobičajena za industrijski razvijene sredine, čine <strong>prirodni uslovi za razvoj turizma</strong>. U neposrednoj blizini grada nalazi se jedna od <em>najstarijih banja u Srbiji</em> – <strong>Brestovačka banja</strong>, izdvajaju se visovi <strong>Crnog vrha</strong>, <strong>planina Stol</strong>, <strong>Veliki i Mali Krš</strong>, turistički biser <strong>Borsko jezero</strong>, krečnjačka površ <strong>Dubasnica</strong>, kao i <strong>zlotske pećine Vernjikica i Lazareva</strong>, sa izvanrednim <em>pećinskim ukrasima</em>.
                </p>
              </section>

              <img srcSet={`${bor44} 450w, ${bor4}`} alt="Bor 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Zapadni deo grada</strong> pripada <strong>planinskom kompleksu Južnog Kučaja</strong>. Svojom atraktivnošću i raznovrsnošću površinskih oblika reljefa izdvaja se <strong>krečnjačka površ Dubasnica</strong>, koja pokriva oko <strong>70 km²</strong>. Reke koje <em>poniru</em> na zapadnoj strani Dubasnice, izvire na istočnom obodu, na kontaktu <em>krečnjačkih i vulkanskih stena</em>. U podnožju planine <strong>Crni Vrh</strong>, na nadmorskoj visini od <strong>438 metara</strong>, nalazi se turistički biser <strong>Borsko jezero</strong>, površine <strong>30 hektara</strong>. Jedna od <em>najstarijih banja u Srbiji</em>, sa titulom <strong>„kraljevske“ banje</strong>, smeštena je na nadmorskoj visini od <strong>385 metara</strong> – <strong>Brestovačka banja</strong>, čije vode spadaju među <em>najlekovitije u Srbiji</em>. <strong>Zlotske pećine</strong> i <strong>kanjon Zlotske reke</strong>, pored prirodnih lepota, odlikuju se prisustvom <em>retkih vrsta flore i faune</em>. Do sada je istraženo <strong>116 pećina</strong> i <strong>14 jama</strong>.
                </p>
              </section>

              <img srcSet={`${bor55} 450w, ${bor5}`} alt="Zoo Park u Boru" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Zoo park Bor</strong> je smešten u blizini centra Bora i predstavlja jednu od atrakcija u ovom području. Ovaj zoološki vrt ima <strong>bogatstvo različitih životinjskih vrsta</strong>, a posetioci mogu uživati u posmatranju <em>domaćih i egzotičnih životinja</em>. Zoo park je posebno poznat po tome što je povezan sa <em>prirodnim okruženjem</em>, te posetioci mogu doživeti <strong>prijatnu atmosferu</strong> koja je pogodna za <strong>porodice</strong>, <strong>turiste</strong> i <strong>ljubitelje životinja</strong>. Uz to, Zoo park Bor promoviše <strong>edukaciju o zaštiti životne sredine</strong> i <em>očuvanju ugroženih vrsta</em>.
                </p>
              </section>

              <img srcSet={`${bor66} 450w, ${bor6}`} alt="Planine Stol, Veliki Krš, Deli Jovan" loading="lazy" />

              <section lang="sr">
                <p>
                  Istočni deo zahvataju planine: <strong>Stol</strong>, koji je <em>drugi po visini vrh</em> na teritoriji grada, čiji <em>zaravnjeni vrhovi i strme litice</em> pružaju pogodne uslove za <strong>planinarenje</strong> i <strong>ekstremne sportove</strong>; <strong>Mali i Veliki Krš</strong>, <em>Alpi istočne Srbije</em> koji se uzdižu do visine od <strong>1.148 metara</strong>; <strong>Deli Jovan</strong> koji pripada <em>karpatsko-balkanskom sistemu</em> i <strong>Gornjanska visoravan</strong>, oko koje se uzdižu ove planine.
                </p>
              </section>

              <img srcSet={`${bor77} 450w, ${bor7}`} alt="Brestovačka banja" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Brestovačka banja</strong>, koja se nalazi u blizini Bora, jedan je od <em>najpoznatijih termalnih izvora u Srbiji</em>. Poznata je po svojim <strong>lekovitim vodama</strong> koje imaju <em>visoka terapeutska svojstva</em>. Banja je smeštena na nadmorskoj visini od <strong>385 metara</strong> i koristi se za <strong>lečenje različitih zdravstvenih problema</strong>, naročito bolesti <em>lokomotornog sistema</em>, <em>kožnih oboljenja</em>, kao i za <strong>rehabilitaciju</strong> i <strong>relaksaciju</strong>. Pored lekovitih voda, Brestovačka banja nudi i <em>prijatnu prirodnu okolinu</em>, što je čini popularnom destinacijom za <strong>turizam</strong> i <strong>opuštanje</strong>. Banja je poznata i po svojoj <strong>istorijskoj tradiciji</strong>, jer se spominje kao <em>„kraljevska“ banja</em>, zbog značaja koji je imala tokom vremena.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  The city of <strong>Bor</strong> is located in the <strong>eastern part of the Republic of Serbia</strong>, in the <strong>Timok region</strong>, between the city of <strong>Zaječar</strong> and the municipalities of <strong>Negotin</strong>, <strong>Majdanpek</strong>, <strong>Žagubica</strong>, <strong>Despotovac</strong>, and <strong>Boljevac</strong>. It is characterized by its proximity to the borders with <strong>Bulgaria</strong> and <strong>Romania</strong>. Most of its territory is <em>hilly and mountainous</em>. It belongs to the <em>Timok river basin</em>, which is part of the <em>Danube basin</em>. The city of Bor is part of the <strong>Bor District</strong> and covers an area of <strong>856 km²</strong>, with a population of <strong>41,280 inhabitants</strong> (according to the <strong>2022 census</strong>), which equals <strong>48 inhabitants per km²</strong>.
                </p>
              </section>

              <img srcSet={`${bor22} 450w, ${bor2}`} alt="Bor 2" loading="lazy" />

              <section lang="en">
                <p>
                  The city of Bor consists of the central settlement and the city seat – the <strong>Bor urban settlement</strong>, as well as <strong>12 villages</strong>: <strong>Gornjane</strong>, <strong>Tanda</strong>, <strong>Luka</strong>, <strong>Krivelj</strong>, <strong>Bučje</strong>, <strong>Oštrelj</strong>, <strong>Donja Bela Reka</strong>, <strong>Brestovac</strong>, <strong>Slatina</strong>, <strong>Zlot</strong>, <strong>Šarbanovac</strong>, and <strong>Metovnica</strong>. Bor is also the seat of the <strong>Bor District</strong>, which, besides Bor, includes the municipalities of <strong>Kladovo</strong>, <strong>Majdanpek</strong>, and <strong>Negotin</strong>.
                  <br /><br />
                  Connection to the main highway – the <strong>E-75 motorway</strong> (<em>Belgrade – Skopje</em>) is possible via <strong>four routes</strong>: the road through <strong>Boljevac and Paraćin</strong>, which is <strong>87 km</strong> long; the road through <strong>Zaječar, Knjaževac, and Niš</strong>, which is <strong>150 km</strong>; the road through <strong>Žagubica, Kučevo, and Požarevac</strong>, approximately <em>158 km</em> long; and the road through <strong>Zagrađe and Miloševa Kula</strong>, about <em>205 km</em> long.
                </p>
              </section>

              <img srcSet={`${bor33} 450w, ${bor3}`} alt="Bor 3" loading="lazy" />

              <section lang="en">
                <p>
                  The natural resources of Bor include not only deposits rich in <strong>copper</strong> and <strong>gold</strong>, but also <em>oases of untouched nature</em> in its immediate vicinity. An important peculiarity of the city, which is uncommon for industrially developed areas, is the presence of <strong>natural conditions favorable for tourism development</strong>. Near the city, there is one of the <em>oldest spas in Serbia</em> – <strong>Brestovačka Spa</strong>. Also noteworthy are the peaks of <strong>Crni Vrh</strong>, <strong>Stol mountain</strong>, <strong>Veliki and Mali Krš</strong>, the tourist gem <strong>Borsko Lake</strong>, the limestone plateau <strong>Dubasnica</strong>, as well as the <strong>Zlot caves Vernjikica and Lazareva</strong>, known for their extraordinary <em>cave formations</em>.
                </p>
              </section>

              <img srcSet={`${bor44} 450w, ${bor4}`} alt="Bor 4" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>western part of the city</strong> belongs to the <strong>mountain complex of Southern Kučaj</strong>. Its attractiveness and variety of surface relief forms are highlighted by the <strong>Dubasnica limestone plateau</strong>, covering about <strong>70 km²</strong>. Rivers that <em>sink</em> on the western side of Dubasnica emerge on the eastern edge, at the contact between <em>limestone and volcanic rocks</em>. At the foot of <strong>Crni Vrh mountain</strong>, at an altitude of <strong>438 meters</strong>, lies the tourist gem <strong>Borsko Lake</strong>, covering <strong>30 hectares</strong>. One of the <em>oldest spas in Serbia</em>, with the title of the <strong>“royal” spa</strong>, is situated at an altitude of <strong>385 meters</strong> – <strong>Brestovačka Spa</strong>, whose waters are considered among the <em>most healing in Serbia</em>. The <strong>Zlot caves</strong> and the <strong>canyon of the Zlot river</strong>, in addition to their natural beauty, are distinguished by the presence of <em>rare species of flora and fauna</em>. So far, <strong>116 caves</strong> and <strong>14 pits</strong> have been explored.
                </p>
              </section>

              <img srcSet={`${bor55} 450w, ${bor5}`} alt="Zoo Park in Bor" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Zoo Park Bor</strong> is located near the center of Bor and represents one of the attractions in the area. This zoo hosts a <strong>rich variety of animal species</strong>, and visitors can enjoy observing <em>domestic and exotic animals</em>. The zoo is especially known for its connection with the <em>natural environment</em>, allowing visitors to experience a <strong>pleasant atmosphere</strong> suitable for <strong>families</strong>, <strong>tourists</strong>, and <strong>animal lovers</strong>. Additionally, Zoo Park Bor promotes <strong>education on environmental protection</strong> and <em>conservation of endangered species</em>.
                </p>
              </section>

              <img srcSet={`${bor66} 450w, ${bor6}`} alt="Mountains Stol, Veliki Krš, Deli Jovan" loading="lazy" />

              <section lang="en">
                <p>
                  The eastern part includes the mountains: <strong>Stol</strong>, which is the <em>second highest peak</em> in the city territory, whose <em>flattened peaks and steep cliffs</em> provide favorable conditions for <strong>hiking</strong> and <strong>extreme sports</strong>; <strong>Mali and Veliki Krš</strong>, the <em>Alps of eastern Serbia</em> rising to an altitude of <strong>1,148 meters</strong>; <strong>Deli Jovan</strong>, part of the <em>Carpathian-Balkan system</em>, and the <strong>Gornjanska plateau</strong>, around which these mountains rise.
                </p>
              </section>

              <img srcSet={`${bor77} 450w, ${bor7}`} alt="Brestovačka Spa" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Brestovačka Spa</strong>, located near Bor, is one of the <em>most famous thermal springs in Serbia</em>. It is known for its <strong>healing waters</strong>, which have <em>high therapeutic properties</em>. The spa is situated at an altitude of <strong>385 meters</strong> and is used for the <strong>treatment of various health problems</strong>, especially diseases of the <em>locomotor system</em>, <em>skin conditions</em>, as well as for <strong>rehabilitation</strong> and <strong>relaxation</strong>. Besides the healing waters, Brestovačka Spa offers a <em>pleasant natural environment</em>, making it a popular destination for <strong>tourism</strong> and <strong>rest</strong>. The spa is also known for its <strong>historical tradition</strong>, being referred to as the <em>“royal” spa</em> due to its significance over time.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};

export default Bor;