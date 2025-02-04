import arandjelovac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac1.jpg";
import arandjelovac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac2.jpg";
import arandjelovac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac31.jpg";
import arandjelovac12 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac32.jpg";
import arandjelovac13 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac33.jpg";
import arandjelovac14 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac34.jpg";
import arandjelovac15 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac35.jpg";
import arandjelovac16 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac36.jpg";
import arandjelovac17 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac37.jpg";
import arandjelovac18 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac38.jpg";
import arandjelovac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac5.jpg";
import arandjelovac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac6.jpg";
import arandjelovac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac7.jpg";
import arandjelovac8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Arandjelovac/arandjelovac8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Arandjelovac = () => {
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
      src: arandjelovac11,
      alt: "Bukovacka banja 1",
    },
    {
      src: arandjelovac12,
      alt: "Bukovacka banja 2",
    },
    {
      src: arandjelovac13,
      alt: "Bukovacka banja 3",
    },
    {
      src: arandjelovac14,
      alt: "Bukovacka banja 4",
    },
    {
      src: arandjelovac15,
      alt: "Bukovacka banja 5",
    },
    {
      src: arandjelovac16,
      alt: "Bukovacka banja 6",
    },
    {
      src: arandjelovac17,
      alt: "Bukovacka banja 7",
    },
    {
      src: arandjelovac18,
      alt: "Bukovacka banja 8",
    },
  ];

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={arandjelovac1} alt="Aradjelovac 1" />

      <h2>ARANĐELOVAC</h2>

      <p style={{ paddingTop: "50px" }}>
        Aranđelovac je grad i opština u Srbiji, smešten u podnožju planina
        Bukulja i Venčac, na nadmorskoj visini od oko 255 metara i udaljen 76
        kilometara od Beograda. Opština obuhvata dve gradske i 18 seoskih mesnih
        zajednica, a u samom gradu nalazi se Bukovička banja. Administrativno
        pripada Šumadijskom okrugu sa sedištem u Kragujevcu. Prema popisu iz
        2002. godine, u gradu je živelo 24.309 stanovnika, dok je na području
        cele opštine zabeleženo 48.129 stanovnika. Kraj je poznat po
        slobodarskoj tradiciji, a posebno po podizanju Prvog srpskog ustanka
        1804. godine u selu Orašac, udaljenom 6 kilometara od Aranđelovca. U
        Orašcu se nalazi memorijalni kompleks oko Marićevića jaruge, mesta gde
        je Karađorđe izabran za vođu ustanka i gde je započeto stvaranje moderne
        srpske države.
      </p>

      <img src={arandjelovac2} alt="Narodni muzej u Aranđelovcu" />

      <p>
        Narodni muzej u Aranđelovcu čuva i prikazuje brojne eksponate iz oblasti
        paleontologije, arheologije, etnologije, istorije i istorije umetnosti,
        pružajući uvid u materijalnu i duhovnu kulturu ovog dela Šumadije. U
        okviru stalne postavke, posetioci mogu da se upoznaju sa prošlošću grada
        i okoline, počevši od kamenog doba pa sve do 20. veka. Pored toga, muzej
        nudi i izložbu izuzetnih dela savremene umetničke keramike.
      </p>

      <h3
        style={{
          textAlign: "center",
          margin: "10px 0 45px 0",
          color: "rgb(19 17 35)",
          fontSize: "30px",
          fontWeight: "600",
        }}
      >
        Park Bukovičke banje
      </h3>

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
                    margin: "0 0 50px 50px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </>
      )}

      <p>
        Park Bukovičke banje zauzima površinu veću od 22 hektara. Zemljište za
        njegovu izgradnju nabavljeno je 1849. godine, kada su postavljene prve
        staze, posađeno drveće i uređeni izvor i kupatilo Talpara. Temeljna
        obnova i oblikovanje parka započeti su 1856. godine, kada su uređene
        staze, zasađeni drvoredi, postavljeni travnjaci i cvetnjaci, te
        izgrađeno toplo kupatilo Đulara, čime je prostor dobio današnji izgled.
        Tokom sedamdesetih godina 19. veka, pod vladavinom kneza Mihaila
        Obrenovića, Bukovička banja je postala jedno od najuređenijih
        turističkih lečilišta u Srbiji, zadržavajući tu reputaciju sve do
        početka Prvog svetskog rata. Staro zdanje, najstarija očuvana građevina
        u okviru parka, predstavlja dragocen primer arhitekture srpskog
        romantizma. Njegovu izgradnju 1865. godine pokrenuo je knez Mihailo
        Obrenović, zamišljajući ga kao letnju rezidenciju dinastije Obrenović i
        prostor za održavanje skupštinskih zasedanja.
      </p>

      <img
        src={arandjelovac5}
        alt="Planina Bukulja"
      />

      <p>
        Bukulja je planina u srcu Šumadije, iznad Aranđelovca i Bukovičke banje,
        sa najvišim vrhom koji doseže 696 metara nadmorske visine. Planina je
        vulkanskog porekla, što potvrđuju granitne stene bogate specifičnim
        mineralnim sastavom. Prekrivena je gustom šumom bukve, graba i hrasta, a
        naziv Bukulja potiče od reči bukulj, umanjenice slovenskog izraza za
        bukvu. Planina je popularna destinacija za sportske pripreme i
        rekreativne aktivnosti, sa uređenim stazama koje vode od Bukovičkog
        parka do samog vrha. Njena pozicija štiti Aranđelovac od jakih vetrova.
        Na vrhu Bukulje nalazi se hidrometeorološka stanica, dok se na njenim
        obroncima prostire Garaško jezero. Bukulja je omiljeno izletište za
        lokalno stanovništvo i posetioce banje, sa brojnim ugostiteljskim
        objektima poput Lovačkog doma, Kačare i restorana Kod Coke. Na planini
        se takođe nalazi izvorište poznate gazirane mineralne vode Knjaz Miloš,
        što dodatno doprinosi njenom značaju.
      </p>

      <img src={arandjelovac6} alt="Pećina Risovača u Arandjelovcu" />
      <p>
        Pećina Risovača nalazi se na ulazu u Aranđelovac iz pravca Topole i
        predstavlja jedno od najvažnijih paleolitskih nalazišta u Evropi. Ovaj
        prirodni objekat, nekadašnje stanište ljudi iz ledenog doba, retkost je
        koja privlači pažnju kako naučnika tako i posetilaca zainteresovanih za
        istoriju ljudske prošlosti. Zbog svog prirodnog bogatstva i značajnih
        arheoloških i paleontoloških nalaza, pećina je 1983. godine proglašena
        kulturnim dobrom od velikog značaja. Od 1995. godine, zajedno sa okolnim
        prostorom od oko 13 hektara, zaštićena je kao spomenik prirode prve
        kategorije. Ulaz u pećinu nalazi se na severoistočnoj strani brda
        Risovača, na visini od oko 17 metara iznad toka reke Kubršnice. Iza
        ulaza prostire se dvorana duga 22 metra, koja se prvo pruža ka zapadu, a
        potom skreće ka jugoistoku. Pretpostavlja se da ukupna dužina pećine
        iznosi oko 800 metara, do Vrbčke reke. Risovaču godišnje poseti oko
        30.000 ljudi, što je čini popularnom turističkom destinacijom i
        značajnim mestom za istraživanje ljudske istorije.
      </p>

      <img src={arandjelovac7} alt="Garaško jezero"  />
      <p>
        Garaško jezero se odlikuje strmim obalama sa jedne strane, dok je sa
        druge strane lakše pristupačno. Dno jezera je čvrsto, sa blagim
        kanjonima koji prate nekadašnje rečne tokove, a najdublji deo doseže
        dubinu od preko 20 metara. Jezero je bogato različitim vrstama riba,
        među kojima se nalaze klen, crvenperka, krupatica, babuška, šaran, som,
        ali i štuka, koja je postavila nezvanični državni rekord sa primerkom
        težim od 19 kg. Ovo akumulaciono jezero nudi mnoštvo zabavnih sadržaja i
        mogućnosti za avanturističke aktivnosti. Ako se nađete u blizini
        Aranđelovca, obavezno posetite Garaško jezero – sigurno će vam ostati u
        sećanju, a možda i postati vaša omiljena destinacija za opuštanje i
        uživanje u prirodi. Nedaleko od Garaškog jezera nalazi se otvoreni bazen
        SRC Šumadija sa sportskim terenima za mali fudbal, rukomet i odbojku na
        pesku.
      </p>

      <img src={arandjelovac8} alt="Aqua park Izvor Arandjelovac" />
      <p>
        Aqua park Izvor se nalazi u Aranđelovcu, u Bukovičkoj banji, na samo sat
        vremena vožnje od Beograda. Na površini od 6 ha uz tri bazena sa
        mineralnom vodom, moderne atrakcije i najviše tobogane u Srbiji ovaj
        akva park vam nudi do sada neviđeno adrenalinsko iskustvo.
      </p>
    </div>
  );
};
