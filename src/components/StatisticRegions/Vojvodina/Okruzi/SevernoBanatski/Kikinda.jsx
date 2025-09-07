/* eslint-disable react/no-unknown-property */
import kikinda1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda1.jpg";
import kikinda2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda3.jpg";
import kikinda3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda4.jpg";
import kikinda4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda5.jpg";
import kikinda5 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda6.jpg";
import kikinda6 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/desktop/kikinda7.jpg";
import kikinda11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda1.jpg";
import kikinda22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda3.jpg";
import kikinda33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda4.jpg";
import kikinda44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda5.jpg";
import kikinda55 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda6.jpg";
import kikinda66 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Kikinda/mobile/Mkikinda7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Kikinda = () => {
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
            ? 'Kikinda | Istorija, kultura i priroda severnog Banata | Serbia Wonders'
            : 'Kikinda | History, Culture and Nature of Northern Banat | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Kikinda, grad u Severnobanatskom okrugu, poznat po bogatoj istoriji, spomeniku droplji, ulici Generala Petra Drapšina, narodnim muzejima i prirodnoj baštini.'
              : 'Kikinda, a city in the Northern Banat district, known for its rich history, the great bustard monument, General Petra Drapšin street, national museums, and natural heritage.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Kikinda, Severnobanatski okrug, istorija Kikinde, ulica Generala Petra Drapšina, muzej Kikinda, muzej Žeravica, Terra muzej, priroda Kikinde, kulturna baština Vojvodine'
              : 'Kikinda, Northern Banat district, Kikinda history, General Petra Drapšin street, Kikinda museum, Žeravica museum, Terra museum, Kikinda nature, Vojvodina cultural heritage'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/kikinda`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/kikinda"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/kikinda"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/kikinda"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(severnoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${kikinda11} 450w, ${kikinda1} `} alt="Kikinda 1" />

        <h2>Kikinda</h2>

        {switchLanguage === 'rs' ?
          (
            <>
              <section lang="sr">
                <p>
                  <strong>Kikinda</strong> je grad u <strong>Severnobanatskom okrugu</strong>, smešten u <strong>Vojvodini</strong>, na severu <strong>Srbije</strong>, blizu granice sa <strong>Rumunijom</strong>. Grad se prostire uz reku <strong>Tisu</strong> i ima bogatu istoriju koja seže još od praistorijskih vremena, a u okolini su pronađeni značajni arheološki nalazi iz neolita, Rimskog carstva i srednjeg veka. Kroz istoriju, Kikinda je bila deo različitih carstava, uključujući <strong>Habsburšku Monarhiju</strong> i <strong>Kraljevinu Srbiju</strong>, što je oblikovalo njen kulturni i etnički mozaik.
                </p>
              </section>

              <img srcSet={`${kikinda22} 450w, ${kikinda2} `} alt="Kikinda 2" />

              <section lang="sr">
                <p>
                  <strong>Kikinda</strong> je takođe poznata po svojim istorijskim spomenicima, poput <strong>Gradske crkve</strong> iz 18. veka, koja je jedno od glavnih verskih i kulturnih mesta. Grad je ponosan i na spomenik <strong>velikoj droplji</strong>, ptici koja je postala simbol ovog kraja zbog svog prisustva u okolnim prirodnim rezervatima. Tu je i <strong>Kikindska pijaca</strong>, gde posetioci mogu uživati u lokalnim proizvodima i okusima, kao i brojni spomenici kulture koji podsećaju na bogatstvo istorije.
                </p>
              </section>

              <img srcSet={`${kikinda33} 450w, ${kikinda3} `} alt="Kikinda 3" />

              <section lang="sr">
                <p>
                  <strong>Ulica Generala Petra Drapšina</strong> zauzima visoko 22. mesto na listi najlepših ulica na svetu! Tako specifična i neobična privlači pažnju mnogih turista. Ukupno 389 stabala stvara zeleni tunel i čini oazu prirode u samom centru grada. Već osam godina, slika najlepše ulice u Srbiji, koja krasi severni Banat, nalazi se na spisku 50 najlepših ulica na svetu. Krošnje američkog koprivića čine tunel dug 2 km. Na lokalu, ovo drvo zovu „pincike“, a sam plod podseća na ukus bundeve. Važno je istaći da je Kikinda prestonica bundeve, a njen plod podseća na bundevu.
                </p>
              </section>

              <img srcSet={`${kikinda44} 450w, ${kikinda4} `} alt="Kikinda 4" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej Kikinda</strong> je kulturna institucija koja čuva bogatu istoriju i tradiciju ovog grada. Muzej se sastoji od nekoliko zbirki, uključujući arheološke, etnološke i umetničke eksponate, a posebno je poznat po kolekciji fosila i zoološkim eksponatima.
                </p>
              </section>

              <img
                srcSet={`${kikinda55} 450w, ${kikinda5} `}
                alt="Kikinda 5"
              />

              <section lang="sr">
                <p>
                  Bogata riznica tehničkog i kulturno-istorijskog nasleđa Vojvodine i jedinstveni muzej sa fantastičnom kolekcijom parnih mašina, traktora, priključnih poljoprivrednih mašina, alata i predmeta koji oslikavaju nekadašnji način života kako paora, tako i veleposednika novomiloševačkih – <strong>muzej Žeravica</strong>!
                </p>
              </section>


              <img
                srcSet={`${kikinda66} 450w, ${kikinda6} `}
                alt="Kikinda 5"
              />

              <section lang="sr">
                <p>
                  <strong>Terra muzej Kikinda</strong>, jedinstvena institucija koja se fokusira na prirodnu baštinu ovog regiona. Osnovan je sa ciljem da očuva i prikaže geološke, paleontološke i zoološke zbirke, među kojima se izdvaja značajna kolekcija fosila. Muzej je posebno poznat po fosilima iz perioda miocena, uključujući fosile praistorijskih životinja. Terra muzej je važan kulturni centar koji doprinosi očuvanju istorije prirode Vojvodine.
                </p>
              </section>

            </>
          )
          :
          (
            <>
              <section lang="en">
                <p>
                  <strong>Kikinda</strong> is a city in the <strong>North Banat District</strong>, located in <strong>Vojvodina</strong>, in northern <strong>Serbia</strong>, near the border with <strong>Romania</strong>. The city stretches along the <strong>Tisa River</strong> and has a rich history dating back to prehistoric times, with significant archaeological finds from the Neolithic period, the Roman Empire, and the Middle Ages discovered in the surrounding area. Throughout history, Kikinda has been part of various empires, including the <strong>Habsburg Monarchy</strong> and the <strong>Kingdom of Serbia</strong>, which shaped its cultural and ethnic mosaic.
                </p>
              </section>

              <img srcSet={`${kikinda22} 450w, ${kikinda2} `} alt="Kikinda 2" />

              <section lang="en">
                <p>
                  <strong>Kikinda</strong> is also known for its historical landmarks, such as the <strong>City Church</strong> from the 18th century, which is one of the main religious and cultural sites. The city is proud of the monument to the <strong>great bustard</strong>, a bird that has become a symbol of the region due to its presence in the nearby nature reserves. There is also the <strong>Kikinda Market</strong>, where visitors can enjoy local products and flavors, as well as numerous cultural monuments that reflect the richness of its history.
                </p>
              </section>

              <img srcSet={`${kikinda33} 450w, ${kikinda3} `} alt="Kikinda 3" />

              <section lang="en">
                <p>
                  <strong>General Petar Drapšin Street</strong> ranks 22nd among the most beautiful streets in the world! So unique and unusual, it attracts the attention of many tourists. A total of 389 trees create a green tunnel and form an oasis of nature right in the city center. For eight years now, the image of the most beautiful street in Serbia, which adorns northern Banat, has been on the list of the 50 most beautiful streets worldwide. The crowns of the American hop hornbeam trees form a tunnel 2 km long. Locally, this tree is called “pincike,” and its fruit resembles the taste of pumpkin. It is worth noting that Kikinda is the pumpkin capital, and its fruit resembles a pumpkin.
                </p>
              </section>

              <img srcSet={`${kikinda44} 450w, ${kikinda4} `} alt="Kikinda 4" />

              <section lang="en">
                <p>
                  The <strong>National Museum Kikinda</strong> is a cultural institution preserving the rich history and tradition of the city. The museum consists of several collections, including archaeological, ethnological, and artistic exhibits, and is especially known for its collection of fossils and zoological specimens.
                </p>
              </section>

              <img srcSet={`${kikinda55} 450w, ${kikinda5} `} alt="Kikinda 5" />

              <section lang="en">
                <p>
                  A rich treasury of technical and cultural-historical heritage of Vojvodina and a unique museum with a fantastic collection of steam engines, tractors, agricultural machinery attachments, tools, and items illustrating the former way of life of both peasants and large landowners from Novi Miloševo – the <strong>Žeravica Museum</strong>!
                </p>
              </section>

              <img srcSet={`${kikinda66} 450w, ${kikinda6} `} alt="Kikinda 6" />

              <section lang="en">
                <p>
                  <strong>Terra Museum Kikinda</strong> is a unique institution focused on the natural heritage of this region. It was founded with the aim of preserving and showcasing geological, paleontological, and zoological collections, including a significant collection of fossils. The museum is especially known for fossils from the Miocene period, including prehistoric animal fossils. Terra Museum is an important cultural center contributing to the preservation of the natural history of Vojvodina.
                </p>
              </section>
            </>
          )}

      </div>
    </>
  );
};


export default Kikinda;