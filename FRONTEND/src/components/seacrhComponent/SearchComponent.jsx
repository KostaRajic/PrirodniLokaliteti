/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react"
import { useContextAuth } from "../../Context";

const SearhComponent = ({ }) => {
    const [names, setNames] = useState('');
    const { switchLanguage, setSelectedPlace } = useContextAuth();
    const [selectedItem, setSelectedItem] = useState(-1);
    const inputRef = useRef();
    const [data, setData] = useState([])
    const [regionsText, setRegionsText] = useState([]);


    const loadOkrugData = async () => {
        try {

            const { beogradData } = await import('../StatisticRegions/Beograd/BeogradData');
            setData(prev => [...prev, ...beogradData])

            const { borskiOkrugData } = await import("../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/BorskiOkrugData");
            setData(prev => [...prev, ...borskiOkrugData]);

            const { branicevskiOkrugData } = await import("../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/BranicevskiOkrugData");
            setData(prev => [...prev, ...branicevskiOkrugData]);

            const { jablanickiOkrugData } = await import("../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/JablanickiOkrugData");
            setData(prev => [...prev, ...jablanickiOkrugData]);

            const { nisavskiOkrugData } = await import("../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/NisavskiOkrugData");
            setData(prev => [...prev, ...nisavskiOkrugData]);

            const { pcinjskiOkrugData } = await import("../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PcinjskiOkrugData");
            setData(prev => [...prev, ...pcinjskiOkrugData]);

            const { pirotskiOkrugData } = await import("../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/PirotskiOkrugData");
            setData(prev => [...prev, ...pirotskiOkrugData]);

            const { podunavskiOkrugData } = await import("../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/PodunavskiOkrugData");
            setData(prev => [...prev, ...podunavskiOkrugData]);

            const { toplickiOkrugData } = await import("../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/toplickiOkrugData");
            setData(prev => [...prev, ...toplickiOkrugData]);

            const { zajecarskiOkrugData } = await import("../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/ZajecarskiOkrugData");
            setData(prev => [...prev, ...zajecarskiOkrugData]);

            const { djakovickiOkrugData } = await import("../StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/DjakovickiOkurgData");
            setData(prev => [...prev, ...djakovickiOkrugData]);

            const { gnjilanskiOkrugData } = await import("../StatisticRegions/KosovoIMetohija/Okruzi/Gnjilanski/GnjilanskiOkrugData");
            setData(prev => [...prev, ...gnjilanskiOkrugData]);

            const { mitrovackiOkrugData } = await import("../StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/MitrovackiOkrugData");
            setData(prev => [...prev, ...mitrovackiOkrugData]);

            const { peckiOkrugData } = await import("../StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckiOkrugData");
            setData(prev => [...prev, ...peckiOkrugData]);

            const { pristinskiOkrugData } = await import("../StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/PristinskiOkrugData");
            setData(prev => [...prev, ...pristinskiOkrugData]);

            const { urosevackiOkrugData } = await import("../StatisticRegions/KosovoIMetohija/Okruzi/Uroevacki/UrosevackiOkrugData");
            setData(prev => [...prev, ...urosevackiOkrugData]);

            const { kolubarskiOkrugData } = await import("../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/KulubarskiOkrugData");
            setData(prev => [...prev, ...kolubarskiOkrugData]);

            const { macvanskiOkrugData } = await import("../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/MacvanskiOkrugData");
            setData(prev => [...prev, ...macvanskiOkrugData]);

            const { moravickiOkrugData } = await import("../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/moravickiOkrugData");
            setData(prev => [...prev, ...moravickiOkrugData]);

            const { pomoravskiOkrugData } = await import("../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/pomoravskiOkrugData");
            setData(prev => [...prev, ...pomoravskiOkrugData]);

            const { rasinskiOkrugData } = await import("../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/rasinskiOkrugData");
            setData(prev => [...prev, ...rasinskiOkrugData]);

            const { raskiOkrugData } = await import("../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/raskiOkrugData");
            setData(prev => [...prev, ...raskiOkrugData]);

            const { sumadijskiOkrugData } = await import("../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/SumadijskiOkrugData");
            setData(prev => [...prev, ...sumadijskiOkrugData]);

            const { zlatiborskiOkrugData } = await import("../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ZlatiborskiOkrugData");
            setData(prev => [...prev, ...zlatiborskiOkrugData]);

            const { juznoBackiData } = await import("../StatisticRegions/Vojvodina/Okruzi/JuznoBacki/JuznoBackiData");
            setData(prev => [...prev, ...juznoBackiData]);

            const { juaznoBanatskiData } = await import("../StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/JuznoBanatskiData");
            setData(prev => [...prev, ...juaznoBanatskiData]);

            const { severnoBackiData } = await import("../StatisticRegions/Vojvodina/Okruzi/SevernoBacki/SevernoBackiData");
            setData(prev => [...prev, ...severnoBackiData]);

            const { severnoBanatskiData } = await import("../StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/SevernoBanatskiData");
            setData(prev => [...prev, ...severnoBanatskiData]);

            const { sremskiOkrugData } = await import("../StatisticRegions/Vojvodina/Okruzi/Sremski/SremskiOkrugData");
            setData(prev => [...prev, ...sremskiOkrugData]);

            const { srednjeBanatskiData } = await import("../StatisticRegions/Vojvodina/Okruzi/SrednjeBanatski/SrednjeBanatskiData");
            setData(prev => [...prev, ...srednjeBanatskiData]);

            const { zapadnoBackiData } = await import("../StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/ZapadnoBackiData");
            setData(prev => [...prev, ...zapadnoBackiData]);

        } catch (error) {
            console.error("Greška prilikom dinamičkog učitavanja:", error);
        }
    };

    useEffect(() => {
  const loadRegionsText = async () => {
    const module = await import("../regionDropDown/regionsText");
    setRegionsText(module.default);
  };
  loadRegionsText();
}, []);

    useEffect(() => {
        loadOkrugData();
    }, []);

    useEffect(() => {
        if (filteredData.length > 0) {
            setSelectedItem(0);
        } else {
            setSelectedItem(-1);
        }
    }, [names]);

    const filteredData = Array.from(
        new Map(
            data.flat()
                .filter(item => item.name.toLowerCase().includes(names.toLowerCase()))
                .map(item => [item.name, item])
        ).values()
    );


    const handleKeyDown = e => {
        if (e.key === 'ArrowUp') {
            setSelectedItem(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'ArrowDown') {
            setSelectedItem(prev => (prev < filteredData.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'Enter' && selectedItem >= 0 && filteredData[selectedItem]) {
            const selectedName = filteredData[selectedItem].name;
            const place = findPlaceByName(regionsText, selectedName);
            if (place && place.to) {
                setSelectedPlace(place);
            }
        }
    };

    const handleDataNames = (e) => {
        setNames(e.target.value);
    };

    useEffect(() => {
        if (inputRef?.current) {
            inputRef.current.focus();
        }
    }, []);

    const findPlaceByName = (places, name) => {
        for (let place of places) {
            if (place?.title?.toLowerCase() === name.toLowerCase() || (place.titleENG && place.titleENG.toLowerCase() === name.toLowerCase())) {
                return place;
            }

            if (place?.submenu) {
                const result = findPlaceByName(place.submenu, name);
                if (result) return result;
            }
        }
        return null;
    };

    return (
        <>
            <div className="searchComponent">
                <input
                    type="text"
                    value={names}
                    onInput={handleDataNames}
                    ref={inputRef}
                    placeholder={switchLanguage === 'rs' ? "Pretraži..." : "Search..."}
                    onKeyDown={handleKeyDown}
                />

                {names && filteredData.map((data, index) => (
                    <p
                        key={index}
                        onClick={() => {
                            const place = findPlaceByName(regionsText, data.name);
                            if (place && place.to) {
                                setSelectedPlace(place);
                            }
                        }}
                        className={index === selectedItem ? 'selected-item' : ''}
                        onMouseEnter={() => setSelectedItem(index)}
                    >
                        {switchLanguage === 'en' ? (data.nameENG || data.name) : data.name}
                    </p>
                ))}
            </div>
        </>
    )
}

export default SearhComponent;