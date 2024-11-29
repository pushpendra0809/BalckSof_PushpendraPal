import './App.css';
import Home from './Component/Home/Home.jsx'
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
     
    </Routes>
  </BrowserRouter>    </>
  );
}

export default App;
