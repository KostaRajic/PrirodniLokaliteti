import lepenskiVir1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/lepenskiVir1.jpg";
import lepenskiVir2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/lepenskiVir2.jpg";
import lepenskiVir3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/lepenskiVir3.jpg";
import lepenskiVir33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/lepenskiVir3_3.jpg";
import lepenskiVir4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/lepenskiVir4.jpg";
import lepenskiVir11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_1.jpg";
import lepenskiVir12 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_2.jpg";
import lepenskiVir13 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_3.jpg";
import lepenskiVir14 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_4.jpg";
import lepenskiVir15 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_5.jpg";
import lepenskiVir16 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_6.jpg";
import lepenskiVir17 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LepenskiVir/zbirka/lepenskiVir1_7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";

export const LepenskiVir = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = isMobile
    ? {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        arrows: false,
      }
    : {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        arrows: false,
      };

  const images = [
    {
      src: lepenskiVir11,
      alt: "Artifakti Lepenski Vir 1",
    },
    {
      src: lepenskiVir12,
      alt: "Artifakti Lepenski Vir 2",
    },
    {
      src: lepenskiVir13,
      alt: "Artifakti Lepenski Vir 3",
    },
    {
      src: lepenskiVir14,
      alt: "Artifakti Lepenski Vir 4",
    },
    {
      src: lepenskiVir15,
      alt: "Artifakti Lepenski Vir 5",
    },
    {
      src: lepenskiVir16,
      alt: "Artifakti Lepenski Vir 6",
    },
    {
      src: lepenskiVir17,
      alt: "Artifakti Lepenski Vir 7",
    },
  ];

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(borskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={lepenskiVir1} alt="Lepenski Vir 1" />

      <h2>Lepenski Vir</h2>

      <p style={{ paddingTop: "50px" }}>
        Lepenski Vir je jedno od najvećih i najznačajnijih mezolitskih i
        neolitskih arheoloških nalazišta, smešteno na desnoj obali Dunava u
        Đerdapskoj klisuri, u Srbiji, u centralnom delu Balkanskog poluostrva.
        Ovaj lokalitet, koji je ime dobio po dunavskom viru, bio je središte
        jedne od najvažnijih i najsloženijih kultura praistorije – kulture
        Lepenskog Vira.
        <br />
        <br />
        Između 1965. i 1970. godine otkriveno je ribarsko-lovačko naselje sa
        začecima kultivacije i domestikacije. Tokom iskopavanja pronađeno je
        sedam sukcesivnih naselja i 136 objekata (stambenih i sakralnih),
        izgrađenih u ranom mezolitu, u periodu od oko 9500. do 7200. godine pre
        nove ere (Proto Lepenski Vir 1 i 2), a zatim i u ranom i srednjem
        neolitu, od oko 6250. do 5500. godine pre nove ere (Lepenski Vir I-III).
        <br />
        <br />
        Glavni istraživač ovog lokaliteta bio je profesor dr Dragoslav Srejović,
        arheolog, akademik i profesor Univerziteta u Beogradu.
      </p>

      <img src={lepenskiVir2} alt="Lepenski Vir 2" />

      <p>
        Najnoviji radiokarbonski i AMS podaci sugerišu da se hronologija
        Lepenskog Vira prostire između 9500/7200 i 5500 godina pre nove ere,
        podeljena na rani i srednji mezolit, kasni mezolit, prelazni period i
        neolit.
        <br />
        <br />
        Postoje određena neslaganja oko tačnog početka naseljavanja i razvoja
        kulture Lepenskog Vira, ali najnovija istraživanja ukazuju da se to
        dogodilo između 9500. i 7200. godine pre nove ere. U kasnoj
        arhitektonskoj fazi Lepenskog Vira (6300–6000 p.n.e.) razvijaju se
        jedinstvene trapezoidne građevine i monumentalna skulptura, što je
        povezano s mešanjem lovaca-sakupljača iz oblasti Gvozdenih vrata s
        novopridošlim ranim evropskim zemljoradnicima.
        <br />
        <br />
        Lokalitet Lepenski Vir čini jedno veliko naselje s desetak manjih,
        satelitskih sela. Tokom istraživanja, na lokalitetu su pronađene brojne
        skulpture bazena i neobični arhitektonski ostaci.
      </p>

      {isMobile ? (
        <>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    width: "80%",
                    height: "200px",
                    margin: "0 8% 0 12%",
                  }}
                />
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    width: "400px",
                    height: "400px",
                    margin: "40px 0 40px 50px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </>
      )}

      <p>
        Srejović je uspeo da obezbedi neophodna sredstva i 6. avgusta 1965.
        godine, zajedno sa Zagorkom Leticom, započeo istraživanje lokaliteta.
        Iskopavanja su nastavljena tokom 1966. i 1967. godine.
        <br />
        <br />
        Sondiranje terena 1965. godine preraslo je u zaštitna iskopavanja 1966,
        a zatim se razvilo u potpuno sistematska iskopavanja 1967. godine, kako
        su istraživači sve dublje kopali. Kulturno-arheološki sloj počinje ispod
        površinskog sloja humusa, debljine 50 cm.
        <br />
        <br />
        Tek 1967. godine, nakon otkrića prvih mezolitskih skulptura, značaj
        lokaliteta postao je potpuno jasan. Ovi nalazi su zvanično objavljeni
        16. avgusta 1967. godine.
        <br />
        <br />
        Iskopavanja su završena 1971. godine, kada je ceo lokalitet izmesten 297
        metara više, kako bi se izbegla poplava izazvana formiranjem Đerdapskog
        jezera nakon izgradnje hidroelektrane Đerdap I.
      </p>

      <img
  srcSet={`${lepenskiVir33} 400w, ${lepenskiVir3} 1050w`} 
  sizes="(max-width: 600px) 400px, 1050px"
  src={lepenskiVir33}
  alt="Lepenski Vir 3"
