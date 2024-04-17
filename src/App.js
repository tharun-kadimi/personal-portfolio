import "./App.css";
import { Banner } from "./Components/Banner.js";
import NavBarr from "./Components/NavBarr.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Banner />
    </div>
  );
}

export default App;
