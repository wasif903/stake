import React from "react";
import style from "./header.module.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo from "../../assets/logo.png";
import MiniSidebar from "./MiniSidebar";
const Header = () => {
  return (
    <>
      <div className={style.header_wrapper}>
        <div className={style.header_bars_wrapper}>
          <HiOutlineMenuAlt2 className={style.header_bars} />
          <img src={logo} alt="no img found" className={style.header_logo} />
        </div>
        <div className={style.header_btn_wrapper}>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <MiniSidebar />
    </>
  );
};

export default Header;
