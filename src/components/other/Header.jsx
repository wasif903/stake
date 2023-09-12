import style from "./header.module.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo from "../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { BsChatText, BsSearch } from "react-icons/bs";
import { BsAward } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Header = ({ setLoginModal, setIsideBar, isSidebar }) => {
  return (
    <>
      <div className={style.header_wrapper}>
        <div
          className={`d-flex align-items-center ${style.header_bars_wrapper}`}
        >
          {!isSidebar ? (
            <HiOutlineMenuAlt2
              className={style.header_bars}
              onClick={() => setIsideBar(!isSidebar)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <RxCross2
              className={style.header_barsX}
              onClick={() => setIsideBar(!isSidebar)}
              style={{ cursor: "pointer" }}
            />
          )}
          <div className="d-flex align-items-center">
            <img src={logo} alt="no img found" className={style.header_logo} />
            <h2 className="text-white px-3"> INFINY.VIP </h2>
          </div>
        </div>
        <div className={style.header_btn_wrapper}>
          <button onClick={() => setLoginModal(true)}>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>

      <div className={style.mobHeaderWrapper}>
        <div className={style.mobHeader}>
          <div>
            <HiOutlineMenuAlt2
              className={style.mob_bars}
              onClick={() => setIsideBar(!isSidebar)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <BsChatText
              className={style.mob_bars}
              onClick={() => setIsideBar(!isSidebar)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={style.wrapHomeIcon}>
            <AiFillHome
              className={style.mob_barsHome}
              onClick={() => setIsideBar(false)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="d-flex flex-column text-end">
            <BsAward
              className={style.mob_barsSearch}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="d-flex flex-column text-end">
            <BsSearch
              className={style.mob_barsSearch}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {/* <MiniSidebar isSidebar={isSidebar} /> */}
    </>
  );
};

export default Header;
