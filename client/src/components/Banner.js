import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import bannerPic from '../images/banner.svg';

export default function Banner({BannerProp}) {
    const { title, subheader } = BannerProp;

    return(
        <Jumbotron className="banner text-center">
            <Container>
                <Row>
                    <Col className="ml-5" id="banner-title" fluid>
                        <Row>
                            <h1>{title}</h1>
                        </Row>
                        <Row>
                            <h6>{subheader}</h6>
                        </Row>
                        <Row className="mt-3">
                            <Button>Learn More</Button>
                        </Row>
                    </Col>
                    <Col>
                        <Image 
                        src={bannerPic}
                        id="banner-pic"
                        />
                    </Col>    
                </Row>
            </Container>
        </Jumbotron>
    )
}