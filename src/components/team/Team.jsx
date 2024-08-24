import React, { useState } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import "./team.css";
import { FaFacebook } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { GrBlog } from "react-icons/gr";

const Team = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="team_container">
      <div className="top_team dega">
        <div className="top_sub_team mo">
          <h2 className="team_leader">Fon Chan</h2>
          <h2 className="team_job">Fon Chan Acupuncturist & Nutritionist</h2>
          <p className="team_paraa">
            {isExpanded
              ? `My name is Fon Chan and I have been passionate about sports since I was young. I followed CIOS (sports education) as a preliminary education. I also gained a lot of experience as a fitness instructor. As a new challenge, I immersed myself in Chinese Medicine. For that I followed the Integrative Medicine course and gained experience in Beijing, among other places in various hospitals. Since I have a great affinity with sports, I have decided to specialize in sports injuries. Nutrition forms an important basis for good health and I have trained as a nutritionist. My motto is: "In healthcare you never stop learning. Time and attention for your health is my priority." Your privacy is very important to us. Your personal and medical data will be handled with care. No information will be provided to third parties without your (written) permission. You have the right to inspect your file at all times. Chan's Acupuncture is affiliated with the Professional Association for Traditional Chinese Medicine Zhong, umbrella organization KAB and knowledge center for complaints and disputes in complementary care SCAG`
              : `My name is Fon Chan and I have been passionate about sports since I was young. I followed CIOS (sports education) as a preliminary education. I also gained a lot of experience as a fitness instructor. As a new challenge, I immersed myself in Chinese Medicine...`}
          </p>
          <button onClick={toggleReadMore} className="readmore_btn">
            {isExpanded ? "Read Less" : "Read More"}
          </button>
          <div className="soca">
            <BsInstagram className="lpo" />
            <FaFacebook className="lpo" />
            <BsLinkedin className="lpo" />
          </div>
          <div className="three_images">
            <img
              src="https://static.wixstatic.com/media/3945db_b4c124f106df4983af0c935f6f7f2d82~mv2.jpg/v1/fill/w_294,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3945db_b4c124f106df4983af0c935f6f7f2d82~mv2.jpg"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/3945db_64406c279a514ce689c32c593bdc5f60~mv2.png/v1/fill/w_265,h_194,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3945db_64406c279a514ce689c32c593bdc5f60~mv2.png"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/3945db_53bbbac442ee42b3a7192d68be40dc4f~mv2.webp/v1/fill/w_374,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3945db_53bbbac442ee42b3a7192d68be40dc4f~mv2.webp"
              alt=""
            />
          </div>
        </div>
        <div className="top_sub_team">
          <img
            className="chan"
            src="https://static.wixstatic.com/media/515b09_6e507e26bd194bdbbe51985c05130b5d~mv2.jpg/v1/fill/w_490,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/515b09_6e507e26bd194bdbbe51985c05130b5d~mv2.jpg"
            alt="Fon Chan"
          />
        </div>
      </div>

      <div className="education">
        <h2 className="service_title">Education & Courses</h2>
        <div className="lino"></div>
      </div>
      <div className="dev">
        <div className="education_container">
          <div className="linoman">
            <div className="linoone">
              <div className="linoimg"></div>
            </div>
            <h2 className="degree">CIVAS</h2>
            <h2 className="campus">Nutritionist</h2>
          </div>

          <div className="linoman">
            <div className="linoone">
              {/* <div className="kp"></div> */}
              <div className="linoimg" />
            </div>

            <h2 className="degree">Hwa To University of TCM</h2>
            <h2 className="campus">Bachelor</h2>
            <p className="short_des">Acupuncture & Oriental Medicine</p>
          </div>

          <div className="linoman">
            <div className="linoone">
              <div className="linoimg"></div>
            </div>
            <h2 className="degree">Red Cross</h2>
            <h2 className="campus">FIRST AID</h2>
          </div>

          <div className="linoman">
            <div className="linoone">
              {/* <div className="kp"></div> */}
              <div className="linoimg" />
            </div>

            <h2 className="degree">Beijing University of Chinese Medicine</h2>
          </div>

          <div className="linoman">
            <div className="linoone">
              <div className="linoimg"></div>
            </div>
            <h2 className="degree">Acupuncture for Endometriosis and PCOS</h2>
            <p className="short_des" style={{ lineHeight: "1.9" }}>
              ⚬Acupuncture during pregnancy <br></br>⚬Dermatology <br></br>⚬The
              Intestine<br></br>⚬ Pediatric acupuncture <br></br>⚬Acupuncture
              for eye and ear disorders <br></br>⚬Medical acupuncture and the
              oncology patient <br></br>⚬Insomnia
              <br></br>⚬Treatment of fluid problems in TCM <br></br>⚬Hormone
              consultant <br></br>⚬Seminar EATMS
            </p>
          </div>
        </div>
      </div>

      <div className="education">
        <h2 className="service_title">Meet the faces in practice.</h2>
        <div className="lino"></div>
        <div className="service_grid">
          <div className="service_sub">
            <img
              //   className="muhad"
              src="https://static.wixstatic.com/media/515b09_c74b04a8659d4afeae94b9bc7ff31db0~mv2.jpg/v1/crop/x_0,y_105,w_800,h_589/fill/w_323,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Luigi%20Sukul.jpg"
              className="service_img muhad"
              alt=""
            />
            <h3 className="dolki">Luigi Sukul</h3>
            <h2 className="service_sub_title">
              Physiotherapist/manual therapist{" "}
              {/* <MdArrowOutward className="ico" /> */}
            </h2>
            <div
              className="soca"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                className="yu"
                href="https://www.facebook.com/FysioSukul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="lpo" />
              </a>
              <a
                className="yu"
                href="https://www.linkedin.com/in/luigi-sukul-4b759756/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="lpo" />
              </a>
              <a
                className="yu"
                href="https://fysiotherapie-sukul.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrBlog className="lpo" />
              </a>
            </div>
          </div>{" "}
          <div className="service_sub">
            <img
              src="https://static.wixstatic.com/media/515b09_8f478c91209f435186d090f457770734~mv2.jpg/v1/crop/x_0,y_123,w_929,h_685/fill/w_323,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jamy%20Moussavi.jpg"
              className="service_img muhad"
              alt=""
            />
            <h3 className="dolki">Jamy Moussavi</h3>
            <h2 className="service_sub_title">
              GP
              {/* <MdArrowOutward className="ico" /> */}
            </h2>
            <div
              className="soca"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                className="yu"
                href="https://www.instagram.com/nieuwedokter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="lpo" />
              </a>
              <a
                href="https://www.facebook.com/nieuwedokter"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="lpo" />
              </a>
              <a
                href="https://www.linkedin.com/in/jamy-moussavi-77031647/"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="lpo" />
              </a>
              <a
                href="https://nieuwedokter.nl/praktijk"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrBlog className="lpo" />
              </a>
            </div>
          </div>{" "}
          <div className="service_sub">
            <img
              src="https://static.wixstatic.com/media/515b09_41305ce77ed34941b0386efd386bd081~mv2.jpg/v1/crop/x_0,y_59,w_452,h_333/fill/w_323,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jojanneke%20Kant.jpg"
              className="service_img muhad"
              alt=""
            />
            <h3 className="dolki">Jojanneke Kant</h3>
            <h2 className="service_sub_title">
              GP
              {/* <MdArrowOutward className="ico" /> */}
            </h2>
            <div
              className="soca"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.instagram.com/devragendokter/"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="lpo" />
              </a>
              <a
                href="https://www.facebook.com/nieuwedokter"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="lpo" />
              </a>
              <a
                href="https://www.linkedin.com/in/jojanneke-kant-8b863a50/"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="lpo" />
              </a>
            </div>
          </div>
          <div className="service_sub">
            <img
              src="https://static.wixstatic.com/media/515b09_69fb02e0c6be4c38a6b0e02e83520c09~mv2.jpg/v1/crop/x_0,y_30,w_227,h_167/fill/w_317,h_234,al_c,lg_1,q_80,enc_auto/Kristel%20van%20den%20Bosch.jpg"
              className="service_img muhad"
              alt=""
            />
            <h3 className="dolki">Kristel van den Bosch</h3>
            <h2 className="service_sub_title">
              Physiotherapist/manual therapist
              {/* <MdArrowOutward className="ico" /> */}
            </h2>
            <div
              className="soca"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100063554231179"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="lpo" />
              </a>
              <a
                href="https://www.linkedin.com/in/kristel-van-den-bosch-b946ab54/"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="lpo" />
              </a>
              <a
                href="https://kristelvandenbosch.com/"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrBlog className="lpo" />
              </a>
            </div>
          </div>
          <div className="service_sub">
            <img
              src="https://static.wixstatic.com/media/515b09_e79380442ee8436297e03ba9519933f3~mv2.jpg/v1/crop/x_0,y_56,w_428,h_315/fill/w_323,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ramona%20Jafari.jpg"
              className="service_img muhad"
              alt=""
            />
            <h3 className="dolki">Ramona Jafari</h3>
            <h2 className="service_sub_title">
              Midwife
              {/* <MdArrowOutward className="ico" /> */}
            </h2>
            <div
              className="soca"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.instagram.com/luxverloskundige/"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="lpo" />
              </a>
              <a
                href="https://www.luxverloskundige.nl/"
                className="yu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrBlog className="lpo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
