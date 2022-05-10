import { Route, Routes } from 'react-router-dom';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Footer from './share/Footer/Footer';
import Navbar from './share/Navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
