import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Service from './Components/Pages/Service/Service';
import Shop from './Components/Pages/Shop/Shop';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/service' element={<Service></Service>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
