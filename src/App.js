import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Services from './components/Services';
import Emergencies from './components/Emergencies';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/services" element={<Services/>} />
        <Route path='/emergencies' element={<Emergencies/>} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
