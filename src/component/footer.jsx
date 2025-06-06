import {Container, Navbar,Col,Row,Button } from'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { SiPaytm } from "react-icons/si";
import { AiOutlineHome } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { useState } from 'react';

function Footer() {
   const [email,setemail] = useState('')
   const [error,seterror] = useState('')
   const [msg,setmsg] = useState('')
const Emailvalidate = () => {
  if (!email.trim()) {
    seterror('Email is required');
    setmsg('');
  } else if (!email.includes('@')) {
    seterror("Email must include '@'");
    setmsg('');
  } else {
    seterror('');
    setmsg('Email is valid');
  }
};

  return (
    <>
      <div style={{backgroundColor: '#FEF3C7', width: '100vw'}} className='pt-5'>
       
       
          <Container>
            <Row>
             <Col md={3} sm={3}>
            <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
              
              <img
                src="https://dhaagalife.com/cdn/shop/files/Olive-Logo_website.png?v=1660290719&width=270"
                alt="logo"
                style={{ height: '50px', objectFit: 'contain' }}
              />
                          </Navbar.Brand>
                          </Col>

            <Col md={3} sm={3}>
                 <ul>
                    <li style={{listStyleType:'none', fontSize:'25px'}} >Quick links</li>
                    <li style={{listStyleType:'none', fontSize:'15px'}} className='mt-4'>Shop</li>
                    <li style={{listStyleType:'none', fontSize:'15px'}} className='mt-3'>One of a Kind</li>
                    <li style={{listStyleType:'none', fontSize:'15px'}} className='mt-3'>About Us</li>
                    <li style={{listStyleType:'none', fontSize:'15px'}} className='mt-3'>Our Story</li>
                    <li style={{listStyleType:'none', fontSize:'15px'}} className='mt-3'>Contact Us</li>
                    <li style={{listStyleType:'none', fontSize:'15px'}} className='mt-3'>All Collection</li>
                 </ul>
            </Col>
            <Col md={3} sm={3}>
            <ul>
                <li style={{listStyleType:'none', fontSize:'15px' }} className='mt-3'>Privecy Policy</li>
                <li style={{listStyleType:'none', fontSize:'15px'}} className='mt-3'>Shipping and Delivery</li>
                <li style={{listStyleType:'none', fontSize:'15px'}} className='mt-3'>Return and Exechange Policy</li>
                <li style={{listStyleType:'none', fontSize:'15px'}} className='mt-3'>Terms and Condition</li>
            </ul>
            </Col>
            <Col md={3} sm={3}>
        <div style={{listStyleType:'none',fontSize:'15px'}}>
            <span style={{fontSize:'25px'}}>Our Missions<br/></span>
            <span className='d-sm-inline'>Building a community of artisans <br/>that lives with purpose and passion<br/> fueled life producing beautiful<br/> work :
       </span> </div>
             
            </Col>
            </Row>
            <div className='fs-5 mt-5 '>  
                Subscribe to our emails<br/>
                 <div className="position-relative mt-5">
                    <FaArrowRight onClick={Emailvalidate}
        style={{  color: 'black',
          border: 'none',
        position:'absolute', 
        marginLeft:'280px', 
        paddingTop:'10px'}}/>
      <input type="text" placeholder="Email" style={{width:'300px'}} value={email} onChange={(e)=>setemail(e.target.value)} />
   {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {msg && <p style={{ color: 'green', marginTop: '10px' }}>{msg}</p>}
    </div>
    </div>
            <div style={{ borderTop:'1px solid', borderColor:'plum',}} className='mt-5 text-center'>
                <div className='mt-3'>
               <Button style={{color:'blue',border:'1px solid red'}} className='btn btn-light'>VISA</Button>
               <Button className='btn btn-light ms-2 text-primary ' style={{border:'1px solid red'}}><SiPaytm style={{fontSize:'25px'}} />
</Button>
               <Button className='btn btn-light ms-2 text-primary ' style={{border:'1px solid red'}}>
                                             <AiOutlineHome size={24} />
               </Button>
              <Button className='btn btn-light ms-2 text-primary ' style={{border:'1px solid red'}}>
             <MdEmail size={22}  /></Button>
               <Button className='btn btn-light ms-2 text-primary ' style={{border:'1px solid red'}}><FiSettings size={22} />
</Button>

               <br/>
               </div>
               <div className='d-flex flex-start mt-3'>© 2025, Dhaaga Life Powered by Shopify
<span className='ms-4'>Refund policy</span>
<span className='ms-4'>Privacy policy</span>
<span className='ms-4'>Terms of service</span>
<span className='ms-4'>Shipping policy</span></div>
            </div>
            </Container>
            
            </div>
            </>
)
}
export default Footer