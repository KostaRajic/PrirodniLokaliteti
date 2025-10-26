/* eslint-disable react/no-unknown-property */
import senta1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/desktop/senta2.jpg";
import senta2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/desktop/senta3.jpg";
import senta3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/desktop/senta4.jpg";
import senta4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/desktop/senta5.jpg";
import senta11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/mobile/Msenta2.jpg";
import senta22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/mobile/Msenta3.jpg";
import senta33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/mobile/Msenta4.jpg";
import senta44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/mobile/Msenta5.jpg";

import stevanSremac from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MstevanSremac2.jpg";
import jovanDjordjevic from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MjovanDjordjevic2.jpg";
import bistaTotIštvana from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MbistaTotIštvana2.jpg";
import svJovan from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MsvJovan2.jpg";
import zrtve1944 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/Mzrtve19442.jpg";
import skeledzija from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MstatuaSkeledzije2.jpg";
import stevanSremac1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MstevanSremac2.jpg";
import jovanDjordjevic1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MjovanDjordjevic2.jpg";
import bistaTotIštvana1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MbistaTotIštvana2.jpg";
import svJovan1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MsvJovan2.jpg";
import zrtve19441 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/Mzrtve19442.jpg";
import skeledzija1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MstatuaSkeledzije2.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useRef, useState } from "react";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";

