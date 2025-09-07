/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react"
import { beogradData } from "../StatisticRegions/Beograd/BeogradData"
import { borskiOkrugData } from "../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Borski/BorskiOkrugData"
import { branicevskiOkrugData } from "../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Branicevski/BranicevskiOkrugData"
import { jablanickiOkrugData } from "../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Jablanicki/JablanickiOkrugData"
import { nisavskiOkrugData } from "../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Nisavski/NisavskiOkrugData"
import { pcinjskiOkrugData } from "../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pcinjski/PcinjskiOkrugData"
import { pirotskiOkrugData } from "../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Pirotski/PirotskiOkrugData"
import { podunavskiOkrugData } from "../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Podunavski/PodunavskiOkrugData"
import { toplickiOkrugData } from "../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Toplicki/toplickiOkrugData"
import { zajecarskiOkrugData } from "../StatisticRegions/IstocnaIJuznaSrbija/Okruzi/Zajecarski/ZajecarskiOkrugData"
import { djakovickiOkrugData } from "../StatisticRegions/KosovoIMetohija/Okruzi/Djakovicki/DjakovickiOkurgData"
import { gnjilanskiOkrugData } from "../StatisticRegions/KosovoIMetohija/Okruzi/Gnjilanski/GnjilanskiOkrugData"
import { mitrovackiOkrugData } from "../StatisticRegions/KosovoIMetohija/Okruzi/Mitrovacki/MitrovackiOkrugData"
import { peckiOkrugData } from "../StatisticRegions/KosovoIMetohija/Okruzi/Pecki/PeckiOkrugData"
import { pristinskiOkrugData } from "../StatisticRegions/KosovoIMetohija/Okruzi/Pristinski/PristinskiOkrugData"
import { urosevackiOkrugData } from "../StatisticRegions/KosovoIMetohija/Okruzi/Uroevacki/UrosevackiOkrugData"
import { kolubarskiOkrugData } from "../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Kolubarski/KulubarskiOkrugData"
import { macvanskiOkrugData } from "../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Macvanski/MacvanskiOkrugData"
import { moravickiOkrugData } from "../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Moravicki/moravickiOkrugData"
import { pomoravskiOkrugData } from "../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Pomoravski/pomoravskiOkrugData"
import { rasinskiOkrugData } from "../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Rasinski/rasinskiOkrugData"
import { raskiOkrugData } from "../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Raski/raskiOkrugData"
import { sumadijskiOkrugData } from "../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Sumadijski/SumadijskiOkrugData"
import { zlatiborskiOkrugData } from "../StatisticRegions/SumadijaIZapadnaSrbija/Okruzi/Zlatiborski/ZlatiborskiOkrugData"
import { juznoBackiData } from "../StatisticRegions/Vojvodina/Okruzi/JuznoBacki/JuznoBackiData"
import { juaznoBanatskiData } from "../StatisticRegions/Vojvodina/Okruzi/JuznoBanatski/JuznoBanatskiData"
import { severnoBackiData } from "../StatisticRegions/Vojvodina/Okruzi/SevernoBacki/SevernoBackiData"
import { severnoBanatskiData } from "../StatisticRegions/Vojvodina/Okruzi/SevernoBanatski/SevernoBanatskiData"
import { sremskiOkrugData } from "../StatisticRegions/Vojvodina/Okruzi/Sremski/SremskiOkrugData"
import { zapadnoBackiData } from "../StatisticRegions/Vojvodina/Okruzi/ZapadnoBacki/ZapadnoBackiData"
import { useNavigate } from "react-router-dom"
import regionsText from "../regionDropDown/regionsText"
import { useContextAuth } from "../../Context"


const dataNames = [beogradData, borskiOkrugData, branicevskiOkrugData, jablanickiOkrugData, nisavskiOkrugData, pcinjskiOkrugData, pirotskiOkrugData, podunavskiOkrugData, toplickiOkrugData, zajecarskiOkrugData, djakovickiOkrugData, gnjilanskiOkrugData, mitrovackiOkrugData, peckiOkrugData, pristinskiOkrugData, urosevackiOkrugData, kolubarskiOkrugData, macvanskiOkrugData, moravickiOkrugData, pomoravskiOkrugData, rasinskiOkrugData, raskiOkrugData, sumadijskiOkrugData, zlatiborskiOkrugData, juznoBackiData, juaznoBanatskiData, severnoBackiData, severnoBanatskiData, sremskiOkrugData, zapadnoBackiData]

const SearhComponent = ({ searchComponent, setSearchComponent, inputRef }) => {
    const [names, setNames] = useState('');
    const ref = useRef();
    const { switchLanguage, setSwitchLanguage } = useContextAuth();
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(-1);

    useEffect(() => {
        if (!searchComponent) return;

        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setSearchComponent(false);
            }
        };

        const timeout = setTimeout(() => {
            document.addEventListener("mousedown", handler);
            document.addEventListener("touchstart", handler);
        }, 0);

        return () => {
            clearTimeout(timeout);
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, []);

    useEffect(() => {
        if (filteredData.length > 0) {
            setSelectedItem(0);
        } else {
            setSelectedItem(-1);
        }
    }, [names]);


    const filteredData = dataNames
        .flat()
        .filter(item => item.name.toLowerCase().includes(names.toLowerCase()));


    const handleKeyDown = e => {
        if (e.key === 'ArrowUp') {
            setSelectedItem(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'ArrowDown') {
            setSelectedItem(prev => (prev < filteredData.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'Enter' && selectedItem >= 0 && filteredData[selectedItem]) {
            const selectedName = filteredData[selectedItem].name;
            const place = findPlaceByName(regionsText, selectedName);
            if (place && place.to) {
                const path = place.to.replace(':lang', 'sr');
                navigate(path);
                setSearchComponent(false);
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

    const handleChosenPlace = (e) => {
        const place = findPlaceByName(regionsText, e.target.innerText);

        if (place && place.to) {
            const path = place.to.replace(':lang', 'sr');
            navigate(path);
            setSearchComponent(false);
        }
    };


    return (
        <div className="searchComponent" ref={ref}>
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
                    onClick={handleChosenPlace}
                    className={index === selectedItem ? 'selected-item' : ''}
                    onMouseEnter={() => setSelectedItem(index)}
                >
                    {switchLanguage === 'en' ? (data.nameENG || data.name) : data.name}
                </p>
            ))}

        </div>
    )
}

export default SearhComponent;