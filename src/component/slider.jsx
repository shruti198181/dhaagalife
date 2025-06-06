import { Container,Row,Col,Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {Button } from 'react-bootstrap'



const images = [
    'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/Dhaaga_13042024_5187_400x400.jpg?v=1742630432',
    'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/IMG_8865_400x400.jpg?v=1738980898',
    'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/BestSellers_Square_0001_KC_05_Sagegreen_400x400.jpg?v=1731585181',
    'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/IMG_3840_400x400.jpg?v=1714683438',
    'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/03_400x400.jpg?v=1714657416',
    'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/IMG_6936_400x400.jpg?v=1714938235',
    'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/716B663D-4B3B-4B47-BD1E-4B39CA08BE07_400x400.jpg?v=1714931148',
    'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/HMB_18-PhotoRoom_7_400x400.jpg?v=1695885168',
]



function Sliders () {
    return(
        <div style={{ backgroundColor: '#FFF3E0' }}>
        <Container className="py-5">
            <Carousel indicators={false} 
            interval={3000}
            controls={true}
            nextIcon={
                <button
                    variant="light"
                    className="p-2 shadow-sm"
                   style={{borderRadius:'50%'}}
>
    <IoIosArrowForward size={20} />
                </button>
            }
            prevIcon={
                <button 
                variant="light"
                 className="p-2 shadow-sm"
                 style={{borderRadius:'50%'}}
                >
                            <IoIosArrowBack size={20}/>
                </button>
                }
                >
                
                <Carousel.Item>
                    <Row>
                        <Col xs={6} sm={3} className='text-center text-sm-start'>
                         <Image 
                           src={'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/Dhaaga_13042024_5187_400x400.jpg?v=1742630432'}
                           alt="Garden Tote Bag"
                           fluid style={{height:'300px',objectFit:'cover', width:'300px'}}/>
                            <div className="text-center">
                           <p>Gardern Tote Bag</p>
                           <p>₹5,580.00 <span style={{textDecoration: 'line-through'}}> ₹6,200.00</span></p>
                          <p><button style={{backgroundColor: '#FFF3E0',border: '1px solid red', borderRadius: '20px'}}>Add to cart</button></p>
                          </div>
                        </Col>
                        <Col>
                        <Image 
                        src={'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/IMG_8865_400x400.jpg?v=1738980898'}
                        alt="Marigold Tote Bag~Hand-paint"
                        fluid style={{height:'300px',objectFit:'cover', width:'300px'}}/>
                         <div className="text-center">
                        <p>Marigold Tote bag~Hand-paint</p>
                           <p>₹6,750.00 <span style={{textDecoration: 'line-through'}}> ₹7,500.00</span></p>
                          <p><button style={{backgroundColor: '#FFF3E0',border: '1px solid red', borderRadius: '20px'}}>Add to cart</button></p>
                         </div>
                        </Col>
                        <Col>
                        <Image 
                        src={'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/BestSellers_Square_0001_KC_05_Sagegreen_400x400.jpg?v=1731585181'}
                        alt="Sage Green Keycharm"
                        fluid style={{height:'300px',objectFit:'cover', width:'300px'}}/>
                         <div className="text-center">
                        <p>Sage Green Keycharm</p>
                           <p>₹480.00 <span style={{textDecoration: 'line-through'}}> ₹600.00</span></p>
                          <p><button style={{backgroundColor: '#FFF3E0',border: '1px solid red', borderRadius: '20px'}}>Add to cart</button></p>
                        </div>
                        </Col>
                         <Col>
                         <Image 
                         src={'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/IMG_3840_400x400.jpg?v=1714683438'}
                          alt="Golden Glow Half Moon Clutch..."
                         fluid style={{height:'300px',objectFit:'cover', width:'300px'}}/>
                         <div className="text-center">
                          <p>Golden Glow Half Moon Clutch...</p>
                           <p>₹2,520.00 <span style={{textDecoration: 'line-through'}}> ₹2,800.00</span></p>
                          <p><button style={{backgroundColor: '#FFF3E0',border: '1px solid red', borderRadius: '20px'}}>Add to cart</button></p>
                          </div>
                         </Col>
                         </Row>
                </Carousel.Item>
            
                         <Carousel.Item>
                            <Row>
                        <Col xs={6} sm={3} className='text-center text-sm-start'>
                         <Image 
                           src={'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/03_400x400.jpg?v=1714657416'}
                           alt="Sea Shell Half Moon Bag"
                           fluid style={{height:'300px',objectFit:'cover', width:'300px'}}/>
                            <div className="text-center">
                           <p>Sea Shell Moon Half Bag</p>
                           <p>₹3,420.00 <span style={{textDecoration: 'line-through'}}> ₹3,600.00</span></p>
                          <p><button style={{backgroundColor: '#FFF3E0',border: '1px solid red', borderRadius: '20px'}}>Add to cart</button></p>
                          </div>
                        </Col>
                        <Col>
                        <Image 
                        src={'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/IMG_6936_400x400.jpg?v=1714938235'}
                        alt="Garder Denim Vegan Suede Slin.."
                        fluid style={{height:'300px',objectFit:'cover', width:'300px'}}/>
                         <div className="text-center">
                        <p>Garden Denim Vegan Suede Slin..</p>
                           <p>₹3,150.00 <span style={{textDecoration: 'line-through'}}> ₹3,500.00</span></p>
                          <p><button style={{backgroundColor: '#FFF3E0',border: '1px solid red', borderRadius: '20px'}}>Add to cart</button></p>
                         </div>
                        </Col>
                        <Col>
                        <Image 
                        src={'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/716B663D-4B3B-4B47-BD1E-4B39CA08BE07_400x400.jpg?v=1714931148'}
                        alt="Leafy Tan Stud Round Sling Bag "
                        fluid style={{height:'300px',objectFit:'cover', width:'300px'}}/>
                         <div className="text-center">
                        <p>Leafy Tan Stud Round Sling Bag</p>
                           <p>₹2,400.00 <span style={{textDecoration: 'line-through'}}> ₹3000.00</span></p>
                          <p><button style={{backgroundColor: '#FFF3E0',border: '1px solid red', borderRadius: '20px'}}>Add to cart</button></p>
                        </div>
                        </Col>
                         <Col>
                         <Image 
                         src={'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/HMB_18-PhotoRoom_7_400x400.jpg?v=1695885168'}
                          alt="Lumina Luxe Half Moon Bag"
                         fluid style={{height:'300px',objectFit:'cover', width:'300px'}}/>
                         <div className="text-center">
                          <p>Lumina Luxe Half Moon Bag</p>
                           <p>₹2,880.00 <span style={{textDecoration: 'line-through'}}> ₹3,200.00</span></p>
                          <p><button style={{backgroundColor: '#FFF3E0',border: '1px solid red', borderRadius: '20px'}}>Add to cart</button></p>
                          </div>
                         </Col>
                         </Row>
                </Carousel.Item>
                </Carousel>
        </Container>
        </div>
    )


}

export default Sliders;