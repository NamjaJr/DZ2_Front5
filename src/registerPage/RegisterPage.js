import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import registerSlice, {getUser} from "../store/RegisterSlice";


function RegisterPage() {
    const dispatch = useDispatch();
    const preloader = useSelector(state => state.registerSlice.preloader);
    const [user, setUser] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const regName = /^[a-zA-Z]+$/;

    const addUser = (event) => {
        event.preventDefault();
        if (
            user.email.trim() === '' ||
            user.fullName.trim() === '' ||
            user.username.trim() === '' ||
            user.password.trim() === '' ||
            user.confirmPassword.trim() === ''
        ) {
            return alert("Заполните все поля");
        } else if (!regName.test(user.fullName)) {
            return alert("Имя должно состоять только из букв");
        } else if (user.password !== user.confirmPassword) {
            return alert('Пароли не совпадают');
        } else {
            dispatch(getUser(user));
        }
    };

    return (
        <Container>
            {preloader ? <Spinner animation="border" />
                : <Form onSubmit={addUser}>
                    <Row>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="fullName">
                                <Form.Control
                                    type="text"
                                    placeholder='full name'
                                    name='fullName'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="username">
                                <Form.Control
                                    type="text"
                                    placeholder='user name'
                                    name='username'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="email">
                                <Form.Control
                                    type="email"
                                    placeholder='Email'
                                    name='email'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="password">
                                <Form.Control
                                    type="password"
                                    placeholder='password'
                                    name='password'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="confirmPassword">
                                <Form.Control
                                    type="password"
                                    placeholder='confirm password'
                                    name='confirmPassword'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <Button type='submit' variant='success' className='w-100'>register</Button>
                        </Col>
                    </Row>
                </Form>
            }
        </Container>
    );
}

export default RegisterPage;