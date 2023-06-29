import airtel from "../../assets/jpegs/airtel5g.jpg"
import '../ads/ads.css'
const Ads = () => {
  return (
    <span>
      <span className="adverts">
        <img src={airtel} alt="" className="ads"/>
      </span>
    </span>
  );
};

export default Ads;
