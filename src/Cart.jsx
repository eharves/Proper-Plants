import CartItem from "./CartItem";

const Cart = ({ cart, updateQuantity }) => {
  return (
    <div className="cart-section">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
          />
        ))
      )}
    </div>
  );
};

export default Cart;
