import React from "react";
import style from "./minisidebar.module.css";
import bubble from "../../assets/sidebar-logos/Vector (1).svg";
import crown from "../../assets/sidebar-logos/Vector (2).svg";
import b from "../../assets/sidebar-logos/Vector (3).svg";
import chat from "../../assets/sidebar-logos/Group 35.svg";
import card from "../../assets/sidebar-logos/Vector.svg";

const MiniSidebar = ({ isSidebar }) => {
  return (
    <div className={style.sidebar_wrapper}>
      <div
        className={
          isSidebar ? `${style.inner_sidebar_active}` : `${style.inner_sidebar}`
        }
      >
        <span>
          <img src={card} alt="" />
          <p
            className={
              isSidebar
                ? `${style.inner_sidebar_name_active}`
                : `${style.inner_sidebar_name}`
            }
          >
            Promotions
          </p>
        </span>
        <span>
          <img src={bubble} alt="" />
          <p
            className={
              isSidebar
                ? `${style.inner_sidebar_name_active}`
                : `${style.inner_sidebar_name}`
            }
          >
            Affiliate
          </p>
        </span>
        <span>
          <img src={crown} alt="" />
          <p
            className={
              isSidebar
                ? `${style.inner_sidebar_name_active}`
                : `${style.inner_sidebar_name}`
            }
          >
            VIP Club
          </p>
        </span>
        <span>
          <img src={b} alt="" />
          <p
            className={
              isSidebar
                ? `${style.inner_sidebar_name_active}`
                : `${style.inner_sidebar_name}`
            }
          >
            Blog
          </p>
        </span>
        <span>
          <img src={chat} alt="" />
          <p
            className={
              isSidebar
                ? `${style.inner_sidebar_name_active}`
                : `${style.inner_sidebar_name}`
            }
          >
            Forum
          </p>
        </span>
      </div>
    </div>
  );
};

export default MiniSidebar;
