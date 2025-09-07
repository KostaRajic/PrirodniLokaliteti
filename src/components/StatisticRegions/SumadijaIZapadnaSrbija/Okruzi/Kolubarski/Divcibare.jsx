/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import divcibare1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/desktop/divcibare1.jpg";
import divcibare2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/desktop/divcibare2.jpg";
import divcibare3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/desktop/divcibare3.jpg";
import divcibare4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/desktop/divcibare4.jpg";
import divcibare5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/desktop/divcibare5.jpg";
import divcibare6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/desktop/divcibare6.jpg";
import divcibare11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/mobile/Mdivcibare1.jpg";
import divcibare22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/mobile/Mdivcibare2.jpg";
import divcibare33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/mobile/Mdivcibare3.jpg";
import divcibare44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/mobile/Mdivcibare4.jpg";
import divcibare55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/mobile/Mdivcibare5.jpg";
import divcibare66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Divcibare/mobile/Mdivcibare6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Divcibare = () => {
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

        <title>{switchLanguage === 'rs' ? "Divčibare – Planinski Raj na Maljenu | Serbia Wonders" : "Divčibare – Mountain Paradise on Maljen | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Divčibare su popularno planinsko naselje kod Valjeva, poznato po prelepim vidicima, bogatoj istoriji i prirodnim lepotama planine Maljen. Saznajte više o ovom turističkom biseru Srbije."
            :
            "Divcibare is a popular mountain settlement near Valjevo, known for its stunning views, rich history, and natural beauty of Maljen Mountain. Discover more about this tourist gem of Serbia."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Divčibare, Maljen, Valjevo, planinsko odredište, turistička destinacija, vidikovac Ljuti krš, istorija Divčibara, priroda Srbije"
            :
            "Divcibare, Maljen, Valjevo, mountain destination, tourist spot, Ljuti krš viewpoint, Divcibare history, nature of Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/divcibare`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/divcibare"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/divcibare"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/divcibare"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(kulubarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${divcibare11} 450w, ${divcibare1} `} alt="Divčibare 1" />

        <h2 style={{ color: "white" }}>Divčibare</h2>


        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Divčibare</strong> su gradsko naselje i popularno planinsko-turističko odredište grada <strong>Valjeva</strong> u okrugu <strong>Kolubara</strong>, smešteno na planini <strong>Maljen</strong>. Prema popisu iz <strong>2022. godine</strong>, naselje broji <strong>88 stalnih stanovnika</strong>. Divčibare se nalaze <strong>38 km jugoistočno od Valjeva</strong>, a <strong>107 km od Beograda</strong>. To je planinsko polje koje se prostire od <em>Crnog vrha</em>, <em>Pa Ljbe</em>, <em>Golupca</em> do <em>Velikog brda</em>. Naselje je na visini od <strong>980 metara nadmorske visine</strong>, a najviši vrh je <strong>Kraljev sto</strong>, koji se uzdiže na <strong>1.104 metra</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare22} 450w, ${divcibare2} `} alt="Divčibare 2" />

              <section lang="sr">
                <p>
                  Visoravan je dobila naziv <strong>Divčibare</strong>, ili <em>devojačke bare</em>, u spomen na tragičnu smrt jedne mlade devojke. Prema narodnom predanju, mlada čobanica se nesrećnim slučajem utopila u nabujaloj <em>Crnoj Kamenici</em>. Sam naziv se pominje još <strong>1476. godine</strong> u turskom popisu <em>Smederevskog sandžaka</em>. Značajan podatak za istoriju ovog kraja jeste da je <strong>knjaz Miloš Obrenović</strong>, nakon <strong>Drugog srpskog ustanka</strong>, od svog turskog pobratima <strong>Deli-age</strong> otkupio čitavu visoravan, uključujući torove i druge građevinske objekte.
                </p>
              </section>

              <img srcSet={`${divcibare33} 450w, ${divcibare3} `} alt="Divčibare 3" />

              <section lang="sr">
                <p>
                  Poznato je da je <strong>knjaz Miloš</strong> često posećivao ovaj kraj, obilazio čobane i nadzirao njihov rad. U blizini <em>Gospodarskih koliba</em> nalazio se izvor hladne planinske vode, koji je kasnije postao poznat kao <strong>knjaz Miloševa česma</strong>. Tokom austrijske vladavine u delu Srbije (od <strong>1718.</strong> do <strong>1739. godine</strong>), granica između Austrije i Turske prolazila je kroz <strong>Maljen</strong>. Sve do kraja <strong>18. veka</strong>, naš narod je <em>Povlen</em>, <em>Maljen</em> i <em>Suvobor</em> nazivao zajedničkim imenom: <strong>Crna Gora</strong>. To se može videti u starim srpskim zapisima. Krajem <strong>18. veka</strong>, planine <em>Povlen</em>, <em>Maljen</em> i <em>Suvobor</em> gube svoje zajedničko ime <em>Kara-dag</em>, odnosno <strong>Crna Gora</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare44} 450w, ${divcibare4} `} alt="Planina Divčibare 4" />

              <section lang="sr">
                <p>
                  <strong>Maljen</strong> je planina koja pripada <em>Dinarskom planinskom sistemu</em> u severozapadnoj Srbiji i spada u rudarne planine. Odlikuje se specifičnim reljefom, što je omogućilo povoljne klimatske uslove, kao i bogat i raznovrstan biljni i životinjski svet. U centralnom delu <strong>Maljena</strong> nalaze se <strong>Divčibare</strong>. Visovi koji okružuju Divčibare štite ih od vetrova, a istovremeno pružaju panoramski pogled na delove masiva Maljena, kao i na okolinu. Najviši vrh Maljena je <strong>Kraljev sto</strong>, koji se uzdiže na <strong>1103 m</strong>, dok je drugi po visini <strong>Crni vrh</strong> sa <strong>1098 m</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare66} 450w, ${divcibare6} `} alt="Divčibare 5" />

              <section lang="sr">
                <p>
                  Vis <strong>Stražara</strong> deli Divčibare na dva dela: Divčibare u užem smislu i <em>Pitomine</em>. Ovaj vis je dobio ime tokom austrougarske uprave u severnoj Srbiji, od <strong>1718.</strong> do <strong>1739. godine</strong>, kada je granica između Austrije i Turske prolazila tim putem, a tu je bila smeštena i austrijska granična straža. Stražaru su činili hajduci, stanovnici okolnih sela, uglavnom iz sela <strong>Krčmara</strong>. Sa Stražare se pruža pogled na celo divčibarsko polje, ostale visove Maljena, kao i na veći broj planina i grad <strong>Valjevo</strong>. Iako se često spominje da su Divčibare planina, zapravo je reč o polju koje se nalazi na planini <strong>Maljen</strong>. Zbog svog specifičnog reljefa i geografskog položaja, Divčibare se smatra zasebnom turističkom celinom. Kao takve, predstavljaju se svim zainteresovanim turistima koji žele da posete ovu atraktivnu destinaciju i uživaju u svim njenim lepotama i blagodetima.
                </p>
              </section>

              <img srcSet={`${divcibare55} 450w, ${divcibare5} `} alt="Divčibare 6" />

              <section lang="sr">
                <p>
                  <strong>Ljuti krš Vidikovac</strong> je popularno izletište na Divčibarama, smešteno na visokom delu ove planine, sa kojeg se pruža spektakularan panoramski pogled na okolna područja. Ovaj vidikovac nudi jedinstvenu priliku za uživanje u prirodi, sa pogledom na okolne vrhove <strong>Maljena</strong>, <strong>Divčibarsko polje</strong> i grad <strong>Valjevo</strong>. Ime "<em>Ljuti krš</em>" potiče od karakterističnog, stena-krševitog terena koji se nalazi na ovom mestu. Zbog svog specifičnog položaja i prirodnih lepota, Ljuti krš Vidikovac predstavlja omiljeno odredište za ljubitelje prirode, planinarenja i fotografije, ali i one koji žele da se opuste u mirnom okruženju.
                </p>
              </section>


            </>
          )
          :
          (
            <>


              <section lang="en">
                <p>
                  <strong>Divčibare</strong> is an urban settlement and a popular mountain-tourist destination of the city of <strong>Valjevo</strong> in the <strong>Kolubara</strong> district, located on the <strong>Maljen</strong> mountain. According to the <strong>2022 census</strong>, the settlement has <strong>88 permanent residents</strong>. Divčibare is situated <strong>38 km southeast of Valjevo</strong> and <strong>107 km from Belgrade</strong>. It is a mountain plateau stretching from <em>Crni vrh</em>, <em>Pa Ljba</em>, <em>Golupac</em> to <em>Veliko brdo</em>. The settlement lies at an altitude of <strong>980 meters above sea level</strong>, and the highest peak is <strong>Kraljev sto</strong>, rising to <strong>1,104 meters</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare22} 450w, ${divcibare2} `} alt="Divčibare 2" />

              <section lang="en">
                <p>
                  The plateau received the name <strong>Divčibare</strong>, or <em>maiden's ponds</em>, in memory of the tragic death of a young girl. According to local legend, a young shepherdess accidentally drowned in the swollen <em>Crna Kamenica</em> river. The name was already mentioned in <strong>1476</strong> in the Ottoman census of the <em>Smederevo Sanjak</em>. An important historical fact is that <strong>Prince Miloš Obrenović</strong>, after the <strong>Second Serbian Uprising</strong>, purchased the entire plateau, including shepherds' huts and other buildings, from his Turkish brother-in-law <strong>Deli-aga</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare33} 450w, ${divcibare3} `} alt="Divčibare 3" />

              <section lang="en">
                <p>
                  It is known that <strong>Prince Miloš</strong> frequently visited this area, inspecting shepherds and overseeing their work. Near the <em>Gospodarske Kolibe</em> there was a spring of cold mountain water, which later became known as <strong>Prince Miloš's Fountain</strong>. During the Austrian rule in part of Serbia (from <strong>1718</strong> to <strong>1739</strong>), the border between Austria and Turkey passed through <strong>Maljen</strong>. Until the end of the <strong>18th century</strong>, the people called <em>Povlen</em>, <em>Maljen</em>, and <em>Suvobor</em> by the common name <strong>Crna Gora</strong> (Black Mountain). This can be seen in old Serbian records. At the end of the <strong>18th century</strong>, the mountains <em>Povlen</em>, <em>Maljen</em>, and <em>Suvobor</em> lost their common name <em>Kara-dag</em>, or <strong>Crna Gora</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare44} 450w, ${divcibare4} `} alt="Divčibare Mountain 4" />

              <section lang="en">
                <p>
                  <strong>Maljen</strong> is a mountain that belongs to the <em>Dinaric mountain system</em> in northwestern Serbia and is classified as a mining mountain. It is characterized by a specific relief that enables favorable climatic conditions and a rich and diverse flora and fauna. In the central part of <strong>Maljen</strong> lies <strong>Divčibare</strong>. The heights surrounding Divčibare protect it from winds and at the same time provide a panoramic view of parts of the Maljen massif and the surroundings. The highest peak of Maljen is <strong>Kraljev sto</strong> at <strong>1103 m</strong>, while the second highest is <strong>Crni vrh</strong> with <strong>1098 m</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare66} 450w, ${divcibare6} `} alt="Divčibare 5" />

              <section lang="en">
                <p>
                  The peak <strong>Stražara</strong> divides Divčibare into two parts: Divčibare in the narrower sense and <em>Pitomine</em>. This peak got its name during the Austro-Hungarian administration in northern Serbia from <strong>1718</strong> to <strong>1739</strong>, when the border between Austria and Turkey passed through here, and where the Austrian border guard was stationed. The guards were hajduks, inhabitants of the surrounding villages, mainly from the village of <strong>Krčmar</strong>. From Stražara there is a view over the entire Divčibare plateau, other heights of Maljen, as well as many mountains and the city of <strong>Valjevo</strong>. Although Divčibare is often mentioned as a mountain, it is actually a plateau located on the <strong>Maljen</strong> mountain. Due to its specific relief and geographic position, Divčibare is considered a separate tourist unit. As such, it is presented to all interested tourists who want to visit this attractive destination and enjoy all its beauties and benefits.
                </p>
              </section>

              <img srcSet={`${divcibare55} 450w, ${divcibare5} `} alt="Divčibare 6" />

              <section lang="en">
                <p>
                  <strong>Ljuti krš Viewpoint</strong> is a popular excursion spot in Divčibare, located on a high part of this mountain, offering a spectacular panoramic view of the surrounding area. This viewpoint provides a unique opportunity to enjoy nature, with views of the surrounding peaks of <strong>Maljen</strong>, <strong>Divčibare plateau</strong>, and the city of <strong>Valjevo</strong>. The name "<em>Ljuti krš</em>" comes from the characteristic rocky terrain found here. Due to its specific location and natural beauty, Ljuti krš Viewpoint is a favorite destination for nature lovers, hikers, and photographers, as well as those seeking relaxation in a peaceful environment.
                </p>
              </section>


              <h2 style={{ color: "white" }}>Divčibare</h2>

              <section lang="en">
                <p style={{ paddingTop: "50px" }}>
                  <strong>Divčibare</strong> is an urban settlement and a popular mountain-tourist destination of the city of <strong>Valjevo</strong> in the <strong>Kolubara</strong> district, located on the <strong>Maljen</strong> mountain. According to the <strong>2022 census</strong>, the settlement has <strong>88 permanent residents</strong>. Divčibare is situated <strong>38 km southeast of Valjevo</strong> and <strong>107 km from Belgrade</strong>. It is a mountain plateau stretching from <em>Crni vrh</em>, <em>Pa Ljba</em>, <em>Golupac</em> to <em>Veliko brdo</em>. The settlement lies at an altitude of <strong>980 meters above sea level</strong>, and the highest peak is <strong>Kraljev sto</strong>, rising to <strong>1,104 meters</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare22} 450w, ${divcibare2} `} alt="Divčibare 2" />

              <section lang="en">
                <p>
                  The plateau received the name <strong>Divčibare</strong>, or <em>maiden's ponds</em>, in memory of the tragic death of a young girl. According to local legend, a young shepherdess accidentally drowned in the swollen <em>Crna Kamenica</em> river. The name was already mentioned in <strong>1476</strong> in the Ottoman census of the <em>Smederevo Sanjak</em>. An important historical fact is that <strong>Prince Miloš Obrenović</strong>, after the <strong>Second Serbian Uprising</strong>, purchased the entire plateau, including shepherds' huts and other buildings, from his Turkish brother-in-law <strong>Deli-aga</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare33} 450w, ${divcibare3} `} alt="Divčibare 3" />

              <section lang="en">
                <p>
                  It is known that <strong>Prince Miloš</strong> frequently visited this area, inspecting shepherds and overseeing their work. Near the <em>Gospodarske Kolibe</em> there was a spring of cold mountain water, which later became known as <strong>Prince Miloš's Fountain</strong>. During the Austrian rule in part of Serbia (from <strong>1718</strong> to <strong>1739</strong>), the border between Austria and Turkey passed through <strong>Maljen</strong>. Until the end of the <strong>18th century</strong>, the people called <em>Povlen</em>, <em>Maljen</em>, and <em>Suvobor</em> by the common name <strong>Crna Gora</strong> (Black Mountain). This can be seen in old Serbian records. At the end of the <strong>18th century</strong>, the mountains <em>Povlen</em>, <em>Maljen</em>, and <em>Suvobor</em> lost their common name <em>Kara-dag</em>, or <strong>Crna Gora</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare44} 450w, ${divcibare4} `} alt="Divčibare Mountain 4" />

              <section lang="en">
                <p>
                  <strong>Maljen</strong> is a mountain that belongs to the <em>Dinaric mountain system</em> in northwestern Serbia and is classified as a mining mountain. It is characterized by a specific relief that enables favorable climatic conditions and a rich and diverse flora and fauna. In the central part of <strong>Maljen</strong> lies <strong>Divčibare</strong>. The heights surrounding Divčibare protect it from winds and at the same time provide a panoramic view of parts of the Maljen massif and the surroundings. The highest peak of Maljen is <strong>Kraljev sto</strong> at <strong>1103 m</strong>, while the second highest is <strong>Crni vrh</strong> with <strong>1098 m</strong>.
                </p>
              </section>

              <img srcSet={`${divcibare66} 450w, ${divcibare6} `} alt="Divčibare 5" />

              <section lang="en">
                <p>
                  The peak <strong>Stražara</strong> divides Divčibare into two parts: Divčibare in the narrower sense and <em>Pitomine</em>. This peak got its name during the Austro-Hungarian administration in northern Serbia from <strong>1718</strong> to <strong>1739</strong>, when the border between Austria and Turkey passed through here, and where the Austrian border guard was stationed. The guards were hajduks, inhabitants of the surrounding villages, mainly from the village of <strong>Krčmar</strong>. From Stražara there is a view over the entire Divčibare plateau, other heights of Maljen, as well as many mountains and the city of <strong>Valjevo</strong>. Although Divčibare is often mentioned as a mountain, it is actually a plateau located on the <strong>Maljen</strong> mountain. Due to its specific relief and geographic position, Divčibare is considered a separate tourist unit. As such, it is presented to all interested tourists who want to visit this attractive destination and enjoy all its beauties and benefits.
                </p>
              </section>

              <img srcSet={`${divcibare55} 450w, ${divcibare5} `} alt="Divčibare 6" />

              <section lang="en">
                <p>
                  <strong>Ljuti krš Viewpoint</strong> is a popular excursion spot in Divčibare, located on a high part of this mountain, offering a spectacular panoramic view of the surrounding area. This viewpoint provides a unique opportunity to enjoy nature, with views of the surrounding peaks of <strong>Maljen</strong>, <strong>Divčibare plateau</strong>, and the city of <strong>Valjevo</strong>. The name "<em>Ljuti krš</em>" comes from the characteristic rocky terrain found here. Due to its specific location and natural beauty, Ljuti krš Viewpoint is a favorite destination for nature lovers, hikers, and photographers, as well as those seeking relaxation in a peaceful environment.
                </p>
              </section>
            </>
          )}


      </div>
    </>
  );
};


export default Divcibare;