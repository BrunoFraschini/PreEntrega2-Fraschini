import musiccity from "../../assets/img/musiccity.jpg"
import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function NavBar () {
    return (
        <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/"><Navbar.Brand href="#home">MusicCity</Navbar.Brand></Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
           
            <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instrumentos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Musica
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
          
          </Nav>
        </Navbar.Collapse>
      </Container>

      <CartWidget/>
    </Navbar>    
    </>
        
    )
}

export default NavBar