import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h2>I am the Shop page</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
