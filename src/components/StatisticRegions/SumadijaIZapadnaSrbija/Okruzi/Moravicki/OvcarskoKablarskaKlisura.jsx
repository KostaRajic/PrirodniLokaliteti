import ovcarIKablar1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/klisura1.jpg";
import ovcarIKablar2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/klisura2.jpg";
import ovcarIKablar3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/klisura3.jpg";
import ovcarIKablar4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/klisura4.jpg";
import ovcarIKablar5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/klisura5.jpg";
import ovcarIKablar6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/klisura6.jpg";
import ovcarIKablar7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/klisura7.jpg";
import ovcarIKablar8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/klisura8.jpg";
import ssg2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg2.jpg";
import ssg4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg4.jpg";
import ssg5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg5.jpg";
import ssg6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg6.jpg";
import ssg7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg7.jpg";
import ssg8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg8.jpg";
import ssg9 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg9.jpg";
import ssg10 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/ssg10.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const OvcarskoKablarskaKlisura = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const isChangingSlide = useRef(false);

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
        pauseOnHover: false,
        arrows: true,
        beforeChange: () => {
          isChangingSlide.current = true;
        },
        afterChange: () => {
          isChangingSlide.current = false;
        },
      }
    : {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        arrows: true,
        beforeChange: () => {
          isChangingSlide.current = true;
        },
        afterChange: () => {
          isChangingSlide.current = false;
        },
      };

  const images = [
    {
      name: "Manastir Jovanje",
      src: ssg2,
      alt: "Manastir Jovanje",
    },
    {
      name: "Manastir Nikolje",
      src: ssg4,
      alt: "Manastir Nikolje",
    },
    {
      name: "Manastir Preobrazenje",
      src: ssg5,
      alt: "Manastir Preobrazenje",
    },
    {
      name: "Manastir Savinje",
      src: ssg6,
      alt: "Manastir Savinje",
    },
    {
      name: "Manastir Svete Trojice",
      src: ssg7,
      alt: "Manastir Svete Trojice",
    },
    {
      name: "Manastir Uspenje",
      src: ssg8,
      alt: "Manastir Uspenje",
    },
    {
      name: "Manastir Vavedenje",
      src: ssg9,
      alt: "Manastir Vavedenje",
    },
    {
      name: "Manastir Vaznesenje",
      src: ssg10,
      alt: "Manastir Vaznesenje",
    },
  ];

  const handleSrpskaSvetaGora = (e) => {
    if (isChangingSlide.current) {
      return;
    }

    switch (e.target.alt) {
      case "Manastir Jovanje":
        navigate("ManastirJovanje");
        break;
      case "Manastir Nikolje":
        navigate("ManastirNikolje");
        break;
      case "Manastir Preobrazenje":
        navigate("ManastirPreobrazenje");
        break;
      case "Manastir Savinje":
        navigate("ManastirSavinje");
        break;
      case "Manastir Svete Trojice":
        navigate("ManastirSveteTrojice");
        break;
      case "Manastir Uspenje":
        navigate("ManastirUspenje");
        break;
      case "Manastir Vavedenje":
        navigate("ManastirVavedenje");
        break;
      case "Manastir Vaznesenje":
        navigate("ManastirVaznesenje");
        break;
    }
  };

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={ovcarIKablar1} alt="Ovcarsko-kablarska klisura" />

      <h2 style={{ color: "white" }}>Ovcarsko - kablarska klisura</h2>

      <p style={{ paddingTop: "50px" }}>
        Ovčarsko-Kablarska klisura predstavlja jedinstvenu morfološku celinu.
        Udaljena je 18 km od Čačka. Usječena je između planinskih masiva Ovčara
        i Kablara. Duga je oko 20 km i odlikuje se strmim stranama i uklještenim
        meandrima Zapadne Morave. Morava je pregradena branama, pa su formirana
        dva veštačka jezera na hidrocentralama Ovčar Banja i Međuvršje. Najveća
        dubina klisure je 710 m. Klisura je pod zaštitom države kao predelo
        izuzetnih odlika I kategorije. O klisuri se stara Turistička
        organizacija Čačka.
      </p>

      <img src={ovcarIKablar2} alt="Ovčarsko-kablarska klisura" />

      <p>
        Reljef je oblikovan tektonskim i erozivnim oblicima reljefa. Planine
        Ovčar i Kablar, kao i čitava Ovčarsko-Kablarska klisura, neposredno
        utiču na klimu, hidrološke objekte i živote organizama. Zapadna Morava
        teče kroz kompozitnu dolinu koja se sastoji od četiri kotline, jedne
        veće klisure, jednog suženja i dve suteske. Ovčarsko-Kablarska klisura
        predstavlja najuzvodnije suženje u dolini Zapadne Morave. Nalazi se
        između Požeške kotline na zapadu i Čačanske kotline na istoku. Duga je
        oko 20 km i karakterišu je strme strane i uklješteni meandri.
      </p>

      <img src={ovcarIKablar3} alt="Planina Kablar" />

      <p>
        Usečena је do dubine od 550 m u škriljcima i krečnjacima. Počevši od
        Požeške kotline nizvodno, prema severo-istoku, Ovčarsko-Kablarska
        klisura je usečena u paleozojskim škriljcima. Klisura je duboka,
        meandarska i antecedentna, što znači da se paralelno sa usecanjem
        klisure vršilo i izdizanje nekada jedinstvene planinske mase Ovčara i
        Kablara, u koju se ona usjekla. Planina Ovčar je razdvojena od Jelice
        Pakovračkom presedlinom. Prema Jovanu Cvijiću, možda je to bilo grlo
        starog kratera, koji je uništen zajedno sa eruptivnim stenama koje su se
        iz njega izlile. Od denudacije bi bio sačuvan samo duboki deo kraterskog
        kanala, ispunjen eruptivnom masom.
      </p>

      <img src={ovcarIKablar4} alt="Planina Kablar 3" />

      <p>
        Preko njih dolaze debeli slojevi modrikastog krečnjaka i beli dolomit.
        Prema Zapadnoj Moravi, strane su mu prilično strme, gradeći sa suprotnim
        Kablarom Ovčarsko-Kablarsku klisuru. Na strmoj, krečnjačkoj strani,
        prema Zapadnoj Moravi, padine su prekrivene degradiranom šumom i
        oskudnom travom. Planina Kablar je izgrađena od dijabaza, rožnaca,
        krečnjaka i serpentina. Sa visinom od 885 m, nastavlja se severno od
        Ovčara prema planinama Maljenu i Suvoboru. Podnožje planine je pod
        oranicama, voćnjacima i pašnjacima. Na planinama Kablara, kao i Ovčara,
        visoko su neogeni peskovi i gline, koji su nastali od nekadašnjih jezera
        čačanske i požeške kotline. U krečnjacima Ovčara i Kablara nalaze se
        otvori pećina.
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
        Srpska Sveta Gora
      </h3>

      {isMobile ? (
        <>
          <Slider {...settings} ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    width: "80%",
                    height: "230px",
                    margin: "0 8% 0 12%",
                  }}
                  onClick={handleSrpskaSvetaGora}
                />
                <p
                  style={{
                    textAlign: "center",
                    paddingBottom: "5px",
                    marginBottom: "20px",
                  }}
                  onClick={handleSrpskaSvetaGora}
                >
                  {image.name}
                </p>
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <>
          <Slider {...settings} ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="kgImages"
                  onClick={handleSrpskaSvetaGora}
                />
                <p
                  style={{
                    textAlign: "center",
                    padding: "40px 20px 0  20px",
                    width: "400px",
                    marginLeft: "50px",
                    marginBottom: "50px",
                    cursor: "pointer",
                  }}
                  onClick={handleSrpskaSvetaGora}
                >
                  {image.name}
                </p>
              </div>
            ))}
          </Slider>
        </>
      )}

      <p>
        Pored prirodnih lepota, turistički potencijal Ovčarsko-Kablarske klisure
        čini i veliki broj pravoslavnih manastira, okruženih šumama, vodama i
        stenama. Zbog postojanja deset manastira i dva sveta mesta u
        Ovčarsko-Kablarskoj klisuri, ona je poznata i kao „Srpska Sveta Gora“.
      </p>

      <img src={ovcarIKablar5} alt="Vidikovac na planini Kablar" />

      <p>
        Stakleni vidikovac na Kablaru je atraktivna turistička tačka koja nudi
        neverovatan pogled na Ovčarsko-Kablarsku klisuru, kao i na okolna
        planinska područja i reku Zapadnu Moravu. Nalazi se na visini od oko 885
        metara, pružajući posetiocima panoramski pogled koji oduzima dah.
        Vidikovac je izgrađen sa staklenim podom i zaštitnim ogradama, što
        omogućava posetiocima da uživaju u visinskom pogledu i dožive osećaj kao
        da "lepršaju" iznad klisure. Ovaj vidikovac je postao popularna
        destinacija za turiste i ljubitelje prirode, kao i idealno mesto za
        ljubitelje fotografije, jer pruža spektakularne prizore, naročito u
        zalazak i izlazak sunca. Posetioci mogu uživati u lepotama prirode, a
        pri tome imati priliku da obiđu okolne manastire i uživaju u bogatoj
        istoriji ovog regiona.
      </p>

      <img src={ovcarIKablar6} alt="Ovčarsko - kablarska klisura 2" />

      <p>
        U klisuri, 18 km zapadno od Čačka, nalazi se poznata Ovčar Banja, na
        putu Čačak-Užice. Lekoviti mineralni izvori ove banje potiču iz
        dubinskih tektonskih rasloma, koji se izlijevaju u nanosu banjske ravni.
        Voda ima temperaturu od 35 °C do 38 °C, a po sastavu je jodna i slabo
        sumporovita. Zahvaljujući hemijskom sastavu vode, ovde se leče mnoga
        oboljenja.
      </p>

      <img src={ovcarIKablar7} alt="Elitna staza na planini Kablar" />

      <p>
        Šetnja i planinarenje na Ovčarsko-Kablarskoj klisuri su odličan način da
        se uživa u prirodnim lepotama ovog regiona, koji je poznat po svojoj
        izuzetnoj morfologiji, bogatom bilju, kao i velikom broju manastira.
        Klisura nudi raznovrsne staze koje su pogodna destinacija za ljubitelje
        prirode i aktivnog odmora.
      </p>

      <img src={ovcarIKablar8} alt="Planina Ovčar" />

      <p>
        Zapadna Morava je leva sastavnica Velike Morave. Nastaje spajanjem
        Moravice i Đetine i duga je 210 km. Protice naizmenično kroz kotline i
        klisure. Između Požeške i Čačanske klisure stvara Ovčarsko-kablarsku
        klisuru. Širina i dubina Zapadne Morave zavise od vodostaja i kreću se u
        blizini grada od 0,4 do 2 m, dok u virima nizvodno od klisure mogu
        dostići i do 6 m. Po izlasku iz Ovčarsko-kablarske klisure, Zapadna
        Morava postaje ravničarska reka, sa virima i peskovito-šljunkovitim
        obalama. Neke od njih su preuređene u plaže, koje privlače veliki broj
        turista, kupača, sportskih ribolovaca i rekreativaca.
      </p>
    </div>
  );
};
