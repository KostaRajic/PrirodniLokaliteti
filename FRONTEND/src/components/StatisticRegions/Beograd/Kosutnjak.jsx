/* eslint-disable react/no-unknown-property */
import kosutnjak1 from "../../../assets/images/Beograd/Kosutnjak/desktop/kosutnjak1.jpg";
import kosutnjak2 from "../../../assets/images/Beograd/Kosutnjak/desktop/kosutnjak2.jpg";
import kosutnjak3 from "../../../assets/images/Beograd/Kosutnjak/desktop/kosutnjak3.jpg";
import kosutnjak4 from "../../../assets/images/Beograd/Kosutnjak/desktop/kosutnjak4.jpg";
import kosutnjak5 from "../../../assets/images/Beograd/Kosutnjak/desktop/kosutnjak5.jpg";
import kosutnjak6 from "../../../assets/images/Beograd/Kosutnjak/desktop/kosutnjak6.jpg";
import kosutnjak11 from "../../../assets/images/Beograd/Kosutnjak/mobile/kosutnjakM1.jpg";
import kosutnjak22 from "../../../assets/images/Beograd/Kosutnjak/mobile/kosutnjakM2.jpg";
import kosutnjak33 from "../../../assets/images/Beograd/Kosutnjak/mobile/kosutnjakM3.jpg";
import kosutnjak44 from "../../../assets/images/Beograd/Kosutnjak/mobile/kosutnjakM4.jpg";
import kosutnjak55 from "../../../assets/images/Beograd/Kosutnjak/mobile/kosutnjakM5.jpg";
import kosutnjak66 from "../../../assets/images/Beograd/Kosutnjak/mobile/kosutnjakM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Kosutnjak = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();


  useEffect(() => {
    if (lang !== switchLanguage) {

      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  return (
    <>

      <Helmet>

        <title>{switchLanguage === 'rs' ? "Košutnjak – Zelena Oaza Beograda | Serbia Wonders" : "Košutnjak – The Green Oasis of Belgrade | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Košutnjak – gradska šuma, park i izletište na 330 hektara. Uživajte u prirodi, istoriji, Hajdučkoj česmi, Pionirskom gradu i sportskim sadržajima u srcu Beograda."
            :
            "Košutnjak – a city forest, park, and picnic area spanning 330 hectares. Enjoy nature, history, Hajdučka Česma spring, Pioneer City, and sports facilities in the heart of Belgrade."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Košutnjak, Beograd, park, šuma, izletište, Hajdučka česma, Pionirski grad, otvoreni bazen, rekreacija, priroda, Miloš Obrenović, atentat kneza Mihaila, Topčider, flora i fauna"
            :
            "Košutnjak, Belgrade, park, forest, picnic area, Hajdučka Česma, Pioneer City, outdoor pool, recreation, nature, Miloš Obrenović, assassination of Prince Mihailo, Topčider, flora and fauna"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/beograd/kosutnjak`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/beograd/kosutnjak"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/beograd/kosutnjak"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/beograd/kosutnjak"
        />


      </Helmet >

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${kosutnjak11} 450w, ${kosutnjak1} `} alt="Kalemegdan 1" loading="lazy" />

        <h1>Košutnjak</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang='sr'>
                <p>
                  Košutnjak, koji je <strong>park, šuma i gradsko izletište</strong>, prostire se na površini od <strong>330 hektara</strong> i pripada opštinama <em>Savski Venac, Čukarica i Rakovica</em>. To je jedno od najpoznatijih i najpopularnijih beogradskih izletišta, koje zajedno sa Topčidrom čini jedinstvenu ekološku celinu. Zbog posebnih prirodnih, kulturnih i istorijskih vrednosti, prostorna kulturno-istorijska celina <em>„Topčider – Košutnjak“</em> proglašena je za <strong>kulturno dobro od izuzetnog značaja za Srbiju</strong>. Zahvaljujući povoljnom geografskom položaju, klimatskim i geomorfološkim osobinama, kao i bogatstvu flore i faune, predstavlja značajan prirodni resurs.
                </p>
              </section>

              <img srcSet={`${kosutnjak22} 450w, ${kosutnjak2}`} alt="Košutnjak 2" loading="lazy" />

              <section lang='sr'>
                <p>
                  Košutnjak je od Zavoda za zaštitu prirode Srbije proglašen za <strong>„Spomenik prirode“</strong>. To je jedini preostali deo <em>autohtone šumske vegetacije</em> u neposrednoj blizini centra Beograda. Šuma Košutnjak je izuzetno bogata i obuhvata i <strong>listopadno i četinarsko drveće</strong>. Prostor predstavlja prirodni rezervat za vrste poput <em>srebrolisne lipe, graba i hrasta lužnjaka</em>. Jedan od zanimljivih detalja je stablo ginka, biljke karakteristične za jugoistočnu Kinu, koje se nalazi u Pionirskom gradu. Flora Košutnjaka broji <strong>521 vrstu biljaka</strong>, dok fauna uključuje <strong>20 vrsta sitnih sisara, 25 vrsta ptica, 15 vrsta vodozemaca i gmazova</strong>, kao i <strong>227 vrsta insekata</strong>.
                </p>
              </section>

              <img srcSet={`${kosutnjak44} 450w, ${kosutnjak4}`} alt="Košutnjak 4" loading="lazy" />

              <section lang='sr'>
                <p>
                  Košutnjak se prvi put pominje u dokumentima iz <strong>1831. godine</strong>, kada se opisuje kao veoma gusta šuma. U drugoj polovini 19. veka postao je prestižno lovište, gde su zajedno sa knezom Milošem Obrenovićem lovili i strani konzuli. Prema dopisu iz <strong>1849. godine</strong>, zabeleženo je prisustvo <em>13 jelena i 35 košuta</em>, po kojima je i čitav region dobio ime. U šumi Košutnjak dogodio se atentat na kneza Mihaila Obrenovića, koji je ubijen <strong>10. juna 1868. godine</strong> (po crkvenom kalendaru 29. maja). Spomen-obilježje na mestu njegove pogibije nalazi se u podnožju Košutnjaka i predstavlja <em>kenotaf</em> – spomen-grobnicu u kojoj nije sahranjeno telo.
                </p>
              </section>

              <img srcSet={`${kosutnjak33} 450w, ${kosutnjak3}`} alt="Košutnjak 3" loading="lazy" />

              <section lang='sr'>
                <p>
                  Pored spomen-obilježja, jedno od najpoznatijih i najomiljenijih mesta okupljanja Beograđana, naročito tokom praznika, jeste <strong>Hajdučka česma</strong>. Prema predaji, haiduci su se okupljali oko nje na Đurđevdan, a poznata je po vodi koja se smatra lekovitom. U njenoj blizini, na silaznoj stazi pored Topčiderskog groblja, nalazi se <em>Miloševa česma</em>, koju je knez Miloš Obrenović podigao 1859. godine u znak sećanja na svoj povratak na presto, ali je danas presušila. Nakon Drugog svetskog rata, u Košutnjaku je izgrađen <strong>Pionirski grad</strong>. Građen je uz pomoć omladinskih radnih brigada, prvobitno na površini od 8,4 hektara, da bi do 1962. dostigao površinu od 40 hektara. Nekada su po proplancima kružili popularni vozovi sa lokomotivama poznatim kao <em>„Ćira“ i „Spira“</em>. „Pionirska pruga“ puštena je u rad 1947. godine, a predata Pionirskom gradu na upravljanje 1951. Imala je tri stanice: „Kosmaj“, „Sutjeska“ i „Jastrebac“, a kondukteri su bila deca. Pruga je prestala sa radom 1953. godine.
                </p>
              </section>

              <img srcSet={`${kosutnjak66} 450w, ${kosutnjak6}`} alt="Košutnjak 6" loading="lazy" />

              <section lang='sr'>
                <p>
                  Košutnjak je domaćin jednog od najpoznatijih <strong>otvorenih bazena</strong> u Beogradu. Bazen se nalazi u okviru <em>Sportskog centra Košutnjak</em>, koji nudi raznovrsne sportske i rekreativne sadržaje. Tokom letnjih meseci, otvoreni bazen je popularno mesto za kupanje i sunčanje u prirodnom okruženju. Pored bazena, tu su sportski tereni, biciklističke staze i drugi sadržaji, što čini Košutnjak omiljenim mestom za opuštanje i rekreaciju.
                </p>
              </section>

              <img srcSet={`${kosutnjak55} 450w, ${kosutnjak5}`} alt="Košutnjak 5" loading="lazy" />

              <section lang='sr'>
                <p>
                  Košutnjak je idealno mesto za izlete, roštiljanja i druženja na otvorenom. Ovde možete uživati u prirodi, šetnjama kroz šumu ili organizovati piknik sa prijateljima i porodicom. Postoje brojni prostori sa roštiljima, gde posetioci mogu pripremati hranu i uživati u zajedničkim trenucima. Zeleni prostrani prostori omogućavaju opuštanje, igre i druženje, što Košutnjak čini savršenim odredištem za vikend izlete i porodična okupljanja.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang='en'> <p> Košutnjak, which is a <strong>park, forest, and city recreational area</strong>, covers an area of <strong>330 hectares</strong> and belongs to the municipalities of <em>Savski Venac, Čukarica, and Rakovica</em>. It is one of the most famous and popular excursion spots in Belgrade, which together with Topčider forms a unique ecological unit. Due to its special natural, cultural, and historical values, the spatial cultural-historical complex <em>“Topčider – Košutnjak”</em> has been declared a <strong>cultural heritage site of exceptional importance for Serbia</strong>. Thanks to its favorable geographic location, climatic and geomorphological features, as well as the richness of its flora and fauna, it represents a significant natural resource. </p> </section>
              <img srcSet={`${kosutnjak22} 450w, ${kosutnjak2}`} alt="Košutnjak 2" loading="lazy" />

              <section lang='en'> <p> Košutnjak has been declared a <strong>“Natural Monument”</strong> by the Institute for Nature Conservation of Serbia. It is the only remaining part of the <em>autochthonous forest vegetation</em> near the center of Belgrade. The Košutnjak forest is extremely rich and includes both <strong>deciduous and coniferous trees</strong>. The area is a natural reserve for species such as <em>silver linden, hornbeam, and pedunculate oak</em>. An interesting feature is the ginkgo tree, a plant native to southeastern China, which is located in Pioneer City. Košutnjak’s flora counts <strong>521 plant species</strong>, while its fauna includes <strong>20 species of small mammals, 25 species of birds, 15 species of amphibians and reptiles</strong>, and <strong>227 species of insects</strong>. </p> </section>
              <img srcSet={`${kosutnjak44} 450w, ${kosutnjak4}`} alt="Košutnjak 4" loading="lazy" />

              <section lang='en'> <p> Košutnjak was first mentioned in documents from <strong>1831</strong>, where it is described as a very dense forest. In the second half of the 19th century, it became a prestigious hunting ground, where foreign consuls hunted alongside Prince Miloš Obrenović. According to a report from <strong>1849</strong>, there were <em>13 stags and 35 does</em>, which is how the entire region got its name. In the Košutnjak forest, an assassination attempt took place on Prince Mihailo Obrenović, who was killed on <strong>June 10, 1868</strong> (May 29 by the church calendar). The memorial at the site of his death is located at the foot of Košutnjak and is a <em>cenotaph</em> – a memorial tomb without the body interred. </p> </section>
              <img srcSet={`${kosutnjak33} 450w, ${kosutnjak3}`} alt="Košutnjak 3" loading="lazy" />

              <section lang='en'> <p> Besides the memorial, one of the most famous and beloved gathering places for Belgraders, especially during holidays, is the <strong>Hajdučka Fountain</strong>. According to legend, hajduks (outlaws) gathered there on St. George’s Day, and the water is known for its healing properties. Near it, on the descending path next to the Topčider cemetery, is <em>Miloš’s Fountain</em>, built by Prince Miloš Obrenović in 1859 to commemorate his return to the throne, but it has since dried up. After World War II, <strong>Pioneer City</strong> was built in Košutnjak. Constructed with the help of youth work brigades, it initially covered 8.4 hectares and expanded to 40 hectares by 1962. Once, popular trains with locomotives known as <em>“Ćira” and “Spira”</em> ran through the clearings. The “Pioneer Railway” started operating in 1947 and was handed over to Pioneer City management in 1951. It had three stations: “Kosmaj,” “Sutjeska,” and “Jastrebac,” with children as conductors. The railway ceased operation in 1953. </p> </section>
              <img srcSet={`${kosutnjak66} 450w, ${kosutnjak6}`} alt="Košutnjak 6" loading="lazy" />

              <section lang='en'> <p> Košutnjak is home to one of the most well-known <strong>outdoor swimming pools</strong> in Belgrade. The pool is part of the <em>Košutnjak Sports Center</em>, which offers a variety of sports and recreational facilities. During the summer months, the outdoor pool is a popular spot for swimming and sunbathing in a natural environment. In addition to the pool, there are sports courts, cycling paths, and other amenities, making Košutnjak a favorite place for relaxation and recreation. </p> </section>
              <img srcSet={`${kosutnjak55} 450w, ${kosutnjak5}`} alt="Košutnjak 5" loading="lazy" />

              <section lang='en'> <p> Košutnjak is an ideal place for excursions, barbecues, and outdoor gatherings. Here you can enjoy nature, walk through the forest, or organize a picnic with friends and family. There are numerous barbecue spots where visitors can prepare food and enjoy time together. The spacious green areas allow for relaxation, games, and socializing, making Košutnjak a perfect destination for weekend outings and family get-togethers. </p> </section>

            </>
          )}

      </div>

    </>
  );
};

export default Kosutnjak;