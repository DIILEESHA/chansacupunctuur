import { MdArrowOutward } from "react-icons/md";

const Voeding = () => {
  return (
    <div className="about_container">
      <div className="about_grid">
        <div className="about_sub">
          <h2 className="img_title">Cupping</h2>
          <div className="lino"></div>

          <p className="img_parar">
            Cupping therapy is used for various purposes. The cups are used to
            release trigger points in the connective tissue. When trigger points
            are located at a specific point, a cup is attached to it. However,
            when the blood supply needs to be improved to a specific spot, such
            as joints, the cups are moved back and forth over the entire area.
            The depth effect of the cups has an effective effect on trigger
            points and stuck joints.
            <br></br>
            <br></br>​ The vacuum created causes the skin to be partially sucked
            into the cup, which draws blood to the treated area. The result is
            improved blood circulation and the body gets rid of waste products
            more quickly through the pores. ​ A cupping treatment feels like a
            firm massage, it provides relaxation and brings the body back into
            balance. Regular cupping ensures a supple and healthy fascial
            network. During the treatment, local red spots may appear, this is
            normal and these spots disappear after a few days. The first time it
            may feel a bit sensitive because the tissue is tight and tense.
            <br></br>
            <br></br>
            The benefits of cupping:
          </p>
          <ul className="mihor_ul" style={{ color: "#333", opacity: "70%" }}>
            <li className="mihor_li">Reduces stress and promotes relaxation</li>
            <li className="mihor_li">Stimulates collagen production</li>
            <li className="mihor_li">
              Faster muscle recovery by promoting blood circulation
            </li>
            <li className="mihor_li">Increased lymphatic drainage</li>
            <li className="mihor_li">Promotes detoxification</li>
            <li className="mihor_li">It relieves digestive problems</li>
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
