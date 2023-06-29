import "../categories/lists.css";
import { GiClothes } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { GiRunningShoe } from "react-icons/gi";
import { FaSocks } from "react-icons/fa";
import { PiSunglassesBold } from "react-icons/pi";
import { GiDoorRingHandle } from "react-icons/gi";
import { GiUnderwearShorts } from "react-icons/gi";
import { PiSneakerFill } from "react-icons/pi";

const Lists = () => {
  return (
    <div className="div__list">
      <div className="list">
        <ul>
          <li>
            <GiClothes />
            <span>Clothes</span>
          </li>
          <li>
            <BsWatch />
            <span>Watch</span>
          </li>
          <li>
            <GiRunningShoe />
            <span>Shoes</span>
          </li>
          <li>
            <FaSocks />
            <span>Socks</span>
          </li>
          <li>
            <PiSunglassesBold />
            <span>Sunglasses</span>
          </li>
          <li>
            <GiDoorRingHandle />
            <span>Rings</span>
          </li>
          <li>
            <GiUnderwearShorts />
            <span>Shorts</span>
          </li>
          <li>
            <PiSneakerFill />
            <span>Sneakers</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lists;
