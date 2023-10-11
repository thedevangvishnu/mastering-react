import { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
  console.log("render");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState("");
  const [searchString, setSearchString] = useState("");

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((users) => setMonsters(users));
  // here, an infinite render loop is being executed fetch is storing user in different location is memory, which let React update state, even though it gives us the same array, reference to that array is different. Hence, the state gets updated, which triggers re-render, which then run fetch() again and again the state gets updated. Hence, creating a render loop

  useEffect(() => {
    console.log("effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  const onSearchStringChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Monsters Rolodex Practice Project</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholderText="search monster"
        />
        <CardList monsters={filteredMonsters} />
      </header>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     this.setState({ searchField: searchString });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="app-title">Monsters Rolodex</h1>
//           <SearchBox
//             className="monsters-search-box"
//             onChangeHandler={onSearchChange}
//             placeholderText="search monster"
//           />
//           <CardList monsters={filteredMonsters} />
//         </header>
//       </div>
//     );
//   }
// }

export default App;
