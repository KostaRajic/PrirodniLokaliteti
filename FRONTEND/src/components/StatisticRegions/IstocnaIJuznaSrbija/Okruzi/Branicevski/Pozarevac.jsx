/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import pozarevac1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac1.jpg";
import pozarevac2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac2.jpg";
import pozarevac3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac3.jpg";
import pozarevac4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac4.jpg";
import pozarevac5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac5.jpg";
import pozarevac6 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/desktop/pozarevac6.jpg";
import pozarevac11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM1.jpg";
import pozarevac22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM2.jpg";
import pozarevac33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM3.jpg";
import pozarevac44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM4.jpg";
import pozarevac55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM5.jpg";
import pozarevac66 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/Pozarevac/mobile/pozarevacM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Pozarevac = () => {
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

        <title>{switchLanguage === 'rs' ? "Požarevac – Istorijski grad i kulturno središte Braničevskog okruga | Serbia Wonders" : "Požarevac – A Historic City and Cultural Center of the Braničevo District | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Požarevac, nekadašnja rezidencija kneza Miloša, poznat je po Okružnom zdanju, spomeniku knezu Milošu, ergeli Ljubičevo, Narodnom muzeju i memorijalnom kompleksu Čačalica."
            :
            "Požarevac, former residence of Prince Miloš, is known for the District Building, monument to Prince Miloš, Ljubičevo horse farm, National Museum, and the Čačalica memorial complex."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Požarevac, knez Miloš, Okružno zdanje, Ljubičevo, Narodni muzej Požarevac, spomenik, Čačalica, Braničevski okrug, istorija Srbije, turizam u Srbiji"
            :
            "Požarevac, Prince Miloš, District Building, Ljubičevo, National Museum Požarevac, monument, Čačalica, Braničevo District, Serbian history, tourism in Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/pozarevac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/pozarevac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/pozarevac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/pozarevac"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(branicevskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${pozarevac11} 450w, ${pozarevac1} `} alt="Požarevac 1" loading="lazy" />

        <h1>Požarevac</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Požarevac</strong> je gradsko naselje i sedište istoimene teritorijalne jedinice
                  u Srbiji. Administrativni je centar <strong>Braničevskog upravnog okruga</strong>.
                  Prema popisu iz <strong>2022. godine</strong>, broj stanovnika iznosio je <strong>42.530</strong>.
                  Nalazi se u <strong>južnoj i istočnoj Srbiji</strong>, između tri reke —
                  <strong>Dunava</strong>, <strong>Velike Morave</strong> i <strong>Mlave</strong>.
                </p>
              </section>

              <img srcSet={`${pozarevac22} 450w, ${pozarevac2} `} alt="Zgrada Okružnog zdanja u Pozarevcu" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Zgrada Okružnog zdanja</strong>, svojim <em>impozantnim dimenzijama</em> i <em>dekorativnim obradama</em>,
                  bila je najreprezentativnija i najveća upravna zgrada tog vremena u Srbiji,
                  čija je izgradnja omogućila uspostavljanje bližih kontakata sa Evropom.
                  <br /><br />
                  Na ovom mestu se nekada nalazio <strong>konak kneginje Ljubice</strong>, koji je bio srušen.
                  Zgrada je izgrađena <strong>1889. godine</strong> (za samo godinu dana), po projektu inženjera <strong>Milera</strong>.
                  <em>Okružna vlast</em> je prikupljala sredstva od poreza tokom <strong>pet godina</strong> kako bi se sagradila
                  ova impozantna građevina. <strong>Fasada Zdanja</strong> izvedena je u duhu <em>bečkog akademizma</em>,
                  a svojom formom i detaljima podseća na zgrade <strong>italijanske renesanse</strong>.
                </p>
              </section>

              <img srcSet={`${pozarevac33} 450w, ${pozarevac3} `} alt="Spomenik Knezu Milosu u Pozarevcu" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Požarevac</strong> je dugo bio <em>druga rezidencija kneza Miloša</em>. On je izgradio konake
                  za svoju porodicu i sebe, razvijao trgovinu jer je i sam bio trgovac.
                  Oslobodio je grad od <strong>turske vlasti</strong> u <strong>Drugom srpskom ustanku 1815. godine</strong>.
                  <br /><br />
                  U znak zahvalnosti, <strong>1898. godine</strong> podignut je <strong>spomenik knezu Milošu</strong>,
                  koji je otkrio tadašnji kralj Srbije <strong>Aleksandar Obrenović</strong>, u prisustvu
                  bivšeg kralja, njegovog oca <strong>Milana Obrenovića</strong>.
                  <br /><br />
                  Spomenik je <em>izliven u bronzi</em> i delo je poznatog vajara <strong>Đorđa Jovanovića</strong>,
                  izrađen u <strong>Parizu</strong> <strong>1897. godine</strong>. Nalazi se u <strong>centru gradskog parka</strong>,
                  ispred <strong>zgrade Okružnog zdanja</strong>.
                  <br /><br />
                  Na spomeniku su uklesane godine rođenja (<strong>1780</strong>) i smrti (<strong>1860</strong>)
                  kneza Miloša, kao i čuvena poruka upućena turskom vojvodi: <em>„Delibaša, carski delijo, ti imaš kuda i
                    na drugu stranu, a ja nemam kuda, nego tuda, pa u život ili smrt“</em>, kao i godina
                  oslobođenja Požarevca od Turaka – <strong>1815</strong>.
                  <br /><br />
                  <strong>Turistička organizacija grada Požarevca</strong> izradila je <em>mesinganu repliku statue</em>
                  kao simbol i reprezentativni suvenir grada.
                  <br /><br />
                  <strong>Biste i spomen-ploče narodnih heroja</strong> koje se, pored kneza Miloša, nalaze u gradskom parku
                  podignute su i <strong>Čedi Vasoviću</strong>, <strong>Bošku Vrebalovu</strong>, <strong>Božidaru Dimitrijeviću – Koziči</strong>,
                  <strong>Veljku Dugosaviću</strong> i narodnom tribunu <strong>Vasi Pelagiću</strong>.
                </p>
              </section>

              <img srcSet={`${pozarevac44} 450w, ${pozarevac4} `} alt="Ergela Ljubičevo" loading="lazy" />

              <section lang="sr">
                <p>
                  Jednu od <strong>najstarijih ergela u Srbiji</strong> osnovao je <strong>knez Miloš Obrenović</strong>
                  <strong>1860. godine</strong> na imanju <em>„Morava“</em>, pored <strong>Velike Morave</strong>, udaljenom <strong>5 km</strong> od grada.
                  <br /><br />
                  Osnovana je sa ciljem <em>unapređenja konjarstva</em> i uzgoja najboljih konjskih rasa.
                  Kasnije, njegov sin <strong>Mihailo</strong> ovom posedu od <strong>300 hektara</strong> daje ime <strong>„Ljubičevo“</strong>,
                  po svojoj majci, <strong>kneginji Ljubici</strong>.
                  <br /><br />
                  U Ljubičevu je podignut <strong>Ljubičin konak</strong>, kao i <strong>nekoliko štala</strong>
                  u kojima je knez držao svoje konje. Početkom <strong>20. veka</strong>, ergela postaje
                  <em>institucija evropskog ranga</em>, sa oko <strong>500 grla</strong>.
                  <br /><br />
                  Poznati konji iz ergele bili su <strong>Ljubičevac</strong>, <strong>Kastor</strong>, <strong>Ramoz</strong>, <strong>Hajdžan</strong>.
                  <br /><br />
                  <strong>Spomenik konju Ljubičevcu</strong>, pobedniku <em>„Tripla krune“</em> (nepobedivom galoperu),
                  nalazi se u centru ove <em>oaze mira i tišine</em>, gde postoje brojne <strong>staze za šetnju</strong>.
                  Za ergelu je vezana <strong>turističko-sportska manifestacija</strong> <em>„Ljubičevske konjičke igre“</em>.
                </p>
              </section>

              <img srcSet={`${pozarevac55} 450w, ${pozarevac5} `} alt="Narodni muzej u Požarevcu" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej u Požarevcu</strong>, osnovan <strong>1895. godine</strong>, drugi je <em>najstariji muzej u Srbiji</em>,
                  odmah nakon <strong>Narodnog muzeja u Beogradu</strong>.
                  <br /><br />
                  Pokriva teritoriju <strong>Braničevskog okruga</strong> i čuva više od <strong>50.000 muzejskih predmeta</strong>
                  iz različitih <em>istorijskih perioda</em>. Muzej ima nekoliko <strong>stalnih</strong> i <strong>povremenih postavki</strong>,
                  raspoređenih na više lokacija.
                  <br /><br />
                  <strong>Glavna zgrada muzeja</strong>, koja sadrži <em>stalnu arheološku postavku</em> i depo, nalazi se
                  u <strong>ulici Voje Dulića 10</strong>.
                  <br /><br />
                  U muzeju se nalaze <strong>unikatni predmeti</strong> svetskog značaja, kao što su:
                  pero <strong>CALAMUS</strong> za pisanje po <em>rimskim voštanim tablama</em>, jedinstvena <strong>numizmatička zbirka</strong>,
                  <strong>grb Viminaciuma</strong> od mermera u obliku potkovice, <strong>rimski i venecijanski zlatnici</strong>,
                  <strong>zlatnik Aleksandra Makedonskog</strong>, <strong>sarkofazi</strong>, <strong>skulpture</strong>,
                  <strong>medalje Požarevačkog mira</strong>
                </p>
              </section>

              <img srcSet={`${pozarevac66} 450w, ${pozarevac6} `} alt="Čačalica" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Čačalica</strong> je <em>brdo</em> koje se uzdiže iznad grada na <strong>203 m nadmorske visine</strong>.
                  <br /><br />
                  Pre <strong>300 godina</strong>, ovo područje je bilo <em>močvarno i nepristupačno</em>, o čemu postoje zapisi
                  iz <strong>turskog perioda</strong>. Vekovima je bila poznata kao <em>„ničije brdo“</em>,
                  sve do <strong>Drugog svetskog rata</strong>, kada je postala <strong>poligon za obuku vojnika Jugoslovenske vojske</strong>.
                  <br /><br />
                  Na ovom mestu je <strong>streljano oko 3000 antifašista i civila</strong>. Mesto gde se nalaze
                  njihovi posmrtni ostaci obeleženo je <strong>spomenikom</strong> u obliku <em>zida sa udubljenjima od pušaka</em>
                  i <em>simbolima koji podsećaju na streljanje žrtava</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Požarevac</strong> is an urban settlement and the seat of a territorial unit of the same name in Serbia.
                  It is the administrative center of the <strong>Braničevo District</strong>.
                  According to the <strong>2022 census</strong>, the population was <strong>42,530</strong>.
                  It is located in <strong>southern and eastern Serbia</strong>, between three rivers —
                  the <strong>Danube</strong>, <strong>Great Morava</strong>, and the <strong>Mlava</strong>.
                </p>
              </section>

              <img srcSet={`${pozarevac22} 450w, ${pozarevac2} `} alt="District Building in Požarevac" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>District Building</strong>, with its <em>imposing dimensions</em> and <em>decorative detailing</em>,
                  was the most representative and largest administrative building of its time in Serbia,
                  enabling closer ties with Europe.
                  <br /><br />
                  The site was previously home to the <strong>residence of Princess Ljubica</strong>, which was demolished.
                  The building was constructed in <strong>1889</strong> (in just one year), based on a design by engineer <strong>Miller</strong>.
                  The <em>district authorities</em> collected tax funds for <strong>five years</strong> to finance the construction of this impressive structure.
                  The <strong>facade</strong> was built in the spirit of <em>Viennese academism</em>, with forms and details
                  reminiscent of <strong>Italian Renaissance</strong> buildings.
                </p>
              </section>

              <img srcSet={`${pozarevac33} 450w, ${pozarevac3} `} alt="Monument to Prince Miloš in Požarevac" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Požarevac</strong> long served as the <em>second residence of Prince Miloš</em>. He built residences
                  for his family and himself, and developed trade, being a merchant himself.
                  He liberated the town from <strong>Ottoman rule</strong> during the <strong>Second Serbian Uprising in 1815</strong>.
                  <br /><br />
                  In gratitude, a <strong>monument to Prince Miloš</strong> was erected in <strong>1898</strong>,
                  unveiled by the then King of Serbia, <strong>Alexander Obrenović</strong>, in the presence
                  of his father, former king <strong>Milan Obrenović</strong>.
                  <br /><br />
                  The monument was <em>cast in bronze</em> and is the work of renowned sculptor <strong>Đorđe Jovanović</strong>,
                  made in <strong>Paris</strong> in <strong>1897</strong>. It stands in the <strong>center of the city park</strong>,
                  in front of the <strong>District Building</strong>.
                  <br /><br />
                  The monument bears the engraved years of Prince Miloš's birth (<strong>1780</strong>) and death (<strong>1860</strong>),
                  as well as his famous message to the Ottoman commander: <em>“Delibaša, imperial warrior, you have a way out,
                    but I have no other way but this one — toward life or death.”</em> It also marks the
                  <strong>1815 liberation</strong> of Požarevac from the Turks.
                  <br /><br />
                  The <strong>Tourist Organization of the City of Požarevac</strong> created a <em>brass replica of the statue</em>
                  as a symbol and representative souvenir of the city.
                  <br /><br />
                  <strong>Busts and memorial plaques of national heroes</strong> are also located in the city park,
                  alongside Prince Miloš, dedicated to <strong>Čeda Vasović</strong>, <strong>Boško Vrebalov</strong>,
                  <strong>Božidar Dimitrijević – Koziča</strong>, <strong>Veljko Dugosavić</strong>,
                  and the national tribune <strong>Vasa Pelagić</strong>.
                </p>
              </section>

              <img srcSet={`${pozarevac44} 450w, ${pozarevac4} `} alt="Ljubičevo Equestrian Estate" loading="lazy" />

              <section lang="en">
                <p>
                  One of the <strong>oldest horse farms in Serbia</strong> was founded by <strong>Prince Miloš Obrenović</strong>
                  in <strong>1860</strong> on the <em>“Morava”</em> estate, near the <strong>Great Morava River</strong>,
                  <strong>5 km</strong> from the city.
                  <br /><br />
                  It was established with the goal of <em>improving horse breeding</em> and raising top horse breeds.
                  Later, his son <strong>Mihailo</strong> named the <strong>300-hectare</strong> estate <strong>“Ljubičevo”</strong>,
                  after his mother, <strong>Princess Ljubica</strong>.
                  <br /><br />
                  In Ljubičevo, <strong>Ljubica’s residence</strong> was built, along with <strong>several stables</strong>
                  where the prince kept his horses. By the early <strong>20th century</strong>, the stud farm had become
                  an <em>institution of European renown</em>, with around <strong>500 horses</strong>.
                  <br /><br />
                  Famous horses from the estate included <strong>Ljubičevac</strong>, <strong>Kastor</strong>, <strong>Ramoz</strong>, and <strong>Hajdžan</strong>.
                  <br /><br />
                  The <strong>monument to the horse Ljubičevac</strong>, winner of the <em>“Triple Crown”</em> (an undefeated racehorse),
                  stands in the center of this <em>oasis of peace and quiet</em>, where there are numerous <strong>walking paths</strong>.
                  The equestrian estate is also the site of the <strong>tourism and sports event</strong> called the <em>“Ljubičevo Equestrian Games”</em>.
                </p>
              </section>

              <img srcSet={`${pozarevac55} 450w, ${pozarevac5} `} alt="National Museum in Požarevac" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>National Museum in Požarevac</strong>, founded in <strong>1895</strong>, is the <em>second oldest museum in Serbia</em>,
                  right after the <strong>National Museum in Belgrade</strong>.
                  <br /><br />
                  It covers the territory of the <strong>Braničevo District</strong> and houses more than <strong>50,000 museum artifacts</strong>
                  from various <em>historical periods</em>. The museum includes several <strong>permanent</strong> and <strong>temporary exhibitions</strong>,
                  spread across multiple locations.
                  <br /><br />
                  The <strong>Main Museum Building</strong>, which hosts the <em>permanent archaeological exhibition</em> and archive,
                  is located at <strong>10 Voje Dulića Street</strong>.
                  <br /><br />
                  The museum holds <strong>unique world-class artifacts</strong>, such as:
                  the <strong>CALAMUS pen</strong> used for writing on <em>Roman wax tablets</em>, a one-of-a-kind <strong>numismatic collection</strong>,
                  the <strong>coat of arms of Viminacium</strong> carved in marble in the shape of a horseshoe,
                  <strong>Roman and Venetian gold coins</strong>, a <strong>gold coin of Alexander the Great</strong>,
                  <strong>sarcophagi</strong>, <strong>sculptures</strong>, and <strong>medals from the Peace of Požarevac</strong>…
                </p>
              </section>

              <img srcSet={`${pozarevac66} 450w, ${pozarevac6} `} alt="Čačalica Memorial Park" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Čačalica</strong> is a <em>hill</em> rising above the city at an elevation of <strong>203 meters</strong>.
                  <br /><br />
                  <strong>300 years ago</strong>, this area was <em>swampy and inaccessible</em>, as recorded in documents
                  from the <strong>Ottoman period</strong>. For centuries, it was known as <em>“no man's hill”</em>,
                  until <strong>World War II</strong>, when it became a <strong>training ground for the Yugoslav Army</strong>.
                  <br /><br />
                  Around <strong>3,000 anti-fascists and civilians</strong> were <strong>executed</strong> at this location.
                  Their final resting place is marked by a <strong>monument</strong> in the form of a <em>wall with bullet marks</em>
                  and <em>symbols evoking the memory of the shootings</em>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Pozarevac;