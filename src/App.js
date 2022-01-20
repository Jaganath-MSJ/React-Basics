import { Route } from "react-router-dom";
import AddTwo from "./Compounts/AddTwo";
import ContactPage from "./Compounts/ContactPage";
import HomePage from "./Compounts/HomePage";
import Navigation from "./Compounts/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/addTwo" exact component={AddTwo} />
    </>
  );
}

export default App;
