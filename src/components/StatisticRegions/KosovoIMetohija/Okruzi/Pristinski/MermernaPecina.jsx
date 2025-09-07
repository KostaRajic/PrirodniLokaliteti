/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import mermernaPecina1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/MermernaPecina/desktop/mermernaPecina1.jpg";
import mermernaPecina2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/MermernaPecina/desktop/mermernaPecina2.jpg";
import mermernaPecina3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/MermernaPecina/desktop/mermernaPecina3.jpg";
import mermernaPecina11 from "../../../../../assets/images/KosovoIMetohija/Pristinski/MermernaPecina/mobile/MmermernaPecina1.jpg";
import mermernaPecina22 from "../../../../../assets/images/KosovoIMetohija/Pristinski/MermernaPecina/mobile/MmermernaPecina2.jpg";
import mermernaPecina33 from "../../../../../assets/images/KosovoIMetohija/Pristinski/MermernaPecina/mobile/MmermernaPecina3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const MermernaPecina = () => {
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

        <title>{switchLanguage === 'rs' ? "Mermerna Pećina – Prirodni biser kod Lipljana | Serbia Wonders" : "Marble Cave – Natural Jewel near Lipljan | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Mermerna pećina kod Lipljana je jedinstveni prirodni fenomen, sa lavirintom od mermernih litica, stalaktitima i pećinskim jezerima, otvorena za posetioce."
            :
            "Marble Cave near Lipljan is a unique natural phenomenon featuring a labyrinth of marble cliffs, stalactites, and cave lakes, open to visitors."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Mermerna pećina, Lipljan, priroda Kosovo, pećinski lavirint, stalaktiti, stalagmiti, pećinska jezera, turizam Kosovo"
            :
            "Marble Cave, Lipljan, nature Kosovo, cave labyrinth, stalactites, stalagmites, cave lakes, Kosovo tourism"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/mermerna-pecina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/mermerna-pecina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/mermerna-pecina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/mermerna-pecina"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pristinskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${mermernaPecina11} 450w, ${mermernaPecina1} `} alt="Mermerna Pećina 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Mermerna Pećina</h2>

              <section lang="sr">
                <p>
                  <strong>Mermerna pećina</strong> se nalazi u opštini <strong>Lipljan</strong>, u selu <strong>Donja Gadimlja</strong>, oko <strong>20 km</strong> južno od <strong>Prištine</strong> i <strong>360 km</strong> od <strong>Beograda</strong>. Pećina se smešta na jugoistočnim padinama <strong>Kopaoničkog masiva</strong>, konkretno na planini <strong>Žegovac</strong>. Otvor pećine je na visini od <strong>590 metara</strong> nadmorske visine, iznad korita <strong>Gadimske reke</strong>. Ime je dobila po mermeru, odnosno krečnjaku od kojeg je nastala, a stene koje je čine potiču iz <em>Paleozoika</em>. Za posetioce je uređeno <strong>440 metara</strong> kanala, dok ukupna dužina pećine iznosi <strong>1.260 metara</strong>.
                </p>
              </section>

              <img srcSet={`${mermernaPecina22} 450w, ${mermernaPecina2} `} alt="Mermerna Pećina 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Pećina je slučajno otkrivena <em>1969.</em> godine, prilikom vađenja građevinskog kamena, ali je u to vreme bila uglavnom ispunjena glinom. Da bi bila prilagođena za turizam, veliki deo nanosa je uklonjen, što je dovelo do promene mikroklime. Temperatura u pećini varira od <strong>10 do 15°C</strong>, u zavisnosti od galerije. Pećina ima četiri galerije. Ulazna galerija se sastoji od dva horizonta, ukupne dužine <strong>180 metara</strong>. Zapadna galerija je u obliku lavirinta, sa glavnim kanalom i nekoliko većih i manjih proširenja, ukupne dužine <strong>220 metara</strong>. Severna galerija sadrži brojne hodnike, kanale i dvorane, a u jednoj od dvorana nalazi se basen <strong>Kristalnog jezera</strong>. Istočna galerija obuhvata <strong>Dugi</strong> i <strong>Plavi kanal</strong> (koji je dobio ime po nakitu plave boje).
                </p>
              </section>

              <img srcSet={`${mermernaPecina33} 450w, ${mermernaPecina3} `} alt="Mermerna Pećina 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Mermerna pećina</strong> je jedinstven prirodni fenomen, jer je formirana od mermernih litica koje su nastale metamorfozom krečnjaka, a ukrasi variraju u bojama od bele do crvene. Pećina podseća na pravi lavirint, sa brojnim kanalima koji su ispunjeni stalaktitima, stalagmitima, kalcitnim stubovima i bigrenim basenima. Posebnu pažnju privlači aragonitski nakit snežno bele boje. Pećinska jezera se nalaze gotovo svuda u pećini, ukupno <strong>29</strong>. Takođe, postoje i dva podzemna toka – jedan u <strong>Dvorani suza</strong>, a drugi u <strong>Zapadnoj galeriji</strong>. Ovi tokovi su kanalisani, a njihove vode izlaze u <strong>Gadimsku reku</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Marble Cave</h2>

              <section lang="en">
                <p>
                  The <strong>Marble Cave</strong> is located in the municipality of <strong>Lipljan</strong>, in the village of <strong>Donja Gadimlja</strong>, about <strong>20 km</strong> south of <strong>Pristina</strong> and <strong>360 km</strong> from <strong>Belgrade</strong>. The cave is situated on the southeastern slopes of the <strong>Kopaonik massif</strong>, specifically on the <strong>Žegovac</strong> mountain. The cave entrance is at an altitude of <strong>590 meters</strong> above sea level, above the bed of the <strong>Gadimska River</strong>. It is named after the marble, or limestone from which it formed, and the rocks that make it up date back to the <em>Paleozoic</em> era. For visitors, <strong>440 meters</strong> of passages have been arranged, while the total length of the cave is <strong>1,260 meters</strong>.
                </p>
              </section>

              <img srcSet={`${mermernaPecina22} 450w, ${mermernaPecina2} `} alt="Marble Cave 2" loading="lazy" />

              <section lang="en">
                <p>
                  The cave was accidentally discovered in <em>1969</em> during the extraction of building stone but was mostly filled with clay at that time. To adapt it for tourism, a large amount of sediment was removed, which led to a change in the microclimate. The temperature inside the cave ranges from <strong>10 to 15°C</strong>, depending on the gallery. The cave has four galleries. The entrance gallery consists of two levels, with a total length of <strong>180 meters</strong>. The western gallery is labyrinth-shaped, with a main passage and several larger and smaller expansions, totaling <strong>220 meters</strong> in length. The northern gallery contains numerous corridors, channels, and halls, and in one of the halls lies the pool of the <strong>Crystal Lake</strong>. The eastern gallery includes the <strong>Long</strong> and <strong>Blue channel</strong> (named after its blue-colored formations).
                </p>
              </section>

              <img srcSet={`${mermernaPecina33} 450w, ${mermernaPecina3} `} alt="Marble Cave 3" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Marble Cave</strong> is a unique natural phenomenon because it is formed from marble cliffs created by the metamorphosis of limestone, and the decorations vary in color from white to red. The cave resembles a true labyrinth, with numerous passages filled with stalactites, stalagmites, calcite columns, and travertine pools. Special attention is drawn to the snow-white aragonite formations. Cave lakes are found almost everywhere inside the cave, totaling <strong>29</strong>. There are also two underground streams – one in the <strong>Hall of Tears</strong>, and the other in the <strong>Western gallery</strong>. These streams are channeled, and their waters flow into the <strong>Gadimska River</strong>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default MermernaPecina;