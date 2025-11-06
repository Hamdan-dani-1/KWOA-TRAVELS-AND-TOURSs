import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link,} from "react-router-dom";
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
