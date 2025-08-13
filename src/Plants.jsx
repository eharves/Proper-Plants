import PlantItem from "./PlantItem";

const Plants = ({ plants, addToCart }) => {
  return (
    <div className="plants-section">
      <h2>Plants</h2>
      <div className="plants-grid">
        {plants.map((plant) => (
          <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
