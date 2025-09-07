/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import tronosa1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/desktop/tronosa1.jpg";
import tronosa2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/desktop/tronosa2.jpg";
import tronosa3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/desktop/tronosa3.jpg";
import tronosa4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/desktop/tronosa4.jpg";
import tronosa5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/desktop/tronosa5.jpg";
import tronosa11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/mobile/Mtronosa1.jpg";
import tronosa22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/mobile/Mtronosa2.jpg";
import tronosa33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/mobile/Mtronosa3.jpg";
import tronosa44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/mobile/Mtronosa4.jpg";
import tronosa55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/ManastirTronosa/mobile/Mtronosa5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { macvanskiOkrugPathRoutes } from "./MacvanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirTronosa = () => {
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
            ? "Manastir Tronoša – Duhovni Centar Rađevine i Običaji Velikog Četvrtka | Serbia Wonders"
            : "Tronoša Monastery – Spiritual Center of Rađevina and Great Thursday Traditions | Serbia Wonders"}
        </title>
        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Tronoša, smešten kod Loznice, ima dugu istoriju od srednjeg veka do danas. Poznat je po Vuku Karadžiću, duhovnom značaju i običaju voskastih sveća na Veliki četvrtak."
              : "Tronoša Monastery near Loznica has a rich history from the Middle Ages to the present. It is known for Vuk Karadžić, spiritual heritage, and the wax candle tradition on Great Thursday."
          }
        />
        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Tronoša, Vuk Karadžić, Rađevina, voskaste sveće, Veliki četvrtak, srpska pravoslavna crkva, Tršić, Pravoslavlje, istorija, duhovnost, tradicija, srpski običaji"
              : "Tronoša Monastery, Vuk Karadžić, Rađevina, wax candles, Great Thursday, Serbian Orthodox Church, Tršić, Orthodoxy, history, spirituality, tradition, Serbian customs"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/manastir-tronosa`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/manastir-tronosa"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/manastir-tronosa"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/manastir-tronosa"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(macvanskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${tronosa11} 450w, ${tronosa1} `} alt="Manastir Tronoša 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Manastir Tronoša</h2>

              <section lang="sr">

                <p>
                  Prema predanju, <strong>Tronoša</strong> je svoje ime dobila po <em>tri rečice</em> koje nose vodu, a koje se kod manastira spajaju u jednu. Po <strong>Tronoškom letopisu</strong>, manastir je podigla <strong>Katarina</strong>, žena kralja <strong>Dragutina</strong>. Ovoj kraljevskoj porodici pripisuje se izgradnja više manastira i crkava: <em>Tronoše, Tavne, Papraće i Rače</em>. Nakon <strong>Kosovske bitke</strong>, mnogi manastiri su uništeni — ni Tronoša nije izbegla tu sudbinu. Zapaljena je i sravnjena sa zemljom. Na mestu nekada veličanstvenog manastira ostalo je samo <em>zgarište</em>, ali i dalje <strong>sveto tlo</strong> za pravoslavni narod koji se tu okupljao, molio i palio sveće.
                </p>
              </section>

              <img srcSet={`${tronosa33} 450w, ${tronosa3}`} alt="Manastir Tronoša 2" />

              <section lang="sr">
                <p>
                  Dolaskom <strong>Makarija Sokolovića</strong> na čelo srpske crkve <strong>1557. godine</strong> i obnovom <strong>Pećke patrijaršije</strong>, došlo je do duhovnog preporoda. Na <em>narodnom saboru</em> u Tronoši, na <strong>Uskrs 1559. godine</strong>, odlučeno je da se podigne novi hram na starom mestu. Za manje od godinu dana, sa zvonika su ponovo <strong>odzvanjala zvona</strong>. Manastir je, osim bogoslužbenih funkcija, postao i <strong>kulturno-duhovno središte</strong> kraja. Iguman <strong>Jovan</strong> organizovao je <em>prepisivačku radionicu</em>, u kojoj su se izrađivale bogoslužbene knjige za manastir i druge crkve. Zbog siromaštva, monasi su morali da putuju čak u <strong>Rusiju</strong> radi pomoći i nabavke materijala.
                </p>

              </section>


              <img srcSet={`${tronosa44} 450w, ${tronosa4}`} alt="Manastir Tronoša 3" />

              <section lang="sr">

                <p>
                  Za vreme igumana <strong>Stefana Jovanovića</strong>, Tronoša je bila duhovni i kulturni centar <strong>severozapadne Srbije</strong>. U manastiru je postojala škola u kojoj je obrazovan i <strong>Vuk Stefanović Karadžić</strong> iz sela <em>Tršić</em>. Iguman Stefan ga je naučio pismenosti i podstakao ljubav prema <em>narodnoj književnosti</em>, epskim pesmama, pričama i poslovicama. Vuk je zahvaljujući njemu imao pristup manastirskim knjigama koje su mu bile zabranjene od strane ostalih monaha.
                </p>
              </section>
              <img srcSet={`${tronosa22} 450w, ${tronosa2}`} alt="Manastir Tronoša 4" />


              <section lang="sr">
                <p>
                  Crkva manastira Tronoše je skromnih dimenzija, građena u obliku <strong>slobodnog krsta</strong> sa <strong>kupolom</strong> iznad centra. Njena arhitektura podseća na <em>raški stil</em>. Građena je od <em>lomljenog i obrađenog kamena</em>, a kasnije je dograđen <strong>barokni zvonik</strong> sa ulaznim delom i pregradom između priprate i srednjeg dela crkve.
                </p>
              </section>


              <img srcSet={`${tronosa55} 450w, ${tronosa5}`} alt="Manastir Tronoša 5" />


              <section lang="sr">
                <p>
                  Uz manastir Tronošu vezan je jedan od najlepših <strong>srpskih narodnih običaja</strong> – darivanje velikih <em>"ratarnih" ili "oračkih"</em> voskastih sveća. Nakon što se sakupi vosak i ostaci sveća, prave se sveće visine do <strong>dva metra</strong> i težine oko <strong>50 kilograma</strong>. Donose se u manastir na <strong>Veliki četvrtak</strong>, a dolazak se najavljuje <em>pucnjima iz prangiја</em>. Uz njih dolazi i <strong>rađevska sveća</strong>, izlivena na sličan način. Po dolasku, zvona oglašavaju njihov ulazak, a sveće se postavljaju pred <strong>ikonu Spasitelja</strong> i <strong>Bogorodice</strong>. Pale se na <strong>Veliki petak</strong> i gore do sledeće godine.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Tronoša Monastery</h2>

              <section lang="en">

                <p>
                  According to tradition, <strong>Tronoša</strong> got its name from the <em>three small rivers</em> that bring water and merge into one near the monastery. As stated in the <strong>Tronoša Chronicle</strong>, the monastery was built by <strong>Katarina</strong>, the wife of King <strong>Dragutin</strong>. This royal family is credited with founding several monasteries and churches: <em>Tronoša, Tavna, Papraća, and Rača</em>. After the <strong>Battle of Kosovo</strong>, many monasteries were destroyed — and Tronoša shared that fate. It was burned and razed to the ground. At the site of the once magnificent monastery, only <em>ashes</em> remained, yet it continued to be <strong>sacred ground</strong> for the Orthodox people, who gathered there to pray and light candles.
                </p>

              </section>

              <img srcSet={`${tronosa33} 450w, ${tronosa3}`} alt="Tronoša Monastery 2" />

              <section lang="en">
                <p>
                  With the arrival of <strong>Makarije Sokolović</strong> to the head of the Serbian Church in <strong>1557</strong> and the restoration of the <strong>Patriarchate of Peć</strong>, a spiritual revival began. At a <em>national assembly</em> in Tronoša, on <strong>Easter in 1559</strong>, it was decided to build a new church on the old foundations. In less than a year, the bells were once again <strong>ringing from the monastery tower</strong>. Besides its religious functions, the monastery became a <strong>cultural and spiritual center</strong> of the region. Abbot <strong>Jovan</strong> established a <em>manuscript copying workshop</em>, producing liturgical books for the monastery and for other churches. Due to poverty, monks had to travel as far as <strong>Russia</strong> to seek aid and obtain necessary materials.
                </p>

              </section>


              <img srcSet={`${tronosa44} 450w, ${tronosa4}`} alt="Tronoša Monastery 3" />

              <section lang="en">
                <p>
                  During the time of Abbot <strong>Stefan Jovanović</strong>, Tronoša was a spiritual and cultural center of <strong>northwestern Serbia</strong>. The monastery hosted a school where even <strong>Vuk Stefanović Karadžić</strong> from the nearby village of <em>Tršić</em> was educated. Abbot Stefan taught him to read and write, and encouraged his love for <em>folk literature</em>, epic poetry, tales, and proverbs. Thanks to Stefan’s guidance, Vuk gained access to the monastery’s books, which other monks had forbidden him to read.
                </p>

              </section>


              <img srcSet={`${tronosa22} 450w, ${tronosa2}`} alt="Tronoša Monastery 4" />


              <section lang="en">
                <p>
                  The church of Tronoša Monastery is modest in size, built in the shape of a <strong>free-standing cross</strong> with a <strong>dome</strong> above the center. Its architecture resembles the <em>Raška style</em>. Constructed of <em>rough and dressed stone</em>, it was later expanded with a <strong>baroque bell tower</strong> featuring an entrance section and a partition between the narthex and the main nave.
                </p>
              </section>


              <img srcSet={`${tronosa55} 450w, ${tronosa5}`} alt="Tronoša Monastery 5" />

              <section lang="en">

                <p>
                  One of the most beautiful <strong>Serbian folk traditions</strong> is associated with Tronoša Monastery — the collective donation of large wax candles known as <em>“ratarne” or “oračke”</em>. Once enough offerings and leftover wax are collected, candles up to <strong>two meters</strong> high and weighing around <strong>50 kilograms</strong> are made. They are brought to the monastery on <strong>Holy Thursday</strong>, and their arrival is announced by <em>cannon fire</em>. Alongside them comes the <strong>Rađevska candle</strong>, made in a similar fashion. Upon arrival, the bells ring to welcome them, and the candles are placed before the <strong>icon of Christ</strong> and the <strong>Mother of God</strong>. They are first lit on <strong>Good Friday</strong> and burn until the next Holy Thursday, when new ones are made.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirTronosa;