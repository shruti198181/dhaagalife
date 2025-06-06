import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { RiContactsLine } from 'react-icons/ri';
import { BiShoppingBag } from 'react-icons/bi';

function MyNavbar() {
  return (
    <>
      <div style={{ backgroundColor: '#FFF3E0', width: '100vw' }}>
        <div className='text-sm-center' style={{ textAlign: 'center', backgroundColor: '#B71C1C', fontSize: '13px', color: 'white' }}>
          Hello there! Use code DHAAGALOVE for Extra 5% OFF on your first<br /> order ♡<br />
        </div>
        <Navbar expand="lg" style={{ height: '70px', width: '100%' }} className='py-5 py-lg-5'>
          <Container>
            <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://dhaagalife.com/cdn/shop/files/Olive-Logo_website.png?v=1660290719&width=270"
                alt="logo"
                style={{ height: '50px', objectFit: 'contain' }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>              
                  <Nav className="me-auto ms-5 col-md-8">
                  <Nav.Link as={NavLink} to="/launch">New Launches</Nav.Link>
                  <NavDropdown title="Bags" id="Bags-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/halfbag">Half Moons</NavDropdown.Item>
                    <NavDropdown.Item>Shoulder Bags </NavDropdown.Item>
                    <NavDropdown.Item>Tote Bags</NavDropdown.Item>
                    <NavDropdown.Item>Full Moons</NavDropdown.Item>
                    <NavDropdown.Item>Mini Half Moons</NavDropdown.Item>
                    <NavDropdown.Item>Vegan Suede Sling Bags</NavDropdown.Item>
                    <NavDropdown.Item>Potlis</NavDropdown.Item>
                    <NavDropdown.Item>Box Clutch</NavDropdown.Item>
                    <NavDropdown.Item>Flap Bags</NavDropdown.Item>
                    <NavDropdown.Item>All Bags</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Accessories" id="Accessories-nav-dropdown">
                    <NavDropdown.Item>Bracelets</NavDropdown.Item>
                    <NavDropdown.Item>Charms</NavDropdown.Item>
                    <NavDropdown.Item>Necklaces</NavDropdown.Item>
                    <NavDropdown.Item>All Accessories</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>Wedding Gifting</Nav.Link>
                  <Nav.Link>One of a kind</Nav.Link>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/* Icons */}
            <div className="d-flex align-items-center gap-3 ms-auto" style={{ fontSize: '25px', fontWeight: 'lighter' }}>
              <FiSearch />
              <RiContactsLine />
              <BiShoppingBag />
            </div>

          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default MyNavbar;
