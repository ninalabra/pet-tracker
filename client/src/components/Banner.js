import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import bannerPic from '../images/5.png';

export default function Banner({BannerProp}) {
    const { title } = BannerProp;

    return(
        <Jumbotron className="banner">
            <Container>
                <Row>
                    <Col id="banner-title">
                        <Row>
                            <h1>{title}</h1>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Image
                        width={400}
                        height={400} 
                        src={bannerPic}
                        id="banner-pic"
                        />
                    </Col>    
                </Row>
            </Container>
        </Jumbotron>
    )
}