import { useState } from "react";

import { Link } from "react-router-dom";

import { InputSwitch } from "primereact/inputswitch";

import Search from "./Search";

import "primeicons/primeicons.css";

import "../styles/Navbar.css";

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const menuItems = [
    { label: "всі", url: "/" },
    { label: "фільми", url: "/movies" },
    { label: "серіали", url: "/series" },
    { label: "мультфільми", url: "/cartoons" },
    { label: "аніме", url: "/anime" },
  ];

  return (
    <div className="flex flex-row justify-content-center w-full fixed nav_index">
      <div className="h-6rem width_nav nav_bg  borders flex flex-row align-items-center justify-content-between fixed">
        <div className="w-2 h-2rem flex flex-row align-items-center ml-6">
          <img
            alt="Instagram_icon.png"
            src={require("../images/Instagram_icon.png")}
            className="h-2rem "
          />
          <img
            alt="Telegram.png"
            src={require("../images/Telegram.png")}
            className="h-2rem ml-3"
          />
          <label className="text-white ml-5 text-base uppercase">про нас</label>
        </div>
        <div className="w-6 h-5rem flex flex-column align-items-center ">
          <Link to={"/"}>
            <img
              alt="KinoLibLogo.png"
              src={require("../images/KinoLibLogo.png")}
              className="h-5rem  ml-auto mr-auto"
            />
          </Link>
          <div className="w-full mt-1">
            <div className="">
              <div className="test_under_2 ml-auto mr-auto">
                <div className="h-8rem  ml-5 mr-5  flex flex-column justify-content-center gap-3">
                  <div>
                    <Search />
                  </div>
                  <div className="flex flex-rom justify-content-between">
                    {menuItems.map((item) => (
                      <Link
                        key={item.url}
                        to={item.url}
                        className="text-500 uppercase px-3 py-2 hover:bg-black-alpha-30 border-round-xl">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2 h-4rem mr-6 flex justify-content-center ">
          <InputSwitch
            checked={checked}
            onChange={(e) => setChecked(e.value)}
            className="mt-auto mb-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
