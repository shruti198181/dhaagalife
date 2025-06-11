import {Container,Row, Col,Image} from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";



function Sample () {

    return(
        <>
        <Container>
            <Row style={{display:'flex', flexDirection :'row'
            }}>
                <Col md={4} sm={3} xs={6}>
                <img src="https://dhaagalife.com/cdn/shop/collections/Collection-photos_eoss_GARDEN-TOTE.gif?v=1713512797&width=535"
                    style={{objectFit:'contain',width:'100%',height:'600px'}}
                    fluid/>
                    <p className='text-center fs-3'>Tote Bags<FaArrowRight size={24} color="black" /></p>
                    
                </Col>
                <Col md={4} sm={3} xs={6}>
                <img src="https://dhaagalife.com/cdn/shop/collections/HM_Collection_01.jpg?v=1713512888&width=535"
                    style={{objectFit:'contain',width:'100%',height:'600px'}}
                    fluid/>
                     <p className='text-center fs-3'>Half Moons<FaArrowRight size={24} color="black" /></p>
                </Col>
                <Col md={4} sm={3} xs={6}>
                <img src="https://dhaagalife.com/cdn/shop/collections/KC_Collection_01.jpg?v=1713512858&width=535"
                    style={{objectFit:'contain',width:'100%',height:'600px'}}
                    fluid/>
                     <p className='text-center fs-3'>Key/Bags Charms<FaArrowRight size={24} color="black" /></p>
                </Col>
                
                <Col md={4} sm={3} xs={6}>
                <img src="https://dhaagalife.com/cdn/shop/collections/POT_Collection_01.jpg?v=1713512941&width=535"
                    style={{objectFit:'contain',width:'100%',height:'600px'}}
                    fluid/><br/>
                     <p className='text-center fs-3'>Potils<FaArrowRight size={24} color="black" /></p>
                </Col>
                <Col md={4} sm={3} xs={6}>
                <img src="https://dhaagalife.com/cdn/shop/collections/RS_Collection_01.jpg?v=1713513030&width=535"
                    style={{objectFit:'contain',width:'100%',height:'600px'}}
                    fluid/>
                     <p className='text-center fs-3'>Sling Bags<FaArrowRight size={24} color="black" /></p>
                </Col>
                <Col md={4} sm={3} xs={6}>
                <img src="https://dhaagalife.com/cdn/shop/collections/TB_Collection_01.jpg?v=1713513489&width=535"
                    style={{objectFit:'contain',width:'100%',height:'600px'}}
                    fluid/>
                     <p className='text-center fs-3'>Bracelets<FaArrowRight size={24} color="black" /></p>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Sample