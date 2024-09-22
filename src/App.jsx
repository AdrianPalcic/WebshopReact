import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import LogReg from './Pages/LogReg';
import Header from './Components/Header';
import "./App.css";
import ProductDetails from './Pages/ProductDetails';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {


  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page2" element={<Cart />} />
          <Route path="page3" element={<Shop />} />
          <Route path="page5" element={<About />} />
          <Route path="page6" element={<Contact />} />
          <Route path="page4" element={<LogReg />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;
