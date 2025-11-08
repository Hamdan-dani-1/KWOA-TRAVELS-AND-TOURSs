import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link,} from "react-router-dom";
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact';
import Rajab from './Component/zayarat-packages/13rajab';
import Arbyene from './Component/arbyene/arbyene';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/zayarat/13rajab" element={<Rajab />} />
        <Route path="/arbaeen" element={<Arbyene />} />

      </Routes>
    </div>
  )
}

export default App
