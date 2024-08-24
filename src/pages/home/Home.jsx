// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../../components/header/Header";
import WeAre from "../../components/who/WeAre";
import Service from "../../components/service/Service.jsx";
import Faq from "../../components/faq/Faq";
import Testo from "../../components/testomonials/Testo";
import Parallaxd from '../../components/paralax/Parallaxd'

const Home = () => {
  return (
    <div style={{ overflow: "" }}>
      <Header />
      <Service />
      {/* <WeAre /> */}
      <Testo />
      <Parallaxd/>
      <div style={{ background: "#f0f0f0", margin: "0px 0px 50px 0px" }}>
        <Faq />
      </div>
    </div>
  );
};

export default Home;
