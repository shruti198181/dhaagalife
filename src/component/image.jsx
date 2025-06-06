import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useState }  from "react";
import React from 'react'

const images = [
    {
        id:1,
        default :"https://dhaagalife.com/cdn/shop/files/L_HM_04_Coco_05.jpg?v=1732562597&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/IMG_7012.jpg?v=1721222056&width=533",
        title: "Large Tropical Coco Half Moon Clutch Bag",
        originalprice:'₹3800.00',
        discountPrice:'₹3610.00',
        discount : '5% off',   
    },
    {
        id:2,
        default :"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5179copy.jpg?v=1715867251&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/IMG_3960copy.jpg?v=1715867730&width=533",
        title:"Hand Painted Terra Sling Bag",
        originalprice:'₹4,000.00',
        discountPrice:'₹3,800.00',
        discount : 'sold out',   
    },
    {
        id:3,
        default:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4768.jpg?v=1715676583&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4774.jpg?v=1715676583&width=533",
        title: "Bee and The Wildflowers Denim Round Sling Bag",
         originalprice:'₹3,500.00',
        discountPrice:'₹3,150.00',
        discount : '10% off',     
    },
     {
        id:4,
        default:"https://dhaagalife.com/cdn/shop/files/RS_17_GardenSling_Dhaaga_13042024_4757.jpg?v=1714931089&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/RS_17_GardenSling_Dhaaga_13042024_4751copy.jpg?v=1714931089&width=533",
        title: "Bee and The Wildflowers Round Sling Bag",
         originalprice:'₹3,500.00',
        discountPrice:'₹3,150.00',
        discount : '10% off',   
     },
{
        id:5,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3983copy.jpg?v=1745833877&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5260.jpg?v=1745833877&width=533",
        title: "Hand-painted Sunflower Tote Bag",
         originalprice:'₹7,000.00',
        discountPrice:'₹6,650.00',
        discount : 'sold out',   
     },
     {
        id:6,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3840.jpg?v=1714683438&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5049copy.jpg?v=1714683438&width=533",
        title : "Golden Glow Half Moon Clutch Bag",
         originalprice:'₹2,800.00',
        discountPrice:'₹2,520.00',
        discount : '10% off',   
     },
{
        id:7,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3879.jpg?v=1714681205&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4987copy.jpg?v=1714681403&width=533",
        title:"Silver Starlight Half Moon Clutch Bag",
         originalprice:'₹2,800.00',
        discountPrice:'₹2,520.00',
        discount : '10% off',   
     },
{
        id:8,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3892.jpg?v=1714677536&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4924.jpg?v=1714677536&width=533",
        title: "Baby Breathe Half Moon Clutch Bag",
         originalprice:'₹3,200.00',
        discountPrice:'₹2,880.00',
        discount : '10% off',   
     },
{
        id:9,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3895.jpg?v=1714675904&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/20241025_170050_Large_590f475e-49b4-4890-b7e9-be8d4ab6bbc8.jpg?v=1743551938&width=533",
        title: "Large Sunflower Meadow Half Moon Clutch Bag", 
        originalprice:'₹3,800.00',
        discountPrice:'₹3,610.00',
        discount : '5% off',   
     },
{
        id:10,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3867.jpg?v=1714683723&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4954.jpg?v=1714683723&width=533",
        title: "Yellow Bloom Half Moon Clutch Bag",
         originalprice:'₹3,200.00',
        discountPrice:'₹2,880.00',
        discount : '10% off',   
     },
{
        id:11,
        default:"https://dhaagalife.com/cdn/shop/files/03.jpg?v=1714657416&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4887.jpg?v=1714657123&width=533",
        title:"Sea Shell Half Moon Clutch Bag", 
        originalprice:'₹3,600.00',
        discountPrice:'₹3,420.00',
        discount : '5% off',   
     },
{
        id:12,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_6936.jpg?v=1714938235&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4824copy.jpg?v=1714938204&width=533",
        title:"Garden Denim Vegan Suede Sling Bag", 
        originalprice:'₹3,500.00',
        discountPrice:'₹3,150.00',
        discount : '10% off',   
     },

{
        id:13,
        default:"https://dhaagalife.com/cdn/shop/files/232098B0-9268-4BB7-BC9B-BC36E57DB700.jpg?v=1714931257&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4739copy.jpg?v=1714931226&width=533",
        title: "Yellow Mellow Round Sling Bag",
         originalprice:'₹3,200.00',
        discountPrice:'₹2,880.00',
        discount : '10% off',   
     },
{
        id:14,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_0137-PhotoRoom_5.jpg?v=1695849652&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/IMG_0135_e427fb0b-0e28-4621-b690-3b2c618df8c3.heic?v=1695849679&width=533",
        title:"Pink Perennials Half Moon Clutch Bag",
         originalprice:'₹3,200.00',
        discountPrice:'₹2,880.00',
        discount : '10% off',   
     },
{
        id:15,
        default:"https://dhaagalife.com/cdn/shop/files/C3441.jpg?v=1745900759&width=990",
        hover:"https://dhaagalife.com/cdn/shop/files/C3440-3.jpg?v=1745900759&width=533",
        title:"Rosette Baguette Bag",
         originalprice:'₹3,600',
     },


]

