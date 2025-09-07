/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Okrug from "./okrug";
import regionsText from "./regionsText";

export default function Regions({ open, setOpen }) {
    const [openIndex, setOpenIndex] = useState(null);

    let ref = useRef()
    useEffect(() => {
        const handler = (e) => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler)
        }

    }, [open, setOpen])



    return (
        <>
            <ul className={`dropdown-menu`} ref={ref} style={{ background: 'transparent'}}>
                <li>
                    {regionsText.map((menu, index) => (
                        <Okrug
                            okrug={menu}
                            key={index}
                            index={index}
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex} />
                    ))}
                </li>
            </ul>
        </>
    )

}