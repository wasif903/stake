import { Col, Container, Row } from "react-bootstrap";
import sec1 from "../assets/home/sec1.jpg";
import styles from "./home.module.css";

function Home() {
  // const icons = [
  //     {

  //     }
  // ]

  return (
    <>
      <Container>
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
                being a trusted affiliate program, welcoming newcomers with open
                arms to embark on an exhilarating gaming journey.
              </p>
              <div className="text-center text-white">Start With :</div>
            </div>
          </Col>
          <Col lg="6">
            <div className="text-center">
              <img src={sec1} alt="img" className={styles.section} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
