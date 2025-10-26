/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Places from "./places";
import { useContextAuth } from "../../Context";

export default function Okrug({ okrug, index, openIndex, setOpenIndex, setSelectedPlace }) {
    const isOpen = openIndex === index;
    const { switchLanguage } = useContextAuth();

    const handleClick = (e) => {
        setOpenIndex(isOpen ? null : index);

    };


    return (

        <ul style={{ background: 'transparent' }}>
            {okrug.submenu ? (
                <>
                    <li
                        onClick={handleClick}
                        style={{ background: 'transparent' }}
                    >
                        {openIndex === index ? '-' : '+'} {switchLanguage === 'en' ? okrug.titleENG ?? okrug.title : okrug.title}

                    </li>
                    {isOpen && <Places place={okrug.submenu} setSelectedPlace={setSelectedPlace} />}
                </>
            )
                :
                (

                    <a href="/#">{okrug.title}</a>
                )}
        </ul>

    )
}