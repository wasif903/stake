import { Col, Container, Row } from "react-bootstrap";
import sec1 from "../assets/home/sec1.jpg";
import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Header from "../components/other/Header";
import casinoImg from "../assets/home/sec2-col1.png";
import esportImg from "../assets/home/sec2-col2.png";
import TableList from "../components/other/Table/TableList";
import gpay from "../assets/crypto/Vector (1).svg";
import circle from "../assets/crypto/Vector.svg";
import { useState } from "react";
import Login from "../components/Modal/Login";

function Home() {
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

  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <Header setLoginModal={setLoginModal} />
      <div className={styles.home_wrapper}>
        <Container className={`${styles.home_container} py-4 py-lg-0`}>
          <Row className={styles.wrapper}>
            <Col
              lg="6"
              className="d-flex row justify-content-center align-items-center"
            >
              <div className="text-center">
                <h2 className="text-white">LOREM IPSUM</h2>
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
              <div className="text-center">
                <img src={sec1} alt="img" className={styles.section} />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className={`my-5 py-3`}>
          <Row>
            <Col
              lg="6"
              className={`d-flex justify-content-lg-start mb-5 mb-md-0 justify-content-center align-items-center`}
            >
              <div
                className={`text-center ${styles.cardSplitter} ${styles.home_container}`}
              >
                <img
                  src={casinoImg}
                  style={{ width: "100%", borderRadius: "12px" }}
                  alt="sec1-col1"
                />
                <p className="text-center pt-4 pb-2">
                  Browse our giant range of casino games as Stake offers a fair
                  and fun online gambling experience. Play Slots, Live Casino,
                  Blackjack, Baccarat.
                </p>

                <button className={`btn ${styles.btn}`}>PLAY NOW</button>
              </div>
            </Col>
            <Col
              lg="6"
              className={`d-flex justify-content-md-end justify-content-center align-items-center`}
            >
              <div
                className={`text-center ${styles.cardSplitter} ${styles.home_container}`}
              >
                <img
                  src={esportImg}
                  style={{ width: "100%", borderRadius: "12px" }}
                  alt="sec1-col1"
                />
                <p className="text-center pt-4 pb-2">
                  Browse our giant range of casino games as Stake offers a fair
                  and fun online gambling experience. Play Slots, Live Casino,
                  Blackjack, Baccarat.
                </p>
                <button className={`btn ${styles.btn}`}>PLAY NOW</button>
              </div>
            </Col>
          </Row>

          <Row className="py-5">
            <TableList />
          </Row>
        </Container>

        <Container className={`${styles.home_container} my-5 py-3`}>
          <Row className={styles.home_crypto_row}>
            <div className={styles.home_crypto_wrapper}>
              <h2>No crypto? No Problem.</h2>
            </div>
            <div className={styles.home_crypto_icon}>
              <img src={gpay} alt="" />
              <img src={circle} alt="" />
              <img src={gpay} alt="" />
              <img src={circle} alt="" />
            </div>
          </Row>
        </Container>
        <Container className={`${styles.home_container} my-5 py-3`}>
          <Row className={styles.home_crypto_row}>
            <div className={styles.home_crypto_wrapper}>
              <h2>No crypto? No Problem.</h2>
            </div>
            <div className={styles.home_crypto_icon}>
              <img src={gpay} alt="" />
              <img src={circle} alt="" />
              <img src={gpay} alt="" />
              <img src={circle} alt="" />
            </div>
          </Row>
        </Container>
      </div>

      {loginModal ? (
        <div className={styles.overlay}>
          <Login setLoginModal={setLoginModal} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
