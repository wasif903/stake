import React from "react";
import style from "./minisidebar.module.css";

const MiniSidebar = () => {
  return (
    <div className={style.sidebar_wrapper}>
      <div className={style.inner_sidebar}></div>
    </div>
  );
};

export default MiniSidebar;
