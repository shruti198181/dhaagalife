import React from 'react';
import Footer from '../component/footer';
import Halfmoon from "../component/halfmoon";
import MyNavbar from "../component/nav";
import Mynav from "../component/simple";
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function Halfbag() {
    const [hover,sethover] = useState(false)
     
    return (
        <>     
        
               
        <MyNavbar /><div style={{position:'relative'}}><div style={{display:'flex',justifyContent:'space-between'}}>
        <Button style={{paddingTop:'10px',position:'absolute',marginLeft:'15px', backgroundColor: '#FFF3E0', color:'black',
                  borderRadius: '20px',  borderColor: hover ? "red" : "black",
                  border: '1px solid',}}
                    onMouseEnter={() => sethover(true)}
                    onMouseLeave={() => sethover(false)} >Half Moon</Button></div>
                    <Mynav className="ms-5"/></div>

       <Halfmoon/> 

        <Footer />
                    </>
    )

}
export default Halfbag;