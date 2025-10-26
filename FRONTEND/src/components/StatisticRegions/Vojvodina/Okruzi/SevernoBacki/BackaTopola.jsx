/* eslint-disable react/no-unknown-property */
import backaT1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/desktop/BT1.jpg";
import backaT2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/desktop/BT2.jpg";
import backaT3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/desktop/BT3.jpg";
import backaT4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/desktop/BT4.jpg";
import backaT5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/desktop/BT5.jpg";
import backaT6 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/desktop/BT6.jpg";
import backaT11 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/mobile/MBT1.jpg";
import backaT22 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/mobile/MBT2.jpg";
import backaT33 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/mobile/MBT3.jpg";
import backaT44 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/mobile/MBT4.jpg";
import backaT55 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/mobile/MBT5.jpg";
import backaT66 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/BackaTopola/mobile/MBT6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const BackaTopola = () => {
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
            ? 'Bačka Topola | Priroda, Istorija i Turizam u Vojvodini'
            : 'Backa Topola | Nature, History and Tourism in Vojvodina'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Bačka Topola, šarmantna vojvođanska varoš poznata po multikulturalnosti, Zobnatičkom jezeru, dvorcu Falcione i ergeli Zobnatica – idealna destinacija za ljubitelje prirode i kulture.'
              : 'Backa Topola, a charming town in Vojvodina known for multiculturalism, Zobnaticko Lake, Falcione Castle, and Zobnatica Stud Farm – a perfect destination for nature and culture lovers.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Bačka Topola, Zobnatičko jezero, dvorac Falcione, ergela Zobnatica, muzej Kaštel Krai, turizam Vojvodina, priroda Bačka Topola, istorija Bačke Topole'
              : 'Backa Topola, Zobnaticko Lake, Falcione Castle, Zobnatica Stud Farm, Kastel Krai Museum, Vojvodina tourism, Backa Topola nature, Backa Topola history'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/backa-topola`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/backa-topola"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/backa-topola"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/backa-topola"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(servernoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${backaT22} 450w, ${backaT2} `} alt="Backa Topola 1" />

        <h1>
          Backa Topola
        </h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  Ova vojvođanska varoš se „ugnjezdila“ na 69 km od <strong>Novog Sada</strong>, a 32 km od <strong>Subotice</strong>. <strong>Bačka Topola</strong> je pravi primer multikulturalnosti, ovde će vam poželjeti dobrodošlicu na <em>srpskom</em> ali i <em>mađarskom</em> jeziku. Dok šetate pojedinim ulicama Bačke Topole osetićete seosku idilu, pravi ravničarski duh. Ljubazni domaćini će vas ugostiti u starim švapskim kućama u kojima vas čeka udoban smeštaj, a bićete i u mogućnosti da uživate u vojvođanskoj autentičnoj hrani.
                </p>
              </section>

              <img srcSet={`${backaT11} 450w, ${backaT1} `} alt="Backa Topola 2" />

              <section lang="sr">
                <p>
                  <strong>Zobnatičko jezero</strong> je prirodno jezero koje se nalazi u severnom delu Srbije, u pokrajini Vojvodina, u blizini <strong>Bačke Topole</strong>. Poznato je po svojoj prirodnoj lepoti i značaju kao destinacija za rekreaciju i odmor. Jezero privlači posetioce zbog mogućnosti za sportove na vodi, ribolov, kao i za porodice koje žele miran prostor za odmor u prirodi. Zbog svoje mirne okoline, <strong>Zobnatičko jezero</strong> je popularno među lokalnim stanovništvom i turistima, posebno tokom letnjih meseci.
                </p>
              </section>

              <img srcSet={`${backaT33} 450w, ${backaT3} `} alt="Backa Topola 3" />

              <section lang="sr">
                <p>
                  Turistički kompleks <strong>Zobnatice</strong> čini nekadašnje imanje porodice Terleeva koje je 1882. godine izgradio vlastelin Đula Terleeva. Imanje čine <strong>dvorac Zobnatica</strong> i <strong>kula osmatračnica</strong>. Zobnatica je poznata po <strong>ergeli</strong> koja je osnovana 1779. godine. Celokupni kompleks ergele sadrži konjušnicu sa oko 100 grla engleske punokrvne rase, hipodrom i druge terene za jahanje i treninge.
                </p>
              </section>

              <img srcSet={`${backaT44} 450w, ${backaT4} `} alt="Backa Topola 4" />

              <section lang="sr">
                <p>
                  <strong>Kaštel Krai – Muzej Bačke Topole</strong> predstavlja važan istorijski objekat i kulturnu instituciju u Bačkoj Topoli. Ovaj muzej se nalazi u jednom od značajnih istorijskih objekata u regionu i pruža uvid u bogatu istoriju, kulturu i tradiciju Bačke Topole i okolnih područja. Muzej nudi različite izložbe koje predstavljaju lokalnu istoriju, arheološke nalaze, etnografske zbirke i predmete koji ilustruju svakodnevni život kroz vekove u ovom delu Vojvodine. Posetioci mogu upoznati različite periode, od doba Rimskog Carstva, preko srednjovekovnog perioda, pa sve do savremenog života u ovom multikulturalnom regionu.
                </p>
              </section>

              <img
                srcSet={`${backaT55} 450w, ${backaT5} `}
                alt="Backa Topola 5"
              />

              <section lang="sr">
                <p>
                  <strong>Dvorac (Kaštel - Panonija)</strong> je izgrađen 1846. godine za plemićku porodicu Falcione. Izgradnju dvorca je sproveo grof Arpad Falcione, a park oko zgrade je završen tek 1870. godine kada je imanjem upravljao Arpad II Falcione. Nalazi se na poljoprivrednom dobru <em>"Panonija"</em>, u blizini mesta Bajša. Objekat je skromna prizemna građevina, smeštena u izuzetno negovanom prostranom parku. Dvorac je sagrađen u duhu zrelog klasicizma sa svim odlikama koje ovaj stil čine primerenim arhitekturi dvora. Portik nad glavnim ulazom je u centralnom delu izdužene pravougaone osnove. Oslonjen na četiri masivna stuba koji se završavaju jonskim kapitelima, iznad kojih se nalazi ravna arhitravna greda sa godinom izgradnje. Ulaz je masivan, a sa strane vrata se nalaze dva prozorska otvora.
                </p>
              </section>

              <img
                srcSet={`${backaT66} 450w, ${backaT6} `}
                alt="Backa Topola 5"
              />

              <section lang="sr">
                <p>
                  <strong>Ergela Zobnatica</strong>, turistička i konjička atrakcija u Bačkoj Topoli, Vojvodina, sa bogatom tradicijom uzgoja konja. Pruža mogućnosti za jahanje, vožnju kočijama i rekreativne aktivnosti u prirodnom ambijentu. Idealna je za ljubitelje prirode, porodice i sve koji žele doživeti autentični vojvođanski ruralni duh.
                </p>
              </section>
            </>
          )
          :
          (
            <><section lang="en">
              <p>
                This Vojvodina town is “nestled” 69 km from <strong>Novi Sad</strong> and 32 km from <strong>Subotica</strong>. <strong>Bačka Topola</strong> is a true example of multiculturalism; here you will be welcomed both in <em>Serbian</em> and <em>Hungarian</em>. Walking through some streets of Bačka Topola, you will feel a rural idyll, a true spirit of the plains. Friendly hosts will welcome you in old Swabian houses where comfortable accommodation awaits, and you will also have the opportunity to enjoy authentic Vojvodina cuisine.
              </p>
            </section>

              <img srcSet={`${backaT11} 450w, ${backaT1} `} alt="Backa Topola 2" />

              <section lang="en">
                <p>
                  <strong>Zobnatica Lake</strong> is a natural lake located in the northern part of Serbia, in the province of Vojvodina, near <strong>Bačka Topola</strong>. It is known for its natural beauty and importance as a destination for recreation and relaxation. The lake attracts visitors for water sports, fishing, as well as families seeking a peaceful place to rest in nature. Due to its calm environment, <strong>Zobnatica Lake</strong> is popular among locals and tourists, especially during the summer months.
                </p>
              </section>

              <img srcSet={`${backaT33} 450w, ${backaT3} `} alt="Backa Topola 3" />

              <section lang="en">
                <p>
                  The tourist complex <strong>Zobnatica</strong> consists of the former estate of the Terleeva family, built in 1882 by the nobleman Đula Terleeva. The estate includes the <strong>Zobnatica castle</strong> and a <strong>watchtower</strong>. Zobnatica is famous for its <strong>stud farm</strong>, founded in 1779. The entire stud farm complex contains a stable with about 100 English thoroughbred horses, a hippodrome, and other facilities for riding and training.
                </p>
              </section>

              <img srcSet={`${backaT44} 450w, ${backaT4} `} alt="Backa Topola 4" />

              <section lang="en">
                <p>
                  <strong>Kaštel Krai – Bačka Topola Museum</strong> is an important historical building and cultural institution in Bačka Topola. This museum is located in one of the significant historical buildings in the region and offers insight into the rich history, culture, and traditions of Bačka Topola and surrounding areas. The museum offers various exhibitions presenting local history, archaeological findings, ethnographic collections, and artifacts illustrating everyday life through the centuries in this part of Vojvodina. Visitors can explore different periods, from the Roman Empire era, through the medieval period, to modern life in this multicultural region.
                </p>
              </section><img srcSet={`${backaT55} 450w, ${backaT5} `} alt="Backa Topola 5" /><section lang="en">
                <p>
                  The <strong>Castle (Kaštel - Panonija)</strong> was built in 1846 for the noble Falcione family. The castle was commissioned by Count Arpad Falcione, and the park surrounding the building was completed only in 1870 when the estate was managed by Arpad II Falcione. It is located on the agricultural estate "Panonija", near the village of Bajša. The building is a modest single-story structure, situated in a well-maintained spacious park. The castle was built in the spirit of mature classicism with all the features that make this style appropriate for palace architecture. The portico above the main entrance is in the central part of the elongated rectangular base. It rests on four massive columns ending with Ionic capitals, above which lies a flat architrave bearing the year of construction. The entrance is massive, with two window openings beside the door.
                </p>
              </section>

              <img srcSet={`${backaT66} 450w, ${backaT6} `} alt="Backa Topola 6" />

              <section lang="en">
                <p>
                  <strong>Zobnatica Stud Farm</strong>, a tourist and equestrian attraction in Bačka Topola, Vojvodina, with a rich tradition of horse breeding. It offers opportunities for horseback riding, carriage rides, and recreational activities in a natural setting. It is ideal for nature lovers, families, and anyone who wants to experience the authentic rural spirit of Vojvodina.
                </p>
              </section>
            </>

          )}
      </div>
    </>
  );
};


export default BackaTopola;