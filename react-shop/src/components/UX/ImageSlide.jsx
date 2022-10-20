import { Link } from "react-router-dom";

const ImageSlide = () => {
  return (
    <div className="imageslider">
      <div className="imageslider-h3">
        <h3>
          <span className="thin">happiness,</span>{'\n'}
          <b>delivered.</b>
        </h3>
                 <Link to="/shop-react"><button className="button">Shop now</button> </Link> 
      </div>
      <img
        className="imageslider-img"
        alt="backgroundimage"
        src="https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?cs=srgb&dl=pexels-ylanite-koppens-1445416.jpg&fm=jpg&_gl=1*19i3rzr*_ga*MTIwNjAyOTA0LjE2NjI1ODEzNjg.*_ga_8JE65Q40S6*MTY2NjEzOTAxOC4xMC4xLjE2NjYxMzkwMjUuMC4wLjA."
      />
    </div>
  );
};

export default ImageSlide;
