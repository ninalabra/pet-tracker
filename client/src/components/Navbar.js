import '../App.scss';
import { Nav, Navbar, Button, Image } from 'react-bootstrap';
import Logo from '../pet-pal-logo.png';


export default function NavBar() {
    return(
        <Navbar collapseOnSelect expand="lg" fixed="top"  bg="light" variant="light" className="navbar">
            <Navbar.Brand id="navbar-brand" href="#home">
                <Image
                    alt=""
                    src={Logo}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                />
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
                    <Button variant="outline-info" className="m-1" id="login-btn">Log In</Button>
                    <Button variant="outline-info" className="m-1">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

