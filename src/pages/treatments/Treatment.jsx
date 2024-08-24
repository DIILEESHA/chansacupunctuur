import React from "react";
import Service from "../../components/service/Service";
import Faq from "../../components/faq/Faq";

const Treatment = () => {
  return (
    <div>
      <div style={{ margin: "0px 0px 70px 0" }}>
        <Service />
      </div>
      <div style={{background:"#f0f0f0",margin:"0px 0px 50px 0px"}}>

        <Faq />
      </div>
    </div>
  );
};

export default Treatment;
