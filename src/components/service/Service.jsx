import { Link } from "react-router-dom";
import "./service.css";
import { MdArrowOutward } from "react-icons/md";

const Service = () => {
  return (
    <div className="service_container">
      <h2 className="service_title">Our Services/Treatments</h2>
      <div className="lino"></div>
      <div className="service_grid">
        <div className="service_sub">
          <img
            src="https://static.wixstatic.com/media/11062b_48c6aac702794ead9b3ef0710309d1bf~mv2.jpg/v1/crop/x_1494,y_0,w_3731,h_4480/fill/w_215,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Neck%20Therapy.jpg"
            className="service_img"
            alt=""
          />
          <a className="yu" href="http://localhost:5173/Acupunctuur">
            <h2 className="service_sub_title">
              Acupuncture Therapy <MdArrowOutward className="ico" />
            </h2>
          </a>
        </div>
        <div className="service_sub">
          <img
            src="https://static.wixstatic.com/media/515b09_753af3ab42ae45f3b6556da5273aa704~mv2.png/v1/crop/x_0,y_16,w_394,h_473/fill/w_215,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cupping.png"
            className="service_img"
            alt=""
          />
            <h2 className="service_sub_title">
          <Link className="yu" to="/cupping">
              Hijama/Cupping Therapy
              <MdArrowOutward className="ico" />
          </Link>
            </h2>
        </div>
        <div className="service_sub">
          <img
            src="https://static.wixstatic.com/media/8ea70678ba8d4725b3ae79d832a5e7cd.jpg/v1/crop/x_1334,y_0,w_3331,h_4000/fill/w_215,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Healthy%20Food.jpg"
            className="service_img"
            alt=""
          />
          <Link className="yu" to="/afvallen">
            <h2 className="service_sub_title">
              Nutritionist
              <MdArrowOutward className="ico" />
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
