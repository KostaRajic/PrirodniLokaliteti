/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import novoBrdo1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/desktop/tvrdjavaNovoBrdo1.jpg";
import novoBrdo2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/desktop/tvrdjavaNovoBrdo2.jpg";
import novoBrdo3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/desktop/tvrdjavaNovoBrdo3.jpg";
import novoBrdo4 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/desktop/tvrdjavaNovoBrdo4.jpg";
import novoBrdo11 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/mobile/MtvrdjavaNovoBrdo1.jpg";
import novoBrdo22 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/mobile/MtvrdjavaNovoBrdo2.jpg";
import novoBrdo33 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/mobile/MtvrdjavaNovoBrdo3.jpg";
import novoBrdo44 from "../../../../../assets/images/KosovoIMetohija/Pristinski/TvrdjavaNovoBrdo/mobile/MtvrdjavaNovoBrdo4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TvrdjavaNovoBrdo = () => {
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

        <title>{switchLanguage === 'rs' ? "Tvrđava Novo Brdo – Srednjovekovni dragulj Srbije | Serbia Wonders" : "Novo Brdo Fortress – Medieval Jewel of Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Tvrđava Novo Brdo je značajno srednjovekovno utvrđenje u Srbiji poznato po bogatoj rudarskoj istoriji i jedinstvenoj arhitekturi. Smeštena je blizu Prištine, i važno je arheološko nalazište."
            :
            "Novo Brdo Fortress is a significant medieval fortification in Serbia, known for its rich mining history and unique architecture. Located near Pristina, it is an important archaeological site."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Tvrđava Novo Brdo, srednjovekovna tvrđava, rudnici Srbije, istorija Srbije, srednjovekovni gradovi, arheološki spomenici, Priština, despotovina, UNMIK, KFOR"
            :
            "Novo Brdo Fortress, medieval fortress, Serbian mines, Serbian history, medieval towns, archaeological monuments, Pristina, Serbian Despotate, UNMIK, KFOR"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/tvrdjava-novo-brdo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/tvrdjava-novo-brdo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/tvrdjava-novo-brdo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/tvrdjava-novo-brdo"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pristinskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${novoBrdo11} 450w, ${novoBrdo1} `} alt="Tvrđava Novo Brdo 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Tvrđava Novo Brdo</h1>

              <section lang="sr">
                <p>
                  <strong>Novo Brdo</strong> je srednjovekovna tvrđava koja se nalazi u Srbiji, 20 km istočno od <strong>Prištine</strong>,
                  odnosno 30–35 km severno od <strong>Gnjilana</strong>, kod istoimenog naselja. Tvrđava je sagrađena na usamljenom
                  vrhu <strong>Male planine</strong> (1.124 m nadmorske visine), koji je sa istoka jedini bio pristupačan. Ovaj vrh se
                  nalazi između reke <strong>Prilepnice</strong>, <strong>Novobrdske reke</strong> i <strong>Krive reke</strong>, koje
                  su leve pritoke <strong>Binačke Morave</strong>.
                  <br /><br />
                  Novo Brdo ima veliki značaj za proučavanje srednjovekovnih utvrđenja, gradova i urbanizacije u srpskim zemljama
                  tog perioda. Tvrđava je važan arheološki spomenik, koji svedoči o ekonomskom napretku Srbije u srednjem veku.
                </p>
              </section>

              <img srcSet={`${novoBrdo22} 450w, ${novoBrdo2}`} alt="Tvrđava Novo Brdo 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Tvrđava Novo Brdo sagrađena je početkom <strong>14. veka</strong> kako bi štitila bogato rudarsko područje,
                  u kojem su se eksploatisali <strong>gvožđe</strong>, <strong>olovo</strong>, <strong>srebro</strong> i <strong>zlato</strong>.
                  Od sredine 14. veka, ta oblast postaje najvažniji rudnik u Srbiji, a <strong>1349. godine</strong> počinje da kuje
                  sopstveni srebrni novac. Najveći procvat tvrđava i rudnici doživljavaju u vreme <strong>despotovine</strong>,
                  kada su <strong>Novobrdski rudnici</strong>, pod upravom <strong>despota Đurađa</strong> (1427–1456), donosili između
                  <strong>50.000</strong> i <strong>200.000 zlatnih dukata godišnje</strong>, prema različitim izvorima. Okolina tvrđave
                  prepuna je ostataka naselja i rudnika iz tog perioda, a pristup celom području bio je dodatno zaštićen
                  utvrđenjima u <strong>Prizrenu</strong> i <strong>Priljepcu</strong>, koja su štitila najlakši prilaz novobrdskoj oblasti
                  sa juga, iz doline Binačke Morave. Sama tvrđava se sastoji od <strong>Gornjeg Grada</strong>, nepravilnog šestougla
                  na vrhu brda, i <strong>Donjeg Grada</strong>, koji se lepezasto širi niz padinu ka zapadu. Ceo grad bio je okružen
                  suvim šancem sa severne i zapadne strane. Tvrđava je dokazala svoju snagu tokom više osmanlijskih opsada,
                  naročito tokom dvogodišnje opsade (<strong>1439–1441</strong>), u periodu kada <strong>srpska despotovina</strong>
                  više nije postojala.
                </p>
              </section>

              <img srcSet={`${novoBrdo33} 450w, ${novoBrdo3}`} alt="Tvrđava Novo Brdo 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Novo Brdo se sa estetskog aspekta izdvaja korišćenjem <strong>mrkocrvene breče</strong>,
                  koja je oblikovana u pravilne kvadere i korišćena za izgradnju uglova kula i prolaza kapija,
                  dok je ostatak tvrđave napravljen od običnog <strong>sivog kamenja</strong>, uglavnom <strong>krečnjaka</strong>.
                  Posebnu lepotu utvrđenju daje veliki <strong>krst na zapadnoj kuli Gornjeg Grada</strong>,
                  izveden u mrkocrvenoj breči, koji je postao simbol tvrđave. Iako je danas ceo prostor tvrđave
                  u ruševinama, ostaci kula i dalje svedoče o njegovoj monumentalnosti i nekadašnjem bogatstvu.
                </p>
              </section>

              <img srcSet={`${novoBrdo44} 450w, ${novoBrdo4}`} alt="Tvrđava Novo Brdo 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Jedan od glavnih problema novobrdske tvrđave su stalni pokušaji da se pronađe zakopano blago,
                  što dovodi do uništavanja važnih arheoloških slojeva. Ovaj problem je postao još izraženiji
                  nakon dolaska <strong>UNMIK-a</strong> i <strong>KFOR-a</strong> u južnu srpsku pokrajinu,
                  jer su pripadnici <strong>poljskih snaga</strong>, koji su bili deo UNMIK-a, nekoliko puta vršili
                  amaterska iskopavanja na području tvrđave.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Novo Brdo Fortress</h1>

              <section lang="en">
                <p>
                  <strong>Novo Brdo</strong> is a medieval fortress located in Serbia, 20 km east of <strong>Priština</strong> and
                  approximately 30–35 km north of <strong>Gnjilane</strong>, near the village of the same name. The fortress was built
                  on a solitary peak of <strong>Mala Planina</strong> (1,124 meters above sea level), which was only accessible from the east.
                  This peak lies between the rivers <strong>Prilepnica</strong>, <strong>Novo Brdo River</strong>, and <strong>Kriva River</strong>,
                  all of which are left tributaries of the <strong>Binačka Morava</strong>.
                  <br /><br />
                  Novo Brdo holds great significance for the study of medieval fortifications, towns, and urbanization in Serbian territories
                  during that period. The fortress is an important archaeological monument that testifies to the economic progress of Serbia
                  in the Middle Ages.
                </p>
              </section>

              <img srcSet={`${novoBrdo22} 450w, ${novoBrdo2}`} alt="Novo Brdo Fortress 2" loading="lazy" />

              <section lang="en">
                <p>
                  The Novo Brdo Fortress was built in the early <strong>14th century</strong> to protect a rich mining area where
                  <strong>iron</strong>, <strong>lead</strong>, <strong>silver</strong>, and <strong>gold</strong> were extracted.
                  From the mid-14th century, this area became the most important mining site in Serbia, and in <strong>1349</strong>,
                  it began minting its own silver coins. The fortress and its mines reached their peak during the time of the
                  <strong>Serbian Despotate</strong>, when the <strong>Novo Brdo mines</strong>, under the rule of <strong>Despot Đurađ</strong> (1427–1456),
                  generated between <strong>50,000</strong> and <strong>200,000 gold ducats annually</strong>, according to various sources.
                  The surroundings of the fortress are filled with remnants of settlements and mines from that period. Access to the entire
                  area was further protected by fortifications in <strong>Prizren</strong> and <strong>Priljepac</strong>, which guarded
                  the easiest southern approach through the <strong>Binačka Morava</strong> valley. The fortress itself consists of the
                  <strong>Upper Town</strong>, an irregular hexagon at the top of the hill, and the <strong>Lower Town</strong>, which
                  fans out down the western slope. The entire town was surrounded by a dry moat on the north and west sides. The fortress
                  proved its strength during several Ottoman sieges, especially during the two-year siege (<strong>1439–1441</strong>),
                  at a time when the <strong>Serbian Despotate</strong> no longer existed.
                </p>
              </section>

              <img srcSet={`${novoBrdo33} 450w, ${novoBrdo3}`} alt="Novo Brdo Fortress 3" loading="lazy" />

              <section lang="en">
                <p>
                  From an aesthetic perspective, Novo Brdo stands out due to the use of <strong>dark red breccia</strong>,
                  shaped into regular blocks and used for constructing the corners of towers and gate passages, while the rest of the
                  fortress was made of ordinary <strong>gray stone</strong>, mostly <strong>limestone</strong>. A distinctive feature
                  is the large <strong>cross on the western tower of the Upper Town</strong>, made of dark red breccia, which became
                  a symbol of the fortress. Although the entire fortress is now in ruins, the remains of its towers still testify
                  to its former grandeur and wealth.
                </p>
              </section>

              <img srcSet={`${novoBrdo44} 450w, ${novoBrdo4}`} alt="Novo Brdo Fortress 4" loading="lazy" />

              <section lang="en">
                <p>
                  One of the main problems facing the Novo Brdo Fortress is the ongoing attempts to find buried treasure, which
                  leads to the destruction of important archaeological layers. This issue became even more prominent after the arrival
                  of <strong>UNMIK</strong> and <strong>KFOR</strong> in the southern Serbian province, as members of the <strong>Polish forces</strong>,
                  part of the UNMIK mission, conducted amateur excavations at the site on several occasions.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default TvrdjavaNovoBrdo;