/>
      <p>
        Lepenski Vir se nalazi na desnoj obali Dunava u istočnoj Srbiji, unutar
        klisure Gvozdena kapija. Smešten je u selu Boljetin, nedaleko od Donjeg
        Milanovca. i druge.
        <br />
        <br />
        Pogled iznad i preko Dunava je široko otvoren, dok stabilan i izdržljiv
        teren na obali reke uspešno odoleva intenzivnom erozivnom uticaju
        Dunava. Stabilnost je osigurana pomoću dve ili tri stenske gromade –
        kamenog rta koji se duboko pruža u reku. Ove gromade su služile kao
        prirodno sidro za teren na kojem se naselje razvijalo.
        <br />
        <br />
        Dugotrajno stanovanje na ovom lokalitetu omogućili su blizina velike
        reke, prirodna bogatstva zaleđa i termalne prednosti nagomilanih
        krečnjačkih stena, naročito imajući u vidu da je ledeno doba tek
        završeno. Osim toga, dugoročan opstanak naselja olakšavalo je i
        pretpostavljeno poznavanje određenih metoda kontrole rađanja, budući da
        je prostor za širenje naselja bio ograničen, iako se veruje da pojedini
        njegovi delovi još uvek nisu otkriveni.
      </p>

      <img src={lepenskiVir4} alt="Lepenski Vir 4" />

      <p>
        Vrtlozi su nastali usled izbočenih stena, a uskovitlani tok vode
        bogatiji je kiseonikom i algama, što ga čini bogatijim ribom. Vrtložna
        struja olakšava ribolov u odnosu na brze vode koje jure kroz klisuru.
        <br />
        <br />
        Takođe, vrtložna voda je taložila materijale na nizvodnoj strani plaža,
        danas poznatoj kao Katarinine Livadice, čineći je jačom i stabilnijom,
        umesto da dozvoli brzoj i snažnoj reci da je erodira. U neposrednom
        zaleđu nalazi se padina poznata kao Košo Brdo. U njoj se nalazi prirodna
        kamena niša ili stenovito sklonište (abri), nazvano Lepenska Potkapina,
        koje je istraživao arheolog Branko Gavela.
        <br />
        <br />
        Nizvodno od Lepenskog Vira, u pravcu Vlasca, na pola puta do ušća male
        Boljetinke ili Lepenke, nad rekom se uzdiže okomita stena Lepena, visoka
        40 metara. U njenom podnožju Rimljani su izgradili put, koji je danas
        potopljen na dubini od 13,5 metara ispod vode Đerdapskog jezera, zajedno
        s putnom pločom postavljenom u čast cara Tiberija.
        <br />
        <br />
        Naziv Lepena odnosi se i na padinu iznad Dunava između Lepenke stene i
        ušća Lepenke reke, kao i na uvalu u kojoj se padina završava.
      </p>
    </div>
  );
};
