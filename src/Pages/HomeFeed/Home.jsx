import React, { useState } from "react";
import Header from "../../components/other/Header";
import { Col, Container, Row } from "react-bootstrap";
import MiniSidebar from "../../components/other/MiniSidebar";
import Homefeed from "./Homefeed";
import Footer from "../../components/other/Footer";
import style from "./home.module.css";
import Login from "../../components/Modal/Login";

const Home = () => {
  const [isSidebar, setIsideBar] = useState(false);

  const [loginModal, setLoginModal] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header
        setIsideBar={setIsideBar}
        isSidebar={isSidebar}
        setLoginModal={setLoginModal}
      />
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
      {loginModal ? (
        <div className={style.overlay}>
          <Login setLoginModal={setLoginModal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
