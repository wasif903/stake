import style from "./minisidebar.module.css";

import sidebar1 from "../../assets/sidebar-logos/side1.png";
import sidebar2 from "../../assets/sidebar-logos/side2.png";
import sidebar3 from "../../assets/sidebar-logos/side3.png";
import sidebar4 from "../../assets/sidebar-logos/side4.png";
import sidebar5 from "../../assets/sidebar-logos/side5.png";

const MiniSidebar = ({ isSidebar }) => {
  return (
    <div
      className={
        isSidebar
          ? `${style.sidebar_wrapper_active}`
          : `${style.sidebar_wrapper}`
      }
    >
      <div
        className={
          isSidebar ? `${style.inner_sidebar_active}` : `${style.inner_sidebar}`
        }
      >
        <span>
          <img src={sidebar1} className={style.buzz} alt="" />
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
          <img src={sidebar2} className={style.buzz} alt="" />
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
          <img src={sidebar3} className={style.buzz} alt="" />
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
          <img src={sidebar4} className={style.buzz} alt="" />
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
          <img src={sidebar5} className={style.buzz} alt="" />
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
