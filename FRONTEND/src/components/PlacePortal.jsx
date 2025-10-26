/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContextAuth } from '../Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export const PlacePortal = ({ place }) => {
    const { switchLanguage, setSelectedPlace } = useContextAuth();
    const navigate = useNavigate();
    const [data, setData] = useState([])


    const loadOkrugData = async () => {
        try {

            const { beogradData } = await import('./StatisticRegions/Beograd/BeogradData');
            setData(prev => [...prev, ...beogradData])

            const { borskiOkrugData } = await import("./StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/BorskiOkrugData");
            setData(prev => [...prev, ...borskiOkrugData]);

            const { branicevskiOkrugData } = await import("./StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/BranicevskiOkrugData");
            setData(prev => [...prev, ...branicevskiOkrugData]);

            const { jablanickiOkrugData } = await import("./StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/JablanickiOkrugData");
            setData(prev => [...prev, ...jablanickiOkrugData]);

            const { nisavskiOkrugData } = await import("./StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/NisavskiOkrugData");
            setData(prev => [...prev, ...nisavskiOkrugData]);

            const { pcinjskiOkrugData } = await import("./StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PcinjskiOkrugData");
            setData(prev => [...prev, ...pcinjskiOkrugData]);

            const { pirotskiOkrugData } = await import("./StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/PirotskiOkrugData");
            setData(prev => [...prev, ...pirotskiOkrugData]);

            const { podunavskiOkrugData } = await import("./StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/PodunavskiOkrugData");
            setData(prev => [...prev, ...podunavskiOkrugData]);

            const { toplickiOkrugData } = await import("./StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/toplickiOkrugData");
            setData(prev => [...prev, ...toplickiOkrugData]);

            const { zajecarskiOkrugData } = await import("./StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/ZajecarskiOkrugData");
            setData(prev => [...prev, ...zajecarskiOkrugData]);

            const { djakovickiOkrugData } = await import("./StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/DjakovickiOkurgData");
            setData(prev => [...prev, ...djakovickiOkrugData]);

            const { gnjilanskiOkrugData } = await import("./StatisticRegions/KosovoIMetohija/Okruzi/Gnjilanski/GnjilanskiOkrugData");
            setData(prev => [...prev, ...gnjilanskiOkrugData]);

            const { mitrovackiOkrugData } = await import("./StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/MitrovackiOkrugData");
            setData(prev => [...prev, ...mitrovackiOkrugData]);

            const { peckiOkrugData } = await import("./StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckiOkrugData");
            setData(prev => [...prev, ...peckiOkrugData]);

            const { pristinskiOkrugData } = await import("./StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/PristinskiOkrugData");
            setData(prev => [...prev, ...pristinskiOkrugData]);

            const { urosevackiOkrugData } = await import("./StatisticRegions/KosovoIMetohija/Okruzi/Uroevacki/UrosevackiOkrugData");
            setData(prev => [...prev, ...urosevackiOkrugData]);

            const { kolubarskiOkrugData } = await import("./StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/KulubarskiOkrugData");
            setData(prev => [...prev, ...kolubarskiOkrugData]);

            const { macvanskiOkrugData } = await import("./StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/MacvanskiOkrugData");
            setData(prev => [...prev, ...macvanskiOkrugData]);

            const { moravickiOkrugData } = await import("./StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/moravickiOkrugData");
            setData(prev => [...prev, ...moravickiOkrugData]);

            const { pomoravskiOkrugData } = await import("./StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/pomoravskiOkrugData");
            setData(prev => [...prev, ...pomoravskiOkrugData]);

            const { rasinskiOkrugData } = await import("./StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/rasinskiOkrugData");
            setData(prev => [...prev, ...rasinskiOkrugData]);

            const { raskiOkrugData } = await import("./StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/raskiOkrugData");
            setData(prev => [...prev, ...raskiOkrugData]);

            const { sumadijskiOkrugData } = await import("./StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/SumadijskiOkrugData");
            setData(prev => [...prev, ...sumadijskiOkrugData]);

            const { zlatiborskiOkrugData } = await import("./StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ZlatiborskiOkrugData");
            setData(prev => [...prev, ...zlatiborskiOkrugData]);

            const { juznoBackiData } = await import("./StatisticRegions/Vojvodina/Okruzi/JuznoBacki/JuznoBackiData");
            setData(prev => [...prev, ...juznoBackiData]);

            const { juaznoBanatskiData } = await import("./StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/JuznoBanatskiData");
            setData(prev => [...prev, ...juaznoBanatskiData]);

            const { severnoBackiData } = await import("./StatisticRegions/Vojvodina/Okruzi/SevernoBacki/SevernoBackiData");
            setData(prev => [...prev, ...severnoBackiData]);

            const { severnoBanatskiData } = await import("./StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/SevernoBanatskiData");
            setData(prev => [...prev, ...severnoBanatskiData]);

            const { sremskiOkrugData } = await import("./StatisticRegions/Vojvodina/Okruzi/Sremski/SremskiOkrugData");
            setData(prev => [...prev, ...sremskiOkrugData]);

            const { srednjeBanatskiData } = await import("./StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/SrednjeBanatskiData");
            setData(prev => [...prev, ...srednjeBanatskiData]);

            const { zapadnoBackiData } = await import("./StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/ZapadnoBackiData");
            setData(prev => [...prev, ...zapadnoBackiData]);

        } catch (error) {
            console.error("Greška prilikom dinamičkog učitavanja:", error);
        }
    };

    useEffect(() => {
        loadOkrugData();
    }, []);

    const filteredData = Array.from(
        new Map(
            data.flat()
                .filter(item => item.name.toLowerCase() === place.title.toLowerCase())
                .map(item => [item.name, item])
        ).values()
    );



    const handleNext = () => {
        if (place.to) {
            const path = place.to.replace(':lang', switchLanguage === 'en' ? 'en' : 'sr');
            navigate(path);
            setTimeout(() => {
                setSelectedPlace(null);
            }, 0);
        }
    };


    return (
        <div className='placePortal'>

            {filteredData.map((place, index) => (
                <>
                    <div className='placePortalWrapper' style={{
                        backgroundImage: `url(${place.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                    }}>
                        <div className="overlay">
                            <h2 key={index} > {switchLanguage === 'en' ? (place.nameENG || place.name) : place.name}</h2>
                            <p>
                                {switchLanguage === 'en' ? (place.mainTextENG || place.mainTextSRB) : place.mainTextSRB}
                            </p>
                            <FontAwesomeIcon icon={faThumbsUp} size="2x" color="blue" />
                            <div className="btnClassPortal">
                                <button className="BtnPortal" onClick={() => setSelectedPlace(false)}>{switchLanguage === 'en' ? 'Back' : 'Nazad'}</button>
                                <button className="BtnPortal" onClick={handleNext}>{switchLanguage === 'en' ? 'Next' : 'Napred'}</button>
                            </div>
                        </div>


                    </div>
                </>

            ))}



        </div >
    )
}