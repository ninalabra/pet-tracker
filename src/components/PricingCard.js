import  { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button } from 'react-bootstrap';
import '../App.scss';
import NumberFormat from 'react-number-format';

export default function PricingCards() {

    return (
        <Container className="pricing-section">
            <Row>
                <Col className="mb-2">  
                    <h1>Plans</h1>
                </Col>
            </Row>
            <Row className="pricing-cards d-flex" xs={1} sm={1} md={2} l={3} lg={3}>
                <Col>
                    <Card style={{ width: '18rem', height: '25rem' }} className="pricing-card">
                        <Card.Body className="basic-card" >
                            <h2>Basic</h2>
                            <Card.Text>
                            Free
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Up to 3 pets</ListGroupItem>
                            <ListGroupItem>Track feeding, exercise and grooming schedule</ListGroupItem>
                            <ListGroupItem>Access to tips and advice</ListGroupItem>
                        </ListGroup>
                        <Card.Body className="card-footer">
                            <Button className="btn btn-block" href="#">Choose</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', height: '25rem' }} className="pricing-card">
                        <Card.Body>
                            <h2>Hobbyist</h2>
                            <Card.Text>
                                <NumberFormat              
                                    value={99}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix="₱"
                                    suffix=" / month"
                                />
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Up to 10 pets</ListGroupItem>
                            <ListGroupItem>Track feeding, exercise and grooming schedule</ListGroupItem>
                            <ListGroupItem>Chat-support with licensed veterinarians</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button className="btn btn-block" href="#">Choose</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', height: '25rem' }} className="pricing-card">
                        <Card.Body>
                            <h2>Breeder</h2>
                            <Card.Text>
                                <NumberFormat              
                                    value={150}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix="₱"
                                    suffix=" / month"
                                />
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Unlimited pets</ListGroupItem>
                            <ListGroupItem>Track feeding, exercise, grooming schedule, and breeding projects</ListGroupItem>
                            <ListGroupItem>Chat-support with licensed veterinarians</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button className="btn btn-block" href="#">Choose</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}