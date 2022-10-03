import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Service from './Components/Pages/Service/Service';
import Shop from './Components/Pages/Shop/Shop';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/service' element={<Service></Service>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
