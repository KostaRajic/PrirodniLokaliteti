/* eslint-disable react/no-unknown-property */
import metodje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/desktop/metodje1.jpg";
import metodje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/desktop/metodje3.jpg";
import metodje4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/desktop/metodje4.jpg";
import metodje5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/desktop/metodje5.jpg";
import metodje6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/desktop/metodje6.jpg";
import metodje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/mobile/Mmetodje1.jpg";
import metodje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/mobile/Mmetodje3.jpg";
import metodje44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/mobile/Mmetodje4.jpg";
import metodje55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/mobile/Mmetodje5.jpg";
import metodje66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Metodje/mobile/Mmetodje6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SvetilisteMetodje = () => {
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
            ? 'Prirodni rezervat Metođe – Duhovno i prirodno blago Kopaonika | Srbija Wonders'
            : 'Metođe Nature Reserve – Spiritual and Natural Treasure of Kopaonik | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Prirodni rezervat Metođe, smešten na Kopaoniku, spaja netaknutu prirodu i duhovnu tradiciju. Sa svetilištem, lekovitim izvorima i redkim vrstama, predstavlja jedno od najposećenijih svetih mesta planine.'
              : 'Metođe Nature Reserve, located on Mount Kopaonik, combines untouched nature with deep spiritual tradition. Featuring a shrine, healing springs, and rare species, it is one of the mountain’s most visited sacred places.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Prirodni rezervat Metođe, Kopaonik, svetilište, sveti Metodije, izvor, lekovita voda, gejzir, flora i fauna, Nacionalni park Kopaonik'
              : 'Metođe Nature Reserve, Kopaonik, shrine, Saint Methodius, healing spring, geyser, flora and fauna, National Park Kopaonik'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/svetiliste-metodje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/svetiliste-metodje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/svetiliste-metodje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/svetiliste-metodje"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(rasinskiOkrugPathRoutes.home(switchLanguage))}
        />
        <header></header>
        <img srcSet={`${metodje11} 450w, ${metodje1} `} alt='Prirodni rezervat "Metođe" 1' />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Prirodni rezervat "Metođe"</h1>

              <section lang="sr">
                <p>
                  Nedaleko od <strong>Pančićevog vrha</strong>, na nadmorskoj visini između <strong>1200 i 1700 metara</strong>,
                  nalazi se zaštićeno prirodno dobro <strong>prvog stepena</strong> – „<strong>Metođe</strong>“. Ovo područje,
                  koje se prostire na <strong>110 hektara</strong> padina <strong>Kopaonika</strong>, predstavlja stanište mnogih
                  retkih biljnih i životinjskih vrsta.
                  <br />
                  <br />
                  Zbog svog izuzetnog značaja, <em>ljudska delatnost</em> u ovom prostoru strogo je regulisana.
                  Posetioci, pre nego što uđu u zaštićenu zonu, nailaze na rampu pored oštre krivine na putu između
                  <strong> Kopaonika i Brzeća</strong>, gde se podstiču da parkiraju svoja vozila i nastave pešice.
                  Šetajući ovim posebnim krajem, mogu uživati u bogatstvu raznobojnog planinskog cveća, koje se smenjuje
                  u cvetanju tokom cele godine, kao i u veličanstvenom letu <strong>sivog sokola</strong>,
                  najpoznatijeg stanovnika Metođa.
                </p>
              </section>

              <img srcSet={`${metodje33} 450w, ${metodje3}`} alt='Prirodni rezervat "Metođe" 2' />

              <section lang="sr">
                <p>
                  Ovaj posebni deo <strong>Kopaonika</strong> ne privlači posetioce samo zbog bogatstva flore i faune,
                  već i zbog svog <em>duhovnog značaja</em>. U srcu Metođa nalazi se drevno <strong>svetilište</strong>
                  posvećeno <strong>svetom Metodiju</strong>. Važno je napomenuti da se ne radi o poznatom misionaru među
                  Slovenima i bratu Ćirila, već o <strong>episkopu grada Patare u Likiji</strong>, učenom bogoslovu
                  i borcu protiv jeresi, koji je stradao od neznabožaca <strong>311. godine</strong>, samo dve godine
                  pre donošenja <strong>Milanskog edikta</strong>.
                  <br />
                  <br />
                  Prema predanju, Metođe na Kopaoniku ima <em>verski značaj</em> još od <strong>trećeg veka</strong>,
                  kada su se na ovom uzvišenom mestu molili i lokalno stanovništvo i rudari, koji su od davnina vadili
                  rudu na <strong>Srebrnoj planini</strong> – kako su stari Rimljani nazivali Kopaonik.
                  Uostalom, i samo ime <strong>Kopaonik</strong> jasno ukazuje na njegovu dugu rudarsku tradiciju.
                </p>
              </section>

              <img srcSet={`${metodje44} 450w, ${metodje4}`} alt='Prirodni rezervat "Metođe" 3' />

              <section lang="sr">
                <p>
                  Neposredno uz <strong>svetilište</strong>, u steni, nalazi se <strong>izvor</strong> koji teče iz njenog gornjeg dela.
                  Vekovno iskustvo naroda sa Kopaonika ukazuje da ova voda ima <strong>lekovita svojstva</strong>, posebno za oči,
                  dok neki veruju da <em>pijenje veće količine</em> ove vode može pomoći u lečenju <strong>šećerne bolesti</strong>.
                  Mnogi posetioci koriste ovu vodu za <em>umivanje</em>, a <strong>1996. godine</strong>, na tom mestu, podignut je
                  <strong> hram</strong>, zahvaljujući inicijativi <strong>Nacionalnog parka Kopaonik</strong> i podršci meštana.
                  Svake godine, <strong>3. jula</strong>, ovde se okuplja veliki broj ljudi kako bi proslavili praznik
                  <strong> svetog Metodija</strong>, koji, prema rečima vernika, nije samo slava Nacionalnog parka, već i svih
                  <strong> stanovnika Kopaonika</strong>.
                </p>
              </section>

              <img srcSet={`${metodje55} 450w, ${metodje5}`} alt='Prirodni rezervat "Metođe" 4' />

              <section lang="sr">
                <p>
                  Posetioci koji odluče da prošeću stazama ovog dela Kopaonika mogu uživati u <strong>prelepim prizorima</strong>
                  i zvucima <strong>vodopada</strong>. Na relativno malom prostoru nalazi se veliki broj <strong>izvora</strong>.
                  Ovdje se nalazi i veoma <strong>retka prirodna pojava</strong> za Srbiju – <strong>gejzir</strong>, koji je nastao
                  tokom hidroloških istraživanja bušenjem, a <em>mlaz vode</em> obično dostiže visinu od oko <strong>5 metara</strong>.
                  <strong> Kopaonik</strong> je poznat i kao jedna od <strong>najvodenijih planina</strong> u Evropi.
                </p>
              </section>

              <img srcSet={`${metodje66} 450w, ${metodje6}`} alt='Prirodni rezervat "Metođe" 5' />

              <section lang="sr">
                <p>
                  Nedavno je uklonjen <strong>masivni barokni ikonostas</strong> iz <strong>19. veka</strong>, koji,
                  iako predstavlja kvalitetno umetničko delo, nije odgovarao starosti zida, starog više od <strong>sedam vekova</strong>.
                  Na osnovu tragova na <strong>mermernom podu</strong>, ustanovljeno je kako je otprilike izgledao
                  <em> originalni kameni ikonostas</em>, pa je na osnovu tih saznanja napravljen <strong>novi, niži ikonostas</strong>,
                  koji sada omogućava vernicima i ljubiteljima umetnosti da uživaju u <strong>starim freskama</strong> iz oltara.
                </p>
              </section>
            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Nature Reserve "Metođe"</h1>

              <section lang="en">
                <p>
                  Not far from <strong>Pančić's Peak</strong>, at an altitude between <strong>1200 and 1700 meters</strong>,
                  lies a protected natural area of the <strong>highest category</strong> – "<strong>Metođe</strong>". This region,
                  which spans <strong>110 hectares</strong> on the slopes of <strong>Kopaonik</strong>, serves as a habitat for many
                  rare plant and animal species.
                  <br />
                  <br />
                  Due to its exceptional importance, <em>human activity</em> in this area is strictly regulated.
                  Visitors, before entering the protected zone, encounter a barrier near a sharp curve on the road between
                  <strong> Kopaonik and Brzeće</strong>, where they are encouraged to park their vehicles and continue on foot.
                  Walking through this special region, they can enjoy the rich display of colorful mountain flowers,
                  which bloom in succession throughout the year, as well as the majestic flight of the <strong>peregrine falcon</strong>,
                  the most famous resident of Metođe.
                </p>
              </section>

              <img srcSet={`${metodje33} 450w, ${metodje3}`} alt='Nature Reserve "Metođe" 2' />

              <section lang="en">
                <p>
                  This unique part of <strong>Kopaonik</strong> attracts visitors not only because of its rich flora and fauna,
                  but also due to its <em>spiritual significance</em>. At the heart of Metođe lies an ancient <strong>sanctuary</strong>
                  dedicated to <strong>Saint Methodius</strong>. It is important to note that this is not the well-known missionary
                  among the Slavs and brother of Cyril, but the <strong>bishop of Patara in Lycia</strong>, a learned theologian and
                  opponent of heresy, who was martyred by pagans in <strong>311 AD</strong>, just two years before the
                  <strong> Edict of Milan</strong> was issued.
                  <br />
                  <br />
                  According to legend, Metođe has held <em>religious importance</em> on Kopaonik since the <strong>third century</strong>,
                  when both locals and miners prayed at this elevated place. These miners had long extracted ore from the
                  <strong> Silver Mountain</strong> – as the ancient Romans called Kopaonik. After all, the name <strong>Kopaonik</strong>
                  itself clearly indicates its long mining tradition.
                </p>
              </section>

              <img srcSet={`${metodje44} 450w, ${metodje4}`} alt='Nature Reserve "Metođe" 3' />

              <section lang="en">
                <p>
                  Right next to the <strong>sanctuary</strong>, within the rock, there is a <strong>spring</strong> flowing from its upper part.
                  Centuries of experience from the people of Kopaonik suggest that this water has <strong>healing properties</strong>,
                  especially for the eyes. Some even believe that <em>drinking larger quantities</em> of this water can help treat
                  <strong> diabetes</strong>. Many visitors use this water for <em>washing their faces</em>, and in <strong>1996</strong>,
                  a <strong>church</strong> was built on that spot, thanks to the initiative of the <strong>Kopaonik National Park</strong>
                  and support from local residents. Every year, on <strong>July 3rd</strong>, a large number of people gather here
                  to celebrate the feast day of <strong>Saint Methodius</strong>, which, according to believers, is not only the
                  patron day of the National Park but also of all the <strong>inhabitants of Kopaonik</strong>.
                </p>
              </section>

              <img srcSet={`${metodje55} 450w, ${metodje5}`} alt='Nature Reserve "Metođe" 4' />

              <section lang="en">
                <p>
                  Visitors who choose to walk the trails in this part of Kopaonik can enjoy <strong>beautiful scenery</strong> and the
                  sounds of <strong>waterfalls</strong>. A large number of <strong>springs</strong> can be found in a relatively small area.
                  There is also a very <strong>rare natural phenomenon</strong> in Serbia – a <strong>geyser</strong>, which was formed
                  during hydrological drilling research, with a <em>water jet</em> that typically reaches a height of around
                  <strong> 5 meters</strong>. <strong>Kopaonik</strong> is also known as one of the <strong>most water-rich mountains</strong>
                  in Europe.
                </p>
              </section>

              <img srcSet={`${metodje66} 450w, ${metodje6}`} alt='Nature Reserve "Metođe" 5' />

              <section lang="en">
                <p>
                  A <strong>massive Baroque iconostasis</strong> from the <strong>19th century</strong> was recently removed. Although
                  it was a high-quality work of art, it did not match the age of the wall, which is more than
                  <strong> seven centuries old</strong>. Based on traces found on the <strong>marble floor</strong>, the approximate
                  appearance of the <em>original stone iconostasis</em> was determined, and a <strong>new, lower iconostasis</strong>
                  was built accordingly. This now allows worshippers and art enthusiasts to admire the <strong>ancient frescoes</strong>
                  from the altar.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default SvetilisteMetodje;