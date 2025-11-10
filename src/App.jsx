import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link,} from "react-router-dom";
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact';
import Rajab from './Component/zayarat-packages/rajab/13rajab';
import Arbyene from './Component/arbyene/arbyene';
import Winter from './Component/zayarat-packages/Winter/winter';
import Iranspecial from './Component/zayarat-packages/iran-special/iranspecial';
import DaysIraq from "../src/Component/zayarat-packages/19-days-iraq/19daysiraq"
import Shaban from './Component/zayarat-packages/Shaban-Group/Shaban';
import About from './Component/about/About';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/zayarat/13rajab" element={<Rajab />} />
        <Route path="/arbaeen" element={<Arbyene />} />
        <Route path="/zayarat/wintervacation" element={<Winter />} />
        <Route path="/zayarat/Iranspecial" element={<Iranspecial />} />
        <Route path="/zayarat/19daysIraq" element={<DaysIraq />} />
        <Route path="/zayarat/Shabangroup" element={<Shaban />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  )
}

export default App
