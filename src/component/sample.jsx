import {Col, Container,Row} from'react-bootstrap'

function Sample () {
    return(
        <div style={{ backgroundColor: '#FFF3E0', padding: '40px 40px 100px' }}>
            <Container>
                <Row className="align-items-center g-0">
                    <Col md={6} className="text-center text-sm-start">
                    <p>Box Clutches</p>
                    <p>Garden of<br/>
                    ButterCups</p>
                    </Col>
                    <Col md={6} className=" p-0  text-sm-start">
                    <img
              src="https://dhaagalife.com/cdn/shop/files/IMG_7123.jpg?v=1659513130&width=750"
              alt="Garden of Buttercups"
              className="img-fluid w-100"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
        </Col>
       </Row>
       <Row>
        <Col md={6} className=" p-0 pt-sm-1 text-sm-start">
            <img
              src="https://dhaagalife.com/cdn/shop/files/BC_03.jpg?v=1658643554&width=750"
              alt="Garden of Buttercups Small"
              className="img-fluid"
              style={{
                maxHeight: '350px',
                width: '100%',
                objectFit: 'cover'
              }}
            />
        </Col>
           <Col md={6} className='text-center mt-5 mt-md-5 text-sm-start'>
           <p>Garden of Buttercups is available in 4 colours. Hand-embroidered details and <br/>
           embellishments with bugle add a subtle sheen with a magnet closing and an attachable<br/>
            metal sling chain.</p>
           </Col>
       </Row>
       <Row className='py-5'>
        <Col  md={6} className='text-center mt-5 text-sm-start'>
         <h1>Sun Bag</h1>
Handcrafted luxury from a jute thread to one of a kind full-moon handbag with a <br/>
shoulder strap and Cane handles. The embroidery and the colours feel like the warm<br/> 
sun on a chill day. It also has a pocket inside and a large beautiful bag charm with<br/> 
tassels and cowrie shells. This bag is a statement piece that is an exquisite addition to <br/>your bag collection. 
        </Col>
        <Col md={6} className='text-sm-center'>
        <img src="https://dhaagalife.com/cdn/shop/files/0000s_0003_DH_SUN_Aztec_01_lookbook02.jpg?v=1659530592&width=750"
        alt="ButterCups Garden"
        className='img-fluid'/>
        </Col>
       </Row>
            </Container>
        </div>
    )

}
export default Sample;