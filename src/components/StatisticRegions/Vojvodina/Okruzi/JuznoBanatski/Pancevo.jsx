/* eslint-disable react/no-unknown-property */
import pancevo1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo2.jpg";
import pancevo2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo3.jpg";
import pancevo3narodnaBasta1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo4narodnaBasta1.jpg";
import pancevo3narodnaBasta2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo4narodnaBasta2.jpg";
import pancevo3narodnaBasta3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo4narodnaBasta3.jpg";
import pancevo3narodnaBasta4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo4narodnaBasta4.jpg";
import pancevo4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo5.jpg";
import pancevo5 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo6.jpg";
import pancevo6 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo7.jpg";
import pancevo7 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/desktop/pancevo8.jpg";
import pancevo11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo2.jpg";
import pancevo22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo3.jpg";
import pancevo3narodnaBasta11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo4narodnaBasta1.jpg";
import pancevo3narodnaBasta22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo4narodnaBasta2.jpg";
import pancevo3narodnaBasta33 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo4narodnaBasta3.jpg";
import pancevo3narodnaBasta44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo4narodnaBasta4.jpg";
import pancevo44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo5.jpg";
import pancevo55 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo6.jpg";
import pancevo66 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo7.jpg";
import pancevo77 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Pancevo/mobile/Mpancevo8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Pancevo = () => {
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
            ? 'Pančevo | Grad kulture, istorije i prirode na ušću Tamiša'
            : 'Pančevo | City of Culture, History & Nature at the Tamiš River'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Pančevo je jedan od najvažnijih gradova u Vojvodini – industrijski centar sa bogatom kulturnom baštinom. Otkrijte atrakcije, muzeje, Narodnu baštu i znamenitosti u ovom jedinstvenom gradu na ušću Tamiša u Dunav.'
              : 'Pančevo is one of the most important cities in Vojvodina – an industrial hub with rich cultural heritage. Discover its attractions, museums, National Garden park, and landmarks at the confluence of the Tamiš and Danube rivers.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Pančevo, turizam, Vojvodina, Banat, Narodna bašta, Tamiš, Dunav, Narodni muzej, industrija, istorija, kultura, Paja Jovanović, izložbe, galerije, parkovi u Pančevu, putovanja'
              : 'Pančevo, tourism, Vojvodina, Banat, National Garden, Tamiš, Danube, National Museum, industry, history, culture, Paja Jovanović, exhibitions, galleries, parks in Pančevo, travel'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/pancevo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/pancevo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/pancevo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/pancevo"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(juznoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${pancevo44} 450w, ${pancevo4} `} alt="Pančevo grad" />

        <h2>Pančevo</h2>

        {switchLanguage === 'en' ?
          (

            <>

              <section lang="sr">
                <p>
                  <strong>Pančevo</strong> je jedan od <em>najistaknutijih gradova u Vojvodini</em>, prepoznatljiv po <strong>visokom stepenu industrijalizacije</strong>.
                </p>
                <p>
                  I pored toga, grad ima <em>bogatu kulturnu baštinu</em> i značajnu ulogu u <strong>očuvanju tradicija</strong> ovog regiona.
                </p>
                <p>
                  Pančevo je takođe <strong>važan centar za turizam</strong>, sa brojnim ponudama koje zadovoljavaju <em>različite ukuse</em>.
                </p>
                <p>
                  Na našoj stranici posvećenoj ovom gradu, možete pronaći sve potrebne informacije za <strong>nezaboravno putovanje</strong>: od <em>najboljih restorana</em>, <em>udobnih apartmana</em>, do <strong>najinteresantnijih atrakcija</strong>.
                </p>
                <p>
                  Otkrijte <strong>lepotu Banata</strong> i uživajte u svemu što <em>Pančevo</em> nudi!
                </p>
              </section>

              <img srcSet={`${pancevo22} 450w, ${pancevo2} `} alt="Pančevo grad 2" />

              <section lang="sr">
                <p>
                  <strong>Pančevo</strong>, smešteno na ušću reke <em>Tamiš</em> u <em>Dunav</em>, predstavlja značajan grad u <em>južnom delu Vojvodine</em>.
                </p>
                <p>
                  Osim što je <strong>industrijski centar</strong>, Pančevo je poznato i po svojoj <em>bogatoj istoriji</em> koja datira još od <em>rimskih vremena</em>.
                </p>
                <p>
                  Grad se razvijao kroz različite <em>kulturne epohe</em>, što je ostavilo dubok trag na njegovu <strong>arhitekturu</strong>, <strong>tradiciju</strong> i svakodnevni život.
                </p>
                <p>
                  Jedna od ključnih karakteristika Pančeva je njegov <strong>strateški položaj</strong>, što ga čini važnim <em>čvorištem saobraćaja</em>, povezujući ga sa <em>Beogradom</em> i drugim delovima Srbije.
                </p>
                <p>
                  Grad je dom brojnim <strong>kulturnim institucijama</strong>, među kojima se izdvaja <em>Narodni muzej</em>, <em>kulturni centar</em>, kao i brojne galerije i pozorišta koja bogate kulturnu ponudu.
                </p>
                <p>
                  Pančevo je takođe poznato po <strong>tradiciji sporta</strong>, a sportski entuzijasti mogu uživati u raznim manifestacijama i takmičenjima.
                </p>
              </section>

              <div className="fourImages">
                <img
                  srcSet={`${pancevo3narodnaBasta11} 450w, ${pancevo3narodnaBasta1} `}
                  alt="Pančevo Narodna Bašta 1"
                />
                <img
                  srcSet={`${pancevo3narodnaBasta22} 450w, ${pancevo3narodnaBasta2} `}
                  alt="Pančevo Narodna Bašta 2"
                />
              </div>
              <div className="fourImages">
                <img
                  srcSet={`${pancevo3narodnaBasta33} 450w, ${pancevo3narodnaBasta3} `}
                  alt="Pančevo Narodna Bašta 3"
                />
                <img
                  srcSet={`${pancevo3narodnaBasta44} 450w, ${pancevo3narodnaBasta4} `}
                  alt="Pančevo Narodna Bašta 4"
                />
              </div>

              <section lang="sr">
                <p>
                  Na inicijativu brigadnog generala <strong>Mihajla Mihaljevića</strong>, mala zelena površina na ivici grada je <em>1829. godine</em> uređena i pretvorena u pravi <strong>zeleni raj</strong>, postajući <strong>najveći park u Pančevu</strong>.
                </p>
                <p>
                  Od tog trenutka, <strong>Narodna bašta</strong> je postala omiljeno šetalište i mesto za uživanje u prirodi.
                </p>
                <p>
                  Park je doživeo svoj vrhunac tokom priprema i održavanja <em>„Velike zanatske i poljoprivredne izložbe Pančeva i okoline“</em>, koja se održala od <em>15. avgusta do 15. septembra 1905. godine</em>. Međunarodnu izložbu posetilo je čak <strong>104.080 ljudi</strong>.
                </p>
                <p>
                  Od <em>2008. godine</em>, započela je rekonstrukcija parka, koji je tokom <em>devedesetih godina</em> bio u lošem stanju.
                </p>
                <p>
                  Zahvaljujući velikom trudu <strong>JKP „Zelenilo“</strong>, Narodna bašta je doživela potpuni preporod. Urađene su pešačke staze, postavljena dečija igrališta, otvorena kafe-galerija, instalirane sprave za rekreaciju, a rekonstruisan je i <strong>paviljon</strong> u kojem se tokom leta održavaju koncerti i kulturni programi.
                </p>
              </section>

              <img srcSet={`${pancevo11} 450w, ${pancevo1} `} alt="Pančevo Nardoni Muzej" />

              <section lang="sr">
                <p>
                  Narodni muzej je osnovao <strong>dr Borisav Jankulov</strong> <em>1923. godine</em>. Muzej je nastao iz privatnih zbirki i spada među starije institucije ovog tipa u zemlji.
                </p>
                <p>
                  To je muzejski kompleks sa različitim odeljenjima, uključujući <em>etnologiju</em>, <em>arheologiju</em>, <em>istoriju</em>, <em>istoriju umetnosti</em>, kao i centar za dokumentaciju, biblioteku, foto i preparatorsku laboratoriju.
                </p>
                <p>
                  Danas, Narodni muzej predstavlja modernu instituciju sa bogatom i vrednom stalnom postavkom, galerijama i depoima u kojima se čuvaju hiljade pažljivo prikupljenih i stručno obrađenih muzealija.
                </p>
                <p>
                  Takođe, muzejski rad je unapređen korišćenjem računarske i druge elektronske opreme, koja je neophodna za rad muzeja u 21. veku.
                </p>
                <p>
                  Među eksponatima koji se ovde čuvaju su i dela od velikog značaja, poput slike <em>„Seobe Srba“</em> Paje Jovanovića, zastave Srpskog Vojvodstva iz <em>1848. godine</em>, kao i predmeti iz <em>„Starčevačke kulture“</em>, stari više hiljada godina, koji svojom vrednošću daleko prevazilaze lokalne okvire.
                </p>
              </section>

              <img srcSet={`${pancevo55} 450w, ${pancevo5} `} alt="Pančevo Park Prirode Ponjavica" />


              <section lang="sr">
                <p>
                  Park prirode <strong>Ponjavica</strong> smešten je <em>15 kilometara</em> od Pančeva, između sela <strong>Omoljica</strong> i <strong>Banatski Brestovac</strong>.
                </p>
                <p>
                  <strong>Ponjavica</strong> se formira kod sela Omoljica i proteže se na <em>deset kilometara</em>, od kojih <em>7,2 kilometra</em> čini zaštićeni deo.
                </p>
                <p>
                  Ukupna površina parka je <strong>134 hektara</strong>.
                </p>
                <p>
                  Jedinstvene karakteristike parka prirode Ponjavica su stalne vodene površine i kontrast između strme leve i niske desne obale reke, koja je omeđena koritom.
                </p>
                <p>
                  Na ovom prostoru se nalaze mozaici biljnih zajednica različitih tipova vegetacije, uključujući vodene, barske i močvarne biljne vrste, kao i šumske ekosisteme.
                </p>
                <p>
                  Ovaj park se odlikuje i raznolikošću zelenih površina koje se smenjuju, kao i prisustvom žbunova, voćnjaka i stabala, dok je njegova blizina naselja i vikend zona dodatno upotpunjuje.
                </p>
                <p>
                  Ova biološka i ekološka raznovrsnost stvara potencijal za razvoj turističkih sadržaja, sa posebnim naglaskom na rekreaciju i ekološko obrazovanje.
                </p>
              </section>

              <img
                srcSet={`${pancevo66} 450w, ${pancevo6} `}
                alt="Pančevo Ivanovačka Ada"
              />

              <section lang="sr">
                <p>
                  Na svega <strong>2,5 kilometra</strong> od sela <strong>Ivanovo</strong> i <strong>21 kilometar</strong> od Pančeva, nalazi se specijalni rezervat prirode <strong>Ivanovačka ada</strong>, poznata kao preostali deo nekadašnjih poplavnih šuma koje su prekrivale dunavske ade.
                </p>
                <p>
                  Rezervat obuhvata usku Adu širine od <em>2 do 7 kilometara</em> i zbog prisustva autohtonih vrsta drveća, kao što su <strong>topola</strong>, <strong>crna i bela vrba</strong>, <strong>jasen</strong> i posebno <strong>hrast lužnjak</strong>, svrstava se u botanički dragulj prirode.
                </p>
                <p>
                  Za ljubitelje prirode i ribolova, posebno su zanimljiva područja <strong>Dunaovac</strong> i <strong>Zimovnik</strong>, gde možete napraviti spektakularne fotografije u svim godišnjim dobima i vremenskim uslovima.
                </p>
                <p>
                  Jedan od najimpresivnijih stanovnika ovog područja je <strong>hrast lužnjak</strong>, star više od <em>180 godina</em>, koji se nalazi u blizini Dunaovca i predstavlja pravi prirodni spomenik, podsećajući nas na nekadašnju dominaciju ove vrste u regionu.
                </p>
              </section>

              <img
                srcSet={`${pancevo77} 450w, ${pancevo7} `}
                alt="Pančevo Gradska Šuma"
              />

              <section lang="sr">
                <p>
                  Na svega nekoliko minuta hoda od centra Pančeva, na desnoj obali reke <strong>Tamiš</strong>, smeštena je prava prirodna oaza – močvarno područje koje je dom za brojne ptice, među kojima se izdvajaju <strong>siva čaplja</strong> i izuzetno ugrožena <strong>crna roda</strong>.
                </p>
                <p>
                  Ovaj prostor, koji se prostire od železničkog mosta do ušća u Dunav, poznat je kao <strong>Gradska šuma</strong>. Biljni svet ovog područja karakterišu pretežno drvenaste vrste, kao što su <strong>hrast lužnjak</strong>, <strong>vrba</strong> i <strong>crna i bela topola</strong>.
                </p>
                <p>
                  Takođe, nije retko videti <strong>srne</strong> i <strong>divlje svinje</strong> koje se kreću kroz ovu bogatu vegetaciju. Za samo nekoliko minuta vožnje čamcem, možete se potpuno distancirati od gradske vreve i uroniti u tišinu prirode.
                </p>
                <p>
                  Prelaskom na drugu obalu Tamiša, nasipom možete krenuti uzvodno prema <em>Jabuци</em> i poznatim kubicima ili nizvodno do jednog od simbola Pančeva – <strong>svetiionika</strong>.
                </p>
                <p>
                  Prelaz sa gradskog Keja moguć je svakodnevno od <strong>11 časova</strong>, a vožnje traju do kasno u noć, omogućavajući posetiocima da uživaju u prelepim pejzažima i mirnom okruženju.
                </p>
              </section>

            </>
          )
          :
          (
            <><section lang="en">
              <p>
                <strong>Pančevo</strong> is one of the <em>most prominent cities in Vojvodina</em>, known for its <strong>high level of industrialization</strong>.
              </p>
              <p>
                Despite this, the city has a <em>rich cultural heritage</em> and plays a significant role in <strong>preserving the traditions</strong> of the region.
              </p>
              <p>
                Pančevo is also an <strong>important tourism center</strong>, offering a variety of options to satisfy <em>differing tastes</em>.
              </p>
              <p>
                On our page dedicated to this city, you can find all the necessary information for an <strong>unforgettable journey</strong>: from <em>the best restaurants</em> and <em>comfortable apartments</em> to <strong>the most interesting attractions</strong>.
              </p>
              <p>
                Discover the <strong>beauty of Banat</strong> and enjoy everything that <em>Pančevo</em> has to offer!
              </p>
            </section><img srcSet={`${pancevo22} 450w, ${pancevo2} `} alt="City of Pančevo 2" /><section lang="en">
                <p>
                  <strong>Pančevo</strong>, located at the confluence of the <em>Tamiš</em> and <em>Danube</em> rivers, is a significant city in the <em>southern part of Vojvodina</em>.
                </p>
                <p>
                  Besides being an <strong>industrial center</strong>, Pančevo is known for its <em>rich history</em> dating back to <em>Roman times</em>.
                </p>
                <p>
                  The city developed through various <em>cultural eras</em>, which have left a deep mark on its <strong>architecture</strong>, <strong>tradition</strong>, and everyday life.
                </p>
                <p>
                  One of Pančevo’s key features is its <strong>strategic location</strong>, making it an important <em>traffic hub</em>, connecting it with <em>Belgrade</em> and other parts of Serbia.
                </p>
                <p>
                  The city is home to numerous <strong>cultural institutions</strong>, including the <em>National Museum</em>, <em>cultural centers</em>, and many galleries and theaters enriching the cultural scene.
                </p>
                <p>
                  Pančevo is also known for its <strong>sports tradition</strong>, where sports enthusiasts can enjoy various events and competitions.
                </p>
              </section><div className="fourImages">
                <img
                  srcSet={`${pancevo3narodnaBasta11} 450w, ${pancevo3narodnaBasta1} `}
                  alt="Pančevo Narodna Bašta 1" />
                <img
                  srcSet={`${pancevo3narodnaBasta22} 450w, ${pancevo3narodnaBasta2} `}
                  alt="Pančevo Narodna Bašta 2" />
              </div><div className="fourImages">
                <img
                  srcSet={`${pancevo3narodnaBasta33} 450w, ${pancevo3narodnaBasta3} `}
                  alt="Pančevo Narodna Bašta 3" />
                <img
                  srcSet={`${pancevo3narodnaBasta44} 450w, ${pancevo3narodnaBasta4} `}
                  alt="Pančevo Narodna Bašta 4" />
              </div><section lang="en">
                <p>
                  On the initiative of Brigadier General <strong>Mihajlo Mihaljević</strong>, a small green area on the city’s edge was <em>arranged in 1829</em> and transformed into a true <strong>green paradise</strong>, becoming the <strong>largest park in Pančevo</strong>.
                </p>
                <p>
                  Since then, <strong>Narodna bašta</strong> has become a favorite promenade and a place to enjoy nature.
                </p>
                <p>
                  The park reached its peak during the preparations and holding of the <em>"Great Crafts and Agricultural Exhibition of Pančevo and Surroundings"</em>, which took place from <em>August 15 to September 15, 1905</em>. The international exhibition was visited by as many as <strong>104,080 people</strong>.
                </p>
                <p>
                  Since <em>2008</em>, reconstruction of the park began, as it was in poor condition during the <em>1990s</em>.
                </p>
                <p>
                  Thanks to the great effort of <strong>JKP "Zelenilo"</strong>, Narodna bašta has been fully revitalized. Walking paths were built, children’s playgrounds installed, a café-gallery opened, exercise equipment installed, and the <strong>pavilion</strong> was reconstructed where concerts and cultural programs are held during the summer.
                </p>
              </section><img srcSet={`${pancevo11} 450w, ${pancevo1} `} alt="Pančevo National Museum" /><section lang="en">
                <p>
                  The National Museum was founded by <strong>Dr. Borisav Jankulov</strong> in <em>1923</em>. The museum originated from private collections and is among the older institutions of its kind in the country.
                </p>
                <p>
                  It is a museum complex with various departments including <em>ethnology</em>, <em>archaeology</em>, <em>history</em>, <em>art history</em>, as well as a documentation center, library, photo, and preparation laboratories.
                </p>
                <p>
                  Today, the National Museum represents a modern institution with a rich and valuable permanent exhibition, galleries, and storage facilities where thousands of carefully collected and professionally processed artifacts are kept.
                </p>
                <p>
                  The museum’s work has also been improved by the use of computer and other electronic equipment necessary for a 21st-century institution.
                </p>
                <p>
                  Among the exhibits preserved here are works of great significance, such as the painting <em>"The Migration of the Serbs"</em> by Paja Jovanović, the flag of the Serbian Vojvodina from <em>1848</em>, as well as artifacts from the <em>"Starčevo culture"</em>, thousands of years old, whose value far exceeds local boundaries.
                </p>
              </section><img srcSet={`${pancevo55} 450w, ${pancevo5} `} alt="Pančevo Nature Park Ponjavica" /><section lang="en">
                <p>
                  The Nature Park <strong>Ponjavica</strong> is located <em>15 kilometers</em> from Pančevo, between the villages of <strong>Omoljica</strong> and <strong>Banatski Brestovac</strong>.
                </p>
                <p>
                  <strong>Ponjavica</strong> forms near the village of Omoljica and stretches for <em>ten kilometers</em>, of which <em>7.2 kilometers</em> is a protected area.
                </p>
                <p>
                  The total area of the park is <strong>134 hectares</strong>.
                </p>
                <p>
                  Unique characteristics of the Ponjavica Nature Park are the permanent water surfaces and the contrast between the steep left and low right riverbank, which is bordered by a riverbed.
                </p>
                <p>
                  On this area, there are mosaics of plant communities of different types of vegetation, including aquatic, marsh, and swamp plant species, as well as forest ecosystems.
                </p>
                <p>
                  This park is also distinguished by a diversity of green areas alternating with bushes, orchards, and trees, while its proximity to settlements and weekend zones further enriches it.
                </p>
                <p>
                  This biological and ecological diversity creates potential for the development of tourist content, with special emphasis on recreation and ecological education.
                </p>
              </section><img
                srcSet={`${pancevo66} 450w, ${pancevo6} `}
                alt="Pančevo Ivanovačka Ada" /><section lang="en">
                <p>
                  Only <strong>2.5 kilometers</strong> from the village of <strong>Ivanovo</strong> and <strong>21 kilometers</strong> from Pančevo, lies the special nature reserve <strong>Ivanovačka ada</strong>, known as the remaining part of the former floodplain forests that covered the Danube’s river islets.
                </p>
                <p>
                  The reserve covers a narrow islet with a width of <em>2 to 7 kilometers</em> and, due to the presence of native tree species such as <strong>poplar</strong>, <strong>black and white willow</strong>, <strong>ash</strong>, and especially <strong>pedunculate oak</strong>, it is considered a botanical jewel of nature.
                </p>
                <p>
                  For nature lovers and anglers, the areas of <strong>Dunaovac</strong> and <strong>Zimovnik</strong> are particularly interesting, where you can take spectacular photos in all seasons and weather conditions.
                </p>
                <p>
                  One of the most impressive inhabitants of this area is the <strong>pedunculate oak</strong>, over <em>180 years old</em>, located near Dunaovac and representing a true natural monument, reminding us of the former dominance of this species in the region.
                </p>
              </section><img
                srcSet={`${pancevo77} 450w, ${pancevo7} `}
                alt="Pančevo City Forest" /><section lang="en">
                <p>
                  Just a few minutes’ walk from the center of Pančevo, on the right bank of the <strong>Tamiš</strong> river, there is a true natural oasis – a marshy area home to numerous birds, including the <strong>grey heron</strong> and the highly endangered <strong>black stork</strong>.
                </p>
                <p>
                  This area, extending from the railway bridge to the confluence with the Danube, is known as the <strong>City Forest</strong>. The plant life here is characterized mainly by woody species such as <strong>pedunculate oak</strong>, <strong>willow</strong>, and <strong>black and white poplar</strong>.
                </p>
                <p>
                  It is also not uncommon to see <strong>roe deer</strong> and <strong>wild boars</strong> moving through this rich vegetation. In just a few minutes by boat, you can completely escape the city hustle and immerse yourself in the quiet of nature.
                </p>
                <p>
                  Crossing to the other side of the Tamiš by the embankment, you can go upstream toward <em>Jabuка</em> and the famous quays, or downstream to one of Pančevo’s symbols – the <strong>lighthouse</strong>.
                </p>
                <p>
                  Crossing from the city quay is possible daily from <strong>11 a.m.</strong>, and rides last until late at night, allowing visitors to enjoy beautiful landscapes and peaceful surroundings.
                </p>
              </section></>

          )}

      </div>
    </>
  );
};


export default Pancevo;