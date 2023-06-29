import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { AiOutlineDown } from "react-icons/ai";
import "../nav/Nav.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const [display, setDisplay] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [show, handleShow] = useState(false);
  // const [closeShow, setCloseShow] = useState(false);
  const [color, setColor] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  const classes = display ? "category__show" : "category__hide";
  const checkToggle = "category__span";
  const showDisplay = () => {
    setDisplay(true);
    if (showClose) {
      checkToggle = "category__close__show";
    }
  };
  const hideDisplay = () => {
    setDisplay(false);
  };
  const changeColor = () => {
    // if (color) {
    //   setColor(true)
    // } else if (!color) {
    //   setColor(false)
    // }
    setColor(true);
  };

  return (
    <nav>
      <div className={`header__nav ${show && "header__navs"}`}>
        <div className="header__head">
          <h1>
            E-<span className="head__span__one">Comm</span>
            <span className="head__span__two">erce</span>
          </h1>
          {/* Would be changed when the real name comes */}
        </div>
        <div className="header__list">
          <ul>
            <li>
              Categories{" "}
              <span onClick={showDisplay}>
                {/* <AiOutlineDown className= {checkToggle}/> */}
                {/* Would try to fix this later. It's been giving me issues */}
              </span>
              <span className="category__close" onMouseDown={hideDisplay}>
                &times;
              </span>
            </li>
            <select className={classes}>
              <option value="none"></option>
              <option value="Female Wear">Female Wear</option>
              <option value="Female Wear">Male Wear</option>
              <option value="Female Wear">Footwares</option>
              <option value="Female Wear">Others</option>
            </select>
            <li>Shop</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="header__icons">
          <ul>
            <li>
              <CgProfile />
            </li>
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <AiOutlineHeart />
            </li>
            <li>
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </div>
      </div> 
    </nav>
  );
};

export default Nav;
