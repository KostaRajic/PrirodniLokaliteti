import { useEffect, useState } from 'react'
import img1 from '../assets/images/Beograd/Beograd/desktop/BG5.jpg'
import img2 from '../assets/images/Beograd/BotanickaBasta/desktop/botanickaBasta4.jpg'
import img3 from '../assets/images/Beograd/Kalemegdan/desktop/kalemegdan4.jpg'
import img4 from '../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/desktop/manastirDecani2.jpg'
import img5 from '../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/desktop/smederevskaTvrdjava2.jpg'
import img6 from '../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/desktop/niskaBanja4.jpg'
import img7 from '../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/desktop/NS7.jpg'
import img8 from '../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor1.jpg'
import img9 from '../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/PalickoJezero2.jpg'
import img10 from '../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/desktop/uvac2.jpg'
import img11 from '../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/desktop/staraPlanina4.jpg'
import img12 from '../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/desktop/jagodina2.jpg'
import img1M from '../assets/images/Beograd/Beograd/mobile/BGM5BG.jpg'
import img2M from '../assets/images/Beograd/BotanickaBasta/mobile/botanickaBastaM4BG.jpg'
import img3M from '../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM4BG.jpg'
import img4M from '../assets/images/KosovoIMetohija/Djakovicki/ManastirDecani/mobile/MmanastirDecani2BG.jpg'
import img5M from '../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/SmederevskaTvrdjava/mobile/smederevskaTvrdjavaM2BG.jpg'
import img6M from '../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/mobile/niskaBanjaM1BG.jpg'
import img7M from '../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/mobile/NSM7BG.jpg'
import img8M from '../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor1BG.jpg'
import img9M from '../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalickoJezero2BG.jpg'
import img10M from '../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uvac/mobile/Muvac2BG.jpg'
import img11M from '../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/StaraPlanina/mobile/staraPlaninaM4BG.jpg'
import img12M from '../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Jagodina/mobile/Mjagodina2BG.jpg'


const images = [
    { desktop: img1, mobile: img1M, alt: "Slika 1" },
    { desktop: img2, mobile: img2M, alt: "Slika 2" },
    { desktop: img3, mobile: img3M, alt: "Slika 3" },
    { desktop: img4, mobile: img4M, alt: "Slika 4" },
    { desktop: img5, mobile: img5M, alt: "Slika 5" },
    { desktop: img6, mobile: img6M, alt: "Slika 6" },
    { desktop: img7, mobile: img7M, alt: "Slika 7" },
    { desktop: img8, mobile: img8M, alt: "Slika 8" },
    { desktop: img9, mobile: img9M, alt: "Slika 9" },
    { desktop: img10, mobile: img10M, alt: "Slika 10" },
    { desktop: img11, mobile: img11M, alt: "Slika 11" },
    { desktop: img12, mobile: img12M, alt: "Slika 12" }
]


const ImageBackgroundSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrent(current == images.length - 1 ? 0 : current + 1)
        }
            , 3000)


        return () => clearInterval(interval);
    })

    return (
        <>
            {images.map((image, index) => {
                return (
                    <div key={index} className={index == current ? 'carouselImg carouselImg-active' : 'carouselImg'}>
                        <img srcSet={`${image.mobile} 450w, ${image.desktop} `} alt="cauroselImages" loading='lazy' style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                        <div className="carouselOverlay"></div>
                    </div>
                )

            })}
        </>


    );
};


export default ImageBackgroundSlider;