// ParallaxSection.js

import React from "react";
import Velo from "./Velo";

function ParallaxSection() {
  return (
    <section>
      <Velo style={{ fontSize: "50px" }} baseVelocity={0.5}>
        Acupuncture Therapy ✨Cupping
      </Velo>
      {/* <Velo style={{ fontSize: "50px" }} baseVelocity={2}>
      shop now
      </Velo> */}
    </section>
  );
}

export default ParallaxSection;
