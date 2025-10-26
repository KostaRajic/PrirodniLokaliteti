/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContextAuth } from "../../Context";


export default function Places({ place }) {
    const [openIndex, setOpenIndex] = useState(null);
    const { switchLanguage, setSelectedPlace } = useContextAuth();

    const handleClick = (index) => {
        setOpenIndex(prev => prev === index ? null : index);
    };


    const handlePlaceClick = (placeItem) => {
        if (!placeItem.submenu) {
            setSelectedPlace(placeItem);
        }
    };


    return (
        <>
            <ul style={{ background: 'transparent', textDecoration: 'none' }}>
                {place.map((submenu, index) => (

                    <li key={index} className="menu-items" style={{ background: 'transparent', textDecoration: 'none' }}>
                        {submenu.submenu ? (
                            <>
                                <ul>
                                    <li onClick={() => handleClick(index)} style={{ background: 'transparent', border: 'none' }}>
                                        {openIndex === index ? '-' : '+'} {switchLanguage === 'en' ? submenu.titleENG ?? submenu.title : submenu.title}

                                    </li>
                                    {openIndex === index && (
                                        <Places place={submenu.submenu} switchLanguage={switchLanguage} setSelectedPlace={setSelectedPlace}/>
                                    )}
                                </ul>

                            </>
                        ) : (
                            <a href={submenu.to.replace(':lang', switchLanguage)} style={{ padding: '5px 20px' }} onClick={(e) => {
                                e.preventDefault();
                                handlePlaceClick(submenu);
                            }}>
                                {switchLanguage === 'en' ? submenu.titleENG ? submenu.titleENG : submenu.title : submenu.title}
                            </a>
                        )}
                    </li>
                ))}

            </ul>
        </>

    );
}