const Senta = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>

      <Helmet>
        <title>
          {switchLanguage === 'rs'
            ? 'Opština Senta | Kulturna baština i priroda Vojvodine | Serbia Wonders'
            : 'Municipality of Senta | Cultural Heritage and Nature of Vojvodina | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Opština Senta smeštena je u severnoj Vojvodini, na obali reke Tise. Upoznajte njene kulturne spomenike, parkove i prirodne lepote.'
              : 'The Municipality of Senta is located in northern Vojvodina on the banks of the Tisa River. Discover its cultural monuments, parks, and natural beauty.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Senta, Vojvodina, Tisa, kulturna baština, parkovi, priroda, pravoslavna crkva, spomenici, Srbija'
              : 'Senta, Vojvodina, Tisa, cultural heritage, parks, nature, Orthodox church, monuments, Serbia'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/senta`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/senta"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/senta"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/senta"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(severnoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${senta33} 450w, ${senta3} `} alt="Senta 1" />

        <h1>Senta</h1>

        {switchLanguage === 'rs' ?
          (
            <>
              <section lang="sr">
                <p>
                  <strong>Opština Senta</strong> nalazi se u Srbiji, u severnom delu Autonomne Pokrajine <strong>Vojvodine</strong>, 42 km južno od srpsko-mađarske granice, na desnoj obali reke <strong>Tise</strong>.
                </p>
                <p>
                  Površina opštine Senta iznosi <strong>283,5 km²</strong>. U pravcu sever-jug najviše je široka <strong>13 km</strong>, a u pravcu istok-zapad najveća dužina je <strong>28,5 km</strong>.
                </p>
                <p>
                  Opštini Senta administrativno pripadaju još četiri naselja seoskog tipa: <strong>Gornji Breg</strong>, <strong>Bogaraš</strong>, <strong>Tornjoš</strong> i <strong>Kevi</strong>.
                </p>
              </section>

              <img srcSet={`${senta11} 450w, ${senta1} `} alt="Senta 2" />

              <section lang="sr">
                <p>
                  Zgrada izgrađena u <strong>secesionom stilu</strong> koja gleda na glavni trg je glavna karakteristika panorame grada. Masivni toranj, visok skoro <strong>50 metara</strong>, deluje pomalo romantično, međutim, u ukrasima nosi na sebi znakove secesije.
                </p>
                <p>
                  Ukrasno stepenište i skupštinska sala su takođe u secesionom stilu. Spektakularniji unutrašnji prostor zgrade je bogato ukrašena galerija u stepeništu, koja sa unikatnim, fascinantnim rešenjima galeriju čini najlepšim delom zgrade.
                </p>
                <p>
                  Iz tornja se pruža zadivljujući pogled na grad i njegovu okolinu.
                </p>
              </section>

              <img srcSet={`${senta22} 450w, ${senta2} `} alt="Senta 3" />

              <section lang="sr">
                <p>
                  U Senti postoje nekoliko <strong>parkova i zelenih površina</strong>, među kojima se izdvaja <strong>Gradski park</strong>, popularno mesto za šetnje i odmor. Takođe, u centru Sente se nalazi manji park sa drvećem i klupama, idealan za opuštanje.
                </p>
                <p>
                  Pored toga, područja uz reku <strong>Tisu</strong> nude prirodne prostore za šetanje i uživanje u prirodi. Ovi parkovi doprinose kvalitetu života u gradu i pružaju miran ambijent za lokalno stanovništvo.
                </p>
              </section>

              <div className="fourImagesSenta">
                <div>
                  <img srcSet={`${jovanDjordjevic1} 450w, ${jovanDjordjevic} `} alt="Jovan Djordjevic" />
                  <p >
                    Jovan Đorđević
                  </p>
                </div>
                <div>
                  <img srcSet={`${svJovan1} 450w, ${svJovan} `} alt="Sveti Jovan" />
                  <p >Sveti Jovan</p>
                </div>
                <div>
                  <img srcSet={`${skeledzija1} 450w, ${skeledzija} `} alt="Skeledzija" />
                  <p>Skeledžija</p>
                </div>
              </div>

              <div className="fourImagesSenta">

                <div>
                  <img srcSet={`${stevanSremac1} 450w, ${stevanSremac} `} alt="Stevan Sremac" />
                  <p >
                    Stevan Sremac
                  </p>
                </div>
                <div>
                  <img srcSet={`${zrtve19441} 450w, ${zrtve1944} `} alt="Zrtve 1944" />
                  <p >
                    Žrtve u drugom svetskom ratu
                  </p>
                </div>
                <div>
                  <img srcSet={`${bistaTotIštvana1} 450w, ${bistaTotIštvana} `} alt="Bista Tot Istvana" />
                  <p>
                    Bista Tot Ištvana
                  </p>
                </div>

              </div>

              <section lang="sr">
                <p>
                  Na teritoriji grada, ali i cele opštine, može se naći srazmerno mali broj statua, odnosno spomenika. <strong>Statua Svetom Jovanu iz Nepomuka</strong> (delo Ištvana Tota, vajara) postavljena je 1914. godine na svoju današnju lokaciju, blizu ulaza na most.
                </p>
                <p>
                  Druga statua koja prikazuje celu figuru je <strong>Skelerdžija</strong> (delo Šandora Dudaša) i nalazi se na keju na Tisinom obali, koju su 2006. godine otkrili predsednici Republike Srbije i Mađarske.
                </p>
                <p>
                  Preko puta ove statue nalazi se poprsje poznatog srpskog književnika, <strong>Stevana Sremca</strong>, koji je rodom iz Sente. Na keju na obali reke <strong>Tise</strong> nalazi se još i poprsje osnivača Srpskog narodnog pozorišta u Novom Sadu i Beogradu, autora sadašnje srpske himne, <strong>Jovana Đorđevića</strong>, koji je takođe rodom iz Sente.
                </p>
              </section><img srcSet={`${senta44} 450w, ${senta4} `} alt="Senta 4" /><section lang="sr">
                <p>
                  <strong>Pravoslavna (srpska) Crkva Svetog Arhangela Mihaila</strong> je važan verski i kulturni spomenik grada. Izgrađena je u baroknom stilu, a njen početak izgradnje datira iz 18. veka, tačnije 1751. godine.
                </p>
                <p>
                  Ova crkva je jedna od najstarijih u Senti i predstavlja značajan deo verske tradicije i istorije grada. Crkva je poznata po svom ikonostasu, koji je prvobitno izrađen 1782. godine, a kasnije je između 1859. i 1862. godine obnovljen i naslikan od strane Pavla Simića, jednog od najpoznatijih predstavnika srpskog romantičnog slikarstva.
                </p>
              </section></>


          )
          :
          (
            <>
              <section lang="en"> <p> <strong>The Municipality of Senta</strong> is located in Serbia, in the northern part of the Autonomous Province of <strong>Vojvodina</strong>, 42 km south of the Serbian-Hungarian border, on the right bank of the <strong>Tisa River</strong>. </p> <p> The area of the Municipality of Senta covers <strong>283.5 km²</strong>. From north to south, it is up to <strong>13 km</strong> wide, and from east to west its greatest length is <strong>28.5 km</strong>. </p> <p> Administratively, the Municipality of Senta also includes four rural settlements: <strong>Gornji Breg</strong>, <strong>Bogaraš</strong>, <strong>Tornjoš</strong>, and <strong>Kevi</strong>. </p> </section>

              <img srcSet={`${senta11} 450w, ${senta1} `} alt="Senta 2" />

              <section lang="en"> <p> The building constructed in the <strong>Secession style</strong> overlooking the main square is the main feature of the city panorama. The massive tower, nearly <strong>50 meters</strong> tall, looks somewhat romantic, yet its decorations bear Secession motifs. </p> <p> The ornate staircase and the assembly hall are also designed in the Secession style. The most spectacular interior part of the building is the richly decorated gallery in the staircase, which, with its unique and fascinating details, makes the gallery the most beautiful part of the building. </p> <p> From the tower, there is a breathtaking view of the city and its surroundings. </p> </section>

              <img srcSet={`${senta22} 450w, ${senta2} `} alt="Senta 3" />

              <section lang="en"> <p> In Senta, there are several <strong>parks and green areas</strong>, among which the <strong>City Park</strong> stands out as a popular place for walks and relaxation. Also, in the center of Senta, there is a smaller park with trees and benches, ideal for resting. </p> <p> In addition, areas along the <strong>Tisa River</strong> offer natural spaces for walking and enjoying nature. These parks contribute to the quality of life in the city and provide a peaceful environment for the local population. </p> </section>
              {isMobile ? (

                <div className="fourImages" style={{ padding: "20px", gap: "50px" }} > <div> <img srcSet={`${jovanDjordjevic1} 450w, ${jovanDjordjevic} `} alt="Jovan Djordjevic" /> <p style={{ padding: "20px", textAlign: "center" }}> Jovan Đorđević </p> </div> <div> <img srcSet={`${svJovan1} 450w, ${svJovan} `} alt="Saint John" /> <p style={{ padding: "20px", textAlign: "center" }}>Saint John</p> </div> <div> <img srcSet={`${skeledzija1} 450w, ${skeledzija} `} alt="The Ferryman" /> <p style={{ padding: "20px", textAlign: "center" }}>The Ferryman</p> </div> <div> <img srcSet={`${stevanSremac1} 450w, ${stevanSremac} `} alt="Stevan Sremac" /> <p style={{ padding: "20px", textAlign: "center" }}> Stevan Sremac </p> </div> <div> <img srcSet={`${zrtve19441} 450w, ${zrtve1944} `} alt="Victims of 1944" /> <p style={{ padding: "20px", textAlign: "center" }}> Victims of World War II </p> </div> <div> <img srcSet={`${bistaTotIštvana1} 450w, ${bistaTotIštvana} `} alt="Bust of István Tóth" /> <p style={{ padding: "20px", textAlign: "center" }}> Bust of István Tóth </p> </div> </div>) : (<> <div className="fourImages" style={{ padding: "20px", gap: "100px" }}> <div style={{ width: "20vw" }}> <img srcSet={`${jovanDjordjevic1} 450w, ${jovanDjordjevic} `} alt="Jovan Djordjevic" /> <p style={{ padding: "20px", textAlign: "center" }}> Victims of World War II </p> </div> <div style={{ width: "20vw" }}> <img srcSet={`${svJovan1} 450w, ${svJovan} `} alt="Saint John" /> <p style={{ padding: "20px", textAlign: "center" }}> Victims of World War II </p> </div> <div style={{ width: "20vw" }}> <img srcSet={`${skeledzija1} 450w, ${skeledzija} `} alt="The Ferryman" /> <p style={{ padding: "20px", textAlign: "center" }}> Victims of World War II </p> </div> </div> <div className="fourImages" style={{ padding: "20px", gap: "100px" }}> <div style={{ width: "20vw" }}> <img srcSet={`${stevanSremac1} 450w, ${stevanSremac} `} alt="Stevan Sremac" /> <p style={{ padding: "20px", textAlign: "center" }}> Stevan Sremac </p> </div> <div style={{ width: "20vw" }}> <img srcSet={`${zrtve19441} 450w, ${zrtve1944} `} alt="Victims of 1944" /> <p style={{ padding: "20px", textAlign: "center" }}> Victims of World War II </p> </div> <div style={{ width: "20vw" }}> <img srcSet={`${bistaTotIštvana1} 450w, ${bistaTotIštvana} `} alt="Bust of István Tóth" /> <p style={{ padding: "20px", textAlign: "center" }}> Bust of István Tóth </p> </div> </div> </>)} <section lang="en"> <p> On the territory of the city, as well as the entire municipality, there is a relatively small number of statues and monuments. The <strong>Statue of Saint John of Nepomuk</strong> (a work by István Tóth, a sculptor) was placed in 1914 at its current location near the entrance to the bridge. </p> <p> Another statue depicting a full figure is <strong>The Ferryman</strong> (by Sándor Dudás), located on the quay along the Tisa River, unveiled in 2006 by the presidents of Serbia and Hungary. </p> <p> Opposite this statue is a bust of the well-known Serbian writer, <strong>Stevan Sremac</strong>, who was born in Senta. On the quay along the <strong>Tisa River</strong>, there is also a bust of the founder of the Serbian National Theatre in Novi Sad and Belgrade, and the author of the current Serbian national anthem, <strong>Jovan Đorđević</strong>, who is also from Senta. </p> </section>
              <img srcSet={`${senta44} 450w, ${senta4} `} alt="Senta 4" />

              <section lang="en"> <p> The <strong>Orthodox (Serbian) Church of the Archangel Michael</strong> is an important religious and cultural monument of the city. It was built in the Baroque style, with its construction beginning in the 18th century, specifically in 1751. </p> <p> This church is one of the oldest in Senta and represents a significant part of the city’s religious tradition and history. The church is known for its iconostasis, originally made in 1782 and later restored and painted between 1859 and 1862 by Pavle Simić, one of the most famous representatives of Serbian Romantic painting. </p> </section>
            </>
          )}


      </div >
    </>
  );
};


export default Senta;