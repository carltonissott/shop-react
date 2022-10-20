
import Shop from "../components/ShopPage/Shop";
import ImageSlide from "../components/UX/ImageSlide";

const HomePage = () => {
  return (
    <>
      <ImageSlide />
      <div className="blackthumb-div">
        <div className="blackthumb-heading">
          <h3>black thumb? no problem.</h3>
          <h4> Shop low-effort plants delivered to your door.</h4>
        </div>
        <Shop/>
      </div>
    </>
  );
};

export default HomePage;
