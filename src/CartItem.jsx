const CartItem = ({ item, updateQuantity }) => {
  return (
    <div className="cart-item">
      <span className="emoji">{item.image}</span>
      <span className="name">{item.name}</span>
      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
      <span className="quantity">{item.quantity}</span>
      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
    </div>
  );
}


export default CartItem;
