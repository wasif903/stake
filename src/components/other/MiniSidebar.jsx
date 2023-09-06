import React from "react";
import style from "./minisidebar.module.css";
import cards from "../../assets/sidebar-logos/Vector (1).svg";

const MiniSidebar = () => {
  return (
    <div className={style.sidebar_wrapper}>
      <div className={style.inner_sidebar}>
        <img src={cards} alt="" />
      </div>
    </div>
  );
};

export default MiniSidebar;
