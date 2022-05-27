import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/tools.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className=' bg-gray-500' sticky='top' variant="black">
                <Container className='mx-20'>
                    <Navbar.Brand as={Link} to="/"><img width='80px' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-lg  ">
                            <Nav.Link href="home#tools"><span className='text-white'>Tools</span></Nav.Link>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        </Nav>
                        <Nav className=''>
                            <Nav.Link className='text-lg  text-white' as={Link} to="myportfolio">MyportFolio</Nav.Link>
                            <Nav.Link className='text-lg  text-white' as={Link} to="blog">Blog</Nav.Link>
                            {
                                user && <Nav.Link className='text-lg  text-white ' as={Link} to="dashboard">Dashboard</Nav.Link>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none text-white text-lg' onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link className=' text-lg  text-white' as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;