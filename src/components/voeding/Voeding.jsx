import { MdArrowOutward } from "react-icons/md";
import "./void.css";

const Voeding = () => {
  return (
    <div className="about_container">
      <div className="about_grid">
        <div className="about_sub">
          <img
            src="https://static.wixstatic.com/media/48198c_868556080cca42328c70e89b65d83108~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,enc_auto/48198c_868556080cca42328c70e89b65d83108~mv2.jpg"
            alt=""
          />
        </div>
        <div className="about_sub">
          <h2 className="img_title">Why nutritional advice?</h2>
          <div className="lino"></div>
          <p className="img_parar">
            As genetically modified foods increasingly attack our health, the
            desire for natural foods grows stronger and the return of often
            age-old eating habits seems unstoppable.
            <br></br>
            <br></br> It is therefore not surprising that traditional Chinese
            nutrition is on the rise. This nutrition is so effective that it
            automatically breaks through when the shortcomings of all kinds of
            slimming diets and nutritional value calculations come to light. In
            practice, it turns out that the energetic component is central to a
            healthy diet and that this is most present and works best when the
            right balance between Yin and Yang is maintained.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
              margin: "20px 0",
            }}
          >
            <a className="yu" href="http://localhost:5173/afvallen">
              <button className="header_btnser">
                Help with Lossing Weight <MdArrowOutward className="icos" />
              </button>
            </a>
          </div>
        </div>
        <div className="about_sub">
          <h2 className="img_title">Why should you consult a nutritionist?</h2>
          <div className="lino"></div>

          <p className="img_parar">
            A body can become unbalanced and feel uncomfortable due to various
            causes. This can manifest itself in reduced resistance, fatigue,
            concentration problems and even certain diseases. A nutritionist can
            support the optimal functioning and/or performance of your body.
          </p>
          <ul className="mihor_ul" style={{color:"#333",opacity:"70%"}}>
                  <li className="mihor_li">general improvement of your health</li>
                  <li className="mihor_li">nutritional guidance for physical training</li>
                  <li className="mihor_li">weight management</li>
                  <li className="mihor_li">digestive problems</li>
                  <li className="mihor_li">stress relief</li>
                  <li className="mihor_li">immune system (immune system)</li>
                  <li className="mihor_li">fatigue complaints</li>
                  <li className="mihor_li">skin problems</li>
                </ul>
        </div>
        <div className="about_sub">
          <img
            src="https://plus.unsplash.com/premium_photo-1661398623177-ea6422c98b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdoeSUyMHNob3VsZCUyMHlvdSUyMGNvbnN1bHQlMjBhJTIwbnV0cml0aW9uaXN0JTNGfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Voeding;
