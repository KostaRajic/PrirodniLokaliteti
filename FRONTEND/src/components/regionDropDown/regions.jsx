/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Okrug from "./okrug";
import { useContextAuth } from "../../Context";

export default function Regions({ }) {
    const [openIndex, setOpenIndex] = useState(null);
    const { setSelectedPlace } = useContextAuth();
    const [regions, setRegions] = useState([]);


    useEffect(() => {
        const loadRegions = async () => {
            const module = await import("./regionsText");
            setRegions(module.default);
        };

        loadRegions();
    }, []);

    return (
        <>
            <ul className={`dropdown-menu`} style={{ background: 'transparent' }} >
                <li >
                    {regions.map((menu, index) => (
                        <Okrug
                            okrug={menu}
                            key={index}
                            index={index}
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                            setSelectedPlace={setSelectedPlace}
                        />
                    ))}
                </li>
            </ul>


        </>
    )

}