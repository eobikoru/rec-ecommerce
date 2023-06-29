import foot from "../assets/jpegs/footwares.jpg";

const BannerDesign = () => {
  return (
    <div>
      <img
        src={`${foot}`}
        style={{ width: "100%", height: "500px", objectFit: "cover", margin:"4.5rem 0 0", }}
        alt=""
      />
    </div>
  );
};

export default BannerDesign;
