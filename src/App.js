import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from "./components/Banner";
//import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      
      <Footer />
    </div>
  );
}

export default App;