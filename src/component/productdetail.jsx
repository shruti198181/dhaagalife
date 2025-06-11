// import { useParams, Link } from "react-router-dom";
// import { useState } from "react";
// import { Button } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Container from 'react-bootstrap/esm/Container';
// import { Col, Row } from 'react-bootstrap';
// import { FcGoogle } from "react-icons/fc";
// import { LiaAmazonPay } from "react-icons/lia";
// import { SiPaytm } from "react-icons/si";

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button, Carousel, Container, Col, Row, Image } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { LiaAmazonPay } from "react-icons/lia";
import { SiPaytm } from "react-icons/si";

// // Use the same images array or import from a separate file for reusability
const images=[
    {
        id: 1,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_2840.jpg?v=1700727653&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/preview_images/6d9ecea679924768b5b0b16c173c583c.thumbnail.0000000000.jpg?v=1700727630&width=533",
        title: "Half Moon Handbag With Metal Handle",
        originalPrice:"₹4,500.00",
        discountPrice : "₹4,050.00",
        discount:"10% off",
        im1: "https://dhaagalife.com/cdn/shop/files/IMG_2840.jpg?v=1700727653&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/videos/c/vp/6d9ecea679924768b5b0b16c173c583c/6d9ecea679924768b5b0b16c173c583c.HD-1080p-2.5Mbps-21066475.mp4?v=0",
        im3: "https://dhaagalife.com/cdn/shop/files/IMG_28622.jpg?v=1700727751&width=990",
        im4 : "https://dhaagalife.com/cdn/shop/files/IMG_2858.jpg?v=1703767293&width=990",
        im5 : "https://dhaagalife.com/cdn/shop/files/IMG_2862.jpg?v=1703767336&width=990",
        description : "Half Moons are Dhaaga Life's signature design. The bag is handcrafted from a single jute dhaaga (thread). Every bag connoisseur deserves this unique clutch. ",
    },
    {
        id: 2,
        default:"https://dhaagalife.com/cdn/shop/files/L_HM_04_Coco_05.jpg?v=1732562597&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/IMG_7012.jpg?v=1721222056&width=533",
        title: "Large Tropical Coco Half Moon Clutch Bag",
        originalPrice:"₹3,800.00",
        discountPrice : "₹3,610.00",
        discount:"5% off",
        im2 : "https://dhaagalife.com/cdn/shop/files/IMG_7012.jpg?v=1721222056&width=990",
        im3 : "https://dhaagalife.com/cdn/shop/files/IMG_8482.jpg?v=1721222056&width=990",
        im4 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5090copy.jpg?v=1743551928&width=990",
        im5 : "https://dhaagalife.com/cdn/shop/videos/c/vp/ce90be027aca4719a3c9db4304f3975d/ce90be027aca4719a3c9db4304f3975d.HD-1080p-7.2Mbps-31901604.mp4?v=0",
    },
    {
        id: 3,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3895.jpg?v=1714675904&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/20241025_170050_Large_590f475e-49b4-4890-b7e9-be8d4ab6bbc8.jpg?v=1743551938&width=533",
        title: "Large Sunflower Meadow Half Moon Clutch Bag",
        originalPrice:"₹3,800.00",
        discountPrice : "₹3,610.00",
        discount:"5% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/IMG_3895.jpg?v=1714675904&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/20241025_170050_Large_590f475e-49b4-4890-b7e9-be8d4ab6bbc8.jpg?v=1743551938&width=990",
        im3 : "https://dhaagalife.com/cdn/shop/videos/c/vp/3d861e63551e4da2896ca7340d418abf/3d861e63551e4da2896ca7340d418abf.HD-1080p-7.2Mbps-45224602.mp4?v=0",
        im4 : "https://dhaagalife.com/cdn/shop/videos/c/vp/8000271658aa45e6b049c9384e725869/8000271658aa45e6b049c9384e725869.HD-1080p-4.8Mbps-45224593.mp4?v=0",
        im5 : "https://dhaagalife.com/cdn/shop/files/IMG_3822-3.jpg?v=1743551938&width=990", 
    },
    {
        id: 4,
        default:"https://dhaagalife.com/cdn/shop/files/03.jpg?v=1714657416&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4887.jpg?v=1714657123&width=533",
        title: "Sea Shell Half Moon Bag",
        originalPrice:"₹3,600.00",
        discountPrice : "₹3,420.00",
        discount:"5% off",
        im1: "https://dhaagalife.com/cdn/shop/files/03.jpg?v=1714657416&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4887.jpg?v=1714657123&width=533",
        im3: "https://dhaagalife.com/cdn/shop/files/IMG_3822-3.jpg?v=1743551938&width=990",
        im4 : "https://dhaagalife.com/cdn/shop/files/IMG_3889.jpg?v=1714657124&width=990",
    },
    {
        id: 5,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_18-PhotoRoom_7.jpg?v=1695885168&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/HMB_18-PhotoRoom_7_382d7ae6-36e2-4b35-b36e-0676e8052595.jpg?v=1706866192&width=533",
        title: "Lumina Luxe Half Moon Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/HMB_18-PhotoRoom_7.jpg?v=1695885168&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/HMB_18-PhotoRoom_7_382d7ae6-36e2-4b35-b36e-0676e8052595.jpg?v=1706866192&width=533",
    },
    {
        id: 6,
        default:"https://dhaagalife.com/cdn/shop/products/IMG_8127.jpg?v=1670659365&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/HMB_10_IMG_8123-PhotoRoom_6.jpg?v=1706791784&width=533",
        title: "Cosmic Noir Half Moon Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/products/IMG_8127.jpg?v=1670659365&width=990",
        im12 : "https://dhaagalife.com/cdn/shop/files/HMB_10_IMG_8123-PhotoRoom_6.jpg?v=1706791784&width=533",
    },
    {
        id: 7,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3892.jpg?v=1714677536&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4924.jpg?v=1714677536&width=533",
        title: "Baby Breath Half Moon Clutch Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/IMG_3892.jpg?v=1714677536&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4924.jpg?v=1714677536&width=533",
        im3 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4927.jpg?v=1714677536&width=990",
        im4 : "https://dhaagalife.com/cdn/shop/files/HM_03_03_d746d119-bf59-491a-aec6-3795cc34da86.jpg?v=1714677535&width=990",
    }, 
    {
        id: 8,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3867.jpg?v=1714683723&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4954.jpg?v=1714683723&width=533",
        title: "Yellow Bloom Half Moon Clutch Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.0010%",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/IMG_3867.jpg?v=1714683723&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4954.jpg?v=1714683723&width=990",
        im3 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4965copy.jpg?v=1714671027&width=990",
    },
    {
        id: 9,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_0137-PhotoRoom_5.jpg?v=1695849652&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/IMG_0135_e427fb0b-0e28-4621-b690-3b2c618df8c3.heic?v=1695849679&width=533",
        title: "Pink Perennials Half Moon Clutch Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/IMG_0137-PhotoRoom_5.jpg?v=1695849652&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/IMG_0135_e427fb0b-0e28-4621-b690-3b2c618df8c3.heic?v=1695849679&width=533",
    },
    {
        id: 10,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3872.jpg?v=1714683733&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4934.jpg?v=1714683733&width=533",
        title: "1Brunnera Bloom Half Moon Clutch Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
        im1: "",
    },
    {
        id: 11,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_06_4767.jpg?v=1717926811&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/IMG_3837.jpg?v=1717926811&width=533",
        title: "White Diamond Half Moon Clutch Bag",
        originalPrice:"₹3,000.00",
        discountPrice : "₹2,700.00",
        discount:"10% off",
        im1: "https://dhaagalife.com/cdn/shop/files/HMB_06_4767.jpg?v=1717926811&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/IMG_3837.jpg?v=1717926811&width=533",
        im3: "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5036.jpg?v=1717926811&width=990",
        im4 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5036.jpg?v=1717926811&width=990",
        im5 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5040.jpg?v=1714677788&width=990",
    },
    {
        id: 12,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_07_02.png?v=1700659974&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/preview_images/8a32053aed7c427b8d9b63a565a49823.thumbnail.0000000000.jpg?v=1700659998&width=533",
        title: "Golden Diamond Half Moon Clutch Bag",
        originalPrice:"₹3,000.00",
        discountPrice : "₹2,700.00",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/HMB_07_02.png?v=1700659974&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/preview_images/8a32053aed7c427b8d9b63a565a49823.thumbnail.0000000000.jpg?v=1700659998&width=533",
        im3 : "https://dhaagalife.com/cdn/shop/videos/c/vp/c98d9de9787c464893c081a751d254cb/c98d9de9787c464893c081a751d254cb.HD-1080p-7.2Mbps-21029660.mp4?v=0",
        im4 : "https://dhaagalife.com/cdn/shop/files/HMB_07_IMG_0876-min.jpg?v=1706796773&width=990",
    },
    {
        id: 13,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_15_Dhaaga_13042024_4992.jpg?v=1714669864&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/HMB_15_Dhaaga_13042024_4997.jpg?v=1714669886&width=533",
        title: "Crimson Diamond Half Moon Clutch Bag",
        originalPrice:"₹3,000.00",
        discountPrice : "₹2,700.00",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/HMB_15_Dhaaga_13042024_4992.jpg?v=1714669864&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/HMB_15_Dhaaga_13042024_4997.jpg?v=1714669886&width=533",
        im3 : "https://dhaagalife.com/cdn/shop/files/Screenshot2023-09-27at4.28.44PM_39eec82e-333c-41b6-bb8b-363bdc1116a5.png?v=1706868473&width=990",
    },
    {
        id: 14,
        default:"https://dhaagalife.com/cdn/shop/files/Screenshot2023-09-27at4.28.35PM.png?v=1695812493&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Screenshot2023-09-27at4.28.44PM.png?v=1695812494&width=533",
        title: "Misty Pink Gray Half Moon Bugle Beads Clutch Bag",
        originalPrice:"₹3,000.00",
        discountPrice : "₹2,700.00",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/Screenshot2023-09-27at4.28.35PM.png?v=1695812493&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/Screenshot2023-09-27at4.28.44PM.png?v=1695812494&width=533",
        im3 : "https://dhaagalife.com/cdn/shop/videos/c/vp/651f91ed8fc948ddb732da0e9c66d237/651f91ed8fc948ddb732da0e9c66d237.HD-1080p-7.2Mbps-18866155.mp4?v=0",
        im4 : "https://dhaagalife.com/cdn/shop/files/HMB_13_IMG_3939.jpg?v=1706866470&width=990",
    },
    {
        id: 15,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_13_IMG_3939.jpg?v=1706866470&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/preview_images/d370ab3d714244828301b4e1aca65e78.thumbnail.0000000000.jpg?v=1695844849&width=533",
        title: "Midnight Sparkle Black Half Moon Clutch Bag",
        originalPrice:"₹2,800.00",
        discountPrice : "₹2,520.00",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/HMB_13_IMG_3939.jpg?v=1706866470&width=990",
        im2 : " https://dhaagalife.com/cdn/shop/files/preview_images/d370ab3d714244828301b4e1aca65e78.thumbnail.0000000000.jpg?v=1695844849&width=533",
       im3 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4978.jpg?v=1714683438&width=990",  
    },
    {
        id: 16,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3840.jpg?v=1714683438&width=990",
        title: "Golden Glow Half Moon Clutch Bag",
        originalPrice:"₹2,800.00",
        discountPrice : "₹2,520.00",
        discount:"10% off",
        im1 : "https://dhaagalife.com/cdn/shop/files/IMG_3840.jpg?v=1714683438&width=990",
        im2 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5049copy.jpg?v=1714683438&width=990",
        im3 : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4978.jpg?v=1714683438&width=990",
    },

]
// function ProductDetail  () {
//     const {id} = useParams();
//     const product = images.find(item=>item.id=== parseInt(id))

