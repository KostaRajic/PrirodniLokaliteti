import { useEffect, useState } from 'react';
import images from './carouselImages';

// const images = [
//     {
//         desktop: 'Beograd/Beograd/desktop/BG5.jpg',
//         mobile: 'Beograd/Beograd/mobile/BGM5BG.jpg',
//         alt: "Beograd"
//     },
//     {
//         desktop: 'SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/desktop/uvac2.jpg',
//         mobile: 'SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/mobile/Muvac2BG.jpg',
//         alt: "Uvac"
//     },
//     {
//         desktop: 'SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor1.jpg',
//         mobile: 'SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor1BG.jpg',
//         alt: "Zlatibor"
//     },
//     {
//         desktop: 'Beograd/BotanickaBasta/desktop/botanickaBasta4.jpg',
//         mobile: 'Beograd/BotanickaBasta/mobile/botanickaBastaM4BG.jpg',
//         alt: "Botanicka Basta"
//     },
//     {
//         desktop: 'KosovoIMetohija/Djakovicki/ManastirDecani/desktop/manastirDecani2.jpg',
//         mobile: 'KosovoIMetohija/Djakovicki/ManastirDecani/mobile/MmanastirDecani2BG.jpg',
//         alt: "Manastir Decani"
//     },
//     {
//         desktop: 'Beograd/Kalemegdan/desktop/kalemegdan4.jpg',
//         mobile: 'Beograd/Kalemegdan/mobile/kalemegdanM4BG.jpg',
//         alt: "Kalemegdan"
//     },
//     {
//         desktop: 'JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/desktop/smederevskaTvrdjava2.jpg',
//         mobile: 'JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/mobile/smederevskaTvrdjavaM2BG.jpg',
//         alt: "Smederevska Tvrdjava"
//     },
//     {
//         desktop: 'JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/desktop/niskaBanja4.jpg',
//         mobile: 'JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/mobile/niskaBanjaM1BG.jpg',
//         alt: "Niska Banja"
//     },
//     {
//         desktop: 'Vojvodina/JuznoBackiOkrug/NoviSad/desktop/NS7.jpg',
//         mobile: 'Vojvodina/JuznoBackiOkrug/NoviSad/mobile/NSM7BG.jpg',
//         alt: "Novi Sad"
//     },
//     {
//         desktop: 'Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/PalickoJezero2.jpg',
//         mobile: 'Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalickoJezero2BG.jpg',
//         alt: "Palicko Jezero"
//     },
//     {
//         desktop: 'JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina4.jpg',
//         mobile: 'JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM4BG.jpg',
//         alt: "Stara Planina"
//     },
//     {
//         desktop: 'SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina2.jpg',
//         mobile: 'SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina2BG.jpg',
//         alt: "Jagodina"
//     },
// ];




const ImageBackgroundSlider = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);


  const currentImg = images[current];
  const prevImg = prev !== null ? images[prev] : null;

  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }} >

      {prevImg && (
        <picture
          key={`prev-${prev}`}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        >
          <source srcSet={prevImg.mobile} media="(max-width: 768px)" />
          <source srcSet={prevImg.desktop} media="(min-width: 769px)" />
          <img
            src={prevImg.desktop}
            alt={prevImg.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: 1,
              transition: "opacity 1s ease-in-out",
            }}
          />
        </picture>
      )}


      <picture
        key={`current-${current}`}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <source srcSet={currentImg.mobile} media="(max-width: 768px)" />
        <source srcSet={currentImg.desktop} media="(min-width: 769px)" />
        <img
          src={currentImg.desktop}
          alt={currentImg.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
          }}
        />
      </picture>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className="carouselOverlay"></div>
    </div>
  );
};

// const ImageBackgroundSlider = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);


//   const currentImg = images[current];

//   return (
//     <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
//       {images.map((img, index) => (
//         <picture key={index} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
//           <source srcSet={img.mobile} media="(max-width: 768px)" />
//           <source srcSet={img.desktop} media="(min-width: 769px)" />
//           <img
//             srcSet={index === current ? `${img.mobile} 768w, ${img.desktop}` : undefined}
//             alt={img.alt}
//             loading={index === current ? "eager" : "lazy"}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               position: "absolute",
//               top: 0,
//               left: 0,
//               animation: `${index === current ? "fadeIn 1s ease-in-out forwards" : "fadeOut 1s ease-in-out forwards"}`,
//             }}
//           />
//         </picture>
//       ))}

//       <style>{`
//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }
//         @keyframes fadeOut {
//           0% { opacity: 1; }
//           100% { opacity: 0; }
//         }
//       `}</style>
//       <div className='carouselOverlay'></div>
//     </div>
//   );
// };




export default ImageBackgroundSlider;


// const ImageBackgroundSlider = () => {
//     const [current, setCurrent] = useState(0);
//     const [prev, setPrev] = useState(null);
//     const [fade, setFade] = useState(true);

//     useEffect(() => {
//         const interval = setTimeout(() => {
//             setCurrent((current + 1) % images.length); // nova trenutn
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [current]);

//     const currentImg = images[current];

//     return (
//         <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
//             {/* Trenutna slika */}
//             <picture>
//                 <source srcSet={currentImg.mobile} media="(max-width: 768px)" />
//                 <source srcSet={currentImg.desktop} media="(min-width: 769px)" />
//                 <img
//                     key={current} // React prepoznaje kao novi element
//                     src={currentImg.desktop}
//                     alt={currentImg.alt}
//                     style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         opacity: fade ? 1 : 0,
//                         transition: "opacity 0.5s ease-in-out",
//                     }}
//                 />
//             </picture>

//             <div
//                 className="carouselOverlay"
//                 style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
//             ></div>
//         </div>
//     );
// };
