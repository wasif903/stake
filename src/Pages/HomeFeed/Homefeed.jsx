import { Col, Container, Row } from "react-bootstrap";
import slider1 from "../../assets/home/sec1-img2.png";
import slider2 from "../../assets/home/slider2.jpg";
import slider3 from "../../assets/home/slider3.png";
import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import casinoImg from "../../assets/home/sec2.jpg";
import esportImg from "../../assets/home/sec2-col2.jpg";
import TableList from "../../components/Table/TableList";
import gpay from "../../assets/crypto/Vector (1).svg";
import circle from "../../assets/crypto/Vector.svg";
import Footer from "../../components/other/Footer";
import { useState } from "react";
import gcash from "../../assets/home/gpay.png";
import mayapay from "../../assets/home/mayapay.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/element/css/autoplay"; // Import Swiper CSS

function Homefeed() {
  const icons = [
    {
      id: 1,
      icon: faFacebook,
    },
    {
      id: 2,
      icon: faGoogle,
    },
    {
      id: 3,
      icon: faFacebook,
    },
    {
      id: 4,
      icon: faGoogle,
    },
  ];

  const sliderImgs = [slider1, slider2, slider3];

  const [selector, setSelector] = useState(false);

  const sectionToggler = () => setSelector(!selector);

  return (
    <>
      <div className={styles.home_wrapper}>
        <Container className={`${styles.home_container} py-4 py-lg-0`}>
          <Row
            className={`d-flex justify-content-center align-items-center ${styles.wrapper}`}
          >
            <Col
              lg="6"
              className="d-flex justify-content-center align-items-center"
            >
              <div className="text-center">
                <h2 className="text-white">Welcome To INFINITY</h2>
                <p>
                  Welcome to INFINY, a pinnacle of creativity, elegance, and
                  security in the world of online betting. We pride ourselves on
                  being a trusted affiliate program, welcoming newcomers with
                  open arms to embark on an exhilarating gaming journey.
                </p>
                <div className="text-center text-white">Start With :</div>
                {icons.map((item, index) => (
                  <div className="d-inline-flex flex-wrap wrap" key={index}>
                    <div key={item.id} className={styles.iconWrapper}>
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={styles.icon}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg="6">
              <Swiper
                autoplay={{
                  delay: 4000, // 4 seconds
                  disableOnInteraction: false, // Continue autoplay after user interaction
                }}
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                style={{ zIndex: 0 }}
              >
                {sliderImgs.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={img} alt="img" className={styles.section} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </Container>

        <Container className={`py-5`}>
          <Row className={styles.home_card_row}>
            <Col
              lg="6"
              className={`d-flex justify-content-lg-start mb-5 mb-md-0 justify-content-center align-items-center`}
            >
              <div
                className={`text-center ${styles.cardSplitter} ${styles.home_container}`}
              >
                <div className={styles.bgImgCasino}>
                  {/* <img
                    src={casinoImg}
                    className={styles.sec2Imgs}
                    alt="sec1-col1"
                  /> */}
                  <h1 className="text-white fw-bold">CASINO</h1>
                </div>
                <p className="text-center pt-4 pb-2">
                  Browse our giant range of casino games as Infinity offers a
                  fair and fun online gambling experience. Play Slots, Live
                  Casino, Blackjack, Baccarat.
                </p>

                <button className={`btn ${styles.btn}`}>PLAY NOW</button>
              </div>
            </Col>
            <Col
              lg="6"
              className={`d-flex justify-content-lg-end justify-content-center align-items-center`}
            >
              <div
                className={`text-center ${styles.cardSplitter} ${styles.home_container}`}
              >
                <div className={styles.bgImgArcade}>
                  <h1 className="text-white fw-bold">ARCADE</h1>
                </div>

                <p className="text-center pt-4 pb-2">
                  Browse our giant range of casino games as Infinity offers a
                  fair and fun online gambling experience. Play Slots, Live
                  Casino, Blackjack, Baccarat.
                </p>
                <button className={`btn ${styles.btn}`}>PLAY NOW</button>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 py-5">
            <TableList />
          </Row>
        </Container>

        <Container className={`${styles.home_container}  py-3`}>
          <Row className={styles.home_crypto_row}>
            <div className={styles.home_crypto_wrapper}>
              <h2>No crypto? No Problem.</h2>
            </div>
            <div className={styles.home_crypto_icon}>
              <img src={gpay} alt="" />
              <img src={circle} alt="" />
              <img
                src={gcash}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
              <img
                src={mayapay}
                style={{ width: "120px", height: "120px" }}
                alt=""
              />
            </div>
          </Row>
        </Container>
        <Container className={`${styles.home_container} my-5 py-3`}>
          <p className={styles.experience_heading}>
            At INFINY, innovation is at our core. Our dedicated and talented
            team is in the process of rolling out captivating mini-games
            designed to ensure not only a safe gaming environment but also
            promising high Returns to Player (RTP).
          </p>
          <div className={styles.experience_second_section}>
            <h3>Unrivaled Gaming Experience</h3>
            <p>
              The thrill of the game comes with its risks. To partake in our
              offerings, you must be 18 years or older. We urge our players to
              be aware of their local online gaming regulations; INFINY is not
              liable for any breaches of such laws. We advocate for responsible
              gaming – immerse in the excitement, but always prioritize safety.
            </p>
          </div>
          <div className="text-center">
            {selector === true ? (
              ""
            ) : (
              <button
                className={`btn ${styles.togglerBtn}`}
                onClick={sectionToggler}
              >
                See More
              </button>
            )}
          </div>
          {
            <>
              <div
                className={`${
                  selector ? styles.experience_third_section : "d-none"
                } `}
              >
                <p>
                  The thrill of the game comes with its risks. To partake in our
                  offerings, you must be 18 years or older. We urge our players
                  to be aware of their local online gaming regulations; INFINY
                  is not liable for any breaches of such laws. We advocate for
                  responsible gaming – immerse in the excitement, but always
                  prioritize safety.
                </p>
                <h3>Unrivaled Gaming Experience</h3>
              </div>
              <div className="text-center">
                {selector === false ? (
                  ""
                ) : (
                  <button
                    className={`btn ${styles.togglerBtn}`}
                    onClick={sectionToggler}
                  >
                    See Less
                  </button>
                )}
              </div>
            </>
          }
        </Container>
        <Container style={{ padding: "0" }}>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default Homefeed;
