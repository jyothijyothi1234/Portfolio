import './App.css';
import Fotter from './Components/Fotter';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
     <Navbar />
     
      <Routes>
      
     <  Route   path="/" element={<Home />} />
    <  Route   path="/about" element={<About />}/>
      < Route   path='/projects' element={<Projects />} />
     < Route   path="/contact" element={<Contact />}  />
     </Routes> 
     <Fotter />

     </BrowserRouter>
    </div>
  );
}

export default App;
