import ProductCard from "./ProductCard";
import { products } from "../products";
const Shop = (props) => {
  // Dynamically load number of cards
  // accepts number of cards to load
  // accept a number of items to add to cart


  return (
    <div className="shop-main">
      {products.map((element) => (
        <ProductCard
          title={element.name}
          price={element.price}
          img={element.img}
          key={element.key}
        />
      ))}
    </div>
  );
};

export default Shop;
