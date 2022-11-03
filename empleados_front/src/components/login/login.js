import React from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser,faKey } from '@fortawesome/free-solid-svg-icons';
//import APIHOST from '../../app.json';

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            pass: '',
        };
    }
    iniciarSesion(){
        axios.post(`http://localhost:3001/usuarios/login`, {
            usuario: this.state.usuario,
            pass:this.state.pass,
        })
        .then((response)=> {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <Container id="login-container">
                <Row>
                    <Col>
                        <Row>
                            <h2>Iniciar sesión</h2>
                        </Row>
                        <Row>
                            <Col sm="12" xs="12"
                                md={{ span: 4, offset: 4 }}
                                lg={{ span: 4, offset: 4 }}
                                xl={{ span: 4, offset: 4 }}>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className='Form-Label'><FontAwesomeIcon icon={faCircleUser} /> Usuario</Form.Label>
                                        <Form.Control onChange={(e => this.setState({ usuario: e.target.value }))} />
                                        {/*{
                                            this.state.usuario
                                        }*/}
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className='Form-Label'><FontAwesomeIcon icon={faKey} /> Contraseña</Form.Label>
                                        <Form.Control type="password" onChange={(e => this.setState({ pass: e.target.value }))} />
                                       {/* {
                                            this.state.pass
                                        }*/}
                                    </Form.Group>

                                    <Button variant="primary" onClick={()=>{this.iniciarSesion();}}>
                                        Iniciar sesión
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

