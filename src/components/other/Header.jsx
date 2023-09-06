import React, { useState } from "react";
import style from "./header.module.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo from "../../assets/logo.png";
import MiniSidebar from "./MiniSidebar";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [isSidebar, setIsideBar] = useState(false);

  return (
    <>
      <div className={style.header_wrapper}>
        <div className={style.header_bars_wrapper}>
          {isSidebar ? (
            <HiOutlineMenuAlt2
              className={style.header_bars}
              onClick={() => setIsideBar(!isSidebar)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <RxCross2
              className={style.header_bars}
              onClick={() => setIsideBar(!isSidebar)}
              style={{ cursor: "pointer" }}
            />
          )}
          <img src={logo} alt="no img found" className={style.header_logo} />
        </div>
        <div className={style.header_btn_wrapper}>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <MiniSidebar isSidebar={isSidebar} />
    </>
  );
};

export default Header;
