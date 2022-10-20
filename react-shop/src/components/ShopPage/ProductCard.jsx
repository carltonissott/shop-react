import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const ProductCard = (props) => {

  const dispatch = useDispatch();
  const [isAdded, setIsAdded ] = useState(false)

    useEffect(()=>{
        const time= setTimeout(()=>{
            setIsAdded(false)
        }, 1000)
        return ()=>clearTimeout(time)
    },[isAdded])

  const addToCartHandler = () => {
    setIsAdded(true)
    dispatch(
      cartActions.addItemToCart({
        id: props.title,
        price: props.price,
        title: props.title,
        img : props.img
      }) 
    );
  };

  return (
    <div className="product-card">
      <h5>{props.title}</h5>
      <img alt={props.title} src={props.img} />
      <p>{"$" + props.price + ".00"}</p>
      <button onClick={addToCartHandler}>
        {isAdded && `added ✓`}
        {!isAdded && `Add to cart`}
      </button>
    </div>
  );
};

export default ProductCard;
