/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import manastirSvetogNikole1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/desktop/manastirSvetogNikole1.jpg";
import manastirSvetogNikole2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/desktop/manastirSvetogNikole2.jpg";
import manastirSvetogNikole3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/desktop/manastirSvetogNikole3.jpg";
import manastirSvetogNikole4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/desktop/manastirSvetogNikole4.jpg";
import manastirSvetogNikole5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/desktop/manastirSvetogNikole5.jpg";
import manastirSvetogNikole11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/mobile/manastirSvetogNikoleM1.jpg";
import manastirSvetogNikole22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/mobile/manastirSvetogNikoleM2.jpg";
import manastirSvetogNikole33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/mobile/manastirSvetogNikoleM3.jpg";
import manastirSvetogNikole44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/mobile/manastirSvetogNikoleM4.jpg";
import manastirSvetogNikole55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/ManastirSvetogNikole/mobile/manastirSvetogNikoleM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirSvetogNikole = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Svetog Nikole u Kuršumliji – Najstarija Zadužbina Stefana Nemanje | Serbia Wonders" : "Monastery of Saint Nicholas in Kuršumlija – The Oldest Endowment of Stefan Nemanja | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Svetog Nikole u Kuršumliji, podignut između 1159. i 1166. godine, predstavlja najstariju zadužbinu Stefana Nemanje i značajan spomenik vizantijske i raške arhitekture."
            :
            "St. Nicholas Monastery in Kuršumlija, built between 1159 and 1166, is Stefan Nemanja’s oldest endowment and a notable example of Byzantine and Raška architectural styles."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Svetog Nikole, Kuršumlija, Stefan Nemanja, vizantijska arhitektura, Raški stil, srednjovekovni manastir, spomenik kulture, srpska istorija"
            :
            "St. Nicholas Monastery, Kuršumlija, Stefan Nemanja, Byzantine architecture, Raška style, medieval monastery, cultural monument, Serbian history"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/manastir-svetog-nikole`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/manastir-svetog-nikole"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/manastir-svetog-nikole"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/manastir-svetog-nikole"
        />


      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(toplickiOkurgPathRoutes.home(switchLanguage))} />
        <header></header>
        <img
          srcSet={`${manastirSvetogNikole11} 450w, ${manastirSvetogNikole1} `}
          alt="Manastir Svteog Nikole kod Kuršumlije 1"
          loading="lazy"
        />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Manastir Svteog Nikole</h2>

              <section lang="sr">
                <p>
                  <strong>Manastir Svetog Nikole</strong> u <em>Kuršumliji</em> je najstarija zadužbina Stefana Nemanje, koju je on zajedno sa obližnjim manastirima posvećenim Bogorodici, podigao između 1159. i 1166. godine. Manastir se nalazi na uzvišenju iznad grada, iznad ušća Banjske u Toplicu.
                  <br /><br />
                  Manastirska crkva je danas obnovljena. Planira se obnova celokupnog kompleksa, koji je od 1979. godine pod zaštitom države kao spomenik kulture od izuzetnog značaja.
                </p>
              </section>

              <img srcSet={`${manastirSvetogNikole22} 450w, ${manastirSvetogNikole2}`} alt="Manastir Svetog Nikole kod Kuršumlije 2" loading="lazy" />

              <section lang="sr">
                <p>
                  U načinu gradnje vidljivi su <strong>vizantijski uticaji</strong> (primećuju se sličnosti sa nikejskom crkvom Svete Sofije, carigradskim crkvama i Vlahernskom kapijom u gradskim bedemima), ali i prisustvo <strong>romanijskih elemenata</strong> iz priobalnih oblasti (priprota sa dve kule zvonare, slično crkvi Svetog Trifuna u Kotoru). Ovo predstavlja najavu <em>Raškog stila</em> u arhitekturi, koji će se razviti nekoliko godina kasnije.
                  <br />
                  Unutrašnjost crkve sadrži fragmente fresaka iz XIV veka, a manastir je bio prvi centar za prepisivanje u Nemanjićkoj Srbiji.
                </p>
              </section>

              <img srcSet={`${manastirSvetogNikole33} 450w, ${manastirSvetogNikole3}`} alt="Manastir Svetog Nikole kod Kuršumlije 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Nemanja</strong>, koji je vladao Toplicom kao udeo, podigao je pored manastira posvećenog Bogorodici i manastir posvećen <em>Svetom Nikoli</em>. Prema njegovim životopisima, ovo je dovelo do sukoba sa starijom braćom, iz kojeg je izašao kao apsolutni pobednik. Crkva je jednobrodna građevina sa kupolom, podeljenom u obliku <em>krsne kruške</em>, po uzoru na carigradske crkve.
                  <br />
                  Oltarski prostor je trodelan, a u južnom delu izgrađen je poseban deo za grobnicu. Nemanjin sin Stefan (veliki župan 1196–1217, kralj 1217–1228) dogradio je otvoreni egzonarteks (trem) sa dve kule zvonare i još jednim grobnim mestom u jednoj od njih.
                </p>
              </section>

              <img srcSet={`${manastirSvetogNikole44} 450w, ${manastirSvetogNikole4}`} alt="Manastir Svetog Nikole kod Kuršumlije 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Početkom XIV veka, kralj <strong>Milutin</strong> (1282–1321) dogradio je kapelu sa severne strane. Manastirska crkva je bila pokrivena olovom, kao i crkva obližnjeg manastira Bogorodice, zbog čega je i mesto, današnja <em>Kuršumlija</em>, u poznom srednjem veku i tokom ranog perioda turske vlasti bilo poznato kao <strong>Bela Crkva</strong>, zbog belog odsjaja Sunca na olovnim krovovima.
                </p>
              </section>

              <img srcSet={`${manastirSvetogNikole55} 450w, ${manastirSvetogNikole5}`} alt="Manastir Svetog Nikole kod Kuršumlije 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Manastir je zapušten nakon <strong>Velike seobe Srba</strong> 1690. godine, kada su Osmanlije skinule olovni krov, što je označilo početak propadanja. Vremenom su uništene preostale zgrade, a crkva je ostala u ruševinama, sa samo središnjim delom pokrivenim 1910. godine.
                  <br /><br />
                  Posle Drugog svetskog rata, 1948. godine, započeti su radovi na istraživanju i obnovi crkve, završeni 2003. godine. U planu je rekonstrukcija celokupnog manastirskog kompleksa.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Monastery of Saint Nicholas</h2>

              <section lang="en"> <p> <strong>The Monastery of Saint Nicholas</strong> in <em>Kuršumlija</em> is the oldest endowment of Stefan Nemanja, which he built together with nearby monasteries dedicated to the Virgin Mary between 1159 and 1166. The monastery is situated on a hill above the town, overlooking the confluence of the Banjska River into the Toplica River. <br /><br /> The monastery church has been restored today. Plans are underway to restore the entire complex, which has been protected by the state as a cultural monument of exceptional importance since 1979. </p> </section>
              <img srcSet={`${manastirSvetogNikole22} 450w, ${manastirSvetogNikole2}`} alt="Monastery of Saint Nicholas near Kuršumlija 2" loading="lazy" />

              <section lang="en"> <p> The construction style shows <strong>Byzantine influences</strong> (notable similarities with the Nicaean Church of Hagia Sophia, Constantinople churches, and the Blachernae Gate in the city walls), but also the presence of <strong>Romanesque elements</strong> from coastal regions (the narthex with two bell towers, similar to the Church of Saint Tryphon in Kotor). This represents the announcement of the <em>Raška style</em> in architecture, which would develop several years later. <br /> The church’s interior contains fragments of frescoes from the 14th century, and the monastery was the first center of manuscript copying in Nemanjic Serbia. </p> </section>
              <img srcSet={`${manastirSvetogNikole33} 450w, ${manastirSvetogNikole3}`} alt="Monastery of Saint Nicholas near Kuršumlija 3" loading="lazy" />

              <section lang="en"> <p> <strong>Nemanja</strong>, who ruled Toplica as his domain, built the monastery dedicated to the Virgin Mary as well as the monastery dedicated to <em>Saint Nicholas</em>. According to his biographies, this caused conflict with his older brothers, from which he emerged as the absolute winner. The church is a single-nave building with a dome, divided in the shape of a <em>baptismal pear</em>, modeled after Constantinople churches. <br /> The altar area is tripartite, and in the southern part, a special section was built for a tomb. Nemanja’s son Stefan (Grand Župan 1196–1217, King 1217–1228) added an open exonarthex (porch) with two bell towers and another tomb inside one of them. </p> </section>
              <img srcSet={`${manastirSvetogNikole44} 450w, ${manastirSvetogNikole4}`} alt="Monastery of Saint Nicholas near Kuršumlija 4" loading="lazy" />

              <section lang="en"> <p> At the beginning of the 14th century, King <strong>Milutin</strong> (1282–1321) added a chapel on the northern side. The monastery church was covered with lead, as was the church of the nearby Monastery of the Virgin Mary, which is why the place, present-day <em>Kuršumlija</em>, was known in the late Middle Ages and during the early Ottoman period as <strong>Bela Crkva</strong> (White Church), due to the white gleam of the sun on the lead roofs. </p> </section>
              <img srcSet={`${manastirSvetogNikole55} 450w, ${manastirSvetogNikole5}`} alt="Monastery of Saint Nicholas near Kuršumlija 5" loading="lazy" />

              <section lang="en"> <p> The monastery was neglected after the <strong>Great Serbian Migration</strong> of 1690, when the Ottomans removed the lead roof, marking the beginning of its decline. Over time, the remaining buildings were destroyed, and the church was left in ruins, with only the central part covered in 1910. <br /><br /> After World War II, in 1948, works began on the research and restoration of the church, completed in 2003. Reconstruction of the entire monastery complex is planned. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirSvetogNikole;