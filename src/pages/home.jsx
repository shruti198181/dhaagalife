import React from 'react';
import MyNavbar from '../component/nav';
 import Mycarousel from '../component/carousel';
 import Product from '../component/product'; 
 import Sliders from '../component/slider';
 import Sample from '../component/sample';
 import Mynav from '../component/simple';
 import Footer from '../component/footer';
 function Home() {
 return(
  <>
     <MyNavbar/>
  <Mycarousel/>
  <Product/> 
  <Sliders/>
  <Sample/>
 <Mynav/>
 <Footer/>


  </>
 )
}

export default Home;

