import mokraGora1 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/mokraGora1.jpg'
import mokraGora2 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/mokraGora2.jpg'
import mokraGora3 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/mokraGora3.jpg'
import mokraGora4 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/mokraGora4.jpg'

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from './PeckiOkrugPathRoutes';

export const PlaninaMokraGora = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home)} />
      <header></header>
      <img src={mokraGora1} alt="Planina Mokra Gora 1" />

      <h2>Planina Mokra Gora</h2>

      <p style={{ paddingTop: "50px" }}>
        Mokra Gora se nalazi na jugozapadu Srbije, na samoj administrativnoj
        granici sa pokrajinom Kosovo i Metohija, između reka Ibar i Beli Drim.
        Najviši vrh planine je Pogled (2154 m). U neposrednoj blizini planine
        nalazi se i jezero Gazivode, koje je nastalo pregrađivanjem reke Ibar.
        Region je poznat po gotovo netaknutoj prirodi. Međutim, od dolaska
        međunarodnih snaga, kontrola seče šuma je oslabila, zbog čega su velike
        površine postale potpuno ogolene zbog nezakonite sječe.
      </p>

      <img src={mokraGora2} alt="Planina Mokra Gora 2" />

      <p>
        Mokra Gora je deo planinskog venca Prokletija. Njena prepoznatljiva,
        krševita priroda, koju je Jovan Cvijić nazvao "Lepotica Balkana",
        oblikovana je kroz krasne procese na karbonatnim stenama, gde je
        hemijski uticaj vode na krečnjake imao ključnu ulogu u stvaranju terena.
        Formiranje reljefa bilo je pod uticajem snažnih tektonskih pomeranja
        koja su stvorila venčaste i nabranne planine, a kasnije su se razvili
        horstovi i rovovi, odnosno tektonske udoline. Vertikalnim pomeranjima
        nastale su osnovne konture današnjeg reljefa, naročito u višim delovima.
        Prvobitne doline su se transformisale u vrtače, dok su neke postale
        uvvale. Doline sa jačim rekama zadržale su svoj prvobitni izgled, a na
        nekima se mogu videti vrtače na dnu. Na Mokroj Gori prisutne su razne
        vrste sedimenata, magmatskih i metamorfnih stena. Zbog tektoskih
        kretanja, krečnjaci su ispressecani brojnim rasedima i pukotinama,
        toliko često da se mogu naći velike, netaknute površine krečnjaka koje
        prelaze 1 m².
      </p>

      <img src={mokraGora3} alt="Planina Mokra Gora 3" />

      <p>
        Na Mokroj Gori uspevaju različite vrste jelki i borova, kao i endemično
        drveće poput petoigličastog bora, bora krivuća, omorike i smreke. Buka i
        hrast rastu na većim površinama koje se koriste za seču. Šume grabova,
        jasena i leske uglavnom su prisutne na padinama, gde je zemljište
        vlažnije, što stvara povoljne uslove za rast biljaka i stvaranje
        hranljivih materija. Na padinama planine i brdima raste sitno rastinje,
        poput kleke, divljeg gloga, šiblja i leske, a tu se nalaze i pašnjačke
        površine. Obrađeno zemljište uglavnom se nalazi na krčevinama i
        propalicama prisojnih strana.
        <br />
        <br />
        Hrast zauzima manje površine na prisojnim stranama, dok je bukva
        dominantno drvo. Bukva raste do visine od 1500 m nadmorske visine, a uz
        nju rastu javor, jasika i breza. Na većim visinama prisutni su jela,
        smreka i bor, dok u nižim predelima povremeno raste dres.
        <br />
        <br />
        Planina je bogata raznim livađskim, šumskim i lekovitim biljkama, među
        kojima se izdvajaju planinski šafran, visibaba i jagorčevina. Tu su i
        mahovine i brojne vrste paprati.
        <br />
        <br />
        Jedna od karakteristika Mokre Gore je i čuvena borovnica, čija berba se
        organizuje 19. avgusta, na Preobraženje.
        <br />
        <br />
        Uslovi na planini takođe pogoduju rastu različitih vrsta pečuraka, među
        kojima su najpoznatije vrganj, lisičarka i smrčak.
      </p>

      <img src={mokraGora4} alt="Planina Mokra Gora 4" />

      <p>
        Na Mokroj Gori mogu se sresti razne vrste divljih životinja, uključujući
        lisicu, vuka, divlju svinju, medveda, srnu, jazavca, zeca i divlju
        mačku. Na visinama iznad 1500 m, žive divlja kokoška i njen mužjak,
        teter, koji je vidljiv samo tokom perioda parenja, od 20. aprila do 10.
        maja. Tada teter ima karakterističan poziv, koji podseća na pesmu, i
        postaje toliko opušten da se može uhvatiti čak i rukama.
        <br />
        <br />
        Nekada su se na Mokroj Gori gajile ovce, koje su bile mešavina pećinskog
        i kosovskog soja (rude), kao i goveda, sitne planinske buše, koja je
        imala malu privrednu vrednost. Konji su bili brdski planinski, manjih
        dimenzija, ali veoma izdržljivi. Tokom Drugog svetskog rata, stočni fond
        je uništen tokom dve organizovane pljačke od strane balista i
        okupatorskih snaga, pri čemu je, prema nekim podacima, opljačkano oko
        8000 grla stoke, a nikada nije obnovljen.
      </p>
    </div>
  );
};
