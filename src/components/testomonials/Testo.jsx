import Marquee from "react-fast-marquee";
import "./testo.css";
import { PiQuotesBold } from "react-icons/pi";

const Testo = () => {
  return (
    <div className="testo_container">
      <div className="transformer">
        <Marquee
          gradient={true}
          gradientWidth={200}
          gradientColor="#fff"
          speed={20} // Adjust speed as needed
          direction="right" // Direction of the marquee
          loop={0} // 0 for infinite looping
          autoFill={true}
          pauseOnHover={true}
        >
          <div className="halo">
            <div className="testo_card">
              <PiQuotesBold />
              <p className="testo_para">
                De afgelopen 14 dagen heb ik heerlijk gegeten en heb ik geen
                honger gehad of lekkere trek. ​ In de eerste 14 dagen ben ik nu
                al 5 kilo afgevallen!
              </p>
              <h2>P. de Koster</h2>
            </div>{" "}
            <div className="testo_card">
<PiQuotesBold/>

              <p className="testo_para">
                Ben een aantal keren geweest wegens voornamelijk schouder en
                heup klachten. Met iedere behandeling werden de klachten minder.
                Uiteindelijk weer pijnvrij.
              </p>
              <h2>O. Kuhn</h2>
            </div>{" "}
            <div className="testo_card">
              <PiQuotesBold />

              <p className="testo_para">"Geweldig!"</p>
              <h2>S. Ervina</h2>
            </div>
            <div className="testo_card">
              <PiQuotesBold />

              <p className="testo_para">
                "Erg vriendelijk en zeer betrokken bij zijn patiënten. Pijnloze
                behandeling en ik merk ook al vrij snel verbetering."
              </p>
              <h2>N. Tataruglu</h2>
            </div>{" "}
            <div className="testo_card">
              <PiQuotesBold />

              <p className="testo_para">
                "Het bezoek aan Fon was mijn eerste ervaring met acupunctuur.
                Zelfs mijn fysio merkt verschil in mijn spieren na een cupping
                behandeling die ik bij Fon heb ondergaan. Als je twijfelt....
                gewoon doen en laat je verrassen"
              </p>
              <h2>L. Romer</h2>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testo;
