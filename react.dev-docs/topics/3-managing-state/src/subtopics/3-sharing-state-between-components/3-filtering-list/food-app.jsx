import List from "./list";
import Search from "./search";

const FoodApp = () => {
  return (
    <div className="food__app">
      <h1>Our Menu</h1>
      <Search />
      <List />
    </div>
  );
};

export default FoodApp;
