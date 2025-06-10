import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function Mynav() {
  // Store index of hovered button, or null if none
  const [hoverIndex, setHoverIndex] = useState(null);

  const navitems = [
    'Accessories',
    'All',
    'Bags',
    'Bag Seller',
    'Box Chain Necklce',
    'Box Clutch',
    'Breclets',
    'Bucket Bags',
    'Crystel Solo Brcelets',
    'Featured Accerries',
  ];
  return (
    <div style={{ backgroundColor: '#FFF3E0',width:'100vw' }}>
      <Container>
        
        <div
          className="d-flex flex-nowrap pb-5"
          style={{ overflow: 'auto', gap: '10px', scrollbarWidth: 'none' }}
        >
          {navitems.map((item, index) => (
            <a
              href="#"
              key={index}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="outline-danger"
                style={{
                  backgroundColor: '#FFF3E0',
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: hoverIndex === index ? 'red' : 'black',
                  color: 'black',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item}
              </Button>
            </a>
          ))}
        </div> 
      </Container>
    </div>
  );
}

export default Mynav;
