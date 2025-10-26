/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

export const useContextAuth = () => {
    return useContext(Context);
}

export const UseContextProvider = ({ children }) => {

    const [selectedItems, setSelectedItems] = useState(null);
    const [switchLanguage, setSwitchLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });
    const [searchComponent, setSearchComponent] = useState(false)
      const [selectedPlace, setSelectedPlace] = useState(null);


    useEffect(() => {
        localStorage.setItem('language', switchLanguage);
    }, [switchLanguage]);

    const value = { selectedItems, setSelectedItems, switchLanguage, setSwitchLanguage, selectedPlace, setSelectedPlace }

    return <div>
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    </div>
}