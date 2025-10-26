/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import sokobanja1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/desktop/sokobanja1.jpg";
import sokobanja2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/desktop/sokobanja2.jpg";
import sokobanja3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/desktop/sokobanja3.jpg";
import sokobanja4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/desktop/sokobanja4.jpg";
import sokobanja6 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/desktop/sokobanja6.jpg";
import sokobanja7 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/desktop/sokobanja7.jpg";
import sokobanja8 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/desktop/sokobanja8.jpg";
import sokobanja11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/mobile/sokobanjaM1.jpg";
import sokobanja22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/mobile/sokobanjaM2.jpg";
import sokobanja33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/mobile/sokobanjaM3.jpg";
import sokobanja44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/mobile/sokobanjaM4.jpg";
import sokobanja66 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/mobile/sokobanjaM6.jpg";
import sokobanja77 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/mobile/sokobanjaM7.jpg";
import sokobanja88 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Sokobanja/mobile/sokobanjaM8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SokoBanja = () => {
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

        <title>{switchLanguage === 'rs' ? "Sokobanja – Banja i Prirodni Raj u Srcu Srbije | Serbia Wonders" : "Sokobanja – Spa Town and Natural Paradise in Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Sokobanja je poznata banja u centralnoj Srbiji, okružena planinama, sa lekovitim mineralnim izvorima, bogatom istorijom i prirodnim lepotama. Idealno mesto za odmor i wellness."
            :
            "Sokobanja is a renowned spa town in central Serbia, surrounded by mountains, famous for its healing mineral springs, rich history, and natural beauty. A perfect destination for rest and wellness."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Sokobanja, banja u Srbiji, mineralni izvori, termomineralna voda, Lepterija, Tursko kupatilo Amam, Akva park, prirodne lepote, planine Rtanj i Ozren"
            :
            "Sokobanja, spa town Serbia, mineral springs, thermal water, Lepterija, Turkish Bath Amam, Aqua Park, natural beauty, Rtanj and Ozren mountains"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-banja`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-banja"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-banja"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-banja"
        />
      </Helmet >



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sokobanja22} 450w, ${sokobanja2} `} alt="Sokobanja 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Sokobanja</h1>

              <section lang="sr">
                <p>
                  <strong>Sokobanja</strong> je grad i banja u centralnom delu Srbije, poznata po prirodnim lepotama, lekovitim mineralnim izvorima i istorijskoj važnosti. Nalazi se u dolini reke <strong>Moravice</strong>, okružena slikovitim brdima i šumama, zbog čega je popularno odredište za turiste koji traže opuštanje i wellness. Grad ima bogatu istoriju koja seže još od rimskih vremena, a poznat je po lekovitim svojstvima, naročito zbog mineralnih voda i blage klime. Sokobanja je takođe poznata po srednjovekovnoj arhitekturi, uključujući ostatke tvrđava i manastira. Danas je značajna banja, koja privlači posetioce svojim banjskim lečilištima, planinarskim stazama i mirnom okolinom.
                </p>
              </section>

              <img srcSet={`${sokobanja77} 450w, ${sokobanja7}`} alt="Sokobanja 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Sokobanja se nalazi na visini od oko <strong>400 metara</strong> nadmorske visine. Kroz grad protiče reka <strong>Sokobańska Moravica</strong>. Poznata je turistička destinacija za rekreativni, a posebno banjski turizam. Smestila se između <strong>Karpatskih</strong> i <strong>Balkanskih planina</strong>, između <strong>Rtња</strong> i <strong>Ozrena</strong>. Za Sokobanju su vezani i <strong>Lepterija</strong>, izletište pored Sokobańske Moravice, kao i poznati srednjovekovni grad — <em>Soko Grad (banjski)</em>. U blizini banje nalazi se vodopad <strong>Ripaljka</strong>, koji je periodičan i visok oko dvadeset metara. Sokobanja je poznata po manifestaciji <em>„Prva harmonika“</em>, tradicionalnom takmičenju harmonikaša koje se svake godine održava krajem avgusta.
                  <br /><br />
                  Ovde se nalaze termomineralni izvori Sokobanje.
                </p>
              </section>

              <img srcSet={`${sokobanja33} 450w, ${sokobanja3}`} alt="Vrelo - Borići" loading="lazy" />

              <section lang="sr">
                <p>
                  <em>„Vrelo - Borići“</em> je popularno izletište, smešteno na oko <strong>300 metara</strong> od centra Sokobanje. Nekada je bilo mondensko odredište, okupljalište poznatih književnika, glumaca, umetnika, političara, pa čak i članova kraljevske porodice <strong>Karađorđević</strong>.
                  <br /><br />
                  Izletište je povezano stazom sa Borićima, koji su opremljeni klupama, stolovima i mobilijarom za igru, a posebno je pogodno za boravak dece i odraslih sa problemima sa disajnim organima, zahvaljujući velikoj koncentraciji negativnih jona u vazduhu. Na ovom području nalazi se spomen-česma posvećena <strong>Hajduku Veljku Petroviću</strong>, kao i multifunkcionalni kompleks Letnja pozornica <em>„Vrelo“</em>.
                </p>
              </section>

              <img srcSet={`${sokobanja44} 450w, ${sokobanja4}`} alt="Tursko kupatilo Amam" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Tursko kupatilo Amam</strong> nalazi se u samom centru Sokobanje, u banjskom parku. Sagradili su ga Turci na temeljima rimskih termi u <strong>XV veku</strong>. Prvi put je obnovljeno <strong>1834. godine</strong> po naređenju kneza <strong>Miloša Obrenovića</strong>, a poslednji put <strong>2005. godine</strong>. To je jedino tursko kupatilo u Srbiji koje je i dalje u funkciji, a poznato je i po tome što je u njemu snimljena čuvena scena iz filma <em>Zona Zamfirova</em> Zdravka Šotre. U Hamamu je takođe napravljena <strong>Kneževa kada</strong>, koja se i danas koristi. Jedno od zanimljivih usmenih predanja kaže da je knez Miloš Obrenović bio strastveni ženoljubac i da je tražio da se u zidu svog kupatila izgrađenog u Hamamu napravi tajni otvor kroz koji je neprimećeno posmatrao razodevene žene i potom birao neku za sebe. Usmeno predanje kaže i da je knjeginja takođe dolazila u Sokobanju, ali nikada u isto vreme sa knezom. Ako želite da osetite duh života iz tog perioda, obavezno posetite ovo mesto. Osećaćete se kao kralj. U turskom kupatilu možete uživati u termomineralnoj vodi temperature <strong>43 stepena</strong>.
                </p>
              </section>

              <img srcSet={`${sokobanja88} 450w, ${sokobanja8}`} alt="Izletište Lepterija" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Lepterija</strong> je jedinstveni kutak prirode smešten u prelepom području Sokobanje. Do nje možete doći asfaltnim putem ili uređenim šumskim stazama, a već sama vožnja kroz ovo područje, koje je bogato zelenilom, pruža osećaj harmonije i spokoja.
                  <br /><br />
                  Na putu ka Lepteriji nalazi se restoran <strong>Pećina</strong>, danas poznat kao <strong>Marko Polo</strong>. Smešten je ispod velike stene, pored reke Moravice, i predstavlja savršen prostor za opuštanje i uživanje u prirodi. Bilo da želite da uživate u obroku ili da se opustite uz kafu tokom šetnje, ovo je idealno mesto za vas.
                  <br /><br />
                  Na samom izletištu, tu su i letnjikovci sa klupama koji vam omogućavaju udoban odmor uz prelep pogled na reku. Takođe, ovde možete pripremiti roštilj i uživati u specijalitetima na brojnim mestima koja su za to predviđena.
                  <br /><br />
                  Lepterija je očaravajuća ne samo zbog svoje prirodne lepote, već i zbog dva izvora - toplog i hladnog. Ovi izvori dodatno obogaćuju posetu i pružaju savršen trenutak za osveženje.
                  <br /><br />
                  Jedna od ključnih karakteristika Lepterije je njena zakonska zaštita i proglašenje predelom izuzetnih odlika, što omogućava očuvanje ovog prirodnog i kulturnog blaga za buduće generacije.
                </p>
              </section>

              <img srcSet={`${sokobanja66} 450w, ${sokobanja6}`} alt="Akva park u Sokobanji" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Akva park u Sokobanji</strong>, smešten samo <strong>1,5 kilometar</strong> od centra grada, predstavlja nezaobilaznu atrakciju, idealnu za obogatiti porodični odmor sa decom. Poznat je po vrhunskom kvalitetu vode, zahvaljujući najsavremenijim filterima za prečišćavanje. Akva park je deo sportskog i rekreativnog kompleksa <strong>Podina</strong>, koji je pogodan za pripreme sportista i organizaciju sportskih manifestacija. Zbog toga, posetioci mogu uživati u ovom vodenom kompleksu koji ima kapacitet za <strong>2500 ljudi</strong> i nudi četiri bazena za opuštanje i zabavu.
                </p>
              </section>

              <img srcSet={`${sokobanja11} 450w, ${sokobanja1}`} alt="Jezero na Ozrenu" loading="lazy" />

              <section lang="sr">
                <p>
                  Kada spominjemo <strong>Ozren</strong>, pre svega mislimo na prelepo izletište sa jezerom-ribnjakom i sportskim terenima, koji su smešteni u okviru <strong>Specijalne bolnice za specifične plućne bolesti</strong>. Jezero, bogato pastrmkama, i restoran u kojem možete uživati u sveže ulovljenim pastrmkama, specijalno ulovljenim za vas, postali su zaštitni znak Ozrena.
                  <br /><br />
                  Na jednom kraju jezerceta, nalazi se i očaravajući vodopad, koji nažalost, tokom leta često presuši. U blizini je i ostrvce sa kućicom i klupicama, odakle možete posmatrati mirne pastrmke koje plivaju pored vas. Nedaleko se nalazi izvor ledene vode, savršen za osveženje ili hlađenje pića.
                  <br /><br />
                  U neposrednoj blizini, na svega dvadesetak metara od jezera, nalaze se sportski tereni za košarku i fudbal, kao i brojne klupe i mesta pogodna za roštiljanje.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Sokobanja</h1>

              <section lang="en"> <p> <strong>Sokobanja</strong> is a town and spa located in central Serbia, known for its natural beauty, healing mineral springs, and historical significance. It lies in the valley of the <strong>Moravica River</strong>, surrounded by picturesque hills and forests, making it a popular destination for tourists seeking relaxation and wellness. The town has a rich history dating back to Roman times and is famous for its healing properties, especially due to its mineral waters and mild climate. Sokobanja is also known for its medieval architecture, including the remains of fortresses and monasteries. Today, it is an important spa town attracting visitors with its health resorts, hiking trails, and peaceful surroundings. </p> </section>
              <img srcSet={`${sokobanja77} 450w, ${sokobanja7}`} alt="Sokobanja 2" loading="lazy" />

              <section lang="en"> <p> Sokobanja is situated at an altitude of about <strong>400 meters</strong> above sea level. The <strong>Sokobanja Moravica River</strong> flows through the town. It is a well-known tourist destination for recreational and especially spa tourism. It lies between the <strong>Carpathian</strong> and <strong>Balkan Mountains</strong>, between <strong>Rtanj</strong> and <strong>Ozren</strong>. Sokobanja is also associated with <strong>Lepterija</strong>, a picnic area beside the Sokobanja Moravica, as well as the famous medieval town — <em>Soko Grad (spa)</em>. Near the spa is the <strong>Ripaljka Waterfall</strong>, which is seasonal and about twenty meters high. Sokobanja is famous for the event <em>"First Accordion"</em>, a traditional accordion competition held annually at the end of August. <br /><br /> Here are located the thermo-mineral springs of Sokobanja. </p> </section>
              <img srcSet={`${sokobanja33} 450w, ${sokobanja3}`} alt="Vrelo - Borići" loading="lazy" />

              <section lang="en"> <p> <em>“Vrelo - Borići”</em> is a popular picnic spot located about <strong>300 meters</strong> from the center of Sokobanja. It was once a fashionable destination, gathering well-known writers, actors, artists, politicians, and even members of the royal <strong>Karađorđević family</strong>. <br /><br /> The picnic area is connected by a path to Borići, which are equipped with benches, tables, and playground equipment, making it especially suitable for children and adults with respiratory problems due to the high concentration of negative ions in the air. This area also features a memorial fountain dedicated to <strong>Hajduk Veljko Petrović</strong>, as well as the multifunctional complex Summer Stage <em>“Vrelo”</em>. </p> </section>
              <img srcSet={`${sokobanja44} 450w, ${sokobanja4}`} alt="Turkish Bath Amam" loading="lazy" />

              <section lang="en"> <p> The <strong>Turkish Bath Amam</strong> is located in the very center of Sokobanja, in the spa park. It was built by the Turks on the foundations of Roman baths in the <strong>15th century</strong>. It was first renovated in <strong>1834</strong> by order of Prince <strong>Miloš Obrenović</strong>, and most recently in <strong>2005</strong>. It is the only Turkish bath in Serbia still in operation and is also famous as the filming location of a famous scene from the movie <em>Zona Zamfirova</em> by Zdravko Šotra. The bath also features the <strong>Prince’s Tub</strong>, which is still in use today. An interesting oral tradition says that Prince Miloš Obrenović was a passionate womanizer who requested a secret opening in the wall of his bath in Amam through which he secretly watched naked women and then chose one for himself. The legend also says that the princess visited Sokobanja but never at the same time as the prince. If you want to feel the spirit of life from that period, be sure to visit this place. You will feel like a king. In the Turkish bath, you can enjoy thermal mineral water at a temperature of <strong>43 degrees Celsius</strong>. </p> </section>
              <img srcSet={`${sokobanja88} 450w, ${sokobanja8}`} alt="Lepterija Picnic Area" loading="lazy" />

              <section lang="en"> <p> <strong>Lepterija</strong> is a unique natural corner located in the beautiful area of Sokobanja. You can reach it by asphalt road or well-maintained forest trails, and the drive itself through this greenery-rich area offers a feeling of harmony and peace. <br /><br /> On the way to Lepterija is the restaurant <strong>Pećina</strong>, now known as <strong>Marko Polo</strong>. It is situated under a large rock by the Moravica River and provides a perfect place to relax and enjoy nature. Whether you want to enjoy a meal or relax with a coffee during a walk, this is the ideal spot. <br /><br /> At the picnic area itself, there are summer houses with benches allowing comfortable rest with a beautiful view of the river. You can also prepare a barbecue and enjoy specialties at many designated places. <br /><br /> Lepterija is enchanting not only because of its natural beauty but also due to two springs — warm and cold. These springs further enrich the visit and provide a perfect moment for refreshment. <br /><br /> One of Lepterija’s key features is its legal protection and designation as an area of exceptional characteristics, allowing the preservation of this natural and cultural treasure for future generations. </p> </section>
              <img srcSet={`${sokobanja66} 450w, ${sokobanja6}`} alt="Water Park in Sokobanja" loading="lazy" />

              <section lang="en"> <p> The <strong>Water Park in Sokobanja</strong>, located only <strong>1.5 kilometers</strong> from the city center, is an unmissable attraction, perfect for enriching a family vacation with children. It is known for the top quality of its water, thanks to the most modern filtration systems. The water park is part of the sports and recreational complex <strong>Podina</strong>, which is suitable for athlete training and organizing sports events. Because of this, visitors can enjoy this water complex, which has a capacity of <strong>2500 people</strong> and offers four pools for relaxation and fun. </p> </section>
              <img srcSet={`${sokobanja11} 450w, ${sokobanja1}`} alt="Lake on Ozren" loading="lazy" />

              <section lang="en"> <p> When we mention <strong>Ozren</strong>, we primarily think of a beautiful picnic area with a lake-pond and sports fields, located within the <strong>Special Hospital for Specific Lung Diseases</strong>. The lake, rich in trout, and the restaurant where you can enjoy freshly caught trout, specially caught for you, have become the hallmark of Ozren. <br /><br /> At one end of the lake, there is a charming waterfall, which unfortunately often dries up during the summer. Nearby, there is a small island with a hut and benches, from where you can watch the calm trout swimming beside you. Not far from there is a spring of icy cold water, perfect for refreshment or cooling your drinks. <br /><br /> In the immediate vicinity, just about twenty meters from the lake, there are basketball and football courts, as well as numerous benches and spots suitable for barbecuing. </p> </section>
            </>
          )}

      </div>
    </>
  );
};


export default SokoBanja;