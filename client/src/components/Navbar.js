import '../App.scss';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import Logo from '../pet-pal-logo.png';


export default function NavBar() {
    return(
        <Navbar collapseOnSelect expand="lg" fixed="top"  bg="light" variant="light" className="navbar">
            <Navbar.Brand id="navbar-brand" href="#home">
                {/* <Image
                    alt=""
                    src={Logo}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                /> */}
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
                    <Button startIcon={<LoginIcon />} variant="contained" className="m-1 navbar-buttons" id="login-btn">Log In</Button>
                    <Button variant="contained" className="m-1 navbar-buttons">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

