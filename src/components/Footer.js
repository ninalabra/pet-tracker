import { Nav, Container, Row, Col } from 'react-bootstrap';


export default function Footer() {
    return(
        <footer className="mt-5 footer">
           <Container fixed="bottom">  
               <Row className="dark">
                   <Col className="mt-3">
                        <div>
                            <h5>Stay Connected</h5>
                        </div>
                        <div>
                            <span>Sign up for our newsletter!</span>
                        </div>
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
                        <div>
                            <h5>Contact Us</h5>
                        </div>
                   </Col>
               </Row>
           </Container>
        </footer>
    )
}