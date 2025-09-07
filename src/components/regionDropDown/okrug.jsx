/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react";
import Places from "./places";
import { useContextAuth } from "../../Context";

export default function Okrug({ okrug, index, openIndex, setOpenIndex }) {
    const isOpen = openIndex === index;
    const { switchLanguage } = useContextAuth();

    const handleClick = () => {
        setOpenIndex(isOpen ? null : index);
    };


    return (

        <ul style={{ background: 'transparent'}}>
            {okrug.submenu ? (
                <>
                    <li
                        onClick={handleClick}
                         style={{ background: 'transparent'}}
                    >
                        {switchLanguage === 'en' ? okrug.titleENG ? okrug.titleENG : okrug.title : okrug.title}
                    </li>
                    {isOpen && <Places place={okrug.submenu} />}
                </>
            )
                :
                (

                    <a href="/#">{okrug.title}</a>
                )}
        </ul>

    )
}