/* eslint-disable react/no-unknown-property */
import pescara1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara1.jpg";
import pescara2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara2.jpg";
import pescara3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara3.jpg";
import pescara4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara4.jpg";
import pescara5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara5.jpg";
import pescara6 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara6.jpg";
import pescara11 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara1.jpg";
import pescara22 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara2.jpg";
import pescara33 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara3.jpg";
import pescara44 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara4.jpg";
import pescara55 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara5.jpg";
import pescara66 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SubotickaPescara = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();
  console.log(switchLanguage)

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
            ? 'Subotička Peščara | Zaštićena priroda i retke vrste u Vojvodini | Serbia Wonders'
            : 'Subotica Sandlands | Protected Nature and Rare Species in Vojvodina | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Subotička peščara, jedinstveno prirodno područje na severu Bačke, dom šafranjike i 170 vrsta ptica. Idealna za ljubitelje prirode, biciklizam, šetnje i ekoturizam.'
              : 'Subotica Sandlands, a unique protected area in northern Bačka, home to saffron crocus and 170 bird species. Perfect for nature lovers, hiking, biking, and ecotourism.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Subotička peščara, priroda Vojvodine, zaštićena područja, šafranjika, biljne vrste, staništa ptica, ekoturizam, biciklizam, pešačke ture, Subotica priroda'
              : 'Subotica sandlands, Vojvodina nature, protected areas, saffron crocus, bird habitats, plant species, ecotourism Serbia, biking Subotica, hiking trails, nature in Serbia'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/suboticka-pescara`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/suboticka-pescara"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/suboticka-pescara"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/suboticka-pescara"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(servernoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${pescara11} 450w, ${pescara1} `} alt="Suboticka Pescara 1" />

        {switchLanguage  === 'rs' ?
          (
            <>
              <h1>
                Suboticka Peščara
              </h1>

              <section lang="sr">
                <p>
                  <strong>Subotička peščara</strong> se nalazi na severu Bačke, a predstavlja krajnji južni deo velike peščarske površine u međurečju Dunava i Tise, koja se najvećim delom prostire u susednoj Mađarskoj.
                </p>
                <p>
                  Zaštićeno područje je sa severne strane ograničeno državnom granicom prema Mađarskoj, a na jugu rubnim delovima naselja Subotica, Palić i Kelebija.
                </p>
                <p>
                  Površina peščare je <strong>5.369,90 ha</strong> i ima izdužen oblik generalnog pravca pružanja <em>istok - zapad</em>.
                </p>
              </section>

              <img srcSet={`${pescara44} 450w, ${pescara4} `} alt="Suboticka Pescara 2" />

              <section lang="sr">
                <p>
                  Ovo područje ima karakter <strong>šumo-stepe</strong>, sa šumskim kompleksima, većinom antropogenog porekla.
                </p>
                <p>
                  Prirodna vrednost je uslovljena karakterom i mozaičnošću staništa, među kojima peščarska, stepska i močvarna, daju osnovni pečat predelu sa visokim stepenom <strong>biodiverziteta</strong>.
                </p>
                <p>
                  Najznačajnija su <strong>vlažna staništa</strong> formirana na podlozi nizijskog treseta u dolini rečice Kireš, koja se smatraju najređim i najugroženijim staništima u Evropi i svetu.
                </p>
              </section>

              <img srcSet={`${pescara22} 450w, ${pescara2} `} alt="Suboticka Pescara 3" />

              <section lang="sr">
                <p>
                  Flora i vegetacija ovog područja čine mozaik šumskih zajedica i stepskih fitocenoza.
                </p>
                <p>
                  Od drvenastih vrsta to su pre svega autohtone sastojine <em>hrasta lužnjaka</em> i manje oaze <em>bele i sive topole</em>, a zatim i zasadi bagrema koji imaju pre svega ulogu da uspore vetar i koliko je to moguće vežu pesak.
                </p>
                <p>
                  Samonikli biljni svet travnog pokrivača ovog prirodnog dobra predstavljen je raznim tipovima vegetacije: <strong>peščarskom, stepskom, livadskom i močvarnom</strong>.
                </p>
                <p>
                  Od mnogobrojnih ovde prisutnih zeljastih vrsta one koje su vezane za peščarske uslove i rastu samo u Subotičkoj peščari su: borbaševa tamnocrvena kalužđerka (<em>Epipactis atrorubens subsp. borbssii</em>), kasni peščarski karanfil (<em>Dianthus serotinus</em>), peščarska perunika (<em>Iris arenaria</em>) i naravno šafranjika (<em>Bulbocodium versicolor</em>) koja je sinonim za ovu peščaru.
                </p>
              </section>

              <img srcSet={`${pescara33} 450w, ${pescara3} `} alt="Suboticka Pescara 4" />

              <section lang="sr">
                <p>
                  Među očuvanim prirodnim retkostima, mora se pomenuti reliktna šumo-stepska biljka – <strong>šafranjika</strong>, koja je sinonim za floru Subotičke peščare, s obzirom da je tu njeno jedino nalazište u Vojvodini i Srbiji.
                </p>
                <p>
                  Ukupan broj zabeleženih vrsta ptica na području iznosi čak <strong>170 vrsta</strong>, što je rezultat velike raznovrsnosti staništa.
                </p>
              </section>

              <img
                srcSet={`${pescara55} 450w, ${pescara5} `}
                alt="Suboticka Pescara 5"
              />

              <section lang="sr">
                <p>
                  <strong>Peščara</strong> je sve popularnija destinacija za ljubitelje prirode, turiste, istraživače i ljubitelje ekologije zbog svoje lepote i jedinstvene prirodne sredine.
                </p>
                <p>
                  Posetioci mogu uživati u pešačenju, biciklizmu, fotografiji prirode i posmatranju ptica.
                </p>
              </section>

            </>
          )
          :
          (

            <>
              <h1>
                Subotica Sandhills
              </h1>

              <section lang="en">
                <p>
                  The <strong>Subotica Sandhills</strong> are located in the northern part of Bačka, representing the southernmost section of a large sandy area between the Danube and Tisa rivers, which mostly extends into neighboring Hungary.
                </p>
                <p>
                  The protected area is bordered to the north by the state border with Hungary, and to the south by the outskirts of the settlements Subotica, Palić, and Kelebija.
                </p>
                <p>
                  The sandhills cover an area of <strong>5,369.90 hectares</strong> and have an elongated shape with a general east-west orientation.
                </p>
              </section>

              <img srcSet={`${pescara44} 450w, ${pescara4} `} alt="Subotica Sandhills 2" />

              <section lang="en">
                <p>
                  This area has the character of <strong>forest-steppe</strong>, with forest complexes mostly of anthropogenic origin.
                </p>
                <p>
                  Its natural value is defined by the character and mosaic of habitats, among which sandy, steppe, and swamp habitats give the region its distinctive mark with a high degree of <strong>biodiversity</strong>.
                </p>
                <p>
                  The most significant are the <strong>wet habitats</strong> formed on lowland peat substrates in the valley of the Kireš stream, considered some of the rarest and most endangered habitats in Europe and the world.
                </p>
              </section>

              <img srcSet={`${pescara22} 450w, ${pescara2} `} alt="Subotica Sandhills 3" />

              <section lang="en">
                <p>
                  The flora and vegetation of this area form a mosaic of forest communities and steppe phytocoenoses.
                </p>
                <p>
                  Among the woody species are primarily native stands of <em>pedunculate oak</em> and small oases of <em>white and grey poplar</em>, as well as acacia plantations that mainly serve to slow the wind and bind the sand as much as possible.
                </p>
                <p>
                  The spontaneous herbaceous vegetation of this natural area is represented by various types of vegetation: <strong>sandy, steppe, meadow, and swamp</strong>.
                </p>
                <p>
                  Among the numerous herbaceous species present here, those linked to sandy conditions and growing only in the Subotica Sandhills are: borbaševa dark-red marsh helleborine (<em>Epipactis atrorubens subsp. borbssii</em>), late sandy carnation (<em>Dianthus serotinus</em>), sandy iris (<em>Iris arenaria</em>), and of course crocus meadow saffron (<em>Bulbocodium versicolor</em>), which is a synonym for this sandhill area.
                </p>
              </section>

              <img srcSet={`${pescara33} 450w, ${pescara3} `} alt="Subotica Sandhills 4" />

              <section lang="en">
                <p>
                  Among the preserved natural rarities, the relic forest-steppe plant – the <strong>crocus meadow saffron</strong> – must be mentioned, as it is a symbol of the flora of the Subotica Sandhills, being its only known habitat in Vojvodina and Serbia.
                </p>
                <p>
                  The total number of recorded bird species in the area reaches as many as <strong>170 species</strong>, a result of the great diversity of habitats.
                </p>
              </section>

              <img
                srcSet={`${pescara55} 450w, ${pescara5} `}
                alt="Subotica Sandhills 5"
              />

              <section lang="en">
                <p>
                  The <strong>Sandhills</strong> are becoming an increasingly popular destination for nature lovers, tourists, researchers, and ecology enthusiasts due to their beauty and unique natural environment.
                </p>
                <p>
                  Visitors can enjoy hiking, cycling, nature photography, and bird watching.
                </p>
              </section>
            </>
          )}

      </div>
    </>
  );
};


export default SubotickaPescara;