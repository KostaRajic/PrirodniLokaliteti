/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import kraljevo1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/desktop/kraljevo1.jpg";
import kraljevo2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/desktop/kraljevo2.jpg";
import kraljevo3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/desktop/kraljevo3.jpg";
import kraljevo4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/desktop/kraljevo4.jpg";
import kraljevo5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/desktop/kraljevo5.jpg";
import kraljevo6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/desktop/kraljevo6.jpg";
import kraljevo7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/desktop/kraljevo7.jpg";
import kraljevo8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/desktop/kraljevo8.jpg";
import kraljevo11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/mobile/Mkraljevo1.jpg";
import kraljevo22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/mobile/Mkraljevo2.jpg";
import kraljevo33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/mobile/Mkraljevo3.jpg";
import kraljevo44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/mobile/Mkraljevo4.jpg";
import kraljevo55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/mobile/Mkraljevo5.jpg";
import kraljevo66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/mobile/Mkraljevo6.jpg";
import kraljevo77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/mobile/Mkraljevo7.jpg";
import kraljevo88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/Kraljevo/mobile/Mkraljevo8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Kraljevo = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams;

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
            ? "Kraljevo – Grad sedam kruna i rečnih dolina | Srbija Wonders"
            : "Kraljevo – City of Seven Crowns and River Valleys | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Kraljevo je istorijski i kulturni centar Raškog okruga, smešten na rekama Ibar, Zapadna Morava i Ribnica. Poznat je po manastiru Žiča, Narodnom muzeju, Spomeniku srpskim ratnicima i Muzeju slatka."
              : "Kraljevo is a historical and cultural center of the Raška District, located at the confluence of the Ibar, West Morava, and Ribnica rivers. Known for the Žiča Monastery, National Museum, Monument to Serbian Warriors, and the Sweet Museum."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Kraljevo, Žiča, Raški okrug, istorija Kraljeva, Muzej slatka, Spomenik Milutin, Ađzića kuća, reka Ibar, Zapadna Morava, Ribnica, kultura Srbije"
              : "Kraljevo, Žiča Monastery, Raška District, Kraljevo history, Sweet Museum, Milutin monument, Adžića House, Ibar river, West Morava, Ribnica, Serbian culture"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/kraljevo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/kraljevo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/kraljevo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/kraljevo"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(raskiOkrugPathRoutes.home(switchLanguage))}

        />
        <header></header>
        <img srcSet={`${kraljevo11} 450w, ${kraljevo1} `} alt="Kraljevo 1" />

        <h1 style={{ color: "white" }}>Kraljevo</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  Kraljevo je <strong>gradsko naselje</strong> i sedište istoimene teritorijalne jedinice u Srbiji. Administrativni je centar <strong>Raškog okruga</strong>. Grad se nalazi na tri reke: <strong>Ibar</strong>, <strong>Zapadna Morava</strong> i <strong>Ribnica</strong>, i smešten je između planina <strong>Kotlenik</strong> na severu i <strong>Stolovi</strong> na jugu. Gradski grb se sastoji od sedam kruna, što simbolizuje <em>sedam krunisanja kraljeva</em> u manastiru <strong>Žiča</strong>, koji se nalazi na 5 km od centra grada.
                </p>
              </section>

              <img srcSet={`${kraljevo22} 450w, ${kraljevo2}`} alt="Kraljevo 2" />

              <section lang="sr">
                <p>
                  Najstarije poznato ime naselja, za koje postoji pisani izvor, bilo je <strong>Rudo Polje</strong>. Pod tim imenom se pominje 1476. godine u turskom katastarskom popisu Smederevskog sandžaka. Nakon dolaska Turaka na područje današnjeg Kraljeva i okolnih mesta, osvajači su <em>jednostavno preveli ime</em> na turski jezik, pa je ono glasilo <strong>Karan Ovası</strong>. Narod je to pojednostavljeno izgovarao kao <strong>Karanovac</strong>. Isti naziv zabeležen je i u popisu iz 1528. godine, a zatim je došlo do <em>dvostrukog korišćenja naziva</em>, pa se 1576. godine u različitim izvorima pominje kao <strong>Rudo Polje</strong> ili <strong>Karanovac</strong>. Na molbu meštana Karanovca, nakon krunisanja <strong>Milana Obrenovića</strong> za kralja u manastiru <strong>Žiča</strong>, ime grada je ukazom promenjeno u <strong>Kraljevo</strong> 19. aprila 1882. godine. Naziv je ostao do posle Drugog svetskog rata, a 6. jula 1949. godine preimenovano je u <strong>Rankovićevo</strong>, po <strong>Aleksandru Rankoviću</strong>, i taj naziv je nosilo do 8. januara 1955. godine, kada je ponovo vraćeno ime <strong>Kraljevo</strong>.
                </p>
              </section>

              <img srcSet={`${kraljevo44} 450w, ${kraljevo4}`} alt="Narodni muzej u Kraljevu" />

              <section lang="sr">
                <p>
                  Narodni muzej Kraljevo osnovan je <strong>1. maja 1950. godine</strong>. Muzej je teritorijalni muzej odgovoran za gradove <strong>Kraljevo</strong> i <strong>Novi Pazar</strong>, kao i opštine <strong>Raška</strong>, <strong>Vrnjačka Banja</strong> i <strong>Tutin</strong>. Ovo je <em>kompleksni muzej</em>, čiji fond je podeljen u šest zbirki: Prirodnjačku, Arheološku, Numizmatičku, Istorijsku, Etnološku i Umetničku, oko kojih su formirane odgovarajuće grupe. Osim zgrade na Trgu Svetog Save, u sastavu muzeja je i zgrada u Karađorđevoj ulici, u kojoj se nalazi <strong>Legat Olivere Radojković Čolović</strong>. Vlada Srbije je 2013. godine Narodnom muzeju Kraljevo dodelila status <strong>Ustanove kulture od nacionalnog značaja</strong>.
                </p>
              </section>

              <img srcSet={`${kraljevo33} 450w, ${kraljevo3}`} alt="Muzej Slatka - Kuća cvetića Kraljevo" />

              <section lang="sr">
                <p>
                  Muzej slatka – Kuća Cvetića je jedinstvena kombinacija <strong>gastronomije</strong> i <strong>kulturnog nasleđa</strong>, predstavljena kroz porodičnu tradiciju koja datira od <strong>1908. godine</strong>. Članovi porodice Cvetić, stručnjaci za očuvanje i promociju kulturnog nasleđa, osnivači su, kustosi i domaćini ovog muzeja, koji kroz svoje eksponate <em>oživljava istoriju svakodnevnog života</em> građanske Srbije. Porodica Cvetić započela je malu, ekskluzivnu proizvodnju <strong>1920. godine</strong>, a prvi interes za njihov proizvod pokazali su Francuzi koji su boravili u Kraljevu tokom osnivanja poznate fabrike aviona <strong>Louis Breguet</strong>. Luj Brege, njihov komšija, bio je strastveni obožavalac sveže pripremljenog slatkog, pa je potražnja za tim proizvodom u tom periodu značajno porasla. Iako se mnogo toga promenilo, porodica Cvetić i dalje čuva autentične recepte svojih predaka, retke biljne vrste i bogatu kolekciju predmeta za posluženje i pripremanje ovog istorijskog delikatesa. U muzeju se čuvaju i koriste kolekcije stakla, porcelana i francuskog srebra.
                </p>
              </section>

              <img srcSet={`${kraljevo55} 450w, ${kraljevo5}`} alt="Saborna crkva Svete Trojice u Kraljevu" />

              <section lang="sr">
                <p>
                  Saborna crkva <strong>Svete Trojice</strong> u Kraljevu je glavni i najveći pravoslavni hram u ovom gradu, kao i centralna crkva <strong>Žičke eparhije Srpske pravoslavne crkve</strong>. U gornjem delu Karanovca (stari naziv Kraljeva), u naselju poznatom kao <em>"Stara Čaršija"</em>, gde su živeli Srbi, nalazila se mala drvena crkva tokom turske vlasti. Ova crkva je bila građena od debelih dasaka i greda. U tom području boravio je knez Miloš. Na mestu gde je on noćio, sanjao je da u tom snu vidi crkvu i moli se Bogu da mu pomogne da pobedi Turke i oslobodi srpski narod od turskog ropstva. Kada se probudio, setio se svog sna i obećao: <em>"Ako Bog da, pobediću Turke, i na ovom mestu podići crkvu u znak zahvalnosti."</em> Tako je i bilo, jer je knez Miloš <strong>1824. godine</strong> započeo izgradnju crkve posvećene Svetoj Trojici. Prilikom izgradnje nove crkve, knez Miloš je naredio da se stara drvena crkva premesti u portu nove crkve i da se koristi za bogosluženja dok se nova crkva ne završi, što je i učinjeno.
                </p>
              </section>

              <img srcSet={`${kraljevo88} 450w, ${kraljevo8}`} alt="Spomenik Srpskim ratnicima u Kraljevu" />

              <section lang="sr">
                <p>
                  Spomenik srpskim ratnicima u Kraljevu posvećen je poginulim oficirima i vojnicima u <strong>Balkanskim i Prvom svetskom ratu (1912—1918)</strong>. Izgrađen je <strong>1934. godine</strong>, po uzoru na Spomen-kosturnicu braniocima Beograda, koja je podignuta godinu dana ranije na Novom groblju u Beogradu. Spomenik je maja 1960. godine premesten na vojničko groblje, da bi 1982. godine bio vraćen na prvobitnu lokaciju. Neposredno nakon povratka, spomenik je dobio popularni naziv <em>"Milutin"</em>, prema knjizi <em>Knjiga o Milutinu</em> Danka Popovića, koja je objavljena <strong>1985. godine</strong>. Ideja o podizanju spomenika poginulim ratnicima pojavila se <strong>1913. godine</strong>, nakon završetka Drugog balkanskog rata, ali je realizaciju omelo izbijanje Prvog svetskog rata. Posle Velikog rata, ideja je ponovo postala aktuelna, a realizacija je započela tek <strong>1928. godine</strong>. Za podizanje spomenika u Kraljevu, presudan uticaj imala je sudbina Spomenika braniocima Beograda.
                </p>
              </section>

              <img srcSet={`${kraljevo66} 450w, ${kraljevo6}`} alt="Ađzića kuća u Kraljevu" />

              <section lang="sr">
                <p>
                  Ađzića kuća u Kraljevu, ili kuća Mihaila Hađi-Aleksića, izgrađena je početkom <strong>20. veka</strong>. Od <strong>1974. godine</strong>, zaštićena je kao spomenik kulture. Kuća se nalazi u ulici Cara Dušana broj 39, u neposrednoj blizini zgrade Skupštine opštine. Ovaj objekat predstavlja jedinstveni primer <em>folklorne arhitekture</em> iz prve polovine 19. veka i smatra se jednom od najstarijih kuća u bivšem Karanovcu (stari naziv Kraljeva). Kuću je izgradio Jevrem Novaković, poznati kraljevački zemljoposednik i trgovac, a <strong>1922. godine</strong> je prodao Mihailu Hađi-Aleksiću, koji je tada bio predsednik Opštine Kraljevo. Kuća je prizemna i ima drveni trem, koji je dekorativni element. Ispod trega se nalazi ulaz u podrum. Prizemni deo je građen bondražnom konstrukcijom sa ispunom od blata i ćerpiča. Svi unutrašnji i spoljašnji zidovi su omalterisani. Krov je jednostrano nagnut i prekriven crepom.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  Kraljevo is an <strong>urban settlement</strong> and the seat of the eponymous territorial unit in Serbia. It is the administrative center of the <strong>Raška District</strong>. The city is located on three rivers: the <strong>Ibar</strong>, <strong>Western Morava</strong>, and <strong>Ribnica</strong>, and is situated between the <strong>Kotlenik</strong> mountain to the north and the <strong>Stolovi</strong> mountain to the south. The city coat of arms consists of seven crowns, symbolizing the <em>seven coronations of kings</em> in the <strong>Žiča</strong> monastery, which is located 5 km from the city center.
                </p>
              </section>

              <img srcSet={`${kraljevo22} 450w, ${kraljevo2}`} alt="Kraljevo 2" />

              <section lang="en">
                <p>
                  The oldest known name of the settlement, for which there is a written source, was <strong>Rudo Polje</strong>. Under this name, it was mentioned in 1476 in the Turkish cadastral register of the Smederevo sanjak. After the Turks arrived in the area of today's Kraljevo and nearby places, the conquerors <em>simply translated the name</em> into Turkish, and it was called <strong>Karan Ovası</strong>. The locals pronounced it simply as <strong>Karanovac</strong>. The same name was recorded in the 1528 census, and then there was a <em>dual use of the names</em>, as in different sources from 1576 it was mentioned as either <strong>Rudo Polje</strong> or <strong>Karanovac</strong>. At the request of the residents of Karanovac, after the coronation of <strong>Milan Obrenović</strong> as king in the <strong>Žiča</strong> monastery, the name of the town was officially changed to <strong>Kraljevo</strong> on April 19, 1882. The name remained until after World War II, when on July 6, 1949, it was renamed <strong>Rankovićevo</strong>, after <strong>Aleksandar Ranković</strong>, and bore that name until January 8, 1955, when the name <strong>Kraljevo</strong> was restored.
                </p>
              </section>

              <img srcSet={`${kraljevo44} 450w, ${kraljevo4}`} alt="National Museum in Kraljevo" />

              <section lang="en">
                <p>
                  The National Museum Kraljevo was founded on <strong>May 1, 1950</strong>. The museum is a territorial institution responsible for the cities of <strong>Kraljevo</strong> and <strong>Novi Pazar</strong>, as well as the municipalities of <strong>Raška</strong>, <strong>Vrnjačka Banja</strong>, and <strong>Tutin</strong>. It is a <em>complex museum</em>, whose collection is divided into six sections: Natural History, Archaeology, Numismatics, History, Ethnology, and Art, around which corresponding groups are formed. Besides the building at Sveti Sava Square, the museum also includes a building on Karađorđeva Street, which houses the <strong>Olivera Radojković Čolović Legacy</strong>. In 2013, the Government of Serbia granted the National Museum Kraljevo the status of a <strong>cultural institution of national significance</strong>.
                </p>
              </section>

              <img srcSet={`${kraljevo33} 450w, ${kraljevo3}`} alt="Sweet Museum – Cvetić House Kraljevo" />

              <section lang="en">
                <p>
                  The Sweet Museum – Cvetić House is a unique combination of <strong>gastronomy</strong> and <strong>cultural heritage</strong>, presented through a family tradition dating back to <strong>1908</strong>. Members of the Cvetić family, experts in the preservation and promotion of cultural heritage, are the founders, curators, and hosts of this museum, which through its exhibits <em>revives the history of everyday life</em> of bourgeois Serbia. The Cvetić family started a small, exclusive production in <strong>1920</strong>, and the first interest in their product came from the French who stayed in Kraljevo during the establishment of the famous airplane factory <strong>Louis Breguet</strong>. Louis Breguet, their neighbor, was a passionate admirer of freshly prepared preserves, so demand for this product increased significantly at that time. Although much has changed, the Cvetić family still preserves the authentic recipes of their ancestors, rare plant species, and a rich collection of items for serving and preparing this historic delicacy. The museum preserves and uses collections of glassware, porcelain, and French silver.
                </p>
              </section>

              <img srcSet={`${kraljevo55} 450w, ${kraljevo5}`} alt="Cathedral of the Holy Trinity in Kraljevo" />

              <section lang="en">
                <p>
                  The Cathedral of the <strong>Holy Trinity</strong> in Kraljevo is the main and largest Orthodox church in the city, as well as the central church of the <strong>Žiča Diocese of the Serbian Orthodox Church</strong>. In the upper part of Karanovac (the old name for Kraljevo), in a settlement known as <em>"Stara Čaršija"</em>, where Serbs lived, there was a small wooden church during the Turkish rule. This church was built from thick boards and beams. Prince Miloš stayed in that area. At the place where he stayed overnight, he dreamed of seeing a church and prayed to God to help him defeat the Turks and free the Serbian people from Turkish bondage. Upon waking, he remembered his dream and promised: <em>"If God wills, I will defeat the Turks and build a church here as a sign of gratitude."</em> And so it was, as Prince Miloš began building the church dedicated to the Holy Trinity in <strong>1824</strong>. During the construction of the new church, Prince Miloš ordered the old wooden church to be moved into the courtyard of the new church and to be used for services until the new church was finished, which was done.
                </p>
              </section>

              <img srcSet={`${kraljevo88} 450w, ${kraljevo8}`} alt="Monument to Serbian Soldiers in Kraljevo" />

              <section lang="en">
                <p>
                  The Monument to Serbian Soldiers in Kraljevo is dedicated to the fallen officers and soldiers in the <strong>Balkan and First World Wars (1912–1918)</strong>. It was built in <strong>1934</strong>, modeled after the Memorial Ossuary for the Defenders of Belgrade, which was erected a year earlier at the New Cemetery in Belgrade. The monument was moved to the military cemetery in May 1960, and returned to its original location in 1982. Shortly after its return, the monument gained the popular name <em>"Milutin"</em>, after the book <em>The Book about Milutin</em> by Danko Popović, published in <strong>1985</strong>. The idea to erect a monument to the fallen soldiers arose in <strong>1913</strong>, after the end of the Second Balkan War, but implementation was hindered by the outbreak of World War I. After the Great War, the idea became relevant again, and construction began only in <strong>1928</strong>. The fate of the Memorial to the Defenders of Belgrade had a decisive influence on the erection of the monument in Kraljevo.
                </p>
              </section>

              <img srcSet={`${kraljevo66} 450w, ${kraljevo6}`} alt="Ađzića House in Kraljevo" />

              <section lang="en">
                <p>
                  The Ađzića House in Kraljevo, or the house of Mihailo Hađi-Aleksić, was built at the beginning of the <strong>20th century</strong>. Since <strong>1974</strong>, it has been protected as a cultural monument. The house is located at Cara Dušana Street No. 39, near the municipal assembly building. This building represents a unique example of <em>folk architecture</em> from the first half of the 19th century and is considered one of the oldest houses in the former Karanovac (the old name for Kraljevo). The house was built by Jevrem Novaković, a well-known Kraljevo landowner and merchant, and in <strong>1922</strong> it was sold to Mihailo Hađi-Aleksić, who was then the president of the Kraljevo municipality. The house is ground-level with a wooden porch, which is a decorative element. Under the porch is the entrance to the basement. The ground floor is built with a timber frame structure filled with clay and adobe. All interior and exterior walls are plastered. The roof is single-sloped and covered with tiles.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Kraljevo;