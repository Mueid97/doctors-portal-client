import { Route, Routes } from 'react-router-dom';
import Appoinment from './pages/Appoinment/Appoinment';

import About from './pages/About/About';
import Home from './pages/Home/Home';

import Navbar from './share/Navbar/Navbar';
import Reviews from './pages/Reviews/Reviews';
import ContactUs from './pages/ContactUs/ContactUs';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div >
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
