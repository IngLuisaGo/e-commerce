import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/image/logo-image.png';
import './index.css';

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
                            <div className='cards'>Texto </div>
                        </Col>
                    </Row>
                </Container>
            </>

        );
    }
}

