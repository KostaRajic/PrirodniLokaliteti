/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/icons/android-chrome-192x192.png";
import { useState } from "react";

export const Layout = ({ children }) => {
    const navigate = useNavigate()
    const [ dropDown, setDropDown ] = useState(false)
  return (
    <div>
      <header className="headerClass">
        <nav>
          <div className="logo-and-nav">
            <img src={logo} alt="SerbianWonders Logo" />
            <ul>
                <li onClick={() => navigate('/')}>Home</li>
              <li >Regions</li>
              <li>Search</li>
            </ul>
          </div>
        </nav>
      </header>
      <div>
      {children}
      </div>

    </div>
  );
};
