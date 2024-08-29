import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Header from './Components/Header';
import "./App.css";

function App() {


  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page2" element={<Cart />} />
          <Route path="page3" element={<Shop />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;