//   const [index, setIndex] = useState(0);
//   const [thumbStart, setThumbStart] = useState(0);
//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   const handlePrev = () => {
//     const newIndex = index === 0 ? images.length - 1 : index - 1;
//     setIndex(newIndex);
//     if (newIndex < thumbStart) {
//       setThumbStart(Math.max(0, thumbStart - 1));
//     }
//   };

//   const handleNext = () => {
//     const newIndex = index === images.length - 1 ? 0 : index + 1;
//     setIndex(newIndex);
//     if (newIndex >= thumbStart + 5) {
//       setThumbStart(Math.min(images.length - 5, thumbStart + 1));
//     }
//   };
//   const visibleThumbnails = images.slice(thumbStart, thumbStart + 5);


//   const [count, setcount] = useState(1)
//   const incre = () => {
//     setcount(count + 1)
//   }
//   const decre = () => {
//     setcount(count - 1)
//   }
  
// return(
// <>

//   <div style={{ backgroundColor: '#FFF3E0',width:"100vw" }} >
//       <Container>
//         <Row className='py-5'>
//           <Col md={6}>
//             <div style={{ position: 'sticky', top: 50 }}>
//               <Carousel
//                 activeIndex={index}
//                 onSelect={handleSelect}
//                 controls={false}
//                 indicators={false}
//                 interval={null}
//               >
//                 {images.map((img, idx) => (
//                   <Carousel.Item key={idx}>
//                     <img
//                       className='d-block'
//                       style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}

//                       // style={{ height: '500px', width: '600px', objectFit: 'cover' }}
//                       src={img}
//                       alt={`Slide ${idx + 1}`}
//                     />
//                   </Carousel.Item>
//                 ))}
//               </Carousel>


//               <div className='d-block me-sm-inline' style={{ paddingTop: '20px', display: 'flex', flexDirection: 'row',textAlign: 'center'}} >
//                 <button
//                   onClick={handlePrev}
//                   style={{
//                     fontSize: '15px',
//                     cursor: 'pointer',
//                     padding: '10px 10px',
//                     borderRadius: '5px',
//                     border: '1px solid #ccc',
//                     background: '#fff'
//                   }}

//                 >
//                   <IoIosArrowBack />
//                 </button>
//                 {visibleThumbnails.map((img, idx) => {
//                   const actualIndex = thumbStart + idx;
//                   return (
//                     <img

//                       key={actualIndex}
//                       src={img}
//                       alt={`Thumbnail ${actualIndex + 1}`}
//                       onClick={() => setIndex(actualIndex)}
//                       style={{
//                         width: '90px',
//                         height: '100px',
//                         objectFit: 'cover',
//                         borderRadius: '8px',
//                         border: actualIndex === index ? '3px solid #B71C1C' : '1px solid #ccc',
//                         cursor: 'pointer',
//                         opacity: actualIndex === index ? 1 : 0.6,
//                         transition: 'opacity 0.3s, border 0.3s',
//                       }}
//                     />
//                   );
//                 })}
//                 <button
//                   onClick={handleNext}
//                   style={{
//                     fontSize: '15px',
//                     cursor: 'pointer',
//                     padding: '10px 10px',
//                     borderRadius: '5px',
//                     border: '1px solid #ccc',
//                     background: '#fff',
//                   }}
//                 >
//                   <IoIosArrowForward />
//                 </button>
//               </div>
//             </div>
//           </Col>


//           {/* <col -2> */}
//           <Col md={6}>

//             <div style={{ paddingLeft: 40, scrollbarWidth: 'none' }} >
//               <div>Dhaaga Life</div>
//               <p style={{ fontSize: ' 40px', fontWeight: 'lighter' }}>Large Tropical Coco <br />Half Moon Clutch Bag
//                 Regu</p>
//               <p>₹3,800.00 Sale price₹3,420.00 <span style={{ border: '1px solid', borderRadius: '15px', backgroundColor: 'red' }}>10% OFF</span><br />
//                 Taxes included.<span style={{ color: 'red', textDecoration: 'underline' }}> Shipping</span> calculated at checkout.</p>
//               <p>Quantity (4 in cart)</p>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <button onClick={decre}>-</button>
//                 <button>{count}</button>
//                 <button onClick={incre}>+</button>
//               </div>
//               <h1>You may also like</h1>
//               <div style={{
//                 border: '1px solid',
//                 width:'400px',
//                 borderRadius: '10px',
//                 display: 'flex',
//                 alignItems: 'center',
//               padding: '10px',
//                 gap: '12px',
//                 borderColor: 'pink',
//                 backgroundColor: '#FFF3E0'
//               }}>
//                 <span>
//                   <input type="checkbox" />
//                 </span>
//                 <span>
//                   <img
//                     src="https://cdn.shopify.com/s/files/1/0605/0558/7893/files/BestSellers_Square_0001_KC_05_Sagegreen_400x400.jpg?v=1731585181"
//                     style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                     alt="Sage Green Keycharm"
//                   />
//                 </span>
//                 <span style={{ display: 'flex', flexDirection: 'column' }}>
//                   Sage Green Keycharm
//                   <span>₹ 480.00 <span style={{ textDecoration: 'line-through' }}>₹ 600.00</span></span>
//                   <span style={{ textDecoration: 'underline' }}>Learn More</span>
//                 </span>
//               </div>
//               <div style={{
//                 border: '1px solid',
//                 borderRadius: '10px',
//                 display: 'flex',
//                 alignItems: 'center',
//                  width: '400px',
//                 padding: '10px',
//                 gap: '12px',
//                 borderColor: 'pink',
//                 backgroundColor: '#FFF3E0',
//                 marginTop: '10px'
//               }}>
//                 <span>
//                   <input type="checkbox" />
//                 </span>
//                 <span>
//                   <img src="https://cdn.shopify.com/s/files/1/0605/0558/7893/files/IMG_3840_400x400.jpg?v=1714683438"
//                     style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                     alt="Golden Glow Half Moon Clutch Bag"
//                   />
//                 </span>
//                 <span style={{ display: 'flex', flexDirection: 'column' }}>
//                   Golden Glow Half Moon Clutch Bag
//                   <span>Sale price₹ 2,520.00 <span style={{ textDecoration: 'line-through' }}>₹ 2,800.00</span></span>
//                   <span style={{ textDecoration: 'underline' }}>Learn More</span>
//                 </span>
//               </div>
//               <div className='d-md-block'>  
//              <button style={{  marginTop: '10px', borderRadius: '20px', borderColor: 'red', backgroundColor: '#FFF3E0',width:'400px' }}>Add to Cart</button><br/>
//               <button className='btn btn-dark' style={{ marginTop: '10px' ,width:'400px'}}>BUY NOW
//                 <FcGoogle style={{ borderRadius: '50px', border: '1px solid wihte', backgroundColor: 'white', width: '20px' }} className='ms-2' />
//                 <LiaAmazonPay style={{ borderRadius: '50px', border: '1px solid white', width: '20px', backgroundColor: 'white', color: 'blue' }} />
//                 <SiPaytm style={{ borderRadius: '50px', border: '1px solid white', width: '20px', backgroundColor: 'white', color: 'blue' }} />
//               </button>
//                </div>

