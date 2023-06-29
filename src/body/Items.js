import "./item.css";
import cloth from "../assets/jpegs/cloth.jpg";
import clothOne from "../assets/jpegs/cloth-one.jpg";
import officeShoe from "../assets/jpegs/office-shoe.jpeg";
import officeShoes from "../assets/jpegs/office-shoe-women.jpeg";
import babyTop from "../assets/jpegs/baby-top.jpg";
import fashionSandal from "../assets/jpegs/fashion__sandals.jpg";
import femaleBoot from "../assets/jpegs/female_boots.jpg";
import stileto from "../assets/jpegs/High-stiletto-heels.jpg";
import hoodie from "../assets/jpegs/hoodie_black.jpg";
import sneakers from "../assets/jpegs/sneakers.jpg";
import ladiesShow from "../assets/jpegs/Ladies-show_gown.jpg";
import shorts from "../assets/jpegs/urban_shorts.jpg";
import womenOfficeWear from "../assets/jpegs/women_office_gown.jpg";
import officeShoeWomen from "../assets/jpegs/office-shoe-women.jpeg";
import Product from "../components/products/Product";
import Lists from "../components/categories/Lists";
import SubBanner from "../components/categories/SubBanner";
import BannerComponent from "../components/categories/BannerComponent";

const Items = () => {
  return (
    <div className="item__div">
      <div className="div__item">
        <div className="items__box">
          <div className="item">
            <Product
              image={cloth}
              title="Male top and shorts"
              price={5000}
              rating={4}
            />
          </div>
          <div className="item">
            <Product
              image={clothOne}
              title="Party starter gown"
              price={8000}
              rating={3}
            />
          </div>
          <div className="item">
            <Product
              image={officeShoe}
              title="Office shoe for men"
              price={12000}
              rating={5}
            />
          </div>
          <div className="item">
            <Product
              image={officeShoes}
              title="Women Office shoes"
              price={6500}
              rating={3}
            />
          </div>
          <div className="item">
            <Product
              image={sneakers}
              title="Breathable Sneakers"
              price={9000}
              rating={4}
            />
          </div>
        </div>
      </div>
      <div className="item__grid">
        <Lists />
        <SubBanner />
        <BannerComponent />
      </div>
      <div className="items__box">
        <div className="item">
          <Product
            image={babyTop}
            title="Baby wear pink"
            price={3000}
            rating={4}
          />
        </div>
        <div className="item">
          <Product
            image={fashionSandal}
            title="Fashionable Sandals"
            price={5000}
            rating={3}
          />
        </div>
        <div className="item">
          <Product
            image={stileto}
            title="Women Stiletos"
            price={11000}
            rating={4}
          />
        </div>
        <div className="item">
          <Product
            image={shorts}
            title="Blue Casual shorts"
            price={4000}
            rating={4}
          />
        </div>
        <div className="item">
          <Product
            image={hoodie}
            title="Black Hoodie"
            price={7500}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Items;
