/* eslint-disable react/no-unknown-property */
import indjija1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija8.jpg";
import indjija2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija2.jpg";
import indjija3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija3.jpg";
import indjija4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija4.jpg";
import indjija5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija10.jpg";
import indjija6 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija6.jpg";
import indjija7 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija7.jpg";
import indjija8 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/desktop/indjija9.jpg";
import indjija11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija8.jpg";
import indjija22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija2.jpg";
import indjija33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija3.jpg";
import indjija44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija4.jpg";
import indjija55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija10.jpg";
import indjija66 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija6.jpg";
import indjija77 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija7.jpg";
import indjija88 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Indjija/mobile/Mindjija9.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Indjija = () => {
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
            ? 'Opština Inđija | Turizam, Priroda, Outlet i Istorija | Serbia Wonders'
            : 'Municipality of Inđija | Tourism, Nature, Outlet & History | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Opština Inđija u Sremu nudi spoj moderne infrastrukture, kulturne baštine, prirodnih lepota i turističkih atrakcija poput Outlet parka, crkve Svetog Georgija, Keltskog sela i Zoo vrta Koki.'
              : 'Located in Srem, the municipality of Inđija offers a blend of modern infrastructure, cultural heritage, natural beauty, and tourist attractions such as the Outlet Park, St. George Church, Celtic Village, and Koki Zoo.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Inđija, opština Inđija, Fruška gora, Outlet Inđija, Keltsko selo, crkva Svetog Georgija, Zoo vrt Koki, turizam u Vojvodini, priroda, istorija, Srem, parkovi Inđija, porodične destinacije'
              : 'Inđija, Municipality of Inđija, Fruška Gora, Inđija Outlet, Celtic Village, St. George Church, Koki Zoo, tourism in Vojvodina, nature, history, Srem, parks Inđija, family destinations'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/indjija`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/indjija"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/indjija"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/indjija"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(sremskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${indjija11} 450w, ${indjija1} `} alt="Inđija 1" />

        <h1>Inđija</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Opština Inđija</strong> se nalazi u severoistočnom delu Srema, na jugozapadnim padinama Fruške gore. Prostire se na površini od 384 km² i sastoji se od 11 naselja: Inđija, Beška, Novi Slankamen, Novi Karlovci, Krčedin, Čortanovci, Maradik, Ljukovo, Stari Slankamen, Jarkovci i Slankamenački Vinogradi.
                </p>
                <p>
                  Prema popisu iz 2022. godine, opština broji 43.755 stanovnika, koji potiču iz različitih etničkih grupa. Opština Inđija je poznata po bogatoj istoriji i tradiciji, a njena kulturna baština je značajan faktor identiteta.
                </p>
                <p>
                  Pored toga, opština beleži i značajan ekonomski napredak, sa fokusom na poljoprivredu, industriju i razvoj turizma. Geografski, Inđija ima strateški položaj, jer se nalazi u neposrednoj blizini Beograda i važnih saobraćajnih pravaca, što joj omogućava lak pristup tržištima i olakšava privrednu razmenu.
                </p>
              </section>

              <img srcSet={`${indjija55} 450w, ${indjija5} `} alt="Inđija 5" />

              <section lang="sr">
                <p>
                  <strong>Inđija</strong> je grad bogat zelenim površinama i parkovima, idealnim za odmor i rekreaciju. U samom centru grada nalazi se park sa uređenim stazama, klupama i igralištima, pogodnim za porodice i decu.
                </p>
                <p>
                  Takođe, tu su i manji parkovi i drvoredi koji pružaju prijatan ambijent za šetnje, dok veći parkovi nude prostor za sport i opuštanje na otvorenom.
                </p>
                <p>
                  Zeleni prostori u <strong>Inđiji</strong> doprinose opuštenoj atmosferi i kvalitetu života u ovom gradskom okruženju.
                </p>
              </section>

              <div className="displayFlexClassic">
                <img
                  srcSet={`${indjija33} 450w, ${indjija3} `}
                  alt="Inđija centar"
                  style={{ padding: "50px", width: "47%" }}
                />
                <img
                  srcSet={`${indjija88} 450w, ${indjija8} `}
                  alt="Inđija crkva sv. Georgija"
                  style={{ padding: "50px", width: "47%" }}
                />
              </div>

              <section lang="sr">
                <p>
                  <strong>Inđija</strong> je domaćin i modernom <strong>Outlet Shopping Parku</strong>, savremenom trgovačkom centru koji se nalazi na ulazu u grad i nudi posetiocima raznovrsne prodavnice brendiranih proizvoda po povoljnim cenama.
                </p>
                <p>
                  Ovde se mogu naći prodavnice odeće, obuće, elektronike, ali i restorani i kafići, koji čine ovo mesto idealnim za šoping, uživanje i opuštanje.
                </p>
                <p>
                  U samom centru <strong>Inđije</strong> nalazi se i <em>Crkva Svetog Georgija</em>, prelepa barokna crkva koja je ne samo verski centar, već i značajna kulturna tačka.
                </p>
                <p>
                  Sa svojim freskama i ikonama, crkva je simbol istorije i tradicije grada, dok je Sveti Georgije zaštitnik ove verske ustanove.
                </p>
                <p>
                  Oba mesta, <strong>Outlet</strong> i <em>Crkva</em>, savršeno se uklapaju u sliku <strong>Inđije</strong> kao grada koji spaja moderni život i bogatu kulturnu baštinu.
                </p>
              </section>

              <img srcSet={`${indjija22} 450w, ${indjija2} `} alt="Inđija 2" />

              <section lang="sr">
                <p>
                  <strong>Keltsko selo</strong> je tematski turistički kompleks smešten u sportsko-rekreativnoj zoni <strong>Inđije</strong>, na ulazu u grad iz pravca <em>Novog Sada</em>.
                </p>
                <p>
                  Inspirisan životom Kelta na ovim prostorima u III veku pre nove ere, kompleks je zabavno-edukativnog karaktera i namenjen je pre svega deci.
                </p>
                <p>
                  Unutar visokim, drvenim ogradama ograđenog kompleksa nalazi se nekoliko tipova keltskih kuća, pokrivenih trskom i napravljenih od drveta i blata, koje predstavljaju autentična keltska domaćinstva i zanatske radionice.
                </p>
                <p>
                  Ovaj kompleks omogućava posetiocima da se upoznaju sa životom i tradicijom Kelta, kao i da učestvuju u različitim edukativnim i zabavnim aktivnostima koje se često organizuju tokom godine, uključujući radionice, predstave i igre za decu.
                </p>
                <p>
                  <strong>Keltsko selo</strong> je odlična destinacija za porodice, školsku decu, kao i sve koji žele da se upuste u interaktivno istraživanje istorije ovog zanimljivog perioda.
                </p>
              </section>

              <img srcSet={`${indjija44} 450w, ${indjija4} `} alt="Inđija 4" />

              <section lang="sr">
                <p>
                  <strong>Zoo VRT Koki</strong> je mali zoološki vrt i popularno mesto za porodice i školsku decu, jer nudi priliku da se vide različite vrste životinja u opuštenoj i edukativnoj atmosferi.
                </p>
                <p>
                  Zoološki vrt nije prevelik, ali je dovoljno interesantan i raznovrstan da pruži zabavu i edukaciju posetiocima svih uzrasta.
                </p>
                <p>
                  U <strong>Zoo vrtu Koki</strong> možete videti razne domaće i egzotične životinje. Iako možda nije toliko poznat kao veći zoološki vrtovi u Srbiji, ovaj mali vrt se ističe svojom pristupačnošću i ljubaznim osobljem, kao i dobrom organizacijom prostora.
                </p>
                <p>
                  Ovo je odlično mesto za one koji žele da provedu neko vreme u prirodi i upoznaju se sa životinjama u prijatnoj atmosferi.
                </p>
              </section>

              <img srcSet={`${indjija66} 450w, ${indjija6} `} alt="Inđija 6" />

              <section lang="sr">
                <p>
                  <strong>Dunav</strong> protiče kroz teritoriju opštine <strong>Inđija</strong> u dužini od <em>27 km</em>, formirajući jedan od najlepših i najromantičnijih delova svog toka.
                </p>
                <p>
                  Obalu reke, od <strong>Čortanovaca</strong>, preko <strong>Beške</strong> i <strong>Krčedina</strong>, do <strong>Slankamenačkih Vinograda</strong> i ušća <em>Tise</em> u Dunav kod <strong>Starog Slankamena</strong>, krasi očuvana priroda i slikovita ruralna sredina.
                </p>
                <p>
                  Ovdje se smeste vikend naselja, riblje čarde, prostrane plaže, peščane ade i zeleni kutci koji privlače ljubitelje <strong>nautičkog turizma</strong>, <strong>ribolova</strong> i <strong>eko turizma</strong>.
                </p>
                <p>
                  Ovaj deo Dunava je pravi raj za sve koji žele da uživaju u tišini reke, prirodnoj lepoti i rekreativnim aktivnostima na vodi.
                </p>
              </section>

              <img srcSet={`${indjija77} 450w, ${indjija7} `} alt="Inđija 7" />

              <section lang="sr">
                <p>
                  <strong>Krečidinska ada</strong> je rečno ostrvo smešteno uz levu obalu <strong>Dunava</strong> naspram naselja <strong>Krečidin</strong>. Predstavlja veoma značajan deo Specijalnog rezervata prirode <em>„Koviljsko-petrovaradinski rit“</em> i jedna je od najvažnijih ada u <em>Podunavlju</em>.
                </p>
                <p>
                  Sa obalom dugom oko <strong>10 km</strong> i površinom od skoro <strong>9 km²</strong>, spada u grupu najvećih dunavskih ada od ušća <em>Drave</em> do ušća <em>Tise</em> u Dunav.
                </p>
                <p>
                  Ada je stanište brojnih retkih vrsta biljaka i životinja, značajno je mrestilište riba, a od davnina je poznata po brojnim stadima konja, podolskih goveda, magaraca i ovaca koja se na njoj pašu.
                </p>
              </section>
            </>
          )
          :
          (
            <>
              <section lang="en">
                <p>
                  <strong>The Municipality of Inđija</strong> is located in the northeastern part of Srem, on the southwestern slopes of Fruška Gora. It covers an area of 384 km² and consists of 11 settlements: Inđija, Beška, Novi Slankamen, Novi Karlovci, Krčedin, Čortanovci, Maradik, Ljukovo, Stari Slankamen, Jarkovci, and Slankamenački Vinogradi.
                </p>
                <p>
                  According to the 2022 census, the municipality has 43,755 inhabitants, originating from various ethnic groups. The Municipality of Inđija is known for its rich history and tradition, and its cultural heritage is a significant factor of identity.
                </p>
                <p>
                  Furthermore, the municipality records significant economic progress, focusing on agriculture, industry, and tourism development. Geographically, Inđija has a strategic position as it is located near Belgrade and important traffic routes, enabling easy access to markets and facilitating economic exchange.
                </p>
              </section>

              <img srcSet={`${indjija55} 450w, ${indjija5} `} alt="Inđija 5" />

              <section lang="en">
                <p>
                  <strong>Inđija</strong> is a city rich in green spaces and parks, ideal for rest and recreation. In the city center, there is a park with maintained paths, benches, and playgrounds suitable for families and children.
                </p>
                <p>
                  Additionally, there are smaller parks and tree-lined avenues that provide a pleasant environment for walks, while larger parks offer space for sports and outdoor relaxation.
                </p>
                <p>
                  The green areas in <strong>Inđija</strong> contribute to a relaxed atmosphere and quality of life in this urban environment.
                </p>
              </section>

              <div className="displayFlexClassic">
                <img
                  srcSet={`${indjija33} 450w, ${indjija3} `}
                  alt="Inđija center"
                  style={{ padding: "50px", width: "47%" }}
                />
                <img
                  srcSet={`${indjija88} 450w, ${indjija8} `}
                  alt="Inđija Church of St. George"
                  style={{ padding: "50px", width: "47%" }}
                />
              </div>

              <section lang="en">
                <p>
                  <strong>Inđija</strong> is also home to a modern <strong>Outlet Shopping Park</strong>, a contemporary shopping center located at the city entrance, offering visitors a variety of branded products at affordable prices.
                </p>
                <p>
                  Here you can find clothing, footwear, electronics stores, as well as restaurants and cafés, making this place ideal for shopping, enjoyment, and relaxation.
                </p>
                <p>
                  In the very center of <strong>Inđija</strong> is also the <em>Church of St. George</em>, a beautiful Baroque church that is not only a religious center but also an important cultural landmark.
                </p>
                <p>
                  With its frescoes and icons, the church symbolizes the history and tradition of the city, while St. George is the patron saint of this religious institution.
                </p>
                <p>
                  Both places, the <strong>Outlet</strong> and the <em>Church</em>, perfectly fit the image of <strong>Inđija</strong> as a city that combines modern life and rich cultural heritage.
                </p>
              </section>

              <img srcSet={`${indjija22} 450w, ${indjija2} `} alt="Inđija 2" />

              <section lang="en">
                <p>
                  <strong>Celtic Village</strong> is a thematic tourist complex located in the sports and recreation zone of <strong>Inđija</strong>, at the city entrance from the direction of <em>Novi Sad</em>.
                </p>
                <p>
                  Inspired by the life of the Celts in this area in the 3rd century BC, the complex is of an entertaining and educational nature and primarily intended for children.
                </p>
                <p>
                  Inside the high wooden fences surrounding the complex, there are several types of Celtic houses covered with reeds and made of wood and mud, representing authentic Celtic households and craft workshops.
                </p>
                <p>
                  This complex allows visitors to learn about the life and tradition of the Celts, as well as participate in various educational and entertaining activities frequently organized throughout the year, including workshops, performances, and games for children.
                </p>
                <p>
                  The <strong>Celtic Village</strong> is an excellent destination for families, schoolchildren, and all those who want to embark on an interactive exploration of the history of this fascinating period.
                </p>
              </section>

              <img srcSet={`${indjija44} 450w, ${indjija4} `} alt="Inđija 4" />

              <section lang="en">
                <p>
                  <strong>Zoo Koki</strong> is a small zoo and a popular place for families and schoolchildren, offering the opportunity to see different animal species in a relaxed and educational atmosphere.
                </p>
                <p>
                  The zoo is not large but interesting and diverse enough to provide entertainment and education for visitors of all ages.
                </p>
                <p>
                  At <strong>Zoo Koki</strong> you can see various domestic and exotic animals. Although it may not be as well-known as larger zoos in Serbia, this small zoo stands out for its accessibility, friendly staff, and good organization of the space.
                </p>
                <p>
                  This is an excellent place for those who want to spend some time in nature and get acquainted with animals in a pleasant atmosphere.
                </p>
              </section>

              <img srcSet={`${indjija66} 450w, ${indjija6} `} alt="Inđija 6" />

              <section lang="en">
                <p>
                  The <strong>Danube River</strong> flows through the territory of the <strong>Inđija</strong> municipality for a length of <em>27 km</em>, forming one of the most beautiful and romantic parts of its course.
                </p>
                <p>
                  The riverbank, from <strong>Čortanovci</strong>, through <strong>Beška</strong> and <strong>Krčedin</strong>, to <strong>Slankamenački Vinogradi</strong> and the confluence of the <em>Tisa</em> into the Danube near <strong>Stari Slankamen</strong>, is adorned with preserved nature and picturesque rural surroundings.
                </p>
                <p>
                  Here you can find weekend settlements, fish restaurants, spacious beaches, sandy river islands, and green corners attracting lovers of <strong>nautical tourism</strong>, <strong>fishing</strong>, and <strong>eco-tourism</strong>.
                </p>
                <p>
                  This part of the Danube is a true paradise for those who want to enjoy the river’s tranquility, natural beauty, and recreational activities on the water.
                </p>
              </section>

              <img srcSet={`${indjija77} 450w, ${indjija7} `} alt="Inđija 7" />

              <section lang="en">
                <p>
                  <strong>Krečidinska Ada</strong> is a river island located on the left bank of the <strong>Danube</strong> opposite the settlement of <strong>Krečidin</strong>. It represents a very important part of the Special Nature Reserve <em>“Koviljsko-petrovaradinski rit”</em> and is one of the most important islands in the Danube region.
                </p>
                <p>
                  With a shoreline about <strong>10 km</strong> long and an area of nearly <strong>9 km²</strong>, it belongs to the group of the largest Danube islands from the mouth of the <em>Drava</em> to the mouth of the <em>Tisa</em> into the Danube.
                </p>
                <p>
                  The island is home to numerous rare species of plants and animals, is an important spawning ground for fish, and has long been known for its herds of horses, Podolian cattle, donkeys, and sheep grazing there.
                </p>
              </section>
            </>
          )}

      </div>
    </>
  );
};


export default Indjija;