import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    // let from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);


    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center'>pleagse login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="warning w-100 mx-auto" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2'>Are you first time? <Link to="/register" className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;