//               <div>
//                 <p>Tropical Coco half moon Bag, a handcrafted gem inspired by<br /> the serene beauty of coconut trees and tropical vibes. This <br />
//                   exquisite clutch features intricate coconut tree motifs<br /> embroidered on natural jute, complemented by wooden beads <br />
//                   accent  exuding a laid-back, island charm.</p>

//                 <p>Meticulously crafted with attention to detail, the Tropical<br /> Coco half moon clutch bag is the perfect accessory to enhance<br />
//                   your beachside ensemble or casual summer outfit. Its earthy<br /> textures and tropical embellishments evoke a sense of<br />
//                   relaxation and adventure, making it an ideal companion for<br /> beach outings, seaside picnics, or any sun-soaked occasion.</p>

//                 <p>With a touch of island paradise and let the Tropical Coco Half<br /> Moon Clutch Bag bring a refreshing breeze to your look. It's<br />
//                   the quintessential accessory for capturing the essence of <br />tropical elegance with effortless flair.</p>

//                 <p>e | 12" (Smart phone, cards, keys, lipstick, ear pods will fit<br /> comfortably)</p>

//                 <p>Materials | Jute, Wool, hand-embroidery in premium threads, <br />wooden bead lining</p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     </>
//   );

// };

// export default ProductDetail;

