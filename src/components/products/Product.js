import { useState } from "react";
import "../products/newProduct.css";
import { AiFillHeart } from "react-icons/ai";

const Product = ({ title, price, rating, image }) => {
  const [colorChange, setColorChange] = useState(false);
  const likeProduct = () => {
    setColorChange(true);
  };
  return (
    <div className="product">
      <div className="product__info">
        <img src={image} alt="" />
        <div className="product__details">
          <div className="product__item__details">
            <p className="product__title">{title}</p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_) => {
                  return <p>&#9733;</p>;
                })}
            </div>
            <p className="product__price">
              <strong>₦{price}</strong>
            </p>
          </div>
          <AiFillHeart
            onClick={likeProduct} style={{fontSize:"1.3rem"}}
            className={`hearts ${colorChange && "heart"}`}
          />
        </div>
      </div>
      {/* <button onClick={addToBasket}>Add to Basket</button> */}
    </div>
  );
};

export default Product;
