import "./Home.css";
import Header from "../../components/Home/Header/Header";
import React from "react";
import Form from "../../components/Home/Body/Form";

function Home() {
  return (
    <div className="home">
      <div className="header_container">
        <Header />
      </div>
      <div className="navbar_container"></div>
      <div className="body_container">
        <Form />
      </div>
      <div className="footer_container">{/* <Footer /> */}</div>
    </div>
  );
}

export default Home;
