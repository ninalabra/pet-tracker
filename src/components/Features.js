import { Container, Row, Col, Image } from 'react-bootstrap';
// import Snake from '../images/snake-vector.svg';
// import Iguana from '../images/iguana-vector.svg';
import PetSupplies from '../images/pet-supplies.svg';
import Dog from '../images/dog-vector.svg';
import Vet from '../images/vet-vector.svg';
import '../App.scss';

export default function ProductFeatures() {
    return(
        <Container>
            <h2>Features</h2>
            <Row>
                <Col sm={12} lg={6}>
                    <Image src={Dog} alt="snek"/>
                </Col>
                <Col sm={12} lg={6} className="feature-description">
                    <h3>Keep track of your pet's activity and needs</h3>
                </Col>
             </Row>
            <Row>
                <Col sm={12} lg={6} className="feature-description-2">
                    <h3>Order pet supplies through our app</h3>
                </Col>
                <Col xs={{ order: 'first', col: 12 }} lg={{ order: 'last', col: 6}}>
                    <Image src={PetSupplies} alt="pet-supplies"/>
                </Col>
            </Row>
            <Row>
                <Col sm={12} lg={6}>
                    <Image src={Vet} alt="meow"/>
                </Col>
                <Col sm={12} lg={6} className="feature-description">
                    <h3>Chat-support with our licensed veterinarians</h3>
                </Col>

            </Row>
        </Container>
    )
}