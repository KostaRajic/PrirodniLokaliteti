/* eslint-disable react/no-unknown-property */
import vd1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/desktop/pasnjaciVD1.jpg";
import vd2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/desktop/pasnjaciVD2.jpg";
import vd3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/desktop/pasnjaciVD3.jpg";
import vd4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/desktop/pasnjaciVD4.jpg";
import droplja1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/Mdroplja2.jpg";
import droplja2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/Mdroplja3.jpg";
import droplja3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/Mdroplja4.jpg";
import droplja4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/Mdroplja5.jpg";
import vd11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/MpasnjaciVD1.jpg";
import vd22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/MpasnjaciVD2.jpg";
import vd33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/MpasnjaciVD3.jpg";
import vd44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/MpasnjaciVD4.jpg";
import droplja11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/Mdroplja2.jpg";
import droplja22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/Mdroplja3.jpg";
import droplja33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/Mdroplja4.jpg";
import droplja44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/PasnjaciVelikeDroplje/mobile/Mdroplja5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";


const RezervatVelikeDroplje = () => {
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
            ? 'Specijalni rezervat Pašnjaci Velike Doplje | Priroda severnog Banata | Serbia Wonders'
            : 'Special Reserve Pašnjaci Velike Doplje | Nature of Northern Banat | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Specijalni rezervat Pašnjaci Velike Doplje je poslednje stanište ugrožene velike droplje u Srbiji, sa bogatom florom i faunom severnog Banata.'
              : 'Special Reserve Pašnjaci Velike Doplje is the last habitat of the endangered great bustard in Serbia, featuring rich flora and fauna of Northern Banat.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Specijalni rezervat Pašnjaci Velike Doplje, velika droplja, zaštićene ptice, priroda Banata, severni Banat, rezervat prirode Srbija, stanište ptica'
              : 'Special Reserve Pašnjaci Velike Doplje, great bustard, protected birds, Banat nature, Northern Banat, nature reserve Serbia, bird habitats'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/rezervat-velike-droplje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/rezervat-velike-droplje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/rezervat-velike-droplje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/rezervat-velike-droplje"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(severnoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${vd11} 450w, ${vd1} `} alt="Rezervat Velike Droplje 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h1>Specijalni rezervat "Pašnjaci Velike Doplje"</h1>

              <section lang="sr">
                <p>
                  <strong>Specijalni rezervat Pašnjaci velike droplje</strong> nalazi se na severu Banata, na prostranoj aluvijalnoj ravni reke <strong>Zlatice</strong>, između novokneževačke i krsturko-siriške lesne terase. Rezervat čine tri odvojene celine. Najveći je <strong>Jaroš</strong> (tromeđa sela Mokrin, Jazovo i Sajan), zatim <strong>Siget</strong> (pored Banatskog Aranđelova) i najmanji <strong>Kočovat</strong> (pored sela Vrbiца).
                </p>
              </section>

              <img srcSet={`${vd22} 450w, ${vd2} `} alt="Rezervat Velike Droplje 2" />

              <section lang="sr">
                <p>
                  Osnovni značaj <strong>Specijalnog rezervata Pašnjaci velike droplje</strong> je što se u njemu nalazi poslednja populacija velike droplje (<em>lat. Otis tarda</em>) u Srbiji. Ova vrsta nalazi se na „Crvenoj listi“ ugroženih vrsta i strogo je zaštićena u Srbiji. Procenuje se da je početkom 20. veka u Vojvodini živelo preko 1000 jedinki velike droplje.
                </p>
              </section>

              <div
                className="fourImages"
              >
                <img srcSet={`${droplja11} 450w, ${droplja1} `} alt="Velika droplja 1" />
                <img srcSet={`${droplja22} 450w, ${droplja2} `} alt="Velika droplja 2" />
                <img srcSet={`${droplja33} 450w, ${droplja3} `} alt="Velika droplja 3" />
                <img srcSet={`${droplja44} 450w, ${droplja4} `} alt="Velika droplja 4" />
              </div>


              <section lang="sr">
                <p>
                  Pored velike droplje, rezervat je stanište i sledećih vrsta ptica: <em>eja livadarka</em>, <em>siva vetruška</em>, <em>stepski sokol</em>, <em>prepelica</em>, <em>ždral</em>, <em>ritska sova</em>, <em>pupavac</em>, <em>modrovrana</em>, <em>stepska trepteljka</em>, <em>žuta pliska</em>, <em>obična beloguza</em>, <em>obična travarka</em>, <em>rusi svračak</em>, <em>sivi svračak</em> i <em>velika strnadica</em>.
                </p>
              </section>

              <img src={vd3} alt="Rezervat Velike Droplje 3" />

              <section lang="sr">
                <p>
                  Najveću površinu Rezervata zauzima slatinsko zemljište, pa je i vegetacija slatinska. Biljne zajednice <em>devesilje</em> (<em>Peucedanum officinale</em>) i zvezdana, "slanice" (<em>Tripolium pannonicum</em>) posebno se ističu na ovom području.
                </p>
              </section>

              <img
                srcSet={`${vd44} 450w, ${vd4} `}
                alt="Rezervat Velike Droplje 4"
              />

              <section lang="sr">
                <p>
                  Danas je njihov broj spao na par desetina jedinki. Područje rezervata predstavlja kombinaciju ravničarskih steppskih, slatinskih i barskih ekosistema. To je očuvani panonski predel sa velikim brojem zaštićenih biljnih i životinjskih vrsta.
                </p>
              </section>

            </>
          )
          :
          (
            <>
              <h1>Special Reserve "Pastures of the Great Bustard"</h1>

              <section lang="en">
                <p>
                  The <strong>Special Reserve Pastures of the Great Bustard</strong> is located in the northern part of Banat, on the vast alluvial plain of the <strong>Zlatica</strong> River, between the Novokneževo and Krsturko-Siriška loess terraces. The reserve consists of three separate areas. The largest is <strong>Jaroš</strong> (the tri-border area of the villages Mokrin, Jazovo, and Sajan), followed by <strong>Siget</strong> (near Banatski Aranđelov), and the smallest is <strong>Kočovat</strong> (near the village of Vrbiца).
                </p>
              </section>

              <img srcSet={`${vd22} 450w, ${vd2} `} alt="Great Bustard Reserve 2" />

              <section lang="en">
                <p>
                  The main significance of the <strong>Special Reserve Pastures of the Great Bustard</strong> is that it is home to the last population of the great bustard (<em>lat. Otis tarda</em>) in Serbia. This species is listed on the “Red List” of endangered species and is strictly protected in Serbia. It is estimated that at the beginning of the 20th century, over 1000 great bustards lived in Vojvodina.
                </p>
              </section>

              <div className="fourImages">
                <img srcSet={`${droplja11} 450w, ${droplja1} `} alt="Great Bustard 1" />
                <img srcSet={`${droplja22} 450w, ${droplja2} `} alt="Great Bustard 2" />
                <img srcSet={`${droplja33} 450w, ${droplja3} `} alt="Great Bustard 3" />
                <img srcSet={`${droplja44} 450w, ${droplja4} `} alt="Great Bustard 4" />
              </div>

              <section lang="en">
                <p>
                  Besides the great bustard, the reserve is also habitat to the following bird species: <em>harrier</em>, <em>montagu’s harrier</em>, <em>steppe falcon</em>, <em>quail</em>, <em>crane</em>, <em>long-eared owl</em>, <em>corncrake</em>, <em>robin</em>, <em>steppe lark</em>, <em>yellow wagtail</em>, <em>white wagtail</em>, <em>common grasshopper warbler</em>, <em>rusty blackbird</em>, <em>grey blackbird</em>, and <em>large bunting</em>.
                </p>
              </section>

              <img src={vd3} alt="Great Bustard Reserve 3" />

              <section lang="en">
                <p>
                  The largest area of the reserve is covered by salt marsh soil, so the vegetation is salt marsh type. Plant communities of <em>hog’s fennel</em> (<em>Peucedanum officinale</em>) and sea aster, “saltwort” (<em>Tripolium pannonicum</em>) are especially notable in this area.
                </p>
              </section>

              <img srcSet={`${vd44} 450w, ${vd4} `} alt="Great Bustard Reserve 4" />

              <section lang="en">
                <p>
                  Today, their numbers have dropped to a few dozen individuals. The reserve area represents a combination of flat steppe, salt marsh, and swamp ecosystems. It is a preserved Pannonian region with a large number of protected plant and animal species.
                </p>
              </section>
            </>
          )}

      </div>
    </>
  );
};


export default RezervatVelikeDroplje;