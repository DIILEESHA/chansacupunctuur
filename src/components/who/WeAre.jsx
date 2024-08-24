// import { lazy, useEffect } from "react";
import "./are.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// const ParticleComponent = lazy(() => import("../particle/ParticleComponent"));

// gsap.registerPlugin(ScrollTrigger);

const weAre = () => {
  //   const showParticles = true;

  return (
    <div className="are_container">
      {/* <ParticleComponent isVisible={showParticles} /> */}
      <div className="web">
        <div className="are_grid">
          <div className="are_sub">
            <div className="are_detail">
              <h2 className="detail_title">WHO WE ARE</h2>
              <p className="detail_para">
                When conventional medicine cannot solve health problems or can
                only provide symptom control, acupuncture is a very good
                addition to naturally solve or reduce these problems. Treatment
                by a GP or specialist can also be combined with acupuncture and
                often has a strengthening effect. Conventional medicine and
                acupuncture can complement each other very well.
                <br />
              </p>

              <h3 className="detail_bottom_detail">
                <div className="arrower" />
                Learn more about us
              </h3>
            </div>
          </div>
          <div className="are_sub mer">
            <img
              className="bus mg"
              src="https://media.istockphoto.com/id/1356338837/photo/acupuncture-back-treatment.webp?b=1&s=612x612&w=0&k=20&c=j0sWViycWuUhlPqbzMewhUoI-hFYDsHosYZ4z765I60="
              loading="lazy"
              alt=""
            />
          </div>
          <div className="are_sub mer">
            <img
              className="dus fg"
              src="https://images.unsplash.com/photo-1542848284-8afa78a08ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjdXB1bmN0dXJlfGVufDB8fDB8fHww"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="are_sub">
            <div className="are_detail">
              <h2 className="detail_title">what we do</h2>
              <p className="detail_para">
                Our Functional Fragrance system consists of four unisex roll-ons
                with two blends specifically designed to calm and ground the
                mind and uplift and energize the mood.
                <br />
              </p>
              <h3 className="detail_bottom_detail">
                <div className="arrower" />
                Learn more about our system
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="are_grid">
          <div className="are_sub mer">
            <img
              className="bus mg"
              src="https://images.unsplash.com/photo-1542848284-8afa78a08ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjdXB1bmN0dXJlfGVufDB8fDB8fHww"
              loading="lazy"
              alt=""
            />
          </div>

          <div className="are_sub">
            <div className="are_detail">
              <h2 className="detail_title">WHO WE ARE</h2>
              <p className="detail_para">
                Nullpunkt is a subtle and sophisticated support system to
                achieve a balanced state of mind. We combine the charm of
                exquisite fragrances with the benefits of aromatherapy. Each of
                our four grades comes with a captivating scent to create instant
                moments of clarity.
                <br />
                <br />
                We use only 100% natural, high-quality ingredients, each of
                which has its own history and character and contributes to the
                effectiveness in a unique way.
                <br />
                <br />
                We believe in a more mindful society. We believe that our
                collective well­being is built on the peace of mind of each
                individual. And that great achievements come from the balance of
                body and mind.
              </p>

              <h3 className="detail_bottom_detail">
                <div className="arrower" />
                Learn more about us
              </h3>
            </div>
          </div>
          <div className="are_sub mer">
            <img
              className="dus fg"
              src="https://media.istockphoto.com/id/1356338837/photo/acupuncture-back-treatment.webp?b=1&s=612x612&w=0&k=20&c=j0sWViycWuUhlPqbzMewhUoI-hFYDsHosYZ4z765I60="
              loading="lazy"
              alt=""
            />
          </div>
          <div className="are_sub">
            <div className="are_detail">
              <h2 className="detail_title">what we do</h2>
              <p className="detail_para">
                Our Functional Fragrance system consists of four unisex roll-ons
                with two blends specifically designed to calm and ground the
                mind and uplift and energize the mood.
                <br />
                <br />
                Fragrance follows function: We are a functional tool. Our
                highest priority is the intended positive impact on our
                customers’ mind. Our composed scents help to turn this routine
                into an olfactory sensation.
                <br />
                <br />
                Each fragrance is specifically formulated to balance the most
                common symptoms society experiences: anxiety, stress,
                distraction, and fatigue. All of them are formulated to provide
                you with the feeling of inner balance.
                <br />
                <br />
                With experts in Grasse, the birth place of fragrance sensations,
                an olfactory lab in Berlin and a creative studio in Hamburg, we
                had the perfect soil to bring a new generation of aromachology
                products to life.
              </p>
              <h3 className="detail_bottom_detail">
                <div className="arrower" />
                Learn more about our system
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}></div>
      {/* <div className="second_image">
        <img
          className="triple"
          src="https://media.istockphoto.com/id/1453141064/photo/bowl-with-acupuncture-needles-on-wooden-table.webp?b=1&s=612x612&w=0&k=20&c=TdHAewNuNoC0auPygZzrOV5R20WNUCU0Y7IPYi5L1Zc="
          loading="lazy"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default weAre;
