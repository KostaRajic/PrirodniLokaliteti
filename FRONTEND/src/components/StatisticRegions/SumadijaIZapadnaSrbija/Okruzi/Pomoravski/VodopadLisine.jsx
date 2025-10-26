/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import lisine1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/desktop/vodopadLisine1.jpg";
import lisine2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/desktop/vodopadLisine2.jpg";
import lisine3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/desktop/vodopadLisine3.jpg";
import lisine4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/desktop/vodopadLisine4.jpg";
import lisine5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/desktop/vodopadLisine5.jpg";
import lisine11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/mobile/MvodopadLisine1.jpg";
import lisine22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/mobile/MvodopadLisine2.jpg";
import lisine33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/mobile/MvodopadLisine3.jpg";
import lisine44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/mobile/MvodopadLisine4.jpg";
import lisine55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadLisine/mobile/MvodopadLisine5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VodopadLisine = () => {
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
            ? "Vodopad Lisine – Veliki Buk, prirodno čudo ispod Beljanice | Srbija Wonders"
            : "Lisine Waterfall – Veliki Buk, Natural Wonder beneath Mt. Beljanica | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Vodopad Lisine, poznat i kao Veliki Buk, jedan je od najlepših i najviših vodopada u Srbiji. Smešten ispod planine Beljanice, uz rečicu Vrelo, idealan je za izlete i uživanje u netaknutoj prirodi Resavskog kraja."
              : "Lisine Waterfall, also known as Veliki Buk, is one of Serbia’s tallest and most stunning waterfalls. Located beneath Mt. Beljanica along the Vrelo stream, it offers a perfect nature getaway in the Resava region."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Vodopad Lisine, Veliki Buk, prirodne atrakcije Srbija, Beljanica, izletište Despotovac, Vrelo, bigar, Resavski kraj, vodopadi Srbija"
              : "Lisine Waterfall, Veliki Buk, natural attractions Serbia, Beljanica mountain, Despotovac excursions, Vrelo stream, travertine, Resava region, waterfalls Serbia"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-lisine`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-lisine"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-lisine"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-lisine"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pomoravskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${lisine11} 450w, ${lisine1} `} alt="Vodopad Lisine 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Vodopad Lisine</h1>

              <section lang="sr">
                <p>
                  <strong>Vodopad Veliki Buk</strong>, poznat i kao <em>Lisine</em>, jedno je od prirodnih čuda
                  koja se nalaze na padinama <strong>Beljanice</strong> u istočnoj Srbiji. Ovaj veličanstveni
                  vodopad smešten je na rečici <em>Vrelu</em>, desnoj pritoci reke <strong>Resave</strong>, i svojom
                  impozantnom pojavom oduševljava sve koji ga posete. Sa visinom od oko <strong>25 metara</strong>,
                  <strong>Veliki Buk</strong> se smatra jednim od najviših vodopada u Srbiji.
                </p>
              </section>

              <img srcSet={`${lisine22} 450w, ${lisine2} `} alt="Vodopad Lisine 2" />

              <section lang="sr">
                <p>
                  Vodopad Veliki Buk, smešten na nadmorskoj visini od oko <strong>380 metara</strong>, u neposrednoj blizini
                  poznate <strong>Resavske pećine</strong>, dodatno povećava turističku atraktivnost ovog kraja. Ovaj prirodni biser
                  spada u <em>akumulacione vodopade</em>, čije spektakularne pojave nastaju akumulacijom <strong>bigra</strong>,
                  stvarajući maleno, plitko jezerce koje je okruženo karakterističnim <strong>bigrenim blokovima</strong>. Vodopad
                  Lisine, zajedno sa izvorom rečice <em>Vrelo</em>, ima poseban status kao <strong>spomenik prirode</strong>,
                  pod zaštitom države, pod nazivom <strong>„Vodopad Lisine“</strong>, čime se ističe njegova vrednost kao važan deo
                  <em>geološkog nasleđa Srbije</em>. Ovaj region je izvor mnogih voda koje potiču sa širokih kraških predela
                  <strong>Beljanice</strong>, čime se uspostavlja direktna hidrografska povezanost sa ponornim rekama iz uvala
                  <strong>Rečke</strong> i <strong>Busovate</strong>.
                </p>
              </section>

              <img srcSet={`${lisine33} 450w, ${lisine3} `} alt="Vodopad Lisine 3" />

              <section lang="sr">
                <p>
                  Područje oko <strong>Vodopada Veliki Buk</strong>, smeštenog na padinama <strong>Beljanice</strong> u istočnoj Srbiji,
                  predstavlja pravu prirodnu oazu, prilagođenu za lak pristup posetiocima. Sve staze i područja su jasno obeležena,
                  što omogućava sigurnu i jednostavnu posetu. Pored samog vodopada, turisti mogu uživati u lokalnim restoranima koji
                  nude bogatstvo domaćih specijaliteta. Takođe, tu su i prenoćišta za one koji žele da produže svoj boravak i u potpunosti
                  uživaju u ovoj prelepoj prirodi.
                </p>
              </section>

              <img srcSet={`${lisine44} 450w, ${lisine4} `} alt="Vodopad Veliki Buk" />

              <section lang="sr">
                <p>
                  <strong>Hidrosistem Lisine</strong> obuhvata izvor <em>Veliko vrelo</em>, vodotok i <strong>Vodopad Veliki Buk</strong>,
                  stvarajući savršenu harmoniju vode i prirode koja pruža nezaboravno iskustvo posetiocima. <em>Veliko vrelo</em>, sa svojom
                  čistom, bistrijom vodom, doprinosi lepotama vodopada, naročito u proleće kada je bogato vodom, pružajući zvučni spektakl
                  koji odjekuje pod imenom <strong>Veliki Buk</strong>. Ispod celokupnog vodotoka uređena je staza za pešake, koja omogućava
                  prijatnu šetnju kroz ovaj prelep prirodni ambijent. U okolini su se divno uklopili etno restorani, vodenice i brvnare,
                  stvarajući mali etno gradić. Restorani nude autentične specijalitete, a posetioci mogu uživati u domaćim proizvodima poput
                  voćnih sokova, džemova, meda i raznih suvenira.
                </p>
              </section>

              <img srcSet={`${lisine55} 450w, ${lisine5} `} alt="Vodopad Veliki Buk 2" />

              <section lang="sr">
                <p>
                  Kada posetite <strong>Lisine</strong>, bićete očarani netaknutom prirodom <strong>Južnog Kučaja</strong> i
                  <strong>Beljanice</strong>, bez obzira da li dolazite iz <strong>Ćuprije</strong> ili <strong>Despotovca</strong>.
                  Ovi prelepi pejzaži postavljaju pitanje kako je moguće da ovakva lepota postoji baš u Srbiji. Osim
                  <strong>Vodopada Veliki Buk</strong>, turistička ponuda <em>Resavskog kraja</em> je vrlo bogata i raznolika. Obavezno istražite
                  okolna mesta, uključujući <strong>Resavsku pećinu</strong>, <strong>Krupajsko vrelo</strong>, manastire <strong>Ravanicu</strong>,
                  <strong>Manasiju</strong>, <strong>Sisojevac</strong>, kao i jedinstveni vodopad <strong>Prskalo</strong>. Za ljubitelje avantura,
                  tu je i <strong>Veliko vrelo</strong>, jedan od mnogobrojnih izvora smeštenih ispod <strong>Beljanice</strong>, koji nudi istraživanje
                  divljeg i nepristupačnog terena.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Waterfall Lisine</h1>

              <section lang="en"> <p> <strong>Veliki Buk Waterfall</strong>, also known as <em>Lisine</em>, is one of the natural wonders located on the slopes of <strong>Beljanica</strong> in eastern Serbia. This magnificent waterfall is situated on the small river <em>Vrelo</em>, a right tributary of the <strong>Resava</strong> river, and impresses all who visit it with its majestic appearance. With a height of about <strong>25 meters</strong>, <strong>Veliki Buk</strong> is considered one of the tallest waterfalls in Serbia. </p> </section>
              <img srcSet={`${lisine22} 450w, ${lisine2} `} alt="Lisine Waterfall 2" />

              <section lang="en"> <p> Veliki Buk Waterfall, located at an altitude of about <strong>380 meters</strong>, in close proximity to the famous <strong>Resava Cave</strong>, further increases the tourist appeal of this region. This natural gem is classified as a <em>tufa (travertine) waterfall</em>, whose spectacular formations are created by the accumulation of <strong>tufa</strong>, forming a small, shallow pool surrounded by characteristic <strong>tufa blocks</strong>. The Lisine waterfall, together with the source of the <em>Vrelo</em> stream, holds a special status as a <strong>natural monument</strong>, protected by the state under the name <strong>"Lisine Waterfall"</strong>, highlighting its importance as a valuable part of Serbia's <em>geological heritage</em>. This region is the source of many waters originating from the wide karst landscapes of <strong>Beljanica</strong>, establishing a direct hydrographic connection with the sinking rivers from the <strong>Rečka</strong> and <strong>Busovata</strong> sinkholes. </p> </section>
              <img srcSet={`${lisine33} 450w, ${lisine3} `} alt="Lisine Waterfall 3" />

              <section lang="en"> <p> The area around <strong>Veliki Buk Waterfall</strong>, located on the slopes of <strong>Beljanica</strong> in eastern Serbia, is a true natural oasis, adapted for easy visitor access. All paths and areas are clearly marked, ensuring a safe and simple visit. Besides the waterfall itself, tourists can enjoy local restaurants offering a variety of traditional specialties. There are also accommodations for those wishing to extend their stay and fully enjoy this beautiful nature. </p> </section>
              <img srcSet={`${lisine44} 450w, ${lisine4} `} alt="Veliki Buk Waterfall" />

              <section lang="en"> <p> The <strong>Lisine Hydrosystem</strong> includes the source <em>Veliko vrelo</em>, the watercourse, and <strong>Veliki Buk Waterfall</strong>, creating a perfect harmony of water and nature that provides visitors with an unforgettable experience. <em>Veliko vrelo</em>, with its clear, pure water, contributes to the beauty of the waterfall, especially in spring when it is rich with water, providing a spectacular sound known as <strong>Veliki Buk</strong>. Below the entire watercourse, a pedestrian path has been arranged, allowing a pleasant walk through this beautiful natural environment. In the surroundings, ethno restaurants, watermills, and log cabins are harmoniously integrated, forming a small ethno village. The restaurants offer authentic specialties, and visitors can enjoy homemade products such as fruit juices, jams, honey, and various souvenirs. </p> </section>
              <img srcSet={`${lisine55} 450w, ${lisine5} `} alt="Veliki Buk Waterfall 2" />

              <section lang="en"> <p> When you visit <strong>Lisine</strong>, you will be enchanted by the untouched nature of <strong>South Kučaj</strong> and <strong>Beljanica</strong>, whether you come from <strong>Ćuprija</strong> or <strong>Despotovac</strong>. These beautiful landscapes raise the question of how such beauty exists right here in Serbia. Besides the <strong>Veliki Buk Waterfall</strong>, the tourist offer of the <em>Resava region</em> is very rich and diverse. Be sure to explore the nearby places, including the <strong>Resava Cave</strong>, <strong>Krupajsko Vrelo</strong>, the monasteries of <strong>Ravanica</strong>, <strong>Manasija</strong>, and <strong>Sisojevac</strong>, as well as the unique <strong>Prskalo Waterfall</strong>. For adventure lovers, there is also <strong>Veliko vrelo</strong>, one of the many springs located beneath <strong>Beljanica</strong>, offering exploration of wild and inaccessible terrain. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default VodopadLisine;