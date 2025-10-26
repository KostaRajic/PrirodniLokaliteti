/* eslint-disable react/no-unknown-property */
import bg1 from "../../../assets/images/Beograd/Beograd/desktop/BG1.jpg";
import bg2 from "../../../assets/images/Beograd/Beograd/desktop/BG2.jpg";
import bg3 from "../../../assets/images/Beograd/Beograd/desktop/BG3.jpg";
import bg4 from "../../../assets/images/Beograd/Beograd/desktop/BG4.jpg";
import bg5 from "../../../assets/images/Beograd/Beograd/desktop/BG5.jpg";
import bg6 from "../../../assets/images/Beograd/Beograd/desktop/BG6.jpg";
import bg7 from "../../../assets/images/Beograd/Beograd/desktop/BG7.jpg";
import bg8 from "../../../assets/images/Beograd/Beograd/desktop/BG8.jpg";
import bg9 from "../../../assets/images/Beograd/Beograd/desktop/BG9.jpg";
import bg10 from "../../../assets/images/Beograd/Beograd/desktop/BG10.jpg";
import bg11 from "../../../assets/images/Beograd/Beograd/mobile/BGM1.jpg";
import bg22 from "../../../assets/images/Beograd/Beograd/mobile/BGM2.jpg";
import bg33 from "../../../assets/images/Beograd/Beograd/mobile/BGM3.jpg";
import bg44 from "../../../assets/images/Beograd/Beograd/mobile/BGM4.jpg";
import bg55 from "../../../assets/images/Beograd/Beograd/mobile/BGM5.jpg";
import bg66 from "../../../assets/images/Beograd/Beograd/mobile/BGM6.jpg";
import bg77 from "../../../assets/images/Beograd/Beograd/mobile/BGM7.jpg";
import bg88 from "../../../assets/images/Beograd/Beograd/mobile/BGM8.jpg";
import bg99 from "../../../assets/images/Beograd/Beograd/mobile/BGM9.jpg";
import bg100 from "../../../assets/images/Beograd/Beograd/mobile/BGM10.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Beograd2 = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();


  useEffect(() => {
    if (lang !== switchLanguage) {

      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  return (

    <>
      <Helmet>
        <title>{switchLanguage === 'rs' ? "Beograd | Serbia Wonders" : "Belgrade | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?

            "Beograd – glavni grad Srbije, spoj istorije i savremenosti, kulturni, politički i turistički centar sa bogatim nasleđem i dinamičnim životom." :
            "Belgrade, capital of Serbia, confluence of Sava and Danube, Kalemegdan, Saint Sava Temple, nightlife, culture, Belgrade tourism"
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Beograd, glavni grad Srbije, ušće Save i Dunava, Kalemegdan, Hram Svetog Save, noćni život, kultura, turizam Beograd" :
            "Belgrade, capital of Serbia, confluence of Sava and Danube, Kalemegdan, Saint Sava Temple, nightlife, culture, Belgrade tourism"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/beograd/beograd2`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/beograd/beograd2"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/beograd/beograd2"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/beograd/beograd2"
        />

      </Helmet >


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${bg33} 450w, ${bg3} `} alt="Beograd 1" loading="lazy" />

        <h1>Beograd</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang='sr'>
                <p>
                  <strong>Beograd</strong> je <strong>glavni grad Srbije</strong>, smešten na <em>ušću reka Save i Dunava</em>. Grad
                  ima bogatu istoriju koja seže više od <strong>2.000 godina</strong> unazad i bio je pod
                  vlašću mnogih carstava, uključujući <strong>Rimljane</strong>, <strong>Osmanlije</strong> i
                  <strong>Austro-Ugarsku</strong>. Danas je Beograd važno <strong>političko</strong>, <strong>kulturno</strong> i <strong>ekonomsko
                    središte</strong>, sa velikim brojem <strong>muzeja</strong>, <strong>galerija</strong>, <strong>pozorišta</strong> i <strong>restorana</strong>.
                  Grad je poznat po svojim <strong>istorijskim spomenicima</strong> kao što su <strong>Beogradska tvrđava</strong> i <strong>Hram Svetog Save</strong>,
                  ali i po <em>modernim četvrtima</em> i <em>živahnom noćnom životu</em>. Beograd je takođe i važan <strong>saobraćajni centar</strong>, sa
                  <strong>međunarodnim aerodromom</strong> i razvijenim <strong>železničkim</strong> i <strong>autobuskim mrežama</strong>.
                  Sa populacijom od oko <strong>1.7 miliona</strong>, Beograd je jedan od najvećih gradova
                  na <strong>Balkanu</strong>, poznat po <em>gostoprimstvu</em> i <em>energičnoj atmosferi</em>.
                </p>
              </section>

              <img srcSet={`${bg55} 450w, ${bg5} `} alt="Beograd 2" loading="lazy" />


              <section lang='sr'>
                <p>
                  Beograd je <strong>dinamičan grad</strong> koji spaja <em>prošlost i savremenost</em> na
                  jedinstven način. Kroz istoriju, bio je pod vlašću različitih
                  civilizacija, što je ostavilo trag na njegovoj <strong>arhitekturi</strong> i <strong>kulturi</strong>.
                  Grad je bio ključna tačka na <strong>trgovinskim rutama</strong> i često je bio meta
                  vojnih osvajanja. Iako je često razaran, Beograd je svaki put uspevao da
                  se obnovi i postane još značajniji. Danas je Beograd <strong>političko</strong> i
                  <strong>ekonomsko srce Srbije</strong>, a ujedno i važan <strong>centar Balkana</strong>.
                </p>
              </section>

              <img srcSet={`${bg11} 450w, ${bg1} `} alt="Beograd 3" loading="lazy" />


              <section lang='sr'>
                <p>
                  Grad se odlikuje <strong>prelepim parkovima</strong>, <strong>promenadama uz reke</strong>, ali i <em>modernim
                    četvrtima</em> i <strong>poslovnim centrima</strong>. Beograd ima bogat <strong>noćni život</strong> i poznat
                  je po <strong>kafanama</strong>, <strong>klubovima</strong> i <strong>koncertima</strong>. Grad je i važno <strong>kulturno
                    središte</strong>, domaćin mnogim <strong>manifestacijama</strong>, <strong>filmovima</strong>, <strong>muzičkim
                      festivalima</strong> i <strong>izložbama</strong>. Njegova arhitektura je mešavina <em>starih</em> i
                  <em>modernih zgrada</em>, sa uticajem <strong>neoklasicizma</strong>, <strong>baroka</strong>, ali i <strong>brutalizma</strong>.
                  Grad je domaćin velikim <strong>univerzitetima</strong> i <strong>istraživačkim institucijama</strong>.
                  Beograd je i <strong>grad sporta</strong>, poznat po velikim klubovima kao što su <strong>Crvena
                    zvezda</strong> i <strong>Partizan</strong>, koji se takmiče u brojnim sportovima.
                </p>
              </section>

              <img srcSet={`${bg44} 450w, ${bg4} `} alt="Grad Beograd" loading="lazy" />


              <section lang='sr'>
                <p>
                  Beograd se brzo razvija, sa rastućim sektorima <strong>tehnologije</strong> i <strong>turizma</strong>. Sa
                  svojom <em>živahnom atmosferom</em>, Beograd privlači turiste iz celog sveta.
                  Grad je poznat po svojoj <strong>multikulturalnosti</strong>, jer su u njemu živeli i
                  radili ljudi svih <strong>vera</strong> i <strong>nacija</strong>. Beograd je grad koji se <em>nikada ne
                    spava</em>, uvek je u pokretu i ima mnogo da ponudi svakom posetiocu.
                </p>
              </section>

              <img srcSet={`${bg22} 450w, ${bg2} `} alt="Zemun" loading="lazy" />


              <section lang='sr'>
                <p>
                  Za <strong>Zemun</strong> se često kaže da je "<em>grad u gradu</em>", a simbol ovog posebnog dela
                  Beograda je <strong>Milenijumska kula</strong> na brdu <strong>Gardoš</strong>, koja se nalazi u središtu
                  najstarijeg sačuvanog utvrđenja iz <strong>14. veka</strong>. Kula, poznata kao <strong>Kula Sibinjanin Janka</strong>,
                  otvorena je za posetioce tokom celog dana, a njen
                  najlepši deo je <em>terasa-vidikovac</em>, sa kojeg se pruža prelep pogled na
                  okolinu, naročito u <em>zimskim mesecima</em>, kada teleskop omogućava detaljno
                  posmatranje panorama. Stari Zemun očarava svojom <em>autentičnom atmosferom</em>,
                  sa uskim ulicama i starim građevinama iz perioda <strong>austrougarske vlasti</strong>.
                  Grad je prepoznatljiv po <em>gostoljubivosti</em> svojih ljudi, tradiciji, kao i
                  bogatoj ponudi <strong>nacionalne kuhinje</strong>. Zemun je idealno mesto za šetnju,
                  naročito duž <strong>Zemunski kej</strong>, koji je uvek pun posetilaca i pruža
                  <em>opuštajuću atmosferu</em> uz obalu Dunava. Tu možete uživati u <strong>ribljim
                    specijalitetima</strong> i opuštati se uz zvuke <em>starogradske muzike</em>.
                </p>
              </section>

              <img srcSet={`${bg66} 450w, ${bg6} `} alt="Park Topčider" loading="lazy" />


              <section lang='sr'>
                <p>
                  <strong>Park Topčider</strong> predstavlja ostatak nekadašnjih beogradskih šuma i deo
                  prirodne baštine grada. Tokom tridesetih godina <strong>19. veka</strong>, knez <strong>Miloš
                    Obrenović</strong> izgradio je ovde dvorski kompleks, stvarajući centar
                  <strong>političkog</strong>, <strong>kulturnog</strong> i <strong>duhovnog života Beograda</strong>. Ovaj park, smešten u
                  blizini samog centra grada, nekada je bio omiljeno izletište i lovište
                  kneževske porodice, a posetioci su dolazili u karucama i čezama. Krajem
                  <strong>19. veka</strong>, Topčider je postao dostupniji građanima jer je počela da
                  saobraća <strong>tramvajska linija</strong>. Danas, omeđen bulevarima <strong>vojvode Mišića</strong> i
                  <strong>vojvode Putnika</strong>, kao i tramvajskom linijom broj 3, Park Topčider ostaje
                  <strong>najstariji uređeni park u Srbiji</strong> i jedno od <strong>najlepših beogradskih
                    izletišta</strong>. Sa leve strane Topčiderske reke, u parku možete uživati u
                  <strong>šetnjama</strong> i obići značajne <strong>kulturne</strong> i <strong>istorijske spomenike</strong>, uključujući i
                  stalnu postavku <strong>Muzeja istorije Srbije</strong> u <strong>Konaku kneza Miloša</strong>.
                </p>
              </section>

              <img srcSet={`${bg77} 450w, ${bg7} `} alt="Savamala" loading="lazy" />


              <section lang='sr'>
                <p>
                  <strong>Savamala</strong>, nekada industrijska četvrt, danas je postala epicentar urbane
                  kulture u Beogradu. Sa starim zgradama koje odišu <strong>baroknim</strong> i <strong>secesijskim
                    stilovima</strong>, ovo područje uz obalu Save sada je domaćin brojnim kulturnim
                  sadržajima, kao i popularnim kafićima, restoranima i barovima. Mesto je
                  posebno omiljeno među mladima koji uživaju u noćnom životu, gde klubovi
                  i muzičke večeri traju do zore. <strong>Beton hala</strong>, koja se nalazi u neposrednoj
                  blizini reke, jedno je od najpoznatijih mesta, sa restoranskim i
                  klupskim sadržajem koji pružaju prelep pogled na <em>ušće Save u Dunav</em>.
                  Nastavak šetnje duž keja vodi do <strong>Sava Promenade</strong>, koja se prostire na 1,8
                  km i predstavlja omiljeni deo grada za sve generacije. Ova promenada je
                  deo modernog beogradskog kompleksa <strong>Belgrade Waterfront</strong>, a idealna je za
                  šetnje, vožnju biciklom ili uživanje u rekreaciji. Sava Promenada nudi
                  raznovrsnu gastronomiju, kao i brojne terase sa pogledom na reku, a tu
                  su i sportske površine, kao što su teren za odbojku i teretana na
                  otvorenom. Kroz čitavu godinu, ovaj prostor postaje centar kulturnih,
                  sportskih i drugih događanja, a vikendom je naročito živahno, sa brojnim
                  manifestacijama koje okupljaju posetioce.
                </p>
              </section>

              <img
                srcSet={`${bg88} 450w, ${bg8} `}
                alt="Ušće Shopping Center"
                loading="lazy"
              />


              <section lang='sr'>
                <p>
                  <strong>Ušće Shopping Center</strong> je jedan od najvećih i najmodernijih tržnih centara
                  u Beogradu. Smešten u blizini reke Save, u samom srcu Beograda, pruža
                  posetiocima širok spektar prodavnica, restorana, kafića i zabavnih
                  sadržaja. Posetioci mogu uživati u kupovini poznatih brendova, kao i u
                  raznovrsnoj ponudi elektronike, odeće i obuće. Osim toga, Ušće nudi i
                  bioskop, što ga čini idealnim mestom za celodnevni izlazak. Tržni centar
                  je popularno odredište za porodice, jer pored prodavnica i restorana,
                  nudi i igraonice i druge zabavne aktivnosti za decu. Sa odličnom
                  povezanošću sa gradom i velikim parkingom, Ušće Shopping Center je lako
                  dostupno i omiljeno mesto za sve ljubitelje <em>kupovine i zabave</em>.
                </p>
              </section>

              <img
                srcSet={`${bg99} 450w, ${bg9} `}
                alt="Noćni život Beograd"
                loading="lazy"
              />

              <section lang='sr'>
                <p>
                  Beograd, grad koji <strong>nikada ne spava</strong>, nudi nezaboravan noćni život sa
                  bogatom ponudom zabave za sve generacije. Spavovi na obalama Save i
                  Dunava pružaju celonoćnu zabavu, sa muzičkim žanrovima koji variraju od
                  narodne muzike, domaćeg popa, rock’n’rolla do elektronske muzike.
                  Popularne lokacije su obala Dunava kod <strong>Hotela Jugoslavija</strong>, obala Save
                  između mostova, kao i <em>Ada Ciganlija</em>. Odabir mesta za izlazak je
                  jednostavan – dovoljno je oslušnuti ritam muzike, pogledati ko ulazi i
                  izlazi i odlučiti se prema atmosferi. Na obali Dunava nalaze se
                  moderniji i sofisticiraniji klubovi, dok obala Save nudi boemsku i
                  urbanu atmosferu, dok Ada Ciganlija pruža opuštenu i laganu atmosferu uz
                  jezero. Uz uživanje u ludo provedenim noćima na spavovima i u klubovima
                  sa poznatim DJ-evima, jedinstvena beogradska iskustva čine i večeri uz
                  tamburaše u restoranima, što posetiocima Beograda ostaje u nezaboravnom
                  sećanju kao pravi ugođaj za dušu.
                </p>
              </section>


              <img
                srcSet={`${bg100} 450w, ${bg10} `}
                alt="Beogradski ZOO vrt"
                loading="lazy"
              />

              <section lang='sr'>
                <p>
                  <strong>Beogradski zoološki vrt</strong>, poznat i kao "<em>Vrt dobre nade</em>", jedan je od
                  najstarijih i najposećenijih zooloških vrtova u Srbiji. Smešten je u
                  samom centru Beograda, u parku Kalemegdan, i prostire se na površini od
                  oko 7 hektara. Ovaj zoološki vrt dom je brojnim vrstama životinja,
                  uključujući sisavce, ptice, reptile i druge egzotične vrste. Beogradski
                  zoo vrt je odlično uređen, sa različitim paviljonima i enclosures koji
                  omogućavaju posetiocima da izbliza vide životinje u njihovim prirodnim
                  uslovima. Pored klasičnih životinja, kao što su <strong>lavovi, tigar, slonovi</strong> i
                  majmuni, ovde se mogu videti i retke i ugrožene vrste, kao što su albino
                  krokodili, žirafe, antilope i mnoge ptice, uključujući i razne vrste
                  papagaja. Zoološki vrt je popularno odredište za porodice sa decom, ali
                  i za sve one koji žele da se opuste i uživaju u prirodi i životinjskom
                  svetu. Pored stalnih izložbi, vrt često organizuje edukativne programe i
                  manifestacije, kao i tematske događaje. Vrt takođe aktivno učestvuje u
                  zaštiti ugroženih vrsta i u realizaciji različitih projekata očuvanja
                  prirode. Beogradski zoološki vrt pruža jedinstveno iskustvo za
                  ljubitelje životinja i prirode, kao i priliku da saznate više o važnosti
                  očuvanja biodiverziteta.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang='en'>
                <p> <strong>Belgrade</strong> is the <strong>capital of Serbia</strong>, located at the <em>confluence of the Sava and Danube rivers</em>. The city has a rich history dating back more than <strong>2,000 years</strong> and has been under the rule of many empires, including the <strong>Romans</strong>, the <strong>Ottomans</strong>, and the <strong>Austro-Hungarians</strong>. Today, Belgrade is an important <strong>political</strong>, <strong>cultural</strong>, and <strong>economic center</strong>, with a large number of <strong>museums</strong>, <strong>galleries</strong>, <strong>theaters</strong>, and <strong>restaurants</strong>. The city is known for its <strong>historic landmarks</strong> such as the <strong>Belgrade Fortress</strong> and the <strong>Temple of Saint Sava</strong>, as well as its <em>modern districts</em> and <em>vibrant nightlife</em>. Belgrade is also an important <strong>transport hub</strong>, featuring an <strong>international airport</strong> and well-developed <strong>railway</strong> and <strong>bus networks</strong>. With a population of around <strong>1.7 million</strong>, Belgrade is one of the largest cities in the <strong>Balkans</strong>, known for its <em>hospitality</em> and <em>energetic atmosphere</em>. </p>
              </section>

              <img srcSet={`${bg55} 450w, ${bg5} `} alt="Belgrade 2" loading="lazy" />

              <section lang='en'>
                <p> Belgrade is a <strong>dynamic city</strong> that uniquely combines the <em>past and the present</em>. Throughout history, it has been under the rule of various civilizations, which left their mark on its <strong>architecture</strong> and <strong>culture</strong>. The city was a key point on <strong>trade routes</strong> and was often a target of military conquests. Although frequently destroyed, Belgrade always managed to rebuild and become even more significant. Today, Belgrade is the <strong>political</strong> and <strong>economic heart of Serbia</strong>, and also an important <strong>Balkan center</strong>. </p>
              </section>

              <img srcSet={`${bg11} 450w, ${bg1} `} alt="Belgrade 3" loading="lazy" />

              <section lang='en'>
                <p> The city features <strong>beautiful parks</strong>, <strong>river promenades</strong>, as well as <em>modern districts</em> and <strong>business centers</strong>. Belgrade has a rich <strong>nightlife</strong> and is famous for its <strong>traditional taverns (kafanas)</strong>, <strong>clubs</strong>, and <strong>concerts</strong>. It is also an important <strong>cultural hub</strong>, hosting many <strong>events</strong>, <strong>films</strong>, <strong>music festivals</strong>, and <strong>exhibitions</strong>. Its architecture is a blend of <em>old</em> and <em>modern buildings</em>, influenced by <strong>neoclassicism</strong>, <strong>baroque</strong>, and <strong>brutalism</strong>. The city is home to major <strong>universities</strong> and <strong>research institutions</strong>. Belgrade is also a <strong>sports city</strong>, known for big clubs such as <strong>Crvena zvezda</strong> and <strong>Partizan</strong>, which compete in many sports. </p>
              </section>

              <img srcSet={`${bg44} 450w, ${bg4} `} alt="City of Belgrade" loading="lazy" />

              <section lang='en'>
                <p> Belgrade is rapidly developing, with growing <strong>technology</strong> and <strong>tourism sectors</strong>. With its <em>vibrant atmosphere</em>, Belgrade attracts tourists from all over the world. The city is known for its <strong>multiculturalism</strong>, having been home to people of various <strong>faiths</strong> and <strong>nations</strong>. Belgrade is a city that <em>never sleeps</em>, always on the move and offering plenty to every visitor. </p>
              </section>

              <img srcSet={`${bg22} 450w, ${bg2} `} alt="Zemun" loading="lazy" />

              <section lang='en'>
                <p> <strong>Zemun</strong> is often called a "<em>city within the city</em>", and the symbol of this special part of Belgrade is the <strong>Millennium Tower</strong> on <strong>Gardoš Hill</strong>, located in the center of the oldest preserved fortress from the <strong>14th century</strong>. The tower, known as <strong>Sibinjanin Janko's Tower</strong>, is open to visitors all day, and its most beautiful feature is the <em>viewing terrace</em>, offering a stunning panorama of the surroundings, especially during the <em>winter months</em>, when a telescope allows detailed observation of the landscape. Old Zemun enchants with its <em>authentic atmosphere</em>, narrow streets, and old buildings from the period of <strong>Austro-Hungarian rule</strong>. The town is known for the <em>hospitality</em> of its people, its traditions, and its rich offer of <strong>national cuisine</strong>. Zemun is an ideal place for walking, especially along the <strong>Zemun Quay</strong>, which is always full of visitors and offers a <em>relaxing atmosphere</em> by the Danube river. Here you can enjoy <strong>fish specialties</strong> and unwind to the sounds of <em>traditional old town music</em>. </p>
              </section>

              <img srcSet={`${bg66} 450w, ${bg6} `} alt="Topčider Park" loading="lazy" />

              <section lang='en'>
                <p> <strong>Topčider Park</strong> represents a remnant of the once vast Belgrade forests and is part of the city's natural heritage. During the 1830s, Prince <strong>Miloš Obrenović</strong> built a royal complex here, creating the center of <strong>political</strong>, <strong>cultural</strong>, and <strong>spiritual life of Belgrade</strong>. This park, located close to the city center, was once a favorite excursion and hunting ground of the princely family, with visitors arriving in carriages and coaches. By the end of the <strong>19th century</strong>, Topčider became more accessible to citizens with the introduction of the <strong>tram line</strong>. Today, bordered by the boulevards of <strong>Vojvoda Mišić</strong> and <strong>Vojvoda Putnik</strong>, as well as tram line number 3, Topčider Park remains the <strong>oldest landscaped park in Serbia</strong> and one of the <strong>most beautiful excursion spots in Belgrade</strong>. On the left side of the Topčiderska river, visitors can enjoy <strong>walks</strong> and visit significant <strong>cultural</strong> and <strong>historical monuments</strong>, including the permanent exhibition of the <strong>History Museum of Serbia</strong> located in the <strong>Konak of Prince Miloš</strong>. </p>
              </section>

              <img srcSet={`${bg77} 450w, ${bg7} `} alt="Savamala" loading="lazy" />

              <section lang='en'>
                <p> <strong>Savamala</strong>, once an industrial district, has become the epicenter of urban culture in Belgrade. With old buildings featuring <strong>baroque</strong> and <strong>Art Nouveau styles</strong>, this area along the Sava river now hosts numerous cultural venues, as well as popular cafés, restaurants, and bars. The place is especially favored by young people who enjoy the nightlife, where clubs and music events last until dawn. <strong>Beton Hala</strong>, located near the river, is one of the most famous spots, offering restaurant and club venues with a beautiful view of the <em>confluence of the Sava and Danube rivers</em>. Continuing along the quay leads to the <strong>Sava Promenade</strong>, which stretches for 1.8 km and is a favorite part of the city for all generations. This promenade is part of the modern Belgrade Waterfront complex, ideal for walking, cycling, or enjoying recreational activities. Sava Promenade offers diverse gastronomy and numerous terraces overlooking the river, along with sports facilities such as a volleyball court and an outdoor gym. Throughout the year, this area becomes a center of cultural, sports, and other events, and it is especially lively on weekends with many gatherings attracting visitors. </p>
              </section>

              <img
                srcSet={`${bg88} 450w, ${bg8} `}
                alt="Ušće Shopping Center"
                loading="lazy"
              />

              <section lang='en'>
                <p> <strong>Ušće Shopping Center</strong> is one of the largest and most modern malls in Belgrade. Located near the Sava river, in the very heart of the city, it offers visitors a wide range of shops, restaurants, cafés, and entertainment options. Visitors can enjoy shopping for famous brands as well as a diverse selection of electronics, clothing, and footwear. Additionally, Ušće offers a cinema, making it an ideal place for a full day out. The mall is a popular destination for families since it provides, besides shops and restaurants, play areas and other fun activities for children. With excellent connectivity to the city and a large parking lot, Ušće Shopping Center is easily accessible and a favorite spot for all lovers of <em>shopping and entertainment</em>. </p>
              </section>

              <img
                srcSet={`${bg99} 450w, ${bg9} `}
                alt="Belgrade Nightlife"
                loading="lazy"
              />

              <section lang='en'>
                <p> Belgrade, the city that <strong>never sleeps</strong>, offers an unforgettable nightlife with a rich entertainment selection for all generations. The floating clubs along the banks of the Sava and Danube rivers provide all-night fun, featuring musical genres ranging from folk music, domestic pop, rock’n’roll to electronic music. Popular spots include the Danube riverbank near the <strong>Hotel Jugoslavija</strong>, the Sava riverbank between the bridges, as well as <em>Ada Ciganlija</em>. Choosing a place to go out is easy – just listen to the rhythm of the music, watch who’s coming and going, and decide based on the atmosphere. On the Danube riverbank, you’ll find more modern and sophisticated clubs, while the Sava riverbank offers a bohemian and urban vibe, and Ada Ciganlija provides a relaxed and easygoing atmosphere by the lake. Along with wild nights at the floating clubs and clubs with famous DJs, unique Belgrade experiences also include evenings with tamburica bands in restaurants, leaving visitors with unforgettable memories and a true soul-pleasing vibe. </p>
              </section>

              <img
                srcSet={`${bg100} 450w, ${bg10} `}
                alt="Belgrade Zoo"
                loading="lazy"
              />

              <section lang='en'>
                <p> The <strong>Belgrade Zoo</strong>, also known as the "<em>Garden of Good Hope</em>", is one of the oldest and most visited zoos in Serbia. It is located in the heart of Belgrade, in Kalemegdan Park, covering an area of about 7 hectares. This zoo is home to numerous animal species, including mammals, birds, reptiles, and other exotic animals. The Belgrade Zoo is well-maintained, with various pavilions and enclosures that allow visitors to see the animals up close in their natural-like environments. Besides classic animals such as <strong>lions, tigers, elephants</strong>, and monkeys, visitors can also see rare and endangered species like albino crocodiles, giraffes, antelopes, and many birds, including various types of parrots. The zoo is a popular destination for families with children, as well as for anyone looking to relax and enjoy nature and the animal world. In addition to permanent exhibits, the zoo frequently organizes educational programs and events, as well as themed activities. It also actively participates in the protection of endangered species and various nature conservation projects. The Belgrade Zoo offers a unique experience for animal and nature lovers and provides an opportunity to learn more about the importance of biodiversity conservation. </p>
              </section>

            </>
          )}

      </div>

    </>
  );
};

export default Beograd2;