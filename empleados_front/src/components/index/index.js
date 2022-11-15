import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/image/logo-image.png';
import bolsos from '../../assets/image/bolsos.jpg';
import './index.css';
import Card from 'react-bootstrap/Card';
export default class inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Container className='bodyBack'>
                    <Row>
                        <Col className='title'> <h2>Stylo Lenanie</h2> </Col>
                    </Row>
                    <Row style={{ marginTop: 25 }}>
                        <Col >
                            <div className='cards'>
                                <img src={logo} className='image-size'></img>
                            </div>
                        </Col>
                        <Col >
                            <Row>
                                <Col className='title'> <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={bolsos} className ='image-carousel'/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card> </Col>
                                <Col className='title'> <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={bolsos} className ='image-carousel' />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card> </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>

        );
    }
}

