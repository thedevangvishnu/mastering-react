import { foods } from "./foods";
import ListItem from "./list-item";

const List = () => {
  return (
    <div>
      <h2>Our menu</h2>
      <div className="list__container">
        {foods.map((foodItem) => (
          <ListItem key={foodItem.id} item={foodItem} />
        ))}
      </div>
    </div>
  );
};

export default List;
