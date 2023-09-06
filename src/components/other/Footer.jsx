import React from "react";
import style from "./footer.module.css";
import { Container } from "react-bootstrap";
import { IoSendSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={style.footer_wrapper}>
      <Container fluid className={style.footer_container}>
        <div className={style.footer_main}>
          <div className={style.footer_div}>
            {/* <div className={style.footer_logo}>
              <img
                // src="/images/logo/logo-white.svg"
                className={style.footer_main_logo}
              />
              <p className={style.footer_creater_name}>Made by Agenzi</p>
              <div className={style.footer_company_logo}>
                <img src="/images/projects/product-review-1.png" />
                <img src="/images/projects/product-review-2.png" />
              </div>
              <div className={style.social_logo}>
                <p>IN</p>
                <p>TW</p>
                <p>FB</p>
              </div>
            </div> */}
            <div className={style.footer_middle_div}>
              <div className={style.our_services}>
                <h3>our services</h3>
                <ul>
                  <li>UX/UI Design</li>
                  <li>Web Development</li>
                  <li>Digital Marketing</li>
                  <li>Product Design</li>
                  <li>Software Solutions</li>
                </ul>
              </div>
              <div className={style.company}>
                <h3>company</h3>
                <ul>
                  <li>UX/UI Design</li>
                  <li>Web Development</li>
                  <li>Digital Marketing</li>
                  <li>Product Design</li>
                  <li>Software Solutions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.footer_newsletter}>
            <h3>newsletter</h3>
            <p>
              We’re always on the lookout for the cutting-edge tech and brand
              innovations. Join us today.
            </p>
            <div className={style.footer_input_area}>
              <input type="text" placeholder="ENTER EMAIL" />
              <button>Sumbit</button>
            </div>
          </div>
        </div>
        <div className={style.copyright}>
          <p>Copyright © 2023 </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
