/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import jagodina1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina1.jpg";
import jagodina2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina2.jpg";
import jagodina3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina3.jpg";
import jagodina4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina4.jpg";
import jagodina5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina5.jpg";
import jagodina6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina6.jpg";
import jagodina7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina7.jpg";
import jagodina8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina8.jpg";
import jagodina11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina1.jpg";
import jagodina22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina2.jpg";
import jagodina33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina3.jpg";
import jagodina44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina4.jpg";
import jagodina55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina5.jpg";
import jagodina66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina6.jpg";
import jagodina77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina7.jpg";
import jagodina88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Jagodina = () => {
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
            ? "Jagodina – Turizam, istorija i znamenitosti u srcu Pomoravlja | Serbia Wonders"
            : "Jagodina – Tourism, History and Attractions in the Heart of Pomoravlje | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Otkrijte Jagodinu – grad u Pomoravlju sa bogatom istorijom, muzejima, parkom Đurđevo brdo, Akva parkom, ZOO vrtom i Muzejom naivne umetnosti. Idealna destinacija za porodični turizam i kulturne posete."
              : "Discover Jagodina – a city in Pomoravlje with rich history, museums, Đurđevo Brdo park, Aqua Park, zoo, and Museum of Naive Art. A perfect destination for family tourism and cultural exploration."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Jagodina, Pomoravlje, Akva park Jagodina, Đurđevo brdo, Zoološki vrt, Muzej voštanih figura, Zavičajni muzej, Muzej naivne umetnosti, turizam u Srbiji"
              : "Jagodina, Pomoravlje, Aqua Park Jagodina, Đurđevo Brdo, Zoo, Wax Museum, Homeland Museum, Museum of Naive Art, tourism in Serbia"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/jagodina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/jagodina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/jagodina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/jagodina"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pomoravskiOkrugPathRoutes.home(switchLanguage))}

        />
        <header></header>
        <img srcSet={`${jagodina22} 450w, ${jagodina2} `} alt="Jagodina" />

        <h2 style={{ color: "white" }}>Jagodina</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Jagodinska opština</strong> prostire se na <strong>470 km²</strong>, obuhvata <strong>54 naselja</strong> i graniči
                  se sa <strong>osam opština</strong>. Na severu se graniči sa opštinom <strong>Svilajnac</strong>, na
                  severoistoku sa opštinom <strong>Despotovac</strong>, a na severozapadu sa opštinom
                  <strong>Batajnica</strong>. Na istoku i jugoistoku graniči se sa opštinama <strong>Paraćin</strong> i
                  <strong>Ćuprija</strong>, na zapadu sa gradskom opštinom <strong>Pivara grada Kragujevca</strong>,
                  jugozapadno sa opštinom <strong>Rekovac</strong>, a na jugu sa opštinom <strong>Varvarin</strong>.
                  Jagodina se nalazi na <em>43° 59' severne geografske širine</em> i <em>24° 14' istočne geografske dužine</em>,
                  na prosečnoj nadmorskoj visini od <strong>116 m</strong>, a najviša tačka je <strong>Đurđev brdo</strong> sa <strong>213 m</strong>.
                </p>
              </section>

              <img srcSet={`${jagodina11} 450w, ${jagodina1}`} alt="Jagodina Djurdjevo Brdo Vodopad" />

              <section lang="sr">
                <p>
                  Dana <strong>22. septembra 1946. godine</strong>, odlukom opštine, Jagodina je dobila ime
                  <strong>Svetozarevo</strong> u čast socijaliste <strong>Svetozara Markovića</strong>. Romantičari i
                  sanjari pominju krčmaričicu <strong>Jagodu</strong>, sa dvorištima i hanom na <em>Crvenom bregu</em> iznad groblja, u čijem je podnožju raslo selo, nazvano po njoj – <strong>Jagodina</strong>.
                  Prema rečima njenih poštovalaca, krčmaričica Jagoda je po danu
                  ugostila putnike, a noću, pod mesečinom, sa <strong>40 razbojnika</strong> napadala i
                  pljačkala bogate karavane na <em>Carigradskom drumu</em>. To bi trajalo zauvek da
                  legenda ima svoj kraj, a priča kaže da je u jednoj pljački srela mladića
                  čija lepota je naterala njenu razbojničku ruku da zadrhti. Njeni
                  iznevereni prijatelji su je pustili da ga odvede u svoje dvore, ali
                  izdajstvo joj nikada nije bilo oprošteno. Jedne noći nestao je u plamenu
                  Jagodin han, a nad njegovim zgarištem, u mračnim noćima, godinama se
                  čulo njeno jezivo kikotanje. Stariji se sećaju da je kraj groblja
                  postojao komad neobrađene zemlje, koji se do skoro zvao opštinska
                  utrina, a nekada davno – <em>Jagodina livada</em>.
                </p>
              </section>

              <img srcSet={`${jagodina33} 450w, ${jagodina3}`} alt="Park na Djurdjevom brdu" />

              <section lang="sr">
                <p>
                  Šetalište Potok <strong>Đurđevo brdo</strong> je prelep i pažljivo uređen park sa
                  klupama, cvećem, potokom i izvornom česmom, savršen za uživanje,
                  opuštanje i šetnje. <strong>2015. godine</strong>, park je obogatio niz fontana i
                  veštački vodopad, koji dodatno upotpunjuju njegovu lepotu. Prirodna,
                  mirna atmosfera parka pruža idealno okruženje za potpuni odmor, a u
                  njegovom središtu se nalazi i letnja pozornica na kojoj se leti
                  održavaju kulturne i umetničke manifestacije. U neposrednoj blizini
                  šetališta smešteni su i <strong>Zoološki vrt</strong>, <strong>Muzej voštanih figura</strong>, <strong>Aqua park</strong> i
                  šoping centar <strong>VIVO</strong>.
                </p>
              </section>

              <img srcSet={`${jagodina44} 450w, ${jagodina4}`} alt="Akva Park Jagodina" />

              <section lang="sr">
                <p>
                  <strong>Akva park u Jagodini</strong>, prvi takav park u Srbiji, otvoren je <strong>2007. godine</strong>.
                  Prostire se na <strong>50.000 kvadratnih metara</strong> i nudi posetiocima 7 bazena i 9
                  tobogana. Ovo je savršen način da se pobegne od gradske vreve tokom
                  toplih letnjih meseci i uživa u celodnevnoj zabavi. Park obuhvata
                  olimpijski bazen, rekreativni bazen i bazene za neplivače, a posebno je
                  prilagođen deci, sa plitkim bazenima i manjim toboganima. Glavne
                  atrakcije parka uključuju: <strong>Gusarski brod</strong> – idealan za decu, sa plitkim
                  bazenom i kratkim, jednostavnim toboganima. Tu su i mlaznjaci koji
                  izbacuju vodu, kao i kofa koja neprestano pada. <em>„Rafting slide“</em> –
                  uživajte u spuštanju sa gumama zajedno sa decom, partnerom ili
                  prijateljima na ovom širokom toboganu. <em>„Wide slide“</em> – tobogan bez
                  krivina, koji se pravo spušta u vodu, savršen za one koji ne vole visinu
                  i brzinu. Tunel <em>„Body slide“</em> – uzbudljivo iskustvo zatvorenog tobogana
                  koji lišava čula vida, pa ostala čula postaju intenzivnija. Super <em>„Multi
                    slide“</em> – ovo je tobogan sa tri staze, pa možete da se spuštate zajedno
                  sa prijateljima. Spiral <em>„Body slide“</em> – otvoreni tobogan sa zavojima koji
                  vas vodi do dna. <em>„Multi slide“</em> – tobogan sa dve staze i oštrim spustom,
                  koji nije za slabijeg srca. Osim vodenih atrakcija, Akva park nudi i
                  četiri kafića, restoran i bar, gde možete uživati u obroku ili
                  osveženju. U baru čak možete naručiti piće dok ste u vodi.
                </p>
              </section>

              <img srcSet={`${jagodina55} 450w, ${jagodina5}`} alt="Zavičajni muzej u Jagodini" />

              <section lang="sr">
                <p>
                  <strong>Zavičajni muzej u Jagodini</strong> postao je značajna kulturna institucija u
                  ovom gradu, ali i u celom Pomoravlju, koja prikuplja desetine hiljada
                  vrednih predmeta iz oblasti prirodnih nauka, arheologije, istorije,
                  etnologije i umetnosti. Zbog ograničenog prostora, trenutno je izložen
                  samo manji deo ove bogate zbirke. Muzej je konačno dobio adekvatan
                  prostor u zgradi bivšeg <strong>Sokolskog doma</strong>, izgrađenog <strong>1935. godine</strong>, koja je
                  sama po sebi kulturni spomenik. Ovaj prostor je omogućio postavljanje
                  stalne izložbe, pa svaki posetilac ima jedinstvenu priliku da na jednom
                  mestu sazna više o vekovnim tokovima života i rada na ovom području. Pre
                  nego što je izgrađen Sokolskog dom, na ovom zemljištu se nalazila kuća
                  uglednog Jagodinca, <strong>Stevana Stevče Mihajlovića</strong>, koji je bio jedan od
                  učitelja mladog kneza <strong>Milana Obrenovića</strong>.
                </p>
              </section>

              <img srcSet={`${jagodina66} 450w, ${jagodina6}`} alt="VIVO shopping PARK u Jagodini" />

              <section lang="sr">
                <p>
                  <strong>VIVO shopping PARK</strong> prostire se na <strong>25.000 m²</strong>, dok sam objekat zauzima
                  <strong>10.000 m²</strong>. Unutar njega nalazi se <strong>33 maloprodajna lokala</strong>, koja su
                  popunjena poznatim međunarodnim i domaćim brendovima, kao i <strong>360 parking
                    mesta</strong>. Celi kompleks je pažljivo dizajniran u jedinstvenu arhitektonsku
                  celinu koja se odlikuje funkcionalnošću, lakoćom pristupa, preglednošću,
                  kao i usklađenošću sa najsavremenijim svetskim standardima gradnje,
                  uključujući kvalitet materijala, energetsku efikasnost, ekološke norme,
                  sigurnost i zaštitu od požara. Ponuda u parku obuhvata širok spektar
                  proizvoda, uključujući <strong>supermarket, odeću, obuću, sportsku opremu, dečju
                    garderobu, igračke, nameštaj, elektroniku, kozmetiku, restoran, apoteku,
                    knjižaru</strong> i mnogo više. Naša ponuda karakteriše visok kvalitet, moderne
                  linije i pristupačne cene.
                </p>
              </section>

              <img srcSet={`${jagodina77} 450w, ${jagodina7}`} alt="Muzej naivne i marginalne umetnosti u Jagodini" />

              <section lang="sr">
                <p>
                  <strong>Muzej naivne i marginalne umetnosti u Jagodini</strong> predstavlja kulturnu
                  instituciju od nacionalnog značaja, koja čuva riznicu od oko <strong>tri i po
                    hiljade dela</strong> više od <strong>četiristo umetnika</strong> iz četrdesetak zemalja, svih
                  generacija, od početka <strong>20. veka</strong> do danas. Umetnička zbirka muzeja
                  (slike, skulpture, grafike, crteži) sastoji se od otkupljenih dela,
                  poklona i naknada prilikom organizovanja izložbi, kolonija i Bijenala
                  naivne i marginalne umetnosti. Muzej je smešten u impozantnoj zgradi,
                  koja je najlepši primer <em>secesije s početka 20. veka</em> u Jagodini, i nalazi
                  se u srcu gradskog parka, pored glavnog šetališta.
                </p>
              </section>

              <img srcSet={`${jagodina88} 450w, ${jagodina8}`} alt="Zoološki vrt u Jagodini" />

              <section lang="sr">
                <p>
                  <strong>Zoološki vrt u Jagodini</strong> jedan je od četiri zoološka vrta u Srbiji i
                  zvanično je otvoren <strong>10. jula 2006. godine</strong>. Prostire se na površini od
                  <strong>2,5 hektara</strong>, na zemljištu koje je prethodno bilo neobrađeno. U njemu se
                  nalazi oko <strong>250 vrsta životinja</strong>, sa više od <strong>320 jedinki</strong>. Posetioci mogu
                  koristiti usluge vodiča koji ih vode kroz kompleks i pružaju detaljna
                  objašnjenja o životinjama. Zoo-vrt je otvoren <strong>365 dana u godini</strong>, bez
                  obzira na verske ili državne praznike. Zoološki vrt u Jagodini je prvi
                  takav objekat izgrađen južno od Beograda, a njegovim otvaranjem,
                  Jagodina je postala jedan od važnih turističkih centara u Srbiji.
                  Svečano ga je otvorio <strong>Vuk Bojović</strong>, bivši direktor Beo zoo vrta i počasni
                  građanin Jagodine. Zoo-park se nalazi u Jagodini, u Pomoravlju, unutar
                  izletničkog parka <strong>Đurđevo brdo</strong>, koji je zaštićen kao <em>spomenik prirode</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>The municipality of Jagodina</strong> covers an area of <strong>470 km²</strong>, includes <strong>54 settlements</strong>, and borders <strong>eight municipalities</strong>. To the north, it borders the municipality of <strong>Svilajnac</strong>, to the northeast the municipality of <strong>Despotovac</strong>, and to the northwest the municipality of <strong>Batajnica</strong>. To the east and southeast, it borders the municipalities of <strong>Paraćin</strong> and <strong>Ćuprija</strong>, to the west the city municipality of <strong>Pivara of the city of Kragujevac</strong>, to the southwest the municipality of <strong>Rekovac</strong>, and to the south the municipality of <strong>Varvarin</strong>. Jagodina is located at <em>43° 59' north latitude</em> and <em>24° 14' east longitude</em>, at an average altitude of <strong>116 m</strong>, while the highest point is <strong>Đurđev Hill</strong> at <strong>213 m</strong>. </p> </section>
              <img srcSet={`${jagodina11} 450w, ${jagodina1}`} alt="Jagodina Djurdjevo Hill Waterfall" />

              <section lang="en"> <p> On <strong>September 22, 1946</strong>, by a municipal decision, Jagodina was renamed <strong>Svetozarevo</strong> in honor of the socialist <strong>Svetozar Marković</strong>. Romantics and dreamers mention the innkeeper <strong>Jagoda</strong>, with courtyards and a caravanserai on the <em>Red Hill</em> above the cemetery, at the foot of which the village grew, named after her – <strong>Jagodina</strong>. According to her admirers, by day the innkeeper Jagoda hosted travelers, and by night, under the moonlight, she attacked and robbed wealthy caravans on the <em>Constantinople Road</em> with <strong>40 bandits</strong>. This would have lasted forever if the legend had an end, but the story says that during one robbery she met a young man whose beauty made her thieving hand tremble. Her betrayed comrades let her take him to her courtyards, but her betrayal was never forgiven. One night Jagoda's inn burned down, and above its ruins, on dark nights, her eerie laughter was heard for years. The elders remember that near the cemetery there was a piece of uncultivated land, which until recently was called the municipal meadow, and long ago – <em>Jagodina Meadow</em>. </p> </section>
              <img srcSet={`${jagodina33} 450w, ${jagodina3}`} alt="Park on Djurdjevo Hill" />

              <section lang="en"> <p> The <strong>Potok Đurđevo Hill promenade</strong> is a beautiful and carefully maintained park with benches, flowers, a stream, and a natural spring, perfect for enjoyment, relaxation, and walks. In <strong>2015</strong>, the park was enriched with a series of fountains and an artificial waterfall, further enhancing its beauty. The park's natural, peaceful atmosphere provides an ideal setting for complete rest, and at its center there is a summer stage where cultural and artistic events are held during the summer. Nearby are also the <strong>Zoo</strong>, <strong>Wax Museum</strong>, <strong>Aqua Park</strong>, and the <strong>VIVO shopping center</strong>. </p> </section>
              <img srcSet={`${jagodina44} 450w, ${jagodina4}`} alt="Aqua Park Jagodina" />

              <section lang="en"> <p> The <strong>Aqua Park in Jagodina</strong>, the first of its kind in Serbia, opened in <strong>2007</strong>. It covers an area of <strong>50,000 square meters</strong> and offers visitors 7 pools and 9 slides. It is the perfect way to escape the city bustle during hot summer months and enjoy all-day fun. The park includes an Olympic pool, recreational pool, and pools for non-swimmers, especially designed for children, with shallow pools and smaller slides. The main attractions include: <strong>The Pirate Ship</strong> – ideal for children, with a shallow pool and short, simple slides; water jets that spray water, and a bucket that constantly dumps water. <em>"Rafting slide"</em> – enjoy sliding on tubes together with children, partner, or friends on this wide slide. <em>"Wide slide"</em> – a slide without curves, going straight into the water, perfect for those who do not like height or speed. The <em>"Body slide"</em> tunnel – an exciting closed slide experience that deprives the sense of sight, intensifying other senses. The super <em>"Multi slide"</em> – a slide with three lanes, allowing friends to slide together. The spiral <em>"Body slide"</em> – an open slide with turns that leads to the bottom. The <em>"Multi slide"</em> – a slide with two lanes and a steep drop, not for the faint-hearted. Besides water attractions, the Aqua Park offers four cafes, a restaurant, and a bar where you can enjoy a meal or refreshment. At the bar, you can even order drinks while in the water. </p> </section>
              <img srcSet={`${jagodina55} 450w, ${jagodina5}`} alt="Homeland Museum in Jagodina" />

              <section lang="en"> <p> The <strong>Homeland Museum in Jagodina</strong> has become an important cultural institution in the city and the entire Pomoravlje region, collecting tens of thousands of valuable items from the fields of natural sciences, archaeology, history, ethnology, and art. Due to limited space, only a smaller part of this rich collection is currently on display. The museum finally obtained a suitable space in the building of the former <strong>Sokol House</strong>, built in <strong>1935</strong>, which is itself a cultural monument. This space allowed the establishment of a permanent exhibition, giving each visitor a unique opportunity to learn about centuries of life and work in this area in one place. Before the Sokol House was built, the site was occupied by the house of a respected Jagodina citizen, <strong>Stevan Stevče Mihajlović</strong>, who was one of the teachers of the young prince <strong>Milan Obrenović</strong>. </p> </section>
              <img srcSet={`${jagodina66} 450w, ${jagodina6}`} alt="VIVO shopping PARK in Jagodina" />

              <section lang="en"> <p> The <strong>VIVO shopping PARK</strong> covers an area of <strong>25,000 m²</strong>, while the building itself occupies <strong>10,000 m²</strong>. Inside, there are <strong>33 retail stores</strong> featuring well-known international and domestic brands, as well as <strong>360 parking spaces</strong>. The entire complex is carefully designed as a unique architectural unit characterized by functionality, ease of access, clarity, and compliance with the latest global construction standards, including material quality, energy efficiency, ecological norms, safety, and fire protection. The park's offer includes a wide range of products, including <strong>supermarket, clothing, footwear, sports equipment, children's clothing, toys, furniture, electronics, cosmetics, restaurant, pharmacy, bookstore</strong>, and much more. Our offer is characterized by high quality, modern styles, and affordable prices. </p> </section>
              <img srcSet={`${jagodina77} 450w, ${jagodina7}`} alt="Museum of Naïve and Marginal Art in Jagodina" />

              <section lang="en"> <p> The <strong>Museum of Naïve and Marginal Art in Jagodina</strong> is a cultural institution of national significance, preserving a treasury of about <strong>three and a half thousand works</strong> by more than <strong>four hundred artists</strong> from around forty countries, of all generations, from the beginning of the <strong>20th century</strong> to today. The museum's collection (paintings, sculptures, graphics, drawings) consists of purchased works, gifts, and compensations received during exhibitions, colonies, and Biennials of naïve and marginal art. The museum is housed in an impressive building, the finest example of <em>Art Nouveau from the early 20th century</em> in Jagodina, located in the heart of the city park, next to the main promenade. </p> </section>
              <img srcSet={`${jagodina88} 450w, ${jagodina8}`} alt="Zoo in Jagodina" />

              <section lang="en"> <p> The <strong>Zoo in Jagodina</strong> is one of four zoos in Serbia and was officially opened on <strong>July 10, 2006</strong>. It covers an area of <strong>2.5 hectares</strong> on previously uncultivated land. It houses about <strong>250 species of animals</strong> with more than <strong>320 individuals</strong>. Visitors can use the services of guides who lead them through the complex and provide detailed explanations about the animals. The zoo is open <strong>365 days a year</strong>, regardless of religious or state holidays. The zoo in Jagodina is the first such facility built south of Belgrade, and its opening made Jagodina one of the important tourist centers in Serbia. It was ceremonially opened by <strong>Vuk Bojović</strong>, former director of the Belgrade Zoo and honorary citizen of Jagodina. The zoo park is located in Jagodina, in Pomoravlje, within the Đurđevo Hill recreational park, which is protected as a <em>natural monument</em>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default Jagodina;