import "./App.css";
import { Banner } from "./Components/Banner.js";
import NavBarr from "./Components/NavBarr.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./Components/Skills.js";
import { Projects } from "./Components/Projects.js";
import { Footer } from "./Components/Footer.js";
import { Contact } from "./Components/Contact.js";

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
