import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Container from 'react-bootstrap/esm/Container';
import { Col, Row } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { LiaAmazonPay } from "react-icons/lia";
import { SiPaytm } from "react-icons/si";

const images = [
  "https://dhaagalife.com/cdn/shop/files/IMG_3895.jpg?v=1714675904&width=823",
  "https://dhaagalife.com/cdn/shop/files/20241025_170050_Large_590f475e-49b4-4890-b7e9-be8d4ab6bbc8.jpg?v=1743551938&width=823",
  "https://dhaagalife.com/cdn/shop/files/IMG_3822-3.jpg?v=1743551938&width=823",
  "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5086.jpg?v=1743551928&width=823",
  "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5090copy.jpg?v=1743551928&width=823",
  "https://dhaagalife.com/cdn/shop/files/HM_13_Sunflower.jpg?v=1743551928&width=823",
  "https://dhaagalife.com/cdn/shop/files/IMG_3859.jpg?v=1743551928&width=823",
];


function Mycarousel() {
  const [index, setIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    const newIndex = index === 0 ? images.length - 1 : index - 1;
    setIndex(newIndex);
    if (newIndex < thumbStart) {
      setThumbStart(Math.max(0, thumbStart - 1));
    }
  };

  const handleNext = () => {
    const newIndex = index === images.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
    if (newIndex >= thumbStart + 5) {
      setThumbStart(Math.min(images.length - 5, thumbStart + 1));
    }
  };
  const visibleThumbnails = images.slice(thumbStart, thumbStart + 5);


  const [count, setcount] = useState(1)
  const incre = () => {
    setcount(count + 1)
  }
  const decre = () => {
    setcount(count - 1)
  }

  return (
    <div style={{ backgroundColor: '#FFF3E0',width:"100vw" }} >
      <Container>
        <Row className='py-5'>
          <Col md={6}>
            <div style={{ position: 'sticky', top: 50 }}>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                interval={null}
              >
                {images.map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className='d-block'
                      style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}

                      // style={{ height: '500px', width: '600px', objectFit: 'cover' }}
                      src={img}
                      alt={`Slide ${idx + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>


              <div className='d-block me-sm-inline' style={{ paddingTop: '20px', display: 'flex', flexDirection: 'row',textAlign: 'center'}} >
                <button
                  onClick={handlePrev}
                  style={{
                    fontSize: '15px',
                    cursor: 'pointer',
                    padding: '10px 10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    background: '#fff'
                  }}

                >
                  <IoIosArrowBack />
                </button>
                {visibleThumbnails.map((img, idx) => {
                  const actualIndex = thumbStart + idx;
                  return (
                    <img

                      key={actualIndex}
                      src={img}
                      alt={`Thumbnail ${actualIndex + 1}`}
                      onClick={() => setIndex(actualIndex)}
                      style={{
                        width: '90px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        border: actualIndex === index ? '3px solid #B71C1C' : '1px solid #ccc',
                        cursor: 'pointer',
                        opacity: actualIndex === index ? 1 : 0.6,
                        transition: 'opacity 0.3s, border 0.3s',
                      }}
                    />
                  );
                })}
                <button
                  onClick={handleNext}
                  style={{
                    fontSize: '15px',
                    cursor: 'pointer',
                    padding: '10px 10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    background: '#fff',
                  }}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </Col>


          {/* <col -2> */}
          <Col md={6}>

            <div style={{ paddingLeft: 40, scrollbarWidth: 'none' }} >
              <div>Dhaaga Life</div>
              <p style={{ fontSize: ' 40px', fontWeight: 'lighter' }}>Large Tropical Coco <br />Half Moon Clutch Bag
                Regu</p>
              <p>₹3,800.00 Sale price₹3,420.00 <span style={{ border: '1px solid', borderRadius: '15px', backgroundColor: 'red' }}>10% OFF</span><br />
                Taxes included.<span style={{ color: 'red', textDecoration: 'underline' }}> Shipping</span> calculated at checkout.</p>
              <p>Quantity (4 in cart)</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={decre}>-</button>
                <button>{count}</button>
                <button onClick={incre}>+</button>
              </div>
              <h1>You may also like</h1>
              <div style={{
                border: '1px solid',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
              padding: '10px',
                gap: '12px',
                borderColor: 'pink',
                backgroundColor: '#FFF3E0'
              }}>
                <span>
                  <input type="checkbox" />
                </span>
                <span>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0605/0558/7893/files/BestSellers_Square_0001_KC_05_Sagegreen_400x400.jpg?v=1731585181"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    alt="Sage Green Keycharm"
                  />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  Sage Green Keycharm
                  <span>₹ 480.00 <span style={{ textDecoration: 'line-through' }}>₹ 600.00</span></span>
                  <span style={{ textDecoration: 'underline' }}>Learn More</span>
                </span>
              </div>
              <div style={{
                border: '1px solid',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                // width: '430px',
                padding: '10px',
                gap: '12px',
                borderColor: 'pink',
                backgroundColor: '#FFF3E0',
                marginTop: '10px'
              }}>
                <span>
                  <input type="checkbox" />
                </span>
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0605/0558/7893/files/IMG_3840_400x400.jpg?v=1714683438"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    alt="Golden Glow Half Moon Clutch Bag"
                  />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  Golden Glow Half Moon Clutch Bag
                  <span>Sale price₹ 2,520.00 <span style={{ textDecoration: 'line-through' }}>₹ 2,800.00</span></span>
                  <span style={{ textDecoration: 'underline' }}>Learn More</span>
                </span>
              </div>
              <button style={{  marginTop: '10px', borderRadius: '20px', borderColor: 'red', backgroundColor: '#FFF3E0' }}>Add to Cart</button>
              <button className='btn btn-dark' style={{ marginTop: '10px' }}>BUY NOW
                <FcGoogle style={{ borderRadius: '50px', border: '1px solid wihte', backgroundColor: 'white', width: '20px' }} className='ms-2' />
                <LiaAmazonPay style={{ borderRadius: '50px', border: '1px solid white', width: '20px', backgroundColor: 'white', color: 'blue' }} />
                <SiPaytm style={{ borderRadius: '50px', border: '1px solid white', width: '20px', backgroundColor: 'white', color: 'blue' }} />
              </button>
              <div>
                <p>Tropical Coco half moon Bag, a handcrafted gem inspired by<br /> the serene beauty of coconut trees and tropical vibes. This <br />
                  exquisite clutch features intricate coconut tree motifs<br /> embroidered on natural jute, complemented by wooden beads <br />
                  accent  exuding a laid-back, island charm.</p>

                <p>Meticulously crafted with attention to detail, the Tropical<br /> Coco half moon clutch bag is the perfect accessory to enhance<br />
                  your beachside ensemble or casual summer outfit. Its earthy<br /> textures and tropical embellishments evoke a sense of<br />
                  relaxation and adventure, making it an ideal companion for<br /> beach outings, seaside picnics, or any sun-soaked occasion.</p>

                <p>With a touch of island paradise and let the Tropical Coco Half<br /> Moon Clutch Bag bring a refreshing breeze to your look. It's<br />
                  the quintessential accessory for capturing the essence of <br />tropical elegance with effortless flair.</p>

                <p>e | 12" (Smart phone, cards, keys, lipstick, ear pods will fit<br /> comfortably)</p>

                <p>Materials | Jute, Wool, hand-embroidery in premium threads, <br />wooden bead lining</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

};

export default Mycarousel;
