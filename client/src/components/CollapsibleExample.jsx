import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Olog } from './Olog';
import { Reg } from './Reg';
import { useNavigate } from 'react-router-dom';

function CollapsibleExample({ login, Setlogin }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Use the navigate function to redirect to "/login"
    console.log("hello");

  };

  const handleRegClick = () => {
    // Render the Reg component when the Reg link is clicked
    // If you want to navigate to "/reg", use navigate("/reg")
    return <Reg />;
  };

  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">ChatKaro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Add your other Nav items here if needed */}
          </Nav>
          <Nav>
           
              <Nav.Link href="/login">Login</Nav.Link>
          
      
              <Nav.Link eventKey={2} href="/reg">
                Reg
              </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default CollapsibleExample;
