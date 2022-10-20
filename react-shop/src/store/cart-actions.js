// a list of actions which can be used to manipulate store

import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const dbResponse = await fetch(
        "https://reactshop-61616-default-rtdb.firebaseio.com/cart.json"
      );

      if (!dbResponse.ok) {
        throw new Error("no data fetchable");
      }
      const data = await dbResponse.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replacecart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      console.error();
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const dbResponse = await fetch(
        "https://reactshop-61616-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!dbResponse.ok) {
        throw new Error("data send failed");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      sendCartData().catch((error) => {
        console.error();
      });
    }
  };
};
