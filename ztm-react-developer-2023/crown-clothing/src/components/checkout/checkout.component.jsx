import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, totalPrice } =
    useContext(CartContext);

  return (
    <div>
      <h1>I am the Checkout Page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <p>{quantity}</p>
              <p onClick={() => removeItemFromCart(cartItem)}>decrement</p>
              <p onClick={() => addItemToCart(cartItem)}>increment</p>
            </div>
          );
        })}
      </div>
      <h2>{`Total price is: $${totalPrice}`}</h2>
    </div>
  );
};

export default Checkout;