function ImageCarousel () {
  const [hoverdid,sethoverdid] = useState(null)
  const [selectImage,setselectImage] =useState(null)
  const[currentPAge,setcurrentPage] = useState(1)

  const itemPerPage = 15;
  const totalPage = 2;

   const handleClick = (image) => {
    setselectImage(image);
   };

   const handleNext = () => {
    if(currentPAge < totalPage) setcurrentPage(prev =>prev + 1)
   };
  const handlePrev = () => {
    if(currentPAge > 1) setcurrentPage(prev=>prev-1)
  };
let visibleImages = [];
if(currentPAge===1) {
  visibleImages = images.slice(0,12)
}else {
  visibleImages = images.slice(12)
}
  
return(
  <>
  <div>
    <div style={{
      display:'flex',
      flexWrap : 'wrap',
      gap:'10px',
      justifyContent:'start'
    }}>
      {visibleImages.map((img)=> (
        <div 
         key={img.id}
         style={{
          width: '300px',
          cursor : 'pointer',
          textAlign: 'center',
          borderRadius:'8px',
          margin:'auto'
         }}
         onClick={()=>handleClick(img)}
         onMouseEnter={()=>sethoverdid(img.id)}
         onMouseLeave={()=>sethoverdid(null)}
        >
          <div className="position-relative">
          <img 
              src={hoverdid === img.id ? img.hover: img.default}
              alt={`image-{img.id}`}
              style={{
                 width: "300px",
                height: "350px",
               objectFit: "cover",
               borderRadius: "8px",
            
              }}/>
              <div style={{position:'absolute',
                           bottom:'10px',
                          left:"10px", 
                          backgroundColor:"red", 
                          borderRadius:"8px",
                          color:"white",
                          padding:"5px"}}>{img.discount || "no discount"}</div>
              </div>
           <p style={{fontSize:'14px',fontWeight:'bold',margin:'8px 0 4px'}}>
            {img.title || "Product Title"}
           </p>
           <p style={{
            fontSize:'14px',
            fontWeight:'bold',
            textDecoration :'line-through',
            margin : '0',
            color: 'palevioletred'
           }}>
            {img.originalprice || "1,999"}
           </p>
         <p style={{
           fontSize:'14px',
           fontWeight:'bold',
           margin: '2px 0 0',
           color: 'palevioletred'
         }}>
            {img.discountPrice || "1,999"}
         </p>
        </div>
      ))}
    </div>

    <div style={{display:'flex',justifyContent: 'center',gap:'20px',margin:'20px 0'}}>
          <IoIosArrowDropleft 
  onClick={currentPAge === 1 ? null : handlePrev} 
  style={{ cursor: currentPAge === 1 ? 'not-allowed' : 'pointer' }} 
/>

           <span>{currentPAge} of {totalPage}</span>
             <IoIosArrowDropright  
  onClick={currentPAge === 1 ? null : handleNext} 
  style={{ cursor: currentPAge === 1 ? 'not-allowed' : 'pointer' }} 
/>

    </div>
      {/* {selectImage && (      
        <div style= {{margin:'auto',textAlign:'center'}}>
         <img
             src={selectImage.default}
             alt="Selected"             
             style={{ width: "400px", height: "600px", objectFit: "cover", borderRadius: "12px" }}
           />
                      <p style={{ marginTop: "10px", fontSize: "16px" }}>
            {selectImage.description || "No description available"}
          </p>
      </div>
    )} */}
  </div>
  </>
)
}
export default ImageCarousel;


