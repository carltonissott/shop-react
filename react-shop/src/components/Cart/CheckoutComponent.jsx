import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CheckoutComponent = (props) => {


  const dispatch = useDispatch();
  const onIncreaseHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.price,
        price: props.price,
      })
    );
  };
  const onDecreaseHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  return (
    <div className="cart-item-div">
      <img class="cart-item-img" alt={props.id} src={props.img} />
      <h4>{props.id}</h4>
      <h3>Price: ${props.price}.00</h3>
      <div className="cart-item-buttons">
        <button onClick={onDecreaseHandler}>-</button>
        <h3>{props.quantity}</h3>
        <button onClick={onIncreaseHandler}>+</button>
      </div>
      <h3>Subtotal: ${props.totalPrice}.00</h3>
    </div>
  );
};

export default CheckoutComponent;
