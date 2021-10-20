import '../App.scss';
import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Button from '@mui/material/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginModal from './LoginModal';
// import Logo from '../pet-pal-logo.png';


export default function NavBar() {
    const [modalShow, setModalShow] = useState(false);

    return(
        <Navbar collapseOnSelect expand="lg" fixed="top"  bg="light" variant="light" className="navbar">
            <Navbar.Brand id="navbar-brand" href="#home">
                Pet Pal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Features</Nav.Link>
                    <Nav.Link>Pricing</Nav.Link>
                </Nav>
                <Nav id="navbar-btn">
                    <Button 
                    startIcon={<AccountCircleIcon />} 
                    variant="outlined" 
                    className="m-1 navbar-buttons" 
                    id="login-btn"
                    onClick={() => setModalShow(true)}
                    >
                            Log In
                    </Button>
                    <Button startIcon={<AssignmentIcon />} variant="outlined" className="m-1 navbar-buttons">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
            
            <LoginModal show={modalShow} onHide={() => setModalShow(false)}/>        
        </Navbar>

        
    )
}

