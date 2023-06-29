import { HiEnvelope } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import "../footer/footer.css";

const Foot = () => {
  return (
    <div className="foot__icons">
      <div className="icon">
        <HiEnvelope style={{ fontSize: "2rem" }} />
        <div className="icons__div">
          <h4>Email us</h4>
          <p>help@ecommerce.com</p>
        </div>
      </div>
      <div className="icon">
        <BsFillTelephoneFill style={{ fontSize: "2rem" }} />
        <div className="icons__div">
          <h4>Phone No:</h4>
          <p>+234123456789</p>
        </div>
      </div>
      <div className="icon">
        <BsWhatsapp style={{ fontSize: "2rem" }} />
        <div className="icons__div">
          <h4>WhatsApp</h4>
          <p>+234123456789</p>
        </div>
      </div>
    </div>
  );
};

export default Foot;
