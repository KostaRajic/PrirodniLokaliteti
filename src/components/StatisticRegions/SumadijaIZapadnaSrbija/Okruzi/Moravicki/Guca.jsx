import guca1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/guca1.jpg";
import guca2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/guca2.jpg";
import guca3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/guca3.jpg";
import guca4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/guca4.jpg";
import guca5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/Guca/guca5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";

export const Guca = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home)} style={{fill: 'white'}} />
      <header></header>
      <img src={guca1} alt="Guča" />

      <h2>Guča</h2>

      <p style={{ paddingTop: "50px" }}>
        Guča je gradska naselja u opštini Lučani, u Moravičkom okrugu, u Srbiji.
        Prema popisu iz 2022. godine, ima 1.491 stanovnika. U Guči se nalazi
        Lapidarium, a svake godine se tradicionalno održava Dragačevski sabor
        trubača.
      </p>

      <img src={guca3} alt="Guča2 " /> 

      <p>
        Guča se prvi put pominje u turskom katastarskom popisu iz 1476. godine.
        Upravom Kralja, 2. avgusta 1893. godine, naselje je dobilo status
        varoši. Guča je, kao centar zajednice naselja i subopštinski centar
        opštine Lučani, starije urbano naselje od samih Lučana. Bila je
        opštinsko, a zatim i sresko sedište do 1955. godine, nakon čega je
        postala opštinsko sedište do 1962. godine, kada je ukinuta opština Guča,
        a formirana je opština Lučani sa sedištem u Lučanima. Crkvu Svetog
        Arhangela Gavrila podigli su meštani 1832. godine uz značajnu pomoć
        kneza Miloša Obrenovića.
      </p>

      <img src={guca2} alt="Guča 3" />

      <p>
        Dragačevski sabor je godišnji festival trubača koji se održava u Guči, u
        regionu Dragačevo. Svake godine, nekoliko stotina hiljada posetilaca iz
        Srbije i inostranstva dolazi u ovo naselje sa nekoliko hiljada
        stanovnika. Rekordan broj posetilaca zabeležen je 2009. godine, na 49.
        saboru, koji je, prema podacima, okupio više od 600.000 ljudi. O ovom
        festivalu snimljeno je nekoliko dokumentarnih filmova.
      </p>

      <img src={guca4} alt="Guča 4" />

      <p>
        Prvi Dragačevski sabor u Guči započeo je skromno, sredinom oktobra 1961.
        godine, kada su učestvovala četiri orkestra. Idejni tvorac festivala bio
        je dugogodišnji novinar Duge, Bлагоje Blaža Radivojević. Veliki doprinos
        u osmišljavanju ove manifestacije dao je pisac Branko V. Radičević, koji
        je festivalu dao ime Veliki (narodni) sabor „Sa Ovčara i Kablara“.
      </p>

      <img src={guca5} alt="Guča 5" />

      <p>
        Za festival su zaslužni i muzički entuzijasti Miodrag Vasiljević,
        Dragoljub Jovašević, Dragoslav Dević, Živojin Zdravković, Borivoje Ilić,
        Budimir Gajić, vojni muzičar Milomir Miletić iz Tijanija, kao i dva
        Dragačevca, Vlastimir Lala Vujović i Nikola Nika Stojić. Na nagovor
        Branka V. Radičevića, u popularizaciji srpske trube uključio se i list
        „Večernje novosti“, koji će godinama dodeljivati „Zlatnu trubu“
        najpopularnijem trubaču na Saboru.
      </p>
    </div>
  );
};
