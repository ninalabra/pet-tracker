import { Nav, Container, Row, Col } from 'react-bootstrap';


export default function Footer() {
    return( 
        <footer className="mt-5 footer">
           <Container fixed="bottom" fluid>  
               <Row className="dark">
                   <Col className="mt-3">
                        <section>
                            <h5>Stay Connected</h5>
                        </section>
                        <section>
                            <span>Sign up for our newsletter!</span>
                        </section>
                   </Col>
                   <Col className="mt-3">
                        <section>
                            <h5>Navigate</h5>
                        </section>
                        <section>
                            <Row>
                                <Col>
                                    <Nav.Link>Home</Nav.Link>
                                    <Nav.Link>Pricing</Nav.Link>
                                    <Nav.Link>Features</Nav.Link>
                                </Col>
                                <Col>
                                    <Nav.Link>About Us</Nav.Link>
                                    <Nav.Link>Contact Us</Nav.Link>
                                    <Nav.Link>Support</Nav.Link>
                                </Col>
                            </Row>
                        </section>
                        
                   </Col>
                   <Col className="mt-3">
                        <section>
                            <h5>Contact Us</h5>
                        </section>
                        <Container className="text-center">
                            <Row>
                                <h6>Hello, this is our address</h6>
                            </Row>
                            <Row>
                                <h6>This is our email.</h6>
                            </Row>
                            <Row>
                                <p>This is our phone number.</p>
                            </Row>
                        </Container>
                   </Col>
               </Row>
               <footer className="p-2 pt-5">
                    <p className="text-center"><sm>&copy; Copyright 2021</sm></p>
               </footer>
           </Container>
        </footer>
    )
}