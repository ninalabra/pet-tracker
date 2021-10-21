import '../App.scss';
import { Modal, Form, Button, Row, Col, Container, Nav } from 'react-bootstrap';

export default function LoginModal(props) {
    return(
        <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header className="text-center" closeButton>
                <Container>
                    <Modal.Title className="ml-4" id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </Container>
            </Modal.Header>
            <Modal.Body>
                <Form className="mb-1">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                        <Nav.Link id="login-modal-forgotpass">Forgot password?</Nav.Link>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Row className="btn-block">
                    <Button className="btn-block">Log In</Button>
                </Row>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center text-center">
                            <Nav.Link id="login-modal-register-opt">Don't have an account? Register here.</Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </Modal.Footer>
    </Modal>
    )
}