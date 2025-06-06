import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageCarousel from "./image";
// import ProductDetail from "./productdetail";

function Slide() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageCarousel />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default Slide;