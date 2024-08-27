import './App.css';
import Fotter from './Components/Fotter';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
     
     <Navbar />
    <Home />
     <About />
      <Projects />
     <Contact />
     <Fotter  /> 

    </div>
  );
}

export default App;
