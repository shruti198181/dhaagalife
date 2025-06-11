import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Launch from "./pages/launch";
// import Slide from "./component/slide"
import Halfbag from "./pages/halfbag"
import Detail from "./pages/detail";
import First from "./pages/first";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<First/>}/>
        <Route path="/home" element={<Home />} />
         <Route path="/launch" element={<Launch />} />
         {/* <Route path="/slide/*" element={<Slide/>}/> */}
          <Route path="/product/:id" element={<Detail />} />
         <Route path="/halfbag" element={<Halfbag/>}/>  
            </Routes>
    </BrowserRouter>
  );
}
export default App;