// Images array is already defined above (omitted here for brevity)

function ProductDetail() {
  const { id } = useParams();
  const product = images.find((item) => item.id === parseInt(id));

  const [index, setIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const handlePrev = () => {
    const newIndex = index === 0 ? productImages.length - 1 : index - 1;
    setIndex(newIndex);
    if (newIndex < thumbStart) {
      setThumbStart(Math.max(0, thumbStart - 1));
    }
  };

  const handleNext = () => {
    const newIndex = index === productImages.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
    if (newIndex >= thumbStart + 5) {
      setThumbStart(Math.min(productImages.length - 5, thumbStart + 1));
    }
  };

  const productImages = [product.im1, product.im2, product.im3, product.im4, product.im5].filter(Boolean);
  const visibleThumbnails = productImages.slice(thumbStart, thumbStart + 5);
  const [count, setCount] = useState(1);

  return (
    <div style={{ backgroundColor: '#FFF3E0', width: "100vw" }}>
      <Container>
        <Row className="py-5">
          <Col md={6}>
            <div style={{ position: 'sticky', top: 50 }}>
              <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={null}>
                {productImages.map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <Image className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} src={img} alt={`Slide ${idx + 1}`} />
                  </Carousel.Item>
                ))}
              </Carousel>

              <div className="d-flex mt-3 justify-content-center">
                <Button onClick={handlePrev} variant="light" className="me-2">
                  <IoIosArrowBack />
                </Button>
                {visibleThumbnails.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    onClick={() => setIndex(thumbStart + idx)}
                    style={{ width: '90px', height: '100px', objectFit: 'cover', borderRadius: '8px', border: thumbStart + idx === index ? '3px solid #B71C1C' : '1px solid #ccc', cursor: 'pointer', margin: '0 5px' }}
                  />
                ))}
                <Button onClick={handleNext} variant="light" className="ms-2">
                  <IoIosArrowForward />
                </Button>
              </div>
            </div>
          </Col>

          <Col md={6} className="text-center text-sm-start">
            <div style={{ paddingLeft: 40 }}>
              <h6>Dhaaga Life</h6>
              <h3>{product.title}</h3>
              <p>
                {product.originalPrice} <span style={{ textDecoration: 'line-through' }}>{product.discountPrice}</span>
                <span style={{ border: '1px solid', borderRadius: '15px', backgroundColor: 'red', marginLeft: '10px' }}>{product.discount}</span>
              </p>
              <p>Taxes included. <span style={{ color: 'red', textDecoration: 'underline' }}>Shipping</span> calculated at checkout.</p>

              <p>Quantity</p>
              <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-2">
                <Button variant="outline-secondary" onClick={() => setCount(Math.max(1, count - 1))}>-</Button>
                <span>{count}</span>
                <Button variant="outline-secondary" onClick={() => setCount(count + 1)}>+</Button>
              </div>

              <div className="mt-4">
                <Button variant="outline-danger" className="w-100 rounded-pill">Add to Cart</Button>
                <Button variant="dark" className="w-100 rounded-pill mt-2">
                  BUY NOW
                  <FcGoogle className="ms-2" />
                  <LiaAmazonPay className="ms-2" />
                  <SiPaytm className="ms-2" />
                </Button>
              </div>

              <div className="mt-4">
                <p>{product.description}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;
