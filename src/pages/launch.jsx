import React from 'react';
import MyNavbar from '../component/nav.jsx';
 import Mynav from '../component/simple.jsx';
 import Footer from '../component/footer.jsx';
import ImageCarousel from "../component/image.jsx";
import {useState } from 'react'
import{Button} from 'react-bootstrap'
  function Launch() {
    const [hover,sethover] = useState(false)
 return(
  <>
   <MyNavbar/>
   <div style={{position:'relative'}}><div style={{display:'flex',justifyContent:'space-between'}}>
        <Button style={{position:'absolute',marginLeft:'40px', backgroundColor: '#FFF3E0', color:'black',
                  borderRadius: '20px',  borderColor: hover ? "red" : "black",
                  border: '1px solid',}}
                    onMouseEnter={() => sethover(true)}
                    onMouseLeave={() => sethover(false)}
                  >New</Button></div>
 <Mynav/></div>
 <ImageCarousel/>
 <Footer/>


  </>
 )
}

export default Launch;
