import React, { useState } from "react";
import Header from "../../components/other/Header";
import { Col, Container, Row } from "react-bootstrap";
import MiniSidebar from "../../components/other/MiniSidebar";
import Homefeed from "./Homefeed";
import Footer from "../../components/other/Footer";
import style from "./home.module.css";

const Home = () => {
  const [isSidebar, setIsideBar] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header setIsideBar={setIsideBar} isSidebar={isSidebar} />
      <Container fluid>
        <Row>
          <Col lg="1" style={{ padding: "0" }}>
            <MiniSidebar isSidebar={isSidebar} />
          </Col>
          <Col
            lg="11"
            style={{
              height: "100vh",
              overflowY: "scroll",
              paddingBottom: "4rem",
            }}
            className={style.homefeed_col}
          >
            <Homefeed />
            {/* <Footer /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
