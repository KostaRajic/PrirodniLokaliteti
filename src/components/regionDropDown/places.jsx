/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContextAuth } from "../../Context";

export default function Places({ place }) {
    const [openIndex, setOpenIndex] = useState(null);
    const { switchLanguage } = useContextAuth();


    const handleClick = (index) => {
        setOpenIndex(prev => prev === index ? null : index);
    };


    return (
        <ul  style={{ background: 'transparent'}}>
            {place.map((submenu, index) => (
                <li key={index} className="menu-items" style={{ background: 'transparent'}}>
                    {submenu.submenu ? (
                        <>
                            <ul>
                                <li onClick={() => handleClick(index)}  style={{ background: 'transparent', color: 'rgba(255, 255, 0, 0.600)'}}>
                                    {switchLanguage === 'en' ? submenu.titleENG ? submenu.titleENG : submenu.title : submenu.title}
                                </li>
                                {openIndex === index && (
                                    <Places place={submenu.submenu} switchLanguage={switchLanguage} />
                                )}
                            </ul>

                        </>
                    ) : (
                        <a href={submenu.to.replace(':lang', switchLanguage)} style={{padding: '5px 20px'}}>
                            {switchLanguage === 'en' ? submenu.titleENG ? submenu.titleENG : submenu.title : submenu.title}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
}
