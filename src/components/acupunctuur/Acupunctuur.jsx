import { MdArrowOutward } from "react-icons/md";
import Faq from "../faq/Faq";

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
          <h2 className="img_title">
            Acupuncture, what exactly does it entail?
          </h2>
          <div className="lino"></div>
          <p className="img_parar">
            Acupuncture is part of Traditional Chinese Medicine (TCM) and has
            been used for thousands of years. TCM is based on a holistic
            concept, the idea that everything in and around us is connected to
            each other and constantly strives for balance. This balance is
            dynamic. However, the balance can be disturbed by external
            influences (wind, cold, heat, moisture, bacteria, viruses) or by
            trauma, stress, overload or emotional tension. When the balance is
            disturbed for a long time or when someone is unable to restore the
            balance, the energy flows to the different parts of the body can
            decrease or become blocked, which can cause physical and
            psychological complaints. Acupuncture has a positive effect on these
            energy flows (meridians). By pricking certain points on these
            meridians, the body is stimulated to activate its self-healing
            capacity. Activation of the self-healing capacity ensures both a
            better energy balance and a stronger immune system of the body, as
            well as a better psychological balance and more stable emotions,
            assuming that body and mind are always closely connected. A view
            that is fortunately also increasingly being looked at here in the
            West.
          </p>
        </div>
      </div>
      <div style={{ background: "#f0f0f0", margin: "0px 0px 50px 0px" }}>
        <Faq />
      </div>
    </div>
  );
};

export default Voeding;
