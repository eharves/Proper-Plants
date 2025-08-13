const PlantItem = ({ plant, addToCart }) => {
  return (
    <div className="plant-card">
      <span className="emoji">{plant.image}</span>
      <strong className="name">{plant.name}</strong>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </div>
  );
};

export default PlantItem;
