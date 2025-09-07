/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import petnicaPecina1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/desktop/petnicaPecina1.jpg";
import petnicaPecina2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/desktop/petnicaPecina2.jpg";
import petnicaPecina3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/desktop/petnicaPecina3.jpg";
import petnicaPecina4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/desktop/petnicaPecina4.jpg";
import petnicaPecina5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/desktop/petnicaPecina5.jpg";
import petnicaPecina11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/mobile/MpetnicaPecina1.jpg";
import petnicaPecina22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/mobile/MpetnicaPecina2.jpg";
import petnicaPecina33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/mobile/MpetnicaPecina3.jpg";
import petnicaPecina44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/mobile/MpetnicaPecina4.jpg";
import petnicaPecina55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/PetnickaPecina/mobile/MpetnicaPecina5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PetnickaPecina = () => {
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

        <title>{switchLanguage === "rs" ? "Petnička Pećina – Blago Prirode i Nauke | Serbia Wonders" : "Petnica Cave – Natural and Scientific Treasure | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === "rs" ?
            "Petnička Pećina, spomenik prirode speleološko-hidrološkog tipa kod Valjeva. Saznajte o arheološkim, paleontološkim istraživanjima i naučno-obrazovnom centru Petnica."
            :
            "Petnica Cave, a speleological and hydrological natural monument near Valjevo. Learn about archaeological and paleontological research, and the Petnica Research Center."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === "rs" ?
            "Petnička Pećina, spomenik prirode, Valjevo, speleologija, arheologija, paleontologija, Istraživačka stanica Petnica"
            :
            "Petnica Cave, natural monument, Valjevo, speleology, archaeology, paleontology, Petnica Research Center"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/petnicka-pecina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/petnicka-pecina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/petnicka-pecina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/petnicka-pecina"
        />


      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(kulubarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${petnicaPecina11} 450w, ${petnicaPecina1} `} alt="PETNIČKA PEĆINA 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2 style={{ color: "white" }}>Petnička Pećina</h2>

              <section lang="sr">
                <p>
                  <strong>Spomenik prirode Petnička pećina</strong> predstavlja spomenik prirode
                  <em> speleološko-hidrološkog tipa</em>. Pećina se nalazi u severozapadnom delu
                  centralne Srbije, u valjevskoj Podgorini, jugoistočno od grada <strong>Valjeva</strong>,
                  na prelazu između krajnjih planinskih izdanaka „valjevske grede“ i ravni
                  Valjevske kotline, kao i doline reke Kolubare. Teritorija opštine
                  Valjevo, granica atara sela <strong>Klinci</strong> i <strong>Petnica</strong>.
                </p>
              </section>

              <img srcSet={`${petnicaPecina22} 450w, ${petnicaPecina2} `} alt="PETNIČKA PEĆINA 2" />

              <section lang="sr">
                <p>
                  U pećini i njenoj neposrednoj okolini pronađena su najstarija
                  svedočanstva o životu ljudi u zapadnoj Srbiji. Istraživanje ovog
                  arheološkog lokaliteta započelo je u <strong>19. veku</strong>, kada su prva istraživanja
                  obavili <strong>Josif Pančić</strong> i <strong>Jovan Cvijić</strong>. Pored arheološke, pećina ima i
                  veliku <em>speleološku</em> i <em>paleontološku</em> vrednost. Sastoji se od oko
                  <strong>600 metara</strong> dugih kanala i brojnih prostorija. Podeljena je na dva dela —
                  <strong>Gornju</strong> i <strong>Donju pećinu</strong>. Donja je manja, ali ima lakši
                  ulaz, iz koje izvire ponornica <em>Banja</em>. Gornja je veća i sadrži niz
                  prostorija i kanala. Najveća prostorija, <strong>Koncertna dvorana</strong>,
                  osvetljena je prirodnim svetlom koje dopire kroz dva otvora na plafonu
                  („vigledi“). Ove osobine, zajedno sa povoljnim <em>klimatskim uslovima</em>,
                  činile su pećinu idealnim skloništem za ljude i retke životinjske vrste.
                </p>
              </section>

              <img srcSet={`${petnicaPecina33} 450w, ${petnicaPecina3} `} alt="PETNIČKA PEĆINA 3" />

              <section lang="sr">
                <p>
                  <strong>Arheološko-antropološka istraživanja</strong> sprovedena <strong>1969. godine</strong> potvrdila su
                  da je lokalitet ispred pećine prvo kompletno <strong>neolitsko naselje</strong> u
                  tadašnjoj Jugoslaviji, staro <strong>6000 godina</strong>. U unutrašnjosti pećine pronađeni su
                  ostaci <em>ognjišta</em>, <em>kosti pećinskog medveda</em>, <em>hijene</em>, <em>srndaća</em>, kao i delovi
                  <strong>vojne opreme iz rimskog perioda</strong> (uključujući i <em>kockice za igru</em>), zatim
                  tragovi <em>srednjovekovnih skloništa</em> lokalnog stanovništva i mnogi drugi predmeti.
                  Najčešći artefakti ispred pećine uključuju <strong>oružje</strong> i <strong>keramičke posude</strong> iz
                  neolita. I pored brojnih otkrića, lokalitet još uvek nije u potpunosti
                  istražen i ostaje predmet stalnog interesovanja arheologa iz Istraživačke
                  stanice, kao i stručnjaka iz cele bivše Jugoslavije i inostranstva.
                </p>
              </section>

              <img srcSet={`${petnicaPecina44} 450w, ${petnicaPecina4} `} alt="PETNIČKA PEĆINA 4" />

              <section lang="sr">
                <p>
                  Na lokalitetu <strong>Bela stena</strong>, udaljenom oko <strong>5 km</strong> od Petnice,
                  pronađeni su <strong>uljni škriljci</strong> i bogato nalazište <em>fosilnih biljnih i životinjskih
                    ostataka</em> iz ranijih geoloških epoha. Zahvaljujući stručnjacima iz
                  <strong>Istraživačke stanice Petnica</strong> i rumunskim paleontolozima, jedan od fosila
                  identifikovan je kao <strong>nova vrsta pelikana</strong> – <em>srpski pelikan (Pelicanus serbica)</em>.
                  Interesantno je da je <strong>Jovan Cvijić</strong> još <em>1920-ih</em> predlagao da Univerzitet u Beogradu
                  osnuje <strong>centar za terensku praksu</strong> u Petnici, zbog izuzetnog prirodnog i istorijskog
                  značaja ovog područja i njegove dobre saobraćajne povezanosti.
                </p>
              </section>

              <img srcSet={`${petnicaPecina55} 450w, ${petnicaPecina5} `} alt="PETNIČKA PEĆINA 5" />

              <section lang="sr">
                <p>
                  <strong>Istraživačka stanica Petnica</strong> je <em>naučno-obrazovni centar</em> koji se nalazi
                  u blizini <strong>Valjeva</strong>. Osnovana <strong>1982. godine</strong>, Petnica je najstariji i
                  najveći centar tog tipa za <strong>srednjoškolce</strong> u regionu. Njena misija je
                  podsticanje <em>naučnog razmišljanja</em> i razvoja <em>istraživačkog duha</em> kod mladih.
                  Programi obuhvataju oblasti kao što su: <strong>biologija, hemija, fizika, astronomija,
                    arheologija, informatika</strong> i druge. Učesnici imaju priliku da rade sa
                  mentorima, koriste savremene metode i sprovode sopstvena istraživanja.
                  Petnica je poznata i po brojnim <strong>arheološkim i paleontološkim istraživanjima</strong>,
                  naročito vezanim za Petničku pećinu. Ovaj centar okuplja <em>mlade, naučnike i istraživače</em>
                  iz Srbije i sveta, pružajući temeljnu obuku iz naučne metodologije.
                  Petnica je postala <strong>prepoznatljiv simbol nauke i obrazovanja</strong> u Srbiji i regionu.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Petnička Cave</h2>

              <section lang="en">
                <p>
                  <strong>Petnička Cave Natural Monument</strong> is a natural monument of
                  <em> speleological and hydrological type</em>. The cave is located in the northwestern part
                  of central Serbia, in the Valjevo Podgorina area, southeast of the city of <strong>Valjevo</strong>,
                  at the transition between the final mountain ridges of the “Valjevo range” and the
                  Valjevo Basin plain, as well as the Kolubara River valley. It lies within the municipality of
                  Valjevo, on the border between the villages of <strong>Klinci</strong> and <strong>Petnica</strong>.
                </p>
              </section>

              <img srcSet={`${petnicaPecina22} 450w, ${petnicaPecina2} `} alt="PETNIČKA CAVE 2" />

              <section lang="en">
                <p>
                  The cave and its immediate surroundings contain the oldest evidence of human life
                  in western Serbia. Archaeological research at this site began in the <strong>19th century</strong>,
                  with early investigations conducted by <strong>Josif Pančić</strong> and <strong>Jovan Cvijić</strong>.
                  In addition to its archaeological significance, the cave holds great
                  <em> speleological</em> and <em> paleontological</em> value. It consists of about
                  <strong>600 meters</strong> of channels and numerous chambers. The cave is divided into two sections —
                  the <strong>Upper</strong> and <strong>Lower Cave</strong>. The Lower Cave is smaller but has an easier
                  entrance, from which the underground river <em>Banja</em> emerges. The Upper Cave is larger and
                  contains a network of rooms and corridors. Its largest chamber, the <strong>Concert Hall</strong>,
                  is naturally lit by two ceiling openings known as “vigledi.” These features, along with
                  favorable <em>climatic conditions</em>, made the cave an ideal shelter for humans and rare animal species.
                </p>
              </section>

              <img srcSet={`${petnicaPecina33} 450w, ${petnicaPecina3} `} alt="PETNIČKA CAVE 3" />

              <section lang="en">
                <p>
                  <strong>Archaeological and anthropological research</strong> conducted in <strong>1969</strong> confirmed
                  that the area in front of the cave was the first fully excavated
                  <strong>Neolithic settlement</strong> in former Yugoslavia, dating back <strong>6000 years</strong>.
                  Inside the cave, researchers found remains of <em>fire pits</em>, <em>bones of cave bears</em>,
                  <em>hyenas</em>, <em>roe deer</em>, and fragments of <strong>Roman military equipment</strong>
                  (including <em>gaming dice</em>), as well as traces of <em>medieval shelters</em> used by local
                  populations, and many other artifacts. The most common items discovered outside the cave
                  include <strong>weapons</strong> and fragments of <strong>ceramic vessels</strong> used by Neolithic people.
                  Despite numerous discoveries, the site has not yet been fully explored and continues to attract
                  interest from archaeologists at the Petnica Research Center, as well as experts from across the
                  former Yugoslavia and abroad.
                </p>
              </section>

              <img srcSet={`${petnicaPecina44} 450w, ${petnicaPecina4} `} alt="PETNIČKA CAVE 4" />

              <section lang="en">
                <p>
                  At the site called <strong>Bela Stena</strong>, located about <strong>5 km</strong> from Petnica,
                  researchers discovered <strong>oil shales</strong> and a rich deposit of <em>fossilized plant and animal remains</em>
                  from earlier geological eras. Thanks to experts from the <strong>Petnica Research Center</strong> and Romanian
                  paleontologists, one of the fossils was identified as a <strong>new species of pelican</strong> –
                  <em>the Serbian pelican (Pelicanus serbica)</em>. Interestingly, <strong>Jovan Cvijić</strong> had proposed
                  back in the <em>1920s</em> that the University of Belgrade should establish a <strong>field research center</strong>
                  in Petnica, citing the area’s exceptional natural and historical environment and good transportation access.
                </p>
              </section>

              <img srcSet={`${petnicaPecina55} 450w, ${petnicaPecina5} `} alt="PETNIČKA CAVE 5" />

              <section lang="en">
                <p>
                  The <strong>Petnica Research Center</strong> is a <em>scientific and educational institution</em>
                  located near <strong>Valjevo</strong>. Founded in <strong>1982</strong>, it is the oldest and largest
                  institution of its kind for <strong>high school students</strong> in the region. Its mission is
                  to foster <em>scientific thinking</em> and develop <em>research skills</em> among young people.
                  The center offers programs in a variety of disciplines including:
                  <strong>biology, chemistry, physics, astronomy, archaeology, computer science</strong>, and more.
                  Participants have the opportunity to work with mentors, use modern research methods,
                  and conduct their own scientific projects. Petnica is also renowned for its many
                  <strong>archaeological and paleontological explorations</strong>, particularly related to the Petnička Cave.
                  The center attracts <em>students, scientists, and researchers</em> from Serbia and abroad,
                  providing them with a foundation in scientific methodology.
                  Over the decades, Petnica has become a <strong>recognized symbol of science and education</strong>
                  in Serbia and the region.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default PetnickaPecina;