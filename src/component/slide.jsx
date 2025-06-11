import { CarouselCaption, Container } from "react-bootstrap";
import { Carousel, Image } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {Button } from 'react-bootstrap'
import images1  from "./images1.jpg"
import images2  from "./images2.jpg"
import images3  from "./images3.jpg"
import images4  from "./images4.jpg"
import images5  from "./images5.jpg"

function Slider () {

return (
  <>
   <div style={{ backgroundColor: '#FFF3E0', width:'100vw'  }} >
        <Container>
            <Carousel indicators={true} 
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
             <Carousel.Item >

                         <Image 
                           src={images1}
                           alt="Images 1"
                           fluid style={{objectFit:'cover', width:'100vw',height:'600px'}}/>
                            </Carousel.Item>

          <Carousel.Item>
                        <Image 
                        src={images2}
                        alt="Images 2"
                        fluid style={{objectFit:'cover', width:'100vw' ,height:'600px'}}/>
 </Carousel.Item>


      <Carousel.Item style={{ position: "relative" }}>

                        <Image 
                        src={images3}
                        alt="Images 3" 
                        fluid style={{objectFit:'cover', width:'100vw' ,height:'600px'}}/>
                        <Carousel.Caption style={{right:'10px',bottom:'10px',fontSize:'30px',position:'absolute',padding:'10px 8px'}}> Tote Bags</Carousel.Caption>
 </Carousel.Item>

<Carousel.Item>

 <Image 
                        src={images4}
                        alt="Images 4"
                        fluid style={{objectFit:'cover', width:'100vw' ,height:'600px'}}/>
 </Carousel.Item>

<Carousel.Item>

 <Image 
                        src={images5}
                        alt=" Images 5"
                        fluid style={{objectFit:'cover', width:'100vw' ,height:'600px'}}/>

                </Carousel.Item>
                </Carousel>
                </Container>
                </div>
  </>
)
}
export default Slider;