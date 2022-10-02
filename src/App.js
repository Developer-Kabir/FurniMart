import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
      <Route path='/about' element={<About></About>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
