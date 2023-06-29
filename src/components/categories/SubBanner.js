import "../categories/subBanner.css";
import design from "../../assets/jpegs/red_img.jpeg";
import womenWear from "../../assets/jpegs/women_office_gown.jpg";
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const SubBanner = () => {
  const el = useRef(null);
  const [img, setImg] = useState(design);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " Participate in the Raffle Draw Today!!",
        "Search for this beautiful gown!",
        " and it's all yours!",
        "Amazing right??!!",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

  const refStyle = {
    color: "gold",
    fontSize: "1.8rem",
    fontWeight: "bold",
    letterSpacing: ".3rem",
    height: "4rem",
  };

  const style = {
    // background: `url(${img})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // objectFit: "contain",
    background:"var(--black-color)",
    // filter: "brightness(70%)",
    borderRadius: ".4rem",
  };
  return (
    <div>
      <div className="banner" style={style}>
        <span style={refStyle} ref={el}></span>
        <div className="banner__div">
          <div className="banner__box">
            <img src={womenWear} alt="" />
            <p>Women Office Gown</p>
            <p>
              <input type="button" value="Start Search" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
