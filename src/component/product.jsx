import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LuLeaf } from "react-icons/lu";

function Product () {

const data = [
  { 
     id : 1,
    name: 'Large Sunflower Meadow Half Moon Clutch Bag',
    image : 'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/IMG_3895_240x240.jpg?v=1714675904',
    price: '₹ 3,420.00'
},
{
    id: 2,
    name : 'Earthy Shell Coin Keycharm',
    image: 'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/KC_04_earthy_240x240.jpg?v=1706794648',
    price: '₹ 320.00'
},
{
    id:3,
    name:'Sunset Tassel Bracelet',
    image:'https://cdn.shopify.com/s/files/1/0605/0558/7893/files/TB_07_240x240.jpg?v=1744877773',
    price: '₹ 480.00'
  },
];

const [count,setcount] = useState([]);
const handleCheck = (id) =>{
  if(count.includes(id)) {
    setcount(count.filter((item)=>item!==id));
  } else {
    setcount([...count,id]);
  }
};

const totalprice = count.reduce((total,id) =>{
  const items =data.find((d)=>d.id===id)
  if(!items)
    return total;
  const prices = parseFloat(items.price.replace(/[₹,]/g, ''));
  return total + prices;
},0);

return (
<div style={{ backgroundColor: '#FFF3E0' }}>
  <Container fluid="md">
    <div style={{width:'100vw'}}>    <h3 className=" py-5">Frequently Bought Together</h3>
    <Row className="border border-danger-subtle rounded p-3 g-4 justify-content-center">
      {data.map((card,index)=>(
        <Col key={card.id} xs={12} sm={6} md={4} lg={3} className="text-center">
          <Form.Check 
            type="checkbox"
            checked={count.includes(card.id)}
            onChange={()=>handleCheck(card.id)}
            className="mb-2"
          />
          <Card className="mx-auto" style={{ maxWidth: '250px',minHeight:'300px' }}>
            <Card.Img
              src={card.image}
              style={{width:'130px', height: '150px', objectFit :'contain', margin : '20px auto 10px'}}
            />
            <Card.Body>
              <Card.Title style={{fontSize:'16px'}}>{card.name}</Card.Title>
              <Card.Text><strong>{card.price}</strong></Card.Text>
            </Card.Body>
          </Card>
          {index < data.length - 1 && (
            <div style={{ fontSize: '30px', margin: '10px 0' }}>+</div>
          )}
        </Col>
      ))}
      <Col xs={6} className="text-center mt-4">
  <h5 className="fw-bold">Total Price: ₹ {totalprice.toLocaleString('en-IN')}</h5>
  <button className="btn btn-danger mt-2 px-4 py-2">Add To Cart</button>
</Col>

    </Row>

    <p className="text-center mt-5" style={{fontSize: '30px'}}>Customer Reviews</p>
    <div className="row justify-content-center text-center gap-3 flex-column flex-md-row">
      <div className="col-auto d-flex flex-column align-items-center">
        <p style={{ fontSize: '20px', color: 'red', margin: 0 }}>
          <LuLeaf />
          <LuLeaf />
          <LuLeaf />
          <LuLeaf />
          <LuLeaf />
        </p>
        <span style={{ display: 'block', fontWeight: 'lighter' }}>
          Be the first to write a review
        </span>
      </div>
      <div className="col-auto">
        <button
          className="btn btn-danger mt-3 mt-md-0"
          style={{ height: '50px', border: 'none', borderRadius: '5px' }}
        >
          Write a review
        </button>
      </div>
    </div>
    </div>

  </Container>
</div>
);
}

export default Product;
