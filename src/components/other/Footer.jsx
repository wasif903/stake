import style from "./footer.module.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className={style.footer_wrapper}>
      <Container fluid className={style.footer_container}>
        <div className={style.footer_main}>
          <div className={style.footer_div}>
            <div className={style.footer_middle_div}>
              <div className={style.our_services}>
                <h3 className="text-center">INFINY.VIP</h3>
                <ul className="text-center">
                  <li>Terms & Condition</li>
                  <li>KYC Policy</li>
                  <li>Responsible Gaming</li>
                  <li>Privacy Policy</li>
                  <li>FAQ</li>
                </ul>
              </div>

              <div className={style.our_services}>
                <h3 className="text-center">GAMES</h3>
                <ul className="text-center">
                  <li>CRASH</li>
                  <li>PLINKO</li>
                  <li>LUCKY COLOUR</li>
                  <li>DICE</li>
                  <li>WHEEL</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.footer_newsletter}>
            <h3 className="text-center">ABOUT US</h3>
            <p className="text-center">
              At INFINY, a pinnacle of creativity, elegance, and security in the
              world of online betting. We pride ourselves on being a trusted
              affiliate program, welcoming newcomers with open arms to embark on
              an exhilarating gaming journey.
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
