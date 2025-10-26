/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import urosevac1 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/desktop/urosevac1.jpg";
import urosevac2 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/desktop/urosevac2.jpg";
import urosevac3 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/desktop/urosevac3.jpg";
import urosevac4 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/desktop/urosevac4.jpg";
import urosevac5 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/desktop/urosevac5.jpg";
import urosevac11 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/mobile/Murosevac1.jpg";
import urosevac22 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/mobile/Murosevac2.jpg";
import urosevac33 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/mobile/Murosevac3.jpg";
import urosevac44 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/mobile/Murosevac4.jpg";
import urosevac55 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Urosevac/mobile/Murosevac5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { urosevackiOkrugPathRoutes } from "./UrosevackiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Urosevac = () => {
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

        <title>{switchLanguage === 'rs' ? "Uroševac – Istorijski i prirodni biser | Serbia Wonders" : "Uroševac – Historical and Natural Jewel | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Grad Uroševac bogate istorije i prirodnih fenomena, poznat po bifurkaciji reke Nerodimke, starim kulturama i modernom aqua parku. Saznajte više o ovom važnom centru Kosova i Metohije."
            :
            "Uroševac city with rich history and natural phenomena, known for the Nerodimka river bifurcation, ancient cultures, and a modern aqua park. Discover more about this key center of Kosovo and Metohija."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Uroševac, Kosovo i Metohija, bifurkacija reke, Nerodimka, istorija Uroševca, aqua park Uroševac, kulturna baština, priroda Kosova"
            :
            "Uroševac, Kosovo and Metohija, river bifurcation, Nerodimka, Uroševac history, aqua park Uroševac, cultural heritage, Kosovo nature"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/urosevac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/urosevac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/urosevac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/urosevac"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(urosevackiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${urosevac11} 450w, ${urosevac1} `} alt="Prizren 1" loading="lazy" />

        <h1>Uroševac</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p> Grad <strong>Uroševac</strong> je bio naseljen još od praistorije, što potvrđuju tragovi kultura kao što su <strong>Starčevo</strong>, <strong>Vinča</strong> i <strong>Baden</strong>. Tokom osmanskog perioda, Uroševac je bio važan trgovački centar na ruti između <strong>Beograda</strong> i <strong>Soluna</strong>. Kroz istoriju, grad je bio poznat po verskoj i kulturnoj toleranciji, gde su različite zajednice živele u suživotu. Nakon konflikta 1999. godine, u blizini grada je izgrađena američka vojna baza <strong>Bondstil</strong>. To je najveća i najskuplja strana vojna baza koju su <strong>Sjedinjene Američke Države</strong> podigle u jugoistočnoj Evropi još od vremena <strong>Vijetnamskog rata</strong>. </p>
              </section>

              <img srcSet={`${urosevac22} 450w, ${urosevac2}`} alt="Prizren 2" loading="lazy" />

              <section lang="sr">
                <p> Uroševac je poznat i po jedinstvenom geografskom fenomenu – bifurkaciji reke. Reka <strong>Nerodimka</strong> se u jednom delu svog toka razdvaja na dve grane koje završavaju u različitim morima, što predstavlja retku hidrografsku pojavu u svetu. Grad se nalazi na južnom obodu <strong>Kosovske kotline</strong>, u podnožju <strong>Šar-planine</strong>, na nadmorskoj visini od <strong>573 metra</strong>. Smešten je na obalama reke Nerodimke i leži na važnoj saobraćajnoj magistrali koja povezuje <strong>Prištinu</strong> i <strong>Skoplje</strong>. Ova geografska pozicija doprinosi strateškom značaju grada u regionu. </p>
              </section>

              <img srcSet={`${urosevac33} 450w, ${urosevac3}`} alt="Kameni most u Prizrenu" loading="lazy" />

              <section lang="sr">
                <p> Grad, koji je tokom osmanske vladavine nosio ime <strong>Ferizović</strong>, bio je tek malo veće selo sve do 1873. godine, kada je kroz njega prošla železnica na pravcu <strong>Beograd–Solun</strong>. Tada je započeo njegov brži razvoj. Ime Ferizović potiče od hotela koji je postojao pre izgradnje pruge, a bio je u vlasništvu <strong>Feriza Šasivarija</strong>. <br /> <br /> Najstarija etno-kulturna zajednica koja je naseljavala prostor <strong>Kosova i Metohije</strong> u 6. i 5. milenijumu pre nove ere bila je kultura <strong>Starčeva</strong>. Njeni pripadnici gradili su naselja pored reka i na rečnim terasama, a kuće su pravili od pruća i blata. Bili su pretežno zemljoradnici i bavili se oranjem i uzgojem biljaka. </p>
              </section>

              <img srcSet={`${urosevac55} 450w, ${urosevac5}`} alt="Prizrenska Bogoslovija" loading="lazy" />

              <section lang="sr">
                <p> Nakon <strong>Starčevačke kulture</strong>, na teritoriji Kosova i Metohije nastanjuje se <strong>Vinska kultura</strong>, koja je došla oko 4300. godine pre nove ere. Novi doseljenici su, kao i prethodnici, gradili svoja naselja u blizini reka. Njihova naselja su bila neuredna, sa gustim redovima vrba i kućama od blata. Ostatci njihove materijalne kulture, prepoznatljivi po različitim oblicima keramike i brojnim figurama od pečene gline, ukazuju na visoki nivo razvijenosti njihove kulture. <br /> <br /> Nakon Vinske kulture, usledila je kultura <strong>Bubanji-Ham</strong>, koja je došla sa istoka, sa područja današnje <strong>Bugarske</strong>. Ova etno-kulturna grupa je, dolaskom u region pre kraja 6. milenijuma pre nove ere, uništila naselja Vinske kulture. Ostatci njihove materijalne kulture nisu sačuvani do današnjih dana. </p>
              </section>

              <img srcSet={`${urosevac44} 450w, ${urosevac4}`} alt="Bogorodica Ljeviška" loading="lazy" />

              <section lang="sr">
                <p> <strong>Aqua park u Uroševcu</strong> je popularno odredište za sve ljubitelje vodenih sportova i uživanja u vodi. Sa brojnim bazenima, toboganima i drugim sadržajima, idealan je za porodične izlete i opuštanje u letnjim mesecima. Pored toga, aqua park nudi i razne sadržaje za decu, kao i restorane i kafiće za uživanje u osvežavajućim napicima i obrocima. </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en">
                <p> The city of <strong>Uroševac</strong> has been inhabited since prehistoric times, as evidenced by traces of cultures such as <strong>Starčevo</strong>, <strong>Vinča</strong>, and <strong>Baden</strong>. During the Ottoman period, Uroševac was an important trading center on the route between <strong>Belgrade</strong> and <strong>Thessaloniki</strong>. Throughout history, the city was known for religious and cultural tolerance, where different communities lived in coexistence. After the 1999 conflict, a U.S. military base called <strong>Bondsteel</strong> was built near the city. It is the largest and most expensive foreign military base that the <strong>United States</strong> has established in Southeastern Europe since the <strong>Vietnam War</strong>. </p>
              </section>

              <img srcSet={`${urosevac22} 450w, ${urosevac2}`} alt="Prizren 2" loading="lazy" />

              <section lang="en">
                <p> Uroševac is also known for a unique geographical phenomenon – the bifurcation of a river. The <strong>Nerodimka</strong> River splits into two branches at one point in its course, each flowing into different seas, which is a rare hydrographic occurrence worldwide. The city is located on the southern edge of the <strong>Kosovo Basin</strong>, at the foothills of the <strong>Šar Mountains</strong>, at an altitude of <strong>573 meters</strong>. It lies on the banks of the Nerodimka River and is situated on an important transport route connecting <strong>Pristina</strong> and <strong>Skopje</strong>. This geographical position contributes to the city's strategic significance in the region. </p>
              </section>

              <img srcSet={`${urosevac33} 450w, ${urosevac3}`} alt="Stone bridge in Prizren" loading="lazy" />

              <section lang="en">
                <p> The city, which during Ottoman rule was known as <strong>Ferizović</strong>, was just a small village until 1873, when the railway line connecting <strong>Belgrade–Thessaloniki</strong> was built through it. This marked the beginning of its faster development. The name Ferizović comes from a hotel that existed before the railway was constructed, owned by <strong>Feriz Šasivari</strong>. <br /> <br /> The oldest ethno-cultural community inhabiting the territory of Kosovo and Metohija in the 6th and 5th millennia BCE was the <strong>Starčevo culture</strong>. Its members built settlements near rivers and on river terraces, with houses made of wicker and mud. They were predominantly farmers, engaged in plowing and plant cultivation. </p>
              </section>

              <img srcSet={`${urosevac55} 450w, ${urosevac5}`} alt="Prizren Seminary" loading="lazy" />

              <section lang="en">
                <p> After the Starčevo culture, the <strong>Vinča culture</strong> settled in the territory of Kosovo and Metohija around 4300 BCE. The new settlers, like their predecessors, built their settlements near rivers. Their settlements were irregular, with dense rows of willows and houses made of mud. Remnants of their material culture, recognizable by various forms of pottery and numerous fired clay figurines, indicate a high level of cultural development. <br /> <br /> Following the Vinča culture, the <strong>Bubanji-Ham culture</strong> arrived from the east, from the area of present-day <strong>Bulgaria</strong>. This ethno-cultural group, arriving in the region before the end of the 6th millennium BCE, destroyed the settlements of the Vinča culture. Remnants of their material culture have not been preserved to this day. </p>
              </section>

              <img srcSet={`${urosevac44} 450w, ${urosevac4}`} alt="Church of Our Lady of Ljeviša" loading="lazy" />

              <section lang="en">
                <p> The Aqua Park in Uroševac is a popular destination for all water sports enthusiasts and those who enjoy spending time in the water. With numerous pools, slides, and other facilities, it is ideal for family outings and relaxation during the summer months. Additionally, the aqua park offers various activities for children, as well as restaurants and cafes for enjoying refreshing drinks and meals. </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default Urosevac;