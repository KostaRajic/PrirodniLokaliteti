/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import rajac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac1.jpg";
import rajac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac2.jpg";
import rajac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac3.jpg";
import rajac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac4.jpg";
import rajac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac5.jpg";
import rajac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac6.jpg";
import rajac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/desktop/rajac7.jpg";
import rajac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac1.jpg";
import rajac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac2.jpg";
import rajac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac3.jpg";
import rajac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac4.jpg";
import rajac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac5.jpg";
import rajac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac6.jpg";
import rajac77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Rajac/mobile/Mrajac7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VrhRajac = () => {
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
        <title>
          {switchLanguage === 'rs'
            ? "Vrh Rajac – Planinarenje, Paraglajding i Tradicija na Suvoboru | Serbia Wonders"
            : "Rajac Peak – Hiking, Paragliding, and Tradition on Mount Suvobor | Serbia Wonders"}
        </title>
        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Vrh Rajac na planini Suvobor je omiljena destinacija za planinare, paraglajdere i ljubitelje prirode. Otkrijte istorijske lokalitete, manastire, crkve i manifestaciju Kosidba na Rajcu."
              : "Rajac Peak on Mount Suvobor is a favorite destination for hikers, paragliders, and nature lovers. Explore historical landmarks, monasteries, churches, and the traditional Mowing Festival."
          }
        />
        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Vrh Rajac, Suvobor, planinarenje, paraglajding, Kosidba na Rajcu, Crkvine vodopad, Valjevo, Gornji Milanovac, priroda, turizam, istorija"
              : "Rajac Peak, Suvobor, hiking, paragliding, Mowing Festival, Crkvine Waterfall, Valjevo, Gornji Milanovac, nature, tourism, history"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vrh-rajac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vrh-rajac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vrh-rajac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/vrh-rajac"
        />


      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(kulubarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${rajac11} 450w, ${rajac1} `} alt="Vrh Rajac 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h1>Vrh Rajac</h1>

              <section lang="sr">
                <p>
                  <strong>Vrh Rajac</strong> je jedan od najpoznatijih vrhova na planini <em>Suvobor</em>, smeštenoj
                  u zapadnom delu Srbije. Sa nadmorskom visinom od <strong>848 metara</strong>, Rajac predstavlja
                  omiljenu destinaciju za planinare, ljubitelje prirode i izletnike. Poznat je po blagim padinama
                  prekrivenim <em>livadama</em> i prostranim pašnjacima, koji tokom proleća i leta postaju posebno
                  atraktivni zbog bogatstva cveća i biljnog sveta. Rajac je deo Suvobora, planinskog masiva poznatog
                  po svojoj prirodnoj lepoti, istorijskom značaju i netaknutoj prirodi. Na vrhu se nalazi prepoznatljiva
                  <strong>planinarska kuća</strong> koja služi kao odmorište za posetioce, kao i polazna tačka za istraživanje
                  okolnih staza. Odatle se pruža fantastičan pogled na okolne planine, doline i šume, čineći ga idealnim mestom
                  za fotografisanje i uživanje u prirodi.
                </p>
              </section>

              <img srcSet={`${rajac22} 450w, ${rajac2} `} alt="Vrh Rajac 2" />

              <section lang="sr">
                <p>
                  Osim prirodnih lepota, područje oko Rajca ima i značajan <strong>istorijski kontekst</strong>, jer je Suvobor
                  bio poprište važnih bitaka tokom <em>Prvog svetskog rata</em>, posebno <strong>Kolubarske bitke</strong>. Stoga,
                  ovo mesto privlači i ljubitelje istorije koji žele da istraže priče o herojima i događajima iz tog perioda.
                  Vrh Rajac je dostupan tokom cele godine i nudi raznovrsne aktivnosti, uključujući <em>planinarenje</em>, biciklizam,
                  piknike i posmatranje prirode. Njegova blizina većim gradovima, poput <strong>Valjeva</strong> i <strong>Gornjeg Milanovca</strong>,
                  čini ga savršenim za jednodnevne izlete i beg od gradske gužve.
                </p>
              </section>

              <img srcSet={`${rajac33} 450w, ${rajac3} `} alt="Vrh Rajac paraglajding" />

              <section lang="sr">
                <p>
                  Rajac je poznat i kao jedno od najatraktivnijih mesta za <strong>paraglajding</strong> u Srbiji. Njegova blaga
                  nadmorska visina, povoljni vetrovi i otvoreni prostrani tereni čine ga idealnom destinacijom za ljubitelje ovog
                  adrenalinskog sporta. Padine Rajca omogućavaju lake uzlete i sigurna sletanja, što ga čini pogodnim i za početnike
                  i za iskusne paraglajdere. Jedan od ključnih razloga za popularnost Rajca među paraglajderima je izuzetno stabilna
                  <em>termika</em>, koja omogućava duže letove i uživanje u panoramskim pogledima na okolne planine, doline i prostrane livade.
                  Vetrovi na Rajcu su uglavnom konstantni i blagi, što dodatno doprinosi bezbednosti i kvalitetu letenja. Osim povoljnih
                  prirodnih uslova, Rajac ima razvijenu infrastrukturu za paraglajding. Često se organizuju kursevi i obuke za početnike,
                  kao i takmičenja koja okupljaju paraglajdere iz celog regiona. Ove manifestacije su idealna prilika da se paraglajderi povežu,
                  razmene iskustva i uživaju u zajedničkom hobiju.
                </p>
              </section>

              <img srcSet={`${rajac44} 450w, ${rajac4} `} alt="Manastir Vavedenje na Rajcu" />

              <section lang="sr">
                <p>
                  <strong>Manastir Vavedenje na Rajcu</strong>, posvećen <em>Vavedenju Presvete Bogorodice</em>, nalazi se na padinama planine
                  Suvobor, blizu vrha Rajac. Ovaj pravoslavni manastir pripada <strong>Eparhiji šabačkoj</strong> i predstavlja mesto mira i duhovnosti,
                  smešteno u prelepom prirodnom okruženju. Manastir je izgrađen u srednjem veku, a tokom istorije je obnavljan i očuvan kao značajno
                  duhovno središte ovog kraja. Njegova tišina i spokoj privlače vernike i posetioce koji traže duhovnu obnovu i utehu.
                </p>
              </section>

              <img srcSet={`${rajac55} 450w, ${rajac5} `} alt="Crkva Svetog Jovana Krstitelja na vrhu Rajac" />

              <section lang="sr">
                <p>
                  <strong>Crkva Svetog Jovana Krstitelja</strong> na vrhu Rajac je dragoceno istorijsko i duhovno nasleđe ovog kraja.
                  Ova crkva potiče iz srednjeg veka, a njen značaj dodatno naglašava nekropola sa nadgrobnim spomenicima iz <em>13. i 14. veka</em>,
                  koja se nalazi u neposrednoj blizini. Nekropola sadrži kamene spomenike sa ornamentima i natpisima, svedočeći o kulturnom i duhovnom
                  životu u to doba. Crkva i nekropola su smeštene u prirodnom okruženju planine Suvobor, pružajući mirnu atmosferu za posetioce i ljubitelje
                  istorije. Ovo mesto predstavlja značajan spoj prirode, istorije i tradicije, privlačeći turiste, arheologe i vernike.
                </p>
              </section>

              <img srcSet={`${rajac66} 450w, ${rajac6} `} alt="Kosidba na Rajcu" />

              <section lang="sr">
                <p>
                  <strong>Kosidba na Rajcu</strong> je tradicionalna manifestacija koja se svake godine održava na padinama planine Suvobor, na vrhu Rajac.
                  Ovaj događaj, poznat kao <em>"Sabor kosača"</em>, okuplja veliki broj učesnika i posetilaca iz Srbije i regiona, čuvajući sećanje na stari
                  način života i običaje vezane za ručno košenje trave. Manifestacija ima takmičarski karakter, gde se kosci nadmeću u brzini i preciznosti
                  košenja tradicionalnim alatima, uz ocenjivanje veštine, tehnike i kvaliteta obavljenog posla. Pored takmičenja, organizuju se i kulturno-umetnički
                  programi, uključujući folklorne nastupe, izložbe narodnih rukotvorina, kao i degustacije lokalnih specijaliteta. Kosidba na Rajcu nije samo sportski
                  i kulturni događaj, već i prilika za očuvanje tradicije i promociju prirodnih lepota ovog kraja. Livade Rajca, sa svojim prostranim pašnjacima i
                  pogledima, pružaju savršenu pozadinu za ovaj festival, koji privlači ljubitelje prirode, istorije i srpske baštine.
                </p>
              </section>

              <img srcSet={`${rajac77} 450w, ${rajac7} `} alt="Vodopad Crkvine" />

              <section lang="sr">
                <p>
                  <strong>Vodopad Crkvine</strong> jedno je od najlepših mesta na Rajcu i planini Suvobor, ali nažalost, nije dovoljno prepoznat među turistima
                  koji posećuju ovu oblast. To je verovatno zbog veoma strme i uske <em>šumske staze</em>, kao i slabog obeležavanja puta koji vodi do vodopada.
                  Kada se sa Rajca, tačnije od <strong>Planinarskog doma</strong>, krene ka selu <strong>Slavkovica</strong> i <strong>Ljigu</strong>, ubrzo se s desne strane
                  nailazi na proširenje pogodno za parkiranje, kao i putokaz koji označava skretanje desno ka vodopadu. Putokaz je teško uočiti iz suprotnog pravca,
                  prilikom uspona ka Rajcu, pa je potrebno obratiti pažnju kako bi se izbeglo promašivanje skretanja. Od tog mesta počinje zemljani put, a nakon nekoliko
                  stotina metara, skreće se levo ka šumskoj stazi, gde se nalazi poslednje adekvatno obeležje koje pokazuje pravac ka vodopadu.
                </p>
              </section>


            </>

          )
          :
          (
            <>

              <h1>Vrh Rajac</h1>

              <section lang="en"> <p> <strong>Vrh Rajac</strong> is one of the most famous peaks on the <em>Suvobor</em> mountain, located in the western part of Serbia. With an elevation of <strong>848 meters</strong>, Rajac is a favorite destination for hikers, nature lovers, and excursionists. It is known for its gentle slopes covered with <em>meadows</em> and vast pastures, which become especially attractive during spring and summer due to the abundance of flowers and plant life. Rajac is part of Suvobor, a mountain massif renowned for its natural beauty, historical significance, and untouched nature. At the summit, there is a distinctive <strong>mountain lodge</strong> that serves as a resting place for visitors and a starting point for exploring nearby trails. From there, a fantastic view opens up over surrounding mountains, valleys, and forests, making it an ideal spot for photography and enjoying nature. </p> </section>
              <img srcSet={`${rajac22} 450w, ${rajac2}`} alt="Vrh Rajac 2" />

              <section lang="en"> <p> Besides its natural beauty, the area around Rajac has significant <strong>historical context</strong>, as Suvobor was the site of important battles during <em>World War I</em>, especially the <strong>Battle of Kolubara</strong>. Therefore, this place also attracts history enthusiasts who want to explore stories about the heroes and events from that period. Vrh Rajac is accessible year-round and offers a variety of activities including <em>hiking</em>, biking, picnics, and nature watching. Its proximity to larger cities like <strong>Valjevo</strong> and <strong>Gornji Milanovac</strong> makes it perfect for day trips and an escape from urban crowds. </p> </section>
              <img srcSet={`${rajac33} 450w, ${rajac3}`} alt="Vrh Rajac paragliding" />

              <section lang="en"> <p> Rajac is also known as one of the most attractive places for <strong>paragliding</strong> in Serbia. Its gentle altitude, favorable winds, and open spacious terrain make it an ideal destination for fans of this adrenaline sport. The slopes of Rajac enable easy takeoffs and safe landings, making it suitable for both beginners and experienced paragliders. One of the key reasons for Rajac's popularity among paragliders is the exceptionally stable <em>thermals</em>, which allow for longer flights and enjoyment of panoramic views of surrounding mountains, valleys, and wide meadows. The winds at Rajac are mostly constant and mild, which further contributes to the safety and quality of flying. Besides favorable natural conditions, Rajac has well-developed infrastructure for paragliding. Courses and training sessions for beginners, as well as competitions that gather paragliders from the whole region, are often organized. These events are a great opportunity for paragliders to connect, share experiences, and enjoy the hobby together. </p> </section>
              <img srcSet={`${rajac44} 450w, ${rajac4}`} alt="Monastery Vavedenje on Rajac" />

              <section lang="en"> <p> The <strong>Monastery Vavedenje on Rajac</strong>, dedicated to the <em>Presentation of the Blessed Virgin Mary</em>, is located on the slopes of Suvobor mountain near the peak Rajac. This Orthodox monastery belongs to the <strong>Šabac Diocese</strong> and represents a place of peace and spirituality, situated in a beautiful natural environment. The monastery was built in the Middle Ages and has been renovated and preserved throughout history as an important spiritual center of the region. Its silence and tranquility attract believers and visitors seeking spiritual renewal and comfort. </p> </section>
              <img srcSet={`${rajac55} 450w, ${rajac5} `} alt="Church of Saint John the Baptist on Rajac peak" />

              <section lang="en"> <p> The <strong>Church of Saint John the Baptist</strong> on the peak of Rajac is a valuable historical and spiritual heritage of this region. This church dates back to the Middle Ages, and its importance is further emphasized by the nearby necropolis with tombstones from the <em>13th and 14th centuries</em>. The necropolis contains stone monuments with ornaments and inscriptions, testifying to the cultural and spiritual life of that era. The church and necropolis are set in the natural surroundings of Suvobor mountain, providing a peaceful atmosphere for visitors and history enthusiasts. This place represents a significant blend of nature, history, and tradition, attracting tourists, archaeologists, and believers. </p> </section>
              <img srcSet={`${rajac66} 450w, ${rajac6} `} alt="Haymaking on Rajac" />

              <section lang="en"> <p> <strong>Haymaking on Rajac</strong> is a traditional event held annually on the slopes of Suvobor mountain, at the Rajac peak. This event, known as the <em>"Gathering of Mowers"</em>, gathers many participants and visitors from Serbia and the region, preserving the memory of the old way of life and customs related to manual grass cutting. The event has a competitive character, where mowers compete in speed and precision using traditional tools, with judging based on skill, technique, and quality of work performed. In addition to the competition, cultural and artistic programs are organized, including folk performances, exhibitions of folk crafts, and tastings of local specialties. Haymaking on Rajac is not only a sports and cultural event but also an opportunity to preserve tradition and promote the natural beauty of the region. The meadows of Rajac, with their vast pastures and views, provide a perfect backdrop for this festival, attracting nature lovers, history buffs, and Serbian heritage enthusiasts. </p> </section>
              <img srcSet={`${rajac77} 450w, ${rajac7} `} alt="Crkvine Waterfall" />

              <section lang="en"> <p> <strong>Crkvine Waterfall</strong> is one of the most beautiful spots on Rajac and Suvobor mountain, but unfortunately, it is not well-known among tourists visiting this area. This is probably due to a very steep and narrow <em>forest trail</em> and poor marking of the path leading to the waterfall. When leaving Rajac, specifically from the <strong>Mountain Lodge</strong>, heading towards the village of <strong>Slavkovica</strong> and <strong>Ljig</strong>, a widened area suitable for parking is soon found on the right side, along with a signpost indicating a right turn towards the waterfall. The signpost is difficult to notice when approaching from the opposite direction, climbing towards Rajac, so attention is needed to avoid missing the turn. From that point, a dirt road begins, and after a few hundred meters, there is a left turn onto a forest trail where the last proper sign indicates the direction to the waterfall. </p> </section>

            </>

          )}

      </div>
    </>
  );
};


export default VrhRajac;