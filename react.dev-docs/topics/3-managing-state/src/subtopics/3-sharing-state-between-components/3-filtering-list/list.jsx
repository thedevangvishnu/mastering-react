import { foods } from "./foods";
import ListItem from "./list-item";

const List = () => {
  return (
    <div className="list__container">
      {foods.map((foodItem) => (
        <ListItem key={foodItem.id} item={foodItem} />
      ))}
    </div>
  );
};

export default List;
