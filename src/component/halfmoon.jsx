import { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const images=[
    {
        id: 1,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_2840.jpg?v=1700727653&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/preview_images/6d9ecea679924768b5b0b16c173c583c.thumbnail.0000000000.jpg?v=1700727630&width=533",
        title: "Half Moon Handbag With Metal Handle",
        originalPrice:"₹4,500.00",
        discountPrice : "₹4,050.00",
        discount:"10% off",
    },
    {
        id: 2,
        default:"https://dhaagalife.com/cdn/shop/files/L_HM_04_Coco_05.jpg?v=1732562597&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/IMG_7012.jpg?v=1721222056&width=533",
        title: "Large Tropical Coco Half Moon Clutch Bag",
        originalPrice:"₹3,800.00",
        discountPrice : "₹3,610.00",
        discount:"5% off",
    },
    {
        id: 3,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3895.jpg?v=1714675904&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/20241025_170050_Large_590f475e-49b4-4890-b7e9-be8d4ab6bbc8.jpg?v=1743551938&width=533",
        title: "Large Sunflower Meadow Half Moon Clutch Bag",
        originalPrice:"₹3,800.00",
        discountPrice : "₹3,610.00",
        discount:"5% off",
    },
    {
        id: 4,
        default:"https://dhaagalife.com/cdn/shop/files/03.jpg?v=1714657416&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4887.jpg?v=1714657123&width=533",
        title: "Sea Shell Half Moon Bag",
        originalPrice:"₹3,600.00",
        discountPrice : "₹3,420.00",
        discount:"5% off",
    },
    {
        id: 5,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_18-PhotoRoom_7.jpg?v=1695885168&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/HMB_18-PhotoRoom_7_382d7ae6-36e2-4b35-b36e-0676e8052595.jpg?v=1706866192&width=533",
        title: "Lumina Luxe Half Moon Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
    },
    {
        id: 6,
        default:"https://dhaagalife.com/cdn/shop/products/IMG_8127.jpg?v=1670659365&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/HMB_10_IMG_8123-PhotoRoom_6.jpg?v=1706791784&width=533",
        title: "Cosmic Noir Half Moon Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
    },
    {
        id: 7,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3892.jpg?v=1714677536&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4924.jpg?v=1714677536&width=533",
        title: "Baby Breath Half Moon Clutch Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
    },
    {
        id: 8,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3867.jpg?v=1714683723&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4954.jpg?v=1714683723&width=533",
        title: "Yellow Bloom Half Moon Clutch Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.0010%",
        discount:"10% off",
    },
    {
        id: 9,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_0137-PhotoRoom_5.jpg?v=1695849652&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/IMG_0135_e427fb0b-0e28-4621-b690-3b2c618df8c3.heic?v=1695849679&width=533",
        title: "Pink Perennials Half Moon Clutch Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
    },
    {
        id: 10,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3872.jpg?v=1714683733&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_4934.jpg?v=1714683733&width=533",
        title: "1Brunnera Bloom Half Moon Clutch Bag",
        originalPrice:"₹3,200.00",
        discountPrice : "₹2,880.00",
        discount:"10% off",
    },
    {
        id: 11,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_06_4767.jpg?v=1717926811&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/IMG_3837.jpg?v=1717926811&width=533",
        title: "White Diamond Half Moon Clutch Bag",
        originalPrice:"₹3,000.00",
        discountPrice : "₹2,700.00",
        discount:"10% off",
    },
    {
        id: 12,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_07_02.png?v=1700659974&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/preview_images/8a32053aed7c427b8d9b63a565a49823.thumbnail.0000000000.jpg?v=1700659998&width=533",
        title: "Golden Diamond Half Moon Clutch Bag",
        originalPrice:"₹3,000.00",
        discountPrice : "₹2,700.00",
        discount:"10% off",
    },
    {
        id: 13,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_15_Dhaaga_13042024_4992.jpg?v=1714669864&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/HMB_15_Dhaaga_13042024_4997.jpg?v=1714669886&width=533",
        title: "Crimson Diamond Half Moon Clutch Bag",
        originalPrice:"₹3,000.00",
        discountPrice : "₹2,700.00",
        discount:"10% off",
    },
    {
        id: 14,
        default:"https://dhaagalife.com/cdn/shop/files/Screenshot2023-09-27at4.28.35PM.png?v=1695812493&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Screenshot2023-09-27at4.28.44PM.png?v=1695812494&width=533",
        title: "Misty Pink Gray Half Moon Bugle Beads Clutch Bag",
        originalPrice:"₹3,000.00",
        discountPrice : "₹2,700.00",
        discount:"10% off",
    },
    {
        id: 15,
        default:"https://dhaagalife.com/cdn/shop/files/HMB_13_IMG_3939.jpg?v=1706866470&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/preview_images/d370ab3d714244828301b4e1aca65e78.thumbnail.0000000000.jpg?v=1695844849&width=533",
        title: "Midnight Sparkle Black Half Moon Clutch Bag",
        originalPrice:"₹2,800.00",
        discountPrice : "₹2,520.00",
        discount:"10% off",
    },
    {
        id: 16,
        default:"https://dhaagalife.com/cdn/shop/files/IMG_3840.jpg?v=1714683438&width=990",
        hover : "https://dhaagalife.com/cdn/shop/files/Dhaaga_13042024_5049copy.jpg?v=1714683438&width=533",
        title: "Golden Glow Half Moon Clutch Bag",
        originalPrice:"₹2,800.00",
        discountPrice : "₹2,520.00",
        discount:"10% off",
    },

]
function Halfmoon() {
    const [image,setimage] = useState(null)
    const [selectimage , setselectimage] = useState(null)
    const [currentpage,setcurrentpage] = useState(1)

    const itemperpage = 8;
    const navigate = useNavigate();
    const totalpage = 2;

    const handleClick = (img) => {
        setselectimage(img)
        navigate(`/product/${img.id}`);
    };
    const handleNext = () => {
      if(currentpage<totalpage)setcurrentpage(prev=>prev+1)
    }
    const handlePrev = () => {
        if(currentpage>1)setcurrentpage(prev=>prev-1)
    }
const startindex = (currentpage - 1) * itemperpage
const endindex = startindex + itemperpage
const visiableImages = images.slice(startindex, endindex);

 return(
    <>
    <div>
        <div style={{
             display:'flex',
             flexWrap: 'wrap',
             gap: '10px',
             justifyContent:'start'
        }}>
            {visiableImages.map((data)=>(
                <div 
                   key={data.id}
                   style={{
                    width:'300px',
                    cursor:'pointer',
                    borderRadius: '10px',
                    margin:'auto'
                   }}
                   onClick={()=>handleClick(data)}
                   onMouseEnter={()=>setimage(data.id)}
                   onMouseLeave={()=>setimage(null)}>

                    <div className="position-relative">
                        <img 
                        src={image === data.id ? data.hover : data.default}
                        alt={`images-${data.id}`}
                        style={{
                            width:'300px',
                            height:'350px',
                            objectFit:'cover',
                            borderRadius:'10px',
                            padding :'10px'
                        }}/>
                        <div
                           style={{
                            position:'absolute',
                            backgroundColor:'tomato',
                            borderRadius:'10px',
                            color:"white",
                            bottom:'20px',
                            left:"20px",
                            padding: '10px'
                           }}
                        >{data.discount || "no discount"}</div>
                    </div>
                    <p style={{fontSize:'14px' ,margin:'4px 0 8px',fontWeight:'bold',textAlign:'center'}}>{data.title || "Product Title"}</p>
                    <p style={{fontSize:'14px',textDecoration:'line-through',margin: 0, textAlign:'center'}}>{data.originalPrice || "1,999"}</p>
                    <p style={{fontSize:'14px',margin:"2px 0 0",textAlign:'center'}}>{data.discountPrice || "1,999"}</p>
                    </div>
                    ))}
        </div>
                    <div style={{display:'flex',justifyContent:'center',gap:'20px',margin:'20px 0'}}>
                        <IoIosArrowDropleft 
                        onClick={currentpage === 1 ? null: handlePrev}
                        style={{cursor : currentpage === 1 ? "not-allowed" : "pointer"}}/>
                        <span>{currentpage} of {totalpage}</span>
                         <IoIosArrowDropright  
                          onClick={currentpage === totalpage? null : handleNext}
                          style={{cursor : currentpage === totalpage  ? "not-allowed" : "pointer"}}/>
                   </div>          
    </div>
 </>
);
};
export default Halfmoon;
