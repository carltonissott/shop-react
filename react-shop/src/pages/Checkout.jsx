import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutComponent from "../components/Cart/CheckoutComponent";

const Checkout = (props) => {
  const cart = useSelector((state) => state.cart);

  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (cart.items.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [cart]);

  return (
    <div className="background">
      {isEmpty ? (
        <h3>Your Cart is Empty!</h3>
      ) : (
        <div className="background">
          <h3>Your Cart:</h3>
          {cart.items.map((element) => (
            <CheckoutComponent
              id={element.id}
              title={element.title}
              quantity={element.quantity}
              totalPrice={element.totalPrice}
              price={element.price}
              img={element.img}
            />
          ))}
          <h4>{"Total Price: $" + cart.finalPrice + ".00"}</h4>
          <button id="checkoutbutton">Proceed To Checkout</button>
        </div>
      )}
    </div>
  );
};
export default Checkout;
