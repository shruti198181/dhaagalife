import MyNavbar from "../component/nav";
import ProductDetail from "../component/productdetail";

 import Product from '../component/product'; 
 import Sliders from '../component/slider';
 import Sample from '../component/sample';
 import Mynav from '../component/simple';
 import Footer from '../component/footer';


function Detail() {
return (
    <>
    <MyNavbar/>
    <ProductDetail/>
   
  <Product/> 
  <Sliders/>
  <Sample/>
 <Mynav/>
 <Footer/>
    </>
)
}
export default Detail;